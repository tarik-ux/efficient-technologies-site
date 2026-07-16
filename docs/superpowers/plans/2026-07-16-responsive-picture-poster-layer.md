# Responsive Picture Poster Layer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the failed CSS-on-video poster delivery with a responsive `<picture>` layer that improves portrait-mobile loading while preserving the visible video, scroll zooming, scene changes, functionality, and animation behavior.

**Architecture:** Reconstruct the frozen deploy commit into isolated baseline and candidate trees, lock and revalidate the already-qualified AVIF without re-encoding it, and build the candidate with one decorative `<picture>` immediately behind the unchanged world video. Structural, browser, visual, runtime, and Lighthouse gates produce a terminal `PROMOTE` or `REJECT`; only `PROMOTE` permits copying the exact candidate into authoritative source and the publish checkout.

**Tech Stack:** Static HTML/CSS, Node.js 24.11.1 built-ins, Windows PowerShell 5.1, FFmpeg/FFprobe 8.1.1, stable Chrome and Edge through the pinned Playwright module, Lighthouse 13.4.0, Git, GitHub CLI, GitHub Actions, and Cloudflare Pages.

## Global Constraints

- `C:\Users\tarik\Claude Projects\efficient-technologies\site` is the authoritative deploy source.
- `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site` is the versioned publish checkout on `agent/performance-without-motion-loss`.
- The isolated deploy base is exactly `b416b8113315c95c32d4674aa54769d90c562abd`; documentation commits above it are not part of either experiment tree.
- The fresh evidence root is exactly `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-v1`.
- `output/performance/2026-07-16/poster-mobile-crop-v2` is read-only predecessor evidence. Never overwrite, rerun, reclassify, or promote it.
- Do not run another crop or AVIF encoding ladder.
- Reuse the selected AVIF byte-exactly: 38,457 bytes, SHA-256 `9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49`, 385x768, AV1/AVIF, yuv420p, one frame.
- Revalidate source quality at SSIM `0.990950` and average PSNR `44.597879 dB` against the locked `crop=385:768:991:0` reference.
- The exact selection condition is `(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)`.
- Keep `assets/city-poster-v20260714.webp` byte-exact as the fallback for desktop, landscape, wider portrait, unsupported AVIF, and general fallback.
- Keep `js/main.js`, `js/ambient.js`, every MP4, every animation value and keyframe, video attributes, scroll behavior, preloader behavior, reduced-motion behavior, Save Data behavior, 2G behavior, and low-power behavior byte-exact.
- Do not add a fade, opacity transition, runtime branch, package manager, dependency, build step, analytics event, hidden copy, interaction, or brand value.
- The picture is decorative: `aria-hidden="true"` on `<picture>` and `alt=""` on its fallback `<img>`.
- The world video has no `poster` attribute after implementation; every other video attribute remains exact.
- The public stylesheet revision advances from `3` to `4`; the token revision remains `3`.
- The isolated browser session is one-shot. A terminal failure writes `REJECT` and stops before Lighthouse.
- Local Lighthouse uses version 13.4.0, three alternating first-run mobile baseline/candidate pairs, no retries, no discarded reports, and no best-run substitution.
- Every candidate mobile Lighthouse run must have performance score at least 0.90, simulated LCP at most 2500 ms, CLS at most 0.02, one AVIF poster request, and zero legacy WebP poster requests.
- Candidate median mobile simulated LCP must be at most 2500 ms.
- PR #2 remains draft and production remains unchanged after any failed pre-merge gate.
- Before any push, verify that the active GitHub account is `tarik-ux` and repository permissions report `push:true`.
- Evidence stays outside deploy trees.
- Before the preview push, remove all `docs/superpowers` files from the branch tree so internal design and execution material is not published.
- PowerShell variables do not persist across separate shell invocations; rerun the current task's initialization block before each later PowerShell command block.

## File Map

### Evidence-only files to create

- `output/performance/2026-07-16/poster-picture-layer-v1/experiment-policy.json` — exact base, predecessor locks, asset facts, delivery strings, thresholds, and retry rules.
- `output/performance/2026-07-16/poster-picture-layer-v1/prepare-experiment.mjs` — verifies authority and predecessor inputs, records workspace boundaries, and reconstructs byte-exact baseline/candidate trees.
- `output/performance/2026-07-16/poster-picture-layer-v1/picture-poster-contract.mjs` — RED/GREEN structural and preservation contract.
- `output/performance/2026-07-16/poster-picture-layer-v1/verify-locked-asset.mjs` — copies and independently probes the locked AVIF and reference crop.
- `output/performance/2026-07-16/poster-picture-layer-v1/build-candidate.mjs` — performs only the approved HTML, CSS, route-revision, header, and asset transformations.
- `output/performance/2026-07-16/poster-picture-layer-v1/browser/picture-poster.playwright.js` — decode, selection, paint, visual capture, successful takeover, and failed-playback restoration gates.
- `output/performance/2026-07-16/poster-picture-layer-v1/browser/run-browser-gates.ps1` — source-locks and runs the custom browser suite plus the adapted 13-case/136-check matrix.
- `output/performance/2026-07-16/poster-picture-layer-v1/browser/finalize-browser.mjs` — parses metrics, verifies cleanup, hashes evidence, and records terminal browser status.
- `output/performance/2026-07-16/poster-picture-layer-v1/lighthouse/run-local-matrix.ps1` — runs six paired mobile reports plus one desktop baseline/candidate control pair.
- `output/performance/2026-07-16/poster-picture-layer-v1/lighthouse/summarize-local-matrix.mjs` — validates requests, metrics, transfer, ordering, and cleanup.
- `output/performance/2026-07-16/poster-picture-layer-v1/finalize-experiment.mjs` — writes terminal `final-verification.json` and `experiment-report.md`.

### Publish-checkout files to modify only after isolated `PROMOTE`

- `.github/scripts/performance-contract.test.mjs`
- `.github/performance/media-manifest.json`
- `404.html`
- `about/index.html`
- `blog/index.html`
- `blog/booking-automation-after-hours/index.html`
- `blog/business-process-automation-small-business/index.html`
- `blog/crm-automation-local-business/index.html`
- `blog/review-automation-local-seo/index.html`
- `blog/software-consulting-vs-in-house/index.html`
- `css/styles.css`
- `index.html`
- `_headers`
- `assets/city-poster-mobile-v20260716.avif`

### Authoritative source files to modify only after isolated `PROMOTE`

- The same twelve deploy artifacts under `C:\Users\tarik\Claude Projects\efficient-technologies\site`, excluding the two `.github` files.

### Release-internal files to delete before push

- `docs/superpowers/specs/2026-07-16-mobile-poster-crop-design.md`
- `docs/superpowers/specs/2026-07-16-responsive-picture-poster-layer-design.md`
- `docs/superpowers/plans/2026-07-16-portrait-mobile-poster-delivery.md`
- `docs/superpowers/plans/2026-07-16-responsive-picture-poster-layer.md`

---

### Task 1: Freeze the fresh experiment and prove the picture contract RED

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-v1/experiment-policy.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/prepare-experiment.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/picture-poster-contract.mjs`
- Reference without modification: `output/performance/2026-07-16/poster-mobile-crop-v2/prepare-base.mjs`
- Reference without modification: `output/performance/2026-07-16/poster-mobile-crop-v2/poster-mobile-contract.mjs`

**Interfaces:**

- Consumes: publish repository, frozen commit, predecessor locks, authoritative site, and clean Git state.
- Produces: `baseline/`, `candidate/`, `base-integrity.json`, `predecessor-integrity-before.json`, and expected `contract-red.json`.

- [ ] **Step 1: Verify local, remote, PR, and authentication boundaries**

Run:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$root = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v1'

if (Test-Path -LiteralPath $root) { throw "Fresh experiment root already exists: $root" }
git -C $repo status --short --branch
git -C $repo rev-parse HEAD
git -C $repo rev-parse origin/agent/performance-without-motion-loss
git -C $repo show -s --format='%H %s' b416b8113315c95c32d4674aa54769d90c562abd
gh auth status
$viewer = (gh api user --jq '.login').Trim()
$repoState = gh api repos/tarik-ux/efficient-technologies-site | ConvertFrom-Json
$pr = gh pr view 2 --repo tarik-ux/efficient-technologies-site --json headRefOid,isDraft,state,mergeStateStatus,url | ConvertFrom-Json

if ($viewer -ne 'tarik-ux') { throw "Active GitHub viewer is $viewer" }
if (-not $repoState.permissions.push) { throw 'Active GitHub account lacks push authority' }
if ($pr.state -ne 'OPEN' -or -not $pr.isDraft) { throw 'PR #2 is not open and draft' }
if ($pr.headRefOid -ne 'b416b8113315c95c32d4674aa54769d90c562abd') { throw "Remote PR head moved to $($pr.headRefOid)" }
```

