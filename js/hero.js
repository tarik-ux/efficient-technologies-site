/* Hero focal object — a lit, glowing icosahedron "core" (Three.js): the hero's
   subject, anchored right. Sparse ambient particles for depth, blue + lime rim
   lights, subtle mouse parallax. Degrades to the CSS grid if WebGL is missing or
   prefers-reduced-motion; pauses offscreen / when the tab is hidden. */
(function () {
  var canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasWebGL = (function () {
    try { var c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl'))); }
    catch (e) { return false; }
  })();
  if (!window.THREE || !hasWebGL) { canvas.classList.add('is-hidden'); return; }

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 6;
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setClearColor(0x000000, 0);

  var group = new THREE.Group();
  scene.add(group);

  var geo = new THREE.IcosahedronGeometry(1.6, 1);
  var core = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
    color: 0x0A1424, metalness: 0.7, roughness: 0.34, emissive: 0x0B1E48, emissiveIntensity: 0.45, flatShading: true
  }));
  group.add(core);
  var wire = new THREE.LineSegments(new THREE.EdgesGeometry(geo), new THREE.LineBasicMaterial({ color: 0x3D7BFF, transparent: true, opacity: 0.55 }));
  group.add(wire);
  var nodes = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xB8F24A, size: 0.085, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }));
  group.add(nodes);
  var glow = new THREE.Mesh(new THREE.SphereGeometry(0.72, 24, 24), new THREE.MeshBasicMaterial({ color: 0x1E4FA0, transparent: true, opacity: 0.42, blending: THREE.AdditiveBlending, depthWrite: false }));
  group.add(glow);

  var N = window.innerWidth < 720 ? 24 : 46;
  var pgeo = new THREE.BufferGeometry();
  var pp = new Float32Array(N * 3);
  for (var i = 0; i < N; i++) { pp[i * 3] = (Math.random() - 0.5) * 22; pp[i * 3 + 1] = (Math.random() - 0.5) * 14; pp[i * 3 + 2] = (Math.random() - 0.5) * 10; }
  pgeo.setAttribute('position', new THREE.BufferAttribute(pp, 3));
  var amb = new THREE.Points(pgeo, new THREE.PointsMaterial({ color: 0x3D7BFF, size: 0.05, transparent: true, opacity: 0.4 }));
  scene.add(amb);

  scene.add(new THREE.AmbientLight(0x2a3d63, 0.7));
  var l1 = new THREE.PointLight(0x3D7BFF, 1.4, 60); l1.position.set(6, 3, 6); scene.add(l1);
  var l2 = new THREE.PointLight(0xB8F24A, 0.5, 60); l2.position.set(-5, -3, 4); scene.add(l2);
  var l3 = new THREE.DirectionalLight(0xbcd0ff, 0.35); l3.position.set(0, 6, 5); scene.add(l3);

  function layout() {
    var w = canvas.clientWidth || window.innerWidth;
    var big = w > 900;
    group.position.x = big ? 2.0 : 0;
    group.position.y = big ? 0 : 1.1;
    group.scale.setScalar(big ? 0.88 : 0.66);
    amb.position.x = group.position.x;
  }

  var mx = 0, my = 0, tmx = 0, tmy = 0;
  window.addEventListener('pointermove', function (e) { tmx = (e.clientX / window.innerWidth - 0.5); tmy = (e.clientY / window.innerHeight - 0.5); }, { passive: true });

  function resize() {
    var w = canvas.clientWidth || window.innerWidth, h = canvas.clientHeight || window.innerHeight;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    layout();
  }
  window.addEventListener('resize', resize);

  var running = true, raf, t0 = 0;
  function frame(ts) {
    if (!running) return;
    if (!t0) t0 = ts;
    var t = (ts - t0) / 1000;
    group.rotation.y = t * 0.18 + mx * 0.6;
    group.rotation.x = Math.sin(t * 0.25) * 0.12 + my * 0.4;
    amb.rotation.y = t * 0.03;
    mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  }
  resize();
  if (reduce) { group.rotation.set(0.2, 0.5, 0); renderer.render(scene, camera); }
  else frame();

  function stop() { running = false; if (raf) cancelAnimationFrame(raf); }
  function start() { if (!running && !reduce) { running = true; raf = requestAnimationFrame(frame); } }
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  var hero = document.getElementById('hero');
  if ('IntersectionObserver' in window && hero && !reduce) {
    new IntersectionObserver(function (es) { es.forEach(function (en) { en.isIntersecting ? start() : stop(); }); }, { threshold: 0.02 }).observe(hero);
  }
})();
