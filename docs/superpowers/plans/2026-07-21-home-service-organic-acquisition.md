# Home-Service Organic Acquisition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a nationwide home-service acquisition site that earns qualified organic and AI-search discovery for lead recovery, booking, and review automation without changing the existing video or motion experience.

**Architecture:** Keep the product as static HTML, CSS, and JavaScript. Add six focused commercial routes, reposition the homepage, repair unsupported trust copy, and publish a selective crawler policy. Use an ignored, mutable `.validation/home-service-release-v1/` workspace for contract and browser evidence; freeze evidence only after the committed candidate passes.

**Tech Stack:** HTML5, CSS custom properties from `assets/tokens.css`, vanilla JavaScript, Node.js 24 core modules for static validation, Python's standard-library HTTP server, real Chrome/Playwright browser qualification, Git, GitHub, and Cloudflare Pages.

**Design Contract:** `docs/superpowers/specs/2026-07-21-home-service-organic-acquisition-design.md` at commit `177bc8c8678cfe28341abce802db2def935ab4a7`.

## Global Constraints

- Work only in `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site` on branch `agent/performance-without-motion-loss` unless the execution skill creates an isolated worktree from the accepted plan HEAD.
- Remote authority is `https://github.com/tarik-ux/efficient-technologies-site.git`; live authority is `https://efficientautomate.com/` on Cloudflare Pages.
- Preserve plain static HTML/CSS/JS: no `package.json`, framework, CMS, template generator, or build step.
- Use only brand values already defined in `assets/tokens.css`; do not invent colors, typefaces, spacing scales, radii, or motion values.
- Preserve the seven video files byte-for-byte and preserve poster behavior, scene order, scroll triggers, chapter reversals, zoom behavior, loader, cursor, ambient effects, reduced-motion behavior, and mobile/desktop object positioning.
- `js/ambient.js`, `assets/tokens.css`, the homepage critical-bootstrap script, and the homepage runtime-loader script remain byte-identical.
- `js/main.js` may change only the approved review-gating demo sentence; its normalized SHA-256 must remain `f6ba2c8c745cf2ff1f976c57aa5d1192ebb366448a4b22c0b25fe8264139977e`.
- The existing visual design and animation system remain. Content, semantic order, links, metadata, static secondary-page layout, and non-visible delivery may change.
- Target local-serving home-service businesses anywhere in the United States, beginning with HVAC, plumbing, and electrical contractors. Do not target enterprise buyers.
- Lead Recovery is the flagship. Booking and Review Automation are supporting systems.
- Every primary commercial CTA is exactly `Book a Free Automation Audit` and uses the existing Cal.com event.
- Keep Launch at `$997` one-time, Growth at `$1,997` plus `$497/month`, and Systems at custom pricing. The Growth badge is exactly `Best value`.
- Never fabricate testimonials, customer logos, client counts, revenue lifts, rankings, citations, or case-study results.
- Do not use review gating, sentiment-based public-review routing, or incentives for positive reviews.
- Do not add city/state landing pages, false local offices, `LocalBusiness`, or `ProfessionalService` schema. Treat Sheridan as a mailing address and keep `areaServed` equal to the United States.
- Do not add `FAQPage` schema or `llms.txt` in this release.
- Allow the approved search, assistant, grounding, and strategic model agents; retain the approved lower-priority blocks. Crawler eligibility is not described as ranking.
- Keep validation tooling ignored and outside the Git product tree. It stays mutable through development and becomes read-only only after final acceptance.
- Do not reuse, repair, or extend V11. Every browser phase has an explicit deadline and cleans only its own disposable state.
- Routine scoped edits, tests, commits, push, deployment, and verification proceed without repeated approval after plan selection. Stop only for a material scope change, destructive action, new paid service, unapproved credential path, or unavailable owner authentication.

## File Structure

### Product files created

- `solutions/lead-recovery-automation/index.html` — flagship lead-recovery commercial page.
- `solutions/booking-automation/index.html` — booking and scheduling commercial page.
- `solutions/review-automation/index.html` — policy-safe review-request commercial page.
- `industries/hvac-automation/index.html` — HVAC-specific workflow page.
- `industries/plumbing-automation/index.html` — plumbing-specific workflow page.
- `industries/electrical-automation/index.html` — electrical-contractor workflow page.
- `.gitignore` — excludes the mutable `.validation/` workspace from Git and Cloudflare deployment.

### Product files modified

- `index.html` — positioning, homepage information architecture, proof, pricing badge, guarantee, schema, CTA, and removal of homepage-unused blog CSS.
- `css/styles.css` — shared static commercial-page styles; no homepage motion changes.
- `js/main.js` — one policy correction in illustrative terminal copy only.
- `about/index.html` — home-service positioning, truthful mailing-address language, founder/process trust, and primary CTA.
- `blog/index.html` — home-service editorial framing and truthful excerpts.
- `blog/crm-automation-local-business/index.html` — unsupported-claim repair and Lead Recovery links.
- `blog/business-process-automation-small-business/index.html` — unsupported-claim repair and solution links.
- `blog/booking-automation-after-hours/index.html` — unsupported-claim repair and Booking Automation links.
- `blog/review-automation-local-seo/index.html` — review-gating removal and Review Automation links.
- `blog/software-consulting-vs-in-house/index.html` — updated CTA and commercial internal links.
- `sitemap.xml` — six new canonicals plus accurate material-update dates.
- `robots.txt` — custom allow/block and content-use policy after Cloudflare's managed policy is disabled.
- `_headers` — cache rules for shared CSS, JavaScript, art, and logos.

### Local-only validation files created during execution

- `.validation/home-service-release-v1/baseline.json` — accepted immutable product identities and baseline HTML bytes.
- `.validation/home-service-release-v1/static-check.mjs` — cumulative phase-aware contract validator.
- `.validation/home-service-release-v1/baseline/` — baseline browser and performance observations.
- `.validation/home-service-release-v1/candidate/` — disposable candidate observations.
- `.validation/home-service-release-v1/final/` — final accepted local and live evidence, made read-only only at the end.

---

### Task 1: Establish the mutable validation lane and capture the baseline

**Files:**
- Create: `.gitignore`
- Create locally, ignored: `.validation/home-service-release-v1/baseline.json`
- Create locally, ignored: `.validation/home-service-release-v1/static-check.mjs`
- Create locally, ignored: `.validation/home-service-release-v1/baseline/`
- Test: `.validation/home-service-release-v1/static-check.mjs`

**Interfaces:**
- Consumes: design base `177bc8c8678cfe28341abce802db2def935ab4a7` or the accepted plan commit descended from it.
- Produces: `node .validation/home-service-release-v1/static-check.mjs <phase>`, where `<phase>` is one of `integrity`, `lead`, `solutions`, `industries`, `homepage`, `cluster`, `technical`, or `all`; later tasks depend on cumulative PASS behavior.

- [ ] **Step 1: Reauthenticate the clean starting point**

Run:

```powershell
git status --short --branch
git rev-parse HEAD
git remote get-url origin
if (Test-Path -LiteralPath '.git\index.lock') { throw 'BLOCKED: .git/index.lock exists' }
```

Expected: branch `agent/performance-without-motion-loss`, clean status, the committed plan HEAD, remote `https://github.com/tarik-ux/efficient-technologies-site.git`, and no index lock. If an execution worktree is used, its branch name may differ, but its base must be the accepted plan HEAD and its remote must match.

- [ ] **Step 2: Write the failing isolation test**

Run:

```powershell
git check-ignore .validation/home-service-release-v1/static-check.mjs
```

Expected: exit `1` with no output because `.validation/` is not ignored yet.

- [ ] **Step 3: Add the validation-workspace exclusion**

Create `.gitignore` with exactly:

```gitignore
.validation/
```

- [ ] **Step 4: Verify the isolation rule passes**

Run:

```powershell
git check-ignore -v .validation/home-service-release-v1/static-check.mjs
```

Expected: PASS with `.gitignore:1:.validation/`.

- [ ] **Step 5: Create the accepted baseline manifest**

Create ignored `.validation/home-service-release-v1/baseline.json`:

```json
{
  "designBase": "177bc8c8678cfe28341abce802db2def935ab4a7",
  "indexBytes": 63436,
  "poster": {
    "assets/city-poster-v20260714.webp": "098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb"
  },
  "videos": {
    "assets/video/city-loop-v20260714.mp4": "63a1b06128c146346a558a0b61f818d068d29679352e2d4118b1d8fb1cc02078",
    "assets/video/t1-v20260714.mp4": "a9fcb30e40497d2326c21f2ffefff74a701503389e2f2cacdf447181e950f1e2",
    "assets/video/t1r-v20260714.mp4": "63689abed09831f05b5303cf459eefc17383e64fd130ed6e69ab55f6d9162aaa",
    "assets/video/t2-v20260714.mp4": "200d22bceeb744dfcc16e762e79adfb1c640eaaac5263cc4336b6f3592b6f150",
    "assets/video/t2r-v20260714.mp4": "33d8e4f47ed70f4defb50ec7016032d683841990cad950894d0ad52808b656da",
    "assets/video/t3-v20260714.mp4": "f8c8f0a610cda8f522911c6c533a206aaa977722b6c7c5b86ee19602f15e988a",
    "assets/video/t3r-v20260714.mp4": "52bb9bc7520f33af555b39864136394a458ecbf42d9d52e13be7747727af3e6a"
  },
  "frozenFiles": {
    "assets/tokens.css": "5fa72341c7d984b3b63be2c9b2997a4a257f268e2a464c9f534a8446e0c39c88",
    "js/ambient.js": "1a97a2a1543d0f84098a02dabc3d8c2ab3372b7b7b96ecc62e361db63d098609"
  },
  "frozenInlineScripts": {
    "critical-bootstrap": "a04597154d1c59d8d440c73e48d0a3fb01cf2e66c1c215816e08ea6a05ae3357",
    "runtime-loader": "986f68f030654c5723c65e3389af764e4ddac631fa557029551ea3f0479255a0"
  },
  "normalizedMainJs": "f6ba2c8c745cf2ff1f976c57aa5d1192ebb366448a4b22c0b25fe8264139977e"
}
```

- [ ] **Step 6: Create the phase-aware static validator**

Create ignored `.validation/home-service-release-v1/static-check.mjs`:

```javascript
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..', '..');
const phase = process.argv[2] || 'integrity';
const order = ['integrity', 'lead', 'solutions', 'industries', 'homepage', 'cluster', 'technical', 'all'];
if (!order.includes(phase)) throw new Error(`Unknown phase: ${phase}`);
const atLeast = name => order.indexOf(phase) >= order.indexOf(name);
const baseline = JSON.parse(fs.readFileSync(path.join(here, 'baseline.json'), 'utf8'));
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };
const file = relative => path.join(root, ...relative.split('/'));
const read = relative => fs.readFileSync(file(relative), 'utf8');
const hashBytes = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const hashFile = relative => hashBytes(fs.readFileSync(file(relative)));
const count = (text, regex) => [...text.matchAll(regex)].length;
const one = (text, regex, label) => {
  const matches = [...text.matchAll(regex)];
  check(matches.length === 1, `${label}: expected one match, got ${matches.length}`);
  return matches[0]?.[1]?.trim() || '';
};
const plain = value => value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

for (const [relative, expected] of Object.entries({ ...baseline.poster, ...baseline.videos, ...baseline.frozenFiles })) {
  check(fs.existsSync(file(relative)), `${relative}: missing frozen file`);
  if (fs.existsSync(file(relative))) check(hashFile(relative) === expected, `${relative}: frozen SHA-256 drift`);
}

const home = read('index.html');
for (const [attribute, expected] of Object.entries(baseline.frozenInlineScripts)) {
  const match = home.match(new RegExp(`<script data-${attribute}>\\s*([\\s\\S]*?)<\\/script>`));
  check(Boolean(match), `index.html: missing data-${attribute} script`);
  if (match) check(hashBytes(match[1]) === expected, `index.html: data-${attribute} script drift`);
}

const main = read('js/main.js');
const normalizedMain = main.replace(
  /\{ t: '(?:negative review caught → routed private|customer feedback → human follow-up)', c: 'w', k: null \},/,
  "{ t: '__REVIEW_FLOW_COPY__', c: 'w', k: null },"
);
check(hashBytes(normalizedMain) === baseline.normalizedMainJs, 'js/main.js: change exceeds approved review-copy replacement');

const pages = [
  { phase: 'lead', file: 'solutions/lead-recovery-automation/index.html', route: '/solutions/lead-recovery-automation/', title: 'Lead Recovery Automation for Home Service Businesses | Efficient Technologies' },
  { phase: 'solutions', file: 'solutions/booking-automation/index.html', route: '/solutions/booking-automation/', title: 'Booking Automation for Home Service Businesses | Efficient Technologies' },
  { phase: 'solutions', file: 'solutions/review-automation/index.html', route: '/solutions/review-automation/', title: 'Review Automation for Home Service Businesses | Efficient Technologies' },
  { phase: 'industries', file: 'industries/hvac-automation/index.html', route: '/industries/hvac-automation/', title: 'HVAC Automation Systems | Efficient Technologies' },
  { phase: 'industries', file: 'industries/plumbing-automation/index.html', route: '/industries/plumbing-automation/', title: 'Plumbing Business Automation | Efficient Technologies' },
  { phase: 'industries', file: 'industries/electrical-automation/index.html', route: '/industries/electrical-automation/', title: 'Electrical Contractor Automation | Efficient Technologies' }
];

const inspected = [];
for (const page of pages.filter(item => atLeast(item.phase))) {
  check(fs.existsSync(file(page.file)), `${page.file}: missing required route`);
  if (!fs.existsSync(file(page.file))) continue;
  const html = read(page.file);
  inspected.push({ ...page, html });
  check(one(html, /<title>([\s\S]*?)<\/title>/g, `${page.file} title`) === page.title, `${page.file}: wrong title`);
  check(one(html, /<link rel="canonical" href="([^"]+)">/g, `${page.file} canonical`) === `https://efficientautomate.com${page.route}`, `${page.file}: wrong canonical`);
  check(count(html, /<h1\b/g) === 1, `${page.file}: expected one H1`);
  check(html.includes('Book a Free Automation Audit'), `${page.file}: missing primary CTA`);
  check(html.includes('utm_campaign=home-service-automation'), `${page.file}: missing booking attribution`);
  check(!/@type"\s*:\s*"(?:LocalBusiness|ProfessionalService)"/.test(html), `${page.file}: forbidden local schema`);
  const jsonBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  check(jsonBlocks.length === 1, `${page.file}: expected one JSON-LD block`);
  for (const block of jsonBlocks) {
    try { JSON.parse(block[1]); } catch (error) { failures.push(`${page.file}: invalid JSON-LD: ${error.message}`); }
  }
}
check(new Set(inspected.map(item => item.title)).size === inspected.length, 'commercial page titles must be unique');

if (atLeast('homepage')) {
  const required = [
    'Turn missed calls and slow follow-up into booked jobs.',
    'Book a Free Automation Audit',
    'Best value',
    'id="industries"',
    '/solutions/lead-recovery-automation/',
    '/solutions/booking-automation/',
    '/solutions/review-automation/',
    '/industries/hvac-automation/',
    '/industries/plumbing-automation/',
    '/industries/electrical-automation/',
    '30-day implementation guarantee',
    'three founding-client implementation slots'
  ];
  for (const value of required) check(home.includes(value), `index.html: missing ${value}`);
  for (const forbidden of ['Most popular', 'Works in 30 days, or we rebuild it free.', 'auto-ask happy customers', 'negative review caught']) {
    check(!home.includes(forbidden), `index.html: forbidden copy remains: ${forbidden}`);
  }
  check(main.includes("{ t: 'customer feedback → human follow-up', c: 'w', k: null },"), 'js/main.js: approved review-flow copy missing');
}

if (atLeast('cluster')) {
  const clusterFiles = [
    'about/index.html',
    'blog/index.html',
    'blog/crm-automation-local-business/index.html',
    'blog/business-process-automation-small-business/index.html',
    'blog/booking-automation-after-hours/index.html',
    'blog/review-automation-local-seo/index.html',
    'blog/software-consulting-vs-in-house/index.html'
  ];
  const combined = clusterFiles.map(read).join('\n');
  for (const forbidden of [
    'single most common gap',
    'cheapest local marketing you will ever get',
    'Route by sentiment',
    'Happy customers are guided',
    'routinely pays for an entire system',
    'usually gets the job',
    'pays for itself in weeks'
  ]) check(!combined.includes(forbidden), `content cluster: unsupported copy remains: ${forbidden}`);
  check(read('about/index.html').includes('mailing address'), 'about: mailing-address qualification missing');
  check(read('blog/crm-automation-local-business/index.html').includes('/solutions/lead-recovery-automation/'), 'CRM article: Lead Recovery link missing');
  check(read('blog/booking-automation-after-hours/index.html').includes('/solutions/booking-automation/'), 'Booking article: Booking solution link missing');
  check(read('blog/review-automation-local-seo/index.html').includes('/solutions/review-automation/'), 'Review article: Review solution link missing');
}

const allCanonicalRoutes = ['/', '/about/', '/blog/',
  '/blog/crm-automation-local-business/', '/blog/business-process-automation-small-business/',
  '/blog/booking-automation-after-hours/', '/blog/review-automation-local-seo/',
  '/blog/software-consulting-vs-in-house/', ...pages.map(item => item.route)];

if (atLeast('technical')) {
  const sitemap = read('sitemap.xml');
  for (const route of allCanonicalRoutes) check(sitemap.includes(`<loc>https://efficientautomate.com${route}</loc>`), `sitemap: missing ${route}`);
  check(count(sitemap, /<url>/g) === 14, 'sitemap: expected exactly 14 canonical URLs');
  const robots = read('robots.txt');
  for (const allowed of ['OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'Googlebot', 'bingbot', 'PerplexityBot', 'Perplexity-User', 'Applebot', 'DuckAssistBot', 'Amzn-SearchBot', 'Amzn-User', 'GPTBot', 'ClaudeBot', 'Google-Extended', 'Applebot-Extended', 'Meta-ExternalFetcher']) {
    check(new RegExp(`User-agent: ${allowed}\\r?\\n(?:Content-Signal: [^\\r\\n]+\\r?\\n)?Allow: /`).test(robots), `robots: ${allowed} is not explicitly allowed`);
  }
  for (const blocked of ['Amazonbot', 'Bytespider', 'CCBot', 'CloudflareBrowserRenderingCrawler', 'meta-externalagent']) {
    check(new RegExp(`User-agent: ${blocked}\\r?\\nDisallow: /`).test(robots), `robots: ${blocked} is not blocked`);
  }
  check(robots.includes('Content-Signal: search=yes, ai-input=yes, use=reference'), 'robots: required content signal missing');
  check(!robots.includes('ai-train='), 'robots: global ai-train signal must be omitted');
  check(robots.includes('Sitemap: https://efficientautomate.com/sitemap.xml'), 'robots: sitemap directive missing');
}

if (phase === 'all') {
  check(fs.statSync(file('index.html')).size < baseline.indexBytes, 'index.html: transferred source bytes did not improve from baseline');
  const htmlFiles = ['index.html', 'about/index.html', 'blog/index.html',
    'blog/crm-automation-local-business/index.html', 'blog/business-process-automation-small-business/index.html',
    'blog/booking-automation-after-hours/index.html', 'blog/review-automation-local-seo/index.html',
    'blog/software-consulting-vs-in-house/index.html', ...pages.map(item => item.file)];
  for (const relative of htmlFiles) {
    const html = read(relative);
    for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
      const url = match[1].split('#')[0].split('?')[0];
      if (!url || url === '/') continue;
      const target = url.endsWith('/') ? `${url.slice(1)}index.html` : url.slice(1);
      check(fs.existsSync(file(target)), `${relative}: broken internal link ${match[1]}`);
    }
  }
}

