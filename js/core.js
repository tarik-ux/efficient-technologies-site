/* Signature "core" section — a scroll-scrubbed wireframe icosahedron (Three.js)
   with narrative lines resolving over it as you scroll. Pins the section and
   scrubs rotation + copy to scroll progress. Degrades gracefully. */
(function () {
  var section = document.getElementById('core');
  if (!section) return;
  var canvas = document.getElementById('core-canvas');
  var pct = document.getElementById('core-pct');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lines = Array.prototype.slice.call(section.querySelectorAll('.core-line'));

  var bands = [
    [0.04, 0.20, 0.40, 0.46],
    [0.46, 0.60, 0.74, 0.80],
    [0.80, 0.90, 1.01, 1.06]
  ];
  function setLines(p) {
    lines.forEach(function (el, i) {
      var b = bands[i]; if (!b) return;
      var o = 0, y = 24;
      if (p >= b[0] && p < b[1]) { var t = (p - b[0]) / (b[1] - b[0]); o = t; y = 24 * (1 - t); }
      else if (p >= b[1] && p < b[2]) { o = 1; y = 0; }
      else if (p >= b[2] && p < b[3]) { var t2 = (p - b[2]) / (b[3] - b[2]); o = 1 - t2; y = -16 * t2; }
      el.style.opacity = o;
      el.style.transform = 'translateY(' + y.toFixed(1) + 'px)';
    });
  }

  var hasWebGL = (function () {
    try { var c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl'))); }
    catch (e) { return false; }
  })();

  var renderer, scene, camera, group, scrollRot = 0, raf, running = false, t0 = 0;

  if (canvas && window.THREE && hasWebGL) {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
    camera.position.z = 5;
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    group = new THREE.Group();
    scene.add(group);

    var geo = new THREE.IcosahedronGeometry(1.55, 1);
    group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo),
      new THREE.LineBasicMaterial({ color: 0x3D7BFF, transparent: true, opacity: 0.6 })));
    group.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xB8F24A, size: 0.06 })));
    group.add(new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.92, 0)),
      new THREE.LineBasicMaterial({ color: 0x284067, transparent: true, opacity: 0.85 })));
    resize();
    window.addEventListener('resize', resize);
  }

  function resize() {
    if (!renderer) return;
    var w = canvas.clientWidth || window.innerWidth, h = canvas.clientHeight || window.innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }

  function frame(ts) {
    if (!running) return;
    if (!t0) t0 = ts;
    var t = (ts - t0) / 1000;
    if (group) {
      group.rotation.y = t * 0.14 + scrollRot * Math.PI * 2;
      group.rotation.x = Math.sin(t * 0.2) * 0.14 + scrollRot * 0.5;
      renderer.render(scene, camera);
    }
    raf = requestAnimationFrame(frame);
  }
  function start() { if (!running && group && !reduce) { running = true; raf = requestAnimationFrame(frame); } }
  function stop() { running = false; if (raf) cancelAnimationFrame(raf); }

  if (reduce) {
    lines.forEach(function (el) { el.style.opacity = 1; el.style.transform = 'none'; });
    if (group) { group.rotation.set(0.3, 0.6, 0); renderer.render(scene, camera); }
    return;
  }

  function initST() {
    if (!(window.gsap && window.ScrollTrigger)) {
      lines.forEach(function (el) { el.style.opacity = 1; el.style.transform = 'none'; });
      start();
      return;
    }
    gsap.registerPlugin(ScrollTrigger);
    setLines(0);
    ScrollTrigger.create({
      trigger: section, start: 'top top', end: '+=1800', scrub: true, pin: true, anticipatePin: 1,
      onUpdate: function (self) {
        scrollRot = self.progress;
        setLines(self.progress);
        if (pct) { var n = Math.round(self.progress * 100); pct.textContent = n >= 100 ? '100' : (n < 10 ? '0' + n : '' + n); }
      },
      onEnter: start, onEnterBack: start, onLeave: stop, onLeaveBack: stop
    });
    start();
  }

  if (window.gsap && window.ScrollTrigger) initST(); else setTimeout(initST, 60);

  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
})();
