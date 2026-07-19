# Ownership-Scoped Capture Operation Isolation v9 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use
> `superpowers:subagent-driven-development` (recommended) or
> `superpowers:executing-plans` to implement this plan task-by-task. Steps use
> checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reconstruct one fresh v9 result root with semantic manifest
comparison and ownership-scoped residue gates, then run the unchanged
five-cell Chrome operation-isolation experiment exactly once.

**Architecture:** A fresh control root holds pure contract modules, a
one-shot preparer, staged diagnostic sources, durable operators, and
append-only evidence. Offline contracts run twice before the result root is
created. The result root is reconstructed once, independently read back, then
receives the already-reviewed diagnostic harness through one sealed install.
Global process/browser churn is audited, while only v9-owned identities and
exclusive v9 resources gate preflight and diagnostic acceptance.

**Tech Stack:** Static repository; Node.js `v24.11.1`; Windows PowerShell
`5.1`; fixed Playwright `1.62.0-alpha-1783623505000`; fixed stable Chrome
`150.0.7871.115`; ECMAScript modules; no package install and no build step.

## Global Constraints

- V8 is terminal, failed, immutable, and has no retry or repair authority.
- Never mutate v5, v6, v7, v8, the publish-site product bytes, or the live
  website.
- Never change UI, video, scrolling, scenes, zooms, motion, transitions, or
  animations.
- Never create
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v9`.
- Before Task 1, the v9 control, result, and release roots must all be absent.
- Task 1 may create the control root once. Only Task 4 may create the result
  root. Only Task 5 may populate its initially empty `diagnostic` directory.
- Never delete and recreate a failed v9 root, stage, profile root, prelaunch
  record, terminal record, or evidence lock.
- The only implementation write surfaces are the fresh v9 control root and
  fresh v9 result root.
- The publish checkout remains clean at the execution HEAD created by the
  commit containing this plan. No implementation task commits, pushes,
  publishes, deploys, or edits a tracked file.
- Because implementation files are intentionally outside Git, every task ends
  with an exclusive evidence record and readback hash instead of a Git commit.
- Never install or update a dependency, run Lighthouse, start a site server,
  navigate to product content, or make an HTTP(S) request.
- All task processes are hidden, registered, deadline-bounded, and cleaned
  only after exact ownership revalidation.
- Unrelated global process and browser activity is sealed in audit evidence
  and is never killed or used as a qualification failure.
- Fixed ports `4381`, `4382`, and `4383` are exclusive v9 resources. A
  listener on any one rejects the relevant gate regardless of ownership.
- Every write uses exclusive creation. Every terminal record is immediately
  read back and verified by byte count and SHA-256.
- Offline test code may be revised before Task 4. Tasks 4 through 7 are
  one-shot and have no retry, repair, replacement, or best-run selection.
- A client or UI wait expiry never authorizes a second command. Observe the
  original durable operator PID to terminal state.

---

## Fixed Authority and Identities

Approved design:

```text
path:
docs/superpowers/specs/2026-07-20-ownership-scoped-capture-operation-isolation-v9-design.md

commit:
b99a4c2dd99c3e373e207f3d6e1214641e911e40

bytes / sha256:
29738 / ea2295d8690cc26ed7ff142c1684b00520e576e297b823712c723891ba80d12e
```

Repository:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site
branch: agent/performance-without-motion-loss
plan base HEAD: b99a4c2dd99c3e373e207f3d6e1214641e911e40
upstream: b416b8113315c95c32d4674aa54769d90c562abd
remote: https://github.com/tarik-ux/efficient-technologies-site.git
```

The execution HEAD is discovered once after this plan is committed. It must
equal both `git rev-parse HEAD` and the last commit touching this plan:

```powershell
$repo = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site'
$plan = 'docs/superpowers/plans/2026-07-20-ownership-scoped-capture-operation-isolation-v9.md'
$executionHead = (git -C $repo rev-parse HEAD).Trim()
$planCommit = (git -C $repo log -1 --format=%H -- $plan).Trim()
if ($executionHead -ne $planCommit) {
  throw 'execution HEAD is not the committed v9 plan'
}
```

Roots:

```text
terminal v8 result:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8

terminal v8 control:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control

fresh v9 control:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control

fresh v9 result:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9

forbidden v9 release:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v9
```

Terminal v8 controlling artifacts:

```text
prepare-v8-core.mjs:
35593 / 9a209853f136b0e0c84a4a7409b69d53d8c5bad22c48d0c95e9f7bca9dc589d5

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

task-1-report.md:
35411 / 6e2ccb8df95e2ae8fe44514f2d9d60ca8dca6fcd330f97e2e3c854701a23dbb5

progress.md:
10068 / 8747b7be5f0dc873995b406b7c4e9fb67894f12f1868ce2baea3b74922cba264

v8 reconstruction.json:
2879 / 9b61a31a8333dd1a80c04ba053e914e2c15e4e41fd8052e0d5537fe50c784949
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

source-v7-diagnostic:
9 / 5613ad53c84c6e2541baed9a90a2b6c11bf645ed6d3ef920b423a6b1d9753ba7
```

The nine diagnostic-reference rows are exact:

| Relative path | Bytes | SHA-256 |
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

playwright-core/lib/coreBundle.js:
3407411 / be2e09efef3017b4eaa76f0cb5289f66c4ea57833f94319b17c1c2f184987ad7
last-write UTC ticks: 639192713587991449
```

---

## File and Responsibility Map

All paths below are below:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control
```

