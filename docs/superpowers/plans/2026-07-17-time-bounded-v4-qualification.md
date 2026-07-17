# Time-Bounded Picture Poster Qualification v4 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Qualify and publish the unchanged responsive-picture poster candidate through a fresh v4 experiment that cannot hang indefinitely and cannot falsely count an absent browser profile.

**Architecture:** Reconstruct the exact v3 product inputs and an explicit allowlist of v3 harness source into a fresh v4 evidence root without copying terminal evidence. Prove the parent-process deadline, Playwright phase deadlines, phase journal, and cleanup-array correction RED then GREEN before one named one-shot browser execution. Continue through isolated Lighthouse, exact promotion, GitHub preview, merge, and production verification only while every preceding gate remains GREEN.

**Tech Stack:** Static HTML/CSS/JavaScript, Node.js 24.11.1 built-ins, Windows PowerShell 5.1, stable Chrome and Edge through the pinned Playwright module, FFmpeg/FFprobe 8.1.1, Lighthouse 13.4.0, Git, GitHub CLI, GitHub Actions, and Cloudflare Pages.

## Global Constraints

- Approved design: `docs/superpowers/specs/2026-07-17-time-bounded-v4-qualification-design.md`.
- Approved design lock after plan self-review: 19,851 bytes, SHA-256 `5a5c36c38bfab97f8459e5499d4bd55633fb461e5914be8f4efeba129ab381de`.
- Authoritative source: `C:\Users\tarik\Claude Projects\efficient-technologies\site`.
- Publish checkout: `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`.
- Branch: `agent/performance-without-motion-loss`.
- Remote and PR base before release: `b416b8113315c95c32d4674aa54769d90c562abd`.
- Terminal v3 root: `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-v3`.
- Fresh v4 root: `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-17\poster-picture-layer-v4`.
- V4 release root: `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-17\poster-picture-layer-release-v4`.
- V1, v2, and v3 are immutable; no v3 runner mode, cleanup, finalizer, or seal command may run.
- Baseline: 47 files, digest `cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850`.
- Candidate: 48 files, digest `bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653`.
- Candidate scope: exactly 1 added path, 11 modified paths, and 0 removed paths.
- AVIF: 38,457 bytes, SHA-256 `9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49`.
- WebP: 120,376 bytes, SHA-256 `098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb`.
- Selection condition: `(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)`.
- Rendered scene requires SSIM `>= 0.98` and PSNR `>= 35 dB`.
- Product HTML, CSS, AVIF, WebP, JavaScript, video, SVG, font, and text bytes remain unchanged until isolated `PROMOTE`.
- UI, world video, scroll choreography, scene changes, zoom behavior, chapter behavior, overlays, and animations remain unchanged.
- Parent deadlines are exact: picture program `300000` ms; accepted matrix `180000` ms; successor matrix `180000` ms.
- Phase deadlines are exact: context launch/new page `45000` ms; image/poster decode and fonts `15000` ms; canonicalization `15000` ms; screenshot `30000` ms; context close `15000` ms.
- Every background helper uses `-WindowStyle Hidden` and is registered before waiting.
- Process termination is limited to registered owned PIDs and exact-profile Chrome/Edge fallback processes.
- Preflight is read-only and may repeat only before execute begins.
- Execute mode runs exactly once. No retry, replacement, repair, deadline extension, cleanup rerun, or best-run substitution is allowed.
- Browser `GREEN` is required before Lighthouse; isolated `PROMOTE` is required before project mutation.
- Performance contracts must pass `29/29`; SEO/GEO contracts must pass `8/8`.
- Browser automation is limited to fixed loopback origins, the site's three pinned CDN resources, immutable Cloudflare preview, and production verification.
- No login, cookies, sessions, proxy, stealth, anti-bot bypass, form submission, upload, telemetry, dependency install, or dependency update.
- Any terminal failure stops later tasks. External failures preserve exact evidence and do not trigger a hidden retry.
- All v4 task briefs, reports, review packages, and progress records use `.superpowers/sdd/time-bounded-v4/`; no v3 SDD file may be overwritten.

## File Map

### Evidence-only v4 files

- `output/performance/2026-07-17/prepare-v4.mjs` — creates the fresh root from authenticated inputs.
- `output/performance/2026-07-17/poster-picture-layer-v4/experiment-policy.json` — v4 policy and product locks.
- `output/performance/2026-07-17/poster-picture-layer-v4/reconstruction.json` — fresh-root and copy verification.
- `output/performance/2026-07-17/poster-picture-layer-v4/v3-terminal-lock.json` — immutable predecessor snapshot.
- `output/performance/2026-07-17/poster-picture-layer-v4/workspace-integrity-before.json` — protected-tree and Git snapshot.
- `output/performance/2026-07-17/poster-picture-layer-v4/source-v3-browser/*` — exact copied source allowlist.
- `output/performance/2026-07-17/poster-picture-layer-v4/browser/runner-guards.psm1` — parent deadline and profile-state helpers.
- `output/performance/2026-07-17/poster-picture-layer-v4/browser/phase-deadline.mjs` — Playwright phase deadline primitive.
- `output/performance/2026-07-17/poster-picture-layer-v4/browser/runner-guards.tests.ps1` — PowerShell RED/GREEN tests.
- `output/performance/2026-07-17/poster-picture-layer-v4/browser/phase-deadline.test.mjs` — Node RED/GREEN tests.
- `output/performance/2026-07-17/poster-picture-layer-v4/browser/v4-hardening-static.test.mjs` — source-level deadline/journal/cleanup contract.
- `output/performance/2026-07-17/poster-picture-layer-v4/browser/process-fixture.mjs` — short-lived and hanging child fixture.
- `output/performance/2026-07-17/poster-picture-layer-v4/adapt-v4-harness.mjs` — post-RED namespace and hardening adapter.
- `output/performance/2026-07-17/poster-picture-layer-v4/browser/browser-phase-journal.jsonl` — synchronous one-shot phase evidence.
- `output/performance/2026-07-17/poster-picture-layer-v4/browser/run-browser-gates.ps1` — explicit-mode bounded runner.
- `output/performance/2026-07-17/poster-picture-layer-v4/browser/picture-poster.playwright.js` — unchanged product qualification with bounded phases.
- `output/performance/2026-07-17/poster-picture-layer-v4/lighthouse/*` — isolated local Lighthouse evidence.

### Tracked release files

- `.github/scripts/performance-contract.test.mjs` — pinned manifest, markup, geometry, revision, hash, and header contract.
- `.github/performance/media-manifest.json` — materialized AVIF record.
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
- All ten tracked `docs/superpowers` files — removed before push after ignored control copies are authenticated.

---

### Task 1: Reconstruct fresh v4 inputs and capture valid RED evidence

**Files:**

- Create: `output/performance/2026-07-17/prepare-v4.mjs`
- Create: `output/performance/2026-07-17/poster-picture-layer-v4/*`
- Create: `output/performance/2026-07-17/poster-picture-layer-v4/browser/process-fixture.mjs`
- Create: `output/performance/2026-07-17/poster-picture-layer-v4/browser/runner-guards.tests.ps1`
- Create: `output/performance/2026-07-17/poster-picture-layer-v4/browser/phase-deadline.test.mjs`
- Create: `output/performance/2026-07-17/poster-picture-layer-v4/browser/v4-hardening-static.test.mjs`

**Interfaces:**