Expected: the worktree is clean, local HEAD contains only documentation above `b416b81`, remote and PR head remain exactly `b416b81`, active account is `tarik-ux`, and `push:true`.

- [ ] **Step 2: Create the immutable experiment policy**

Create the fresh root first:

```powershell
New-Item -ItemType Directory -Path $root -ErrorAction Stop | Out-Null
```

Create `experiment-policy.json` with exactly:

```json
{
  "schema": "efficient-technologies/poster-picture-layer-v1-policy-v1",
  "definedBeforeCandidateBuild": true,
  "baseCommit": "b416b8113315c95c32d4674aa54769d90c562abd",
  "predecessor": {
    "relativeRoot": "output/performance/2026-07-16/poster-mobile-crop-v2",
    "terminalDecision": "REJECT",
    "browserEvidenceDigestSha256": "19541918e330cbab7295afb62055f7cc690d2c107a7d6788b746ee365373c3eb",
    "browserEvidenceLockSha256": "2aa267887cdaff9d92559a57c6ec9c68c99d1bcf87a26349ecb61e566c50b887",
    "finalVerificationSha256": "8a1b53fdd415d003d84c39458f00149e27cb8b1025a5320715395b6ca2733d04",
    "task4ReportSha256": "c5af4c70e99a6454926e95337b79a6f2b959bec59cbbe2aab460a6d3a9a1d32c",
    "selectionSha256": "16d302f2250667651bbcbe5bf1e5741ae7e45f36c3f47e416bc18b8ab118afea",
    "mechanicalDecisionSha256": "87291ab3b021c736c08d7cbf32e26176c22bfd3a5511a16148f18529fce495e8"
  },
  "fallbackPoster": {
    "relativePath": "assets/city-poster-v20260714.webp",
    "bytes": 120376,
    "sha256": "098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb",
    "width": 1376,
    "height": 768
  },
  "lockedPortraitAsset": {
    "predecessorRelativePath": "ladder/crf18-speed4/city-poster-mobile-v20260716-crf18.avif",
    "deployRelativePath": "assets/city-poster-mobile-v20260716.avif",
    "bytes": 38457,
    "sha256": "9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49",
    "crf": 18,
    "cpuUsed": 4,
    "width": 385,
    "height": 768,
    "codec": "av1",
    "containerBrand": "avif",
    "pixelFormat": "yuv420p",
    "frameCount": 1,
    "ssimAll": 0.99095,
    "psnrAverageDb": 44.597879
  },
  "referenceCrop": {
    "predecessorRelativePath": "reference/city-poster-mobile-crop.png",
    "bytes": 296533,
    "sha256": "234327ea09431f134565fcbc3abe31ced1e7212994d4d8b240b900be47def499",
    "filter": "crop=385:768:991:0",
    "width": 385,
    "height": 768
  },
  "delivery": {
    "media": "(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)",
    "stylesRevisionBefore": "3",
    "stylesRevisionAfter": "4",
    "tokensRevision": "3",
    "noOpacityTransition": true,
    "javascriptChangesAllowed": false
  },
  "browserThresholds": {
    "minimumRenderedSsimAll": 0.98,
    "minimumRenderedPsnrAverageDb": 35,
    "posterSelectionCaseCount": 5,
    "acceptedBehaviorCaseCount": 13,
    "acceptedBehaviorCheckCount": 136
  },
  "lighthouse": {
    "version": "13.4.0",
    "mobilePairCount": 3,
    "minimumPerformanceScore": 0.9,
    "maximumSimulatedLcpMs": 2500,
    "maximumMedianSimulatedLcpMs": 2500,
    "maximumCls": 0.02,
    "retryPolicy": "none",
    "discardedReportsAllowed": 0
  }
}
```

- [ ] **Step 3: Adapt the exact base reconstruction**

Copy the predecessor reconstruction script, then change only the experiment schema/root names and add predecessor input locking:

```powershell
Copy-Item -LiteralPath (Join-Path $project 'output\performance\2026-07-16\poster-mobile-crop-v2\prepare-base.mjs') `
  -Destination (Join-Path $root 'prepare-experiment.mjs') -ErrorAction Stop
```

Use `apply_patch` so the adapted script contains:

```js
const predecessor = path.join(project, 'output', 'performance', '2026-07-16', 'poster-mobile-crop-v2');
const policyPath = path.join(root, 'experiment-policy.json');
const authorityCommit = 'b416b8113315c95c32d4674aa54769d90c562abd';

const lockedInputs = [
  ['browser/browser-evidence-lock.json', '2aa267887cdaff9d92559a57c6ec9c68c99d1bcf87a26349ecb61e566c50b887'],
  ['browser/final-verification.json', '8a1b53fdd415d003d84c39458f00149e27cb8b1025a5320715395b6ca2733d04'],
  ['control/sdd/task-4-report.md', 'c5af4c70e99a6454926e95337b79a6f2b959bec59cbbe2aab460a6d3a9a1d32c'],
  ['ladder/selection.json', '16d302f2250667651bbcbe5bf1e5741ae7e45f36c3f47e416bc18b8ab118afea'],
  ['ladder/mechanical-decision.json', '87291ab3b021c736c08d7cbf32e26176c22bfd3a5511a16148f18529fce495e8'],
  ['reference/city-poster-mobile-crop.png', '234327ea09431f134565fcbc3abe31ced1e7212994d4d8b240b900be47def499'],
  ['ladder/crf18-speed4/city-poster-mobile-v20260716-crf18.avif', '9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49'],
];
```

Require every locked input to exist and hash exactly. Record a complete predecessor tree snapshot before reconstruction, excluding nothing. Preserve the predecessor script's `git -c core.autocrlf=false archive` command and 47-blob verification.

Run:

```powershell
node (Join-Path $root 'prepare-experiment.mjs')
```

Expected: 47 exact files in both `baseline/` and `candidate/`, no `.git`, `base-integrity.json` GREEN, and the predecessor snapshot recorded.

- [ ] **Step 4: Create the picture-layer contract**

Copy the predecessor contract as a helper base, remove every ladder-generation assertion, and replace the failed delivery constants with:

```js
const oldWorldRule = '.world-video{position:fixed;inset:0;width:100%;height:100%;object-fit:cover;object-position:center right;z-index:0;pointer-events:none;filter:saturate(1.05);}';
const newPictureRule = '.world-poster{position:fixed;inset:0;z-index:0;display:block;overflow:hidden;pointer-events:none;background:var(--et-void);}';
const newPictureImageRule = '.world-poster>img{width:100%;height:100%;display:block;object-fit:cover;object-position:center right;filter:saturate(1.05);}';
const newWorldRule = '.world-video{position:fixed;inset:0;width:100%;height:100%;object-fit:cover;object-position:center right;z-index:0;pointer-events:none;filter:saturate(1.05);opacity:0;}';
const videoOnRule = 'body.video-on .world-video{opacity:1;}';
const expectedCssReplacement = [newPictureRule, newPictureImageRule, newWorldRule, videoOnRule].join('\n');

const oldVideo = '<video id="world-video" class="world-video" muted loop playsinline preload="none" poster="assets/city-poster-v20260714.webp" data-src="assets/video/city-loop-v20260714.mp4" aria-hidden="true"></video>';
const newSceneMarkup = `<picture id="world-poster" class="world-poster" aria-hidden="true">
  <source
    media="(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)"
    type="image/avif"
    srcset="assets/city-poster-mobile-v20260716.avif">
  <img
    src="assets/city-poster-v20260714.webp"
    alt=""
    fetchpriority="high">
</picture>
<video id="world-video" class="world-video" muted loop playsinline preload="none" data-src="assets/video/city-loop-v20260714.mp4" aria-hidden="true"></video>`;
```

Keep the exact linked-route list, expected added path, expected eleven modified deploy paths, header block, style revisions, runtime/font/video preservation list, and LF-normalized inline-CSS equality helpers from the predecessor contract.

The new contract must include these check identifiers:

```js
[
  'policy.exact',
  'predecessor.locked-inputs-exact',
  'base.integrity-green',
  'candidate.diff-scope-exact',
  'candidate.css-exact-transform',
  'candidate.picture-css-exact',
  'candidate.no-opacity-transition',
  'candidate.index-exact-transform',
  'candidate.picture-markup-exact',
  'candidate.picture-accessibility-exact',
  'candidate.video-poster-removed-only',
  'candidate.dom-order-exact',
  'candidate.inline-css-equality',
  'candidate.style-revisions-3-4',
  'candidate.route-revisions-exact',
  'candidate.headers-exact-transform',
  'candidate.selected-asset-exact',
  'candidate.fallback-webp-retained-exact',
  'candidate.runtime-font-video-preserved',
  'candidate.copy-seo-brand-preserved'
]
```

- [ ] **Step 5: Prove the unchanged candidate is RED for implementation reasons**

Run:

```powershell
node (Join-Path $root 'picture-poster-contract.mjs') --output contract-red.json
if ($LASTEXITCODE -eq 0) { throw 'Unchanged candidate unexpectedly passed the picture contract' }
```

Expected failed IDs:

```text
candidate.diff-scope-exact
candidate.css-exact-transform
candidate.picture-css-exact
candidate.index-exact-transform
candidate.picture-markup-exact
candidate.picture-accessibility-exact
candidate.video-poster-removed-only
candidate.dom-order-exact
candidate.style-revisions-3-4
candidate.route-revisions-exact
candidate.headers-exact-transform
candidate.selected-asset-exact
```

Every policy, predecessor, base, fallback-WebP, runtime, MP4, copy, SEO/GEO, and brand-preservation check must already pass.

- [ ] **Step 6: Close Task 1 without tracked mutation**

Run `git status --short --branch` in the publish checkout. Expected: clean, ahead only by documentation commits, with no deploy-file mutation.

---

### Task 2: Revalidate the locked AVIF, build the isolated candidate, and turn the contract GREEN

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-v1/verify-locked-asset.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/locked/city-poster-mobile-v20260716.avif`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/locked/city-poster-mobile-crop.png`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/locked-asset-verification.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/build-candidate.mjs`
- Modify only: `output/performance/2026-07-16/poster-picture-layer-v1/candidate/*`

