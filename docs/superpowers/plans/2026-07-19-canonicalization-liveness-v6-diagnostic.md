# Canonicalization Liveness v6 Diagnostic Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use
> superpowers:executing-plans to implement this plan task-by-task. Steps use
> checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reconstruct a fresh v6 experiment with unchanged product bytes,
prove the real Windows controller-to-cell boundary without launching Chrome,
consume one authoritative RED matrix, and—only if RED is `CONFIRMED`—produce
sealed diagnostic GREEN.

**Architecture:** A pure reconstruction core authenticates the terminal v5
predecessor and copies only fixed source allowlists into a new root. The real
diagnostic controller gains a browser-free `preflight` stage that launches the
real cell through the owned-process helper and exits before
`chromium.launchPersistentContext`. The authoritative browser stages remain
the ordinary `red` and `green` directories.

**Tech Stack:** Node.js `v24.11.1`, Windows PowerShell 5.1, Playwright,
headless Chrome, static JSON evidence, SHA-256 manifests, Git.

## Global Constraints

- Approved design:
  `docs/superpowers/specs/2026-07-19-canonicalization-liveness-v6-qualification-design.md`
- Approved design commit:
  `f3d0ad8cc23cc436a868dd68cc7b05eca1b448ef`
- Approved design bytes:
  `17123`
- Approved design SHA-256:
  `5fc8118973e8a27cc448caff8aa4144702bc75061697381ccb278303719cbed9`
- Terminal v5 root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-18\poster-picture-layer-v5`
- Fresh v6 root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6`
- V6 release root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-release-v6`
- Baseline:
  `47 / cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850`
- Candidate:
  `48 / bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653`
- Immutable source-v4 browser:
  `18 / 089513385f53893c4cdbb1bc2b8402fb3c7f972886da05af9e94fda3a37c0782`
- Accepted harness:
  `49 / 46be90cedf7913ec4ee4c9b26a01b14fb1a0b8b923d86db0bf5270b4c52be4d1`
- Complete repaired browser predecessor:
  `21 / e9bf0d7afa0612969d7a70af7a22883c827128bdb2db636e633d2c2dcfa0f772`
- Copied browser source subset:
  `20 / f7eb49d601f34fb29f097a902b2f8f29a85008ea9e78416c43320443428a4082`
- Copied diagnostic source allowlist:
  `7 / e6afa84dfee3b37fd8ba9560aaf7071ee9073870fe31c2b0653eab5e5535edf3`
- Original v5 RED:
  `12 / d23c0800ddeb53cdae0ea31728b9d63149b1c41d5d17e9198cb73c8e32567f3d`
- Repaired v5 RED:
  `12 / a734c3b86e06144cea6b4c6e509cb954108c3f38b60876237f942d05b67d9ba4`
- Branch:
  `agent/performance-without-motion-loss`
- Upstream:
  `b416b8113315c95c32d4674aa54769d90c562abd`
- Remote:
  `https://github.com/tarik-ux/efficient-technologies-site.git`
- No product, UI, video, scroll, scene, zoom, motion, or animation byte may
  change.
- No v5 evidence file may change.
- Preflight may run once and launches no Chrome.
- RED may run once. There is no RED retry or repair stage.
- GREEN is authorized only by sealed, verified `CONFIRMED` RED.
- A failed gate stops the plan at the last sealed safe boundary.

---

## File map

### Tracked control documents

- Create:
  `docs/superpowers/plans/2026-07-19-canonicalization-liveness-v6-diagnostic.md`
- Create during execution:
  `.superpowers/sdd/canonicalization-liveness-v6/progress.md`
- Create during execution:
  `.superpowers/sdd/canonicalization-liveness-v6/diagnostic-report.md`
- Create during review:
  `.superpowers/sdd/canonicalization-liveness-v6/diagnostic-review.md`

### Reconstruction implementation

- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v6-core.test.mjs`
- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v6-core.mjs`
- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v6-contract.test.mjs`
- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v6.mjs`

### Fresh v6 diagnostic implementation

- Modify:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6\diagnostic\canonicalization-cell.mjs`
- Modify:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6\diagnostic\diagnostic-contract.test.mjs`
- Modify:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6\diagnostic\diagnostic-evidence-seal.mjs`
- Modify:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6\diagnostic\finalize-canonicalization-diagnostic.mjs`
- Modify:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6\diagnostic\run-canonicalization-diagnostic.ps1`
- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6\diagnostic\seal-adaptation.json`

