/* Hero — WebGPU shader world (Three.js r180, WebGPURenderer + TSL node shaders).
   Custom TSL material: fractal-noise vertex displacement + fresnel rim + emissive
   grading, compiled to WGSL on WebGPU and GLSL on WebGL2 (automatic fallback).
   Scene: morphing core, orbiting shard ring, twinkling instanced particle field,
   bloom post-processing. Degrades to the CSS grid when GL is unavailable;
   renders a single still frame under prefers-reduced-motion; pauses offscreen. */
import * as THREE from 'three';
import {
  uniform, time, positionLocal, normalLocal, normalView, positionViewDirection,
  color, vec3, float, mix, smoothstep, max, dot, sin, hash, instanceIndex, pass,
  mx_noise_float
} from 'three/tsl';
import { bloom } from 'three/addons/tsl/display/BloomNode.js';

(async function () {
  var canvas = document.getElementById('hero-canvas');
  var hero = document.getElementById('hero');
  if (!canvas || !hero) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var badge = document.getElementById('gpu-badge');
  var isMobile = window.innerWidth < 720;

  var renderer;
  try {
    renderer = new THREE.WebGPURenderer({ canvas: canvas, antialias: true });
    await renderer.init();
  } catch (e) {
    canvas.classList.add('is-hidden');
    return; // CSS blueprint grid stays visible as the fallback
  }
  hero.classList.add('gl-on');
  var isGPU = !!(renderer.backend && renderer.backend.isWebGPUBackend);
  if (badge) { badge.hidden = false; badge.textContent = isGPU ? 'webgpu · on' : 'webgl2'; if (!isGPU) badge.style.color = '#8FA3C2'; }

  renderer.setClearColor(0x05070D, 1);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2));

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 4.4;

  /* ---- morphing core (custom TSL shader) ---- */
  var world = new THREE.Group();
  scene.add(world);

  var nPos = normalLocal.mul(1.15).add(vec3(time.mul(0.22)));
  var n1 = mx_noise_float(nPos);
  var n2 = mx_noise_float(normalLocal.mul(2.7).sub(vec3(time.mul(0.14)))).mul(0.5);
  var disp = n1.add(n2).mul(0.24);

  var fres = float(1.0).sub(max(dot(normalView, positionViewDirection), 0.0)).pow(2.3);
  var base = mix(color(0x081226), color(0x3D7BFF), smoothstep(float(-0.22), float(0.24), disp));
  var col = mix(base, color(0xB8F24A), smoothstep(float(0.12), float(0.28), disp).mul(0.55));
  col = col.add(color(0x3D7BFF).mul(fres.mul(1.5))).add(color(0xB8F24A).mul(fres.pow(3.0).mul(0.6)));

  var coreMat = new THREE.MeshBasicNodeMaterial();
  coreMat.positionNode = positionLocal.add(normalLocal.mul(disp));
  coreMat.colorNode = col;
  var core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.35, isMobile ? 14 : 26), coreMat);
  world.add(core);

  /* ---- orbiting shard ring ---- */
  var SHARDS = isMobile ? 14 : 26;
  var shardMat = new THREE.MeshBasicNodeMaterial();
  shardMat.colorNode = mix(color(0x16233B), color(0x3D7BFF), fres.mul(1.6));
  var shards = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.07, 0), shardMat, SHARDS);
  var shardSeed = [];
  for (var i = 0; i < SHARDS; i++) shardSeed.push({ a: Math.random() * Math.PI * 2, r: 2.1 + Math.random() * 0.8, y: (Math.random() - 0.5) * 1.1, s: 0.5 + Math.random() * 1.1, v: 0.1 + Math.random() * 0.22 });
  world.add(shards);

  /* ---- twinkling particle field (instanced, per-instance TSL twinkle) ---- */
  var N = isMobile ? 70 : 150;
  var pMat = new THREE.MeshBasicNodeMaterial();
  pMat.colorNode = color(0x5B8CFF).mul(sin(hash(instanceIndex).mul(6.283).add(time.mul(1.2))).mul(0.3).add(0.7));
  var dots = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.016, 0), pMat, N);
  var dummy = new THREE.Object3D();
  for (var j = 0; j < N; j++) {
    dummy.position.set((Math.random() - 0.5) * 16, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 8);
    dummy.scale.setScalar(0.6 + Math.random() * 1.6);
    dummy.updateMatrix();
    dots.setMatrixAt(j, dummy.matrix);
  }
  scene.add(dots);

  /* ---- bloom post-processing ---- */
  var post = null;
  try {
    post = new THREE.PostProcessing(renderer);
    var scenePass = pass(scene, camera);
    var c0 = scenePass.getTextureNode();
    post.outputNode = c0.add(bloom(c0, isMobile ? 0.55 : 0.8, 0.4, 0.72));
  } catch (e) { post = null; }

  function layout() {
    var w = canvas.clientWidth || window.innerWidth;
    var big = w > 900;
    world.position.x = big ? 2.05 : 0;
    world.position.y = big ? 0 : 1.0;
    world.scale.setScalar(big ? 0.95 : 0.7);
    dots.position.x = world.position.x * 0.5;
  }
  var mx = 0, my = 0, tmx = 0, tmy = 0;
  window.addEventListener('pointermove', function (e) { tmx = (e.clientX / window.innerWidth - 0.5); tmy = (e.clientY / window.innerHeight - 0.5); }, { passive: true });

  function resize() {
    var w = canvas.clientWidth || window.innerWidth, h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    layout();
  }
  window.addEventListener('resize', resize);
  resize();

  function render() { if (post) post.render(); else renderer.render(scene, camera); }

  var t0 = 0, visible = true;
  function tick(ts) {
    if (!t0) t0 = ts;
    var t = (ts - t0) / 1000;
    mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;
    world.rotation.y = t * 0.12 + mx * 0.5;
    world.rotation.x = my * 0.4;
    for (var i = 0; i < SHARDS; i++) {
      var s = shardSeed[i];
      var a = s.a + t * s.v;
      dummy.position.set(Math.cos(a) * s.r, s.y + Math.sin(t * 0.6 + s.a) * 0.12, Math.sin(a) * s.r);
      dummy.rotation.set(a, a * 1.4, 0);
      dummy.scale.setScalar(s.s);
      dummy.updateMatrix();
      shards.setMatrixAt(i, dummy.matrix);
    }
    shards.instanceMatrix.needsUpdate = true;
    camera.position.x = mx * 0.5; camera.position.y = -my * 0.3;
    camera.lookAt(world.position.x * 0.5, 0, 0);
    render();
  }

  if (reduce) { tick(700); }
  else {
    renderer.setAnimationLoop(tick);
    document.addEventListener('visibilitychange', function () { renderer.setAnimationLoop(document.hidden ? null : tick); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          if (en.isIntersecting && !visible) { visible = true; renderer.setAnimationLoop(tick); }
          else if (!en.isIntersecting && visible) { visible = false; renderer.setAnimationLoop(null); }
        });
      }, { threshold: 0.02 }).observe(hero);
    }
  }
})();