| File | Single responsibility |
|---|---|
| `semantic-map-v9.mjs` | Canonicalize declared semantic JSON maps without changing record bytes. |
| `semantic-map-v9.test.mjs` | Nine fixed semantic comparison cases. |
| `process-ownership-v9.mjs` | Compute global process audit and v9-owned residue from exact identities. |
| `process-ownership-v9.test.mjs` | Thirteen audit, ownership, PID-reuse, browser, and fixed-resource cases. |
| `prepare-v9-core.mjs` | Authenticate Git, runtime, terminal v8, immutable trees, and source references. |
| `prepare-v9-core.test.mjs` | Sixteen fixed source-authentication cases. |
| `prepare-v9.mjs` | Implement read-only `check`, one-shot `reconstruct`, and read-only reconstructed-state authentication. |
| `prepare-v9.test.mjs` | Twenty-four reconstruction, terminalization, and dual-channel acceptance cases. |
| `read-only-verify-v9.mjs` | Recompute task facts from disk without trusting producer booleans. |
| `task-4-reconstruct-v9-once.mjs` | Durable one-start reconstruction operator. |
| `task-5-install-diagnostic-v9-once.mjs` | Install the reviewed staged harness into the accepted empty diagnostic root once. |
| `task-6-preflight-v9-once.mjs` | Durable one-start browser-free preflight operator. |
| `task-7-isolation-v9-once.mjs` | Durable one-start five-cell isolation operator. |
| `operator-contract-v9.test.mjs` | Static one-start, no-loop, deadline, command, CWD, and terminal-record contracts for all four operators. |
| `staged-diagnostic/operation-isolation-cell.mjs` | Run one exact preflight or isolation cell. |
| `staged-diagnostic/run-operation-isolation.ps1` | Run preflight or the five ordered cells and write top-level process arrays. |
| `staged-diagnostic/finalize-operation-isolation.mjs` | Validate, classify, seal, and read-only verify a stage. |
| `staged-diagnostic/evidence-seal-preflight.mjs` | Seal the exact eight-file preflight inventory. |
| `staged-diagnostic/evidence-seal-isolation.mjs` | Seal the exact twenty-four-file isolation inventory. |
| `staged-diagnostic/operation-isolation-contract.test.mjs` | Eighteen fixed browser-operation and evidence-contract cases. |
| `staged-diagnostic/controller-json-serialization-contract.tests.ps1` | Eight native PowerShell array/object serialization cases. |
| `staged-diagnostic/operational-files.json` | Ordered exact install allowlist with bytes and SHA-256. |
| `progress.md` | Append-only task status and terminal routing summary. |

The following exclusive task artifacts are created only by their owning task:

```text
task-1-*.json
task-1-report.md
task-2-*.json
task-2-report.md
task-3-*.json
task-3-report.md
task-4-prelaunch.json
task-4-operator-evidence.json
task-4-report.md
task-5-prelaunch.json
task-5-operator-evidence.json
task-5-report.md
task-6-prelaunch.json
task-6-operator-evidence.json
task-6-report.md
task-7-prelaunch.json
task-7-operator-evidence.json
task-7-report.md
task-8-terminal-review.json
task-8-report.md
```

---

## Shared Interfaces

`semantic-map-v9.mjs` exports:

```text
canonicalizeSemanticJson(value: JsonValue) -> JsonValue
semanticJsonEquals(actual: JsonValue, expected: JsonValue) -> boolean
assertSemanticJsonEquals(
  actual: JsonValue,
  expected: JsonValue,
  label: non-empty string
) -> actual JsonValue or throws
```

`process-ownership-v9.mjs` exports:

```text
processIdentityKey(row: ProcessRow) -> string
diffGlobalActivity({
  before: ProcessRow[],
  after: ProcessRow[]
}) -> GlobalActivity
classifyOwnedResidue({
  observations: ProcessRow[][],
  after: ProcessRow[],
  registeredIdentities: ProcessRow[],
  ownershipFragments: string[],
  runId: string,
  profileRoots: string[]
}) -> OwnershipResult
assertFixedPortsAbsent(
  listeners: ListenerRow[],
  fixedPorts: number[]
) -> true or throws
```

`classifyOwnedResidue` returns:

```js
{
  globalActivity: {
    added: [],
    removed: [],
    changed: [],
  },
  ownedIdentityKeys: [],
  ownedResidue: [],
}
```

Every process row has these exact ordered fields:

```text
name
processId
parentProcessId
creationTimeUtc
executablePath
commandLine
```

`prepare-v9-core.mjs` exports:

```text
authenticateV8SourceState(boundaries: BoundaryInput) -> Authentication
authenticateGitBoundary(repo: absolute path, expected: GitBoundary) -> GitFacts
authenticateRuntime(v8Root: absolute path) -> RuntimeFacts
authenticateImmutableInputs(v8Root: absolute path) -> ImmutableFacts
snapshotTree(root: absolute path) -> TreeSnapshot
```

`prepare-v9.mjs` exports:

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
buildExpectedV9Records(
  authentication: Authentication
) -> ExpectedV9Records
```

Its CLI modes are exact:

```text
check
reconstruct
authenticate-reconstructed-state
```

`read-only-verify-v9.mjs` modes are exact:

```text
reconstruction
installation
preflight
isolation
terminal
```

Every verifier mode writes no file below the result root and emits one compact
JSON stdout record plus empty stderr.

---

## Fixed Deadlines

```text
reconstruction child: 180000 ms
reconstruction operator total: 240000 ms
environment snapshot ceiling: 30000 ms
reconstruction terminalization reserve: 5000 ms

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

No nested deadline may exceed its containing deadline. No deadline may be
changed dynamically or replaced by a sleep.

---

### Task 1: Build the semantic-map and process-ownership contracts

**Files:**

- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control\semantic-map-v9.mjs`
- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control\semantic-map-v9.test.mjs`
- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control\process-ownership-v9.mjs`
- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control\process-ownership-v9.test.mjs`
- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control\progress.md`

**Interfaces:**

- Consumes: exact roots, Git authority, and identity constants in this plan.
- Produces:
  `canonicalizeSemanticJson`,
  `semanticJsonEquals`,
  `assertSemanticJsonEquals`,
  `processIdentityKey`,
  `diffGlobalActivity`,
  `classifyOwnedResidue`, and
  `assertFixedPortsAbsent`.

- [ ] **Step 1: Reauthenticate the execution boundary and create the control root once**

Run from the project root:

```powershell
$repo = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site'
$control = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control'
$result = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9'
$release = 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v9'
$plan = 'docs/superpowers/plans/2026-07-20-ownership-scoped-capture-operation-isolation-v9.md'

if ((git -C $repo branch --show-current).Trim() -ne 'agent/performance-without-motion-loss') {
  throw 'branch mismatch'
}
if ((git -C $repo rev-parse '@{upstream}').Trim() -ne 'b416b8113315c95c32d4674aa54769d90c562abd') {
  throw 'upstream mismatch'
}
if ((git -C $repo remote get-url origin).Trim() -ne 'https://github.com/tarik-ux/efficient-technologies-site.git') {
  throw 'remote mismatch'
}
if ((git -C $repo status --porcelain).Count -ne 0) {
  throw 'tracked Git is not clean'
}
git -C $repo diff --check
if ($LASTEXITCODE -ne 0) { throw 'git diff --check failed' }
if (Test-Path -LiteralPath (Join-Path $repo '.git\index.lock')) {
  throw 'Git index lock exists'
}
$head = (git -C $repo rev-parse HEAD).Trim()
$planCommit = (git -C $repo log -1 --format=%H -- $plan).Trim()
if ($head -ne $planCommit) { throw 'plan is not execution HEAD' }
foreach ($path in @($control, $result, $release)) {
  if (Test-Path -LiteralPath $path) { throw "fresh path exists: $path" }
}
New-Item -ItemType Directory -Path $control -ErrorAction Stop | Out-Null
$entry = Get-Item -LiteralPath $control -Force
if (-not $entry.PSIsContainer -or ($entry.Attributes -band [IO.FileAttributes]::ReparsePoint)) {
  throw 'control root is not a regular directory'
}
```

Expected: no output and one new regular control directory. The result and
release roots remain absent.

- [ ] **Step 2: Write valid RED implementations and the nine semantic tests**

Create the first `semantic-map-v9.mjs` baseline with this deliberately
order-sensitive behavior:

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

The test runner must execute these ordered cases and write a normalized result
record with `{schema,cases,passed,total}`:

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
```

