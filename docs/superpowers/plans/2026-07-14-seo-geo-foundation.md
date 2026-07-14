# Efficient Technologies SEO/GEO Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a validated technical SEO and grounded-AI-search foundation for Efficient Technologies without speculative GEO files or unverified business claims.

**Architecture:** Edit the authoritative local deploy source at `C:\Users\tarik\Claude Projects\efficient-technologies\site`, validate it with a dependency-free Node test stored in the isolated Git checkout, and mechanically synchronize only deployable files into the versioned publish branch. Keep crawler policy, visible content, metadata, structured data, and sitemap signals consistent, then merge through a reviewed branch and verify the actual Cloudflare production response.

**Tech Stack:** Static HTML5, existing CSS tokens, JSON-LD, Cloudflare Pages routing files, Node.js 22 built-in test runner, Git, GitHub CLI.

## Global Constraints

- `site/` is the authoritative deploy source; edit it directly before synchronizing to the publish checkout.
- Use only existing brand values and assets; do not introduce a new visual system.
- Add no package manager, runtime dependency, CMS, build step, `llms.txt`, `ai.txt`, hidden AI copy, thin location pages, or unsupported schema.
- Preserve existing article copy and do not invent testimonials, customers, metrics, qualifications, case studies, or social profiles.
- Preserve Cloudflare's live GPTBot training block while explicitly allowing OAI-SearchBot in the checked-in robots file.
- Do not change the Cal.com booking flow, mobile navigation, or video loading in this release.
- Publish only after local tests, clone tests, visual checks, diff review, PR checks, merge, and production readback pass.

---

### Task 1: Add the dependency-free validation contract and prove RED

**Files:**
- Create: `.github/scripts/seo-geo.test.mjs`

**Interfaces:**
- Consumes: `SITE_ROOT`, an absolute or relative path to the deploy root.
- Produces: Node test suites named `routing`, `metadata`, `entity graph`, `blog index`, `articles`, `crawler policy`, and `sitemap`.

- [ ] **Step 1: Create the validator before changing production files**

```js
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(process.env.SITE_ROOT ?? '.');
const releaseDate = '2026-07-14';
const base = 'https://efficientautomate.com';

const pages = [
  { file: 'index.html', canonical: `${base}/` },
  { file: 'about/index.html', canonical: `${base}/about/` },
  { file: 'blog/index.html', canonical: `${base}/blog/` },
  { file: 'blog/crm-automation-local-business/index.html', canonical: `${base}/blog/crm-automation-local-business/` },
  { file: 'blog/business-process-automation-small-business/index.html', canonical: `${base}/blog/business-process-automation-small-business/` },
  { file: 'blog/booking-automation-after-hours/index.html', canonical: `${base}/blog/booking-automation-after-hours/` },
  { file: 'blog/review-automation-local-seo/index.html', canonical: `${base}/blog/review-automation-local-seo/` },
  { file: 'blog/software-consulting-vs-in-house/index.html', canonical: `${base}/blog/software-consulting-vs-in-house/` },
];

const articles = [
  { file: 'blog/crm-automation-local-business/index.html', published: '2026-07-08', image: '/assets/art/tower.webp' },
  { file: 'blog/business-process-automation-small-business/index.html', published: '2026-07-04', image: '/assets/art/street.webp' },
  { file: 'blog/booking-automation-after-hours/index.html', published: '2026-06-30', image: '/assets/art/dawn.webp' },
  { file: 'blog/review-automation-local-seo/index.html', published: '2026-06-25', image: '/assets/og.png' },
  { file: 'blog/software-consulting-vs-in-house/index.html', published: '2026-06-20', image: '/assets/art/tower.webp' },
];

const full = (relative) => path.join(root, relative);
const exists = (relative) => fs.existsSync(full(relative));
const read = (relative) => fs.readFileSync(full(relative), 'utf8');
const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function attr(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}=(['\"])(.*?)\\1`, 'i'));
  return match?.[2] ?? null;
}

