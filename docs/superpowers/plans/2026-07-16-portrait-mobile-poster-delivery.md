# Portrait-Mobile Poster Delivery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a geometrically equivalent, cropped portrait-mobile city poster that makes every official mobile Lighthouse 13.4 simulated-LCP run pass 2500 ms without changing desktop imagery, video behavior, functionality, accessibility, or animations.

**Architecture:** Reconstruct commit `b416b8113315c95c32d4674aa54769d90c562abd` into an evidence-only baseline/candidate pair, freeze one crop and AVIF ladder before encoding, and reject the experiment unless mechanical, visual, browser, request, and paired Lighthouse gates all pass. Only a `PROMOTE` result may be copied into authoritative `site/` and the publish checkout; final delivery uses CSS `image-set()` with the current WebP retained as fallback and removes the independent video `poster` request.

**Tech Stack:** Static HTML/CSS, Node.js 24 built-ins, PowerShell 7, FFmpeg/FFprobe 8.1.1, libaom-av1, Playwright/Codex browser harness, Lighthouse 13.4.0, local HTTP/2+Brotli evidence server, Git, GitHub CLI, and Cloudflare Pages.

## Global Constraints

- `C:\Users\tarik\Claude Projects\efficient-technologies\site` is the authoritative deploy source.
- `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site` is the versioned publish checkout on `agent/performance-without-motion-loss`.
- The isolated experiment base is exactly `b416b8113315c95c32d4674aa54769d90c562abd`, not the documentation commits above it.
- Do not mutate `site/`, the publish checkout, Git, PR #2, or production before the isolated experiment records `PROMOTE`.
- The crop is exactly `crop=385:768:991:0` from `assets/city-poster-v20260714.webp`.
- The mobile asset is selected only under `(max-width:640px) and (orientation:portrait) and (max-aspect-ratio:385/768)`.
- The selected asset must be one 385×768 AVIF frame, yuv420p, at most 49,196 bytes, SSIM at least 0.980000, and average PSNR at least 35 dB.
- The fixed CRFs are exactly 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, and 46; no retry, added rung, threshold change, crop change, or best-run substitution is allowed.
- Permit only AVIF structural format tags and the exact deterministic stream tag `title=Color`; reject EXIF, XMP, comments, chapters, and all other metadata.
- Keep `assets/city-poster-v20260714.webp` byte-exact as desktop, landscape, wider-portrait, unsupported-format, and no-script fallback.
- Keep `js/main.js`, `js/ambient.js`, every MP4, every animation constant, preloader timing, reveal ownership, reduced-motion path, Save Data path, and low-power path byte-exact.
- Do not add a package manager, runtime dependency, build step, third-party service, hidden content, or new brand value.
- The release gate is Lighthouse 13.4.0 with three first-run mobile reports and three first-run desktop reports; every mobile simulated LCP and the mobile median must be at most 2500 ms.
- PR #2 remains draft and production remains unchanged after any failed gate.
- Evidence files stay under `output/performance` or `output/playwright` and never enter the deploy tree.
- The approved design and this plan must be removed from the final branch tree before the next preview push.

## File Map

### Evidence-only files to create

- `output/performance/2026-07-16/poster-mobile-crop-v2/ladder-policy.json` — immutable crop, encoder, threshold, selection, retry, and metadata policy.
- `output/performance/2026-07-16/poster-mobile-crop-v2/prepare-base.mjs` — reconstructs `b416b81` into byte-exact `baseline/` and `candidate/`.
- `output/performance/2026-07-16/poster-mobile-crop-v2/poster-mobile-contract.mjs` — RED/GREEN structural contract for the isolated candidate.
- `output/performance/2026-07-16/poster-mobile-crop-v2/generate-mobile-poster.ps1` — creates the lossless crop, runs the fixed ladder once, probes every rung, and selects by objective order.
- `output/performance/2026-07-16/poster-mobile-crop-v2/build-candidate.mjs` — applies only approved asset, CSS, HTML, route-revision, and header changes.
- `output/performance/2026-07-16/poster-mobile-crop-v2/browser/poster-selection.playwright.js` — tests aspect-ratio selection, no-script rendering, request exclusivity, and video takeover.
- `output/performance/2026-07-16/poster-mobile-crop-v2/browser/run-browser-gates.ps1` — runs poster-specific gates and the accepted 13-case/136-check matrix.
- `output/performance/2026-07-16/poster-mobile-crop-v2/lighthouse/*` — adapted HTTP/2+Brotli paired Lighthouse harness and summaries.
- `output/performance/2026-07-16/poster-mobile-crop-v2/final-verification.json` — terminal `PROMOTE` or `REJECT` decision with evidence hashes.
- `output/performance/2026-07-16/poster-mobile-crop-v2/experiment-report.md` — human-readable result and authority boundary.

### Publish-checkout files to modify only after PROMOTE

- `.github/scripts/performance-contract.test.mjs` — pins asset, CSS revision, fallback selection, removed poster attribute, retained WebP, manifest entry, and immutable header.
- `.github/performance/media-manifest.json` — records selected crop hashes, bytes, quality, dimensions, visual approval, and encoding.
- `404.html`, `about/index.html`, `blog/index.html`, and the five article `index.html` files — change only `/css/styles.css?v=3` to `?v=4`.
- `css/styles.css` — adds fallback background and constrained mobile `image-set()`.
- `index.html` — regenerates exact inline CSS at styles revision 4 and removes only the world-video poster attribute.
- `_headers` — adds the immutable V20260716 AVIF rule.
- `assets/city-poster-mobile-v20260716.avif` — selected binary copied byte-exactly from evidence.
- `docs/superpowers/specs/2026-07-16-mobile-poster-crop-design.md` and this plan — delete before push.

### Authoritative source files to modify only after PROMOTE

- The same deploy files under `C:\Users\tarik\Claude Projects\efficient-technologies\site`, excluding the two `.github` files and internal documentation.

---

### Task 1: Freeze the isolated V2 policy and prove the candidate contract RED

**Files:**

- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/ladder-policy.json`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/prepare-base.mjs`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/poster-mobile-contract.mjs`
- Reference: `output/performance/2026-07-16/poster-avif-v1/prepare-base.mjs`
- Reference: `output/performance/2026-07-16/poster-avif-v1/poster-avif-contract.mjs`

**Interfaces:**

- Consumes: publish repository, commit `b416b8113315c95c32d4674aa54769d90c562abd`, and old poster SHA-256 `098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb`.
- Produces: byte-exact `baseline/` and `candidate/` trees, `base-integrity.json`, and expected RED `contract-red.json`.

- [ ] **Step 1: Verify the authority boundary**

Run:

```powershell
$repo = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site'
git -C $repo status --short --branch
git -C $repo rev-parse HEAD
git -C $repo rev-parse origin/agent/performance-without-motion-loss
git -C $repo show -s --format='%H %s' b416b8113315c95c32d4674aa54769d90c562abd
```

Expected: local HEAD contains only approved documentation above `b416b81`, remote remains `b416b81`, no uncommitted deploy change exists, and the base commit resolves exactly.

- [ ] **Step 2: Create the fixed policy before encoding**

Create `ladder-policy.json`:

```json
{
  "schema": "efficient-technologies/poster-mobile-crop-v2-policy-v1",
  "definedBeforeEncoding": true,
  "baseCommit": "b416b8113315c95c32d4674aa54769d90c562abd",
  "source": {
    "relativePath": "baseline/assets/city-poster-v20260714.webp",
    "bytes": 120376,
    "sha256": "098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb",
    "width": 1376,
    "height": 768
  },
  "crop": {
    "filter": "crop=385:768:991:0",
    "x": 991,
    "y": 0,
    "width": 385,
    "height": 768,
    "selectionMedia": "(max-width:640px) and (orientation:portrait) and (max-aspect-ratio:385/768)"
  },
  "encoder": {
    "ffmpegVersion": "8.1.1-full_build-www.gyan.dev",
    "codec": "libaom-av1",
    "container": "avif",
    "usage": "allintra",
    "tune": "ssim",
    "stillPicture": 1,
    "cpuUsed": 4,
    "bitrate": 0,
    "pixelFormat": "yuv420p",
    "threads": 1,
    "rowMt": 0,
    "tiles": "1x1",
    "frameParallel": 0,
    "frames": 1,
    "mapMetadata": -1,
    "mapChapters": -1
  },
  "fixedRungs": [
    { "crf": 18, "cpuUsed": 4 },
    { "crf": 20, "cpuUsed": 4 },
    { "crf": 22, "cpuUsed": 4 },
    { "crf": 24, "cpuUsed": 4 },
    { "crf": 26, "cpuUsed": 4 },
    { "crf": 28, "cpuUsed": 4 },
    { "crf": 30, "cpuUsed": 4 },
    { "crf": 32, "cpuUsed": 4 },
    { "crf": 34, "cpuUsed": 4 },
    { "crf": 36, "cpuUsed": 4 },
    { "crf": 38, "cpuUsed": 4 },
    { "crf": 40, "cpuUsed": 4 },
    { "crf": 42, "cpuUsed": 4 },
    { "crf": 44, "cpuUsed": 4 },
    { "crf": 46, "cpuUsed": 4 }
  ],
  "thresholds": {
    "maximumBytes": 49196,
    "minimumSsimAll": 0.98,
    "minimumPsnrAverageDb": 35,
    "width": 385,
    "height": 768,
    "frameCount": 1,
    "codec": "av1",
    "container": "avif",
    "allowedFormatTags": ["major_brand", "minor_version", "compatible_brands"],
    "allowedStreamTags": { "title": "Color" }
  },
  "selectionOrder": [
    "ssimAllDescending",
    "psnrAverageDbDescending",
    "sizeBytesAscending",
    "crfAscending"
  ],
  "retryPolicy": "none",
  "adaptiveRungsAllowed": false
}
```

- [ ] **Step 3: Reconstruct the base without documentation commits**

Copy `poster-avif-v1/prepare-base.mjs` into V2 and use `apply_patch` to replace schema/name `poster-avif-v1` with `poster-mobile-crop-v2`. Keep:

```js
const authorityCommit = 'b416b8113315c95c32d4674aa54769d90c562abd';
const archiveArgs = ['-c', 'core.autocrlf=false', 'archive', '--format=tar', '--output=' + archivePath, authorityCommit];
```

Run:

```powershell
node 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-mobile-crop-v2\prepare-base.mjs'
```

Expected: `base-integrity.json` GREEN, 47 exact blobs in each tree, no `.git`.

- [ ] **Step 4: Create the V2 structural contract before the candidate**

Reuse V1 safe helpers. Define:

```js
const oldPoster = 'assets/city-poster-v20260714.webp';
const newPoster = 'assets/city-poster-mobile-v20260716.avif';
const oldWorldRule = '.world-video{position:fixed;inset:0;width:100%;height:100%;object-fit:cover;object-position:center right;z-index:0;pointer-events:none;filter:saturate(1.05);}';
const newWorldRule = '.world-video{position:fixed;inset:0;width:100%;height:100%;object-fit:cover;object-position:center right;z-index:0;pointer-events:none;filter:saturate(1.05);background-color:var(--et-void);background-image:url("/assets/city-poster-v20260714.webp");background-size:cover;background-position:center right;background-repeat:no-repeat;}';
const mobileRule = '@media (max-width:640px) and (orientation:portrait) and (max-aspect-ratio:385/768){.world-video{background-image:url("/assets/city-poster-v20260714.webp");background-image:image-set(url("/assets/city-poster-mobile-v20260716.avif") type("image/avif"),url("/assets/city-poster-v20260714.webp") type("image/webp"));}}';
const oldVideo = '<video id="world-video" class="world-video" muted loop playsinline preload="none" poster="assets/city-poster-v20260714.webp" data-src="assets/video/city-loop-v20260714.mp4" aria-hidden="true"></video>';
const newVideo = '<video id="world-video" class="world-video" muted loop playsinline preload="none" data-src="assets/video/city-loop-v20260714.mp4" aria-hidden="true"></video>';
const linkedRoutes = [
  '404.html',
  'about/index.html',
  'blog/index.html',
  'blog/booking-automation-after-hours/index.html',
  'blog/business-process-automation-small-business/index.html',
  'blog/crm-automation-local-business/index.html',
  'blog/review-automation-local-seo/index.html',
  'blog/software-consulting-vs-in-house/index.html'
];
```

Require one added path and eleven modified paths:

```js
const expectedAdded = ['assets/city-poster-mobile-v20260716.avif'];
const expectedModified = [
  '404.html',
  '_headers',
  'about/index.html',
  'blog/booking-automation-after-hours/index.html',
  'blog/business-process-automation-small-business/index.html',
  'blog/crm-automation-local-business/index.html',
  'blog/index.html',
  'blog/review-automation-local-seo/index.html',
  'blog/software-consulting-vs-in-house/index.html',
  'css/styles.css',
  'index.html'
];
```

Also assert exact policy, crop, rung metadata, objective selection, CSS transform, route revisions, inline CSS equality, style markers 3/4, poster removal, old WebP retention, selected probe, immutable header, and runtime/font/video preservation.

- [ ] **Step 5: Prove expected RED**

Run:

```powershell
$root = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-mobile-crop-v2'
node "$root\poster-mobile-contract.mjs" --output contract-red.json
if ($LASTEXITCODE -eq 0) { throw 'Unchanged candidate unexpectedly passed' }
```

Only absent crop/ladder/selection and absent candidate-transformation checks may fail. Policy, base integrity, source hash, old-WebP retention, and runtime preservation must pass.

- [ ] **Step 6: Close evidence-only Task 1**

Run `git status --short --branch` in the publish checkout and hash policy/RED files. Expected: no new Git mutation.

---

### Task 2: Run the fixed crop/AVIF ladder and make the mechanical decision

**Files:**

- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/reference/city-poster-mobile-crop.png`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/generate-mobile-poster.ps1`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/ladder/*`
- Reference: `output/performance/2026-07-16/poster-avif-v1/generate-avif-ladder.ps1`

**Interfaces:**

- Consumes: fixed policy and exact old poster.
- Produces: lossless crop, 15 AVIF rungs, manifest, terminal decision, and optional selection.

- [ ] **Step 1: Create the lossless reference crop**

Run exactly once:

```powershell
$root = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-mobile-crop-v2'
New-Item -ItemType Directory -Path "$root\reference" -ErrorAction Stop | Out-Null
ffmpeg.exe -y -nostdin -hide_banner -loglevel error -i "$root\baseline\assets\city-poster-v20260714.webp" -vf 'crop=385:768:991:0' -frames:v 1 -an -sn -dn -map_metadata -1 -map_chapters -1 -c:v png "$root\reference\city-poster-mobile-crop.png"
if ($LASTEXITCODE -ne 0) { throw 'Lossless crop failed' }
ffprobe.exe -v error -count_frames -show_entries stream=codec_name,width,height,pix_fmt,nb_read_frames -of json "$root\reference\city-poster-mobile-crop.png"
```

Expected: one 385×768 PNG frame. Record SHA-256 before encoding.

- [ ] **Step 2: Adapt the V1 generator**

Copy the V1 generator, then patch:

- schema prefix to `poster-mobile-crop-v2`;
- reference to the crop PNG;
- expected dimensions to 385×768;
- output name expression to `"city-poster-mobile-v20260716-crf$crf.avif"`;
- metadata predicate to exact format allowlist plus `{"title":"Color"}`; and
- keep all V1 encoder arguments and CRFs unchanged.

The encode arguments remain:

```powershell
$encodeArgs = @('-y','-nostdin','-hide_banner','-loglevel','error','-i',$reference,'-map','0:v:0','-frames:v','1','-an','-sn','-dn','-map_metadata','-1','-map_chapters','-1','-c:v','libaom-av1','-usage','allintra','-still-picture','1','-cpu-used','4','-crf',[string]$crf,'-b:v','0','-tune','ssim','-pix_fmt','yuv420p','-row-mt','0','-tiles','1x1','-frame-parallel','0','-threads','1',$outputFile)
```

The selected JSON must use schema `efficient-technologies/poster-mobile-crop-v2-selection-v1` and retain the V1 field types: numeric `crf`, `cpuUsed`, `bytes`, `ssimAll`, and `psnrAverageDb`; lowercase 64-character `sha256`; object `probe`; object `gates`; boolean `qualifies`; rung `relativePath`; and `candidatePath` exactly `candidate/assets/city-poster-mobile-v20260716.avif`.