- [ ] **Step 3: Run the semantic RED and prove the v8 defect**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control'
& 'C:\Program Files\nodejs\node.exe' '.\semantic-map-v9.test.mjs' `
  --output '.\task-1-semantic-red.json'
```

Expected: nonzero exit; exactly cases 3 and 4 fail because object insertion
order differs. Cases 5 through 9 must already reject. Any import, syntax, or
output-shape failure is an invalid RED.

- [ ] **Step 4: Replace the semantic baseline with the minimal canonical implementation**

Use this exact normalization algorithm:

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

- [ ] **Step 5: Run semantic GREEN**

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\semantic-map-v9.test.mjs' `
  --output '.\task-1-semantic-green.json'
```

Expected: exit `0`, `9/9`, and no change to the serialized bytes supplied to
the comparator.

- [ ] **Step 6: Write the process-ownership RED and thirteen tests**

Begin with the v8 behavior so the RED reproduces the failure:

```js
export const processIdentityKey = row =>
  `${row.processId}:${row.creationTimeUtc}`;

export const diffGlobalActivity = ({ before, after }) => ({
  added: after.filter(row =>
    !before.some(item => processIdentityKey(item) === processIdentityKey(row))),
  removed: before.filter(row =>
    !after.some(item => processIdentityKey(item) === processIdentityKey(row))),
  changed: [],
});

export const classifyOwnedResidue = ({ observations, after }) => {
  const before = observations[0] ?? [];
  return {
    globalActivity: diffGlobalActivity({ before, after }),
    ownedIdentityKeys: after.map(processIdentityKey),
    ownedResidue: [...after],
  };
};

export const assertFixedPortsAbsent = (listeners, fixedPorts) => {
  const residue = listeners.filter(row => fixedPorts.includes(row.localPort));
  if (residue.length !== 0) throw new Error('fixed-port listener residue');
  return true;
};
```

The test runner must execute these ordered cases:

```text
1. unrelated added Node is audit-only
2. unrelated removed Git is audit-only
3. unrelated Chrome renderer churn is audit-only
4. same identity with changed command line is changed audit-only
5. registered operator identity is owned
6. registered reconstruction child identity is owned
7. recursive descendant is owned
8. exact control-root command fragment is owned
9. exact run identifier is owned
10. exact v9 profile argument is owned
11. same PID with a different creation time is unrelated PID reuse
12. fixed-port listener rejects
13. no fixed-port listener passes
```

- [ ] **Step 7: Run process-ownership RED**

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\process-ownership-v9.test.mjs' `
  --output '.\task-1-ownership-red.json'
```

Expected: nonzero exit. Cases 1, 2, 3, 4, and 11 fail because the baseline
treats global change as owned residue and does not report changed identities.
Ownership fixtures and fixed-port cases must remain valid.

- [ ] **Step 8: Implement the ownership closure**

Implement these rules in order:

```text
1. Key every identity by processId plus canonical creationTimeUtc.
2. Seed ownership from exact registered identities.
3. Seed ownership from case-insensitive normalized control/result/preparer
   fragments, exact run identifier, and exact profile roots.
4. Repeatedly add a row when its parent PID resolves to an owned identity
   observed at or before the child's creation time.
5. Stop when a complete pass adds no identity.
6. Compute global added/removed/changed independently from ownership.
   `changed` means the same identity key exists in both snapshots but at least
   one of name, parentProcessId, executablePath, or commandLine differs.
   Changed rows are excluded from `added` and `removed`.
7. Return only after-snapshot owned rows as ownedResidue.
8. Sort every returned row by processId, then creationTimeUtc.
```

The changed audit rows use this exact shape:

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

Do not compare or seed ownership from PID alone.

- [ ] **Step 9: Run process-ownership GREEN and seal Task 1**

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\process-ownership-v9.test.mjs' `
  --output '.\task-1-ownership-green.json'
& 'C:\Program Files\nodejs\node.exe' --check '.\semantic-map-v9.mjs'
& 'C:\Program Files\nodejs\node.exe' --check '.\process-ownership-v9.mjs'
```

Expected: ownership exit `0`, `13/13`, both syntax checks exit `0`.

Write `task-1-report.md` and `task-1-contract-lock.json` exclusively. The lock
contains the paths, bytes, and SHA-256 of both modules, both test files, and
four RED/GREEN records. Read the lock back and recompute every identity. Do
not create the result or release root.

---

### Task 2: Build and test the v9 source authenticator and one-shot reconstruction controller

**Files:**

- Create: `prepare-v9-core.mjs`
- Create: `prepare-v9-core.test.mjs`
- Create: `prepare-v9.mjs`
- Create: `prepare-v9.test.mjs`
- Create: `read-only-verify-v9.mjs`
- Create: `task-4-reconstruct-v9-once.mjs`
- Create: `task-5-install-diagnostic-v9-once.mjs`
- Create: `operator-contract-v9.test.mjs`

All files use the exact control root in the file map.

**Interfaces:**

- Consumes: Task 1 semantic and ownership exports; fixed design, Git, v8,
  runtime, tree, and deadline identities.
- Produces: source authentication, one-shot reconstruction, independent
  readback, diagnostic installation, and static operator contracts used by
  Tasks 4 and 5.

- [ ] **Step 1: Write the source-authentication tests before the controller**

The sixteen ordered `prepare-v9-core.test.mjs` cases are:

```text
1. committed design identity
2. committed plan is execution HEAD
3. branch, upstream, and remote
4. clean tracked Git, empty diff, diff-check, and no index lock
5. terminal v8 result/control roots are regular non-reparse directories
6. exact terminal v8 controlling artifact identities
7. v8 remains failed and retryAuthorized is false
8. v8 child-local reconstruction marker is not treated as overall success
9. exact v8 thirteen-entry top-level allowlist
10. exact five immutable manifests
11. exact nine-file diagnostic reference
12. exact Node and Playwright identities
13. exact Chrome and Edge identities
14. exact playwright-core path, bytes, hash, ticks, and reparse state
15. fresh result and release roots
16. no path escape, nested Git, reparse, or fixed-port conflict
```

Start with an authenticator that uses the v8 `JSON.stringify` manifest
comparison so the order-only fixture is a valid RED. Run:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\prepare-v9-core.test.mjs' `
  --output '.\task-2-core-red.json'