if (failures.length) {
  console.error(`STATIC_CHECK_${phase.toUpperCase()}_FAIL`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`STATIC_CHECK_${phase.toUpperCase()}_PASS`);
```

- [ ] **Step 7: Run the frozen-identity baseline**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs integrity
```

Expected: `STATIC_CHECK_INTEGRITY_PASS`.

- [ ] **Step 8: Verify the first product phase fails before implementation**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs lead
```

Expected: `STATIC_CHECK_LEAD_FAIL` containing `solutions/lead-recovery-automation/index.html: missing required route`.

- [ ] **Step 9: Capture the browser/performance baseline before product edits**

Start a bounded local server:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

At execution time, invoke the available `playwright` skill before browser automation. Use Chrome at `C:\Program Files\Google\Chrome\Application\chrome.exe`, fresh contexts, desktop `1440x900`, mobile `390x844`, and a 45-second parent deadline per case. Record under `.validation/home-service-release-v1/baseline/`:

```json
{
  "url": "http://127.0.0.1:4173/",
  "videoIds": ["world-video", "ch-t1", "ch-t1r", "ch-t2", "ch-t2r", "ch-t3", "ch-t3r"],
  "chapterSources": ["t1-v20260714.mp4", "t1r-v20260714.mp4", "t2-v20260714.mp4", "t2r-v20260714.mp4", "t3-v20260714.mp4", "t3r-v20260714.mp4"],
  "desktop": { "runs": 3 },
  "mobile": { "runs": 3 },
  "motionAnchors": ["#hero", "#core", "#gaps", "#how", "#book"]
}
```

For each performance run, install this observer before navigation and record the resulting values after `load` plus 3 seconds:

```javascript
window.__etVitals = { lcp: 0, cls: 0, tbt: 0 };
new PerformanceObserver(list => {
  const entries = list.getEntries();
  if (entries.length) window.__etVitals.lcp = entries.at(-1).startTime;
}).observe({ type: 'largest-contentful-paint', buffered: true });
new PerformanceObserver(list => {
  for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__etVitals.cls += entry.value;
}).observe({ type: 'layout-shift', buffered: true });
new PerformanceObserver(list => {
  for (const entry of list.getEntries()) window.__etVitals.tbt += Math.max(0, entry.duration - 50);
}).observe({ type: 'longtask', buffered: true });
```

Collect:

```javascript
({
  ...window.__etVitals,
  domInteractive: performance.getEntriesByType('navigation')[0].domInteractive,
  requests: performance.getEntriesByType('resource').length,
  transferBytes: performance.getEntriesByType('resource').reduce((sum, entry) => sum + entry.transferSize, 0)
})
```

Expected: three successful cold-context observations per viewport, no page errors, the exact video ID/source sequence, and saved medians. Stop the server using its owned terminal session; do not kill unrelated Python or Chrome processes.

- [ ] **Step 10: Commit the isolation boundary**

Run:

```powershell
git add .gitignore
git diff --cached --check
git commit -m "chore: isolate acquisition validation workspace"
```

Expected: one commit containing only `.gitignore`; `.validation/` remains absent from `git status` and `git ls-files`.

### Task 2: Add the commercial-page foundation and flagship Lead Recovery page

**Files:**
- Modify: `css/styles.css` (append the commercial-page section after the existing recent-work styles)
- Create: `solutions/lead-recovery-automation/index.html`
- Test: `.validation/home-service-release-v1/static-check.mjs lead`

**Interfaces:**
- Consumes: shared tokens from `/assets/tokens.css?v=3`, shared styles at `/css/styles.css?v=4`, Organization ID `https://efficientautomate.com/#organization`, and WebSite ID `https://efficientautomate.com/#website`.
- Produces: the reusable `.commercial-*`, `.workflow-*`, `.faq-*`, and `.related-*` CSS contract plus the flagship canonical route `/solutions/lead-recovery-automation/`.

- [ ] **Step 1: Re-run the focused failing test**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs lead
```

Expected: FAIL only because the Lead Recovery route is absent; frozen integrity checks still pass.

- [ ] **Step 2: Add the static commercial-page styles**

Append this exact block to `css/styles.css`:

```css

/* ---- commercial solution and industry pages ---- */
.commercial-main{padding:112px 0 var(--et-space-9);min-height:100vh;}
.commercial-hero{padding:var(--et-space-7) 0 var(--et-space-8);border-bottom:1px solid var(--et-line);}
.commercial-hero .post-narrow,.commercial-section .post-narrow{max-width:920px;}
.breadcrumbs{font-family:var(--et-font-mono);font-size:11px;color:var(--et-slate-dim);margin:0 0 var(--et-space-5);}
.breadcrumbs a{color:var(--et-slate);}
.commercial-title{font-size:clamp(2.4rem,6vw,4.6rem);letter-spacing:-.04em;line-height:1.02;max-width:18ch;}
.commercial-lead{font-size:var(--et-fs-body-lg);color:var(--et-mist);max-width:66ch;margin:var(--et-space-5) 0 0;}
.commercial-actions{display:flex;gap:var(--et-space-3);flex-wrap:wrap;margin-top:var(--et-space-6);}
.commercial-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--et-space-3);list-style:none;padding:0;margin:var(--et-space-7) 0 0;}
.commercial-facts li{border-left:2px solid var(--et-blue);padding:8px 0 8px var(--et-space-4);color:var(--et-slate);font-size:var(--et-fs-sm);}
.commercial-section{padding:var(--et-space-8) 0;border-bottom:1px solid var(--et-line);}
.commercial-section h2{font-size:clamp(1.7rem,4vw,2.5rem);letter-spacing:-.025em;margin:0 0 var(--et-space-4);}
.commercial-section .section-copy{color:var(--et-mist);max-width:70ch;margin:0 0 var(--et-space-6);}
.commercial-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:var(--et-space-4);}
.commercial-card{background:var(--et-panel);border:1px solid var(--et-line);border-radius:var(--et-radius-lg);padding:var(--et-space-5);}
.commercial-card h3{font-size:var(--et-fs-h3);margin:0 0 8px;}
.commercial-card p{color:var(--et-slate);font-size:var(--et-fs-sm);margin:0;}
.workflow-list{display:grid;gap:var(--et-space-3);counter-reset:workflow;list-style:none;padding:0;margin:0;}
.workflow-step{counter-increment:workflow;display:grid;grid-template-columns:42px 1fr;gap:var(--et-space-4);align-items:start;padding:var(--et-space-4);background:var(--et-panel);border:1px solid var(--et-line);border-radius:var(--et-radius-lg);}
.workflow-step::before{content:counter(workflow,decimal-leading-zero);font-family:var(--et-font-mono);color:var(--et-blue);}
.workflow-step h3{font-size:var(--et-fs-h3);margin:0 0 6px;}
.workflow-step p{color:var(--et-slate);margin:0;}
.commercial-callout{margin-top:var(--et-space-6);padding:var(--et-space-5);border-left:2px solid var(--et-lime);background:var(--et-panel);color:var(--et-mist);}
.commercial-callout strong{color:var(--et-white);}
.faq-list{display:grid;gap:var(--et-space-3);}
.faq-list details{background:var(--et-panel);border:1px solid var(--et-line);border-radius:var(--et-radius-lg);padding:var(--et-space-4) var(--et-space-5);}
.faq-list summary{cursor:pointer;color:var(--et-white);font-family:var(--et-font-display);font-weight:700;}
.faq-list p{color:var(--et-slate);margin:var(--et-space-3) 0 0;}
.related-links{display:grid;grid-template-columns:repeat(3,1fr);gap:var(--et-space-3);}
.related-links a{display:block;background:var(--et-panel);border:1px solid var(--et-line);border-radius:var(--et-radius-lg);padding:var(--et-space-4);color:var(--et-mist);}
.related-links a:hover{border-color:var(--et-line-strong);color:var(--et-white);}
.commercial-cta{text-align:center;padding:var(--et-space-8) var(--et-gutter);}
.commercial-cta p{color:var(--et-slate);max-width:58ch;margin:var(--et-space-3) auto var(--et-space-5);}
@media(max-width:720px){
  .commercial-main{padding-top:92px;}
  .commercial-facts,.commercial-grid,.related-links{grid-template-columns:1fr;}
  .commercial-title{font-size:clamp(2.2rem,12vw,3.5rem);}
}
```

- [ ] **Step 3: Create the complete Lead Recovery page**

Create `solutions/lead-recovery-automation/index.html` exactly as follows:

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Lead Recovery Automation for Home Service Businesses | Efficient Technologies</title>
<meta name="description" content="Lead recovery automation for US home-service businesses: acknowledge missed calls and web leads, route them, follow up consistently, and hand replies to a person.">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="https://efficientautomate.com/solutions/lead-recovery-automation/">
<meta property="og:type" content="website">
<meta property="og:title" content="Lead Recovery Automation for Home Service Businesses | Efficient Technologies">
<meta property="og:description" content="A practical missed-call and web-lead recovery workflow for home-service businesses across the United States.">
<meta property="og:url" content="https://efficientautomate.com/solutions/lead-recovery-automation/">
<meta property="og:image" content="https://efficientautomate.com/assets/og-v20260714.jpg">
<meta property="og:image:alt" content="Efficient Technologies automation systems">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Lead Recovery Automation for Home Service Businesses | Efficient Technologies">
<meta name="twitter:description" content="A practical missed-call and web-lead recovery workflow for US home-service businesses.">
<meta name="twitter:image" content="https://efficientautomate.com/assets/og-v20260714.jpg">
<link rel="icon" type="image/svg+xml" href="/assets/logo/favicon.svg">
<link rel="preload" href="/assets/fonts/inter-latin-v20260714.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/space-grotesk-latin-v20260714.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/tokens.css?v=3">
<link rel="stylesheet" href="/css/styles.css?v=4">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://efficientautomate.com/solutions/lead-recovery-automation/#webpage",
      "url": "https://efficientautomate.com/solutions/lead-recovery-automation/",
      "name": "Lead Recovery Automation for Home Service Businesses",
      "description": "Lead recovery automation for missed calls and web leads at home-service businesses across the United States.",
      "isPartOf": { "@id": "https://efficientautomate.com/#website" },
      "about": { "@id": "https://efficientautomate.com/solutions/lead-recovery-automation/#service" },
      "inLanguage": "en-US"
    },
    {
      "@type": "Service",
      "@id": "https://efficientautomate.com/solutions/lead-recovery-automation/#service",
      "name": "Lead Recovery Automation",
      "serviceType": "Missed-call and web-lead recovery automation",
      "provider": { "@id": "https://efficientautomate.com/#organization" },
      "areaServed": { "@type": "Country", "name": "United States" },
      "audience": { "@type": "BusinessAudience", "audienceType": "Home-service businesses" },
      "description": "A scoped workflow that acknowledges new enquiries, captures context, routes opportunities, follows up, and hands replies to a person."
    }
  ]
}
</script>
</head>
<body class="blog-body commercial-body">
<header id="nav" class="nav scrolled"><div class="nav-inner container"><a class="nav-logo" href="/" aria-label="Efficient Technologies home"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64"></a><nav class="nav-links" aria-label="Primary"><a href="/solutions/lead-recovery-automation/">Lead recovery</a><a href="/#automate">Systems</a><a href="/#pricing">Pricing</a><a href="/blog/">Blog</a><a class="btn btn-primary btn-sm" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=lead-recovery">Book a Free Automation Audit</a></nav></div></header>
<main class="commercial-main">
  <section class="commercial-hero"><div class="post-narrow">
    <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Solutions / Lead recovery</nav>
    <p class="eyebrow"><span class="live-dot"></span> flagship system &nbsp;//&nbsp; lead recovery</p>
    <h1 class="commercial-title">Turn missed calls and new enquiries into a follow-up your team can act on.</h1>
    <p class="commercial-lead">Lead recovery automation acknowledges an unanswered call or web lead, records the available context, routes it to the right place, and follows an agreed sequence until a person takes over or the sequence ends.</p>
    <div class="commercial-actions"><a class="btn btn-primary" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=lead-recovery">Book a Free Automation Audit</a><a class="btn btn-ghost" href="#workflow">See the workflow</a></div>
    <ul class="commercial-facts"><li>Built for US home-service businesses</li><li>Uses existing phone, form, CRM, and calendar tools where feasible</li><li>Human takeover remains part of the system</li></ul>
  </div></section>
  <section id="workflow" class="commercial-section"><div class="post-narrow">
    <p class="eyebrow">// workflow</p><h2>What the Lead Recovery System does</h2>
    <p class="section-copy">The exact timing and channels depend on the business, consent rules, and tools already in use. The operating pattern stays explicit.</p>
    <ol class="workflow-list">
      <li class="workflow-step"><div><h3>Detect the enquiry</h3><p>An unanswered call, contact form, chat, or approved lead source creates one event.</p></div></li>
      <li class="workflow-step"><div><h3>Acknowledge it</h3><p>The system sends the agreed acknowledgement without pretending that a technician has already accepted the job.</p></div></li>
      <li class="workflow-step"><div><h3>Capture useful context</h3><p>Service type, location, urgency, preferred time, and contact details are collected only when relevant.</p></div></li>
      <li class="workflow-step"><div><h3>Route and record</h3><p>The opportunity reaches the agreed inbox, CRM stage, dispatcher, or owner with a visible status.</p></div></li>
      <li class="workflow-step"><div><h3>Follow the approved sequence</h3><p>Unanswered opportunities receive a bounded sequence with stop conditions, not endless messages.</p></div></li>
      <li class="workflow-step"><div><h3>Hand control to a person</h3><p>A reply, exception, urgent request, or booked appointment stops or changes the automation according to the approved rules.</p></div></li>
    </ol>
    <div class="commercial-callout"><strong>Illustrative workflow, not a customer result:</strong> a missed service call can trigger an acknowledgement, collect the caller's ZIP code and job type, alert the office, and stop automatically when the office replies.</div>
  </div></section>
  <section class="commercial-section"><div class="post-narrow">
    <p class="eyebrow">// fit and boundaries</p><h2>What we connect—and what must be decided first</h2>
    <div class="commercial-grid">
      <article class="commercial-card"><h3>Typical inputs</h3><p>Business phone events, website forms, approved lead sources, inboxes, and lightweight CRM records.</p></article>
      <article class="commercial-card"><h3>Typical outputs</h3><p>Acknowledgements, internal alerts, lead stages, tasks, booking links, and a documented human handoff.</p></article>
      <article class="commercial-card"><h3>Customer decisions</h3><p>Service area, business hours, emergency language, routing owner, contact cadence, and stop conditions.</p></article>
      <article class="commercial-card"><h3>System limits</h3><p>The workflow cannot guarantee job fit, availability, customer response, or a booked job. Those remain business outcomes.</p></article>
    </div>
  </div></section>
  <section class="commercial-section"><div class="post-narrow">
    <p class="eyebrow">// questions</p><h2>Lead recovery FAQ</h2>
    <div class="faq-list">
      <details><summary>Do we need to replace our CRM or phone system?</summary><p>No. The audit starts with the tools already in use. Replacement is proposed only when an existing tool cannot support the agreed workflow.</p></details>
      <details><summary>Does the automation answer technical or emergency questions?</summary><p>Not by default. It can acknowledge and collect context, but urgent or technical decisions route to the responsible person under the approved rules.</p></details>
      <details><summary>How do we know whether it works?</summary><p>We define observable states such as acknowledged, routed, replied, booked, closed, or stopped. Customer revenue is measured separately from workflow operation.</p></details>
      <details><summary>Can we start with only missed calls?</summary><p>Yes. Launch is designed for one tightly scoped workflow, which can be expanded only after the first system is stable.</p></details>
    </div>
  </div></section>
  <section class="commercial-section"><div class="post-narrow">
    <p class="eyebrow">// related systems</p><h2>Continue the customer journey</h2>
    <div class="related-links"><a href="/solutions/booking-automation/">Booking Automation &rarr;</a><a href="/solutions/review-automation/">Review Automation &rarr;</a><a href="/industries/hvac-automation/">HVAC Automation &rarr;</a></div>
  </div></section>
  <section class="commercial-cta"><h2>Find the first recoverable gap.</h2><p>In 20 minutes, we will map one missed-call or web-lead workflow and show what a scoped implementation requires.</p><a class="btn btn-primary" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=lead-recovery-bottom">Book a Free Automation Audit</a></section>
</main>
<footer class="footer"><div class="container footer-inner"><div class="footer-brand"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64" loading="lazy" decoding="async"><p>Lead recovery, booking, and review automation for home-service businesses across the United States.</p></div><div class="footer-meta"><p><span class="live-dot"></span> system online</p><p><a href="/about/">About Efficient Technologies</a></p><p><a href="mailto:tarik@efficientautomate.com">tarik@efficientautomate.com</a></p><p class="muted">Mailing address: 30 N Gould St #65748, Sheridan, WY 82801, USA</p></div></div></footer>
</body>
</html>
```

- [ ] **Step 4: Run the focused validator**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs lead
```

Expected: `STATIC_CHECK_LEAD_PASS`.

- [ ] **Step 5: Browser-smoke the new route**

With the bounded local server running, open `http://127.0.0.1:4173/solutions/lead-recovery-automation/` at desktop and mobile widths. Assert:

```javascript
({
  title: document.title,
  h1Count: document.querySelectorAll('h1').length,
  ctaCount: [...document.querySelectorAll('a')].filter(a => a.textContent.trim() === 'Book a Free Automation Audit').length,
  scripts: document.querySelectorAll('script:not([type="application/ld+json"])').length,
  horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
})
```

Expected: exact title from the contract, `h1Count: 1`, `ctaCount: 3`, `scripts: 0`, and `horizontalOverflow: false`. Expand every FAQ and verify the layout remains readable.

- [ ] **Step 6: Commit the flagship page**

Run:

```powershell
git add css/styles.css solutions/lead-recovery-automation/index.html
git diff --cached --check
git commit -m "feat: add lead recovery solution page"
```

Expected: one commit containing only the shared commercial CSS and Lead Recovery page.

### Task 3: Add Booking and Review Automation solution pages

**Files:**
- Create: `solutions/booking-automation/index.html`
- Create: `solutions/review-automation/index.html`
- Test: `.validation/home-service-release-v1/static-check.mjs solutions`

**Interfaces:**
- Consumes: the commercial CSS contract from Task 2 and the same Organization/WebSite IDs.
- Produces: canonical Booking and Review solution routes linked by the homepage, industries, and existing articles.

