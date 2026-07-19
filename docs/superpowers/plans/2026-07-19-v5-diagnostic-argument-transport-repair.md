# V5 Diagnostic Argument-Transport Repair Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use
> superpowers:subagent-driven-development to implement this plan task-by-task.
> Do not request routine conversational approvals; the user's 2026-07-19 repair
> instruction authorizes this bounded plan.

**Goal:** Preserve the sealed failed RED run, fix the Windows native-argument
boundary under browser-free TDD, consume one fresh `red-repair-1` execution,
and continue the original v5 workflow only if that repaired evidence is
independently accepted as `CONFIRMED`.

**Architecture:** Make `Invoke-OwnedProcessWithDeadline` the sole encoder of
raw argument tokens, add `red-repair-1` as an explicit RED-semantic evidence
stage, bind downstream GREEN work to its sealed proposed-module record, and
authenticate the repaired mutable browser overlay before original Task 3
adapts it. Original `diagnostic/red` and `source-v4-browser` remain immutable
predecessor evidence.

**Tech Stack:** Windows PowerShell 5.1, Node.js 24.11.1 built-ins, the existing
pinned Playwright/Chrome runtime, Git, and the existing v5 diagnostic seal.

## Fixed inputs and boundaries

- Approved repair design:
  `docs/superpowers/specs/2026-07-19-v5-diagnostic-argument-transport-repair-design.md`.
- Design commit:
  `a4f4d2df171952999351c600ce1b4c68025af747`.
- Design size and SHA-256:
  11,145 bytes,
  `289953ce96525c026cfba5f1857e207cf07d99da65b89caeede851b0f87f23d8`.
- Publish checkout:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`.
- Branch: `agent/performance-without-motion-loss`.
- V5 root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-18\poster-picture-layer-v5`.
- Original RED evidence:
  `diagnostic/red`, 12 files, digest
  `d23c0800ddeb53cdae0ea31728b9d63149b1c41d5d17e9198cb73c8e32567f3d`.
- Original RED lock SHA-256:
  `34c81cbf4009aeeb2b8449744e3bf28f3168c77b5cb0e714b48911d6625b175c`.
- Original RED matrix SHA-256:
  `5c62e04fb9193de0dbb2cb514a0718818161bea8cf634c56329c1856cc0603d2`.
- Repaired evidence root:
  `diagnostic/red-repair-1`.
- Product/UI mutation before isolated `PROMOTE`: forbidden.
- Original RED mutation, deletion, reseal, verification rewrite, or rerun:
  forbidden.
- The repaired browser command may run once. There is no second repair stage.
- The diagnostic makes no HTTP(S) request and retains all original cell and
  controller deadlines.
- A failed terminal gate stops automatically. A clean gate continues
  automatically without asking the user for another approval.

Every task begins in a fresh PowerShell process with:

```powershell
Set-StrictMode -Version 2.0
$ErrorActionPreference = 'Stop'
$project = 'C:\Users\tarik\Claude Projects\efficient-technologies'
$repo = Join-Path $project 'output\publish\efficient-technologies-site'
$root = Join-Path $project 'output\performance\2026-07-18\poster-picture-layer-v5'
$sdd = Join-Path $repo '.superpowers\sdd\canonicalization-liveness-v5'
$runtime = Get-Content -LiteralPath (Join-Path $root 'runtime-identity.json') -Raw |
  ConvertFrom-Json
$node = [string]$runtime.node.path
if (-not (Test-Path -LiteralPath $node -PathType Leaf)) {
  throw "Recorded Node executable is missing: $node"
}
```

---

### Task 1: Correct terminal control state and authenticate the predecessor

**Files:**

- Modify:
  `.superpowers/sdd/canonicalization-liveness-v5/task-2-report.md`
- Modify:
  `.superpowers/sdd/progress.md`
- Create:
  `.superpowers/sdd/canonicalization-liveness-v5/repair-predecessor-check.json`

- [ ] **Step 1: Make the Task 2 terminal status unambiguous**

Change the report's opening status to exactly:

```text
Status: `BLOCKED / INCONCLUSIVE / original RED authority consumed`
```

State immediately below it that the earlier `READY_TO_RUN_RED` section is
historical preflight evidence. Preserve the terminal evidence, commands,
hashes, and chronology already in the report.

- [ ] **Step 2: Update the live progress ledger**

