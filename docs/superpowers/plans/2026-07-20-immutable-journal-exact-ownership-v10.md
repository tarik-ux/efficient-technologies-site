# Immutable-Journal Exact-Ownership Capture Isolation V10 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use
> `superpowers:subagent-driven-development` (recommended) or
> `superpowers:executing-plans` to implement this plan task-by-task. Steps use
> checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and independently seal a fresh V10 controller with immutable
event evidence, exact parsed-argument ownership, and snapshot-scoped process
ancestry, then run the unchanged five-cell operation-isolation experiment
exactly once if every preceding gate accepts.

**Architecture:** Tasks 1 through 3 use separate editable candidate
namespaces, finding-free candidate reviews, exclusive sealed copies, immutable
journal events, and independent sealed reviews. Tasks 4 through 8 are
one-shot: reconstruct once, install once, preflight once, run the fixed
five-cell matrix once, and independently terminalize without modifying any
earlier evidence.

**Tech Stack:** Static repository; Node.js `v24.11.1`; Windows PowerShell
`5.1`; ECMAScript modules; fixed Playwright
`1.62.0-alpha-1783623505000`; fixed Chrome `150.0.7871.115`; no package
install and no build step.

## Global Constraints

- V8 is terminal, failed, immutable, and has no retry or repair authority.
- V9 is terminal, noncompliant, immutable, and stopped after Task 1.
- V9 Task 2 and every later V9 task remain unauthorized.
- Never mutate V5, V6, V7, V8, V9, publish-site product bytes, or the live
  website.
- Never change UI, video, scrolling, scenes, zooms, motion, transitions, or
  animations.
- Never create
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v10`.
- Before Task 1, the V10 control, result, and release roots must all be absent.
- Task 1 may create the control root once. Only Task 4 may create the result
  root. Only Task 5 may populate its initially empty `diagnostic` directory.
- Only Tasks 1, 2, and 3 have editable candidate namespaces. Each namespace
  must be absent before its owning task and freezes when that task is sealed.
- Every file below `sealed`, `journal`, `locks`, `reviews`, `streams`,
  `terminal`, and the result root is created exclusively and never modified.
- V10 has no `progress.md`, mutable index, append operation, or in-place status
  file.
- Never delete and recreate a failed V10 root, candidate namespace, sealed
  file, event, lock, review, prelaunch record, profile root, or terminal
  record.
- The publish checkout remains clean at the execution HEAD created by the
  commit containing this plan.
- No implementation task commits, pushes, publishes, deploys, or edits a
  tracked file. Task evidence locks replace implementation commits because
  implementation artifacts intentionally live outside Git.
- Never install or update a dependency, run Lighthouse, start a site server,
  navigate to product content, or make an HTTP(S) request.
- All task processes are hidden, registered with `processId` plus
  `creationTimeUtc`, deadline-bounded, and cleaned only after exact ownership
  revalidation.
- Unrelated global activity is sealed for audit, never killed, and never used
  as a qualification failure.
- Ambiguous V10-relevant activity is never killed and produces
  `INCONCLUSIVE`.
- Fixed ports `4381`, `4382`, and `4383` are exclusive V10 resources. A
  listener on any one rejects the relevant gate regardless of ownership.
- Offline candidate defects may be corrected only before their owning seal.
  After a task lock exists, that task has no repair or replacement path.
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
docs/superpowers/specs/2026-07-20-immutable-journal-exact-ownership-v10-design.md

commit:
48ec486ae3c0c08e4d93babd9044f9180c5ec282

bytes / sha256:
39684 / ce303e860b217c387b457964569eded72283671ea759f8ed45d430bef97c1199
```

Implementation plan:

```text
docs/superpowers/plans/2026-07-20-immutable-journal-exact-ownership-v10.md
```

The execution HEAD is discovered after this plan is committed. It must equal
both `git rev-parse HEAD` and the last commit touching this plan.

```powershell
$repo = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site'
$plan = 'docs/superpowers/plans/2026-07-20-immutable-journal-exact-ownership-v10.md'
$executionHead = (git -C $repo rev-parse HEAD).Trim()
$planCommit = (git -C $repo log -1 --format=%H -- $plan).Trim()
if ($executionHead -ne $planCommit) {
  throw 'committed V10 plan is not execution HEAD'
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

absent V9 result:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9

absent V9 release:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v9

fresh V10 control:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control

fresh V10 result:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v10

forbidden V10 release:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v10
```

Terminal V9 control allowlist:

```text
process-ownership-v9.mjs
process-ownership-v9.test.mjs
progress.md
semantic-map-v9.mjs
semantic-map-v9.test.mjs
task-1-contract-lock.json
task-1-ownership-green.json
task-1-ownership-red.json
task-1-report.md
task-1-semantic-green.json
task-1-semantic-red.json
```

The exact V9 identities are copied from the approved design and recomputed
before Task 1 root creation. The V9 `progress.md` hash must remain:

```text
process-ownership-v9.mjs:
5149 / 5520f54f08e09a5d27d9844f7f45435f0e7d9cd728a45d3ab3496d9198a66e8b

process-ownership-v9.test.mjs:
11132 / a22b51a7a497e6bda970bab16bafb47bb02289ce6dfde78e89f38a3e4ede43b5

semantic-map-v9.mjs:
1812 / 550e29edea4ab20e90a660fac7cb2fa2bc9557087faaea583b9178a30ea432ee

semantic-map-v9.test.mjs:
4648 / dfb34228e4d81e20a3e4e5943f90ba355bd16f03cace986ef1360d88a056191a

task-1-contract-lock.json:
2364 / cc2b8e1b42ab15da36d494cfdcfdcbad17ef973105b89a55fda9cb5e6578a632

task-1-ownership-green.json:
1604 / 3aab125dcfb6aad101bac5314509faba18a1b46472296113d48afa84a1f33208

task-1-ownership-red.json:
3511 / 0e1eec0fd983560c26acff50c7f51a7d96abecfca1fdb7da62b414e370cd91f5

task-1-report.md:
2508 / cb59fcff2fc32bd2663e7266980d73a3825ff964bea867c6fae8109e61b57d8b

task-1-semantic-green.json:
984 / 3adb7c0af36978364dc0b51b79e26805882c16d0828f0d68a259ff11d876bdf9

task-1-semantic-red.json:
1044 / fd7c4e71c1337071ad5d397e5640b12dbb12c460659daa174d00d68a48c4aaa3

progress.md:
1747 / 39bccb07aa2e4eca1432e384b57fe78018859bbb1961174eae74fb557d7f1670
```

Terminal V8 controlling identities:

```text
prepare-v8.mjs:
29106 / 91733cab3c38b7db412944d41f75620808628494c03a24a519a6e80ec753a755

task-2-reconstruct-v8-once.mjs:
43030 / 3016893f61ca7be82c01a48f17df870d82dc678ecf35290a3f4a73d9e11ff10e

task-2-prelaunch.json:
149746 / 0804b6dbb8d3e078b0f90e9572763fa18f62f319dbb51924438419bed67ed392

task-2-operator-evidence.json:
502142 / 51d6c962d5e472db20e1203d6f7e2972f11daae64fca943f302d6c22b1c05f28

task-2-report.md:
9132 / 99ad9483438b561263cc24ea0ecc69c4e2cae91e274fb9197e2386a47da685a8

progress.md:
10068 / 8747b7be5f0dc873995b406b7c4e9fb67894f12f1868ce2baea3b74922cba264

task-1-report.md:
35411 / 6e2ccb8df95e2ae8fe44514f2d9d60ca8dca6fcd330f97e2e3c854701a23dbb5

reconstruction.json:
2879 / 9b61a31a8333dd1a80c04ba053e914e2c15e4e41fd8052e0d5537fe50c784949
```

The fixed V8 Task 2 report also binds these result-root records:

```text
experiment-policy.json:
6030 / c02a27c04bf45542aaca07eb05d1d1a7e9e1cca488b1efee27bfd0a017fefe0b

playwright-core-identity.json:
740 / e0d2c22e14993f0e900efd8b04bf94da35fe499a7e37e706921b2994c3d5edca

runtime-identity.json:
15129 / 9e6dee19a223e6b72f2b266b22032f11f0e054a5b4af7f4e375e747e2b3adc31

terminal-v7-lock.json:
4248 / ee14522c7fb68f181f3a9df3dfd9093a8688bf2818e931ad80acefd6b288a2b3

workspace-integrity-before.json:
26618 / 6ed06f6288cd41e0eb4e4a897a48877482174522065dd26b1cb69c287214655e
```

Immutable tree identities:

```text
baseline: 47 / cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850
candidate: 48 / bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653
browser: 20 / f7eb49d601f34fb29f097a902b2f8f29a85008ea9e78416c43320443428a4082
source-v4-browser: 18 / 089513385f53893c4cdbb1bc2b8402fb3c7f972886da05af9e94fda3a37c0782
accepted-harness-source: 49 / 46be90cedf7913ec4ee4c9b26a01b14fb1a0b8b923d86db0bf5270b4c52be4d1
```

The exact source-v7 diagnostic reference remains:

```text
9 / 5613ad53c84c6e2541baed9a90a2b6c11bf645ed6d3ef920b423a6b1d9753ba7

canonicalization-cell.mjs:
11942 / 0991879ab89d8ddf608e40a9910db742d5330b7f1622dbf95bf3b4711b4c556d

canonicalization-fixture.mjs:
2361 / 7c5ff2ff63b6ca9c9c56a01da6e94c460dd28d2544994a9e9334f62334739a4d

controller-json-serialization-contract.tests.ps1:
8872 / a5307f19c7ff15ee382a9f4799ca9e13a0cefc7a35418c7bec3d8341f77eb054

diagnostic-contract.test.mjs:
13478 / 491da909358138fa81b2768208948151cfc8481ad1e59c12f25f8ac336308e68

diagnostic-evidence-seal.mjs:
12225 / d612167606e201cefbc37cc6cc17e956b2c7e1c549b804187704b4cd9f18446d

finalize-canonicalization-diagnostic.mjs:
27549 / fbdd91e048351dfdd73701ebf872807c6e4a0dbfaeb7e158b39c9817b88a140f

run-canonicalization-diagnostic.ps1:
14580 / e37de578b06b5e41ef1b67187c630194eb1e680aa493113a769f77440708aae4

seal-adaptation.json:
1402 / 2ef7a846564301f2b6bf505ca5d0080c5d682eec6024f5373540a31bc9f67e34

source/capture-stabilizer-proposed.mjs:
2979 / b20b246cfb4571b3517d2156ccd1f5da21803fcb1d4b74f2953cb80e4f6f9c56
```

The authenticated derived diagnostic identities are:

```text
FIXTURE_HTML UTF-8 export:
857 / 26abcaec98428613bb0ca323779b0ca0049f390048f37a0745c711a700609ca9

JSON.stringify(CANONICAL_TOP_LEVEL_KEYS) UTF-8:
210 / ac32eb3b7c909703fa4ef614dfe8257b0eb60548a4d4ed6682a9d0fd49f1822a

CANONICAL_CAPTURE_STYLE UTF-8 export:
686 / aaa3fd1ce3ba66c21eee8a72f857eda1c07726cc8c56b581bf9c925373e9fd0e

passing canonical state:
b8634b4f899eee08ce6d1c14c57c11657214372a9f2eb53107282af5eb43ac67
```

These values are derived only after authenticating their containing source
files and `terminal-v7-lock.json`. V10 imports and rehashes the exports; it
never retypes the fixture, top-level-key list, canonical stylesheet, or passing
state.

Fixed runtime identities:

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

playwright-core/lib/coreBundle.js:
3407411 / be2e09efef3017b4eaa76f0cb5289f66c4ea57833f94319b17c1c2f184987ad7
last-write UTC ticks: 639192713587991449
```

---

## File and Responsibility Map

All implementation files are below:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control
```