- [ ] **Step 1: Verify the solution phase fails before the pages exist**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs solutions
```

Expected: `STATIC_CHECK_SOLUTIONS_FAIL` naming the missing Booking and Review files while the Lead page passes.

- [ ] **Step 2: Create the complete Booking Automation page**

Create `solutions/booking-automation/index.html`:

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Booking Automation for Home Service Businesses | Efficient Technologies</title>
<meta name="description" content="Booking automation for US home-service businesses: apply availability rules, confirm appointments, send reminders, and recover rescheduling or no-show workflows.">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="canonical" href="https://efficientautomate.com/solutions/booking-automation/">
<meta property="og:type" content="website"><meta property="og:title" content="Booking Automation for Home Service Businesses | Efficient Technologies"><meta property="og:description" content="A bounded booking, reminder, rescheduling, and no-show workflow for US home-service businesses."><meta property="og:url" content="https://efficientautomate.com/solutions/booking-automation/"><meta property="og:image" content="https://efficientautomate.com/assets/og-v20260714.jpg"><meta property="og:image:alt" content="Efficient Technologies automation systems">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Booking Automation for Home Service Businesses | Efficient Technologies"><meta name="twitter:description" content="Booking, reminders, rescheduling, and no-show automation for US home-service businesses."><meta name="twitter:image" content="https://efficientautomate.com/assets/og-v20260714.jpg">
<link rel="icon" type="image/svg+xml" href="/assets/logo/favicon.svg"><link rel="preload" href="/assets/fonts/inter-latin-v20260714.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/space-grotesk-latin-v20260714.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/assets/tokens.css?v=3"><link rel="stylesheet" href="/css/styles.css?v=4">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": "https://efficientautomate.com/solutions/booking-automation/#webpage", "url": "https://efficientautomate.com/solutions/booking-automation/", "name": "Booking Automation for Home Service Businesses", "description": "Booking and scheduling automation for home-service businesses across the United States.", "isPartOf": { "@id": "https://efficientautomate.com/#website" }, "about": { "@id": "https://efficientautomate.com/solutions/booking-automation/#service" }, "inLanguage": "en-US" },
    { "@type": "Service", "@id": "https://efficientautomate.com/solutions/booking-automation/#service", "name": "Booking Automation", "serviceType": "Booking and scheduling automation", "provider": { "@id": "https://efficientautomate.com/#organization" }, "areaServed": { "@type": "Country", "name": "United States" }, "audience": { "@type": "BusinessAudience", "audienceType": "Home-service businesses" }, "description": "A scoped workflow for availability, appointment confirmation, reminders, rescheduling, no-show follow-up, and calendar or CRM status." }
  ]
}
</script>
</head>
<body class="blog-body commercial-body">
<header id="nav" class="nav scrolled"><div class="nav-inner container"><a class="nav-logo" href="/" aria-label="Efficient Technologies home"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64"></a><nav class="nav-links" aria-label="Primary"><a href="/solutions/lead-recovery-automation/">Lead recovery</a><a href="/#automate">Systems</a><a href="/#pricing">Pricing</a><a href="/blog/">Blog</a><a class="btn btn-primary btn-sm" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=booking">Book a Free Automation Audit</a></nav></div></header>
<main class="commercial-main">
  <section class="commercial-hero"><div class="post-narrow"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Solutions / Booking automation</nav><p class="eyebrow"><span class="live-dot"></span> supporting system &nbsp;//&nbsp; booking</p><h1 class="commercial-title">Let customers request or book the right appointment without losing the operating rules.</h1><p class="commercial-lead">Booking automation applies the availability, service-area, job-type, reminder, and handoff rules your team approves. It creates a reliable path after hours without pretending every request is automatically accepted.</p><div class="commercial-actions"><a class="btn btn-primary" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=booking">Book a Free Automation Audit</a><a class="btn btn-ghost" href="#workflow">See the workflow</a></div><ul class="commercial-facts"><li>Self-scheduling or request-first designs</li><li>Calendar and CRM status kept visible</li><li>Exceptions return to a person</li></ul></div></section>
  <section id="workflow" class="commercial-section"><div class="post-narrow"><p class="eyebrow">// workflow</p><h2>How a booking workflow is controlled</h2><p class="section-copy">The system follows the business's actual capacity and service rules. It does not invent availability or dispatch authority.</p><ol class="workflow-list"><li class="workflow-step"><div><h3>Receive the request</h3><p>A booking link, recovered lead, phone follow-up, or form starts the workflow.</p></div></li><li class="workflow-step"><div><h3>Apply fit rules</h3><p>Service area, job type, duration, lead time, and required information determine the next step.</p></div></li><li class="workflow-step"><div><h3>Offer valid availability</h3><p>The customer sees only approved times—or submits a request for office confirmation when direct booking is not appropriate.</p></div></li><li class="workflow-step"><div><h3>Confirm and record</h3><p>The appointment or request is written to the agreed calendar, CRM, and internal notification path.</p></div></li><li class="workflow-step"><div><h3>Remind and reschedule</h3><p>Bounded reminders and a clear rescheduling path reduce manual coordination.</p></div></li><li class="workflow-step"><div><h3>Handle exceptions</h3><p>No-shows, urgent requests, capacity conflicts, and unusual jobs route back to a person.</p></div></li></ol><div class="commercial-callout"><strong>Illustrative workflow, not a customer result:</strong> an after-hours maintenance request can collect the ZIP code and service type, show approved appointment windows, write the selection to the calendar, and alert the office for review.</div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// design choices</p><h2>Direct booking is not always the right answer</h2><div class="commercial-grid"><article class="commercial-card"><h3>Use direct booking when</h3><p>The service, duration, coverage area, capacity, and required intake data are predictable.</p></article><article class="commercial-card"><h3>Use request-first when</h3><p>A dispatcher or technician must confirm urgency, scope, travel, parts, or staffing.</p></article><article class="commercial-card"><h3>Preserve the source of truth</h3><p>One approved calendar or scheduling system owns availability; the automation does not maintain a competing calendar.</p></article><article class="commercial-card"><h3>Define stop conditions</h3><p>Cancellation, rescheduling, staff takeover, and customer replies stop or alter the sequence.</p></article></div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// questions</p><h2>Booking automation FAQ</h2><div class="faq-list"><details><summary>Can this work with our existing calendar?</summary><p>The audit checks its availability rules, API or integration support, and ownership model. If it can remain the source of truth, we connect to it rather than replace it.</p></details><details><summary>Can emergency jobs book automatically?</summary><p>Only if the business defines an appropriate and truthful rule. Most emergency or ambiguous requests should acknowledge the customer and alert a person.</p></details><details><summary>Will reminders stop when someone cancels?</summary><p>Yes, when cancellation status is available to the workflow. Stop and exception states are acceptance criteria, not optional polish.</p></details><details><summary>Does booking automation guarantee fewer no-shows?</summary><p>No. It guarantees the agreed reminder and recovery workflow operates; customer behavior remains an outcome to measure.</p></details></div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// related systems</p><h2>Connect booking to the rest of the journey</h2><div class="related-links"><a href="/solutions/lead-recovery-automation/">Lead Recovery &rarr;</a><a href="/solutions/review-automation/">Review Automation &rarr;</a><a href="/industries/plumbing-automation/">Plumbing Automation &rarr;</a></div></div></section>
  <section class="commercial-cta"><h2>Map one booking bottleneck.</h2><p>We will identify whether direct scheduling, request-first routing, reminders, or no-show follow-up is the smallest useful system.</p><a class="btn btn-primary" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=booking-bottom">Book a Free Automation Audit</a></section>
</main>
<footer class="footer"><div class="container footer-inner"><div class="footer-brand"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64" loading="lazy" decoding="async"><p>Lead recovery, booking, and review automation for home-service businesses across the United States.</p></div><div class="footer-meta"><p><span class="live-dot"></span> system online</p><p><a href="/about/">About Efficient Technologies</a></p><p><a href="mailto:tarik@efficientautomate.com">tarik@efficientautomate.com</a></p><p class="muted">Mailing address: 30 N Gould St #65748, Sheridan, WY 82801, USA</p></div></div></footer>
</body>
</html>
```

- [ ] **Step 3: Create the complete Review Automation page**

Create `solutions/review-automation/index.html`:

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Review Automation for Home Service Businesses | Efficient Technologies</title>
<meta name="description" content="Policy-safe review automation for US home-service businesses: trigger consistent post-job requests, send bounded reminders, and route direct replies to a person.">
<meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="https://efficientautomate.com/solutions/review-automation/">
<meta property="og:type" content="website"><meta property="og:title" content="Review Automation for Home Service Businesses | Efficient Technologies"><meta property="og:description" content="A consistent post-job review-request workflow without review gating or positive-review incentives."><meta property="og:url" content="https://efficientautomate.com/solutions/review-automation/"><meta property="og:image" content="https://efficientautomate.com/assets/og-v20260714.jpg"><meta property="og:image:alt" content="Efficient Technologies automation systems">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Review Automation for Home Service Businesses | Efficient Technologies"><meta name="twitter:description" content="Consistent, policy-safe post-job review requests for US home-service businesses."><meta name="twitter:image" content="https://efficientautomate.com/assets/og-v20260714.jpg">
<link rel="icon" type="image/svg+xml" href="/assets/logo/favicon.svg"><link rel="preload" href="/assets/fonts/inter-latin-v20260714.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/space-grotesk-latin-v20260714.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/assets/tokens.css?v=3"><link rel="stylesheet" href="/css/styles.css?v=4">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": "https://efficientautomate.com/solutions/review-automation/#webpage", "url": "https://efficientautomate.com/solutions/review-automation/", "name": "Review Automation for Home Service Businesses", "description": "Consistent post-job review-request automation for home-service businesses across the United States.", "isPartOf": { "@id": "https://efficientautomate.com/#website" }, "about": { "@id": "https://efficientautomate.com/solutions/review-automation/#service" }, "inLanguage": "en-US" },
    { "@type": "Service", "@id": "https://efficientautomate.com/solutions/review-automation/#service", "name": "Review Automation", "serviceType": "Post-job review-request automation", "provider": { "@id": "https://efficientautomate.com/#organization" }, "areaServed": { "@type": "Country", "name": "United States" }, "audience": { "@type": "BusinessAudience", "audienceType": "Home-service businesses" }, "description": "A scoped workflow that applies one eligibility rule, sends a consistent public review opportunity, records status, and routes direct replies for human follow-up without review gating." }
  ]
}
</script>
</head>
<body class="blog-body commercial-body">
<header id="nav" class="nav scrolled"><div class="nav-inner container"><a class="nav-logo" href="/" aria-label="Efficient Technologies home"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64"></a><nav class="nav-links" aria-label="Primary"><a href="/solutions/lead-recovery-automation/">Lead recovery</a><a href="/#automate">Systems</a><a href="/#pricing">Pricing</a><a href="/blog/">Blog</a><a class="btn btn-primary btn-sm" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=reviews">Book a Free Automation Audit</a></nav></div></header>
<main class="commercial-main">
  <section class="commercial-hero"><div class="post-narrow"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Solutions / Review automation</nav><p class="eyebrow"><span class="live-dot"></span> supporting system &nbsp;//&nbsp; reviews</p><h1 class="commercial-title">Ask every eligible customer consistently—without review gating.</h1><p class="commercial-lead">Review automation starts from an agreed job-complete state, applies the same eligibility rule, sends the same public review opportunity, and routes direct replies to a person for follow-up.</p><div class="commercial-actions"><a class="btn btn-primary" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=reviews">Book a Free Automation Audit</a><a class="btn btn-ghost" href="#workflow">See the workflow</a></div><ul class="commercial-facts"><li>One documented eligibility rule</li><li>No sentiment filtering or positive-review incentive</li><li>Bounded reminders and visible status</li></ul></div></section>
  <section id="workflow" class="commercial-section"><div class="post-narrow"><p class="eyebrow">// workflow</p><h2>How a fair review-request workflow operates</h2><p class="section-copy">The system creates consistency. It does not decide which customers are allowed to leave a public review based on predicted sentiment.</p><ol class="workflow-list"><li class="workflow-step"><div><h3>Receive a valid completion state</h3><p>An agreed job-complete or invoice-complete status starts the workflow.</p></div></li><li class="workflow-step"><div><h3>Apply one eligibility rule</h3><p>Operational exclusions such as duplicate, cancelled, test, or legally restricted records apply consistently—not by satisfaction score.</p></div></li><li class="workflow-step"><div><h3>Send the public review opportunity</h3><p>Every eligible customer receives the same clear path to the selected public review profile.</p></div></li><li class="workflow-step"><div><h3>Send a bounded reminder</h3><p>If the provider and consent rules permit it, one agreed reminder can be sent before the sequence stops.</p></div></li><li class="workflow-step"><div><h3>Record status</h3><p>Sent, delivered, clicked, replied, stopped, and failed states remain visible when the tools expose them.</p></div></li><li class="workflow-step"><div><h3>Route direct replies to a person</h3><p>Customer messages or service concerns create a human follow-up without removing the public review option.</p></div></li></ol><div class="commercial-callout"><strong>Illustrative workflow, not a customer result:</strong> when an eligible completed job reaches the CRM, the system can send one review request, record delivery, stop after the approved reminder, and create a task if the customer replies directly.</div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// safeguards</p><h2>What this system will not do</h2><div class="commercial-grid"><article class="commercial-card"><h3>No review gating</h3><p>It does not ask a private satisfaction question and show the public review link only to favorable respondents.</p></article><article class="commercial-card"><h3>No positive-review incentive</h3><p>It does not exchange discounts, gifts, entries, or benefits for a positive rating.</p></article><article class="commercial-card"><h3>No fabricated review content</h3><p>It does not write or submit a customer's review on the customer's behalf.</p></article><article class="commercial-card"><h3>No endless reminders</h3><p>The sequence has a documented limit, opt-out behavior, and human exception path.</p></article></div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// questions</p><h2>Review automation FAQ</h2><div class="faq-list"><details><summary>Can unhappy customers still leave a public review?</summary><p>Yes. Every eligible customer receives the same public review opportunity. Direct service-recovery replies can route to a person without hiding that option.</p></details><details><summary>Can we ask only customers who gave a high internal score?</summary><p>No. That is review gating and is outside this service design.</p></details><details><summary>How many reminders are sent?</summary><p>The audit defines a small, consent-aware limit. The default design is one request and, when appropriate, one reminder.</p></details><details><summary>Does this guarantee more or better reviews?</summary><p>No. It guarantees the approved request workflow operates consistently. Whether a customer reviews and what they write remain customer decisions.</p></details></div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// related systems</p><h2>Connect post-job follow-up to the customer journey</h2><div class="related-links"><a href="/solutions/lead-recovery-automation/">Lead Recovery &rarr;</a><a href="/solutions/booking-automation/">Booking Automation &rarr;</a><a href="/industries/electrical-automation/">Electrical Automation &rarr;</a></div></div></section>
  <section class="commercial-cta"><h2>Make the request consistent and fair.</h2><p>We will map the completion trigger, eligibility rule, request, reminder, stop conditions, and human follow-up.</p><a class="btn btn-primary" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=reviews-bottom">Book a Free Automation Audit</a></section>
</main>
<footer class="footer"><div class="container footer-inner"><div class="footer-brand"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64" loading="lazy" decoding="async"><p>Lead recovery, booking, and review automation for home-service businesses across the United States.</p></div><div class="footer-meta"><p><span class="live-dot"></span> system online</p><p><a href="/about/">About Efficient Technologies</a></p><p><a href="mailto:tarik@efficientautomate.com">tarik@efficientautomate.com</a></p><p class="muted">Mailing address: 30 N Gould St #65748, Sheridan, WY 82801, USA</p></div></div></footer>
</body>
</html>
```

- [ ] **Step 4: Run the cumulative solution validator**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs solutions
```

Expected: `STATIC_CHECK_SOLUTIONS_PASS`.

- [ ] **Step 5: Browser-smoke both solution routes**

Open both routes at desktop and mobile widths and evaluate:

```javascript
({
  h1Count: document.querySelectorAll('h1').length,
  workflowSteps: document.querySelectorAll('.workflow-step').length,
  faqCount: document.querySelectorAll('.faq-list details').length,
  primaryCtas: [...document.querySelectorAll('a')].filter(a => a.textContent.trim() === 'Book a Free Automation Audit').length,
  hasFaqSchema: document.documentElement.innerHTML.includes('FAQPage'),
  horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
})
```

Expected for each: `h1Count: 1`, `workflowSteps: 6`, `faqCount: 4`, `primaryCtas: 3`, `hasFaqSchema: false`, and `horizontalOverflow: false`. On the Review page, search the rendered text for `happy customers`, `sentiment`, and `positive review`; only the explicit prohibitions may mention sentiment or positive-review incentives.

- [ ] **Step 6: Commit the supporting solution pages**

Run:

```powershell
git add solutions/booking-automation/index.html solutions/review-automation/index.html
git diff --cached --check
git commit -m "feat: add booking and review solution pages"
```

Expected: one commit containing the two new solution pages.

### Task 4: Add the HVAC, plumbing, and electrical industry routes

**Files:**
- Create: `industries/hvac-automation/index.html`
- Create: `industries/plumbing-automation/index.html`
- Create: `industries/electrical-automation/index.html`
- Test: `.validation/home-service-release-v1/static-check.mjs industries`

**Interfaces:**
- Consumes: the commercial-page CSS contract from Task 2 and the three solution canonicals.
- Produces: three distinct industry canonicals, each with one `WebPage` plus one `Service` entity, United States `areaServed`, four visible FAQs, and explicit links into the solution cluster.