function oneTag(html, tagPattern, attribute, value, label) {
  const tags = html.match(tagPattern) ?? [];
  const matches = tags.filter((tag) => new RegExp(`\\b${attribute}=(['\"])${escapeRegex(value)}\\1`, 'i').test(tag));
  assert.equal(matches.length, 1, `${label} must occur exactly once`);
  return matches[0];
}

function meta(html, attribute, value, label) {
  return attr(oneTag(html, /<meta\b[^>]*>/gi, attribute, value, label), 'content');
}

function link(html, rel, label) {
  return attr(oneTag(html, /<link\b[^>]*>/gi, 'rel', rel, label), 'href');
}

function jsonLdNodes(html, file) {
  const blocks = [...html.matchAll(/<script\s+type=(['\"])application\/ld\+json\1[^>]*>([\s\S]*?)<\/script>/gi)];
  assert.ok(blocks.length > 0, `${file} must contain JSON-LD`);
  return blocks.flatMap((match) => {
    const value = JSON.parse(match[2]);
    return Array.isArray(value['@graph']) ? value['@graph'] : [value];
  });
}

function hasType(node, type) {
  return Array.isArray(node['@type']) ? node['@type'].includes(type) : node['@type'] === type;
}

test('routing removes preview content and defines a real 404', () => {
  assert.equal(exists('blog-preview.html'), false, 'blog-preview.html must be removed');
  assert.equal(exists('404.html'), true, '404.html must exist');
  assert.match(read('404.html'), /<meta\s+name="robots"\s+content="noindex,\s*follow">/i);
  const redirects = read('_redirects');
  assert.match(redirects, /^\/blog-preview\s+\/blog\/\s+301$/m);
  assert.match(redirects, /^\/blog-preview\.html\s+\/blog\/\s+301$/m);
});

test('metadata is complete and canonical on every indexable page', () => {
  for (const page of pages) {
    assert.equal(exists(page.file), true, `${page.file} must exist`);
    const html = read(page.file);
    assert.equal((html.match(/<title>[\s\S]*?<\/title>/gi) ?? []).length, 1, `${page.file} title`);
    assert.ok(meta(html, 'name', 'description', `${page.file} description`));
    assert.match(meta(html, 'name', 'robots', `${page.file} robots`), /max-image-preview:large/i);
    assert.equal(link(html, 'canonical', `${page.file} canonical`), page.canonical);
    assert.equal(meta(html, 'property', 'og:url', `${page.file} og:url`), page.canonical);
    assert.equal(meta(html, 'property', 'og:image', `${page.file} og:image`), `${base}/assets/og.png`);
    assert.ok(meta(html, 'property', 'og:image:alt', `${page.file} og:image:alt`));
    assert.equal(meta(html, 'name', 'twitter:image', `${page.file} twitter:image`), `${base}/assets/og.png`);
    assert.ok(meta(html, 'name', 'twitter:title', `${page.file} twitter:title`));
    assert.ok(meta(html, 'name', 'twitter:description', `${page.file} twitter:description`));
    assert.ok(meta(html, 'name', 'twitter:image:alt', `${page.file} twitter:image:alt`));
  }
  assert.doesNotMatch(read('blog/index.html'), /&amp;amp;/i);
});

test('homepage and about page expose one connected entity graph', () => {
  const homeNodes = jsonLdNodes(read('index.html'), 'index.html');
  for (const type of ['Organization', 'Person', 'Service', 'WebSite', 'WebPage']) {
    assert.ok(homeNodes.some((node) => hasType(node, type)), `homepage graph missing ${type}`);
  }
  assert.equal(homeNodes.some((node) => hasType(node, 'ProfessionalService')), false);
  const about = read('about/index.html');
  const aboutNodes = jsonLdNodes(about, 'about/index.html');
  for (const type of ['AboutPage', 'Organization', 'Person', 'WebSite']) {
    assert.ok(aboutNodes.some((node) => hasType(node, type)), `about graph missing ${type}`);
  }
  assert.match(about, /Tarik Kizildere/);
  assert.match(about, /mailing address/i);
});

test('blog index declares Blog and CollectionPage', () => {
  const nodes = jsonLdNodes(read('blog/index.html'), 'blog/index.html');
  assert.ok(nodes.some((node) => hasType(node, 'Blog')));
  assert.ok(nodes.some((node) => hasType(node, 'CollectionPage')));
});

test('articles expose matching visible trust signals and BlogPosting schema', () => {
  for (const article of articles) {
    const html = read(article.file);
    assert.match(html, /<a\s+href="\/about\/"[^>]*>Tarik Kizildere<\/a>/i, `${article.file} author link`);
    assert.match(html, new RegExp(`<time\\s+datetime="${article.published}"`), `${article.file} published time`);
    assert.match(html, new RegExp(`<time\\s+datetime="${releaseDate}"`), `${article.file} modified time`);
    assert.match(html, new RegExp(`<div\\s+class="post-hero">[\\s\\S]*?<img\\s+src="${escapeRegex(article.image)}"`, 'i'), `${article.file} hero`);
    const post = jsonLdNodes(html, article.file).find((node) => hasType(node, 'BlogPosting'));
    assert.ok(post, `${article.file} BlogPosting`);
    for (const property of ['@id', 'url', 'headline', 'description', 'datePublished', 'dateModified', 'image', 'author', 'publisher', 'isPartOf', 'mainEntityOfPage', 'inLanguage']) {
      assert.ok(post[property], `${article.file} BlogPosting.${property}`);
    }
    assert.equal(post.datePublished, article.published);
    assert.equal(post.dateModified, releaseDate);
  }
});

test('crawler policy explicitly permits search without overriding training policy', () => {
  const robots = read('robots.txt');
  assert.match(robots, /^User-agent:\s*OAI-SearchBot\s*\r?\nAllow:\s*\/$/mi);
  assert.match(robots, /^Sitemap:\s*https:\/\/efficientautomate\.com\/sitemap\.xml$/mi);
  assert.doesNotMatch(robots, /^User-agent:\s*GPTBot$/mi);
  assert.equal(exists('llms.txt'), false);
  assert.equal(exists('ai.txt'), false);
});

test('sitemap lists every canonical exactly once with release lastmod', () => {
  const sitemap = read('sitemap.xml');
  const entries = [...sitemap.matchAll(/<url>\s*<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>\s*<\/url>/g)]
    .map((match) => ({ loc: match[1], lastmod: match[2] }));
  assert.deepEqual(entries.map((entry) => entry.loc).sort(), pages.map((page) => page.canonical).sort());
  assert.equal(new Set(entries.map((entry) => entry.loc)).size, entries.length);
  assert.ok(entries.every((entry) => entry.lastmod === releaseDate));
});
```

- [ ] **Step 2: Run the complete suite against the untouched local source**

Run from the publish checkout:

```powershell
$env:SITE_ROOT='C:\Users\tarik\Claude Projects\efficient-technologies\site'
node --test .github/scripts/seo-geo.test.mjs
```

Expected: FAIL for missing `about/index.html`, `404.html`, `_redirects`, incomplete metadata, old structured data, preview content, crawler policy, and sitemap freshness. Existing canonical and description assertions may pass.

- [ ] **Step 3: Commit only the failing test contract**

```powershell
git add -- .github/scripts/seo-geo.test.mjs
git commit -m "test: define SEO and GEO contract"
```

### Task 2: Fix routing, crawler discovery, and sitemap freshness

**Files:**
- Create: `site/404.html`
- Create: `site/_redirects`
- Modify: `site/robots.txt`
- Modify: `site/sitemap.xml`
- Delete: `site/blog-preview.html`
- Synchronize to publish checkout root.

**Interfaces:**
- Consumes: Cloudflare Pages top-level 404 and `_redirects` conventions.
- Produces: one real 404 route, two permanent preview redirects, explicit OAI search access, and eight canonical sitemap entries.

- [ ] **Step 1: Run the routing and crawler tests to confirm RED**

```powershell
node --test --test-name-pattern='routing|crawler policy|sitemap' .github/scripts/seo-geo.test.mjs
```

Expected: three failing tests for the old deploy source.

- [ ] **Step 2: Add the exact redirect file**

```text
/blog-preview /blog/ 301
/blog-preview.html /blog/ 301
```

- [ ] **Step 3: Replace robots.txt with the explicit search policy**

```text
User-agent: OAI-SearchBot
Allow: /

User-agent: *
Allow: /

Sitemap: https://efficientautomate.com/sitemap.xml
```

- [ ] **Step 4: Replace sitemap.xml with the eight canonical URLs**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://efficientautomate.com/</loc><lastmod>2026-07-14</lastmod></url>
  <url><loc>https://efficientautomate.com/about/</loc><lastmod>2026-07-14</lastmod></url>
  <url><loc>https://efficientautomate.com/blog/</loc><lastmod>2026-07-14</lastmod></url>
  <url><loc>https://efficientautomate.com/blog/crm-automation-local-business/</loc><lastmod>2026-07-14</lastmod></url>
  <url><loc>https://efficientautomate.com/blog/business-process-automation-small-business/</loc><lastmod>2026-07-14</lastmod></url>
  <url><loc>https://efficientautomate.com/blog/booking-automation-after-hours/</loc><lastmod>2026-07-14</lastmod></url>
  <url><loc>https://efficientautomate.com/blog/review-automation-local-seo/</loc><lastmod>2026-07-14</lastmod></url>
  <url><loc>https://efficientautomate.com/blog/software-consulting-vs-in-house/</loc><lastmod>2026-07-14</lastmod></url>
</urlset>
```

- [ ] **Step 5: Create the branded 404 document**

Use the existing blog header/footer and styles. The head must contain:

```html
<title>Page Not Found | Efficient Technologies</title>
<meta name="description" content="The page you requested could not be found. Return to Efficient Technologies or browse the automation field notes.">
<meta name="robots" content="noindex, follow">
```

The main content must contain one `h1`, a homepage button, and a blog button:

```html
<main class="blog-main"><article class="post-single"><div class="post-narrow">
  <p class="eyebrow"><span class="live-dot"></span> 404 &nbsp;//&nbsp; route not found</p>
  <h1 class="post-title">That system path does not exist.</h1>
  <div class="post-content"><p>The page may have moved or the address may be incorrect. Start again from the main site or browse the automation field notes.</p></div>
  <div class="hero-cta"><a class="btn btn-primary" href="/">Return home</a><a class="btn btn-ghost" href="/blog/">Browse the blog</a></div>
</div></article></main>
```

- [ ] **Step 6: Remove the preview file, run the focused tests, and synchronize**

```powershell
node --test --test-name-pattern='routing|crawler policy|sitemap' .github/scripts/seo-geo.test.mjs
```

Expected: PASS for those three suites.

Copy `404.html`, `_redirects`, `robots.txt`, and `sitemap.xml` to the publish checkout root; remove only the publish checkout's `blog-preview.html` after verifying its resolved path remains inside the checkout.

- [ ] **Step 7: Commit the routing unit**

```powershell
git add -- 404.html _redirects robots.txt sitemap.xml blog-preview.html
git commit -m "fix: correct crawl and not-found behavior"
```

### Task 3: Complete homepage metadata and add the entity page

**Files:**
- Modify: `site/index.html:5-73`
- Create: `site/about/index.html`
- Synchronize: `index.html`, `about/index.html`

**Interfaces:**
- Consumes: stable entity IDs from the approved design.
- Produces: Organization, Person, Service, WebSite, WebPage, and AboutPage graphs plus a visible founder/entity page.

- [ ] **Step 1: Run entity and metadata tests to confirm RED**

```powershell
node --test --test-name-pattern='metadata|entity graph' .github/scripts/seo-geo.test.mjs
```

Expected: FAIL because the About page is absent, homepage Twitter metadata is incomplete, and `ProfessionalService` remains.

- [ ] **Step 2: Complete the homepage head**

Add `robots`, `og:image:alt`, and complete Twitter fields using the existing title, description, and `https://efficientautomate.com/assets/og.png`. Normalize canonical and `og:url` to `https://efficientautomate.com/`.

- [ ] **Step 3: Replace the homepage JSON-LD graph**

Use exactly these stable IDs:

```json
{
  "organization": "https://efficientautomate.com/#organization",
  "person": "https://efficientautomate.com/about/#tarik-kizildere",
  "service": "https://efficientautomate.com/#automation-service",
  "website": "https://efficientautomate.com/#website",
  "webpage": "https://efficientautomate.com/#webpage"
}
```

The Organization must use `legalName: "Efficient Technologies LLC"`, the Person must use `name: "Tarik Kizildere"` and `jobTitle: "Founder"`, the Service must use `serviceType: "Business process automation"`, and the existing Launch/Growth/Systems offer values must remain unchanged.

- [ ] **Step 4: Create the complete About page**

The visible content must use this factual copy:

```html
<p class="eyebrow"><span class="live-dot"></span> about &nbsp;//&nbsp; efficient technologies</p>
<h1 class="post-title">Automation systems for local businesses, built around the tools already in use.</h1>
<div class="post-content">
  <p>Efficient Technologies LLC is an automation studio for local businesses. We find the manual gaps that cost bookings, follow-ups, reviews, and staff time, then connect the systems needed to close them.</p>
  <h2>What we build</h2>
  <p>Our work covers online booking, lead follow-up, lightweight CRM, review requests, lead capture and routing, and the workflows that connect those tools. The goal is a documented system that fits the business instead of another disconnected login.</p>
  <h2>Who runs the studio</h2>
  <p><strong>Tarik Kizildere</strong> is the founder of Efficient Technologies. He audits how a business currently runs, identifies the highest-cost automation gap, and builds the smallest reliable system that closes it.</p>
  <h2>Where we work</h2>
  <p>Efficient Technologies serves businesses across the United States. The studio's mailing address is 30 N Gould St #65748, Sheridan, WY 82801, USA.</p>
  <h2>Contact</h2>
  <p>Email <a href="mailto:tarik@efficientautomate.com">tarik@efficientautomate.com</a> or book a 20-minute automation audit.</p>
</div>
```

The About head must have complete metadata and an AboutPage JSON-LD graph containing the same Organization, Person, and WebSite IDs.

- [ ] **Step 5: Add an About link to the homepage footer and run focused tests**

```html
<p><a href="/about/">About Efficient Technologies</a></p>
```

Run:

```powershell
node --test --test-name-pattern='metadata|entity graph' .github/scripts/seo-geo.test.mjs
```

Expected: PASS for both suites.

- [ ] **Step 6: Synchronize and commit the entity unit**

```powershell
git add -- index.html about/index.html
git commit -m "feat: add verified business and author entity"
```

### Task 4: Upgrade the blog index and five article documents

**Files:**
- Modify: `site/blog/index.html`
- Modify: `site/blog/crm-automation-local-business/index.html`
- Modify: `site/blog/business-process-automation-small-business/index.html`
- Modify: `site/blog/booking-automation-after-hours/index.html`
- Modify: `site/blog/review-automation-local-seo/index.html`
- Modify: `site/blog/software-consulting-vs-in-house/index.html`

**Interfaces:**
- Consumes: stable Person, Organization, WebSite, and Blog IDs.
- Produces: complete Blog/CollectionPage and BlogPosting markup aligned with visible authors, dates, and images.

- [ ] **Step 1: Run blog tests to confirm RED**

```powershell
node --test --test-name-pattern='metadata|blog index|articles' .github/scripts/seo-geo.test.mjs
```

Expected: FAIL for the double-escaped title, missing social images, absent Blog graph, absent author/update/hero elements, and minimal Article schema.

- [ ] **Step 2: Complete the blog index head and graph**

The final title source must be:

```html
<title>Blog — CRM Automation, Business Process &amp; Systems | Efficient Technologies</title>
```

Add the same robots/social fields used on the homepage. Add a JSON-LD graph with:

```json
[
  {"@type":"Blog","@id":"https://efficientautomate.com/blog/#blog","url":"https://efficientautomate.com/blog/","name":"Efficient Technologies Field Notes","inLanguage":"en-US","publisher":{"@id":"https://efficientautomate.com/#organization"},"isPartOf":{"@id":"https://efficientautomate.com/#website"}},
  {"@type":"CollectionPage","@id":"https://efficientautomate.com/blog/#webpage","url":"https://efficientautomate.com/blog/","name":"Efficient Technologies Field Notes","mainEntity":{"@id":"https://efficientautomate.com/blog/#blog"},"isPartOf":{"@id":"https://efficientautomate.com/#website"}}
]
```

Add the About link to the blog footer.

- [ ] **Step 3: Apply the exact visible article metadata map**

| Article | Published | Category | Hero | Alt text |
|---|---|---|---|---|
| CRM automation | 2026-07-08 | CRM Automation | `/assets/art/tower.webp` | `Night city skyline representing connected CRM automation workflows` |
| Business process automation | 2026-07-04 | Business Process Automation | `/assets/art/street.webp` | `City streets representing connected business processes` |
| Booking automation | 2026-06-30 | Booking Automation | `/assets/art/dawn.webp` | `City at dawn representing after-hours booking automation` |
| Review automation | 2026-06-25 | Reputation | `/assets/og.png` | `Efficient Technologies automation systems` |
| Software consulting | 2026-06-20 | Software Consulting | `/assets/art/tower.webp` | `Night city systems representing connected software tools` |

Each article's visible metadata and hero must follow this exact structure with its row values:

```html
<div class="post-meta">Published <time datetime="2026-07-08">Jul 8, 2026</time> · Updated <time datetime="2026-07-14">Jul 14, 2026</time> · By <a href="/about/">Tarik Kizildere</a> · CRM Automation</div>
<h1 class="post-title">CRM Automation for Local Businesses: The 2026 Playbook</h1>
<div class="post-hero"><img src="/assets/art/tower.webp" alt="Night city skyline representing connected CRM automation workflows" width="1600" height="900"></div>
```

Use the corresponding row values on the other four articles. Do not change article prose.

- [ ] **Step 4: Replace each Article block with a BlogPosting graph**

Every BlogPosting must use the page canonical for both `@id` (`canonical + #article`) and `url`, keep its existing headline/description/datePublished, use `dateModified: "2026-07-14"`, use the absolute hero URL for `image`, and include these exact connected objects:

```json
{
  "author": {"@type":"Person","@id":"https://efficientautomate.com/about/#tarik-kizildere","name":"Tarik Kizildere","url":"https://efficientautomate.com/about/"},
  "publisher": {"@type":"Organization","@id":"https://efficientautomate.com/#organization","name":"Efficient Technologies","url":"https://efficientautomate.com/","logo":{"@type":"ImageObject","url":"https://efficientautomate.com/assets/og.png"}},
  "isPartOf": {"@type":"Blog","@id":"https://efficientautomate.com/blog/#blog","name":"Efficient Technologies Field Notes","url":"https://efficientautomate.com/blog/"},
  "inLanguage": "en-US"
}
```

Add complete robots/Open Graph/Twitter metadata to each article and add the About link to every footer.

- [ ] **Step 5: Run the blog suites and the full suite**

```powershell
node --test --test-name-pattern='metadata|blog index|articles' .github/scripts/seo-geo.test.mjs
node --test .github/scripts/seo-geo.test.mjs
```

Expected: all seven suites PASS.

- [ ] **Step 6: Synchronize the complete blog tree and commit**

```powershell
git add -- blog/index.html blog/crm-automation-local-business/index.html blog/business-process-automation-small-business/index.html blog/booking-automation-after-hours/index.html blog/review-automation-local-seo/index.html blog/software-consulting-vs-in-house/index.html
git commit -m "feat: strengthen article metadata and trust signals"
```

### Task 5: Add repository validation and remove non-deploy documentation

**Files:**
- Create: `.github/workflows/seo-geo.yml`
- Preserve locally: `C:\Users\tarik\Claude Projects\efficient-technologies\docs\superpowers\specs\2026-07-14-seo-geo-foundation-design.md`
- Preserve locally: `C:\Users\tarik\Claude Projects\efficient-technologies\docs\superpowers\plans\2026-07-14-seo-geo-foundation.md`
- Delete from publish checkout final tree: `docs/superpowers/`

**Interfaces:**
- Consumes: `.github/scripts/seo-geo.test.mjs` and deploy root `.`.
- Produces: a GitHub Actions validation gate without publishing internal planning files as site routes.

- [ ] **Step 1: Create the workflow**

```yaml
name: SEO and GEO validation

on:
  pull_request:
  push:
    branches: [main]

permissions:
  contents: read

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - name: Validate production SEO and GEO contract
        env:
          SITE_ROOT: .
        run: node --test .github/scripts/seo-geo.test.mjs
```

- [ ] **Step 2: Copy the approved design and plan to the non-deploy local project docs**

Use exact source and destination paths listed above. Confirm both copies exist and have non-zero size before removing the publish-checkout copies.

- [ ] **Step 3: Remove only `docs/superpowers/` from the publish checkout and verify paths**

Resolve the checkout and target to absolute paths. Confirm the target begins with the checkout path before recursively removing it. Do not remove the project-local copies.

- [ ] **Step 4: Run clone validation and inspect repository state**

```powershell
$env:SITE_ROOT='.'
node --test .github/scripts/seo-geo.test.mjs
git diff --check
git status -sb
git diff --stat origin/main...HEAD
```

Expected: all tests PASS, `git diff --check` is silent, and only intended site, validation, workflow, and documentation-deletion changes remain.

- [ ] **Step 5: Commit the validation and cleanup unit**

```powershell
git add -- .github/scripts/seo-geo.test.mjs .github/workflows/seo-geo.yml docs/superpowers
git commit -m "ci: validate SEO and GEO structure"
```

### Task 6: Browser QA, publication, and production readback

**Files:**
- No production file changes unless a failing check first reproduces a defect.
- Save QA screenshots under `output/playwright/seo-geo-2026-07-14/` outside the publish checkout.

**Interfaces:**
- Consumes: green branch, authenticated `tarik-ux`, GitHub remote, and Cloudflare Pages Git integration.
- Produces: merged production commit and evidence-backed live verification.

- [ ] **Step 1: Start a local server and verify HTTP/link behavior**

Serve the authoritative local `site/` root. Check `/`, `/about/`, `/blog/`, all five articles, `/404.html`, `robots.txt`, and `sitemap.xml`. Verify all same-origin `href`, `src`, and canonical targets resolve locally.

- [ ] **Step 2: Inspect desktop and mobile renders**

Capture and inspect:

- homepage at 1440×900 and 360×768
- About at 1440×900 and 360×768
- blog index at 1440×900 and 360×768
- CRM article at 1440×900 and 360×768
- 404 page at 1440×900 and 360×768

Verify no clipped text, broken images, horizontal overflow, footer regressions, or metadata text accidentally rendered in the body.

- [ ] **Step 3: Run final pre-push checks**

```powershell
$env:SITE_ROOT='.'
node --test .github/scripts/seo-geo.test.mjs
git diff --check
git status -sb
git log --oneline origin/main..HEAD
```

Expected: all tests PASS, clean whitespace, intended branch commits only.

- [ ] **Step 4: Push and open a ready pull request**

```powershell
git push -u origin agent/seo-geo-foundation
```

Open a non-draft PR targeting `main`. The body must state the technical fixes, GEO evidence boundary, validation results, and that no ranking or indexing outcome is guaranteed.

- [ ] **Step 5: Verify PR checks and merge**

Wait for the SEO/GEO workflow and any repository/Cloudflare checks. If every required check passes, merge the PR into `main`. Stop and report exact failures instead of merging around them.

- [ ] **Step 6: Poll and verify production**

Verify:

- `/about/` returns `200`
- a random unknown route returns `404`
- `/blog-preview` and `/blog-preview.html` permanently redirect to `/blog/`
- homepage/blog/article metadata and JSON-LD match the branch
- sitemap contains eight unique canonical URLs with `2026-07-14` lastmod
- live robots contains the repository OAI-SearchBot allow plus Cloudflare's managed GPTBot disallow
- desktop and mobile production pages render without regression

Do not report publication complete until these live checks pass.
