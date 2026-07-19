# Capture Operation Isolation v8 Implementation Plan

> **REQUIRED SUB-SKILLS:** Use `superpowers:executing-plans` to execute this
> plan task-by-task, `superpowers:subagent-driven-development` for fresh
> implementer/reviewer boundaries, and
> `superpowers:verification-before-completion` before every completion claim.

> Execute task-by-task with fresh implementer and independent reviewer
> boundaries. V7 is terminal. V8 is diagnostic-only and may never mutate the
> product, helper, publish checkout, or live site.

**Goal:** Reconstruct one fresh v8 root, build a bounded operation-level probe
under TDD, run one browser-free preflight, and run one five-cell Chrome
isolation stage that proves or falsifies the corrected `page.addStyleTag`
liveness hypothesis.

**Architecture:** A one-shot preparer authenticates the committed design,
terminal v5/v6/v7 evidence, runtime, Git, five immutable trees, and the exact
installed `playwright-core` causal source. It copies only immutable sources
and writes reconstruction last. A fresh v8 controller supports exactly
`preflight` and `isolation`. Five independent, sequential Chrome cells isolate
style injection, synchronous evaluation entry, synchronous collection, and
the full synchronous candidate primitive. Every terminal stage is sealed and
independently reviewed.

**Technology:** Static repository; Node.js `v24.11.1`; Windows PowerShell 5.1;
fixed Playwright `1.62.0-alpha-1783623505000`; fixed stable Chrome
`150.0.7871.115`; no install or build step.

---

## Fixed authority and identities

Approved design:

```text
docs/superpowers/specs/2026-07-19-capture-operation-isolation-v8-design.md
commit: ee1171ced1f649c02fec1ad6c7a95c4ed6619c11
bytes: 17896
sha256: 46f45d398b31c7beee2b50320e898549d14a7ed4c3f15612cf8cd1eaef0884d3
```

Repository:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site
branch: agent/performance-without-motion-loss
plan base HEAD: ee1171ced1f649c02fec1ad6c7a95c4ed6619c11
upstream: b416b8113315c95c32d4674aa54769d90c562abd
remote: https://github.com/tarik-ux/efficient-technologies-site.git
```

Roots:

```text
terminal v7:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v7

fresh v8:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8

untracked control root:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control

forbidden release:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-release-v8
```

Terminal v7:

```text
preflight:
ACCEPT
7 / 8338530694d1559a133af40b5d452c783f754e643998294eeaba4754d967eaba
lock 1545 / 81d55311d3080ad8be542d5eaa197d37e29b86fe577270a7bc6c636015ce880a

RED:
INCONCLUSIVE / false
20 / bcc6d42bf7818a0e4cc890aafc60cc9c0151a06d4ffa8cd99f1d4718ca8af592
lock 3788 / 3ede556397f773f8b9898d05b9ee116f4c53e1567384aae4ce6ad78b9f9d1657

Task 5 review:
13926 / 69cf7749184acfc7f794d2c39aae3c36237a944d3bcaee86c6a09fd958caca02
evidence COMPLIANT / GREEN unauthorized
```

Immutable inputs:

```text
baseline:
47 / cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850

candidate:
48 / bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653

browser:
20 / f7eb49d601f34fb29f097a902b2f8f29a85008ea9e78416c43320443428a4082

source-v4-browser:
18 / 089513385f53893c4cdbb1bc2b8402fb3c7f972886da05af9e94fda3a37c0782

accepted-harness-source:
49 / 46be90cedf7913ec4ee4c9b26a01b14fb1a0b8b923d86db0bf5270b4c52be4d1
```

Fixed causal source:

```text
C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules\playwright-core\lib\coreBundle.js
3407411 / be2e09efef3017b4eaa76f0cb5289f66c4ea57833f94319b17c1c2f184987ad7
```

## Global boundaries

- Never mutate or retry v5, v6, or v7.
- Never create v8 or its stage twice.
- Never create the v8 release root.
- The control root, v8 root, and v8 release root must all be absent before
  Task 1 begins. Task 1 may create the control root once; only the Task 2
  preparer may later create v8. An unexpected existing root stops execution.
- The only writable paths are the fresh v8 root and the untracked control
  root. The control root is outside the publish checkout and outside every
  sealed experiment root.
- Never modify baseline, candidate, browser, source-v4-browser, or
  accepted-harness-source after reconstruction.
- Never edit a deployable HTML, CSS, JavaScript, image, font, SVG, video, or
  header.
- Never change the world video, scrolling, scenes, zooms, motion, or
  animations.
- Never start a site server, make an HTTP(S) request, install a dependency,
  run Lighthouse, promote, commit product bytes, push, deploy, or verify live
  production in v8.
- Every browser/process helper is hidden, registered, bounded, and cleaned by
  exact PID/profile ownership.
- Any failed precondition stops before the one-shot command.
- Preflight and isolation each run at most once. There is no repair or retry
  stage.

## Fixed deadline containment

```text
cell phase maxima:
45000 launch + 45000 page + 15000 fixture + 5000 operation +
15000 context close = 125000 ms

exact-profile removal: 30000 ms
cell parent: 190000 ms

five sequential cell parents: 950000 ms
isolation controller: 1000000 ms
isolation operator wait: 1060000 ms
independent finalizer wait: 60000 ms
isolation operator total budget: 1180000 ms

preflight controller: 240000 ms
preflight operator wait: 300000 ms
independent finalizer wait: 60000 ms
preflight operator total budget: 420000 ms
```

The operator wait is outside and strictly greater than the contained
controller budget. The total budget also contains snapshots, the single
read-only finalizer, and final residue checks. A client/UI wait expiry does
not authorize a second controller; the durable original operator must be
observed to terminal state.

## Exact durable operator interfaces

All operator sources and artifacts live only in:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control
```

