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

function assertPageMetadata(pagesToCheck) {
  for (const page of pagesToCheck) {
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
