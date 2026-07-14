/* Ambient layer — poster-first world video, progressive chapter media, and
   the pinned #core narrative. No WebGL. Disabled media modes never receive a
   network-bearing src. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var conn = navigator.connection || navigator.webkitConnection || navigator.mozConnection || {};
  var lowPower = window.matchMedia('(max-width: 768px)').matches
    || conn.saveData === true
    || /(^|\s)(slow-2g|2g)$/.test(conn.effectiveType || '');
  var mediaDisabled = reduce || lowPower;

  function makeAsset(id) {
    var el = document.getElementById(id);
    if (!el) return null;
    return {
      id: id,
      el: el,
      src: el.getAttribute('data-src') || '',
      state: 'idle',
      waiters: []
    };
  }

  function failAsset(asset) {
    if (!asset) return;
    asset.state = 'error';
    asset.waiters.length = 0;
  }

  function activateAsset(asset) {
    if (mediaDisabled || !asset || !asset.src || asset.state !== 'idle') return;
    asset.state = 'loading';
    asset.el.addEventListener('canplay', function () {
      if (asset.state === 'error') return;
      asset.state = 'ready';
      var waiters = asset.waiters.slice();
      asset.waiters.length = 0;
      waiters.forEach(function (waiter) { waiter(); });
    }, { once: true });
    asset.el.addEventListener('error', function () { handleAssetError(asset); }, { once: true });
    asset.el.src = asset.src;
    try { asset.el.load(); } catch (e) { handleAssetError(asset); }
  }

  function whenReady(asset, callback) {
    if (!asset || asset.state === 'error') return;
    if (asset.state === 'ready' || asset.el.readyState >= 3) {
      asset.state = 'ready';
      callback();
      return;
    }
    asset.waiters.push(callback);
  }

  function safePlay(el, onReject) {
    try {
      var promise = el.play();
      if (promise && promise.catch) promise.catch(onReject);
    } catch (error) {
      onReject(error);
    }
  }

  var world = makeAsset('world-video');
  var worldReady = false;
  var worldFailed = false;
  var resumeWorld = false;

  function revealWorld() {
    if (!world || worldFailed || document.hidden) return;
    document.body.classList.add('video-on');
    safePlay(world.el, function () {
      worldFailed = true;
      document.body.classList.remove('video-on');
      try { world.el.pause(); } catch (e) {}
    });
  }

  if (!mediaDisabled && world) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        whenReady(world, function () {
          worldReady = true;
          revealWorld();
        });
        activateAsset(world);
      });
    });
  }

  var section = document.getElementById('core');
  if (!section) return;
  var lines = Array.prototype.slice.call(section.querySelectorAll('.core-line'));
  var pct = document.getElementById('core-pct');
  var bands = [[0.04, 0.20, 0.40, 0.46], [0.46, 0.60, 0.74, 0.80], [0.80, 0.90, 1.01, 1.06]];

  function setLines(progress) {
    lines.forEach(function (el, index) {
      var band = bands[index];
      if (!band) return;
      var opacity = 0;
      var y = 24;
      if (progress >= band[0] && progress < band[1]) {
        var enter = (progress - band[0]) / (band[1] - band[0]);
        opacity = enter;
        y = 24 * (1 - enter);
      } else if (progress >= band[1] && progress < band[2]) {
        opacity = 1;
        y = 0;
      } else if (progress >= band[2] && progress < band[3]) {
        var leave = (progress - band[2]) / (band[3] - band[2]);
        opacity = 1 - leave;
        y = -16 * leave;
      }
      el.style.opacity = opacity;
      el.style.transform = 'translateY(' + y.toFixed(1) + 'px)';
    });
  }

  if (reduce) {
    lines.forEach(function (el) {
      el.style.opacity = 1;
      el.style.transform = 'none';
      el.style.position = 'relative';
    });
    return;
  }

  var chapterLayer = document.getElementById('chapter-layer');
  var FWD = [null, makeAsset('ch-t1'), makeAsset('ch-t2'), makeAsset('ch-t3')];
  var REV = [null, makeAsset('ch-t1r'), makeAsset('ch-t2r'), makeAsset('ch-t3r')];
  var allChapterAssets = FWD.concat(REV).filter(Boolean);
  var currentChapter = 0;
  var requestedChapter = 0;
  var requestGeneration = 0;
  var activePlayback = null;
  var pendingRequest = null;
  var heldElement = null;
  var resumeChapter = false;
  var pairScheduled = {};
  var laterPairsWatched = false;

  function handleAssetError(asset) {
    if (!asset) return;
    if (activePlayback && activePlayback.asset === asset) {
      activePlayback.finish(false);
      return;
    }
    failAsset(asset);
    if (pendingRequest
      && pendingRequest.asset === asset
      && pendingRequest.token === requestGeneration
      && pendingRequest.target === requestedChapter) {
      pendingRequest = null;
      requestedChapter = currentChapter;
      requestGeneration++;
    }
  }

  function activatePair(number) {
    activateAsset(FWD[number]);
    activateAsset(REV[number]);
  }

  function schedulePair(number) {
    if (mediaDisabled || pairScheduled[number]) return;
    pairScheduled[number] = true;
    var loadPair = function () { activatePair(number); };
    if ('requestIdleCallback' in window) requestIdleCallback(loadPair, { timeout: 750 });
    else setTimeout(loadPair, 250);
  }

  function showOnly(element) {
    allChapterAssets.forEach(function (asset) { asset.el.classList.remove('active'); });
    if (element) element.classList.add('active');
  }

  function stopActivePlayback() {
    if (!activePlayback) return;
    activePlayback.asset.el.removeEventListener('ended', activePlayback.onEnded);
    try { activePlayback.asset.el.pause(); } catch (e) {}
    heldElement = activePlayback.asset.el;
    activePlayback = null;
    resumeChapter = false;
  }

  function beginPlayback(asset, token, target, holdEnd) {
    if (!asset || asset.state === 'error' || token !== requestGeneration || target !== requestedChapter) return;
    if (pendingRequest && pendingRequest.asset === asset && pendingRequest.token === token) pendingRequest = null;
    stopActivePlayback();
    var previousHeld = heldElement;
    var playback = {
      asset: asset,
      token: token,
      target: target,
      holdEnd: holdEnd,
      previousHeld: previousHeld,
      finish: null,
      onEnded: null
    };

    function finish(success) {
      if (activePlayback !== playback) return;
      asset.el.removeEventListener('ended', playback.onEnded);
      try { asset.el.pause(); } catch (e) {}
      activePlayback = null;
      resumeChapter = false;
      if (!success) {
        failAsset(asset);
        pendingRequest = null;
        requestedChapter = currentChapter;
        requestGeneration++;
        heldElement = previousHeld;
        showOnly(previousHeld);
        document.body.classList.toggle('chapter-on', Boolean(previousHeld));
        return;
      }
      currentChapter = target;
      if (holdEnd) {
        heldElement = asset.el;
        showOnly(asset.el);
        document.body.classList.add('chapter-on');
      } else {
        heldElement = null;
        showOnly(null);
        document.body.classList.remove('chapter-on');
      }
    }

    playback.finish = finish;
    playback.onEnded = function () { finish(true); };
    activePlayback = playback;
    showOnly(asset.el);
    try { asset.el.currentTime = 0; } catch (e) {}
    asset.el.addEventListener('ended', playback.onEnded);
    document.body.classList.add('chapter-on');
    safePlay(asset.el, function () { finish(false); });
  }

  function requestChapter(target) {
    if (!chapterLayer || target === requestedChapter) return;
    var previous = requestedChapter;
    requestedChapter = target;
    requestGeneration++;
    var token = requestGeneration;

    if (mediaDisabled) {
      currentChapter = target;
      return;
    }

    var movingForward = target > previous;
    var boundary = movingForward ? target : previous;
    var asset = movingForward ? FWD[boundary] : REV[boundary];
    if (!asset || asset.state === 'error') {
      pendingRequest = null;
      stopActivePlayback();
      requestedChapter = currentChapter;
      requestGeneration++;
      return;
    }
    pendingRequest = { asset: asset, token: token, target: target };
    activatePair(boundary);
    stopActivePlayback();
    whenReady(asset, function () {
      if (token !== requestGeneration || target !== requestedChapter) return;
      beginPlayback(asset, token, target, target > 0);
    });
  }

  function armFirstPair() {
    if (mediaDisabled) return;
    var armed = false;
    var initialScrollY = window.scrollY;
    var scrollRaf = 0;
    var gapObserver = null;

    function cleanup() {
      window.removeEventListener('wheel', trigger);
      window.removeEventListener('touchstart', trigger);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('scroll', onScroll);
      if (gapObserver) gapObserver.disconnect();
    }

    function trigger() {
      if (armed) return;
      armed = true;
      cleanup();
      schedulePair(1);
    }

    function onKey(event) {
      if (['ArrowDown','ArrowUp','PageDown','PageUp','Home','End',' '].indexOf(event.key) !== -1) trigger();
    }

    function onScroll() {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(function () {
        scrollRaf = 0;
        if (Math.abs(window.scrollY - initialScrollY) >= 8) trigger();
      });
    }

    window.addEventListener('wheel', trigger, { once: true, passive: true });
    window.addEventListener('touchstart', trigger, { once: true, passive: true });
    window.addEventListener('keydown', onKey);
    window.addEventListener('scroll', onScroll, { passive: true });

    var gap = document.getElementById('gaps');
    if (gap && 'IntersectionObserver' in window) {
      gapObserver = new IntersectionObserver(function (entries) {
        if (entries.some(function (entry) { return entry.isIntersecting; })) trigger();
      }, { rootMargin: '0px' });
      gapObserver.observe(gap);
    }
  }

  function watchPair(selector, number) {
    var target = document.querySelector(selector);
    if (!target || mediaDisabled) return;
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        if (!entries.some(function (entry) { return entry.isIntersecting; })) return;
        observer.disconnect();
        schedulePair(number);
      }, { rootMargin: '200% 0px' });
      observer.observe(target);
      return;
    }

    var raf = 0;
    function check() {
      raf = 0;
      var rect = target.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 3 && rect.bottom >= -window.innerHeight * 2) {
        window.removeEventListener('scroll', onProximity);
        window.removeEventListener('resize', onProximity);
        schedulePair(number);
      }
    }
    function onProximity() {
      if (!raf) raf = requestAnimationFrame(check);
    }
    window.addEventListener('scroll', onProximity, { passive: true });
    window.addEventListener('resize', onProximity, { passive: true });
    check();
  }

  function watchLaterPairs() {
    if (laterPairsWatched) return;
    laterPairsWatched = true;
    watchPair('#how', 2);
    watchPair('#book', 3);
  }

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      if (world && worldReady && !world.el.paused) {
        resumeWorld = true;
        try { world.el.pause(); } catch (e) {}
      }
      if (activePlayback && !activePlayback.asset.el.paused) {
        resumeChapter = true;
        try { activePlayback.asset.el.pause(); } catch (e) {}
      }
      return;
    }
    if (worldReady && (resumeWorld || !worldFailed)) {
      resumeWorld = false;
      revealWorld();
    }
    if (activePlayback && resumeChapter && activePlayback.token === requestGeneration) {
      var playback = activePlayback;
      resumeChapter = false;
      safePlay(playback.asset.el, function () { playback.finish(false); });
    }
  });

  armFirstPair();

  function initST() {
    if (!(window.gsap && window.ScrollTrigger)) { setTimeout(initST, 120); return; }
    gsap.registerPlugin(ScrollTrigger);
    if (chapterLayer && !mediaDisabled) {
      [{ sel: '#gaps', n: 1 }, { sel: '#how', n: 2 }, { sel: '#book', n: 3 }].forEach(function (chapter) {
        ScrollTrigger.create({
          trigger: chapter.sel, start: 'top 60%', end: 'bottom 60%',
          onEnter: function () { requestChapter(chapter.n); },
          onLeaveBack: function () { requestChapter(chapter.n - 1); }
        });
      });
    }
    setLines(0);
    ScrollTrigger.create({
      trigger: section, start: 'top top', end: '+=1600', scrub: true, pin: true, anticipatePin: 1,
      onUpdate: function (self) {
        setLines(self.progress);
        if (pct) {
          var number = Math.round(self.progress * 100);
          pct.textContent = number >= 100 ? '100' : (number < 10 ? '0' + number : '' + number);
        }
      }
    });
    watchLaterPairs();
  }

  initST();
})();
