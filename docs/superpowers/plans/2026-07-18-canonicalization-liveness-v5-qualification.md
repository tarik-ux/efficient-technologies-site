# Canonicalization Liveness v5 Qualification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Prove the v4 canonicalization-liveness hypothesis in real Chrome, apply one synchronous harness-only correction if confirmed, and qualify and publish the unchanged responsive picture-poster candidate.

**Architecture:** Reconstruct authenticated v4 product and harness inputs into a fresh v5 root without copying terminal evidence. Seal a diagnostic RED matrix before changing the production canonicalizer, copy the proven proposed helper byte-for-byte, seal a GREEN matrix, and only then authorize one named qualification execute. Continue through dual visual review, isolated Lighthouse, exact local promotion, one GitHub push, immutable Cloudflare preview, merge, and production verification while every preceding gate remains green.

**Tech Stack:** Static HTML/CSS/JavaScript, Node.js 24.11.1 built-ins, Windows PowerShell 5.1, Playwright from the pinned local module, stable Chrome and Edge, FFmpeg/FFprobe 8.1.1, Lighthouse 13.4.0, Git, GitHub CLI, GitHub Actions, and Cloudflare Pages.

## Global Constraints

- Approved design: `docs/superpowers/specs/2026-07-18-canonicalization-liveness-v5-qualification-design.md`.
- Approved design lock: 30,001 bytes, SHA-256 `acf49fc3e71cb451ee3b9297530d4b31653e9a7db7ee917b80c78ac83c48c611`.
- Approved design commit: `14dc49485df3d86f218c41f6483e9c5d477cb253`.
- Authoritative source: `C:\Users\tarik\Claude Projects\efficient-technologies\site`.
- Publish checkout: `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`.
- Branch: `agent/performance-without-motion-loss`.
- Remote: `https://github.com/tarik-ux/efficient-technologies-site.git`.
- Remote branch and PR base before release: `b416b8113315c95c32d4674aa54769d90c562abd`.
- Terminal v4 root: `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-17\poster-picture-layer-v4`.
- Fresh v5 root: `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-18\poster-picture-layer-v5`.
- V5 release root: `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-18\poster-picture-layer-release-v5`.
- V1, v2, v3, and terminal v4 are immutable. Do not invoke any v4 wrapper, runner mode, finalizer, cleanup, or seal command.
- V4 remains terminal `REJECT`; its `execute` authority is permanently consumed.
- V4 evidence seal: 161 files, digest `d4478009ca43cc5657c7fa51bc7382ffad98a9871cddc80bc05a3b677dd10beb`.
- V4 evidence lock: 31,008 bytes, SHA-256 `82769e4c701eaea3988fab733f52b546e82b8c7de8be432f6ed042dfad20155a`.
- V4 report: 13,892 bytes, SHA-256 `b2e588efeda3bd710e1b399ad6757b65cca34819fd15bfce717e6928525e74ad`.
- V4 terminal review: 1,476 bytes, SHA-256 `50e2742832d64a2adca2a84af38163d2bbc59e5c5d0b1e4cebaa06a78b25da27`.
- Baseline: 47 files, digest `cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850`.
- Candidate: 48 files, digest `bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653`.
- Candidate scope: exactly 1 added path, 11 modified paths, and 0 removed paths.
- AVIF: 38,457 bytes, SHA-256 `9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49`.
- WebP: 120,376 bytes, SHA-256 `098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb`.
- Selection condition: `(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)`.
- Product HTML, CSS, JavaScript, AVIF, WebP, SVG, font, text, and video bytes remain unchanged until isolated `PROMOTE`.
- UI, world video, scroll choreography, scene changes, zoom behavior, chapters, overlays, triggers, transitions, easing, timing, and animations remain unchanged.
- The production capture context stays `javaScriptEnabled: false`.
- The production canonicalization deadline stays exactly `15000` ms.
- Diagnostic deadlines are exact: launch `45000` ms, new page `45000` ms, fixture `15000` ms, stabilizer `5000` ms, close `15000` ms, cell parent `120000` ms, full controller `300000` ms.
- Qualification parent deadlines are exact: picture program `300000` ms, accepted matrix `180000` ms, successor matrix `180000` ms.
- Qualification phase deadlines are exact: launch/new page `45000` ms, decode/fonts/canonicalization `15000` ms, screenshot `30000` ms, close `15000` ms.
- Every helper is hidden and registered before waiting.
- Process termination is limited to registered owned PIDs and exact-profile Chrome/Edge fallbacks.
- RED and GREEN diagnostics each run once, in fixed cell order, without retry, replacement, order shuffle, deadline change, discarded trial, or best-result selection.
- Qualification `execute` runs exactly once. No retry, replacement, repair, deadline extension, cleanup rerun, or best-run substitution is allowed.
- Browser `GREEN` and two visual passes are required before Lighthouse. Isolated `PROMOTE` is required before project mutation.
- Performance contracts must pass `29/29`; SEO/GEO contracts must pass `8/8`; structural contracts must pass `20/20` twice with identical normalized output.
- Local Lighthouse uses exactly eight reports. Preview Lighthouse uses exactly six reports. Production Lighthouse uses exactly three mobile reports.
- Diagnostic permits no HTTP(S) request. Qualification browser traffic is limited to loopback ports `4381/4382/4383` and the site's three pinned CDN resources.
- Preview and production automation is limited to the exact approved Cloudflare targets.
- No login reuse, cookies, saved sessions, proxy, stealth, anti-bot bypass, form submission, upload, telemetry, dependency install, or dependency update.
- Any failed terminal gate stops all later tasks. External failures preserve exact state and never trigger a hidden retry.
- All v5 task briefs, reports, reviews, and progress records use `.superpowers/sdd/canonicalization-liveness-v5/`; no predecessor SDD file may be overwritten.
- Every task begins in a fresh PowerShell process with this exact preamble; snippets below rely only on these variables plus variables they define locally:

```powershell
Set-StrictMode -Version 2.0
$ErrorActionPreference = 'Stop'
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$source = Join-Path $project 'site'
$v4 = Join-Path $project 'output\performance\2026-07-17\poster-picture-layer-v4'
$root = Join-Path $project 'output\performance\2026-07-18\poster-picture-layer-v5'
$release = Join-Path $project 'output\performance\2026-07-18\poster-picture-layer-release-v5'
$spec = Join-Path $repo 'docs\superpowers\specs\2026-07-18-canonicalization-liveness-v5-qualification-design.md'
$plan = Join-Path $repo 'docs\superpowers\plans\2026-07-18-canonicalization-liveness-v5-qualification.md'
$runtimePath = Join-Path $root 'runtime-identity.json'
$nodePath = if (Test-Path -LiteralPath $runtimePath -PathType Leaf) {
  [string](Get-Content -LiteralPath $runtimePath -Raw | ConvertFrom-Json).node.path
} else {
  [string](Get-Command node.exe -ErrorAction Stop).Source
}
if (-not (Test-Path -LiteralPath $nodePath -PathType Leaf)) {
  throw "Node executable is unavailable: $nodePath"
}
```

---

## File Map

### Evidence-only v5 reconstruction and diagnostic files

- `output/performance/2026-07-18/prepare-v5.mjs` - authenticates v4 and creates the fresh v5 root.
- `output/performance/2026-07-18/poster-picture-layer-v5/experiment-policy.json` - v5 policy, boundaries, deadlines, and one-shot rules.
- `output/performance/2026-07-18/poster-picture-layer-v5/reconstruction.json` - exclusive-copy and lock verification.
- `output/performance/2026-07-18/poster-picture-layer-v5/v4-terminal-lock.json` - fresh read-only v4 snapshot and sealed-evidence authentication.
- `output/performance/2026-07-18/poster-picture-layer-v5/workspace-integrity-before.json` - protected roots and Git snapshot.
- `output/performance/2026-07-18/poster-picture-layer-v5/runtime-identity.json` - Node, Playwright, Chrome, and Edge identities.
- `output/performance/2026-07-18/poster-picture-layer-v5/source-v4-browser/*` - immutable copied v4 source allowlist.
- `output/performance/2026-07-18/poster-picture-layer-v5/browser/*` - mutable v5 qualification harness.
- `output/performance/2026-07-18/poster-picture-layer-v5/browser/verify-runtime-identity.mjs` - exact Node, Playwright, Chrome, and Edge verifier for every local browser group.
- `output/performance/2026-07-18/poster-picture-layer-v5/browser/canonicalizer-contract.test.mjs` - three focused legacy RED/current GREEN assertions.
- `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/canonicalization-fixture.mjs` - deterministic inline DOM and state-schema verifier.
- `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/source/capture-stabilizer-proposed.mjs` - proposed complete replacement module.
- `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/canonicalization-cell.mjs` - one isolated Chrome cell.
- `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/diagnostic-evidence-seal.mjs` - diagnostic-specific adaptation of the authenticated v4 seal primitive.
- `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/finalize-canonicalization-diagnostic.mjs` - matrix decision and write-once seal.
- `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/diagnostic-contract.test.mjs` - offline decision/seal tests.
- `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/run-canonicalization-diagnostic.ps1` - four-cell bounded controller.
- `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/red/*` - sealed causal RED evidence.
- `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/green/*` - sealed production GREEN evidence.
- `output/performance/2026-07-18/poster-picture-layer-v5/adapt-v5-harness.mjs` - exact namespace and one-helper adapter.
- `output/performance/2026-07-18/poster-picture-layer-v5/v5-harness-adaptation.json` - before/after source hashes and normalized diff.

### Evidence-only qualification and release files

- `output/performance/2026-07-18/poster-picture-layer-v5/browser/browser-phase-journal.jsonl` - one-shot qualification phase evidence.
- `output/performance/2026-07-18/poster-picture-layer-v5/browser/run-browser-gates.ps1` - explicit-mode bounded runner.
- `output/performance/2026-07-18/poster-picture-layer-v5/browser/picture-poster.playwright.js` - unchanged-product qualification.
- `output/performance/2026-07-18/poster-picture-layer-v5/lighthouse/*` - eight isolated local Lighthouse reports.
- `output/performance/2026-07-18/poster-picture-layer-v5/final-verification.json` - isolated `PROMOTE` or `REJECT`.
- `output/performance/2026-07-18/poster-picture-layer-release-v5/*` - post-`PROMOTE` release-control evidence.
- `output/playwright/poster-picture-layer-promoted-v5/*` - promoted local browser proof.
- `output/playwright/poster-picture-layer-preview-pr2-v5/*` - immutable preview browser proof.
- `output/playwright/poster-picture-layer-production-v5/*` - production browser proof.

### Tracked release files

- `.github/scripts/performance-contract.test.mjs` - pinned manifest, markup, geometry, revision, hash, and header contract.
- `.github/performance/media-manifest.json` - materialized AVIF record.
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
- All twelve tracked `docs/superpowers` files - removed before push after ignored control copies are authenticated.

---

### Task 1: Reconstruct v5 and capture focused static RED

**Files:**

