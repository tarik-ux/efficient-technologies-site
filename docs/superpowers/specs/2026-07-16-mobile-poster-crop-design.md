# Portrait-mobile poster crop design

Date: 2026-07-16 (Europe/Berlin)
Status: approved design, implementation pending
Repository: tarik-ux/efficient-technologies-site
Draft pull request: #2
Approved implementation base: b416b8113315c95c32d4674aa54769d90c562abd

## Goal

Make the official Cloudflare preview pass the existing Lighthouse 13.4 mobile simulated-LCP limit of 2500 ms without changing content, layout, desktop imagery, video behavior, functionality, accessibility, animation ownership, animation timing, motion constants, reduced-motion behavior, or low-power media fallbacks.

The change must preserve all currently passing SEO/GEO, delivery, browser, interaction, animation, and cleanup gates. The LCP budget must not be weakened.

## Evidence and problem statement

Commit b416b8113315c95c32d4674aa54769d90c562abd passes:

- GitHub performance validation: 29/29;
- GitHub SEO/GEO validation: 8/8;
- Cloudflare Pages deployment;
- route, header, and font delivery: 43/43;
- Chromium behavior: 13/13 cases and 136/136 checks;
- exact request graph and animation/source-integrity checks; and
- desktop Lighthouse, with a 100 score and 666.636 ms median simulated LCP.

Its mobile Lighthouse first-run simulated-LCP values are 2935.767 ms, 2931.045 ms, and 2996.690 ms. The 2935.767 ms median misses the 2500 ms limit by 435.767 ms. The corresponding observed LCP median is 810 ms, so the failure is specific to Lighthouse's simulated mobile network and CPU model rather than a 2.9-second observed paint.

All three reports select the same text LCP, “Automate them.” The only audit opportunity quantified at or above the missing recovery is the initial city poster:

- source: assets/city-poster-v20260714.webp;
- dimensions: 1376 by 768;
- resource bytes: 120,376;
- Lighthouse estimated waste: 71,180 bytes;
- Lighthouse estimated LCP savings: 450 ms; and
- resulting target size: at most 49,196 bytes.

The previous full-resolution WebP and AVIF experiments are closed rejects. Neither produced a file that simultaneously satisfied the 49,196-byte ceiling, SSIM of at least 0.980000, and PSNR of at least 35 dB. Repeating those full-frame ladders is outside this design.

## Considered approaches

### 1. Portrait-only geometric crop with AVIF/WebP fallback — selected

Crop only the source pixels that the existing right-aligned, cover-fitted video element displays in the audited portrait viewport. Encode that crop as a versioned AVIF and select it only on narrow portrait screens. Keep the current full WebP as the default, desktop, landscape, unsupported-format, and no-JavaScript fallback.

Benefits:

- discards source pixels that are never displayed in the target viewport;
- preserves the current visible composition instead of accepting lower quality;
- targets the only Lighthouse opportunity large enough to close the measured gap;
- leaves desktop and landscape rendering unchanged;
- requires no JavaScript or animation change; and
- retains the existing full WebP rather than replacing it.

Trade-off:

- poster delivery moves from the video poster attribute to CSS background selection so the browser does not fetch both the old WebP and the new AVIF.

### 2. Lower-quality full-frame poster — rejected

The fixed full-frame ladders show that files below the size ceiling miss the declared SSIM or PSNR floor. This approach saves bytes by degrading the image rather than by removing invisible pixels.

### 3. Change title opacity, reveal timing, or the Lighthouse budget — rejected

The title animation is part of the approved experience. Changing its start state or timing would violate the no-motion-loss requirement, while weakening the budget would hide rather than solve the measured failure.

## Exact crop geometry

The current source is 1376 by 768. At the audited 412 by 823 portrait viewport, object-fit: cover scales the source by 823 / 768 = 1.0716145833. The displayed viewport therefore consumes 412 / 1.0716145833 = 384.4665857 source pixels horizontally.

Because object-position is right-aligned, the visible source interval is approximately x = 991.5334143 through x = 1376.

The integer crop is fixed as:

- x: 991;
- y: 0;
- width: 385;
- height: 768.

When the 385 by 768 crop is cover-fitted and right-aligned into 412 by 823, approximately 0.533 source pixels are clipped from its left edge. The resulting visible interval matches the current full poster's audited interval.