Record original Task 2 as terminal sealed `INCONCLUSIVE`, add the repair task as
`in progress`, and keep Task 3 locked pending a sealed, verified, independently
approved `CONFIRMED` result from `red-repair-1`.

- [ ] **Step 3: Recompute immutable predecessor identity**

Run the existing diagnostic verifier against `diagnostic/red`, independently
recompute all 12 manifest entries and the aggregate digest, and write the
result to `repair-predecessor-check.json`. Require the fixed hashes and digest
listed above.

- [ ] **Step 4: Prove protected roots are unchanged**

Recompute the existing baseline, candidate, product, terminal-v4, and Git
boundaries using read-only checks. Do not invoke a browser, server, v4 command,
or diagnostic finalizer.

Expected: exact predecessor authentication, no product drift, no process or
profile residue, and Task 3 still locked.

---

### Task 2: Define the raw-token process contract under TDD

**Files:**

- Create:
  `output/performance/2026-07-18/poster-picture-layer-v5/browser/argv-fixture.mjs`
- Modify:
  `output/performance/2026-07-18/poster-picture-layer-v5/browser/runner-guards.tests.ps1`
- Modify:
  `output/performance/2026-07-18/poster-picture-layer-v5/browser/runner-guards.psm1`
- Create:
  `.superpowers/sdd/canonicalization-liveness-v5/repair-argv-red.json`
- Create:
  `.superpowers/sdd/canonicalization-liveness-v5/repair-argv-green.json`

- [ ] **Step 1: Write the failing transport regression**

Add one test that passes a raw Node script path and the exact logical vector
below through `Invoke-OwnedProcessWithDeadline`:

```text
--profile
C:\...\path with spaces\profile
--output
C:\...\path with spaces\result.json
--phase-journal
C:\...\path with spaces\phase.jsonl
```

The fixture writes `process.argv.slice(2)` as JSON with exclusive creation. The
test requires an exact element-for-element match. It must not launch a browser
or use the network.

Update existing helper tests to pass raw `$fixture` tokens. Retain
`$quotedFixture` only at direct `Start-Process` call sites outside the helper.

- [ ] **Step 2: Run the suite and capture intended RED**

```powershell
& powershell.exe -NoProfile -ExecutionPolicy Bypass `
  -File (Join-Path $root 'browser\runner-guards.tests.ps1') `
  -OutputPath (Join-Path $sdd 'repair-argv-red.json')
```

Expected: nonzero exit because the old helper truncates a space-containing
script path or otherwise fails the exact argv-vector assertion. Reject setup,
fixture-syntax, missing-runtime, or unrelated failures as invalid RED.

- [ ] **Step 3: Centralize encoding in the helper**

Inside `Invoke-OwnedProcessWithDeadline`, map each raw token through the
existing `ConvertTo-OwnedProcessArgument` immediately before
`Start-Process -ArgumentList`.

Remove the now-redundant pre-encoding block from
`Invoke-OwnedNativeCaptureWithDeadline` and pass its raw argument list into the
helper. Do not duplicate or replace the established Windows quoting algorithm.

- [ ] **Step 4: Run focused GREEN**

Run the same command with output
`.superpowers/sdd/canonicalization-liveness-v5/repair-argv-green.json`.

Expected: all runner-guard cases pass, including the exact vector with
space-containing script, profile, output, and journal paths.

- [ ] **Step 5: Inspect the diff**

Require one raw-token contract, encoding exactly once, unchanged timeout and
owned-process behavior, and no product or evidence changes.

---

### Task 3: Add the single repaired RED stage under TDD

**Files:**

- Modify:
  `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/diagnostic-contract.test.mjs`
- Modify:
  `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/run-canonicalization-diagnostic.ps1`
- Modify:
  `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/finalize-canonicalization-diagnostic.mjs`
- Create:
  `.superpowers/sdd/canonicalization-liveness-v5/repair-stage-red.json`
- Create:
  `.superpowers/sdd/canonicalization-liveness-v5/repair-stage-green.json`

- [ ] **Step 1: Write failing stage-contract tests**

Extend the diagnostic contract suite to require:

- `red-repair-1` classifies the exact RED vector as `CONFIRMED`;
- completed outcome mutations classify as `FALSIFIED`;
- missing results or failed cleanup classify as `INCONCLUSIVE`;
- its matrix name is `canonicalization-liveness-red-repair-1.json`;
- its exact root is `diagnostic/red-repair-1`;
- it includes and seals `capture-stabilizer-proposed.mjs`; and
- downstream GREEN reads the proposed-module identity from the repaired stage,
  while authenticating original `diagnostic/red` as immutable predecessor.