Exact sources and exclusive records:

```text
Task 2 source: task-2-reconstruct-v8-once.mjs
Task 2 prelaunch: task-2-prelaunch.json
Task 2 terminal evidence: task-2-operator-evidence.json
Task 2 report: task-2-report.md

Task 4 source: task-4-preflight-once.mjs
Task 4 prelaunch: task-4-prelaunch.json
Task 4 terminal evidence: task-4-operator-evidence.json
Task 4 report: task-4-report.md

Task 5 source: task-5-isolation-once.mjs
Task 5 prelaunch: task-5-prelaunch.json
Task 5 terminal evidence: task-5-operator-evidence.json
Task 5 report: task-5-report.md
```

Every JSON record uses exclusive creation. A prelaunch record is written
before the sole child start and is never reopened. Terminal operator evidence
is a different path written after child exit/finalizer/residue completion.

Task 2 operator invocation:

```text
cwd:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control

command:
"C:\Program Files\nodejs\node.exe" ".\task-2-reconstruct-v8-once.mjs"

child command:
"C:\Program Files\nodejs\node.exe" ".\prepare-v8.mjs" reconstruct
  --repo "C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site"
  --root "C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8"
  --release-root "C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-release-v8"

child deadline: 180000 ms
operator total deadline: 240000 ms
```

Task 4 operator invocation:

```text
operator cwd:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control

operator command:
"C:\Program Files\nodejs\node.exe" ".\task-4-preflight-once.mjs"

controller cwd:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8

controller command:
powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass
  -File "C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8\diagnostic\run-operation-isolation.ps1"
  -Stage preflight
```

Task 5 uses the same two working directories and:

```text
operator command:
"C:\Program Files\nodejs\node.exe" ".\task-5-isolation-once.mjs"

controller command:
powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass
  -File "C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8\diagnostic\run-operation-isolation.ps1"
  -Stage isolation
```

## Fixed stage schemas and inventories

Schemas:

```text
matrix:
efficient-technologies/poster-picture-layer-v8-operation-isolation-matrix-v1

cleanup:
efficient-technologies/poster-picture-layer-v8-operation-isolation-cleanup-v1

preflight sentinel:
efficient-technologies/poster-picture-layer-v8-operation-isolation-cell-preflight-v1

causal-source verification:
efficient-technologies/poster-picture-layer-v8-causal-source-verification-v1

evidence lock:
efficient-technologies/poster-picture-layer-v8-operation-isolation-evidence-lock-v1
```

The exact preflight sentinel is:

```json
{
  "schema": "efficient-technologies/poster-picture-layer-v8-operation-isolation-cell-preflight-v1",
  "stage": "preflight",
  "pass": true,
  "chromeLaunched": false
}
```

The collection cell returns the complete raw state, no raw-state digest, and
this exact ordered capability summary:

```json
{
  "topLevelKeySetPass": true,
  "stableTextPass": true,
  "boundsSchemaPass": true,
  "boundsFinitePass": true,
  "animationCountTypePass": true,
  "videoControlsShapePass": true,
  "computedStyleTypesPass": true,
  "pass": true
}
```

`rawStateDigestSha256` is exactly `null`. Raw animated opacity/transform
values are evidence but are not acceptance values.

Cell result schema:

```text
efficient-technologies/poster-picture-layer-v8-operation-isolation-cell-result-v1
```

Every isolation result serializes these exact top-level fields in order:

```text
schema
stage
id
javaScriptEnabled
operation
expectedOutcome
outcome
timeoutMs
entrySentinel
rawState
rawStateDigestSha256
capabilitySummary
canonicalState
canonicalStateDigestSha256
httpRequests
fixtureIdentity
styleIdentity
causalSourceIdentityBefore
causalSourceIdentityAfter
error
runtimeIdentity
phases
cleanup
```

Fields not applicable to a cell are exactly `null`, not omitted.

Phase-journal schema:

```text
efficient-technologies/poster-picture-layer-v8-operation-isolation-cell-phase-v1
```

Each compact JSONL record has exact ordered fields:

```text
schema
recordedAtUtc
pid
id
phase
state
```

Preflight has ID `preflight` and exact journal:

```text
transport-preflight / START
transport-preflight / END
```

Every isolation cell has exact ordered phases:

```text
persistent-context-launch / START
persistent-context-launch / END
new-page / START
new-page / END
fixture-installation / START
fixture-installation / END
<cell operation> / START
<cell operation> / END or TIMEOUT
context-close / START
context-close / END
```

Operation phase names are exactly:

```text
add-style
evaluate-entry
collection
synchronous-full
```

Only `add-style-disabled` may treat
`add-style / TIMEOUT / 5000 ms` as an expected exit-zero outcome. Every other
operation timeout is a completed mismatch or infrastructure result under the
fixed classification rules.

Preflight has exactly eight locked regular files:

```text
causal-source-verification.json
cell-process-results.json
diagnostic-cleanup.json
operation-isolation-preflight.json
preflight.phase.jsonl
preflight.result.json
preflight.stderr.txt
preflight.stdout.txt
```

Isolation has exactly twenty-four locked regular files:

```text
causal-source-verification.json
cell-process-results.json
diagnostic-cleanup.json
operation-isolation-matrix.json

add-style-disabled.phase.jsonl
add-style-disabled.result.json
add-style-disabled.stderr.txt
add-style-disabled.stdout.txt

add-style-enabled.phase.jsonl
add-style-enabled.result.json
add-style-enabled.stderr.txt
add-style-enabled.stdout.txt

evaluate-entry-disabled.phase.jsonl
evaluate-entry-disabled.result.json
evaluate-entry-disabled.stderr.txt
evaluate-entry-disabled.stdout.txt

collection-disabled.phase.jsonl
collection-disabled.result.json
collection-disabled.stderr.txt
collection-disabled.stdout.txt

synchronous-full-disabled.phase.jsonl
synchronous-full-disabled.result.json
synchronous-full-disabled.stderr.txt
synchronous-full-disabled.stdout.txt
```

