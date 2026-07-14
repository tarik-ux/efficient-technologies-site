/* Efficient Technologies — interactions.
   Preloader, custom cursor, Lenis smooth scroll, GSAP reveals + line-masks,
   pinned process track, count-up stats, self-typing terminal, magnetic buttons.
   Every effect degrades under prefers-reduced-motion or missing libraries. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(pointer:fine)').matches;
  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- line-mask reveal wrapping ---- */
  function wrapRise(el) {
    var span = document.createElement('span');
    span.className = 'rise-i';
    while (el.firstChild) span.appendChild(el.firstChild);
    el.appendChild(span);
    return span;
  }
  var heroRise = $$('.hero .rise').map(wrapRise);
  var titleRise = $$('[data-rise]').map(function (el) { return { el: el, inner: wrapRise(el) }; });

  /* ---- preloader ---- */
  function revealHero() {
    if (!window.gsap || reduce) { heroRise.forEach(function (s) { s.style.opacity = 1; s.style.transform = 'none'; }); return; }
    gsap.from(heroRise, { y: 34, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12 });
    setTimeout(function () {
      try { gsap.killTweensOf(heroRise); } catch (e) {}
      heroRise.forEach(function (s) { s.style.opacity = 1; s.style.transform = 'none'; });
    }, 2400);
  }
  (function preloader() {
    var pre = $('#preloader'), n = $('#pre-count-n');
    if (!pre) { revealHero(); return; }
    var finished = false;
    function done() {
      if (finished) return;
      finished = true;
      pre.classList.add('done');
      setTimeout(function () { pre.style.display = 'none'; }, reduce ? 0 : 380);
      revealHero();
    }
    if (reduce) { if (n) n.textContent = '100'; setTimeout(done, 150); return; }
    var dur = 450, t0 = performance.now();
    (function tick(t) {
      var p = Math.min((t - t0) / dur, 1);
      if (n) n.textContent = Math.round(p * 100);
      if (p < 1) requestAnimationFrame(tick); else setTimeout(done, 60);
    })(t0);
    setTimeout(done, 900);
  })();

  /* ---- custom cursor ---- */
  if (fine && !reduce) {
    var dot = $('#cursor'), ring = $('#cursor-ring');
    if (dot && ring) {
      document.body.classList.add('has-cursor');
      var mx = 0, my = 0, rx = 0, ry = 0;
      var ringRaf = 0;
      function ringLoop() {
        rx += (mx - rx) * 0.18;
        ry += (my - ry) * 0.18;
        ring.style.transform = 'translate(' + rx + 'px,' + ry + 'px) translate(-50%,-50%)';
        if (Math.abs(mx - rx) > 0.1 || Math.abs(my - ry) > 0.1) ringRaf = requestAnimationFrame(ringLoop);
        else ringRaf = 0;
      }
      function queueRing() {
        if (!ringRaf && !document.hidden) ringRaf = requestAnimationFrame(ringLoop);
      }
      window.addEventListener('pointermove', function (e) {
        mx = e.clientX;
        my = e.clientY;
        dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
        queueRing();
      }, { passive: true });
      document.addEventListener('visibilitychange', function () {
        if (document.hidden && ringRaf) {
          cancelAnimationFrame(ringRaf);
          ringRaf = 0;
        } else if (!document.hidden) queueRing();
      });
      $$('a, button, [data-cursor]').forEach(function (el) {
        el.addEventListener('pointerenter', function () { ring.classList.add('hover'); });
        el.addEventListener('pointerleave', function () { ring.classList.remove('hover'); });
      });
    }
  }

  /* ---- Lenis smooth scroll ---- */
  var lenis = null;
  var lenisRaf = 0;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    function runLenis(t) {
      if (document.hidden) { lenisRaf = 0; return; }
      lenis.raf(t);
      lenisRaf = requestAnimationFrame(runLenis);
    }
    function startLenis() {
      if (!lenisRaf && !document.hidden) lenisRaf = requestAnimationFrame(runLenis);
    }
    startLenis();
    document.addEventListener('visibilitychange', function () {
      if (document.hidden && lenisRaf) {
        cancelAnimationFrame(lenisRaf);
        lenisRaf = 0;
      } else if (!document.hidden) startLenis();
    });
  }

  /* ---- anchor links ---- */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (!id || id.length < 2) return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, { offset: -70 });
      else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  /* ---- nav state ---- */
  var nav = $('#nav');
  function onScroll() { if (nav) nav.classList.toggle('scrolled', window.scrollY > 20); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- GSAP reveals + line masks + pinned process ---- */
  var hasGsap = window.gsap && window.ScrollTrigger;
  if (hasGsap && !reduce) {
    gsap.registerPlugin(ScrollTrigger);
    if (lenis) lenis.on('scroll', ScrollTrigger.update);
    var refreshQueued = false;
    function scheduleRefresh() {
      if (refreshQueued) return;
      refreshQueued = true;
      requestAnimationFrame(function () {
        refreshQueued = false;
        ScrollTrigger.refresh();
      });
    }
    window.addEventListener('load', scheduleRefresh);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(scheduleRefresh);

    $$('[data-reveal]').forEach(function (el) {
      gsap.fromTo(el, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 86%' } });
    });
    $$('[data-reveal-group]').forEach(function (grp) {
      gsap.fromTo(grp.children,
        { y: 46, opacity: 0, rotationX: -16, z: -60, transformPerspective: 1000, transformOrigin: 'center top' },
        { y: 0, opacity: 1, rotationX: 0, z: 0, duration: 0.9, stagger: 0.09, ease: 'power3.out', scrollTrigger: { trigger: grp, start: 'top 82%' } });
    });
    titleRise.forEach(function (o) {
      gsap.fromTo(o.el, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: o.el, start: 'top 88%' } });
    });

  } else {
    $$('[data-reveal]').forEach(function (el) { el.style.opacity = 1; });
    $$('[data-reveal-group]').forEach(function (grp) { Array.prototype.slice.call(grp.children).forEach(function (c) { c.style.opacity = 1; }); });
    titleRise.forEach(function (o) { o.el.style.opacity = 1; });
  }

  /* ---- count-up ---- */
  function countUp(el) {
    var target = parseFloat(el.getAttribute('data-count') || '0');
    var suffix = el.getAttribute('data-suffix') || '';
    if (reduce) { el.textContent = target + suffix; return; }
    var dur = 1200, t0 = performance.now();
    (function tick(t) {
      var p = Math.min((t - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * e) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) { countUp(en.target); io.unobserve(en.target); } });
    }, { threshold: 0.6 });
    $$('[data-count]').forEach(function (el) { io.observe(el); });
  } else {
    $$('[data-count]').forEach(countUp);
  }

  /* ---- automation demo (illustrative capabilities, not client data) ---- */
  var term = $('#term-lines');
  if (term) {
    var OPS = [
      { t: '✓ missed call → instant text-back', c: 'ok', k: 0 },
      { t: '✓ new lead captured & routed', c: 'ok', k: 2 },
      { t: '✓ follow-up sequence fired', c: 'ok', k: 2 },
      { t: '✓ review request sent automatically', c: 'ok', k: 1 },
      { t: 'inbound reply — auto-classified', c: 'b', k: null },
      { t: '✓ no-show → rebooking flow', c: 'ok', k: 0 },
      { t: '$ et run --booking --followup --reviews', c: 'dim', k: null },
      { t: '✓ appointment booked — no staff touch', c: 'ok', k: 0 },
      { t: 'negative review caught → routed private', c: 'w', k: null },
      { t: '✓ CRM updated automatically', c: 'ok', k: 3 }
    ];
    var opsCount = [0, 0, 0, 0], oi = 0;
    function addOps() {
      var e = OPS[oi % OPS.length]; oi++;
      var div = document.createElement('div');
      div.className = 'tl ' + e.c;
      div.textContent = e.t;
      term.appendChild(div);
      while (term.children.length > 6) term.removeChild(term.firstChild);
      if (e.k != null) {
        opsCount[e.k]++;
        var el = $('#ops-c' + e.k);
        if (el) el.textContent = opsCount[e.k];
      }
    }
    var seed = document.createElement('div');
    seed.className = 'tl dim';
    seed.textContent = '$ et demo --show-automations';
    term.appendChild(seed);
    if (reduce) {
      for (var oz = 0; oz < 5; oz++) addOps();
    } else {
      for (var oz2 = 0; oz2 < 3; oz2++) addOps();
      var terminalVisible = false;
      var terminalTimer = null;
      function stopTerminal() {
        if (!terminalTimer) return;
        clearInterval(terminalTimer);
        terminalTimer = null;
      }
      function syncTerminal() {
        if (terminalVisible && !document.hidden) {
          if (!terminalTimer) terminalTimer = setInterval(addOps, 1900);
        } else stopTerminal();
      }
      if ('IntersectionObserver' in window) {
        var terminalObserver = new IntersectionObserver(function (entries) {
          terminalVisible = entries.some(function (entry) { return entry.isIntersecting; });
          syncTerminal();
        }, { threshold: 0.01 });
        terminalObserver.observe(term);
      } else {
        terminalVisible = true;
        syncTerminal();
      }
      document.addEventListener('visibilitychange', syncTerminal);
    }
  }

  /* ---- 3D tilt tiles (fine pointer only) ---- */
  if (!reduce && fine) {
    $$('.card, .step, .book-panel').forEach(function (tile) {
      var raf = null;
      var settleTimer = null;
      tile.addEventListener('pointermove', function (e) {
        if (settleTimer) { clearTimeout(settleTimer); settleTimer = null; tile.style.transition = ''; }
        tile.classList.add('motion-active');
        if (raf) return;
        raf = requestAnimationFrame(function () {
          raf = null;
          var r = tile.getBoundingClientRect();
          var px = (e.clientX - r.left) / r.width - 0.5;
          var py = (e.clientY - r.top) / r.height - 0.5;
          tile.style.transform = 'perspective(1000px) rotateX(' + (-py * 8).toFixed(2) + 'deg) rotateY(' + (px * 10).toFixed(2) + 'deg) translateZ(8px)';
        });
      });
      tile.addEventListener('pointerleave', function () {
        if (raf) { cancelAnimationFrame(raf); raf = null; }
        tile.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
        tile.style.transition = 'transform .5s cubic-bezier(0.22,1,0.36,1), border-color .2s, box-shadow .2s';
        settleTimer = setTimeout(function () {
          tile.style.transition = '';
          tile.classList.remove('motion-active');
          settleTimer = null;
        }, 520);
      });
    });
  }

  /* ---- magnetic buttons (fine pointer only) ---- */
  if (!reduce && fine) {
    $$('.magnetic').forEach(function (btn) {
      var settleTimer = null;
      btn.addEventListener('pointermove', function (e) {
        if (settleTimer) { clearTimeout(settleTimer); settleTimer = null; }
        btn.classList.add('motion-active');
        var r = btn.getBoundingClientRect();
        var x = e.clientX - r.left - r.width / 2;
        var y = e.clientY - r.top - r.height / 2;
        btn.style.transform = 'translate(' + (x * 0.2) + 'px,' + (y * 0.3) + 'px)';
      });
      btn.addEventListener('pointerleave', function () {
        btn.style.transform = '';
        settleTimer = setTimeout(function () {
          btn.classList.remove('motion-active');
          settleTimer = null;
        }, 220);
      });
    });
  }
})();