| Path | Single responsibility |
|---|---|
| `candidate/task-1/semantic-map-v10.mjs` | Candidate plain-JSON semantic canonicalizer. |
| `candidate/task-1/semantic-map-v10.test.mjs` | Fourteen semantic comparison and rejection cases. |
| `candidate/task-1/immutable-journal-v10.mjs` | Candidate exclusive event writer, chain validator, and status projector. |
| `candidate/task-1/immutable-journal-v10.test.mjs` | Fifteen journal integrity and replacement cases. |
| `candidate/task-1/windows-command-line-v10.mjs` | Candidate strict Windows argument parser and exact matcher. |
| `candidate/task-1/windows-command-line-v10.test.mjs` | Sixteen quoting, path, run-token, and profile cases. |
| `candidate/task-1/process-ownership-v10.mjs` | Candidate global audit plus owned/ambiguous snapshot classifier. |
| `candidate/task-1/process-ownership-v10.test.mjs` | Twenty-five audit, ancestry, PID-reuse, ambiguity, and port cases. |
| `candidate/task-1/seal-task-1-v10.mjs` | Copy only accepted Task 1 candidate bytes into exclusive sealed paths and create the first events/lock. |
| `candidate/task-1/task-1-negative-injections.mjs` | Independent fixtures reproducing all three V9 defects and proving V10 rejection. |
| `sealed/semantic-map-v10.mjs` | Frozen semantic comparator used by every later task. |
| `sealed/immutable-journal-v10.mjs` | Frozen journal writer/validator/projector used by every later task. |
| `sealed/windows-command-line-v10.mjs` | Frozen parser and exact argument matcher. |
| `sealed/process-ownership-v10.mjs` | Frozen three-channel ownership classifier. |
| `sealed/task-1-tests/*.mjs` | Frozen Task 1 test and negative-injection sources. |
| `candidate/task-2/prepare-v10-core.mjs` | Authenticate Git, runtime, V8/V9, immutable trees, and source references. |
| `candidate/task-2/prepare-v10-core.test.mjs` | Twenty source-authentication cases. |
| `candidate/task-2/prepare-v10.mjs` | Check, reconstruct, and authenticate reconstructed V10 state. |
| `candidate/task-2/prepare-v10.test.mjs` | Twenty-eight reconstruction and terminalization cases. |
| `candidate/task-2/read-only-verify-v10.mjs` | Recompute task facts from disk without trusting producer booleans. |
| `candidate/task-2/task-4-reconstruct-v10-once.mjs` | Durable one-start reconstruction operator. |
| `candidate/task-2/task-5-install-diagnostic-v10-once.mjs` | One-start diagnostic installer without browser launch. |
| `candidate/task-2/operator-contract-v10.test.mjs` | Twelve static one-start, command, deadline, journal, and no-loop cases. |
| `candidate/task-2/seal-task-2-v10.mjs` | Seal only accepted Task 2 bytes and create its lock/event. |
| `sealed/prepare-v10-core.mjs` | Frozen source authenticator. |
| `sealed/prepare-v10.mjs` | Frozen one-shot reconstruction implementation. |
| `sealed/read-only-verify-v10.mjs` | Frozen multi-mode verifier. |
| `sealed/task-4-reconstruct-v10-once.mjs` | Frozen reconstruction operator. |
| `sealed/task-5-install-diagnostic-v10-once.mjs` | Frozen installation operator. |
| `sealed/operator-contract-v10.test.mjs` | Frozen operator static tests. |
| `candidate/task-3/task-6-preflight-v10-once.mjs` | Durable one-start browser-free preflight operator. |
| `candidate/task-3/task-7-isolation-v10-once.mjs` | Durable one-start five-cell operator. |
| `candidate/task-3/staged-diagnostic/operation-isolation-cell.mjs` | Run exactly one preflight or isolation cell. |
| `candidate/task-3/staged-diagnostic/run-operation-isolation.ps1` | Run preflight or the five ordered cells and serialize a top-level process array. |
| `candidate/task-3/staged-diagnostic/finalize-operation-isolation.mjs` | Validate, classify, seal, and invoke one read-only verifier. |
| `candidate/task-3/staged-diagnostic/evidence-seal-preflight.mjs` | Seal the exact preflight inventory. |
| `candidate/task-3/staged-diagnostic/evidence-seal-isolation.mjs` | Seal the exact isolation inventory. |
| `candidate/task-3/staged-diagnostic/operation-isolation-contract.test.mjs` | Eighteen fixed diagnostic cases. |
| `candidate/task-3/staged-diagnostic/controller-json-serialization-contract.tests.ps1` | Eight native PowerShell serialization cases. |
| `candidate/task-3/staged-diagnostic/diagnostic-operator-contract-v10.test.mjs` | Eight static preflight/isolation one-start and no-retry cases. |
| `candidate/task-3/staged-diagnostic/operational-files.json` | Exact five-file install manifest. |
| `candidate/task-3/seal-task-3-v10.mjs` | Seal accepted Task 3 sources, suite results, lock, and event. |
| `sealed/task-6-preflight-v10-once.mjs` | Frozen preflight operator. |
| `sealed/task-7-isolation-v10-once.mjs` | Frozen isolation operator. |
| `sealed/staged-diagnostic/*` | Frozen diagnostic sources, tests, and operational manifest. |
| `journal/*.json` | Immutable cross-task event chain; no mutable index. |
| `locks/*.json` | Exclusive source, result, authorization, and terminal locks. |
| `reviews/*.json` | Exclusive candidate and sealed independent review records. |
| `streams/*.stdout.json` | Compact captured child/verifier stdout. |
| `streams/*.stderr.txt` | Captured child/verifier stderr; expected empty on acceptance. |
| `terminal/task-8-terminal-review.json` | Final independently recomputed evidence verdict. |
| `terminal/task-8-report.md` | Final user/product boundary statement. |

Candidate files never authorize execution. Later tasks import only exact paths
below `sealed`.

---

## Shared Interfaces

Shared record shapes:

```js
// FileIdentity
{
  path: 'absolute path',
  bytes: 0,
  sha256: 'lowercase 64-character SHA-256',
}

// ProcessIdentity
{
  processId: 12345,
  creationTimeUtc: '2026-07-20T12:34:56.789Z',
}

// ProcessSnapshot
{
  snapshotId: 'before',
  observedAtUtc: '2026-07-20T12:34:56.789Z',
  rows: [],
}

// EventDefinitionMap entry
{
  sequence: 1,
  task: 1,
  phase: 'boundary',
  statuses: ['START'],
  factKeys: [
    'boundaryRecord',
    'designIdentity',
    'planIdentity',
    'gitHead',
    'v8Identity',
    'v9Identity',
    'v10RootsAbsent',
  ],
}
```

The numeric and timestamp values above are field examples. Actual identities
are freshly read. Every timestamp is exact millisecond UTC
`YYYY-MM-DDTHH:mm:ss.sssZ`.

`semantic-map-v10.mjs` exports:

```text
canonicalizeSemanticJson(value: JsonValue) -> JsonValue
semanticJsonEquals(actual: JsonValue, expected: JsonValue) -> boolean
assertSemanticJsonEquals(
  actual: JsonValue,
  expected: JsonValue,
  label: non-empty string
) -> actual JsonValue or throws
```

`immutable-journal-v10.mjs` exports:

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

`ValidatedJournal` is exact:

```js
{
  valid: true,
  events: [
    {
      file: '000001-task-1-boundary.json',
      identity: { path: 'absolute path', bytes: 0, sha256: 'lowercase SHA-256' },
      record: {},
    },
  ],
  head: {
    path: 'absolute path',
    bytes: 0,
    sha256: 'lowercase SHA-256',
  },
  errors: [],
}
```

For an empty valid journal, `events` is `[]` and `head` is `null`.

`JournalProjection` is exact:

```js
{
  valid: true,
  eventCount: 0,
  head: null,
  taskStatus: {},
  authorization: {},
  errors: [],
}
```

`windows-command-line-v10.mjs` exports:

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

`process-ownership-v10.mjs` exports:

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

`OwnershipResult` is exact:

```js
{
  globalActivity: {
    added: [],
    removed: [],
    changed: [],
  },
  ownedIdentityKeys: [],
  ownedResidue: [],
  ambiguousResidue: [],
  resolutionTrace: [],
}
```

`GlobalActivity.changed` rows are exact:

```js
{
  before: {
    name: '',
    processId: 0,
    parentProcessId: 0,
    creationTimeUtc: '',
    executablePath: null,
    commandLine: null,
  },
  after: {
    name: '',
    processId: 0,
    parentProcessId: 0,
    creationTimeUtc: '',
    executablePath: null,
    commandLine: null,
  },
}
```

Every process row has exact ordered fields:

```text
name
processId
parentProcessId
creationTimeUtc
executablePath
commandLine
```

`prepare-v10-core.mjs` exports:

```text
authenticatePredecessorState(boundaries: BoundaryInput) -> Authentication
authenticateGitBoundary(repo: absolute path, expected: GitBoundary) -> GitFacts
authenticateRuntime(v8Root: absolute path) -> RuntimeFacts
authenticateImmutableInputs(v8Root: absolute path) -> ImmutableFacts
snapshotTree(root: absolute path) -> TreeSnapshot
```

`prepare-v10.mjs` exports:

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
buildExpectedV10Records(
  authentication: Authentication
) -> ExpectedV10Records
```

Its CLI modes are exact:

```text
check
reconstruct
authenticate-reconstructed-state
```

`read-only-verify-v10.mjs` modes are exact:

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

The allowed journal sequence is fixed:

| Sequence | Event ID | Task | Phase | Allowed status | Exact facts keys |
|---:|---|---:|---|---|---|
| 1 | `task-1-boundary` | 1 | `boundary` | `START` | `boundaryRecord`, `designIdentity`, `planIdentity`, `gitHead`, `v8Identity`, `v9Identity`, `v10RootsAbsent` |
| 2 | `task-1-contract-sealed` | 1 | `seal` | `ACCEPT` | `candidateReview`, `sealedAggregate`, `contractLockPath` |
| 3 | `task-1-review-accepted` | 1 | `review` | `ACCEPT` | `contractLock`, `sealReview`, `task2Authorized` |
| 4 | `task-2-controller-sealed` | 2 | `controller` | `ACCEPT` | `candidateReview`, `contractLock`, `sealReview`, `task3Authorized` |
| 5 | `task-3-offline-suite-accepted` | 3 | `offline-suite` | `ACCEPT` | `candidateReview`, `contractLock`, `sealReview`, `offlineGreen1`, `offlineGreen2`, `task4Authorized` |
| 6 | `task-4-reconstruction-terminal` | 4 | `reconstruction` | `ACCEPT` or `REJECT` | `prelaunch`, `operatorEvidence`, `review`, `decision`, `task5Authorized` |
| 7 | `task-5-installation-terminal` | 5 | `installation` | `ACCEPT` or `REJECT` | `prelaunch`, `operatorEvidence`, `review`, `decision`, `task6Authorized` |
| 8 | `task-6-preflight-terminal` | 6 | `preflight` | `ACCEPT`, `REJECT`, or `INCONCLUSIVE` | `prelaunch`, `operatorEvidence`, `review`, `decision`, `task7Authorized` |
| 9 | `task-7-isolation-terminal` | 7 | `isolation` | `CONFIRMED`, `FALSIFIED`, or `INCONCLUSIVE` | `prelaunch`, `operatorEvidence`, `review`, `decision`, `task8Authorized` |
| 10 | `task-8-review-terminal` | 8 | `terminal-review` | `ACCEPT` or `REJECT` | `terminalReview`, `evidenceVerdict`, `diagnosticDecision`, `retryAuthorized`, `nextDesignAuthorized` |

`contractLockPath` is the one path-valued fact in event `2`. It is the exact
absolute future Task 1 contract-lock path, and that target must still be absent
when event `2` is exclusively created. The same sealer then exclusively creates
the lock at that path. Event `3` records the resulting lock identity, avoiding
any event/lock hash cycle.

Every identity-valued fact uses:

```js
{
  path: 'absolute path',
  bytes: 0,
  sha256: 'lowercase 64-character SHA-256',
}
```

`bytes` above shows the integer field shape. Actual records contain freshly
recomputed non-negative byte counts.

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

No extra event or facts key is allowed.

---

## Fixed Deadlines

```text
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
dynamically, increased, decreased, or replaced by a sleep.