Each stage also has one final `diagnostic-evidence-lock.json`, excluded from
its own rows. Before invoking or verifying the stage-specific sealer, the
finalizer requires the exact inventory and rejects a missing path, any
additional unlocked regular file, `.profiles`, or
`process-registration.json`. The mechanically adapted sealer requires every
listed path and creates or verifies the lock, but it is not credited with
rejecting extra regular files.

`causal-source-verification.json` has exact ordered fields:

```text
schema
stage
expected
observations
pass
```

`expected` has exact ordered fields:

```text
wrapperPath
wrapperVersion
corePath
coreBytes
coreSha256
```

Each observation has exact ordered fields:

```text
actor
cellId
point
path
bytes
sha256
pass
```

Preflight observations are exactly:

```text
controller / null / prelaunch
cell / preflight / prelaunch
cell / preflight / preresult
finalizer / null / preseal
```

Isolation observations are exactly:

```text
controller / null / prelaunch
cell / add-style-disabled / prelaunch
cell / add-style-disabled / preresult
cell / add-style-enabled / prelaunch
cell / add-style-enabled / preresult
cell / evaluate-entry-disabled / prelaunch
cell / evaluate-entry-disabled / preresult
cell / collection-disabled / prelaunch
cell / collection-disabled / preresult
cell / synchronous-full-disabled / prelaunch
cell / synchronous-full-disabled / preresult
finalizer / null / preseal
```

The finalizer performs the `finalizer/preseal` check itself before writing
the record or matrix. Its read-only `verify` command independently
reauthenticates the same core file before accepting the lock and returns an
exact `causalSource` identity in stdout; it never mutates the sealed record.

---

### Task 1: Build and test the one-shot v8 preparer

**Create in the exact untracked control root outside the publish checkout and
v8 root:**

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\prepare-v8-core.mjs
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\prepare-v8-core.test.mjs
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\prepare-v8.mjs
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\prepare-v8.test.mjs
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\task-2-reconstruct-v8-once.mjs
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\progress.md
```

The preparer is the only component allowed to create v8.

#### Action checklist

- [ ] Prove control, v8, and release roots absent, then create the control root
  once with no reparse/Git boundary.
- [ ] From the control root, run the core RED:
  `& 'C:\Program Files\nodejs\node.exe' '.\prepare-v8-core.test.mjs' --output '.\task-1-core-red.json'`.
- [ ] Run the controller RED:
  `& 'C:\Program Files\nodejs\node.exe' '.\prepare-v8.test.mjs' --output '.\task-1-controller-red.json'`.
- [ ] Implement only after both RED outputs are valid.
- [ ] Run core GREEN twice:
  `& 'C:\Program Files\nodejs\node.exe' '.\prepare-v8-core.test.mjs' --output '.\task-1-core-green-1.json'`
  and
  `& 'C:\Program Files\nodejs\node.exe' '.\prepare-v8-core.test.mjs' --output '.\task-1-core-green-2.json'`.
- [ ] Run controller GREEN twice:
  `& 'C:\Program Files\nodejs\node.exe' '.\prepare-v8.test.mjs' --output '.\task-1-controller-green-1.json'`
  and
  `& 'C:\Program Files\nodejs\node.exe' '.\prepare-v8.test.mjs' --output '.\task-1-controller-green-2.json'`.
- [ ] Run check-only:
  `& 'C:\Program Files\nodejs\node.exe' '.\prepare-v8.mjs' check --repo 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site' --root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8' --release-root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-release-v8' --output '.\task-1-check.json'`.
- [ ] Stop for independent review.

#### Core contract

Write tests before implementation. Require these ordered cases:

1. exact design path, commit, bytes, and SHA;
2. exact plan path, last commit, bytes, and SHA supplied by Task 1 brief;
3. exact branch, HEAD, upstream, remote, clean status, diff-check, and no
   index lock;
4. v8 root and release root absent;
5. no reparse/Git/escape boundary in sources or targets;
6. accepted v5 original/repaired seals;
7. accepted v6 preflight seal and exact terminal decision;
8. accepted v7 preflight seal and exact lock;
9. accepted v7 RED seal with exact terminal matrix/failure and Task 5 review;
10. exact five immutable manifests and six fixed records;
11. exact Node/Playwright/Chrome/Edge runtime identity; and
12. exact separate `playwright-core` causal-source identity.

Run against an intentionally incomplete core first. Preserve valid RED
`0/12`. Implement and require `12/12` twice with byte-identical normalized
output.

#### Controller contract

Test the complete check/reconstruct controller:

1. `check` is read-only and reports `writePaths: []`;
2. `reconstruct` is the only writing mode;
3. target existence rejects before any write;
4. target ancestors are regular and contained;
5. copies use exclusive creation and regular-file readback;
6. source manifests are recomputed before and after copying;
7. exact five immutable trees are copied;
8. exact nine-file v7 diagnostic reference allowlist is copied only to
   `source-v7-diagnostic`;
9. no v7 stage/result/profile/lock evidence is copied as active v8 evidence;
10. `playwright-core-identity.json` records path/bytes/hash/ticks/reparse;
11. `terminal-v7-lock.json` records exact preflight/RED/review identities;
12. experiment policy and runtime records are exclusive;
13. reconstruction success marker is the last write; and
14. any failure preserves partial state and forbids reconstruction retry;
    the exact Task 2 operator has one child-start site, no loop/retry path,
    exact commands/CWDs, a `180000` ms child deadline, `240000` ms total
    budget, and separate exclusive prelaunch/terminal records.