- Consumes: immutable v3 report/design/plan, baseline, candidate, and locked browser source.
- Produces: fresh v4 reconstruction plus three focused RED records; no browser, server, profile, one-shot marker, Git mutation, or network call.

- [ ] **Step 1: Verify the execution boundary before creating v4**

Run:

```powershell
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$v3 = Join-Path $project 'output\performance\2026-07-16\poster-picture-layer-v3'
$root = Join-Path $project 'output\performance\2026-07-17\poster-picture-layer-v4'

if (Test-Path -LiteralPath $root) { throw "Fresh v4 root already exists: $root" }
if (@(git -C $repo status --porcelain=v1 --untracked-files=all).Count -ne 0) {
  throw 'Publish checkout is not clean before v4 reconstruction'
}
if ((git -C $repo branch --show-current).Trim() -ne 'agent/performance-without-motion-loss') {
  throw 'Wrong publish branch'
}
if ((git -C $repo rev-parse origin/agent/performance-without-motion-loss).Trim() -ne
  'b416b8113315c95c32d4674aa54769d90c562abd') {
  throw 'Remote tracking head moved before v4'
}

$report = Join-Path $repo '.superpowers\sdd\task-3-run-report.md'
if ((Get-Item -LiteralPath $report).Length -ne 20532) { throw 'V3 report byte lock failed' }
if ((Get-FileHash -Algorithm SHA256 -LiteralPath $report).Hash.ToLowerInvariant() -ne
  '1adef1eee2b7c8c022332bdc55b899b2b389b59a547f635dc856621d5485165a') {
  throw 'V3 report hash lock failed'
}

$ports = @(Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue |
  Where-Object { $_.LocalPort -in 4371,4372,4373 })
if ($ports.Count -ne 0) { throw 'V4 ports are occupied' }
```

Expected: clean branch, unchanged remote, v4 absent, v3 terminal lock exact, and ports `4371`, `4372`, `4373` free. V4 uses fresh ports so no old process can satisfy a readiness probe.

- [ ] **Step 2: Write the reconstruction controller**

Implement `prepare-v4.mjs` with these exact primitives:

```js
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const project = 'C:/Users/tarik/Claude Projects/efficient-technologies';
const repo = path.join(project, 'output/publish/efficient-technologies-site');
const v3 = path.join(project, 'output/performance/2026-07-16/poster-picture-layer-v3');
const root = path.join(project, 'output/performance/2026-07-17/poster-picture-layer-v4');
const specPath = path.join(repo, 'docs/superpowers/specs/2026-07-17-time-bounded-v4-qualification-design.md');
const planFlag = process.argv.indexOf('--plan');
if (planFlag < 0 || !process.argv[planFlag + 1]) throw new Error('--plan is required');
const planPath = path.resolve(process.argv[planFlag + 1]);

const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');
const fileRecord = absolutePath => {
  const value = fs.readFileSync(absolutePath);
  return { path: absolutePath, bytes: value.length, sha256: sha256(value) };
};

function walkFiles(treeRoot, current = treeRoot) {
  const rows = [];
  for (const entry of fs.readdirSync(current, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))) {
    const absolutePath = path.join(current, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Reparse point refused: ${absolutePath}`);
    if (entry.isDirectory()) rows.push(...walkFiles(treeRoot, absolutePath));
    else if (entry.isFile()) {
      const bytes = fs.readFileSync(absolutePath);
      rows.push({
        relativePath: path.relative(treeRoot, absolutePath).replaceAll('\\', '/'),
        bytes: bytes.length,
        sha256: sha256(bytes),
      });
    } else throw new Error(`Unsupported entry: ${absolutePath}`);
  }
  return rows.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
}

function snapshot(treeRoot) {
  const files = walkFiles(treeRoot);
  return { path: treeRoot, fileCount: files.length, digestSha256: sha256(JSON.stringify(files)), files };
}

function assertFile(absolutePath, bytes, digest) {
  const value = fs.readFileSync(absolutePath);
  if (value.length !== bytes || sha256(value) !== digest) {
    throw new Error(`Locked file mismatch: ${absolutePath}`);
  }
}

function copyTree(source, target) {
  if (fs.existsSync(target)) throw new Error(`Exclusive target exists: ${target}`);
  fs.mkdirSync(target, { recursive: false });
  for (const row of walkFiles(source)) {
    const from = path.join(source, ...row.relativePath.split('/'));
    const to = path.join(target, ...row.relativePath.split('/'));
    fs.mkdirSync(path.dirname(to), { recursive: true });
    fs.copyFileSync(from, to, fs.constants.COPYFILE_EXCL);
  }
}
```

Use this exact browser source allowlist:

```js
const sourceLocks = [
  ['capture-stabilizer.mjs', 3081, '369f0040d23235c711f51cee875d7f13fac9f8b72a65f03df6e6fb746155b696'],
  ['cleanup-contract.mjs', 3218, '23bb8bc83e8714e5d47b4872eb3e0a2948cba2a3f8b8739f6ecaed965397eccb'],
  ['evidence-seal.mjs', 12282, '10d1eeffdb0a97d710a65b7ff43327bcbfc95cd1c0138043aba0dbb665acf3cd'],
  ['harness-regression.test.mjs', 24202, '1eafd13b4bf9fa59c83542c74e3f98f9c7052b80efbcbe14db7f62e8ae98b132'],
  ['static-contract.test.mjs', 21262, '093df4e6d477064d482439e737ad24a6185997d4f3e2d3bdd85e2d4e65523d0e'],
  ['prepare-browser-harness.mjs', 22610, 'a8ee4d3d8d1c421cdef544fdda1331f8a4c51e559e03aa1e458da278438c35b0'],
  ['picture-poster.playwright.js', 46102, 'f5225dc31a1c8fe83d6922fee4f1a87ae6a4f0d91771b4757f16db5e709c5edf'],
  ['run-browser-gates.ps1', 32069, '8d8cbfa7dd20f13aea16fd04ed43c04e6aae331e4bbf9470e58e89e113f452f0'],
  ['finalize-browser.mjs', 29905, 'f357803ccb903d873d5ee417ab5e0aacc1d2467b1156efd6333890366e5777ce'],
  ['launch-contract.test.mjs', 16144, 'd759d29e27ded880468b1a8856fd945e97b944f6d35c475ab461f42a1a65db29'],
  ['launch-contract-correction-regression.test.mjs', 6972, 'e40d45e860d7067d43fff4c840851160eff14233d8a8556a5d69020dd793f8e5'],
  ['policy-lock-correction-regression.test.mjs', 6267, 'e5fb9edb84509c5652442bd896b8394ccc51e4be7de2a3e8bad4061a96ea0a02'],
];
```

Also authenticate `v3/experiment-policy.json` at 3,423 bytes and SHA-256 `9115cf60aa74b2d3d9b8dbca1561f94d8c8bd3953d220e6f4d7b9edc33ca6836`.

Authenticate every file before creating `root`. Then create `root`, copy each source twice without transformation—once into `source-v3-browser`, once into `browser`—and copy `baseline` and `candidate` exclusively from v3. Authenticate:

```js
const expected = {
  baseline: { fileCount: 47, digestSha256: 'cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850' },
  candidate: { fileCount: 48, digestSha256: 'bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653' },
};
```

Generate `experiment-policy.json` by parsing the locked v3 policy, replacing only exact policy/evidence path and schema values with v4 values, changing fixed ports to `4371`, `4372`, `4373`, and retaining every product lock and threshold. This policy generation does not modify either copied browser-source tree. Write pretty JSON with LF and no BOM.

Write:

```js
{
  schemaVersion: 4,
  createdAtUtc: new Date().toISOString(),
  freshRoot: true,
  predecessor: v3Snapshot,
  baseline: snapshot(path.join(root, 'baseline')),
  candidate: snapshot(path.join(root, 'candidate')),
  copiedSource: snapshot(path.join(root, 'source-v3-browser')),
  workingSource: snapshot(path.join(root, 'browser')),
  approvedSpec: fileRecord(specPath),
  committedPlan: fileRecord(planPath),
  passed: true
}
```

to `reconstruction.json`; write the complete v3 snapshot plus locked report/design/plan records to `v3-terminal-lock.json`; write source, publish, accepted-harness, V1, v2, v3, and Git snapshots to `workspace-integrity-before.json`.

- [ ] **Step 3: Run reconstruction once and verify no terminal artifacts**

Run:

```powershell
node (Join-Path $project 'output\performance\2026-07-17\prepare-v4.mjs') `
  --plan (Join-Path $repo 'docs\superpowers\plans\2026-07-17-time-bounded-v4-qualification.md')
if ($LASTEXITCODE -ne 0) { throw 'V4 reconstruction failed' }

$forbidden = @(
  'browser\run-started.json',
  'browser\browser-phase-journal.jsonl',
  'browser\browser-cleanup.json',
  'browser\visual-review.json',
  'browser\final-verification.json',
  'browser\browser-evidence-lock.json',
  'browser\profiles'
)
foreach ($relative in $forbidden) {
  if (Test-Path -LiteralPath (Join-Path $root $relative)) {
    throw "Premature terminal artifact: $relative"
  }
}
```

