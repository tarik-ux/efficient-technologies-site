# Deterministic Picture Poster Qualification v2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Qualify and release the existing responsive-picture poster candidate through a fresh deterministic browser experiment without changing its UI, media, motion, or runtime bytes.

**Architecture:** Reconstruct the already-qualified baseline and candidate into a fresh v2 evidence root, prove the four v1 harness defects with RED regression tests, and implement a capture-only stabilizer, baseline determinism canary, authenticated cleanup, and final evidence seal. Only a sealed browser `GREEN` permits the unchanged Lighthouse, local-promotion, preview, merge, and production sequence.

**Tech Stack:** Static HTML/CSS/JavaScript, Node.js 24.11.1 built-ins, Windows PowerShell 5.1, stable Chrome and Edge through the pinned Playwright module, FFmpeg/FFprobe 8.1.1, Lighthouse 13.4.0, Git, GitHub CLI, GitHub Actions, and Cloudflare Pages.

## Global Constraints

- The approved design is `docs/superpowers/specs/2026-07-16-deterministic-picture-poster-qualification-design.md` at commit `c35dfbcb7285be6c069440b8903cf0e38b2c3de2`.
- `C:\Users\tarik\Claude Projects\efficient-technologies\site` is the authoritative deploy source.
- `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site` is the publish checkout on `agent/performance-without-motion-loss`.
- The deploy base remains exactly `b416b8113315c95c32d4674aa54769d90c562abd`.
- The rejected v1 root is read-only: `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-v1`.
- The fresh v2 root is exactly `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-v2`.
- The v2 root must not exist before execution.
- Reproduce the v1 Task 2 baseline exactly: 47 files, digest `cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850`.
- Reproduce the v1 Task 2 candidate exactly: 48 files, digest `bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653`.
- Candidate deploy scope remains exactly one added path, eleven modified paths, and zero removed paths.
- Reuse the selected AVIF byte-exactly: 38,457 bytes, SHA-256 `9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49`.
- Keep the fallback WebP byte-exact: 120,376 bytes, SHA-256 `098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb`.
- Keep the portrait selection condition exact: `(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)`.
- Do not change HTML, CSS, JavaScript, MP4s, fonts, copy, SEO/GEO content, structured data, brand values, video behavior, motion constants, transitions, keyframes, or runtime branches.
- Do not re-encode, crop, or generate another poster asset.
- Do not relax exact overlay hashing, SSIM `0.98`, PSNR `35 dB`, runtime, matrix, Lighthouse, delivery, preview, or production gates.
- Visual capture uses a browser-only stabilizer. The stabilizer must never be written into baseline, candidate, authoritative source, publish files, or promoted output.
- Baseline determinism uses two planned independent contexts. They are fixed canary cases, not retries.
- The candidate browser sequence runs once. No replacement run, discarded result, or best-run substitution is allowed.
- Browser automation is limited to `127.0.0.1` experiment origins, the site's existing CDN script URLs, immutable Cloudflare preview, and production verification. No login reuse, cookies, proxies, stealth, bypass, form submission, upload, or new telemetry is allowed.
- Every background server or browser helper launched with `Start-Process` uses `-WindowStyle Hidden`.
- Cleanup runs exactly once, writes `browser-cleanup.json`, and never swallows cleanup failures.
- `browser-evidence-lock.json` is the last filesystem write under the sealed browser evidence root.
- A read-only seal verification writes no file under the sealed browser evidence root.
- After isolated `PROMOTE`, the complete v2 experiment root becomes read-only; release helpers and clean-checkout evidence use `output/performance/2026-07-16/poster-picture-layer-release-v2`.
- Browser `GREEN` is required before Lighthouse.
- Isolated `PROMOTE` is required before any project mutation.
- PR #2 remains draft and production unchanged after any failed pre-merge gate.
- Before any push or merge, verify active GitHub account `tarik-ux` and repository permission `push:true`.
- Evidence stays outside deploy trees.
- Before preview push, remove every tracked `docs/superpowers` file from the release tree.
- PowerShell variables do not persist across separate shell invocations; rerun each task's initialization block.

## File Map

### Fresh v2 evidence files

- `output/performance/2026-07-16/poster-picture-layer-v2/experiment-policy.json`
- `output/performance/2026-07-16/poster-picture-layer-v2/prepare-experiment.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v2/baseline/*`
- `output/performance/2026-07-16/poster-picture-layer-v2/candidate/*`
- `output/performance/2026-07-16/poster-picture-layer-v2/browser/harness-regression.test.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v2/browser/capture-stabilizer.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v2/browser/cleanup-contract.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v2/browser/evidence-seal.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v2/browser/prepare-browser-harness.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v2/browser/picture-poster.playwright.js`
- `output/performance/2026-07-16/poster-picture-layer-v2/browser/run-browser-gates.ps1`
- `output/performance/2026-07-16/poster-picture-layer-v2/browser/finalize-browser.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v2/browser/accepted-matrix/*`
- `output/performance/2026-07-16/poster-picture-layer-v2/browser/candidate-successor-matrix/*`
- `output/performance/2026-07-16/poster-picture-layer-v2/lighthouse/*`
- `output/performance/2026-07-16/poster-picture-layer-v2/finalize-experiment.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v2/final-verification.json`
- `output/performance/2026-07-16/poster-picture-layer-v2/experiment-report.md`

### Release-control evidence files created only after isolated `PROMOTE`

- `output/performance/2026-07-16/poster-picture-layer-release-v2/pin-tracked-contract.mjs`
- `output/performance/2026-07-16/poster-picture-layer-release-v2/promote-candidate.mjs`
- `output/performance/2026-07-16/poster-picture-layer-release-v2/materialize-manifest.mjs`
- `output/performance/2026-07-16/poster-picture-layer-release-v2/clean-checkout/*`

### Publish-checkout files modified only after isolated `PROMOTE`

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

### Authoritative source files modified only after isolated `PROMOTE`

- The same twelve deploy artifacts under `C:\Users\tarik\Claude Projects\efficient-technologies\site`, excluding the two `.github` files.

### Release-internal files deleted before push

- `docs/superpowers/specs/2026-07-16-mobile-poster-crop-design.md`
- `docs/superpowers/specs/2026-07-16-responsive-picture-poster-layer-design.md`
- `docs/superpowers/specs/2026-07-16-deterministic-picture-poster-qualification-design.md`
- `docs/superpowers/plans/2026-07-16-portrait-mobile-poster-delivery.md`
- `docs/superpowers/plans/2026-07-16-responsive-picture-poster-layer.md`
- `docs/superpowers/plans/2026-07-16-deterministic-picture-poster-qualification.md`

---