### Fixed Stage Evidence Inventories

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
own rows. Before calling or verifying the stage sealer, the finalizer requires
the exact listed inventory and rejects a missing path, extra unlocked regular
file, `.profiles`, or `process-registration.json`. The sealer exclusively
creates the lock and exact readback must pass.

### Candidate Review Attempt Convention

For Tasks 1 through 3, `A` below means a positive decimal review-attempt
integer. Review filenames must match exactly:

```text
task-1-candidate-review-A.json
task-2-candidate-review-A.json
task-3-candidate-review-A.json
```

The parser accepts only
`/^task-(?<task>[123])-candidate-review-(?<attempt>[1-9][0-9]*)\.json$/`,
then requires the parsed task to equal the owning task.

Each task starts with attempt `1` and permits only the next contiguous integer.
Every review attempt is exclusively created and read back, including a
`NONCOMPLIANT` attempt. A noncompliant record has `sealAuthorized: false` and
non-empty exact findings. Candidate corrections may then create new
attempt-specific RED/GREEN records and a new review-attempt record; no earlier
record is replaced. A `COMPLIANT` record has empty findings,
`sealAuthorized: true`, and identities matching the current candidate bytes.
All three tasks use the exact candidate-review schema shown in Task 1; only
`task`, `attempt`, identities, verdict, findings, and authorization values vary.
That accepted review freezes the owning candidate namespace. The sealer rejects
an earlier review, a noncontiguous filename, a noncompliant review, review
identity drift, or any candidate change after the accepted review.

---

### Task 1: Build, review, and seal the core V10 contracts

**Files:**

- Create once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control`
- Create/edit before seal: `candidate\task-1\*`
- Create exclusively: `sealed\semantic-map-v10.mjs`
- Create exclusively: `sealed\immutable-journal-v10.mjs`
- Create exclusively: `sealed\windows-command-line-v10.mjs`
- Create exclusively: `sealed\process-ownership-v10.mjs`
- Create exclusively: `sealed\task-1-tests\*.mjs`
- Create exclusively: `journal\000001-task-1-boundary.json`
- Create exclusively: `journal\000002-task-1-contract-sealed.json`
- Create exclusively: `journal\000003-task-1-review-accepted.json`
- Create exclusively: `locks\task-1-contract-lock.json`
- Create exclusively: `locks\task-1-authorization-lock.json`
- Create exclusively: `reviews\task-1-candidate-review-A.json`
- Create exclusively: `reviews\task-1-seal-review.json`

**Interfaces:**

- Consumes: committed design/plan, Git authority, terminal V8/V9 identities,
  immutable product identities, and absent V10 roots.
- Produces: the four frozen shared modules, immutable journal genesis, exact
  Task 1 locks, and reviewed Task 2 authorization.

- [ ] **Step 1: Reauthenticate authority and create the control root once**

Run from the project root:

```powershell
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$repo = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site'
$control = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control'
$result = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v10'
$release = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v10'
$v9Control = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control'
$design = 'docs/superpowers/specs/2026-07-20-immutable-journal-exact-ownership-v10-design.md'
$plan = 'docs/superpowers/plans/2026-07-20-immutable-journal-exact-ownership-v10.md'

if ((git -C $repo branch --show-current).Trim() -ne 'agent/performance-without-motion-loss') {
  throw 'branch mismatch'
}
if ((git -C $repo rev-parse '@{upstream}').Trim() -ne 'b416b8113315c95c32d4674aa54769d90c562abd') {
  throw 'upstream mismatch'
}
if ((git -C $repo remote get-url origin).Trim() -ne 'https://github.com/tarik-ux/efficient-technologies-site.git') {
  throw 'remote mismatch'
}
if (@(git -C $repo status --porcelain).Count -ne 0) {
  throw 'Git working tree is not clean'
}
git -C $repo diff --check
if ($LASTEXITCODE -ne 0) { throw 'git diff --check failed' }
if (Test-Path -LiteralPath (Join-Path $repo '.git\index.lock')) {
  throw 'Git index lock exists'
}
if ((git -C $repo rev-parse HEAD).Trim() -ne (git -C $repo log -1 --format=%H -- $plan).Trim()) {
  throw 'plan is not execution HEAD'
}
if ((git -C $repo log -1 --format=%H -- $design).Trim() -ne '48ec486ae3c0c08e4d93babd9044f9180c5ec282') {
  throw 'design commit mismatch'
}