- Create: `output/performance/2026-07-18/prepare-v5.mjs`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/*`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/browser/canonicalizer-contract.test.mjs`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/browser/canonicalizer-contract-red.json`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-1-report.md`

**Interfaces:**

- Consumes: committed v5 design and plan, terminal v4 locks, sealed v4 browser manifest, exact baseline/candidate, accepted matrix source, protected roots, and clean Git.
- Produces: fresh v5 reconstruction plus exact `3/3` focused RED; no Chrome, Edge, server, profile, product edit, one-shot marker, network call, or Git commit.

- [ ] **Step 1: Verify the boundary before creating v5**

Run:

```powershell
$ErrorActionPreference = 'Stop'
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$v4 = Join-Path $project 'output\performance\2026-07-17\poster-picture-layer-v4'
$root = Join-Path $project 'output\performance\2026-07-18\poster-picture-layer-v5'
$release = Join-Path $project 'output\performance\2026-07-18\poster-picture-layer-release-v5'
$spec = Join-Path $repo 'docs\superpowers\specs\2026-07-18-canonicalization-liveness-v5-qualification-design.md'
$plan = Join-Path $repo 'docs\superpowers\plans\2026-07-18-canonicalization-liveness-v5-qualification.md'

if (Test-Path -LiteralPath $root) { throw "Fresh v5 root already exists: $root" }
if (Test-Path -LiteralPath $release) { throw "Fresh v5 release root already exists: $release" }
if (@(git -C $repo status --porcelain=v1 --untracked-files=all).Count -ne 0) {
  throw 'Publish checkout is not clean before v5 reconstruction'
}
if ((git -C $repo branch --show-current).Trim() -ne 'agent/performance-without-motion-loss') {
  throw 'Wrong publish branch'
}
if ((git -C $repo rev-parse '@{upstream}').Trim() -ne
  'b416b8113315c95c32d4674aa54769d90c562abd') {
  throw 'Remote tracking head moved before v5'
}
git -C $repo merge-base --is-ancestor `
  '14dc49485df3d86f218c41f6483e9c5d477cb253' HEAD
if ($LASTEXITCODE -ne 0) {
  throw 'Approved design commit is not an ancestor of execution HEAD'
}
if ((Get-Item -LiteralPath $spec).Length -ne 30001 -or
    (Get-FileHash -Algorithm SHA256 -LiteralPath $spec).Hash.ToLowerInvariant() -ne
    'acf49fc3e71cb451ee3b9297530d4b31653e9a7db7ee917b80c78ac83c48c611') {
  throw 'Approved v5 design lock failed'
}
$null = git -C $repo ls-files --error-unmatch `
  'docs/superpowers/plans/2026-07-18-canonicalization-liveness-v5-qualification.md' 2>$null
if ($LASTEXITCODE -ne 0) {
  throw 'V5 plan is not committed'
}

$ports = @(Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue |
  Where-Object { $_.LocalPort -in 4381,4382,4383 })
if ($ports.Count -ne 0) { throw 'V5 qualification ports are occupied' }
```

Expected: clean committed plan, approved spec lock, unchanged upstream, absent v5 roots, and free ports `4381/4382/4383`.

- [ ] **Step 2: Define exact v4 file locks in the reconstruction controller**

`prepare-v5.mjs` must use:

```js
const sourceLocks = [
  ['capture-stabilizer.mjs', 3081, '369f0040d23235c711f51cee875d7f13fac9f8b72a65f03df6e6fb746155b696'],
  ['cleanup-contract.mjs', 3218, '23bb8bc83e8714e5d47b4872eb3e0a2948cba2a3f8b8739f6ecaed965397eccb'],
  ['evidence-seal.mjs', 12315, '47d7b29de007489f4a1b7a6bdd3077f6bd7984e64b134d67bfabf46754e79c8a'],
  ['finalize-browser.mjs', 33718, 'cc883268aba59aad9e15ee41775e6b34df13c29b6decf20cd80fb15a7194e21c'],
  ['harness-regression.test.mjs', 24856, 'ee3bd2f98c595775841ae608761c559df148dcf1c63aa8782321de90123b275a'],
  ['launch-contract.test.mjs', 16155, '2020362fa98286fa621a2417133739a0bc527b45dd039ec46273af7d2080973f'],
  ['launch-contract-correction-regression.test.mjs', 6972, '42dfcf28fde01ee90880715d036df157070d78267daf0998866bb9ee86eff9ba'],
  ['phase-deadline.mjs', 1208, '907aa0d367eb09de6c72c2767650001cde6f10412c915bdd03d28d339968e2a8'],
  ['phase-deadline.test.mjs', 5775, '09d7c6a5f5c5b662c3871b8d39971f4ec92a7eed68d06105e4e1b0f645a05165'],
  ['picture-poster.playwright.js', 48887, '5c6867c4c18258f5ca2b66f97ab4c1f1d11f049025105e7675f34491027274f0'],
  ['policy-lock-correction-regression.test.mjs', 6389, 'e035107923fd102c7c3a5fdecdc68410623bd4c4e749046e9fe5933d35cff47e'],
  ['prepare-browser-harness.mjs', 22610, '2555106c54f55aae0bf61a86931d66b6d3826a285865e44570a2121ed29de6ce'],
  ['process-fixture.mjs', 469, '06f8eeb1d0c8f5ce6437820246153473cc9614b72b9a3c0a0669f56fe466962b'],
  ['run-browser-gates.ps1', 37047, '7b69866ee13a65c8836af6b452d3e6736819acff940b3e55d00197a196f89944'],
  ['runner-guards.psm1', 6763, '4f6daef94ce74093f920cccb9b2acc55835287b812e1ad3b9690b333b57ad738'],
  ['runner-guards.tests.ps1', 16493, '17f215e1aad9273ba729428915b5480d729c08e84610e92e0ce4de52399fcf7c'],
  ['static-contract.test.mjs', 23049, 'bb83a9c4e80138731f84c50c0ddff5dad360a8a0d397c2c37e02b1980854d2c3'],
  ['v4-hardening-static.test.mjs', 41599, '8d1e3d533e55c7ca72b8d828eee46e5a022547f83ffee6e3dffbea7c2968955e'],
];
```

Also lock:

```js
const terminalLocks = {
  report: [13892, 'b2e588efeda3bd710e1b399ad6757b65cca34819fd15bfce717e6928525e74ad'],
  review: [1476, '50e2742832d64a2adca2a84af38163d2bbc59e5c5d0b1e4cebaa06a78b25da27'],
  progress: [3038, 'dcaee4352f570e2477411a3da26a62052450341c74a5c9e5b70ed3b3895b1e4a'],
  evidenceLock: [31008, '82769e4c701eaea3988fab733f52b546e82b8c7de8be432f6ed042dfad20155a'],
  policy: [3867, 'c118f121636333b5d301d0d2e2fc2b86f3425803f13cf5d311d882421f7835cb'],
};
const expectedSeal = {
  fileCount: 161,
  digestSha256: 'd4478009ca43cc5657c7fa51bc7382ffad98a9871cddc80bc05a3b677dd10beb',
};
```

- [ ] **Step 3: Implement exclusive authentication and copying**

Use these exact primitives in `prepare-v5.mjs`:

```js
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const project = 'C:/Users/tarik/Claude Projects/efficient-technologies';
const repo = path.join(project, 'output/publish/efficient-technologies-site');
const v4 = path.join(project, 'output/performance/2026-07-17/poster-picture-layer-v4');
const root = path.join(project, 'output/performance/2026-07-18/poster-picture-layer-v5');
const specPath = path.join(
  repo,
  'docs/superpowers/specs/2026-07-18-canonicalization-liveness-v5-qualification-design.md',
);
const planFlag = process.argv.indexOf('--plan');
if (planFlag < 0 || !process.argv[planFlag + 1]) {
  throw new Error('--plan <absolute-path> is required');
}
const planPath = path.resolve(process.argv[planFlag + 1]);
const playwrightModule =
  'C:/Users/tarik/AppData/Local/npm-cache/_npx/31e32ef8478fbf80/node_modules/playwright';
const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const edgePath = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

const sha256 = value => crypto.createHash('sha256').update(value).digest('hex');

function fileRecord(absolutePath) {
  const value = fs.readFileSync(absolutePath);
  return {
    path: absolutePath,
    bytes: value.length,
    sha256: sha256(value),
  };
}

function assertRegularFile(absolutePath, bytes, digest) {
  const stats = fs.lstatSync(absolutePath);
  if (!stats.isFile() || stats.isSymbolicLink()) {
    throw new Error(`Locked path is not a regular file: ${absolutePath}`);
  }
  const value = fs.readFileSync(absolutePath);
  if (value.length !== bytes || sha256(value) !== digest) {
    throw new Error(`Locked file mismatch: ${absolutePath}`);
  }
}

function walkFiles(treeRoot, current = treeRoot) {
  const rows = [];
  for (const entry of fs.readdirSync(current, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name))) {
    const absolutePath = path.join(current, entry.name);
    const stats = fs.lstatSync(absolutePath);
    if (entry.isSymbolicLink() || stats.isSymbolicLink()) {
      throw new Error(`Link refused: ${absolutePath}`);
    }
    if (entry.isDirectory() && stats.isDirectory()) {
      rows.push(...walkFiles(treeRoot, absolutePath));
    } else if (entry.isFile() && stats.isFile()) {
      const value = fs.readFileSync(absolutePath);
      rows.push({
        relativePath: path.relative(treeRoot, absolutePath).replaceAll('\\', '/'),
        bytes: value.length,
        sha256: sha256(value),
        mtimeMs: stats.mtimeMs,
      });
    } else {
      throw new Error(`Unsupported entry: ${absolutePath}`);
    }
  }
  return rows.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
}

function digestRows(rows) {
  return sha256(Buffer.from(JSON.stringify(
    rows.map(({ relativePath, bytes, sha256: digest }) => ({
      relativePath,
      bytes,
      sha256: digest,
    })),
  ), 'utf8'));
}

function snapshot(treeRoot) {
  const files = walkFiles(treeRoot);
  return {
    path: treeRoot,
    fileCount: files.length,
    digestSha256: digestRows(files),
    files,
  };
}

function copyFileExclusive(source, target) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target, fs.constants.COPYFILE_EXCL);
}

function writeJsonExclusive(target, value) {
  fs.writeFileSync(target, `${JSON.stringify(value, null, 2)}\n`, {
    encoding: 'utf8',
    flag: 'wx',
  });
}

function runGit(args) {
  const result = spawnSync('git', ['-C', repo, ...args], {
    encoding: 'utf8',
    windowsHide: true,
    maxBuffer: 128 * 1024 * 1024,
  });
  if (result.error || result.status !== 0) {
    const detail = (result.stderr || result.stdout || result.error?.message || '').trim();
    throw new Error(`git ${args.join(' ')} failed (${result.status}): ${detail}`);
  }
  return result.stdout.replaceAll('\r\n', '\n').trimEnd();
}

function executableRecord(absolutePath) {
  const script = [
    "$ErrorActionPreference = 'Stop'",
    '$item = Get-Item -LiteralPath $env:V5_EXECUTABLE_PATH -Force',
    '$version = @($item.VersionInfo.ProductVersion, $item.VersionInfo.FileVersion) |',
    '  Where-Object { -not [string]::IsNullOrWhiteSpace($_) } |',
    '  Select-Object -First 1',
    "if ([string]::IsNullOrWhiteSpace($version)) { throw 'Executable version metadata is empty' }",
    '[Console]::Out.Write($version.Trim())',
  ].join('\n');
  const encoded = Buffer.from(script, 'utf16le').toString('base64');
  const result = spawnSync(
    'powershell.exe',
    ['-NoProfile', '-NonInteractive', '-EncodedCommand', encoded],
    {
    encoding: 'utf8',
    env: { ...process.env, V5_EXECUTABLE_PATH: absolutePath },
    windowsHide: true,
    timeout: 30000,
    },
  );
  if (result.error || result.status !== 0) {
    const detail = (result.stderr || result.stdout || result.error?.message || '').trim();
    throw new Error(`version metadata read failed for ${absolutePath}: ${detail}`);
  }
  const version = result.stdout.trim();
  if (!version) throw new Error(`version output is empty for ${absolutePath}`);
  return { ...fileRecord(absolutePath), version };
}

function assertNoReparsePoints(treeRoot) {
  const script = [
    "$ErrorActionPreference = 'Stop'",
    '$root = $env:V5_REPARSE_ROOT',
    '$items = @((Get-Item -LiteralPath $root -Force -ErrorAction Stop))',
    '$items += @(Get-ChildItem -LiteralPath $root -Force -Recurse -ErrorAction Stop)',
    '$matches = @($items | Where-Object {',
    '  ($_.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0',
    '} | ForEach-Object { $_.FullName })',
    "if ($matches.Count -ne 0) { throw ('Reparse points found: ' + ($matches -join '; ')) }",
  ].join('\n');
  const encoded = Buffer.from(script, 'utf16le').toString('base64');
  const result = spawnSync(
    'powershell.exe',
    ['-NoProfile', '-NonInteractive', '-EncodedCommand', encoded],
    {
      encoding: 'utf8',
      env: { ...process.env, V5_REPARSE_ROOT: treeRoot },
      windowsHide: true,
      maxBuffer: 16 * 1024 * 1024,
    },
  );
  if (result.error || result.status !== 0) {
    const detail = (result.stderr || result.stdout || result.error?.message || '').trim();
    throw new Error(`reparse inspection failed for ${treeRoot}: ${detail}`);
  }
}
```

Before `fs.mkdirSync(root)`, authenticate all terminal locks, parse
`browser-evidence-lock.json`, require its exact metadata, recompute all 161
manifest entries, require no missing/different entry, and require no browser
file modification time newer than the lock. Run a PowerShell reparse-point
inspection over v4, baseline, candidate, accepted source, authoritative source,
publish checkout, V1, v2, and v3; any reparse point aborts.

After all reads pass, create `root` with `{ recursive: false }`. Copy baseline
and candidate from v4, the 18 source files into both `source-v4-browser` and
`browser`, and the exact 49-file accepted matrix source into
`accepted-harness-source`. Do not copy any v4 result, log, screenshot, profile,
PID file, verdict, failure, cleanup, phase journal, or seal.

- [ ] **Step 4: Record runtime and policy identities**

Record:

```js
const runtimeIdentity = {
  schema: 'efficient-technologies/poster-picture-layer-v5-runtime-identity-v1',
  recordedAtUtc: new Date().toISOString(),
  node: {
    path: process.execPath,
    version: process.version,
    ...fileRecord(process.execPath),
  },
  playwright: {
    path: playwrightModule,
    ...snapshot(playwrightModule),
  },
  chrome: executableRecord(chromePath),
  edge: executableRecord(edgePath),
};
```

`executableRecord` launches only hidden PowerShell to read Windows file-version
metadata; it must not execute Chrome or Edge. It requires exit `0` and includes
path, version, bytes, and SHA-256. The pinned paths are:

```text
C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules\playwright
C:\Program Files\Google\Chrome\Application\chrome.exe
C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
```

Generate v5 policy by parsing the locked v4 policy and applying only v4-to-v5
schema/path labels and `4371/4372/4373` to `4381/4382/4383`. Preserve every
product lock, threshold, one-shot rule, and production deadline.

- [ ] **Step 5: Write reconstruction records**

Write, in this order:

```text
experiment-policy.json
v4-terminal-lock.json
workspace-integrity-before.json
runtime-identity.json
reconstruction.json
```

`reconstruction.json` must include:

```js
{
  schemaVersion: 5,
  createdAtUtc: new Date().toISOString(),
  freshRoot: true,
  v4: v4Snapshot,
  baseline: snapshot(path.join(root, 'baseline')),
  candidate: snapshot(path.join(root, 'candidate')),
  copiedSource: snapshot(path.join(root, 'source-v4-browser')),
  workingSource: snapshot(path.join(root, 'browser')),
  acceptedHarnessSource: snapshot(path.join(root, 'accepted-harness-source')),
  approvedSpec: fileRecord(specPath),
  committedPlan: fileRecord(planPath),
  runtimeIdentity: fileRecord(path.join(root, 'runtime-identity.json')),
  passed: true,
}
```

Require baseline `47`, candidate `48`, accepted source `49`, and both source
copies `18`, with the exact digests from the global constraints and source-lock
table.

- [ ] **Step 6: Run reconstruction exactly once**

Run:

```powershell
& $nodePath (Join-Path $project 'output\performance\2026-07-18\prepare-v5.mjs') `
  --plan $plan
if ($LASTEXITCODE -ne 0) { throw 'V5 reconstruction failed' }
```

Expected final JSON:

```json
{"commandStatus":"COMPLETED","mode":"reconstruct","decision":"ACCEPT","schemaVersion":5}
```

- [ ] **Step 7: Prove no premature evidence exists**

Reject any of:

```text
diagnostic/red
diagnostic/green
browser/run-started.json
browser/browser-phase-journal.jsonl
browser/browser-cleanup.json
browser/visual-review.json
browser/final-verification.json
browser/browser-evidence-lock.json
browser/profiles
lighthouse
```

Also require zero processes whose command line contains the v5 root and zero
listeners on `4381/4382/4383`.

- [ ] **Step 8: Write the three-case canonicalizer contract before the fix**

`canonicalizer-contract.test.mjs` accepts `--output <absolute-json-path>` and
contains exactly:

```js
const tests = [
  {
    name: 'production canonicalizer is synchronous and scheduler-free',
    run() {
      const source = readRequired('capture-stabilizer.mjs');
      assert.doesNotMatch(source, /\brequestAnimationFrame\b|\bsetTimeout\b|\bqueueMicrotask\b/);
      assert.doesNotMatch(source, /page\.evaluate\s*\(\s*async\s*\(/);
    },
  },
  {
    name: 'production helper equals the sealed proposed module',
    run() {
      const proposed = readRequired('../diagnostic/red/capture-stabilizer-proposed.mjs');
      assert.equal(readRequired('capture-stabilizer.mjs'), proposed);
    },
  },
  {
    name: 'harness unit fixture rejects scheduler access',
    run() {
      const source = readRequired('harness-regression.test.mjs');
      assert.doesNotMatch(source, /requestAnimationFrame:\s*callbackFunction\s*=>\s*queueMicrotask/);
      assert.match(source, /capture stabilizer attempted scheduler access/);
    },
  },
];
```

The runner writes:

```js
{
  schema: 'efficient-technologies/poster-picture-layer-v5-canonicalizer-contract-v1',
  total: 3,
  passed,
  failed,
  tests: results,
}
```

and exits `0` only when all three pass.

- [ ] **Step 9: Capture exact static RED**

Run:

```powershell
& $nodePath (Join-Path $root 'browser\canonicalizer-contract.test.mjs') `
  --output (Join-Path $root 'browser\canonicalizer-contract-red.json')
$redExit = $LASTEXITCODE
if ($redExit -eq 0) { throw 'Legacy canonicalizer unexpectedly passed before diagnostic' }
```

Require `total: 3`, `passed: 0`, `failed: 3`, with causes:

```text
requestAnimationFrame is present
sealed proposed module is absent
unit fixture substitutes requestAnimationFrame with queueMicrotask
```

An import error, syntax error, missing output record, wrong test name, or any
different failure is invalid RED.

- [ ] **Step 10: Verify Task 1 boundaries and review**

Freshly authenticate the v4 evidence seal without invoking its verifier, compare
v4 against `v4-terminal-lock.json`, require Git clean at the plan commit, v5
ports free, no browser/server/profile process, and product roots exact.

Write `.superpowers/sdd/canonicalization-liveness-v5/task-1-report.md`.
Independent review must approve reconstruction, runtime identity, source
allowlist, exact RED, and zero browser/network/product/Git activity. No commit.

---

### Task 2: Prove the causal RED matrix in real Chrome

**Files:**

- Create: `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/canonicalization-fixture.mjs`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/source/capture-stabilizer-proposed.mjs`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/canonicalization-cell.mjs`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/diagnostic-evidence-seal.mjs`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/finalize-canonicalization-diagnostic.mjs`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/diagnostic-contract.test.mjs`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/run-canonicalization-diagnostic.ps1`
- Create and seal: `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/red/*`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-2-report.md`

**Interfaces:**

- Consumes: reviewed Task 1 reconstruction, static RED, locked runtime identity, immutable legacy helper, and unchanged product/Git boundaries.
- Produces: sealed RED decision `CONFIRMED`, `FALSIFIED`, or `INCONCLUSIVE`. Only `CONFIRMED` unlocks Task 3.

- [ ] **Step 1: Write the offline diagnostic contract tests**

`diagnostic-contract.test.mjs` creates temporary synthetic cell records and
tests exactly:

```text
exact RED matrix is CONFIRMED
each of the three completed RED outcome mutations is FALSIFIED
passing-state digest mismatch is FALSIFIED
any HTTP request is FALSIFIED
missing result or cleanup failure is INCONCLUSIVE
exact GREEN matrix is GREEN
production or runtime identity mismatch is INCONCLUSIVE
post-seal mutation fails verification
```

The completed-outcome test loops over exactly these mutations and requires all
three subcases to return `FALSIFIED`:

```js
[
  ['legacy-js-disabled', 'PASS'],
  ['legacy-js-enabled', 'TIMEOUT'],
  ['proposed-js-disabled', 'TIMEOUT'],
]
```

Use this result contract:

```js
{
  schema: 'efficient-technologies/poster-picture-layer-v5-diagnostic-contract-v1',
  total: 8,
  passed,
  failed,
  tests: results,
}
```

The test accepts `--output <absolute-json-path>` and exits `0` only at `8/8`.
Do not statically import the subject. Each named test calls:

```js
const loadSubject = () => import(
  `${pathToFileURL(path.join(
    diagnosticRoot,
    'finalize-canonicalization-diagnostic.mjs',
  )).href}?contract=v1`
);
```

The common test runner catches the rejected import inside each test, preserves
all eight exact names, writes valid JSON, and then exits `2`. This is what makes
the pre-implementation RED valid rather than a top-level syntax/setup failure.

- [ ] **Step 2: Run the diagnostic tests to valid RED**

Run before creating the finalizer:

```powershell
& $nodePath (Join-Path $root 'diagnostic\diagnostic-contract.test.mjs') `
  --output (Join-Path $root 'diagnostic\diagnostic-contract-red.json')
$contractRedExit = $LASTEXITCODE
if ($contractRedExit -eq 0) { throw 'Diagnostic contract passed before finalizer implementation' }
```

Expected: eight named failures caused only by missing
`finalize-canonicalization-diagnostic.mjs`. A syntax failure or absent JSON is
invalid RED.

- [ ] **Step 3: Write the proposed complete stabilizer**

Create `diagnostic/source/capture-stabilizer-proposed.mjs` with this complete
content:

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

export async function canonicalizeCaptureState(page) {
  await page.addStyleTag({ content: CANONICAL_CAPTURE_STYLE });
  return page.evaluate(() => {
    const count = document.querySelector('#pre-count-n');
    if (count) count.textContent = '0';

    for (const video of document.querySelectorAll('video')) {
      video.controls = false;
      video.removeAttribute('controls');
      try { video.pause(); } catch {}
    }

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

Before any browser, compare it with the legacy module and require:

```text
CANONICAL_CAPTURE_STYLE byte-identical
count/video mutations byte-identical
returned property names and nesting identical
the only behavioral delta is removal of the double-frame wait
computed-style values and bounds still read
inner page evaluation no longer async
```

- [ ] **Step 4: Write the deterministic inline fixture**

`canonicalization-fixture.mjs` exports:

```js
export const FIXTURE_HTML = `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<style>
html,body{margin:0;width:100%;height:100%;background:#05070b;color:#fff}
#preloader{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;transition:opacity 1s}
.pre-mark{width:80px;height:80px;opacity:.25;transform:scale(.7);animation:pulse 2s infinite}
.pre-label,.pre-count{display:block}
.pre-cur{opacity:.2}
@keyframes pulse{50%{opacity:.8}}
</style>
</head>
<body>
<div id="preloader">
  <div class="pre-mark">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <path class="pre-chev" d="M10 40 L35 65 L70 10" stroke="white" fill="none"></path>
    </svg>
  </div>
  <div class="pre-label">initializing systems</div>
  <div class="pre-count"><span id="pre-count-n">73</span></div>
  <div class="pre-cur"></div>
</div>
<video controls></video>
</body>
</html>`;

export const CANONICAL_TOP_LEVEL_KEYS = [
  'activePreloaderAnimationCount',
  'bounds',
  'chevronDashOffset',
  'countText',
  'cursorOpacity',
  'labelText',
  'markOpacity',
  'markTransform',
  'preloaderDisplay',
  'preloaderTransform',
  'preloaderTransition',
  'videoControls',
];

export function validateCanonicalState(state) {
  if (!state || typeof state !== 'object' || Array.isArray(state)) {
    throw new Error('canonical state is not an object');
  }
  const keys = Object.keys(state).sort();
  if (JSON.stringify(keys) !== JSON.stringify(CANONICAL_TOP_LEVEL_KEYS)) {
    throw new Error(`canonical state keys differ: ${JSON.stringify(keys)}`);
  }
  if (state.labelText !== 'initializing systems' || state.countText !== '0') {
    throw new Error('canonical label/count values differ');
  }
  if (state.activePreloaderAnimationCount !== 0) {
    throw new Error('preloader animation remains active');
  }
  if (JSON.stringify(state.videoControls) !== JSON.stringify([{
    controlsProperty: false,
    controlsAttribute: null,
  }])) {
    throw new Error('video controls were not suppressed');
  }
  for (const name of ['preloader', 'mark', 'label', 'count']) {
    const rect = state.bounds?.[name];
    const rectKeys = rect && Object.keys(rect).sort();
    if (JSON.stringify(rectKeys) !==
        JSON.stringify(['bottom', 'height', 'left', 'right', 'top', 'width'])) {
      throw new Error(`invalid ${name} bounds`);
    }
  }
  return state;
}
```

- [ ] **Step 5: Implement one isolated diagnostic cell**

`canonicalization-cell.mjs` accepts only:

```text
--id <legacy-js-disabled|legacy-js-enabled|proposed-js-disabled|proposed-js-enabled|production-js-disabled|production-js-enabled>
--strategy <legacy|proposed|production>
--javascript <disabled|enabled>
--profile <absolute-contained-path>
--output <absolute-contained-json-path>
--phase-journal <absolute-contained-jsonl-path>
```

Derive paths and phase handling exactly:

```js
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { FIXTURE_HTML, validateCanonicalState } from './canonicalization-fixture.mjs';
import {
  PhaseTimeoutError,
  withPhaseDeadline,
} from '../browser/phase-deadline.mjs';

function requiredArgument(name) {
  const index = process.argv.indexOf(name);
  if (index < 0 || !process.argv[index + 1]) {
    throw new Error(`${name} is required`);
  }
  return process.argv[index + 1];
}

const id = requiredArgument('--id');
const strategy = requiredArgument('--strategy');
const javascriptMode = requiredArgument('--javascript');
if (!['legacy', 'proposed', 'production'].includes(strategy)) {
  throw new Error(`unsupported strategy: ${strategy}`);
}
if (!['disabled', 'enabled'].includes(javascriptMode)) {
  throw new Error(`unsupported JavaScript mode: ${javascriptMode}`);
}
if (id !== `${strategy}-js-${javascriptMode}`) {
  throw new Error(`cell id does not match strategy and JavaScript mode: ${id}`);
}
const diagnosticRoot = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(diagnosticRoot);
const outputPath = path.resolve(requiredArgument('--output'));
const stageRoot = path.dirname(outputPath);
const stage = path.basename(stageRoot);
if (path.dirname(stageRoot) !== diagnosticRoot || !['red', 'green'].includes(stage)) {
  throw new Error('diagnostic output is not in an exact red or green stage');
}
const allowedIdsByStage = {
  red: [
    'legacy-js-disabled',
    'legacy-js-enabled',
    'proposed-js-disabled',
    'proposed-js-enabled',
  ],
  green: [
    'legacy-js-disabled',
    'legacy-js-enabled',
    'production-js-disabled',
    'production-js-enabled',
  ],
};
if (!allowedIdsByStage[stage].includes(id)) {
  throw new Error(`cell ${id} is not authorized for ${stage}`);
}
if (outputPath !== path.join(stageRoot, `${id}.result.json`) ||
    fs.existsSync(outputPath)) {
  throw new Error('result path is not fresh or does not match the cell id');
}
const phaseJournalPath = path.resolve(requiredArgument('--phase-journal'));
if (phaseJournalPath !== path.join(stageRoot, `${id}.phase.jsonl`) ||
    fs.existsSync(phaseJournalPath)) {
  throw new Error('phase journal path is not fresh or does not match the cell id');
}
const profilePath = path.resolve(requiredArgument('--profile'));
if (profilePath !== path.join(stageRoot, '.profiles', id) ||
    fs.existsSync(profilePath)) {
  throw new Error('profile path is not fresh or does not match the cell id');
}
const javaScriptEnabled = javascriptMode === 'enabled';
const sha256 = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const journal = (phase, state) => {
  fs.appendFileSync(phaseJournalPath, `${JSON.stringify({
    schema: 'efficient-technologies/poster-picture-layer-v5-canonicalization-phase-v1',
    recordedAtUtc: new Date().toISOString(),
    pid: process.pid,
    id,
    phase,
    state,
  })}\n`, 'utf8');
};
const bounded = (phase, timeoutMs, operation) =>
  withPhaseDeadline({ phase, id, timeoutMs, journal, operation });

function walkFiles(treeRoot, current = treeRoot) {
  const rows = [];
  for (const entry of fs.readdirSync(current, { withFileTypes: true })
    .sort((left, right) => left.name.localeCompare(right.name))) {
    const absolutePath = path.join(current, entry.name);
    const stats = fs.lstatSync(absolutePath);
    if (entry.isSymbolicLink() || stats.isSymbolicLink()) {
      throw new Error(`runtime link refused: ${absolutePath}`);
    }
    if (entry.isDirectory() && stats.isDirectory()) {
      rows.push(...walkFiles(treeRoot, absolutePath));
    } else if (entry.isFile() && stats.isFile()) {
      const value = fs.readFileSync(absolutePath);
      rows.push({
        relativePath: path.relative(treeRoot, absolutePath).replaceAll('\\', '/'),
        bytes: value.length,
        sha256: sha256(value),
      });
    } else {
      throw new Error(`unsupported runtime entry: ${absolutePath}`);
    }
  }
  return rows.sort((left, right) =>
    left.relativePath.localeCompare(right.relativePath));
}

function snapshot(treeRoot) {
  const files = walkFiles(treeRoot);
  return {
    fileCount: files.length,
    digestSha256: sha256(Buffer.from(JSON.stringify(files), 'utf8')),
  };
}

const runtimePath = path.join(root, 'runtime-identity.json');
const runtimeBytes = fs.readFileSync(runtimePath);
const runtimeIdentitySha256 = sha256(runtimeBytes);
const runtimeIdentity = JSON.parse(runtimeBytes.toString('utf8'));
const samePath = (left, right) =>
  path.resolve(left).toLowerCase() === path.resolve(right).toLowerCase();
const assertRecordedFile = record => {
  const bytes = fs.readFileSync(record.path);
  if (bytes.length !== record.bytes || sha256(bytes) !== record.sha256) {
    throw new Error(`runtime file identity drifted: ${record.path}`);
  }
};
if (!samePath(process.execPath, runtimeIdentity.node.path) ||
    process.version !== runtimeIdentity.node.version) {
  throw new Error('Node runtime identity drifted');
}
assertRecordedFile(runtimeIdentity.node);
assertRecordedFile(runtimeIdentity.chrome);
const currentPlaywright = snapshot(runtimeIdentity.playwright.path);
if (currentPlaywright.fileCount !== runtimeIdentity.playwright.fileCount ||
    currentPlaywright.digestSha256 !== runtimeIdentity.playwright.digestSha256) {
  throw new Error('Playwright module identity drifted');
}
const require = createRequire(import.meta.url);
const { chromium } = require(runtimeIdentity.playwright.path);
```

Use the locked Playwright module from `runtime-identity.json`, import
`withPhaseDeadline` and `PhaseTimeoutError` from
`../browser/phase-deadline.mjs`, and import the selected stabilizer from:

```js
const strategyPaths = {
  legacy: path.join(root, 'source-v4-browser/capture-stabilizer.mjs'),
  proposed: path.join(stageRoot, 'capture-stabilizer-proposed.mjs'),
  production: path.join(root, 'browser/capture-stabilizer.mjs'),
};
```

Load only the selected exact module:

```js
const strategyPath = strategyPaths[strategy];
const strategyBytes = fs.readFileSync(strategyPath);
const strategySha256 = crypto.createHash('sha256').update(strategyBytes).digest('hex');
const { canonicalizeCaptureState } = await import(
  `${pathToFileURL(strategyPath).href}?sha256=${strategySha256}`
);
if (typeof canonicalizeCaptureState !== 'function') {
  throw new Error(`invalid canonicalizer export: ${strategyPath}`);
}
```

The cell's browser sequence and exact outcome handling are:

```js
let context = null;
let state = null;
let outcome = 'INFRASTRUCTURE_ERROR';
let primaryError = null;
let contextClosed = false;
let profileRemoved = false;
const httpRequests = [];
const errors = [];

try {
  context = await bounded('persistent-context-launch', 45_000, () =>
    chromium.launchPersistentContext(profilePath, {
      executablePath: runtimeIdentity.chrome.path,
      headless: true,
      viewport: { width: 412, height: 823 },
      javaScriptEnabled,
      deviceScaleFactor: 1,
      colorScheme: 'dark',
      acceptDownloads: false,
      serviceWorkers: 'block',
      permissions: [],
      args: ['--disable-background-networking'],
    }));
  await context.route('**/*', async (route) => {
    const url = route.request().url();
    if (/^https?:/i.test(url)) {
      httpRequests.push(url);
      await route.abort('blockedbyclient');
    } else {
      await route.continue();
    }
  });
  const page = await bounded('new-page', 45_000, () => context.newPage());
  await bounded('fixture-installation', 15_000, () =>
    page.setContent(FIXTURE_HTML, { waitUntil: 'domcontentloaded' }));
  state = await bounded('capture-canonicalization', 5_000, () =>
    canonicalizeCaptureState(page));
  validateCanonicalState(state);
  outcome = 'PASS';
} catch (error) {
  const exactExpectedTimeout =
    error instanceof PhaseTimeoutError &&
    error.phase === 'capture-canonicalization' &&
    error.timeoutMs === 5000;
  if (exactExpectedTimeout) {
    outcome = 'TIMEOUT';
  } else {
    primaryError = {
      name: error?.name ?? 'Error',
      message: error?.message ?? String(error),
      stack: error?.stack ?? null,
    };
  }
} finally {
  if (context) {
    try {
      await bounded('context-close', 15_000, () => context.close());
      contextClosed = true;
    } catch (error) {
      errors.push(`context close failed: ${error?.message ?? error}`);
    }
  } else {
    contextClosed = true;
  }
}
```

`bounded` writes synchronous `START`, `END`, or `TIMEOUT` JSONL records. Catch
only an exact `PhaseTimeoutError` for `capture-canonicalization` at `5000` ms
as outcome `TIMEOUT`. Any other error is
`INFRASTRUCTURE_ERROR`. The only cell allowed to exit successfully with
`TIMEOUT` is `legacy-js-disabled`; any timeout in another cell writes its
result and exits `2`.

After the `finally`, remove only the already validated exact profile with a
hidden PowerShell child. It first enumerates the profile and all descendants
and rejects any reparse point; only then may it call `Remove-Item -LiteralPath
$env:V5_DIAGNOSTIC_PROFILE -Recurse -Force`. If the path is already absent,
set `profileRemoved = true`. Otherwise require that hidden child to exit `0`
and then require the profile absent. Record any failure in `errors`.

If `errors` is nonempty, set `outcome = 'INFRASTRUCTURE_ERROR'`. Parse the
completed JSONL journal into `phases`, then write one exclusive result:

```js
{
  schema: 'efficient-technologies/poster-picture-layer-v5-canonicalization-cell-v1',
  id,
  strategy,
  javaScriptEnabled,
  outcome,
  timeoutMs: outcome === 'TIMEOUT' ? 5000 : null,
  state,
  stateDigestSha256: state ? sha256(Buffer.from(JSON.stringify(state), 'utf8')) : null,
  httpRequests,
  strategySha256,
  error: primaryError,
  runtimeIdentity: {
    sha256: runtimeIdentitySha256,
    nodeVerified: true,
    playwrightVerified: true,
    chromeVerified: true,
  },
  phases,
  cleanup: {
    contextClosed,
    profileRemoved,
    errors,
    pass: contextClosed && profileRemoved && errors.length === 0,
  },
}
```

Exit `0` for `PASS`, or for `TIMEOUT` only when
`id === 'legacy-js-disabled'`; exit `2` for every other state.

- [ ] **Step 6: Implement matrix finalization and sealing**

`finalize-canonicalization-diagnostic.mjs` supports exactly:

```text
finalize --stage red|green --root <absolute-stage-root>
verify --root <absolute-stage-root>
```

Adapt the authenticated 12,315-byte v4 `browser/evidence-seal.mjs` into
`diagnostic/diagnostic-evidence-seal.mjs`. The adapter rejects source drift and
requires these exact replacement counts before writing:

```js
const sealReplacements = [
  ['browser-evidence-lock.json', 'diagnostic-evidence-lock.json', 1],
  [
    `const REQUIRED_PATHS = [
  'final-verification.json',
  'browser-phase-journal.jsonl',
  'browser-cleanup.json',
  'boundary-after.json',
  'finalizer.log',
];`,
    'const REQUIRED_PATHS = [];',
    1,
  ],
  [
    'efficient-technologies/poster-picture-layer-v4-browser-evidence-lock-v1',
    'efficient-technologies/poster-picture-layer-v5-diagnostic-evidence-lock-v1',
    1,
  ],
  ['browser evidence root', 'diagnostic evidence root', 3],
  ['node evidence-seal.mjs', 'node diagnostic-evidence-seal.mjs', 2],
  ['absolute-browser-root', 'absolute-diagnostic-root', 2],
];
```

No other byte changes are permitted. Record source and adapted bytes and hashes
in `diagnostic/seal-adaptation.json`. Before every seal or verify call, require
the source v4 seal hash, adapted seal hash, and replacement record still equal
that adaptation record.

The finalizer imports `sealEvidence` and `verifyEvidenceSeal` from that adapted
module and exports these exact wrappers:

```js
export function sealDiagnosticEvidence(stageRoot) {
  return sealEvidence(stageRoot);
}