- [ ] **Step 3: Prove the single attempt is unused**

Require no ladder directory and no experiment-owned FFmpeg process.

- [ ] **Step 4: Run the one permitted ladder**

Run:

```powershell
& "$root\generate-mobile-poster.ps1"
if ($LASTEXITCODE -ne 0) { throw 'Generator failed; preserve exact error and stop' }
```

Expected: 15 rungs, one attempt, no adaptive rung, terminal decision.

- [ ] **Step 5: Enforce the mechanical branch**

```powershell
$decision = Get-Content -LiteralPath "$root\ladder\mechanical-decision.json" -Raw | ConvertFrom-Json
$manifest = Get-Content -LiteralPath "$root\ladder\ladder-manifest.json" -Raw | ConvertFrom-Json
if ($manifest.rungs.Count -ne 15) { throw 'Fixed ladder is incomplete' }
if ($decision.verdict -eq 'REJECT') { Write-Output 'TERMINAL_REJECT'; exit 2 }
if ($decision.verdict -ne 'QUALIFIED') { throw 'Mechanical decision is invalid' }
$selection = Get-Content -LiteralPath "$root\ladder\selection.json" -Raw | ConvertFrom-Json
if (-not $selection.qualifies) { throw 'Selection is not qualified' }
```

Continuation requires bytes ≤49,196, SSIM ≥0.98, PSNR ≥35, 385×768, one AV1/AVIF/yuv420p frame, and exact metadata. `REJECT` ends the implementation without project edits.

- [ ] **Step 6: Verify cleanup and Git immutability**

Require no FFmpeg process and no Git mutation.

---

### Task 3: Build the exact isolated candidate and turn the contract GREEN

**Files:**

- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/build-candidate.mjs`
- Modify only: `output/performance/2026-07-16/poster-mobile-crop-v2/candidate/*`

**Interfaces:**

- Consumes: selection, chosen AVIF, baseline tree, CSS/HTML/header anchors.
- Produces: candidate with one added and eleven modified paths.

- [ ] **Step 1: Write exact-one transformations**

Use:

```js
function replaceExactlyOnce(text, before, after, label) {
  const count = text.split(before).length - 1;
  if (count !== 1) throw new Error(label + ' anchor count was ' + count);
  return text.replace(before, after);
}
```

Apply:

1. CSS `oldWorldRule` → `newWorldRule + "\n" + mobileRule`.
2. Homepage marked style → token revision 3, style revision 4, normalized token CSS, one LF, normalized candidate CSS.
3. Homepage `oldVideo` → `newVideo`.
4. Eight linked routes `/css/styles.css?v=3` → `?v=4` once each.
5. Headers: add V20260716 immutable block after V20260714 poster.
6. Copy selected AVIF byte-exactly to `candidate/assets/city-poster-mobile-v20260716.avif`.

- [ ] **Step 2: Run the builder once**

Run `node "$root\build-candidate.mjs"`.

Expected: `candidate-build.json` records selected CRF/SHA and exact path scope.

- [ ] **Step 3: Prove contract GREEN**

```powershell
node "$root\poster-mobile-contract.mjs" --output contract-green.json
if ($LASTEXITCODE -ne 0) { throw 'Integrated V2 candidate contract failed' }
```

Expected: all structural, asset, revision, cache, fallback, and preservation checks pass.

- [ ] **Step 4: Independently rerun and compare**

Run contract again to `contract-independent-rerun.json`. Check payloads must match after excluding timestamp/output name.

- [ ] **Step 5: Close evidence-only Task 3**

Run `git status --short --branch`. Expected: no project mutation.

---

### Task 4: Prove visual equivalence, responsive selection, request exclusivity, and runtime preservation

**Files:**

- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/browser/poster-selection.playwright.js`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/browser/run-browser-gates.ps1`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/browser/baseline-412x823.png`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/browser/candidate-412x823.png`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/browser/visual-metrics.json`
- Reference without modification: `output/performance/2026-07-15/font-fraunces-family-subset-v11/browser-matrix/*`

**Interfaces:**

- Consumes: isolated `baseline/` and `candidate/`, selected AVIF, and the accepted V11 browser harness.
- Produces: poster-selection results, baseline/candidate screenshots, objective visual metrics, and an unchanged 13-case/136-check compatibility matrix.

- [ ] **Step 1: Source-lock the accepted browser harness**

Create a SHA-256 inventory before copying any V11 harness file:

```powershell
$repo = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site'
$accepted = Join-Path $repo 'output\performance\2026-07-15\font-fraunces-family-subset-v11\browser-matrix'
$root = Join-Path $repo 'output\performance\2026-07-16\poster-mobile-crop-v2\browser'
Get-ChildItem -LiteralPath $accepted -File -Recurse |
  Sort-Object FullName |
  ForEach-Object {
    [pscustomobject]@{
      relativePath = $_.FullName.Substring($accepted.Length + 1).Replace('\','/')
      sha256 = (Get-FileHash -LiteralPath $_.FullName -Algorithm SHA256).Hash.ToLowerInvariant()
      bytes = $_.Length
    }
  } |
  ConvertTo-Json -Depth 4 |
  Set-Content -LiteralPath (Join-Path $root 'accepted-harness-source-lock.json') -Encoding utf8NoBOM
```

Copy the accepted harness under `browser/accepted-matrix/`. Do not change its case definitions, viewport values, predicates, check count, browser channel, or pass logic. Change only the baseline/candidate roots and output paths. After adaptation, write `adaptation-diff.txt` and fail if it contains any predicate or expectation-line change.

- [ ] **Step 2: Write the poster-selection matrix before running it**

Define this exact table in `poster-selection.playwright.js`:

```js
const cases = [
  { id: 'portrait-412x823', width: 412, height: 823, expected: 'city-poster-mobile-v20260716.avif' },
  { id: 'portrait-390x844', width: 390, height: 844, expected: 'city-poster-mobile-v20260716.avif' },
  { id: 'portrait-wide-375x667', width: 375, height: 667, expected: 'city-poster-v20260714.webp' },
  { id: 'landscape-844x390', width: 844, height: 390, expected: 'city-poster-v20260714.webp' },
  { id: 'desktop-1440x900', width: 1440, height: 900, expected: 'city-poster-v20260714.webp' }
];

const forbiddenPosterFor = expected =>
  expected.endsWith('.avif')
    ? 'city-poster-v20260714.webp'
    : 'city-poster-mobile-v20260716.avif';
```

Before the viewport matrix, run an explicit decode smoke in installed stable Google Chrome and stable Microsoft Edge using Playwright channels `chrome` and `msedge`. In each browser, load the selected AVIF into a new `Image`, await `decode()`, and require `naturalWidth === 385` and `naturalHeight === 768`. A missing browser channel, decode rejection, or dimension mismatch is a failed gate; do not silently reduce the browser set.

For each case, launch a fresh JavaScript-disabled page so video startup cannot hide the poster request. Record all requests before navigation. Assert:

1. `.world-video` exists and its `poster` DOM property is the empty string.
2. Computed `backgroundImage` contains the expected filename.
3. Computed `backgroundSize` is `cover`, `backgroundPosition` resolves to right/center, and `backgroundRepeat` is `no-repeat`.
4. Exactly one request contains the expected poster filename.
5. Zero requests contain the forbidden poster filename.
6. Zero requests end in `.mp4`.
7. The video bounding rectangle covers the viewport without a blank edge.

Write one JSON record per case with viewport, computed CSS, DOM poster value, request URLs, element bounds, and pass/fail assertions. Any failed assertion exits nonzero.

- [ ] **Step 3: Capture and compare the no-script 412x823 poster**

Serve the baseline and candidate with the same local server configuration. In separate fresh contexts with JavaScript disabled and viewport 412x823:

1. Wait for the poster response and `document.fonts.ready`.
2. Screenshot only `.world` into `baseline-412x823.png` and `candidate-412x823.png`.
3. Compare the two rendered images with FFmpeg:

```powershell
$ffmpeg = (Get-Command ffmpeg -ErrorAction Stop).Source
$baseline = Join-Path $root 'baseline-412x823.png'
$candidate = Join-Path $root 'candidate-412x823.png'
$ssimLog = Join-Path $root 'visual-ssim.log'
$psnrLog = Join-Path $root 'visual-psnr.log'
& $ffmpeg -hide_banner -nostdin -i $baseline -i $candidate `
  -lavfi "[0:v][1:v]ssim=stats_file='$($ssimLog.Replace('\','/'))'" -f null NUL 2>&1 |
  Set-Content -LiteralPath (Join-Path $root 'visual-ssim-console.log') -Encoding utf8NoBOM
if ($LASTEXITCODE -ne 0) { throw 'Rendered SSIM comparison failed' }
& $ffmpeg -hide_banner -nostdin -i $baseline -i $candidate `
  -lavfi "[0:v][1:v]psnr=stats_file='$($psnrLog.Replace('\','/'))'" -f null NUL 2>&1 |
  Set-Content -LiteralPath (Join-Path $root 'visual-psnr-console.log') -Encoding utf8NoBOM
if ($LASTEXITCODE -ne 0) { throw 'Rendered PSNR comparison failed' }
```

Parse the final FFmpeg summaries into `visual-metrics.json` and require SSIM `All >= 0.98` and average PSNR `>= 35 dB`. This verifies the rendered crop, not only the encoded source.

Inspect the paired screenshots and diff image at native scale and record explicit boolean checks for no blank frame, tofu, visible seam, stretch, changed overlay, changed right edge, or changed element bounds. Objective metrics do not waive any failed visual check.

- [ ] **Step 4: Prove normal video takeover**

Run one JavaScript-enabled 412x823 case on the candidate. Assert:

1. The AVIF poster is the only poster request before the first video frame.
2. The normal MP4 request begins through the existing runtime.
3. `loadeddata` or `requestVideoFrameCallback` proves a frame is available.
4. The video remains visible and the CSS background remains configured behind it.
5. Existing video classes, autoplay, muted, loop, and playsinline attributes are unchanged from baseline.

Store the event/request timeline as `video-takeover.json`.

- [ ] **Step 5: Run the preserved compatibility matrix**

```powershell
pwsh -NoProfile -File "$root\run-browser-gates.ps1"
if ($LASTEXITCODE -ne 0) { throw 'Browser gates failed; write REJECT and stop' }
```

Expected:

- Poster-specific matrix: 5/5 cases, all assertions pass.
- Rendered comparison: SSIM at least 0.98 and PSNR at least 35 dB.
- Video takeover: pass.
- Accepted compatibility matrix: exactly 13/13 cases and 136/136 checks.
- Browser output contains the exact request graph for every case.
- Reduced motion, Save Data, 2G, and low-power cases paint a background and request zero MP4 files.

- [ ] **Step 6: Enforce the browser terminal branch**

Hash all browser evidence into `browser-evidence-lock.json`. Require zero experiment-owned browser processes, zero occupied harness ports, and deletion of every temporary browser profile. If any expected count, visual threshold, request exclusivity assertion, cleanup assertion, or video takeover assertion fails, write `final-verification.json` with `"decision":"REJECT"`, the exact failure, and evidence hashes; then stop before Lighthouse and before project mutation.

---

### Task 5: Run paired local Lighthouse and make the isolated promotion decision

**Files:**

- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/lighthouse/run-paired.ps1`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/lighthouse/summarize-paired.mjs`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/lighthouse/reports/*`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/lighthouse/paired-summary.json`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/final-verification.json`
- Create: `output/performance/2026-07-16/poster-mobile-crop-v2/experiment-report.md`
- Reference without modification: `output/performance/2026-07-15/font-fraunces-family-subset-v11/lighthouse/*`

**Interfaces:**

- Consumes: browser-qualified baseline/candidate trees and the proven local HTTP/2+Brotli Lighthouse 13.4 harness.
- Produces: six fixed first-run mobile pairs, paired metrics/request evidence, and terminal `PROMOTE` or `REJECT`.

- [ ] **Step 1: Source-lock and adapt the proven Lighthouse harness**

Inventory every referenced V11 harness file by relative path, bytes, and SHA-256 in `lighthouse/accepted-harness-source-lock.json`. Preserve Lighthouse version, Chrome flags, throttling method, mobile form factor, output fields, server behavior, Brotli behavior, and cold-profile logic. Change only roots, ports, report names, and the added poster request assertions.

At startup, require:

```powershell
$version = (& npx --yes lighthouse@13.4.0 --version 2>&1 | Out-String).Trim()
if ($LASTEXITCODE -ne 0 -or $version -ne '13.4.0') { throw "Expected Lighthouse 13.4.0, received '$version'" }
```

No run may be retried, replaced, discarded, or reordered.

- [ ] **Step 2: Pin the six-run paired schedule**

Use this exact order and unique server/debug ports:

```powershell
$runs = @(
  @{ order=1; side='baseline'; serverPort=9601; debugPort=9701; report='01-baseline-mobile.json' },
  @{ order=2; side='candidate'; serverPort=9611; debugPort=9711; report='02-candidate-mobile.json' },
  @{ order=3; side='baseline'; serverPort=9602; debugPort=9702; report='03-baseline-mobile.json' },
  @{ order=4; side='candidate'; serverPort=9612; debugPort=9712; report='04-candidate-mobile.json' },
  @{ order=5; side='baseline'; serverPort=9603; debugPort=9703; report='05-baseline-mobile.json' },
  @{ order=6; side='candidate'; serverPort=9613; debugPort=9713; report='06-candidate-mobile.json' }
)
```

Each run must use a new Chrome user-data directory, a newly started server, the first navigation only, and cleanup in `finally`. Abort on any startup, navigation, Lighthouse, JSON-parse, or cleanup error; preserve the exact error.

- [ ] **Step 3: Run the paired mobile schedule once**

```powershell
$root = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site\output\performance\2026-07-16\poster-mobile-crop-v2'
pwsh -NoProfile -File "$root\lighthouse\run-paired.ps1"
if ($LASTEXITCODE -ne 0) { throw 'Paired Lighthouse failed; do not substitute runs' }
```

The runner must refuse to start if any of the six report paths already exists. Record server PID, Chrome PID, command line, start/end time, report SHA-256, and cleanup result per run.

- [ ] **Step 4: Summarize and validate the candidate**

`summarize-paired.mjs` must read reports only in the pinned order and emit:

```js
const candidateGate = {
  expectedRuns: 3,
  maximumSimulatedLcpMs: 2500,
  maximumMedianSimulatedLcpMs: 2500,
  minimumPerformanceScore: 0.90,
  maximumCls: 0.02,
  expectedMobilePosterRequests: 1,
  expectedLegacyPosterRequests: 0
};
```

For every candidate report require:

- performance score at least 0.90;
- simulated LCP at most 2500 ms;
- CLS at most 0.02;
- exactly one request for `city-poster-mobile-v20260716.avif`;
- zero requests for `city-poster-v20260714.webp`;
- no failed request and no console/runtime error introduced by the candidate.

For each pair, require baseline poster `resourceSize === 120376`, candidate poster `resourceSize === selection.bytes`, and poster resource reduction `=== 120376 - selection.bytes`. Record total transfer bytes for both sides and require candidate total transfer bytes to be lower; do not treat a performance score alone as byte evidence.

Sort the three candidate LCP values numerically and require the middle value at most 2500 ms. Include all baseline values for comparison, but do not use baseline performance as a waiver.

- [ ] **Step 5: Write the terminal experiment decision**

`final-verification.json` must contain:

- base commit and input poster hash;
- policy hash;
- all 15 ladder records and mechanical decision hash;
- selected AVIF CRF, bytes, SHA-256, SSIM, PSNR, dimensions, frame count, pixel format, and metadata;
- structural-contract hashes;
- browser matrix counts, visual metrics, request assertions, and evidence hash;
- all six Lighthouse values and report hashes;
- candidate median;
- cleanup/process checks;
- `"decision":"PROMOTE"` only if every mechanical, structural, browser, visual, request, runtime, and Lighthouse gate passed.

Write `experiment-report.md` from that JSON. It must state the authority boundary: `PROMOTE` authorizes copying the exact qualified candidate only; `REJECT` authorizes no project mutation.

- [ ] **Step 6: Stop or continue mechanically**

```powershell
$verification = Get-Content -LiteralPath "$root\final-verification.json" -Raw | ConvertFrom-Json
if ($verification.decision -eq 'REJECT') { Write-Output 'TERMINAL_REJECT'; exit 2 }
if ($verification.decision -ne 'PROMOTE') { throw 'Missing terminal promotion decision' }
if (-not $verification.allGatesPassed) { throw 'PROMOTE is inconsistent with failed gates' }
```

Do not edit tracked project files if this check does not complete successfully.

---

### Task 6: Pin the tracked deployment contract and prove it RED

**Prerequisite:** `final-verification.json` says `PROMOTE` and every referenced evidence hash still matches.

**Files:**

- Modify: `.github/scripts/performance-contract.test.mjs`
- Create evidence helper: `output/performance/2026-07-16/poster-mobile-crop-v2/pin-tracked-contract.mjs`
- Test without modifying: `.github/performance/media-manifest.json`
- Test without modifying: current publish and authoritative source deploy trees

**Interfaces:**

- Consumes: qualified candidate CSS SHA-256 and approved delivery rules.
- Produces: one test-only Git commit whose failures name exactly the unimplemented asset, manifest, HTML, CSS revision, and header behavior.

- [ ] **Step 1: Revalidate promotion immediately before tracked mutation**

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$root = Join-Path $project 'output\performance\2026-07-16\poster-mobile-crop-v2'
$verificationPath = Join-Path $root 'final-verification.json'
$verification = Get-Content -LiteralPath $verificationPath -Raw | ConvertFrom-Json
if ($verification.decision -ne 'PROMOTE' -or -not $verification.allGatesPassed) { throw 'Tracked mutation is not authorized' }
git -C $repo status --short --branch
git -C $repo rev-parse origin/agent/performance-without-motion-loss
```

Expected remote: `b416b8113315c95c32d4674aa54769d90c562abd`. Expected tracked changes: documentation only.

- [ ] **Step 2: Add exact release constants and image expectation**

Use `apply_patch` on `.github/scripts/performance-contract.test.mjs`:

```js
const release = '20260714';
const posterRelease = '20260716';
const frauncesRelease = '20260715';
const tokensRevision = '3';
const stylesRevision = '4';
const mobilePoster = `assets/city-poster-mobile-v${posterRelease}.avif`;
```

Append exactly one item to `expectedImages`:

```js
{ logicalId: 'poster-mobile', output: mobilePoster, width: 385, height: 768 },
```

Keep the legacy poster entry and all video/font expectations unchanged.

- [ ] **Step 3: Pin the qualified CSS hash dynamically**

Create `pin-tracked-contract.mjs` with this dynamic pinning logic:

```js
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const project = 'C:/Users/tarik/Claude Projects/efficient-technologies';
const repo = path.join(project, 'output/publish/efficient-technologies-site');
const candidateCss = path.join(project, 'output/performance/2026-07-16/poster-mobile-crop-v2/candidate/css/styles.css');
const testPath = path.join(repo, '.github/scripts/performance-contract.test.mjs');
const normalizeLf = value => value.replace(/\r\n?/g, '\n');
const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
const replaceExactlyOnce = (value, before, after, label) => {
  const count = value.split(before).length - 1;
  if (count !== 1) throw new Error(`${label} anchor count was ${count}`);
  return value.replace(before, after);
};

const qualifiedCssSha256 = sha256(normalizeLf(fs.readFileSync(candidateCss, 'utf8')));
if (!/^[a-f0-9]{64}$/.test(qualifiedCssSha256)) throw new Error('Invalid candidate CSS SHA-256');

let testSource = fs.readFileSync(testPath, 'utf8');
testSource = replaceExactlyOnce(
  testSource,
  "'css/styles.css': '79ebe674c1ca170fc8f9eca873fdba8b8767b9cf0e9e2a5d480f292cf04e2ae2'",
  `'css/styles.css': '${qualifiedCssSha256}'`,
  'CSS hash',
);
fs.writeFileSync(testPath, testSource, 'utf8');
process.stdout.write(JSON.stringify({ qualifiedCssSha256 }) + '\n');
```

Run it once after the static `apply_patch` edits. Independently recompute the candidate CSS hash and require equality with the literal now present in the test.

- [ ] **Step 4: Extend existing tests without changing unrelated predicates**

Modify the current `versioned media manifest records passing, byte-accurate assets` test to require:

```js
assert.equal(manifest.release, '2026-07-16');
const mobileEntry = manifest.images.find((item) => item.logicalId === 'poster-mobile');
assert.ok(mobileEntry, 'manifest missing poster-mobile');
assert.ok(mobileEntry.optimizedBytes <= 49196);
assert.ok(mobileEntry.ssim >= 0.98);
assert.ok(mobileEntry.psnrAverageDb >= 35);
assert.deepEqual(mobileEntry.crop, { x: 991, y: 0, width: 385, height: 768 });
assert.equal(mobileEntry.probe.codec, 'av1');
assert.equal(mobileEntry.probe.pixelFormat, 'yuv420p');
assert.equal(mobileEntry.probe.width, 385);
assert.equal(mobileEntry.probe.height, 768);
assert.equal(mobileEntry.probe.frameCount, 1);
assert.deepEqual(mobileEntry.metadata.formatTagKeys, ['compatible_brands', 'major_brand', 'minor_version']);
assert.deepEqual(mobileEntry.metadata.streamTags, { title: 'Color' });
assert.match(mobileEntry.encoding, /^libaom-av1 allintra still-picture=1 cpu-used=4 crf=(18|20|22|24|26|28|30|32|34|36|38|40|42|44|46) yuv420p deterministic-single-thread$/);
```

Modify the current poster-first test so the world video requires `attr(world, 'poster') === null`. In the same test, require the exact CSS delivery strings:

```js
const css = normalizeLf(read('css/styles.css'));
const legacyPoster = `/assets/city-poster-v${release}.webp`;
const basePosterCss = `background-color:var(--et-void);background-image:url("${legacyPoster}");background-size:cover;background-position:center right;background-repeat:no-repeat;`;
const mobilePosterCss = `@media (max-width:640px) and (orientation:portrait) and (max-aspect-ratio:385/768){.world-video{background-image:url("${legacyPoster}");background-image:image-set(url("/${mobilePoster}") type("image/avif"),url("${legacyPoster}") type("image/webp"));}}`;
assert.match(cssRule(css, '.world-video'), new RegExp(escapeRegex(basePosterCss)));
assert.equal(css.includes(mobilePosterCss), true, 'exact portrait mobile image-set');
```

In both linked-style assertions replace the literal `3` with `stylesRevision`, and require `data-styles-revision` to equal `stylesRevision`. The existing immutable-header loop will cover the new expected image automatically.

- [ ] **Step 5: Prove the contract fails for implementation reasons**

Run on the unchanged publish deploy tree:

```powershell
Push-Location $repo
try {
  node --test .github/scripts/performance-contract.test.mjs 2>&1 |
    Tee-Object -FilePath "$root\tracked-contract-red-publish.log"
  if ($LASTEXITCODE -eq 0) { throw 'Tracked publish contract unexpectedly passed before implementation' }
} finally {
  Pop-Location
}
```

Run the same test against authoritative source:

```powershell
Push-Location $repo
try {
  $env:SITE_ROOT = (Join-Path $project 'site')
  $env:CONTRACT_ROOT = $repo
  node --test .github/scripts/performance-contract.test.mjs 2>&1 |
    Tee-Object -FilePath "$root\tracked-contract-red-source.log"
  if ($LASTEXITCODE -eq 0) { throw 'Tracked source contract unexpectedly passed before implementation' }
} finally {
  Remove-Item Env:SITE_ROOT -ErrorAction SilentlyContinue
  Remove-Item Env:CONTRACT_ROOT -ErrorAction SilentlyContinue
  Pop-Location
}
```

Allowed failing test names are only:

- `versioned media manifest records passing, byte-accurate assets`;
- `poster-first media declarations cannot fetch before capability activation`;
- `homepage embeds exact revisioned CSS while other routes retain linked styles`; and
- `immutable cache policy applies only to release-versioned assets`.

Any syntax error, unrelated failure, or different failing test name stops the task.

- [ ] **Step 6: Commit the RED contract only**

```powershell
git -C $repo add -- .github/scripts/performance-contract.test.mjs
git -C $repo diff --cached --check
git -C $repo diff --cached --name-only
git -C $repo commit -m "test: pin portrait mobile poster delivery"
```

Expected staged/committed path count: one. Do not push.

---

### Task 7: Promote the qualified candidate into source and publish, then turn every local gate GREEN

**Files:**

- Create evidence helper: `output/performance/2026-07-16/poster-mobile-crop-v2/materialize-manifest.mjs`
- Modify in authoritative `site/` and publish checkout: the eleven deploy paths listed below
- Create in authoritative `site/` and publish checkout: `assets/city-poster-mobile-v20260716.avif`
- Modify in publish checkout only: `.github/performance/media-manifest.json`
- Delete in publish checkout: approved design spec and this implementation plan

**Interfaces:**

- Consumes: exact isolated candidate and selected evidence.
- Produces: byte-equivalent source/publish deploy changes, a measured manifest entry, passing contracts, and one final implementation commit.

- [ ] **Step 1: Verify the candidate has not drifted**

Re-run the isolated structural contract, selection probe, browser evidence hash check, and `final-verification.json` consistency check. Compare the selected AVIF SHA-256 and candidate CSS SHA-256 to the values pinned by Tasks 5 and 6. Any mismatch revokes `PROMOTE`.

- [ ] **Step 2: Copy only the twelve approved deploy artifacts**

Use this exact list:

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

For each of the eleven modified paths, copy the isolated `candidate/` file byte-exactly into both `site/` and the publish checkout. Copy the one selected AVIF byte-exactly into both destinations. Refuse destination symlinks, refuse a source outside `poster-mobile-crop-v2/candidate`, and fail if either destination hash differs from the candidate hash.

- [ ] **Step 3: Assert the exact promoted CSS and HTML behavior**

The candidate CSS must contain exactly:

```css
.world-video{position:fixed;inset:0;width:100%;height:100%;object-fit:cover;object-position:center right;z-index:0;pointer-events:none;filter:saturate(1.05);background-color:var(--et-void);background-image:url("/assets/city-poster-v20260714.webp");background-size:cover;background-position:center right;background-repeat:no-repeat;}
@media (max-width:640px) and (orientation:portrait) and (max-aspect-ratio:385/768){.world-video{background-image:url("/assets/city-poster-v20260714.webp");background-image:image-set(url("/assets/city-poster-mobile-v20260716.avif") type("image/avif"),url("/assets/city-poster-v20260714.webp") type("image/webp"));}}
```

Require:

- homepage style markers are exactly `data-tokens-revision="3"` and `data-styles-revision="4"`;
- the inline homepage CSS equals normalized `assets/tokens.css` + one LF + normalized candidate `css/styles.css`;
- `poster="assets/city-poster-v20260714.webp"` is removed only from `#world-video`;
- all seven `data-src` values, video attributes, runtime loader source, and video/animation scripts are byte-preserved;
- exactly eight linked routes reference `/css/styles.css?v=4`;
- `_headers` contains one immutable block for `/assets/city-poster-mobile-v20260716.avif`.

- [ ] **Step 4: Materialize the manifest from evidence, not hand-entered measurements**

Create `materialize-manifest.mjs`:

```js
import fs from 'node:fs';
import path from 'node:path';

const project = 'C:/Users/tarik/Claude Projects/efficient-technologies';
const repo = path.join(project, 'output/publish/efficient-technologies-site');
const root = path.join(project, 'output/performance/2026-07-16/poster-mobile-crop-v2');
const manifestPath = path.join(repo, '.github/performance/media-manifest.json');
const selection = JSON.parse(fs.readFileSync(path.join(root, 'ladder/selection.json'), 'utf8'));
const policy = JSON.parse(fs.readFileSync(path.join(root, 'ladder-policy.json'), 'utf8'));
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const formatTagKeys = Object.keys(selection.probe.format?.tags ?? {}).sort();
const streamTags = selection.probe.streams?.[0]?.tags ?? {};

if (!selection.qualifies) throw new Error('Selection is not qualified');
if (selection.bytes > policy.thresholds.maximumBytes) throw new Error('Selected AVIF exceeds byte gate');
if (selection.ssimAll < policy.thresholds.minimumSsimAll) throw new Error('Selected AVIF misses SSIM gate');
if (selection.psnrAverageDb < policy.thresholds.minimumPsnrAverageDb) throw new Error('Selected AVIF misses PSNR gate');
if (formatTagKeys.join(',') !== 'compatible_brands,major_brand,minor_version') throw new Error('Unexpected format metadata');
if (JSON.stringify(streamTags) !== JSON.stringify({ title: 'Color' })) throw new Error('Unexpected stream metadata');

const mobileEntry = {
  logicalId: 'poster-mobile',
  source: 'assets/city-poster-v20260714.webp',
  output: 'assets/city-poster-mobile-v20260716.avif',
  sourceSha256: policy.source.sha256,
  optimizedSha256: selection.sha256,
  sourceBytes: policy.source.bytes,
  optimizedBytes: selection.bytes,
  width: policy.crop.width,
  height: policy.crop.height,
  ssim: selection.ssimAll,
  psnrAverageDb: selection.psnrAverageDb,
  crop: {
    x: policy.crop.x,
    y: policy.crop.y,
    width: policy.crop.width,
    height: policy.crop.height,
  },
  probe: {
    codec: selection.probe.streams[0].codec_name,
    pixelFormat: selection.probe.streams[0].pix_fmt,
    width: selection.probe.streams[0].width,
    height: selection.probe.streams[0].height,
    frameCount: Number(selection.probe.streams[0].nb_read_frames),
  },
  metadata: { formatTagKeys, streamTags },
  visualReview: 'approved',
  encoding: `libaom-av1 allintra still-picture=1 cpu-used=4 crf=${selection.crf} yuv420p deterministic-single-thread`,
};

manifest.release = '2026-07-16';
manifest.generatedAt = new Date().toISOString();
manifest.images = manifest.images.filter(item => item.logicalId !== 'poster-mobile');
manifest.images.push(mobileEntry);
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
```

Run once, then independently assert the manifest SHA/bytes equal the deployed AVIF and that every measured field equals `selection.json`.

- [ ] **Step 5: Turn source and publish contracts GREEN**

```powershell
Push-Location $repo
try {
  node --test .github/scripts/performance-contract.test.mjs
  if ($LASTEXITCODE -ne 0) { throw 'Publish performance contract failed' }
  node --test .github/scripts/seo-geo.test.mjs
  if ($LASTEXITCODE -ne 0) { throw 'Publish SEO/GEO contract failed' }

  $env:SITE_ROOT = (Join-Path $project 'site')
  $env:CONTRACT_ROOT = $repo
  node --test .github/scripts/performance-contract.test.mjs
  if ($LASTEXITCODE -ne 0) { throw 'Source performance contract failed' }
  node --test .github/scripts/seo-geo.test.mjs
  if ($LASTEXITCODE -ne 0) { throw 'Source SEO/GEO contract failed' }
} finally {
  Remove-Item Env:SITE_ROOT -ErrorAction SilentlyContinue
  Remove-Item Env:CONTRACT_ROOT -ErrorAction SilentlyContinue
  Pop-Location
}
```

Expected: performance 29/29 and SEO/GEO 8/8 for both trees.

- [ ] **Step 6: Verify source/publish parity only across approved deploy paths**

Hash the eleven modified paths plus the added AVIF in both trees and require 12/12 equality. Do not copy or normalize unrelated files and do not overwrite the three pre-existing logo mismatches.

Re-run Task 4's poster-specific browser matrix, visual comparison, video takeover, and accepted 13-case/136-check matrix against the promoted publish tree.

- [ ] **Step 7: Review scope and remove release-internal documentation**

Invoke `superpowers:requesting-code-review` against the approved design, this plan, both implementation commits, the earlier documentation commits, and the complete diff from `b416b81`. Resolve only findings within the approved scope and rerun affected gates.

Delete:

```text
docs/superpowers/specs/2026-07-16-mobile-poster-crop-design.md
docs/superpowers/plans/2026-07-16-portrait-mobile-poster-delivery.md
```

Require no `docs/superpowers` path in the final branch tree.

- [ ] **Step 8: Commit the complete implementation**

```powershell
git -C $repo add -- `
  .github/performance/media-manifest.json `
  404.html about/index.html blog/index.html `
  blog/booking-automation-after-hours/index.html `
  blog/business-process-automation-small-business/index.html `
  blog/crm-automation-local-business/index.html `
  blog/review-automation-local-seo/index.html `
  blog/software-consulting-vs-in-house/index.html `
  css/styles.css index.html _headers `
  assets/city-poster-mobile-v20260716.avif `
  docs/superpowers/specs/2026-07-16-mobile-poster-crop-design.md `
  docs/superpowers/plans/2026-07-16-portrait-mobile-poster-delivery.md
git -C $repo diff --cached --check
git -C $repo diff --cached --stat
git -C $repo commit -m "perf: serve cropped portrait mobile poster"
```

Do not push until the clean-checkout verification in Task 8 passes.

---

### Task 8: Verify a clean checkout, push once, and qualify the immutable preview

**Files:**

- Create evidence: `output/performance/2026-07-16/poster-mobile-crop-v2/clean-checkout/*`
- Create evidence: `output/playwright/poster-mobile-crop-preview-pr2-v2/*`
- Create evidence: `output/performance/2026-07-16/poster-mobile-crop-preview-pr2-v2/*`
- Reference without modification: V11 route/header, browser-matrix, request-graph, and preview-Lighthouse harnesses

**Interfaces:**

- Consumes: final local branch HEAD and exact qualified evidence.
- Produces: clean-checkout results, one branch push, successful hosted checks, an immutable preview URL, delivery/browser/request evidence, and six official preview Lighthouse reports.

- [ ] **Step 1: Verify from a clean archive before network mutation**

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$root = Join-Path $project 'output\performance\2026-07-16\poster-mobile-crop-v2'
$clean = Join-Path $root 'clean-checkout'
if (Test-Path -LiteralPath $clean) { throw 'Clean-checkout evidence path already exists' }
New-Item -ItemType Directory -Path $clean -ErrorAction Stop | Out-Null
git -C $repo archive --format=tar --output="$clean\head.tar" HEAD
if ($LASTEXITCODE -ne 0) { throw 'Clean archive failed' }
New-Item -ItemType Directory -Path "$clean\tree" -ErrorAction Stop | Out-Null
tar -xf "$clean\head.tar" -C "$clean\tree"
if ($LASTEXITCODE -ne 0) { throw 'Clean archive extraction failed' }
```

Run both Node contracts inside `clean-checkout/tree` and require performance 29/29 and SEO/GEO 8/8. Require the mobile AVIF and manifest entry, require neither release-internal document, and compare the twelve deploy-artifact hashes to `site/` and the selected candidate.

```powershell
Push-Location "$clean\tree"
try {
  node --test .github/scripts/performance-contract.test.mjs
  if ($LASTEXITCODE -ne 0) { throw 'Clean-checkout performance contract failed' }
  node --test .github/scripts/seo-geo.test.mjs
  if ($LASTEXITCODE -ne 0) { throw 'Clean-checkout SEO/GEO contract failed' }
} finally {
  Pop-Location
}
```

Run Task 4's browser gates against the clean tree and require the same poster-specific results plus exactly 13/13 cases and 136/136 checks. Any failure stops before push.

- [ ] **Step 2: Verify exact Git scope and push once**

```powershell
$localHead = (git -C $repo rev-parse HEAD).Trim()
$remoteBefore = (git -C $repo rev-parse origin/agent/performance-without-motion-loss).Trim()
if ($remoteBefore -ne 'b416b8113315c95c32d4674aa54769d90c562abd') { throw "Remote branch moved to $remoteBefore" }
$dirty = @(git -C $repo status --porcelain=v1)
if ($LASTEXITCODE -ne 0) { throw 'Git status failed' }
if ($dirty.Count -ne 0) { throw "Worktree is dirty: $($dirty -join '; ')" }
git -C $repo diff --check $remoteBefore..$localHead
if ($LASTEXITCODE -ne 0) { throw 'Final branch diff check failed' }
$internalDocs = @(git -C $repo ls-tree -r --name-only $localHead -- docs/superpowers)
if ($LASTEXITCODE -ne 0) { throw 'Could not inspect internal documentation paths' }
if ($internalDocs.Count -ne 0) { throw "Internal documents remain: $($internalDocs -join '; ')" }
```

Require a clean worktree, then:

```powershell
git -C $repo push origin agent/performance-without-motion-loss
if ($LASTEXITCODE -ne 0) { throw 'Push failed; preserve exact error and stop' }
$remoteAfter = (git -C $repo ls-remote origin refs/heads/agent/performance-without-motion-loss).Split()[0]
if ($remoteAfter -ne $localHead) { throw 'Remote head does not equal qualified local head' }
```

Do not amend, force-push, or issue a second performance run to replace a failure.

- [ ] **Step 3: Wait for the exact pushed SHA's hosted checks**

```powershell
gh pr checks 2 --repo tarik-ux/efficient-technologies-site --watch --interval 10
if ($LASTEXITCODE -ne 0) { throw 'Hosted PR checks failed' }
$pr = gh pr view 2 --repo tarik-ux/efficient-technologies-site --json headRefOid,isDraft,statusCheckRollup,url | ConvertFrom-Json
if ($pr.headRefOid -ne $localHead) { throw 'PR head is not the qualified SHA' }
$failed = @($pr.statusCheckRollup | Where-Object { $_.status -ne 'COMPLETED' -or $_.conclusion -ne 'SUCCESS' })
if ($failed.Count -ne 0) { throw 'Not every hosted check is successful' }
```

Require successful Performance contract, SEO and GEO validation, and Cloudflare Pages checks for `$localHead`.

- [ ] **Step 4: Derive and validate the immutable Cloudflare preview**

```powershell
$cloudflare = @($pr.statusCheckRollup | Where-Object { $_.name -eq 'Cloudflare Pages' })
if ($cloudflare.Count -ne 1) { throw 'Expected one Cloudflare Pages check' }
$deploymentId = [IO.Path]::GetFileName(([Uri]$cloudflare[0].detailsUrl).AbsolutePath)
if ($deploymentId -notmatch '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$') { throw "Unexpected Cloudflare deployment id '$deploymentId'" }
$alias = $deploymentId.Split('-')[0]
$preview = "https://$alias.efficient-technologies-site.pages.dev"
$previewResponse = Invoke-WebRequest -Uri "$preview/" -MaximumRedirection 0 -UseBasicParsing
if ($previewResponse.StatusCode -ne 200) { throw 'Immutable preview root is unavailable' }
```

Record `localHead`, deployment ID, immutable URL, response headers, and Cloudflare check details in `preview-deployment.json`. Do not use the moving branch alias for any release gate.

- [ ] **Step 5: Run the expanded delivery contract**

Source-lock and adapt `homepage-inline-preview-pr2-v11/preview-route-header-font-probe.mjs`. Preserve its 43 existing checks, changing only styles revision 3 to 4. Add exactly:

1. mobile AVIF status 200;
2. mobile AVIF `Content-Type` containing `image/avif`;
3. exact selected AVIF bytes;
4. exact selected AVIF SHA-256;
5. exact `Content-Length`;
6. immutable one-year cache;
7. ETag present;
8. legacy WebP status 200;
9. legacy WebP exact SHA-256 `098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb`;
10. legacy WebP immutable one-year cache;
11. approved design-spec public path returns a real 404; and
12. implementation-plan public path returns a real 404.

Expected: exactly 55/55 delivery checks. Also require `x-robots-tag: noindex` on preview HTML, real 404 behavior for the release-verification route, Brotli HTML/CSS delivery, all eight real routes, and no redirect to production.

- [ ] **Step 6: Run immutable-preview browser and request gates**

Source-lock and adapt the accepted V11 preview harnesses. Run:

- the exact five-case no-script poster-selection matrix from Task 4;
- normal mobile video takeover;
- the unchanged 13-case/136-check matrix;
- an exact request graph at 412x823; and
- a desktop 1440x900 request graph.

Require mobile AVIF exactly once and legacy WebP zero times at 412x823 before video takeover. Require legacy WebP exactly once and mobile AVIF zero times at 1440x900 with JavaScript disabled. Require no double poster request, no broken request, no console error, and full video/animation behavior.

- [ ] **Step 7: Run the six official preview Lighthouse reports once**

Source-lock and adapt `homepage-inline-preview-pr2-v11/run-preview-lighthouse.ps1`. Set the immutable preview URL and create exactly three fresh mobile and three fresh desktop first-run reports. Refuse existing report directories. Use Lighthouse 13.4.0, one fresh Chrome profile and debug port per report, no retry, no replacement, and cleanup in `finally`.

For all three mobile reports require:

- performance score at least 0.90;
- simulated LCP at most 2500 ms;
- CLS at most 0.02;
- exactly one mobile AVIF request and zero legacy WebP requests.

Require the numeric mobile LCP median at most 2500 ms. For all three desktop reports require performance at least 0.90, CLS at most 0.02, total transfer at most 4.5 MiB, exactly one legacy WebP request, and zero mobile AVIF requests. Require every report SHA-256 and cleanup result in `preview-summary.json`. After the suite, require zero owned Chrome processes, zero occupied debug ports, and deletion of all six temporary profiles.

- [ ] **Step 8: Keep draft or mark ready mechanically**

If any hosted, delivery, browser, request, or Lighthouse gate fails, leave PR #2 draft, leave production unchanged, record the exact failed first-run evidence, and stop.

Only after every gate passes:

```powershell
gh pr ready 2 --repo tarik-ux/efficient-technologies-site
if ($LASTEXITCODE -ne 0) { throw 'Could not mark qualified PR ready' }
```

Record the qualified head SHA and immutable preview URL. Do not merge a different SHA.

---

### Task 9: Merge the qualified SHA, verify production, and revert on regression

**Files:**

- Create evidence: `output/playwright/poster-mobile-crop-production-v2/*`
- Create evidence: `output/performance/2026-07-16/poster-mobile-crop-production-v2/*`
- No direct production file edits

**Interfaces:**

- Consumes: ready PR #2 at the exact preview-qualified SHA.
- Produces: squash merge, Cloudflare production deployment, production delivery/browser/Lighthouse evidence, or an immediate scoped revert.

- [ ] **Step 1: Recheck merge authority and exact SHA**

```powershell
$repo = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site'
$qualifiedHead = (git -C $repo rev-parse HEAD).Trim()
$pr = gh pr view 2 --repo tarik-ux/efficient-technologies-site --json headRefOid,isDraft,mergeStateStatus,statusCheckRollup | ConvertFrom-Json
if ($pr.headRefOid -ne $qualifiedHead) { throw 'PR head changed after preview qualification' }
if ($pr.isDraft) { throw 'PR is still draft' }
if ($pr.mergeStateStatus -notin @('CLEAN','HAS_HOOKS')) { throw "PR merge state is $($pr.mergeStateStatus)" }
$failed = @($pr.statusCheckRollup | Where-Object { $_.status -ne 'COMPLETED' -or $_.conclusion -ne 'SUCCESS' })
if ($failed.Count -ne 0) { throw 'A required check is not successful' }
```

Re-hash the selected AVIF, `css/styles.css`, manifest, and `index.html` against the qualified evidence immediately before merge.

- [ ] **Step 2: Squash-merge PR #2**

```powershell
gh pr merge 2 --repo tarik-ux/efficient-technologies-site --squash --delete-branch
if ($LASTEXITCODE -ne 0) { throw 'Merge failed; preserve exact error and stop' }
$merged = gh pr view 2 --repo tarik-ux/efficient-technologies-site --json state,mergeCommit | ConvertFrom-Json
if ($merged.state -ne 'MERGED' -or -not $merged.mergeCommit.oid) { throw 'PR did not reach MERGED state' }
$mergeSha = $merged.mergeCommit.oid
```

Store both qualified branch SHA and squash merge SHA.

- [ ] **Step 3: Wait for the production deployment of the merge SHA**

Poll this read-only command at intervals no longer than 30 seconds, reporting progress at least once per minute:

```powershell
$checkRuns = gh api -H 'Accept: application/vnd.github+json' "repos/tarik-ux/efficient-technologies-site/commits/$mergeSha/check-runs" | ConvertFrom-Json
$cloudflare = @($checkRuns.check_runs | Where-Object { $_.name -eq 'Cloudflare Pages' })
if (@($cloudflare | Where-Object { $_.conclusion -in @('failure','cancelled','timed_out','action_required') }).Count -ne 0) {
  throw 'Production Cloudflare deployment failed'
}
$productionReady = ($cloudflare.Count -eq 1 -and $cloudflare[0].status -eq 'completed' -and $cloudflare[0].conclusion -eq 'success')
```

Do not proceed until `$productionReady` is true for `$mergeSha`. Stop on failure; do not claim production completion from the merge alone.

- [ ] **Step 4: Run the production delivery contract**

Against `https://efficientautomate.com`, adapt and run the exact 55-check preview delivery contract with these environment changes only:

- production HTML must not send `x-robots-tag: noindex`;
- canonical URLs must use `https://efficientautomate.com`;
- the release-verification and both internal-document paths must return real 404 responses;
- every asset byte count, SHA-256, MIME type, ETag, and cache rule remains identical to qualified preview evidence.

Require 55/55 checks and all eight indexable routes. Verify robots.txt, sitemap.xml, JSON-LD, canonical, Open Graph, Twitter metadata, `llms.txt`, and `llms-full.txt` still match the passing SEO/GEO contract.

- [ ] **Step 5: Run production browser and request smoke**

Run the five poster-selection cases, normal video takeover, and accepted 13-case/136-check matrix against production. Require the same request exclusivity and no console/runtime failures. Confirm desktop/landscape/wider portrait use the old WebP and narrow portrait uses the new AVIF while all videos and animations retain existing behavior.

- [ ] **Step 6: Run three production mobile Lighthouse reports once**

Use Lighthouse 13.4.0 with three fresh profiles and no retries. For every report require performance at least 0.90, simulated LCP at most 2500 ms, CLS at most 0.02, exactly one mobile AVIF request, and zero legacy WebP requests. Require the three-run median at most 2500 ms and successful cleanup for every run.

- [ ] **Step 7: Close out or revert**

If production Steps 4-6 pass, write `production-verification.json` with merge SHA, production deployment identity, 55/55 delivery, browser counts, request graph, all Lighthouse values, median, evidence hashes, and `"decision":"RELEASED"`.

If any production-only gate regresses, create a scoped revert from the squash merge without modifying unrelated history:

```powershell
$revertRoot = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\poster-mobile-revert'
if (Test-Path -LiteralPath $revertRoot) { throw 'Revert checkout already exists' }
git clone https://github.com/tarik-ux/efficient-technologies-site.git $revertRoot
git -C $revertRoot switch -c revert/poster-mobile-v20260716 origin/main
git -C $revertRoot revert $mergeSha --no-edit
git -C $revertRoot push -u origin revert/poster-mobile-v20260716
gh pr create --repo tarik-ux/efficient-technologies-site `
  --head revert/poster-mobile-v20260716 `
  --base main `
  --title "revert: portrait mobile poster release" `
  --body "Reverts the qualified poster release because a production-only gate failed. Exact failure and evidence are recorded in the release task."
```

Run the same required checks on the revert PR and merge it as soon as they pass. Report the exact production failure, what remained healthy, the revert PR URL, and whether the rollback has deployed. Never label a failed production verification as released.

After the revert PR checks pass, resolve and merge it without a hand-entered number:

```powershell
$revertPr = gh pr view revert/poster-mobile-v20260716 --repo tarik-ux/efficient-technologies-site --json number,headRefName,statusCheckRollup | ConvertFrom-Json
if ($revertPr.headRefName -ne 'revert/poster-mobile-v20260716') { throw 'Unexpected revert PR head' }
$failed = @($revertPr.statusCheckRollup | Where-Object { $_.status -ne 'COMPLETED' -or $_.conclusion -ne 'SUCCESS' })
if ($failed.Count -ne 0) { throw 'Revert PR checks are not all successful' }
gh pr merge $revertPr.number --repo tarik-ux/efficient-technologies-site --squash --delete-branch
if ($LASTEXITCODE -ne 0) { throw 'Revert PR merge failed' }
```

Wait for the revert merge SHA's Cloudflare Pages check, then rerun the production delivery and browser smoke contracts to prove the prior live state is restored.