```

Expected: nonzero exit only for the order-only manifest fixture. Source
identity, syntax, and output-shape failures are invalid RED.

- [ ] **Step 2: Implement source authentication with the Task 1 comparator**

Import:

```js
import {
  assertSemanticJsonEquals,
} from './semantic-map-v9.mjs';
```

Use `assertSemanticJsonEquals` only for the immutable manifest map. Continue
to use byte/hash equality for every file and record, exact ordered equality
for arrays, and exact scalar equality for branch, HEAD, upstream, remote,
runtime, decisions, and paths.

The terminal-v8 authentication result must include:

```js
{
  terminalDecision: 'REJECT',
  retryAuthorized: false,
  childLocalMarkerPassed: true,
  overallV8Passed: false,
  task3Authorized: false,
}
```

Run:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\prepare-v9-core.test.mjs' `
  --output '.\task-2-core-green.json'
```

Expected: exit `0`, `16/16`.

- [ ] **Step 3: Write the reconstruction-controller and operator RED**

The twenty-four ordered `prepare-v9.test.mjs` cases are:

```text
1. check mode is read-only with writePaths []
2. reconstruct is the sole result-root writing mode
3. result-root existence rejects before write
4. release-root existence rejects before write
5. target ancestors are regular, non-reparse, and contained
6. exact five immutable trees copy exclusively
7. exact source-v7-diagnostic allowlist copies exclusively
8. diagnostic starts empty
9. no v8 stage/profile/process evidence becomes active v9 evidence
10. v9 policy, runtime, causal-source, workspace, and terminal-v8-lock records
11. reconstruction marker is the final result-root write
12. expected top-level allowlist is exact
13. order-only manifest map accepts
14. missing, extra, or changed manifest fact rejects
15. global process/browser churn is audit evidence
16. v9-owned process residue rejects
17. fixed-port listener rejects
18. v9 profile residue rejects
19. release and forbidden-path residue reject
20. zero or multiple reconstruction child starts reject
21. timeout, nonzero exit, signal, stderr, or stdout mismatch rejects
22. final snapshot and terminalization reserve are mandatory
23. terminal evidence is exclusive and read back by bytes/hash
24. a failed reconstruction preserves the partial root and disables retry
```

The static `operator-contract-v9.test.mjs` must also prove:

```text
task-4-reconstruct-v9-once.mjs has one reconstruction child-start site
task-5-install-diagnostic-v9-once.mjs has no browser/controller start
neither operator contains a retry loop
both use exact absolute roots, exact CWD, exact deadlines, and distinct
prelaunch/terminal evidence paths
```

Use the v8 global-diff acceptance behavior as the RED baseline. Run:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\prepare-v9.test.mjs' `
  --output '.\task-2-controller-red.json'
& 'C:\Program Files\nodejs\node.exe' '.\operator-contract-v9.test.mjs' `
  --output '.\task-2-operator-red.json'
```

Expected: controller nonzero only for order-only manifests and unrelated
global churn. Operator RED is valid when the named operator sources are
absent; its record must still parse and list the exact missing sources.

- [ ] **Step 4: Implement the minimal one-shot preparer**

Use v9 schemas only. The exact reconstructed top-level allowlist is:

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
terminal-v8-lock.json
workspace-integrity-before.json
```

The reconstructor:

```text
authenticates every source before creating the result root
creates the result root exclusively
copies each allowed tree with per-file exclusive creation and readback
reauthenticates each source and destination manifest
creates diagnostic as an empty regular directory
writes the five fixed v9 records exclusively
verifies the provisional inventory
writes reconstruction.json last
returns one compact ACCEPT stdout record
starts no helper, browser, server, or network operation
```

`validateReconstructedStateFacts` must call
`assertSemanticJsonEquals(actual.immutableManifests,
expected.immutableManifests, 'reconstructed immutable manifests')`. Every
other existing exact check remains strict.

- [ ] **Step 5: Implement environment capture and dual-channel acceptance**

The PowerShell snapshot embedded in the operator must project exact
`creationTimeUtc`:

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
      creationTimeUtc = ([datetime]$_.CreationDate).ToUniversalTime().ToString('o')
      executablePath = $_.ExecutablePath
      commandLine = $_.CommandLine
    }
  })
```

The acceptance object must contain separate checks:

```js
{
  globalAuditCaptured: true,
  unrelatedGlobalActivityAllowed: true,
  ownedProcessResidueAbsent: true,
  ownedBrowserResidueAbsent: true,
  fixedPortResidueAbsent: true,
  profileResidueAbsent: true,
}
```

Do not retain `browserProcessesStable` or any equality check over the complete
global browser array.

- [ ] **Step 6: Implement the durable reconstruction operator**

The sole caller command is:

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control'
& 'C:\Program Files\nodejs\node.exe' '.\task-4-reconstruct-v9-once.mjs'
```

The sole reconstruction child command constructed internally is:

```text
"C:\Program Files\nodejs\node.exe" ".\prepare-v9.mjs" reconstruct
  --repo "C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site"
  --v8-root "C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8"
  --root "C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9"
  --release-root "C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v9"
  --v9-run-id "$runId"
```

`$runId` is generated once, written to `task-4-prelaunch.json`, read back,
then inserted into the child argument array. The prelaunch record is the sole
authority for that exact runtime value.

Use child deadline `180000`, total budget `240000`, snapshot ceiling `30000`,
and terminalization reserve `5000`. Write `task-4-prelaunch.json` before the
sole child start and `task-4-operator-evidence.json` after independent
readback, terminal snapshot, audit/ownership classification, and acceptance.

- [ ] **Step 7: Implement the one-shot diagnostic installer**

The installer consumes `staged-diagnostic\operational-files.json` and an
accepted reconstruction review. It requires the result-root `diagnostic`
directory to be empty. It copies each listed operational file exclusively,
reads it back, verifies bytes/hash, and writes
`diagnostic\installation.json` last.

Its terminal record has these exact ordered fields and value contracts:

```text
schema:
efficient-technologies/poster-picture-layer-v9-diagnostic-installation-v1
passed: boolean true
writeOnce: boolean true
retryAuthorized: boolean false
sourceManifest.path: exact absolute regular-file path
sourceManifest.bytes: positive integer
sourceManifest.sha256: lowercase 64-character SHA-256
installedFiles: exact five-row ordered identity array
```

- [ ] **Step 8: Run controller GREEN and seal Task 2**

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\prepare-v9.test.mjs' `
  --output '.\task-2-controller-green.json'