### Evidence

- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6\diagnostic\preflight\`
- Create only after preflight accepts:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6\diagnostic\red\`
- Create only after sealed RED confirms:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6\diagnostic\green\`
- Create:
  `.superpowers\sdd\canonicalization-liveness-v6\prepare-v6-red.json`
- Create:
  `.superpowers\sdd\canonicalization-liveness-v6\prepare-v6-green.json`
- Create:
  `.superpowers\sdd\canonicalization-liveness-v6\prepare-v6-controller-red.json`
- Create:
  `.superpowers\sdd\canonicalization-liveness-v6\prepare-v6-controller-green.json`
- Create:
  `.superpowers\sdd\canonicalization-liveness-v6\runner-guards-green.json`
- Create:
  `.superpowers\sdd\canonicalization-liveness-v6\diagnostic-contract-red.json`
- Create:
  `.superpowers\sdd\canonicalization-liveness-v6\diagnostic-contract-green.json`

---

### Task 1: Define the reconstruction core under TDD

**Files:**

- Create:
  `output/performance/2026-07-19/prepare-v6-core.test.mjs`
- Create after RED:
  `output/performance/2026-07-19/prepare-v6-core.mjs`
- Test output:
  `.superpowers/sdd/canonicalization-liveness-v6/prepare-v6-red.json`
- Test output:
  `.superpowers/sdd/canonicalization-liveness-v6/prepare-v6-green.json`

**Interfaces:**

- Produces:
  `digestRows(rows) -> string`
- Produces:
  `snapshot(treeRoot) -> {path,fileCount,digestSha256,files}`
- Produces:
  `verifySealedStage(stageRoot, expected) -> verification`
- Produces:
  `selectExactRows(snapshot, allowedPaths) -> snapshot`
- Produces:
  `assertFreshRoots({root,release}) -> void`
- Produces:
  `assertGitBoundary(actual, expected) -> void`
- Produces:
  `copySnapshotExclusive(sourceRoot,targetRoot,expectedSnapshot) -> snapshot`

- [ ] **Step 1: Write the failing core contract**

Create a Node test with eight ordered cases:

```js
const tests = [
  'digestRows is path-order deterministic',
  'snapshot rejects symbolic links',
  'sealed stage accepts its exact manifest and digest',
  'sealed stage rejects one mutated byte',
  'source selection rejects a missing or unexpected path',
  'fresh-root guard rejects either existing target',
  'git boundary requires branch head upstream remote clean state and no lock',
  'exclusive copy reproduces the exact source manifest',
];
```

The loader must convert `ERR_MODULE_NOT_FOUND` for
`./prepare-v6-core.mjs` into an ordinary failed assertion, write the eight-case
JSON report with `flag: 'wx'`, and exit `1`.

- [ ] **Step 2: Run the contract and capture intended RED**

Run:

```powershell
$repo = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site'
$output = Join-Path $repo '.superpowers\sdd\canonicalization-liveness-v6\prepare-v6-red.json'
node 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v6-core.test.mjs' --output $output
```

Expected: exit `1`, `total: 8`, `passed: 0`, `failed: 8`, with each case
reporting that `prepare-v6-core.mjs` is absent. A syntax, fixture, permission,
or output-path error is not valid RED.

- [ ] **Step 3: Implement the minimum pure core**

Implement the seven exported functions with these rules:

```js
const canonicalRows = rows => rows
  .map(({ relativePath, bytes, sha256 }) => ({ relativePath, bytes, sha256 }))
  .sort((left, right) => left.relativePath.localeCompare(right.relativePath));

export const digestRows = rows =>
  sha256(Buffer.from(JSON.stringify(canonicalRows(rows)), 'utf8'));