**Interfaces:**

- Consumes: fresh baseline/candidate trees, exact predecessor AVIF/reference, and experiment policy.
- Produces: independently verified locked inputs and an exact candidate with one added and eleven modified paths.

- [ ] **Step 1: Write the locked-asset verifier before copying**

Initialize:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$root = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v1'
```

Create `verify-locked-asset.mjs` with the predecessor contract's `sha256`, `mediaProbe`, and FFmpeg quality helpers. Use these exact inputs:

```js
const expected = {
  asset: {
    bytes: 38457,
    sha256: '9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49',
    codecName: 'av1',
    width: 385,
    height: 768,
    pixelFormat: 'yuv420p',
    frameCount: 1,
    majorBrand: 'avif',
    formatTagKeys: ['compatible_brands', 'major_brand', 'minor_version'],
    streamTags: { title: 'Color' },
  },
  reference: {
    bytes: 296533,
    sha256: '234327ea09431f134565fcbc3abe31ced1e7212994d4d8b240b900be47def499',
  },
  quality: {
    minimumSsimAll: 0.98,
    minimumPsnrAverageDb: 35,
    recordedSsimAll: 0.99095,
    recordedPsnrAverageDb: 44.597879,
    tolerance: 0.0000005,
  },
};
```

The verifier must:

1. support default copy-and-verify mode and `--verify-only`;
2. in default mode, refuse existing `locked/` outputs and copy with `COPYFILE_EXCL`;
3. in `--verify-only` mode, refuse missing outputs and perform no write;
4. verify bytes and SHA-256 before and after copying;
5. run FFprobe with `-count_frames -show_streams -show_format -show_chapters`;
6. reject extra metadata or chapters;
7. run independent SSIM and PSNR against the locked PNG;
8. require measurements to match the recorded values within `0.0000005`; and
9. write `locked-asset-verification.json` only after every gate passes in default mode.

The written JSON interface is exact:

```json
{
  "passed": true,
  "asset": {
    "bytes": 38457,
    "sha256": "9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49"
  },
  "probe": {
    "codecName": "av1",
    "width": 385,
    "height": 768,
    "pixelFormat": "yuv420p",
    "frameCount": 1,
    "formatTags": {
      "major_brand": "avif",
      "minor_version": "0",
      "compatible_brands": "avifmif1miafMA1B"
    },
    "streamTags": {
      "title": "Color"
    },
    "chapterCount": 0
  },
  "quality": {
    "ssimAll": 0.99095,
    "psnrAverageDb": 44.597879
  }
}
```

- [ ] **Step 2: Run the verifier once**

```powershell
node (Join-Path $root 'verify-locked-asset.mjs')
if ($LASTEXITCODE -ne 0) { throw 'Locked AVIF revalidation failed; preserve the exact error and stop' }
```

Expected: exact asset and reference hashes, one AV1 frame, AVIF brand, yuv420p, 385x768, exact metadata, SSIM `0.990950`, and PSNR `44.597879`.

- [ ] **Step 3: Write the deterministic candidate builder**

Use the predecessor builder's tree-map, containment, exact-array, normalization, and `replaceExactlyOnce` helpers. Replace its transformation constants with:

```js
const oldWorldRule = '.world-video{position:fixed;inset:0;width:100%;height:100%;object-fit:cover;object-position:center right;z-index:0;pointer-events:none;filter:saturate(1.05);}';
const replacementRules = [
  '.world-poster{position:fixed;inset:0;z-index:0;display:block;overflow:hidden;pointer-events:none;background:var(--et-void);}',
  '.world-poster>img{width:100%;height:100%;display:block;object-fit:cover;object-position:center right;filter:saturate(1.05);}',
  '.world-video{position:fixed;inset:0;width:100%;height:100%;object-fit:cover;object-position:center right;z-index:0;pointer-events:none;filter:saturate(1.05);opacity:0;}',
  'body.video-on .world-video{opacity:1;}',
].join('\n');