& 'C:\Program Files\nodejs\node.exe' '.\operator-contract-v9.test.mjs' `
  --output '.\task-2-operator-green.json'
& 'C:\Program Files\nodejs\node.exe' --check '.\prepare-v9-core.mjs'
& 'C:\Program Files\nodejs\node.exe' --check '.\prepare-v9.mjs'
& 'C:\Program Files\nodejs\node.exe' --check '.\read-only-verify-v9.mjs'
& 'C:\Program Files\nodejs\node.exe' --check '.\task-4-reconstruct-v9-once.mjs'
& 'C:\Program Files\nodejs\node.exe' --check '.\task-5-install-diagnostic-v9-once.mjs'
```

Expected: core `16/16`, controller `24/24`, operator contract pass, all syntax
checks exit `0`.

Write `task-2-report.md` and `task-2-contract-lock.json` exclusively. Recompute
every identity from disk. Result and release roots remain absent.

---

### Task 3: Build the staged diagnostic harness under TDD and freeze all offline contracts

**Files:**

- Create every `staged-diagnostic` file in the file map.
- Create `task-6-preflight-v9-once.mjs`.
- Create `task-7-isolation-v9-once.mjs`.
- Modify `operator-contract-v9.test.mjs` to require all four final operators.

**Interfaces:**

- Consumes: exact nine-file source-v7 diagnostic reference, Task 1
  qualification modules, Task 2 read-only verifier, fixed runtime and causal
  source.
- Produces: one reviewed operational-file manifest and two byte-identical
  complete offline GREEN records. Task 5 installs only the listed operational
  files.

- [ ] **Step 1: Write the eighteen JavaScript and eight native RED cases**

The JavaScript cases are:

```text
1. stages are exactly preflight and isolation
2. isolation order is the exact five-cell matrix
3. JavaScript modes and operation names are exact
4. operation and parent deadlines are exact and contained
5. expected outcomes exit zero and valid mismatches exit two
6. process results are always top-level arrays
7. disabled add-style calls exact page.addStyleTag with canonical CSS
8. enabled add-style is a byte-identical control operation
9. evaluation entry is synchronous with inherited v8-evaluate-entry token
10. collection has exact schema/type checks and rawStateDigestSha256 null
11. collection and full probes contain no Promise/timer/frame/event wait
12. full probe uses one synchronous evaluation
13. full probe preserves style, mutations, schema, state, and canonical digest
14. every cell/finalizer verifies the exact playwright-core identity
15. preflight returns before profile or Chrome creation
16. launch, inline fixture, zero-network, and about:blank contracts are exact
17. result fields, phase journals, cleanup, and profile removal are exact
18. finalizer inventories, classification, seal, and read-only verify are exact
```

The native PowerShell cases are:

```text
1. singleton Object[] remains an array of length one
2. five Object[] rows remain an ordered array of length five
3. cleanup remains an object
4. all process-result paths use one shared writer
5. writer uses ConvertTo-Json -InputObject
6. writer never pipeline-enumerates the supplied value
7. stages are exactly preflight and isolation
8. v9 namespace is exclusive
```

Run RED against the unadapted reference:

```powershell
& 'C:\Program Files\nodejs\node.exe' `
  '.\staged-diagnostic\operation-isolation-contract.test.mjs' `
  --source-root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8\source-v7-diagnostic' `
  --output '.\task-3-javascript-red.json'

powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass `
  -File '.\staged-diagnostic\controller-json-serialization-contract.tests.ps1' `
  -ControllerPath 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8\source-v7-diagnostic\run-canonicalization-diagnostic.ps1' `
  -OutputPath '.\task-3-native-red.json'
```

Expected: valid RED only for v9 stage, namespace, five-cell, and operation
contracts. Syntax, import, fixture, and output parsing must pass.

- [ ] **Step 2: Implement the exact v9 schemas and matrix**

Use these schemas:

```text
efficient-technologies/poster-picture-layer-v9-operation-isolation-matrix-v1
efficient-technologies/poster-picture-layer-v9-operation-isolation-cleanup-v1
efficient-technologies/poster-picture-layer-v9-operation-isolation-cell-preflight-v1
efficient-technologies/poster-picture-layer-v9-operation-isolation-cell-result-v1
efficient-technologies/poster-picture-layer-v9-operation-isolation-cell-phase-v1
efficient-technologies/poster-picture-layer-v9-causal-source-verification-v1
efficient-technologies/poster-picture-layer-v9-operation-isolation-evidence-lock-v1
```

The exact matrix constant is:

```js
export const OPERATION_MATRIX = Object.freeze([
  Object.freeze({
    id: 'add-style-disabled',
    javaScriptEnabled: false,
    operation: 'add-style',
    expectedOutcome: 'TIMEOUT',
  }),
  Object.freeze({
    id: 'add-style-enabled',
    javaScriptEnabled: true,
    operation: 'add-style',
    expectedOutcome: 'PASS',
  }),
  Object.freeze({
    id: 'evaluate-entry-disabled',
    javaScriptEnabled: false,
    operation: 'evaluate-entry',
    expectedOutcome: 'PASS',
  }),
  Object.freeze({
    id: 'collection-disabled',
    javaScriptEnabled: false,
    operation: 'collection',
    expectedOutcome: 'PASS',
  }),
  Object.freeze({
    id: 'synchronous-full-disabled',
    javaScriptEnabled: false,
    operation: 'synchronous-full',
    expectedOutcome: 'PASS',
  }),
]);
```

The preflight sentinel is:

```json
{
  "schema": "efficient-technologies/poster-picture-layer-v9-operation-isolation-cell-preflight-v1",
  "stage": "preflight",
  "pass": true,
  "chromeLaunched": false
}
```

- [ ] **Step 3: Implement the fixed browser and operation boundary**

The persistent-context options are exact:

```js
{
  executablePath: runtime.chrome.path,
  headless: true,
  viewport: { width: 412, height: 823 },
  javaScriptEnabled: cell.javaScriptEnabled,
  deviceScaleFactor: 1,
  colorScheme: 'dark',
  acceptDownloads: false,
  serviceWorkers: 'block',
  permissions: [],
  args: ['--disable-background-networking'],
}
```

Install `context.route('**/*', handler)` before fixture installation. Abort
and record every HTTP(S) request. Allow only non-network schemes. Keep the
page on `about:blank` and use:

```js
await page.setContent(FIXTURE_HTML, { waitUntil: 'domcontentloaded' });
```

Import, rather than retype:

```js
import {
  FIXTURE_HTML,
  CANONICAL_TOP_LEVEL_KEYS,
  validateCanonicalState,
} from '../source-v7-diagnostic/canonicalization-fixture.mjs';

