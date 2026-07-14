import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(process.env.SITE_ROOT ?? '.');
const contractRoot = path.resolve(process.env.CONTRACT_ROOT ?? '.');
const release = '20260714';
const publicBase = 'https://efficientautomate.com';
const socialImage = `/assets/og-v${release}.jpg`;
const manifestPath = '.github/performance/media-manifest.json';

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
  `assets/fonts/fraunces-italic-latin-v${release}.woff2`,
];

const expectedLicenses = [
  'assets/fonts/OFL-Inter.txt',
  'assets/fonts/OFL-Space-Grotesk.txt',
  'assets/fonts/OFL-JetBrains-Mono.txt',
  'assets/fonts/OFL-Fraunces.txt',
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

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}=(['\"])(.*?)\\1`, 'i'));
  return match?.[2] ?? null;
}

function tags(html, name) {
  return html.match(new RegExp(`<${name}\\b[^>]*>`, 'gi')) ?? [];
}

function fps(value) {
  const [numerator, denominator] = String(value).split('/').map(Number);
  return denominator ? numerator / denominator : numerator;
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
    assert.ok(entry.sourceBytes > entry.optimizedBytes, `${entry.logicalId} must be smaller`);
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
  for (const relative of [...expectedFonts, ...expectedLicenses]) {
    assert.equal(exists(relative), true, `${relative} must exist`);
    assert.ok(size(relative) > 0, `${relative} must be non-empty`);
  }

  const tokenCss = read('assets/tokens.css');
  assert.doesNotMatch(tokenCss, /fonts\.(?:googleapis|gstatic)\.com/i);
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

  assert.match(main, /var dur = 450, t0 = performance\.now\(\);/);
  assert.match(main, /setTimeout\(done, 60\)/);
  assert.match(main, /setTimeout\(done, 900\)/);
  assert.match(main, /setTimeout\(done, 150\)/);
  assert.match(main, /var ringRaf = 0;/);
  assert.match(main, /var lenisRaf = 0;/);
  assert.match(main, /function scheduleRefresh\(\)/);
  assert.match(main, /terminalTimer = setInterval\(addOps, 1900\)/);
  assert.match(main, /document\.hidden/);
  assert.match(main, /classList\.add\('motion-active'\)/);
  assert.match(main, /classList\.remove\('motion-active'\)/);

  assert.match(cssRule(css, '.preloader'), /transition:transform \.35s var\(--et-ease\)/);
  assert.doesNotMatch(cssRule(css, '.btn'), /will-change/i);
  assert.doesNotMatch(cssRule(css, '.card'), /will-change/i);
  assert.match(cssRule(css, '.motion-active'), /will-change:transform/);

  assert.match(main, /duration: 0\.9, ease: 'power3\.out', stagger: 0\.12/);
  assert.match(main, /duration: 0\.7, ease: 'power2\.out', scrollTrigger: \{ trigger: el, start: 'top 86%' \}/);
  assert.match(main, /duration: 0\.9, stagger: 0\.09, ease: 'power3\.out'/);
});

test('immutable cache policy applies only to release-versioned assets', () => {
  for (const file of htmlFiles) {
    const stylesheets = tags(read(file), 'link')
      .filter((tag) => attr(tag, 'rel') === 'stylesheet')
      .map((tag) => attr(tag, 'href'));
    assert.deepEqual(stylesheets, ['/assets/tokens.css?v=2', '/css/styles.css?v=3'], `${file} revised stylesheets`);
  }
  const homeScripts = tags(read('index.html'), 'script').map((tag) => attr(tag, 'src')).filter(Boolean);
  assert.ok(homeScripts.includes('js/main.js?v=3'), 'homepage main.js revision');
  assert.ok(homeScripts.includes('js/ambient.js?v=2'), 'homepage ambient.js revision');

  const headers = read('_headers');
  const immutable = 'Cache-Control: public, max-age=31536000, immutable';
  const paths = [
    ...expectedVideos.map((item) => `/${item.output}`),
    ...expectedFonts.map((item) => `/${item}`),
    ...expectedImages.map((item) => `/${item.output}`),
  ];
  for (const assetPath of paths) {
    const block = new RegExp(`^${escapeRegex(assetPath)}\\r?\\n\\s+${escapeRegex(immutable)}$`, 'm');
    assert.match(headers, block, `${assetPath} immutable header`);
  }
  assert.doesNotMatch(headers, /^\/(?:\*|index\.html|css\/\*|js\/\*)\r?\n\s+Cache-Control:.*immutable/im);
});
