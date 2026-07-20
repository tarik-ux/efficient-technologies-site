# Self-Contained Monotonic-Evidence Capture Isolation V11 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use
> `superpowers:subagent-driven-development` (recommended) or
> `superpowers:executing-plans` to implement this plan task-by-task. Steps use
> checkbox (`- [ ]`) syntax for tracking.

**Goal:** Materialize V10's accepted Task 1 evidence into a fresh,
self-contained V11 control root, seal a create-only monotonic attempt protocol,
then run the unchanged five-cell operation-isolation experiment exactly once
if every preceding gate accepts.

**Architecture:** Task 1 performs a one-shot authenticated import, derives the
V11-native core, and seals the attempt writer. Tasks 2 and 3 use separate
editable candidate namespaces, immutable numbered attempt directories,
finding-free candidate reviews, exclusive sealed copies, and independent seal
reviews. Tasks 4 through 8 are one-shot: reconstruct, install, preflight, run
the fixed matrix, and terminalize without modifying earlier evidence.

**Tech Stack:** Static repository; Windows PowerShell `5.1`; Node.js
`v24.11.1`; ECMAScript modules; fixed Playwright
`1.62.0-alpha-1783623505000`; fixed Chrome `150.0.7871.115`; no package
install and no build step.

## Global Constraints

- V8, V9, and V10 are terminal predecessor evidence. Never repair, retry,
  relabel, or mutate them.
- V10 remains stopped after its Task 2 immutable-evidence breach. V10 Task 2
  never became reviewable or sealable, and every later V10 task remains
  unauthorized.
- Never mutate V5 through V10, publish-site product bytes, or the live website.
- Never change UI, video, scrolling, scenes, zooms, motion, transitions,
  triggers, durations, easings, or animations.
- Never create
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v11`.
- Before Task 1, the V11 control, result, and release roots must all be absent.
- Task 1 may create the control root once. Only Task 4 may create the result
  root. Only Task 5 may populate its initially empty `diagnostic` directory.
- A failed or partial V11 control or result root is preserved. Never delete and
  recreate it.
- Only Tasks 1, 2, and 3 own editable `candidate/task-N` namespaces. Each
  namespace freezes permanently when its accepted candidate review is created.
- Every file below `imports`, `attempts`, `journal`, `locks`, `reviews`,
  `sealed`, `streams`, `terminal`, and the result root is created exclusively
  and never replaced, renamed, moved, or deleted.
- Candidate test programs emit one bounded JSON object on stdout and diagnostics
  on stderr. They never receive an evidence output path.
- Every candidate execution goes through the current authorized V11 attempt
  runner and receives the exact next six-digit attempt number.
- Candidate failures may proceed only through a new attempt. Evidence failures
  stop V11.
- `result.json` and `abandoned.json` are mutually exclusive. An interrupted
  candidate attempt may be abandoned only after exact writer and child absence
  is independently proven. One-shot or post-seal attempts cannot be retried.
- The publish checkout remains clean at the execution HEAD created by the
  commit containing this plan.
- No implementation task commits, pushes, publishes, deploys, or edits a
  tracked file. Task locks replace implementation commits because all
  implementation artifacts intentionally live outside Git.
- Never install or update a dependency, run Lighthouse, start a site server,
  navigate to product content, or make an HTTP(S) request.
- All operational child processes are hidden, registered by `processId` plus
  `creationTimeUtc`, deadline-bounded, and cleaned only after exact ownership
  revalidation.
- Unrelated global activity is sealed for audit, never killed, and never used
  as a qualification failure.
- Ambiguous V11-relevant activity is never killed and produces
  `INCONCLUSIVE`.
- Fixed ports `4381`, `4382`, and `4383` are exclusive V11 resources. A
  listener on any one rejects the relevant gate regardless of ownership.
- Tasks 4 through 7 are one-shot and have no retry, replacement, best-run
  selection, or deadline adjustment.
- A client wait expiry never authorizes another command. Observe the original
  durable operator PID and creation time to terminal state.
- Every completion claim uses fresh disk readback rather than a producer
  boolean or report.

---

## Fixed Authority

Approved design:

```text
path:
docs/superpowers/specs/2026-07-20-self-contained-monotonic-evidence-v11-design.md

commit:
d24d760a84de74988fe83913c6ebf371bb358e60

bytes / sha256:
41050 / ceb1f8a6789090831d1e30c30687c8f12cc1877d4c3332d09a483f21b63860a9
```

Implementation plan:

```text
docs/superpowers/plans/2026-07-20-self-contained-monotonic-evidence-v11.md
```

The execution HEAD is discovered after this plan is committed. It must equal
both `git rev-parse HEAD` and the last commit touching this plan:

```powershell
$repo = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site'
$plan = 'docs/superpowers/plans/2026-07-20-self-contained-monotonic-evidence-v11.md'
$executionHead = (git -C $repo rev-parse HEAD).Trim()
$planCommit = (git -C $repo log -1 --format=%H -- $plan).Trim()
if ($executionHead -ne $planCommit) {
  throw 'committed V11 plan is not execution HEAD'
}
```

Git authority:

```text
branch:
agent/performance-without-motion-loss

upstream:
b416b8113315c95c32d4674aa54769d90c562abd

remote:
https://github.com/tarik-ux/efficient-technologies-site.git
```

Roots:

```text
repository:
C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site

terminal V8 result:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8

terminal V8 control:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control

terminal V9 control:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control

terminal V10 control:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control

absent V10 result:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v10

absent V10 release:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v10

fresh V11 control:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v11-control

fresh V11 result:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v11

forbidden V11 release:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v11
```

Terminal V10 authority:

```text
complete control tree:
91 / 7b734dc536ea62e92ba12a4cfddc7e7d57a5e82a01a28fe8bde6a5d15b2b4ded

accepted Task 1 set:
23 / c0a410b460b5ef9d3a0645c41c527263d3fa5d7b9fb1dddf0c8fe8a26d77ac56

terminal Task 2 reference set:
5 / beb180a2cbe3970d551776c374f8ccf3cc2ed2fea4ed581a91e1e84801d10955

breach report:
3080 / cb3a2e25e5ba9293bdd9dcc78a058ee1304f02b927d93479fd5c92313b7e04c4
```

Exact accepted Task 1 import map:

| Relative path | Bytes | SHA-256 |
|---|---:|---|
| `journal/000001-task-1-boundary.json` | 2,380 | `5dc7a67ffe33366e7e6cf3a5d01bd4e46bfbc923580574dc5ceb6cdb3ea1db8f` |
| `journal/000002-task-1-contract-sealed.json` | 3,985 | `fc790d47efaf26aac81e1654597d131650b4a9c03567c77de15a2b5d5fedad59` |
| `journal/000003-task-1-review-accepted.json` | 1,159 | `37b1352e40160d4bb06cf1f25724332e29fafa59ea05a611507cd5f692934159` |
| `locks/task-1-authorization-lock.json` | 1,616 | `74a0085fdd1a1abf4796a3119acb90ca3dc259c9d5f3512204bb3a6356fee7b1` |
| `locks/task-1-contract-lock.json` | 25,807 | `ea0555a00bb757d76a96575b153c7b29b671739cfbc3ed42d0091d92595c92ee` |
| `reviews/task-1-candidate-review-1.json` | 6,966 | `9faba3cff80b4cf525c7e897b585796d670bae4ce0bfa50d3e8465392b6c4f60` |
| `reviews/task-1-candidate-review-2.json` | 9,887 | `2abcfab487ca8af94350ba755c64e4ee6243c5e5212569b2bcf02c85939b13c0` |
| `reviews/task-1-candidate-review-3.json` | 12,093 | `a32e5f401d19c9b6886f61f1210d12e6d45a221a5d5599ad87ca56e5aa0cb59c` |
| `reviews/task-1-candidate-review-4.json` | 14,100 | `5ebbdc2ea847bd8338569aeead327df023ebdc707876f70abc58a27fe4dd5fab` |
| `reviews/task-1-candidate-review-5.json` | 16,122 | `9c9669b5647b1e3eb4fd79ca0dd5fc8fa3ef3dc92122a7c860e319525a91ce0d` |
| `reviews/task-1-candidate-review-6.json` | 18,105 | `2c0cefa7eb14a91ea042abe1f4b5fe886bfedf2db682c19b9f336d5edb6b8085` |
| `reviews/task-1-candidate-review-7.json` | 19,565 | `29022fd2e13141f497710536d9302e4b7381950e30429a9c51bedad89f25d7e0` |
| `reviews/task-1-candidate-review-8.json` | 19,814 | `f105bf4ef1042e6c4171abe5634f5082fad49854fd9a14988343b870c488c6f4` |
| `reviews/task-1-seal-review.json` | 815 | `4b7a23464133197b327ccff5bd1538608d6833267c3a6f8de1ef9a9c531f1218` |
| `sealed/immutable-journal-v10.mjs` | 16,538 | `f1be9be78e88099cd10b40f1f07f0cca7b395e58d818bf653f75bb082971cb60` |
| `sealed/process-ownership-v10.mjs` | 13,611 | `d65d89d67991a7e9b6b89bf3d2d726b946a80cd8f52e55db7ef69bbee83ab0cd` |
| `sealed/semantic-map-v10.mjs` | 4,798 | `789b679b53ee9f32e2d7b08615a873fcf4a3aaf4a56e32dff81c74b067d28a61` |
| `sealed/task-1-tests/immutable-journal-v10.test.mjs` | 28,507 | `7d79b593d08bc4767691de3d96c74302ac234f3c50c6e14f6641e8b8510a86f4` |
| `sealed/task-1-tests/process-ownership-v10.test.mjs` | 32,876 | `ec608c742968e0d56791a08c1d43c64a7d3e7b2d7641c413859d05e9f844119a` |
| `sealed/task-1-tests/semantic-map-v10.test.mjs` | 9,324 | `6b9a05dca00df515133859c64eaed05ead2dd5083e6c5f30e4379d40829f0cbc` |
| `sealed/task-1-tests/task-1-negative-injections.mjs` | 11,745 | `edd719a3d148501b32718f1a0c55462d8027f724f31da9a11f8783b96a9b2721` |
| `sealed/task-1-tests/windows-command-line-v10.test.mjs` | 13,225 | `6b7955049bd2552373cf02f5d5264c367bde894619c89c8578dff9c61e581cb9` |
| `sealed/windows-command-line-v10.mjs` | 8,122 | `5154c8687a83dea8b5207cbe3a73f409d53bd14a40638553862a855916a07f6f` |

Exact terminal Task 2 reference map:

| Relative path | Bytes | SHA-256 |
|---|---:|---|
| `candidate/task-2/prepare-v10-core.mjs` | 39,437 | `62b2e68a99f54075e3f92096fe786b292af7cec880227bf818b63dc069a245f4` |
| `candidate/task-2/prepare-v10-core.test.mjs` | 8,764 | `c4473a3eb45fd87a80a2769cc9c60e2b857eeda29e107f3cb20dc34123b5209e` |
| `candidate/task-2/task-2-core-debug-green-attempt-1.json` | 3,170 | `41cb8d8f78d852c644eec301c4c99632ef337f4790e99dd86a6c3dcca8f2cbbf` |
| `candidate/task-2/task-2-core-green-attempt-1.json` | 2,551 | `1d9bbac2be170393f54fca2c5caa043c27def6698b71dba1dbaa7849c796f1a3` |
| `candidate/task-2/task-2-core-red-attempt-1.json` | 3,270 | `be8e5ff11ac6d2192f5b22c124aff41afe62d944db3bf766cf8b7d9278210363` |

Do not discover a new expected map from the live V10 root.

Immutable product trees:

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

source-v7-diagnostic:
9 / 5613ad53c84c6e2541baed9a90a2b6c11bf645ed6d3ef920b423a6b1d9753ba7
```

Fixed runtime:

```text
Node:
C:\Program Files\nodejs\node.exe
89894400 / f13ac3ca23248dc389507e8fe38c34489ab7edb3e6d6700eb6da6a0b7e128eaf
v24.11.1

Playwright:
C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules\playwright
62 / 0bb3f4dfcf56b0a28933cc231f1d4a1467dd3c3bf45fb5637146fc4a95e6645f
1.62.0-alpha-1783623505000

Chrome:
C:\Program Files\Google\Chrome\Application\chrome.exe
3936920 / 5718df5f35db255adb85cc8a8305645319f8513e4d8bf818741b8aa491003ce9
150.0.7871.115

Edge:
C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
4970824 / f13f03c60b48664b5ab5b294c32feb1ff2fd632f206ee6732d3ddffb919a8b57
150.0.4078.83

Playwright causal source:
C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules\playwright-core\lib\coreBundle.js
3407411 / be2e09efef3017b4eaa76f0cb5289f66c4ea57833f94319b17c1c2f184987ad7
last-write UTC ticks: 639192713587991449
```

---

## File and Responsibility Map