import {
  CANONICAL_CAPTURE_STYLE,
} from '../source-v7-diagnostic/source/capture-stabilizer-proposed.mjs';
```

During offline tests, resolve the same imports through the supplied absolute
`--source-root`. During installed execution, the relative paths above resolve
inside the v9 result root.

- [ ] **Step 4: Implement the four exact operations**

`add-style`:

```js
await page.addStyleTag({ content: CANONICAL_CAPTURE_STYLE });
```

`evaluate-entry`:

```js
const entrySentinel = await page.evaluate(() => ({
  entered: true,
  entryToken: 'v8-evaluate-entry',
}));
```

`collection` performs one synchronous `page.evaluate` that reads the existing
fixture without mutation and returns the complete raw state plus:

```js
{
  topLevelKeySetPass: true,
  stableTextPass: true,
  boundsSchemaPass: true,
  boundsFinitePass: true,
  animationCountTypePass: true,
  videoControlsShapePass: true,
  computedStyleTypesPass: true,
  pass: true,
}
```

Its `rawStateDigestSha256` is exactly `null`.

`synchronous-full` performs one synchronous `page.evaluate` that:

```text
creates one style element with type text/css
appends a text node containing the exact canonical stylesheet
appends the style to document.head without onload/onerror
sets count text to 0
suppresses video controls
guardedly pauses video
reads the exact canonical state
returns the existing canonical schema
```

The accepted canonical digest is:

```text
b8634b4f899eee08ce6d1c14c57c11657214372a9f2eb53107282af5eb43ac67
```

- [ ] **Step 5: Implement exact result, journal, inventory, and decision contracts**

Every cell result has these exact ordered fields; non-applicable fields are
`null`, never omitted:

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

Preflight locked inventory:

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

Isolation locked inventory:

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

Each stage adds `diagnostic-evidence-lock.json`, excluded from its own lock
rows. Reject missing files, extra unlocked regular files, `.profiles`, and
`process-registration.json`.

The preflight journal is exactly:

```text
transport-preflight / START
transport-preflight / END
```

Every isolation journal is exactly:

```text
persistent-context-launch / START
persistent-context-launch / END
new-page / START
new-page / END
fixture-installation / START
fixture-installation / END
context-close / START
context-close / END
```

Between fixture installation and context close, the cell-specific pair is:

```text
add-style-disabled:
add-style / START
add-style / TIMEOUT

add-style-enabled:
add-style / START
add-style / END

evaluate-entry-disabled:
evaluate-entry / START
evaluate-entry / END

collection-disabled:
collection / START
collection / END

synchronous-full-disabled:
synchronous-full / START
synchronous-full / END
```

Only `add-style-disabled` may use `add-style / TIMEOUT / 5000 ms` as an
expected exit-zero outcome.

The causal-source observations are exact:

```text
preflight:
controller / null / prelaunch
cell / preflight / prelaunch
cell / preflight / preresult
finalizer / null / preseal

isolation:
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

Top-level controller exits are exact:

```text
preflight ACCEPT / true: 0
isolation CONFIRMED / true: 0
isolation FALSIFIED / false: 2
isolation INCONCLUSIVE / false: 2
uncaught error before terminal evidence: 1
```

- [ ] **Step 6: Adapt and verify the two evidence sealers**

Use this exact source:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8\source-v4-browser\evidence-seal.mjs
12315 / 47d7b29de007489f4a1b7a6bdd3077f6bd7984e64b134d67bfabf46754e79c8a
```

Apply these six ordered replacements separately for preflight and isolation:

```text
1. browser-evidence-lock.json -> diagnostic-evidence-lock.json
   expected replacement count: 1
2. exact v4 REQUIRED_PATHS declaration -> exact stage inventory declaration
   expected replacement count: 1
3. v4 browser-lock schema ->
   efficient-technologies/poster-picture-layer-v9-operation-isolation-evidence-lock-v1
   expected replacement count: 1
4. browser evidence root -> diagnostic evidence root
   expected replacement count: 3
5. node evidence-seal.mjs -> exact stage-specific sealer filename
   expected replacement count: 2
6. absolute-browser-root -> absolute-diagnostic-root
   expected replacement count: 2
```

Write one adaptation record per sealer with source/adapted bytes and hashes,
all replacement pairs/counts, and an in-memory replay digest. Require replay
to reproduce the adapted file byte-for-byte.

- [ ] **Step 7: Implement the two durable stage operators**

`task-6-preflight-v9-once.mjs` starts exactly one controller child and one
read-only verifier child. `task-7-isolation-v9-once.mjs` does the same. Both
capture global audit plus owned residue using Task 1.

The exact controller command pattern is:

```text
powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass
  -File "C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9\diagnostic\run-operation-isolation.ps1"
  -Stage "$stage"
  -RunId "$runId"
```

`$stage` is exactly `preflight` or `isolation`. `$runId` comes only from the
owning exclusive prelaunch record. The source contains no fixed UUID.

The read-only verifier command pattern is:

```text
"C:\Program Files\nodejs\node.exe"
  "C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control\read-only-verify-v9.mjs"
  "$mode"
  --root "$stageRoot"
```

`$mode` equals the owning stage, and `$stageRoot` is that stage's normalized
absolute directory.

- [ ] **Step 8: Run all offline GREEN contracts twice**

First run:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\semantic-map-v9.test.mjs' --output '.\task-3-semantic-green-1.json'
& 'C:\Program Files\nodejs\node.exe' '.\process-ownership-v9.test.mjs' --output '.\task-3-ownership-green-1.json'
& 'C:\Program Files\nodejs\node.exe' '.\prepare-v9-core.test.mjs' --output '.\task-3-core-green-1.json'
& 'C:\Program Files\nodejs\node.exe' '.\prepare-v9.test.mjs' --output '.\task-3-controller-green-1.json'
& 'C:\Program Files\nodejs\node.exe' '.\operator-contract-v9.test.mjs' --output '.\task-3-operator-green-1.json'
& 'C:\Program Files\nodejs\node.exe' '.\staged-diagnostic\operation-isolation-contract.test.mjs' --source-root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8\source-v7-diagnostic' --output '.\task-3-diagnostic-green-1.json'
powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass -File '.\staged-diagnostic\controller-json-serialization-contract.tests.ps1' -ControllerPath '.\staged-diagnostic\run-operation-isolation.ps1' -OutputPath '.\task-3-native-green-1.json'
```