const oldVideo = '<video id="world-video" class="world-video" muted loop playsinline preload="none" poster="assets/city-poster-v20260714.webp" data-src="assets/video/city-loop-v20260714.mp4" aria-hidden="true"></video>';
const newSceneMarkup = `<picture id="world-poster" class="world-poster" aria-hidden="true">
  <source
    media="(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)"
    type="image/avif"
    srcset="assets/city-poster-mobile-v20260716.avif">
  <img
    src="assets/city-poster-v20260714.webp"
    alt=""
    fetchpriority="high">
</picture>
<video id="world-video" class="world-video" muted loop playsinline preload="none" data-src="assets/video/city-loop-v20260714.mp4" aria-hidden="true"></video>`;
```

Apply exactly:

1. `oldWorldRule` to `replacementRules` once in `css/styles.css`;
2. homepage marked style to token revision `3`, style revision `4`, normalized tokens, one LF, normalized transformed CSS;
3. `oldVideo` to `newSceneMarkup` once;
4. `/css/styles.css?v=3` to `?v=4` once in each of the eight linked routes;
5. one immutable AVIF header block immediately after the legacy WebP block; and
6. the locked AVIF to `candidate/assets/city-poster-mobile-v20260716.avif`.

The builder must refuse any pre-build drift, existing target asset, duplicate anchor, symlink, extra path, removed path, or output record.

- [ ] **Step 4: Build the candidate once**

```powershell
node (Join-Path $root 'build-candidate.mjs')
```

Expected path scope:

```json
{
  "added": ["assets/city-poster-mobile-v20260716.avif"],
  "removed": [],
  "modified": [
    "404.html",
    "_headers",
    "about/index.html",
    "blog/booking-automation-after-hours/index.html",
    "blog/business-process-automation-small-business/index.html",
    "blog/crm-automation-local-business/index.html",
    "blog/index.html",
    "blog/review-automation-local-seo/index.html",
    "blog/software-consulting-vs-in-house/index.html",
    "css/styles.css",
    "index.html"
  ]
}
```

- [ ] **Step 5: Prove the integrated contract GREEN twice**

```powershell
node (Join-Path $root 'picture-poster-contract.mjs') --output contract-green.json
if ($LASTEXITCODE -ne 0) { throw 'Integrated picture candidate contract failed' }
node (Join-Path $root 'picture-poster-contract.mjs') --output contract-independent-rerun.json
if ($LASTEXITCODE -ne 0) { throw 'Independent picture contract rerun failed' }
```

Compare both result payloads after excluding only timestamp and output filename. Every check must pass.

- [ ] **Step 6: Verify predecessor and Git remained unchanged**

Recompute the complete predecessor tree snapshot and require the same file count and digest as `predecessor-integrity-before.json`. Require the publish worktree clean.

---

### Task 3: Prove responsive paint, visual equivalence, video takeover, and behavior preservation

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-v1/browser/picture-poster.playwright.js`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/browser/run-browser-gates.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/browser/finalize-browser.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/browser/accepted-matrix/*`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/browser/candidate-successor-matrix/*`
- Reference without modification: `output/performance/2026-07-15/font-fraunces-family-subset-v11/browser-matrix/*`

**Interfaces:**

- Consumes: structurally GREEN baseline/candidate and the source-locked accepted browser harness.
- Produces: 2/2 decode, 5/5 selection, rendered comparison, four runtime cases, 13/13 and 136/136 compatibility, visual review, cleanup, and a browser evidence lock.

- [ ] **Step 1: Source-lock the accepted 13-case harness**

Initialize:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$root = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v1'
```

Inventory every file under:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-15\font-fraunces-family-subset-v11\browser-matrix
```

Record relative path, bytes, and SHA-256 in `accepted-harness-source-lock.json`. Copy the harness into `accepted-matrix/` and `candidate-successor-matrix/`.

For `accepted-matrix/`, change only roots, output paths, ports, and labels.

For `candidate-successor-matrix/`, make the same mechanical changes plus one-for-one poster observation replacements in cases 08-11:

- replace `video.poster`/poster-attribute visibility checks with `#world-poster img.currentSrc`;
- require picture and image bounds to cover the viewport;
- require world-video opacity `0` in media-disabled cases;
- keep every other predicate and total check count unchanged.

Write source/copy locks, unified diffs, and an adaptation-verification JSON. Require exactly 13 cases and 136 checks in both matrices.

- [ ] **Step 2: Define the five-case no-script selection table**

Use:

```js
const cases = [
  { id: 'portrait-412x823', width: 412, height: 823, expected: 'city-poster-mobile-v20260716.avif', naturalWidth: 385, naturalHeight: 768 },
  { id: 'portrait-390x844', width: 390, height: 844, expected: 'city-poster-mobile-v20260716.avif', naturalWidth: 385, naturalHeight: 768 },
  { id: 'portrait-wide-375x667', width: 375, height: 667, expected: 'city-poster-v20260714.webp', naturalWidth: 1376, naturalHeight: 768 },
  { id: 'landscape-844x390', width: 844, height: 390, expected: 'city-poster-v20260714.webp', naturalWidth: 1376, naturalHeight: 768 },
  { id: 'desktop-1440x900', width: 1440, height: 900, expected: 'city-poster-v20260714.webp', naturalWidth: 1376, naturalHeight: 768 },
];
```

Before the table, decode the AVIF in stable Chrome and Edge and require 385x768.

For every no-script case, collect:

```js
const picture = document.querySelector('picture#world-poster.world-poster');
const source = picture?.querySelector('source');
const image = picture?.querySelector('img');
const video = document.querySelector('video#world-video.world-video');
const chapter = document.querySelector('#chapter-layer');
const pictureStyle = picture ? getComputedStyle(picture) : null;
const imageStyle = image ? getComputedStyle(image) : null;
const videoStyle = video ? getComputedStyle(video) : null;
```

Assert:

1. exactly one picture, one source, one fallback image, and one world video;
2. exact media, type, srcset, fallback src, empty alt, `fetchpriority="high"`, and `aria-hidden="true"`;
3. `image.currentSrc` ends with the expected filename;
4. `image.complete`, natural dimensions, and viewport-covering bounds are correct;
5. picture is fixed, `z-index:0`, pointer-events none, and viewport-covering;
6. image has `object-fit:cover`, right/center positioning, and `saturate(1.05)`;
7. world-video opacity is `0`, has no poster attribute, and retains every other baseline attribute;
8. DOM order is picture, world video, chapter layer;
9. exactly one expected poster request, zero forbidden poster requests, and zero MP4 requests; and
10. zero failed requests, console errors, or page errors.

- [ ] **Step 3: Capture rendered baseline and candidate surfaces**

At 412x823 with JavaScript disabled:

- baseline scene selector: `video.world-video`;
- candidate scene selector: `picture.world-poster`;
- full overlay screenshot: normal page;
- isolated scene screenshot: temporarily hide every body child except the selected scene element;
- overlay-only screenshot: hide the selected scene element.

Require:

- baseline/candidate isolated scene SSIM `>= 0.98`;
- average PSNR `>= 35 dB`;
- overlay-only screenshots have identical SHA-256;
- nav, hero, preloader, text, button, and scene element bounds match;
- no blank frame, seam, stretch, tofu, right-edge change, or control change in native-scale inspection.

Create `visual-review-request.json` with image paths and hashes. Record controller review and independent reviewer review in `visual-review.json`; both must approve every boolean.

- [ ] **Step 4: Prove four runtime branches**

Use these definitions:

```js
const runtimeCases = [
  { id: 'natural-mobile-low-power', width: 412, height: 823, overrideLowPower: false, rejectPlay: false, expectMp4: false, expectedPoster: 'city-poster-mobile-v20260716.avif' },
  { id: 'synthetic-mobile-normal-power', width: 412, height: 823, overrideLowPower: true, rejectPlay: false, expectMp4: true, expectedPoster: 'city-poster-mobile-v20260716.avif' },
  { id: 'natural-desktop-takeover', width: 1440, height: 900, overrideLowPower: false, rejectPlay: false, expectMp4: true, expectedPoster: 'city-poster-v20260714.webp' },
  { id: 'desktop-play-rejection-restores-picture', width: 1440, height: 900, overrideLowPower: false, rejectPlay: true, expectMp4: true, expectedPoster: 'city-poster-v20260714.webp' },
];
```

Successful takeover must prove a real decoded frame, `body.video-on`, video opacity `1`, picture still mounted behind the video, unchanged attributes, unchanged MP4, and no blank interval.

The rejection case must instrument `HTMLMediaElement.prototype.play` before page code, return a rejected promise, observe `video-on` being removed, and require final video opacity `0`, visible picture, one poster request, attempted MP4 allowed, zero blank screenshot, and zero runtime exception outside the intentional rejection.

- [ ] **Step 5: Run the one-shot browser suite**

Use fresh ports `4351`, `4352`, and `4353`, a fresh profile root under the browser evidence directory, stable Chrome and Edge, and hidden background processes.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $root 'browser\run-browser-gates.ps1')
if ($LASTEXITCODE -ne 0) { throw 'Browser qualification failed; preserve REJECT and stop' }
```

Expected:

- AVIF decode: 2/2.
- No-script selection: 5/5.
- Rendered comparison: SSIM and PSNR pass.
- Runtime branches: 4/4.
- Accepted baseline matrix: 13/13 cases and 136/136 checks.
- Candidate successor matrix: 13/13 cases and 136/136 checks.
- Reduced motion, Save Data, 2G, and low-power request zero MP4s and show the picture.

- [ ] **Step 6: Finalize browser evidence and cleanup**

Require zero experiment-owned Chrome/Edge processes, zero occupied harness ports, no remaining temporary profiles, unchanged predecessor digest, unchanged site/publish deploy trees, and clean Git.

Any failure writes terminal browser `REJECT` and stops before Task 4. Success writes browser status `GREEN`, hashes all evidence, and authorizes Lighthouse.

---

### Task 4: Run paired Lighthouse and issue the isolated terminal decision

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-v1/lighthouse/matrix-plan.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/lighthouse/run-h2-lighthouse.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/lighthouse/run-local-matrix.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/lighthouse/summarize-local-matrix.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/lighthouse/reports/*`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/lighthouse/lighthouse-summary.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/finalize-experiment.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/final-verification.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v1/experiment-report.md`
- Reference without modification: `output/performance/2026-07-15/font-fraunces-family-subset-v11/lighthouse/*`

**Interfaces:**

- Consumes: browser GREEN evidence, exact baseline/candidate trees, and source-locked Lighthouse 13.4.0 harness.
- Produces: six mobile paired reports, one desktop control pair, metric/request summary, and terminal `PROMOTE` or `REJECT`.

- [ ] **Step 1: Source-lock and adapt the proven HTTP/2+Brotli harness**

Initialize:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$root = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v1'
```

Inventory and copy:

```text
run-h2-lighthouse.ps1
transport-server.mjs
ephemeral-cert.mjs
```

from the V11 Lighthouse evidence. Preserve server, certificate, Brotli, Chrome, profile, cleanup, request logging, and Lighthouse flags. Change only roots, schema names, labels, and ports.

Require:

```powershell
$lighthouseExe = 'C:\Users\tarik\AppData\Local\npm-cache\_npx\0bc745d1ba805cbe\node_modules\.bin\lighthouse.cmd'
$version = [string]::Join('', @(& $lighthouseExe --version)).Trim()
if ($LASTEXITCODE -ne 0 -or $version -cne '13.4.0') { throw "Unexpected Lighthouse version: $version" }
```

- [ ] **Step 2: Create the exact eight-run matrix**

Create `matrix-plan.json`:

```json
{
  "schema": "efficient-technologies/poster-picture-layer-v1-lighthouse-plan-v1",
  "lighthouseVersion": "13.4.0",
  "retryPolicy": "none",
  "discardedTrialCount": 0,
  "definitions": [
    { "sequence": 1, "side": "B", "site": "baseline", "formFactor": "mobile", "label": "01-baseline-mobile", "serverPort": 9601, "debugPort": 9701 },
    { "sequence": 2, "side": "C", "site": "candidate", "formFactor": "mobile", "label": "02-candidate-mobile", "serverPort": 9611, "debugPort": 9711 },
    { "sequence": 3, "side": "B", "site": "baseline", "formFactor": "mobile", "label": "03-baseline-mobile", "serverPort": 9602, "debugPort": 9702 },
    { "sequence": 4, "side": "C", "site": "candidate", "formFactor": "mobile", "label": "04-candidate-mobile", "serverPort": 9612, "debugPort": 9712 },
    { "sequence": 5, "side": "B", "site": "baseline", "formFactor": "mobile", "label": "05-baseline-mobile", "serverPort": 9603, "debugPort": 9703 },
    { "sequence": 6, "side": "C", "site": "candidate", "formFactor": "mobile", "label": "06-candidate-mobile", "serverPort": 9613, "debugPort": 9713 },
    { "sequence": 7, "side": "B", "site": "baseline", "formFactor": "desktop", "label": "07-baseline-desktop", "serverPort": 9621, "debugPort": 9721 },
    { "sequence": 8, "side": "C", "site": "candidate", "formFactor": "desktop", "label": "08-candidate-desktop", "serverPort": 9631, "debugPort": 9731 }
  ],
  "thresholds": {
    "candidateMobilePerRunLcpMaximumMs": 2500,
    "candidateMobileMedianLcpMaximumMs": 2500,
    "allCandidatePerformanceScoreMinimum": 90,
    "allCandidateClsMaximum": 0.02,
    "candidateDesktopLcpMaximumMs": 2500,
    "desktopCandidateTransferMaximumIncreaseBytes": 2048,
    "baselinePosterBytes": 120376,
    "candidatePosterBytes": 38457,
    "posterByteSaving": 81919
  }
}
```

- [ ] **Step 3: Run all eight reports once**

The runner must refuse existing report directories, occupied ports, existing profiles, wrong input hashes, non-GREEN browser evidence, or wrong order.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $root 'lighthouse\run-local-matrix.ps1')
if ($LASTEXITCODE -ne 0) { throw 'Local Lighthouse matrix failed; do not replace reports' }
```

Each trial records report SHA-256, request log, server PID, Chrome root/profile PIDs, metrics, request counts, and cleanup.

- [ ] **Step 4: Summarize mobile pairs and desktop control**

For each candidate mobile run require:

- performance score `>= 90`;
- simulated LCP `<= 2500`;
- CLS `<= 0.02`;
- exactly one `city-poster-mobile-v20260716.avif`;
- zero `city-poster-v20260714.webp`;
- AVIF resource size exactly `38457`;
- paired baseline WebP resource size exactly `120376`;
- paired poster saving exactly `81919`;
- candidate total transfer lower than paired baseline; and
- no failed request or cleanup failure.

Require numeric candidate mobile median LCP `<= 2500`.

For the desktop control pair require:

- candidate performance score `>= 90`;
- candidate LCP `<= 2500`;
- candidate CLS `<= 0.02`;
- exactly one legacy WebP and zero AVIF requests on both sides;
- candidate transfer no more than 2048 bytes above baseline; and
- cleanup exact.

- [ ] **Step 5: Write the terminal experiment decision**

`finalize-experiment.mjs` must verify hashes for:

- policy;
- predecessor locks;
- locked AVIF/reference verification;
- base reconstruction;
- RED and GREEN structural contracts;
- candidate build;
- browser evidence lock and visual reviews;
- all eight Lighthouse reports and summary; and
- final predecessor/site/publish/Git boundaries.

Write:

```json
{
  "decision": "PROMOTE",
  "allGatesPassed": true,
  "authority": "Exact isolated candidate may be copied into authoritative site and publish checkout"
}
```

only when every gate is GREEN. Otherwise write `REJECT`, preserve the exact first failure, and authorize no project mutation.

- [ ] **Step 6: Enforce the terminal branch**

```powershell
$verification = Get-Content -Raw -LiteralPath (Join-Path $root 'final-verification.json') | ConvertFrom-Json
if ($verification.decision -eq 'REJECT') { Write-Output 'TERMINAL_REJECT'; exit 2 }
if ($verification.decision -ne 'PROMOTE' -or -not $verification.allGatesPassed) {
  throw 'Isolated experiment did not produce a consistent PROMOTE'
}
```

---

### Task 5: Pin the tracked deployment contract and prove it RED

**Prerequisite:** isolated `final-verification.json` is exact `PROMOTE`.

**Files:**

- Modify: `.github/scripts/performance-contract.test.mjs`
- Create evidence helper: `output/performance/2026-07-16/poster-picture-layer-v1/pin-tracked-contract.mjs`
- Test without modifying: current publish and authoritative source deploy trees

**Interfaces:**

- Consumes: exact qualified CSS and locked asset facts.
- Produces: one tracked test-only commit whose failures name only the missing picture-layer implementation.

- [ ] **Step 1: Add exact release constants**

Initialize:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$root = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v1'
```

Patch:

```js
const release = '20260714';
const posterRelease = '20260716';
const frauncesRelease = '20260715';
const tokensRevision = '3';
const stylesRevision = '4';
const mobilePoster = `assets/city-poster-mobile-v${posterRelease}.avif`;
```

Append to `expectedImages`:

```js
{ logicalId: 'poster-mobile', output: mobilePoster, width: 385, height: 768 },
```

- [ ] **Step 2: Pin the exact candidate CSS hash**

Create `pin-tracked-contract.mjs`:

```js
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const project = 'C:/Users/tarik/Claude Projects/efficient-technologies';
const repo = path.join(project, 'output/publish/efficient-technologies-site');
const candidateCss = path.join(project, 'output/performance/2026-07-16/poster-picture-layer-v1/candidate/css/styles.css');
const testPath = path.join(repo, '.github/scripts/performance-contract.test.mjs');
const normalizeLf = value => value.replace(/\r\n?/g, '\n');
const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
const replaceExactlyOnce = (value, before, after, label) => {
  const count = value.split(before).length - 1;
  if (count !== 1) throw new Error(`${label} anchor count was ${count}`);
  return value.replace(before, after);
};

const qualifiedCssSha256 = sha256(normalizeLf(fs.readFileSync(candidateCss, 'utf8')));
let source = fs.readFileSync(testPath, 'utf8');
source = replaceExactlyOnce(
  source,
  "'css/styles.css': '79ebe674c1ca170fc8f9eca873fdba8b8767b9cf0e9e2a5d480f292cf04e2ae2'",
  `'css/styles.css': '${qualifiedCssSha256}'`,
  'CSS hash',
);
fs.writeFileSync(testPath, source, 'utf8');
process.stdout.write(`${JSON.stringify({ qualifiedCssSha256 })}\n`);
```

Run once and independently recompute the literal.

- [ ] **Step 3: Extend the existing manifest contract**

Change expected manifest release to `2026-07-16` and require:

```js
const mobileEntry = manifest.images.find((item) => item.logicalId === 'poster-mobile');
assert.ok(mobileEntry, 'manifest missing poster-mobile');
assert.equal(mobileEntry.optimizedBytes, 38457);
assert.equal(mobileEntry.optimizedSha256, '9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49');
assert.equal(mobileEntry.ssim, 0.99095);
assert.equal(mobileEntry.psnrAverageDb, 44.597879);
assert.deepEqual(mobileEntry.crop, { x: 991, y: 0, width: 385, height: 768 });
assert.deepEqual(mobileEntry.probe, {
  codec: 'av1',
  pixelFormat: 'yuv420p',
  width: 385,
  height: 768,
  frameCount: 1,
});
assert.deepEqual(mobileEntry.metadata, {
  formatTagKeys: ['compatible_brands', 'major_brand', 'minor_version'],
  streamTags: { title: 'Color' },
});
assert.equal(mobileEntry.encoding, 'libaom-av1 allintra still-picture=1 cpu-used=4 crf=18 yuv420p deterministic-single-thread');
```

- [ ] **Step 4: Extend poster, geometry, CSS, and revision assertions**

In the image-geometry test, allow exactly one dimensionless decorative image:

```js
const decorativePoster = file === 'index.html'
  && attr(tag, 'src') === `assets/city-poster-v${release}.webp`
  && attr(tag, 'alt') === '';
if (decorativePoster) {
  assert.equal(attr(tag, 'width'), null);
  assert.equal(attr(tag, 'height'), null);
  continue;
}
```

Replace the source/poster assertions with exact picture delivery:

```js
const sourceTags = tags(home, 'source');
assert.equal(sourceTags.length, 1);
assert.equal(attr(sourceTags[0], 'media'), '(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)');
assert.equal(attr(sourceTags[0], 'type'), 'image/avif');
assert.equal(attr(sourceTags[0], 'srcset'), mobilePoster);

const pictures = tags(home, 'picture');
assert.equal(pictures.length, 1);
assert.equal(attr(pictures[0], 'id'), 'world-poster');
assert.equal(attr(pictures[0], 'class'), 'world-poster');
assert.equal(attr(pictures[0], 'aria-hidden'), 'true');

const world = videos.find((tag) => attr(tag, 'id') === 'world-video');
assert.equal(attr(world, 'poster'), null);
```

Require CSS:

```js
assert.match(cssRule(css, '.world-poster'), /position:fixed/);
assert.match(cssRule(css, '.world-poster'), /pointer-events:none/);
assert.match(cssRule(css, '.world-poster>img'), /object-fit:cover/);
assert.match(cssRule(css, '.world-poster>img'), /object-position:center right/);
assert.match(cssRule(css, '.world-video'), /opacity:0/);
assert.doesNotMatch(cssRule(css, '.world-video'), /transition/i);
assert.equal(cssRule(css, 'body.video-on .world-video').replace(/\s+/g, ''), 'opacity:1;');
```

Use `stylesRevision` in homepage and linked-route assertions. The existing immutable-header loop must include the new expected image.

- [ ] **Step 5: Prove RED on publish and source**

Run the performance contract against both current trees. Allowed failing test names:

```text
versioned media manifest records passing, byte-accurate assets
poster-first media declarations cannot fetch before capability activation
homepage embeds exact revisioned CSS while other routes retain linked styles
immutable cache policy applies only to release-versioned assets
```

Any syntax error, unrelated failure, or different failing test name stops the task.

- [ ] **Step 6: Commit the RED contract only**

```powershell
git -C $repo add -- .github/scripts/performance-contract.test.mjs
git -C $repo diff --cached --check
git -C $repo diff --cached --name-only
git -C $repo commit -m "test: pin responsive picture poster delivery"
```

Expected committed path count: one. Do not push.

---

### Task 6: Promote the exact candidate locally and turn all gates GREEN

**Files:**

- Create evidence helper: `output/performance/2026-07-16/poster-picture-layer-v1/promote-candidate.mjs`
- Create evidence helper: `output/performance/2026-07-16/poster-picture-layer-v1/materialize-manifest.mjs`
- Modify the twelve approved deploy artifacts in `site/` and the publish checkout
- Modify in publish only: `.github/performance/media-manifest.json`
- Delete the four release-internal documentation files

**Interfaces:**

- Consumes: terminal `PROMOTE`, exact candidate tree, and tracked RED contract.
- Produces: source/publish parity, performance 29/29, SEO/GEO 8/8, repeated browser GREEN, review approval, and a clean implementation commit.

- [ ] **Step 1: Revalidate promotion immediately before mutation**

Initialize:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$root = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v1'
```

Re-run the structural contract, locked-asset verifier in read-only verification mode, browser evidence hash check, Lighthouse summary check, predecessor digest, and final-verification consistency. Any mismatch revokes `PROMOTE`.

- [ ] **Step 2: Copy only the approved deploy paths**

Use:

```js
const modifiedDeployPaths = [
  '404.html',
  'about/index.html',
  'blog/index.html',
  'blog/booking-automation-after-hours/index.html',
  'blog/business-process-automation-small-business/index.html',
  'blog/crm-automation-local-business/index.html',
  'blog/review-automation-local-seo/index.html',
  'blog/software-consulting-vs-in-house/index.html',
  'css/styles.css',
  'index.html',
  '_headers',
];
const addedDeployPath = 'assets/city-poster-mobile-v20260716.avif';
```

`promote-candidate.mjs` must refuse symlinks, paths outside the candidate, destination escapes, source drift, extra paths, and pre-copy Git deploy changes. Copy each artifact byte-exactly into both destination trees and verify 12/12 parity.

- [ ] **Step 3: Materialize the manifest from verified evidence**

Create:

```js
import fs from 'node:fs';
import path from 'node:path';

const project = 'C:/Users/tarik/Claude Projects/efficient-technologies';
const repo = path.join(project, 'output/publish/efficient-technologies-site');
const root = path.join(project, 'output/performance/2026-07-16/poster-picture-layer-v1');
const manifestPath = path.join(repo, '.github/performance/media-manifest.json');
const verification = JSON.parse(fs.readFileSync(path.join(root, 'locked-asset-verification.json'), 'utf8'));
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

if (!verification.passed) throw new Error('Locked asset verification is not GREEN');

const mobileEntry = {
  logicalId: 'poster-mobile',
  source: 'assets/city-poster-v20260714.webp',
  output: 'assets/city-poster-mobile-v20260716.avif',
  sourceSha256: '098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb',
  optimizedSha256: verification.asset.sha256,
  sourceBytes: 120376,
  optimizedBytes: verification.asset.bytes,
  width: verification.probe.width,
  height: verification.probe.height,
  ssim: verification.quality.ssimAll,
  psnrAverageDb: verification.quality.psnrAverageDb,
  crop: { x: 991, y: 0, width: 385, height: 768 },
  probe: {
    codec: verification.probe.codecName,
    pixelFormat: verification.probe.pixelFormat,
    width: verification.probe.width,
    height: verification.probe.height,
    frameCount: verification.probe.frameCount,
  },
  metadata: {
    formatTagKeys: Object.keys(verification.probe.formatTags).sort(),
    streamTags: verification.probe.streamTags,
  },
  visualReview: 'approved',
  encoding: 'libaom-av1 allintra still-picture=1 cpu-used=4 crf=18 yuv420p deterministic-single-thread',
};

manifest.release = '2026-07-16';
manifest.generatedAt = new Date().toISOString();
manifest.images = manifest.images.filter(item => item.logicalId !== 'poster-mobile');
manifest.images.push(mobileEntry);
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
```

Run once, then independently compare every field to locked evidence and deployed bytes.

- [ ] **Step 4: Turn both static contract suites GREEN**

Run in publish:

```powershell
node --test .github/scripts/performance-contract.test.mjs
node --test .github/scripts/seo-geo.test.mjs
```

Run against authoritative source using `SITE_ROOT` and `CONTRACT_ROOT`.

Expected for both trees:

```text
performance: 29/29
SEO/GEO: 8/8
```

- [ ] **Step 5: Re-run local browser gates against promoted publish**

Run the custom selection/visual/runtime suite and the candidate successor 13-case/136-check matrix against the promoted publish tree. Require the same results as the isolated candidate and exact 12-artifact parity with `site/`.

- [ ] **Step 6: Review implementation scope**

Invoke `superpowers:requesting-code-review` against:

- approved design;
- this plan;
- isolated evidence and terminal decision;
- tracked RED contract commit;
- complete deploy diff from `b416b81`; and
- source/publish parity record.

Resolve only in-scope findings and rerun affected gates.

- [ ] **Step 7: Remove internal documentation from the deploy branch**

Delete the four files listed under “Release-internal files to delete before push.” Require:

```powershell
git -C $repo rm -- `
  docs/superpowers/specs/2026-07-16-mobile-poster-crop-design.md `
  docs/superpowers/specs/2026-07-16-responsive-picture-poster-layer-design.md `
  docs/superpowers/plans/2026-07-16-portrait-mobile-poster-delivery.md `
  docs/superpowers/plans/2026-07-16-responsive-picture-poster-layer.md
$internalDocs = @(git -C $repo ls-files 'docs/superpowers/**')
if ($internalDocs.Count -ne 0) { throw "Internal documents remain tracked: $($internalDocs -join '; ')" }
```

This check is run after staging the deletions.

- [ ] **Step 8: Commit the implementation**

Stage only:

```text
.github/performance/media-manifest.json
404.html
about/index.html
blog/index.html
blog/booking-automation-after-hours/index.html
blog/business-process-automation-small-business/index.html
blog/crm-automation-local-business/index.html
blog/review-automation-local-seo/index.html
blog/software-consulting-vs-in-house/index.html
css/styles.css
index.html
_headers
assets/city-poster-mobile-v20260716.avif
the four documentation deletions
```

Run:

```powershell
git -C $repo diff --cached --check
git -C $repo diff --cached --stat
git -C $repo commit -m "perf: add responsive picture poster layer"
```

Do not push yet.

---

### Task 7: Verify a clean checkout, push once, and qualify the immutable preview

**Files:**

- Create evidence: `output/performance/2026-07-16/poster-picture-layer-v1/clean-checkout/*`
- Create evidence: `output/playwright/poster-picture-layer-preview-pr2-v1/*`
- Create evidence: `output/performance/2026-07-16/poster-picture-layer-preview-pr2-v1/*`
- Create: `output/playwright/poster-picture-layer-preview-pr2-v1/preview-route-header-poster-probe.mjs`
- Create: `output/playwright/poster-picture-layer-preview-pr2-v1/run-preview-browser.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-preview-pr2-v1/run-preview-lighthouse.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-preview-pr2-v1/run-preview-matrix.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-preview-pr2-v1/build-preview-summary.ps1`
- Reference without modification: `output/playwright/homepage-inline-preview-pr2-v11/*`
- Reference without modification: `output/performance/2026-07-15/homepage-inline-preview-pr2-v11/*`

**Interfaces:**

- Consumes: final local branch HEAD and exact qualified evidence.
- Produces: clean-checkout proof, one push, successful hosted checks, immutable preview URL, 63/63 delivery checks, browser/request proof, and six preview Lighthouse reports.

- [ ] **Step 1: Verify a clean archive before network mutation**

Initialize:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$root = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v1'
```

Archive HEAD into a fresh evidence directory:

```powershell
$clean = Join-Path $root 'clean-checkout'
if (Test-Path -LiteralPath $clean) { throw 'Clean-checkout evidence already exists' }
New-Item -ItemType Directory -Path $clean -ErrorAction Stop | Out-Null
git -C $repo archive --format=tar --output="$clean\head.tar" HEAD
if ($LASTEXITCODE -ne 0) { throw 'Clean archive failed' }
New-Item -ItemType Directory -Path "$clean\tree" -ErrorAction Stop | Out-Null
tar -xf "$clean\head.tar" -C "$clean\tree"
if ($LASTEXITCODE -ne 0) { throw 'Clean archive extraction failed' }
```

Run inside `clean-checkout/tree`:

```powershell
Push-Location "$clean\tree"
try {
node --test .github/scripts/performance-contract.test.mjs
if ($LASTEXITCODE -ne 0) { throw 'Clean performance contract failed' }
node --test .github/scripts/seo-geo.test.mjs
if ($LASTEXITCODE -ne 0) { throw 'Clean SEO/GEO contract failed' }
} finally {
  Pop-Location
}
```

Require 29/29 and 8/8, no `docs/superpowers`, exact asset/manifest/CSS/HTML hashes, and the complete browser suite against the clean tree.

- [ ] **Step 2: Recheck GitHub authority and exact remote base**

```powershell
$localHead = (git -C $repo rev-parse HEAD).Trim()
$remoteBefore = (git -C $repo rev-parse origin/agent/performance-without-motion-loss).Trim()
$viewer = (gh api user --jq '.login').Trim()
$repoState = gh api repos/tarik-ux/efficient-technologies-site | ConvertFrom-Json
if ($viewer -ne 'tarik-ux') { throw "Active GitHub viewer is $viewer" }
if (-not $repoState.permissions.push) { throw 'Active GitHub account lacks push authority' }
if ($remoteBefore -ne 'b416b8113315c95c32d4674aa54769d90c562abd') { throw "Remote branch moved to $remoteBefore" }
if (@(git -C $repo status --porcelain=v1).Count -ne 0) { throw 'Worktree is dirty' }
git -C $repo diff --check $remoteBefore..$localHead
```

- [ ] **Step 3: Push the qualified branch once**

```powershell
git -C $repo push origin agent/performance-without-motion-loss
if ($LASTEXITCODE -ne 0) { throw 'Push failed; preserve the exact error and stop' }
$remoteAfter = (git -C $repo ls-remote origin refs/heads/agent/performance-without-motion-loss).Split()[0]
if ($remoteAfter -ne $localHead) { throw 'Remote head does not equal qualified local head' }
```

Do not force-push, amend, or replace failed performance evidence.

- [ ] **Step 4: Wait for hosted checks on the exact SHA**

```powershell
gh pr checks 2 --repo tarik-ux/efficient-technologies-site --watch --interval 10
if ($LASTEXITCODE -ne 0) { throw 'Hosted PR checks failed' }
$pr = gh pr view 2 --repo tarik-ux/efficient-technologies-site --json headRefOid,isDraft,statusCheckRollup,url | ConvertFrom-Json
if ($pr.headRefOid -ne $localHead) { throw 'PR head is not the qualified SHA' }
$failed = @($pr.statusCheckRollup | Where-Object { $_.status -ne 'COMPLETED' -or $_.conclusion -ne 'SUCCESS' })
if ($failed.Count -ne 0) { throw 'Not every hosted check is successful' }
```

Require Performance contract, SEO and GEO validation, and Cloudflare Pages success.

- [ ] **Step 5: Derive the immutable Cloudflare preview**

Use:

```powershell
$cloudflare = @($pr.statusCheckRollup | Where-Object { $_.name -eq 'Cloudflare Pages' })
if ($cloudflare.Count -ne 1) { throw 'Expected exactly one Cloudflare Pages check' }
$deploymentId = [IO.Path]::GetFileName(([Uri]$cloudflare[0].detailsUrl).AbsolutePath)
if ($deploymentId -notmatch '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$') {
  throw "Unexpected Cloudflare deployment id '$deploymentId'"
}
$preview = "https://$($deploymentId.Split('-')[0]).efficient-technologies-site.pages.dev"
$response = Invoke-WebRequest -UseBasicParsing -MaximumRedirection 0 -Uri "$preview/"
if ([int]$response.StatusCode -ne 200) { throw 'Immutable preview root is unavailable' }
```

Record deployment ID, local/remote SHA, URL, headers, and check metadata.

- [ ] **Step 6: Run the 63-check preview delivery contract**

Source-lock `output/playwright/homepage-inline-preview-pr2-v11/preview-route-header-font-probe.mjs`.

Preserve its 43 checks, changing only style revision `3` to `4`. Add exactly 20 checks:

1. AVIF status 200;
2. AVIF `Content-Type` contains `image/avif`;
3. AVIF bytes 38,457;
4. AVIF SHA-256 exact;
5. AVIF `Content-Length` exact;
6. AVIF immutable one-year cache;
7. AVIF ETag present;
8. WebP status 200;
9. WebP content type contains `image/webp`;
10. WebP bytes 120,376;
11. WebP SHA-256 exact;
12. WebP immutable one-year cache;
13. WebP ETag present;
14. exact picture markup present;
15. world-video poster attribute absent;
16. exact picture/video CSS rules present;
17. old design path returns real 404;
18. old plan path returns real 404;
19. approved picture design path returns real 404; and
20. picture implementation-plan path returns real 404.

Expected: 63/63.

The adapted probe accepts:

```text
--origin <exact immutable https origin>
--head <40-character qualified SHA>
--output <absolute JSON path inside preview evidence>
```

Run:

```powershell
node "$project\output\playwright\poster-picture-layer-preview-pr2-v1\preview-route-header-poster-probe.mjs" `
  --origin $preview `
  --head $localHead `
  --output "$project\output\playwright\poster-picture-layer-preview-pr2-v1\preview-delivery.json"
if ($LASTEXITCODE -ne 0) { throw 'Preview delivery contract failed' }
```

- [ ] **Step 7: Run preview browser and request gates**

Against the immutable preview, run:

- five no-script selection cases;
- four runtime/takeover cases;
- 13-case/136-check matrix;
- mobile 412x823 request graph; and
- desktop 1440x900 no-script request graph.

Require AVIF exactly once and WebP zero times for selected portrait. Require WebP exactly once and AVIF zero times for desktop. Require unchanged video, scroll, chapter, overlay, and animation behavior.

Run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  "$project\output\playwright\poster-picture-layer-preview-pr2-v1\run-preview-browser.ps1" `
  -TargetUrl "$preview/"
if ($LASTEXITCODE -ne 0) { throw 'Preview browser qualification failed' }
```

Expected summary: selection 5/5, runtime 4/4, behavior 13/13 and 136/136, request graphs 2/2, cleanup PASS.

- [ ] **Step 8: Run six preview Lighthouse reports once**

Create three fresh mobile and three fresh desktop reports with Lighthouse 13.4.0, unique profiles and ports, and no retries.

Every mobile report:

- score `>= 90`;
- simulated LCP `<= 2500`;
- CLS `<= 0.02`;
- AVIF request exactly one;
- WebP request zero.

Mobile median LCP: `<= 2500`.

Every desktop report:

- score `>= 90`;
- simulated LCP `<= 2500`;
- CLS `<= 0.02`;
- total transfer `<= 4.5 MiB`;
- WebP request exactly one;
- AVIF request zero.

Require report hashes and exact cleanup.

`run-preview-matrix.ps1` invokes the source-locked single-run runner with labels:

```text
poster-picture-preview-mobile-1
poster-picture-preview-mobile-2
poster-picture-preview-mobile-3
poster-picture-preview-desktop-1
poster-picture-preview-desktop-2
poster-picture-preview-desktop-3
```

and debug ports `9801`, `9802`, `9803`, `9811`, `9812`, `9813`.

Run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  "$project\output\performance\2026-07-16\poster-picture-layer-preview-pr2-v1\run-preview-matrix.ps1" `
  -TargetUrl "$preview/"
if ($LASTEXITCODE -ne 0) { throw 'Preview Lighthouse matrix failed' }

powershell -NoProfile -ExecutionPolicy Bypass -File `
  "$project\output\performance\2026-07-16\poster-picture-layer-preview-pr2-v1\build-preview-summary.ps1"
if ($LASTEXITCODE -ne 0) { throw 'Preview Lighthouse summary failed' }
```

- [ ] **Step 9: Keep draft or mark ready**

Any failure leaves PR #2 draft and production unchanged.

Only after every preview gate passes:

```powershell
gh pr ready 2 --repo tarik-ux/efficient-technologies-site
```

Record the exact qualified head SHA and immutable preview URL.

---

### Task 8: Merge the qualified SHA, verify production, and revert on regression

**Files:**

- Create evidence: `output/playwright/poster-picture-layer-production-v1/*`
- Create evidence: `output/performance/2026-07-16/poster-picture-layer-production-v1/*`
- Create: `output/playwright/poster-picture-layer-production-v1/production-route-header-poster-probe.mjs`
- Create: `output/playwright/poster-picture-layer-production-v1/run-production-browser.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-production-v1/run-production-lighthouse.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-production-v1/run-production-matrix.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-production-v1/build-production-summary.ps1`
- No direct production file edits

**Interfaces:**

- Consumes: ready PR #2 at the exact preview-qualified SHA.
- Produces: squash merge, Cloudflare production deployment, production delivery/browser/Lighthouse proof, or a scoped rollback.

- [ ] **Step 1: Recheck exact SHA, checks, and merge authority**

Initialize:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
```

Require:

```powershell
$qualifiedHead = (git -C $repo rev-parse HEAD).Trim()
$pr = gh pr view 2 --repo tarik-ux/efficient-technologies-site --json headRefOid,isDraft,mergeStateStatus,statusCheckRollup | ConvertFrom-Json
if ($pr.headRefOid -ne $qualifiedHead) { throw 'PR head changed after preview qualification' }
if ($pr.isDraft) { throw 'PR is still draft' }
if ($pr.mergeStateStatus -notin @('CLEAN','HAS_HOOKS')) { throw "PR merge state is $($pr.mergeStateStatus)" }
$viewer = (gh api user --jq '.login').Trim()
$repoState = gh api repos/tarik-ux/efficient-technologies-site | ConvertFrom-Json
if ($viewer -ne 'tarik-ux') { throw "Active GitHub viewer is $viewer" }
if (-not $repoState.permissions.push) { throw 'No merge authority' }
```

Re-hash AVIF, WebP, CSS, index, and manifest against preview evidence.

- [ ] **Step 2: Squash-merge PR #2**

```powershell
gh pr merge 2 --repo tarik-ux/efficient-technologies-site --squash --delete-branch
if ($LASTEXITCODE -ne 0) { throw 'Merge failed; preserve the exact error and stop' }
$merged = gh pr view 2 --repo tarik-ux/efficient-technologies-site --json state,mergeCommit | ConvertFrom-Json
if ($merged.state -ne 'MERGED' -or -not $merged.mergeCommit.oid) { throw 'PR did not reach MERGED state' }
$mergeSha = $merged.mergeCommit.oid
```

- [ ] **Step 3: Wait for Cloudflare production deployment of the merge SHA**

Poll:

```powershell
$deadline = [DateTimeOffset]::UtcNow.AddMinutes(20)
$productionReady = $false
while (-not $productionReady) {
  if ([DateTimeOffset]::UtcNow -ge $deadline) { throw 'Production deployment did not complete within 20 minutes' }
  $checkRuns = gh api -H 'Accept: application/vnd.github+json' `
    "repos/tarik-ux/efficient-technologies-site/commits/$mergeSha/check-runs" | ConvertFrom-Json
  $cloudflare = @($checkRuns.check_runs | Where-Object { $_.name -eq 'Cloudflare Pages' })
  $terminalFailure = @($cloudflare | Where-Object {
    $_.conclusion -in @('failure','cancelled','timed_out','action_required')
  })
  if ($terminalFailure.Count -ne 0) { throw 'Production Cloudflare deployment failed' }
  $productionReady = $cloudflare.Count -eq 1 `
    -and $cloudflare[0].status -eq 'completed' `
    -and $cloudflare[0].conclusion -eq 'success'
  if (-not $productionReady) { Start-Sleep -Seconds 15 }
}
```

Report status at least once per minute while the loop is active.

- [ ] **Step 4: Run the production 63-check delivery contract**

Against `https://efficientautomate.com`, use the preview contract with these environment differences:

- production HTML must not send `x-robots-tag: noindex`;
- canonical URLs must use `https://efficientautomate.com`;
- all four documentation paths and the release-verification path return real 404s; and
- every asset byte count, SHA-256, MIME type, cache header, and ETag matches preview.

Require 63/63 plus the passing robots, sitemap, canonical, Open Graph, Twitter, JSON-LD, `llms.txt`, and `llms-full.txt` surfaces.

Run:

```powershell
node "$project\output\playwright\poster-picture-layer-production-v1\production-route-header-poster-probe.mjs" `
  --origin 'https://efficientautomate.com' `
  --head $mergeSha `
  --output "$project\output\playwright\poster-picture-layer-production-v1\production-delivery.json"
if ($LASTEXITCODE -ne 0) { throw 'Production delivery contract failed' }
```

- [ ] **Step 5: Run production browser and behavior smoke**

Run the five selection cases, four runtime cases, and 13-case/136-check matrix. Require the same request exclusivity, visual surface, video, chapter, scroll, and animation behavior as qualified preview.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  "$project\output\playwright\poster-picture-layer-production-v1\run-production-browser.ps1" `
  -TargetUrl 'https://efficientautomate.com/'
if ($LASTEXITCODE -ne 0) { throw 'Production browser qualification failed' }
```

- [ ] **Step 6: Run three production mobile Lighthouse reports once**

Use Lighthouse 13.4.0, fresh profiles, unique ports, and no replacement reports.

Every run:

- score `>= 90`;
- simulated LCP `<= 2500`;
- CLS `<= 0.02`;
- AVIF request exactly one;
- WebP request zero.

Require median LCP `<= 2500` and exact cleanup.

Use labels `poster-picture-production-mobile-1`, `-2`, and `-3` with debug ports `9821`, `9822`, and `9823`.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  "$project\output\performance\2026-07-16\poster-picture-layer-production-v1\run-production-matrix.ps1" `
  -TargetUrl 'https://efficientautomate.com/'
if ($LASTEXITCODE -ne 0) { throw 'Production Lighthouse matrix failed' }

powershell -NoProfile -ExecutionPolicy Bypass -File `
  "$project\output\performance\2026-07-16\poster-picture-layer-production-v1\build-production-summary.ps1"
if ($LASTEXITCODE -ne 0) { throw 'Production Lighthouse summary failed' }
```

- [ ] **Step 7: Record release or perform a scoped rollback**

If all production gates pass, write `production-verification.json` with:

```json
{
  "decision": "RELEASED",
  "deliveryChecks": "63/63",
  "behaviorChecks": "136/136",
  "mobileLighthouseRuns": 3
}
```

plus merge SHA, deployment identity, metrics, requests, and evidence hashes.

If any production gate fails, run:

```powershell
$revertRoot = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\poster-picture-layer-revert'
if (Test-Path -LiteralPath $revertRoot) { throw 'Fresh revert checkout already exists' }
git clone https://github.com/tarik-ux/efficient-technologies-site.git $revertRoot
git -C $revertRoot switch -c revert/poster-picture-layer-v1 origin/main
git -C $revertRoot revert $mergeSha --no-edit
git -C $revertRoot push -u origin revert/poster-picture-layer-v1
gh pr create --repo tarik-ux/efficient-technologies-site `
  --head revert/poster-picture-layer-v1 `
  --base main `
  --title 'revert: responsive picture poster release' `
  --body 'Reverts the responsive picture poster release because a production qualification gate failed. Exact failure evidence is retained locally.'
```

Wait for every revert PR check to pass, then resolve its number without hand entry:

```powershell
$revertNumber = (gh pr view revert/poster-picture-layer-v1 `
  --repo tarik-ux/efficient-technologies-site `
  --json number --jq '.number').Trim()
gh pr checks $revertNumber --repo tarik-ux/efficient-technologies-site --watch --interval 10
if ($LASTEXITCODE -ne 0) { throw 'Revert PR checks failed' }
$revertPr = gh pr view revert/poster-picture-layer-v1 `
  --repo tarik-ux/efficient-technologies-site `
  --json number,headRefName,statusCheckRollup | ConvertFrom-Json
if ($revertPr.headRefName -ne 'revert/poster-picture-layer-v1') { throw 'Unexpected revert PR head' }
$failed = @($revertPr.statusCheckRollup | Where-Object {
  $_.status -ne 'COMPLETED' -or $_.conclusion -ne 'SUCCESS'
})
if ($failed.Count -ne 0) { throw 'Revert PR checks are not all successful' }
gh pr merge $revertPr.number --repo tarik-ux/efficient-technologies-site --squash --delete-branch
if ($LASTEXITCODE -ne 0) { throw 'Revert PR merge failed' }
```

Wait for the revert merge SHA's successful Cloudflare Pages check, rerun production delivery and browser smoke, and record whether the prior live state is restored. Report the exact failure and rollback state; never claim release success from merge status alone.