The nine-file reference allowlist is:

| Path | Bytes | SHA-256 |
|---|---:|---|
| `canonicalization-cell.mjs` | 11942 | `0991879ab89d8ddf608e40a9910db742d5330b7f1622dbf95bf3b4711b4c556d` |
| `canonicalization-fixture.mjs` | 2361 | `7c5ff2ff63b6ca9c9c56a01da6e94c460dd28d2544994a9e9334f62334739a4d` |
| `controller-json-serialization-contract.tests.ps1` | 8872 | `a5307f19c7ff15ee382a9f4799ca9e13a0cefc7a35418c7bec3d8341f77eb054` |
| `diagnostic-contract.test.mjs` | 13478 | `491da909358138fa81b2768208948151cfc8481ad1e59c12f25f8ac336308e68` |
| `diagnostic-evidence-seal.mjs` | 12225 | `d612167606e201cefbc37cc6cc17e956b2c7e1c549b804187704b4cd9f18446d` |
| `finalize-canonicalization-diagnostic.mjs` | 27549 | `fbdd91e048351dfdd73701ebf872807c6e4a0dbfaeb7e158b39c9817b88a140f` |
| `run-canonicalization-diagnostic.ps1` | 14580 | `e37de578b06b5e41ef1b67187c630194eb1e680aa493113a769f77440708aae4` |
| `seal-adaptation.json` | 1402 | `2ef7a846564301f2b6bf505ca5d0080c5d682eec6024f5373540a31bc9f67e34` |
| `source/capture-stabilizer-proposed.mjs` | 2979 | `b20b246cfb4571b3517d2156ccd1f5da21803fcb1d4b74f2953cb80e4f6f9c56` |

Sort rows by ordinal `relativePath`, project each row exactly as
`{relativePath,bytes,sha256}`, serialize the complete array with
`JSON.stringify` and no trailing newline, and hash its UTF-8 bytes. Require:

```text
9 / 5613ad53c84c6e2541baed9a90a2b6c11bf645ed6d3ef920b423a6b1d9753ba7
```

The six fixed v7 records are:

| Record | Bytes | SHA-256 |
|---|---:|---|
| `experiment-policy.json` | 4456 | `1e29587c95b4cf3e1a6efda67ece541e264ec2fa32f123b197ee44c1c172bc5d` |
| `runtime-identity.json` | 14849 | `471744930f4e577bfbd20f58ff08e977037c304a93e28baa46972e6a5e9bb167` |
| `v5-terminal-lock.json` | 7025 | `06a694345ebf58695bd21d701736a0dde4c5573408fcf72f651e93c95c9bde34` |
| `v6-terminal-lock.json` | 5746 | `a2dd7931aaf031abd0ac70b84f5f12ced836a1ee4f3feea79e1dc7c1f0ec8dc6` |
| `workspace-integrity-before.json` | 80639 | `7e10d2e2f65e2dc66cec7e19330a097328c1b756ccc5284b8ff2cc5147a5c7c3` |
| `reconstruction.json` | 109305 | `d03c13731c3220d9d3fb8274ad0bf9660855d5356f6af7989e4b2c0300f92a8a` |

`playwright-core-identity.json` must prove the wrapper/core relationship:

```text
wrapper:
C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules\playwright

node_modules parent:
C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules

core:
C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules\playwright-core\lib\coreBundle.js
```

The resolved wrapper parent and resolved core package parent must be the same
regular `node_modules` directory. No relative escape, junction, reparse point,
or alternate package root is accepted.

`terminal-v7-lock.json` must also authenticate these exact sealed v7 RED
result sources:

| Path under `diagnostic/red` | Bytes | SHA-256 |
|---|---:|---|
| `legacy-js-enabled.result.json` | 4551 | `52fc1ebb02cb92e7a9f42884717dc3d8ddc8b74228a0e9bd05f35b852bcd0d84` |
| `proposed-js-enabled.result.json` | 4575 | `df596356b7f0d5fe71db7647e217105a439b2d5f34882489d192cbfc33d2d745` |

Both paths must be present in and match the accepted terminal v7 RED evidence
lock. Their parsed `state` objects must be deeply equal in exact JSON property
order and must each recompute to:

```text
b8634b4f899eee08ce6d1c14c57c11657214372a9f2eb53107282af5eb43ac67
```

The lock record embeds one deep-cloned passing-state object plus both source
paths, byte/hash identities, the terminal RED lock identity, and the state
digest. It does not copy either v7 result file into active v8 evidence.

The exported `CANONICAL_CAPTURE_STYLE` is authenticated from:

```text
source-v7-diagnostic/source/capture-stabilizer-proposed.mjs
module: 2979 / b20b246cfb4571b3517d2156ccd1f5da21803fcb1d4b74f2953cb80e4f6f9c56
exported UTF-8 style: 686 / aaa3fd1ce3ba66c21eee8a72f857eda1c07726cc8c56b581bf9c925373e9fd0e
```

`terminal-v7-lock.json` records the exported style identity. Active v8 cells
import and rehash that export; they do not embed a retyped stylesheet.

Preserve valid RED `0/14`. Implement and require `14/14` twice with
byte-identical output. Direct check-only mode must return `ACCEPT`,
`writePaths: []`, with v8 and release roots still absent.

Stop for independent review. The reviewer must authenticate all tests,
sources, target-absence facts, write sets, and no-product boundaries before
Task 2.

---

### Task 2: Reconstruct v8 exactly once