```

All walkers use `lstatSync`, reject links and unsupported entries, normalize
relative paths to `/`, and include bytes, SHA-256, and `mtimeMs`. Copy targets
use `COPYFILE_EXCL`, are contained beneath the target root, and are re-read
after copy.

`verifySealedStage` excludes only
`diagnostic-evidence-lock.json`, verifies every lock row and the aggregate
digest, and requires the caller’s exact file count, digest, and terminal
decision.

- [ ] **Step 4: Run focused GREEN twice**

Run the same test to two fresh output paths:

```powershell
node 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v6-core.test.mjs' --output '.superpowers\sdd\canonicalization-liveness-v6\prepare-v6-green.json'
node 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v6-core.test.mjs' --output '.superpowers\sdd\canonicalization-liveness-v6\prepare-v6-green-rerun.json'
```

Expected: both exit `0`, `8/8`, with identical normalized test results.

- [ ] **Step 5: Verify syntax and protected boundaries**

Run:

```powershell
node --check 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v6-core.mjs'
git status --short
git diff --check
```

Expected: syntax exit `0`, only intentional control/evidence files present,
and no product or v5 path changed.

---

### Task 2: Implement and consume the fresh reconstruction

**Files:**

- Create:
  `output/performance/2026-07-19/prepare-v6-contract.test.mjs`
- Create:
  `output/performance/2026-07-19/prepare-v6.mjs`
- Create on the one successful execution:
  `output/performance/2026-07-19/poster-picture-layer-v6/`

**Interfaces:**

- Consumes the Task 1 core.
- Accepts check-only:
  `node prepare-v6.mjs --plan "C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site\docs\superpowers\plans\2026-07-19-canonicalization-liveness-v6-diagnostic.md" --check-only`
- Accepts reconstruction:
  `node prepare-v6.mjs --plan "C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site\docs\superpowers\plans\2026-07-19-canonicalization-liveness-v6-diagnostic.md"`
- Produces one stdout object:

```json
{"commandStatus":"COMPLETED","mode":"reconstruct","decision":"ACCEPT","schemaVersion":6}
```

- [ ] **Step 1: Write and observe the failing preparer contract**

Create a six-case Node contract whose ordered cases are:

```text
exact check-only command accepts the committed plan
check-only reports zero write paths
check-only authenticates both terminal v5 seals
check-only authenticates all fixed source manifests
unexpected CLI arguments are rejected
an unexpected plan path is rejected
```

The test launches `prepare-v6.mjs` only with `--check-only`; it never invokes
reconstruction mode. Before `prepare-v6.mjs` exists, run it once to
`.superpowers/sdd/canonicalization-liveness-v6/prepare-v6-controller-red.json`.
Expected: exit `1`, `0/6`, with the missing preparer as an ordinary assertion
failure rather than an uncaught setup error.

- [ ] **Step 2: Implement fail-closed predecessor authentication**

`prepare-v6.mjs` must:

1. authenticate the committed design and this committed plan by path, bytes,
   SHA-256, and last commit;
2. authenticate the current Git branch, HEAD, upstream, remote, clean tracked
   status, and absent `.git/index.lock`;
3. verify both sealed v5 stages and their exact `INCONCLUSIVE` decisions;
4. authenticate the fixed baseline, candidate, immutable source, accepted
   harness, complete 21-file browser predecessor, selected 20-file browser
   source, and seven-file diagnostic source;
5. reject reparse points and either existing v6 target; and
6. snapshot every protected predecessor before writing.

The diagnostic source allowlist is exactly:

```text
canonicalization-cell.mjs
canonicalization-fixture.mjs
diagnostic-contract.test.mjs
diagnostic-evidence-seal.mjs
finalize-canonicalization-diagnostic.mjs
run-canonicalization-diagnostic.ps1
source/capture-stabilizer-proposed.mjs
```

The copied browser subset is the complete sorted browser predecessor minus
exactly `canonicalizer-contract-red.json`.

- [ ] **Step 3: Implement exclusive reconstruction**

Create the v6 root only after all checks pass. Copy the five authenticated
trees/subsets and write:

```text
accepted-harness-source/
baseline/
browser/
candidate/
diagnostic/
source-v4-browser/
experiment-policy.json
reconstruction.json
runtime-identity.json
v5-terminal-lock.json
workspace-integrity-before.json
```

The runtime record uses v6 schemas and fresh executable/module hashes. The
policy preserves retry limits, thresholds, candidate locks, and ports
`4381/4382/4383`.

- [ ] **Step 4: Run focused preparer GREEN and syntax verification**

Run the six-case contract to the fresh output
`.superpowers/sdd/canonicalization-liveness-v6/prepare-v6-controller-green.json`.
Expected: exit `0`, `6/6`. It must report that both v6 targets remain absent
and that check-only produced zero write paths.

Then run:

```powershell
node --check 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v6.mjs'
```

Run the controller's read-only preflight directly:

```powershell
node 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v6.mjs' --plan 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site\docs\superpowers\plans\2026-07-19-canonicalization-liveness-v6-diagnostic.md' --check-only
```

Expected: exit `0`, decision `ACCEPT`, both v6 targets still absent, and zero
write paths reported.

- [ ] **Step 5: Independently review check-only before root creation**

Review the complete preparer, controller contract, Task 1 core, check-only
stdout, exact v5 readback, and all fixed manifests. Any unresolved finding
blocks reconstruction while both v6 targets remain absent.

- [ ] **Step 6: Consume reconstruction once**

Run without `--check-only` exactly once:

```powershell
node 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v6.mjs' --plan 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site\docs\superpowers\plans\2026-07-19-canonicalization-liveness-v6-diagnostic.md'
```

Expected: exit `0` and the exact completed stdout object. Do not retry after
any root-creating failure; preserve the partial state and stop.

- [ ] **Step 7: Authenticate the reconstructed boundary**

Require:

```text
baseline: 47 / cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850
candidate: 48 / bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653
source-v4-browser: 18 / 089513385f53893c4cdbb1bc2b8402fb3c7f972886da05af9e94fda3a37c0782
browser: 20 / f7eb49d601f34fb29f097a902b2f8f29a85008ea9e78416c43320443428a4082
diagnostic: 7 / e6afa84dfee3b37fd8ba9560aaf7071ee9073870fe31c2b0653eab5e5535edf3
accepted-harness-source: 49 / 46be90cedf7913ec4ee4c9b26a01b14fb1a0b8b923d86db0bf5270b4c52be4d1
```

Also require absent `diagnostic/preflight`, `diagnostic/red`,
`diagnostic/green`, `browser/run-started.json`, `lighthouse`, and release root.

---

### Task 3: Add the controller-to-cell preflight under TDD

**Files:**

- Modify:
  `diagnostic/diagnostic-contract.test.mjs`
- Modify after RED:
  `diagnostic/canonicalization-cell.mjs`
- Modify after RED:
  `diagnostic/run-canonicalization-diagnostic.ps1`
- Modify after RED:
  `diagnostic/finalize-canonicalization-diagnostic.mjs`
- Modify after RED:
  `diagnostic/diagnostic-evidence-seal.mjs`
- Create after RED:
  `diagnostic/seal-adaptation.json`

**Interfaces:**

- Controller stages are exactly `preflight`, `red`, and `green`.
- Browser semantics exist only for `red` and `green`.
- Preflight uses exact switch `--transport-preflight`.
- Preflight result schema:
  `efficient-technologies/poster-picture-layer-v6-controller-cell-preflight-v1`.

- [ ] **Step 1: Rewrite copied diagnostic tests for fresh-v6 semantics**

Before changing implementation, change the copied contract suite to twelve
ordered cases:

```text
exact RED matrix is CONFIRMED
each completed RED outcome mutation is FALSIFIED
passing-state digest mismatch is FALSIFIED
any HTTP request is FALSIFIED
missing result or cleanup failure is INCONCLUSIVE
exact GREEN matrix is GREEN
production or runtime identity mismatch is INCONCLUSIVE
post-seal mutation fails verification
stage contracts are exactly preflight red and green
GREEN predecessor is the sealed confirmed v6 RED
preflight switch and stage are mutually required
preflight returns before persistent Chrome launch
```

Remove every `red-repair-1` fixture, predecessor, path, and assertion.
The post-seal mutation case must import `sealEvidence` and
`verifyEvidenceSeal` directly from `diagnostic-evidence-seal.mjs`; it must not
depend on the not-yet-generated v6 `seal-adaptation.json`.

- [ ] **Step 2: Run diagnostic contracts and capture intended RED**

Run:

```powershell
node diagnostic\diagnostic-contract.test.mjs --output 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site\.superpowers\sdd\canonicalization-liveness-v6\diagnostic-contract-red.json'
```

Expected: exit `2`; the new preflight/fresh-GREEN cases fail because the
implementation is still v5 repair-aware. Existing causal and seal cases must
remain green. An import, output, runtime, or fixture failure is invalid RED.

- [ ] **Step 3: Implement the preflight cell branch**

In `canonicalization-cell.mjs`:

```js
const transportPreflight = process.argv.includes('--transport-preflight');
const allowedStage = transportPreflight ? 'preflight' : null;
```

Require `preflight` iff the switch is present. Keep normal allowed stages
exactly `red` and `green`. Validate ID, mode, output, journal, profile, runtime,
Playwright, Chrome, and strategy identities. Then, before the first
`chromium.launchPersistentContext` expression executes, write the exact
preflight result with `pass: true` and `chromeLaunched: false`, write the
canonical phase journal, and exit `0`.

- [ ] **Step 4: Implement controller preflight and fresh GREEN binding**

In `run-canonicalization-diagnostic.ps1`:

- accept exactly `preflight`, `red`, and `green`;
- launch one `legacy-js-disabled` preflight cell with the exact switch;
- validate the preflight schema and sentinel;
- preserve raw argument tokens;
- write cleanup and process-result records;
- call the finalizer for all three stages.

In the finalizer:

- remove `red-repair-1` semantics and fixed v5 repair identities;
- define a one-cell preflight contract;
- classify preflight only when its sentinel, journal, cleanup, and
  `chromeLaunched: false` are exact;
- bind GREEN directly to verified, sealed, `CONFIRMED`
  `diagnostic/red/canonicalization-liveness-red.json`; and
- use only v6 schemas.

- [ ] **Step 5: Regenerate the diagnostic seal adaptation**

Generate `diagnostic-evidence-seal.mjs` deterministically from
`browser/evidence-seal.mjs` with these namespace replacements:

```text
browser-evidence-lock.json -> diagnostic-evidence-lock.json
browser evidence root -> diagnostic evidence root
poster-picture-layer-v4-browser-evidence-lock-v1
  -> poster-picture-layer-v6-diagnostic-evidence-lock-v1