Repeat with the suffix `-2.json`. Expected:

```text
semantic: 9/9
ownership: 13/13
source core: 16/16
reconstruction controller: 24/24
operator contract: pass
diagnostic JavaScript: 18/18
native PowerShell: 8/8
```

Normalize only volatile `recordedAtUtc`, PID, and temporary test-root values.
The two normalized aggregate records must be byte-identical. All substantive
facts, case order, counts, decisions, paths, deadlines, and hashes remain in
the comparison.

- [ ] **Step 9: Freeze the operational manifest and seal Task 3**

`operational-files.json` lists only:

```text
operation-isolation-cell.mjs
run-operation-isolation.ps1
finalize-operation-isolation.mjs
evidence-seal-preflight.mjs
evidence-seal-isolation.mjs
```

Rows are sorted by ordinal relative path and have exact
`{relativePath,bytes,sha256}` fields. The manifest itself has:

```text
schema:
efficient-technologies/poster-picture-layer-v9-operational-files-v1

files:
exact five-row ordered array of {relativePath,bytes,sha256}
```

Run `node --check` over every active `.mjs`. Parse both PowerShell files with
`[Management.Automation.Language.Parser]::ParseFile` and require zero errors.
Run `read-only-verify-v9.mjs` in implementation mode against the control root.

Write `task-3-report.md`, `task-3-offline-green-1.json`,
`task-3-offline-green-2.json`, and `task-3-contract-lock.json` exclusively.
The result and release roots remain absent.

---

### Task 4: Reconstruct the v9 result root exactly once

**Files:**

- Execute: `task-4-reconstruct-v9-once.mjs`
- Create exclusively: `task-4-prelaunch.json`
- Create exclusively: `task-4-operator-evidence.json`
- Create exclusively: `task-4-report.md`
- Create once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9`

**Interfaces:**

- Consumes: sealed Task 3 implementation, terminal v8, execution Git/runtime
  boundaries.
- Produces: accepted empty-diagnostic v9 reconstruction or one terminal
  rejection. Only acceptance authorizes Task 5.

- [ ] **Step 1: Reauthenticate every precondition**

Require:

```text
Task 1, 2, and 3 locks valid
two normalized offline GREEN records byte-identical
tracked Git clean at execution HEAD
terminal v8 identities exact and v8 still failed/no-retry
runtime and causal source exact
result and release roots absent
ports 4381, 4382, and 4383 unoccupied
no v9 profile or forbidden path
```

- [ ] **Step 2: Invoke the durable reconstruction operator once**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control'
& 'C:\Program Files\nodejs\node.exe' '.\task-4-reconstruct-v9-once.mjs'
```

Do not invoke `prepare-v9.mjs reconstruct` directly.

- [ ] **Step 3: Observe the original operator to terminal state**

If the client returns before the operator exits, read the durable PID from
`task-4-prelaunch.json` and observe that exact PID plus creation time. Never
start another operator.

- [ ] **Step 4: Independently verify reconstruction**

Run no reconstruction command. Invoke only the read-only verifier:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\read-only-verify-v9.mjs' reconstruction `
  --root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9'
```

Require the exact thirteen-entry top-level allowlist, five semantic manifests,
exact file/record bytes, empty diagnostic, absent release root, complete
global audit, empty owned residue, empty profiles/listeners/forbidden paths,
unchanged Git/product/runtime, and verified terminal evidence.

- [ ] **Step 5: Seal Task 4 and route**

Write `task-4-report.md` from fresh readback. If any check rejects, preserve
the partial root, mark Task 4 terminal, and stop the plan. If every check
accepts, record `Task 5 authorized: true`. Do not populate `diagnostic` yet.

---

### Task 5: Install the reviewed diagnostic harness exactly once

**Files:**

- Execute: `task-5-install-diagnostic-v9-once.mjs`
- Create exclusively: `task-5-prelaunch.json`
- Create exclusively: `task-5-operator-evidence.json`
- Create exclusively: `task-5-report.md`
- Populate once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9\diagnostic`

**Interfaces:**

- Consumes: accepted Task 4 reconstruction and sealed five-row operational
  manifest.
- Produces: five exact operational files plus terminal `installation.json`.
  Only acceptance authorizes Task 6.

- [ ] **Step 1: Reauthenticate Task 4 and the staged manifest**

Require the result-root reconstruction to accept and its `diagnostic`
directory to be an empty regular non-reparse directory. Require the staged
manifest and every listed source file to match Task 3.

- [ ] **Step 2: Invoke the installer once**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control'
& 'C:\Program Files\nodejs\node.exe' '.\task-5-install-diagnostic-v9-once.mjs'
```

The installer starts no browser, PowerShell controller, server, or network
operation.

- [ ] **Step 3: Verify the installed harness read-only**

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\read-only-verify-v9.mjs' installation `
  --root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9\diagnostic'
```

Require exact equality with the staged five-row manifest, terminal
`installation.json`, no additional file, no stage directory, no profile,
empty owned residue, unoccupied fixed ports, and unchanged boundaries.

- [ ] **Step 4: Seal Task 5 and route**

Write `task-5-report.md`. Rejection is terminal and has no reinstall. Exact
acceptance records `Task 6 authorized: true`.

---

### Task 6: Run the browser-free transport preflight exactly once

**Files:**

- Execute: `task-6-preflight-v9-once.mjs`
- Create exclusively: `task-6-prelaunch.json`
- Create exclusively: `task-6-operator-evidence.json`
- Create exclusively: `task-6-report.md`
- Create once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9\diagnostic\preflight`

**Interfaces:**

- Consumes: accepted installation and exact boundaries.
- Produces: sealed `ACCEPT` preflight or terminal rejection. Only accepted
  read-only verification authorizes Task 7.

- [ ] **Step 1: Reauthenticate and capture prelaunch facts**

Require absent preflight/isolation paths, no v9 profiles, unoccupied fixed
ports, unchanged Git/product/runtime/v8, and exact installed harness.
`task-6-prelaunch.json` records the complete global process/browser snapshot,
exact operator identity, and exclusive run UUID before the sole controller
start.

