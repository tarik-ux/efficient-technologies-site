import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { isDeepStrictEqual } from 'node:util';

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
  { file: 'blog/crm-automation-local-business/index.html', published: '2026-07-08', modified: '2026-07-21', image: '/assets/art/tower.webp' },
  { file: 'blog/business-process-automation-small-business/index.html', published: '2026-07-04', modified: '2026-07-21', image: '/assets/art/street.webp' },
  { file: 'blog/booking-automation-after-hours/index.html', published: '2026-06-30', modified: '2026-07-21', image: '/assets/art/dawn.webp' },
  { file: 'blog/review-automation-local-seo/index.html', published: '2026-06-25', modified: '2026-07-21', image: '/assets/og-v20260714.jpg' },
  { file: 'blog/software-consulting-vs-in-house/index.html', published: '2026-06-20', modified: '2026-07-14', image: '/assets/art/tower.webp' },
];

const legacySitemapEntries = pages.map((page) => ({ loc: page.canonical, lastmod: releaseDate }));
const releaseSitemapEntries = [
  { loc: `${base}/`, lastmod: '2026-07-21' },
  { loc: `${base}/about/`, lastmod: '2026-07-21' },
  { loc: `${base}/solutions/lead-recovery-automation/`, lastmod: '2026-07-21' },
  { loc: `${base}/solutions/booking-automation/`, lastmod: '2026-07-21' },
  { loc: `${base}/solutions/review-automation/`, lastmod: '2026-07-21' },
  { loc: `${base}/industries/hvac-automation/`, lastmod: '2026-07-21' },
  { loc: `${base}/industries/plumbing-automation/`, lastmod: '2026-07-21' },
  { loc: `${base}/industries/electrical-automation/`, lastmod: '2026-07-21' },
  { loc: `${base}/blog/`, lastmod: '2026-07-21' },
  { loc: `${base}/blog/crm-automation-local-business/`, lastmod: '2026-07-21' },
  { loc: `${base}/blog/business-process-automation-small-business/`, lastmod: '2026-07-21' },
  { loc: `${base}/blog/booking-automation-after-hours/`, lastmod: '2026-07-21' },
  { loc: `${base}/blog/review-automation-local-seo/`, lastmod: '2026-07-21' },
  { loc: `${base}/blog/software-consulting-vs-in-house/`, lastmod: '2026-07-14' },
];

const legacyRobots = `User-agent: OAI-SearchBot
Allow: /

User-agent: *
Allow: /

Sitemap: https://efficientautomate.com/sitemap.xml`;
const releaseRobots = `User-agent: OAI-SearchBot
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

Sitemap: https://efficientautomate.com/sitemap.xml`;

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

function assertPageMetadata(pagesToCheck) {
  for (const page of pagesToCheck) {
    assert.equal(exists(page.file), true, `${page.file} must exist`);
    const html = read(page.file);
    assert.equal((html.match(/<title>[\s\S]*?<\/title>/gi) ?? []).length, 1, `${page.file} title`);
    assert.ok(meta(html, 'name', 'description', `${page.file} description`));
    assert.match(meta(html, 'name', 'robots', `${page.file} robots`), /max-image-preview:large/i);
    assert.equal(link(html, 'canonical', `${page.file} canonical`), page.canonical);
    assert.equal(meta(html, 'property', 'og:url', `${page.file} og:url`), page.canonical);
    assert.equal(meta(html, 'property', 'og:image', `${page.file} og:image`), `${base}/assets/og-v20260714.jpg`);
    assert.ok(meta(html, 'property', 'og:image:alt', `${page.file} og:image:alt`));
    assert.equal(meta(html, 'name', 'twitter:image', `${page.file} twitter:image`), `${base}/assets/og-v20260714.jpg`);
    assert.ok(meta(html, 'name', 'twitter:title', `${page.file} twitter:title`));
    assert.ok(meta(html, 'name', 'twitter:description', `${page.file} twitter:description`));
    assert.ok(meta(html, 'name', 'twitter:image:alt', `${page.file} twitter:image:alt`));
  }
}

test('core page metadata is complete and canonical', () => {
  assertPageMetadata(pages.slice(0, 2));
});

test('blog metadata is complete and canonical', () => {
  assertPageMetadata(pages.slice(2));
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
    assert.match(html, new RegExp(`<time\\s+datetime="${article.modified}"`), `${article.file} modified time`);
    assert.match(html, new RegExp(`<div\\s+class="post-hero">[\\s\\S]*?<img\\s+src="${escapeRegex(article.image)}"`, 'i'), `${article.file} hero`);
    const post = jsonLdNodes(html, article.file).find((node) => hasType(node, 'BlogPosting'));
    assert.ok(post, `${article.file} BlogPosting`);
    for (const property of ['@id', 'url', 'headline', 'description', 'datePublished', 'dateModified', 'image', 'author', 'publisher', 'isPartOf', 'mainEntityOfPage', 'inLanguage']) {
      assert.ok(post[property], `${article.file} BlogPosting.${property}`);
    }
    assert.equal(post.datePublished, article.published);
    assert.equal(post.dateModified, article.modified);
  }
});

test('crawler policy matches an exact legacy or release contract', () => {
  const robots = read('robots.txt');
  const normalizedRobots = robots.replace(/\r\n/g, '\n').trimEnd();
  assert.ok([legacyRobots, releaseRobots].includes(normalizedRobots), 'robots.txt must match one complete phase contract');
  assert.equal(exists('llms.txt'), false);
  assert.equal(exists('ai.txt'), false);
  assert.doesNotMatch(robots, /\bai-train\b/i);
});

test('sitemap matches an exact legacy or release inventory with unique URLs', () => {
  const sitemap = read('sitemap.xml');
  const entries = [...sitemap.matchAll(/<url>\s*<loc>(.*?)<\/loc>\s*<lastmod>(.*?)<\/lastmod>\s*<\/url>/g)]
    .map((match) => ({ loc: match[1], lastmod: match[2] }));
  assert.equal(new Set(entries.map((entry) => entry.loc)).size, entries.length);
  assert.ok(
    [legacySitemapEntries, releaseSitemapEntries].some((variant) => isDeepStrictEqual(entries, variant)),
    'sitemap.xml must match one complete phase inventory',
  );
});