function Assert-RegularDirectory {
  param([Parameter(Mandatory)][string]$Path)
  $item = Get-Item -LiteralPath $Path -Force -ErrorAction Stop
  if (-not $item.PSIsContainer -or
      (($item.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0)) {
    throw "regular non-reparse directory required: $Path"
  }
}

function Assert-NoReparseTree {
  param([Parameter(Mandatory)][string]$Path)
  Assert-RegularDirectory -Path $Path
  foreach ($entry in @(Get-ChildItem -LiteralPath $Path -Force -Recurse -ErrorAction Stop)) {
    if (($entry.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0) {
      throw "reparse entry forbidden: $($entry.FullName)"
    }
    if ($entry.Name -ieq '.git') {
      throw "nested Git metadata forbidden: $($entry.FullName)"
    }
  }
}

function Assert-RegularFileIdentity {
  param(
    [Parameter(Mandatory)][string]$Path,
    [Parameter(Mandatory)][long]$Bytes,
    [Parameter(Mandatory)][string]$Sha256,
    [Nullable[long]]$LastWriteUtcTicks = $null
  )
  $item = Get-Item -LiteralPath $Path -Force -ErrorAction Stop
  if ($item.PSIsContainer -or
      (($item.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0)) {
    throw "regular non-reparse file required: $Path"
  }
  if ($item.Length -ne $Bytes) {
    throw "byte mismatch: $Path"
  }
  $actualHash = (Get-FileHash -LiteralPath $Path -Algorithm SHA256).Hash.ToLowerInvariant()
  if ($actualHash -ne $Sha256) {
    throw "hash mismatch: $Path"
  }
  if ($null -ne $LastWriteUtcTicks -and
      $item.LastWriteTimeUtc.Ticks -ne [long]$LastWriteUtcTicks) {
    throw "last-write tick mismatch: $Path"
  }
}

function Assert-ExactDirectNames {
  param(
    [Parameter(Mandatory)][string]$Path,
    [Parameter(Mandatory)][AllowEmptyCollection()][string[]]$Expected
  )
  Assert-RegularDirectory -Path $Path
  [string[]]$actual = @(Get-ChildItem -LiteralPath $Path -Force -ErrorAction Stop |
    ForEach-Object Name)
  [string[]]$wanted = @($Expected)
  [Array]::Sort($actual, [StringComparer]::Ordinal)
  [Array]::Sort($wanted, [StringComparer]::Ordinal)
  if ($actual.Count -ne $wanted.Count) {
    throw "direct-entry count mismatch: $Path"
  }
  for ($index = 0; $index -lt $wanted.Count; $index += 1) {
    if ($actual[$index] -cne $wanted[$index]) {
      throw "direct-entry allowlist mismatch: $Path"
    }
  }
}

function Assert-ContainedTargetBoundary {
  param(
    [Parameter(Mandatory)][string]$Base,
    [Parameter(Mandatory)][string]$Target
  )
  Assert-RegularDirectory -Path $Base
  $baseFull = [IO.Path]::GetFullPath($Base).TrimEnd('\')
  $targetFull = [IO.Path]::GetFullPath($Target).TrimEnd('\')
  if (-not $targetFull.StartsWith(
      "$baseFull\",
      [StringComparison]::OrdinalIgnoreCase
  )) {
    throw "target escapes fixed performance root: $Target"
  }
  $cursor = Split-Path -Parent $targetFull
  while ($true) {
    Assert-RegularDirectory -Path $cursor
    if ($cursor.Equals($baseFull, [StringComparison]::OrdinalIgnoreCase)) {
      break
    }
    $next = Split-Path -Parent $cursor
    if ($next -eq $cursor) {
      throw "target ancestor did not reach fixed root: $Target"
    }
    $cursor = $next
  }
}

$performanceRoot = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance'
$v8Control = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control'
$v8Result = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8'
$v8Release = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-release-v8'
$v9Result = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9'
$v9Release = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v9'
$node = 'C:\Program Files\nodejs\node.exe'
$playwright = 'C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules\playwright'
$coreBundle = 'C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules\playwright-core\lib\coreBundle.js'
$chrome = 'C:\Program Files\Google\Chrome\Application\chrome.exe'
$edge = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'

$v8Files = @(
  @{ Path = (Join-Path $v8Control 'prepare-v8.mjs'); Bytes = 29106; Sha256 = '91733cab3c38b7db412944d41f75620808628494c03a24a519a6e80ec753a755' },
  @{ Path = (Join-Path $v8Control 'task-2-reconstruct-v8-once.mjs'); Bytes = 43030; Sha256 = '3016893f61ca7be82c01a48f17df870d82dc678ecf35290a3f4a73d9e11ff10e' },
  @{ Path = (Join-Path $v8Control 'task-2-prelaunch.json'); Bytes = 149746; Sha256 = '0804b6dbb8d3e078b0f90e9572763fa18f62f319dbb51924438419bed67ed392' },
  @{ Path = (Join-Path $v8Control 'task-2-operator-evidence.json'); Bytes = 502142; Sha256 = '51d6c962d5e472db20e1203d6f7e2972f11daae64fca943f302d6c22b1c05f28' },
  @{ Path = (Join-Path $v8Control 'task-2-report.md'); Bytes = 9132; Sha256 = '99ad9483438b561263cc24ea0ecc69c4e2cae91e274fb9197e2386a47da685a8' },
  @{ Path = (Join-Path $v8Control 'progress.md'); Bytes = 10068; Sha256 = '8747b7be5f0dc873995b406b7c4e9fb67894f12f1868ce2baea3b74922cba264' },
  @{ Path = (Join-Path $v8Control 'task-1-report.md'); Bytes = 35411; Sha256 = '6e2ccb8df95e2ae8fe44514f2d9d60ca8dca6fcd330f97e2e3c854701a23dbb5' },
  @{ Path = (Join-Path $v8Result 'reconstruction.json'); Bytes = 2879; Sha256 = '9b61a31a8333dd1a80c04ba053e914e2c15e4e41fd8052e0d5537fe50c784949' },
  @{ Path = (Join-Path $v8Result 'experiment-policy.json'); Bytes = 6030; Sha256 = 'c02a27c04bf45542aaca07eb05d1d1a7e9e1cca488b1efee27bfd0a017fefe0b' },
  @{ Path = (Join-Path $v8Result 'playwright-core-identity.json'); Bytes = 740; Sha256 = 'e0d2c22e14993f0e900efd8b04bf94da35fe499a7e37e706921b2994c3d5edca' },
  @{ Path = (Join-Path $v8Result 'runtime-identity.json'); Bytes = 15129; Sha256 = '9e6dee19a223e6b72f2b266b22032f11f0e054a5b4af7f4e375e747e2b3adc31' },
  @{ Path = (Join-Path $v8Result 'terminal-v7-lock.json'); Bytes = 4248; Sha256 = 'ee14522c7fb68f181f3a9df3dfd9093a8688bf2818e931ad80acefd6b288a2b3' },
  @{ Path = (Join-Path $v8Result 'workspace-integrity-before.json'); Bytes = 26618; Sha256 = '6ed06f6288cd41e0eb4e4a897a48877482174522065dd26b1cb69c287214655e' }
)
$v9Files = @(
  @{ Path = (Join-Path $v9Control 'process-ownership-v9.mjs'); Bytes = 5149; Sha256 = '5520f54f08e09a5d27d9844f7f45435f0e7d9cd728a45d3ab3496d9198a66e8b' },
  @{ Path = (Join-Path $v9Control 'process-ownership-v9.test.mjs'); Bytes = 11132; Sha256 = 'a22b51a7a497e6bda970bab16bafb47bb02289ce6dfde78e89f38a3e4ede43b5' },
  @{ Path = (Join-Path $v9Control 'progress.md'); Bytes = 1747; Sha256 = '39bccb07aa2e4eca1432e384b57fe78018859bbb1961174eae74fb557d7f1670' },
  @{ Path = (Join-Path $v9Control 'semantic-map-v9.mjs'); Bytes = 1812; Sha256 = '550e29edea4ab20e90a660fac7cb2fa2bc9557087faaea583b9178a30ea432ee' },
  @{ Path = (Join-Path $v9Control 'semantic-map-v9.test.mjs'); Bytes = 4648; Sha256 = 'dfb34228e4d81e20a3e4e5943f90ba355bd16f03cace986ef1360d88a056191a' },
  @{ Path = (Join-Path $v9Control 'task-1-contract-lock.json'); Bytes = 2364; Sha256 = 'cc2b8e1b42ab15da36d494cfdcfdcbad17ef973105b89a55fda9cb5e6578a632' },
  @{ Path = (Join-Path $v9Control 'task-1-ownership-green.json'); Bytes = 1604; Sha256 = '3aab125dcfb6aad101bac5314509faba18a1b46472296113d48afa84a1f33208' },
  @{ Path = (Join-Path $v9Control 'task-1-ownership-red.json'); Bytes = 3511; Sha256 = '0e1eec0fd983560c26acff50c7f51a7d96abecfca1fdb7da62b414e370cd91f5' },
  @{ Path = (Join-Path $v9Control 'task-1-report.md'); Bytes = 2508; Sha256 = 'cb59fcff2fc32bd2663e7266980d73a3825ff964bea867c6fae8109e61b57d8b' },
  @{ Path = (Join-Path $v9Control 'task-1-semantic-green.json'); Bytes = 984; Sha256 = '3adb7c0af36978364dc0b51b79e26805882c16d0828f0d68a259ff11d876bdf9' },
  @{ Path = (Join-Path $v9Control 'task-1-semantic-red.json'); Bytes = 1044; Sha256 = 'fd7c4e71c1337071ad5d397e5640b12dbb12c460659daa174d00d68a48c4aaa3' }
)
$runtimeFiles = @(
  @{ Path = $node; Bytes = 89894400; Sha256 = 'f13ac3ca23248dc389507e8fe38c34489ab7edb3e6d6700eb6da6a0b7e128eaf' },
  @{ Path = $chrome; Bytes = 3936920; Sha256 = '5718df5f35db255adb85cc8a8305645319f8513e4d8bf818741b8aa491003ce9' },
  @{ Path = $edge; Bytes = 4970824; Sha256 = 'f13f03c60b48664b5ab5b294c32feb1ff2fd632f206ee6732d3ddffb919a8b57' },
  @{ Path = $coreBundle; Bytes = 3407411; Sha256 = 'be2e09efef3017b4eaa76f0cb5289f66c4ea57833f94319b17c1c2f184987ad7'; LastWriteUtcTicks = [long]639192713587991449 }
)

Assert-ExactDirectNames -Path $v9Control -Expected @(
  'process-ownership-v9.mjs',
  'process-ownership-v9.test.mjs',
  'progress.md',
  'semantic-map-v9.mjs',
  'semantic-map-v9.test.mjs',
  'task-1-contract-lock.json',
  'task-1-ownership-green.json',
  'task-1-ownership-red.json',
  'task-1-report.md',
  'task-1-semantic-green.json',
  'task-1-semantic-red.json'
)
Assert-ExactDirectNames -Path $v8Result -Expected @(
  'accepted-harness-source',
  'baseline',
  'browser',
  'candidate',
  'diagnostic',
  'experiment-policy.json',
  'playwright-core-identity.json',
  'reconstruction.json',
  'runtime-identity.json',
  'source-v4-browser',
  'source-v7-diagnostic',
  'terminal-v7-lock.json',
  'workspace-integrity-before.json'
)
Assert-ExactDirectNames -Path (Join-Path $v8Result 'diagnostic') -Expected @()
foreach ($tree in @($v8Control, $v8Result, $v9Control, $playwright)) {
  Assert-NoReparseTree -Path $tree
}
foreach ($identity in @($v8Files + $v9Files + $runtimeFiles)) {
  $arguments = @{
    Path = $identity.Path
    Bytes = [long]$identity.Bytes
    Sha256 = [string]$identity.Sha256
  }
  if ($identity.ContainsKey('LastWriteUtcTicks')) {
    $arguments.LastWriteUtcTicks = [long]$identity.LastWriteUtcTicks
  }
  Assert-RegularFileIdentity @arguments
}
if ((& $node --version).Trim() -cne 'v24.11.1') {
  throw 'Node version mismatch'
}
$playwrightPackage = Get-Content -LiteralPath (Join-Path $playwright 'package.json') -Raw |
  ConvertFrom-Json -ErrorAction Stop
if ([string]$playwrightPackage.version -cne '1.62.0-alpha-1783623505000') {
  throw 'Playwright version mismatch'
}
if ((Get-Item -LiteralPath $chrome).VersionInfo.ProductVersion -cne '150.0.7871.115') {
  throw 'Chrome version mismatch'
}
if ((Get-Item -LiteralPath $edge).VersionInfo.ProductVersion -cne '150.0.4078.83') {
  throw 'Edge version mismatch'
}

$treeSpecification = @(
  @{ Label = 'baseline'; Root = (Join-Path $v8Result 'baseline'); FileCount = 47; Digest = 'cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850' },
  @{ Label = 'candidate'; Root = (Join-Path $v8Result 'candidate'); FileCount = 48; Digest = 'bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653' },
  @{ Label = 'browser'; Root = (Join-Path $v8Result 'browser'); FileCount = 20; Digest = 'f7eb49d601f34fb29f097a902b2f8f29a85008ea9e78416c43320443428a4082' },
  @{ Label = 'source-v4-browser'; Root = (Join-Path $v8Result 'source-v4-browser'); FileCount = 18; Digest = '089513385f53893c4cdbb1bc2b8402fb3c7f972886da05af9e94fda3a37c0782' },
  @{ Label = 'accepted-harness-source'; Root = (Join-Path $v8Result 'accepted-harness-source'); FileCount = 49; Digest = '46be90cedf7913ec4ee4c9b26a01b14fb1a0b8b923d86db0bf5270b4c52be4d1' },
  @{ Label = 'source-v7-diagnostic'; Root = (Join-Path $v8Result 'source-v7-diagnostic'); FileCount = 9; Digest = '5613ad53c84c6e2541baed9a90a2b6c11bf645ed6d3ef920b423a6b1d9753ba7' },
  @{ Label = 'playwright-wrapper'; Root = $playwright; FileCount = 62; Digest = '0bb3f4dfcf56b0a28933cc231f1d4a1467dd3c3bf45fb5637146fc4a95e6645f' }
)
$env:V10_PRE_ROOT_TREE_SPEC = $treeSpecification | ConvertTo-Json -Compress
try {
@'
import { createHash } from 'node:crypto';
import { lstatSync, readFileSync, readdirSync } from 'node:fs';
import { basename, relative, resolve, sep } from 'node:path';

const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
const normalizedRelativePath = (root, candidate) => {
  const value = relative(root, candidate).split(sep).join('/');
  if (!value || value === '..' || value.startsWith('../')) {
    throw new Error(`path escapes tree root: ${candidate}`);
  }
  return value;
};
const canonicalRows = rows => rows
  .map(({ relativePath: path, bytes, sha256: digest }) => ({
    relativePath: path,
    bytes,
    sha256: digest,
  }))
  .sort((left, right) => left.relativePath.localeCompare(right.relativePath));
const digestRows = rows =>
  sha256(Buffer.from(JSON.stringify(canonicalRows(rows)), 'utf8'));
const snapshot = treeRoot => {
  const root = resolve(treeRoot);
  if (basename(root).toLowerCase() === '.git') {
    throw new Error(`nested Git metadata is not permitted: ${root}`);
  }
  const rootStat = lstatSync(root);
  if (rootStat.isSymbolicLink() || !rootStat.isDirectory()) {
    throw new Error(`regular tree root required: ${root}`);
  }
  const files = [];
  const walk = directory => {
    for (const name of readdirSync(directory)
      .sort((left, right) => left.localeCompare(right))) {
      const candidate = resolve(directory, name);
      const entry = lstatSync(candidate);
      if (name.toLowerCase() === '.git') {
        throw new Error(`nested Git metadata is not permitted: ${candidate}`);
      }
      if (entry.isSymbolicLink()) {
        throw new Error(`reparse point is not permitted: ${candidate}`);
      }
      if (entry.isDirectory()) {
        walk(candidate);
      } else if (entry.isFile()) {
        const body = readFileSync(candidate);
        files.push({
          relativePath: normalizedRelativePath(root, candidate),
          bytes: body.length,
          sha256: sha256(body),
          mtimeMs: entry.mtimeMs,
        });
      } else {
        throw new Error(`unsupported tree entry: ${candidate}`);
      }
    }
  };
  walk(root);
  files.sort((left, right) =>
    left.relativePath.localeCompare(right.relativePath));
  return { fileCount: files.length, digest: digestRows(files) };
};

const specification = JSON.parse(process.env.V10_PRE_ROOT_TREE_SPEC ?? '[]');
for (const expected of specification) {
  const actual = snapshot(expected.Root);
  if (actual.fileCount !== expected.FileCount ||
      actual.digest !== expected.Digest) {
    throw new Error(`${expected.Label} snapshot mismatch`);
  }
}
'@ | & $node --input-type=module -
  if ($LASTEXITCODE -ne 0) {
    throw 'immutable tree authentication failed'
  }
} finally {
  Remove-Item Env:\V10_PRE_ROOT_TREE_SPEC -ErrorAction SilentlyContinue
}

foreach ($path in @($v8Release, $v9Result, $v9Release, $control, $result, $release)) {
  Assert-ContainedTargetBoundary -Base $performanceRoot -Target $path
  if (Test-Path -LiteralPath $path) { throw "required-absent path exists: $path" }
}

New-Item -ItemType Directory -Path $control -ErrorAction Stop | Out-Null
foreach ($relative in @(
  'candidate\task-1',
  'sealed',
  'journal',
  'locks',
  'reviews',
  'streams',
  'terminal'
)) {
  New-Item -ItemType Directory -Path (Join-Path $control $relative) -ErrorAction Stop | Out-Null
}
Assert-ExactDirectNames -Path $control -Expected @(
  'candidate',
  'journal',
  'locks',
  'reviews',
  'sealed',
  'streams',
  'terminal'
)
Assert-NoReparseTree -Path $control
foreach ($path in @($result, $release)) {
  if (Test-Path -LiteralPath $path) {
    throw "unauthorized V10 path appeared during control-root creation: $path"
  }
}
```

Expected: one regular non-reparse control root with seven exact regular
subdirectories. Result/release roots remain absent. Write
`candidate\task-1\task-1-boundary.json` with exclusive creation, then read it
back and record its bytes/hash. It is candidate provenance, not journal
authority.

- [ ] **Step 2: Write semantic tests and prove the valid RED**

The fourteen ordered cases are:

```text
1. same scalar passes
2. same nested object passes
3. shuffled top-level keys pass
4. shuffled nested keys pass
5. missing key fails
6. extra key fails
7. changed scalar type fails
8. changed digest fails
9. reordered array fails
10. non-finite number fails
11. cyclic object fails
12. non-plain object fails
13. undefined fails
14. empty assertion label fails
```

Start with this valid, deliberately incomplete implementation:

```js
export const canonicalizeSemanticJson = value => value;

export const semanticJsonEquals = (actual, expected) =>
  JSON.stringify(actual) === JSON.stringify(expected);

export const assertSemanticJsonEquals = (actual, expected, label) => {
  if (!semanticJsonEquals(actual, expected)) {
    throw new Error(`${label} mismatch`);
  }
  return actual;
};
```

Run:

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control\candidate\task-1'
& 'C:\Program Files\nodejs\node.exe' '.\semantic-map-v10.test.mjs' `
  --output '.\task-1-semantic-red-attempt-1.json'
```

Expected: exit `1`, `7/14`; exactly cases `3`, `4`, and `10` through `14`
fail. Import, syntax, output-shape, or cases `5` through `9` failing makes the
RED invalid.

- [ ] **Step 3: Implement semantic GREEN**

Replace only the candidate semantic module with:

```js
const isPlainObject = value => {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
};

const normalize = (value, ancestors) => {
  if (value === null || typeof value === 'string' || typeof value === 'boolean') {
    return value;
  }
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) {
      throw new Error('semantic JSON contains a non-finite number');
    }
    return value;
  }
  if (typeof value !== 'object') {
    throw new Error(`semantic JSON contains unsupported type: ${typeof value}`);
  }
  if (ancestors.has(value)) {
    throw new Error('semantic JSON contains a cycle');
  }
  ancestors.add(value);
  try {
    if (Array.isArray(value)) {
      return value.map(item => normalize(item, ancestors));
    }
    if (!isPlainObject(value)) {
      throw new Error('semantic JSON contains a non-plain object');
    }
    return Object.fromEntries(
      Object.keys(value)
        .sort((left, right) => left < right ? -1 : left > right ? 1 : 0)
        .map(key => [key, normalize(value[key], ancestors)]),
    );
  } finally {
    ancestors.delete(value);
  }
};

export const canonicalizeSemanticJson = value => normalize(value, new Set());

export const semanticJsonEquals = (actual, expected) =>
  JSON.stringify(canonicalizeSemanticJson(actual))
    === JSON.stringify(canonicalizeSemanticJson(expected));

export const assertSemanticJsonEquals = (actual, expected, label) => {
  if (typeof label !== 'string' || label.length === 0) {
    throw new Error('semantic comparison label is required');
  }
  if (!semanticJsonEquals(actual, expected)) {
    throw new Error(`${label} mismatch`);
  }
  return actual;
};
```

Run with output `task-1-semantic-green-attempt-1.json`.

Expected: exit `0`, `14/14`, and every fixture's serialized bytes remain
unchanged.

- [ ] **Step 4: Write immutable-journal tests and prove RED**

The fifteen ordered cases are:

```text
1. valid genesis accepts
2. valid next event links exact predecessor
3. projector is deterministic and write-free
4. duplicate sequence rejects
5. sequence gap rejects
6. filename and record disagreement rejects
7. predecessor filename mismatch rejects
8. predecessor byte mismatch rejects
9. predecessor hash mismatch rejects
10. malformed schema or exact-key mismatch rejects
11. partial JSON rejects
12. symbolic-link or reparse event rejects
13. exclusive recreation fails
14. replaced earlier event breaks downstream verification
15. no progress.md or mutable index is written
```

Create a syntax-valid stub whose four exported functions throw
`journal contract not implemented`. The test runner must catch each case,
write a normalized result with exclusive creation, and exit nonzero.

Run:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\immutable-journal-v10.test.mjs' `
  --output '.\task-1-journal-red-attempt-1.json'
```

Expected: exit `1`, `0/15`, with every case failing for the exact stub error.

- [ ] **Step 5: Implement the immutable journal**

Use these fixed structural constants:

```js
const EVENT_NAME = /^(?<sequence>\d{6})-(?<eventId>[a-z0-9]+(?:-[a-z0-9]+)*)\.json$/;
const EVENT_KEYS = [
  'schema',
  'sequence',
  'eventId',
  'task',
  'phase',
  'status',
  'observedAtUtc',
  'writerIdentity',
  'previous',
  'facts',
];
const EVENT_SCHEMA = 'efficient-technologies/capture-operation-v10-event-v1';
const UTC_MILLISECONDS = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
```

The implementation must:

```js
const exactKeys = (value, expected, label) => {
  const actual = Object.keys(value).sort();
  const wanted = [...expected].sort();
  if (JSON.stringify(actual) !== JSON.stringify(wanted)) {
    throw new Error(`${label} keys mismatch`);
  }
};

export const canonicalEventBytes = event =>
  Buffer.from(`${JSON.stringify(canonicalizeSemanticJson(event), null, 2)}\n`, 'utf8');
```

`validateJournalDirectory` sorts event names ordinally, requires sequence
`index + 1`, rejects non-files/symlinks, validates exact event and facts keys,
and recomputes each predecessor from the immediately preceding bytes.

`createJournalEvent` first validates the complete existing chain, constructs
only the next registered event, opens the exact next filename with `wx`,
writes canonical bytes, closes, reads back, and revalidates the complete
chain. It never writes another path.

`projectJournalStatus` calls the validator and derives task status and
authorization in memory. It does not call any writing API.

Run the journal suite with
`task-1-journal-green-attempt-1.json`.

Expected: exit `0`, `15/15`; the temporary test root contains no
`progress.md` or index.

- [ ] **Step 6: Write and implement the strict Windows argument parser**

The sixteen ordered cases are:

```text
1. unquoted arguments
2. quoted argument containing spaces
3. empty quoted argument
4. even backslashes before a quote
5. odd backslashes before a quote
6. quoted path with trailing backslash
7. unmatched quote rejects
8. NUL and unsupported control reject
9. case-insensitive exact path accepts
10. path prefix/suffix/embedded near misses reject
11. exact run token accepts
12. run prefix near miss rejects
13. run suffix near miss rejects
14. exact one-token profile accepts
15. exact two-token profile accepts
16. profile sibling/prefix/suffix near misses reject
```

First run a syntax-valid stub that throws `Windows argument contract not
implemented`.

Expected RED: exit `1`, `0/16`.

Implement the parser with this state machine:

```js
export const tokenizeWindowsCommandLine = raw => {
  if (typeof raw !== 'string') {
    throw new Error('Windows command line must be a string');
  }
  if (/[\0-\x08\x0b\x0c\x0e-\x1f]/.test(raw)) {
    throw new Error('Windows command line contains an unsupported control');
  }
  const args = [];
  let index = 0;
  while (index < raw.length) {
    while (index < raw.length && /\s/.test(raw[index])) index += 1;
    if (index === raw.length) break;
    let value = '';
    let quoted = false;
    let touched = false;
    while (index < raw.length && (quoted || !/\s/.test(raw[index]))) {
      if (raw[index] === '\\') {
        const start = index;
        while (index < raw.length && raw[index] === '\\') index += 1;
        const count = index - start;
        if (raw[index] === '"') {
          value += '\\'.repeat(Math.floor(count / 2));
          if (count % 2 === 0) quoted = !quoted;
          else value += '"';
          index += 1;
          touched = true;
        } else {
          value += '\\'.repeat(count);
          touched = true;
        }
        continue;
      }
      if (raw[index] === '"') {
        quoted = !quoted;
        touched = true;
        index += 1;
        continue;
      }
      value += raw[index];
      touched = true;
      index += 1;
    }
    if (quoted) throw new Error('Windows command line contains an unmatched quote');
    if (touched) args.push(value);
  }
  return args;
};
```

Use `node:path`'s `win32` functions for lexical absolute-path normalization.
Reject a non-absolute or empty path. Compare normalized filesystem arguments
case-insensitively. Compare the complete
`--capture-operation-v10-run-id=` prefix plus the canonical supplied UUID as
one complete token, case-sensitively. Support exact
one-token and two-token `--user-data-dir` forms.

On parse failure, return `ambiguous` only when normalized raw text contains an
exact configured V10-exclusive fragment. On successful parse with no exact
argument equality, return `unrelated`.

Expected GREEN: exit `0`, `16/16`.

- [ ] **Step 7: Write and implement snapshot-scoped ownership**

The twenty-five ordered cases are:

```text
1. unrelated added Node is audit-only
2. unrelated removed Git is audit-only
3. unrelated Chrome renderer churn is audit-only
4. same identity with changed command line is changed audit-only
5. registered operator identity is owned
6. registered reconstruction child identity is owned
7. exact script argument is owned
8. exact run token is owned
9. exact one-token profile is owned
10. exact two-token profile is owned
11. recursive same-snapshot descendants are owned
12. proven child remains owned after parent exit
13. reused PID is a new unowned identity
14. child of observed replacement PID is unrelated
15. child after old parent disappears receives no PID-only ownership
16. run prefix near miss is unrelated
17. run suffix near miss is unrelated
18. profile sibling near miss is unrelated
19. script-path suffix near miss is unrelated
20. failed parse with V10-exclusive fragment is ambiguous
21. conflicting same-PID identities are ambiguous and cannot seed descendants
22. missing-parent V10-relevant row is ambiguous
23. cleanup selection contains only exact owned residue
24. fixed-port listener rejects
25. no fixed-port listener passes
```

Run a syntax-valid stub that throws `process ownership not implemented`.

Expected RED: exit `1`, `0/25`.

Implement snapshots in supplied order:

```js
const projectRow = row => ({
  name: row.name,
  processId: row.processId,
  parentProcessId: row.parentProcessId,
  creationTimeUtc: row.creationTimeUtc,
  executablePath: row.executablePath ?? null,
  commandLine: row.commandLine ?? null,
});

const deduplicateSnapshot = (rows, ambiguousKeys, trace) => {
  const rowsByKey = new Map();
  for (const row of rows) {
    const key = processIdentityKey(row);
    const projected = projectRow(row);
    const existing = rowsByKey.get(key);
    if (existing === undefined) {
      rowsByKey.set(key, projected);
      continue;
    }
    if (JSON.stringify(existing) !== JSON.stringify(projected)) {
      ambiguousKeys.add(key);
      trace.push({
        identityKey: key,
        classification: 'ambiguous',
        rule: 'conflicting-exact-identity',
        reasons: [],
      });
    }
  }
  return rowsByKey;
};

const ownedKeys = new Set(registeredIdentities.map(processIdentityKey));
const ambiguousKeys = new Set();
const trace = [];

for (const snapshot of snapshots) {
  const rowsByKey = deduplicateSnapshot(snapshot.rows, ambiguousKeys, trace);
  const rows = [...rowsByKey.values()];

  for (const row of rows) {
    const key = processIdentityKey(row);
    if (ambiguousKeys.has(key)) continue;
    const command = classifyCommandOwnership({
      commandLine: row.commandLine,
      exactScriptPaths,
      runId,
      profileRoots,
      exclusiveFragments,
    });
    if (command.classification === 'owned') {
      ownedKeys.add(key);
      trace.push({ identityKey: key, classification: 'owned', rule: 'exact-argument', reasons: command.reasons });
    } else if (command.classification === 'ambiguous') {
      ambiguousKeys.add(key);
      trace.push({ identityKey: key, classification: 'ambiguous', rule: 'argument-parse', reasons: command.reasons });
      if (
        row.parentProcessId !== 0
        && !rows.some(parent => parent.processId === row.parentProcessId)
      ) {
        trace.push({
          identityKey: key,
          classification: 'ambiguous',
          rule: 'missing-parent-v10-relevant',
          reasons: [],
        });
      }
    }
  }

  let changed = true;
  while (changed) {
    changed = false;
    for (const child of rows) {
      const childKey = processIdentityKey(child);
      if (ownedKeys.has(childKey) || ambiguousKeys.has(childKey)) continue;
      const parents = rows.filter(parent => parent.processId === child.parentProcessId);
      if (parents.length > 1) {
        ambiguousKeys.add(childKey);
        trace.push({ identityKey: childKey, classification: 'ambiguous', rule: 'conflicting-parent-identities', reasons: [] });
        changed = true;
      } else if (parents.length === 1) {
        const parentKey = processIdentityKey(parents[0]);
        if (ownedKeys.has(parentKey) && !ambiguousKeys.has(parentKey)) {
          ownedKeys.add(childKey);
          trace.push({ identityKey: childKey, classification: 'owned', rule: 'same-snapshot-parent', reasons: [parentKey] });
          changed = true;
        }
      }
    }
  }
}
```

Conflict detection compares the exact projected fields for duplicate identity
keys. A conflicting key is ambiguous even if one conflicting row was
registered. Final `ownedResidue` excludes ambiguous keys. Final
`ambiguousResidue` contains only final-snapshot ambiguous rows. Sort rows by
`processId`, then canonical `creationTimeUtc`; sort trace by identity key,
classification, then rule.

A missing parent is audit-only for an otherwise unrelated row. It becomes
ambiguous only when exact command analysis already established V10 relevance
but could not safely parse or resolve the ownership argument.

Expected GREEN: exit `0`, `25/25`.

- [ ] **Step 8: Reproduce all V9 defects and run the complete candidate suite**

`task-1-negative-injections.mjs` must independently import candidate modules
and prove:

```text
V9 progress completion block is not chronological
V9 profile suffix near miss is classified owned by V9
V9 run prefix/suffix near miss is classified owned by V9
V9 descendant closure crosses a reused PID
V10 journal cannot insert or replace an earlier event
V10 profile/run/path near misses are unrelated
V10 replacement-parent child is unrelated
V10 old-parent-gap child is not owned
V10 conflicting-parent child is ambiguous
```

Write `task-1-negative-green-attempt-1.json` exclusively.

Run all four suites and negative injections. Expected:

```text
semantic: 14/14
journal: 15/15
Windows arguments: 16/16
ownership: 25/25
negative injections: 9/9
```

Run `node --check` over every candidate `.mjs`.

- [ ] **Step 9: Obtain the independent candidate review**

A fresh reviewer reads the approved design, committed plan, every candidate
source, every RED/GREEN record, the terminal V9 files, and direct negative
injections. The reviewer writes no candidate/sealed/journal/lock file.

Create `reviews\task-1-candidate-review-1.json` exclusively for the first
review attempt. Its finding-free form is:

```js
{
  schema: 'efficient-technologies/capture-operation-v10-candidate-review-v1',
  task: 1,
  attempt: 1,
  verdict: 'COMPLIANT',
  candidateFiles: [
    { path: 'absolute candidate path', bytes: 0, sha256: 'lowercase SHA-256' },
  ],
  testRecords: [
    { path: 'absolute test-record path', bytes: 0, sha256: 'lowercase SHA-256' },
  ],
  findings: [],
  sealAuthorized: true,
}
```

Rows are sorted by absolute path. Actual bytes/hashes are freshly recomputed.
On findings, write the same exact-key schema with verdict `NONCOMPLIANT`,
`sealAuthorized: false`, and the exact non-empty findings. Correct only
candidate bytes, create new attempt-specific test records, and use the next
contiguous review filename. Never replace review `1` or any later attempt.

- [ ] **Step 10: Seal Task 1 once**

`seal-task-1-v10.mjs` authenticates the latest contiguous accepted review,
requires empty
`sealed` and `journal` directories, and exclusively copies the four modules
plus five test/injection sources to their fixed sealed paths.

It then:

1. creates event `000001-task-1-boundary.json`;
2. creates event `000002-task-1-contract-sealed.json`;
3. creates `locks\task-1-contract-lock.json` containing current candidate,
   every candidate-review attempt, every attempt-specific RED/GREEN record,
   sealed, event, and accepted-review identities; and
4. immediately recomputes every lock row.

Run:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\seal-task-1-v10.mjs' `
  --candidate-review '..\..\reviews\task-1-candidate-review-1.json'
```

Expected: exact `ACCEPT` stdout, empty stderr, two valid chained events, and no
result/release root.

The shown command is exact when attempt `1` is finding-free. If an earlier
attempt is `NONCOMPLIANT`, do not run that command with review `1`; pass the
exact latest contiguous `COMPLIANT` review path instead.

- [ ] **Step 11: Obtain the independent seal review and authorize Task 2**

The seal reviewer imports only `sealed` modules, reruns all negative injections
using scratch output outside sealed paths, validates the two-event chain,
recomputes the contract lock, and verifies clean Git plus absent result/release
roots.

Create `reviews\task-1-seal-review.json` exclusively:

```js
{
  schema: 'efficient-technologies/capture-operation-v10-seal-review-v1',
  task: 1,
  verdict: 'COMPLIANT',
  contractLock: { path: 'absolute path', bytes: 0, sha256: 'lowercase SHA-256' },
  journalHeadBeforeAuthorization: {
    path: 'absolute event-2 path',
    bytes: 0,
    sha256: 'lowercase SHA-256',
  },
  independentCasesPassed: 9,
  findings: [],
  nextTaskAuthorized: 2,
}
```

Use the sealed journal writer to create
`000003-task-1-review-accepted.json`, then create
`locks\task-1-authorization-lock.json` over the contract lock, seal review,
and three-event chain.

Expected terminal Task 1 state: Task 2 authorized, Task 2/3 candidate
directories absent, result/release roots absent, Git clean, V9 unchanged, and
no implementation commit.

---

### Task 2: Build, review, and seal the V10 source/reconstruction controller

**Files:**

- Create/edit before seal: `candidate\task-2\*`
- Create exclusively: `sealed\prepare-v10-core.mjs`
- Create exclusively: `sealed\prepare-v10.mjs`
- Create exclusively: `sealed\read-only-verify-v10.mjs`
- Create exclusively: `sealed\task-4-reconstruct-v10-once.mjs`
- Create exclusively: `sealed\task-5-install-diagnostic-v10-once.mjs`
- Create exclusively: `sealed\operator-contract-v10.test.mjs`
- Create exclusively: `sealed\task-2-tests\*.mjs`
- Create exclusively: `journal\000004-task-2-controller-sealed.json`
- Create exclusively: `locks\task-2-contract-lock.json`
- Create exclusively: `locks\task-2-authorization-lock.json`
- Create exclusively: `reviews\task-2-candidate-review-A.json`
- Create exclusively: `reviews\task-2-seal-review.json`

**Interfaces:**

- Consumes: Task 1 frozen modules/authorization, design/plan/Git authority,
  terminal V8/V9 identities, exact runtime/source/tree/deadline facts.
- Produces: frozen source authenticator, one-shot reconstructor, installer,
  read-only verifier, static operator contracts, and Task 3 authorization.

- [ ] **Step 1: Authorize and create only `candidate\task-2`**

Validate the complete three-event chain and both Task 1 locks/reviews. Require
`candidate\task-2`, `candidate\task-3`, result, and release roots absent.
Create only `candidate\task-2` as a regular non-reparse directory.

- [ ] **Step 2: Write the twenty source-authentication cases**

`prepare-v10-core.test.mjs` ordered cases:

```text
1. committed design identity
2. committed plan is execution HEAD
3. branch, upstream, and remote
4. clean tracked Git, empty diffs, diff-check, and no index lock
5. terminal V8 result/control are regular non-reparse directories
6. exact terminal V8 controlling identities
7. V8 remains failed and retryAuthorized false
8. V8 child marker does not override parent failure
9. exact V8 thirteen-entry result allowlist
10. exact five immutable manifests and terminal V7 lock
11. exact nine-file source-v7 reference plus derived fixture/style exports
12. exact Node and Playwright identities
13. exact Chrome and Edge identities
14. exact playwright-core bytes/hash/ticks/reparse state
15. terminal V9 control is regular and has exact eleven-entry allowlist
16. every terminal V9 file identity matches
17. V9 progress chronology defect is reproducible
18. V9 near-match and PID-reuse defects are reproducible
19. V9 result/release and all V10 result/release targets are absent
20. no path escape, nested Git, reparse, fixed-port, or V10 profile conflict
```

Start with a syntax-valid stub that throws `source authentication not
implemented`. Run:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\prepare-v10-core.test.mjs' `
  --output '.\task-2-core-red-attempt-1.json'
```

Expected RED: exit `1`, `0/20`.

- [ ] **Step 3: Implement exact source authentication**

Import only sealed Task 1 modules:

```js
import { assertSemanticJsonEquals } from '../../sealed/semantic-map-v10.mjs';
import { validateJournalDirectory } from '../../sealed/immutable-journal-v10.mjs';
```

Use semantic comparison only for declared immutable manifest maps. Use exact
byte/hash equality for files and records, exact ordered equality for arrays,
and exact scalar equality for Git/runtime/path/decision values.

The predecessor result is exact:

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
}
```

Expected GREEN: exit `0`, `20/20`.

- [ ] **Step 4: Write the twenty-eight reconstruction/controller cases**

`prepare-v10.test.mjs` ordered cases:

```text
1. check mode is read-only with writePaths []
2. reconstruct is sole result-root writing mode
3. existing result root rejects before write
4. existing release root rejects before write
5. target ancestors are regular, non-reparse, and contained
6. exact five immutable trees copy exclusively
7. exact source-v7 allowlist copies exclusively
8. diagnostic starts empty
9. no V8/V9 control or failure evidence becomes active V10 evidence
10. exact V10 policy/runtime/causal/workspace/predecessor records
11. reconstruction marker is final result-root write
12. expected thirteen-entry top-level allowlist is exact
13. order-only manifest map accepts
14. missing, extra, or changed manifest fact rejects
15. global churn is audit-only
16. exact owned residue rejects
17. ambiguous residue rejects
18. fixed-port listener rejects
19. exact V10 profile residue rejects
20. profile/run/path near misses are not cleanup targets
21. release and forbidden paths reject
22. zero or multiple reconstruction children reject
23. timeout, nonzero exit, signal, stderr, or stdout mismatch rejects
24. final snapshot and terminalization reserve are mandatory
25. terminal event and evidence are exclusive/read back
26. failed reconstruction preserves partial root and disables retry
27. event-chain mismatch blocks reconstruction
28. accepted reconstruction contains exact predecessor lock and no V9 active source
```

Run a syntax-valid stub as RED.

Expected: exit `1`, `0/28`.

- [ ] **Step 5: Implement the one-shot preparer**

The reconstructed top-level allowlist is exact:

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
writes the five fixed V10 records exclusively
verifies the provisional inventory
writes reconstruction.json last
returns one compact ACCEPT stdout record
starts no helper, browser, server, or network operation
```

`terminal-predecessors-lock.json` records exact terminal V8 and V9 identities,
their failed/noncompliant decisions, and absent V9 result/release roots. Its V8
section also records the exact terminal V7 lock identity, a deep clone of the
authenticated passing canonical state, its canonical digest, and the derived
fixture/key-list/style identities. These are freshly reauthenticated while
building the record; no V7/V8/V9 controller file becomes active V10 source.

- [ ] **Step 6: Implement three-channel environment acceptance**

The PowerShell process snapshot uses:

```powershell
$processes = @(Get-CimInstance Win32_Process -ErrorAction Stop |
  Where-Object {
    $_.Name -in @(
      'node.exe',
      'powershell.exe',
      'pwsh.exe',
      'git.exe',
      'chrome.exe',
      'msedge.exe'
    ) -and [int]$_.ProcessId -ne [int]$PID
  } |
  Sort-Object ProcessId |
  ForEach-Object {
    [ordered]@{
      name = $_.Name
      processId = [int]$_.ProcessId
      parentProcessId = [int]$_.ParentProcessId
      creationTimeUtc = ([datetime]$_.CreationDate).ToUniversalTime().ToString(
        'yyyy-MM-ddTHH:mm:ss.fffZ'
      )
      executablePath = $_.ExecutablePath
      commandLine = $_.CommandLine
    }
  })
```

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

- [ ] **Step 7: Implement the durable Task 4 and Task 5 operators**

The sole reconstruction child argument array is:

```text
C:\Program Files\nodejs\node.exe
.\prepare-v10.mjs
reconstruct
--repo
C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site
--v8-root
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8
--v9-control
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control
--root
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v10
--release-root
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v10
final argv element: --capture-operation-v10-run-id= immediately followed by
the exact canonical UUID stored in the prelaunch record, with no whitespace
```

The run UUID is generated once, written to the exclusive prelaunch record,
read back, and passed as the exact complete token above.

The installer requires accepted reconstruction plus empty `diagnostic`, copies
the five operational files exclusively, and writes `installation.json` last.
It launches no browser, controller, server, or network operation.

- [ ] **Step 8: Implement the read-only verifier and static operator tests**

The verifier authenticates the complete journal chain and owning task
locks/reviews in every mode. It writes no control/result file.

The twelve operator cases prove:

```text
1. Task 4 has one reconstruction child-start site
2. Task 4 has no retry loop
3. Task 5 has no browser/controller start
4. Task 5 has no retry loop
5. exact absolute roots and CWD
6. exact run-token argument form
7. exact deadlines and terminal reserve
8. distinct exclusive prelaunch/evidence paths
9. final snapshot occurs after child terminal state
10. owned/ambiguous cleanup channels are separate
11. terminal event occurs at most once
12. no progress.md, mutable index, product write, push, or deployment command
```

Expected GREEN:

```text
source core: 20/20
reconstruction controller: 28/28
operator contracts: 12/12
```

- [ ] **Step 9: Candidate review, seal, and Task 3 authorization**

Run syntax checks over every candidate `.mjs`. The fresh candidate reviewer
independently injects Git/predecessor/runtime/root/journal/ownership failures
and always writes the next contiguous Task 2 review-attempt record. A
noncompliant attempt follows the shared correction convention. Only the latest
finding-free review may authorize sealing.

`seal-task-2-v10.mjs` copies only reviewed bytes to fixed sealed paths and
creates `locks\task-2-contract-lock.json`. That lock binds the current
candidate, every Task 2 candidate-review attempt, every attempt-specific test
record, the accepted review, and every newly sealed Task 2 file.

The sealed reviewer reruns `20/20`, `28/28`, and `12/12` from sealed imports,
verifies no prior sealed/event/lock byte changed, and creates
`reviews\task-2-seal-review.json`. Only after that review exists and is
recomputed may the sealed journal writer create
`000004-task-2-controller-sealed.json`. Then create
`locks\task-2-authorization-lock.json` over the contract lock, candidate
review, seal review, and event `4`.

Expected: Task 3 authorized; `candidate\task-3`, result, and release roots
absent.

---

### Task 3: Build, review, and seal the diagnostic harness and offline suite

**Files:**

- Create/edit before seal: `candidate\task-3\*`
- Create exclusively: `sealed\task-6-preflight-v10-once.mjs`
- Create exclusively: `sealed\task-7-isolation-v10-once.mjs`
- Create exclusively: `sealed\staged-diagnostic\*`
- Create exclusively: `journal\000005-task-3-offline-suite-accepted.json`
- Create exclusively: `locks\task-3-contract-lock.json`
- Create exclusively: `locks\task-3-authorization-lock.json`
- Create exclusively: `reviews\task-3-candidate-review-A.json`
- Create exclusively: `reviews\task-3-seal-review.json`

**Interfaces:**

- Consumes: sealed Tasks 1–2, exact source-v7 diagnostic reference, fixed
  runtime/fixture/style/state/deadlines, and absent result/release roots.
- Produces: reviewed operational harness, two byte-identical normalized
  offline-suite records, and Task 4 authorization.

- [ ] **Step 1: Authorize and create only `candidate\task-3`**

Validate event `4`, both Task 2 locks/reviews, clean Git, exact predecessors,
and absent result/release roots. Create only `candidate\task-3`.

- [ ] **Step 2: Freeze the diagnostic contract cases before implementation**

The eighteen JavaScript cases remain:

```text
1. exact five-cell order
2. exact JavaScript flags
3. exact operation identities
4. exact 5000 ms operation deadlines
5. add-style-disabled TIMEOUT requirement
6. add-style-enabled PASS requirement
7. evaluate-entry-disabled sentinel
8. collection-disabled complete schema
9. collection rawStateDigestSha256 null
10. synchronous-full exact algorithm
11. synchronous-full canonical digest
12. valid outcome mismatch is FALSIFIED
13. infrastructure failure is INCONCLUSIVE
14. five-element top-level process array
15. compact stdout and empty stderr
16. zero HTTP(S) requests
17. owned and ambiguous cleanup are empty for CONFIRMED
18. terminal decisions are mutually exclusive and exhaustive
```

The eight native PowerShell cases remain:

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

The eight static diagnostic-operator cases are:

```text
1. Task 6 has one controller child-start site
2. Task 6 has no retry loop or Chrome start
3. Task 7 has one controller child-start site
4. Task 7 has no retry loop
5. both operators use exact absolute roots and CWD
6. both operators use exact run-token arguments and fixed deadlines
7. both operators write distinct prelaunch/evidence paths and one terminal event
8. neither operator contains product writes, progress.md, push, publish, or deploy commands
```

Run syntax-valid missing-implementation stubs.

Expected RED: JavaScript `0/18`; native `0/8`; diagnostic operators `0/8`.

- [ ] **Step 3: Implement the exact diagnostic cell**

Use the source-v7 diagnostic files only as authenticated reference. The V10
cell supports exact modes:

```text
preflight
add-style-disabled
add-style-enabled
evaluate-entry-disabled
collection-disabled
synchronous-full-disabled
```

Do not retype the fixture, key schema, validator, or stylesheet. After
authenticating the exact module files, import:

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

`authenticatedResultRoot` is the already verified absolute V10 result-root
input. Before every cell, rehash both module files and the three derived exports
against the fixed identities in this plan. Keep the page at `about:blank` and
install only the exact inline fixture with
`page.setContent(FIXTURE_HTML, { waitUntil: 'domcontentloaded' })`. Never call
`goto`, start a server, or navigate to baseline, candidate, or product content.

Every isolation cell:

- launches the fixed Chrome through fixed Playwright;
- uses one fresh exact V10 profile;
- uses `412 x 823`, device scale factor `1`, dark color scheme;
- blocks service workers, permissions, downloads, and HTTP(S);
- records exact runtime and causal identities;
- writes one exclusive result and one compact stdout record;
- writes empty stderr on a valid required outcome; and
- closes context and removes only the exact revalidated profile.

Preflight launches no Chrome and tests only transport/process/journal behavior.
Its compact result is exact:

```json
{
  "schema": "efficient-technologies/capture-operation-v10-cell-preflight-v1",
  "stage": "preflight",
  "pass": true,
  "chromeLaunched": false
}
```

Every isolation result uses schema
`efficient-technologies/capture-operation-v10-cell-result-v1` and serializes
these exact top-level fields in order:

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
`rawStateDigestSha256` to `null`, and emits this exact ordered capability
summary:

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

Synchronous-full canonical digest:

```text
b8634b4f899eee08ce6d1c14c57c11657214372a9f2eb53107282af5eb43ac67
```

The synchronous-full evaluation appends one `<style>` element whose
`textContent` is the byte-identical `CANONICAL_CAPTURE_STYLE`, sets
`#pre-count-n` to `0`, removes video controls, attempts to pause each video, and
collects the exact canonical state in the same synchronous page function. It
does not await a style `load` event. The returned canonical state must equal the
authenticated state embedded in V10
`terminal-predecessors-lock.json`, pass `validateCanonicalState`, and recompute
to the digest above. Before trusting that embedded state, every cell
reauthenticates its recorded external V8 `terminal-v7-lock.json` identity.

The collection probe never records or gates on a timing-dependent raw-state
digest. Raw animated opacity/transform values remain evidence rather than
acceptance values.

- [ ] **Step 5: Implement controller/finalizer ownership and terminal routing**

The PowerShell controller starts each Node cell hidden, immediately records
its exact PID/creation time, and passes one exact run token:

```text
--capture-operation-v10-run-id= immediately followed by the exact canonical
UUID stored in the owning prelaunch record, with no whitespace
```

It collects ordered snapshots before, during, after child exit, after cleanup,
and at terminal state. The finalizer imports sealed ownership/journal modules
and requires:

```text
global audit complete
owned residue empty
ambiguous residue empty
fixed ports absent
exact profiles absent
HTTP(S) empty
Git/product/runtime unchanged
phase evidence exact
```

The controller never terminates unrelated or ambiguous processes.

Implement both stage-specific evidence sealers against the fixed inventories
in this plan. Each sealer validates every listed path as a regular
non-reparse file, records sorted `{relativePath,bytes,sha256}` rows, creates
only `diagnostic-evidence-lock.json` with exclusive `wx`, closes, reads back,
and recomputes the lock. The finalizer, not the sealer, owns the exact
extra-file, `.profiles`, and `process-registration.json` rejection check.

- [ ] **Step 6: Implement the two durable operators**

The preflight operator starts one hidden PowerShell controller with:

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

The isolation operator uses the same form with `-Stage isolation`.

Each operator has one start site, no loop/retry, exact deadlines, distinct
prelaunch/evidence paths, one verifier invocation, and one terminal journal
event.

- [ ] **Step 7: Run candidate GREEN and obtain finding-free review**

Expected candidate results:

```text
diagnostic JavaScript: 18/18
native PowerShell: 8/8
diagnostic operator contracts: 8/8
```

Parse both PowerShell files with:

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

The fresh candidate reviewer verifies every operation, deadline, path,
transport, no-network, cleanup, decision, and one-start contract, then writes
the next contiguous Task 3 review-attempt record. A noncompliant attempt follows
the shared correction convention. Only the latest finding-free review may
authorize sealing.

- [ ] **Step 8: Seal Task 3 and run the complete sealed suite twice**

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

Run sealed suites twice with attempt-specific scratch outputs:

```text
semantic: 14/14
journal: 15/15
Windows arguments: 16/16
ownership: 25/25
source core: 20/20
reconstruction controller: 28/28
operator contracts: 12/12
diagnostic JavaScript: 18/18
native PowerShell: 8/8
diagnostic operator contracts: 8/8
negative injections: 9/9
```

Normalize only `observedAtUtc`, process IDs, creation times, and temporary
scratch roots. Case order, facts, counts, decisions, paths, deadlines, and
hashes remain. The two normalized aggregate records must be byte-identical.

- [ ] **Step 9: Seal review and authorize Task 4**

Create `locks\task-3-contract-lock.json` over every sealed Task 3 file,
operational manifest, every Task 3 candidate-review attempt, every
attempt-specific test record, the accepted review, and both normalized suite
records.

The sealed reviewer recomputes all sources/tests/results and creates
`reviews\task-3-seal-review.json`. Only after that review exists and is
recomputed may the sealed journal writer create
`000005-task-3-offline-suite-accepted.json`. Then create
`locks\task-3-authorization-lock.json` over the contract lock, candidate
review, seal review, event `5`, and both normalized suite records.

Expected: Task 4 authorized, all candidate namespaces frozen, result/release
roots absent, V8/V9/product/Git unchanged.

---

### Task 4: Reconstruct the V10 result root exactly once

**Files:**

- Execute: `sealed\task-4-reconstruct-v10-once.mjs`
- Create exclusively: `locks\task-4-prelaunch.json`
- Create exclusively: `locks\task-4-operator-evidence.json`
- Create exclusively: `reviews\task-4-review.json`
- Create exclusively: `locks\task-4-terminal-lock.json`
- Create exclusively: `journal\000006-task-4-reconstruction-terminal.json`
- Create once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v10`

**Interfaces:**

- Consumes: sealed Tasks 1–3, identical offline records, terminal
  predecessors, exact Git/runtime/source boundaries.
- Produces: accepted empty-diagnostic V10 reconstruction or one terminal
  rejection. Only acceptance authorizes Task 5.

- [ ] **Step 1: Reauthenticate every precondition**

Require:

```text
events 1 through 5 valid
Tasks 1 through 3 locks/reviews exact
two normalized offline records byte-identical
tracked Git clean at execution HEAD
terminal V8/V9 identities exact
runtime and causal source exact
result and release roots absent
ports 4381, 4382, and 4383 unoccupied
no V10 profile, process, ambiguous row, or forbidden path
```

- [ ] **Step 2: Invoke the durable reconstruction operator once**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control\sealed'
& 'C:\Program Files\nodejs\node.exe' '.\task-4-reconstruct-v10-once.mjs'
```

Do not invoke `prepare-v10.mjs reconstruct` directly.

- [ ] **Step 3: Observe the original operator to terminal state**

If the client returns early, read the exact durable PID and creation time from
`locks\task-4-prelaunch.json` and observe that identity. Never start another
operator.

- [ ] **Step 4: Independently verify reconstruction**

Use only:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\read-only-verify-v10.mjs' reconstruction `
  --root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v10'
```

Require the exact thirteen-entry allowlist, five semantic manifests, exact
records, empty diagnostic, absent release, complete global audit, empty owned
and ambiguous residue, empty profiles/listeners, unchanged
Git/product/runtime, and verified operator evidence.

- [ ] **Step 5: Create the review, terminal event, and route**

Create `reviews\task-4-review.json` from independent facts. Create event `6`
with status `ACCEPT` only on exact acceptance; otherwise `REJECT`. Create
`locks\task-4-terminal-lock.json` over prelaunch, evidence, review, event, and
result inventory.

On rejection, preserve the partial root and stop V10. On acceptance, record
`task5Authorized: true`; do not populate `diagnostic`.

---

### Task 5: Install the reviewed diagnostic harness exactly once

**Files:**

- Execute: `sealed\task-5-install-diagnostic-v10-once.mjs`
- Create exclusively: `locks\task-5-prelaunch.json`
- Create exclusively: `locks\task-5-operator-evidence.json`
- Create exclusively: `reviews\task-5-review.json`
- Create exclusively: `locks\task-5-terminal-lock.json`
- Create exclusively: `journal\000007-task-5-installation-terminal.json`
- Populate once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v10\diagnostic`

**Interfaces:**

- Consumes: accepted Task 4 reconstruction and exact five-row operational
  manifest.
- Produces: five exact operational files plus `installation.json`. Only
  acceptance authorizes Task 6.

- [ ] **Step 1: Reauthenticate reconstruction and staged manifest**

Require event `6` `ACCEPT`, exact Task 4 terminal lock/review, empty regular
non-reparse diagnostic directory, exact staged manifest, and unchanged sealed
sources.

- [ ] **Step 2: Invoke the installer once**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control\sealed'
& 'C:\Program Files\nodejs\node.exe' '.\task-5-install-diagnostic-v10-once.mjs'
```

The installer launches no browser, PowerShell controller, server, or network.

- [ ] **Step 3: Verify installed bytes read-only**

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\read-only-verify-v10.mjs' installation `
  --root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v10\diagnostic'
```

Require exact equality with the five-row manifest, terminal
`installation.json`, no extra file/stage/profile, empty owned/ambiguous
residue, unoccupied ports, and unchanged boundaries.

- [ ] **Step 4: Seal and route**

Create the independent review, event `7`, and Task 5 terminal lock. Rejection
is terminal with no reinstall. Exact acceptance records
`task6Authorized: true`.

---

### Task 6: Run the browser-free transport preflight exactly once

**Files:**

- Execute: `sealed\task-6-preflight-v10-once.mjs`
- Create exclusively: `locks\task-6-prelaunch.json`
- Create exclusively: `locks\task-6-operator-evidence.json`
- Create exclusively: `reviews\task-6-review.json`
- Create exclusively: `locks\task-6-terminal-lock.json`
- Create exclusively: `journal\000008-task-6-preflight-terminal.json`
- Create once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v10\diagnostic\preflight`

**Interfaces:**

- Consumes: accepted installation and exact sealed boundaries.
- Produces: one sealed `ACCEPT`, `REJECT`, or `INCONCLUSIVE` preflight. Only
  exact acceptance authorizes Task 7.

- [ ] **Step 1: Capture exact prelaunch facts**

Require absent preflight/isolation paths, no V10 profiles, unoccupied ports,
unchanged Git/product/runtime/predecessors, exact installed harness, and valid
events `1` through `7`. Write prelaunch before the sole controller start.

- [ ] **Step 2: Invoke the preflight operator once**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control\sealed'
& 'C:\Program Files\nodejs\node.exe' '.\task-6-preflight-v10-once.mjs'
```

Do not invoke the PowerShell controller or finalizer directly.

- [ ] **Step 3: Verify the exact preflight result**

Require:

```text
operator exit 0
decision ACCEPT
pass true
chromeLaunched false
top-level one-element process array
one registered exit-zero controller child
exact run token
empty stderr and validationErrors
exact phase journal
exact eight-file preflight inventory plus diagnostic-evidence-lock.json
complete immutable control journal
complete global audit and resolution trace
empty owned and ambiguous process/browser/profile/listener residue
zero HTTP(S)
unchanged Git/product/runtime/predecessors
```

- [ ] **Step 4: Independently recompute, seal, and route**

Use the operator-captured one verifier result plus direct disk readback; do not
run another preflight. Create the independent review, event `8`, and terminal
lock.

Only exact `ACCEPT` records `task7Authorized: true`. `REJECT` or
`INCONCLUSIVE` is terminal.

---

### Task 7: Run the unchanged five-cell isolation stage exactly once

**Files:**

- Execute: `sealed\task-7-isolation-v10-once.mjs`
- Create exclusively: `locks\task-7-prelaunch.json`
- Create exclusively: `locks\task-7-operator-evidence.json`
- Create exclusively: `reviews\task-7-review.json`
- Create exclusively: `locks\task-7-terminal-lock.json`
- Create exclusively: `journal\000009-task-7-isolation-terminal.json`
- Create once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v10\diagnostic\isolation`

**Interfaces:**

- Consumes: exact accepted Task 6 and the fixed experiment.
- Produces: one terminal `CONFIRMED`, `FALSIFIED`, or `INCONCLUSIVE` matrix.

- [ ] **Step 1: Reauthenticate every fixed boundary**

Require exact Task 6 evidence, absent isolation path, exact installed
harness/source/runtime, clean Git/product, unoccupied ports, no V10 residue,
and valid events `1` through `8`.

- [ ] **Step 2: Invoke the isolation operator once**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control\sealed'
& 'C:\Program Files\nodejs\node.exe' '.\task-7-isolation-v10-once.mjs'
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
exact phase journals, streams, and deadlines
exact twenty-four-file isolation inventory plus diagnostic-evidence-lock.json
exact runtime, fixture, style, and causal source
complete global audit and resolution trace
empty owned and ambiguous process/browser/profile/listener residue
unchanged Git/product/predecessors and absent release root
```

- [ ] **Step 5: Independently recompute and classify**

Classification is exact:

```text
valid completed outcome mismatch: FALSIFIED
identity/ambiguity/launch/transport/filesystem/network/deadline/cleanup/seal
failure: INCONCLUSIVE
exact matrix and every gate: CONFIRMED
```

Recompute all results, streams, phase journals, process identities, state
digest, global/owned/ambiguous/trace rows, cleanup, and evidence lock.

- [ ] **Step 6: Create the terminal event and route only to closeout**

Create the independent review, event `9`, and Task 7 terminal lock. No
decision authorizes a rerun. `task8Authorized: true` exists only because Task
8 is read-only terminal closeout.

---

### Task 8: Independently close V10 and route the terminal result

**Files:**

- Create exclusively: `terminal\task-8-terminal-review.json`
- Create exclusively: `terminal\task-8-report.md`
- Create exclusively: `journal\000010-task-8-review-terminal.json`
- Create exclusively: `locks\task-8-terminal-lock.json`

**Interfaces:**

- Consumes: every sealed V10 control/result artifact.
- Produces: the final evidence-integrity verdict and allowed next design
  route. Starts no browser, controller, cell, installer, or reconstruction.

- [ ] **Step 1: Reauthenticate current boundaries**

Freshly read Git branch/HEAD/status/diffs/index lock; terminal V8/V9;
V10 control/result inventories; runtime; causal source; immutable product
trees; ports; profiles; global/owned/ambiguous/trace rows; release absence; and
every event/lock/review.

- [ ] **Step 2: Recompute terminal diagnostic evidence**

Read all five results, stdout/stderr, phase journals, process array, matrix,
cleanup, causal verification, installation, and evidence seals. Recompute the
canonical full-state digest and every locked identity. Do not trust Task 7's
decision field.

- [ ] **Step 3: Create the terminal review exclusively**

Exact success object:

```js
{
  schema: 'efficient-technologies/capture-operation-v10-terminal-review-v1',
  evidenceVerdict: 'COMPLIANT',
  diagnosticDecision: 'CONFIRMED',
  v10Terminal: true,
  retryAuthorized: false,
  productMutationAuthorized: false,
  releaseAuthorized: false,
  publicationAuthorized: false,
  deploymentAuthorized: false,
  nextDesignAuthorized: 'smallest-evidence-based-helper-correction',
  findings: [],
}
```

The terminal review keeps evidence integrity separate from the diagnostic
decision:

| Recomputed evidence | Recomputed diagnostic | `evidenceVerdict` | `nextDesignAuthorized` | `findings` |
|---|---|---|---|---|
| complete and internally exact | `CONFIRMED` | `COMPLIANT` | `smallest-evidence-based-helper-correction` | `[]` |
| complete and internally exact | `FALSIFIED` | `COMPLIANT` | `null` | `[]` |
| complete and internally exact | `INCONCLUSIVE` | `COMPLIANT` | `null` | `[]` |
| missing, contradictory, drifted, or unsupported | recomputed actual decision | `NONCOMPLIANT` | `null` | exact non-empty integrity findings |

Every route keeps `v10Terminal: true`, `retryAuthorized: false`, and all
product/release/publication/deployment authorization fields false. Event `10`
uses status `ACCEPT` for `COMPLIANT` evidence even when the diagnostic decision
is `FALSIFIED` or `INCONCLUSIVE`; it uses `REJECT` only for `NONCOMPLIANT`
evidence. Never rewrite producer evidence.

- [ ] **Step 4: Create event 10, final lock, and boundary report**

Create event `10` and `locks\task-8-terminal-lock.json` over the terminal
review, complete ten-event chain, all task locks/reviews, result inventory,
and boundary identities.

`terminal\task-8-report.md` states exactly:

```text
No UI, video, scroll, scene, zoom, motion, animation, product, release,
publication, deployment, or live-site change occurred in V10.
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
terminal V8 and V9 exact identities and no-retry states
all prior V10 events, locks, and independent reviews
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

Every final statement distinguishes:

```text
controller/evidence integrity
diagnostic causal result
product/release/publication/deployment authority
```

The execution leaves tracked Git clean at the committed plan HEAD. There are
no implementation commits or pushes.