Precondition: Task 1 independent review `COMPLIANT`.

#### Action checklist

- [ ] Reauthenticate Task 1 review and target absence.
- [ ] Run the exact durable operator command below once.
- [ ] Do not retry after any exit or caller wait expiry.
- [ ] Recompute every copied manifest/record and zero-residue boundary.
- [ ] Write the Task 2 report in the control root.
- [ ] Stop for independent review.

From the exact control-root working directory, run exactly once:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\task-2-reconstruct-v8-once.mjs'
```

The operator must write exclusive `task-2-prelaunch.json` before its sole
child start, enforce the exact `180000` ms child and `240000` ms total
deadlines, and later write separate `task-2-operator-evidence.json`.

Capture:

- exact command, working directory, start/end UTC, duration, PID, exit,
  stdout, and stderr;
- complete before/after target and release-root facts;
- Chrome/Edge process snapshots;
- Git, runtime, predecessor, and immutable boundary readback; and
- proof there was no retry.

Expected exact terminal stdout:

```json
{
  "commandStatus": "COMPLETED",
  "mode": "reconstruct",
  "decision": "ACCEPT",
  "schemaVersion": 8
}
```

Required v8 top-level entries after reconstruction:

```text
accepted-harness-source
baseline
browser
candidate
diagnostic
experiment-policy.json
playwright-core-identity.json
reconstruction.json
runtime-identity.json
source-v4-browser
source-v7-diagnostic
terminal-v7-lock.json
workspace-integrity-before.json
```

`source-v7-diagnostic` contains exactly the nine authenticated reference
files above and no stage evidence. `diagnostic` is an exact empty regular
directory at reconstruction completion. No active v8 source exists yet.

Task 3 RED tests take an explicit
`--source-root ..\source-v7-diagnostic` (and native
`-ControllerPath ..\source-v7-diagnostic\run-canonicalization-diagnostic.ps1`)
so the RED runs against complete, importable, authenticated v7 source rather
than absent v8 files. Missing imports, syntax errors, or source-read failures
remain invalid RED.

`diagnostic/preflight`, `diagnostic/isolation`, `diagnostic/.profiles`,
browser run-started, Lighthouse, and release paths must be absent.

Recompute every copied manifest and fixed record. Prove zero process, profile,
listener, or Git residue. Write `task-2-report.md` in the exact control root
and stop for a fresh independent reconstruction review.

---

### Task 3: Build the v8 probe harness under TDD

**Create or adapt only under `v8\diagnostic`:**

```text
operation-isolation-fixture.mjs
operation-isolation-cell.mjs
run-operation-isolation.ps1
finalize-operation-isolation.mjs
diagnostic-evidence-seal-preflight.mjs
diagnostic-evidence-seal-isolation.mjs
operation-isolation-contract.test.mjs
controller-json-serialization-contract.tests.ps1
seal-adaptation-preflight.json
seal-adaptation-isolation.json
```

**Create in the exact control root:**

```text
task-4-preflight-once.mjs
task-5-isolation-once.mjs
```

Do not modify the copied five immutable trees, `source-v7-diagnostic`, v7, or
any deployable path.

#### Action checklist and exact test commands

- [ ] From the v8 `diagnostic` directory, create the two contract test files
  before active implementation. Also create the two exact syntactically valid
  noncompliant operator stubs below in the control root before RED:

  `task-4-preflight-once.mjs`

  ```javascript
  export const OPERATOR_STUB = Object.freeze({
    schema: 'efficient-technologies/poster-picture-layer-v8-task-4-operator-stub-v1',
    task: 'preflight',
    childStarts: 0,
  });
  ```

  `task-5-isolation-once.mjs`

  ```javascript
  export const OPERATOR_STUB = Object.freeze({
    schema: 'efficient-technologies/poster-picture-layer-v8-task-5-operator-stub-v1',
    task: 'isolation',
    childStarts: 0,
  });
  ```

  These stubs contain no process start, loop, retry, import, filesystem read,
  or top-level side effect. They exist only so contract cases 15 and 18 can
  read and parse real active operator paths during RED.
- [ ] Run JavaScript RED:
  `& 'C:\Program Files\nodejs\node.exe' '.\operation-isolation-contract.test.mjs' --source-root '..\source-v7-diagnostic' --output 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\task-3-js-red.json'`.
- [ ] Run native RED:
  `powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File '.\controller-json-serialization-contract.tests.ps1' -ControllerPath '..\source-v7-diagnostic\run-canonicalization-diagnostic.ps1' -OutputPath 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\task-3-native-red.json'`.
- [ ] Require both operator stubs to pass `node --check`. Require both RED
  outputs to fail only named contract assertions. In particular, JavaScript
  cases 15 and 18 must read and parse the stubs successfully and fail because
  each has zero controller/finalizer child starts and lacks the required
  commands, working directories, deadlines, and exclusive records. A missing
  file, read/import/syntax/runtime error, or unintended top-level effect is
  invalid RED.
- [ ] Implement only after both RED outputs are valid.
- [ ] Run JavaScript GREEN twice:
  `& 'C:\Program Files\nodejs\node.exe' '.\operation-isolation-contract.test.mjs' --source-root '.' --output 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\task-3-js-green-1.json'`
  and
  `& 'C:\Program Files\nodejs\node.exe' '.\operation-isolation-contract.test.mjs' --source-root '.' --output 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\task-3-js-green-2.json'`.
- [ ] Run native GREEN twice:
  `powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File '.\controller-json-serialization-contract.tests.ps1' -ControllerPath '.\run-operation-isolation.ps1' -OutputPath 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\task-3-native-green-1.json'`
  and
  `powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File '.\controller-json-serialization-contract.tests.ps1' -ControllerPath '.\run-operation-isolation.ps1' -OutputPath 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\task-3-native-green-2.json'`.