export function verifyDiagnosticEvidence(stageRoot) {
  return verifyEvidenceSeal(stageRoot);
}
```

Implement classification exactly:

```js
const LEGACY_SHA256 =
  '369f0040d23235c711f51cee875d7f13fac9f8b72a65f03df6e6fb746155b696';
const MATRIX_EXPECTATIONS = {
  red: [
    ['legacy-js-disabled', 'legacy', 'TIMEOUT'],
    ['legacy-js-enabled', 'legacy', 'PASS'],
    ['proposed-js-disabled', 'proposed', 'PASS'],
    ['proposed-js-enabled', 'proposed', 'PASS'],
  ],
  green: [
    ['legacy-js-disabled', 'legacy', 'TIMEOUT'],
    ['legacy-js-enabled', 'legacy', 'PASS'],
    ['production-js-disabled', 'production', 'PASS'],
    ['production-js-enabled', 'production', 'PASS'],
  ],
};

export function classifyMatrix({
  stage,
  results,
  cleanup,
  expectedRuntimeIdentitySha256,
  sealedProposedSha256 = null,
}) {
  if (!Object.hasOwn(MATRIX_EXPECTATIONS, stage)) {
    throw new Error(`unsupported diagnostic stage: ${stage}`);
  }
  const expected = MATRIX_EXPECTATIONS[stage];
  const infrastructureFailures = [];
  const outcomeMismatches = [];
  const stateMismatches = [];
  const networkViolations = [];

  if (!Array.isArray(results) || results.length !== expected.length) {
    infrastructureFailures.push({
      field: 'results.length',
      expected: expected.length,
      actual: Array.isArray(results) ? results.length : null,
    });
  }
  if (cleanup?.pass !== true) {
    infrastructureFailures.push({ field: 'cleanup.pass', expected: true, actual: cleanup?.pass });
  }
  if (!/^[a-f0-9]{64}$/.test(expectedRuntimeIdentitySha256)) {
    infrastructureFailures.push({ field: 'expectedRuntimeIdentitySha256' });
  }
  if (!/^[a-f0-9]{64}$/.test(sealedProposedSha256 ?? '')) {
    infrastructureFailures.push({ field: 'sealedProposedSha256' });
  }

  for (let index = 0; index < expected.length; index += 1) {
    const [expectedId, expectedStrategy, expectedOutcome] = expected[index];
    const result = Array.isArray(results) ? results[index] : null;
    if (!result || typeof result !== 'object' || Array.isArray(result)) {
      infrastructureFailures.push({ field: `results[${index}]`, expected: 'object' });
      continue;
    }
    if (result.schema !==
        'efficient-technologies/poster-picture-layer-v5-canonicalization-cell-v1') {
      infrastructureFailures.push({ field: `${expectedId}.schema`, actual: result.schema });
    }
    if (result.outcome === 'INFRASTRUCTURE_ERROR') {
      infrastructureFailures.push({ field: `${expectedId}.outcome`, actual: result.outcome });
    }
    if (result.cleanup?.pass !== true) {
      infrastructureFailures.push({
        field: `${expectedId}.cleanup.pass`,
        actual: result.cleanup?.pass,
      });
    }
    if (result.runtimeIdentity?.sha256 !== expectedRuntimeIdentitySha256 ||
        result.runtimeIdentity?.nodeVerified !== true ||
        result.runtimeIdentity?.playwrightVerified !== true ||
        result.runtimeIdentity?.chromeVerified !== true) {
      infrastructureFailures.push({ field: `${expectedId}.runtimeIdentity` });
    }
    const expectedStrategySha256 = expectedStrategy === 'legacy'
      ? LEGACY_SHA256
      : sealedProposedSha256;
    if (result.strategySha256 !== expectedStrategySha256) {
      infrastructureFailures.push({
        field: `${expectedId}.strategySha256`,
        expected: expectedStrategySha256,
        actual: result.strategySha256,
      });
    }
    if (result.id !== expectedId ||
        result.strategy !== expectedStrategy ||
        result.outcome !== expectedOutcome) {
      outcomeMismatches.push({
        index,
        expected: { id: expectedId, strategy: expectedStrategy, outcome: expectedOutcome },
        actual: {
          id: result.id,
          strategy: result.strategy,
          outcome: result.outcome,
        },
      });
    }
    if (expectedOutcome === 'TIMEOUT') {
      const timeoutPhase = Array.isArray(result.phases)
        && result.phases.some(record =>
          record.phase === 'capture-canonicalization' &&
          record.state === 'TIMEOUT');
      if (result.timeoutMs !== 5000 || !timeoutPhase) {
        infrastructureFailures.push({ field: `${expectedId}.exactTimeout` });
      }
    } else if (result.timeoutMs !== null ||
               !/^[a-f0-9]{64}$/.test(result.stateDigestSha256 ?? '')) {
      infrastructureFailures.push({ field: `${expectedId}.passingState` });
    }
    if (!Array.isArray(result.httpRequests)) {
      infrastructureFailures.push({ field: `${expectedId}.httpRequests` });
    } else if (result.httpRequests.length !== 0) {
      networkViolations.push({ id: expectedId, urls: result.httpRequests });
    }
  }

  const passing = (Array.isArray(results) ? results : [])
    .filter(result => result?.outcome === 'PASS');
  const passingDigests = [...new Set(
    passing.map(result => result.stateDigestSha256),
  )];
  if (passing.length > 0 && passingDigests.length !== 1) {
    stateMismatches.push({ passingDigests });
  }

  const infrastructureFailure = infrastructureFailures.length !== 0;
  const causalMismatch =
    outcomeMismatches.length !== 0 ||
    stateMismatches.length !== 0 ||
    networkViolations.length !== 0;
  const decision = infrastructureFailure
    ? 'INCONCLUSIVE'
    : causalMismatch
      ? (stage === 'red' ? 'FALSIFIED' : 'REJECT')
      : (stage === 'red' ? 'CONFIRMED' : 'GREEN');

  return {
    stage,
    expected,
    decision,
    infrastructureFailures,
    outcomeMismatches,
    stateMismatches,
    networkViolations,
    pass: decision === (stage === 'red' ? 'CONFIRMED' : 'GREEN'),
  };
}
```

For `finalize`, construct `results` in `MATRIX_EXPECTATIONS[stage]` order.
Insert `null` for a missing or invalid result rather than filtering it out.
Parse each present phase journal independently, require its canonical records
equal the result's `phases`, and replace only the in-memory classification copy
with `{ ...result, outcome: 'INFRASTRUCTURE_ERROR',
validationErrors: ['phase journal mismatch'] }` on any mismatch. Never rewrite
the cell record. Compute `sealedProposedSha256` from the RED stage copy;
for GREEN, obtain it only from a read-only `ACCEPT` verification of the RED
seal plus the sealed RED matrix. The GREEN finalizer also hashes the current
production helper and requires the same digest before classification.

Runtime identity comparison is exact equality between each cell's
`runtimeIdentity.sha256` and the immutable
`expectedRuntimeIdentitySha256`, both computed over the full canonical
`runtime-identity.json` bytes. It must not compare timestamps or accept only a
version string.

For RED, require the stage copy of the proposed module and record its bytes and
SHA-256. For GREEN, require production helper SHA-256 equals the proposed
module record in the verified RED seal.

Write `canonicalization-liveness-red.json` or
`canonicalization-liveness-green.json`, then create
`diagnostic-evidence-lock.json` as the final write. The lock inventory excludes
only itself and contains sorted relative paths, bytes, SHA-256, file count, and
digest. `verify` must reject any missing, added, changed, reordered, malformed,
linked, or reparse entry and must not write.

Before sealing, construct an exact expected-path list:

```text
diagnostic-cleanup.json
legacy-js-disabled.result.json
legacy-js-disabled.phase.jsonl
legacy-js-enabled.result.json
legacy-js-enabled.phase.jsonl
proposed-js-disabled.result.json for RED
proposed-js-disabled.phase.jsonl for RED
proposed-js-enabled.result.json for RED
proposed-js-enabled.phase.jsonl for RED
production-js-disabled.result.json for GREEN
production-js-disabled.phase.jsonl for GREEN
production-js-enabled.result.json for GREEN
production-js-enabled.phase.jsonl for GREEN
canonicalization-liveness-red.json or canonicalization-liveness-green.json
capture-stabilizer-proposed.mjs for RED only
```

The matrix record contains `expectedPaths`, `presentPaths`, and `missingPaths`.
A missing cell result or journal forces `INCONCLUSIVE` but does not prevent the
controller from sealing the failed attempt. If the controller cleanup record
is absent, the finalizer exclusively writes a fallback
`diagnostic-cleanup.json` with `pass:false`, an empty ownership inventory, and
the exact error `controller cleanup record missing`. A missing RED proposed
module is recorded in `missingPaths` and forces `INCONCLUSIVE`; it does not
leave an unsealed mutable attempt. The matrix record is the only mandatory
pre-lock path. Any per-cell `.stdout.txt` and `.stderr.txt` files that the
controller creates are included in the lock inventory and need not be
nonempty. No `.profiles` directory or process-registration file may remain
when the lock is written; residue forces cleanup `pass:false` but must first be
removed by the bounded controller before sealing.

- [ ] **Step 7: Turn the offline diagnostic contract GREEN**

Run:

```powershell
& $nodePath (Join-Path $root 'diagnostic\diagnostic-contract.test.mjs') `
  --output (Join-Path $root 'diagnostic\diagnostic-contract-green.json')
if ($LASTEXITCODE -ne 0) { throw 'Diagnostic contract is not GREEN' }
```