- [ ] **Step 4: Write the child fixture and focused tests before implementation**

Create `process-fixture.mjs`:

```js
const mode = process.argv[2];
if (mode === 'success') {
  process.stdout.write('fixture-success\n');
} else if (mode === 'exit7') {
  process.stderr.write('fixture-exit7\n');
  process.exitCode = 7;
} else if (mode === 'hang') {
  setInterval(() => {}, 1000);
} else {
  throw new Error(`Unsupported fixture mode: ${mode}`);
}
```

`runner-guards.tests.ps1` must contain six independent cases:

```text
successful child preserves stdout and exit 0
nonzero child preserves stderr and exit 7
hanging child times out with exact label PID and deadline
timeout stops only the registered child and leaves unrelated control alive
absent and present profile states serialize without null entries
timeout consumer invokes cleanup once and finishes with zero fixture processes ports and profiles
```

The test imports `runner-guards.psm1`, uses `750` ms only for its hanging fixture, enforces elapsed time between `600` and `5000` ms, and always stops its unrelated fixture in `finally`. The sixth case wraps the timeout call in a counted `finally`, removes only its contained test profile, checks ports `4371/4372/4373`, and requires cleanup count `1` with all three final recounts zero.

`phase-deadline.test.mjs` must contain six independent cases:

```text
resolved operation returns its value
START then END journal order is exact
rejected operation preserves its original error
never-resolving operation emits TIMEOUT
timeout error names exact phase and limit
timer is cleared after success
```

`v4-hardening-static.test.mjs` must contain ten independent cases:

```text
runner imports runner-guards.psm1
picture child uses 300000 ms
accepted matrix uses 180000 ms
successor matrix uses 180000 ms
relevant children have no unbounded Wait-Process
picture program imports phase-deadline.mjs
all five production phase limits are present
cleanup assigns an explicit empty profile array
phase journal is forbidden before execute and required by the evidence seal
finalizer validates a completed monotonic journal before visual review
```

All test programs accept `--output <absolute-json-path>`, write `{ total, passed, failed, tests }`, and exit `0` only when all tests pass.

Missing implementation modules must be represented as named failed assertions in the JSON report. The test programs check existence before import; an uncaught `ERR_MODULE_NOT_FOUND`, PowerShell import exception, syntax error, or missing output record is setup failure and is not valid RED.

- [ ] **Step 5: Capture valid RED**

Run:

```powershell
node (Join-Path $root 'browser\phase-deadline.test.mjs') `
  --output (Join-Path $root 'browser\phase-deadline-red.json')
$phaseRedExit = $LASTEXITCODE

powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\runner-guards.tests.ps1') `
  -OutputPath (Join-Path $root 'browser\runner-guards-red.json')
$guardRedExit = $LASTEXITCODE

node (Join-Path $root 'browser\v4-hardening-static.test.mjs') `
  --output (Join-Path $root 'browser\v4-hardening-static-red.json')
$staticRedExit = $LASTEXITCODE

if ($phaseRedExit -eq 0 -or $guardRedExit -eq 0 -or $staticRedExit -eq 0) {
  throw 'A v4 hardening test passed before implementation'
}
```

Expected causes only: missing `phase-deadline.mjs`, missing `runner-guards.psm1`, and absent bounded-runner/static markers. No syntax/setup error counts as valid RED.

- [ ] **Step 6: Review Task 1**

Independent review verifies fresh-root exclusivity, every locked hash, valid behavioral RED, complete v3 immutability, and zero browser/server/profile/Git/network activity. No commit.

---

### Task 2: Implement bounded execution and obtain complete no-browser GREEN

**Files:**

- Create: `output/performance/2026-07-17/poster-picture-layer-v4/browser/runner-guards.psm1`
- Create: `output/performance/2026-07-17/poster-picture-layer-v4/browser/phase-deadline.mjs`
- Modify: `output/performance/2026-07-17/poster-picture-layer-v4/browser/run-browser-gates.ps1`
- Modify: `output/performance/2026-07-17/poster-picture-layer-v4/browser/picture-poster.playwright.js`
- Create: `output/performance/2026-07-17/poster-picture-layer-v4/adapt-v4-harness.mjs`
- Modify v4 namespace/policy locks in copied browser helpers only.
- Generate: `output/performance/2026-07-17/poster-picture-layer-v4/browser/accepted-matrix/*`
- Generate: `output/performance/2026-07-17/poster-picture-layer-v4/browser/candidate-successor-matrix/*`

**Interfaces:**

- Consumes: reviewed Task 1 RED and exact copied v3 source.
- Produces: focused GREEN, launch/helper/static/structural GREEN, matrices, and read-only named preflight; still no browser or one-shot marker.

- [ ] **Step 1: Implement the PowerShell guard module**

Create `runner-guards.psm1`:

```powershell
Set-StrictMode -Version 2.0
$ErrorActionPreference = 'Stop'

function Get-TemporaryProfileState {
  param([Parameter(Mandatory = $true)][string]$ProfileRoot)
  [object[]]$paths = @()
  if (Test-Path -LiteralPath $ProfileRoot) {
    $paths = @(
      (Get-Item -LiteralPath $ProfileRoot -Force -ErrorAction Stop).FullName
      Get-ChildItem -LiteralPath $ProfileRoot -Force -Recurse -ErrorAction Stop |
        Select-Object -ExpandProperty FullName
    )
  }
  [pscustomobject]@{
    paths = $paths
    count = $paths.Count
  }
}

function Invoke-OwnedProcessWithDeadline {
  param(
    [Parameter(Mandatory = $true)][string]$FilePath,
    [Parameter(Mandatory = $true)][string[]]$ArgumentList,
    [Parameter(Mandatory = $true)][string]$Label,
    [Parameter(Mandatory = $true)][int]$DeadlineMs,
    [Parameter(Mandatory = $true)][string]$StdoutPath,
    [Parameter(Mandatory = $true)][string]$StderrPath,
    [Parameter(Mandatory = $true)][scriptblock]$RegisterProcess,
    [Parameter(Mandatory = $true)][scriptblock]$ReadLastPhase
  )
  if ($DeadlineMs -le 0) { throw "Deadline for $Label must be positive" }
  $process = Start-Process -FilePath $FilePath `
    -ArgumentList $ArgumentList `
    -WindowStyle Hidden `
    -PassThru `
    -RedirectStandardOutput $StdoutPath `
    -RedirectStandardError $StderrPath
  & $RegisterProcess $process
  $finished = $process.WaitForExit($DeadlineMs)
  if (-not $finished) {
    $lastPhase = [string](& $ReadLastPhase)
    if ([string]::IsNullOrWhiteSpace($lastPhase)) { $lastPhase = '<none>' }
    $stopFailure = $null
    try {
      if ($null -ne (Get-Process -Id $process.Id -ErrorAction SilentlyContinue)) {
        Stop-Process -Id $process.Id -Force -ErrorAction Stop
      }
      $null = $process.WaitForExit(5000)
    } catch {
      $stopFailure = $_.Exception.ToString()
    }
    $message = "Owned process '$Label' timed out after $DeadlineMs ms (PID $($process.Id)); last browser phase: $lastPhase"
    if (-not [string]::IsNullOrWhiteSpace($stopFailure)) {
      $message = "$message; exact-child stop failure: $stopFailure"
    }
    throw $message
  }
  $process.WaitForExit()
  $process.Refresh()
  [pscustomobject]@{
    label = $Label
    processId = [int]$process.Id
    exitCode = [int]$process.ExitCode
    stdoutPath = $StdoutPath
    stderrPath = $StderrPath
    deadlineMs = $DeadlineMs
  }
}

Export-ModuleMember -Function Get-TemporaryProfileState, Invoke-OwnedProcessWithDeadline
```

- [ ] **Step 2: Turn the PowerShell focused test GREEN**

Run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\runner-guards.tests.ps1') `
  -OutputPath (Join-Path $root 'browser\runner-guards-green.json')
if ($LASTEXITCODE -ne 0) { throw 'Runner guard tests are not GREEN' }
```

Expected: `6/6`. Confirm no fixture PID, temporary profile, or port remains.

- [ ] **Step 3: Implement the phase deadline module**

Create `phase-deadline.mjs`:

```js
export class PhaseTimeoutError extends Error {
  constructor(phase, timeoutMs) {
    super(`Browser phase '${phase}' timed out after ${timeoutMs} ms`);
    this.name = 'PhaseTimeoutError';
    this.phase = phase;
    this.timeoutMs = timeoutMs;
  }
}

export async function withPhaseDeadline({ phase, id = null, timeoutMs, journal, operation }) {
  if (!phase || !Number.isInteger(timeoutMs) || timeoutMs <= 0) {
    throw new TypeError('phase and a positive integer timeoutMs are required');
  }
  if (typeof journal !== 'function' || typeof operation !== 'function') {
    throw new TypeError('journal and operation functions are required');
  }
  journal(phase, 'START', id);
  let timer = null;
  let timedOut = false;
  try {
    const timeout = new Promise((_, reject) => {
      timer = setTimeout(() => {
        timedOut = true;
        reject(new PhaseTimeoutError(phase, timeoutMs));
      }, timeoutMs);
    });
    const value = await Promise.race([Promise.resolve().then(operation), timeout]);
    journal(phase, 'END', id);
    return value;
  } catch (error) {
    if (timedOut) journal(phase, 'TIMEOUT', id);
    throw error;
  } finally {
    if (timer !== null) clearTimeout(timer);
  }
}
```

- [ ] **Step 4: Turn the Node focused test GREEN**

Run:

```powershell
node (Join-Path $root 'browser\phase-deadline.test.mjs') `
  --output (Join-Path $root 'browser\phase-deadline-green.json')
if ($LASTEXITCODE -ne 0) { throw 'Phase deadline tests are not GREEN' }
```

Expected: `6/6`.

- [ ] **Step 5: Adapt the v4 runner with exact parent deadlines**

After `$root` is defined, import the module and define:

```powershell
$runnerGuards = Join-Path $root 'runner-guards.psm1'
Import-Module $runnerGuards -Force -ErrorAction Stop
$picturePosterDeadlineMs = 300000
$acceptedMatrixDeadlineMs = 180000
$successorMatrixDeadlineMs = 180000
$phaseJournal = Join-Path $root 'browser-phase-journal.jsonl'
```

Add:

```powershell
function Get-LastBrowserPhase {
  if (-not (Test-Path -LiteralPath $phaseJournal -PathType Leaf)) { return '<none>' }
  $last = Get-Content -LiteralPath $phaseJournal | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } |
    Select-Object -Last 1
  if ([string]::IsNullOrWhiteSpace($last)) { return '<none>' }
  try {
    $record = $last | ConvertFrom-Json
    return "$($record.sequence):$($record.phase):$($record.state):$($record.id)"
  } catch {
    return "<unparseable>:$last"
  }
}
```

Replace the poster `Start-Process` plus unbounded `Wait-Process` block with:

```powershell
$posterResult = Invoke-OwnedProcessWithDeadline `
  -FilePath $node `
  -ArgumentList @($quotedPoster) `
  -Label 'picture-poster' `
  -DeadlineMs $picturePosterDeadlineMs `
  -StdoutPath $posterStdout `
  -StderrPath $posterStderr `
  -RegisterProcess { param($process) Register-LaunchedProcess $process } `
  -ReadLastPhase { Get-LastBrowserPhase }
if ($posterResult.exitCode -ne 0) {
  $detail = if (Test-Path -LiteralPath $posterStderr) {
    Get-Content -LiteralPath $posterStderr -Raw
  } else { '<missing stderr>' }
  throw "Picture poster browser program failed with exit code $($posterResult.exitCode): $detail"
}
```

Replace `Invoke-HiddenPowerShell` with a version that accepts `DeadlineMs`, calls `Invoke-OwnedProcessWithDeadline`, registers the child, uses `{ '<not-a-browser-phase>' }` for `ReadLastPhase`, and preserves exact stderr/exit-code behavior. Call it with `180000` for each matrix.

Change ports everywhere from `4361/4362/4363` to `4371/4372/4373`.

Add `browser-phase-journal.jsonl` to the runner's fresh-execution forbidden-artifact list. A pre-existing journal must make preflight and execute refuse before `run-started.json`.

Replace the cleanup recount assignment with:

```powershell
$profileState = Get-TemporaryProfileState -ProfileRoot $profileRoot
$cleanupState.remainingProfiles = @($profileState.paths)
```

Keep the initial hashtable member exactly:

```powershell
remainingProfiles = @()
```

- [ ] **Step 6: Add the phase journal and phase wrappers**

At top-level in `picture-poster.playwright.js`, after `root` is known, add:

```js
const phaseJournalPath = path.join(root, 'browser-phase-journal.jsonl');
let phaseSequence = 0;
const journalPhase = (phase, state, id = null) => {
  phaseSequence += 1;
  fs.appendFileSync(phaseJournalPath, `${JSON.stringify({
    schemaVersion: 4,
    recordedAtUtc: new Date().toISOString(),
    pid: process.pid,
    sequence: phaseSequence,
    phase,
    state,
    id,
  })}\n`, 'utf8');
};
let withPhaseDeadline = null;
const bounded = (phase, id, timeoutMs, operation) =>
  withPhaseDeadline({ phase, id, timeoutMs, journal: journalPhase, operation });
const journaled = async (phase, id, operation) => {
  journalPhase(phase, 'START', id);
  const value = await operation();
  journalPhase(phase, 'END', id);
  return value;
};
```