- [ ] **Step 1: Prove the industry routes are absent**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs industries
```

Expected: `STATIC_CHECK_INDUSTRIES_FAIL` with all three missing industry routes; the integrity, lead, and solutions assertions still pass.

- [ ] **Step 2: Create the complete HVAC Automation page**

Create `industries/hvac-automation/index.html`:

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>HVAC Automation Systems | Efficient Technologies</title>
<meta name="description" content="HVAC automation for US contractors: recover missed calls, route urgent service requests, follow up on estimates, and keep office-to-technician handoffs visible.">
<meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="https://efficientautomate.com/industries/hvac-automation/">
<meta property="og:type" content="website"><meta property="og:title" content="HVAC Automation Systems | Efficient Technologies"><meta property="og:description" content="Practical lead, booking, and follow-up workflows for HVAC contractors across the United States."><meta property="og:url" content="https://efficientautomate.com/industries/hvac-automation/"><meta property="og:image" content="https://efficientautomate.com/assets/og-v20260714.jpg"><meta property="og:image:alt" content="Efficient Technologies automation systems">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="HVAC Automation Systems | Efficient Technologies"><meta name="twitter:description" content="Practical automation systems for HVAC service and estimate workflows."><meta name="twitter:image" content="https://efficientautomate.com/assets/og-v20260714.jpg">
<link rel="icon" type="image/svg+xml" href="/assets/logo/favicon.svg"><link rel="preload" href="/assets/fonts/inter-latin-v20260714.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/space-grotesk-latin-v20260714.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/assets/tokens.css?v=3"><link rel="stylesheet" href="/css/styles.css?v=4">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": "https://efficientautomate.com/industries/hvac-automation/#webpage", "url": "https://efficientautomate.com/industries/hvac-automation/", "name": "HVAC Automation Systems", "description": "Automation systems for HVAC contractors serving local customers in the United States.", "isPartOf": { "@id": "https://efficientautomate.com/#website" }, "about": { "@id": "https://efficientautomate.com/industries/hvac-automation/#service" }, "inLanguage": "en-US" },
    { "@type": "Service", "@id": "https://efficientautomate.com/industries/hvac-automation/#service", "name": "HVAC Automation Systems", "serviceType": "Lead recovery, booking, estimate follow-up, and operational handoff automation for HVAC contractors", "provider": { "@id": "https://efficientautomate.com/#organization" }, "areaServed": { "@type": "Country", "name": "United States" }, "audience": { "@type": "BusinessAudience", "audienceType": "HVAC contractors" }, "description": "Scoped workflows that connect missed-call response, service-request routing, estimate follow-up, scheduling, and office-to-technician handoffs." }
  ]
}
</script>
</head>
<body class="blog-body commercial-body">
<header id="nav" class="nav scrolled"><div class="nav-inner container"><a class="nav-logo" href="/" aria-label="Efficient Technologies home"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64"></a><nav class="nav-links" aria-label="Primary"><a href="/solutions/lead-recovery-automation/">Lead recovery</a><a href="/#industries">Industries</a><a href="/#pricing">Pricing</a><a href="/blog/">Blog</a><a class="btn btn-primary btn-sm" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=hvac">Book a Free Automation Audit</a></nav></div></header>
<main class="commercial-main">
  <section class="commercial-hero"><div class="post-narrow"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Industries / HVAC</nav><p class="eyebrow"><span class="live-dot"></span> home-service automation &nbsp;//&nbsp; HVAC</p><h1 class="commercial-title">Keep HVAC leads and service requests moving when the office is busy.</h1><p class="commercial-lead">Efficient Technologies builds scoped automation for HVAC contractors: missed-call recovery, urgent-request routing, estimate follow-up, scheduling handoffs, and visible exceptions for a person to handle.</p><div class="commercial-actions"><a class="btn btn-primary" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=hvac">Book a Free Automation Audit</a><a class="btn btn-ghost" href="#workflow">See an HVAC workflow</a></div><ul class="commercial-facts"><li>Designed around service and estimate workflows</li><li>Seasonal-volume rules are documented</li><li>Humans retain dispatch and exception decisions</li></ul></div></section>
  <section id="workflow" class="commercial-section"><div class="post-narrow"><p class="eyebrow">// illustrative workflow</p><h2>From a missed HVAC call to a visible next step</h2><p class="section-copy">This is an example system design, not a customer result. The audit maps the actual phone, form, CRM, scheduling, service-area, and escalation rules before anything is built.</p><ol class="workflow-list"><li class="workflow-step"><div><h3>Capture the event</h3><p>A missed call or web request creates a record with source, timestamp, and available contact data.</p></div></li><li class="workflow-step"><div><h3>Acknowledge promptly</h3><p>An approved message confirms receipt without promising availability, diagnosis, or arrival time.</p></div></li><li class="workflow-step"><div><h3>Collect bounded context</h3><p>The workflow can collect service type, ZIP code, urgency, and existing-customer status using agreed questions.</p></div></li><li class="workflow-step"><div><h3>Route by operating rules</h3><p>Emergency language, after-hours events, service-area mismatches, and estimate requests follow documented paths.</p></div></li><li class="workflow-step"><div><h3>Hand off to office or technician</h3><p>Qualified replies create a visible task or notification for the correct person; automation does not dispatch a technician on its own.</p></div></li><li class="workflow-step"><div><h3>Stop and report</h3><p>Sequences stop on reply, booking, opt-out, invalid data, or the agreed attempt limit, with unresolved items visible.</p></div></li></ol><div class="commercial-callout"><strong>Seasonal demand needs explicit limits:</strong> the system should define queue behavior, overflow routing, business-hour logic, and the human owner before peak volume arrives.</div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// useful systems</p><h2>Where HVAC contractors can apply automation</h2><div class="commercial-grid"><article class="commercial-card"><h3>Missed-call recovery</h3><p>Acknowledge missed calls, collect limited context, and create a human follow-up path.</p></article><article class="commercial-card"><h3>Estimate follow-up</h3><p>Send an approved, bounded follow-up sequence while preserving opt-outs and manual ownership.</p></article><article class="commercial-card"><h3>Booking handoffs</h3><p>Connect qualified requests to existing scheduling rules without promising unavailable slots.</p></article><article class="commercial-card"><h3>Office visibility</h3><p>Expose failures, unanswered requests, and technician-office handoff status in the tools the team already uses.</p></article></div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// questions</p><h2>HVAC automation FAQ</h2><div class="faq-list"><details><summary>Does this replace dispatch staff?</summary><p>No. It handles agreed repetitive steps and keeps dispatch, safety, diagnosis, pricing, and exceptions with people.</p></details><details><summary>Can it work with our existing field-service software?</summary><p>Possibly. The audit checks available APIs, webhooks, permissions, data quality, and fallback paths before a scope is quoted.</p></details><details><summary>Can it handle after-hours emergency language?</summary><p>It can recognize agreed terms and route them to the approved emergency or on-call path, but it must not promise service or make a safety decision.</p></details><details><summary>Is a result guaranteed?</summary><p>No ranking, revenue, or booking result is guaranteed. The implementation guarantee applies only to delivering the agreed workflow under the stated access and acceptance conditions.</p></details></div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// connected systems</p><h2>Build the workflow around the whole lead journey</h2><div class="related-links"><a href="/solutions/lead-recovery-automation/">Lead Recovery &rarr;</a><a href="/solutions/booking-automation/">Booking Automation &rarr;</a><a href="/solutions/review-automation/">Review Automation &rarr;</a></div></div></section>
  <section class="commercial-cta"><h2>Map the HVAC workflow before automating it.</h2><p>Bring the current phone, form, follow-up, scheduling, and handoff process. The audit identifies a small, testable first system.</p><a class="btn btn-primary" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=hvac-bottom">Book a Free Automation Audit</a></section>
</main>
<footer class="footer"><div class="container footer-inner"><div class="footer-brand"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64" loading="lazy" decoding="async"><p>Lead recovery, booking, and review automation for home-service businesses across the United States.</p></div><div class="footer-meta"><p><span class="live-dot"></span> system online</p><p><a href="/about/">About Efficient Technologies</a></p><p><a href="mailto:tarik@efficientautomate.com">tarik@efficientautomate.com</a></p><p class="muted">Mailing address: 30 N Gould St #65748, Sheridan, WY 82801, USA</p></div></div></footer>
</body>
</html>
```

- [ ] **Step 3: Create the complete Plumbing Automation page**

Create `industries/plumbing-automation/index.html`:

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Plumbing Business Automation | Efficient Technologies</title>
<meta name="description" content="Plumbing business automation for US contractors: recover missed calls, qualify service-area requests, route urgent messages, and keep quote follow-up visible.">
<meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="https://efficientautomate.com/industries/plumbing-automation/">
<meta property="og:type" content="website"><meta property="og:title" content="Plumbing Business Automation | Efficient Technologies"><meta property="og:description" content="Practical lead, booking, and follow-up workflows for plumbing businesses across the United States."><meta property="og:url" content="https://efficientautomate.com/industries/plumbing-automation/"><meta property="og:image" content="https://efficientautomate.com/assets/og-v20260714.jpg"><meta property="og:image:alt" content="Efficient Technologies automation systems">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Plumbing Business Automation | Efficient Technologies"><meta name="twitter:description" content="Practical automation systems for plumbing service and quote workflows."><meta name="twitter:image" content="https://efficientautomate.com/assets/og-v20260714.jpg">
<link rel="icon" type="image/svg+xml" href="/assets/logo/favicon.svg"><link rel="preload" href="/assets/fonts/inter-latin-v20260714.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/space-grotesk-latin-v20260714.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/assets/tokens.css?v=3"><link rel="stylesheet" href="/css/styles.css?v=4">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": "https://efficientautomate.com/industries/plumbing-automation/#webpage", "url": "https://efficientautomate.com/industries/plumbing-automation/", "name": "Plumbing Business Automation", "description": "Automation systems for plumbing contractors serving local customers in the United States.", "isPartOf": { "@id": "https://efficientautomate.com/#website" }, "about": { "@id": "https://efficientautomate.com/industries/plumbing-automation/#service" }, "inLanguage": "en-US" },
    { "@type": "Service", "@id": "https://efficientautomate.com/industries/plumbing-automation/#service", "name": "Plumbing Business Automation", "serviceType": "Lead recovery, service-area qualification, booking, quote follow-up, and operational handoff automation for plumbing contractors", "provider": { "@id": "https://efficientautomate.com/#organization" }, "areaServed": { "@type": "Country", "name": "United States" }, "audience": { "@type": "BusinessAudience", "audienceType": "Plumbing contractors" }, "description": "Scoped workflows that connect missed-call response, service-area checks, urgency routing, booking, quote follow-up, and dispatch handoffs." }
  ]
}
</script>
</head>
<body class="blog-body commercial-body">
<header id="nav" class="nav scrolled"><div class="nav-inner container"><a class="nav-logo" href="/" aria-label="Efficient Technologies home"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64"></a><nav class="nav-links" aria-label="Primary"><a href="/solutions/lead-recovery-automation/">Lead recovery</a><a href="/#industries">Industries</a><a href="/#pricing">Pricing</a><a href="/blog/">Blog</a><a class="btn btn-primary btn-sm" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=plumbing">Book a Free Automation Audit</a></nav></div></header>
<main class="commercial-main">
  <section class="commercial-hero"><div class="post-narrow"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Industries / Plumbing</nav><p class="eyebrow"><span class="live-dot"></span> home-service automation &nbsp;//&nbsp; plumbing</p><h1 class="commercial-title">Recover plumbing inquiries without automating the judgment calls.</h1><p class="commercial-lead">Efficient Technologies builds scoped automation for plumbing businesses: missed-call acknowledgement, service-area checks, urgent-message routing, booking handoffs, quote follow-up, and visible exceptions.</p><div class="commercial-actions"><a class="btn btn-primary" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=plumbing">Book a Free Automation Audit</a><a class="btn btn-ghost" href="#workflow">See a plumbing workflow</a></div><ul class="commercial-facts"><li>Service-area rules stay explicit</li><li>Urgent language routes to a person</li><li>Quotes and stops remain visible</li></ul></div></section>
  <section id="workflow" class="commercial-section"><div class="post-narrow"><p class="eyebrow">// illustrative workflow</p><h2>From a missed plumbing call to the right queue</h2><p class="section-copy">This is an example system design, not a customer result. The audit documents the real coverage area, service types, after-hours policy, scheduler, consent rules, and dispatch ownership.</p><ol class="workflow-list"><li class="workflow-step"><div><h3>Record the missed inquiry</h3><p>A phone or web event creates a timestamped record with the available source and contact fields.</p></div></li><li class="workflow-step"><div><h3>Send an approved acknowledgement</h3><p>The first message confirms receipt and sets an honest expectation without claiming that a plumber is available.</p></div></li><li class="workflow-step"><div><h3>Check service area and job type</h3><p>Agreed questions can collect ZIP code and broad service category without attempting a diagnosis.</p></div></li><li class="workflow-step"><div><h3>Escalate urgent language</h3><p>Defined safety or urgency terms route to a human or approved emergency instruction; the system does not make the decision itself.</p></div></li><li class="workflow-step"><div><h3>Create the booking or quote handoff</h3><p>Qualified requests connect to the existing scheduler or create an assigned follow-up task.</p></div></li><li class="workflow-step"><div><h3>Close the loop</h3><p>Replies, bookings, opt-outs, invalid records, and attempt limits stop the sequence and remain inspectable.</p></div></li></ol><div class="commercial-callout"><strong>Urgency is not a chatbot decision:</strong> the workflow can detect terms and notify the agreed owner, but emergency guidance, diagnosis, pricing, and dispatch stay within the contractor's approved human process.</div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// useful systems</p><h2>Where plumbing businesses can apply automation</h2><div class="commercial-grid"><article class="commercial-card"><h3>Missed-call response</h3><p>Create a fast acknowledgement and collect only the context needed for the next human action.</p></article><article class="commercial-card"><h3>Service-area qualification</h3><p>Use documented ZIP or territory rules and preserve an exception path for edge cases.</p></article><article class="commercial-card"><h3>Quote follow-up</h3><p>Send a small approved sequence, respect opt-outs, and keep ownership visible.</p></article><article class="commercial-card"><h3>Dispatch handoffs</h3><p>Route the record and context to the right office or on-call queue without autonomous dispatch.</p></article></div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// questions</p><h2>Plumbing automation FAQ</h2><div class="faq-list"><details><summary>Can the system diagnose the plumbing problem?</summary><p>No. It can collect broad, approved context and route it; diagnosis and safety guidance remain with qualified people.</p></details><details><summary>Can it screen by ZIP code?</summary><p>Yes, when the service-area rules are supplied and maintained. Edge cases should route to a person rather than receive an unsupported promise.</p></details><details><summary>Can it book directly?</summary><p>Only if the connected scheduler, availability rules, and permissions support a reliable path. Otherwise it creates a booking request for a person.</p></details><details><summary>Will it guarantee more jobs?</summary><p>No. The workflow can make response and follow-up more consistent, but demand, customer decisions, capacity, pricing, and close rate remain outside the guarantee.</p></details></div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// connected systems</p><h2>Connect inquiry response to the next operational step</h2><div class="related-links"><a href="/solutions/lead-recovery-automation/">Lead Recovery &rarr;</a><a href="/solutions/booking-automation/">Booking Automation &rarr;</a><a href="/solutions/review-automation/">Review Automation &rarr;</a></div></div></section>
  <section class="commercial-cta"><h2>Map the plumbing workflow before automating it.</h2><p>Bring the current phone, form, service-area, booking, quote, and dispatch process. The audit identifies a small, testable first system.</p><a class="btn btn-primary" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=plumbing-bottom">Book a Free Automation Audit</a></section>
</main>
<footer class="footer"><div class="container footer-inner"><div class="footer-brand"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64" loading="lazy" decoding="async"><p>Lead recovery, booking, and review automation for home-service businesses across the United States.</p></div><div class="footer-meta"><p><span class="live-dot"></span> system online</p><p><a href="/about/">About Efficient Technologies</a></p><p><a href="mailto:tarik@efficientautomate.com">tarik@efficientautomate.com</a></p><p class="muted">Mailing address: 30 N Gould St #65748, Sheridan, WY 82801, USA</p></div></div></footer>
</body>
</html>
```

- [ ] **Step 4: Create the complete Electrical Contractor Automation page**

Create `industries/electrical-automation/index.html`:

```html
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Electrical Contractor Automation | Efficient Technologies</title>
<meta name="description" content="Electrical contractor automation for US businesses: recover missed leads, route residential and commercial requests, follow up on estimates, and coordinate scheduling handoffs.">
<meta name="robots" content="index, follow, max-image-preview:large"><link rel="canonical" href="https://efficientautomate.com/industries/electrical-automation/">
<meta property="og:type" content="website"><meta property="og:title" content="Electrical Contractor Automation | Efficient Technologies"><meta property="og:description" content="Practical lead, estimate, and scheduling workflows for electrical contractors across the United States."><meta property="og:url" content="https://efficientautomate.com/industries/electrical-automation/"><meta property="og:image" content="https://efficientautomate.com/assets/og-v20260714.jpg"><meta property="og:image:alt" content="Efficient Technologies automation systems">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Electrical Contractor Automation | Efficient Technologies"><meta name="twitter:description" content="Practical automation systems for electrical service and estimate workflows."><meta name="twitter:image" content="https://efficientautomate.com/assets/og-v20260714.jpg">
<link rel="icon" type="image/svg+xml" href="/assets/logo/favicon.svg"><link rel="preload" href="/assets/fonts/inter-latin-v20260714.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/assets/fonts/space-grotesk-latin-v20260714.woff2" as="font" type="font/woff2" crossorigin><link rel="stylesheet" href="/assets/tokens.css?v=3"><link rel="stylesheet" href="/css/styles.css?v=4">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": "https://efficientautomate.com/industries/electrical-automation/#webpage", "url": "https://efficientautomate.com/industries/electrical-automation/", "name": "Electrical Contractor Automation", "description": "Automation systems for electrical contractors serving local customers in the United States.", "isPartOf": { "@id": "https://efficientautomate.com/#website" }, "about": { "@id": "https://efficientautomate.com/industries/electrical-automation/#service" }, "inLanguage": "en-US" },
    { "@type": "Service", "@id": "https://efficientautomate.com/industries/electrical-automation/#service", "name": "Electrical Contractor Automation", "serviceType": "Lead recovery, job-type routing, estimate follow-up, booking, and operational handoff automation for electrical contractors", "provider": { "@id": "https://efficientautomate.com/#organization" }, "areaServed": { "@type": "Country", "name": "United States" }, "audience": { "@type": "BusinessAudience", "audienceType": "Electrical contractors" }, "description": "Scoped workflows that connect missed-call response, residential and commercial request routing, estimate follow-up, scheduling, and office-to-field handoffs." }
  ]
}
</script>
</head>
<body class="blog-body commercial-body">
<header id="nav" class="nav scrolled"><div class="nav-inner container"><a class="nav-logo" href="/" aria-label="Efficient Technologies home"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64"></a><nav class="nav-links" aria-label="Primary"><a href="/solutions/lead-recovery-automation/">Lead recovery</a><a href="/#industries">Industries</a><a href="/#pricing">Pricing</a><a href="/blog/">Blog</a><a class="btn btn-primary btn-sm" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=electrical">Book a Free Automation Audit</a></nav></div></header>
<main class="commercial-main">
  <section class="commercial-hero"><div class="post-narrow"><nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Home</a> / Industries / Electrical</nav><p class="eyebrow"><span class="live-dot"></span> home-service automation &nbsp;//&nbsp; electrical</p><h1 class="commercial-title">Route electrical leads by job type without losing the human handoff.</h1><p class="commercial-lead">Efficient Technologies builds scoped automation for electrical contractors: missed-lead recovery, residential and commercial intake, estimate follow-up, scheduling handoffs, and visible exceptions.</p><div class="commercial-actions"><a class="btn btn-primary" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=electrical">Book a Free Automation Audit</a><a class="btn btn-ghost" href="#workflow">See an electrical workflow</a></div><ul class="commercial-facts"><li>Residential and commercial paths stay distinct</li><li>Job-type questions are bounded</li><li>Safety and estimating stay with people</li></ul></div></section>
  <section id="workflow" class="commercial-section"><div class="post-narrow"><p class="eyebrow">// illustrative workflow</p><h2>From an electrical inquiry to the correct owner</h2><p class="section-copy">This is an example system design, not a customer result. The audit documents service area, job categories, residential and commercial routing, safety language, estimate ownership, and scheduling rules.</p><ol class="workflow-list"><li class="workflow-step"><div><h3>Capture the inquiry</h3><p>A missed call or web submission creates one record with source, timestamp, and available contact details.</p></div></li><li class="workflow-step"><div><h3>Acknowledge receipt</h3><p>An approved response confirms the request without offering technical advice or promising a time slot.</p></div></li><li class="workflow-step"><div><h3>Collect broad job context</h3><p>Agreed questions can distinguish service, installation, estimate, residential, or commercial requests.</p></div></li><li class="workflow-step"><div><h3>Apply routing rules</h3><p>Service area, job category, safety language, and account type determine the approved queue or human escalation.</p></div></li><li class="workflow-step"><div><h3>Create the estimate or scheduling handoff</h3><p>The correct office owner receives the context and next action in the existing system of record.</p></div></li><li class="workflow-step"><div><h3>Stop and expose exceptions</h3><p>Reply, booking, opt-out, invalid data, or attempt limit stops the sequence; failed or unresolved items remain visible.</p></div></li></ol><div class="commercial-callout"><strong>Technical judgment remains human:</strong> the system can organize intake and routing, but electrical advice, code interpretation, pricing, estimating, and safety decisions are outside the automated step.</div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// useful systems</p><h2>Where electrical contractors can apply automation</h2><div class="commercial-grid"><article class="commercial-card"><h3>Lead recovery</h3><p>Acknowledge missed inquiries and preserve source, timing, and ownership for follow-up.</p></article><article class="commercial-card"><h3>Job-type routing</h3><p>Separate residential, commercial, service, and estimate paths using documented questions and rules.</p></article><article class="commercial-card"><h3>Estimate follow-up</h3><p>Run a bounded approved sequence and hand replies back to the estimator or office owner.</p></article><article class="commercial-card"><h3>Scheduling handoffs</h3><p>Connect qualified requests to available scheduling paths while keeping exceptions visible.</p></article></div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// questions</p><h2>Electrical automation FAQ</h2><div class="faq-list"><details><summary>Can automation answer technical electrical questions?</summary><p>No. It can collect broad intake information and route it; licensed judgment, safety guidance, code questions, and diagnosis remain with people.</p></details><details><summary>Can residential and commercial inquiries follow different paths?</summary><p>Yes. The workflow can apply supplied categories and ownership rules, with unclear records routed to a human.</p></details><details><summary>Can it follow up on estimates?</summary><p>Yes, through a bounded, approved sequence that respects consent and stops on reply, opt-out, or the agreed attempt limit.</p></details><details><summary>Will it work with our current CRM or field-service tool?</summary><p>The audit checks the actual integration surface, permissions, data fields, and fallback behavior before making that commitment.</p></details></div></div></section>
  <section class="commercial-section"><div class="post-narrow"><p class="eyebrow">// connected systems</p><h2>Connect intake, estimating, and scheduling</h2><div class="related-links"><a href="/solutions/lead-recovery-automation/">Lead Recovery &rarr;</a><a href="/solutions/booking-automation/">Booking Automation &rarr;</a><a href="/solutions/review-automation/">Review Automation &rarr;</a></div></div></section>
  <section class="commercial-cta"><h2>Map the electrical workflow before automating it.</h2><p>Bring the current phone, form, job-type, estimating, and scheduling process. The audit identifies a small, testable first system.</p><a class="btn btn-primary" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=electrical-bottom">Book a Free Automation Audit</a></section>