- [ ] Run exact syntax checks:

  ```powershell
  & 'C:\Program Files\nodejs\node.exe' --check '.\operation-isolation-fixture.mjs'
  & 'C:\Program Files\nodejs\node.exe' --check '.\operation-isolation-cell.mjs'
  & 'C:\Program Files\nodejs\node.exe' --check '.\finalize-operation-isolation.mjs'
  & 'C:\Program Files\nodejs\node.exe' --check '.\diagnostic-evidence-seal-preflight.mjs'
  & 'C:\Program Files\nodejs\node.exe' --check '.\diagnostic-evidence-seal-isolation.mjs'
  & 'C:\Program Files\nodejs\node.exe' --check '.\operation-isolation-contract.test.mjs'
  & 'C:\Program Files\nodejs\node.exe' --check 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\task-4-preflight-once.mjs'
  & 'C:\Program Files\nodejs\node.exe' --check 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control\task-5-isolation-once.mjs'
  ```

- [ ] Parse both PowerShell files and require zero errors:

  ```powershell
  $tokens = $null
  $errors = $null
  [void][System.Management.Automation.Language.Parser]::ParseFile(
    (Resolve-Path '.\run-operation-isolation.ps1'),
    [ref]$tokens,
    [ref]$errors)
  if (@($errors).Count -ne 0) { throw 'controller parse errors' }
  $tokens = $null
  $errors = $null
  [void][System.Management.Automation.Language.Parser]::ParseFile(
    (Resolve-Path '.\controller-json-serialization-contract.tests.ps1'),
    [ref]$tokens,
    [ref]$errors)
  if (@($errors).Count -ne 0) { throw 'native contract parse errors' }
  ```
- [ ] Recompute immutable, runtime, causal-source, residue, and Git
  boundaries.
- [ ] Stop for independent review; do not run a stage.

#### Offline RED

Write tests first. The JavaScript contract uses these ordered cases:

1. stages are exactly `preflight` and `isolation`;
2. isolation cell order is exactly the five design cells;
3. JavaScript modes are exact;
4. operation and parent deadlines are exact and arithmetically coherent;
5. expected outcomes exit zero and mismatches exit two;
6. process results are always top-level arrays through the shared writer;
7. disabled add-style calls exact `page.addStyleTag` with canonical CSS;
8. enabled add-style is a byte-identical control operation;
9. disabled evaluation entry is synchronous with exact entry token;
10. collection probe has exact schema/type checks and no raw-state digest;
11. collection and full probes contain no Promise/timer/frame/event wait;
12. full probe uses one synchronous evaluation;
13. full probe preserves exact stylesheet, mutations, schema, object order,
    v7 passing-state equality, and digest;
14. every cell and finalizer checks `playwright-core` at the exact required
    points and the causal-source record has the exact rows/order;
15. preflight uses exact ID/sentinel/journal and returns before profile or
    Chrome creation; the Task 4 operator statically has exactly one controller
    child start and one finalizer-verify child start, no loop or retry, the
    exact commands, working directories, and deadlines from this plan, and
    separate exclusive prelaunch and terminal evidence records;
16. launch and fixture contracts are exact: `412x823`, scale `1`, dark mode,
    blocked service workers, no permissions/downloads, explicit JavaScript
    mode, route installed before fixture, inline `setContent`, no navigation,
    no site server, and no HTTP(S) request;
17. cell-result and phase schemas, field order, operation sequences, cleanup,
    and exact-owned profile removal are enforced; and
18. the finalizer enforces each exact inventory before invoking or verifying
    the stage-specific sealer, rejects both a missing path and an additional
    unlocked file, reauthenticates the causal source in read-only verify, and
    returns only exact `ACCEPT`, `CONFIRMED`, `FALSIFIED`, or `INCONCLUSIVE`;
    the Task 5 operator statically has exactly one controller child start and
    one finalizer-verify child start, no loop or retry, the exact commands,
    working directories, and deadlines from this plan, and separate exclusive
    prelaunch and terminal evidence records.

The contract must include explicit completed-mismatch and infrastructure
fixtures:

- a complete, canonical result/stdout/journal with actual outcome differing
  from expected, cell exit `2`, empty stderr, `validationErrors: []`, and
  process-row `pass: true` is transport-valid and classifies the matrix
  `FALSIFIED`;
- identity, launch, fixture, parent-deadline, close, cleanup, missing-result,
  noncanonical JSON, stream disagreement, or process-row validation failure
  classifies `INCONCLUSIVE`, never `FALSIFIED`.

Process-row `pass` means transport/evidence validity, not agreement with the
expected causal outcome.

Top-level controller exits are exact:

```text
preflight ACCEPT / true: 0
isolation CONFIRMED / true: 0
isolation FALSIFIED / false: 2
isolation INCONCLUSIVE / false: 2
uncaught controller/finalizer error before a terminal matrix: 1
```

Run the RED contract with
`--source-root ..\source-v7-diagnostic`; run the native RED with
`-ControllerPath ..\source-v7-diagnostic\run-canonicalization-diagnostic.ps1`.
Preserve a valid RED where only the expected v8 operation/stage/namespace
behavior fails. Import, syntax, fixture, output, or runtime errors are invalid
RED.

The native PowerShell suite must extract the actual shared JSON writer and
prove:

1. singleton `Object[]` remains an array of length one;
2. five `Object[]` rows remain an ordered array of length five;
3. cleanup remains an object;
4. all process-result paths use the shared writer;
5. the writer uses `ConvertTo-Json -InputObject`;
6. the writer does not pipeline-enumerate `$Value`;
7. stages are exactly preflight/isolation; and
8. v8 namespace is exclusive.

