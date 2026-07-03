/* Hero — full-bleed shader world (Three.js r128 + UnrealBloom).
   A morphing organic "core": simplex-noise vertex displacement + fresnel rim
   shading, real bloom, atmospheric particles, mouse parallax. Falls back to
   plain rendering if bloom addons are missing, and to the CSS grid if WebGL is
   unavailable or prefers-reduced-motion. Pauses offscreen / when tab hidden. */
(function () {
  var canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasWebGL = (function () {
    try { var c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl') || c.getContext('experimental-webgl'))); }
    catch (e) { return false; }
  })();
  if (!window.THREE || !hasWebGL) { canvas.classList.add('is-hidden'); return; }

  var isMobile = window.innerWidth < 720;
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 4.4;
  var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x05070D, 1);
  var DPR = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);
  renderer.setPixelRatio(DPR);

  var NOISE = [
    'vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}',
    'vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}',
    'vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}',
    'vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}',
    'float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);',
    'vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);',
    'vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);',
    'vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;',
    'i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));',
    'float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);',
    'vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);',
    'vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));',
    'vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;',
    'vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);',
    'vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;',
    'vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;',
    'return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}'
  ].join('\n');

  var VERT = NOISE + [
    'uniform float uTime;varying float vN;varying vec3 vNormal;varying vec3 vView;',
    'void main(){',
    ' float n=snoise(normal*1.15+uTime*0.22);',
    ' float n2=snoise(normal*2.7-uTime*0.14)*0.5;',
    ' float disp=(n+n2)*0.24;',
    ' vec3 p=position+normal*disp;vN=disp;',
    ' vNormal=normalize(normalMatrix*normal);',
    ' vec4 mv=modelViewMatrix*vec4(p,1.0);vView=normalize(-mv.xyz);',
    ' gl_Position=projectionMatrix*mv;}'
  ].join('\n');

  var FRAG = [
    'varying float vN;varying vec3 vNormal;varying vec3 vView;',
    'uniform vec3 uA;uniform vec3 uB;uniform vec3 uC;',
    'void main(){',
    ' float fres=pow(1.0-max(dot(vNormal,vView),0.0),2.3);',
    ' vec3 base=mix(uA,uB,smoothstep(-0.22,0.24,vN));',
    ' vec3 col=mix(base,uC,smoothstep(0.12,0.28,vN)*0.55);',
    ' col+=uB*fres*1.5;',
    ' col+=uC*pow(fres,3.0)*0.6;',
    ' gl_FragColor=vec4(col,1.0);}'
  ].join('\n');

  var uniforms = {
    uTime: { value: 0 },
    uA: { value: new THREE.Color(0x081226) },
    uB: { value: new THREE.Color(0x3D7BFF) },
    uC: { value: new THREE.Color(0xB8F24A) }
  };
  var geo = new THREE.IcosahedronGeometry(1.35, isMobile ? 14 : 26);
  var mesh = new THREE.Mesh(geo, new THREE.ShaderMaterial({ uniforms: uniforms, vertexShader: VERT, fragmentShader: FRAG }));
  var world = new THREE.Group();
  world.add(mesh);
  scene.add(world);

  var N = isMobile ? 60 : 130;
  var pgeo = new THREE.BufferGeometry();
  var pp = new Float32Array(N * 3);
  for (var i = 0; i < N; i++) { pp[i * 3] = (Math.random() - 0.5) * 16; pp[i * 3 + 1] = (Math.random() - 0.5) * 10; pp[i * 3 + 2] = (Math.random() - 0.5) * 8; }
  pgeo.setAttribute('position', new THREE.BufferAttribute(pp, 3));
  var amb = new THREE.Points(pgeo, new THREE.PointsMaterial({ color: 0x5B8CFF, size: 0.035, transparent: true, opacity: 0.6 }));
  scene.add(amb);

  var composer = null;
  if (THREE.EffectComposer && THREE.RenderPass && THREE.UnrealBloomPass) {
    composer = new THREE.EffectComposer(renderer);
    composer.addPass(new THREE.RenderPass(scene, camera));
    var bloom = new THREE.UnrealBloomPass(new THREE.Vector2(1, 1), isMobile ? 0.6 : 0.85, 0.5, 0.8);
    composer.addPass(bloom);
  }

  function layout() {
    var w = canvas.clientWidth || window.innerWidth;
    var big = w > 900;
    world.position.x = big ? 2.05 : 0;
    world.position.y = big ? 0 : 1.0;
    world.scale.setScalar(big ? 0.95 : 0.7);
    amb.position.x = world.position.x * 0.6;
  }

  var mx = 0, my = 0, tmx = 0, tmy = 0;
  window.addEventListener('pointermove', function (e) { tmx = (e.clientX / window.innerWidth - 0.5); tmy = (e.clientY / window.innerHeight - 0.5); }, { passive: true });

  function resize() {
    var w = canvas.clientWidth || window.innerWidth, h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
    if (composer) composer.setSize(w, h);
    layout();
  }
  window.addEventListener('resize', resize);

  var running = true, raf, t0 = 0;
  function render() { if (composer) composer.render(); else renderer.render(scene, camera); }
  function frame(ts) {
    if (!running) return;
    if (!t0) t0 = ts;
    var t = (ts - t0) / 1000;
    uniforms.uTime.value = t;
    mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;
    world.rotation.y = t * 0.12 + mx * 0.5;
    world.rotation.x = my * 0.4;
    amb.rotation.y = t * 0.02;
    camera.position.x = mx * 0.5; camera.position.y = -my * 0.3; camera.lookAt(world.position.x * 0.5, 0, 0);
    render();
    raf = requestAnimationFrame(frame);
  }
  resize();
  if (reduce) { uniforms.uTime.value = 0.5; render(); }
  else frame();

  function stop() { running = false; if (raf) cancelAnimationFrame(raf); }
  function start() { if (!running && !reduce) { running = true; raf = requestAnimationFrame(frame); } }
  document.addEventListener('visibilitychange', function () { document.hidden ? stop() : start(); });
  var hero = document.getElementById('hero');
  if ('IntersectionObserver' in window && hero && !reduce) {
    new IntersectionObserver(function (es) { es.forEach(function (en) { en.isIntersecting ? start() : stop(); }); }, { threshold: 0.02 }).observe(hero);
  }
})();