Import `withPhaseDeadline` before the first browser call. Use exact wrappers:

```js
const profileId = `${String(profileCounter).padStart(2, '0')}-${channel}`;
const launchOptions = {
  channel,
  headless: true,
  viewport,
  javaScriptEnabled,
  deviceScaleFactor: 1,
  colorScheme: 'dark',
  acceptDownloads: false,
  serviceWorkers: 'block',
  permissions: [],
};
context = await bounded('persistent-context-launch', profileId, 45_000, () =>
  chromium.launchPersistentContext(profileDir, launchOptions));
const page = await bounded('new-page', profileId, 45_000, () => context.newPage());
await bounded('poster-decode', label, 15_000, () =>
  decodeCapturePoster(page, selector, expectedPoster, url));
await bounded('fonts-ready', label, 15_000, () =>
  page.evaluate(() => document.fonts.ready));
const canonicalState = await bounded('capture-canonicalization', label, 15_000, () =>
  canonicalizeCaptureState(page));
await bounded('screenshot-full', label, 30_000, () => page.screenshot({
  path: path.join(root, `${label}-full-412x823.png`),
  fullPage: false,
  animations: 'disabled',
  caret: 'hide',
}));
await bounded('screenshot-scene', label, 30_000, () => page.screenshot({
  path: path.join(root, `${label}-scene-412x823.png`),
  fullPage: false,
  animations: 'disabled',
  caret: 'hide',
}));
await bounded('screenshot-overlay', label, 30_000, () => page.screenshot({
  path: path.join(root, `${label}-overlay-only-412x823.png`),
  fullPage: false,
  animations: 'disabled',
  caret: 'hide',
}));
await bounded('persistent-context-close', profileId, 15_000, () => context.close());
```

Apply those limits to every copied v3 call site:

```text
launchPersistentContext: 1 call
context.newPage: 5 calls
Image.decode/poster decode: 3 calls
document.fonts.ready: 2 calls
capture canonicalization: 1 call
page.screenshot: 5 calls
context.close: 1 call
```

The five screenshot calls include the three deterministic capture images and both runtime screenshot paths. `context.newPage()` in decode, baseline contract, selection, capture, and runtime must all use `45000`; do not protect only the capture call.

Write:

```js
journalPhase('module-and-profile-initialization', 'START', null);
```

before profile validation/creation and the matching `END` immediately after successful creation. Around each capture poster response, write `poster-response` `START` before awaiting the existing 15-second response promise and `END` after it resolves. Write `temporary-profile-removal` `START`/`END` around each contained profile removal.

Use `journaled` around each stable decode case, baseline video contract, each selection case, each capture case, and each runtime case. After every result file and success assertion is complete, make the final browser-program action:

```js
await journaled('browser-program-completion', null, async () => {});
```

Do not change page DOM, CSS, media attributes, screenshots, viewport, runtime instrumentation, or assertions.

Update `evidence-seal.mjs` so `browser-phase-journal.jsonl` is a required sealed path. Update `finalize-browser.mjs` to parse every nonempty line as JSON and require exactly these fields and types:

```text
schemaVersion: integer 4
recordedAtUtc: nonempty ISO-8601 string
pid: positive integer, identical across all rows
sequence: positive integer
phase: nonempty string
state: START | END | TIMEOUT
id: null or nonempty string
```

Any blank-only file, malformed line, extra/missing field, sequence gap, duplicate sequence, PID change, invalid state, or unmatched successful phase is terminal. Sequences start at `1` and increase by exactly `1`; browser `GREEN` allows no `TIMEOUT`; the final two completion rows must be `browser-program-completion START` then `browser-program-completion END` before the finalizer may issue a visual-review request.

- [ ] **Step 7: Adapt namespace, policy locks, and matrix roots**

Apply only:

```text
poster-picture-layer-v3 -> poster-picture-layer-v4
schema labels ending -v3 -> corresponding -v4
source-v2-browser -> source-v3-browser where the inherited policy-correction fixture names the copied source
adapt-v3-harness.mjs -> adapt-v4-harness.mjs where the inherited policy-correction fixture names the controller
4361 -> 4371
4362 -> 4372
4363 -> 4373
```

`adapt-v4-harness.mjs` first authenticates `source-v3-browser` against the 12 Task 1 locks and authenticates the working `browser` copy as still identical. It then performs the four namespace/controller replacements above and the exact tested guard, phase, journal, cleanup, finalizer, and seal edits from Steps 1-6. No other controller name or source-root replacement is allowed.

Then update the finalizer's exact policy byte count and SHA-256 from the generated v4 policy. Regenerate both 49-file matrices from:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-15\font-fraunces-family-subset-v11\browser-matrix
```

through the adapted `prepare-browser-harness.mjs`. Do not copy result JSON or screenshots from v3 as v4 evidence.

- [ ] **Step 8: Turn every no-browser contract GREEN**

Run focused tests, launch contract, helper suite, static contract, structural contract twice, source/publish performance `29/29`, and source/publish SEO/GEO `8/8`.

Required exact focused results:

```text
runner guards: 6/6
phase deadlines: 6/6
v4 hardening static: 10/10
launch contract: 4/4
helpers: 8/8
structural: 20/20 twice
accepted matrix reconstruction: 49 files
successor matrix reconstruction: 49 files
```

The two structural payloads must normalize identically.

- [ ] **Step 9: Run named preflight and prove it is read-only**

Run:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode preflight
if ($LASTEXITCODE -ne 0) { throw 'V4 preflight failed' }
```

Before and after, hash every v4 file and require no terminal artifacts, profile, listener, or owned process. Expected final line:

```json
{"commandStatus":"COMPLETED","mode":"preflight","experimentDecision":"PENDING"}
```

- [ ] **Step 10: Review Task 2**

Independent review verifies valid RED/GREEN, exact deadline call sites, no relevant unbounded wait, journal semantics, cleanup empty-array behavior, launch/parser/policy regressions, matrices, read-only preflight, protected boundaries, and no product mutation. No commit.

---

### Task 3: Consume v4 execute once, complete dual visual review, and seal browser evidence

**Files:**

- Create terminal browser evidence under `output/performance/2026-07-17/poster-picture-layer-v4/browser/`.
- Create: `.superpowers/sdd/time-bounded-v4/task-3-brief.md`
- Create: `.superpowers/sdd/time-bounded-v4/task-3-report.md`
- Create: `.superpowers/sdd/time-bounded-v4/visual-review.md`

**Interfaces:**

- Consumes: independently approved Task 2 no-browser GREEN.
- Produces: sealed browser `GREEN` or terminal sealed `REJECT`.

- [ ] **Step 1: Authenticate the extracted Task 3 brief**

Use the Subagent-Driven Development `task-brief` helper and preserve its extracted output as `.superpowers/sdd/time-bounded-v4/task-3-brief.md`; never overwrite the locked v3 `.superpowers/sdd/task-3-brief.md` or `task-3-run-report.md`. Run the v4 launch contract with committed plan, v4 runner, and versioned brief. Require `4/4`, one canonical named execute command, and no wrapper/duplicate/divergent command.

- [ ] **Step 2: Re-run final read-only preflight**

