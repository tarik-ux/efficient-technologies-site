/* Signature "core" section — WebGPU port (Three.js r180 WebGPURenderer, WebGL2
   auto-fallback). Scroll-scrubbed wireframe geodesic + inner icosahedron + lime
   vertex dots (instanced — WGSL has no point size), narrative lines resolving
   over it via GSAP ScrollTrigger pin. Degrades gracefully. */
import * as THREE from 'three';

(async function () {
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

  var renderer = null, scene, camera, group, scrollRot = 0;
  if (canvas) {
    try {
      renderer = new THREE.WebGPURenderer({ canvas: canvas, antialias: true });
      await renderer.init();
      renderer.setClearColor(0x05070D, 1);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      camera.position.z = 5;
      group = new THREE.Group();
      scene.add(group);

      var geo = new THREE.IcosahedronGeometry(1.55, 1);
      group.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo),
        new THREE.LineBasicMaterial({ color: 0x3D7BFF, transparent: true, opacity: 0.6 })));
      group.add(new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.92, 0)),
        new THREE.LineBasicMaterial({ color: 0x284067, transparent: true, opacity: 0.85 })));

      var seen = {}, verts = [];
      var pos = geo.attributes.position;
      for (var i = 0; i < pos.count; i++) {
        var x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
        var k = x.toFixed(3) + ',' + y.toFixed(3) + ',' + z.toFixed(3);
        if (!seen[k]) { seen[k] = 1; verts.push([x, y, z]); }
      }
      var dots = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.028, 0),
        new THREE.MeshBasicMaterial({ color: 0xB8F24A }), verts.length);
      var dummy = new THREE.Object3D();
      verts.forEach(function (v, idx) { dummy.position.set(v[0], v[1], v[2]); dummy.updateMatrix(); dots.setMatrixAt(idx, dummy.matrix); });
      group.add(dots);
    } catch (e) { renderer = null; }
  }

  function resize() {
    if (!renderer) return;
    var w = canvas.clientWidth || window.innerWidth, h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  var t0 = 0;
  function tick(ts) {
    if (!t0) t0 = ts;
    var t = (ts - t0) / 1000;
    if (group) {
      group.rotation.y = t * 0.14 + scrollRot * Math.PI * 2;
      group.rotation.x = Math.sin(t * 0.2) * 0.14 + scrollRot * 0.5;
      renderer.render(scene, camera);
    }
  }
  function start() { if (renderer && !reduce) renderer.setAnimationLoop(tick); }
  function stop() { if (renderer) renderer.setAnimationLoop(null); }

  if (reduce) {
    lines.forEach(function (el) { el.style.opacity = 1; el.style.transform = 'none'; el.style.position = 'relative'; });
    if (renderer) { group.rotation.set(0.3, 0.6, 0); renderer.render(scene, camera); }
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
  if (window.gsap && window.ScrollTrigger) initST(); else setTimeout(initST, 120);

  document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else start(); });
})();
