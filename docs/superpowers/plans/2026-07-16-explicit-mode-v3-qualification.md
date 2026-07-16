# Explicit-Mode Picture Poster Qualification v3 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Qualify and release the unchanged responsive-picture poster candidate through a fresh v3 experiment whose runner commands are statically proven compatible before the one-shot browser sequence.

**Architecture:** Reconstruct the exact baseline, candidate, and reviewed browser source into a fresh v3 root without importing v2 passing evidence. First reproduce the v2 command mismatch as RED, then adapt only the experiment namespace, prove every named runner mode GREEN, and rerun the complete static preflight. A single explicit `-Mode execute` browser run, dual visual review, Lighthouse matrix, local promotion, immutable preview, merge, and production verification follow only when each preceding gate passes.

**Tech Stack:** Static HTML/CSS/JavaScript, Node.js 24.11.1 built-ins, Windows PowerShell 5.1, stable Chrome and Edge through the pinned Playwright module, FFmpeg/FFprobe 8.1.1, Lighthouse 13.4.0, Git, GitHub CLI, GitHub Actions, and Cloudflare Pages.

## Global Constraints

- The approved design is `docs/superpowers/specs/2026-07-16-explicit-mode-v3-qualification-design.md` at commit `dcc332c6a15b41e8745eccb98e51d2905d2c29e0`, 16,590 bytes, SHA-256 `d2cfdfe906507059d2a578cbbdd056b2f2ddbc935d25038a5b3cb13f1d1b7407`.
- `C:\Users\tarik\Claude Projects\efficient-technologies\site` is the authoritative deploy source.
- `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site` is the publish checkout on `agent/performance-without-motion-loss`.
- The deploy base and remote PR head remain exactly `b416b8113315c95c32d4674aa54769d90c562abd`.
- The terminal v2 root is read-only: `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-v2`.
- The fresh v3 root is exactly `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-v3`.
- The v3 root must not exist before execution.
- V2 must not be repaired, retried, reclassified, or used as passing v3 evidence.
- Reproduce the baseline exactly: 47 files, digest `cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850`.
- Reproduce the candidate exactly: 48 files, digest `bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653`.
- Candidate deploy scope remains exactly one added path, eleven modified paths, and zero removed paths.
- Reuse the AVIF byte-exactly: 38,457 bytes, SHA-256 `9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49`.
- Keep the fallback WebP byte-exactly: 120,376 bytes, SHA-256 `098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb`.
- Keep the portrait selection condition exact: `(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)`.
- Do not change HTML, CSS, JavaScript, MP4s, fonts, copy, SEO/GEO content, structured data, brand values, video behavior, motion constants, transitions, keyframes, easing, or runtime branches.
- Do not re-encode, crop, generate, or substitute any poster asset.
- Do not relax exact overlay hashing, SSIM `0.98`, PSNR `35 dB`, runtime, matrix, Lighthouse, delivery, preview, or production gates.
- Do not add a runner default mode or a wrapper runner interface.
- Every v3 runner invocation uses a named `-Mode` argument.
- Missing or unsupported runner modes remain fail-closed.
- Ports remain `4361`, `4362`, and `4363`.
- Baseline determinism uses two planned independent contexts; they are fixed canary cases, not retries.
- Execute mode runs once. No replacement run, discarded result, repair, retry, or best-run substitution is allowed after invocation.
- Browser automation is limited to `127.0.0.1` experiment origins, the site's existing pinned CDN URLs, immutable Cloudflare preview, and production verification.
- No login, cookies, saved sessions, proxies, stealth, anti-bot bypass, CAPTCHA bypass, form submission, upload, or telemetry.
- Every background helper launched with `Start-Process` uses `-WindowStyle Hidden`.
- Process cleanup may stop only recorded owned process trees or exact-profile Chrome/Edge fallback processes.
- Cleanup runs exactly once, attempts every safe phase, aggregates errors, performs final recounts, writes `browser-cleanup.json`, and fails closed.
- `browser-evidence-lock.json` is the final filesystem write under the sealed browser evidence root.
- Read-only seal verification writes nothing under the sealed browser evidence root.
- Browser `GREEN` is required before Lighthouse.
- Isolated `PROMOTE` is required before any project mutation.
- After isolated `PROMOTE`, v3 becomes read-only; release helpers use `output/performance/2026-07-16/poster-picture-layer-release-v3`.
- PR #2 remains draft and production unchanged after any failed pre-merge gate.
- Before push or merge, verify active GitHub account `tarik-ux` and repository permission `push:true`.
- Evidence remains outside deploy trees.
- Before preview push, preserve ignored control copies and remove every tracked `docs/superpowers` file named by this plan.
- No dependency installation is permitted.
- PowerShell variables do not persist between shell invocations; rerun each task's initialization block.

## File Map

### Fresh v3 root