Require v4 root exact, predecessors exact, no terminal artifact, profile absent, ports `4371/4372/4373` free, zero owned processes, clean Git, and remote still `b416b81`.

- [ ] **Step 3: Consume execute exactly once**

The implementer invokes exactly:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode execute
$browserExit = $LASTEXITCODE
if ($browserExit -notin @(2, 3)) {
  throw "V4 execute returned unexpected exit $browserExit"
}
```

Expected successful automation branch: exit `3`, `AWAITING_VISUAL_REVIEW`. Exit `2` is terminal `REJECT`; preserve evidence and stop Tasks 4-8. The controller must not manually terminate a child because the v4 parent deadline owns that behavior.

The controller's shell tool call uses a single outer allowance of `840000` ms. This is not a runner deadline, watchdog, retry, or permission to replace evidence; it only allows the three finite child budgets plus cleanup/finalization to return normally.

- [ ] **Step 4: Verify automated browser evidence**

Require:

```text
decode 2/2
selection 5/5
baseline canary 2/2 exact
candidate capture 1/1
overlay-only SHA-256 exact
SSIM >= 0.98
PSNR >= 35 dB
runtime 4/4
accepted matrix 13/136
successor matrix 13/136
cleanup PASS
boundary PASS
zero owned processes
zero occupied ports
zero remaining profiles
visual-review-request.json present
```

The phase journal must begin at sequence `1`, remain strictly monotonic, contain only `START`, `END`, and `TIMEOUT`, contain no `TIMEOUT` on the success branch, and end with browser-program completion.

- [ ] **Step 5: Controller visual review**

The controller opens, at minimum:

```text
baseline-a-full-412x823.png
baseline-b-full-412x823.png
candidate-full-412x823.png
baseline-a-scene-412x823.png
candidate-scene-412x823.png
baseline-a-overlay-only-412x823.png
candidate-overlay-only-412x823.png
visual-diff.png
all runtime-*.png
```

Record booleans for full-surface equivalence, scene crop, navigation, hero typography, preloader, buttons, overlay, video takeover, play-rejection fallback, no blank frame, no controls, and no UI/motion change. Any false value is `REJECT`.

- [ ] **Step 6: Independent visual review**

Dispatch a fresh reviewer with the approved design, visual-review request, automated evidence summary, and image paths. The reviewer independently records the same booleans and a `PASS`/`REJECT` verdict. It must not be told the controller verdict.

- [ ] **Step 7: Write one combined visual review**

Only if both reviews pass, write `visual-review.json` with both named reviewers, every boolean, timestamps, reviewed image hashes, and decision `PASS`. Otherwise write decision `REJECT`. This is the only controller write under the browser root before finalization.

- [ ] **Step 8: Finalize and seal**

Run exactly once:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode finalize-review
$finalizeExit = $LASTEXITCODE
if ($finalizeExit -notin @(0, 2)) {
  throw "V4 finalize-review returned unexpected exit $finalizeExit"
}
```

Require final decision matches both reviews, finalizer log closes before seal, `browser-evidence-lock.json` is the last browser-root write, and read-only seal verification changes no bytes. `REJECT` stops Tasks 4-8.

- [ ] **Step 9: Review Task 3**

Independent review verifies exactly one execute, bounded process behavior, complete journal, automated gates, two independent visual reviews, one cleanup, terminal ordering, seal, and unchanged protected boundaries.

---

### Task 4: Run isolated eight-report Lighthouse and decide `PROMOTE` or `REJECT`

**Files:**

- Create: `output/performance/2026-07-17/poster-picture-layer-v4/lighthouse/*`
- Create: `output/performance/2026-07-17/poster-picture-layer-v4/finalize-experiment.mjs`
- Create: `output/performance/2026-07-17/poster-picture-layer-v4/final-verification.json`

**Interfaces:**

- Consumes: sealed browser `GREEN`.
- Produces: isolated `PROMOTE` or terminal `REJECT`; no project mutation.

- [ ] **Step 1: Authenticate the accepted Lighthouse harness source**

Copy only these source files from `output/performance/2026-07-15/font-fraunces-family-subset-v11` after exact verification:

| File | Bytes | SHA-256 |
|---|---:|---|
| `lighthouse/ephemeral-cert.mjs` | 3,306 | `4344f90be69482f7ec5fca075eb6876678488f8dab809b5da8a3d129c4282228` |
| `lighthouse/run-h2-lighthouse.ps1` | 13,017 | `64fc0528d7057d10d2985a38e168e14458244438b0d9df6a7bdfb03acd856f5b` |
| `lighthouse/transport-server.mjs` | 12,110 | `ef8cdf441fb9a9f17295d6ee75792e82d19b640da674e6edca7be333dab5b642` |

Adapt only v11 experiment paths/labels to v4 baseline/candidate paths. Preserve certificate generation, h2+Brotli transport, request logging, Chrome flags, profile isolation, and cleanup.

- [ ] **Step 2: Create the immutable eight-run matrix**

Write this exact plan:

```json
{
  "schema": "efficient-technologies/poster-picture-layer-v4-lighthouse-plan-v1",
  "lighthouseVersion": "13.4.0",
  "retryPolicy": "none",
  "discardedTrialCount": 0,
  "definitions": [
    { "sequence": 1, "side": "B", "site": "baseline", "formFactor": "mobile", "label": "01-baseline-mobile", "serverPort": 9681, "debugPort": 9781 },
    { "sequence": 2, "side": "C", "site": "candidate", "formFactor": "mobile", "label": "02-candidate-mobile", "serverPort": 9691, "debugPort": 9791 },
    { "sequence": 3, "side": "B", "site": "baseline", "formFactor": "mobile", "label": "03-baseline-mobile", "serverPort": 9682, "debugPort": 9782 },
    { "sequence": 4, "side": "C", "site": "candidate", "formFactor": "mobile", "label": "04-candidate-mobile", "serverPort": 9692, "debugPort": 9792 },
    { "sequence": 5, "side": "B", "site": "baseline", "formFactor": "mobile", "label": "05-baseline-mobile", "serverPort": 9683, "debugPort": 9783 },
    { "sequence": 6, "side": "C", "site": "candidate", "formFactor": "mobile", "label": "06-candidate-mobile", "serverPort": 9693, "debugPort": 9793 },
    { "sequence": 7, "side": "B", "site": "baseline", "formFactor": "desktop", "label": "07-baseline-desktop", "serverPort": 9701, "debugPort": 9801 },
    { "sequence": 8, "side": "C", "site": "candidate", "formFactor": "desktop", "label": "08-candidate-desktop", "serverPort": 9711, "debugPort": 9811 }
  ]
}
```

The order is three mobile baseline/candidate pairs followed by one desktop baseline/candidate pair. Every definition uses a unique port and profile, Lighthouse `13.4.0`, and no retry.

Mobile candidate requires each run score `>= 90`, LCP `<= 2500`, CLS `<= 0.02`, one AVIF, zero WebP, AVIF bytes `38457`, and median LCP `<= 2500`.

Desktop candidate requires each run score `>= 90`, LCP `<= 2500`, CLS `<= 0.02`, one WebP, zero AVIF, transfer increase `<= 2048` bytes, and median LCP `<= 2500`.

Every run requires zero failed requests and cleanup pass.

- [ ] **Step 3: Execute the matrix once**

Run the fixed matrix exactly once. Record every command before execution. A launch failure, missing report, timeout, malformed report, request mismatch, cleanup failure, or threshold failure is terminal `REJECT`; do not substitute a run.