The mobile crop may be selected only when all of these are true:

- viewport width is at most 640 CSS pixels; and
- orientation is portrait; and
- viewport aspect ratio is at most 385 / 768.

The aspect-ratio condition is required for geometric equivalence. A wider portrait viewport would expose more than 385 source pixels and cannot use the crop without changing composition. Desktop, tablet landscape, mobile landscape, and wider/shorter portrait screens retain the current full WebP.

## Delivery architecture

### Versioned asset

The selected output path is:

assets/city-poster-mobile-v20260716.avif

It must be:

- one still AVIF frame;
- exactly 385 by 768;
- yuv420p;
- at most 49,196 bytes;
- SSIM at least 0.980000 against the lossless source crop;
- average PSNR at least 35 dB against the lossless source crop;
- free of EXIF, XMP, chapters, comments, and custom user metadata; and
- covered by a one-year immutable cache rule in _headers.

The metadata policy uses an exact allowlist. It permits only AVIF structural format fields and FFmpeg's deterministic primary-item stream label title=Color. That label appeared identically on all 15 V1 rungs and contains no project or user data. Any other format or stream metadata fails the contract.

The original assets/city-poster-v20260714.webp remains byte-exact and keeps its current immutable rule.

### CSS fallback selection

css/styles.css remains the stylesheet source of truth. The world-video rule gains the fallback background geometry:

- background image: the existing full WebP;
- background size: cover;
- background position: center right;
- background repeat: no-repeat; and
- background color: var(--et-void).

Inside the portrait-mobile media query, the rule first repeats the full WebP URL as a plain fallback and then declares a typed image-set containing:

1. the new AVIF as image/avif; and
2. the existing full WebP as image/webp.

A browser that supports typed AVIF image-set selects only the AVIF. A browser that does not parse that declaration retains the preceding WebP background. No script chooses the asset.

### Video markup

The world video keeps its id, classes, muted, loop, playsinline, preload, data-src, and aria-hidden attributes. Only its poster attribute is removed.

Removing the attribute prevents a second independent request for the old WebP. The CSS background remains behind the video element until a decoded video frame paints over it. The video source, activation policy, autoplay behavior, error handling, and takeover timing remain unchanged.

### CSS revision and homepage inline copy

Because css/styles.css changes, its public revision advances from 3 to 4.

- index.html records data-styles-revision="4";
- the homepage inline style remains exactly normalized assets/tokens.css plus one newline plus normalized css/styles.css;
- the token revision remains 3;
- the eight linked routes change only /css/styles.css?v=3 to /css/styles.css?v=4; and
- the performance contract pins the new stylesheet SHA-256 and exact inline equality.

No token, font, JavaScript, copy, layout value, animation value, keyframe, or runtime file changes.

## Fixed evidence experiment

Implementation begins in an evidence-only candidate reconstructed byte-exactly from b416b811. The authoritative source and publish checkout remain untouched until the experiment reaches a promotion verdict.

Before encoding, the experiment records:

- the exact crop command and lossless crop hash;
- the fixed AVIF CRFs 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, and 46;
- the V1 encoder settings: FFmpeg 8.1.1 libaom-av1, all-intra usage, SSIM tuning, still-picture mode, cpu-used 4, zero target bitrate, yuv420p, one thread, row-mt disabled, one-by-one tiling, frame-parallel disabled, one frame, and stripped input metadata and chapters;
- the 49,196-byte, 0.980000 SSIM, and 35 dB PSNR gates;
- objective selection order;
- the exact structural metadata allowlist;
- the allowed candidate diff;
- browser, visual, request, and Lighthouse gates; and
- the no-retry and cleanup policy.

No rung, crop, speed, pixel format, threshold, or selection rule may change after the first encode begins. If no rung qualifies, the experiment stops as REJECT.

Among mechanical qualifiers, selection order is:

1. highest SSIM;
2. highest average PSNR;
3. smallest byte size; and
4. lowest CRF.

The full-resolution rejected outputs are not candidates.

## Visual and browser qualification

A mechanically selected asset must pass all of the following before any project edit:

1. Chrome and Edge decode the AVIF with the exact declared dimensions.
2. At 412 by 823, the baseline full-poster render and candidate crop render have identical element bounds, cover geometry, right edge, and takeover timing.
3. Baseline/candidate poster-state screenshots pass the same SSIM and PSNR floors, with no blank frame, tofu, visible seam, stretch, or changed overlay.
4. Desktop, landscape, and a 375 by 667 wider-ratio portrait viewport request the original WebP and do not request the mobile AVIF.
5. The audited 412 by 823 viewport and a 390 by 844 tall-phone viewport request the mobile AVIF and do not request the original WebP before video activation.
6. With JavaScript disabled, the CSS background still paints.
7. Reduced motion, Save Data, 2G, and low-power cases continue to request zero MP4 files while retaining a visible background.
8. Normal-capability video activation still replaces the background with the same video at the same lifecycle boundary.
9. The accepted 13-case/136-check matrix remains completely green.
10. There are zero unexpected console, page, or request failures, and all browser processes, profiles, and ports clean up.

No visual gate may be waived because Lighthouse improves.

## Performance qualification

The isolated candidate receives three baseline and three candidate Lighthouse 13.4 mobile runs in alternating order, with no retries or best-run substitution.

Before promotion to the source and publish trees:

- every candidate simulated LCP is at most 2500 ms;
- candidate median simulated LCP is at most 2500 ms;
- mobile performance score is at least 90;
- CLS is at most 0.02;
- the mobile AVIF is the only poster request in portrait Chromium;
- transfer bytes fall by the expected poster delta; and
- all cleanup gates pass.

The local result is evidence, not publication authority. After implementation and push, the official immutable Cloudflare preview receives three new mobile and three new desktop first-run Lighthouse audits. The same every-run and median mobile LCP limits apply.

## Source and publish synchronization

If and only if the isolated experiment returns PROMOTE:

1. add failing performance-contract assertions in the publish checkout;
2. add the selected AVIF to authoritative site/assets and the publish checkout;
3. update authoritative site/css/styles.css and synchronize it exactly;
4. regenerate the homepage's exact inline CSS and revision marker in both trees;
5. update the eight linked routes in both trees;
6. remove only the world video's poster attribute in both trees;
7. add the new immutable _headers rule in both trees; and
8. verify SHA-256 parity for every changed deploy artifact.

The retained full WebP must remain exact and contract-pinned for fallback compatibility.

## Release gates

Before push:

- source performance contract: 29/29 or the expanded successor count;
- publish performance contract: the same complete count;
- source SEO/GEO contract: 8/8;
- publish SEO/GEO contract: 8/8;
- exact source/publish parity for every changed deploy file;
- git diff --check: clean;
- independent code review: no unresolved findings;
- 13/13 browser cases and 136/136 checks;
- visual comparison: green;
- request graph: exact; and
- local no-retry Lighthouse candidate: green.

After push:

- GitHub performance validation: pass;
- GitHub SEO/GEO validation: pass;
- Cloudflare deployment: pass;
- immutable preview route/header/asset readback: pass;
- immutable preview behavior and request graph: pass;
- all three mobile simulated-LCP values at most 2500 ms;
- mobile median simulated LCP at most 2500 ms;
- mobile score at least 90;
- mobile and desktop CLS at most 0.02;
- desktop transfer at most 4.5 MiB; and
- complete process/profile/port cleanup.

If any gate fails, PR #2 remains draft and unmerged. Production is not changed.

## Failure handling and rollback

- No mechanical qualifier: close the experiment as REJECT without project edits.
- Visual or behavior mismatch: REJECT even if transfer and LCP improve.
- Duplicate old-WebP request on portrait mobile: REJECT and diagnose delivery; do not hide it from the request contract.
- Local LCP failure: REJECT without source or publish edits.
- Official preview LCP failure: keep the PR draft and production unchanged.
- Post-merge production regression: revert the release commit and verify the prior live state.

Rollback restores the poster attribute, removes the background-selection declarations and mobile AVIF, restores style revision 3, and removes the V20260716 immutable header entry.

## Documentation boundary

This design document is committed for the required review gate but is not a deployable product artifact. The implementation commit must remove this specification and its implementation plan from the final branch tree before the next preview push.

## Acceptance decision

The change succeeds only if the portrait crop is visually equivalent to the pixels users already see, every behavior and animation gate remains green, and the official immutable Cloudflare preview clears the existing 2500 ms mobile simulated-LCP limit on every run and by median.