Expected: `8/8`.

- [ ] **Step 8: Implement the bounded four-cell controller**

`run-canonicalization-diagnostic.ps1` begins:

```powershell
param(
  [Parameter(Mandatory = $true)]
  [ValidateSet('red', 'green')]
  [string]$Stage
)
Set-StrictMode -Version 2.0
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$stageRoot = Join-Path $PSScriptRoot $Stage
$runtimePath = Join-Path $root 'runtime-identity.json'
$guardsPath = Join-Path $root 'browser\runner-guards.psm1'
$cellPath = Join-Path $PSScriptRoot 'canonicalization-cell.mjs'
$finalizerPath = Join-Path $PSScriptRoot 'finalize-canonicalization-diagnostic.mjs'
$overallDeadlineMs = 300000
$cellDeadlineMs = 120000
$started = [Diagnostics.Stopwatch]::StartNew()
$runtime = Get-Content -LiteralPath $runtimePath -Raw | ConvertFrom-Json
$nodePath = [string]$runtime.node.path
if (-not (Test-Path -LiteralPath $nodePath -PathType Leaf)) {
  throw "Recorded Node executable is missing: $nodePath"
}

if (Test-Path -LiteralPath $stageRoot) {
  throw "Fresh diagnostic stage already exists: $stageRoot"
}
$null = New-Item -ItemType Directory -Path $stageRoot
Import-Module $guardsPath -Force -ErrorAction Stop
```