All implementation files live below:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v11-control
```

| Path | Single responsibility |
|---|---|
| `imports/v10-task-1/**` | Exact byte-for-byte materialization of the approved 23-file V10 Task 1 set. |
| `imports/v10-terminal/task-2-evidence-breach-report.md` | Exact committed terminal breach report. |
| `imports/v10-terminal/task-2-reference/**` | Exact five-file non-authoritative V10 Task 2 reference set. |
| `imports/v10-terminal/v10-root-snapshot.json` | Fixed 91-file V10 control-root identity. |
| `imports/v10-terminal/import-manifest.json` | Exact source/destination identities and authority labels. |
| `sealed/bootstrap/attempt-runner-v11.mjs` | Plan-authenticated bootstrap attempt runner used only until Task 1 seals the reviewed runner. |
| `candidate/task-1/derive-v11-core.mjs` | Deterministically derive V11-native core source/tests from imported V10 bytes. |
| `candidate/task-1/attempt-evidence-v11.mjs` | Candidate monotonic allocator, runner, validator, and abandonment verifier. |
| `candidate/task-1/attempt-evidence-v11.test.mjs` | Attempt allocation, collision, immutability, stream, and recovery cases. |
| `candidate/task-1/semantic-map-v11.mjs` | Derived candidate semantic JSON canonicalizer. |
| `candidate/task-1/semantic-map-v11.test.mjs` | Derived fourteen-case semantic suite using stdout transport. |
| `candidate/task-1/immutable-journal-v11.mjs` | Derived candidate V11 journal writer, validator, and projector. |
| `candidate/task-1/immutable-journal-v11.test.mjs` | Derived fifteen-case journal suite using stdout transport. |
| `candidate/task-1/windows-command-line-v11.mjs` | Derived strict Windows parser and exact V11 argument matcher. |
| `candidate/task-1/windows-command-line-v11.test.mjs` | Derived sixteen-case parser and matcher suite. |
| `candidate/task-1/process-ownership-v11.mjs` | Derived global audit and snapshot-scoped ownership classifier. |
| `candidate/task-1/process-ownership-v11.test.mjs` | Derived twenty-five-case ownership suite. |
| `candidate/task-1/task-1-negative-injections-v11.mjs` | Derived V9/V10 defect reproductions plus V11 attempt-path attacks. |
| `candidate/task-1/seal-task-1-v11.mjs` | Seal only accepted Task 1 candidate bytes and create Task 1 event/lock records. |
| `sealed/attempt-evidence-v11.mjs` | Frozen attempt protocol used by Tasks 2 and 3. |
| `sealed/semantic-map-v11.mjs` | Frozen semantic comparator. |
| `sealed/immutable-journal-v11.mjs` | Frozen V11 journal implementation. |
| `sealed/windows-command-line-v11.mjs` | Frozen exact argument matcher. |
| `sealed/process-ownership-v11.mjs` | Frozen three-channel ownership classifier. |
| `sealed/task-1-tests/**` | Frozen Task 1 tests and negative injections. |
| `candidate/task-2/prepare-v11-core.mjs` | Authenticate Git, V8/V9/V10, imports, runtime, trees, and Task 1 authority. |
| `candidate/task-2/prepare-v11-core.test.mjs` | Twenty-four source-authentication cases. |
| `candidate/task-2/prepare-v11.mjs` | Check, reconstruct, and authenticate V11 result state. |
| `candidate/task-2/prepare-v11.test.mjs` | Thirty reconstruction and terminalization cases. |
| `candidate/task-2/read-only-verify-v11.mjs` | Recompute task facts from disk without trusting producer booleans. |
| `candidate/task-2/task-4-reconstruct-v11-once.mjs` | Durable one-start reconstruction operator. |
| `candidate/task-2/task-5-install-diagnostic-v11-once.mjs` | One-start diagnostic installer without browser launch. |
| `candidate/task-2/operator-contract-v11.test.mjs` | Fourteen static one-start, evidence, deadline, and no-loop cases. |
| `candidate/task-2/seal-task-2-v11.mjs` | Seal accepted Task 2 bytes and create its lock/event. |
| `sealed/prepare-v11-core.mjs` | Frozen source authenticator. |
| `sealed/prepare-v11.mjs` | Frozen one-shot reconstruction implementation. |
| `sealed/read-only-verify-v11.mjs` | Frozen multi-mode verifier. |
| `sealed/task-4-reconstruct-v11-once.mjs` | Frozen reconstruction operator. |
| `sealed/task-5-install-diagnostic-v11-once.mjs` | Frozen installation operator. |
| `sealed/operator-contract-v11.test.mjs` | Frozen Task 2 operator tests. |
| `sealed/task-2-tests/**` | Frozen Task 2 functional tests. |
| `candidate/task-3/task-6-preflight-v11-once.mjs` | Durable one-start browser-free preflight operator. |
| `candidate/task-3/task-7-isolation-v11-once.mjs` | Durable one-start five-cell operator. |
| `candidate/task-3/staged-diagnostic/operation-isolation-cell.mjs` | Run exactly one preflight or matrix cell. |
| `candidate/task-3/staged-diagnostic/run-operation-isolation.ps1` | Run preflight or five ordered cells and serialize a top-level process array. |
| `candidate/task-3/staged-diagnostic/finalize-operation-isolation.mjs` | Validate, classify, seal, and invoke one read-only verifier. |
| `candidate/task-3/staged-diagnostic/evidence-seal-preflight.mjs` | Seal the exact preflight inventory. |
| `candidate/task-3/staged-diagnostic/evidence-seal-isolation.mjs` | Seal the exact isolation inventory. |
| `candidate/task-3/staged-diagnostic/operation-isolation-contract.test.mjs` | Twenty fixed diagnostic cases. |
| `candidate/task-3/staged-diagnostic/controller-json-serialization-contract.tests.ps1` | Eight native PowerShell serialization cases. |
| `candidate/task-3/staged-diagnostic/diagnostic-operator-contract-v11.test.mjs` | Ten static preflight/isolation one-start and no-retry cases. |
| `candidate/task-3/staged-diagnostic/offline-suite-v11.mjs` | Run the exact sealed offline suite and emit its normalized aggregate. |
| `candidate/task-3/staged-diagnostic/operational-files.json` | Exact five-file install manifest. |
| `candidate/task-3/seal-task-3-v11.mjs` | Seal accepted Task 3 sources, suite results, lock, and event. |
| `sealed/task-6-preflight-v11-once.mjs` | Frozen preflight operator. |
| `sealed/task-7-isolation-v11-once.mjs` | Frozen isolation operator. |
| `sealed/staged-diagnostic/**` | Frozen diagnostic sources, tests, and operational manifest. |
| `attempts/task-01/<phase>/<number>/**` | Immutable Task 1 intent, stream, result, or abandonment evidence. |
| `attempts/task-02/<phase>/<number>/**` | Immutable Task 2 attempt evidence. |
| `attempts/task-03/<phase>/<number>/**` | Immutable Task 3 attempt evidence. |
| `journal/*.json` | Immutable cross-task event chain; no mutable index. |
| `locks/*.json` | Exclusive import, source, authorization, result, and terminal locks. |
| `reviews/*.json` | Exclusive candidate and sealed independent review records. |
| `streams/*.stdout.json` | Compact operational child/verifier stdout. |
| `streams/*.stderr.txt` | Operational child/verifier stderr; expected empty on acceptance. |
| `terminal/task-8-terminal-review.json` | Final independently recomputed verdict. |
| `terminal/task-8-report.md` | Final user/product boundary statement. |

Candidate files never authorize a later task. Later tasks import only exact
paths below `sealed`, plus immutable `imports` and accepted locks.

---

## Shared Interfaces

Shared identity shapes:

```js
// FileIdentity
{
  path: 'absolute path',
  bytes: 0,
  sha256: 'lowercase 64-character SHA-256',
}

// TreeSnapshot
{
  root: 'absolute path',
  fileCount: 0,
  digest: 'lowercase 64-character SHA-256',
  rows: [
    {
      relativePath: 'forward/slash/path',
      bytes: 0,
      sha256: 'lowercase 64-character SHA-256',
    },
  ],
}

// ProcessIdentity
{
  processId: 12345,
  creationTimeUtc: '2026-07-20T12:34:56.789Z',
}
```

The numeric and timestamp values above are field-shape examples. Actual values
are freshly read. Timestamps use exact millisecond UTC
`YYYY-MM-DDTHH:mm:ss.sssZ`.

`attempt-evidence-v11.mjs` exports:

```text
canonicalJsonBytes(value: JsonValue) -> Buffer
fileIdentity(path: absolute path) -> FileIdentity
snapshotTree(root: absolute path) -> TreeSnapshot
validateAttemptSeries({
  seriesRoot: absolute path,
  taskId: 'task-01' | 'task-02' | 'task-03',
  phaseId: fixed non-empty lowercase-hyphen string
}) -> ValidatedAttemptSeries
runAttempt({
  seriesRoot: absolute path,
  taskId: fixed task ID,
  phaseId: fixed phase ID,
  purpose: non-empty string,
  expectedOutcome: 'PASS' | 'FAIL',
  sourceRoot: absolute path,
  authorityFile: absolute path,
  journalRoot: absolute path,
  deadlineMs: positive fixed integer,
  outputCapBytes: 4194304,
  cwd: absolute path,
  executable: absolute path,
  args: exact string[]
}) -> AttemptClosure
abandonCandidateAttempt({
  attemptRoot: absolute path,
  observerIdentity: ProcessIdentity,
  reason: 'writer-process-absent-after-interruption',
  processRows: ProcessRow[]
}) -> FileIdentity
```

`ValidatedAttemptSeries` is exact:

```js
{
  valid: true,
  taskId: 'task-02',
  phaseId: 'source-core',
  attemptCount: 1,
  attempts: [
    {
      attemptNumber: 1,
      directory: '000001',
      intent: { path: 'absolute path', bytes: 0, sha256: 'sha256' },
      stdout: { path: 'absolute path', bytes: 0, sha256: 'sha256' },
      stderr: { path: 'absolute path', bytes: 0, sha256: 'sha256' },
      closureKind: 'result',
      closure: { path: 'absolute path', bytes: 0, sha256: 'sha256' },
    },
  ],
  head: { path: 'absolute path', bytes: 0, sha256: 'sha256' },
  completeTree: { fileCount: 4, digest: 'sha256' },
  errors: [],
}
```

For an empty series, `attempts` is `[]`, `head` is `null`, and
`attemptCount` is `0`.

Every `intent.json` has exactly:

```text
schema
taskId
phaseId
attemptNumber
purpose
expectedOutcome
createdAtUtc
writerIdentity
writerNonce
command
sourceTree
authorityIdentity
journalHead
previousClosure
priorSeries
```

Every `result.json` has exactly:

```text
schema
intent
childIdentity
startedAtUtc
endedAtUtc
deadlineMs
timedOut
spawnError
exitCode
signal
stdout
stderr
parsedResult
sourceTreeAfter
authorityIdentityAfter
journalHeadAfter
priorSeriesReadback
expectedOutcomeSatisfied
controllerVerdict
```

Every `abandoned.json` has exactly:

```text
schema
intent
preservedStreams
writerAbsent
childAbsent
ambiguousRelevantProcesses
observerIdentity
reason
observedAtUtc
```

`semantic-map-v11.mjs` exports:

```text
canonicalizeSemanticJson(value: JsonValue) -> JsonValue
semanticJsonEquals(actual: JsonValue, expected: JsonValue) -> boolean
assertSemanticJsonEquals(
  actual: JsonValue,
  expected: JsonValue,
  label: non-empty string
) -> actual JsonValue or throws
```

`immutable-journal-v11.mjs` exports:

```text
canonicalEventBytes(event: EventRecord) -> Buffer
validateJournalDirectory({
  journalRoot: absolute path,
  eventDefinitions: EventDefinitionMap
}) -> ValidatedJournal
createJournalEvent({
  journalRoot: absolute path,
  eventDefinitions: EventDefinitionMap,
  eventId: registered string,
  task: positive integer,
  phase: registered string,
  status: registered status,
  observedAtUtc: millisecond UTC string,
  writerIdentity: ProcessIdentity,
  facts: exact plain object
}) -> FileIdentity
projectJournalStatus({
  journalRoot: absolute path,
  eventDefinitions: EventDefinitionMap
}) -> JournalProjection
```

`windows-command-line-v11.mjs` exports:

```text
tokenizeWindowsCommandLine(raw: string) -> string[] or throws
normalizeWindowsPathArgument(value: string) -> lowercase absolute Windows path
classifyCommandOwnership({
  commandLine: string | null,
  exactScriptPaths: absolute path[],
  runId: UUID string,
  profileRoots: absolute path[],
  exclusiveFragments: string[]
}) -> {
  classification: 'owned' | 'unrelated' | 'ambiguous',
  reasons: string[],
  argv: string[] | null,
  parseError: string | null
}
```

`process-ownership-v11.mjs` exports:

```text
processIdentityKey(row: ProcessRow) -> string
diffGlobalActivity({
  before: ProcessRow[],
  after: ProcessRow[]
}) -> GlobalActivity
classifyProcessOwnership({
  snapshots: ProcessSnapshot[],
  registeredIdentities: ProcessRow[],
  exactScriptPaths: absolute path[],
  runId: UUID string,
  profileRoots: absolute path[],
  exclusiveFragments: string[]
}) -> OwnershipResult
assertFixedPortsAbsent(
  listeners: ListenerRow[],
  fixedPorts: number[]
) -> true or throws
```

`prepare-v11-core.mjs` exports:

```text
authenticatePredecessorState(boundaries: BoundaryInput) -> Authentication
authenticateGitBoundary(repo: absolute path, expected: GitBoundary) -> GitFacts
authenticateRuntime(v8Root: absolute path) -> RuntimeFacts
authenticateImmutableInputs(v8Root: absolute path) -> ImmutableFacts
authenticateV10Import(controlRoot: absolute path) -> V10ImportFacts
snapshotTree(root: absolute path) -> TreeSnapshot
```

`prepare-v11.mjs` exports:

```text
validateReconstructedStateFacts({
  actual: ReconstructedFacts,
  expected: ReconstructedFacts
}) -> AcceptedReconstruction or throws
authenticateReconstructedState({
  root: absolute path,
  releaseRoot: absolute path,
  authentication: Authentication
}) -> AcceptedReconstruction or throws
buildExpectedV11Records(
  authentication: Authentication
) -> ExpectedV11Records
```

Its exact CLI modes are:

```text
check
reconstruct
authenticate-reconstructed-state
```

`read-only-verify-v11.mjs` exact modes are:

```text
implementation
reconstruction
installation
preflight
isolation
terminal
```

Every verifier mode writes no file below the control or result root and emits
one compact JSON stdout record plus empty stderr.

---

## Immutable Event Registry

The allowed V11 journal sequence is fixed:

| Sequence | Event ID | Task | Phase | Allowed status | Exact facts keys |
|---:|---|---:|---|---|---|
| 1 | `task-1-boundary` | 1 | `boundary` | `START` | `boundaryRecord`, `designIdentity`, `planIdentity`, `gitHead`, `v10ControlIdentity`, `v11RootsAbsent` |
| 2 | `task-1-import-materialized` | 1 | `import` | `ACCEPT` | `acceptedImportManifest`, `terminalReferenceManifest`, `v10RootSnapshot`, `breachReportIdentity`, `bootstrapRunnerLock` |
| 3 | `task-1-core-sealed` | 1 | `seal` | `ACCEPT` | `candidateReview`, `sealedAggregate`, `contractLockPath` |
| 4 | `task-1-review-accepted` | 1 | `review` | `ACCEPT` | `contractLock`, `sealReview`, `task2Authorized` |
| 5 | `task-2-controller-sealed` | 2 | `controller` | `ACCEPT` | `candidateReview`, `contractLock`, `sealReview`, `task3Authorized` |
| 6 | `task-3-offline-suite-accepted` | 3 | `offline-suite` | `ACCEPT` | `candidateReview`, `contractLock`, `sealReview`, `offlineGreen1`, `offlineGreen2`, `task4Authorized` |
| 7 | `task-4-reconstruction-terminal` | 4 | `reconstruction` | `ACCEPT` or `REJECT` | `prelaunch`, `operatorEvidence`, `review`, `decision`, `task5Authorized` |
| 8 | `task-5-installation-terminal` | 5 | `installation` | `ACCEPT` or `REJECT` | `prelaunch`, `operatorEvidence`, `review`, `decision`, `task6Authorized` |
| 9 | `task-6-preflight-terminal` | 6 | `preflight` | `ACCEPT`, `REJECT`, or `INCONCLUSIVE` | `prelaunch`, `operatorEvidence`, `review`, `decision`, `task7Authorized` |
| 10 | `task-7-isolation-terminal` | 7 | `isolation` | `CONFIRMED`, `FALSIFIED`, or `INCONCLUSIVE` | `prelaunch`, `operatorEvidence`, `review`, `decision`, `task8Authorized` |
| 11 | `task-8-review-terminal` | 8 | `terminal-review` | `ACCEPT` or `REJECT` | `terminalReview`, `evidenceVerdict`, `diagnosticDecision`, `retryAuthorized`, `nextDesignAuthorized` |

Events 1 and 2 are created by the one-shot bootstrap only after complete import
readback. `boundaryRecord` preserves the before-root observation. Event 3
records the future Task 1 contract-lock path while that path is absent; the
same sealer then creates the lock, avoiding a hash cycle. Event 4 records the
resulting lock identity.

Every event has exactly:

```text
schema
sequence
eventId
task
phase
status
observedAtUtc
writerIdentity
previous
facts
```

No extra event, key, mutable projection, or in-place status file is allowed.

---

## Fixed Attempt Series

Only these candidate series may exist:

```text
attempts/task-01/derivation
attempts/task-01/attempt-evidence
attempts/task-01/semantic
attempts/task-01/journal
attempts/task-01/windows
attempts/task-01/ownership
attempts/task-01/negative

attempts/task-02/source-core
attempts/task-02/reconstruction-core
attempts/task-02/operator-contract

attempts/task-03/diagnostic-contract
attempts/task-03/serialization-contract
attempts/task-03/operator-contract
attempts/task-03/offline-suite
```

Every series directory is created by its owning task before its first attempt.
No alternate phase, semantic RED/GREEN filename, or manually selected attempt
number is allowed.

Candidate review filenames use contiguous decimal review attempts:

```text
reviews/task-1-candidate-review-1.json
reviews/task-2-candidate-review-1.json
reviews/task-3-candidate-review-1.json
```

A `NONCOMPLIANT` review remains immutable and requires the next contiguous
review number after candidate correction. Only the newest finding-free
`COMPLIANT` review with `sealAuthorized: true` freezes the candidate.

Tasks 2 and 3 use this exact PowerShell invocation helper; it writes no file:

```powershell
function Invoke-V11Attempt {
  param(
    [Parameter(Mandatory=$true)][string]$TaskId,
    [Parameter(Mandatory=$true)][string]$PhaseId,
    [Parameter(Mandatory=$true)][string]$Purpose,
    [Parameter(Mandatory=$true)][ValidateSet('PASS','FAIL')][string]$Expected,
    [Parameter(Mandatory=$true)][string]$SourceRoot,
    [Parameter(Mandatory=$true)][string]$AuthorityFile,
    [Parameter(Mandatory=$true)][string]$WorkingDirectory,
    [Parameter(Mandatory=$true)][string[]]$Command
  )
  $node = 'C:\Program Files\nodejs\node.exe'
  $control =
    'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v11-control'
  $runner = Join-Path $control 'sealed\attempt-evidence-v11.mjs'
  $series = Join-Path $control "attempts\$TaskId\$PhaseId"
  $arguments = @(
    $runner,
    'run',
    '--series-root', $series,
    '--task-id', $TaskId,
    '--phase-id', $PhaseId,
    '--purpose', $Purpose,
    '--expected-outcome', $Expected,
    '--source-root', $SourceRoot,
    '--authority-file', $AuthorityFile,
    '--journal-root', (Join-Path $control 'journal'),
    '--deadline-ms', '120000',
    '--cwd', $WorkingDirectory,
    '--'
  ) + $Command
  & $node @arguments
  if ($LASTEXITCODE -ne 0) {
    throw "V11 attempt rejected: $TaskId/$PhaseId/$Purpose"
  }
}
```

---

## Fixed Deadlines and Output Bounds

```text
candidate attempt default: 120000 ms
candidate attempt stdout cap: 4194304 bytes
candidate attempt stderr cap: 4194304 bytes
environment snapshot ceiling: 30000 ms
terminalization reserve: 5000 ms

reconstruction child: 180000 ms
reconstruction operator total: 240000 ms

cell phase maximum:
45000 launch + 45000 page + 15000 fixture + 5000 operation +
15000 context close = 125000 ms

exact-profile removal: 30000 ms
cell child: 190000 ms

preflight controller: 240000 ms
preflight operator wait: 300000 ms
preflight verifier wait: 60000 ms
preflight operator total: 420000 ms

five sequential cell children: 950000 ms
isolation controller: 1000000 ms
isolation operator wait: 1060000 ms
isolation verifier wait: 60000 ms
isolation operator total: 1180000 ms
```

No nested deadline exceeds its containing deadline. No deadline is selected
dynamically, adjusted after failure, or replaced with a blocking sleep.

Preflight has exactly these eight locked regular files:

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

Isolation has exactly these twenty-four locked regular files:

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

Each stage creates one final `diagnostic-evidence-lock.json`, excluded from its
own rows. Before sealing, the finalizer rejects a missing path, extra unlocked
regular file, `.profiles`, or `process-registration.json`.

---

### Task 1: Import V10 Task 1, build the V11 core, and seal monotonic evidence

**Files:**

- Create exclusively: `imports/v10-task-1/**`
- Create exclusively: `imports/v10-terminal/**`
- Create exclusively: `sealed/bootstrap/attempt-runner-v11.mjs`
- Create/edit before seal: `candidate/task-1/**`
- Create exclusively: `attempts/task-01/**`
- Create exclusively: `journal/000001-task-1-boundary.json`
- Create exclusively: `journal/000002-task-1-import-materialized.json`
- Create exclusively: `journal/000003-task-1-core-sealed.json`
- Create exclusively: `journal/000004-task-1-review-accepted.json`
- Create exclusively: `locks/bootstrap-attempt-runner-lock.json`
- Create exclusively: `locks/task-1-contract-lock.json`
- Create exclusively: `locks/task-1-authorization-lock.json`
- Create exclusively: `reviews/task-1-candidate-review-A.json`
- Create exclusively: `reviews/task-1-seal-review.json`
- Create exclusively: `sealed/attempt-evidence-v11.mjs`
- Create exclusively: `sealed/semantic-map-v11.mjs`
- Create exclusively: `sealed/immutable-journal-v11.mjs`
- Create exclusively: `sealed/windows-command-line-v11.mjs`
- Create exclusively: `sealed/process-ownership-v11.mjs`
- Create exclusively: `sealed/task-1-tests/**`

**Interfaces:**

- Consumes: committed design/plan, exact Git authority, fixed runtime/product
  identities, terminal V8/V9/V10 identities, exact 23-file accepted import
  map, exact five-file Task 2 reference map.
- Produces: immutable V10 imports, sealed V11 attempt/journal/semantic/parser/
  ownership modules, four-event journal head, Task 1 contract lock, and Task 2
  authorization.

- [ ] **Step 1: Run the root-absence and authority preflight**

Run this read-only PowerShell from the publish checkout:

```powershell
$ErrorActionPreference = 'Stop'
$repo = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site'
$design = 'docs/superpowers/specs/2026-07-20-self-contained-monotonic-evidence-v11-design.md'
$plan = 'docs/superpowers/plans/2026-07-20-self-contained-monotonic-evidence-v11.md'
$performance = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20'
$v10 = Join-Path $performance 'capture-operation-v10-control'
$control = Join-Path $performance 'capture-operation-v11-control'
$result = Join-Path $performance 'poster-picture-layer-v11'
$release = Join-Path $performance 'poster-picture-layer-release-v11'

if ((git -C $repo branch --show-current).Trim() -ne 'agent/performance-without-motion-loss') {
  throw 'branch mismatch'
}
if ((git -C $repo rev-parse '@{upstream}').Trim() -ne
    'b416b8113315c95c32d4674aa54769d90c562abd') {
  throw 'upstream mismatch'
}
if ((git -C $repo remote get-url origin).Trim() -ne
    'https://github.com/tarik-ux/efficient-technologies-site.git') {
  throw 'remote mismatch'
}
$head = (git -C $repo rev-parse HEAD).Trim()
$planCommit = (git -C $repo log -1 --format=%H -- $plan).Trim()
if ($head -ne $planCommit) { throw 'plan is not execution HEAD' }
if ((git -C $repo status --porcelain=v1).Count -ne 0) { throw 'Git is dirty' }
if ((git -C $repo diff --name-only).Count -ne 0) { throw 'unstaged diff exists' }
if ((git -C $repo diff --cached --name-only).Count -ne 0) { throw 'staged diff exists' }
git -C $repo diff --check
if ($LASTEXITCODE -ne 0) { throw 'git diff --check failed' }
if (Test-Path -LiteralPath (Join-Path $repo '.git\index.lock')) {
  throw 'Git index lock exists'
}

$designItem = Get-Item -LiteralPath (Join-Path $repo $design)
$designHash = (Get-FileHash -LiteralPath $designItem.FullName -Algorithm SHA256).Hash.ToLowerInvariant()
if ($designItem.Length -ne 41050 -or
    $designHash -ne 'ceb1f8a6789090831d1e30c30687c8f12cc1877d4c3332d09a483f21b63860a9') {
  throw 'design identity mismatch'
}
if (-not (Test-Path -LiteralPath $v10 -PathType Container)) {
  throw 'terminal V10 control root missing'
}
foreach ($path in @($control, $result, $release)) {
  if (Test-Path -LiteralPath $path) { throw "required-absent path exists: $path" }
}
```

Then recompute the design-defined V10 tree algorithm and require:

```text
V10 complete root:
91 / 7b734dc536ea62e92ba12a4cfddc7e7d57a5e82a01a28fe8bde6a5d15b2b4ded

accepted Task 1 map:
23 / c0a410b460b5ef9d3a0645c41c527263d3fa5d7b9fb1dddf0c8fe8a26d77ac56

terminal Task 2 reference map:
5 / beb180a2cbe3970d551776c374f8ccf3cc2ed2fea4ed581a91e1e84801d10955
```

Expected: all checks accept and all V11 roots remain absent. Any rejection
stops before root creation.

- [ ] **Step 2: Create the control root and materialize predecessor bytes once**

Use one Node bootstrap process. Pass absolute paths and the exact 23-row and
five-row maps copied from the approved design as JSON environment values.
Implement these exact primitives:

```js
import { createHash } from 'node:crypto';
import {
  constants,
  copyFileSync,
  lstatSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join, relative, resolve, sep } from 'node:path';

const sha256 = bytes =>
  createHash('sha256').update(bytes).digest('hex');

const canonicalBytes = value =>
  Buffer.from(`${JSON.stringify(value, null, 2)}\n`, 'utf8');

const assertContained = (root, target) => {
  const rel = relative(resolve(root), resolve(target)).split(sep).join('/');
  if (!rel || rel === '..' || rel.startsWith('../')) {
    throw new Error(`path escapes root: ${target}`);
  }
  return resolve(target);
};

const identity = path => {
  const entry = lstatSync(path);
  if (!entry.isFile() || entry.isSymbolicLink()) {
    throw new Error(`regular non-reparse file required: ${path}`);
  }
  const body = readFileSync(path);
  return { path: resolve(path), bytes: body.length, sha256: sha256(body) };
};

const writeExclusive = (path, body) => {
  writeFileSync(path, body, { flag: 'wx' });
  const actual = readFileSync(path);
  if (!actual.equals(body)) throw new Error(`write readback mismatch: ${path}`);
  return identity(path);
};

const copyExclusive = (source, destination, expected) => {
  const sourceIdentity = identity(source);
  if (sourceIdentity.bytes !== expected.bytes ||
      sourceIdentity.sha256 !== expected.sha256) {
    throw new Error(`source identity mismatch: ${source}`);
  }
  mkdirSync(dirname(destination), { recursive: true });
  copyFileSync(source, destination, constants.COPYFILE_EXCL);
  const destinationIdentity = identity(destination);
  if (destinationIdentity.bytes !== expected.bytes ||
      destinationIdentity.sha256 !== expected.sha256) {
    throw new Error(`destination identity mismatch: ${destination}`);
  }
  return { relativePath: expected.relativePath, sourceIdentity, destinationIdentity };
};
```

The bootstrap must use non-recursive `mkdirSync(controlRoot)` for the control
root and reject `EEXIST`. It then creates only these top-level directories:

```text
imports
candidate
attempts
journal
locks
reviews
sealed
streams
terminal
```

Copy the 23 accepted files to
`imports/v10-task-1/<original-relative-path>`. Copy the five Task 2 files to
`imports/v10-terminal/task-2-reference/<basename>` and label every one
`authority: "terminal-reference-only"`. Copy the committed breach report to
`imports/v10-terminal/task-2-evidence-breach-report.md`.

Exclusively create:

```text
imports/v10-terminal/v10-root-snapshot.json
imports/v10-terminal/import-manifest.json
```

`v10-root-snapshot.json` records the fixed 91-file count/digest and a fresh
matching recomputation. `import-manifest.json` records all 28 source and
destination identities, the breach-report identity, exact authority labels,
design/plan identities, execution HEAD, and `productMutation: false`.

After complete destination readback, exclusively create
`journal/000001-task-1-boundary.json`. Its `boundaryRecord` contains the
pre-root observations, and its facts keys exactly match event 1. Use schema
`efficient-technologies/capture-operation-v11-event-v1`, canonical UTF-8, a
`null` predecessor, and the bootstrap process identity.

Expected: one V11 control root, exact import manifests, event 1, absent
candidate namespaces, absent result/release roots, and unchanged V10/Git/
product identities. A partial failure preserves the new root and stops V11.

- [ ] **Step 3: Materialize and lock the bootstrap attempt runner**

Create `sealed/bootstrap` as a regular directory. Exclusively create
`sealed/bootstrap/attempt-runner-v11.mjs` with the interfaces in this plan.
The module must use only Node built-ins and implement:

```js
const ATTEMPT_NAME = /^\d{6}$/;
const TASK_ID = /^task-0[123]$/;
const PHASE_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const UTC_MILLISECONDS =
  /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
const RESULT_FILES = new Set([
  'intent.json',
  'stdout.bin',
  'stderr.bin',
  'result.json',
]);
const ABANDONED_FILES = new Set([
  'intent.json',
  'stdout.bin',
  'stderr.bin',
  'abandoned.json',
]);

const createAttemptDirectory = (seriesRoot, validated) => {
  const next = validated.attemptCount + 1;
  const name = String(next).padStart(6, '0');
  if (!ATTEMPT_NAME.test(name)) throw new Error('attempt number overflow');
  const path = join(seriesRoot, name);
  mkdirSync(path);
  return { next, name, path };
};

const writeExclusive = (path, bytes) => {
  writeFileSync(path, bytes, { flag: 'wx' });
  const actual = readFileSync(path);
  if (!actual.equals(bytes)) throw new Error(`exclusive readback mismatch: ${path}`);
  return fileIdentity(path);
};
```

`validateAttemptSeries` must:

1. require a regular, non-reparse fixed series directory;
2. reject any non-six-digit child name;
3. sort numerically and require exact contiguous numbers from `000001`;
4. require `intent.json` in every attempt;
5. permit exactly one of the result or abandoned allowlists;
6. require both stream files for `result.json`;
7. permit zero, one, or both preserved streams for `abandoned.json`;
8. reject both `result.json` and `abandoned.json`;
9. validate canonical JSON and exact task/phase/number agreement;
10. validate intent-to-closure identities and the previous-closure chain; and
11. return the complete immutable series snapshot.

`runAttempt` must allocate first, write and read back `intent.json`, launch
exactly one hidden child with `windowsHide: true`, buffer each stream to at
most `4,194,304` bytes, enforce the fixed deadline, then exclusively write
`stdout.bin`, `stderr.bin`, and `result.json` in that order. It must parse
stdout as exactly one JSON object and never pass an output path to the child.

The controller's shell exit is `0` only when the immutable result was created
and `expectedOutcomeSatisfied` is true. A child failure expected by a RED
attempt therefore produces controller exit `0`; the child exit remains nonzero
inside `result.json`.

The CLI is exact:

```text
node attempt-runner-v11.mjs run
  --series-root <absolute fixed series>
  --task-id task-01|task-02|task-03
  --phase-id <fixed phase>
  --purpose <non-empty single argument>
  --expected-outcome PASS|FAIL
  --source-root <absolute candidate root>
  --authority-file <absolute immutable lock/event>
  --journal-root <absolute V11 journal>
  --deadline-ms <fixed positive integer>
  --cwd <absolute path>
  --
  <absolute executable> <exact child arguments...>
```

After syntax checking and immediate readback, exclusively create
`locks/bootstrap-attempt-runner-lock.json` with:

```js
{
  schema: 'efficient-technologies/capture-operation-v11-bootstrap-runner-lock-v1',
  designIdentity: {},
  planIdentity: {},
  executionHead: 'full commit SHA',
  runnerIdentity: {},
  purpose: 'task-1-bootstrap-attempt-evidence-only',
  replacementAuthorized: false,
}
```

Then exclusively create event 2 with the exact import facts and
`bootstrapRunnerLock`. Revalidate the two-event chain byte-for-byte.

Expected: bootstrap runner and lock are immutable; events `1` and `2` are
valid; Task 1 candidate and series paths remain absent.

- [ ] **Step 4: Create the derivation RED attempt**

Create only these Task 1 directories:

```text
candidate/task-1
attempts/task-01/derivation
attempts/task-01/attempt-evidence
attempts/task-01/semantic
attempts/task-01/journal
attempts/task-01/windows
attempts/task-01/ownership
attempts/task-01/negative
```

Create `candidate/task-1/derive-v11-core.mjs` as a syntax-valid stub:

```js
process.stdout.write(JSON.stringify({
  schema: 'efficient-technologies/capture-operation-v11-derivation-tests-v1',
  cases: [{
    name: 'derive authenticated V10 Task 1 into exact V11 candidates',
    passed: false,
    error: 'V11 derivation not implemented',
  }],
  passed: 0,
  total: 1,
}));
process.exitCode = 1;
```

Run through the bootstrap runner:

```powershell
$node = 'C:\Program Files\nodejs\node.exe'
$control = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v11-control'
& $node "$control\sealed\bootstrap\attempt-runner-v11.mjs" run `
  --series-root "$control\attempts\task-01\derivation" `
  --task-id task-01 `
  --phase-id derivation `
  --purpose authenticated-derivation-red `
  --expected-outcome FAIL `
  --source-root "$control\candidate\task-1" `
  --authority-file "$control\locks\bootstrap-attempt-runner-lock.json" `
  --journal-root "$control\journal" `
  --deadline-ms 120000 `
  --cwd "$control\candidate\task-1" `
  -- $node '.\derive-v11-core.mjs' write
```

Expected: controller exit `0`, attempt `000001`, child exit nonzero, parsed
`0/1`, no evidence filename containing RED or GREEN, and no derived candidate
file.

- [ ] **Step 5: Implement and run deterministic V11 derivation**

Replace the derivation stub with a script that reads only
`imports/v10-task-1/sealed`. For every source, assert its imported identity
from the 23-row manifest before transformation.

The exact CLI modes are:

```text
write
check
```

`write` requires every destination absent and creates all nine files
exclusively. `check` requires every destination present, derives expected bytes
in memory, compares identities, and performs no write.

The exact file and case-sensitive replacement counts are:

| Source | Destination | `v10` to `v11` | `V10` to `V11` |
|---|---|---:|---:|
| `semantic-map-v10.mjs` | `semantic-map-v11.mjs` | 0 | 0 |
| `immutable-journal-v10.mjs` | `immutable-journal-v11.mjs` | 2 | 0 |
| `windows-command-line-v10.mjs` | `windows-command-line-v11.mjs` | 1 | 0 |
| `process-ownership-v10.mjs` | `process-ownership-v11.mjs` | 2 | 0 |
| `task-1-tests/semantic-map-v10.test.mjs` | `semantic-map-v11.test.mjs` | 2 | 0 |
| `task-1-tests/immutable-journal-v10.test.mjs` | `immutable-journal-v11.test.mjs` | 4 | 0 |
| `task-1-tests/windows-command-line-v10.test.mjs` | `windows-command-line-v11.test.mjs` | 13 | 17 |
| `task-1-tests/process-ownership-v10.test.mjs` | `process-ownership-v11.test.mjs` | 9 | 11 |
| `task-1-tests/task-1-negative-injections.mjs` | `task-1-negative-injections-v11.mjs` | 11 | 13 |

Use exact replacement-count enforcement:

```js
const replaceExactCount = (source, needle, replacement, expectedCount, label) => {
  const count = source.split(needle).length - 1;
  if (count !== expectedCount) {
    throw new Error(`${label} replacement count ${count}, expected ${expectedCount}`);
  }
  return source.split(needle).join(replacement);
};
```

For each derived test, remove the exact `--output` parser block and replace the
final exclusive output-file block with stdout transport:

```js
process.stdout.write(JSON.stringify(record));
if (record.passed !== record.total) {
  process.exitCode = 1;
}
```

The transform must assert that the output-parser fragment and final writer
fragment each occur exactly once. Leaving an unused `open` import is allowed;
changing any additional source byte is not.

Create every derived destination with `flag: 'wx'`, read it back immediately,
and emit one compact derivation record containing source/destination
identities, replacement counts, and `undeclaredDifferences: []`.

Run attempt `000002` with purpose `authenticated-derivation-green`, expected
outcome `PASS`, and final child argument `write`.

Expected: controller exit `0`, child exit `0`, `1/1`, exact nine-file derived
map, and imported bytes unchanged.

- [ ] **Step 6: Write the attempt-protocol failing suite**

Copy the bootstrap runner bytes to
`candidate/task-1/attempt-evidence-v11.mjs`, then replace its exported
implementation temporarily with:

```js
export const canonicalJsonBytes = () => {
  throw new Error('V11 attempt evidence not implemented');
};
export const fileIdentity = canonicalJsonBytes;
export const snapshotTree = canonicalJsonBytes;
export const validateAttemptSeries = canonicalJsonBytes;
export const runAttempt = canonicalJsonBytes;
export const abandonCandidateAttempt = canonicalJsonBytes;
```

Create `attempt-evidence-v11.test.mjs` with these exact ordered cases:

```text
1. canonical JSON is UTF-8 without BOM and one trailing LF
2. regular file identity returns exact path, bytes, and SHA-256
3. symlink/reparse and non-file identity rejects
4. tree snapshot normalizes separators and sorts relative paths
5. tree path escape, nested Git, and reparse entry reject
6. empty fixed series validates with attemptCount zero and null head
7. first allocation is exactly 000001
8. next allocation is exactly contiguous
9. manual gap rejects
10. non-six-digit and non-directory attempt entries reject
11. allocation collision rejects without selecting another number
12. intent is created before child launch
13. child never receives an evidence output path
14. PASS result preserves exact stdout/stderr and parsed JSON
15. expected FAIL result preserves nonzero child exit and satisfies expectation
16. expected-outcome mismatch returns controller rejection without rewriting
17. output cap terminates child and preserves a failing result
18. timeout terminates child and preserves a failing result
19. malformed or multiple stdout JSON values preserve a failing result
20. existing intent, stream, result, or abandonment file cannot be replaced
21. result and abandonment are mutually exclusive
22. dead exact writer permits one candidate abandonment with optional streams
23. live, ambiguous, post-seal, or one-shot writer cannot be abandoned
24. prior-attempt byte drift blocks the next allocation
```

Every fixture uses a fresh temporary root outside the V11 control and result
roots. The test emits exactly:

```js
{
  schema: 'efficient-technologies/capture-operation-v11-attempt-evidence-tests-v1',
  cases: [{ name: '...', passed: false, error: '...' }],
  passed: 0,
  total: 24,
}
```

Run through the immutable bootstrap runner in
`attempts/task-01/attempt-evidence/000001`.

Expected: controller exit `0` for expected `FAIL`, child exit nonzero, and
`0/24` with the exact stub error.

- [ ] **Step 7: Implement the reviewed monotonic attempt protocol**

Restore the bootstrap runner implementation into the candidate module, then
add:

- exact object-key validation for every intent and closure;
- canonical JSON readback;
- complete prior-series snapshot comparison;
- imported V11 tokenizer use for exact competing-writer classification;
- `abandonCandidateAttempt` with exact PID plus creation-time absence;
- optional preserved-stream identities in abandonment;
- post-seal and one-shot recovery rejection;
- a full source/authority/journal readback after child terminal state; and
- exports matching the Shared Interfaces section.

The abandonment guard is exact:

```js
if (resultExists || abandonedExists) {
  throw new Error('attempt is already closed');
}
if (phasePolicy.recovery !== 'candidate-only') {
  throw new Error('attempt recovery is not authorized for this phase');
}
if (sameExactIdentity(processRows, intent.writerIdentity)) {
  throw new Error('attempt writer is still alive');
}
if (ambiguousRelevantProcesses.length !== 0) {
  throw new Error('attempt writer absence is ambiguous');
}
```

The allocation guard is exact:

```js
const before = validateAttemptSeries({ seriesRoot, taskId, phaseId });
if (before.attempts.some(attempt => attempt.closureKind === null)) {
  throw new Error('open prior attempt blocks allocation');
}
const attemptNumber = before.attemptCount + 1;
const attemptRoot = join(seriesRoot, String(attemptNumber).padStart(6, '0'));
mkdirSync(attemptRoot); // no recursive option; EEXIST is terminal
```

Run attempt `000002` through the bootstrap runner with expected `PASS`.

Expected: child exit `0`, `24/24`, empty child stderr, and no fixture residue.

Then use `candidate/task-1/attempt-evidence-v11.mjs` as the runner for all
remaining candidate attempts. The bootstrap runner remains immutable but is no
longer operational authority after Task 1 sealing.

- [ ] **Step 8: Run the four derived core suites**

Run each suite through the candidate attempt runner:

```powershell
$node = 'C:\Program Files\nodejs\node.exe'
$control = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v11-control'
$candidate = "$control\candidate\task-1"
$runner = "$candidate\attempt-evidence-v11.mjs"
$authority = "$control\locks\bootstrap-attempt-runner-lock.json"
$journal = "$control\journal"

$runs = @(
  @{ Phase='semantic'; Purpose='semantic-green'; Test='semantic-map-v11.test.mjs'; Total=14 },
  @{ Phase='journal'; Purpose='journal-green'; Test='immutable-journal-v11.test.mjs'; Total=15 },
  @{ Phase='windows'; Purpose='windows-green'; Test='windows-command-line-v11.test.mjs'; Total=16 },
  @{ Phase='ownership'; Purpose='ownership-green'; Test='process-ownership-v11.test.mjs'; Total=25 }
)
foreach ($run in $runs) {
  & $node $runner run `
    --series-root "$control\attempts\task-01\$($run.Phase)" `
    --task-id task-01 `
    --phase-id $run.Phase `
    --purpose $run.Purpose `
    --expected-outcome PASS `
    --source-root $candidate `
    --authority-file $authority `
    --journal-root $journal `
    --deadline-ms 120000 `
    --cwd $candidate `
    -- $node ".\$($run.Test)"
  if ($LASTEXITCODE -ne 0) { throw "$($run.Phase) attempt rejected" }
}
```

Expected:

```text
semantic: 14/14
journal: 15/15
Windows arguments: 16/16
ownership: 25/25
```

The V11 Windows suite must additionally prove that the exact V10 run token is
`unrelated`, not owned, when V11 authority is requested.

- [ ] **Step 9: Expand and run negative injections**

Extend the derived negative-injection file to exactly eighteen ordered cases:

```text
1. V9 progress completion block is not chronological
2. V9 profile suffix near miss is incorrectly owned by V9
3. V9 run prefix/suffix near miss is incorrectly owned by V9
4. V9 descendant closure crosses a reused PID
5. V10 journal cannot insert or replace an earlier event
6. V10 profile/run/path near misses remain unrelated
7. V10 replacement-parent child remains unrelated
8. V10 old-parent-gap child is not owned
9. V10 conflicting-parent child is ambiguous
10. the V10 canonical Task 2 GREEN path changed identity
11. a renamed earlier V11 attempt is detected
12. a replaced earlier V11 result is detected
13. a manually selected attempt gap is rejected
14. an allocation collision stops without fallback numbering
15. result plus abandonment in one attempt is rejected
16. partial-stream abandonment preserves existing bytes
17. live or ambiguous writer abandonment is rejected
18. child argv contains no evidence output path
```

Case 10 reads the immutable imported V10 terminal reference and proves the
3,170-byte and 2,551-byte identities are different while neither counts as
V11 evidence.

Run through `attempts/task-01/negative/000001` with expected `PASS`.

Expected: child exit `0`, `18/18`, empty stderr, imported V10 bytes unchanged,
and every temporary attack fixture removed.

- [ ] **Step 10: Run the complete candidate suite and syntax gate**

Run `node --check` over every candidate Task 1 `.mjs`. Then run the seven
positive suites again through the exact next attempt in each series:

```text
derivation: 1/1, check-only mode, no destination write
attempt evidence: 24/24
semantic: 14/14
journal: 15/15
Windows arguments: 16/16
ownership: 25/25
negative injections: 18/18
```

For derivation check-only mode, require the already-created destination bytes
to match a fresh in-memory derivation without writing any destination.

Expected: all suites pass, normalized case order is exact, prior attempt bytes
remain unchanged, and Task 2/result/release paths remain absent.

- [ ] **Step 11: Obtain the independent Task 1 candidate review**

The reviewer recomputes:

- complete V10 root, accepted import, terminal-reference, and breach-report
  identities;
- destination import identities and authority labels;
- derivation replacement counts and undeclared byte-difference set;
- every attempt series, intent, stream, closure, and predecessor chain;
- all `24 + 14 + 15 + 16 + 25 + 18 = 112` required cases;
- child argv evidence proving no output path;
- exact journal events `1` and `2`;
- absent Task 2 candidate, result, and release paths; and
- clean Git and product trees.

Exclusively create the next contiguous
`reviews/task-1-candidate-review-A.json`. Its exact schema is:

```js
{
  schema: 'efficient-technologies/capture-operation-v11-candidate-review-v1',
  task: 1,
  attempt: 1,
  verdict: 'COMPLIANT',
  importManifest: {},
  candidateFiles: [],
  attemptSeries: [],
  testTotals: {
    derivation: { passed: 1, total: 1 },
    attemptEvidence: { passed: 24, total: 24 },
    semantic: { passed: 14, total: 14 },
    journal: { passed: 15, total: 15 },
    windows: { passed: 16, total: 16 },
    ownership: { passed: 25, total: 25 },
    negative: { passed: 18, total: 18 },
  },
  findings: [],
  sealAuthorized: true,
}
```

If findings exist, write the `NONCOMPLIANT` record with
`sealAuthorized: false`; correct only candidate files; run new numbered
attempts; and create the next review number. Never change the earlier review.

Expected: newest review is `COMPLIANT`, findings are empty, and the Task 1
candidate namespace is frozen.

- [ ] **Step 12: Seal Task 1 and authorize Task 2**

`seal-task-1-v11.mjs` must:

1. authenticate events `1` and `2`, imports, candidate review, candidate tree,
   every attempt series, Git, runtime, product, and absent later paths;
2. exclusively copy the accepted candidate files into their fixed `sealed`
   paths;
3. exclusively copy tests and negative injections into
   `sealed/task-1-tests`;
4. read back every sealed byte;
5. exclusively create event `3`, naming the still-absent future contract-lock
   path;
6. exclusively create `locks/task-1-contract-lock.json`; and
7. exit without creating event `4` or the authorization lock.

The contract lock binds:

```text
events 1 through 3
bootstrap runner and bootstrap lock
complete imports
candidate source and tests
all Task 1 attempt files
all Task 1 candidate-review attempts
accepted candidate review
every sealed Task 1 file
absent Task 2 candidate/result/release paths
```

The seal reviewer reruns the complete 112-case suite from sealed imports using
fresh temporary fixtures, revalidates all earlier immutable bytes, and
exclusively creates `reviews/task-1-seal-review.json`.

Only after fresh readback accepts may the sealed journal writer create event
`4`, followed by `locks/task-1-authorization-lock.json`. That authorization
lock binds the contract lock, accepted candidate review, seal review, event 4,
exact four-event head, and `task2Authorized: true`.

Expected:

```text
Task 1: terminal COMPLIANT
journal events: exactly 4
Task 1 locks: contract + authorization
Task 1 seal review: COMPLIANT
candidate/task-2: absent
V11 result/release roots: absent
Git/product bytes: unchanged
```

Stop on the first unresolved Task 1 review or seal failure. Do not start
Task 2 without a fresh, exact authorization-lock readback.

---

### Task 2: Build, review, and seal the V11 source/reconstruction controller

**Files:**

- Create/edit before seal: `candidate/task-2/**`
- Create exclusively: `attempts/task-02/source-core/**`
- Create exclusively: `attempts/task-02/reconstruction-core/**`
- Create exclusively: `attempts/task-02/operator-contract/**`
- Create exclusively: `sealed/prepare-v11-core.mjs`
- Create exclusively: `sealed/prepare-v11.mjs`
- Create exclusively: `sealed/read-only-verify-v11.mjs`
- Create exclusively: `sealed/task-4-reconstruct-v11-once.mjs`
- Create exclusively: `sealed/task-5-install-diagnostic-v11-once.mjs`
- Create exclusively: `sealed/operator-contract-v11.test.mjs`
- Create exclusively: `sealed/task-2-tests/**`
- Create exclusively: `journal/000005-task-2-controller-sealed.json`
- Create exclusively: `locks/task-2-contract-lock.json`
- Create exclusively: `locks/task-2-authorization-lock.json`
- Create exclusively: `reviews/task-2-candidate-review-A.json`
- Create exclusively: `reviews/task-2-seal-review.json`

**Interfaces:**

- Consumes: exact four-event journal, Task 1 authorization, sealed V11 core,
  immutable imports, terminal V8/V9/V10 identities, committed Git authority,
  fixed runtime/product/deadline facts.
- Produces: sealed source authenticator, one-shot reconstructor, installer,
  read-only verifier, static operator contracts, event 5, and Task 3
  authorization.

- [ ] **Step 1: Authorize and create only Task 2 candidate/series roots**

Using sealed V11 modules, validate:

```text
journal events 1 through 4: exact and canonical
Task 1 contract lock: exact
Task 1 accepted candidate review: exact
Task 1 seal review: COMPLIANT
Task 1 authorization: task2Authorized true
imports: exact and unchanged
candidate/task-2: absent
candidate/task-3: absent
result root: absent
release root: absent
Git/product/runtime: exact
```

Create only:

```text
candidate/task-2
attempts/task-02/source-core
attempts/task-02/reconstruction-core
attempts/task-02/operator-contract
```

Every directory must be regular, non-reparse, contained, and absent before
creation.

Expected: empty Task 2 candidate and series roots; every later path absent.

- [ ] **Step 2: Write the twenty-four source-authentication cases and RED stub**

Create `prepare-v11-core.test.mjs` with these ordered cases:

```text
1. committed V11 design identity
2. committed plan is exact execution HEAD
3. exact branch, upstream, and remote
4. clean tracked Git, empty diffs, diff-check, and absent index lock
5. terminal V8 result/control are regular non-reparse directories
6. exact terminal V8 controlling identities
7. V8 remains failed with retryAuthorized false
8. V8 child-local marker cannot override parent rejection
9. exact V8 thirteen-entry result allowlist
10. exact immutable product manifests and terminal V7 lock
11. exact nine-file source-v7 reference and derived fixture/style exports
12. exact Node and Playwright identities
13. exact Chrome and Edge identities
14. exact playwright-core bytes/hash/ticks/reparse state
15. terminal V9 control exact allowlist and identities
16. all three V9 failure defects remain reproducible
17. complete terminal V10 control tree is 91 and exact digest
18. accepted V10 Task 1 source and imported destination maps are exact
19. V10 Task 2 breach/reference map is exact and grants no authority
20. V11 Task 1 has exact four-event chain, reviews, and two locks
21. V10/V11 result and release targets have exact required absence
22. all source/target ancestors are contained, regular, and non-reparse
23. fixed ports and V11 profile roots are absent
24. no path escape, nested Git, unregistered control entry, or later-task path
```

Adapt the imported V10 test only as non-authoritative source material:

- require its exact imported identity before reading;
- replace active V10 module/schema names with V11 names;
- preserve V8/V9 facts;
- add exact V10 terminal/import cases `17` through `19`;
- replace file-output transport with one compact stdout object; and
- never copy a V10 result record into the series.

Create `prepare-v11-core.mjs` as a syntax-valid stub exporting all Shared
Interfaces functions and throwing exactly:

```js
const STUB_ERROR = 'V11 source authentication not implemented';
export const authenticatePredecessorState = () => { throw new Error(STUB_ERROR); };
export const authenticateGitBoundary = authenticatePredecessorState;
export const authenticateRuntime = authenticatePredecessorState;
export const authenticateImmutableInputs = authenticatePredecessorState;
export const authenticateV10Import = authenticatePredecessorState;
export const snapshotTree = authenticatePredecessorState;
```

Run via the sealed Task 1 attempt runner:

```powershell
$node = 'C:\Program Files\nodejs\node.exe'
$control = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v11-control'
$candidate = "$control\candidate\task-2"
& $node "$control\sealed\attempt-evidence-v11.mjs" run `
  --series-root "$control\attempts\task-02\source-core" `
  --task-id task-02 `
  --phase-id source-core `
  --purpose source-authentication-red `
  --expected-outcome FAIL `
  --source-root $candidate `
  --authority-file "$control\locks\task-1-authorization-lock.json" `
  --journal-root "$control\journal" `
  --deadline-ms 120000 `
  --cwd $candidate `
  -- $node '.\prepare-v11-core.test.mjs'
```

Expected: attempt `000001`, controller exit `0`, child exit nonzero, `0/24`,
and the exact stub error in every case.

- [ ] **Step 3: Implement exact V8/V9/V10/import/Git/runtime authentication**

Use only sealed Task 1 modules:

```js
import {
  assertSemanticJsonEquals,
} from '../../sealed/semantic-map-v11.mjs';
import {
  validateJournalDirectory,
} from '../../sealed/immutable-journal-v11.mjs';
```

The imported V10 `prepare-v10-core.mjs` may seed implementation text only
after its exact terminal-reference identity is checked. Do not apply a blind
global V10-to-V11 replacement: terminal V10 facts must remain named V10.

The exact boundary object is:

```js
{
  repo: 'C:\\Users\\tarik\\Claude Projects\\efficient-technologies\\output\\publish\\efficient-technologies-site',
  v8Result: 'C:\\Users\\tarik\\Claude Projects\\efficient-technologies\\output\\performance\\2026-07-19\\poster-picture-layer-v8',
  v8Control: 'C:\\Users\\tarik\\Claude Projects\\efficient-technologies\\output\\performance\\2026-07-19\\capture-operation-v8-control',
  v9Control: 'C:\\Users\\tarik\\Claude Projects\\efficient-technologies\\output\\performance\\2026-07-20\\capture-operation-v9-control',
  v9Result: 'C:\\Users\\tarik\\Claude Projects\\efficient-technologies\\output\\performance\\2026-07-20\\poster-picture-layer-v9',
  v9Release: 'C:\\Users\\tarik\\Claude Projects\\efficient-technologies\\output\\performance\\2026-07-20\\poster-picture-layer-release-v9',
  v10Control: 'C:\\Users\\tarik\\Claude Projects\\efficient-technologies\\output\\performance\\2026-07-20\\capture-operation-v10-control',
  v10Result: 'C:\\Users\\tarik\\Claude Projects\\efficient-technologies\\output\\performance\\2026-07-20\\poster-picture-layer-v10',
  v10Release: 'C:\\Users\\tarik\\Claude Projects\\efficient-technologies\\output\\performance\\2026-07-20\\poster-picture-layer-release-v10',
  controlRoot: 'C:\\Users\\tarik\\Claude Projects\\efficient-technologies\\output\\performance\\2026-07-20\\capture-operation-v11-control',
  resultRoot: 'C:\\Users\\tarik\\Claude Projects\\efficient-technologies\\output\\performance\\2026-07-20\\poster-picture-layer-v11',
  releaseRoot: 'C:\\Users\\tarik\\Claude Projects\\efficient-technologies\\output\\performance\\2026-07-20\\poster-picture-layer-release-v11',
  designRelative: 'docs/superpowers/specs/2026-07-20-self-contained-monotonic-evidence-v11-design.md',
  planRelative: 'docs/superpowers/plans/2026-07-20-self-contained-monotonic-evidence-v11.md',
}
```

Use semantic comparison only for declared immutable manifest maps. Use exact
byte/hash equality for files and records, exact ordered equality for arrays,
and exact scalar equality for Git/runtime/path/decision values.

The predecessor record is exact:

```js
{
  v8: {
    terminalDecision: 'REJECT',
    retryAuthorized: false,
    childLocalMarkerPassed: true,
    overallPassed: false,
    task3Authorized: false,
  },
  v9: {
    terminalDecision: 'NONCOMPLIANT',
    retryAuthorized: false,
    resultRootExists: false,
    releaseRootExists: false,
    task2Authorized: false,
    findings: [
      'append-only evidence breach',
      'non-exact ownership seeds',
      'PID-reuse ancestry leak',
    ],
  },
  v10: {
    terminalDecision: 'IMMUTABLE_EVIDENCE_BREACH',
    retryAuthorized: false,
    task1Accepted: true,
    task2ReviewAuthorized: false,
    task3Authorized: false,
    resultRootExists: false,
    releaseRootExists: false,
    acceptedTask1FileCount: 23,
    acceptedTask1Digest:
      'c0a410b460b5ef9d3a0645c41c527263d3fa5d7b9fb1dddf0c8fe8a26d77ac56',
  },
}
```

`authenticateV10Import` must compare both source and destination maps, verify
`terminal-reference-only` on all five Task 2 rows, verify the breach report,
and prove no reference file appears below V11 `sealed`.

Run source-core attempt `000002` with purpose
`source-authentication-green` and expected `PASS`.

Expected: child exit `0`, `24/24`, empty stderr, no V11 root mutation beyond
the attempt, and unchanged imported/V10 bytes.

- [ ] **Step 4: Write the thirty reconstruction/controller cases and RED stub**

Create `prepare-v11.test.mjs` with these ordered cases:

```text
1. check mode is read-only with writePaths []
2. reconstruct is the sole result-root writing mode
3. existing result root rejects before write
4. existing release root rejects before write
5. target ancestors are regular, non-reparse, and contained
6. exact five immutable trees copy exclusively
7. exact source-v7 allowlist copies exclusively
8. diagnostic starts as one empty regular directory
9. no V8/V9/V10 control or failed candidate evidence becomes active V11 evidence
10. exact V11 policy/runtime/causal/workspace/predecessor records
11. reconstruction marker is the final result-root write
12. exact thirteen-entry top-level allowlist
13. order-only declared manifest map accepts
14. missing, extra, or changed manifest fact rejects
15. complete V10 import and breach facts are bound in predecessor lock
16. V11 journal and attempt chains are required and exact
17. unrelated global churn is audit-only
18. exact owned residue rejects
19. ambiguous residue rejects
20. fixed-port listener rejects
21. exact V11 profile residue rejects
22. profile/run/path near misses are not cleanup targets
23. release and forbidden paths reject
24. zero or multiple reconstruction children reject
25. timeout, nonzero exit, signal, stderr, or stdout mismatch rejects
26. final snapshot and terminalization reserve are mandatory
27. terminal event and operator evidence are exclusive and read back
28. failed reconstruction preserves partial root and disables retry
29. event, lock, attempt, or import-chain mismatch blocks reconstruction
30. accepted reconstruction has exact predecessor lock and no terminal reference as active source
```

Create `prepare-v11.mjs` as a syntax-valid CLI stub that emits:

```js
process.stdout.write(JSON.stringify({
  schema: 'efficient-technologies/capture-operation-v11-reconstruction-tests-v1',
  cases: Array.from({ length: 30 }, (_, index) => ({
    name: `case-${index + 1}`,
    passed: false,
    error: 'V11 reconstruction controller not implemented',
  })),
  passed: 0,
  total: 30,
}));
process.exitCode = 1;
```

Run reconstruction-core attempt `000001` with expected `FAIL`.

Expected: child exit nonzero and `0/30`.

- [ ] **Step 5: Implement the V11 one-shot preparer**

Implement exact CLI modes:

```text
check
reconstruct
authenticate-reconstructed-state
```

The reconstructed top-level allowlist is:

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
terminal-predecessors-lock.json
workspace-integrity-before.json
```

The reconstructor:

```text
authenticates every source before creating the result root
creates the result root exclusively
copies each allowed tree by exclusive file creation and readback
reauthenticates source and destination manifests
creates diagnostic as one empty regular directory
writes the five fixed V11 records exclusively
verifies the provisional inventory
writes reconstruction.json last
returns one compact ACCEPT stdout record
starts no helper, browser, server, or network operation
```

`terminal-predecessors-lock.json` binds exact V8, V9, and V10 terminal facts,
the accepted V10 import, V10 breach report, Task 1 V11 locks/reviews, terminal
V7 lock, passing canonical state, fixture/key-list/style identities, and
absence of every terminal reference from active V11 source.

Every acceptance object has:

```js
{
  globalAuditCaptured: true,
  unrelatedGlobalActivityAllowed: true,
  ownedProcessResidueAbsent: true,
  ambiguousProcessResidueAbsent: true,
  ownedBrowserResidueAbsent: true,
  ambiguousBrowserResidueAbsent: true,
  fixedPortResidueAbsent: true,
  profileResidueAbsent: true,
}
```

No complete global-browser equality check is permitted.

Run reconstruction-core attempt `000002` with expected `PASS`.

Expected: child exit `0`, `30/30`, using temporary fixture roots only. The
real V11 result root remains absent.

- [ ] **Step 6: Write the fourteen operator-contract cases and RED stubs**

Create syntax-valid stubs for:

```text
read-only-verify-v11.mjs
task-4-reconstruct-v11-once.mjs
task-5-install-diagnostic-v11-once.mjs
```

Each throws `V11 durable operator not implemented`.

Create `operator-contract-v11.test.mjs` with:

```text
1. Task 4 has exactly one reconstruction child-start site
2. Task 4 has no retry or best-run loop
3. Task 5 starts no browser/controller/site server
4. Task 5 has no retry loop
5. exact absolute roots and working directories
6. exact V11 run-token complete argument form
7. no V10 run token is used as V11 authority
8. exact deadlines and terminalization reserve
9. distinct exclusive prelaunch/evidence paths
10. final snapshot occurs after exact child terminal state
11. owned and ambiguous cleanup channels remain separate
12. terminal event is created at most once
13. child argument arrays contain no evidence output path
14. no progress file, mutable index, product write, push, publish, or deploy command
```

Run operator-contract attempt `000001` with expected `FAIL`.

Expected: `0/14` with the exact stub error.

- [ ] **Step 7: Implement the verifier and durable Task 4/5 operators**

The read-only verifier authenticates the complete journal, attempts, imports,
and task locks/reviews in every mode. It writes no file below control/result.

The sole reconstruction child argument array is:

```text
C:\Program Files\nodejs\node.exe
.\prepare-v11.mjs
reconstruct
--repo
C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site
--v8-root
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8
--v9-control
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control
--v10-control
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control
--control
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v11-control
--root
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v11
--release-root
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v11
final argv element:
--capture-operation-v11-run-id=<exact canonical UUID from prelaunch>
```

The run UUID is generated once, written to the exclusive prelaunch record,
read back, and passed as one complete final argument.

The reconstruction operator:

1. reauthenticates Task 2 authorization inputs;
2. captures before process/listener/profile/product/Git facts;
3. creates one prelaunch record exclusively;
4. starts one hidden registered Node child;
5. enforces `180000` ms child and `240000` ms total deadlines;
6. captures bounded streams to fixed exclusive paths;
7. waits for exact child terminal state;
8. captures final facts;
9. invokes one read-only verifier;
10. creates one operator-evidence record; and
11. creates event 7 only in Task 4, never during candidate tests.

The installer requires accepted reconstruction plus empty `diagnostic`, copies
the exact five operational files exclusively, and writes `installation.json`
last. It launches no browser, controller, server, or network operation.

Run operator-contract attempt `000002` with expected `PASS`.

Expected: `14/14`, empty stderr, and no real result/diagnostic write.

- [ ] **Step 8: Run the complete Task 2 candidate suite**

Run `node --check` over every Task 2 candidate `.mjs`, then run exact next
attempts in all three series:

```text
source core: 24/24
reconstruction controller: 30/30
operator contracts: 14/14
```

All tests use temporary fixture roots. Recompute every earlier attempt and
require unchanged byte identities.

Expected: `68/68`, Task 3 candidate absent, real result/release absent, and
Git/product/V10/import bytes unchanged.

- [ ] **Step 9: Obtain the independent Task 2 candidate review**

The reviewer independently injects:

```text
Git HEAD/branch/upstream/remote drift
dirty staged or unstaged Git
V8/V9/V10 identity drift
V10 terminal-reference promotion
import source/destination drift
Task 1 journal/attempt/review/lock drift
runtime/causal-source drift
result/release preexistence
path escape/reparse/nested Git
owned and ambiguous residue
fixed-port/profile conflict
reconstruction multi-start/retry/output-path injection
```

Create the next contiguous
`reviews/task-2-candidate-review-A.json`. A compliant record has:

```js
{
  schema: 'efficient-technologies/capture-operation-v11-candidate-review-v1',
  task: 2,
  attempt: 1,
  verdict: 'COMPLIANT',
  candidateFiles: [],
  attemptSeries: [],
  injectedFailures: [],
  testTotals: {
    sourceCore: { passed: 24, total: 24 },
    reconstructionCore: { passed: 30, total: 30 },
    operatorContract: { passed: 14, total: 14 },
  },
  findings: [],
  sealAuthorized: true,
}
```

Noncompliance follows the immutable correction convention. Only the newest
finding-free review freezes Task 2.

Expected: `COMPLIANT`, no findings, Task 2 candidate frozen.

- [ ] **Step 10: Seal Task 2 and authorize Task 3**

`seal-task-2-v11.mjs` copies only reviewed source/test bytes to fixed sealed
paths and creates `locks/task-2-contract-lock.json`. The lock binds:

```text
Task 1 imports/events/locks/reviews/sealed identities
Task 2 candidate and all test sources
all Task 2 attempts
all Task 2 candidate-review attempts
accepted Task 2 candidate review
all newly sealed Task 2 files
absent Task 3 candidate/result/release paths
```

The seal reviewer reruns `24/24`, `30/30`, and `14/14` from sealed imports,
injects terminal-reference promotion and evidence-path reuse, and creates
`reviews/task-2-seal-review.json` exclusively.

Only after exact readback may the sealed journal writer create event `5`, then
`locks/task-2-authorization-lock.json` with `task3Authorized: true`.

Expected:

```text
Task 2: terminal COMPLIANT
journal events: exactly 5
Task 2 locks: contract + authorization
Task 2 seal review: COMPLIANT
candidate/task-3: absent
V11 result/release roots: absent
```

Stop on the first unresolved Task 2 failure. Do not create Task 3 paths without
fresh Task 2 authorization readback.

---

### Task 3: Build, review, and seal the diagnostic harness and offline suite

**Files:**

- Create/edit before seal: `candidate/task-3/**`
- Create exclusively: `attempts/task-03/diagnostic-contract/**`
- Create exclusively: `attempts/task-03/serialization-contract/**`
- Create exclusively: `attempts/task-03/operator-contract/**`
- Create exclusively: `attempts/task-03/offline-suite/**`
- Create exclusively: `sealed/task-6-preflight-v11-once.mjs`
- Create exclusively: `sealed/task-7-isolation-v11-once.mjs`
- Create exclusively: `sealed/staged-diagnostic/**`
- Create exclusively: `journal/000006-task-3-offline-suite-accepted.json`
- Create exclusively: `locks/task-3-contract-lock.json`
- Create exclusively: `locks/task-3-authorization-lock.json`
- Create exclusively: `reviews/task-3-candidate-review-A.json`
- Create exclusively: `reviews/task-3-seal-review.json`

**Interfaces:**

- Consumes: sealed Tasks 1 and 2, exact source-v7 diagnostic reference, fixed
  runtime/fixture/style/state/deadlines, immutable attempts/imports, and absent
  result/release roots.
- Produces: reviewed operational harness, two byte-identical normalized
  offline-suite results, event 6, and Task 4 authorization.

- [ ] **Step 1: Authorize and create only Task 3 candidate/series roots**

Validate event `5`, both Task 2 locks/reviews, the complete attempt/import
chains, clean Git, exact predecessors/runtime/product identities, and absent
result/release roots.

Create only:

```text
candidate/task-3
candidate/task-3/staged-diagnostic
attempts/task-03/diagnostic-contract
attempts/task-03/serialization-contract
attempts/task-03/operator-contract
attempts/task-03/offline-suite
```

Expected: empty regular directories, no result/release root, and no browser or
network activity.

- [ ] **Step 2: Freeze diagnostic, serialization, and operator RED cases**

Create syntax-valid missing-implementation stubs for the diagnostic files and
these exact candidate test inventories.

`operation-isolation-contract.test.mjs` has twenty ordered cases:

```text
1. exact five-cell order
2. exact JavaScript flags
3. exact operation identities
4. exact 5000 ms operation deadlines
5. add-style-disabled TIMEOUT requirement
6. add-style-enabled PASS requirement
7. evaluate-entry-disabled exact sentinel
8. collection-disabled complete schema
9. collection rawStateDigestSha256 is null
10. synchronous-full exact algorithm
11. synchronous-full canonical digest
12. valid outcome mismatch is FALSIFIED
13. infrastructure failure is INCONCLUSIVE
14. five-element top-level process array
15. compact stdout and empty stderr
16. zero HTTP(S) requests
17. owned and ambiguous cleanup are empty for CONFIRMED
18. terminal decisions are mutually exclusive and exhaustive
19. exact V11 run token accepts and V10 token rejects
20. no child receives an evidence output path
```

`controller-json-serialization-contract.tests.ps1` has eight cases:

```text
1. empty array serializes as []
2. one process row remains a top-level array
3. five process rows remain a top-level array
4. null input does not become [null]
5. ordered row fields are exact
6. stdout JSON is compact
7. stderr is empty on acceptance
8. malformed child JSON rejects without coercion
```

It writes one compact test record to stdout with schema
`efficient-technologies/capture-operation-v11-powershell-serialization-tests-v1`
and exits nonzero unless `passed === total`.

`diagnostic-operator-contract-v11.test.mjs` has ten cases:

```text
1. Task 6 has exactly one controller child-start site
2. Task 6 has no retry loop or Chrome start
3. Task 7 has exactly one controller child-start site
4. Task 7 has no retry or best-run loop
5. both operators use exact absolute roots and working directories
6. both operators use exact V11 run-token arguments and fixed deadlines
7. V10 run token never authorizes a V11 child
8. both operators use distinct prelaunch/evidence paths and one terminal event
9. neither operator passes an evidence output path to its child
10. neither operator contains product writes, progress, push, publish, or deploy commands
```

Run the three RED suites via the sealed attempt runner:

```text
diagnostic-contract/000001: expected FAIL, 0/20
serialization-contract/000001: expected FAIL, 0/8
operator-contract/000001: expected FAIL, 0/10
```

Expected: every RED closure is immutable, contains the exact stub error, and
creates no browser/profile/result/product path.

- [ ] **Step 3: Implement the exact diagnostic cell and authenticated inputs**

The cell supports only:

```text
preflight
add-style-disabled
add-style-enabled
evaluate-entry-disabled
collection-disabled
synchronous-full-disabled
```

Use source-v7 diagnostic files only as authenticated reference. Do not retype
the fixture, key schema, validator, or stylesheet:

```js
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const loadDiagnosticReferences = async authenticatedResultRoot => {
  const fixturePath = join(
    authenticatedResultRoot,
    'source-v7-diagnostic',
    'canonicalization-fixture.mjs',
  );
  const stylePath = join(
    authenticatedResultRoot,
    'source-v7-diagnostic',
    'source',
    'capture-stabilizer-proposed.mjs',
  );
  assertRegularFileIdentity(fixturePath, {
    bytes: 2361,
    sha256: '7c5ff2ff63b6ca9c9c56a01da6e94c460dd28d2544994a9e9334f62334739a4d',
  });
  assertRegularFileIdentity(stylePath, {
    bytes: 2979,
    sha256: 'b20b246cfb4571b3517d2156ccd1f5da21803fcb1d4b74f2953cb80e4f6f9c56',
  });
  const fixtureModule = await import(
    `${pathToFileURL(fixturePath).href}?sha256=7c5ff2ff63b6ca9c9c56a01da6e94c460dd28d2544994a9e9334f62334739a4d`,
  );
  const styleModule = await import(
    `${pathToFileURL(stylePath).href}?sha256=b20b246cfb4571b3517d2156ccd1f5da21803fcb1d4b74f2953cb80e4f6f9c56`,
  );
  assertUtf8Identity(fixtureModule.FIXTURE_HTML, {
    bytes: 857,
    sha256: '26abcaec98428613bb0ca323779b0ca0049f390048f37a0745c711a700609ca9',
  });
  assertUtf8Identity(JSON.stringify(fixtureModule.CANONICAL_TOP_LEVEL_KEYS), {
    bytes: 210,
    sha256: 'ac32eb3b7c909703fa4ef614dfe8257b0eb60548a4d4ed6682a9d0fd49f1822a',
  });
  assertUtf8Identity(styleModule.CANONICAL_CAPTURE_STYLE, {
    bytes: 686,
    sha256: 'aaa3fd1ce3ba66c21eee8a72f857eda1c07726cc8c56b581bf9c925373e9fd0e',
  });
  return {
    FIXTURE_HTML: fixtureModule.FIXTURE_HTML,
    CANONICAL_TOP_LEVEL_KEYS: fixtureModule.CANONICAL_TOP_LEVEL_KEYS,
    validateCanonicalState: fixtureModule.validateCanonicalState,
    CANONICAL_CAPTURE_STYLE: styleModule.CANONICAL_CAPTURE_STYLE,
  };
};
```

Before every cell, rehash both files and all three derived exports. Keep the
page at `about:blank`, install only the exact fixture with:

```js
await page.setContent(FIXTURE_HTML, { waitUntil: 'domcontentloaded' });
```

Never call `goto`, start a server, or navigate to baseline, candidate, or
product content.

Every browser cell:

- launches fixed Chrome through fixed Playwright;
- uses one fresh exact V11 profile;
- uses `412 x 823`, device scale factor `1`, and dark color scheme;
- blocks service workers, permissions, downloads, and HTTP(S);
- records fixed runtime and causal identities;
- emits one compact stdout record and diagnostics only on stderr;
- closes context; and
- removes only the exact revalidated profile.

Preflight mode launches no Chrome. Its compact record is:

```json
{
  "schema": "efficient-technologies/capture-operation-v11-cell-preflight-v1",
  "stage": "preflight",
  "pass": true,
  "chromeLaunched": false
}
```

Every isolation result uses schema
`efficient-technologies/capture-operation-v11-cell-result-v1` and these exact
top-level fields in order:

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
validationErrors
pass
```

- [ ] **Step 4: Implement the unchanged five-cell operations**

The matrix is exact:

| Cell | JavaScript | Operation | Required |
|---|---|---|---|
| `add-style-disabled` | disabled | `page.addStyleTag` with canonical CSS | `TIMEOUT` |
| `add-style-enabled` | enabled | `page.addStyleTag` with canonical CSS | `PASS` |
| `evaluate-entry-disabled` | disabled | synchronous entry sentinel | `PASS` |
| `collection-disabled` | disabled | synchronous capability collection | `PASS` |
| `synchronous-full-disabled` | disabled | synchronous style/mutate/collect | `PASS` |

Entry sentinel:

```json
{
  "entered": true,
  "entryToken": "v8-evaluate-entry"
}
```

The collection cell returns the complete raw state, sets
`rawStateDigestSha256` to `null`, and emits:

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

The synchronous-full evaluation appends one `<style>` element whose
`textContent` is byte-identical `CANONICAL_CAPTURE_STYLE`, sets `#pre-count-n`
to `0`, removes video controls, attempts to pause each video, and collects the
canonical state in the same synchronous page function. It does not await a
style `load` event.

The result must equal the authenticated canonical state and digest:

```text
b8634b4f899eee08ce6d1c14c57c11657214372a9f2eb53107282af5eb43ac67
```

The collection probe never records or gates on a timing-dependent raw-state
digest.

- [ ] **Step 5: Implement controller ownership, evidence sealing, and routing**

The PowerShell controller starts each Node cell hidden, immediately records
exact PID plus creation time, and passes one complete token:

```text
--capture-operation-v11-run-id=<exact canonical UUID from prelaunch>
```

It collects ordered snapshots:

```text
before
after-start
during
after-child-terminal
after-cleanup
terminal
```

The finalizer imports sealed V11 ownership/journal modules and requires:

```text
global audit complete
owned residue empty
ambiguous residue empty
fixed ports absent
exact profiles absent
HTTP(S) requests empty
Git/product/runtime unchanged
phase evidence exact
```

The controller never terminates unrelated or ambiguous processes.

Each stage-specific sealer:

1. validates every fixed-inventory path as a regular non-reparse file;
2. records sorted `{relativePath,bytes,sha256}` rows;
3. creates only `diagnostic-evidence-lock.json` with exclusive `wx`;
4. closes and reads it back; and
5. recomputes the lock.

The finalizer, not the sealer, rejects extra files, `.profiles`, and
`process-registration.json`.

- [ ] **Step 6: Implement the two durable operators**

The preflight operator starts one hidden PowerShell controller:

```js
const controllerArgs = [
  '-NoProfile',
  '-NonInteractive',
  '-ExecutionPolicy',
  'Bypass',
  '-File',
  join(resultRoot, 'diagnostic', 'run-operation-isolation.ps1'),
  '-Stage',
  'preflight',
  '-RunId',
  prelaunch.runId,
];
const child = spawn(
  'C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe',
  controllerArgs,
  {
    cwd: join(resultRoot, 'diagnostic'),
    windowsHide: true,
    stdio: ['ignore', 'pipe', 'pipe'],
  },
);
```

The isolation operator uses the same form with `-Stage`, `isolation`.

Each operator has one start site, no loop/retry, exact deadlines, distinct
prelaunch/evidence paths, one verifier invocation, and one terminal journal
event.

- [ ] **Step 7: Run candidate GREEN attempts**

Before running GREEN, create
`candidate/task-3/staged-diagnostic/offline-suite-v11.mjs`. It contains the
exact thirteen-suite inventory and normalization allowlist from Step 9, runs
only caller-supplied temporary fixture roots, rejects the real control/result/
release roots, and has no browser-start site.

The diagnostic operator static suite must read this file as an additional
input. Case 10 proves that the operators and offline runner contain no product
write, progress, push, publish, deploy, or real-result-root test command.

Run:

```text
diagnostic-contract/000002: expected PASS, 20/20
serialization-contract/000002: expected PASS, 8/8
operator-contract/000002: expected PASS, 10/10
```

Parse both PowerShell sources without executing a browser:

```powershell
$tokens = $null
$errors = $null
[Management.Automation.Language.Parser]::ParseFile(
  $path,
  [ref]$tokens,
  [ref]$errors
) | Out-Null
if ($errors.Count -ne 0) { throw 'PowerShell parse failed' }
```

Run `node --check` over every candidate `.mjs`.

Expected: `38/38`, no browser launch, no profile, no network, no result root,
and unchanged Git/product/import/predecessor bytes.

- [ ] **Step 8: Obtain the independent Task 3 candidate review**

The reviewer verifies:

```text
exact fixture/style/key/validator identities
exact matrix order, JS flags, operations, and deadlines
exact sentinel, capability schema, and canonical digest
V11 token exactness and V10-token rejection
no evidence output path in child argv
one-start/no-retry operators
bounded process transport
global/owned/ambiguous/trace separation
zero HTTP(S) contract
exact profile/fixed-port cleanup
exact stage inventories and sealers
offline runner exact suite map, normalization allowlist, and temporary roots
no product write/navigation/server/deploy command
```

Create the next contiguous Task 3 candidate-review record. Its compliant
totals are:

```js
{
  diagnosticContract: { passed: 20, total: 20 },
  serializationContract: { passed: 8, total: 8 },
  operatorContract: { passed: 10, total: 10 },
}
```

Only a finding-free `COMPLIANT` record with `sealAuthorized: true` freezes the
candidate.

- [ ] **Step 9: Seal Task 3 sources and the reviewed offline-suite runner**

Seal all accepted Task 3 sources. `operational-files.json` lists only:

```text
operation-isolation-cell.mjs
run-operation-isolation.ps1
finalize-operation-isolation.mjs
evidence-seal-preflight.mjs
evidence-seal-isolation.mjs
```

Rows are sorted by relative path and contain exact
`{relativePath,bytes,sha256}`.

Seal the already-reviewed `offline-suite-v11.mjs`. It runs the complete sealed
suite in fresh temporary fixture roots, never the real result root, and emits
one compact aggregate. Exact totals are:

```text
derivation check-only: 1/1
attempt evidence: 24/24
semantic: 14/14
journal: 15/15
Windows arguments: 16/16
ownership: 25/25
negative injections: 18/18
source core: 24/24
reconstruction controller: 30/30
Task 2 operator contracts: 14/14
diagnostic JavaScript: 20/20
native PowerShell: 8/8
diagnostic operator contracts: 10/10
aggregate: 219/219
```

Normalization removes values only from these exact fields:

```text
observedAtUtc
startedAtUtc
endedAtUtc
processId
parentProcessId
creationTimeUtc
writerNonce
temporaryRoot
```

Case order, facts, counts, decisions, paths outside the temporary root,
deadlines, and hashes remain unchanged.

- [ ] **Step 10: Run the sealed offline suite twice**

Run the sealed aggregate through:

```text
offline-suite/000001: expected PASS
offline-suite/000002: expected PASS
```

Each attempt uses a fresh temporary root. Extract the normalized aggregate
bytes from each parsed result and require exact byte equality and equal
SHA-256.

Expected:

```text
first: 219/219
second: 219/219
normalized bytes: identical
normalized SHA-256: identical
browser starts: 0
network requests: 0
```

- [ ] **Step 11: Seal-review Task 3 and authorize Task 4**

Create `locks/task-3-contract-lock.json` over:

```text
all prior imports/events/locks/reviews/sealed identities
every accepted Task 3 candidate source and test
all Task 3 candidate attempts
all Task 3 candidate-review attempts
accepted candidate review
all sealed Task 3 files
operational manifest
both offline-suite attempts
both normalized aggregate identities
absent result/release roots
```

The seal reviewer recomputes all sources, tests, results, normalized equality,
fixed inventories, and boundary absences, then exclusively creates
`reviews/task-3-seal-review.json`.

Only after exact readback may the sealed journal writer create event `6`, then
`locks/task-3-authorization-lock.json` with `task4Authorized: true`.

Expected: Task 4 authorized, all candidate namespaces frozen, six-event
journal exact, result/release roots absent, and Git/product/predecessor bytes
unchanged.

Stop on the first unresolved Task 3 failure.

---

### Task 4: Reconstruct the V11 result root exactly once

**Files:**

- Execute: `sealed/task-4-reconstruct-v11-once.mjs`
- Create exclusively: `locks/task-4-prelaunch.json`
- Create exclusively: `locks/task-4-operator-evidence.json`
- Create exclusively: `reviews/task-4-review.json`
- Create exclusively: `locks/task-4-terminal-lock.json`
- Create exclusively: `journal/000007-task-4-reconstruction-terminal.json`
- Create once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v11`

**Interfaces:**

- Consumes: sealed Tasks 1 through 3, identical normalized offline results,
  terminal V8/V9/V10 and import facts, exact Git/runtime/source boundaries.
- Produces: one accepted empty-diagnostic V11 reconstruction or one terminal
  rejection. Only exact acceptance authorizes Task 5.

- [ ] **Step 1: Reauthenticate every reconstruction precondition**

Require:

```text
events 1 through 6 valid
Tasks 1 through 3 locks/reviews exact
all attempt/import trees exact
two normalized 219/219 results byte-identical
tracked Git clean at execution HEAD
terminal V8/V9/V10 identities exact
runtime and causal source exact
result and release roots absent
ports 4381, 4382, and 4383 unoccupied
no exact or ambiguous V11 process/profile residue
```

Expected: all facts accepted without writing the result root.

- [ ] **Step 2: Invoke the durable reconstruction operator once**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v11-control\sealed'
& 'C:\Program Files\nodejs\node.exe' '.\task-4-reconstruct-v11-once.mjs'
```

Do not invoke `prepare-v11.mjs reconstruct` directly. Do not run the operator a
second time for any client timeout or nonzero result.

- [ ] **Step 3: Observe the original operator to terminal state**

If the client returns before durable completion, read the exact operator PID
and creation time from `locks/task-4-prelaunch.json`. Observe only that exact
identity until terminal or the fixed parent deadline. Never start another
operator.

- [ ] **Step 4: Verify reconstruction read-only**

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\read-only-verify-v11.mjs' reconstruction `
  --root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v11'
```

Require:

```text
exact thirteen-entry top-level allowlist
five exact semantic manifests plus source-v7-diagnostic
exact V11 records and predecessor/import lock
empty regular diagnostic directory
absent release root
complete global audit and resolution trace
empty owned and ambiguous residue
empty profiles and fixed-port listeners
unchanged Git/product/runtime/predecessor/import boundaries
verified one-start operator evidence
```

- [ ] **Step 5: Create review, event 7, and terminal lock**

Create `reviews/task-4-review.json` exclusively from independent facts. Create
event `7` with `ACCEPT` only on exact acceptance; otherwise `REJECT`. Create
`locks/task-4-terminal-lock.json` over the prelaunch, operator evidence,
review, event, and result inventory.

On rejection, preserve the partial root and stop V11. On acceptance, record
`task5Authorized: true`; leave `diagnostic` empty.

---

### Task 5: Install the reviewed diagnostic harness exactly once

**Files:**

- Execute: `sealed/task-5-install-diagnostic-v11-once.mjs`
- Create exclusively: `locks/task-5-prelaunch.json`
- Create exclusively: `locks/task-5-operator-evidence.json`
- Create exclusively: `reviews/task-5-review.json`
- Create exclusively: `locks/task-5-terminal-lock.json`
- Create exclusively: `journal/000008-task-5-installation-terminal.json`
- Populate once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v11\diagnostic`

**Interfaces:**

- Consumes: accepted Task 4 reconstruction and exact five-row operational
  manifest.
- Produces: five exact operational files plus `installation.json`. Only exact
  acceptance authorizes Task 6.

- [ ] **Step 1: Reauthenticate reconstruction and staged manifest**

Require event `7` `ACCEPT`, exact Task 4 terminal lock/review, empty regular
non-reparse diagnostic directory, exact staged five-row manifest, unchanged
sealed sources, and unchanged Git/product/runtime/import boundaries.

- [ ] **Step 2: Invoke the installer once**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v11-control\sealed'
& 'C:\Program Files\nodejs\node.exe' '.\task-5-install-diagnostic-v11-once.mjs'
```

The installer launches no browser, PowerShell controller, server, or network.
Never invoke it again.

- [ ] **Step 3: Verify installed bytes read-only**

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\read-only-verify-v11.mjs' installation `
  --root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v11\diagnostic'
```

Require exact equality with the five-row manifest, terminal
`installation.json`, no extra file/stage/profile, empty owned/ambiguous
residue, unoccupied ports, and unchanged boundaries.

- [ ] **Step 4: Create review, event 8, and terminal lock**

Create the independent Task 5 review, event `8`, and Task 5 terminal lock
exclusively. Rejection is terminal with no reinstall. Exact acceptance records
`task6Authorized: true`.

---

### Task 6: Run the browser-free transport preflight exactly once

**Files:**

- Execute: `sealed/task-6-preflight-v11-once.mjs`
- Create exclusively: `locks/task-6-prelaunch.json`
- Create exclusively: `locks/task-6-operator-evidence.json`
- Create exclusively: `reviews/task-6-review.json`
- Create exclusively: `locks/task-6-terminal-lock.json`
- Create exclusively: `journal/000009-task-6-preflight-terminal.json`
- Create once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v11\diagnostic\preflight`

**Interfaces:**

- Consumes: accepted installation and exact sealed/imported boundaries.
- Produces: one sealed `ACCEPT`, `REJECT`, or `INCONCLUSIVE` preflight. Only
  exact acceptance authorizes Task 7.

- [ ] **Step 1: Capture exact prelaunch facts**

Require:

```text
events 1 through 8 exact
Task 5 terminal lock/review exact
preflight and isolation paths absent
no V11 profile or process residue
ports 4381, 4382, and 4383 unoccupied
installed harness exact
Git/product/runtime/predecessor/import identities unchanged
```

Create prelaunch evidence before the sole controller start.

- [ ] **Step 2: Invoke the preflight operator once**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v11-control\sealed'
& 'C:\Program Files\nodejs\node.exe' '.\task-6-preflight-v11-once.mjs'
```

Do not invoke the PowerShell controller, cell, finalizer, or verifier directly.

- [ ] **Step 3: Verify the exact preflight result**

Require:

```text
operator exit 0
decision ACCEPT
pass true
chromeLaunched false
top-level one-element process array
one registered exit-zero controller child
exact V11 run token and no V10 authority token
no evidence output path in child argv
empty stderr and validationErrors
exact phase journal
exact eight-file preflight inventory plus diagnostic-evidence-lock.json
complete immutable control journal and attempt/import chains
complete global audit and resolution trace
empty owned and ambiguous process/browser/profile/listener residue
zero HTTP(S)
unchanged Git/product/runtime/predecessors/imports
```

- [ ] **Step 4: Independently recompute, seal, and route**

Use the operator-captured verifier result plus direct disk readback; do not run
another preflight. Create the independent review, event `9`, and terminal lock.

Only exact `ACCEPT` records `task7Authorized: true`. `REJECT` or
`INCONCLUSIVE` is terminal.

---

### Task 7: Run the unchanged five-cell isolation stage exactly once

**Files:**

- Execute: `sealed/task-7-isolation-v11-once.mjs`
- Create exclusively: `locks/task-7-prelaunch.json`
- Create exclusively: `locks/task-7-operator-evidence.json`
- Create exclusively: `reviews/task-7-review.json`
- Create exclusively: `locks/task-7-terminal-lock.json`
- Create exclusively: `journal/000010-task-7-isolation-terminal.json`
- Create once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v11\diagnostic\isolation`

**Interfaces:**

- Consumes: exact accepted Task 6 and the fixed five-cell experiment.
- Produces: one terminal `CONFIRMED`, `FALSIFIED`, or `INCONCLUSIVE` matrix.

- [ ] **Step 1: Reauthenticate every fixed boundary**

Require exact Task 6 evidence, absent isolation path, exact installed
harness/source/runtime, clean Git/product, unoccupied ports, no V11 residue,
and valid events `1` through `9`.

- [ ] **Step 2: Invoke the isolation operator once**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v11-control\sealed'
& 'C:\Program Files\nodejs\node.exe' '.\task-7-isolation-v11-once.mjs'
```

Do not invoke the controller, cells, finalizer, or verifier directly.

- [ ] **Step 3: Observe the original durable identity through the budget**

The controller budget is `1000000` ms and operator budget is `1180000` ms. If
the client returns early, observe the exact prelaunch PID plus creation time.
Never start another stage.

- [ ] **Step 4: Verify the only confirming matrix**

```text
add-style-disabled: TIMEOUT
add-style-enabled: PASS
evaluate-entry-disabled: PASS
collection-disabled: PASS
synchronous-full-disabled: PASS
decision: CONFIRMED
pass: true
```

Also require:

```text
entry token v8-evaluate-entry
collection rawStateDigestSha256 null
all collection capability booleans true
full canonical digest b8634b4f899eee08ce6d1c14c57c11657214372a9f2eb53107282af5eb43ac67
five ordered registered exit-zero process rows
empty cell stderr, HTTP(S), and validationErrors arrays
exact phase journals, streams, operations, and deadlines
exact twenty-four-file isolation inventory plus diagnostic-evidence-lock.json
exact runtime, fixture, style, and causal source identities
complete global audit and resolution trace
empty owned and ambiguous process/browser/profile/listener residue
unchanged Git/product/predecessors/imports and absent release root
```

- [ ] **Step 5: Independently recompute and classify**

Classification is exact:

```text
valid completed outcome mismatch: FALSIFIED
identity/ambiguity/launch/transport/filesystem/network/deadline/cleanup/seal
failure: INCONCLUSIVE
exact matrix and every gate: CONFIRMED
```

Recompute results, streams, phase journals, process identities, state digest,
global/owned/ambiguous/trace rows, cleanup, and evidence lock.

- [ ] **Step 6: Create event 10 and route only to closeout**

Create the independent review, event `10`, and Task 7 terminal lock
exclusively. No decision authorizes a rerun. `task8Authorized: true` exists
only because Task 8 is read-only terminal closeout.

---

### Task 8: Independently close V11 and route the terminal result

**Files:**

- Create exclusively: `terminal/task-8-terminal-review.json`
- Create exclusively: `terminal/task-8-report.md`
- Create exclusively: `journal/000011-task-8-review-terminal.json`
- Create exclusively: `locks/task-8-terminal-lock.json`

**Interfaces:**

- Consumes: every sealed V11 control/result artifact.
- Produces: final evidence-integrity verdict and allowed next-design route.
  Starts no browser, controller, cell, installer, or reconstruction.

- [ ] **Step 1: Reauthenticate current boundaries**

Freshly read:

```text
Git branch, execution HEAD, status, staged/unstaged diffs, diff-check, index lock
committed design and plan identities
terminal V8/V9/V10 roots and no-retry states
complete V11 imports, attempts, events, locks, and reviews
complete V11 control/result inventories
runtime and causal source
immutable product trees
ports and profiles
global, owned, ambiguous, and resolution-trace rows
release-root absence
```

- [ ] **Step 2: Recompute terminal diagnostic evidence**

Read all five results, stdout/stderr, phase journals, process array, matrix,
cleanup, causal verification, installation, and evidence seals. Recompute the
canonical full-state digest and every locked identity. Do not trust Task 7's
decision field.

- [ ] **Step 3: Create the terminal review exclusively**

Exact confirming object:

```js
{
  schema: 'efficient-technologies/capture-operation-v11-terminal-review-v1',
  evidenceVerdict: 'COMPLIANT',
  diagnosticDecision: 'CONFIRMED',
  v11Terminal: true,
  retryAuthorized: false,
  productMutationAuthorized: false,
  releaseAuthorized: false,
  publicationAuthorized: false,
  deploymentAuthorized: false,
  nextDesignAuthorized: 'smallest-evidence-based-helper-correction',
  findings: [],
}
```

Routing is exact:

| Recomputed evidence | Recomputed diagnostic | `evidenceVerdict` | `nextDesignAuthorized` | `findings` |
|---|---|---|---|---|
| complete and internally exact | `CONFIRMED` | `COMPLIANT` | `smallest-evidence-based-helper-correction` | `[]` |
| complete and internally exact | `FALSIFIED` | `COMPLIANT` | `null` | `[]` |
| complete and internally exact | `INCONCLUSIVE` | `COMPLIANT` | `null` | `[]` |
| missing, contradictory, drifted, or unsupported | recomputed actual decision | `NONCOMPLIANT` | `null` | exact non-empty integrity findings |

Every route keeps `v11Terminal: true`, `retryAuthorized: false`, and all
product/release/publication/deployment authorization fields false. Event `11`
uses `ACCEPT` for `COMPLIANT` evidence even if the diagnostic result is
`FALSIFIED` or `INCONCLUSIVE`; it uses `REJECT` only for `NONCOMPLIANT`
evidence.

- [ ] **Step 4: Create event 11, final lock, and boundary report**

Create event `11` and `locks/task-8-terminal-lock.json` over the terminal
review, complete eleven-event chain, every task lock/review, imports/attempts,
result inventory, and boundary identities.

`terminal/task-8-report.md` states exactly:

```text
No UI, video, scroll, scene, zoom, motion, animation, product, release,
publication, deployment, or live-site change occurred in V11.
```

`CONFIRMED` proves only the diagnostic causal hypothesis. It does not prove a
production helper correction, performance improvement, release readiness,
SEO/GEO publication, deployment, or live-site change.

---

## Verification Before Completion

No task claims completion from a producer boolean or report alone.

Before every completion claim, freshly verify:

```text
current Git branch, execution HEAD, status, staged/unstaged diffs, diff-check,
and index lock
committed design and plan identities
terminal V8, V9, and V10 exact identities and no-retry states
all V11 imports, attempts, events, locks, and independent reviews
candidate namespace ownership/freeze state
sealed source inventories
result-root and stage inventories
semantic immutable manifests
global, owned, ambiguous, and resolution-trace classifications
process identities including creationTimeUtc
profiles and fixed-port listeners
runtime and playwright-core identities
product and immutable-tree identities
release-root absence
unauthorized later-path absence
```

V11 can be called successful only if:

```text
V5 through V10 remain byte-identical and terminal
V10 remains stopped at its immutable-evidence breach
the exact accepted V10 Task 1 set is self-contained inside V11
V10 Task 2 remains terminal-reference-only and receives no V11 credit
all product and immutable-tree snapshots remain exact
V11-native derivation contains only declared differences
monotonic allocation passes every positive and negative contract
no attempt/evidence path is reused, replaced, renamed, moved, or deleted
exact argument ownership rejects every near match
snapshot-scoped ancestry rejects PID reuse
every candidate and seal review accepts without findings
the complete offline suite passes twice with identical normalized bytes
one V11 result root is reconstructed exactly once
one diagnostic installation accepts
one browser-free preflight accepts
one five-cell stage produces exact sealed CONFIRMED
owned and ambiguous terminal residue are empty
runtime/network/Git/product/journal/attempt/cleanup boundaries pass
the V11 release root remains absent
no product, visible surface, publication, deployment, or live-site mutation occurs
```

Every final statement distinguishes:

```text
controller/evidence integrity
diagnostic causal result
product/release/publication/deployment authority
```

No `CONFIRMED` statement authorizes product or live-site mutation. That
requires a separate approved design and plan.