- [ ] **Step 2: Invoke the preflight operator once**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control'
& 'C:\Program Files\nodejs\node.exe' '.\task-6-preflight-v9-once.mjs'
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
empty stderr and validationErrors
exact START/END journal
exact eight-file inventory plus evidence lock
exact causal-source observations
complete global audit
empty owned process/browser/profile/listener residue
```

- [ ] **Step 4: Run the sole read-only preflight verifier**

The operator itself starts the one allowed verifier child. The caller only
reads its captured stdout/stderr and then reads evidence from disk:

```powershell
& 'C:\Program Files\nodejs\node.exe' '.\read-only-verify-v9.mjs' preflight `
  --root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9\diagnostic\preflight'
```

This displayed command documents the verifier contract. Do not run it a
second time if the operator already captured its required invocation; use the
operator-captured result and direct file readback.

- [ ] **Step 5: Seal Task 6 and route**

Write `task-6-report.md` from fresh evidence. Rejection is terminal. Exact
`ACCEPT` plus read-only verification records `Task 7 authorized: true`.

---

### Task 7: Run the five-cell isolation stage exactly once

**Files:**

- Execute: `task-7-isolation-v9-once.mjs`
- Create exclusively: `task-7-prelaunch.json`
- Create exclusively: `task-7-operator-evidence.json`
- Create exclusively: `task-7-report.md`
- Create once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9\diagnostic\isolation`

**Interfaces:**

- Consumes: independently accepted preflight and exact fixed experiment.
- Produces: one sealed `CONFIRMED`, `FALSIFIED`, or `INCONCLUSIVE` matrix.
  Every decision is terminal.

- [ ] **Step 1: Reauthenticate the accepted preflight and all fixed boundaries**

Require exact Task 6 evidence and review, absent isolation path, exact
installed harness/source/runtime/causal identities, clean Git/product state,
unoccupied fixed ports, and no v9 residue.

- [ ] **Step 2: Invoke the isolation operator once**

```powershell
Set-Location 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control'
& 'C:\Program Files\nodejs\node.exe' '.\task-7-isolation-v9-once.mjs'
```

Do not invoke the controller, cells, finalizer, or verifier directly.

- [ ] **Step 3: Observe the original durable PID through the complete budget**

The controller budget is `1000000` ms and the operator budget is `1180000`
ms. If the client returns early, observe the exact prelaunch PID and creation
time. Never start another stage.

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
all seven collection capability booleans true
full canonical digest b8634b4f899eee08ce6d1c14c57c11657214372a9f2eb53107282af5eb43ac67
five ordered registered exit-zero process rows
exact twenty-four-file inventory plus lock
empty cell stderr, HTTP(S), and validationErrors arrays
exact phase journals and deadlines
exact runtime, fixture, style, and causal-source identities
complete global audit
empty owned process/browser/profile/listener residue
unchanged Git/product/v8 and absent release root
```

- [ ] **Step 5: Independently recompute and classify**

Use the one verifier result captured by the operator and direct file readback.
Recompute every result, stream, journal, state digest, inventory row, cleanup
row, process identity, audit row, owned-residue row, and evidence-lock digest.

Classification is exact:

```text
valid completed outcome mismatch: FALSIFIED
identity/launch/transport/filesystem/network/deadline/cleanup/seal failure:
INCONCLUSIVE
exact matrix and every gate: CONFIRMED
```

- [ ] **Step 6: Seal Task 7**

Write `task-7-report.md`. Do not rerun any cell or stage for any decision.
Record `Task 8 authorized: true` only because Task 8 is read-only closeout.

---

### Task 8: Close v9 and route the terminal result

**Files:**

- Create exclusively: `task-8-terminal-review.json`
- Create exclusively: `task-8-report.md`
- Modify append-only: `progress.md`

**Interfaces:**

- Consumes: every sealed v9 control/result artifact.
- Produces: final evidence-integrity verdict and allowed next design route.
  Starts no browser, controller, cell, installer, or reconstruction process.

- [ ] **Step 1: Reauthenticate current boundaries**

Freshly read Git branch/HEAD/status/diff/index lock; v8 terminal identities;
v9 result/control inventories; immutable trees; runtime; causal source; fixed
ports; profiles; global audit; owned residue; release-root absence; and every
task lock.

- [ ] **Step 2: Recompute the terminal diagnostic evidence**

Read all five result files, five stdout files, five stderr files, five
journals, process array, matrix, cleanup, causal-source verification, and
evidence lock. Recompute the canonical full-state digest and every locked
file identity.

- [ ] **Step 3: Write the terminal review exclusively**

`task-8-terminal-review.json` has:

```js
{
  schema: 'efficient-technologies/poster-picture-layer-v9-terminal-review-v1',
  evidenceVerdict: 'COMPLIANT',
  diagnosticDecision: 'CONFIRMED',
  v9Terminal: true,
  retryAuthorized: false,
  productMutationAuthorized: false,
  releaseAuthorized: false,
  publicationAuthorized: false,
  deploymentAuthorized: false,
  nextDesignAuthorized: 'smallest-evidence-based-helper-correction',
  findings: [],
}
```

Those exact success values are permitted only when independently recomputed
evidence supports them. Otherwise preserve the actual diagnostic decision,
set `evidenceVerdict` to `NONCOMPLIANT`, set `nextDesignAuthorized` to `null`,
and list exact findings. Never rewrite producer evidence to make the review
pass.

- [ ] **Step 4: Write the final report and verify no user-visible mutation**

`task-8-report.md` must explicitly state:

```text
No UI, video, scroll, scene, zoom, motion, animation, product, release,
publication, deployment, or live-site change occurred in v9.
```

If and only if evidence is `COMPLIANT` and diagnostic decision is
`CONFIRMED`, the next work is a separate design for the smallest
evidence-based helper correction. Do not implement that correction in this
plan.

---

## Verification Before Completion

No task may claim completion from a producer boolean or report alone.

Before each completion claim, freshly read:

```text
current Git branch, HEAD, status, diff, diff-check, and index lock
terminal v8 result/control identities and no-retry state
relevant v9 task prelaunch, evidence, report, and lock records
result-root and stage inventories
semantic immutable manifests
global audit and owned-residue classifications
process identities including creationTimeUtc
profiles and fixed-port listeners
runtime and playwright-core identities
product and immutable-tree identities
release-root absence
unauthorized later-path absence
```

Every final statement must distinguish:

```text
controller integrity
diagnostic causal result
product/release/deployment authority
```

`CONFIRMED` proves only the diagnostic causal hypothesis. It does not prove a
production helper correction, performance improvement, release readiness,
SEO/GEO publication, deployment, or live-site change.