For RED, copy
`diagnostic/source/capture-stabilizer-proposed.mjs` exclusively to
`diagnostic/red/capture-stabilizer-proposed.mjs` before any cell. For GREEN,
verify the RED seal read-only first.

Before the cell table, define exact ownership and phase readers:

```powershell
$ownedProcesses = [System.Collections.Generic.List[System.Diagnostics.Process]]::new()
$registerProcess = {
  param([Diagnostics.Process]$Process)
  $ownedProcesses.Add($Process)
}

function Get-LastDiagnosticPhase {
  param([Parameter(Mandatory = $true)][string]$Path)
  if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) { return '' }
  $lines = @(Get-Content -LiteralPath $Path -ErrorAction SilentlyContinue)
  for ($index = $lines.Count - 1; $index -ge 0; $index -= 1) {
    try {
      $record = $lines[$index] | ConvertFrom-Json -ErrorAction Stop
      return "$($record.phase):$($record.state)"
    } catch {
      continue
    }
  }
  return ''
}
```

Define cells in exact table order:

```powershell
$cells = if ($Stage -eq 'red') {
  @(
    @{ id='legacy-js-disabled'; strategy='legacy'; javascript='disabled' },
    @{ id='legacy-js-enabled'; strategy='legacy'; javascript='enabled' },
    @{ id='proposed-js-disabled'; strategy='proposed'; javascript='disabled' },
    @{ id='proposed-js-enabled'; strategy='proposed'; javascript='enabled' }
  )
} else {
  @(
    @{ id='legacy-js-disabled'; strategy='legacy'; javascript='disabled' },
    @{ id='legacy-js-enabled'; strategy='legacy'; javascript='enabled' },
    @{ id='production-js-disabled'; strategy='production'; javascript='disabled' },
    @{ id='production-js-enabled'; strategy='production'; javascript='enabled' }
  )
}
```

Before the loop, create the profiles container exactly once:

```powershell
$profilesRoot = Join-Path $stageRoot '.profiles'
$null = New-Item -ItemType Directory -Path $profilesRoot
```

For each cell, use these exact contained paths:

```powershell
$profilePath = Join-Path $profilesRoot $cell.id
$resultPath = Join-Path $stageRoot "$($cell.id).result.json"
$journalPath = Join-Path $stageRoot "$($cell.id).phase.jsonl"
$stdoutPath = Join-Path $stageRoot "$($cell.id).stdout.txt"
$stderrPath = Join-Path $stageRoot "$($cell.id).stderr.txt"
```

Pass exactly `--id`, `--strategy`, `--javascript`, `--profile`, `--output`,
and `--phase-journal` to the Node cell in that order. Reject any pre-existing
path before launch.

Before each cell, compute:

```powershell
$remainingMs = $overallDeadlineMs - [int]$started.ElapsedMilliseconds
if ($remainingMs -le 0) { throw 'Full diagnostic controller exceeded 300000 ms' }
$deadlineMs = [Math]::Min($cellDeadlineMs, $remainingMs)
```

Launch each Node cell with `$nodePath` and:

```powershell
$argumentList = @(
  $cellPath,
  '--id', [string]$cell.id,
  '--strategy', [string]$cell.strategy,
  '--javascript', [string]$cell.javascript,
  '--profile', $profilePath,
  '--output', $resultPath,
  '--phase-journal', $journalPath
)
$processResult = Invoke-OwnedProcessWithDeadline `
  -FilePath $nodePath `
  -ArgumentList $argumentList `
  -Label "canonicalization-$($cell.id)" `
  -DeadlineMs $deadlineMs `
  -StdoutPath $stdoutPath `
  -StderrPath $stderrPath `
  -RegisterProcess $registerProcess `
  -ReadLastPhase { Get-LastDiagnosticPhase -Path $journalPath }
```

The imported helper supplies `-WindowStyle Hidden`; PID registration is
immediate. Append every child exit to `cell-process-results.json`. Exit `0`
requires a valid `PASS` result or the expected `legacy-js-disabled` timeout.
Exit `2` does not stop the remaining fixed cells: if its result is valid, it is
classified by the matrix as a completed mismatch or infrastructure error. A
parent deadline, missing/malformed result, exit outside `0/2`, or disagreement
between exit and result is infrastructure failure. Preserve stderr in all
cases and continue only while the controller budget remains positive.

In one `finally`, stop only registered survivors, stop any Chrome process whose
exact `--user-data-dir` is a contained stage profile, remove only contained
non-reparse profiles, recount processes/profiles and listeners on
`4381/4382/4383`, and write `diagnostic-cleanup.json`. Always invoke the
finalizer after cleanup so missing or failed cells seal `INCONCLUSIVE` rather
than leaving mutable evidence.

The cleanup record contains the registered and stopped PIDs, exact-profile
fallbacks, residual owned PIDs, residual profile paths, occupied qualification
ports, errors, and:

```powershell
$cleanup.pass = (
  @($cleanup.residualOwnedPids).Count -eq 0 -and
  @($cleanup.residualProfiles).Count -eq 0 -and
  @($cleanup.occupiedPorts).Count -eq 0 -and
  @($cleanup.errors).Count -eq 0
)
```

After the cleanup JSON closes and the `.profiles` container is absent, invoke
the finalizer exactly once:

```powershell
& $nodePath $finalizerPath finalize --stage $Stage --root $stageRoot
$finalizerExit = $LASTEXITCODE
if ($finalizerExit -notin @(0, 2)) {
  throw "Diagnostic finalizer returned unexpected exit $finalizerExit"
}
```

The finalizer writes the matrix, seals, verifies the new seal read-only, and
prints one JSON command result. Exit `0` only for RED `CONFIRMED` or GREEN
`GREEN`; otherwise exit `2`.

- [ ] **Step 9: Authenticate the RED launch boundary**

Before Chrome, require:

```text
static RED still exact 0/3
diagnostic contract 8/8
legacy helper 3,081 bytes and locked hash
proposed/legacy stylesheet exact
runtime identity unchanged
v4 seal and full v4 snapshot unchanged
baseline/candidate/source/publish/Git unchanged
red stage absent
zero v5 processes and profiles
ports 4381/4382/4383 free
```

Record this as
`.superpowers/sdd/canonicalization-liveness-v5/task-2-launch-check.json`.

- [ ] **Step 10: Run the real-browser RED matrix exactly once**

Invoke exactly:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'diagnostic\run-canonicalization-diagnostic.ps1') `
  -Stage red
$diagnosticExit = $LASTEXITCODE
if ($diagnosticExit -notin @(0, 2)) {
  throw "RED diagnostic returned unexpected exit $diagnosticExit"
}
```

The controller shell allowance is `360000` ms; this is not a diagnostic
deadline or permission to replace evidence.

Exit `0` must mean exactly:

```text
legacy + JavaScript disabled: TIMEOUT at 5000 ms
legacy + JavaScript enabled: PASS
proposed + JavaScript disabled: PASS
proposed + JavaScript enabled: PASS
passing state digests identical
HTTP(S) requests: 0
cleanup processes/profiles/errors: 0
decision: CONFIRMED
seal verify: ACCEPT
```

Exit `2`, `FALSIFIED`, or `INCONCLUSIVE` blocks Tasks 3-10. Do not edit the
helper, rerun the matrix, or change a deadline.

- [ ] **Step 11: Review sealed RED**

Verify the RED lock without writing, ensure it is the final stage write, compare
all four journals/results, check exact runtime identity and cleanup, and
re-read all protected boundaries.

Write `.superpowers/sdd/canonicalization-liveness-v5/task-2-report.md`.
Independent review must approve causal isolation, exact order/outcomes,
proposed-module equivalence, zero network/residue, and the seal. No production
helper change and no Git commit.

---

### Task 3: Apply the one helper change and prove complete GREEN

**Files:**

- Create: `output/performance/2026-07-18/poster-picture-layer-v5/adapt-v5-harness.mjs`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/browser/verify-runtime-identity.mjs`
- Modify: `output/performance/2026-07-18/poster-picture-layer-v5/browser/capture-stabilizer.mjs`
- Modify: `output/performance/2026-07-18/poster-picture-layer-v5/browser/harness-regression.test.mjs`
- Modify v4-to-v5 namespaces, paths, ports, schemas, and policy locks in the mutable browser allowlist.
- Replace: `output/performance/2026-07-18/poster-picture-layer-v5/browser/v4-hardening-static.test.mjs`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/browser/v5-hardening-static.test.mjs`
- Create and seal: `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/green/*`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/v5-harness-adaptation.json`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-3-report.md`

**Interfaces:**

- Consumes: independently approved sealed RED `CONFIRMED`.
- Produces: exact helper adaptation, focused/no-browser GREEN, sealed real-browser GREEN, and unchanged product/predecessor/Git boundaries.

- [ ] **Step 1: Revalidate the adaptation authority**

Require:

```text
RED decision CONFIRMED
RED seal verify ACCEPT
RED lock final write
static contract still 0/3 for the exact legacy causes
source-v4-browser 18/18 exact
working copied source 18/18 exact
v4 full snapshot exact
runtime identity exact
product and Git boundaries exact
green stage absent
```

- [ ] **Step 2: Write the exact v5 adapter**

`adapt-v5-harness.mjs` authenticates all 18 immutable source locks and the
verified RED seal before writing. It applies only:

```text
poster-picture-layer-v4 -> poster-picture-layer-v5
poster-picture-v4 -> poster-picture-v5
deterministic-picture-poster-v4 -> deterministic-picture-poster-v5
responsive-picture-decode-selection-v4 -> responsive-picture-decode-selection-v5
responsive-picture-rendered-capture-v4 -> responsive-picture-rendered-capture-v5
responsive-picture-runtime-branches-v4 -> responsive-picture-runtime-branches-v5
Exact v4 profile root -> Exact v5 profile root
V4 baseline root -> V5 baseline root
V4 candidate root -> V5 candidate root
the v4 profile root -> the v5 profile root
V4 reconstruction preflight failed -> V5 reconstruction preflight failed
source-v3-browser -> source-v4-browser where a copied-source fixture names it
adapt-v4-harness.mjs -> adapt-v5-harness.mjs where a fixture names it
2026-07-17/poster-picture-layer-v4 -> 2026-07-18/poster-picture-layer-v5
2026-07-17\\poster-picture-layer-v4 -> 2026-07-18\\poster-picture-layer-v5 in JavaScript string literals
2026-07-17\poster-picture-layer-v4 -> 2026-07-18\poster-picture-layer-v5 in the PowerShell root literal
explicit-mode-v4 -> explicit-mode-v5
v4-hardening-static -> v5-hardening-static
v4-harness-adaptation -> v5-harness-adaptation
efficient-technologies-v4-native -> efficient-technologies-v5-native
v4PolicyLock -> v5PolicyLock in the policy correction test
4371 -> 4381
4372 -> 4382
4373 -> 4383
schemaVersion: 4 -> schemaVersion: 5 only in v5-owned journal/result schemas
v4 schema suffixes -> corresponding v5 suffixes
```

Use one 13-pair `replacements` array for the six namespaces, five human-readable
boundary labels, and the generated policy byte/hash pair. This preserves the
existing policy regression parser. Use separate `portReplacements` and
`controlReplacements` arrays for the other entries above. Apply the three
date/path forms before the broader `poster-picture-layer-v4` namespace pair.
Authenticate all source hashes first, compute all counts before writing
anything, and require this exact nonzero occurrence map:

```text
poster-picture-layer-v4:
  evidence-seal.mjs 1; harness-regression.test.mjs 1;
  policy-lock-correction-regression.test.mjs 2;
  prepare-browser-harness.mjs 10; run-browser-gates.ps1 1
poster-picture-v4:
  harness-regression.test.mjs 9;
  policy-lock-correction-regression.test.mjs 1
deterministic-picture-poster-v4:
  picture-poster.playwright.js 1;
  policy-lock-correction-regression.test.mjs 1;
  static-contract.test.mjs 1
responsive-picture-decode-selection-v4:
  picture-poster.playwright.js 1;
  policy-lock-correction-regression.test.mjs 1
responsive-picture-rendered-capture-v4:
  picture-poster.playwright.js 1;
  policy-lock-correction-regression.test.mjs 1
responsive-picture-runtime-branches-v4:
  picture-poster.playwright.js 1;
  policy-lock-correction-regression.test.mjs 1
Exact v4 profile root:
  policy-lock-correction-regression.test.mjs 1; run-browser-gates.ps1 1
V4 baseline root:
  policy-lock-correction-regression.test.mjs 1; run-browser-gates.ps1 1
V4 candidate root:
  policy-lock-correction-regression.test.mjs 1; run-browser-gates.ps1 1
the v4 profile root:
  policy-lock-correction-regression.test.mjs 1; run-browser-gates.ps1 1
V4 reconstruction preflight failed:
  finalize-browser.mjs 1; policy-lock-correction-regression.test.mjs 1
source-v3-browser:
  policy-lock-correction-regression.test.mjs 1; v4-hardening-static.test.mjs 1
adapt-v4-harness.mjs:
  policy-lock-correction-regression.test.mjs 1; run-browser-gates.ps1 1
2026-07-17/poster-picture-layer-v4:
  prepare-browser-harness.mjs 2
2026-07-17\\poster-picture-layer-v4:
  prepare-browser-harness.mjs 6
2026-07-17\poster-picture-layer-v4:
  run-browser-gates.ps1 1
4371:
  finalize-browser.mjs 1; picture-poster.playwright.js 1;
  run-browser-gates.ps1 4; runner-guards.tests.ps1 1;
  static-contract.test.mjs 1
4372:
  finalize-browser.mjs 1; picture-poster.playwright.js 1;
  run-browser-gates.ps1 4; runner-guards.tests.ps1 1;
  static-contract.test.mjs 1
4373:
  finalize-browser.mjs 1; prepare-browser-harness.mjs 2;
  run-browser-gates.ps1 1; runner-guards.tests.ps1 1;
  static-contract.test.mjs 1
schemaVersion: 4:
  harness-regression.test.mjs 2; picture-poster.playwright.js 1
explicit-mode-v4:
  launch-contract-correction-regression.test.mjs 1
v4-hardening-static:
  run-browser-gates.ps1 2
v4-harness-adaptation:
  run-browser-gates.ps1 1
efficient-technologies-v4-native:
  runner-guards.psm1 1; runner-guards.tests.ps1 1
v4PolicyLock:
  policy-lock-correction-regression.test.mjs 6
```

