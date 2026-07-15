# Homepage critical CSS delivery design

Date: 2026-07-15 (Europe/Berlin)  
Status: approved design, implementation pending  
Repository: `tarik-ux/efficient-technologies-site`  
Draft pull request: `#2`  
Approved implementation base: `57149d63296f4884cee8efea3ee158ac7a04a73c`

## Goal

Make the Cloudflare preview pass the existing mobile Lighthouse 13.4 simulated-LCP budget of 2500 ms without changing the site's visual design, content, typefaces, layout, functionality, animations, motion constants, accessibility behavior, media quality, or low-power fallbacks.

The change must preserve every already-passing SEO/GEO, behavior, media, and interaction gate. It must not weaken the score, LCP, CLS, transfer, video-size, or browser acceptance criteria.

## Evidence and problem statement

The exact committed release currently passes all non-Lighthouse preview gates:

- GitHub performance workflow: pass;
- GitHub SEO/GEO workflow: pass;
- Cloudflare Pages deployment: pass;
- official preview routing and release markers: pass;
- preview Chromium matrix: 13 cases and 136 checks, all pass; and
- preview desktop Lighthouse median: score 100, simulated LCP 669.252 ms, CLS 0.00043072, and 1,591,686 transferred bytes.

The preview mobile three-run median is score 96, simulated LCP 2769.191 ms, observed LCP 234 ms, CLS 0.00126842, and 381,172 transferred bytes. The score, CLS, and transfer results pass, but simulated LCP misses the 2500 ms limit by 269.191 ms. The pull request must remain draft and unmerged while this gate fails.

The local loopback HTTP/2+Brotli median was score 97 and simulated LCP 2478.080 ms. The difference is not a JavaScript, animation, or real-paint regression: preview trace-observed LCP remains 234 ms. The Cloudflare trace adds latency to the critical document, stylesheet, and font requests. Lighthouse identifies the same `p.hero-sub` LCP element and estimates about 600 ms of potential LCP savings from the two render-blocking stylesheet requests.

The current critical request shape is:

```text
HTML document
  -> /assets/tokens.css?v=2
  -> /css/styles.css?v=3
  -> declared and preloaded fonts
  -> first text paint
```

The design removes the two stylesheet network edges from the homepage's critical path while preserving the exact stylesheet contents and cascade.

## Considered approaches

### 1. Inline the exact complete homepage CSS - selected

Replace the homepage's two external stylesheet links with one marked inline style block containing the exact contents of `assets/tokens.css`, followed by one newline, followed by the exact contents of `css/styles.css`.

Benefits:

- removes both render-blocking stylesheet requests and their Cloudflare latency;
- preserves every CSS declaration, order, selector, media query, keyframe, token, and font-face rule;
- avoids a flash of unstyled or partially styled content;
- does not change JavaScript, animation ownership, motion values, media, fonts, or content; and
- can be enforced mechanically against the two source stylesheets.

Trade-off:

- the homepage HTML grows by about 30 KiB decoded and contains a synchronized copy of the CSS used by the other routes.

The trade-off is acceptable because the compressed homepage remains small, two compressed requests disappear, and a contract will make synchronization drift a hard failure.

### 2. Inline only above-the-fold CSS and asynchronously load the rest - rejected

This would reduce the inline payload, but it requires manually maintaining a critical subset, changes when below-fold selectors become available, and creates flash, transition, pin-layout, and motion-initialization risks. It is more complex and less faithful than exact full inlining.

### 3. Tune priorities or subset fonts - rejected for this gate

Priority hints are already high and the relevant fonts are preloaded. More aggressive font subsetting may change glyph coverage or type rendering and is unlikely to recover the full 269.191 ms reliably. It also changes a higher-risk visual asset when the measured bottleneck is the stylesheet request chain.

## Delivery architecture

### CSS sources of truth

The authoritative CSS files remain:

```text
assets/tokens.css
css/styles.css
```

Their bytes and revisioned public files remain unchanged. They continue to serve About, Blog, article, and 404 routes and retain their existing cache policy.

The implementation contract pins their current SHA-256 values:

```text
assets/tokens.css  7fbefe7263d36d70caeb50226fb0c5f4a78031e5de8f8a9638d1bdcb42cb31ac
css/styles.css     02c10b8d00c1f5122d328644f8483a13590a0bf1958f277e30e075b376fac045
```

### Homepage delivery

In `index.html`, replace only these two elements:

```html
<link rel="stylesheet" href="/assets/tokens.css?v=2">
<link rel="stylesheet" href="/css/styles.css?v=3">
```

with exactly one style element:

```html
<style data-homepage-styles data-tokens-revision="2" data-styles-revision="3">
...exact tokens.css content...
...exact styles.css content...
</style>
```

The style payload is defined as normalized-LF `tokens.css` + one LF + normalized-LF `styles.css`. No selector, declaration, comment, value, or order may be edited inside the HTML copy independently.

The revision data attributes preserve explicit provenance for the two public CSS revisions. They do not create a new cache-header target.

### Other routes

The remaining eight HTML documents keep the exact two revisioned stylesheet links and continue to load the public CSS files. No other route markup changes.

### Runtime and motion

The critical bootstrap, runtime loader, GSAP, ScrollTrigger, Lenis, `main.js?v=4`, `ambient.js?v=2`, preloader timing, hero reveals, pinned narrative, chapter media state machine, cursor, tilt, magnetic buttons, counters, terminal, and reduced-motion/low-power behavior remain byte-for-byte unchanged.

## Contract design

The tracked performance contract changes before production markup.

The new test must fail on the existing two-link homepage and then require all of the following:

1. `index.html` contains exactly one `style[data-homepage-styles]` block.
2. The block records token revision `2` and style revision `3`.
3. After LF normalization and removal of only the HTML wrapper's first and last structural newlines, the block equals normalized `assets/tokens.css` + one LF + normalized `css/styles.css` exactly.
4. The homepage contains no network-bearing stylesheet link.
5. The other eight HTML documents retain exactly `/assets/tokens.css?v=2` and `/css/styles.css?v=3`, in that order.
6. The two source CSS files retain the exact pinned SHA-256 values above in both authoritative source and publish checkout.
7. The existing 13-block immutable cache policy remains exact and does not apply to HTML or unversioned paths.
8. All prior performance, media, font, geometry, loader, motion, and SEO/GEO assertions remain green.

The contract must parse the marked style block and compare its complete content. Marker-string-only assertions are insufficient.

## Source and publish synchronization

Implementation order is fixed:

1. add the failing contract in the publish checkout;
2. edit authoritative `site/index.html`;
3. synchronize only `index.html` into the publish checkout;
4. verify exact SHA-256 source/publish parity for `index.html`; and
5. commit the performance contract and `index.html` after all gates pass, while deleting this local-only specification from the branch tree in the same commit.

No CSS file is rewritten or synchronized because this design changes delivery only, not stylesheet contents. The final deployable delta after the specification deletion therefore contains only the performance contract and `index.html`.

## Verification gates

Before pushing a new preview commit:

- source performance contract: all tests pass;
- publish performance contract: all tests pass;
- source SEO/GEO contract: 8/8;
- publish SEO/GEO contract: 8/8;
- exact source/publish `index.html` parity;
- `git diff --check` clean;
- only the performance contract and homepage are deployable changes;
- inline CSS equality contract passes;
- normal and reduced preloader/hero behavior passes;
- the complete 13-case, 136-check Chromium matrix passes;
- mobile, Save Data, 2G, and reduced motion request zero MP4 files; and
- no unexpected console, page, or network errors occur.

The exact integrated candidate then receives fresh local HTTP/2+Brotli audits. The updated commit is pushed only if local behavior and integrity remain green.

The new official Cloudflare deployment must receive three fresh mobile and three fresh desktop Lighthouse 13.4 audits. Promotion requires:

- mobile median score at least 90;
- mobile median simulated LCP at most 2500 ms;
- mobile and desktop median CLS at most 0.02;
- desktop median transfer at most 4.5 MiB; and
- all fresh browser and cleanup evidence green.

No best-run substitution is allowed. If the preview median still fails, the PR stays draft and no merge occurs.

## Failure handling and rollback

- If inline content differs from either CSS source, the contract fails and publication stops.
- If any visual, animation, media, interaction, accessibility, or fallback check changes, publication stops even if Lighthouse improves.
- If the preview Lighthouse median remains above 2500 ms, publication stops and the result is diagnosed without weakening behavior or the budget.
- Rollback restores the two exact stylesheet links and removes the marked inline block in a reviewable commit.

## Documentation boundary

This design document is committed locally for the required review gate but is not part of the deployable product. It must be removed from the branch's final tree before the next push. The pull request will be squash-merged only with internal specifications, plans, candidates, screenshots, and audit JSON absent from the public deploy tree.

## Acceptance decision

The implementation is successful only when exact CSS equivalence and the complete behavior matrix remain green and the official Cloudflare preview independently passes the existing mobile LCP gate. Performance never outranks functionality, accessibility, visual fidelity, or motion fidelity.