- [ ] **Step 4: Verify protected boundaries**

Re-run browser seal verification read-only. Require baseline, candidate, source, publish, accepted harness, V1, v2, v3, Git, PR, and production unchanged.

- [ ] **Step 5: Write isolated final decision**

`final-verification.json` may say `PROMOTE` only when browser decision is `GREEN`, both visual reviews pass, all eight Lighthouse reports pass, medians pass, all cleanup records pass, parent/phase focused tests pass, the phase journal validates, and boundaries are exact. Otherwise write `REJECT` and stop.

- [ ] **Step 6: Review Task 4**

Independent review verifies harness provenance, fixed matrix, eight non-retried reports, request selection, thresholds, cleanup, decision consistency, and zero project mutation.

---

### Task 5: Pin the tracked deployment contract and prove RED

**Files:**

- Modify: `.github/scripts/performance-contract.test.mjs`
- Create: `output/performance/2026-07-17/poster-picture-layer-release-v4/pin-tracked-contract.mjs`

**Interfaces:**

- Consumes: independently approved isolated `PROMOTE`.
- Produces: one tracked test-only commit with only four expected missing-implementation failures.

- [ ] **Step 1: Create the fresh release root and revalidate `PROMOTE`**

Require release root absent, sealed v4 browser `GREEN`, v4 final decision `PROMOTE`, all predecessors exact, clean Git, and remote `b416b81`.

- [ ] **Step 2: Pin release constants**

Use:

```js
const release = '20260714';
const posterRelease = '20260716';
const frauncesRelease = '20260715';
const tokensRevision = '3';
const stylesRevision = '4';
const mobilePoster = `assets/city-poster-mobile-v${posterRelease}.avif`;
```

Add:

```js
{ logicalId: 'poster-mobile', output: mobilePoster, width: 385, height: 768 },
```

- [ ] **Step 3: Pin the qualified candidate CSS hash**

The helper computes normalized-LF SHA-256 of v4 candidate `css/styles.css`, requires the old CSS hash anchor exactly once, replaces only that anchor, and prints the new hash.

- [ ] **Step 4: Add exact assertions**

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

Also require exact picture markup, one `<source>`, decorative fallback image, absent video poster, picture CSS, transparent video CSS, no poster/video transition, style revision `4`, token revision `3`, and immutable AVIF header.

- [ ] **Step 5: Prove exact RED**

Against publish and authoritative source, allowed failures only:

```text
versioned media manifest records passing, byte-accurate assets
poster-first media declarations cannot fetch before capability activation
homepage embeds exact revisioned CSS while other routes retain linked styles
immutable cache policy applies only to release-versioned assets
```

Any other failure stops.

- [ ] **Step 6: Commit and review the RED contract only**

Stage only `.github/scripts/performance-contract.test.mjs`, run cached diff check, verify one path, and commit:

```powershell
git -C $repo commit -m "test: pin responsive picture poster delivery"
```

Do not push.

---

### Task 6: Promote the exact candidate locally, obtain GREEN, and commit

**Files:**

- Create: `output/performance/2026-07-17/poster-picture-layer-release-v4/promote-candidate.mjs`
- Create: `output/performance/2026-07-17/poster-picture-layer-release-v4/materialize-manifest.mjs`
- Modify the twelve approved deploy artifacts in source and publish.
- Modify in publish only: `.github/performance/media-manifest.json`
- Delete all ten tracked `docs/superpowers` files after ignored control copies exist.

**Interfaces:**

- Consumes: reviewed RED contract and isolated `PROMOTE`.
- Produces: source/publish parity, complete GREEN, promoted browser proof, final review, and local implementation commit.

- [ ] **Step 1: Revalidate authority immediately before mutation**

Require release root contains only reviewed Task 5 material, v4 `PROMOTE`, browser seal verifies read-only, Lighthouse exact, Git contains only reviewed RED commit, remote remains `b416b81`, active viewer is `tarik-ux`, and repository permission `push:true`.

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

The promoter refuses symlinks, path escapes, source drift, extra paths, pre-copy deploy drift, or non-PROMOTE evidence. Copy candidate to authoritative source and publish; verify 12/12 parity.

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

Set release `2026-07-16`, replace any prior `poster-mobile` entry, and verify every field.

- [ ] **Step 4: Turn all local contracts GREEN**

Run against authoritative source and publish:

```text
performance 29/29
SEO/GEO 8/8
```

Require exact source/publish deploy parity and no unrelated path.

- [ ] **Step 5: Qualify promoted publish outside sealed v4 evidence**

Use fresh root:

```text
output/playwright/poster-picture-layer-promoted-v4
```

Require selection `5/5`, runtime `4/4`, successor matrix `13/136`, request exclusivity, deterministic visual capture, source/publish parity, unchanged video/scroll/scene/chapter/overlay/animation behavior, and cleanup pass.

- [ ] **Step 6: Obtain implementation review**

Review approved v4 design/plan, sealed browser evidence, isolated Lighthouse `PROMOTE`, RED contract commit, deploy diff from `b416b81`, parity, and promoted browser evidence. Resolve every Critical and Important finding in one fix wave and rerun affected gates.

After execute consumption, no fix wave may change the v4 harness, candidate bytes, twelve promoted deploy bytes, browser evidence, or Lighthouse evidence, and none of those sealed gates may rerun. A finding that requires such a change is terminal for v4 and requires a separately approved v5. Within v4, a fix wave is limited to release-control helpers, manifest materialization logic, tracked tests, or documentation-removal mechanics that leave the qualified candidate byte-exact; rerun only the affected post-promotion contract or parity checks.

- [ ] **Step 7: Preserve ignored release-control copies**

Create `.superpowers/sdd/time-bounded-v4-release`, prove `.superpowers` is ignored, and copy:

```text
design.md
plan.md
task-7-brief.md
task-8-brief.md
```

Write `control-hashes.json` with relative path, bytes, and SHA-256 for all four. Require `.superpowers` absent from Git status.

- [ ] **Step 8: Remove all internal documents**

Run `git ls-files 'docs/superpowers/**'` and require exactly these ten paths: the eight v1-v3 files, the v4 design, and this v4 plan. Remove all ten with `git rm`. Require zero tracked `docs/superpowers` paths afterward.

- [ ] **Step 9: Commit implementation and obtain final whole-branch review**

Stage only media manifest, twelve deploy artifacts, and ten documentation deletions. Run cached diff check/stat and commit:

```powershell
git -C $repo commit -m "perf: add responsive picture poster layer"
```

Generate the final review package from `b416b8113315c95c32d4674aa54769d90c562abd` to implementation HEAD. Resolve all Critical and Important findings in one fix wave, rerun affected gates, commit fixes, regenerate the package, and obtain clean re-review before Task 7.

The same post-consumption boundary applies: if a whole-branch finding requires any qualified deploy byte or sealed evidence to change, stop v4 instead of fixing or rerunning it.

---

### Task 7: Push once and qualify the immutable Cloudflare preview

**Files:**

- Create: `output/performance/2026-07-17/poster-picture-layer-release-v4/clean-checkout/*`
- Create: `output/playwright/poster-picture-layer-preview-pr2-v4/*`
- Create: `output/performance/2026-07-17/poster-picture-layer-preview-pr2-v4/*`

**Interfaces:**

- Consumes: final reviewed local implementation HEAD.
- Produces: one push, exact-SHA hosted checks, immutable preview, 69/69 delivery checks, browser proof, and six preview Lighthouse reports.
- Requirements come from authenticated ignored `task-7-brief.md`.