```

Write `seal-adaptation.json` with source/adapted identities and exact
replacement counts. No unrecorded byte may differ.

- [ ] **Step 6: Run focused GREEN twice**

Run the diagnostic suite to two fresh outputs. Expected: exit `0`, `12/12`
both times with identical normalized results.

- [ ] **Step 7: Run the native runner guards**

Run:

```powershell
powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass `
  -File browser\runner-guards.tests.ps1 `
  -OutputPath 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site\.superpowers\sdd\canonicalization-liveness-v6\runner-guards-green.json'
```

Expected: exit `0`, `9/9`, including exact space-containing argv transport.

---

### Task 4: Execute and seal browser-free preflight

**Files:**

- Create:
  `diagnostic/preflight/*`

- [ ] **Step 1: Audit the launch boundary**

Require zero:

```text
v5 or v6 diagnostic processes
.profiles directories
listeners on 4381/4382/4383
pre-existing diagnostic/preflight
pre-existing diagnostic/red
pre-existing diagnostic/green
```

Re-authenticate v5 seals, v6 product manifests, runtime identity, Git
cleanliness, branch, upstream, remote, and absent index lock.

- [ ] **Step 2: Run preflight once**

Run:

```powershell
powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass `
  -File diagnostic\run-canonicalization-diagnostic.ps1 `
  -Stage preflight
```

Expected: exit `0`, exact preflight decision `ACCEPT`, `chromeLaunched: false`,
one registered child, empty stderr, no profile creation, and zero residual
processes or ports.

- [ ] **Step 3: Independently verify the preflight seal**

Run:

```powershell
node diagnostic\finalize-canonicalization-diagnostic.mjs verify `
  --root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6\diagnostic\preflight'
```

Expected: exit `0`, decision `ACCEPT`; independently recomputed file count and
digest match the lock.

- [ ] **Step 4: Prove Chrome was not launched**

Record controller timestamps, cell PID, process results, and before/after
Chrome command-line snapshots. Require no Chrome or Edge process whose
`--user-data-dir` is contained beneath `diagnostic/preflight`.

---

### Task 5: Consume the one authoritative RED matrix

**Files:**

- Create:
  `diagnostic/red/*`

- [ ] **Step 1: Re-authenticate every prerequisite**

Require preflight seal `ACCEPT`, offline `12/12`, runner guards `9/9`, exact
runtime identity, exact product/predecessor/Git boundaries, zero residual
processes/profiles/ports, and absent `diagnostic/red`.

- [ ] **Step 2: Run RED exactly once**

Run:

```powershell
powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass `
  -File diagnostic\run-canonicalization-diagnostic.ps1 `
  -Stage red
```

Do not retry. Preserve stdout, stderr, exit code, launcher PID, controller PID,
start time, and finish time.

- [ ] **Step 3: Verify and classify RED**

Run the verifier and independently recompute the lock manifest. Accept
continuation only when:

```text
decision: CONFIRMED
pass: true
cell outcomes:
  legacy-js-disabled: TIMEOUT at exact 5000 ms operation deadline
  legacy-js-enabled: PASS
  proposed-js-disabled: PASS
  proposed-js-enabled: PASS
passing state digests: one exact value
HTTP requests: 0
cleanup residuals/errors: 0
seal verification: ACCEPT
```

If the decision is `FALSIFIED` or `INCONCLUSIVE`, write the report, preserve
the sealed stage, stop this plan, and do not create `diagnostic/green`.

---

### Task 6: Adapt the one helper and prove diagnostic GREEN

This task is conditional on Task 5 returning sealed, verified `CONFIRMED`.

**Files:**

- Modify:
  `browser/capture-stabilizer.mjs`
- Modify:
  `browser/harness-regression.test.mjs`
- Create:
  `browser/canonicalizer-contract-green.json`
- Create:
  `diagnostic/green/*`

- [ ] **Step 1: Copy the sealed proposed helper exactly**

Copy:

```text
diagnostic/red/capture-stabilizer-proposed.mjs
  -> browser/capture-stabilizer.mjs
```

Require equal bytes and SHA-256. No other production helper changes.

- [ ] **Step 2: Make scheduler access fail in the unit fixture**

Replace the v4 fixture’s `requestAnimationFrame -> queueMicrotask` behavior
with a throwing accessor whose exact message is:

```text
capture stabilizer attempted scheduler access
```

Do not change canonical stylesheet, mutations, state schema, video handling,
or capture deadline.

- [ ] **Step 3: Run canonicalizer and inherited offline GREEN**

Require:

```text
canonicalizer contract: 3/3
diagnostic contract: 12/12
runner guards: 9/9
harness regression: 8/8
static contract: 4/4
phase deadline: 6/6
launch contract: 4/4
```

Also run `node --check` for every modified `.mjs` file and
`git diff --check`.

- [ ] **Step 4: Run GREEN exactly once**

Require absent `diagnostic/green`, then run:

```powershell
powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass `
  -File diagnostic\run-canonicalization-diagnostic.ps1 `
  -Stage green
```

- [ ] **Step 5: Verify and classify GREEN**

Require sealed, verified decision `GREEN`, exact four outcomes, production
helper identity equal to the RED proposed helper, identical passing-state
digest, zero HTTP requests, and zero cleanup residuals/errors.

---

### Task 7: Review the sealed diagnostic result and hand off

**Files:**

- Create:
  `.superpowers/sdd/canonicalization-liveness-v6/diagnostic-report.md`
- Create:
  `.superpowers/sdd/canonicalization-liveness-v6/diagnostic-review.md`
- Update:
  `.superpowers/sdd/canonicalization-liveness-v6/progress.md`

- [ ] **Step 1: Write the evidence-backed report**

Report exact Git state, v5 seal readback, v6 reconstruction identities,
preflight decision, RED decision, conditional GREEN decision, all test counts,
process/profile/port residue, product boundary, and every action not reached.

- [ ] **Step 2: Request independent code/evidence review**

The review must check the full diff and recompute fixed identities. Any
Critical, Important, or Minor finding blocks the downstream qualification
plan.

- [ ] **Step 3: Run final verification**

Freshly verify:

```text
v5 original and repaired seals
v6 preflight seal
v6 RED seal
v6 GREEN seal, if created
baseline and candidate manifests
runtime identity
zero processes/profiles/ports
Git branch/HEAD/upstream/remote/status/index lock
no authoritative source or publish product mutation
```

- [ ] **Step 4: Decide the next boundary**

If GREEN and review are clean, write and execute a separate
browser/visual/Lighthouse/promotion/publication plan without requesting another
routine approval. Otherwise stop at the exact sealed failure and do not
publish.

---

## Plan self-review checklist

- [x] Every product and predecessor digest in the design has a matching gate.
- [x] The 21-file predecessor and 20-file copied source are not conflated.
- [x] V5 evidence is authenticated but never copied as v6 evidence.
- [x] Preflight uses the real controller, helper, and cell.
- [x] Preflight exits before Chrome launch.
- [x] RED uses exactly `diagnostic/red`.
- [x] There is no `red-repair-1` path or retry.
- [x] GREEN reads only sealed, verified `CONFIRMED` v6 RED.
- [x] No UI/video/motion byte can change.
- [x] Every implementation change has a preceding observed RED.
- [x] Every success claim requires fresh verification output.
- [x] The downstream release workflow is blocked until sealed diagnostic GREEN.