#### Minimal implementation

Use v8 namespaces only. Do not retain standalone v7 diagnostic semantics in
active v8 files.

The preflight branch:

- authenticates runtime, fixture, controller, and causal-source identities;
- writes an exact four-field v8 sentinel;
- journals exact `START` then `END`;
- returns before profile creation and Chrome launch.

The isolation branch launches the five cells sequentially. Each cell uses a
fresh profile, exact runtime, exact fixture, exact JavaScript mode, and exact
operation. Each expected result exits zero; mismatch and infrastructure
semantics follow the design.

The persistent-context options are exact:

```text
executablePath: recorded Chrome
headless: true
viewport: { width: 412, height: 823 }
javaScriptEnabled: exact cell value
deviceScaleFactor: 1
colorScheme: dark
acceptDownloads: false
serviceWorkers: block
permissions: []
args: ["--disable-background-networking"]
```

Install `context.route('**/*', ...)` before creating/installing the fixture.
Abort and record every HTTP(S) request; continue only non-network schemes.
Create a page that remains `about:blank` and install the exact inline fixture
with `page.setContent(..., {waitUntil:'domcontentloaded'})`. Do not call
`goto`, start a server, or navigate to baseline/candidate/product content.

The full synchronous probe must append the byte-identical canonical style and
perform all existing mutations and state reads inside one synchronous
`page.evaluate`. It is diagnostic code only; do not copy it over a helper.

Do not retype the fixture, schema, validator, or canonical stylesheet:

- import `FIXTURE_HTML`, `CANONICAL_TOP_LEVEL_KEYS`, and
  `validateCanonicalState` from
  `..\source-v7-diagnostic\canonicalization-fixture.mjs`;
- import `CANONICAL_CAPTURE_STYLE` from
  `..\source-v7-diagnostic\source\capture-stabilizer-proposed.mjs`; and
- authenticate both reference files before every cell.

Adapt two stage-specific sealers deterministically from:

```text
source-v4-browser/evidence-seal.mjs
12315 / 47d7b29de007489f4a1b7a6bdd3077f6bd7984e64b134d67bfabf46754e79c8a
```

Each adaptation has these exact ordered replacement counts:

```text
1, 1, 1, 3, 2, 2
```

The replacement pairs are:

1. `browser-evidence-lock.json` ->
   `diagnostic-evidence-lock.json` (`1`);
2. the exact v4 `const REQUIRED_PATHS = [...]` declaration -> the exact
   preflight eight-path declaration or exact isolation twenty-four-path
   declaration from this plan (`1`);
3. v4 browser-lock schema -> the fixed v8 operation-isolation lock schema
   (`1`);
4. `browser evidence root` -> `diagnostic evidence root` (`3`);
5. `node evidence-seal.mjs` -> the exact stage-specific sealer filename
   (`2`);
6. `absolute-browser-root` -> `absolute-diagnostic-root` (`2`).

Write one adaptation record per sealer with source/adapted bytes/hashes and
all six exact pairs/counts. In-memory replay must equal each adapted file
byte-for-byte. The finalizer selects the preflight sealer only for a
`preflight` root and the isolation sealer only for an `isolation` root; any
other leaf is rejected.

#### Offline GREEN

Require twice, byte-identical:

```text
operation isolation contract: 18/18
native serialization contract: 8/8
```

Also require:

- `node --check` for every active `.mjs`;
- PowerShell parser zero errors for controller and native suite;
- exact sealer replay;
- exact active-v8 namespace and no repair stage;
- all immutable/predecessor/runtime/causal-source identities unchanged;
- preflight/isolation/release paths absent;
- zero profiles, relevant processes, and listeners on `4381/4382/4383`;
- tracked Git clean, empty diff, diff-check pass, no index lock.

Write `task-3-report.md` in the exact control root and stop for independent
code/evidence review. No real stage may run until that review returns
`COMPLIANT`; the user's existing standing authorization applies, so no new
user approval prompt is required.

---

### Task 4: Run the browser-free v8 preflight once

Precondition: Task 3 review `COMPLIANT`, zero findings, and the user's existing
standing authorization.

#### Action checklist

- [ ] Reauthenticate every precondition and absent later path.
- [ ] Run
  `& 'C:\Program Files\nodejs\node.exe' '.\task-4-preflight-once.mjs'`
  once from the control root.
- [ ] Observe the original PID to terminal state; never retry.
- [ ] Confirm the operator ran its sole read-only finalizer-verify child.
- [ ] Verify the exact eight-file seal, snapshots, residue, and boundaries.
- [ ] Write the report and stop for independent review.

Immediately reauthenticate:

- design/plan commits and bytes;
- Git and index lock;
- v5/v6/v7 terminal locks;
- all immutable trees and fixed records;
- runtime and separate `playwright-core` identity;
- absent preflight/isolation/release paths;
- zero owned process/profile/port residue.

Persist the full before Chrome/Edge snapshot in the exclusive
`task-4-prelaunch.json` in the exact control root. From the exact control-root
working directory, invoke the durable operator once:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\task-4-preflight-once.mjs'
```

That operator launches the exact absolute controller command and v8-root
working directory fixed in the operator-interface section. Do not invoke the
controller directly.

The durable control-root operator uses:

```text
controller wait: 300000 ms
controller stage budget: 240000 ms
independent finalizer wait: 60000 ms
total operator budget: 420000 ms
```

Require:

- exit `0`;
- terminal decision `ACCEPT`, pass true;
- exact v8 sentinel and `chromeLaunched: false`;
- top-level one-element process array;
- one normal exit-zero child with empty stderr and validation errors;
- exact two-record journal;
- exact eight-file preflight inventory plus the final lock;
- exact passing causal-source verification record;
- no profiles or process-registration residue;
- empty cleanup/residue arrays; and
- accepted evidence seal.

The same durable Task 4 operator persists the after snapshot and diff, then
starts exactly one independent, read-only finalizer-verify child with the v8
root as working directory:

```powershell
& 'C:\Program Files\nodejs\node.exe' `
  'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8\diagnostic\finalize-operation-isolation.mjs' verify `
  --root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8\diagnostic\preflight'