### Task 1: Freeze v2 and prove the four harness defects RED

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-v2/experiment-policy.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/prepare-experiment.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/harness-regression.test.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/harness-regression-red.json`
- Reference without modification: `output/performance/2026-07-16/poster-picture-layer-v1/*`

**Interfaces:**

- Consumes: frozen Git base, current documentation-only branch, v1 Task 2 records, v1 baseline/candidate trees, and v1 terminal failure artifacts.
- Produces: fresh v2 baseline/candidate trees, source locks, boundary records, and an expected 0/8 regression result.

- [ ] **Step 1: Verify local, remote, PR, and authentication boundaries**

Run:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$v1 = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v1'
$root = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v2'

if (Test-Path -LiteralPath $root) { throw "Fresh v2 root already exists: $root" }
if (@(git -C $repo status --porcelain=v1).Count -ne 0) { throw 'Publish checkout is dirty' }
$head = (git -C $repo rev-parse HEAD).Trim()
$base = (git -C $repo rev-parse b416b8113315c95c32d4674aa54769d90c562abd).Trim()
$nonDocs = @(git -C $repo diff --name-only $base..$head | Where-Object { $_ -notlike 'docs/superpowers/*' })
if ($nonDocs.Count -ne 0) { throw "Non-documentation changes exist above base: $($nonDocs -join '; ')" }

$viewer = (gh api user --jq '.login').Trim()
$repoState = gh api repos/tarik-ux/efficient-technologies-site | ConvertFrom-Json
$pr = gh pr view 2 --repo tarik-ux/efficient-technologies-site --json headRefOid,isDraft,state | ConvertFrom-Json
if ($viewer -ne 'tarik-ux') { throw "Active GitHub viewer is $viewer" }
if (-not $repoState.permissions.push) { throw 'Active account lacks push authority' }
if ($pr.state -ne 'OPEN' -or -not $pr.isDraft) { throw 'PR #2 is not open and draft' }
if ($pr.headRefOid -ne 'b416b8113315c95c32d4674aa54769d90c562abd') {
  throw "PR #2 head moved to $($pr.headRefOid)"
}
```

Expected: clean documentation-only local branch, active `tarik-ux`, `push:true`, and draft PR #2 still at `b416b81`.

- [ ] **Step 2: Create the immutable v2 policy**

Create the root and write `experiment-policy.json` exactly:

```json
{
  "schema": "efficient-technologies/poster-picture-layer-v2-policy-v1",
  "definedBeforeV2Build": true,
  "baseCommit": "b416b8113315c95c32d4674aa54769d90c562abd",
  "approvedDesignCommit": "c35dfbcb7285be6c069440b8903cf0e38b2c3de2",
  "predecessorRoot": "output/performance/2026-07-16/poster-picture-layer-v1",
  "predecessorLocks": [
    { "path": "experiment-policy.json", "bytes": 2679, "sha256": "480a059ef3e3b1743e89916d771da6860d9eccb1d2a52474f00acb9893a0b99f" },
    { "path": "locked-asset-verification.json", "bytes": 547, "sha256": "2ec69c053c4aadcd5f1a88b52bb452dda4f76b761a35d2c7f18bdae283a2f469" },
    { "path": "candidate-build.json", "bytes": 2896, "sha256": "2c213838be10d592b56ff7d012adc637916cc680d0d9916b4f62fc39bb6a883c" },
    { "path": "contract-green.json", "bytes": 68317, "sha256": "d1388fd98a3492adaf264e366848c2b24ce88f02b075a8afa792539cbbce2d0d" },
    { "path": "contract-independent-rerun.json", "bytes": 68329, "sha256": "2caf9d4dc46534d46a14d45224be66c38399258730759d3f520872cabb4fd3a7" },
    { "path": "browser/final-verification.json", "bytes": 607, "sha256": "4239ff6947af85bdd84951f887420b6554ae6425fe8d6ff502e1ac68de6d1844" },
    { "path": "browser/rendered-comparison-capture.json", "bytes": 5209, "sha256": "e6c14d1dcbd39d9f3838aaa21921fe699077a933be726f81d89703b650945212" },
    { "path": "browser/browser-program-error.json", "bytes": 315, "sha256": "90f995e12fa869130fc2162d78c705e2de74ff83d61aab4d18983c3a206402ba" },
    { "path": "browser/run-started.json", "bytes": 576, "sha256": "c72adc6b08738008d4ef2ea8da66691881def3068405fdf8a2b867115ff32fe1" },
    { "path": "browser/boundary-after.json", "bytes": 2751, "sha256": "8511765fba425c1dd57d1dbb40261f7912cb951716429877c600d3c6646cd76a" }
  ],
  "reconstruction": {
    "baselineFileCount": 47,
    "baselineDigestSha256": "cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850",
    "candidateFileCount": 48,
    "candidateDigestSha256": "bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653"
  },
  "lockedAsset": {
    "bytes": 38457,
    "sha256": "9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49",
    "width": 385,
    "height": 768,
    "ssimAll": 0.99095,
    "psnrAverageDb": 44.597879
  },
  "visualThresholds": {
    "overlayExactSha256": true,
    "minimumSsimAll": 0.98,
    "minimumPsnrAverageDb": 35,
    "baselineCanaryContextCount": 2
  },
  "browser": {
    "retryPolicy": "none",
    "decodeCaseCount": 2,
    "selectionCaseCount": 5,
    "runtimeCaseCount": 4,
    "behaviorCaseCount": 13,
    "behaviorCheckCount": 136
  },
  "lighthouse": {
    "version": "13.4.0",
    "mobilePairCount": 3,
    "minimumPerformanceScore": 0.9,
    "maximumSimulatedLcpMs": 2500,
    "maximumMedianSimulatedLcpMs": 2500,
    "maximumCls": 0.02,
    "retryPolicy": "none"
  },
  "evidenceSeal": {
    "lockFilename": "browser-evidence-lock.json",
    "excludedPaths": ["browser-evidence-lock.json"],
    "mustBeFinalFilesystemWrite": true
  }
}
```

- [ ] **Step 3: Reconstruct and authenticate fresh trees**

Create `prepare-experiment.mjs` with these required operations:

```js
const lockedTrees = {
  baseline: {
    source: path.join(v1, 'baseline'),
    target: path.join(root, 'baseline'),
    fileCount: 47,
    digestSha256: 'cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850',
  },
  candidate: {
    source: path.join(v1, 'candidate'),
    target: path.join(root, 'candidate'),
    fileCount: 48,
    digestSha256: 'bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653',
  },
};
```

The script must:

1. bind current policy bytes and SHA-256 before copying;
2. verify every predecessor lock;
3. snapshot the complete rejected v1 tree without modifying it;
4. verify both source tree digests;
5. copy with exclusive target creation;
6. verify both target tree digests;
7. verify no `.git`, symlink, junction, or reparse-point entry exists in either target;
8. record authoritative-source and publish-checkout boundaries; and
9. write `reconstruction.json`, `v1-integrity-before.json`, and `workspace-integrity-before.json`.

Run:

```powershell
node (Join-Path $root 'prepare-experiment.mjs')
if ($LASTEXITCODE -ne 0) { throw 'V2 reconstruction failed' }
```

- [ ] **Step 4: Write the regression tests before helper implementation**

Create `browser/harness-regression.test.mjs` with exactly eight named tests:

```text
canonical stabilizer makes distinct preloader phases identical
canonical stabilizer suppresses native Chromium media controls
primary failure still produces a cleanup record
cleanup failure is preserved and forces REJECT
reject command completion is distinct from experiment decision
seal written before a later log append fails verification
seal written after verdict and log passes verification
any post-seal mutation fails verification
```

Each test dynamically imports its required helper inside the test body so missing modules produce eight independent expected failures:

```js
import crypto from 'node:crypto';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const browserRoot = path.dirname(fileURLToPath(import.meta.url));
const importFresh = relativePath => {
  const href = pathToFileURL(path.join(browserRoot, relativePath)).href;
  return import(`${href}?case=${crypto.randomUUID()}`);
};

// Inside each test:
const {
  CANONICAL_CAPTURE_STYLE,
  canonicalizeCaptureState,
} = await importFresh('capture-stabilizer.mjs');
```

Use temporary directories outside v2 for seal fixtures. Every fixture cleanup uses `try/finally`.

- [ ] **Step 5: Prove RED for the expected missing behavior**

Run:

```powershell
node (Join-Path $root 'browser\harness-regression.test.mjs') `
  --output (Join-Path $root 'browser\harness-regression-red.json')
if ($LASTEXITCODE -eq 0) { throw 'Harness regression suite unexpectedly passed before implementation' }
```

Expected: 8 total, 0 passed, 8 failed because the three helper modules do not exist.

- [ ] **Step 6: Close Task 1 without tracked mutation**

Require clean Git at the same HEAD and no mutation under v1, authoritative source, publish deploy files, PR, remote, or production.

---

### Task 2: Implement deterministic helpers and turn the regression suite GREEN

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/capture-stabilizer.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/cleanup-contract.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/evidence-seal.mjs`
- Modify: `output/performance/2026-07-16/poster-picture-layer-v2/browser/harness-regression.test.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/harness-regression-green.json`

**Interfaces:**

- Consumes: the 0/8 regression contract.
- Produces: reusable capture, cleanup-decision, seal, and read-only verification helpers with 8/8 passing tests.

- [ ] **Step 1: Implement the exact capture-only CSS**

Export this exact stabilizer:

```js
export const CANONICAL_CAPTURE_STYLE = `
#preloader{
  display:flex!important;
  transform:none!important;
  transition:none!important;
}
.pre-mark{
  opacity:1!important;
  transform:scale(1)!important;
  animation:none!important;
}
.pre-chev{
  stroke-dashoffset:0!important;
  animation:none!important;
}
.pre-cur{
  opacity:1!important;
  animation:none!important;
}
.pre-label{
  display:block!important;
  visibility:visible!important;
}
.pre-count{
  display:block!important;
  visibility:visible!important;
}
video::-webkit-media-controls,
video::-webkit-media-controls-enclosure,
video::-webkit-media-controls-panel,
video::-webkit-media-controls-overlay-play-button{
  display:none!important;
  opacity:0!important;
}
`.trim();
```

- [ ] **Step 2: Implement `canonicalizeCaptureState(page)`**

The exported function must:

```js
export async function canonicalizeCaptureState(page) {
  await page.addStyleTag({ content: CANONICAL_CAPTURE_STYLE });
  return page.evaluate(async () => {
    const count = document.querySelector('#pre-count-n');
    if (count) count.textContent = '0';

    for (const video of document.querySelectorAll('video')) {
      video.controls = false;
      video.removeAttribute('controls');
      try { video.pause(); } catch {}
    }

    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

    const preloader = document.querySelector('#preloader');
    const mark = document.querySelector('.pre-mark');
    const chev = document.querySelector('.pre-chev');
    const cursor = document.querySelector('.pre-cur');
    const label = document.querySelector('.pre-label');
    const videos = Array.from(document.querySelectorAll('video'));
    const rect = element => {
      const value = element?.getBoundingClientRect();
      return value ? {
        left: value.left,
        top: value.top,
        right: value.right,
        bottom: value.bottom,
        width: value.width,
        height: value.height,
      } : null;
    };

    return {
      labelText: label?.textContent?.trim() || '',
      countText: count?.textContent?.trim() || '',
      preloaderDisplay: preloader ? getComputedStyle(preloader).display : null,
      preloaderTransform: preloader ? getComputedStyle(preloader).transform : null,
      preloaderTransition: preloader ? getComputedStyle(preloader).transitionDuration : null,
      markOpacity: mark ? getComputedStyle(mark).opacity : null,
      markTransform: mark ? getComputedStyle(mark).transform : null,
      chevronDashOffset: chev ? getComputedStyle(chev).strokeDashoffset : null,
      cursorOpacity: cursor ? getComputedStyle(cursor).opacity : null,
      activePreloaderAnimationCount: document.getAnimations().filter(animation => {
        const target = animation.effect?.target;
        return target?.closest?.('#preloader');
      }).length,
      videoControls: videos.map(video => ({
        controlsProperty: video.controls,
        controlsAttribute: video.getAttribute('controls'),
      })),
      bounds: {
        preloader: rect(preloader),
        mark: rect(mark),
        label: rect(label),
        count: rect(count),
      },
    };
  });
}
```

The screenshot helper must always use:

```js
await page.screenshot({
  path: outputPath,
  fullPage: false,
  animations: 'disabled',
  caret: 'hide',
});
```

- [ ] **Step 3: Implement cleanup decision helpers**

Create:

```js
export function evaluateCleanupRecord(record) {
  const pass = record.experimentOwnedProcessCount === 0
    && record.occupiedHarnessPortCount === 0
    && record.remainingTemporaryProfileCount === 0
    && record.recordWriteSucceeded === true;
  return { ...record, pass };
}

export function combineFailures(primaryFailure, cleanupRecord) {
  const parts = [];
  if (primaryFailure) parts.push(`PRIMARY: ${primaryFailure}`);
  if (!cleanupRecord?.pass) {
    parts.push(`CLEANUP: ${JSON.stringify(cleanupRecord)}`);
  }
  return parts.join('\n');
}

export function finalDecision(primaryFailure, cleanupRecord) {
  return !primaryFailure && cleanupRecord?.pass === true ? 'ACCEPT' : 'REJECT';
}
```

The helper CLI is exact:

```text
node cleanup-contract.mjs evaluate <absolute-cleanup-json>
node cleanup-contract.mjs combine <absolute-primary-failure-text> <absolute-cleanup-json>
```

`evaluate` prints the evaluated cleanup record. `combine` reads the primary-failure text when present, prints `{ "decision": "ACCEPT"|"REJECT", "combinedFailure": "...", "cleanup": {} }`, and exits nonzero for `REJECT`.

- [ ] **Step 4: Implement the final evidence seal**

`evidence-seal.mjs` exports:

```js
export function sealEvidence(root) {}
export function verifyEvidenceSeal(root) {}
```

Required behavior:

- inventory every regular file recursively except `browser-evidence-lock.json`;
- reject symlinks and reparse-point paths;
- require `final-verification.json`, `browser-cleanup.json`, `boundary-after.json`, and `finalizer.log`;
- write `browser-evidence-lock.json` with `flag:'wx'`;
- include relative path, bytes, and SHA-256 for every locked file;
- compute aggregate digest as SHA-256 of canonical JSON for the sorted file records;
- verify file count, every record, aggregate digest, missing paths, added paths, and changed paths;
- `verify` mode performs no writes;
- `seal` mode refuses an existing lock.

The CLI is exact:

```text
node evidence-seal.mjs seal <absolute-browser-root>
node evidence-seal.mjs verify <absolute-browser-root>
```

Output:

```json
{
  "commandStatus": "COMPLETED",
  "mode": "verify",
  "decision": "ACCEPT",
  "fileCount": 0,
  "digestSha256": ""
}
```

with real nonzero values. On mismatch, exit nonzero and print `decision:"REJECT"`.

- [ ] **Step 5: Turn all helper regressions GREEN**

Run:

```powershell
node (Join-Path $root 'browser\harness-regression.test.mjs') `
  --output (Join-Path $root 'browser\harness-regression-green.json')
if ($LASTEXITCODE -ne 0) { throw 'Harness regression suite is not GREEN' }
```

Expected: 8/8.

- [ ] **Step 6: Re-run the v1 failure fixtures independently**

Require:

- different synthetic preloader phases become identical after stabilization;
- native-control fixture becomes control-free;
- simulated cleanup failure forces `REJECT`;
- early seal plus log append fails verification;
- final seal verifies;
- one-byte post-seal mutation fails verification.

Close with clean Git and unchanged v1/source/publish boundaries.

---

### Task 3: Build and preflight the complete v2 browser harness

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/prepare-browser-harness.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/picture-poster.playwright.js`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/run-browser-gates.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/finalize-browser.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/accepted-matrix/*`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/candidate-successor-matrix/*`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/static-contract.test.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/static-contract-red.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/static-contract-green.json`
- Reference without modification: `output/performance/2026-07-15/font-fraunces-family-subset-v11/browser-matrix/*`

**Interfaces:**

- Consumes: deterministic helpers, fresh baseline/candidate, and accepted 49-file browser source.
- Produces: fully static-validated browser programs, matrices, finalizer, cleanup, and sealing flow without consuming the one-shot run.

- [ ] **Step 1: Source-lock the accepted 49-file harness**

Record every relative path, byte count, and SHA-256 from:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-15\font-fraunces-family-subset-v11\browser-matrix
```

Copy it into `accepted-matrix/` and `candidate-successor-matrix/`.

For accepted matrix, change only roots, labels, and port `4363`.

For successor matrix, make the same mechanical changes plus the exact picture observations in cases 08-11:

- observe `#world-poster img.currentSrc`;
- require picture and image viewport coverage;
- require world-video opacity `0`;
- retain all other predicates and exactly 136 checks.

Write source lock, copy lock, unified diffs, and `adaptation-verification.json`. Require 13 cases and 136 effective checks on both sides.

- [ ] **Step 2: Write the static contract RED**

Create four tests:

```text
browser program imports and applies the canonical stabilizer
browser program defines two baseline canary contexts before one candidate capture
runner records cleanup on every terminal path and never swallows cleanup failure
runner closes logs and verdict before invoking final seal
```

Run before browser program and runner exist. Expected: 0/4.

- [ ] **Step 3: Implement the browser program**

Use local URLs and ports:

```text
baseline: http://127.0.0.1:4361/
candidate: http://127.0.0.1:4362/
matrix server: 4363
```

Retain the exact v1 decode table, five selection cases, four runtime cases, and request rules.

For visual capture, execute in this order:

```js
const baselineA = await captureSurface({
  label: 'baseline-a',
  url: baselineUrl,
  selector: 'video.world-video',
  expectedPoster: 'city-poster-v20260714.webp',
});
const baselineB = await captureSurface({
  label: 'baseline-b',
  url: baselineUrl,
  selector: 'video.world-video',
  expectedPoster: 'city-poster-v20260714.webp',
});
assertDeterministicBaseline(baselineA, baselineB);
const candidate = await captureSurface({
  label: 'candidate',
  url: candidateUrl,
  selector: 'picture.world-poster',
  expectedPoster: 'city-poster-mobile-v20260716.avif',
});
```

`captureSurface` imports and applies `canonicalizeCaptureState(page)` after poster decode and fonts. It records the canonical state, hashes it, and captures full, isolated scene, and overlay-only PNGs.

Baseline canary requires exact SHA-256 equality for all three PNGs, canonical-state digest, bounds, and request graph.

Candidate comparison retains exact overlay equality, bounds equality, request exclusivity, and zero-error checks.

- [ ] **Step 4: Implement cleanup in PowerShell**

`Complete-RootCleanup` must:

1. stop exact server processes;
2. find experiment processes only when command line contains the v2 browser root or exact v2 profile root;
3. stop those processes;
4. verify ports 4361, 4362, and 4363 are closed;
5. validate the profile path remains inside the v2 browser root;
6. remove the profile root;
7. recount processes, ports, and profiles;
8. write `browser-cleanup.json`; and
9. return the evaluated record.

Use:

```powershell
$primaryFailure = $null
$cleanupRecord = $null
try {
  # fixed browser sequence
} catch {
  $primaryFailure = $_.Exception.ToString()
} finally {
  try {
    $cleanupRecord = Complete-RootCleanup
  } catch {
    $cleanupRecord = [pscustomobject]@{
      recordWriteSucceeded = $false
      experimentOwnedProcessCount = -1
      occupiedHarnessPortCount = -1
      remainingTemporaryProfileCount = -1
      cleanupException = $_.Exception.ToString()
      pass = $false
    }
    Write-Json (Join-Path $root 'browser-cleanup.json') $cleanupRecord 20
  }
}
$primaryFailurePath = Join-Path $root 'primary-failure.txt'
[IO.File]::WriteAllText($primaryFailurePath, [string]$primaryFailure, $utf8NoBom)
$combinedFailure = @(& $node $cleanupContract combine `
  $primaryFailurePath `
  (Join-Path $root 'browser-cleanup.json') 2>&1)
```

No `catch {}` is permitted around cleanup.

- [ ] **Step 5: Implement finalizer modes and sealing order**

Finalizer modes:

```text
preflight
boundary-before
visual
compatibility
visual-review-request
apply-visual-review
boundary-after
write-verdict
```

Every successful command prints:

```json
{ "commandStatus": "COMPLETED", "mode": "write-verdict", "experimentDecision": "REJECT" }
```

The runner appends finalizer output to `finalizer.log` only before sealing.
`apply-visual-review` and `write-verdict` are invoked after `finalizer.log` is closed; their stdout goes only to the parent terminal and is not appended to any file under the browser root. A well-formed visual rejection completes with exit code 0 and `experimentDecision:"REJECT"` so `write-verdict` can preserve and seal the terminal result. Only malformed review input exits nonzero.

Terminal order:

```text
browser-cleanup.json
boundary-after.json
visual-review.json when applicable
finalizer.log closed
final-verification.json
browser-evidence-lock.json
read-only seal verification to stdout
```

If a primary browser failure or cleanup failure exists, the runner must complete this terminal order itself, write `experimentDecision:"REJECT"`, seal, verify the seal read-only, and exit `2`. It must not return an unsealed failure. If all automated gates pass, it exits `3` after `visual-review-request.json`, cleanup, and boundary records; controller review then completes the remaining verdict-and-seal steps without another browser run.

- [ ] **Step 6: Turn the static contract GREEN**

Run:

```powershell
node (Join-Path $root 'browser\static-contract.test.mjs') `
  --output (Join-Path $root 'browser\static-contract-green.json')
if ($LASTEXITCODE -ne 0) { throw 'Browser static contract is not GREEN' }
```

Expected: 4/4, both matrices 13/136, no terminal artifact, no profile directory, no occupied ports, and no experiment process.

- [ ] **Step 7: Run full preflight without launching browsers**

Require:

- structural contract 20/20 twice;
- performance contract 29/29;
- SEO/GEO contract 8/8;
- helper regressions 8/8;
- static browser contract 4/4;
- exact v2 reconstruction digests;
- exact 49-file harness source lock;
- clean Git; and
- no browser terminal artifact.

Do not start the one-shot run in this task.

---

### Task 4: Run the fixed browser sequence once, review visuals, and seal evidence

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/run-started.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/baseline-determinism.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/decode-selection.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/rendered-comparison-capture.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/runtime-branches.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/visual-metrics.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/compatibility-matrix-summary.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/browser-cleanup.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/visual-review-request.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/visual-review.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/browser/final-verification.json`
- Create last: `output/performance/2026-07-16/poster-picture-layer-v2/browser/browser-evidence-lock.json`

**Interfaces:**

- Consumes: fully preflighted v2 browser harness.
- Produces: terminal sealed browser `GREEN` or `REJECT`.

- [ ] **Step 1: Re-run the final preflight**

Initialize:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$root = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v2'
```

Refuse any existing `run-started.json`, `final-verification.json`, `browser-evidence-lock.json`, profile root, occupied port, or experiment process.

- [ ] **Step 2: Consume the single fixed browser sequence**

Run exactly once:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1')
if ($LASTEXITCODE -notin @(0, 3)) {
  throw 'Browser qualification reached terminal REJECT; preserve exact evidence and stop'
}
```

Exit `3` means browser gates passed and native-scale visual review is required. It is not a failure and does not authorize a rerun.

Expected before review:

- baseline canary 2/2 contexts and 3/3 exact screenshot hashes;
- decode 2/2;
- selection 5/5;
- scene SSIM `>= 0.98`;
- scene PSNR `>= 35`;
- exact overlay identity;
- runtime 4/4;
- accepted matrix 13/13 and 136/136;
- successor matrix 13/13 and 136/136;
- cleanup `PASS`;
- boundary `PASS`; and
- `visual-review-request.json` present.

- [ ] **Step 3: Perform controller and independent visual review**

Inspect at native scale:

```text
baseline-a-full-412x823.png
baseline-b-full-412x823.png
candidate-full-412x823.png
baseline-a-scene-412x823.png
baseline-b-scene-412x823.png
candidate-scene-412x823.png
baseline-a-overlay-only-412x823.png
baseline-b-overlay-only-412x823.png
candidate-overlay-only-412x823.png
visual-diff.png
runtime-*.png
```

Both reviews must explicitly approve:

```json
{
  "noBlankFrame": true,
  "noSeam": true,
  "noStretch": true,
  "noTofu": true,
  "noRightEdgeChange": true,
  "noNativeVideoControls": true,
  "noControlLayoutChange": true,
  "preloaderCanonicalStateExact": true,
  "sceneVisuallyEquivalent": true
}
```

Write `visual-review.json` with separate `controller` and `independentReviewer` objects, reviewer identity labels, timestamps, image hashes, and `approved:true`.

- [ ] **Step 4: Finalize verdict and seal**

Run:

```powershell
node (Join-Path $root 'browser\finalize-browser.mjs') apply-visual-review
if ($LASTEXITCODE -ne 0) { throw 'Visual review application failed' }

node (Join-Path $root 'browser\finalize-browser.mjs') write-verdict
if ($LASTEXITCODE -ne 0) { throw 'Browser verdict failed' }

node (Join-Path $root 'browser\evidence-seal.mjs') seal (Join-Path $root 'browser')
if ($LASTEXITCODE -ne 0) { throw 'Browser evidence seal failed' }

node (Join-Path $root 'browser\evidence-seal.mjs') verify (Join-Path $root 'browser')
if ($LASTEXITCODE -ne 0) { throw 'Read-only browser evidence verification failed' }
```

No command may write under the browser root after `seal`.

- [ ] **Step 5: Enforce the terminal branch**

```powershell
$browserFinal = Get-Content -Raw -LiteralPath `
  (Join-Path $root 'browser\final-verification.json') | ConvertFrom-Json
if ($browserFinal.decision -eq 'REJECT') { Write-Output 'TERMINAL_BROWSER_REJECT'; exit 2 }
if ($browserFinal.decision -ne 'ACCEPT' -or $browserFinal.status -ne 'GREEN') {
  throw 'Browser verdict is inconsistent'
}
```

Any `REJECT` stops Tasks 5-9. No retry is permitted in the v2 root.

---

### Task 5: Run paired Lighthouse and issue isolated `PROMOTE` or `REJECT`

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-v2/lighthouse/matrix-plan.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/lighthouse/run-h2-lighthouse.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/lighthouse/run-local-matrix.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/lighthouse/summarize-local-matrix.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/lighthouse/reports/*`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/lighthouse/lighthouse-summary.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/finalize-experiment.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/final-verification.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v2/experiment-report.md`
- Reference without modification: `output/performance/2026-07-15/font-fraunces-family-subset-v11/lighthouse/*`

**Interfaces:**

- Consumes: sealed browser `GREEN`.
- Produces: eight fixed Lighthouse reports and terminal isolated `PROMOTE` or `REJECT`.

- [ ] **Step 1: Source-lock the proven HTTP/2+Brotli harness**

Copy and authenticate:

```text
run-h2-lighthouse.ps1
transport-server.mjs
ephemeral-cert.mjs
```

Preserve certificate, Brotli, request logging, Lighthouse flags, process ownership, profile isolation, and cleanup. Change only v2 roots, labels, schemas, and ports.

Require Lighthouse exactly:

```powershell
$lighthouseExe = 'C:\Users\tarik\AppData\Local\npm-cache\_npx\0bc745d1ba805cbe\node_modules\.bin\lighthouse.cmd'
$version = [string]::Join('', @(& $lighthouseExe --version)).Trim()
if ($LASTEXITCODE -ne 0 -or $version -cne '13.4.0') {
  throw "Unexpected Lighthouse version: $version"
}
```

- [ ] **Step 2: Create the exact eight-run plan**

Write:

```json
{
  "schema": "efficient-technologies/poster-picture-layer-v2-lighthouse-plan-v1",
  "lighthouseVersion": "13.4.0",
  "retryPolicy": "none",
  "discardedTrialCount": 0,
  "definitions": [
    { "sequence": 1, "side": "B", "site": "baseline", "formFactor": "mobile", "label": "01-baseline-mobile", "serverPort": 9641, "debugPort": 9741 },
    { "sequence": 2, "side": "C", "site": "candidate", "formFactor": "mobile", "label": "02-candidate-mobile", "serverPort": 9651, "debugPort": 9751 },
    { "sequence": 3, "side": "B", "site": "baseline", "formFactor": "mobile", "label": "03-baseline-mobile", "serverPort": 9642, "debugPort": 9742 },
    { "sequence": 4, "side": "C", "site": "candidate", "formFactor": "mobile", "label": "04-candidate-mobile", "serverPort": 9652, "debugPort": 9752 },
    { "sequence": 5, "side": "B", "site": "baseline", "formFactor": "mobile", "label": "05-baseline-mobile", "serverPort": 9643, "debugPort": 9743 },
    { "sequence": 6, "side": "C", "site": "candidate", "formFactor": "mobile", "label": "06-candidate-mobile", "serverPort": 9653, "debugPort": 9753 },
    { "sequence": 7, "side": "B", "site": "baseline", "formFactor": "desktop", "label": "07-baseline-desktop", "serverPort": 9661, "debugPort": 9761 },
    { "sequence": 8, "side": "C", "site": "candidate", "formFactor": "desktop", "label": "08-candidate-desktop", "serverPort": 9671, "debugPort": 9771 }
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

- [ ] **Step 3: Run the matrix once**

The runner refuses existing reports, profiles, occupied ports, wrong input hashes, unverified browser seal, non-GREEN browser verdict, or wrong sequence.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'lighthouse\run-local-matrix.ps1')
if ($LASTEXITCODE -ne 0) { throw 'Local Lighthouse matrix failed; do not replace reports' }
```

- [ ] **Step 4: Summarize exact thresholds**

Every candidate mobile run requires:

- score `>= 90`;
- simulated LCP `<= 2500`;
- CLS `<= 0.02`;
- one AVIF request and zero WebP requests;
- AVIF bytes `38457`;
- paired baseline WebP bytes `120376`;
- paired poster saving `81919`;
- candidate total transfer below paired baseline;
- zero failed request; and
- cleanup pass.

Candidate mobile median LCP must be `<= 2500`.

Desktop candidate requires score `>= 90`, LCP `<= 2500`, CLS `<= 0.02`, one WebP, zero AVIF, transfer increase no more than 2048 bytes, and cleanup pass.

- [ ] **Step 5: Write isolated terminal decision**

`finalize-experiment.mjs` verifies:

- policy and v1 predecessor locks;
- fresh reconstruction;
- helper and static contracts;
- sealed browser evidence by read-only verification;
- dual visual approval;
- all eight Lighthouse reports and summary;
- v1/source/publish/Git boundaries.

Write `PROMOTE` only as:

```json
{
  "decision": "PROMOTE",
  "allGatesPassed": true,
  "authority": "Exact v2 isolated candidate may be copied into authoritative site and publish checkout"
}
```

Any failure writes `REJECT` with the exact first failure and authorizes no project mutation.

- [ ] **Step 6: Enforce terminal decision**

```powershell
$verification = Get-Content -Raw -LiteralPath `
  (Join-Path $root 'final-verification.json') | ConvertFrom-Json
if ($verification.decision -eq 'REJECT') { Write-Output 'TERMINAL_REJECT'; exit 2 }
if ($verification.decision -ne 'PROMOTE' -or -not $verification.allGatesPassed) {
  throw 'Isolated v2 experiment did not produce a consistent PROMOTE'
}
```

---

### Task 6: Pin the tracked deployment contract and prove it RED

**Prerequisite:** v2 isolated `final-verification.json` is exact `PROMOTE`.

**Files:**

- Modify: `.github/scripts/performance-contract.test.mjs`
- Create evidence helper: `output/performance/2026-07-16/poster-picture-layer-release-v2/pin-tracked-contract.mjs`

**Interfaces:**

- Consumes: exact qualified v2 CSS and locked asset facts.
- Produces: one tracked test-only commit with only the four expected missing-implementation failures.

- [ ] **Step 1: Add exact release constants**

Initialize the separate release-evidence root:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$root = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v2'
$releaseRoot = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-release-v2'
if (Test-Path -LiteralPath $releaseRoot) { throw "Fresh release root already exists: $releaseRoot" }
New-Item -ItemType Directory -Path $releaseRoot -ErrorAction Stop | Out-Null
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

Append:

```js
{ logicalId: 'poster-mobile', output: mobilePoster, width: 385, height: 768 },
```

- [ ] **Step 2: Pin candidate CSS hash from v2**

Create `pin-tracked-contract.mjs`:

```js
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const project = 'C:/Users/tarik/Claude Projects/efficient-technologies';
const repo = path.join(project, 'output/publish/efficient-technologies-site');
const candidateCss = path.join(project, 'output/performance/2026-07-16/poster-picture-layer-v2/candidate/css/styles.css');
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

- [ ] **Step 3: Extend manifest, picture, geometry, CSS, revision, and header assertions**

Require the mobile manifest entry:

```js
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
```

Require exact picture markup, one source tag, decorative fallback image, absent video poster, picture CSS, transparent video CSS, no transition, style revision `4`, token revision `3`, and immutable AVIF header.

- [ ] **Step 4: Prove RED in publish and authoritative source**

Allowed failures only:

```text
versioned media manifest records passing, byte-accurate assets
poster-first media declarations cannot fetch before capability activation
homepage embeds exact revisioned CSS while other routes retain linked styles
immutable cache policy applies only to release-versioned assets
```

Any other failure stops.

- [ ] **Step 5: Commit the RED contract only**

```powershell
git -C $repo add -- .github/scripts/performance-contract.test.mjs
git -C $repo diff --cached --check
if (@(git -C $repo diff --cached --name-only).Count -ne 1) {
  throw 'RED contract commit contains more than one path'
}
git -C $repo commit -m "test: pin responsive picture poster delivery"
```

Do not push.

---

### Task 7: Promote the exact candidate locally and commit a GREEN implementation

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-release-v2/promote-candidate.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-release-v2/materialize-manifest.mjs`
- Modify the approved deploy artifacts in authoritative source and publish checkout
- Modify in publish only: `.github/performance/media-manifest.json`
- Delete all six tracked `docs/superpowers` files

**Interfaces:**

- Consumes: isolated `PROMOTE` and tracked RED contract.
- Produces: source/publish parity, 29/29 performance, 8/8 SEO/GEO, promoted browser proof, review approval, and local implementation commit.

- [ ] **Step 1: Revalidate `PROMOTE` immediately before mutation**

Initialize `$project`, `$repo`, `$root`, and the existing `$releaseRoot`. Require the release root contains only the Task 6 contract helper and its evidence records.

Run structural contract, locked-asset verification, browser-seal verification, Lighthouse summary validation, predecessor digest, v2 final-verification consistency, Git status, and remote-base readback.

Any mismatch revokes `PROMOTE`.

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

The promoter refuses symlinks, escapes, source drift, extra paths, pre-copy deploy changes, or non-PROMOTE evidence. Verify 12/12 source/publish/candidate parity.

- [ ] **Step 3: Materialize the exact manifest**

Create the mobile entry:

```js
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
```

Set release `2026-07-16`, replace any prior `poster-mobile` entry, and independently verify every field.

- [ ] **Step 4: Turn both contract suites GREEN**

Run in publish and against authoritative source:

```text
performance: 29/29
SEO/GEO: 8/8
```

- [ ] **Step 5: Qualify promoted publish without altering the sealed browser evidence**

Create fresh promoted evidence under:

```text
output/playwright/poster-picture-layer-promoted-v2
```

Run selection 5/5, runtime 4/4, candidate matrix 13/13 and 136/136, request exclusivity, deterministic visual capture, exact source/publish parity, and cleanup.

- [ ] **Step 6: Request implementation review**

Review:

- approved v2 design and plan;
- sealed v2 browser evidence;
- Lighthouse `PROMOTE`;
- tracked RED contract commit;
- complete deploy diff from `b416b81`;
- source/publish parity; and
- promoted browser evidence.

Resolve every Critical and Important finding and rerun affected gates.

- [ ] **Step 7: Preserve ignored downstream release-control copies**

Before deleting the tracked plan and specification, create an ignored control directory:

```powershell
$control = Join-Path $repo '.superpowers\sdd\deterministic-picture-poster-v2-release'
if (Test-Path -LiteralPath $control) { throw "Release-control directory already exists: $control" }
git -C $repo check-ignore --quiet .superpowers
if ($LASTEXITCODE -ne 0) { throw '.superpowers is not ignored' }
New-Item -ItemType Directory -Path $control -ErrorAction Stop | Out-Null
Copy-Item -LiteralPath `
  (Join-Path $repo 'docs\superpowers\specs\2026-07-16-deterministic-picture-poster-qualification-design.md') `
  -Destination (Join-Path $control 'design.md') -ErrorAction Stop
Copy-Item -LiteralPath `
  (Join-Path $repo 'docs\superpowers\plans\2026-07-16-deterministic-picture-poster-qualification.md') `
  -Destination (Join-Path $control 'plan.md') -ErrorAction Stop
```

Extract Task 8 and Task 9 briefs from the ignored `plan.md` copy before deletion:

```powershell
$taskBrief = 'C:/Users/tarik/.codex/plugins/cache/claude-plugins-official/superpowers/6.1.1/skills/subagent-driven-development/scripts/task-brief'
& 'C:\Program Files\Git\bin\bash.exe' $taskBrief (Join-Path $control 'plan.md') 8
if ($LASTEXITCODE -ne 0) { throw 'Task 8 brief extraction failed' }
Copy-Item -LiteralPath (Join-Path $repo '.superpowers\sdd\task-8-brief.md') `
  -Destination (Join-Path $control 'task-8-brief.md') -Force

& 'C:\Program Files\Git\bin\bash.exe' $taskBrief (Join-Path $control 'plan.md') 9
if ($LASTEXITCODE -ne 0) { throw 'Task 9 brief extraction failed' }
Copy-Item -LiteralPath (Join-Path $repo '.superpowers\sdd\task-9-brief.md') `
  -Destination (Join-Path $control 'task-9-brief.md') -Force

$records = @(
  'design.md',
  'plan.md',
  'task-8-brief.md',
  'task-9-brief.md'
) | ForEach-Object {
  $item = Get-Item -LiteralPath (Join-Path $control $_)
  [pscustomobject]@{
    relativePath = $_
    bytes = $item.Length
    sha256 = (Get-FileHash -Algorithm SHA256 -LiteralPath $item.FullName).Hash.ToLowerInvariant()
  }
}
[IO.File]::WriteAllText(
  (Join-Path $control 'control-hashes.json'),
  (($records | ConvertTo-Json -Depth 5) + [char]10),
  (New-Object System.Text.UTF8Encoding($false))
)
```

Require `git status --porcelain=v1 --untracked-files=all` not to list any `.superpowers` path.

- [ ] **Step 8: Remove every internal document**

```powershell
git -C $repo rm -- `
  docs/superpowers/specs/2026-07-16-mobile-poster-crop-design.md `
  docs/superpowers/specs/2026-07-16-responsive-picture-poster-layer-design.md `
  docs/superpowers/specs/2026-07-16-deterministic-picture-poster-qualification-design.md `
  docs/superpowers/plans/2026-07-16-portrait-mobile-poster-delivery.md `
  docs/superpowers/plans/2026-07-16-responsive-picture-poster-layer.md `
  docs/superpowers/plans/2026-07-16-deterministic-picture-poster-qualification.md
$internalDocs = @(git -C $repo ls-files 'docs/superpowers/**')
if ($internalDocs.Count -ne 0) {
  throw "Internal documents remain tracked: $($internalDocs -join '; ')"
}
```

- [ ] **Step 9: Commit the implementation**

Stage only the manifest, 12 deploy artifacts, and six documentation deletions.

```powershell
git -C $repo diff --cached --check
git -C $repo diff --cached --stat
git -C $repo commit -m "perf: add responsive picture poster layer"
```

Do not push yet.

- [ ] **Step 10: Run the final whole-branch code review**

Generate a review package from `b416b8113315c95c32d4674aa54769d90c562abd` to the implementation HEAD. The reviewer reads the ignored approved design/plan copies, complete diff, test evidence, source/publish parity, promoted browser proof, and isolated `PROMOTE`.

Resolve every Critical and Important finding in one fix wave, rerun affected gates, commit the fixes, regenerate the package, and obtain a clean re-review before Task 8.

---

### Task 8: Push once and qualify the immutable preview

**Files:**

- Create evidence: `output/performance/2026-07-16/poster-picture-layer-release-v2/clean-checkout/*`
- Create evidence: `output/playwright/poster-picture-layer-preview-pr2-v2/*`
- Create evidence: `output/performance/2026-07-16/poster-picture-layer-preview-pr2-v2/*`

**Interfaces:**

- Consumes: final local implementation HEAD.
- Produces: clean-checkout proof, one push, successful hosted checks, immutable preview, 65/65 delivery checks, browser proof, and six preview Lighthouse reports.
- After tracked documentation deletion, requirements are read from `.superpowers/sdd/deterministic-picture-poster-v2-release/task-8-brief.md` and verified against `control-hashes.json`.

- [ ] **Step 1: Verify a clean archive**

Archive HEAD into a fresh tree outside the sealed browser root. Require:

- performance 29/29;
- SEO/GEO 8/8;
- no `docs/superpowers`;
- exact asset, CSS, index, manifest, and header hashes;
- complete browser suite; and
- clean Git.

- [ ] **Step 2: Recheck GitHub authority and remote base**

```powershell
$localHead = (git -C $repo rev-parse HEAD).Trim()
$remoteBefore = (git -C $repo rev-parse origin/agent/performance-without-motion-loss).Trim()
$viewer = (gh api user --jq '.login').Trim()
$repoState = gh api repos/tarik-ux/efficient-technologies-site | ConvertFrom-Json
if ($viewer -ne 'tarik-ux') { throw "Active GitHub viewer is $viewer" }
if (-not $repoState.permissions.push) { throw 'Active account lacks push authority' }
if ($remoteBefore -ne 'b416b8113315c95c32d4674aa54769d90c562abd') {
  throw "Remote branch moved to $remoteBefore"
}
if (@(git -C $repo status --porcelain=v1).Count -ne 0) { throw 'Worktree is dirty' }
```

- [ ] **Step 3: Push exactly once**

```powershell
git -C $repo push origin agent/performance-without-motion-loss
if ($LASTEXITCODE -ne 0) { throw 'Push failed; preserve exact error and stop' }
$remoteAfter = (git -C $repo ls-remote origin refs/heads/agent/performance-without-motion-loss).Split()[0]
if ($remoteAfter -ne $localHead) { throw 'Remote head does not equal qualified local head' }
```

No force-push or amend.

- [ ] **Step 4: Wait for exact-SHA hosted checks**

Require Performance contract, SEO and GEO validation, and Cloudflare Pages success on `$localHead`.

```powershell
gh pr checks 2 --repo tarik-ux/efficient-technologies-site --watch --interval 10
if ($LASTEXITCODE -ne 0) { throw 'Hosted PR checks failed' }
```

- [ ] **Step 5: Derive immutable Cloudflare preview**

Extract the deployment UUID from the single Cloudflare check and derive:

```powershell
$preview = "https://$($deploymentId.Split('-')[0]).efficient-technologies-site.pages.dev"
```

Require root status 200 and record URL, deployment ID, SHA, headers, and check metadata.

- [ ] **Step 6: Run the 65-check preview delivery contract**

Preserve the accepted 43 checks and add 22:

1. AVIF status 200;
2. AVIF MIME contains `image/avif`;
3. AVIF bytes 38,457;
4. AVIF SHA-256 exact;
5. AVIF Content-Length exact;
6. AVIF immutable cache;
7. AVIF ETag present;
8. WebP status 200;
9. WebP MIME contains `image/webp`;
10. WebP bytes 120,376;
11. WebP SHA-256 exact;
12. WebP immutable cache;
13. WebP ETag present;
14. exact picture markup;
15. absent world-video poster;
16. exact picture/video CSS;
17. mobile-crop design path real 404;
18. responsive-picture design path real 404;
19. deterministic-v2 design path real 404;
20. portrait-mobile plan path real 404;
21. responsive-picture plan path real 404; and
22. deterministic-v2 plan path real 404.

Expected: 65/65.

- [ ] **Step 7: Run preview browser gates**

Against the immutable preview require:

- selection 5/5;
- runtime 4/4;
- behavior 13/13 and 136/136;
- mobile and desktop request graphs 2/2;
- deterministic visual capture;
- exact poster request exclusivity;
- unchanged video, scroll, scene, chapter, overlay, and animation behavior; and
- cleanup pass.

- [ ] **Step 8: Run six preview Lighthouse reports once**

Three mobile and three desktop reports, Lighthouse 13.4.0, unique profiles and ports, no retries.

Mobile: score `>=90`, LCP `<=2500`, CLS `<=0.02`, one AVIF, zero WebP, median LCP `<=2500`.

Desktop: score `>=90`, LCP `<=2500`, CLS `<=0.02`, transfer `<=4.5 MiB`, one WebP, zero AVIF.

- [ ] **Step 9: Mark PR ready only after every preview gate**

```powershell
gh pr ready 2 --repo tarik-ux/efficient-technologies-site
```

Any failure leaves PR #2 draft and production unchanged.

---

### Task 9: Merge the qualified SHA, verify production, and revert on regression

**Files:**

- Create evidence: `output/playwright/poster-picture-layer-production-v2/*`
- Create evidence: `output/performance/2026-07-16/poster-picture-layer-production-v2/*`
- No direct production file edits

**Interfaces:**

- Consumes: ready PR #2 at the exact preview-qualified SHA.
- Produces: squash merge, successful production deployment and verification, or a scoped rollback.
- After tracked documentation deletion, requirements are read from `.superpowers/sdd/deterministic-picture-poster-v2-release/task-9-brief.md` and verified against `control-hashes.json`.

- [ ] **Step 1: Recheck exact SHA, checks, and merge authority**

Require PR head equal local qualified HEAD, PR not draft, merge state `CLEAN` or `HAS_HOOKS`, every check successful, active viewer `tarik-ux`, and `push:true`.

Re-hash AVIF, WebP, CSS, index, headers, and manifest against preview evidence.

- [ ] **Step 2: Squash-merge PR #2**

```powershell
gh pr merge 2 --repo tarik-ux/efficient-technologies-site --squash --delete-branch
if ($LASTEXITCODE -ne 0) { throw 'Merge failed; preserve exact error and stop' }
$merged = gh pr view 2 --repo tarik-ux/efficient-technologies-site --json state,mergeCommit | ConvertFrom-Json
if ($merged.state -ne 'MERGED' -or -not $merged.mergeCommit.oid) {
  throw 'PR did not reach MERGED state'
}
$mergeSha = $merged.mergeCommit.oid
```

- [ ] **Step 3: Wait for production deployment of merge SHA**

Poll the merge SHA for exactly one successful Cloudflare Pages check for up to 20 minutes. Report status at least once per minute. Any terminal failure stops.

- [ ] **Step 4: Run production 65-check delivery contract**

Against `https://efficientautomate.com` require:

- 65/65 delivery checks;
- no production `x-robots-tag: noindex`;
- production canonicals;
- all six documentation paths and release-verification path return real 404s;
- preview-identical asset bytes, hashes, MIME types, cache headers, and ETags;
- robots, sitemap, Open Graph, Twitter, JSON-LD, `llms.txt`, and `llms-full.txt` pass.

- [ ] **Step 5: Run production browser qualification**

Require selection 5/5, runtime 4/4, behavior 13/13 and 136/136, request exclusivity, deterministic visual surface, unchanged video/chapter/scroll/animation behavior, and cleanup.

- [ ] **Step 6: Run three production mobile Lighthouse reports once**

Use labels:

```text
poster-picture-production-v2-mobile-1
poster-picture-production-v2-mobile-2
poster-picture-production-v2-mobile-3
```

and debug ports `9841`, `9842`, `9843`.

Every run requires score `>=90`, LCP `<=2500`, CLS `<=0.02`, one AVIF, zero WebP. Median LCP `<=2500`.

- [ ] **Step 7: Record release or perform scoped rollback**

On success write:

```json
{
  "decision": "RELEASED",
  "deliveryChecks": "65/65",
  "behaviorChecks": "136/136",
  "mobileLighthouseRuns": 3
}
```

On any production failure:

```powershell
$revertRoot = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\poster-picture-layer-v2-revert'
if (Test-Path -LiteralPath $revertRoot) { throw 'Fresh v2 revert checkout already exists' }
git clone https://github.com/tarik-ux/efficient-technologies-site.git $revertRoot
git -C $revertRoot switch -c revert/poster-picture-layer-v2 origin/main
git -C $revertRoot revert $mergeSha --no-edit
git -C $revertRoot push -u origin revert/poster-picture-layer-v2
gh pr create --repo tarik-ux/efficient-technologies-site `
  --head revert/poster-picture-layer-v2 `
  --base main `
  --title 'revert: responsive picture poster release' `
  --body 'Reverts the responsive picture poster release because a production qualification gate failed. Exact failure evidence is retained locally.'
```

Resolve the revert PR number programmatically, wait for every check, merge only after success, wait for revert deployment, rerun production delivery/browser smoke, and record whether the previous live state was restored.

Never claim release success from merge status alone.

---

## Plan Self-Review Checklist

- Every approved spec section maps to a task.
- V1 remains immutable and is never used as passing v2 evidence.
- Candidate bytes and visual/runtime behavior remain unchanged.
- Baseline canary is fixed before candidate comparison.
- Cleanup is recorded on success and failure.
- Cleanup exceptions are preserved.
- Finalizer logging ends before sealing.
- Browser evidence seal is the last browser-root write.
- Read-only verification writes nothing under the sealed root.
- Browser failure stops Lighthouse.
- Lighthouse failure stops promotion.
- Preview failure keeps PR draft.
- Production failure triggers scoped rollback.
- No placeholder steps or unspecified file paths remain.
