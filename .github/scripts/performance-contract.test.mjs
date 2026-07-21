import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';

const root = path.resolve(process.env.SITE_ROOT ?? '.');
const contractRoot = path.resolve(process.env.CONTRACT_ROOT ?? '.');
const release = '20260714';
const frauncesRelease = '20260715';
const tokensRevision = '3';
const publicBase = 'https://efficientautomate.com';
const socialImage = `/assets/og-v${release}.jpg`;
const manifestPath = '.github/performance/media-manifest.json';
const expectedCssSha256 = {
  'assets/tokens.css': '5fa72341c7d984b3b63be2c9b2997a4a257f268e2a464c9f534a8446e0c39c88',
  'css/styles.css': 'd26dcb6cb8d02ca9af4070e563d52a4be35cc12ea9f1e4bbbf0efffa7e67b8e7',
};

const homepageAcquisitionCss = `/* ---- home-service acquisition additions ---- */
.svc-link{display:block;color:inherit;text-decoration:none;}
.svc-link:focus-visible,.industry-link:focus-visible{outline:2px solid var(--et-blue);outline-offset:2px;}
.industry-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--et-space-4);margin-top:var(--et-space-6);}
.industry-link{display:block;background:var(--et-panel);border:1px solid var(--et-line);border-radius:var(--et-radius-lg);padding:var(--et-space-5);color:var(--et-white);text-decoration:none;}
.industry-link:hover{border-color:var(--et-line-strong);}
.industry-link p{color:var(--et-slate);font-size:var(--et-fs-sm);margin:var(--et-space-2) 0 0;}
.founding-callout{margin-top:var(--et-space-6);padding:var(--et-space-5);background:var(--et-panel);border-left:2px solid var(--et-lime);}
.founding-callout h3{margin:0 0 var(--et-space-2);font-size:var(--et-fs-h3);}
.founding-callout p{margin:0;color:var(--et-slate);}
.guarantee-detail{max-width:72ch;margin:var(--et-space-3) auto 0;text-align:center;color:var(--et-slate);font-size:var(--et-fs-sm);}
.home-faq{display:grid;gap:var(--et-space-3);max-width:920px;margin:var(--et-space-6) auto 0;}
.home-faq details{background:var(--et-panel);border:1px solid var(--et-line);border-radius:var(--et-radius-lg);padding:var(--et-space-4) var(--et-space-5);}
.home-faq summary{cursor:pointer;font-family:var(--et-font-display);font-weight:700;color:var(--et-white);}
.home-faq p{color:var(--et-slate);margin:var(--et-space-3) 0 0;}
@media(max-width:720px){.industry-grid{grid-template-columns:1fr;}}
`;

const htmlFiles = [
  'index.html',
  '404.html',
  'about/index.html',
  'blog/index.html',
  'blog/booking-automation-after-hours/index.html',
  'blog/business-process-automation-small-business/index.html',
  'blog/crm-automation-local-business/index.html',
  'blog/review-automation-local-seo/index.html',
  'blog/software-consulting-vs-in-house/index.html',
];

const expectedSecondaryStylesheetRevisions = {
  '404.html': '3',
  'about/index.html': '4',
  'blog/index.html': '4',
  'blog/booking-automation-after-hours/index.html': '4',
  'blog/business-process-automation-small-business/index.html': '4',
  'blog/crm-automation-local-business/index.html': '4',
  'blog/review-automation-local-seo/index.html': '4',
  'blog/software-consulting-vs-in-house/index.html': '4',
};

const expectedVideos = [
  { logicalId: 'world', output: `assets/video/city-loop-v${release}.mp4`, width: 1920, height: 1080 },
  { logicalId: 'chapter-1-forward', output: `assets/video/t1-v${release}.mp4`, width: 1600, height: 900 },
  { logicalId: 'chapter-1-reverse', output: `assets/video/t1r-v${release}.mp4`, width: 1600, height: 900 },
  { logicalId: 'chapter-2-forward', output: `assets/video/t2-v${release}.mp4`, width: 1600, height: 900 },
  { logicalId: 'chapter-2-reverse', output: `assets/video/t2r-v${release}.mp4`, width: 1600, height: 900 },
  { logicalId: 'chapter-3-forward', output: `assets/video/t3-v${release}.mp4`, width: 1600, height: 900 },
  { logicalId: 'chapter-3-reverse', output: `assets/video/t3r-v${release}.mp4`, width: 1600, height: 900 },
];

const expectedImages = [
  { logicalId: 'poster', output: `assets/city-poster-v${release}.webp`, width: 1376, height: 768 },
  { logicalId: 'social', output: `assets/og-v${release}.jpg`, width: 1376, height: 768 },
];

const expectedFonts = [
  `assets/fonts/inter-latin-v${release}.woff2`,
  `assets/fonts/space-grotesk-latin-v${release}.woff2`,
  `assets/fonts/jetbrains-mono-latin-v${release}.woff2`,
  `assets/fonts/fraunces-italic-latin-v${frauncesRelease}.woff2`,
];

const promotedFraunces = {
  output: `assets/fonts/fraunces-italic-latin-v${frauncesRelease}.woff2`,
  bytes: 29108,
  sha256: 'e2558fd78e6d88b32ce13926b4e203022aaa1c4a45d0f997833bbb8de4d8aadc',
};

const retainedFraunces = {
  output: `assets/fonts/fraunces-italic-latin-v${release}.woff2`,
  bytes: 81520,
  sha256: '066710ce7ed235a339d3d6cdcc8b55c0bea5632232662d83aacea25852108271',
};

const expectedLicenses = [
  'assets/fonts/OFL-Inter.txt',
  'assets/fonts/OFL-Space-Grotesk.txt',
  'assets/fonts/OFL-JetBrains-Mono.txt',
  'assets/fonts/OFL-Fraunces.txt',
];

const expectedRuntimeUrls = [
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js',
  'https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js',
  'js/main.js?v=4',
  'js/ambient.js?v=2',
];

const legacyAssets = [
  'assets/video/city-loop.mp4',
  'assets/video/t1.mp4',
  'assets/video/t1r.mp4',
  'assets/video/t2.mp4',
  'assets/video/t2r.mp4',
  'assets/video/t3.mp4',
  'assets/video/t3r.mp4',
  'assets/city-poster.webp',
  'assets/og.png',
];

const full = (relative) => path.join(root, relative);
const exists = (relative) => fs.existsSync(full(relative));
const read = (relative) => fs.readFileSync(full(relative), 'utf8');
const size = (relative) => fs.statSync(full(relative)).size;
const sha256 = (relative) => crypto.createHash('sha256').update(fs.readFileSync(full(relative))).digest('hex');
const contractFull = (relative) => path.join(contractRoot, relative);
const contractExists = (relative) => fs.existsSync(contractFull(relative));
const contractRead = (relative) => fs.readFileSync(contractFull(relative), 'utf8');

function expectedSecondaryStylesheets(file) {
  const secondaryHtmlFiles = htmlFiles.filter((relative) => relative !== 'index.html');
  assert.deepEqual(
    Object.keys(expectedSecondaryStylesheetRevisions).sort(),
    secondaryHtmlFiles.slice().sort(),
    'secondary stylesheet revision map covers every non-home HTML file with no extras',
  );
  return [
    `/assets/tokens.css?v=${tokensRevision}`,
    `/css/styles.css?v=${expectedSecondaryStylesheetRevisions[file]}`,
  ];
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`(?:^|\\s)${name}\\s*=\\s*(['\"])(.*?)\\1`, 'i'));
  return match?.[2] ?? null;
}

test('attribute parser distinguishes data-src from src', () => {
  const tag = '<video data-src="x.mp4">';
  assert.equal(attr(tag, 'src'), null);
  assert.equal(attr(tag, 'data-src'), 'x.mp4');
});

function tags(html, name) {
  return html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) ?? [];
}

function inlineScriptSource(html, marker) {
  const pattern = new RegExp(`<script\\s+${escapeRegex(marker)}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/script>`, 'gi');
  const matches = [...html.matchAll(pattern)];
  assert.equal(matches.length, 1, `expected exactly one inline ${marker} script`);
  return matches[0][1];
}

function normalizeLf(value) {
  return value.replace(/\r\n?/g, '\n');
}

function inlineStyleSource(html, marker) {
  const stylePattern = /<style\b([^>]*)>([\s\S]*?)<\/style>/gi;
  const markerPattern = new RegExp(
    '(?:^|\\s)' + escapeRegex(marker) + '(?:\\s|=|$)',
    'i',
  );
  const matches = [...html.matchAll(stylePattern)]
    .filter((match) => markerPattern.test(match[1]));
  assert.equal(matches.length, 1, 'expected exactly one inline ' + marker + ' style');
  return matches[0][2];
}