The two generated policy replacements each occur once in
`finalize-browser.mjs` and once in
`policy-lock-correction-regression.test.mjs`. A count mismatch aborts before
the first write. Do not globally replace numeric `4`, dates, Task identifiers,
metric values, or asset revisions.

Apply these exact launch-contract edits outside the literal replacement maps:

```text
launch-contract.test.mjs:
  add v5 once to the allowed scope array and error message;
  no v4 runner invocation omits the named mode -> no v5 runner invocation omits the named mode
launch-contract-correction-regression.test.mjs:
  --scope v4 -> --scope v5 once;
  no v4 runner invocation omits the named mode -> no v5 runner invocation omits the named mode;
  explicit-mode-v4 -> explicit-mode-v5 once
policy-lock-correction-regression.test.mjs:
  do not apply naive overlapping v3/v4 substitutions;
  sentinel every current v4 namespace, boundary label, policy bytes/hash,
  v4PolicyLock identifier, and v4 report property;
  promote each current v3 value to its authenticated v4 value;
  replace each sentinel with the generated v5 value;
  require expectedReplacements is the exact 13-pair v4-to-v5 array;
  require oldPolicySha256 is the v4 policy hash and newPolicySha256 is the
  generated v5 policy hash;
  rewrite its three exact test names and report properties from v3/v4 to v4/v5
runner-guards.tests.ps1:
  v4 fixture ports remain occupied -> v5 fixture ports remain occupied once
```

Compute the generated v5 policy record once. Replace the exact v4 policy byte
count/hash anchors only in the allowlisted policy/finalizer tests, then verify
every consumer contains the new count/hash exactly once. Bind the committed v5
design and plan records the same way; do not accept an untracked plan or a
working-tree hash that differs from `HEAD`.

Then:

1. copy the sealed RED
   `capture-stabilizer-proposed.mjs` byte-for-byte over
   `browser/capture-stabilizer.mjs`;
2. verify source and target hashes are equal;
3. update only the scheduler portion of the harness unit fixture;
4. create `v5-hardening-static.test.mjs` from the authenticated v4 test with
   v5 namespaces and four liveness assertions; and
5. remove only the mutable `browser/v4-hardening-static.test.mjs`.

Create `browser/verify-runtime-identity.mjs` with the Task 2 `walkFiles`,
`snapshot`, `samePath`, and file-hash primitives. It accepts exactly
`--runtime <absolute-runtime-identity.json> --output <fresh-absolute-json>`,
requires its own `process.execPath`/version/hash, the complete Playwright tree,
and Chrome and Edge file metadata to equal the lock, writes booleans
`nodeVerified`, `playwrightVerified`, `chromeVerified`, and `edgeVerified`,
and exits `0` only when all four are true.

The adapted runner invokes that verifier with the recorded Node executable
before each browser child group and passes the recorded Playwright path plus
Chrome/Edge executable map through fresh child-only environment variables.
`picture-poster.playwright.js` retains the `channel` label for evidence but
uses the corresponding recorded `executablePath` for every persistent context.
The two generated matrix runners replace every bare `node` CLI invocation with
the recorded Node path and record every launched browser descendant executable
path; any path other than the recorded Chrome or Edge executable is a runtime
identity failure. The Lighthouse adapter supplies the recorded Chrome path to
every run. No browser executable may be selected from `PATH`.

- [ ] **Step 3: Replace the fake frame scheduler in the unit fixture**

In `createCapturePage`, replace:

```js
const replacements = {
  document: documentFixture,
  getComputedStyle: element => element.computed,
  requestAnimationFrame: callbackFunction => queueMicrotask(() => callbackFunction(0)),
};
```

with:

```js
const replacements = {
  document: documentFixture,
  getComputedStyle: element => element.computed,
};
const schedulerNames = ['requestAnimationFrame', 'setTimeout', 'queueMicrotask'];
const schedulerDescriptors = new Map(
  schedulerNames.map(name => [name, Object.getOwnPropertyDescriptor(globalThis, name)]),
);
for (const name of schedulerNames) {
  Object.defineProperty(globalThis, name, {
    configurable: true,
    get() {
      throw new Error(`capture stabilizer attempted scheduler access: ${name}`);
    },
  });
}
```

In the existing `finally`, restore each scheduler descriptor exactly:

```js
for (const [name, descriptor] of schedulerDescriptors) {
  if (descriptor) Object.defineProperty(globalThis, name, descriptor);
  else delete globalThis[name];
}
```

Keep the existing document/computed-style restoration and all eight test names.

- [ ] **Step 4: Add the four v5 hardening assertions**

Append these named tests to the inherited eleven:

```text
production canonicalizer has no frame timer sleep or promise scheduler
canonical stylesheet mutations schema and layout reads remain exact
capture keeps JavaScript disabled and canonicalization at 15000 ms
sealed RED precedes byte-identical proposed-to-production adaptation
```

The first test rejects `requestAnimationFrame`, `setTimeout`, `queueMicrotask`,
`page.evaluate(async`, and a promise constructor in
`capture-stabilizer.mjs`. The second compares exact stylesheet text, mutation
statements, sorted return keys, and `getComputedStyle`/`getBoundingClientRect`
presence. The third inspects `captureSurface` only. The fourth verifies the RED
seal, timestamps, and helper hashes from `v5-harness-adaptation.json`.

- [ ] **Step 5: Run the adapter once and authenticate its report**

Run:

```powershell
& $nodePath (Join-Path $root 'adapt-v5-harness.mjs')
if ($LASTEXITCODE -ne 0) { throw 'V5 harness adaptation failed' }
```

Require:

```text
source authentication: PASS
RED seal authentication: PASS
production behavior files changed: capture-stabilizer.mjs only
proposed and production SHA-256: identical
unit-test change: scheduler fixture only
mechanical v4-to-v5 files: explicit allowlist only
product files changed: 0
source-v4-browser files changed: 0
adaptation attempt count: 1
```

- [ ] **Step 6: Turn focused and inherited tests GREEN**

Run exact focused suites:

```powershell
& $nodePath (Join-Path $root 'browser\canonicalizer-contract.test.mjs') `
  --output (Join-Path $root 'browser\canonicalizer-contract-green.json')
if ($LASTEXITCODE -ne 0) { throw 'Canonicalizer contract is not GREEN' }

& $nodePath (Join-Path $root 'browser\harness-regression.test.mjs') `
  --output (Join-Path $root 'browser\harness-regression-green.json')
if ($LASTEXITCODE -ne 0) { throw 'Harness regression is not GREEN' }

& $nodePath (Join-Path $root 'browser\v5-hardening-static.test.mjs') `
  --output (Join-Path $root 'browser\v5-hardening-static-green.json')
if ($LASTEXITCODE -ne 0) { throw 'V5 hardening contract is not GREEN' }
```

Expected:

```text
canonicalizer contract 3/3
harness regression 8/8
v5 hardening 15/15
```

Also require phase deadline `6/6`, native runner guards `8/8`, static contract
`4/4`, launch/parser correction GREEN, and policy-lock correction GREEN.

- [ ] **Step 7: Authenticate the GREEN launch boundary**

Require:

```text
RED seal verify ACCEPT
production/proposed bytes identical
focused suites all exact GREEN
runtime identity unchanged
v4 and all predecessors unchanged
baseline/candidate/source/publish/Git unchanged
green stage absent
zero v5 processes and profiles
no listener on 4381/4382/4383
```

- [ ] **Step 8: Run the real-browser GREEN matrix exactly once**

Invoke:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'diagnostic\run-canonicalization-diagnostic.ps1') `
  -Stage green