- `output/performance/2026-07-16/poster-picture-layer-v3/experiment-policy.json`
- `output/performance/2026-07-16/poster-picture-layer-v3/prepare-v3.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v3/predecessor/terminal-v2-task-4-run-report.md`
- `output/performance/2026-07-16/poster-picture-layer-v3/source-v2-browser/*`
- `output/performance/2026-07-16/poster-picture-layer-v3/baseline/*`
- `output/performance/2026-07-16/poster-picture-layer-v3/candidate/*`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/launch-contract.test.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/launch-contract-red.json`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/launch-contract-green.json`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/harness-regression.test.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/harness-regression-red.json`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/harness-regression-green.json`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/static-contract.test.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/static-contract-red.json`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/static-contract-green.json`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/capture-stabilizer.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/cleanup-contract.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/evidence-seal.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/prepare-browser-harness.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/picture-poster.playwright.js`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/run-browser-gates.ps1`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/finalize-browser.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/accepted-matrix/*`
- `output/performance/2026-07-16/poster-picture-layer-v3/browser/candidate-successor-matrix/*`
- `output/performance/2026-07-16/poster-picture-layer-v3/lighthouse/*`
- `output/performance/2026-07-16/poster-picture-layer-v3/finalize-experiment.mjs`
- `output/performance/2026-07-16/poster-picture-layer-v3/final-verification.json`
- `output/performance/2026-07-16/poster-picture-layer-v3/experiment-report.md`

### Release-control evidence created only after isolated `PROMOTE`

- `output/performance/2026-07-16/poster-picture-layer-release-v3/pin-tracked-contract.mjs`
- `output/performance/2026-07-16/poster-picture-layer-release-v3/promote-candidate.mjs`
- `output/performance/2026-07-16/poster-picture-layer-release-v3/materialize-manifest.mjs`
- `output/performance/2026-07-16/poster-picture-layer-release-v3/clean-checkout/*`

### Publish files modified only after isolated `PROMOTE`

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

### Internal documents removed before push

- `docs/superpowers/specs/2026-07-16-mobile-poster-crop-design.md`
- `docs/superpowers/specs/2026-07-16-responsive-picture-poster-layer-design.md`
- `docs/superpowers/specs/2026-07-16-deterministic-picture-poster-qualification-design.md`
- `docs/superpowers/specs/2026-07-16-explicit-mode-v3-qualification-design.md`
- `docs/superpowers/plans/2026-07-16-portrait-mobile-poster-delivery.md`
- `docs/superpowers/plans/2026-07-16-responsive-picture-poster-layer.md`
- `docs/superpowers/plans/2026-07-16-deterministic-picture-poster-qualification.md`
- `docs/superpowers/plans/2026-07-16-explicit-mode-v3-qualification.md`

---

### Task 1: Freeze v3, reconstruct exact inputs, and prove launch/helper/static RED

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-v3/experiment-policy.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/prepare-v3.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/predecessor/terminal-v2-task-4-run-report.md`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/source-v2-browser/*`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/baseline/*`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/candidate/*`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/browser/launch-contract.test.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/browser/launch-contract-red.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/browser/harness-regression.test.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/browser/harness-regression-red.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/browser/static-contract.test.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/browser/static-contract-red.json`
- Reference without modification: terminal v2 root, v2 Task 4 report, accepted 49-file matrix source, authoritative source, publish checkout

**Interfaces:**

- Consumes: committed v3 design and plan, terminal v2 locks, exact baseline/candidate, and reviewed v2 source allowlist.
- Produces: fresh v3 policy, authenticated inputs, immutable copied source package, and three expected RED contracts.

- [ ] **Step 1: Verify local, remote, PR, predecessor, and fresh-root boundaries**

Run:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$v2 = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v2'
$root = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v3'
$designRelative = 'docs/superpowers/specs/2026-07-16-explicit-mode-v3-qualification-design.md'
$planRelative = 'docs/superpowers/plans/2026-07-16-explicit-mode-v3-qualification.md'
$design = Join-Path $repo $designRelative
$plan = Join-Path $repo $planRelative
$terminalReport = Join-Path $repo '.superpowers\sdd\task-4-run-report.md'

if (Test-Path -LiteralPath $root) { throw "Fresh v3 root already exists: $root" }
if (-not (Test-Path -LiteralPath $v2)) { throw "Terminal v2 root is missing: $v2" }
if (@(git -C $repo status --porcelain=v1).Count -ne 0) { throw 'Publish checkout is dirty' }

$head = (git -C $repo rev-parse HEAD).Trim()
$base = (git -C $repo rev-parse b416b8113315c95c32d4674aa54769d90c562abd).Trim()
$range = "${base}..${head}"
$changed = @(git -C $repo diff --name-only $range)
if ($LASTEXITCODE -ne 0) { throw "Documentation diff failed for $range" }
$nonDocs = @($changed | Where-Object { $_ -notlike 'docs/superpowers/*' })
if ($nonDocs.Count -ne 0) { throw "Non-documentation changes exist: $($nonDocs -join '; ')" }

$designCommit = (git -C $repo log -1 --format=%H -- $designRelative).Trim()
if ($designCommit -ne 'dcc332c6a15b41e8745eccb98e51d2905d2c29e0') {
  throw "Unexpected design commit: $designCommit"
}
if ((Get-FileHash -Algorithm SHA256 -LiteralPath $design).Hash.ToLowerInvariant() -ne
    'd2cfdfe906507059d2a578cbbdd056b2f2ddbc935d25038a5b3cb13f1d1b7407') {
  throw 'Design hash mismatch'
}
if ((Get-FileHash -Algorithm SHA256 -LiteralPath $terminalReport).Hash.ToLowerInvariant() -ne
    'e87168f01be805c1715f4426ecb3352ee530b49962a2a7d6c7def82583b3c633') {
  throw 'Terminal v2 Task 4 report hash mismatch'
}

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

Expected: clean documentation-only branch, v3 absent, terminal v2 and report exact, active `tarik-ux`, `push:true`, PR #2 open/draft at `b416b81`.

- [ ] **Step 2: Create `prepare-v3.mjs` and write the policy before copying**

The script computes and binds the committed plan bytes/SHA-256 before any target copy. It writes `experiment-policy.json` with `flag:'wx'`.

Start with:

```js
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const project = 'C:/Users/tarik/Claude Projects/efficient-technologies';
const repo = path.join(project, 'output/publish/efficient-technologies-site');
const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
```

Use this exact source allowlist:

```js
const sourceAllowlist = [
  { path: 'capture-stabilizer.mjs', bytes: 3081, sha256: '369f0040d23235c711f51cee875d7f13fac9f8b72a65f03df6e6fb746155b696' },
  { path: 'cleanup-contract.mjs', bytes: 3218, sha256: '23bb8bc83e8714e5d47b4872eb3e0a2948cba2a3f8b8739f6ecaed965397eccb' },
  { path: 'evidence-seal.mjs', bytes: 12282, sha256: '35df43f8aba03b049a61f2eaf3b5b450a66118c2c55bffec1562cb43f809aa0a' },
  { path: 'harness-regression.test.mjs', bytes: 24202, sha256: 'a8e993e619c7055f1224a99769dfb46f0aa4a829df05a8b8e590b68cd303f7cc' },
  { path: 'static-contract.test.mjs', bytes: 21262, sha256: '2533fe35d536039c23fdf88517fe157183bf137135c03abb2a26c28c2480e93b' },
  { path: 'prepare-browser-harness.mjs', bytes: 22610, sha256: '00b830bc37cc5f118e71ef7456c30b6e0305e1b4ddc84072e656facdc57acbbe' },
  { path: 'picture-poster.playwright.js', bytes: 46102, sha256: 'a3da9b0a3b75d2b8ddab6dae2ddd4a78524c97c1ea3d5f58791046a6c22ac338' },
  { path: 'run-browser-gates.ps1', bytes: 32069, sha256: '85c442ea8fc94b08b5712dcb9dc4606fb82cbf3f7c82ccecc432bfe54d43a5bd' },
  { path: 'finalize-browser.mjs', bytes: 29905, sha256: '9d6e955691d955e92cbef0564d6ba53c4a5f299cdb579104283f59764dbf6c60' },
];
```

The policy contains:

```js
const policy = {
  schema: 'efficient-technologies/poster-picture-layer-v3-policy-v1',
  definedBeforeV3Build: true,
  baseCommit: 'b416b8113315c95c32d4674aa54769d90c562abd',
  approvedDesign: {
    path: 'docs/superpowers/specs/2026-07-16-explicit-mode-v3-qualification-design.md',
    commit: 'dcc332c6a15b41e8745eccb98e51d2905d2c29e0',
    bytes: 16590,
    sha256: 'd2cfdfe906507059d2a578cbbdd056b2f2ddbc935d25038a5b3cb13f1d1b7407',
  },
  approvedPlan: {
    path: 'docs/superpowers/plans/2026-07-16-explicit-mode-v3-qualification.md',
    commit: planCommit,
    bytes: planBytes,
    sha256: planSha256,
  },
  terminalV2: {
    root: 'output/performance/2026-07-16/poster-picture-layer-v2',
    browserFileCount: 117,
    browserDigestSha256: 'c9ef6a68812017dffb42b1ec656001c43ce0e994094eae2664fe62b44f40c6c8',
    task4ReportBytes: 11149,
    task4ReportSha256: 'e87168f01be805c1715f4426ecb3352ee530b49962a2a7d6c7def82583b3c633',
    decision: 'TERMINAL_REJECT',
    reusableAsPassingEvidence: false,
  },
  reconstruction: {
    baselineFileCount: 47,
    baselineDigestSha256: 'cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850',
    candidateFileCount: 48,
    candidateDigestSha256: 'bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653',
  },
  sourceAllowlist,
  launch: {
    requiredNamedModes: ['preflight', 'execute', 'finalize-review'],
    retryPolicy: 'none',
    executeInvocationLimit: 1,
  },
  visualThresholds: {
    overlayExactSha256: true,
    minimumSsimAll: 0.98,
    minimumPsnrAverageDb: 35,
    baselineCanaryContextCount: 2,
  },
  lighthouse: {
    version: '13.4.0',
    mobilePairCount: 3,
    minimumPerformanceScore: 0.9,
    maximumSimulatedLcpMs: 2500,
    maximumMedianSimulatedLcpMs: 2500,
    maximumCls: 0.02,
    retryPolicy: 'none',
  },
};
```

Before writing policy, verify `planCommit` equals `git log -1 --format=%H -- <plan path>` and the plan is tracked in the current clean HEAD.

Compute the plan lock exactly:

```js
const planRelative = 'docs/superpowers/plans/2026-07-16-explicit-mode-v3-qualification.md';
const planPath = path.join(repo, planRelative);
const planBuffer = fs.readFileSync(planPath);
const planBytes = planBuffer.length;
const planSha256 = sha256(planBuffer);
const planCommit = spawnSync(
  'git',
  ['-C', repo, 'log', '-1', '--format=%H', '--', planRelative],
  { encoding: 'utf8', windowsHide: true },
).stdout.trim();
const head = spawnSync(
  'git',
  ['-C', repo, 'rev-parse', 'HEAD'],
  { encoding: 'utf8', windowsHide: true },
).stdout.trim();
if (!planCommit || planCommit !== head) {
  throw new Error(`Plan commit ${planCommit || '(missing)'} does not equal HEAD ${head}`);
}
```

- [ ] **Step 3: Authenticate v2 and reconstruct fresh v3 inputs**

`prepare-v3.mjs` must:

1. inventory the complete terminal v2 browser root as sorted `{ relativePath, bytes, sha256 }` records;
2. require 117 files and digest `c9ef6a68812017dffb42b1ec656001c43ce0e994094eae2664fe62b44f40c6c8`;
3. authenticate every allowlisted source file;
4. snapshot the complete v2 root and the Task 4 report before copy;
5. copy the Task 4 report to `predecessor/terminal-v2-task-4-run-report.md` with exclusive creation;
6. copy v2 baseline and candidate to v3 with exclusive creation;
7. copy the nine allowlisted source files into `source-v2-browser/` with exclusive creation;
8. verify copied source bytes and hashes;
9. reject `.git`, symbolic links, junctions, and reparse points;
10. write `v2-terminal-lock.json`, `reconstruction.json`, and `workspace-integrity-before.json`; and
11. resnapshot v2 after copy and require exact equality.

Run:

```powershell
node (Join-Path $root 'prepare-v3.mjs')
if ($LASTEXITCODE -ne 0) { throw 'V3 reconstruction failed' }
```

Expected: exact baseline/candidate, exact nine-file source package, unchanged v2, source, publish, Git, PR, and production boundaries.

- [ ] **Step 4: Create fresh v3 helper and static tests before helper/program implementation**

Copy only the two test sources from `source-v2-browser/` into `browser/`, replacing these namespace tokens:

```text
poster-picture-layer-v2 -> poster-picture-layer-v3
poster-picture-v2 -> poster-picture-v3
deterministic-picture-poster-v2 -> deterministic-picture-poster-v3
responsive-picture-decode-selection-v2 -> responsive-picture-decode-selection-v3
responsive-picture-rendered-capture-v2 -> responsive-picture-rendered-capture-v3
responsive-picture-runtime-branches-v2 -> responsive-picture-runtime-branches-v3
```

Do not copy helper, runner, browser program, finalizer, or matrices yet.

Run:

```powershell
node (Join-Path $root 'browser\harness-regression.test.mjs') `
  --output (Join-Path $root 'browser\harness-regression-red.json')
if ($LASTEXITCODE -eq 0) { throw 'V3 helper regression unexpectedly passed before helper copy' }

node (Join-Path $root 'browser\static-contract.test.mjs') `
  --output (Join-Path $root 'browser\static-contract-red.json')
if ($LASTEXITCODE -eq 0) { throw 'V3 static contract unexpectedly passed before program copy' }
```

Expected:

- helper regression: 8 total, 0 passed, 8 failed with missing v3 helper modules;
- static contract: 4 total, 0 passed, 4 failed because v3 runner and browser program are absent.

- [ ] **Step 5: Create the launch-contract test and prove terminal v2 RED**

Create `browser/launch-contract.test.mjs` with exactly four named tests:

```text
approved execute command supplies named execute mode
runner accepts all and only the three documented modes
no v3 runner invocation omits the named mode
preflight and finalize commands use their named modes
```

CLI:

```text
node launch-contract.test.mjs --plan <absolute-plan> --runner <absolute-runner> --scope <v2|v3> --output <absolute-output> [--brief <absolute-task-brief>]
```

The test:

- extracts PowerShell code blocks from the plan and optional brief;
- identifies invocations whose `-File` target ends in `run-browser-gates.ps1`;
- requires named `-Mode`;
- requires exactly one execute invocation;
- requires preflight and finalize-review invocations;
- parses the runner parameter block and requires the exact `ValidateSet('preflight', 'execute', 'finalize-review')`;
- requires no default mode; and
- writes one JSON report with test names, pass/fail, command excerpts, and runner-mode facts.

Run against terminal v2:

```powershell
$v2Plan = Join-Path $repo 'docs\superpowers\plans\2026-07-16-deterministic-picture-poster-qualification.md'
$v2Runner = Join-Path $v2 'browser\run-browser-gates.ps1'
node (Join-Path $root 'browser\launch-contract.test.mjs') `
  --plan $v2Plan `
  --runner $v2Runner `
  --scope v2 `
  --output (Join-Path $root 'browser\launch-contract-red.json')
if ($LASTEXITCODE -eq 0) { throw 'Terminal v2 launch contract unexpectedly passed' }
```

Expected: 4 total, 1 passed, 3 failed. Only `runner accepts all and only the three documented modes` passes. The other three failures reproduce the no-mode execute command and absent named preflight/finalize commands.

- [ ] **Step 6: Close Task 1 without tracked mutation**

Require:

- no v3 active helper/program/runner/finalizer files beyond the three tests;
- no v3 matrices;
- no browser/server/profile/ports/process;
- no run-started, verdict, lock, or Lighthouse artifact;
- v2 and Task 4 report unchanged;
- authoritative source and publish deploy trees unchanged;
- Git clean at the same HEAD;
- remote PR unchanged.

Do not commit or push.

---

### Task 2: Adapt reviewed source, turn every contract GREEN, and preflight without browsers

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-v3/adapt-v3-harness.mjs`
- Create active browser helpers/program/runner/finalizer from `source-v2-browser/*`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/browser/launch-contract-green.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/browser/harness-regression-green.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/browser/static-contract-green.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/browser/accepted-matrix/*`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/browser/candidate-successor-matrix/*`
- Create fresh source/copy locks, diffs, adaptation verification, and preflight authentication

**Interfaces:**

- Consumes: exact copied v2 source package and three fresh RED contracts.
- Produces: normalized v3 harness, launch/helper/static GREEN, 13/136 matrices, and a no-browser preflight.

- [ ] **Step 1: Write `adapt-v3-harness.mjs` and preserve normalized source equality**

Copy these seven active files from `source-v2-browser/` to `browser/` with `flag:'wx'`:

```js
const activeFiles = [
  'capture-stabilizer.mjs',
  'cleanup-contract.mjs',
  'evidence-seal.mjs',
  'prepare-browser-harness.mjs',
  'picture-poster.playwright.js',
  'run-browser-gates.ps1',
  'finalize-browser.mjs',
];
```

Apply only these experiment-namespace replacements:

```js
const replacements = [
  ['poster-picture-layer-v2', 'poster-picture-layer-v3'],
  ['poster-picture-v2', 'poster-picture-v3'],
  ['deterministic-picture-poster-v2', 'deterministic-picture-poster-v3'],
  ['responsive-picture-decode-selection-v2', 'responsive-picture-decode-selection-v3'],
  ['responsive-picture-rendered-capture-v2', 'responsive-picture-rendered-capture-v3'],
  ['responsive-picture-runtime-branches-v2', 'responsive-picture-runtime-branches-v3'],
  ['Exact v2 profile root', 'Exact v3 profile root'],
  ['V2 baseline root', 'V3 baseline root'],
  ['V2 candidate root', 'V3 candidate root'],
  ['the v2 profile root', 'the v3 profile root'],
  ['V2 reconstruction preflight failed', 'V3 reconstruction preflight failed'],
];
```

Do not replace asset version tokens such as `v20260714`, `v20260715`, or `v20260716`. Do not replace the immutable `poster-picture-layer-v1` reference.

For every active/test file, normalize the v3 tokens back to v2 and require byte equality with `source-v2-browser/`. Write `normalized-source-verification.json` with per-file hashes and exact replacement counts.

- [ ] **Step 2: Regenerate both matrices from the immutable 49-file source**

Run the adapted `prepare-browser-harness.mjs`.

Require:

- accepted source: 49 files and exact source lock;
- accepted matrix: 49 files, 13 cases, 136 effective checks;
- successor matrix: 49 files, 13 cases, 136 effective checks;
- accepted semantic changes: zero after normalized v2-to-v3 namespace replacement;
- successor picture observation replacements: exactly 16;
- output roots under v3 only;
- ports remain `4363`;
- empty `source-preview-guard/` directories exist and contain zero entries;
- no `poster-picture-layer-v2` occurrence under active v3 browser files or matrices.

- [ ] **Step 3: Turn helper and static contracts GREEN**

Run each exact output path once:

```powershell
node (Join-Path $root 'browser\harness-regression.test.mjs') `
  --output (Join-Path $root 'browser\harness-regression-green.json')
if ($LASTEXITCODE -ne 0) { throw 'V3 helper contract is not GREEN' }

node (Join-Path $root 'browser\static-contract.test.mjs') `
  --output (Join-Path $root 'browser\static-contract-green.json')
if ($LASTEXITCODE -ne 0) { throw 'V3 static browser contract is not GREEN' }
```

Expected: helper 8/8 and static 4/4.

The static contract must retain the reviewed v2 fixes:

- picture and video poster decode before fonts and canonicalization;
- exact three screenshot option blocks;
- two baseline contexts before candidate;
- recorded PID/descendant process ownership;
- unrelated path-mentioning processes excluded;
- exact-profile browser fallback only;
- exhaustive error-aggregating cleanup;
- final recount after injected cleanup failure;
- explicit `about:`, `data:`, `blob:` non-network allowlist;
- log close, verdict, seal, read-only verify order.

- [ ] **Step 4: Turn the v3 launch contract GREEN**

Run:

```powershell
$v3Plan = Join-Path $repo 'docs\superpowers\plans\2026-07-16-explicit-mode-v3-qualification.md'
$v3Runner = Join-Path $root 'browser\run-browser-gates.ps1'
node (Join-Path $root 'browser\launch-contract.test.mjs') `
  --plan $v3Plan `
  --runner $v3Runner `
  --scope v3 `
  --output (Join-Path $root 'browser\launch-contract-green.json')
if ($LASTEXITCODE -ne 0) { throw 'V3 launch contract is not GREEN' }
```

Expected: 4/4.

Require the exact plan commands:

```text
-Mode preflight
-Mode execute
-Mode finalize-review
```

and zero no-mode runner invocation in any PowerShell code block.

- [ ] **Step 5: Run the complete no-browser contract suite**

Require:

```text
structural candidate contract: 20/20 twice
performance contract: 29/29
SEO/GEO contract: 8/8
helper regression: 8/8
static browser contract: 4/4
launch contract: 4/4
accepted matrix: 13/136
successor matrix: 13/136
```

Run Node syntax on all active `.mjs`/`.js` files and PowerShell parser checks on the root runner and both matrix runners.

- [ ] **Step 6: Run explicit safe preflight and prove it is read-only**

Before preflight, snapshot every regular file under the v3 browser root as path, bytes, SHA-256, and `LastWriteTimeUtc`.

Run exactly:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode preflight
if ($LASTEXITCODE -ne 0) { throw 'V3 explicit preflight failed' }
```

After preflight, require:

- the complete snapshot is byte/hash/mtime identical;
- no `run-started.json`, `final-verification.json`, or `browser-evidence-lock.json`;
- no terminal browser artifact;
- profile root absent;
- ports `4361`, `4362`, `4363` free;
- zero experiment-owned process;
- Git clean;
- v2/source/publish/baseline/candidate boundaries exact.

- [ ] **Step 7: Review Task 2 before browser consumption**

Independent review must inspect:

- source locks and normalized equality;
- exact replacements;
- fresh RED/GREEN artifacts;
- launch-contract parser and plan/runner compatibility;
- matrices 13/136;
- process ownership and cleanup;
- decode/fonts/canonicalization order;
- explicit named preflight;
- proof that execute mode has never been invoked.

Resolve every Critical and Important finding with focused TDD and re-review. Do not commit or push.

---

### Task 3: Consume execute mode once, complete dual visual review, and seal browser evidence

**Files:**

- Create browser run artifacts under `output/performance/2026-07-16/poster-picture-layer-v3/browser/`
- Create: `.superpowers/sdd/task-3-run-report.md`
- Create: `visual-review.json`
- Create last: `browser-evidence-lock.json`

**Interfaces:**

- Consumes: independently approved no-browser v3 preflight.
- Produces: terminal sealed browser `GREEN` or `REJECT`.

- [ ] **Step 1: Generate and authenticate the Task 3 brief**

Extract Task 3 from this committed plan with the Subagent-Driven Development `task-brief` helper.

Run the launch contract again with the brief:

```powershell
$brief = Join-Path $repo '.superpowers\sdd\task-3-brief.md'
node (Join-Path $root 'browser\launch-contract.test.mjs') `
  --plan (Join-Path $repo 'docs\superpowers\plans\2026-07-16-explicit-mode-v3-qualification.md') `
  --runner (Join-Path $root 'browser\run-browser-gates.ps1') `
  --scope v3 `
  --brief $brief `
  --output (Join-Path $root 'browser\launch-contract-pre-execute.json')
if ($LASTEXITCODE -ne 0) { throw 'Task 3 brief launch contract is not GREEN' }
```

Expected: 4/4 and exact named execute mode in the brief.

- [ ] **Step 2: Re-run final explicit preflight**

Refuse any existing:

```text
run-started.json
final-verification.json
browser-evidence-lock.json
profiles/
occupied 4361/4362/4363 port
experiment-owned process
```

Run exactly:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode preflight
if ($LASTEXITCODE -ne 0) { throw 'Final v3 preflight failed' }
```

- [ ] **Step 3: Consume execute mode exactly once**

The fresh Task 3 run implementer invokes:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode execute
$browserExit = $LASTEXITCODE
if ($browserExit -notin @(0, 3)) {
  throw "Browser qualification reached terminal REJECT with exit $browserExit; preserve exact evidence and stop"
}
```

Rules:

- invocation count is exactly one;
- no retry, repair, replacement, or second execute call;
- exit `3` means automated gates passed and visual review is required;
- exit `2` or any other nonzero exit is terminal;
- unexpected exit `0` before visual review is preserved and reviewed without rerun.

Expected before review:

- baseline canary 2/2 contexts and 3/3 exact screenshot hashes;
- decode 2/2;
- selection 5/5;
- scene SSIM `>=0.98`;
- scene PSNR `>=35`;
- overlay exact;
- runtime 4/4;
- accepted matrix 13/136;
- successor matrix 13/136;
- cleanup `PASS`;
- boundary `PASS`;
- `visual-review-request.json` present;
- exit `3`.

- [ ] **Step 4: Perform controller visual review at native scale**

Controller inspects:

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

Controller records each image path, bytes, SHA-256, native dimensions, timestamp, and:

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

- [ ] **Step 5: Perform independent visual review**

A fresh read-only reviewer inspects the same native-scale images without reading the controller verdict first.

The reviewer returns the same nine booleans, image hashes, timestamp, and an independent `approved` decision. Any disagreement produces visual `REJECT`.

- [ ] **Step 6: Write `visual-review.json`**

Use these exact check keys:

```js
const requiredCheckNames = [
  'noBlankFrame',
  'noSeam',
  'noStretch',
  'noTofu',
  'noRightEdgeChange',
  'noNativeVideoControls',
  'noControlLayoutChange',
  'preloaderCanonicalStateExact',
  'sceneVisuallyEquivalent',
];
```

The file has exact schema
`efficient-technologies/poster-picture-layer-v3-visual-review-v1` and:

- `controller.identity` exact `root-controller`;
- `independentReviewer.identity` exact `task-3-independent-visual-reviewer`;
- real ISO-8601 UTC timestamps captured after each review;
- exactly the nine check keys for each reviewer;
- `approved` computed as `requiredCheckNames.every(name => checks[name] === true)`;
- `imageRecords` containing every inspected relative path, bytes, SHA-256, width, and height.

Reject missing/extra check keys, duplicate image paths, non-UTC timestamps, mismatched image hashes, or an `approved` value inconsistent with the checks. Write `visual-review.json` exactly once with exclusive creation after both reviews complete.

- [ ] **Step 7: Finalize and seal exactly once**

Run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode finalize-review
$finalizeExit = $LASTEXITCODE
if ($finalizeExit -notin @(0, 2)) {
  throw "V3 visual finalization returned unexpected exit $finalizeExit; preserve terminal evidence"
}
```

Require:

```text
visual-review.json
finalizer.log closed
final-verification.json
browser-evidence-lock.json final write
read-only seal verification ACCEPT
```

No file under the browser root may change after the lock.

- [ ] **Step 8: Enforce the terminal branch and review Task 3**

```powershell
$browserFinal = Get-Content -Raw -LiteralPath `
  (Join-Path $root 'browser\final-verification.json') | ConvertFrom-Json
if ($browserFinal.decision -eq 'REJECT') { Write-Output 'TERMINAL_BROWSER_REJECT'; exit 2 }
if ($browserFinal.decision -ne 'ACCEPT' -or $browserFinal.status -ne 'GREEN') {
  throw 'Browser verdict is inconsistent'
}
```

Independent task review verifies one execute call, dual visual review, cleanup, terminal order, final lock, read-only verification, and unchanged protected boundaries.

Any `REJECT` stops Tasks 4-8. No v3 retry is permitted.

---

### Task 4: Run paired Lighthouse and issue isolated `PROMOTE` or `REJECT`

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-v3/lighthouse/matrix-plan.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/lighthouse/run-h2-lighthouse.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/lighthouse/run-local-matrix.ps1`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/lighthouse/summarize-local-matrix.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/lighthouse/reports/*`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/lighthouse/lighthouse-summary.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/finalize-experiment.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/final-verification.json`
- Create: `output/performance/2026-07-16/poster-picture-layer-v3/experiment-report.md`
- Reference without modification: `output/performance/2026-07-15/font-fraunces-family-subset-v11/lighthouse/*`

**Interfaces:**

- Consumes: sealed v3 browser `GREEN`.
- Produces: eight fixed Lighthouse reports and terminal isolated `PROMOTE` or `REJECT`.

- [ ] **Step 1: Source-lock the proven HTTP/2+Brotli harness**

Authenticate and copy:

```text
run-h2-lighthouse.ps1
transport-server.mjs
ephemeral-cert.mjs
```

Preserve certificate generation, Brotli, request logging, flags, process ownership, profile isolation, and cleanup. Change only v3 roots, labels, schemas, and fixed ports.

Require:

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
  "schema": "efficient-technologies/poster-picture-layer-v3-lighthouse-plan-v1",
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
if ($LASTEXITCODE -ne 0) { throw 'V3 Lighthouse matrix failed; do not replace reports' }
```

- [ ] **Step 4: Summarize exact thresholds**

Every candidate mobile run requires:

- score `>=90`;
- simulated LCP `<=2500`;
- CLS `<=0.02`;
- one AVIF and zero WebP requests;
- AVIF bytes `38457`;
- paired baseline WebP bytes `120376`;
- paired poster saving `81919`;
- candidate transfer below paired baseline;
- zero failed request;
- cleanup pass.

Candidate mobile median LCP must be `<=2500`.

Desktop candidate requires score `>=90`, LCP `<=2500`, CLS `<=0.02`, one WebP, zero AVIF, transfer increase no more than 2048 bytes, and cleanup pass.

- [ ] **Step 5: Write isolated terminal decision**

`finalize-experiment.mjs` verifies:

- policy, design, plan, terminal-v2 locks, and copied source allowlist;
- fresh v3 reconstruction;
- launch/helper/static contracts;
- sealed browser evidence by read-only verification;
- dual visual approval;
- all eight Lighthouse reports and summary;
- v2/source/publish/Git/PR boundaries.

Write `PROMOTE` only as:

```json
{
  "decision": "PROMOTE",
  "allGatesPassed": true,
  "authority": "Exact v3 isolated candidate may be copied into authoritative site and publish checkout"
}
```

Any failure writes `REJECT` with the exact first failure and authorizes no project mutation.

- [ ] **Step 6: Enforce the isolated decision and review Task 4**

```powershell
$verification = Get-Content -Raw -LiteralPath `
  (Join-Path $root 'final-verification.json') | ConvertFrom-Json
if ($verification.decision -eq 'REJECT') { Write-Output 'TERMINAL_REJECT'; exit 2 }
if ($verification.decision -ne 'PROMOTE' -or -not $verification.allGatesPassed) {
  throw 'Isolated v3 experiment did not produce a consistent PROMOTE'
}
```

Independent review verifies all eight reports, thresholds, no retry, cleanup, final decision, and immutable boundaries.

---

### Task 5: Pin the tracked deployment contract and prove it RED

**Prerequisite:** v3 isolated `final-verification.json` is exact `PROMOTE`.

**Files:**

- Modify: `.github/scripts/performance-contract.test.mjs`
- Create evidence helper: `output/performance/2026-07-16/poster-picture-layer-release-v3/pin-tracked-contract.mjs`

**Interfaces:**

- Consumes: exact qualified v3 CSS and locked asset facts.
- Produces: one tracked test-only commit with only four expected missing-implementation failures.

- [ ] **Step 1: Create the fresh release-control root**

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$root = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v3'
$releaseRoot = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-release-v3'
if (Test-Path -LiteralPath $releaseRoot) { throw "Fresh release root already exists: $releaseRoot" }
New-Item -ItemType Directory -Path $releaseRoot -ErrorAction Stop | Out-Null
```

- [ ] **Step 2: Add exact release constants and mobile manifest declaration**

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

- [ ] **Step 3: Pin the qualified CSS hash from v3**

Create `pin-tracked-contract.mjs` with exact single-anchor replacement:

```js
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const project = 'C:/Users/tarik/Claude Projects/efficient-technologies';
const repo = path.join(project, 'output/publish/efficient-technologies-site');
const candidateCss = path.join(project, 'output/performance/2026-07-16/poster-picture-layer-v3/candidate/css/styles.css');
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

- [ ] **Step 4: Add exact manifest, markup, geometry, CSS, revision, and header assertions**

Require:

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

Require exact picture markup, one `<source>`, decorative fallback image, absent video poster, picture CSS, transparent video CSS, no transition, style revision `4`, token revision `3`, and immutable AVIF header.

- [ ] **Step 5: Prove RED in publish and authoritative source**

Allowed failures only:

```text
versioned media manifest records passing, byte-accurate assets
poster-first media declarations cannot fetch before capability activation
homepage embeds exact revisioned CSS while other routes retain linked styles
immutable cache policy applies only to release-versioned assets
```

Any other failure stops.

- [ ] **Step 6: Commit the RED contract only and review**

```powershell
git -C $repo add -- .github/scripts/performance-contract.test.mjs
git -C $repo diff --cached --check
if (@(git -C $repo diff --cached --name-only).Count -ne 1) {
  throw 'RED contract commit contains more than one path'
}
git -C $repo commit -m "test: pin responsive picture poster delivery"
```

Independent review confirms only the test contract changed and only the four expected failures remain. Do not push.

---

### Task 6: Promote the exact candidate locally, obtain GREEN, and commit

**Files:**

- Create: `output/performance/2026-07-16/poster-picture-layer-release-v3/promote-candidate.mjs`
- Create: `output/performance/2026-07-16/poster-picture-layer-release-v3/materialize-manifest.mjs`
- Modify the twelve approved deploy artifacts in source and publish
- Modify in publish only: `.github/performance/media-manifest.json`
- Delete all eight tracked `docs/superpowers` files listed in the File Map

**Interfaces:**

- Consumes: isolated `PROMOTE` and tracked RED contract.
- Produces: source/publish parity, 29/29 performance, 8/8 SEO/GEO, promoted browser proof, review approval, and local implementation commit.

- [ ] **Step 1: Revalidate `PROMOTE` immediately before mutation**

Require:

- release root contains only Task 5 helper/evidence;
- v3 final decision exact `PROMOTE`;
- browser seal verifies read-only;
- Lighthouse summary and all reports exact;
- launch/helper/static contracts exact;
- v2 predecessor and v3 reconstruction exact;
- Git contains only the reviewed RED contract commit;
- remote branch remains `b416b81`;
- active viewer `tarik-ux`, `push:true`.

Any mismatch revokes promotion.

- [ ] **Step 2: Copy only the approved deploy paths**

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

The promoter refuses symlinks, path escapes, source drift, extra paths, pre-copy deploy changes, or non-PROMOTE evidence. Verify 12/12 candidate/source/publish parity.

- [ ] **Step 3: Materialize the exact manifest**

Use:

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

- [ ] **Step 4: Turn source and publish contracts GREEN**

Run:

```text
performance: 29/29
SEO/GEO: 8/8
```

against publish and authoritative source.

- [ ] **Step 5: Qualify promoted publish outside sealed v3 evidence**

Use fresh:

```text
output/playwright/poster-picture-layer-promoted-v3
```

Require:

- selection 5/5;
- runtime 4/4;
- successor matrix 13/136;
- request exclusivity;
- deterministic visual capture;
- exact source/publish parity;
- unchanged video, scroll, scene, chapter, overlay, and animation behavior;
- cleanup pass.

- [ ] **Step 6: Request implementation review**

Review:

- v3 design and plan;
- sealed browser evidence;
- isolated Lighthouse `PROMOTE`;
- tracked RED contract commit;
- complete deploy diff from `b416b81`;
- source/publish parity;
- promoted browser evidence.

Resolve all Critical and Important findings and rerun affected gates.

- [ ] **Step 7: Preserve ignored downstream control copies**

```powershell
$control = Join-Path $repo '.superpowers\sdd\explicit-mode-v3-release'
if (Test-Path -LiteralPath $control) { throw "Control directory exists: $control" }
git -C $repo check-ignore --quiet .superpowers
if ($LASTEXITCODE -ne 0) { throw '.superpowers is not ignored' }
New-Item -ItemType Directory -Path $control -ErrorAction Stop | Out-Null

Copy-Item -LiteralPath `
  (Join-Path $repo 'docs\superpowers\specs\2026-07-16-explicit-mode-v3-qualification-design.md') `
  -Destination (Join-Path $control 'design.md') -ErrorAction Stop
Copy-Item -LiteralPath `
  (Join-Path $repo 'docs\superpowers\plans\2026-07-16-explicit-mode-v3-qualification.md') `
  -Destination (Join-Path $control 'plan.md') -ErrorAction Stop
```

Extract Task 7 and Task 8 briefs from the ignored plan copy, copy them to the control directory, and write `control-hashes.json` containing relative path, bytes, and SHA-256 for:

```text
design.md
plan.md
task-7-brief.md
task-8-brief.md
```

Require `.superpowers` absent from `git status --porcelain=v1 --untracked-files=all`.

- [ ] **Step 8: Remove every internal document**

```powershell
git -C $repo rm -- `
  docs/superpowers/specs/2026-07-16-mobile-poster-crop-design.md `
  docs/superpowers/specs/2026-07-16-responsive-picture-poster-layer-design.md `
  docs/superpowers/specs/2026-07-16-deterministic-picture-poster-qualification-design.md `
  docs/superpowers/specs/2026-07-16-explicit-mode-v3-qualification-design.md `
  docs/superpowers/plans/2026-07-16-portrait-mobile-poster-delivery.md `
  docs/superpowers/plans/2026-07-16-responsive-picture-poster-layer.md `
  docs/superpowers/plans/2026-07-16-deterministic-picture-poster-qualification.md `
  docs/superpowers/plans/2026-07-16-explicit-mode-v3-qualification.md
$internalDocs = @(git -C $repo ls-files 'docs/superpowers/**')
if ($internalDocs.Count -ne 0) {
  throw "Internal documents remain tracked: $($internalDocs -join '; ')"
}
```

- [ ] **Step 9: Commit implementation and run final whole-branch review**

Stage only:

- `.github/performance/media-manifest.json`;
- twelve deploy artifacts;
- eight documentation deletions.

```powershell
git -C $repo diff --cached --check
git -C $repo diff --cached --stat
git -C $repo commit -m "perf: add responsive picture poster layer"
```

Generate final review package from `b416b8113315c95c32d4674aa54769d90c562abd` to implementation HEAD. Resolve every Critical and Important finding in one fix wave, rerun affected gates, commit fixes, regenerate package, and obtain clean re-review before Task 7.

---

### Task 7: Push once and qualify immutable preview

**Files:**

- Create evidence: `output/performance/2026-07-16/poster-picture-layer-release-v3/clean-checkout/*`
- Create evidence: `output/playwright/poster-picture-layer-preview-pr2-v3/*`
- Create evidence: `output/performance/2026-07-16/poster-picture-layer-preview-pr2-v3/*`

**Interfaces:**

- Consumes: final reviewed local implementation HEAD.
- Produces: clean archive, one push, successful hosted checks, immutable preview, 67/67 delivery checks, browser proof, and six preview Lighthouse reports.
- After documentation deletion, requirements come from `.superpowers/sdd/explicit-mode-v3-release/task-7-brief.md` authenticated by `control-hashes.json`.

- [ ] **Step 1: Verify a clean archive**

Archive HEAD into a fresh tree outside sealed v3 evidence. Require:

- performance 29/29;
- SEO/GEO 8/8;
- no `docs/superpowers`;
- exact asset, CSS, index, manifest, and header hashes;
- complete promoted browser suite;
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

No force-push, amend, or second push.

- [ ] **Step 4: Wait for exact-SHA hosted checks**

Require Performance contract, SEO and GEO validation, and Cloudflare Pages success on `$localHead`.

```powershell
gh pr checks 2 --repo tarik-ux/efficient-technologies-site --watch --interval 10
if ($LASTEXITCODE -ne 0) { throw 'Hosted PR checks failed' }
```

- [ ] **Step 5: Derive immutable Cloudflare preview**

Extract the deployment UUID from the single successful Cloudflare check:

```powershell
$preview = "https://$($deploymentId.Split('-')[0]).efficient-technologies-site.pages.dev"
```

Require root status 200 and record URL, deployment ID, SHA, headers, and check metadata.

- [ ] **Step 6: Run the 67-check preview delivery contract**

Preserve the accepted 43 checks and add 24:

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
17. `/docs/superpowers/specs/2026-07-16-mobile-poster-crop-design.md` real 404;
18. `/docs/superpowers/specs/2026-07-16-responsive-picture-poster-layer-design.md` real 404;
19. `/docs/superpowers/specs/2026-07-16-deterministic-picture-poster-qualification-design.md` real 404;
20. `/docs/superpowers/specs/2026-07-16-explicit-mode-v3-qualification-design.md` real 404;
21. `/docs/superpowers/plans/2026-07-16-portrait-mobile-poster-delivery.md` real 404;
22. `/docs/superpowers/plans/2026-07-16-responsive-picture-poster-layer.md` real 404;
23. `/docs/superpowers/plans/2026-07-16-deterministic-picture-poster-qualification.md` real 404;
24. `/docs/superpowers/plans/2026-07-16-explicit-mode-v3-qualification.md` real 404.

Expected: 67/67.

- [ ] **Step 7: Run preview browser gates**

Against immutable preview require:

- selection 5/5;
- runtime 4/4;
- behavior 13/13 and 136/136;
- mobile and desktop request graphs 2/2;
- deterministic visual capture;
- exact poster request exclusivity;
- unchanged video, scroll, scene, chapter, overlay, and animation behavior;
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

### Task 8: Merge the qualified SHA, verify production, and revert on regression

**Files:**

- Create evidence: `output/playwright/poster-picture-layer-production-v3/*`
- Create evidence: `output/performance/2026-07-16/poster-picture-layer-production-v3/*`
- No direct production file edits

**Interfaces:**

- Consumes: ready PR #2 at the exact preview-qualified SHA.
- Produces: squash merge, successful production deployment and verification, or scoped rollback.
- After documentation deletion, requirements come from `.superpowers/sdd/explicit-mode-v3-release/task-8-brief.md` authenticated by `control-hashes.json`.

- [ ] **Step 1: Recheck exact SHA, checks, and merge authority**

Require:

- PR head equals local qualified HEAD;
- PR not draft;
- merge state `CLEAN` or `HAS_HOOKS`;
- every check successful;
- active viewer `tarik-ux`;
- `push:true`;
- AVIF, WebP, CSS, index, headers, and manifest match preview evidence.

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

- [ ] **Step 4: Run production 67-check delivery contract**

Against `https://efficientautomate.com` require:

- 67/67 delivery checks;
- no production `x-robots-tag: noindex`;
- production canonicals;
- all eight documentation paths from Task 7 and `/codex-release-verification-20260715` return real 404s;
- preview-identical asset bytes, hashes, MIME types, cache headers, and ETags;
- robots, sitemap, Open Graph, Twitter, JSON-LD, `llms.txt`, and `llms-full.txt` pass.

- [ ] **Step 5: Run production browser qualification**

Require selection 5/5, runtime 4/4, behavior 13/13 and 136/136, request exclusivity, deterministic visual surface, unchanged video/chapter/scroll/animation behavior, and cleanup.

- [ ] **Step 6: Run three production mobile Lighthouse reports once**

Use:

```text
poster-picture-production-v3-mobile-1
poster-picture-production-v3-mobile-2
poster-picture-production-v3-mobile-3
```

and debug ports `9841`, `9842`, `9843`.

Every run requires score `>=90`, LCP `<=2500`, CLS `<=0.02`, one AVIF, zero WebP. Median LCP `<=2500`.

- [ ] **Step 7: Record release or perform scoped rollback**

On success:

```json
{
  "decision": "RELEASED",
  "deliveryChecks": "67/67",
  "behaviorChecks": "136/136",
  "mobileLighthouseRuns": 3
}
```

On any production failure:

```powershell
$revertRoot = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\poster-picture-layer-v3-revert'
if (Test-Path -LiteralPath $revertRoot) { throw 'Fresh v3 revert checkout already exists' }
git clone https://github.com/tarik-ux/efficient-technologies-site.git $revertRoot
git -C $revertRoot switch -c revert/poster-picture-layer-v3 origin/main
git -C $revertRoot revert $mergeSha --no-edit
git -C $revertRoot push -u origin revert/poster-picture-layer-v3
gh pr create --repo tarik-ux/efficient-technologies-site `
  --head revert/poster-picture-layer-v3 `
  --base main `
  --title 'revert: responsive picture poster release' `
  --body 'Reverts the responsive picture poster release because a production qualification gate failed. Exact failure evidence is retained locally.'
```

Resolve the revert PR number programmatically, wait for every check, merge only after success, wait for revert deployment, rerun production delivery/browser smoke, and record whether the previous live state was restored.

Never claim release success from merge status alone.

---

## Plan Self-Review Checklist

- Every approved design section maps to one of eight tasks.
- V1 and terminal v2 remain immutable and are never used as v3 passing evidence.
- V3 root must be absent before Task 1.
- Candidate, AVIF, fallback, UI, video, animation, and runtime bytes remain unchanged.
- V2 launch mismatch is reproduced as fresh RED.
- V3 launch plan, runner, and Task 3 brief must be GREEN before execute mode.
- Every runner invocation uses named `-Mode`.
- Missing mode remains fail-closed.
- Preflight writes no terminal evidence.
- Execute mode is invoked exactly once.
- Baseline canary completes before candidate comparison.
- Cleanup runs once, attempts all safe phases, aggregates errors, and performs final recounts.
- Browser evidence seal is the final browser-root write.
- Read-only verification writes nothing under the sealed root.
- Browser failure stops Lighthouse.
- Lighthouse failure stops promotion.
- Isolated `PROMOTE` precedes project mutation.
- Final whole-branch review precedes push.
- Preview failure leaves PR draft.
- Production failure triggers scoped rollback.
- Preview and production delivery contracts account for all eight documentation paths: 67/67.
- No placeholder steps, unresolved file names, unspecified runner modes, or no-argument runner commands remain.