</main>
<footer class="footer"><div class="container footer-inner"><div class="footer-brand"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64" loading="lazy" decoding="async"><p>Lead recovery, booking, and review automation for home-service businesses across the United States.</p></div><div class="footer-meta"><p><span class="live-dot"></span> system online</p><p><a href="/about/">About Efficient Technologies</a></p><p><a href="mailto:tarik@efficientautomate.com">tarik@efficientautomate.com</a></p><p class="muted">Mailing address: 30 N Gould St #65748, Sheridan, WY 82801, USA</p></div></div></footer>
</body>
</html>
```

- [ ] **Step 5: Run the cumulative industry validator**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs industries
```

Expected: `STATIC_CHECK_INDUSTRIES_PASS`.

- [ ] **Step 6: Browser-smoke the three industry routes**

Using the bounded local server and browser harness established in Task 1, evaluate each route at `1440x900` and `390x844`:

```javascript
({
  h1Count: document.querySelectorAll('h1').length,
  workflowSteps: document.querySelectorAll('.workflow-step').length,
  faqCount: document.querySelectorAll('.faq-list details').length,
  primaryCtas: [...document.querySelectorAll('a')].filter(a => a.textContent.trim() === 'Book a Free Automation Audit').length,
  nonJsonScripts: [...document.scripts].filter(s => s.type !== 'application/ld+json').length,
  horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
})
```

Expected for each: `h1Count: 1`, `workflowSteps: 6`, `faqCount: 4`, `primaryCtas: 3`, `nonJsonScripts: 0`, and `horizontalOverflow: false`. Also assert that each title, H1, workflow text, and canonical is distinct; no page may substitute another trade name.

- [ ] **Step 7: Commit the industry cluster**

Run:

```powershell
git add industries/hvac-automation/index.html industries/plumbing-automation/index.html industries/electrical-automation/index.html
git diff --cached --check
git commit -m "feat: add home-service industry automation pages"
```

Expected: one commit containing exactly the three industry routes.

### Task 5: Reposition the homepage without changing its video or motion system

**Files:**
- Modify: `index.html`
- Modify: `js/main.js` (one approved sentence only)
- Test: `.validation/home-service-release-v1/static-check.mjs homepage`

**Interfaces:**
- Preserves: every `<video>` element and attribute, `#preloader`, `#cursor`, `#cursor-ring`, `#hero`, `#core`, `#gaps`, `#how`, `#book`, every `data-*` motion hook, and both protected inline scripts byte-for-byte.
- Produces: the nationwide home-service positioning, route navigation, flagship Lead Recovery path, three-trade section, truthful founding-client offer, exact pricing/guarantee contract, visible FAQ, and attributed audit booking path.

**Controller correction — approved stylesheet split:** `css/styles.css` intentionally retains its one commercial-route block for secondary pages. The homepage contract therefore pins the full shared stylesheet hash but embeds only `assets/tokens.css`, the shared CSS before `/* ---- commercial solution and industry pages ---- */`, and the exact Step 3 acquisition block. Its performance test accepts only this Task 5 form or the Task 8 form with the bounded homepage-only `/* ---- blog ---- */` region removed.

- [ ] **Step 1: Prove the homepage contract is not yet satisfied**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs homepage
```

Expected: `STATIC_CHECK_HOMEPAGE_FAIL` listing the missing H1, links, `Best value`, industry section, founding-client copy, and guarantee; no frozen-file or frozen-script failure.

- [ ] **Step 2: Replace homepage metadata and the JSON-LD graph**

In `index.html`, set the exact head values:

```html
<title>Home Service Automation | Efficient Technologies</title>
<meta name="description" content="Efficient Technologies builds lead recovery, booking, and review automation for HVAC, plumbing, electrical, and other local-serving home-service businesses across the United States.">
<meta name="robots" content="index, follow, max-image-preview:large">
<link rel="icon" type="image/svg+xml" href="assets/logo/favicon.svg">

<meta property="og:type" content="website">
<meta property="og:title" content="Home Service Automation | Efficient Technologies">
<meta property="og:description" content="Turn missed calls and slow follow-up into a visible, testable path toward booked home-service jobs.">
<meta property="og:image" content="https://efficientautomate.com/assets/og-v20260714.jpg">
<meta property="og:image:alt" content="Efficient Technologies automation systems">
<meta property="og:url" content="https://efficientautomate.com/">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Home Service Automation | Efficient Technologies">
<meta name="twitter:description" content="Lead recovery, booking, and review automation for local-serving home-service businesses across the United States.">
<meta name="twitter:image" content="https://efficientautomate.com/assets/og-v20260714.jpg">
<meta name="twitter:image:alt" content="Efficient Technologies automation systems">
<link rel="canonical" href="https://efficientautomate.com/">
```

Replace the current `application/ld+json` block with exactly one valid block. Do not add `LocalBusiness`, `ProfessionalService`, or `FAQPage`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://efficientautomate.com/#organization",
      "name": "Efficient Technologies",
      "legalName": "Efficient Technologies LLC",
      "url": "https://efficientautomate.com/",
      "email": "tarik@efficientautomate.com",
      "logo": "https://efficientautomate.com/assets/og-v20260714.jpg",
      "description": "Automation studio building lead recovery, booking, review-request, and workflow systems for local-serving home-service businesses across the United States.",
      "founder": { "@id": "https://efficientautomate.com/about/#tarik-kizildere" },
      "address": { "@type": "PostalAddress", "streetAddress": "30 N Gould St #65748", "addressLocality": "Sheridan", "addressRegion": "WY", "postalCode": "82801", "addressCountry": "US" }
    },
    {
      "@type": "Person",
      "@id": "https://efficientautomate.com/about/#tarik-kizildere",
      "name": "Tarik Kizildere",
      "jobTitle": "Founder",
      "url": "https://efficientautomate.com/about/",
      "worksFor": { "@id": "https://efficientautomate.com/#organization" }
    },
    {
      "@type": "Service",
      "@id": "https://efficientautomate.com/#home-service-automation",
      "name": "Home Service Automation",
      "serviceType": "Lead recovery, booking, review-request, and workflow automation",
      "url": "https://efficientautomate.com/",
      "image": "https://efficientautomate.com/assets/og-v20260714.jpg",
      "description": "Scoped automation systems for local-serving home-service businesses, beginning with lead recovery and supported by booking and policy-safe review-request workflows.",
      "areaServed": { "@type": "Country", "name": "United States" },
      "audience": { "@type": "BusinessAudience", "audienceType": "Local-serving home-service businesses" },
      "provider": { "@id": "https://efficientautomate.com/#organization" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Home-service automation packages",
        "itemListElement": [
          { "@type": "Offer", "name": "Launch", "priceCurrency": "USD", "price": "997", "description": "One scoped automation system with setup and two weeks of tuning." },
          { "@type": "Offer", "name": "Growth", "priceCurrency": "USD", "price": "1997", "description": "A $1,997 implementation plus a $497 monthly care plan for the agreed core workflow stack." },
          { "@type": "Offer", "name": "Systems", "description": "Custom-scoped automation implementation and ongoing support." }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://efficientautomate.com/#website",
      "url": "https://efficientautomate.com/",
      "name": "Efficient Technologies",
      "inLanguage": "en-US",
      "publisher": { "@id": "https://efficientautomate.com/#organization" }
    },
    {
      "@type": "WebPage",
      "@id": "https://efficientautomate.com/#webpage",
      "url": "https://efficientautomate.com/",
      "name": "Home Service Automation | Efficient Technologies",
      "description": "Lead recovery, booking, and review automation for local-serving home-service businesses across the United States.",
      "isPartOf": { "@id": "https://efficientautomate.com/#website" },
      "about": { "@id": "https://efficientautomate.com/#home-service-automation" },
      "inLanguage": "en-US"
    }
  ]
}
</script>
```

- [ ] **Step 3: Add only the styles needed by the new homepage content**

Insert this block immediately before the protected homepage style element's closing `</style>`. Use the existing tokens and do not change any current selector, breakpoint, transform, transition, video, or animation rule:

```css
/* ---- home-service acquisition additions ---- */
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
```

- [ ] **Step 4: Replace the primary navigation and hero copy**

Keep the `<header id="nav" class="nav">` wrapper, logo, classes, and motion attributes. Replace only its `<nav>` contents with:

```html
<nav class="nav-links" aria-label="Primary">
  <a href="#automate" data-cursor>Systems</a>
  <a href="#industries" data-cursor>Industries</a>
  <a href="#how" data-cursor>How it works</a>
  <a href="#pricing" data-cursor>Pricing</a>
  <a href="/blog/" data-cursor>Blog</a>
  <a class="btn btn-primary btn-sm magnetic" data-cursor href="#book">Book a Free Automation Audit</a>
</nav>
```

Inside `#hero`, preserve the grid, side label, `rise` spans, reveal hooks, terminal, caption, and scroll cue. Set the visible copy to:

```html
<span class="side-label side-left" aria-hidden="true">Efficient Technologies &mdash; home-service automation</span>
<div class="hero-content container">
  <p class="eyebrow" data-reveal><span class="live-dot"></span> lead recovery &nbsp;//&nbsp; automation for home-service businesses</p>
  <h1 class="hero-title">
    <span class="rise">Turn missed calls and slow follow-up</span>
    <span class="rise">into <em class="serif">booked jobs.</em></span>
  </h1>
  <p class="hero-sub" data-reveal>We map the path from inquiry to human handoff, then build the approved lead-recovery, booking, and follow-up steps around the tools your team already uses.</p>
  <div class="hero-cta" data-reveal>
    <a class="btn btn-primary magnetic" data-cursor href="#book">Book a Free Automation Audit</a>
    <a class="btn btn-ghost" data-cursor href="/solutions/lead-recovery-automation/">See Lead Recovery</a>
  </div>
  <div class="terminal" data-reveal role="img" aria-label="Illustrative automation workflow">
    <div class="terminal-bar"><span class="tdot"></span><span class="tdot"></span><span class="tdot"></span><span class="tlabel">et &mdash; illustrative workflow &nbsp;<em class="tlive">demo</em></span></div>
    <div id="term-lines" class="terminal-body"></div>
    <div class="terminal-foot">lead recovery &middot; booking &middot; reviews &middot; handoffs</div>
  </div>
  <p class="term-caption" data-reveal>an example of workflow logic, not a customer result</p>
</div>
```

- [ ] **Step 5: Replace unsupported problem and service claims with scoped routes**

Keep `#gaps`, its outer wrappers, `data-*` hooks, and five-card structure. Replace the heading, lead, and cards with:

```html
<p class="eyebrow" data-reveal>// 01 &mdash; the handoff gaps</p>
<h2 class="section-title" data-rise>Where home-service inquiries <em class="serif">lose momentum</em></h2>
<p class="section-lead" data-reveal>These are common workflow failure points to inspect during an audit. Their actual frequency and value must be measured in your business.</p>
<div class="cards-5" data-reveal-group>
  <div class="card gap" data-cursor><span class="gap-tag">unanswered</span><h3>Missed calls</h3><p>No acknowledgement, context capture, or visible owner after the phone stops ringing.</p></div>
  <div class="card gap" data-cursor><span class="gap-tag">delayed</span><h3>Slow follow-up</h3><p>New and estimate-stage leads wait without a documented response sequence.</p></div>
  <div class="card gap" data-cursor><span class="gap-tag">unclear</span><h3>Routing gaps</h3><p>Service area, job type, urgency, and ownership are decided manually each time.</p></div>
  <div class="card gap" data-cursor><span class="gap-tag">disconnected</span><h3>Booking handoffs</h3><p>Qualified requests do not reach the scheduler or the person responsible for the next step.</p></div>
  <div class="card gap" data-cursor><span class="gap-tag">invisible</span><h3>No stop-state view</h3><p>Replies, opt-outs, failures, and unresolved exceptions are hard to inspect.</p></div>
</div>
```

Keep `#automate`, its wrappers, and six-card grid. Replace its content with:

```html
<p class="eyebrow" data-reveal>// 02 &mdash; systems</p>
<h2 class="section-title" data-rise>Start with the workflow closest to <em class="serif">a missed opportunity</em></h2>
<p class="section-lead" data-reveal>Each system is scoped around real triggers, tools, owners, stop conditions, and acceptance checks.</p>
<div class="cards-3" data-reveal-group>
  <a class="card svc svc-link" href="/solutions/lead-recovery-automation/" data-cursor><div class="svc-ico" aria-hidden="true">&#8631;</div><h3>Lead Recovery</h3><p>Acknowledge missed calls and web leads, collect bounded context, route replies, and expose exceptions.</p></a>
  <a class="card svc svc-link" href="/solutions/booking-automation/" data-cursor><div class="svc-ico" aria-hidden="true">&#9634;</div><h3>Booking Automation</h3><p>Connect qualified requests to approved availability rules, confirmations, reminders, and human handoffs.</p></a>
  <a class="card svc svc-link" href="/solutions/review-automation/" data-cursor><div class="svc-ico" aria-hidden="true">&#9733;</div><h3>Review Automation</h3><p>Ask every eligible customer consistently, without sentiment filtering, review gating, or positive-review incentives.</p></a>
  <div class="card svc" data-cursor><div class="svc-ico" aria-hidden="true">&#9707;</div><h3>Workflow records</h3><p>Keep source, status, owner, consent, reply, stop, and failure states visible in the agreed system.</p></div>
  <div class="card svc" data-cursor><div class="svc-ico" aria-hidden="true">&#8703;</div><h3>Tool connections</h3><p>Connect supported phone, form, CRM, scheduling, messaging, and task tools with documented fallbacks.</p></div>
  <div class="card svc" data-cursor><div class="svc-ico" aria-hidden="true">&#9673;</div><h3>Custom handoffs</h3><p>Scope repetitive steps that have a clear trigger, rule, human owner, stop condition, and acceptance test.</p></div>
</div>
```

- [ ] **Step 6: Insert the nationwide industry section without changing motion anchors**

Insert this complete section after `#automate` and before `#how`. Do not rename, remove, or duplicate any existing section ID:

```html
<section id="industries" class="section">
  <div class="container">
    <p class="eyebrow" data-reveal>// 03 &mdash; initial industries</p>
    <h2 class="section-title" data-rise>Built for local-serving <em class="serif">home-service teams</em></h2>
    <p class="section-lead" data-reveal>Efficient Technologies serves businesses across the United States. These first routes focus on trade-specific intake and handoff rules, not fabricated local offices.</p>
    <div class="industry-grid" data-reveal-group>
      <a class="industry-link" href="/industries/hvac-automation/" data-cursor><h3>HVAC Automation</h3><p>Missed calls, seasonal queues, estimate follow-up, and office-to-technician handoffs.</p></a>
      <a class="industry-link" href="/industries/plumbing-automation/" data-cursor><h3>Plumbing Automation</h3><p>Service-area checks, urgent-message routing, booking requests, and quote follow-up.</p></a>
      <a class="industry-link" href="/industries/electrical-automation/" data-cursor><h3>Electrical Automation</h3><p>Residential and commercial intake, job-type routing, estimating, and scheduling handoffs.</p></a>
    </div>
  </div>
</section>
```

- [ ] **Step 7: Tighten the process, proof, and PageCraftory qualification**

Keep `#how`, the horizontal track, and its five articles. Change only its eyebrow to `// 04 &mdash; how it works`, heading to `Audit, scope, build, and <em class="serif">verify</em>`, and the five body paragraphs to:

```html
<article class="step" data-cursor><span class="step-n">01</span><h3>Audit</h3><p>Map the current trigger, tools, delays, owners, exceptions, and measurable baseline.</p></article>
<article class="step" data-cursor><span class="step-n">02</span><h3>Scope</h3><p>Choose one bounded workflow, acceptance criteria, required access, price, and exclusions.</p></article>
<article class="step" data-cursor><span class="step-n">03</span><h3>Build</h3><p>Implement the approved path around supported tools with test records and a human fallback.</p></article>
<article class="step" data-cursor><span class="step-n">04</span><h3>Verify</h3><p>Test success, failure, reply, opt-out, duplicate, and stop conditions before acceptance.</p></article>
<article class="step" data-cursor><span class="step-n">05</span><h3>Operate</h3><p>Document ownership, monitor the agreed signals, and tune only within the approved scope.</p></article>
```