$greenExit = $LASTEXITCODE
if ($greenExit -notin @(0, 2)) {
  throw "GREEN diagnostic returned unexpected exit $greenExit"
}
```

Expected exit `0` and:

```text
legacy + JavaScript disabled: TIMEOUT at 5000 ms
legacy + JavaScript enabled: PASS
production + JavaScript disabled: PASS
production + JavaScript enabled: PASS
passing state digests identical
production/proposed hashes identical
HTTP(S) requests: 0
cleanup processes/profiles/errors: 0
decision: GREEN
seal verify: ACCEPT
```

Exit `2`, `REJECT`, or `INCONCLUSIVE` blocks Tasks 4-10. Do not adapt again,
rerun, or change a deadline.

- [ ] **Step 9: Verify Task 3 and obtain independent review**

Verify both diagnostic seals without writes; compare runtime identity, state
digests, journal order, cleanup, and proposed/production hashes. Run fresh
protected-boundary and Git checks.

Write `.superpowers/sdd/canonicalization-liveness-v5/task-3-report.md`.
Independent review must approve the single production behavior change, test
fixture correction, exact GREEN matrix, no product change, and zero residue.
No commit.

---

### Task 4: Build the complete qualification harness and approve preflight

**Files:**

- Generate: `output/performance/2026-07-18/poster-picture-layer-v5/browser/accepted-matrix/*`
- Generate: `output/performance/2026-07-18/poster-picture-layer-v5/browser/candidate-successor-matrix/*`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/browser/preflight-authentication.json`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/browser/preflight-harness-authentication.json`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-4-report.md`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-4-review.md`

**Interfaces:**

- Consumes: independently approved Task 3 GREEN and exact v5 working harness.
- Produces: complete no-qualification GREEN, one authoritative read-only preflight, and independent approval to consume the one-shot execute.

- [ ] **Step 1: Reconstruct both 49-file matrices**

Authenticate the copied accepted source at 49 files and digest
`46be90cedf7913ec4ee4c9b26a01b14fb1a0b8b923d86db0bf5270b4c52be4d1`.
Run the adapted `prepare-browser-harness.mjs` so it exclusively creates:

```text
browser/accepted-matrix
browser/candidate-successor-matrix
```

Require:

```text
accepted files: 49
successor files: 49
case count: 13
accepted effective checks: 136
successor effective checks: 136
successor semantic replacements: 16
```

Do not copy v4 matrix result JSON, server logs, PID files, or browser output.

- [ ] **Step 2: Run every focused harness suite from fresh processes**

Run:

```text
canonicalizer contract 3/3
diagnostic contract 8/8
harness regression 8/8
static contract 4/4
phase deadline 6/6
native runner guards 8/8
v5 hardening 15/15
launch-parser correction GREEN
policy-lock correction GREEN
```

Every command writes a new versioned JSON result inside v5. Compare normalized
results with the Task 3 results; test names and counts must be identical.

- [ ] **Step 3: Run structural, performance, SEO/GEO, and copy contracts**

Run the inherited structural contract twice in separate processes. Require
`20/20` both times and byte-identical normalized payloads.

Run against both authoritative source and publish checkout:

```text
performance 29/29
SEO/GEO 8/8
```

Run:

```powershell
$unfinished = @(
  rg -n -i '\b(lorem ipsum|coming soon|replace me|sample text)\b' `
    (Join-Path $project 'site') `
    (Join-Path $repo '404.html') `
    (Join-Path $repo 'about') `
    (Join-Path $repo 'blog') `
    (Join-Path $repo 'index.html')
)
if ($unfinished.Count -ne 0) { $unfinished; throw 'Unfinished deployable copy found' }
```

Expected: no matches.

- [ ] **Step 4: Prove product, motion, and runtime locks**

Require:

```text
baseline 47 and exact digest
candidate 48 and exact digest
candidate scope 1 added / 11 modified / 0 removed
ambient.js byte-identical
main.js byte-identical
world MP4 byte-identical
video attributes byte-identical
stylesheet transition count unchanged
inline transition count unchanged
poster/video rules add no transition
Node/Playwright/Chrome/Edge identities exact
v4 snapshot and evidence seal exact
Git tracked status empty
```

- [ ] **Step 5: Validate the plan/runner launch contract**

Run:

```powershell
& $nodePath (Join-Path $root 'browser\launch-contract.test.mjs') `
  --plan (Join-Path $repo 'docs\superpowers\plans\2026-07-18-canonicalization-liveness-v5-qualification.md') `
  --runner (Join-Path $root 'browser\run-browser-gates.ps1') `
  --scope v5 `
  --output (Join-Path $root 'browser\launch-contract-green.json')
if ($LASTEXITCODE -ne 0) { throw 'V5 launch contract failed' }
```

Require `4/4`, exactly three documented runner modes, no default, one direct
named invocation per mode in this plan, zero missing-mode invocations, and zero
unsupported modes.

- [ ] **Step 6: Run the authoritative named preflight**

Record preflight ledger count `0`, then invoke:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode preflight
if ($LASTEXITCODE -ne 0) { throw 'V5 preflight failed' }
```

Expected final line:

```json
{"commandStatus":"COMPLETED","mode":"preflight","experimentDecision":"PENDING"}
```

The runner must authenticate both diagnostic seals, all focused results,
runtime identity, policy, matrices, product locks, and protected boundaries.
It must reject any terminal browser artifact or profile.

- [ ] **Step 7: Prove preflight did not consume execute**

After preflight require:

```text
preflight ledger count: 1
run-started.json absent
browser-phase-journal.jsonl absent
browser-cleanup.json absent
visual-review.json absent
final-verification.json absent
browser-evidence-lock.json absent
profile root absent
listeners on 4381/4382/4383: 0
owned processes: 0
baseline/candidate/product/predecessor/Git unchanged
```

Preflight outputs and their exact hashes are the only permitted v5 changes.

- [ ] **Step 8: Obtain independent pre-qualification approval**

Write `.superpowers/sdd/canonicalization-liveness-v5/task-4-report.md` with all
commands, exits, counts, hashes, ledgers, and boundaries.

An independent reviewer reads the design, plan, Task 1-4 reports, both
diagnostic seals, adaptation report, focused outputs, matrices, preflight, and
Git/product locks. Approval requires no unresolved Critical, Important, or
Minor finding. A finding that requires a product edit, deadline change,
diagnostic rewrite, helper change, or rerun blocks v5.

No commit.

---

### Task 5: Consume v5 execute once, complete dual visual review, and seal

**Files:**

- Create terminal evidence under `output/performance/2026-07-18/poster-picture-layer-v5/browser/`.
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-5-brief.md`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-5-report.md`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-5-review.md`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/visual-review.md`

**Interfaces:**

- Consumes: independently approved Task 4 and unconsumed v5 execute authority.
- Produces: sealed browser `GREEN` or terminal sealed `REJECT`.

- [ ] **Step 1: Authenticate the extracted Task 5 brief**

Use the Subagent-Driven Development `task-brief` helper against this committed
plan and preserve its exact output at
`.superpowers/sdd/canonicalization-liveness-v5/task-5-brief.md`.

Run the launch contract with the committed plan, v5 runner, scope `v5`, and
versioned brief. Require `4/4`, one plan execute invocation, one byte-equivalent
brief invocation representing the same approved command, and no wrapper,
duplicate, divergent, missing-mode, or unsupported command.

- [ ] **Step 2: Run the final direct read-only state check**

Do not invoke preflight again. Use direct file/hash/process/port/Git reads and
require:

```text
Task 4 approval exact
both diagnostic seals verify ACCEPT without writes
v5 source and working harness exact
v4 and predecessors exact
no terminal v5 artifact
profile root absent
ports 4381/4382/4383 free
owned processes 0
source-preview guard roots empty
runtime identity exact
branch and committed HEAD exact
upstream b416b8113315c95c32d4674aa54769d90c562abd
tracked status empty
.git/index.lock absent
```

Record this outside the browser seal in
`.superpowers/sdd/canonicalization-liveness-v5/task-5-launch-check.json`.

- [ ] **Step 3: Consume execute exactly once**

The implementer invokes exactly:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode execute
$browserExit = $LASTEXITCODE
if ($browserExit -notin @(2, 3)) {
  throw "V5 execute returned unexpected exit $browserExit"
}
```

The controller shell allowance is `840000` ms. It does not extend a runner
deadline, create retry authority, or permit replacement evidence.

Expected success branch: exit `3`, `AWAITING_VISUAL_REVIEW`.
Exit `2` is terminal sealed `REJECT`; preserve it and stop Tasks 6-10. Do not
manually terminate a child, rerun cleanup, invoke another runner mode, or
reinterpret a harness failure as a product failure.

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

The phase journal begins at sequence `1`, is contiguous and strictly monotonic,
contains only `START` and `END` on success, and ends with browser-program
completion. Canonicalization must record `START` then `END` within its unchanged
`15000` ms limit.

- [ ] **Step 5: Perform controller visual review**

Open at minimum:

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

Record booleans for full-surface equivalence, scene crop, navigation, hero
typography, preloader, buttons, overlay, poster/video takeover, play-rejection
fallback, no blank frame, no controls, scrolling, scene changes, zoom-in,
zoom-out, chapter behavior, and animation preservation. Any false value is
`REJECT`.

- [ ] **Step 6: Obtain independent visual review**

Give a fresh reviewer the approved design, visual-review request, automated
summary, and image paths. Do not reveal the controller verdict. The reviewer
records the same booleans, reviewed image hashes, and `PASS` or `REJECT`.

- [ ] **Step 7: Write the combined visual decision**

Only after both reviews finish, write `visual-review.json` containing both
reviewer identities, every boolean, timestamps, exact image hashes, and the
combined decision. This is the only controller write inside the browser root
before finalization.

- [ ] **Step 8: Finalize and seal once**

Invoke:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode finalize-review
$finalizeExit = $LASTEXITCODE
if ($finalizeExit -notin @(0, 2)) {
  throw "V5 finalize-review returned unexpected exit $finalizeExit"
}
```

Require final decision matches both reviews, finalizer log closes before seal,
`browser-evidence-lock.json` is the final browser-root write, and read-only seal
verification changes no byte. Exit `2` or final `REJECT` stops Tasks 6-10.

- [ ] **Step 9: Review the terminal Task 5 path**

Write `.superpowers/sdd/canonicalization-liveness-v5/task-5-report.md`.
Independent review verifies one execute, correct child deadlines, complete
journal, automated gates, two independent visual reviews, one cleanup,
protected boundaries, terminal ordering, seal integrity, and forbidden-action
counts.

If Task 5 rejected, the review assesses only terminal-path compliance and no
later task begins. No commit.

---

### Task 6: Run isolated eight-report Lighthouse and decide `PROMOTE`

**Files:**

- Create: `output/performance/2026-07-18/poster-picture-layer-v5/lighthouse/*`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/finalize-experiment.mjs`
- Create: `output/performance/2026-07-18/poster-picture-layer-v5/final-verification.json`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-6-report.md`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-6-review.md`

**Interfaces:**

- Consumes: independently approved sealed browser `GREEN`.
- Produces: isolated `PROMOTE` or terminal `REJECT`; no project mutation.

- [ ] **Step 1: Authenticate the accepted Lighthouse source**

Copy only:

| File | Bytes | SHA-256 |
|---|---:|---|
| `lighthouse/ephemeral-cert.mjs` | 3,306 | `4344f90be69482f7ec5fca075eb6876678488f8dab809b5da8a3d129c4282228` |
| `lighthouse/run-h2-lighthouse.ps1` | 13,017 | `64fc0528d7057d10d2985a38e168e14458244438b0d9df6a7bdfb03acd856f5b` |
| `lighthouse/transport-server.mjs` | 12,110 | `ef8cdf441fb9a9f17295d6ee75792e82d19b640da674e6edca7be333dab5b642` |

Source:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-15\font-fraunces-family-subset-v11
```

Adapt only experiment paths and v5 labels. Preserve certificate generation,
h2+Brotli transport, request logging, Chrome flags, profile isolation, cleanup,
and Lighthouse `13.4.0`. Require the locked v5 Chrome identity before every
run.

- [ ] **Step 2: Write the immutable eight-run plan**

Use:

```json
{
  "schema": "efficient-technologies/poster-picture-layer-v5-lighthouse-plan-v1",
  "lighthouseVersion": "13.4.0",
  "retryPolicy": "none",
  "discardedTrialCount": 0,
  "definitions": [
    { "sequence": 1, "side": "B", "site": "baseline", "formFactor": "mobile", "label": "01-baseline-mobile", "serverPort": 9721, "debugPort": 9821 },
    { "sequence": 2, "side": "C", "site": "candidate", "formFactor": "mobile", "label": "02-candidate-mobile", "serverPort": 9731, "debugPort": 9831 },
    { "sequence": 3, "side": "B", "site": "baseline", "formFactor": "mobile", "label": "03-baseline-mobile", "serverPort": 9722, "debugPort": 9822 },
    { "sequence": 4, "side": "C", "site": "candidate", "formFactor": "mobile", "label": "04-candidate-mobile", "serverPort": 9732, "debugPort": 9832 },
    { "sequence": 5, "side": "B", "site": "baseline", "formFactor": "mobile", "label": "05-baseline-mobile", "serverPort": 9723, "debugPort": 9823 },
    { "sequence": 6, "side": "C", "site": "candidate", "formFactor": "mobile", "label": "06-candidate-mobile", "serverPort": 9733, "debugPort": 9833 },
    { "sequence": 7, "side": "B", "site": "baseline", "formFactor": "desktop", "label": "07-baseline-desktop", "serverPort": 9741, "debugPort": 9841 },
    { "sequence": 8, "side": "C", "site": "candidate", "formFactor": "desktop", "label": "08-candidate-desktop", "serverPort": 9751, "debugPort": 9842 }
  ]
}
```

- [ ] **Step 3: Authenticate all pre-run boundaries**

Require browser seal `GREEN` and read-only `ACCEPT`, two visual passes, both
diagnostic seals `ACCEPT`, runtime identity exact, all sixteen listed
server/debug ports free, profiles absent, product/predecessor/Git boundaries
unchanged, and no existing Lighthouse report.

- [ ] **Step 4: Execute the fixed matrix exactly once**

Run definitions in sequence order. Record each command before launch. Do not
rerun a launch failure, timeout, malformed/missing report, request mismatch,
threshold failure, or cleanup failure.

Every mobile candidate requires:

```text
performance score >= 90
LCP <= 2500 ms
CLS <= 0.02
AVIF requests 1
WebP requests 0
AVIF transfer bytes 38457
failed requests 0
cleanup PASS
```

Every desktop candidate requires:

```text
performance score >= 90
LCP <= 2500 ms
CLS <= 0.02
WebP requests 1
AVIF requests 0
transfer increase <= 2048 bytes
failed requests 0
cleanup PASS
```

Mobile and desktop median LCP must each be `<= 2500` ms.

- [ ] **Step 5: Write the isolated decision**

`finalize-experiment.mjs` writes `final-verification.json` as `PROMOTE` only
when:

```text
browser decision GREEN
both visual reviews PASS
browser seal verify ACCEPT
RED diagnostic CONFIRMED and sealed
GREEN diagnostic GREEN and sealed
all eight Lighthouse reports present and passing
both medians passing
all cleanup records passing
runtime identity exact
protected boundaries exact
```

Otherwise write terminal `REJECT`. The finalizer does not copy a product file.

- [ ] **Step 6: Review Task 6**

Write the Task 6 report. Independent review verifies source provenance, fixed
order, eight non-retried reports, request selection, thresholds, medians,
cleanup, runtime identity, decision consistency, and zero project mutation.
Only approved `PROMOTE` unlocks Task 7. No commit.

---

### Task 7: Pin the tracked deployment contract and prove RED

**Files:**

- Create: `output/performance/2026-07-18/poster-picture-layer-release-v5/pin-tracked-contract.mjs`
- Modify: `.github/scripts/performance-contract.test.mjs`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-7-report.md`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-7-review.md`

**Interfaces:**

- Consumes: independently approved isolated `PROMOTE`.
- Produces: fresh release root and one tracked test-only commit with exactly four missing-implementation failures.

- [ ] **Step 1: Create the release root only after `PROMOTE`**

Require:

```text
release root absent
final-verification decision PROMOTE
browser seal verify ACCEPT
both diagnostic seals verify ACCEPT
all eight Lighthouse reports exact
runtime identity exact
predecessors and product boundaries exact
Git clean at committed plan HEAD
upstream b416b8113315c95c32d4674aa54769d90c562abd
```

Create the release root exclusively. Write `release-authority.json` containing
the exact spec, plan, Task 1-6 report/review, browser seal, diagnostic seal,
Lighthouse, Git, and product hashes. No deploy file changes in this step.

- [ ] **Step 2: Pin exact release constants**

In `.github/scripts/performance-contract.test.mjs`, use:

```js
const release = '20260714';
const posterRelease = '20260716';
const frauncesRelease = '20260715';
const tokensRevision = '3';
const stylesRevision = '4';
const mobilePoster = `assets/city-poster-mobile-v${posterRelease}.avif`;
```

Add exactly one asset definition:

```js
{ logicalId: 'poster-mobile', output: mobilePoster, width: 385, height: 768 },
```

- [ ] **Step 3: Pin the qualified CSS and asset facts**

`pin-tracked-contract.mjs` computes the normalized-LF SHA-256 of v5 candidate
`css/styles.css`, requires the old CSS hash anchor exactly once, and replaces
only that anchor.

Add exact assertions:

```js
assert.equal(mobileEntry.optimizedBytes, 38457);
assert.equal(
  mobileEntry.optimizedSha256,
  '9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49',
);
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

Also assert exact `<picture>` markup, one `<source>`, decorative fallback image,
absent video `poster`, picture CSS, transparent video CSS, no poster/video
transition, style revision `4`, token revision `3`, and immutable AVIF header.

- [ ] **Step 4: Run the helper and inspect the single tracked diff**

Run:

```powershell
& $nodePath (Join-Path $release 'pin-tracked-contract.mjs')
if ($LASTEXITCODE -ne 0) { throw 'Tracked contract pinning failed' }

$changed = @(git -C $repo status --short)
if (($changed.Count -ne 1) -or
    ($changed[0] -notmatch '\.github/scripts/performance-contract\.test\.mjs$')) {
  $changed
  throw 'Tracked RED scope is not exactly one test file'
}
```

- [ ] **Step 5: Prove exact RED in source and publish**

Run the performance contract against authoritative source and publish. Allowed
failures are exactly:

```text
versioned media manifest records passing, byte-accurate assets
poster-first media declarations cannot fetch before capability activation
homepage embeds exact revisioned CSS while other routes retain linked styles
immutable cache policy applies only to release-versioned assets
```

Any other test name, count, syntax error, missing fixture, or setup failure
blocks Task 7.

- [ ] **Step 6: Commit and review the RED contract only**

Run:

```powershell
git -C $repo add -- .github/scripts/performance-contract.test.mjs
git -C $repo diff --cached --check
$staged = @(git -C $repo diff --cached --name-only)
if (($staged.Count -ne 1) -or
    ($staged[0] -ne '.github/scripts/performance-contract.test.mjs')) {
  throw 'Unexpected staged RED scope'
}
git -C $repo commit -m 'test: pin responsive picture poster delivery'
if ($LASTEXITCODE -ne 0) { throw 'RED contract commit failed' }
```

Do not push. Independent review verifies isolated `PROMOTE`, exact assertions,
exact four-failure RED, one-file commit, and no product mutation.

---

### Task 8: Promote the exact candidate locally and commit GREEN

**Files:**

- Create: `output/performance/2026-07-18/poster-picture-layer-release-v5/promote-candidate.mjs`
- Create: `output/performance/2026-07-18/poster-picture-layer-release-v5/materialize-manifest.mjs`
- Modify the twelve approved deploy artifacts in authoritative source and publish checkout.
- Modify in publish only: `.github/performance/media-manifest.json`
- Delete all twelve tracked `docs/superpowers` files after ignored control copies exist.
- Create: `output/playwright/poster-picture-layer-promoted-v5/*`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-8-report.md`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-8-review.md`

**Interfaces:**

- Consumes: reviewed Task 7 RED commit and isolated `PROMOTE`.
- Produces: source/publish parity, complete local GREEN, promoted browser proof, reviewed implementation commit, and no push.

- [ ] **Step 1: Revalidate authority immediately before mutation**

Require release root contains only reviewed Task 7 material, v5 `PROMOTE`,
browser and diagnostic seals verify read-only, Lighthouse exact, Git contains
only the reviewed RED commit after the plan commit, upstream remains `b416b811`,
active GitHub viewer is `tarik-ux`, and repository permission `push:true`.

This GitHub read is an authority check only; do not mutate the PR or remote.

- [ ] **Step 2: Copy only the twelve approved deploy paths**

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

`promote-candidate.mjs` rejects links, reparse points, path escapes, candidate
drift, extra candidate paths, pre-copy deploy drift, non-`PROMOTE` evidence,
runtime drift, or any source/publish path outside this list. Copy candidate
bytes to authoritative source and publish and verify `12/12` parity.

- [ ] **Step 3: Materialize the exact manifest entry**

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

Set release `2026-07-16`, replace any prior `poster-mobile` entry, preserve all
other entries byte-for-byte after normalized serialization, and verify every
field.

- [ ] **Step 4: Turn source and publish contracts GREEN**

Run:

```text
source performance 29/29
publish performance 29/29
source SEO/GEO 8/8
publish SEO/GEO 8/8
```

Repeat the unfinished-copy scan from Task 4. Require no match, exact
source/publish parity for all twelve deploy paths, exact manifest record, and
no unrelated product path.

- [ ] **Step 5: Qualify the promoted publish tree**

Use fresh root:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\playwright\poster-picture-layer-promoted-v5
```

Require:

```text
selection 5/5
runtime 4/4
successor behavior 13/13 and 136/136
mobile/desktop request graphs 2/2
poster request exclusivity exact
deterministic visual capture
source/publish parity
world video bytes and behavior unchanged
scroll/scene/zoom/chapter/overlay/animation behavior unchanged
cleanup PASS
```

Do not write into either diagnostic seal, browser seal, or local Lighthouse
evidence.

- [ ] **Step 6: Obtain implementation review**

Review the v5 design/plan, diagnostic and browser seals, local Lighthouse
`PROMOTE`, RED contract commit, candidate promotion diff, manifest, parity,
contracts, and promoted browser evidence.

Resolve every Critical and Important finding in one bounded fix wave only when
it affects release-control code, manifest materialization, tracked tests, or
document-removal mechanics without changing the twelve qualified deploy bytes.
Rerun only affected post-promotion checks.

A finding requiring a diagnostic, qualification, Lighthouse, candidate,
deadline, or qualified deploy-byte change is terminal for v5.

- [ ] **Step 7: Preserve ignored release-control copies**

Create `.superpowers/sdd/canonicalization-liveness-v5-release`, prove
`.superpowers` is ignored, and copy:

```text
design.md
plan.md
task-9-brief.md
task-10-brief.md
```

Write `control-hashes.json` with relative path, bytes, and SHA-256 for all four.
Require `.superpowers` absent from Git status.

- [ ] **Step 8: Remove the twelve internal documents**

Run `git ls-files 'docs/superpowers/**'` and require exactly:

```text
docs/superpowers/plans/2026-07-16-deterministic-picture-poster-qualification.md
docs/superpowers/plans/2026-07-16-explicit-mode-v3-qualification.md
docs/superpowers/plans/2026-07-16-portrait-mobile-poster-delivery.md
docs/superpowers/plans/2026-07-16-responsive-picture-poster-layer.md
docs/superpowers/plans/2026-07-17-time-bounded-v4-qualification.md
docs/superpowers/plans/2026-07-18-canonicalization-liveness-v5-qualification.md
docs/superpowers/specs/2026-07-16-deterministic-picture-poster-qualification-design.md
docs/superpowers/specs/2026-07-16-explicit-mode-v3-qualification-design.md
docs/superpowers/specs/2026-07-16-mobile-poster-crop-design.md
docs/superpowers/specs/2026-07-16-responsive-picture-poster-layer-design.md
docs/superpowers/specs/2026-07-17-time-bounded-v4-qualification-design.md
docs/superpowers/specs/2026-07-18-canonicalization-liveness-v5-qualification-design.md
```

Remove exactly those paths with `git rm`. Require zero tracked
`docs/superpowers` paths afterward.

- [ ] **Step 9: Commit the local implementation**

Stage only:

```text
.github/performance/media-manifest.json
the twelve deploy artifacts
the twelve documentation deletions
```

The performance-contract test is already committed in Task 7. Run cached diff
check and verify staged scope. Commit:

```powershell
git -C $repo commit -m 'perf: publish responsive picture poster layer'
if ($LASTEXITCODE -ne 0) { throw 'Implementation commit failed' }
```

Do not push.

- [ ] **Step 10: Obtain final whole-branch review**

Generate the review package from
`b416b8113315c95c32d4674aa54769d90c562abd` to implementation HEAD. Require
the final remote diff to contain only:

```text
.github/scripts/performance-contract.test.mjs
.github/performance/media-manifest.json
the twelve approved deploy artifacts
```

The documentation additions and deletions must net to zero against remote.
Resolve Critical and Important findings under the same post-consumption
boundary, rerun affected local gates, commit any permitted correction,
regenerate the package, and obtain clean re-review before Task 9.

---

### Task 9: Push once and qualify the immutable Cloudflare preview

**Files:**

- Create: `output/performance/2026-07-18/poster-picture-layer-release-v5/clean-checkout/*`
- Create: `output/playwright/poster-picture-layer-preview-pr2-v5/*`
- Create: `output/performance/2026-07-18/poster-picture-layer-preview-pr2-v5/*`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-9-report.md`

**Interfaces:**

- Consumes: final reviewed local implementation HEAD.
- Produces: one push, exact-SHA hosted checks, immutable preview, `71/71` delivery, browser proof, and six preview Lighthouse reports.

- [ ] **Step 1: Verify a fresh clean archive**

Archive HEAD outside sealed evidence. Require:

```text
performance 29/29
SEO/GEO 8/8
tracked docs/superpowers paths 0
asset/CSS/index/manifest/header hashes exact
promoted browser suite complete
final branch review approved
Git status clean
```

- [ ] **Step 2: Recheck the different GitHub account and remote base**

Run:

```powershell
$localHead = (git -C $repo rev-parse HEAD).Trim()
$remoteBefore = (git -C $repo rev-parse origin/agent/performance-without-motion-loss).Trim()
$viewer = (gh api user --jq '.login').Trim()
$repoState = gh api repos/tarik-ux/efficient-technologies-site | ConvertFrom-Json
$pr = gh pr view 2 --repo tarik-ux/efficient-technologies-site `
  --json state,isDraft,headRefOid,headRefName | ConvertFrom-Json

if ($viewer -ne 'tarik-ux') { throw "Active GitHub viewer is $viewer" }
if (-not $repoState.permissions.push) { throw 'Active account lacks push authority' }
if ($remoteBefore -ne 'b416b8113315c95c32d4674aa54769d90c562abd') {
  throw "Remote branch moved to $remoteBefore"
}
if ($pr.state -ne 'OPEN' -or -not $pr.isDraft) { throw 'PR #2 is not open and draft' }
if ($pr.headRefName -ne 'agent/performance-without-motion-loss') {
  throw 'PR #2 head branch changed'
}
if (@(git -C $repo status --porcelain=v1).Count -ne 0) { throw 'Worktree is dirty' }
```

- [ ] **Step 3: Push exactly once**

Run:

```powershell
git -C $repo push origin agent/performance-without-motion-loss
if ($LASTEXITCODE -ne 0) { throw 'Push failed; preserve exact error and stop' }
$remoteAfter = (
  git -C $repo ls-remote origin refs/heads/agent/performance-without-motion-loss
).Split()[0]
if ($remoteAfter -ne $localHead) {
  throw 'Remote head does not equal qualified local head'
}
```

No force-push, amend, retry, or second push.

- [ ] **Step 4: Require hosted checks on the exact SHA**

Run:

```powershell
gh pr checks 2 --repo tarik-ux/efficient-technologies-site --watch --interval 10
if ($LASTEXITCODE -ne 0) { throw 'A hosted PR check failed' }
```

Require Performance contract, SEO/GEO validation, and Cloudflare Pages success
for `$localHead`, with no check for a different SHA substituted.

- [ ] **Step 5: Derive and lock the immutable preview**

Extract the single successful Cloudflare deployment UUID for `$localHead` and
form:

```powershell
$preview = "https://$($deploymentId.Split('-')[0]).efficient-technologies-site.pages.dev"
```

Require root status `200`. Record preview URL, deployment ID, commit SHA,
headers, and check metadata.

- [ ] **Step 6: Run the `71/71` preview delivery contract**

Preserve the accepted `69/69` v4 checks and add real 404 checks for:

```text
/docs/superpowers/specs/2026-07-18-canonicalization-liveness-v5-qualification-design.md
/docs/superpowers/plans/2026-07-18-canonicalization-liveness-v5-qualification.md
```

All twelve documentation paths must return real `404`, not a branded
soft-404 `200`. Also require AVIF/WebP byte/hash/MIME/cache/ETag facts, exact
picture markup, absent video poster, exact CSS, routes, redirects, robots,
sitemap, Open Graph, Twitter, JSON-LD, `llms.txt`, and `llms-full.txt`.

Expected: `71/71`.

- [ ] **Step 7: Run preview browser gates once**

Require:

```text
selection 5/5
runtime 4/4
behavior 13/13 and 136/136
mobile/desktop request graphs 2/2
deterministic visual capture
poster request exclusivity exact
UI and copy exact
video/scroll/scene/zoom/chapter/overlay/animation behavior unchanged
cleanup PASS
```

- [ ] **Step 8: Run six preview Lighthouse reports once**

Run three mobile and three desktop reports with Lighthouse `13.4.0`, unique
profiles and ports, fixed order, and no retry.

Mobile requires every score `>= 90`, LCP `<= 2500` ms, CLS `<= 0.02`, one
AVIF, zero WebP, and median LCP `<= 2500` ms.

Desktop requires every score `>= 90`, LCP `<= 2500` ms, CLS `<= 0.02`,
transfer `<= 4.5 MiB`, one WebP, zero AVIF, and median LCP `<= 2500` ms.

- [ ] **Step 9: Mark PR ready only after every preview gate**

Run:

```powershell
gh pr ready 2 --repo tarik-ux/efficient-technologies-site
if ($LASTEXITCODE -ne 0) { throw 'PR ready mutation failed' }
```

Write the Task 9 report with push count, exact SHA, hosted checks, preview,
delivery, browser, Lighthouse, and cleanup evidence. Any failure before this
step leaves PR #2 draft and production unchanged.

---

### Task 10: Merge the qualified SHA and verify production

**Files:**

- Create: `output/playwright/poster-picture-layer-production-v5/*`
- Create: `output/performance/2026-07-18/poster-picture-layer-production-v5/*`
- Create: `.superpowers/sdd/canonicalization-liveness-v5/task-10-report.md`
- No direct production file edits.

**Interfaces:**

- Consumes: ready PR #2 at the exact preview-qualified SHA.
- Produces: squash merge and verified production release, or an exact stopped regression report.

- [ ] **Step 1: Recheck SHA, checks, and merge authority**

Require PR head equals the preview-qualified local HEAD, PR is not draft, merge
state is `CLEAN` or `HAS_HOOKS`, every hosted check succeeds, active viewer is
`tarik-ux`, repository `push:true`, and AVIF/WebP/CSS/index/headers/manifest
match preview evidence.

- [ ] **Step 2: Squash-merge PR #2**

Run:

```powershell
gh pr merge 2 --repo tarik-ux/efficient-technologies-site --squash --delete-branch
if ($LASTEXITCODE -ne 0) { throw 'Merge failed; preserve exact error and stop' }
$merged = gh pr view 2 --repo tarik-ux/efficient-technologies-site `
  --json state,mergeCommit | ConvertFrom-Json
if ($merged.state -ne 'MERGED' -or -not $merged.mergeCommit.oid) {
  throw 'PR did not reach MERGED state'
}
$mergeSha = $merged.mergeCommit.oid
```

- [ ] **Step 3: Wait for exact merge-SHA deployment**

Poll for one successful Cloudflare Pages deployment of `$mergeSha` for at most
20 minutes. Report current status at least once per minute. A terminal failure
stops; do not substitute another deployment or trigger a retry.

- [ ] **Step 4: Run the `71/71` production delivery contract**

Against `https://efficientautomate.com`, require:

```text
delivery 71/71
no x-robots-tag noindex
production canonicals
all twelve internal documentation paths real 404
/codex-release-verification-20260715 real 404
preview-identical asset bytes/hashes/MIME/cache/ETags
robots/sitemap/Open Graph/Twitter/JSON-LD passing
llms.txt and llms-full.txt passing
```

- [ ] **Step 5: Run production browser qualification once**

Require selection `5/5`, runtime `4/4`, behavior `13/13` and `136/136`,
request exclusivity, deterministic surface, unchanged UI/video/scroll/scene/
zoom/chapter/overlay/animation behavior, and cleanup pass.

- [ ] **Step 6: Run three production mobile Lighthouse reports once**

Use:

```text
poster-picture-production-v5-mobile-1
poster-picture-production-v5-mobile-2
poster-picture-production-v5-mobile-3
```

with debug ports `9861`, `9862`, `9863`. Every run requires score `>= 90`,
LCP `<= 2500` ms, CLS `<= 0.02`, one AVIF, zero WebP, zero failed requests,
and cleanup pass. Median LCP must be `<= 2500` ms.

- [ ] **Step 7: Record exact final state**

On complete success write:

```json
{
  "decision": "RELEASED",
  "deliveryChecks": "71/71",
  "behaviorChecks": "136/136",
  "mobileLighthouseRuns": 3
}
```

The Task 10 report separately records local qualification, local `PROMOTE`,
implementation commits, push SHA, PR state, preview deployment, merge SHA,
production deployment, and production readback.

On any production failure, write `PRODUCTION_REGRESSION`, preserve the exact
failure, merge SHA, and deployed state, stop external mutation, and ask the
user before creating or merging a revert PR. Never claim release success from
merge or deployment status alone.

---

## Plan Self-Review Checklist

- [x] The approved design maps to ten sequential reviewer-gated tasks.
- [x] The work is one causal qualification/release pipeline, not independent products requiring separate specs.
- [x] V1, v2, v3, and terminal v4 remain immutable.
- [x] No v4 command is invoked.
- [x] V5 root and release root are fresh and exclusive.
- [x] V5 uses fresh qualification ports `4381/4382/4383`.
- [x] Runtime identity records Node, Playwright, Chrome, and Edge before any diagnostic.
- [x] Product, UI, video, scroll, scene, zoom, chapter, overlay, and animation bytes remain unchanged before `PROMOTE`.
- [x] Static RED precedes the proposed helper and production change.
- [x] Diagnostic contract RED/GREEN precedes real-browser RED.
- [x] Real-browser RED uses exact `4/4` fixed outcomes and seals before adaptation.
- [x] Only RED `CONFIRMED` unlocks the helper change.
- [x] The production helper is copied byte-for-byte from the sealed proposed module.
- [x] The fake `queueMicrotask` frame scheduler is removed from the unit fixture.
- [x] The production context remains JavaScript-disabled and canonicalization remains `15000` ms.
- [x] Real-browser GREEN uses exact `4/4` fixed outcomes and no retry.
- [x] Focused counts are exact: `3/3`, `8/8`, `8/8`, `4/4`, `6/6`, `8/8`, `15/15`, and launch `4/4`.
- [x] Structural `20/20` runs twice; performance `29/29` and SEO/GEO `8/8` run in both trees.
- [x] Qualification execute is exactly once and parent-owned timeout handling forbids manual replacement.
- [x] Browser cleanup performs final process, port, and profile recounts.
- [x] Browser evidence seal is the final browser-root write.
- [x] Browser failure stops visual finalization and Lighthouse.
- [x] Lighthouse failure stops promotion.
- [x] Isolated `PROMOTE` precedes every product mutation.
- [x] The final whole-branch review precedes the single push.
- [x] The different GitHub account is freshly verified as `tarik-ux` before push and merge.
- [x] Preview failure leaves PR draft and production unchanged.
- [x] Preview and production account for all twelve internal documents at `71/71`.
- [x] Production regression stops and requires new rollback authority.
- [x] No incomplete instruction, unnamed runner mode, retry, hidden external action, or unspecified decision remains.
