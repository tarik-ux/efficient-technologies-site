import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';

const root = path.resolve(process.env.SITE_ROOT ?? '.');
const read = (relative) => fs.readFileSync(path.join(root, relative), 'utf8').replace(/\r\n?/g, '\n');

const heroCopy = 'We build lead recovery, booking, and review systems for HVAC, plumbing, electrical, and other home-service businesses across the United States.';
const htmlFiles = [
  '404.html',
  'about/index.html',
  'blog/index.html',
  'blog/booking-automation-after-hours/index.html',
  'blog/business-process-automation-small-business/index.html',
  'blog/crm-automation-local-business/index.html',
  'blog/review-automation-local-seo/index.html',
  'blog/software-consulting-vs-in-house/index.html',
  'industries/electrical-automation/index.html',
  'industries/hvac-automation/index.html',
  'industries/plumbing-automation/index.html',
  'solutions/booking-automation/index.html',
  'solutions/lead-recovery-automation/index.html',
  'solutions/review-automation/index.html',
];

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function inlineHomepageCss(html) {
  const match = html.match(/<style\b[^>]*\bdata-homepage-styles\b[^>]*>([\s\S]*?)<\/style>/i);
  assert.ok(match, 'homepage inline CSS block must exist');
  return match[1];
}

function cssRule(css, selector) {
  const match = css.match(new RegExp(`${escapeRegex(selector)}\\s*\\{([^}]*)\\}`, 'i'));
  assert.ok(match, `missing CSS rule ${selector}`);
  return match[1].replace(/\s+/g, '');
}

function cssToken(css, name) {
  const match = css.match(new RegExp(`${escapeRegex(name)}\\s*:\\s*([^;]+);`));
  assert.ok(match, `missing token ${name}`);
  return match[1].trim();
}

function hexToRgb(hex) {
  const value = hex.replace('#', '');
  assert.match(value, /^[0-9a-f]{6}$/i, `expected six-digit hex, got ${hex}`);
  return [0, 2, 4].map((offset) => Number.parseInt(value.slice(offset, offset + 2), 16));
}

function relativeLuminance(hex) {
  const channels = hexToRgb(hex).map((channel) => {
    const normalized = channel / 255;
    return normalized <= 0.04045
      ? normalized / 12.92
      : ((normalized + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
}

function contrastRatio(foreground, background) {
  const values = [relativeLuminance(foreground), relativeLuminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
}

function resolvedHex(css, name, seen = new Set()) {
  assert.equal(seen.has(name), false, `cyclic token reference at ${name}`);
  seen.add(name);
  const value = cssToken(css, name);
  const reference = value.match(/^var\((--[a-z0-9-]+)\)$/i);
  return reference ? resolvedHex(css, reference[1], seen) : value;
}

test('homepage and accepted plan preserve the fixed hero acquisition contract', () => {
  const home = read('index.html');
  const hero = home.match(/<section id="hero"[\s\S]*?<\/section>/i)?.[0] ?? '';
  assert.match(hero, new RegExp(`<p class="hero-sub" data-reveal>${escapeRegex(heroCopy)}<\\/p>`));
  assert.match(hero, /<a class="btn btn-ghost" data-cursor href="#how">See How It Works<\/a>/);
  assert.equal((hero.match(/See How It Works/g) ?? []).length, 1, 'hero must expose one exact secondary action');

  const plan = read('docs/superpowers/plans/2026-07-21-home-service-organic-acquisition.md');
  const excerpt = plan.match(/- \[ \] \*\*Step 4: Replace the primary navigation and hero copy\*\*[\s\S]*?(?=- \[ \] \*\*Step 5:)/)?.[0] ?? '';
  assert.match(excerpt, new RegExp(escapeRegex(heroCopy)));
  assert.match(excerpt, /href="#how">See How It Works<\/a>/);
  assert.doesNotMatch(excerpt, /See Lead Recovery/);
});

test('deploy tokens and homepage inline tokens expose the same semantic primary-action aliases', () => {
  const tokens = read('assets/tokens.css');
  const inline = inlineHomepageCss(read('index.html'));
  for (const css of [tokens, inline]) {
    assert.equal(cssToken(css, '--et-primary-action-bg'), 'var(--et-blue-hover)');
    assert.equal(cssToken(css, '--et-primary-action-hover-bg'), 'var(--et-blue-bg)');
  }
});

test('14px primary text and 11px breadcrumb text meet WCAG AA contrast on every required surface', () => {
  const tokens = read('assets/tokens.css');
  const white = resolvedHex(tokens, '--et-white');
  const normal = contrastRatio(white, resolvedHex(tokens, '--et-primary-action-bg'));
  const hover = contrastRatio(white, resolvedHex(tokens, '--et-primary-action-hover-bg'));
  assert.ok(normal >= 4.5, `primary normal contrast ${normal.toFixed(3)} must be >= 4.5`);
  assert.ok(hover >= 4.5, `primary hover contrast ${hover.toFixed(3)} must be >= 4.5`);

  const breadcrumb = resolvedHex(tokens, '--et-slate');
  for (const surface of ['--et-void', '--et-panel']) {
    const ratio = contrastRatio(breadcrumb, resolvedHex(tokens, surface));
    assert.ok(ratio >= 4.5, `breadcrumb contrast on ${surface} is ${ratio.toFixed(3)}; expected >= 4.5`);
  }
});

test('shared and inline primary buttons stay aligned while breadcrumbs use the accessible text token', () => {
  const shared = read('css/styles.css');
  const inline = inlineHomepageCss(read('index.html'));
  const expectedNormal = 'background:var(--et-primary-action-bg);color:var(--et-white);';
  const expectedHover = 'background:var(--et-primary-action-hover-bg);';
  assert.equal(cssRule(shared, '.btn-primary'), expectedNormal);
  assert.equal(cssRule(inline, '.btn-primary'), expectedNormal);
  assert.equal(cssRule(shared, '.btn-primary:hover'), expectedHover);
  assert.equal(cssRule(inline, '.btn-primary:hover'), expectedHover);
  assert.match(cssRule(shared, '.breadcrumbs'), /color:var\(--et-slate\);/);
});

test('every shared CSS consumer uses the cache-busting revisions for this fix', () => {
  for (const file of htmlFiles) {
    const html = read(file);
    assert.match(html, /<link rel="stylesheet" href="\/assets\/tokens\.css\?v=4">/, `${file} token revision`);
    assert.match(html, /<link rel="stylesheet" href="\/css\/styles\.css\?v=5">/, `${file} style revision`);
  }

  const home = read('index.html');
  assert.match(home, /<style data-homepage-styles data-tokens-revision="4" data-styles-revision="4">/);
});