- [ ] **Step 2: Run the diagnostic suite and capture RED**

```powershell
& $node (Join-Path $root 'diagnostic\diagnostic-contract.test.mjs') `
  --output (Join-Path $sdd 'repair-stage-red.json')
```

Expected: nonzero exit because `red-repair-1` is unsupported. Existing eight
contracts remain green.

- [ ] **Step 3: Implement the minimal stage alias**

Controller:

- accept exactly `red`, `red-repair-1`, and `green`;
- define one `isRedStage` predicate;
- use the existing RED cells and proposed-module copy for both RED-semantic
  stages;
- encode no arguments itself; pass raw tokens to the repaired helper.

Finalizer:

- map `red-repair-1` to the existing RED expectations and decision semantics;
- require its exact sibling root;
- generate the stage-specific matrix filename;
- include the proposed module in expected sealed paths; and
- bind GREEN predecessor loading to the sealed repaired stage plus exact
  verification of the original failed RED lock.

- [ ] **Step 4: Run complete offline GREEN**

Run the diagnostic contract suite to
`.superpowers/sdd/canonicalization-liveness-v5/repair-stage-green.json`, then
rerun the full runner-guard suite to a fresh output path.

Expected: every contract passes; no browser, server, network, or product path
is touched.

- [ ] **Step 5: Reauthenticate original evidence**

Repeat Task 1's predecessor verification. Require the original RED lock, matrix,
file count, and digest to be byte-identical.

---

### Task 4: Produce and independently review the repair preflight

**Files:**

- Create:
  `.superpowers/sdd/canonicalization-liveness-v5/task-2-repair-brief.md`
- Create:
  `.superpowers/sdd/canonicalization-liveness-v5/task-2-repair-report.md`
- Create:
  `.superpowers/sdd/canonicalization-liveness-v5/task-2-repair-review-package.diff`
- Create:
  `.superpowers/sdd/canonicalization-liveness-v5/task-2-repair-review.md`
- Create:
  `.superpowers/sdd/canonicalization-liveness-v5/repair-working-harness-input.json`

- [ ] **Step 1: Build a complete repair report**

Record:

- exact before/after hashes for every changed harness file;
- the intended TDD RED and full GREEN counts;
- exact original evidence authentication;
- exact Git/product/baseline/candidate/v4 boundaries;
- zero browser execution so far;
- zero residual owned PIDs, profiles, and ports;
- `diagnostic/red-repair-1` absent; and
- exact repaired 21-file working-harness input authentication; and
- status `READY_TO_RUN_REPAIR`.

- [ ] **Step 2: Generate the review package**

Include all changed harness code, test diffs, control-state corrections, and
evidence hashes. Exclude no relevant ignored or out-of-repo artifact merely
because Git does not track it.

- [ ] **Step 3: Obtain independent read-only review**

The reviewer must not invoke a browser, server, controller, finalizer, cleanup,
seal, or network operation. Review:

1. exact design and plan compliance;
2. Windows argv correctness and regression quality;
3. original sealed evidence immutability;
4. stage/root/finalizer decision semantics;
5. downstream repaired-predecessor binding;
6. repaired working-harness input and downstream output-manifest binding;
7. deadlines, process ownership, cleanup, and no-HTTP constraints; and
8. no product/UI/video/motion drift.

Only exact `APPROVED` with no Critical or Important finding unlocks Task 5.
The same implementer fixes findings under TDD; review repeats without asking
the user for a routine approval.

---

### Task 5: Consume the one repaired RED execution

**Files:**

- Create and seal:
  `output/performance/2026-07-18/poster-picture-layer-v5/diagnostic/red-repair-1/*`
- Modify:
  `.superpowers/sdd/canonicalization-liveness-v5/task-2-repair-report.md`
- Modify:
  `.superpowers/sdd/progress.md`
- Create:
  `.superpowers/sdd/canonicalization-liveness-v5/task-2-repair-execution-review.md`

- [ ] **Step 1: Recheck the launch boundary**

In one fresh PowerShell process, require:

- clean approved repair preflight;
- exact plan/spec and current harness hashes;
- original RED verifies with the fixed lock and digest;
- `diagnostic/red-repair-1` does not exist;
- no v5-owned process or profile exists;
- ports `4381`, `4382`, and `4383` are unoccupied;
- no product, baseline, candidate, v4, or remote-branch drift.

- [ ] **Step 2: Run the controller exactly once**

```powershell
& (Join-Path $root 'diagnostic\run-canonicalization-diagnostic.ps1') `
  -Stage red-repair-1
$repairExit = $LASTEXITCODE
```

Do not invoke that stage a second time for any reason.

- [ ] **Step 3: Seal, verify, and independently recompute**

The controller must finish its own finalization. Verify the resulting seal
read-only, independently recompute its manifest and digest, verify original RED
again, and audit zero residual owned PIDs, profiles, and occupied qualification
ports.

- [ ] **Step 4: Review the terminal result**

An independent reviewer checks the exact four cells, journals, HTTP request
arrays, process records, cleanup, matrix classification, seal, digest,
predecessor identity, and product boundary.

- [ ] **Step 5: Apply the decision table**

- `CONFIRMED` plus clean independent approval: mark the repair complete, unlock
  original v5 Task 3, and continue automatically.
- `FALSIFIED`, `INCONCLUSIVE`, or any execution/evidence/boundary defect:
  preserve exact state and stop v5.

No user approval prompt is inserted between a clean `CONFIRMED` decision and
the already-approved original Task 3 workflow.

---

### Task 6: Continue the original v5 plan after confirmation

**Files:**

- Read and follow:
  `docs/superpowers/plans/2026-07-18-canonicalization-liveness-v5-qualification.md`
- Create during original Task 3:
  `output/performance/2026-07-18/poster-picture-layer-v5/v5-repaired-working-harness-output.json`

- [ ] **Step 1: Record the predecessor substitution**

In progress and task reports, record that the original failed `diagnostic/red`
remains terminal evidence and that sealed `diagnostic/red-repair-1` is the
authoritative causal RED input under the supplemental repair authority.

- [ ] **Step 2: Start original Task 3**

Resume at “Apply the one helper change and prove complete GREEN.” Every original
gate remains binding except:

1. references to the authoritative confirmed RED root now resolve to
   `diagnostic/red-repair-1`; and
2. original Task 3 Step 1's mutable `working copied source 18/18 exact` gate is
   superseded only by exact authentication of
   `.superpowers/sdd/canonicalization-liveness-v5/repair-working-harness-input.json`.

The immutable `source-v4-browser` gate remains exact `18/18`.

The repaired pre-adaptation input manifest is fixed at:

```text
immutable source members: 18
source members byte-identical in browser/: 15
repair-modified source members: exactly
  runner-guards.psm1
  runner-guards.tests.ps1
  run-browser-gates.ps1
Task 1 additions carried separately: exactly
  canonicalizer-contract.test.mjs
  canonicalizer-contract-red.json
repair additions: exactly
  argv-fixture.mjs
missing source members: 0
unexpected additions: 0
total browser files: 21
aggregate digest:
  e9bf0d7afa0612969d7a70af7a22883c827128bdb2db636e633d2c2dcfa0f772
```

Before its first write, `adapt-v5-harness.mjs` must authenticate the complete
input manifest and the separate immutable source-v4 `18/18` manifest. It must
preserve the raw-token repair in all three modified source members while
applying the original Task 3 transformations. It then emits
`v5-repaired-working-harness-output.json`, an exact full inventory of the
repaired-plus-adapted browser harness, and records that manifest identity in
`v5-harness-adaptation.json`.

All later original-plan references to the `exact v5 working harness`,
including Task 4 and later launch boundaries, bind to
`v5-repaired-working-harness-output.json`. They do not bind to the original
18-file working-copy snapshot. The native runner-guard suite must pass exact
`9/9` after adaptation; an `8/8` expectation is superseded by this repair
contract.

- [ ] **Step 3: Preserve the visible surface**

Do not change any UI, video, scene, scroll, zoom, transition, animation, timing,
or other deployable behavior. Product bytes remain unchanged until the original
isolated `PROMOTE` gate.

- [ ] **Step 4: Continue without routine approval prompts**

Proceed through clean local gates, independent reviews, qualification,
promotion, GitHub, preview, merge, and production verification already
authorized by the original project request. Stop only on a failed terminal
gate, an external/provider error, credential or target mismatch, or materially
new scope.
