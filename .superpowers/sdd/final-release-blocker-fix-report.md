# Final release blocker fix report

## Scope and boundaries

This was one scoped fix pass for the two Important findings in
`final-whole-release-review.md`. It did not publish, push, mutate Git refs or
provider settings, run the 43-case release suite, change JavaScript, change
video/media assets, alter layout/motion constants, or rewrite sealed Task 9/10
evidence.

## Important finding 1: homepage hero contract

- Restored the accepted supporting copy exactly:
  `We build lead recovery, booking, and review systems for HVAC, plumbing, electrical, and other home-service businesses across the United States.`
- Restored the only secondary hero action to exactly `See How It Works` with
  `href="#how"`.
- Aligned the conflicting Task 5 implementation-plan excerpt with the accepted
  design.
- Added a focused contract test covering both the shipped homepage and the
  accepted-plan excerpt.

## Important finding 2: CTA and breadcrumb contrast

- Added semantic action aliases without adding palette colors:
  - `--et-primary-action-bg: var(--et-blue-hover)`
  - `--et-primary-action-hover-bg: var(--et-blue-bg)`
- Updated shared and homepage-inline `.btn-primary` rules to use the aliases
  with `var(--et-white)` text.
- Changed shared breadcrumb text from `--et-slate-dim` to `--et-slate`.
- Calculated WCAG contrast results:
  - white on `--et-blue-hover`: `5.509:1`
  - white on `--et-blue-bg`: `15.516:1`
  - `--et-slate` on `--et-void`: `7.851:1`
  - `--et-slate` on `--et-panel`: `7.173:1`
- Propagated cache-busting revisions to every consumer: external token revision
  `4`, external stylesheet revision `5`, and homepage inline token/style
  revisions `4`/`4`. `404.html` received only those two revision changes; its
  chrome and copy remain unchanged.

## Strict TDD evidence

RED before product or brand edits:

- `node --test .github/scripts/final-release-blockers.test.mjs`
  - `0/5` passed
  - expected failures: hero/plan contract, absent semantic aliases, absent
    contrast contract, shared/inline button mismatch, and stale consumer
    revisions beginning with `404.html`

RED after the product change but before updating the existing revision
contract:

- `node --test .github/scripts/performance-contract.test.mjs .github/scripts/seo-geo.test.mjs`
  - `35/37` passed
  - expected failures: homepage inline revision expected `3` but received `4`,
    and `404.html` still expected token/style revisions `3`/`3` rather than
    `4`/`5`

GREEN:

- focused blocker suite: `5/5`
- existing performance/SEO suite: `37/37`
- `node .validation/home-service-release-v1/static-check.mjs all`:
  `STATIC_CHECK_ALL_PASS`

The mutable ignored root static validator now accepts the authorized deploy
token hash in addition to the historical baseline hash. The historical
`baseline.json` and all sealed Task 9/10 trees were left untouched.

## Bounded Playwright smoke

The smoke used the real Playwright CLI against an owned local HTTP server and
closed its browser/server sessions afterward.

- Homepage at `1440x900` and `390x844`:
  - exact hero copy and `See How It Works` target `#how`
  - CTA computed style: `14px`, white, normal background `rgb(42, 95, 224)`
  - hover background `rgb(18, 34, 74)`
  - no horizontal overflow; loader dismissed; zero console errors
  - exact seven video IDs and original data-source order
- Desktop motion smoke:
  - `#how` activated `ch-t2`
  - `#book` activated `ch-t3`
  - reverse traversal exposed `ch-t1r`, then settled to no chapter layer with
    the world layer at opacity `1`
- Mobile motion smoke:
  - preserved the existing `max-width: 768px` low-power branch, so chapter
    media stayed inactive and the world/poster layer remained visible
  - no JavaScript or motion code changed
- Lead Recovery solution and HVAC industry pages at both viewports:
  - one H1, no horizontal overflow, zero console errors
  - CTA computed style: `14px`, white, background `rgb(42, 95, 224)`
  - breadcrumb computed style: `11px`, `rgb(143, 163, 194)`
  - loaded `/assets/tokens.css?v=4` and `/css/styles.css?v=5`

## Authoritative parent brand changes

The parent brand kit is outside this deploy repository. No second repository
was assumed or created.

- `C:\Users\tarik\Claude Projects\efficient-technologies\brand\tokens.css`
  - before SHA-256: `a07ff278bfa854eb1591b7744d2d4ec98da562b7a42267c9fd0771e0a185bab2`
  - after SHA-256: `1ba7dca2d847f9af4e062c1fa7dd24a54e1572b3ef7645301df9bf0fde2ef76c`
  - change: added the two semantic primary-action aliases
- `C:\Users\tarik\Claude Projects\efficient-technologies\brand\brand-guidelines.md`
  - before SHA-256: `7689aceb9b1e1377c2153c62ad872aaca2dd1550ac822e291d121118d322df37`
  - after SHA-256: `1b597edcf399ba487f82f3dcd24b5df69688b38047703dad0358140ba1224359`
  - change: documented accessible action semantics, the existing backing
    colors, the `5.509:1` normal contrast, and the button application rule

## Minor findings intentionally unchanged

1. Shared chrome remains duplicated/inconsistent; 404 chrome/copy was not
   refactored.
2. The exact Cloudflare production deployment ID remains inferential.
3. The preserved Task 9 `054606Z` history still does not self-record its later
   rejection.
4. `task9-finalize.mjs` still lacks an independent candidate-root containment
   assertion.
5. The sealed Task 10 request index retains its corrupted display pointers;
   sealed evidence was not rewritten.

## Remaining concern

This pass closes the two code/spec Important findings only. It does not erase
or reclassify the previously preserved strict overall FAIL boundaries for
motion-network cancellation, live-relative performance, or indexing
propagation, and it makes no deployment-readiness or live-publication claim.