- [ ] **Step 1: Verify a clean archive**

Archive HEAD outside sealed evidence. Require performance `29/29`, SEO/GEO `8/8`, no `docs/superpowers`, exact asset/CSS/index/manifest/header hashes, complete promoted browser suite, and clean Git.

- [ ] **Step 2: Recheck GitHub authority and remote base**

Run:

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

Run:

```powershell
git -C $repo push origin agent/performance-without-motion-loss
if ($LASTEXITCODE -ne 0) { throw 'Push failed; preserve exact error and stop' }
$remoteAfter = (git -C $repo ls-remote origin refs/heads/agent/performance-without-motion-loss).Split()[0]
if ($remoteAfter -ne $localHead) { throw 'Remote head does not equal qualified local head' }
```

No force-push, amend, or second push.

- [ ] **Step 4: Require exact-SHA hosted checks**

Run `gh pr checks 2 --repo tarik-ux/efficient-technologies-site --watch --interval 10`. Require Performance contract, SEO/GEO validation, and Cloudflare Pages success on `$localHead`. Any failure stops.

- [ ] **Step 5: Derive immutable preview**

Extract the single successful Cloudflare deployment UUID and form:

```powershell
$preview = "https://$($deploymentId.Split('-')[0]).efficient-technologies-site.pages.dev"
```

Require root 200; record URL, deployment ID, SHA, headers, and check metadata.

- [ ] **Step 6: Run the 69-check preview delivery contract**

Preserve the accepted 43 checks and add the prior 24 poster/document checks plus real 404 checks for:

```text
/docs/superpowers/specs/2026-07-17-time-bounded-v4-qualification-design.md
/docs/superpowers/plans/2026-07-17-time-bounded-v4-qualification.md
```

Expected: `69/69`. AVIF and WebP byte/hash/MIME/cache/ETag checks, exact picture markup, absent video poster, exact CSS, and all ten real documentation 404s are mandatory.

- [ ] **Step 7: Run preview browser gates**

Require selection `5/5`, runtime `4/4`, behavior `13/13` and `136/136`, mobile/desktop request graphs `2/2`, deterministic visual capture, exact poster request exclusivity, unchanged video/scroll/scene/chapter/overlay/animation behavior, and cleanup pass.

- [ ] **Step 8: Run preview Lighthouse once**

Three mobile and three desktop reports, Lighthouse `13.4.0`, unique profiles and ports, no retries.

Mobile: score `>= 90`, LCP `<= 2500`, CLS `<= 0.02`, one AVIF, zero WebP, median LCP `<= 2500`.

Desktop: score `>= 90`, LCP `<= 2500`, CLS `<= 0.02`, transfer `<= 4.5 MiB`, one WebP, zero AVIF.

- [ ] **Step 9: Mark PR ready**

Only after every preview gate:

```powershell
gh pr ready 2 --repo tarik-ux/efficient-technologies-site
```

Any failure leaves PR #2 draft and production unchanged.

---

### Task 8: Merge the qualified SHA and verify production

**Files:**

- Create: `output/playwright/poster-picture-layer-production-v4/*`
- Create: `output/performance/2026-07-17/poster-picture-layer-production-v4/*`
- No direct production file edits.

**Interfaces:**

- Consumes: ready PR #2 at exact preview-qualified SHA.
- Produces: squash merge plus verified production release, or an exact stopped regression report.
- Requirements come from authenticated ignored `task-8-brief.md`.

- [ ] **Step 1: Recheck exact SHA, checks, and merge authority**

Require PR head equals local HEAD, PR is not draft, merge state is `CLEAN` or `HAS_HOOKS`, every check succeeds, active viewer is `tarik-ux`, `push:true`, and AVIF/WebP/CSS/index/headers/manifest match preview evidence.

- [ ] **Step 2: Squash-merge PR #2**

Run:

```powershell
gh pr merge 2 --repo tarik-ux/efficient-technologies-site --squash --delete-branch
if ($LASTEXITCODE -ne 0) { throw 'Merge failed; preserve exact error and stop' }
$merged = gh pr view 2 --repo tarik-ux/efficient-technologies-site --json state,mergeCommit | ConvertFrom-Json
if ($merged.state -ne 'MERGED' -or -not $merged.mergeCommit.oid) {
  throw 'PR did not reach MERGED state'
}
$mergeSha = $merged.mergeCommit.oid
```

- [ ] **Step 3: Wait for exact merge-SHA deployment**

Poll for one successful Cloudflare Pages deployment of `$mergeSha` for up to 20 minutes, reporting at least once per minute. A terminal failure stops.

- [ ] **Step 4: Run production delivery contract**

Against `https://efficientautomate.com`, require `69/69`, no production `x-robots-tag: noindex`, production canonicals, all ten documentation paths and `/codex-release-verification-20260715` real 404, preview-identical bytes/hashes/MIME/cache/ETags, and passing robots/sitemap/Open Graph/Twitter/JSON-LD/`llms.txt`/`llms-full.txt`.

- [ ] **Step 5: Run production browser qualification**

Require selection `5/5`, runtime `4/4`, behavior `13/13` and `136/136`, request exclusivity, deterministic surface, unchanged video/chapter/scroll/animation behavior, and cleanup pass.

- [ ] **Step 6: Run three production mobile Lighthouse reports once**

Use profiles:

```text
poster-picture-production-v4-mobile-1
poster-picture-production-v4-mobile-2
poster-picture-production-v4-mobile-3
```

and debug ports `9851`, `9852`, `9853`. Every run requires score `>= 90`, LCP `<= 2500`, CLS `<= 0.02`, one AVIF, zero WebP; median LCP `<= 2500`.

- [ ] **Step 7: Record release or stop on regression**

On success write:

```json
{
  "decision": "RELEASED",
  "deliveryChecks": "69/69",
  "behaviorChecks": "136/136",
  "mobileLighthouseRuns": 3
}
```

On any production failure, write `PRODUCTION_REGRESSION`, preserve the exact failing evidence and merge SHA, stop further external mutation, and ask the user before creating or merging any revert PR. Never claim success from merge status alone.

---

## Plan Self-Review Checklist

- [x] Every approved design section maps to one of eight tasks.
- [x] V1, v2, and terminal v3 remain immutable.
- [x] V4 is fresh and uses fresh ports `4371/4372/4373`.
- [x] Candidate, AVIF, fallback, UI, video, animation, and runtime bytes remain unchanged before `PROMOTE`.
- [x] Parent and phase deadline RED/GREEN are explicit.
- [x] Cleanup `[null]` RED and `[]` GREEN are explicit.
- [x] Launch plan, runner, and Task 3 brief must be `4/4` before execute.
- [x] Every runner invocation uses named `-Mode`.
- [x] Execute is exactly once and parent-owned timeout handling replaces manual termination.
- [x] Phase journal states and exact limits are complete.
- [x] Cleanup runs once and performs final process, port, and profile recounts.
- [x] Browser evidence seal is the final browser-root write.
- [x] Browser failure stops Lighthouse; Lighthouse failure stops promotion.
- [x] Isolated `PROMOTE` precedes project mutation.
- [x] Final whole-branch review precedes the single push.
- [x] Preview failure leaves PR draft and production unchanged.
- [x] Production regression stops and requires new rollback authority.
- [x] Preview and production account for all ten documentation paths: `69/69`.
- [x] No placeholder, unspecified mode, no-argument runner command, retry, or hidden external action remains.