In `#proof`, set the eyebrow to `// 05 &mdash; delivery controls`, the heading to `A small first system with <em class="serif">visible boundaries</em>`, preserve the four process-stat counters, and append this immediately after `.stats`:

```html
<div class="founding-callout" data-reveal>
  <h3>Three founding-client implementation slots</h3>
  <p>Efficient Technologies is offering three discounted, tightly scoped first implementations. The exact discount is quoted privately. Participation requires permission to document the agreed baseline, build, and measured result accurately; no positive outcome or testimonial is required.</p>
</div>
```

In `#work`, set the eyebrow to `// 06 &mdash; web-design proof`, heading to `A live example of our <em class="serif">front-end work</em>`, and lead to `PageCraftory demonstrates web design and scroll-driven implementation. It is not evidence of automation revenue or booking performance.` Preserve the PageCraftory card, URL, visual, and description.

- [ ] **Step 8: Replace pricing, guarantee, FAQ, and booking copy**

Keep the existing `#pricing` wrappers and card classes. Replace its content with:

```html
<div class="container">
  <p class="eyebrow" data-reveal>// 07 &mdash; packages</p>
  <h2 class="section-title" data-rise>Start with a <em class="serif">bounded workflow</em></h2>
  <p class="section-lead" data-reveal>Final scope depends on tool access, data, workflow complexity, and acceptance criteria. Third-party fees are separate.</p>
  <div class="pricing" data-reveal-group>
    <div class="card price" data-cursor><h3>Launch</h3><div class="price-tag">$997 <span>one-time</span></div><p class="price-sub">One scoped automation system.</p><ul><li>One documented workflow</li><li>Setup on supported tools</li><li>Acceptance checklist</li><li>2 weeks of tuning</li></ul><a class="btn btn-ghost" data-cursor href="#book">Book a Free Automation Audit</a></div>
    <div class="card price featured" data-cursor><span class="price-badge">Best value</span><h3>Growth</h3><div class="price-tag">$1,997 <span>build</span></div><div class="price-mo"><b>+ $497</b> / mo</div><p class="price-sub">The agreed core workflow stack.</p><ul><li>Lead recovery + booking handoff</li><li>Workflow records and routing</li><li>Policy-safe review requests</li><li>30 days of tuning</li></ul><a class="btn btn-primary magnetic" data-cursor href="#book">Book a Free Automation Audit</a></div>
    <div class="card price" data-cursor><h3>Systems</h3><div class="price-tag">Custom</div><p class="price-sub">Custom-scoped automation.</p><ul><li>Multi-workflow implementation</li><li>Documented integration boundaries</li><li>Monitoring and support scope</li><li>Custom care plan</li></ul><a class="btn btn-ghost" data-cursor href="#book">Book a Free Automation Audit</a></div>
  </div>
  <p class="guarantee" data-reveal><span class="live-dot"></span> 30-day implementation guarantee</p>
  <p class="guarantee-detail" data-reveal>If the agreed workflow is not operating as scoped within 30 days after we receive the required access, content, decisions, and approvals, we will continue implementation without additional implementation fees. This excludes new scope, third-party fees or outages, revoked or delayed access, missing client inputs, and operation outside the agreed acceptance criteria.</p>
</div>
```

Insert this visible FAQ after `#pricing` and before `#book`; do not add FAQ structured data:

```html
<section id="faq" class="section">
  <div class="container">
    <p class="eyebrow" data-reveal>// 08 &mdash; questions</p>
    <h2 class="section-title" data-rise>What the first <em class="serif">automation audit</em> covers</h2>
    <div class="home-faq" data-reveal-group>
      <details><summary>What kind of business is this for?</summary><p>Local-serving home-service businesses in the United States, initially HVAC, plumbing, and electrical contractors. The first project should be a bounded operational workflow, not an enterprise transformation.</p></details>
      <details><summary>What should we automate first?</summary><p>Usually the best candidate is a repetitive handoff close to an inquiry: missed-call response, web-lead routing, booking coordination, or estimate follow-up. The audit tests that assumption against your process and data.</p></details>
      <details><summary>Will automation replace our office team?</summary><p>No. The design handles agreed repetitive steps while keeping safety, diagnosis, pricing, dispatch, exceptions, and relationship decisions with people.</p></details>
      <details><summary>Does the 30-day guarantee promise revenue or rankings?</summary><p>No. It applies only to operating the agreed workflow as scoped under the stated access, input, third-party, and acceptance conditions.</p></details>
      <details><summary>Can you work with our current tools?</summary><p>The audit checks APIs, webhooks, permissions, data fields, reliability, and fallback paths before integration is included in the scope.</p></details>
    </div>
  </div>
</section>
```

Inside `#book`, preserve the booking wrapper and embed hook. Set the copy and fallback URL exactly:

```html
<p class="eyebrow" data-reveal><span class="live-dot"></span> 09 &mdash; free automation audit</p>
<h2 class="section-title" data-rise>Map one leak. <em class="serif">Define the first system.</em></h2>
<p class="section-lead" data-reveal>In 20 minutes, we will inspect one inquiry-to-handoff workflow, identify the current trigger and owner, and determine whether a small automation is worth scoping.</p>
<div class="book-panel" data-reveal>
  <div id="booking-embed" class="booking-embed" data-cal-link="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=homepage-booking">
    <div class="booking-fallback">
      <div class="term-mini"><span class="p">$</span> et audit --with founder <span class="cur">&#9646;</span></div>
      <a class="btn btn-primary magnetic" data-cursor href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=homepage-fallback">Book a Free Automation Audit</a>
      <p class="muted">or email <a href="mailto:tarik@efficientautomate.com" data-cursor>tarik@efficientautomate.com</a></p>
    </div>
  </div>
</div>
```

Update the footer description to `Lead recovery, booking, and review automation for home-service businesses across the United States.` and qualify the address as `Mailing address: 30 N Gould St #65748, Sheridan, WY 82801, USA`. Preserve the footer structure and copyright.

- [ ] **Step 9: Make the single approved JavaScript copy correction**

In `js/main.js`, replace exactly:

```javascript
{ t: 'negative review caught → routed private', c: 'w', k: null },
```

with:

```javascript
{ t: 'customer feedback → human follow-up', c: 'w', k: null },
```

Do not format, reorder, or modify any other JavaScript.

- [ ] **Step 10: Run static integrity and homepage checks**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs homepage
git diff --check
git diff -- js/main.js
```

Expected: `STATIC_CHECK_HOMEPAGE_PASS`; the JavaScript diff is exactly one removed line and one added line; protected videos, poster, files, and inline scripts still match their hashes.

- [ ] **Step 11: Browser-qualify the unchanged experience contract**

At desktop and mobile widths, with a 45-second deadline per case, verify:

```javascript
({
  h1Count: document.querySelectorAll('#hero h1').length,
  videoIds: [...document.querySelectorAll('video')].map(v => v.id),
  videoSources: [...document.querySelectorAll('video')].map(v => v.dataset.src),
  anchors: ['hero','core','gaps','how','book'].map(id => Boolean(document.getElementById(id))),
  industryLinks: document.querySelectorAll('#industries .industry-link').length,
  faqCount: document.querySelectorAll('#faq details').length,
  horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
})
```

Expected: one hero H1; exact video IDs `world-video,ch-t1,ch-t1r,ch-t2,ch-t2r,ch-t3,ch-t3r`; exact original source order; five `true` anchors; three industry links; five FAQs; no overflow. Then capture screenshots at the hero and each motion anchor and compare with the Task 1 baseline for the same viewport. Scroll forward and backward through all three chapter transitions and verify the same scene order, reversal, zoom behavior, loader dismissal, cursor behavior, reduced-motion behavior, and mobile/desktop object positioning. Copy and added static sections may differ; motion behavior may not.

- [ ] **Step 12: Commit the homepage conversion layer**

Run:

```powershell
git add index.html js/main.js
git diff --cached --check
git commit -m "feat: reposition homepage for home-service automation"
```

Expected: one commit containing the homepage and the single-line policy correction.

### Task 6: Align About and the existing editorial cluster with the commercial claim boundary

**Files:**
- Modify: `about/index.html`
- Modify: `blog/index.html`
- Modify: `blog/crm-automation-local-business/index.html`
- Modify: `blog/business-process-automation-small-business/index.html`
- Modify: `blog/booking-automation-after-hours/index.html`
- Modify: `blog/review-automation-local-seo/index.html`
- Modify: `blog/software-consulting-vs-in-house/index.html`
- Test: `.validation/home-service-release-v1/static-check.mjs cluster`

**Interfaces:**
- Consumes: the six commercial pages and the exact audit CTA/UTM convention.
- Produces: a truthful founder/entity page, a home-service editorial hub, policy-safe review guidance, evidence-bounded operational articles, and contextual internal links from every existing article into the commercial cluster.

- [ ] **Step 1: Prove the content cluster still violates the release contract**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs cluster
```

Expected: `STATIC_CHECK_CLUSTER_FAIL` naming unsupported phrases and missing solution links; previous cumulative phases still pass.

- [ ] **Step 2: Apply the common navigation, stylesheet, CTA, and footer contract**

In all seven files in this task, change `/css/styles.css?v=3` to `/css/styles.css?v=4`.

Replace each current secondary-page navigation with this exact block:

```html
<header id="nav" class="nav scrolled"><div class="nav-inner container"><a class="nav-logo" href="/" aria-label="Efficient Technologies home"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64"></a><nav class="nav-links" aria-label="Primary"><a href="/solutions/lead-recovery-automation/">Lead recovery</a><a href="/#industries">Industries</a><a href="/#how">How it works</a><a href="/#pricing">Pricing</a><a href="/blog/">Blog</a><a class="btn btn-primary btn-sm" href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=secondary-header">Book a Free Automation Audit</a></nav></div></header>
```

Replace the footer in all seven files with:

```html
<footer class="footer"><div class="container footer-inner"><div class="footer-brand"><img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64"><p>Lead recovery, booking, and review automation for home-service businesses across the United States.</p></div><div class="footer-meta"><p><span class="live-dot"></span> system online</p><p><a href="/about/">About Efficient Technologies</a></p><p><a href="mailto:tarik@efficientautomate.com">tarik@efficientautomate.com</a></p><p class="muted">Mailing address: 30 N Gould St #65748, Sheridan, WY 82801, USA</p></div></div></footer>
```

In each article, keep the `.post-cta` wrapper and set its heading, paragraph, and anchor label exactly as follows:

```html
<h3>Map one workflow before you automate it.</h3>
<p>Bring the current trigger, tools, owner, handoff, and exceptions. The free audit will test whether a small first system is worth scoping.</p>
<a class="btn btn-primary">Book a Free Automation Audit</a>
```

Set the five anchor `href` values exactly:

- `blog/crm-automation-local-business/index.html`: `https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=article-crm`
- `blog/business-process-automation-small-business/index.html`: `https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=article-process`
- `blog/booking-automation-after-hours/index.html`: `https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=article-booking`
- `blog/review-automation-local-seo/index.html`: `https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=article-reviews`
- `blog/software-consulting-vs-in-house/index.html`: `https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=article-consulting`

- [ ] **Step 3: Rebuild the About page around verifiable identity and scope**

In `about/index.html`, replace all title/social-title occurrences with `About Efficient Technologies | Home Service Automation` and all description/social-description/AboutPage-description occurrences with `Meet Efficient Technologies, a founder-led studio building scoped lead recovery, booking, and review automation for home-service businesses across the United States.`

Add this exact `description` property to the Organization entity after `logo`:

```json
"description": "Efficient Technologies builds scoped automation systems for local-serving home-service businesses across the United States.",
```

Replace the complete `<main>` with:

```html
<main class="blog-main"><article class="post-single"><div class="post-narrow">
  <p class="eyebrow"><span class="live-dot"></span> about &nbsp;//&nbsp; efficient technologies</p>
  <h1 class="post-title">Founder-led automation systems for local-serving home-service businesses.</h1>
  <div class="post-content">
    <p>Efficient Technologies LLC builds scoped automation for home-service businesses across the United States. The initial focus is lead recovery, booking handoffs, and policy-safe review requests for HVAC, plumbing, and electrical contractors.</p>
    <h2>What we build</h2>
    <p>We map one operational workflow, define its trigger, tools, owner, rules, exceptions, stop conditions, and acceptance checks, then implement the approved path. Start with <a href="/solutions/lead-recovery-automation/">Lead Recovery</a>, or review the supporting <a href="/solutions/booking-automation/">Booking</a> and <a href="/solutions/review-automation/">Review Automation</a> systems.</p>
    <h2>Who runs the studio</h2>
    <p><strong>Tarik Kizildere</strong> is the founder of Efficient Technologies. He leads the audit, scope, implementation, verification, and documentation for the agreed workflow.</p>
    <h2>How engagements are bounded</h2>
    <p>The first project is intentionally small. Safety, diagnosis, pricing, dispatch, relationship decisions, and unclear exceptions remain with people. Integrations are included only after their permissions, data, reliability, and fallback behavior are checked.</p>
    <h2>Where we work</h2>
    <p>Efficient Technologies serves local-serving businesses across the United States. The Sheridan location is the company's mailing address, not a claim of a local office or local service presence: 30 N Gould St #65748, Sheridan, WY 82801, USA.</p>
    <h2>Contact</h2>
    <p>Email <a href="mailto:tarik@efficientautomate.com">tarik@efficientautomate.com</a> or <a href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=about">Book a Free Automation Audit</a>.</p>
  </div>
</div></article></main>
```

- [ ] **Step 4: Apply exact article metadata, dates, and CTA attribution**

Use these exact values; replace the old title/headline/description everywhere it appears in head metadata and JSON-LD. For the four materially rewritten articles, set JSON-LD `dateModified` to `2026-07-21` and visible `Updated` markup to `<time datetime="2026-07-21">Jul 21, 2026</time>`.

| File | Exact title and JSON-LD headline | Exact description | `utm_content` | Modified |
|---|---|---|---|---|
| `blog/crm-automation-local-business/index.html` | Title stays `CRM Automation for Local Businesses: The 2026 Playbook \| Efficient Technologies`; headline stays without the suffix | `A practical framework for connecting lead intake, status, follow-up, booking, and review-request handoffs in a small local business.` | `article-crm` | `2026-07-21` |
| `blog/business-process-automation-small-business/index.html` | Title and headline stay unchanged | `How to map a small-business workflow, choose a bounded automation candidate, preserve human decisions, and define acceptance checks.` | `article-process` | `2026-07-21` |
| `blog/booking-automation-after-hours/index.html` | `After-Hours Booking Automation for Local Businesses \| Efficient Technologies`; headline `After-Hours Booking Automation for Local Businesses` | `How online booking, missed-call acknowledgement, reminders, and human handoffs can make after-hours inquiries easier to manage.` | `article-booking` | `2026-07-21` |
| `blog/review-automation-local-seo/index.html` | `Review Automation for Local SEO: A Policy-Safe Workflow \| Efficient Technologies`; headline `Review Automation for Local SEO: A Policy-Safe Workflow` | `How to send consistent post-job review requests without sentiment filtering, review gating, fabricated content, or positive-review incentives.` | `article-reviews` | `2026-07-21` |
| `blog/software-consulting-vs-in-house/index.html` | Title, headline, description, and `dateModified` stay unchanged | Existing description stays | `article-consulting` | stays `2026-07-14` |

- [ ] **Step 5: Repair and connect the CRM article**

In `blog/crm-automation-local-business/index.html`, make these exact body replacements:

```html
<p>Before choosing a CRM automation, measure where records arrive, who owns the response, which states are missing, and what actually goes unresolved. The framework below helps inspect those questions; it does not assume this is every business's largest or cheapest gap.</p>
```

replaces the paragraph beginning `This is the single most common gap`.

```html
<blockquote>A contact with no owner, status, or next step is difficult to manage and impossible to audit reliably.</blockquote>
```

replaces the paid-lead blockquote.

Replace the four automation list items with:

```html
<li><strong>Prompt lead acknowledgement.</strong> A new form submission or missed call can create a timestamped record and an approved acknowledgement. The target must match operating hours, consent, and channel rules.</li>
<li><strong>Bounded follow-up.</strong> Define the number, spacing, owner, consent basis, reply behavior, and stop conditions instead of assuming every lead should receive the same sequence.</li>
<li><strong>No-show handoff.</strong> When an appointment is missed, create the approved rebooking message or a visible task rather than silently losing the record.</li>
<li><strong>Consistent review requests.</strong> Every customer who meets the same operational eligibility rule receives the same public review opportunity, without sentiment filtering. See the <a href="/solutions/review-automation/">policy-safe Review Automation system</a>.</li>
```

Replace the `How to start` paragraph with:

```html
<p>Pick one workflow with a measurable current state, a clear owner, and a small acceptance checklist. <a href="/solutions/lead-recovery-automation/">Lead Recovery</a> is the flagship candidate when missed calls or web inquiries currently lack a visible next step. Test it with non-production and approved production records before layering in another workflow.</p>
```

Replace the `What it costs you` paragraph and following booking paragraph with:

```html
<p>Estimate the gap from your own records: count missed or unowned inquiries, measure response and resolution states, and apply your verified booking and job-value data. If those inputs are unavailable, collect a baseline before making an ROI claim.</p>
<p>See the complete <a href="/solutions/lead-recovery-automation/">Lead Recovery workflow</a>, or bring the current record path to a <a href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=article-crm-inline">free automation audit</a>.</p>
```

- [ ] **Step 6: Repair and connect the business-process article**

In `blog/business-process-automation-small-business/index.html`, replace the paragraph beginning `You don't need to automate everything` with:

```html
<p>You do not need to automate everything. Start by measuring which repetitive step has a clear trigger, predictable rule, visible owner, safe fallback, and outcome you can actually verify.</p>
```

Replace the paragraph beginning `Automate the first category first` with:

```html
<p>Evaluate the first category first, but do not assume it will pay for itself on a fixed timetable. Measure its current volume, failure rate, handling time, and business value. A common candidate is the inquiry-to-follow-up path described in <a href="/solutions/lead-recovery-automation/">Lead Recovery</a>, because its states can be made explicit and tested.</p>
```

Replace `For most local businesses, the first three automations that matter are:` with `Three common candidates to inspect are:` and replace the three list items with:

```html
<li><strong>Missed-call acknowledgement</strong> with an approved reply, bounded context collection, and a human owner. See <a href="/solutions/lead-recovery-automation/">Lead Recovery</a>.</li>
<li><strong>Booking handoff</strong> that connects qualified requests to real availability rules or a visible scheduling task. See <a href="/solutions/booking-automation/">Booking Automation</a>.</li>
<li><strong>Consistent review requests</strong> using one eligibility rule and the same public review opportunity for every eligible customer. See <a href="/solutions/review-automation/">Review Automation</a>.</li>
```

Replace `Three rules. Running quietly in the background. That's a business that stops leaking.` and the following booking sentence with:

```html
<p>These are candidates, not universal priorities. Choose only after the audit identifies the trigger, owner, exception path, stop conditions, and baseline.</p>
<p>Use the <a href="/#pricing">package scope</a> as a boundary, or bring the current process to a <a href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=article-process-inline">free automation audit</a>.</p>
```

- [ ] **Step 7: Replace the booking article body with an evidence-bounded guide**

In `blog/booking-automation-after-hours/index.html`, replace the complete `.post-content` contents with:

```html
<p>After-hours and busy-period inquiries can be difficult to manage when the only path is a live phone answer. The size of that gap is business-specific, so measure it before making a revenue claim.</p>
<p>A booking workflow should acknowledge the inquiry, expose real availability or create a human handoff, respect consent, and stop cleanly. It should not promise that a job is available or safe to schedule when the source system cannot support that promise.</p>
<h2>Establish the current state</h2>
<p>For an agreed baseline period, record missed calls and web requests by time, source, service area, job type, response state, booking state, opt-out, and unresolved exception. Use only data the business can verify.</p>
<h2>The bounded booking workflow</h2>
<ul>
<li><strong>Acknowledge the event.</strong> An approved message confirms receipt without guaranteeing availability, diagnosis, price, or arrival time.</li>
<li><strong>Collect limited context.</strong> Ask only the questions needed to apply documented service-area, job-type, and ownership rules.</li>
<li><strong>Offer a supported next step.</strong> Show real slots from the system of record, or create a scheduling request for a person.</li>
<li><strong>Confirm and remind.</strong> Send approved confirmation and bounded reminders only when the channel, consent, and scheduler state permit them.</li>
<li><strong>Stop and escalate.</strong> Reply, booking, opt-out, invalid data, attempt limit, and safety language must stop or redirect the workflow as documented.</li>
</ul>
<blockquote>Automation should make the next step visible; it should not hide uncertainty behind an instant reply.</blockquote>
<h2>Measure the result without inventing it</h2>
<p>Compare the baseline and candidate periods using acknowledged inquiries, qualified handoffs, completed bookings, opt-outs, failures, and staff handling time. Revenue estimates require verified booking and job-value data and should state the observation window.</p>
<p>See the full <a href="/solutions/booking-automation/">Booking Automation workflow</a> and its connection to <a href="/solutions/lead-recovery-automation/">Lead Recovery</a>.</p>
<p>Bring the current after-hours path to a <a href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=article-booking-inline">free automation audit</a>.</p>
```

- [ ] **Step 8: Replace the review article body with a policy-safe guide**

In `blog/review-automation-local-seo/index.html`, replace the complete `.post-content` contents with:

```html
<p>Reviews can help prospective customers evaluate a local business and can contribute to its public search presence. No workflow can guarantee rankings, review volume, rating, or conversion, but it can make the request process consistent and inspectable.</p>
<p>The central rule is simple: do not decide who receives a public review opportunity based on predicted sentiment, an internal satisfaction score, or whether the customer is expected to leave a positive rating.</p>
<h2>What a policy-safe review workflow looks like</h2>
<ul>
<li><strong>Start from an agreed completion state.</strong> A completed job or invoice status is the trigger only when that source is reliable.</li>
<li><strong>Apply one operational eligibility rule.</strong> Duplicate, cancelled, test, or legally restricted records may be excluded consistently; satisfaction may not be the filter.</li>
<li><strong>Offer the same public path.</strong> Every eligible customer receives the same opportunity to reach the selected public review profile.</li>
<li><strong>Use bounded reminders.</strong> Send only the approved number when consent and provider rules permit, then stop.</li>
<li><strong>Route direct replies to a person.</strong> Service-recovery messages can create a human task without removing or hiding the public review option.</li>
</ul>
<blockquote>Consistency is the automation goal. The customer's choice to review and what they write remain outside the system's control.</blockquote>
<h2>What not to automate</h2>
<p>Do not review-gate, offer a benefit for a positive rating, fabricate review text, submit on a customer's behalf, or suppress the public option for an unhappy respondent. Platform policies and applicable consent rules still govern the final configuration.</p>
<h2>What to measure</h2>
<p>Track eligible records, sends, deliveries, clicks, direct replies, opt-outs, failures, and public reviews only when the platform makes attribution reliable. Report the observation period and avoid presenting correlation as guaranteed causation.</p>
<p>See the complete <a href="/solutions/review-automation/">Review Automation workflow</a>, plus the preceding <a href="/solutions/booking-automation/">Booking</a> and <a href="/solutions/lead-recovery-automation/">Lead Recovery</a> systems.</p>
<p>Bring the current post-job process to a <a href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=article-reviews-inline">free automation audit</a>.</p>
```

- [ ] **Step 9: Add the commercial path to the consulting article without changing its editorial claims**

In `blog/software-consulting-vs-in-house/index.html`, replace only the final paragraph inside `.post-content` with:

```html
<p>Before buying or building, map the process and test whether a supported tool connection is enough. Review the <a href="/solutions/lead-recovery-automation/">Lead Recovery system</a>, compare the <a href="/#pricing">bounded package scopes</a>, or bring the current workflow to a <a href="https://cal.com/efficientautomate?utm_source=efficientautomate&amp;utm_medium=website&amp;utm_campaign=home-service-automation&amp;utm_content=article-consulting-inline">free automation audit</a>. We will say when a standard tool or manual process is the better answer.</p>
```

Do not change this article's headline, structured-data dates, or PageCraftory qualification in this task.

- [ ] **Step 10: Reframe the blog index and synchronize its five cards**

In `blog/index.html`, set every title/social-title occurrence to `Home Service Automation Field Notes | Efficient Technologies` and every description/social-description occurrence to `Practical field notes on lead recovery, booking, CRM workflows, review requests, and small-business automation for home-service operators.`

Set the visible header to:

```html
<p class="eyebrow"><span class="live-dot"></span> field notes &nbsp;//&nbsp; home-service automation</p>
<h1 class="blog-h1">Practical notes on <em class="serif">small automation systems</em></h1>
<p class="blog-lead">How to map lead, booking, follow-up, review, and tool-handoff workflows without inventing ROI or removing human judgment.</p>
```

Keep the five article routes, images, dates, and order. Use these exact visible card titles and excerpts:

| Route | Card title | Card excerpt |
|---|---|---|
| `/blog/crm-automation-local-business/` | `CRM Automation for Local Businesses: The 2026 Playbook` | `A framework for connecting lead intake, ownership, status, follow-up, booking, and review-request handoffs without assuming a result.` |
| `/blog/business-process-automation-small-business/` | `Business Process Automation for Small Business: Where to Start (and What to Skip)` | `Map the workflow, identify a bounded candidate, preserve human decisions, and define acceptance checks before building.` |
| `/blog/booking-automation-after-hours/` | `After-Hours Booking Automation for Local Businesses` | `Design missed-call acknowledgement, real-availability checks, reminders, and human scheduling handoffs around measured demand.` |
| `/blog/review-automation-local-seo/` | `Review Automation for Local SEO: A Policy-Safe Workflow` | `Send consistent review opportunities without sentiment filtering, review gating, fabricated content, or positive-review incentives.` |
| `/blog/software-consulting-vs-in-house/` | Existing title stays | Existing excerpt stays |

- [ ] **Step 11: Validate the cluster and all JSON-LD blocks**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs cluster
rg -n -i "cheapest|pays for itself|usually gets|routinely pays|route by sentiment|happy customers|five-star rating sitting|multiply conversion|most sales happen" about blog
git diff --check
```

Expected: `STATIC_CHECK_CLUSTER_PASS`; `rg` returns no unsupported claim except a clearly negated explanatory mention if intentionally retained; every JSON-LD block parses; material dates match Step 4.

- [ ] **Step 12: Browser-smoke the trust and editorial routes**

Open `/about/`, `/blog/`, and all five articles at desktop and mobile widths. Expected: one H1 per route, no horizontal overflow, all internal links return 200, each header and final article CTA is exactly `Book a Free Automation Audit`, and all CTA URLs contain the expected campaign plus route-specific `utm_content`. The About page must render `mailing address`; the Review article must visibly prohibit review gating.

- [ ] **Step 13: Commit the aligned content cluster**

Run:

```powershell
git add about/index.html blog/index.html blog/crm-automation-local-business/index.html blog/business-process-automation-small-business/index.html blog/booking-automation-after-hours/index.html blog/review-automation-local-seo/index.html blog/software-consulting-vs-in-house/index.html
git diff --cached --check
git commit -m "content: align home-service automation cluster"
```

Expected: one content commit containing exactly the About page, blog index, and five existing articles.

### Task 7: Publish the technical discovery and crawler contract

**Files:**
- Modify: `sitemap.xml`
- Modify: `robots.txt`
- Modify: `_headers`
- Test: `.validation/home-service-release-v1/static-check.mjs technical`

**Interfaces:**
- Produces: exactly 14 sitemap canonicals; explicit search, assistant, grounding, and strategic model access; explicit lower-priority crawler blocks; the approved content-use signal; and revalidation-friendly caching for shared unversioned files.
- Does not produce: ranking guarantees, `llms.txt`, city/state URLs, managed Cloudflare crawler settings, or any change to immutable video/font/poster cache rules.

- [ ] **Step 1: Prove technical discovery is incomplete**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs technical
```

Expected: `STATIC_CHECK_TECHNICAL_FAIL` listing six sitemap omissions, crawler-policy omissions, and the missing content signal; all content phases still pass.

- [ ] **Step 2: Replace the sitemap with the exact 14-route inventory**

Replace `sitemap.xml` with:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://efficientautomate.com/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/about/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/solutions/lead-recovery-automation/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/solutions/booking-automation/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/solutions/review-automation/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/industries/hvac-automation/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/industries/plumbing-automation/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/industries/electrical-automation/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/blog/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/blog/crm-automation-local-business/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/blog/business-process-automation-small-business/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/blog/booking-automation-after-hours/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/blog/review-automation-local-seo/</loc><lastmod>2026-07-21</lastmod></url>
  <url><loc>https://efficientautomate.com/blog/software-consulting-vs-in-house/</loc><lastmod>2026-07-14</lastmod></url>
</urlset>
```

- [ ] **Step 3: Replace the repository crawler policy**

Replace `robots.txt` exactly. The first 13 agents are discovery/grounding/user-request agents and receive the explicit content signal. The next four strategic model agents are allowed, while `ai-train` remains unspecified. The final five lower-priority agents remain blocked.

```text
User-agent: OAI-SearchBot
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: ChatGPT-User
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: Claude-SearchBot
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: Claude-User
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: Googlebot
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: bingbot
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: PerplexityBot
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: Perplexity-User
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: Applebot
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: DuckAssistBot
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: Amzn-SearchBot
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: Amzn-User
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: Meta-ExternalFetcher
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Amazonbot
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: CloudflareBrowserRenderingCrawler
Disallow: /

User-agent: meta-externalagent
Disallow: /

User-agent: *
Content-Signal: search=yes, ai-input=yes, use=reference
Allow: /

Sitemap: https://efficientautomate.com/sitemap.xml
```

- [ ] **Step 4: Add short caching for shared unversioned presentation files**

Append these rules to `_headers`; do not edit or reorder the existing immutable video, font, poster, or Open Graph image rules:

```text

/css/*
  Cache-Control: public, max-age=86400, stale-while-revalidate=604800

/js/*
  Cache-Control: public, max-age=86400, stale-while-revalidate=604800

/assets/tokens.css
  Cache-Control: public, max-age=86400, stale-while-revalidate=604800

/assets/art/*
  Cache-Control: public, max-age=604800, stale-while-revalidate=2592000

/assets/logo/*
  Cache-Control: public, max-age=604800, stale-while-revalidate=2592000
```

- [ ] **Step 5: Validate XML, structured data, policy, and cache specificity**

Run:

```powershell
[xml](Get-Content -LiteralPath 'sitemap.xml' -Raw) | Out-Null
node .validation/home-service-release-v1/static-check.mjs technical
$html = Get-ChildItem -Recurse -Filter index.html
foreach ($item in $html) {
  $text = Get-Content -LiteralPath $item.FullName -Raw
  foreach ($match in [regex]::Matches($text, '<script type="application/ld\+json">([\s\S]*?)</script>')) {
    $match.Groups[1].Value | ConvertFrom-Json | Out-Null
  }
}
rg -n "ai-train|FAQPage|LocalBusiness|ProfessionalService" robots.txt index.html about blog solutions industries
git diff --check
```

Expected: XML and every JSON-LD block parse; `STATIC_CHECK_TECHNICAL_PASS`; `rg` returns no `ai-train` or forbidden schema type (visible explanatory prose about local businesses is allowed); all original versioned asset rules remain intact.

- [ ] **Step 6: Commit the technical discovery layer**

Run:

```powershell
git add sitemap.xml robots.txt _headers
git diff --cached --check
git commit -m "seo: publish discovery and crawler policy"
```

Expected: one commit containing exactly `sitemap.xml`, `robots.txt`, and `_headers`. Repository policy is now correct, but managed Cloudflare crawler settings are not yet claimed correct; that is a deployment task.

### Task 8: Reduce noncritical delivery while preserving the rendered and motion experience

**Files:**
- Modify: `index.html`
- Modify: all 13 secondary `index.html` files only where a footer logo lacks native lazy loading
- Test: `.validation/home-service-release-v1/static-check.mjs all`
- Evidence: `.validation/home-service-release-v1/candidate/performance.json`

**Interfaces:**
- Preserves: the entire visible design, all content from Tasks 2-7, seven video elements and assets, poster behavior, request timing for video/runtime code, motion JavaScript, motion CSS declarations, eager header logo, and protected inline scripts.
- Improves: homepage HTML/CSS source bytes, repeat-view caching of shared static files, and below-the-fold image decoding. It adds no analytics library; booking attribution uses the UTM links already added, Cloudflare supplies page-level traffic, and Cal.com supplies completed-booking records.

- [ ] **Step 1: Run the final static contract before the performance edit**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs all
```

Expected: either `STATIC_CHECK_ALL_FAIL` only because candidate `index.html` is not yet smaller than the 63,436-byte baseline, or PASS if copy consolidation has already reduced it. In either case, continue with the approved cold-byte reduction and do not weaken any acceptance assertion.

- [ ] **Step 2: Remove homepage-only dead blog CSS**

In `index.html`, delete the complete inline CSS region beginning with:

```css
/* ---- blog ---- */
```

and ending immediately before:

```css
/* ---- recent work ---- */
```

Keep the `/* ---- recent work ---- */` comment and every following rule. Do not delete the equivalent blog rules from `css/styles.css`; secondary pages still use them.

- [ ] **Step 3: Lazy-load only below-the-fold footer logos**

Across `index.html`, `about/index.html`, `blog/index.html`, the five article files, the three solution files, and the three industry files, ensure every `.footer-brand` logo is exactly one of these forms:

```html
<img src="assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64" loading="lazy" decoding="async">
```

for the homepage, or:

```html
<img src="/assets/logo/lockup-reversed.svg" alt="Efficient Technologies" width="344" height="64" loading="lazy" decoding="async">
```

for secondary pages. Do not add lazy loading to `.nav-logo` or any above-the-fold article hero.

- [ ] **Step 4: Measure source and compressed byte movement**

Run:

```powershell
$env:ET_PLAN_ROOT = (Get-Location).Path
node -e "const fs=require('fs'),z=require('zlib'),p=require('path').join(process.env.ET_PLAN_ROOT,'index.html'),b=fs.readFileSync(p); console.log(JSON.stringify({sourceBytes:b.length,gzipBytes:z.gzipSync(b).length}))"
node .validation/home-service-release-v1/static-check.mjs all
```

Expected: `sourceBytes` is lower than 63,436 and `STATIC_CHECK_ALL_PASS`. Record source and gzip bytes in `.validation/home-service-release-v1/candidate/performance.json` beside the baseline values.

- [ ] **Step 5: Use only a rendering-neutral fallback if the byte gate still fails**

If and only if `index.html` is still at or above 63,436 bytes, remove CSS comments from inside `<style data-homepage-styles>` using a bounded mechanical rewrite. Do not collapse declarations, rewrite selectors, reorder rules, change whitespace in protected scripts, or touch content. First copy `index.html` to `.validation/home-service-release-v1/candidate/index-before-css-comment-strip.html`, then run:

```powershell
$env:ET_PLAN_ROOT = (Get-Location).Path
node -e "const fs=require('fs'),p=require('path').join(process.env.ET_PLAN_ROOT,'index.html');let s=fs.readFileSync(p,'utf8');const re=/(<style data-homepage-styles[^>]*>)([\s\S]*?)(<\/style>)/;if(!re.test(s))throw Error('homepage style block missing');s=s.replace(re,(_,a,css,b)=>a+css.replace(/\/\*[\s\S]*?\*\//g,'')+b);fs.writeFileSync(p,s);"
```

Then immediately run the integrity validator and visually compare the homepage. If any protected hash, computed style, layout, animation, or screenshot changes, restore only this bounded edit with `apply_patch` and stop; do not pursue a visual or motion optimization to satisfy the byte gate.

- [ ] **Step 6: Capture the candidate performance sample under the baseline protocol**

Start the same owned local server used for Task 1. Invoke the `playwright` skill before automation. Use the same Chrome binary, fresh cold contexts, `1440x900` and `390x844`, three runs per viewport, the same observer injection, load-plus-three-second observation window, and 45-second deadline. Save raw runs and medians to `.validation/home-service-release-v1/candidate/performance.json` with:

```json
{
  "protocol": "Task 1 baseline protocol",
  "desktop": { "runs": [], "median": { "lcp": 0, "cls": 0, "tbt": 0, "domInteractive": 0, "requests": 0, "transferBytes": 0 } },
  "mobile": { "runs": [], "median": { "lcp": 0, "cls": 0, "tbt": 0, "domInteractive": 0, "requests": 0, "transferBytes": 0 } },
  "sourceBytes": 0,
  "gzipBytes": 0,
  "consoleErrors": [],
  "failedRequests": []
}
```

The zeroes and empty arrays above describe the evidence schema only; populate every field from the actual run before evaluation.

- [ ] **Step 7: Apply the performance acceptance gate**

For each viewport, compare candidate medians to baseline medians using `(candidate - baseline) / baseline`. The candidate passes only when all conditions hold:

- no LCP, TBT, or `domInteractive` median regresses by more than 10%; treat a zero baseline carefully and require the candidate to remain zero instead of dividing by zero;
- CLS is no worse than baseline by more than 10% and is at most `0.10`;
- request count does not increase;
- source HTML bytes are lower than 63,436;
- there are no console errors or failed first-party requests;
- at least one of LCP, TBT, `domInteractive`, request count, transfer bytes, source bytes, or gzip bytes improves by more than 10%, **or** first-party critical source/transfer bytes are measurably lower with no metric regression beyond the limits above.

If noise produces a failure, rerun the complete three-run baseline and candidate sets once under identical conditions. Do not cherry-pick runs. If the repeated result still fails, keep the byte/caching edits only when they meet the functional and no-regression gates; otherwise revert the specific performance edit with `apply_patch` and report it as rejected rather than changing the video, poster, motion, loader, cursor, or visible UI.

- [ ] **Step 8: Re-run the full function and motion contract**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs all
git diff --check
```

Then repeat the Task 5 forward/backward chapter scroll, reduced-motion, loader, cursor, object-position, internal-link, and mobile/desktop overflow checks. Expected: `STATIC_CHECK_ALL_PASS`; exact original video/source sequence; no change to scene order, zoom, reversals, or timing rules; all 14 routes return 200; all CTA links work.

- [ ] **Step 9: Commit only the accepted performance changes**

Run:

```powershell
git add index.html about/index.html blog solutions industries
git diff --cached --check
git commit -m "perf: reduce noncritical homepage delivery"
```

Expected: one commit whose diff contains only dead homepage blog CSS removal, optional homepage CSS-comment removal if required by Step 5, and footer-logo `loading`/`decoding` attributes. No validation evidence is tracked.

### Task 9: Qualify the committed candidate and freeze final local evidence

**Files:**
- Product: no planned changes
- Read locally: all tracked release files
- Create locally, ignored: `.validation/home-service-release-v1/final/`
- Test: `.validation/home-service-release-v1/static-check.mjs all`

**Interfaces:**
- Consumes: a clean committed candidate after Task 8.
- Produces: one immutable local evidence directory tied to an exact Git commit. It does not publish, mutate provider settings, or repair evidence.

- [ ] **Step 1: Reauthenticate the release candidate identity**

Run:

```powershell
$release = git rev-parse HEAD
$branch = git branch --show-current
$remote = git remote get-url origin
$status = git status --porcelain
if ($branch -ne 'agent/performance-without-motion-loss' -and $branch -notlike '*home-service*') { throw "Unexpected branch: $branch" }
if ($remote -ne 'https://github.com/tarik-ux/efficient-technologies-site.git') { throw "Unexpected remote: $remote" }
if ($status) { throw "Candidate is not clean:`n$status" }
if (Test-Path -LiteralPath '.git\index.lock') { throw 'BLOCKED: .git/index.lock exists' }
git merge-base --is-ancestor 293ea3d138a704b275a13ce6fb9e8bf2f1371b49 HEAD
Write-Output "RELEASE_CANDIDATE=$release"
```

Expected: clean candidate, authorized remote, no index lock, and ancestry check exit `0`. If Git reports a stale `.git/index.lock` after no Git process remains, remove only that exact lock file and repeat the command; do not reset or discard product changes.

- [ ] **Step 2: Run the complete static and repository gate on the commit**

Run:

```powershell
node .validation/home-service-release-v1/static-check.mjs all
git diff --check 293ea3d138a704b275a13ce6fb9e8bf2f1371b49..HEAD
git fsck --no-progress
git status --short --branch
```

Expected: `STATIC_CHECK_ALL_PASS`, no whitespace errors, no Git object error, clean status.

- [ ] **Step 3: Run a bounded 14-route HTTP and browser qualification**

Start the owned local server on `127.0.0.1:4173`. Invoke the `playwright` skill before browser automation. Visit exactly:

```text
/
/about/
/solutions/lead-recovery-automation/
/solutions/booking-automation/
/solutions/review-automation/
/industries/hvac-automation/
/industries/plumbing-automation/
/industries/electrical-automation/
/blog/
/blog/crm-automation-local-business/
/blog/business-process-automation-small-business/
/blog/booking-automation-after-hours/
/blog/review-automation-local-seo/
/blog/software-consulting-vs-in-house/
```

For each route and each viewport (`1440x900`, `390x844`), enforce a 45-second deadline and record status, final URL, title, description, canonical, robots directive, H1 count/text, JSON-LD parse result, primary CTA count/URLs, internal-link failures, console errors, request failures, and horizontal overflow. Save the raw matrix as `.validation/home-service-release-v1/candidate/routes.json`.

Expected: 28 successful cases; one H1; one self-canonical; indexable robots directive; valid JSON-LD; no broken internal links, console errors, request failures, or overflow. A deliberate request to `/release-check-not-found/` must return the hosting platform's 404 status or documented static 404 behavior and must not return a misleading canonical commercial page.

- [ ] **Step 4: Re-run full homepage motion and fallback qualification**

Under both viewports:

1. capture the initial loader and hero;
2. wait for loader dismissal under the existing deadline;
3. record all seven video IDs, source attributes, ready states, and error properties;
4. scroll forward through `#hero`, `#core`, `#gaps`, `#how`, and `#book` and record active video/opacity/transform state at each anchor;
5. scroll backward through the same anchors and record reverse states;
6. verify the same chapter source order and zoom/reversal behavior as baseline;
7. repeat in a fresh context with `prefers-reduced-motion: reduce`;
8. block the Cal.com request and verify the attributed fallback link plus email remain actionable;
9. block one homepage runtime CDN request and verify the existing fallback leaves core content, links, and booking usable; and
10. save screenshots, observations, console output, and request failures under `.validation/home-service-release-v1/candidate/motion/`.

Expected: no visible/video/motion regression relative to Task 1; fallback tests may record the deliberately blocked request but no unhandled page error or unusable CTA.

- [ ] **Step 5: Run the final claim and policy audit**

Run:

```powershell
rg -n -i "lorem|ipsum|placeholder|coming soon|TBD|TODO|FIXME|XXX|most popular|works in 30 days|auto-ask happy|negative review caught|route by sentiment|pays for itself|guaranteed rankings|guaranteed revenue" --glob '*.html' --glob '*.js' .
rg -n 'Book a Free Automation Audit' index.html about blog solutions industries
rg -n 'LocalBusiness|ProfessionalService|FAQPage|ai-train=|llms.txt' index.html about blog solutions industries robots.txt sitemap.xml
git ls-files .validation
```

Expected: no placeholder, unsupported claim, prohibited review-gating phrase, forbidden schema, `ai-train`, or `llms.txt`; CTA appears on every commercial route and the aligned secondary routes; `git ls-files .validation` returns nothing. A negated explanatory phrase is acceptable only when the surrounding sentence clearly prohibits the practice and the static validator permits it.

- [ ] **Step 6: Fix product defects before evidence freeze, never inside frozen evidence**

If Steps 2-5 find a product defect, do not create `final/`. Write a failing validator or browser assertion first, make the smallest scoped product fix with `apply_patch`, rerun the affected phase plus `all`, commit the fix as `fix: close home-service release gate`, and restart Task 9 from Step 1 with the new commit. Do not edit a screenshot, result JSON, expected value, or frozen hash to hide a product failure.

- [ ] **Step 7: Freeze the accepted local evidence only after all gates pass**

First verify the destination resolves under the ignored validation root and is absent:

```powershell
$root = [IO.Path]::GetFullPath((Join-Path (Get-Location) '.validation\home-service-release-v1'))
$final = [IO.Path]::GetFullPath((Join-Path $root 'final'))
if (-not $final.StartsWith($root + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw 'Unsafe final evidence path' }
if (Test-Path -LiteralPath $final) { throw 'Final evidence already exists; do not overwrite or repair it' }
New-Item -ItemType Directory -Path $final | Out-Null
Copy-Item -LiteralPath (Join-Path $root 'baseline') -Destination (Join-Path $final 'baseline') -Recurse
Copy-Item -LiteralPath (Join-Path $root 'candidate') -Destination (Join-Path $final 'candidate') -Recurse
Copy-Item -LiteralPath (Join-Path $root 'baseline.json') -Destination (Join-Path $final 'baseline.json')
Copy-Item -LiteralPath (Join-Path $root 'static-check.mjs') -Destination (Join-Path $final 'static-check.mjs')
```

Create `.validation/home-service-release-v1/final/manifest.json` from actual values:

```powershell
$manifest = [ordered]@{
  releaseCommit = (git rev-parse HEAD)
  branch = (git branch --show-current)
  remote = (git remote get-url origin)
  validatedAtUtc = (Get-Date).ToUniversalTime().ToString('o')
  staticGate = 'STATIC_CHECK_ALL_PASS'
  routeCases = 28
  localBrowserGate = 'PASS'
  motionGate = 'PASS'
  performanceGate = 'PASS'
  liveGate = 'PENDING_DEPLOYMENT'
}
$manifest | ConvertTo-Json -Depth 4 | Set-Content -LiteralPath (Join-Path $final 'manifest.json') -Encoding utf8
Get-ChildItem -LiteralPath $final -Recurse -File | ForEach-Object { $_.IsReadOnly = $true }
$writable = Get-ChildItem -LiteralPath $final -Recurse -File | Where-Object { -not $_.IsReadOnly }
if ($writable) { throw 'Evidence freeze failed' }
```

Expected: every file under `final/` is read-only and `manifest.json` names the exact clean candidate. Do not put live PASS data in this directory after freeze; live evidence belongs in a new `live-<commit>/` sibling in Task 10.

- [ ] **Step 8: Verify the evidence did not contaminate the product commit**

Run:

```powershell
git status --short --branch
git check-ignore -v .validation/home-service-release-v1/final/manifest.json
git ls-files .validation
```

Expected: clean branch, final evidence ignored by `.gitignore`, and no tracked validation path.

### Task 10: Publish the exact candidate, reconcile Cloudflare crawler controls, and verify live

**Files:**
- Product: no planned local changes
- Create locally, ignored: `.validation/home-service-release-v1/live-<release-commit>/`
- External systems: GitHub repository `tarik-ux/efficient-technologies-site`, its bound Cloudflare Pages project, Cloudflare zone for `efficientautomate.com`, Google Search Console, and Bing Webmaster Tools

**Interfaces:**
- Consumes: the clean commit and frozen local evidence from Task 9.
- Produces: the same commit on the feature branch and `main`, a Cloudflare production deployment tied to that commit, a non-contradictory live crawler policy, live route/motion/performance evidence, and sitemap submission where existing owner authentication is available.

- [ ] **Step 1: Recheck remote ancestry immediately before push**

Run:

```powershell
$release = git rev-parse HEAD
gh auth status --hostname github.com
$githubLogin = gh api user --jq .login
if ($githubLogin -ne 'tarik-ux') {
  gh auth switch --hostname github.com --user tarik-ux
  $githubLogin = gh api user --jq .login
}
if ($githubLogin -ne 'tarik-ux') { throw "GitHub login is $githubLogin, not tarik-ux" }
$permission = gh repo view tarik-ux/efficient-technologies-site --json viewerPermission --jq .viewerPermission
if ($permission -notin @('ADMIN','MAINTAIN','WRITE')) { throw "Insufficient repository permission: $permission" }
git fetch origin --prune
$remoteMain = git rev-parse origin/main
git merge-base --is-ancestor origin/main HEAD
if ($LASTEXITCODE -ne 0) { throw 'origin/main advanced outside the accepted candidate; integrate it and restart Task 9' }
if (git status --porcelain) { throw 'Release worktree is dirty' }
Write-Output "RELEASE=$release"
Write-Output "PRE_RELEASE_MAIN=$remoteMain"
```

Expected: the active GitHub identity is `tarik-ux` with write authority, `origin/main` is an ancestor of the exact frozen candidate, and the worktree is clean. Record both hashes in the new live evidence directory. If the stored `tarik-ux` login is unavailable, continue all non-GitHub checks and report the exact interactive-authentication block. If ancestry fails, do not force-push; integrate upstream safely, rerun all candidate gates, create a new evidence freeze, and use the new commit.

- [ ] **Step 2: Push the release branch and production branch without force**

Run:

```powershell
git push origin HEAD:agent/performance-without-motion-loss
git push origin HEAD:main
$featureRemote = (git ls-remote origin refs/heads/agent/performance-without-motion-loss).Split("`t")[0]
$mainRemote = (git ls-remote origin refs/heads/main).Split("`t")[0]
if ($featureRemote -ne $release -or $mainRemote -ne $release) { throw 'Remote refs do not match the release commit' }
```

Expected: both remote refs equal the exact frozen commit. The second push is a normal fast-forward; any rejection is a safe stop, not a reason to use force.

- [ ] **Step 3: Confirm the Git-connected Cloudflare Pages production deployment**

Use the installed Wrangler client only for read-only identity/deployment checks first:

```powershell
wrangler whoami
wrangler pages project list
wrangler pages deployment list --project-name efficient-technologies-site --environment production
```

Expected: authenticated owner context, a project bound to `efficientautomate.com`, and a production deployment sourced from `main` at `$release`. If the project slug differs, select it only by matching the custom domain and Git repository shown by Cloudflare; do not deploy to a guessed project. If Git integration does not create a production deployment, inspect the existing project build/output configuration before using any direct-upload command. Direct upload is allowed only when it can target the same project and exact product root without publishing `.git`, `.validation`, credentials, or an unintended workspace directory.

Poll the deployment and `https://efficientautomate.com/` within a ten-minute parent deadline, yielding status at least once per minute. Expected: Cloudflare reports success for `$release`, and the live homepage contains the exact new H1. A successful Git push is not yet a successful deployment claim.

- [ ] **Step 4: Record and reconcile Cloudflare's managed crawler settings**

In the authenticated Cloudflare zone for `efficientautomate.com`, capture the pre-change state, then apply the approved provider policy:

1. disable the managed blanket setting that rewrites `robots.txt` to block AI/model crawlers;
2. leave general bot protection enabled for unknown or malicious traffic;
3. in AI Crawl Control, explicitly allow `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, `Googlebot`, `bingbot`, `PerplexityBot`, `Perplexity-User`, `Applebot`, `DuckAssistBot`, `Amzn-SearchBot`, `Amzn-User`, `Meta-ExternalFetcher`, `GPTBot`, `ClaudeBot`, `Google-Extended`, and `Applebot-Extended` where Cloudflare exposes those identities;
4. explicitly block `Amazonbot`, `Bytespider`, `CCBot`, `CloudflareBrowserRenderingCrawler`, and `meta-externalagent` where exposed; and
5. verify no WAF, custom bot, or rate-limit rule challenges the approved search/user-request agents.

Do not disable the whole WAF or bot layer. `Google-Extended` is a robots control token rather than an independent request source; its success condition is the live robots rule, not a fabricated crawler request. Save dashboard/API evidence and the setting timestamp under the live evidence directory. If Cloudflare authentication is unavailable, continue every public live check and report this exact provider step as pending; do not claim the GEO crawler release complete.

- [ ] **Step 5: Verify live robots, sitemap, cache headers, and crawler reachability**

Run public checks after propagation:

```powershell
curl.exe -fsS https://efficientautomate.com/robots.txt
curl.exe -fsS https://efficientautomate.com/sitemap.xml
curl.exe -fsSI https://efficientautomate.com/css/styles.css?v=4
curl.exe -fsSI https://efficientautomate.com/js/main.js?v=4
curl.exe -fsSI https://efficientautomate.com/assets/video/city-loop-v20260714.mp4
```

For each request-capable approved agent, send a bounded HEAD or GET request with its user-agent string and record HTTP status. For each blocked agent, treat the origin `robots.txt` `Disallow: /` as the deterministic policy check; Cloudflare enforcement may additionally block it. Expected:

- live robots contains every exact allow/block group, the content signal, no `ai-train`, and the sitemap line;
- no Cloudflare-injected `Disallow` contradicts `GPTBot`, `ClaudeBot`, `Google-Extended`, or `Applebot-Extended`;
- sitemap parses and contains exactly 14 URLs;
- CSS and JavaScript advertise the one-day revalidation policy;
- versioned video keeps the one-year immutable policy; and
- approved request-capable agents are not challenged or denied by a broad provider rule.

Spoofing a user-agent does not prove ownership of a verified provider IP. Label these as public access-path checks, then use Cloudflare crawler telemetry over time as the stronger provider evidence.

- [ ] **Step 6: Run the live 14-route and conversion qualification**

Invoke the `playwright` skill and repeat Task 9 Step 3 against `https://efficientautomate.com`, with a 60-second deadline per case. In addition, verify:

- the production response is from the deployment tied to `$release`;
- all seven commercial routes are indexable and self-canonical;
- all 14 sitemap routes return 200;
- every primary CTA label is exact;
- Cal.com links retain `utm_source=efficientautomate`, `utm_medium=website`, `utm_campaign=home-service-automation`, and the expected `utm_content`;
- the fallback email remains available;
- no `LocalBusiness`, `ProfessionalService`, or `FAQPage` schema appears; and
- no city/state route, false local office, fabricated proof, or review-gating copy was introduced by deployment transformation.

Save the route matrix, response headers, screenshots, JSON-LD parse results, and link results under `.validation/home-service-release-v1/live-$release/`.

- [ ] **Step 7: Requalify live video, motion, and performance**

Repeat Task 9 Step 4 on production at desktop and mobile widths. Compare the live scene order, forward/backward transitions, zoom, loader, cursor, reduced-motion behavior, object positioning, and video errors against the frozen local evidence. Then run the same three-sample performance protocol used for baseline/candidate.

Expected: motion contract unchanged; no first-party failed request or console error; live performance stays within the Task 8 no-regression limits. Network variability prevents claiming an optimization from one production sample; the release passes when behavior is intact and the bounded median comparison satisfies the accepted gate.

- [ ] **Step 8: Submit the one canonical sitemap to owner-controlled search tools**

When the existing authenticated properties are available:

1. in Google Search Console for `https://efficientautomate.com/`, submit or refresh `https://efficientautomate.com/sitemap.xml` once and record the returned status;
2. inspect, but do not repeatedly request indexing for, the homepage plus the six new commercial URLs;
3. in Bing Webmaster Tools for the same site, submit or refresh the same sitemap once; and
4. record discovered/indexed state as observation, not a release failure and not a ranking promise.

If either property or login is unavailable, record the exact provider and missing authority. Do not create a different account, transfer ownership, add a paid service, or fabricate submission evidence.

- [ ] **Step 9: Seal live evidence and report exact boundaries**

Create `summary.json` in `.validation/home-service-release-v1/live-$release/` from actual results, including release commit, deployment ID/URL, deployment time, provider-setting result, 14-route result, motion result, performance result, robots result, Search Console result, and Bing result. Mark each field `PASS`, `FAIL`, or `BLOCKED` with the exact reason; never collapse a provider block into PASS.

After all reachable live work is complete, verify the live evidence path resolves under `.validation/home-service-release-v1`, then make its files read-only just as in Task 9. Finish with:

```powershell
git status --short --branch
git ls-remote origin refs/heads/main refs/heads/agent/performance-without-motion-loss
```

Expected: clean local worktree and both refs at `$release`. The handoff must distinguish: repository published, Cloudflare deployed, crawler settings reconciled, live behavior verified, and search-engine submissions. Rankings, citations, traffic, leads, and AI recommendations remain future outcomes to measure, not completed deliverables.

- [ ] **Step 10: Use a non-destructive rollback only for a release-critical live defect**

Release-critical defects are broken booking/fallback, missing commercial routes, non-indexable canonicals, corrupted schema, a video/motion regression, an unintended crawler-wide block, or a material security failure. For one of those defects:

1. record the failing live evidence before rollback;
2. restore the previous Cloudflare crawler setting only if that provider change caused the defect;
3. create a new rollback branch from `$release`;
4. revert the published range `$remoteMain..$release` into a new commit, never force-reset `main`;
5. run the complete static and browser gate on the rollback candidate;
6. push the rollback commit normally to `main`; and
7. verify Cloudflare redeployed the rollback commit.

The Git commands are:

```powershell
git switch -c rollback/home-service-release-$($release.Substring(0,8)) $release
git revert --no-commit "$remoteMain..$release"
git commit -m "revert: roll back home-service acquisition release"
node .validation/home-service-release-v1/static-check.mjs integrity
git push origin HEAD:main
```

If the revert conflicts or the baseline cannot pass its own applicable gate, stop and diagnose; do not force-push or discard files. A minor copy preference, search-engine delay, absent citation, or noisy single performance run is not a rollback trigger.