function fps(value) {
  const [numerator, denominator] = String(value).split('/').map(Number);
  return denominator ? numerator / denominator : numerator;
}

function imageHasAllowedByteSize(entry) {
  return entry.logicalId === 'poster'
    ? entry.optimizedBytes <= entry.sourceBytes
    : entry.optimizedBytes < entry.sourceBytes;
}

function localTarget(pageFile, value) {
  if (!value || /^(?:[a-z]+:|\/\/|#)/i.test(value)) return null;
  const clean = value.split('#')[0].split('?')[0];
  if (!clean) return null;
  let relative = clean.startsWith('/')
    ? clean.slice(1)
    : path.posix.join(path.posix.dirname(pageFile), clean);
  relative = path.posix.normalize(relative);
  if (clean.endsWith('/')) relative = path.posix.join(relative, 'index.html');
  return relative;
}

function cssRule(css, selector) {
  const match = css.match(new RegExp(`${escapeRegex(selector)}\\s*\\{([^}]*)\\}`, 'i'));
  assert.ok(match, `missing CSS rule ${selector}`);
  return match[1];
}

class FakeClassList {
  constructor() {
    this.values = new Set();
  }

  add(name) {
    this.values.add(name);
  }

  remove(name) {
    this.values.delete(name);
  }

  toggle(name, force) {
    const enabled = force === undefined ? !this.values.has(name) : Boolean(force);
    if (enabled) this.values.add(name);
    else this.values.delete(name);
    return enabled;
  }

  contains(name) {
    return this.values.has(name);
  }
}

class FakeMediaElement {
  constructor(id, dataSrc) {
    this.id = id;
    this.dataSrc = dataSrc;
    this.classList = new FakeClassList();
    this.listeners = new Map();
    this.playAttempts = [];
    this.pauseCalls = 0;
    this.paused = true;
    this.readyState = 0;
    this.currentTime = 0;
    this.src = '';
  }

  getAttribute(name) {
    return name === 'data-src' ? this.dataSrc : null;
  }

  addEventListener(type, callback, options) {
    const entries = this.listeners.get(type) ?? [];
    entries.push({ callback, once: Boolean(options?.once) });
    this.listeners.set(type, entries);
  }

  removeEventListener(type, callback) {
    const entries = this.listeners.get(type) ?? [];
    this.listeners.set(type, entries.filter((entry) => entry.callback !== callback));
  }

  listenerCount(type) {
    return (this.listeners.get(type) ?? []).length;
  }

  dispatch(type) {
    if (type === 'canplay') this.readyState = 4;
    const entries = [...(this.listeners.get(type) ?? [])];
    for (const entry of entries) {
      entry.callback();
      if (entry.once) this.removeEventListener(type, entry.callback);
    }
  }

  load() {}

  pause() {
    this.pauseCalls++;
    this.paused = true;
  }

  play() {
    this.paused = false;
    const attempt = {
      onReject: null,
      catch(callback) {
        this.onReject = callback;
        return this;
      },
      reject(error = new Error('play rejected')) {
        if (this.onReject) this.onReject(error);
      },
    };
    this.playAttempts.push(attempt);
    return attempt;
  }
}

function fakeElement(id) {
  return {
    id,
    classList: new FakeClassList(),
    style: {},
    getBoundingClientRect() {
      return { top: 10_000, bottom: 11_000 };
    },
  };
}

function createAmbientHarness() {
  const dataSources = {
    'ch-t1': `assets/video/t1-v${release}.mp4`,
    'ch-t1r': `assets/video/t1r-v${release}.mp4`,
    'ch-t2': `assets/video/t2-v${release}.mp4`,
    'ch-t2r': `assets/video/t2r-v${release}.mp4`,
    'ch-t3': `assets/video/t3-v${release}.mp4`,
    'ch-t3r': `assets/video/t3r-v${release}.mp4`,
  };
  const media = Object.fromEntries(
    Object.entries(dataSources).map(([id, dataSrc]) => [id, new FakeMediaElement(id, dataSrc)]),
  );
  const body = fakeElement('body');
  const core = fakeElement('core');
  core.querySelectorAll = () => [fakeElement('line-1'), fakeElement('line-2'), fakeElement('line-3')];
  const elements = {
    ...media,
    core,
    'core-pct': { textContent: '' },
    'chapter-layer': fakeElement('chapter-layer'),
    gaps: fakeElement('gaps'),
    how: fakeElement('how'),
    book: fakeElement('book'),
  };
  const documentListeners = new Map();
  const document = {
    body,
    hidden: false,
    getElementById(id) {
      return elements[id] ?? null;
    },
    querySelector(selector) {
      return elements[selector.slice(1)] ?? null;
    },
    addEventListener(type, callback) {
      const callbacks = documentListeners.get(type) ?? [];
      callbacks.push(callback);
      documentListeners.set(type, callbacks);
    },
  };
  const triggers = [];
  const ScrollTrigger = {
    create(config) {
      triggers.push(config);
      return config;
    },
  };
  const gsap = { registerPlugin() {} };
  const windowListeners = new Map();
  const window = {
    ScrollTrigger,
    gsap,
    innerHeight: 1_000,
    scrollY: 0,
    matchMedia() {
      return { matches: false };
    },
    addEventListener(type, callback) {
      const callbacks = windowListeners.get(type) ?? [];
      callbacks.push(callback);
      windowListeners.set(type, callbacks);
    },
    removeEventListener(type, callback) {
      const callbacks = windowListeners.get(type) ?? [];
      windowListeners.set(type, callbacks.filter((entry) => entry !== callback));
    },
  };
  vm.runInNewContext(read('js/ambient.js'), {
    document,
    gsap,
    navigator: {},
    requestAnimationFrame(callback) {
      callback(0);
      return 1;
    },
    ScrollTrigger,
    setTimeout() {
      return 1;
    },
    window,
  }, { filename: 'ambient.js' });

  return {
    body,
    media,
    chapter(selector) {
      const trigger = triggers.find((entry) => entry.trigger === selector);
      assert.ok(trigger, `missing ScrollTrigger for ${selector}`);
      return trigger;
    },
    setHidden(hidden) {
      document.hidden = hidden;
      for (const callback of documentListeners.get('visibilitychange') ?? []) callback();
    },
  };
}

class CriticalClassList {
  constructor(element) {
    this.element = element;
  }

  values() {
    return this.element.className.split(/\s+/).filter(Boolean);
  }

  add(value) {
    const values = new Set(this.values());
    values.add(value);
    this.element.className = [...values].join(' ');
  }

  contains(value) {
    return this.values().includes(value);
  }
}

class CriticalNode {
  constructor(text = '') {
    this.textContent = text;
    this.parentNode = null;
  }
}

class CriticalElement extends CriticalNode {
  constructor(className = '', top = 0) {
    super('');
    this.className = className;
    this.top = top;
    this.childNodes = [];
    this.style = {};
    this.classList = new CriticalClassList(this);
  }

  get children() {
    return this.childNodes.filter((node) => node instanceof CriticalElement);
  }

  get firstChild() {
    return this.childNodes[0] ?? null;
  }

  get firstElementChild() {
    return this.children[0] ?? null;
  }

  appendChild(node) {
    if (node.parentNode) {
      const index = node.parentNode.childNodes.indexOf(node);
      if (index >= 0) node.parentNode.childNodes.splice(index, 1);
    }
    node.parentNode = this;
    this.childNodes.push(node);
    return node;
  }

  getBoundingClientRect() {
    return { top: this.top };
  }
}

function createCriticalHarness({ reduce = false, missingPreloader = false, revealTops = [100, 100, 100, 100, 100] } = {}) {
  let now = 0;
  let nextId = 1;
  let raf = null;
  let maxPendingRaf = 0;
  const timers = [];
  const rises = [new CriticalElement('rise'), new CriticalElement('rise')];
  rises[0].appendChild(new CriticalNode('Find the gaps.'));
  rises[1].appendChild(new CriticalNode('Automate them.'));
  const reveals = revealTops.map((top) => new CriticalElement('hero-reveal', top));
  const preloader = missingPreloader ? null : new CriticalElement('preloader');
  const counter = missingPreloader ? null : new CriticalElement();
  const listeners = new Map();
  if (counter) counter.textContent = '0';

  function setTimeoutFake(callback, delay = 0) {
    const id = nextId++;
    timers.push({ id, due: now + delay, callback });
    return id;
  }

  function requestAnimationFrameFake(callback) {
    assert.equal(raf, null, 'critical bootstrap must never queue more than one rAF');
    raf = { id: nextId++, callback };
    maxPendingRaf = Math.max(maxPendingRaf, 1);
    return raf.id;
  }

  function cancelAnimationFrameFake(id) {
    if (raf?.id === id) raf = null;
  }

  function runTimersThrough(target) {
    while (true) {
      timers.sort((a, b) => a.due - b.due);
      const timer = timers[0];
      if (!timer || timer.due > target) break;
      timers.shift();
      now = timer.due;
      timer.callback();
    }
  }

  function frame(target) {
    runTimersThrough(target);
    now = target;
    if (raf) {
      const current = raf;
      raf = null;
      current.callback(target);
    }
    runTimersThrough(target);
  }

  const document = {
    createElement: () => new CriticalElement(),
    querySelector(selector) {
      if (selector === '#preloader') return preloader;
      if (selector === '#pre-count-n') return counter;
      return null;
    },
    querySelectorAll(selector) {
      if (selector === '.hero .rise') return rises;
      if (selector === '.hero [data-reveal]') return reveals;
      return [];
    },
  };
  const window = {
    innerHeight: 1000,
    matchMedia: () => ({ matches: reduce }),
    addEventListener(type, callback, options) {
      const entries = listeners.get(type) ?? [];
      entries.push({ callback, options });
      listeners.set(type, entries);
    },
    removeEventListener(type, callback) {
      const entries = listeners.get(type) ?? [];
      listeners.set(type, entries.filter((entry) => entry.callback !== callback));
    },
  };
  const context = vm.createContext({
    window,
    document,
    performance: { now: () => now },
    requestAnimationFrame: requestAnimationFrameFake,
    cancelAnimationFrame: cancelAnimationFrameFake,
    setTimeout: setTimeoutFake,
    Math,
    Array,
  });

  return {
    context,
    rises,
    reveals,
    preloader,
    counter,
    frame,
    pendingRaf: () => Boolean(raf),
    maxPendingRaf: () => maxPendingRaf,
    emit(type) {
      for (const entry of [...(listeners.get(type) ?? [])]) entry.callback();
    },
    listenerCount(type) {
      return (listeners.get(type) ?? []).length;
    },
    listenerOptions(type) {
      return (listeners.get(type) ?? []).map((entry) => entry.options);
    },
  };
}

function criticalTranslateY(style) {
  if (style.transform === 'none') return 0;
  const match = String(style.transform).match(/translateY\(([-\d.]+)px\)/);
  assert.ok(match, `expected translateY transform, got ${style.transform}`);
  return Number(match[1]);
}

class RuntimeTarget {
  constructor() {
    this.listeners = new Map();
  }

  addEventListener(type, callback, options) {
    const entries = this.listeners.get(type) ?? [];
    entries.push({ callback, options, capture: options === true || Boolean(options?.capture) });
    this.listeners.set(type, entries);
  }

  removeEventListener(type, callback, options) {
    const entries = this.listeners.get(type) ?? [];
    const capture = options === true || Boolean(options?.capture);
    this.listeners.set(type, entries.filter((entry) => entry.callback !== callback || entry.capture !== capture));
  }

  dispatch(type, event = {}) {
    for (const entry of [...(this.listeners.get(type) ?? [])]) entry.callback({ type, ...event });
  }

  listenerCount(type) {
    return (this.listeners.get(type) ?? []).length;
  }

  listenerOptions(type) {
    return (this.listeners.get(type) ?? []).map((entry) => entry.options);
  }
}

class RuntimeScript extends RuntimeTarget {
  constructor() {
    super();
    this.async = true;
    this.src = '';
  }
}

function createRuntimeHarness({ hash = '', scrollY = 0, hidden = false, titlesFinal = false, sectionTop = -120 } = {}) {
  let now = 0;
  let nextId = 1;
  let rafQueue = [];
  const timers = [];
  const appended = [];
  const network = new Map();
  const execution = [];
  let nextExecution = 0;
  const mutationObservers = [];
  const titles = Array.from({ length: 2 }, () => ({
    style: titlesFinal ? { opacity: '1', transform: 'none' } : { opacity: '0', transform: 'translateY(34px)' },
  }));
  function createHashTarget(id) {
    return {
      id,
      scrollCalls: [],
      scrollIntoView(options) {
        this.scrollCalls.push(options);
      },
    };
  }
  const hashTargets = new Map([
    ['#pricing', createHashTarget('pricing')],
    ['#book', createHashTarget('book')],
  ]);
  const hashTarget = hashTargets.get('#pricing');
  const bookTarget = hashTargets.get('#book');
  const restoreSection = {
    id: 'pricing',
    top: sectionTop,
    getBoundingClientRect() {
      return { top: this.top, bottom: this.top + 900 };
    },
  };

  class FakeMutationObserver {
    constructor(callback) {
      this.callback = callback;
      this.connected = false;
      mutationObservers.push(this);
    }

    observe() {
      this.connected = true;
    }

    disconnect() {
      this.connected = false;
    }
  }

  const window = new RuntimeTarget();
  window.scrollY = scrollY;
  window.innerHeight = 1000;
  window.scrollCalls = [];
  window.scrollBy = (options) => {
    window.scrollCalls.push(options);
    window.scrollY += Number(options.top) || 0;
  };
  const location = { hash };
  window.location = location;
  const document = new RuntimeTarget();
  document.hidden = hidden;
  document.querySelectorAll = (selector) => {
    if (selector === '.hero .rise > .rise-i') return titles;
    if (selector === 'main section[id]') return [restoreSection];
    return [];
  };
  document.querySelector = (selector) => hashTargets.get(selector) ?? null;
  document.createElement = (tag) => {
    assert.equal(tag, 'script');
    return new RuntimeScript();
  };
  document.head = {
    appendChild(script) {
      appended.push(script);
      return script;
    },
  };
  document.documentElement = document.head;

  function setTimeoutFake(callback, delay = 0) {
    const id = nextId++;
    timers.push({ id, due: now + delay, callback, cancelled: false });
    return id;
  }

  function clearTimeoutFake(id) {
    const timer = timers.find((item) => item.id === id);
    if (timer) timer.cancelled = true;
  }

  function advanceTimers(target) {
    while (true) {
      timers.sort((a, b) => a.due - b.due);
      const timer = timers.find((item) => !item.cancelled && item.due <= target);
      if (!timer) break;
      timers.splice(timers.indexOf(timer), 1);
      now = timer.due;
      timer.callback();
    }
    now = target;
  }

  function requestAnimationFrameFake(callback) {
    const id = nextId++;
    rafQueue.push({ id, callback });
    return id;
  }

  function frame(target = now + 16) {
    advanceTimers(target);
    const callbacks = rafQueue;
    rafQueue = [];
    for (const item of callbacks) item.callback(target);
  }

  function flushMutation() {
    for (const observer of mutationObservers) {
      if (observer.connected) observer.callback([]);
    }
  }

  function flushExecution() {
    while (network.has(nextExecution)) {
      const ok = network.get(nextExecution);
      const script = appended[nextExecution];
      execution.push({ url: script.src, status: ok ? 'loaded' : 'error' });
      script.dispatch(ok ? 'load' : 'error', ok ? {} : { message: 'forced failure' });
      nextExecution++;
    }
  }

  function completeNetwork(index, ok = true) {
    network.set(index, ok);
    flushExecution();
  }

  const context = vm.createContext({
    window,
    document,
    location,
    MutationObserver: FakeMutationObserver,
    performance: { now: () => now },
    requestAnimationFrame: requestAnimationFrameFake,
    setTimeout: setTimeoutFake,
    clearTimeout: clearTimeoutFake,
    Array,
    Math,
  });

  return {
    context,
    window,
    document,
    titles,
    hashTarget,
    bookTarget,
    hashTargets,
    restoreSection,
    appended,
    execution,
    frame,
    advanceTimers,
    flushMutation,
    completeNetwork,
    pendingRaf: () => rafQueue.length,
    setTitlesFinal() {
      for (const title of titles) {
        title.style.opacity = '1';
        title.style.transform = 'none';
      }
      flushMutation();
    },
  };
}

function runRuntimeLoader(options) {
  const harness = createRuntimeHarness(options);
  vm.runInContext(inlineScriptSource(read('index.html'), 'data-runtime-loader'), harness.context);
  return harness;
}

function runtimeHashClickTarget(href) {
  const anchor = {
    getAttribute(name) {
      assert.equal(name, 'href');
      return href;
    },
  };
  return {
    closest(selector) {
      assert.equal(selector, 'a[href^="#"]');
      return anchor;
    },
  };
}

test('chapter media state machine ignores stale resume rejection', () => {
  const harness = createAmbientHarness();
  const chapterOne = harness.media['ch-t1'];
  const chapterTwo = harness.media['ch-t2'];
  const chapterTwoReverse = harness.media['ch-t2r'];

  harness.chapter('#gaps').onEnter();
  chapterOne.dispatch('canplay');
  harness.setHidden(true);
  harness.setHidden(false);
  assert.equal(chapterOne.playAttempts.length, 2);
  const resumedAttempt = chapterOne.playAttempts[1];

  harness.chapter('#how').onEnter();
  chapterTwo.dispatch('canplay');
  resumedAttempt.reject();
  chapterTwo.dispatch('ended');
  harness.chapter('#how').onLeaveBack();
  chapterTwoReverse.dispatch('canplay');
  chapterTwoReverse.dispatch('ended');
  harness.chapter('#how').onEnter();

  assert.equal(chapterTwo.playAttempts.length, 2, 'newer playback must remain reusable');
});

test('chapter media state machine rolls back active media errors', () => {
  const harness = createAmbientHarness();
  const chapterOne = harness.media['ch-t1'];
  const chapterTwo = harness.media['ch-t2'];
  const chapterTwoReverse = harness.media['ch-t2r'];

  harness.chapter('#gaps').onEnter();
  chapterOne.dispatch('canplay');
  chapterOne.dispatch('ended');
  harness.chapter('#how').onEnter();
  chapterTwo.dispatch('canplay');
  assert.equal(chapterTwo.listenerCount('ended'), 1);

  chapterTwo.dispatch('error');

  assert.equal(chapterTwo.paused, true);
  assert.equal(chapterTwo.listenerCount('ended'), 0);
  assert.equal(chapterOne.classList.contains('active'), true);
  assert.equal(chapterTwo.classList.contains('active'), false);
  assert.equal(harness.body.classList.contains('chapter-on'), true);
  harness.chapter('#how').onLeaveBack();
  chapterTwoReverse.dispatch('canplay');
  assert.equal(chapterTwoReverse.playAttempts.length, 0, 'requested chapter must roll back to current');
  harness.chapter('#how').onEnter();
  harness.chapter('#how').onLeaveBack();
  assert.equal(chapterTwoReverse.playAttempts.length, 0, 'known failed target must keep requested at current');
});

test('chapter media state machine rolls back the latest pre-play load error', () => {
  const harness = createAmbientHarness();
  const chapterOne = harness.media['ch-t1'];
  const chapterOneReverse = harness.media['ch-t1r'];

  harness.chapter('#gaps').onEnter();
  chapterOne.dispatch('error');
  harness.chapter('#gaps').onLeaveBack();
  chapterOneReverse.dispatch('canplay');

  assert.equal(chapterOneReverse.playAttempts.length, 0, 'failed pending target must roll back to current');
  assert.equal(harness.body.classList.contains('chapter-on'), false);
});

test('chapter media state machine ignores stale load errors', () => {
  const harness = createAmbientHarness();
  const chapterOne = harness.media['ch-t1'];
  const chapterTwo = harness.media['ch-t2'];

  harness.chapter('#gaps').onEnter();
  harness.chapter('#how').onEnter();
  chapterOne.dispatch('error');
  chapterTwo.dispatch('canplay');

  assert.equal(chapterTwo.playAttempts.length, 1);
  assert.equal(chapterTwo.classList.contains('active'), true);
  assert.equal(harness.body.classList.contains('chapter-on'), true);
});

test('homepage places one critical bootstrap before one post-paint loader with no static runtime requests', () => {
  const home = read('index.html');
  const critical = inlineScriptSource(home, 'data-critical-bootstrap');
  const loader = inlineScriptSource(home, 'data-runtime-loader');
  assert.ok(critical.trim().length > 0, 'critical bootstrap must not be empty');
  assert.ok(loader.trim().length > 0, 'runtime loader must not be empty');

  const footerEnd = home.indexOf('</footer>');
  const criticalIndex = home.indexOf('<script data-critical-bootstrap>');
  const loaderIndex = home.indexOf('<script data-runtime-loader>');
  const bodyEnd = home.indexOf('</body>');
  assert.ok(footerEnd >= 0 && footerEnd < criticalIndex, 'critical bootstrap must be after page content');
  assert.ok(criticalIndex < loaderIndex, 'critical bootstrap must precede runtime loader');
  assert.ok(loaderIndex < bodyEnd, 'runtime loader must remain inside body');

  const networkScripts = tags(home, 'script').filter((tag) => attr(tag, 'src'));
  assert.deepEqual(networkScripts, [], 'runtime scripts must not be statically network-bearing');
});

test('main.js transfers hero and preloader ownership while preserving below-fold reveal ownership', () => {
  const main = read('js/main.js');
  assert.doesNotMatch(main, /var heroRise\s*=/);
  assert.doesNotMatch(main, /function revealHero\s*\(/);
  assert.doesNotMatch(main, /function preloader\s*\(/);
  assert.doesNotMatch(main, /['"]#preloader['"]/);
  assert.doesNotMatch(main, /['"]#pre-count-n['"]/);
  assert.match(main, /var revealEls\s*=\s*\$\$\('\[data-reveal\]'\)\.filter\(function \(el\) \{ return !el\.closest\('\.hero'\); \}\);/);
  assert.equal((main.match(/revealEls\.forEach/g) ?? []).length, 2, 'normal and fallback paths must share the same non-hero reveal set');
  assert.doesNotMatch(main, /\$\$\('\[data-reveal\]'\)\.forEach/);
});

test('critical bootstrap preserves exact normal timing, distances, easing curves, and bounded scheduling', () => {
  const source = inlineScriptSource(read('index.html'), 'data-critical-bootstrap');
  const harness = createCriticalHarness();
  vm.runInContext(source, harness.context);

  assert.equal(harness.counter.textContent, '0');
  for (const reveal of harness.reveals) {
    assert.equal(reveal.style.opacity, '0');
    assert.equal(criticalTranslateY(reveal.style), 24);
  }
  for (const rise of harness.rises) {
    assert.equal(rise.children.length, 1);
    assert.equal(rise.firstElementChild.className, 'rise-i');
    assert.equal(rise.firstElementChild.style.opacity, '0');
    assert.equal(criticalTranslateY(rise.firstElementChild.style), 34);
  }

  harness.frame(350);
  assert.ok(Math.abs(Number(harness.reveals[0].style.opacity) - 0.875) < 0.000001, '700 ms Power2-out reveal must be 0.875 at halfway');
  assert.ok(Math.abs(criticalTranslateY(harness.reveals[0].style) - 3) < 0.000001);

  harness.frame(450);
  assert.equal(harness.counter.textContent, '100');
  assert.equal(harness.preloader.classList.contains('done'), false);
  harness.frame(509);
  assert.equal(harness.preloader.classList.contains('done'), false);
  harness.frame(510);
  assert.equal(harness.preloader.classList.contains('done'), true, '450 ms counter plus 60 ms hold must dismiss preloader');

  harness.frame(700);
  for (const reveal of harness.reveals) {
    assert.equal(reveal.style.opacity, '1');
    assert.equal(reveal.style.transform, 'none');
  }

  harness.frame(890);
  assert.equal(harness.preloader.style.display, 'none', 'preloader display removal must retain the 380 ms transition allowance');
  harness.frame(960);
  const firstTitle = harness.rises[0].firstElementChild;
  assert.ok(Math.abs(Number(firstTitle.style.opacity) - 0.9375) < 0.000001, '900 ms Power3-out rise must be 0.9375 at halfway');
  assert.ok(Math.abs(criticalTranslateY(firstTitle.style) - 2.125) < 0.000001);

  harness.frame(1410);
  assert.equal(harness.rises[0].firstElementChild.style.transform, 'none');
  assert.notEqual(harness.rises[1].firstElementChild.style.transform, 'none', 'second title must retain the exact 120 ms stagger');
  harness.frame(1530);
  for (const rise of harness.rises) {
    assert.equal(rise.children.length, 1, 'each hero line must be wrapped exactly once');
    assert.equal(rise.firstElementChild.style.opacity, '1');
    assert.equal(rise.firstElementChild.style.transform, 'none');
  }
  assert.equal(harness.pendingRaf(), false, 'critical scheduler must stop after all work completes');
  assert.equal(harness.maxPendingRaf(), 1, 'critical scheduler must queue at most one animation frame');
  harness.frame(2910);
  assert.equal(harness.pendingRaf(), false, '2400 ms safety finalization must not replay completed work');
});

test('critical hero reveals use the exact 86 percent threshold once and clean up guards', () => {
  const source = inlineScriptSource(read('index.html'), 'data-critical-bootstrap');
  const harness = createCriticalHarness({ revealTops: [100, 900, -200, 100, 100] });
  vm.runInContext(source, harness.context);

  assert.equal(harness.listenerCount('scroll'), 1);
  assert.equal(harness.listenerCount('resize'), 1);
  assert.equal(harness.listenerOptions('scroll')[0]?.passive, true);
  assert.equal(harness.listenerOptions('resize')[0]?.passive, true);

  harness.frame(450);
  harness.frame(510);
  harness.frame(700);
  assert.equal(harness.reveals[0].style.transform, 'none');
  assert.equal(harness.reveals[2].style.transform, 'none', 'already-passed deep-scroll content must be exposed');
  assert.equal(harness.reveals[1].style.opacity, '0');
  assert.equal(criticalTranslateY(harness.reveals[1].style), 24);

  harness.reveals[1].top = 860;
  harness.emit('scroll');
  harness.frame(800);
  assert.equal(harness.reveals[1].style.opacity, '0', 'the crossing frame must be the one-shot animation start');
  assert.equal(harness.listenerCount('scroll'), 0);
  assert.equal(harness.listenerCount('resize'), 0);
  harness.frame(1150);
  assert.ok(Math.abs(Number(harness.reveals[1].style.opacity) - 0.875) < 0.000001);
  assert.ok(Math.abs(criticalTranslateY(harness.reveals[1].style) - 3) < 0.000001);
  harness.frame(1530);
  assert.equal(harness.reveals[1].style.opacity, '1');
  assert.equal(harness.reveals[1].style.transform, 'none');
  assert.equal(harness.pendingRaf(), false);

  harness.reveals[1].top = 900;
  harness.emit('scroll');
  assert.equal(harness.pendingRaf(), false, 'completed reveal must not replay after leaving the threshold');
  assert.equal(harness.reveals[1].style.transform, 'none');
});

test('critical bootstrap exposes complete hero content for reduced motion and missing-preloader fallback', () => {
  const source = inlineScriptSource(read('index.html'), 'data-critical-bootstrap');
  for (const options of [{ reduce: true }, { missingPreloader: true }]) {
    const harness = createCriticalHarness(options);
    vm.runInContext(source, harness.context);
    for (const reveal of harness.reveals) {
      assert.equal(reveal.style.opacity, '1');
      assert.equal(reveal.style.transform, 'none');
    }
    for (const rise of harness.rises) {
      assert.equal(rise.children.length, 1);
      assert.equal(rise.firstElementChild.style.opacity, '1');
      assert.equal(rise.firstElementChild.style.transform, 'none');
    }
    assert.equal(harness.pendingRaf(), false);
    if (options.reduce) {
      assert.equal(harness.counter.textContent, '100');
      harness.frame(150);
      assert.equal(harness.preloader.classList.contains('done'), true);
      assert.equal(harness.preloader.style.display, 'none');
    }
  }
});

test('idle runtime startup waits for stable titles plus exactly two paint frames', () => {
  const harness = runRuntimeLoader();
  assert.equal(harness.appended.length, 0);
  harness.setTitlesFinal();
  assert.equal(harness.appended.length, 0);
  assert.equal(harness.pendingRaf(), 1);
  harness.frame(16);
  assert.equal(harness.appended.length, 0, 'first stable-title frame must not start runtime');
  harness.frame(32);
  assert.deepEqual(harness.appended.map((script) => script.src), expectedRuntimeUrls);
  assert.ok(harness.appended.every((script) => script.async === false));
  assert.equal(harness.window.__etRuntimeLoader.reason, 'critical-ready');
  for (const type of ['pointerdown', 'wheel', 'touchstart', 'keydown', 'scroll', 'pageshow']) {
    assert.equal(harness.window.listenerCount(type), 0, `${type} guard must be removed after startup`);
  }
  assert.equal(harness.document.listenerCount('visibilitychange'), 0);
});

test('runtime loader starts once for every approved early path and ignores modifier-only keydown', () => {
  for (const type of ['pointerdown', 'wheel', 'touchstart', 'keydown']) {
    const harness = runRuntimeLoader();
    harness.window.dispatch(type, type === 'keydown' ? { key: 'ArrowDown' } : {});
    assert.equal(harness.appended.length, 5, type);
    harness.window.dispatch('wheel');
    harness.advanceTimers(3000);
    assert.equal(harness.appended.length, 5, `${type} startup must remain one-shot`);
  }

  const modifier = runRuntimeLoader();
  modifier.window.dispatch('keydown', { key: 'Shift', shiftKey: true });
  assert.equal(modifier.appended.length, 0, 'modifier-only keydown must not start runtime');

  assert.equal(runRuntimeLoader({ hash: '#pricing' }).window.__etRuntimeLoader.reason, 'initial-hash');
  assert.equal(runRuntimeLoader({ scrollY: 640 }).window.__etRuntimeLoader.reason, 'initial-scroll');
  assert.equal(runRuntimeLoader({ hidden: true }).window.__etRuntimeLoader.reason, 'hidden-document');

  const pageshow = runRuntimeLoader();
  pageshow.window.scrollY = 480;
  pageshow.window.dispatch('pageshow');
  assert.equal(pageshow.window.__etRuntimeLoader.reason, 'pageshow-scroll');

  const restored = runRuntimeLoader();
  restored.window.scrollY = 480;
  restored.window.dispatch('scroll');
  assert.equal(restored.window.__etRuntimeLoader.reason, 'restored-scroll');

  const safety = runRuntimeLoader();
  safety.advanceTimers(2999);
  assert.equal(safety.appended.length, 0);
  safety.advanceTimers(3000);
  assert.equal(safety.appended.length, 5);
  assert.equal(safety.window.__etRuntimeLoader.reason, 'safety');
});

test('runtime scripts retain async false and execute in declaration order after reversed completion', () => {
  const harness = runRuntimeLoader({ hash: '#pricing' });
  assert.deepEqual(harness.appended.map((script) => script.async), [false, false, false, false, false]);
  for (const index of [4, 3, 2, 1]) harness.completeNetwork(index, true);
  assert.deepEqual(harness.execution, []);
  harness.completeNetwork(0, true);
  assert.deepEqual(harness.execution, expectedRuntimeUrls.map((url) => ({ url, status: 'loaded' })));
  assert.equal(harness.window.__etRuntimeLoader.status, 'complete');
  assert.equal(Array.from(harness.window.__etRuntimeLoader.scripts, (entry) => entry.state).join(','), 'loaded,loaded,loaded,loaded,loaded');
});

test('runtime loader records a failed CDN dependency and continues through both local scripts', () => {
  const harness = runRuntimeLoader({ hash: '#pricing' });
  for (const index of [4, 3, 1, 0]) harness.completeNetwork(index, true);
  harness.completeNetwork(2, false);
  assert.deepEqual(harness.execution.map((entry) => entry.url), expectedRuntimeUrls);
  assert.equal(harness.execution[2].status, 'error');
  assert.deepEqual(harness.execution.slice(3), expectedRuntimeUrls.slice(3).map((url) => ({ url, status: 'loaded' })));
  assert.equal(harness.window.__etRuntimeLoader.status, 'complete-with-errors');
  assert.equal(harness.window.__etRuntimeLoader.scripts[2].state, 'error');
  assert.equal(Array.from(harness.window.__etRuntimeLoader.scripts).slice(3).map((entry) => entry.state).join(','), 'loaded,loaded');
});

test('runtime loader realigns an initial hash after two post-runtime layout frames', () => {
  const harness = runRuntimeLoader({ hash: '#pricing' });
  for (const index of [4, 3, 2, 1, 0]) harness.completeNetwork(index, true);
  assert.equal(harness.window.__etRuntimeLoader.status, 'complete');
  assert.equal(harness.hashTarget.scrollCalls.length, 0);
  harness.frame(16);
  assert.equal(harness.hashTarget.scrollCalls.length, 0);
  harness.frame(32);
  assert.equal(harness.hashTarget.scrollCalls.length, 1);
  assert.equal(harness.hashTarget.scrollCalls[0].block, 'start');
  assert.equal(harness.hashTarget.scrollCalls[0].behavior, 'auto');
  assert.equal(harness.window.__etRuntimeLoader.hashAlignedAt, 32);
});

test('post-interaction hash alignment applies only to a changed actionable hash', () => {
  const harness = runRuntimeLoader();
  harness.window.dispatch('pointerdown');
  assert.equal(harness.window.__etRuntimeLoader.reason, 'interaction-pointerdown');
  harness.window.location.hash = '#pricing';
  for (const index of [4, 3, 2, 1, 0]) harness.completeNetwork(index, true);
  assert.equal(harness.hashTarget.scrollCalls.length, 0);
  harness.frame(16);
  assert.equal(harness.hashTarget.scrollCalls.length, 0);
  harness.frame(32);
  assert.equal(harness.hashTarget.scrollCalls.length, 1);
  assert.equal(harness.hashTarget.scrollCalls[0].block, 'start');
  assert.equal(harness.hashTarget.scrollCalls[0].behavior, 'auto');
  assert.equal(harness.window.__etRuntimeLoader.hashAlignedAt, 32);

  for (const hash of ['#', '#top', '#hero']) {
    const ignored = runRuntimeLoader();
    ignored.window.dispatch('pointerdown');
    ignored.window.location.hash = hash;
    for (const index of [4, 3, 2, 1, 0]) ignored.completeNetwork(index, true);
    ignored.frame(16);
    ignored.frame(32);
    assert.equal(ignored.hashTarget.scrollCalls.length, 0, `${hash} must not be realigned`);
    assert.equal(ignored.window.__etRuntimeLoader.hashAlignedAt, null);
  }
});

test('runtime aligns capture-phase click intent without treating pointerdown as intent', () => {
  const clickTarget = runtimeHashClickTarget('#pricing');
  const cancelled = runRuntimeLoader();
  assert.equal(cancelled.document.listenerCount('click'), 1);
  assert.equal(cancelled.document.listenerOptions('click')[0], true, 'click intent listener must run in capture phase');
  cancelled.window.dispatch('pointerdown', { target: clickTarget });
  for (const index of [0, 1, 2, 3, 4]) cancelled.completeNetwork(index, true);
  assert.equal(cancelled.document.listenerCount('click'), 0, 'completion must remove the temporary click listener');
  cancelled.frame(16);
  cancelled.frame(32);
  assert.equal(cancelled.hashTarget.scrollCalls.length, 0, 'a canceled pointer sequence must not create anchor intent');

  const harness = runRuntimeLoader();
  harness.window.dispatch('pointerdown', { target: clickTarget });
  for (const index of [0, 1, 2, 3]) harness.completeNetwork(index, true);
  assert.equal(harness.window.__etRuntimeLoader.scripts[3].state, 'loaded', 'main.js must load before the click');
  assert.equal(harness.window.__etRuntimeLoader.scripts[4].state, 'loading', 'ambient.js must remain pending through the click');
  let stopped = 0;
  let prevented = 0;
  harness.document.dispatch('click', {
    target: clickTarget,
    stopPropagation() { stopped += 1; },
    preventDefault() { prevented += 1; },
  });
  assert.equal(stopped, 1, 'loading-time capture must block the premature main.js handler');
  assert.equal(prevented, 0, 'native hash default must remain available');
  assert.equal(harness.window.location.hash, '', 'main-intercepted click must not require a native hash mutation');
  harness.completeNetwork(4, true);
  assert.equal(harness.document.listenerCount('click'), 0, 'completion must remove click intent capture before future clicks');
  assert.equal(harness.hashTarget.scrollCalls.length, 0);
  harness.frame(16);
  assert.equal(harness.hashTarget.scrollCalls.length, 0);
  harness.frame(32);
  assert.equal(harness.hashTarget.scrollCalls.length, 1);
  assert.equal(harness.hashTarget.scrollCalls[0].block, 'start');
  assert.equal(harness.hashTarget.scrollCalls[0].behavior, 'auto');
  assert.equal(harness.window.__etRuntimeLoader.hashAlignedAt, 32);
});

test('latest actual hash click outranks an older changed live hash', () => {
  const harness = runRuntimeLoader();
  harness.window.dispatch('pointerdown', { target: runtimeHashClickTarget('#pricing') });
  let firstStopped = 0;
  let firstPrevented = 0;
  harness.document.dispatch('click', {
    target: runtimeHashClickTarget('#pricing'),
    stopPropagation() { firstStopped += 1; },
    preventDefault() { firstPrevented += 1; },
  });
  assert.equal(firstStopped, 1);
  assert.equal(firstPrevented, 0);
  harness.window.location.hash = '#pricing';

  for (const index of [0, 1, 2, 3]) harness.completeNetwork(index, true);
  let secondStopped = 0;
  let secondPrevented = 0;
  harness.document.dispatch('click', {
    target: runtimeHashClickTarget('#book'),
    stopPropagation() { secondStopped += 1; },
    preventDefault() { secondPrevented += 1; },
  });
  assert.equal(secondStopped, 1);
  assert.equal(secondPrevented, 0);
  assert.equal(harness.window.location.hash, '#pricing', 'test keeps the older native hash to expose precedence');

  harness.completeNetwork(4, true);
  harness.frame(16);
  harness.frame(32);
  assert.equal(harness.hashTarget.scrollCalls.length, 0, 'older Pricing hash must not win');
  assert.equal(harness.bookTarget.scrollCalls.length, 1, 'latest actual Book click must win');
  assert.equal(harness.bookTarget.scrollCalls[0].block, 'start');
  assert.equal(harness.bookTarget.scrollCalls[0].behavior, 'auto');
  assert.equal(harness.window.__etRuntimeLoader.hashAlignedAt, 32);
  assert.equal(harness.document.listenerCount('click'), 0);
});

test('latest ignored hash click suppresses older actionable navigation', () => {
  for (const ignoredHash of ['#', '#top', '#hero']) {
    const harness = runRuntimeLoader();
    harness.window.dispatch('pointerdown', { target: runtimeHashClickTarget('#pricing') });
    harness.document.dispatch('click', {
      target: runtimeHashClickTarget('#pricing'),
      stopPropagation() {},
      preventDefault() { assert.fail('capture must not prevent native default'); },
    });
    harness.window.location.hash = '#pricing';
    for (const index of [0, 1, 2, 3]) harness.completeNetwork(index, true);

    let stopped = 0;
    let prevented = 0;
    harness.document.dispatch('click', {
      target: runtimeHashClickTarget(ignoredHash),
      stopPropagation() { stopped += 1; },
      preventDefault() { prevented += 1; },
    });
    assert.equal(stopped, 1, `${ignoredHash} must still bypass premature main.js handling`);
    assert.equal(prevented, 0, `${ignoredHash} must preserve native default behavior`);
    harness.completeNetwork(4, true);
    harness.frame(16);
    harness.frame(32);
    assert.equal(harness.hashTarget.scrollCalls.length, 0, `${ignoredHash} must suppress older Pricing alignment`);
    assert.equal(harness.bookTarget.scrollCalls.length, 0);
    assert.equal(harness.window.__etRuntimeLoader.hashAlignedAt, null);
    assert.equal(harness.window.__etRuntimeLoader.restoredAlignedAt, null);
    assert.equal(harness.document.listenerCount('click'), 0);
  }
});

test('runtime loader restores section-relative scroll after two post-runtime layout frames', () => {
  const harness = runRuntimeLoader({ hash: '#top', scrollY: 640, sectionTop: -120 });
  assert.equal(harness.window.__etRuntimeLoader.reason, 'initial-scroll');
  harness.restoreSection.top = 1480;
  for (const index of [4, 3, 2, 1, 0]) harness.completeNetwork(index, true);
  harness.frame(16);
  assert.equal(harness.window.scrollCalls.length, 0);
  harness.frame(32);
  assert.equal(harness.window.scrollCalls.length, 1);
  assert.equal(harness.window.scrollCalls[0].top, 1600);
  assert.equal(harness.window.scrollCalls[0].left, 0);
  assert.equal(harness.window.scrollCalls[0].behavior, 'auto');
  assert.equal(harness.window.__etRuntimeLoader.restoreAnchor, 'pricing');
  assert.equal(harness.window.__etRuntimeLoader.restoredAlignedAt, 32);
});

test('only poster permits source-copy byte equality', () => {
  assert.equal(imageHasAllowedByteSize({ logicalId: 'poster', sourceBytes: 100, optimizedBytes: 100 }), true);
  assert.equal(imageHasAllowedByteSize({ logicalId: 'poster', sourceBytes: 100, optimizedBytes: 101 }), false);
  assert.equal(imageHasAllowedByteSize({ logicalId: 'social', sourceBytes: 100, optimizedBytes: 100 }), false);
  assert.equal(imageHasAllowedByteSize({ logicalId: 'social', sourceBytes: 100, optimizedBytes: 99 }), true);
});

test('versioned media manifest records passing, byte-accurate assets', () => {
  assert.equal(contractExists(manifestPath), true, `${manifestPath} must exist`);
  const manifest = JSON.parse(contractRead(manifestPath));
  assert.equal(manifest.release, '2026-07-14');
  assert.equal(manifest.videoQuality.metric, 'VMAF');
  assert.equal(manifest.videoQuality.minimum, 95);
  assert.equal(manifest.videos.length, expectedVideos.length);
  assert.equal(manifest.images.length, expectedImages.length);

  for (const expected of expectedVideos) {
    const entry = manifest.videos.find((item) => item.logicalId === expected.logicalId);
    assert.ok(entry, `manifest missing ${expected.logicalId}`);
    assert.equal(entry.output, expected.output);
    assert.equal(exists(entry.output), true, `${entry.output} must exist`);
    assert.equal(entry.optimizedBytes, size(entry.output));
    assert.equal(entry.optimizedSha256, sha256(entry.output));
    assert.match(entry.sourceSha256, /^[a-f0-9]{64}$/);
    assert.ok(entry.sourceBytes > entry.optimizedBytes, `${entry.logicalId} must be smaller`);
    assert.ok(entry.vmaf >= 95, `${entry.logicalId} VMAF ${entry.vmaf}`);
    assert.equal(entry.visualReview, 'approved');
    assert.equal(entry.sourceProbe.width, expected.width);
    assert.equal(entry.sourceProbe.height, expected.height);
    assert.equal(entry.optimizedProbe.width, expected.width);
    assert.equal(entry.optimizedProbe.height, expected.height);
    assert.equal(entry.optimizedProbe.codec, 'h264');
    assert.equal(entry.optimizedProbe.pixelFormat, 'yuv420p');
    assert.equal(fps(entry.sourceProbe.frameRate), 24);
    assert.equal(fps(entry.optimizedProbe.frameRate), 24);
    assert.ok(Math.abs(entry.sourceProbe.frameCount - entry.optimizedProbe.frameCount) <= 1);
    assert.ok(Math.abs(entry.sourceProbe.durationSeconds - entry.optimizedProbe.durationSeconds) <= (1 / 24) + 0.001);
    assert.match(entry.encoding, /^libx264 preset=slow crf=\d+ yuv420p faststart no-audio$/);
  }

  const videoBytes = expectedVideos.reduce((total, item) => total + size(item.output), 0);
  assert.equal(manifest.aggregateOptimizedVideoBytes, videoBytes);
  assert.ok(videoBytes <= 15 * 1024 * 1024, `video total is ${videoBytes} bytes`);

  for (const expected of expectedImages) {
    const entry = manifest.images.find((item) => item.logicalId === expected.logicalId);
    assert.ok(entry, `manifest missing ${expected.logicalId}`);
    assert.equal(entry.output, expected.output);
    assert.equal(exists(entry.output), true, `${entry.output} must exist`);
    assert.equal(entry.optimizedBytes, size(entry.output));
    assert.equal(entry.optimizedSha256, sha256(entry.output));
    assert.match(entry.sourceSha256, /^[a-f0-9]{64}$/);
    assert.ok(imageHasAllowedByteSize(entry), `${entry.logicalId} violates image byte-size contract`);
    assert.ok(entry.ssim >= 0.98, `${entry.logicalId} SSIM ${entry.ssim}`);
    assert.equal(entry.width, expected.width);
    assert.equal(entry.height, expected.height);
    assert.equal(entry.visualReview, 'approved');
  }
});

test('legacy heavy assets are absent after references move', () => {
  for (const relative of legacyAssets) {
    assert.equal(exists(relative), false, `${relative} must be removed from the deploy tree`);
  }
});

test('self-hosted fonts replace Google Fonts with exactly two preloads', () => {
  for (const relative of [...expectedFonts, retainedFraunces.output, ...expectedLicenses]) {
    assert.equal(exists(relative), true, `${relative} must exist`);
    assert.ok(size(relative) > 0, `${relative} must be non-empty`);
  }

  assert.equal(size(promotedFraunces.output), promotedFraunces.bytes, 'promoted Fraunces bytes');
  assert.equal(sha256(promotedFraunces.output), promotedFraunces.sha256, 'promoted Fraunces SHA-256');
  assert.equal(size(retainedFraunces.output), retainedFraunces.bytes, 'retained Fraunces bytes');
  assert.equal(sha256(retainedFraunces.output), retainedFraunces.sha256, 'retained Fraunces SHA-256');

  const tokenCss = read('assets/tokens.css');
  assert.doesNotMatch(tokenCss, /fonts\.(?:googleapis|gstatic)\.com/i);
  assert.match(tokenCss, new RegExp(escapeRegex('/' + promotedFraunces.output)), 'active promoted Fraunces URL');
  assert.doesNotMatch(tokenCss, new RegExp(escapeRegex('/' + retainedFraunces.output)), 'retained Fraunces is compatibility-only');
  for (const family of ['Inter', 'Space Grotesk', 'JetBrains Mono', 'Fraunces']) {
    assert.match(tokenCss, new RegExp(`font-family:\\s*['\"]${escapeRegex(family)}['\"]`, 'i'));
  }
  assert.ok((tokenCss.match(/font-display:\s*swap/gi) ?? []).length >= 4);

  for (const file of htmlFiles) {
    const html = read(file);
    assert.doesNotMatch(html, /fonts\.(?:googleapis|gstatic)\.com/i, file);
    const preloads = tags(html, 'link').filter((tag) => attr(tag, 'rel') === 'preload' && attr(tag, 'as') === 'font');
    assert.equal(preloads.length, 2, `${file} font preload count`);
    assert.deepEqual(preloads.map((tag) => attr(tag, 'href')).sort(), [
      `/assets/fonts/inter-latin-v${release}.woff2`,
      `/assets/fonts/space-grotesk-latin-v${release}.woff2`,
    ].sort(), `${file} critical font preloads`);
    for (const preload of preloads) {
      assert.equal(attr(preload, 'type'), 'font/woff2', `${file} preload type`);
      assert.match(preload, /\bcrossorigin(?:=(['\"]).*?\1)?/i, `${file} preload crossorigin`);
    }
  }
});

test('page references resolve and every image declares intrinsic geometry', () => {
  for (const file of htmlFiles) {
    const html = read(file);
    for (const marker of ['T' + 'ODO', 'T' + 'BD', 'lorem ipsum', 'your business name']) {
      assert.doesNotMatch(html, new RegExp(escapeRegex(marker), 'i'), `${file} unfilled copy marker ${marker}`);
    }
    for (const tag of tags(html, 'img')) {
      assert.match(attr(tag, 'width') ?? '', /^\d+$/, `${file} image width: ${tag}`);
      assert.match(attr(tag, 'height') ?? '', /^\d+$/, `${file} image height: ${tag}`);
      assert.ok(Number(attr(tag, 'width')) > 0, `${file} image width must be positive`);
      assert.ok(Number(attr(tag, 'height')) > 0, `${file} image height must be positive`);
    }

    for (const match of html.matchAll(/\b(?:src|href|poster|data-src)=(['\"])(.*?)\1/gi)) {
      const target = localTarget(file, match[2]);
      if (target) assert.equal(exists(target), true, `${file} references missing ${target}`);
    }
  }

  for (const file of htmlFiles.filter((item) => item !== '404.html')) {
    const html = read(file);
    assert.match(html, new RegExp(`<meta\\s+property="og:image"\\s+content="${escapeRegex(publicBase + socialImage)}"`, 'i'), `${file} og:image`);
    assert.match(html, new RegExp(`<meta\\s+name="twitter:image"\\s+content="${escapeRegex(publicBase + socialImage)}"`, 'i'), `${file} twitter:image`);
  }

  const review = read('blog/review-automation-local-seo/index.html');
  assert.match(review, new RegExp(`<img\\s+src="${escapeRegex(socialImage)}"[^>]*\\bwidth="1376"[^>]*\\bheight="768"`, 'i'));
});

test('poster-first media declarations cannot fetch before capability activation', () => {
  const home = read('index.html');
  assert.equal(tags(home, 'source').length, 0, 'homepage must not contain network-bearing video source tags');
  const expected = new Map([
    ['world-video', `assets/video/city-loop-v${release}.mp4`],
    ['ch-t1', `assets/video/t1-v${release}.mp4`],
    ['ch-t1r', `assets/video/t1r-v${release}.mp4`],
    ['ch-t2', `assets/video/t2-v${release}.mp4`],
    ['ch-t2r', `assets/video/t2r-v${release}.mp4`],
    ['ch-t3', `assets/video/t3-v${release}.mp4`],
    ['ch-t3r', `assets/video/t3r-v${release}.mp4`],
  ]);
  const videos = tags(home, 'video');
  assert.equal(videos.length, expected.size);
  for (const tag of videos) {
    const id = attr(tag, 'id');
    assert.equal(attr(tag, 'src'), null, `${id} must not carry src`);
    assert.equal(attr(tag, 'data-src'), expected.get(id), `${id} data-src`);
    assert.equal(attr(tag, 'preload'), 'none', `${id} preload`);
  }
  const world = videos.find((tag) => attr(tag, 'id') === 'world-video');
  assert.equal(attr(world, 'poster'), `assets/city-poster-v${release}.webp`);
});

test('runtime scheduling changes preserve motion constants', () => {
  const ambient = read('js/ambient.js');
  const main = read('js/main.js');
  const css = read('css/styles.css');

  assert.match(ambient, /var requestGeneration = 0;/);
  assert.match(ambient, /requestIdleCallback\(loadPair, \{ timeout: 750 \}\)/);
  assert.match(ambient, /rootMargin: '200% 0px'/);
  assert.match(ambient, /Math\.abs\(window\.scrollY - initialScrollY\) >= 8/);
  assert.match(ambient, /document\.hidden/);
  assert.doesNotMatch(ambient, /\[\]\.concat\(FWD, REV\)\.forEach[\s\S]{0,160}\.load\(\)/);

  assert.match(ambient, /var bands = \[\[0\.04, 0\.20, 0\.40, 0\.46\], \[0\.46, 0\.60, 0\.74, 0\.80\], \[0\.80, 0\.90, 1\.01, 1\.06\]\];/);
  assert.match(ambient, /start: 'top 60%', end: 'bottom 60%'/);
  assert.match(ambient, /trigger: section, start: 'top top', end: '\+=1600', scrub: true, pin: true, anticipatePin: 1/);

  assert.match(main, /var ringRaf = 0;/);
  assert.match(main, /var lenisRaf = 0;/);
  assert.match(main, /function scheduleRefresh\(\)/);
  assert.match(main, /terminalTimer = setInterval\(addOps, 1900\)/);
  assert.match(main, /document\.hidden/);
  assert.match(main, /classList\.add\('motion-active'\)/);
  assert.match(main, /classList\.remove\('motion-active'\)/);
  assert.match(main, /if \(settleTimer\) \{ clearTimeout\(settleTimer\); settleTimer = null; tile\.style\.transition = ''; \}/);

  assert.match(cssRule(css, '.preloader'), /transition:transform \.35s var\(--et-ease\)/);
  assert.doesNotMatch(cssRule(css, '.btn'), /will-change/i);
  assert.doesNotMatch(cssRule(css, '.card'), /will-change/i);
  assert.match(cssRule(css, '.motion-active'), /will-change:transform/);

  assert.match(main, /var revealEls\s*=\s*\$\$\('\[data-reveal\]'\)\.filter\(function \(el\) \{ return !el\.closest\('\.hero'\); \}\);/);
  assert.match(main, /duration: 0\.7, ease: 'power2\.out', scrollTrigger: \{ trigger: el, start: 'top 86%' \}/);
  assert.match(main, /duration: 0\.9, stagger: 0\.09, ease: 'power3\.out'/);
});

test('homepage embeds only an approved revisioned CSS split while other routes retain linked styles', () => {
  const home = read('index.html');
  const markedStyles = tags(home, 'style')
    .filter((tag) => /\bdata-homepage-styles\b/i.test(tag));
  assert.equal(markedStyles.length, 1, 'homepage marked style count');
  assert.equal(attr(markedStyles[0], 'data-tokens-revision'), tokensRevision);
  assert.equal(attr(markedStyles[0], 'data-styles-revision'), '3');

  const networkStyles = tags(home, 'link').filter((tag) => {
    const rel = attr(tag, 'rel');
    return rel === 'stylesheet' || (rel === 'preload' && attr(tag, 'as') === 'style');
  });
  assert.deepEqual(networkStyles, [], 'homepage must not request an external stylesheet');

  const wrapped = normalizeLf(inlineStyleSource(home, 'data-homepage-styles'));
  assert.equal(wrapped.startsWith('\n'), true, 'inline style opening structural newline');
  assert.equal(wrapped.endsWith('\n'), true, 'inline style closing structural newline');
  const embedded = wrapped.slice(1, -1);
  const tokens = normalizeLf(read('assets/tokens.css'));
  const sharedStyles = normalizeLf(read('css/styles.css'));
  const commercialMarker = '/* ---- commercial solution and industry pages ---- */';
  const blogMarker = '/* ---- blog ---- */';
  const recentWorkMarker = '/* ---- recent work ---- */';
  const commercialIndex = sharedStyles.indexOf(commercialMarker);
  assert.notEqual(commercialIndex, -1, 'shared stylesheet commercial marker');
  assert.equal(
    sharedStyles.split(commercialMarker).length - 1,
    1,
    'shared stylesheet commercial marker count',
  );
  const sharedHomepageCss = sharedStyles.slice(0, commercialIndex);
  assert.equal(sharedHomepageCss.includes(commercialMarker), false, 'commercial CSS excluded from homepage shared variant');
  assert.equal(embedded.startsWith(tokens + '\n'), true, 'homepage tokens remain the exact normalized prefix');
  assert.equal(embedded.includes(commercialMarker), false, 'commercial CSS must not enter homepage embedded variants');

  const task5Embedded = tokens + '\n' + sharedHomepageCss + homepageAcquisitionCss;
  const blogIndex = sharedHomepageCss.indexOf(blogMarker);
  const recentWorkIndex = sharedHomepageCss.indexOf(recentWorkMarker);
  assert.notEqual(blogIndex, -1, 'homepage shared CSS blog marker');
  assert.notEqual(recentWorkIndex, -1, 'homepage shared CSS recent-work marker');
  assert.ok(blogIndex < recentWorkIndex, 'homepage blog region precedes recent-work CSS');
  const task8Embedded =
    tokens +
    '\n' +
    sharedHomepageCss.slice(0, blogIndex) +
    sharedHomepageCss.slice(recentWorkIndex) +
    homepageAcquisitionCss;
  assert.ok(
    [task5Embedded, task8Embedded].includes(embedded),
    'homepage embedded CSS must equal one approved tokens/shared/acquisition variant exactly',
  );

  for (const [relative, expectedHash] of Object.entries(expectedCssSha256)) {
    assert.equal(
      crypto.createHash('sha256').update(normalizeLf(read(relative))).digest('hex'),
      expectedHash,
      relative + ' pinned SHA-256',
    );
  }

  for (const file of htmlFiles.filter((relative) => relative !== 'index.html')) {
    const stylesheets = tags(read(file), 'link')
      .filter((tag) => attr(tag, 'rel') === 'stylesheet')
      .map((tag) => attr(tag, 'href'));
    assert.deepEqual(
      stylesheets,
      expectedSecondaryStylesheets(file),
      file + ' revised stylesheets',
    );
  }
});

test('immutable cache policy applies only to release-versioned assets', () => {
  for (const file of htmlFiles.filter((relative) => relative !== 'index.html')) {
    const stylesheets = tags(read(file), 'link')
      .filter((tag) => attr(tag, 'rel') === 'stylesheet')
      .map((tag) => attr(tag, 'href'));
    assert.deepEqual(stylesheets, expectedSecondaryStylesheets(file), `${file} revised stylesheets`);
  }
  const homeScripts = tags(read('index.html'), 'script').map((tag) => attr(tag, 'src')).filter(Boolean);
  assert.deepEqual(homeScripts, [], 'homepage runtime must remain dynamically scheduled');
  const loader = runRuntimeLoader({ hash: '#pricing' });
  assert.deepEqual(loader.appended.map((script) => script.src).slice(-2), [
    'js/main.js?v=4',
    'js/ambient.js?v=2',
  ], 'homepage local runtime revisions');

  const headers = read('_headers');
  const immutable = 'Cache-Control: public, max-age=31536000, immutable';
  const paths = [
    ...expectedVideos.map((item) => `/${item.output}`),
    ...expectedFonts.map((item) => `/${item}`),
    `/${retainedFraunces.output}`,
    ...expectedImages.map((item) => `/${item.output}`),
  ];
  for (const assetPath of paths) {
    const block = new RegExp(`^${escapeRegex(assetPath)}\\r?\\n\\s+${escapeRegex(immutable)}$`, 'm');
    assert.match(headers, block, `${assetPath} immutable header`);
  }
  assert.doesNotMatch(headers, /^\/(?:\*|index\.html|css\/\*|js\/\*)\r?\n\s+Cache-Control:.*immutable/im);
});