```

The displayed command is the sole verify child run internally by
`task-4-preflight-once.mjs`. The caller must not invoke it before, during, or
after the operator.

Write `task-4-operator-evidence.json` and `task-4-report.md` in the exact
control root. Stop for fresh review. Isolation remains forbidden until
that review returns `COMPLIANT`; no new user approval prompt is required.

---

### Task 5: Run the five-cell isolation stage once

Precondition: terminal preflight independently `COMPLIANT` and exact
`ACCEPT`.

#### Action checklist

- [ ] Reauthenticate the sealed preflight and every fixed boundary.
- [ ] Run
  `& 'C:\Program Files\nodejs\node.exe' '.\task-5-isolation-once.mjs'`
  once from the control root.
- [ ] Observe the original PID to terminal state; never retry.
- [ ] Confirm the operator ran its sole read-only finalizer-verify child.
- [ ] Recompute all twenty-four locked files, matrix, states, snapshots,
  cleanup, and causal-source identities.
- [ ] Write the terminal report and stop for independent review.

Reauthenticate all fixed boundaries and persist a before Chrome/Edge snapshot.
Write it to exclusive `task-5-prelaunch.json`. From the exact control-root
working directory, invoke the guarded one-start/no-loop/no-retry operator
once:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\task-5-isolation-once.mjs'
```

That operator launches the exact absolute controller command and v8-root
working directory fixed in the operator-interface section. Do not invoke the
controller directly.

The durable control-root operator uses:

```text
controller wait: 1060000 ms
controller stage budget: 1000000 ms
independent finalizer wait: 60000 ms
total operator budget: 1180000 ms
```

The wrapper writes its prelaunch ACCEPT record and full browser snapshot
before the sole process start. If its caller/UI wait expires while the
original PID is alive, observe that PID to terminal state; never issue another
controller command.

The only accepting matrix is:

```text
add-style-disabled: TIMEOUT
add-style-enabled: PASS
evaluate-entry-disabled: PASS
collection-disabled: PASS
synchronous-full-disabled: PASS
decision: CONFIRMED
pass: true
```

Require:

- exact entry token;
- complete collection capability/schema/type result with no raw digest;
- exact full canonical state equal to both v7 passing states;
- exact full-state digest
  `b8634b4f899eee08ce6d1c14c57c11657214372a9f2eb53107282af5eb43ac67`;
- five ordered exit-zero, passing process rows;
- exact twenty-four-file isolation inventory plus the final lock;
- exact passing causal-source verification record;
- exact phase journals and deadlines;
- empty stderr and HTTP(S) arrays;
- exact runtime, fixture, style, and `playwright-core` identities;
- clean context/profile/controller cleanup; and
- accepted terminal evidence seal.

Any other matrix is terminal and cannot be retried.

After the controller exits, the same durable Task 5 operator persists the full
browser snapshot and diff, then starts exactly one read-only finalizer-verify
child with the v8 root as working directory:

```powershell
& 'C:\Program Files\nodejs\node.exe' `
  'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8\diagnostic\finalize-operation-isolation.mjs' verify `
  --root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8\diagnostic\isolation'
```

The displayed command is the sole verify child run internally by
`task-5-isolation-once.mjs`. The caller must not invoke it before, during, or
after the operator.

Independently recompute the lock/matrix/results/state digest and prove zero
residue and unchanged product/Git boundaries.

Write `task-5-operator-evidence.json` and `task-5-report.md` in the exact
control root. Stop for fresh independent review.

---

### Task 6: Close v8 and route the result

#### Action checklist

- [ ] Independently read every sealed file and recompute the lock.
- [ ] Classify evidence and causal result without running a command.
- [ ] Mark v8 terminal and immutable.
- [ ] If exact `CONFIRMED`, write a separate v9 design only.
- [ ] If `FALSIFIED` or `INCONCLUSIVE`, stop before any helper edit.

The reviewer must classify:

- evidence integrity;
- exact operation outcome for every cell;
- whether `addStyleTag` alone is the blocking primitive;
- whether synchronous evaluation entry and collection work;
- whether the full synchronous primitive preserves exact canonical state;
- cleanup, runtime, causal-source, predecessor, immutable, and Git
  boundaries; and
- any critical, important, or minor finding.

If and only if v8 is sealed `CONFIRMED` and review is `COMPLIANT`, close v8 as
a successful diagnostic and write a separate v9 qualification design for the
smallest helper correction. Do not implement that correction in v8.

If v8 is `FALSIFIED` or `INCONCLUSIVE`, close v8 terminal and stop before any
helper or product change. The report must identify the last proven safe
boundary and the exact evidence that invalidated the hypothesis.

## Verification before completion

No task may claim completion from a report alone. Before each completion
claim, freshly read:

- current Git branch/HEAD/status/diff/index lock;
- relevant stage inventory, matrix, lock, and recomputed hashes;
- process-result top-level shape and ordered rows;
- cleanup, profiles, processes, ports, and browser snapshots;
- immutable/predecessor/runtime/causal-source identities; and
- absence of every unauthorized later path.

The final v8 statement must explicitly say that no UI, video, scroll, scene,
zoom, motion, animation, release, publication, deployment, or live-site
change occurred.
