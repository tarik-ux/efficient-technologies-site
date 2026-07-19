# Ownership-Scoped Capture Operation Isolation v9 Design

## Status

This design defines a fresh, diagnostic-only v9 experiment. It supersedes no
v8 evidence and authorizes no product edit, helper adaptation, browser
qualification, Lighthouse run, release root, Git publication, deployment, or
live-site change by itself.

V8 is terminal, failed, and immutable. Its sole reconstruction attempt may not
be retried, repaired, resealed, reclassified, or continued. V9 may use the
bytes in the terminal v8 result root only after independently authenticating
them under the v9 contracts below.

## Goal

V9 has two sequential goals:

1. recover the intended experiment into a fresh v9 root without repeating the
   two v8 qualification-controller defects; and
2. run the unchanged five-cell operation-isolation experiment once to identify
   the exact browser operation that prevents deterministic canonical capture
   while page JavaScript is disabled.

Reconstruction acceptance is only the recovery gate. It is not a successful
v9 diagnostic result.

## User-visible and product boundary

V9 is harness-only. It must not change:

- page layout, copy, colors, typography, or assets;
- the world video, source bytes, attributes, or takeover behavior;
- scrolling, scene changes, zoom-in or zoom-out behavior;
- loader, navigation, chapter, cursor, or overlay behavior;
- transitions, triggers, durations, easings, or animations; or
- any deployable HTML, CSS, JavaScript, image, font, SVG, video, or header.

The existing responsive picture-poster candidate remains byte-identical:

```text
baseline: 47 / cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850
candidate: 48 / bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653
```

The complete immutable tree set remains:

```text
baseline: 47 / cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850
candidate: 48 / bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653
browser: 20 / f7eb49d601f34fb29f097a902b2f8f29a85008ea9e78416c43320443428a4082
source-v4-browser: 18 / 089513385f53893c4cdbb1bc2b8402fb3c7f972886da05af9e94fda3a37c0782
accepted-harness-source: 49 / 46be90cedf7913ec4ee4c9b26a01b14fb1a0b8b923d86db0bf5270b4c52be4d1
```

## Terminal v8 evidence

The one v8 reconstruction invocation is terminal:

```text
outer exit: 1
outer stderr: task-2-reconstruct-v8-once: final reconstruction acceptance rejected
outer duration: 124877 ms
child starts: 1
child exit: 0
child signal: null
child stderr: empty
child stdout contract: exact ACCEPT
candidate qualified: false
Task 3: not authorized
```

The exact controlling artifacts are:

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
```

The v8 reconstruction child wrote:

```text
reconstruction.json:
2879 / 9b61a31a8333dd1a80c04ba053e914e2c15e4e41fd8052e0d5537fe50c784949
```

That marker proves only the child-local copy and write completed. It does not
override the terminal parent rejection and must never be presented as a
successful v8 result.

Independent readback established that the v8 result root contains the exact
thirteen allowed top-level entries, an empty regular `diagnostic` directory,
the exact nine-file diagnostic reference, the exact immutable manifests, the
exact six generated records, no release root, and no task-owned filesystem or
profile residue.

## V8 root causes

V8 had two qualification-controller defects. Neither is a product or browser
experiment failure.

### Order-sensitive semantic-map comparison

V8 built the actual manifest map in this insertion order:

```text
acceptedHarnessSource
baseline
browser
candidate
sourceV4Browser
```

The authenticated expected map had this insertion order:

```text
baseline
candidate
browser
sourceV4Browser
acceptedHarnessSource
```

Every key, file count, and digest matched. Stable-key comparison was true.
V8 nevertheless rejected the map because it compared raw `JSON.stringify`
output, which treats insertion order as significant.

### Global activity used as a qualification gate

V8 captured every `node.exe`, `powershell.exe`, `pwsh.exe`, `git.exe`,
`chrome.exe`, and `msedge.exe` row. Its residue function accepted ownership
inputs but did not use them. It returned every after-snapshot row that was
absent or changed relative to the before snapshot.

The terminal evidence therefore gated on unrelated Agentic OS tests, ordinary
Git and PowerShell activity, and normal Chrome renderer churn. The full global
browser-array equality check failed even though both snapshots contained
thirty-two browsers and the added or removed renderers were unrelated to v8.

V9 must retain these observations as audit evidence without allowing unrelated
activity to determine qualification.

## Hypotheses

### Qualification-controller hypothesis

> A canonical semantic-map comparator plus an ownership-scoped residue gate
> will accept the exact reconstructed content and tolerate unrelated global
> activity while continuing to reject any v9-owned process, profile, listener,
> path, release, Git, runtime, or product residue.

This is a controller contract. It is proven offline before the one-shot v9
reconstruction.

### Browser-operation hypothesis

The sealed browser hypothesis remains unchanged:

> Under the fixed JavaScript-disabled Chrome context, Playwright can enter a
> synchronous evaluation and return synchronous DOM/layout data, but
> `page.addStyleTag` does not complete because its internal `style.onload`
> Promise depends on a page callback that does not run. A single synchronous
> evaluation that appends the same style without awaiting `onload`, performs
> the same mutations, and reads the same state should complete.

Only the exact five-cell diagnostic matrix may confirm or falsify this
hypothesis.

## Approaches considered

### Dual-channel ownership model — selected

Capture the complete global environment for audit. Separately derive the
qualification facts from v9-owned identities and exclusive v9 resources.
Canonicalize only semantic object maps. Keep arrays, files, records, hashes,
and ordered experiment cases strict.

This directly addresses both v8 defects without weakening task-owned cleanup
or changing the experiment.

### Windows Job Object containment — rejected

An operating-system Job Object would provide strong child containment but
would introduce native Windows interop, browser breakaway edge cases, and a
larger implementation surface. The v9 reconstruction is not permitted to
launch a browser, and the diagnostic browser profiles already provide an
exact ownership marker. The additional complexity is not justified.

### Quiescent-workstation global equality — rejected

Requiring every unrelated browser and development process to remain unchanged
would preserve the v8 comparison but make qualification depend on normal user
activity. It contradicts the approved boundary and remains nondeterministic.

## Authority and paths

- Publish checkout:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`
- Branch:
  `agent/performance-without-motion-loss`
- Design base HEAD:
  `a12bf4c5b175ea9e906febd7877ff0430745e614`
- Upstream:
  `b416b8113315c95c32d4674aa54769d90c562abd`
- Remote:
  `https://github.com/tarik-ux/efficient-technologies-site.git`
- Terminal v8 result root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8`
- Terminal v8 control root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control`
- Fresh v9 result root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9`
- Fresh v9 control root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control`
- V9 release root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v9`
  (forbidden and must remain absent).

The committed implementation plan will become the execution HEAD. V9 preflight
must authenticate the committed design and plan identities, exact branch,
execution HEAD, upstream, remote, clean status, empty diff, passing
`git diff --check`, and absent `.git/index.lock`.

The v9 result, control, and release roots must all be absent before v9 setup.
After source authentication, the control root may be created once for
implementation code, offline tests, and append-only control evidence. The
result and release roots must remain absent throughout test development. The
implementation plan must define the exact control-root creation order so that
test development cannot consume the one-shot result-root authority.

## Architecture

V9 has three isolated zones:

1. terminal v8 predecessor evidence, which remains read-only and failed;
2. a fresh v9 control root containing controller code, tests, preflight,
   streams, evidence, and terminal review records; and
3. a fresh v9 result root containing authenticated immutable inputs and the
   one-shot diagnostic stage.

Data flows in one direction:

```text
authenticate v8
  -> create the v9 control root once
  -> implement and run offline contracts twice
  -> review and freeze v9 Git/runtime/source/control boundaries
  -> reconstruct the v9 result root once
  -> independently read back the v9 result root
  -> run one browser-free preflight
  -> run one five-cell diagnostic stage
  -> independently recompute evidence
  -> classify and terminalize
```

No later stage may rewrite, delete, or reinterpret an earlier terminal record.

## Components

### Preflight authenticator

Authenticates:

- this committed design and its committed implementation plan;
- Git branch, execution HEAD, upstream, remote, cleanliness, diff, diff-check,
  and lock state;
- v8 result and control roots as regular, non-reparse directories;
- all exact terminal v8 controlling artifacts listed above;
- the exact v8 top-level allowlist and reconstruction marker;
- the five immutable manifests;
- the exact nine-file diagnostic reference:
  `9 / 5613ad53c84c6e2541baed9a90a2b6c11bf645ed6d3ef920b423a6b1d9753ba7`;
- the fixed runtime and causal-source identities;
- fresh v9 result, control-output, and release targets;
- absent fixed-port listeners; and
- absence of path escape, nested Git, reparse points, and forbidden active
  evidence.

### Semantic comparator

Recursively canonicalizes plain JSON object keys before semantic comparison.
It must:

- preserve scalar types and values;
- preserve array order and length;
- reject missing or extra keys;
- reject changed counts or digests;
- reject non-finite numbers and non-JSON values; and
- avoid changing the serialized bytes of evidence records.

Canonicalization is allowed only for explicitly declared semantic object maps,
including immutable-manifest maps. Exact record identity still means exact
bytes and SHA-256. Ordered arrays, stdout contracts, matrix rows, and
top-level allowlists remain order-sensitive.

### One-shot reconstructor

Copies only authenticated v8 content into the fresh v9 result root. It may
copy:

```text
baseline
candidate
browser
source-v4-browser
accepted-harness-source
source-v7-diagnostic
```

It creates a fresh empty `diagnostic` directory and new v9-namespaced policy,
runtime, causal-source, workspace-integrity, terminal-v8-lock, and
reconstruction records.

It must not copy v8 control streams, prelaunch or operator evidence, profiles,
process rows, browser matrices, cleanup records, or failure records as active
v9 evidence. Those remain referenced through `terminal-v8-lock.json`.

The reconstruction child must not start a browser, site server, or unregistered
helper process. It emits one compact exact stdout result and empty stderr.
The parent independently authenticates the completed root.

### Environment recorder

Records before, execution, cleanup, and terminal observations. Process identity
is:

```text
name
processId
parentProcessId
creationTimeUtc
executablePath
commandLine
```

The global audit channel records every added, removed, and changed relevant
process and browser identity. Global activity is evidence, not a qualification
failure by itself.

The fixed relevant executable names remain:

```text
node.exe
powershell.exe
pwsh.exe
git.exe
chrome.exe
msedge.exe
```

The fixed exclusive ports remain:

```text
4381
4382
4383
```

### Ownership classifier

The qualification channel derives v9-owned identities from:

1. exact registered operator, reconstruction-child, controller, and cell-child
   process identities;
2. recursive parent ancestry across the observation ledger;
3. the exact v9 control root, result root, preparer, controller, or cell paths
   in a command line;
4. an exact per-invocation v9 run identifier in a registered command; and
5. an exact v9 persistent-profile path or browser argument.

PID alone is never an identity. A reused PID with a different
`creationTimeUtc` is a new process. It remains audit-only unless another
ownership rule proves it belongs to v9.

All allowed process starts must go through a registered launcher that records
the child identity immediately. The reconstruction child has no allowed
process-start surface. Diagnostic cell children may launch only the fixed
Chrome runtime through the fixed Playwright runtime and exact v9 profile.

The classifier must produce both:

```text
globalActivity
ownedResidue
```

`globalActivity` is always sealed. Only `ownedResidue` is used by the process
and browser cleanup gate.

### Acceptance terminalizer

Independently reads result-root facts, controller facts, global audit facts,
owned-residue facts, fixed-port state, profile state, Git/product state, and
evidence identities. It writes exactly one exclusive terminal decision and
immediately verifies that record's byte count and SHA-256.

## Fresh reconstruction gate

V9 reconstruction may be invoked once.

The parent must write an exclusive prelaunch record before starting exactly
one reconstruction child. The child-local reconstruction marker is written
last inside the result root. The parent then performs independent readback and
evaluates every acceptance check.

The v9 top-level allowlist is fixed:

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

The diagnostic directory must be an empty regular non-reparse directory at
reconstruction acceptance. The release root must be absent. No profile,
listener, forbidden path, nested Git directory, or v9-owned process may
remain.

Reconstruction timings remain:

```text
reconstruction child deadline: 180000 ms
complete reconstruction budget: 240000 ms
environment snapshot ceiling: 30000 ms
terminalization reserve: 5000 ms
```

The total budget must contain every child, independent readback, final
snapshot, evidence write, and terminal readback. No nested deadline may exceed
its containing budget.

A reconstruction rejection preserves the partial v9 root and terminalizes v9.
The root is not deleted or recreated.

## Fixed runtime and causal source

The fixed runtime identities remain:

```text
Node:
C:\Program Files\nodejs\node.exe
89894400 / f13ac3ca23248dc389507e8fe38c34489ab7edb3e6d6700eb6da6a0b7e128eaf
v24.11.1

Playwright wrapper:
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
```

The fixed causal source remains:

```text
C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules\playwright-core\lib\coreBundle.js
3407411 / be2e09efef3017b4eaa76f0cb5289f66c4ea57833f94319b17c1c2f184987ad7
last-write UTC ticks: 639192713587991449
regular file: true
reparse: false
```

Every preflight, cell, controller finalizer, and read-only verifier must
reauthenticate the exact runtime and causal-source identities. Drift is an
identity failure, never a browser outcome.

## Browser-free transport preflight

After reconstruction and two identical offline contract runs, one
browser-free preflight must prove:

- exact registered-child start and identity capture;
- compact stdout and empty-stderr transport;
- process-result serialization as a top-level array;
- deadline containment and terminalization reserve;
- global audit versus owned-residue separation;
- exact evidence write and readback;
- absence of browser launch, profile creation, fixed-port listeners, network
  access, and product mutation; and
- zero task-owned residue.

The preflight invocation is one-shot and writes a sealed result. Acceptance
authorizes the diagnostic stage; rejection terminalizes v9. It is not retried.

## Synthetic fixture and browser boundary

The diagnostic uses the same local inline fixture, canonical stylesheet,
canonical state schema, viewport, dark color scheme, Chrome executable, Node
executable, Playwright wrapper, and `playwright-core` causal source defined by
v8.

It starts no site server, navigates to no product URL, makes no HTTP(S)
request, and installs or updates no dependency.

Each cell uses:

- a fresh persistent profile below the v9 diagnostic stage;
- a separate hidden, registered Node child;
- explicit `javaScriptEnabled`;
- `412 x 823`, device scale factor `1`, dark color scheme;
- blocked service workers, no permissions, and no downloads;
- exact task-owned process and exact-profile cleanup; and
- a terminal result even when an expected operation timeout occurs.

## Fixed diagnostic deadlines

The operation deadlines remain unchanged:

```text
persistent context: 45000 ms
new page: 45000 ms
fixture installation: 15000 ms
each probe operation: 5000 ms
context close: 15000 ms
exact-profile removal: 30000 ms
each cell child: 190000 ms
complete five-cell stage: 1000000 ms
```

Cells run sequentially in the fixed order. No deadline may be increased,
decreased, selected dynamically, or replaced by a sleep.

An expected timeout counts only when the exact operation name and `5000` ms
limit are proven. Any launch, identity, fixture, transport, close, cleanup,
network, or parent-deadline failure is `INCONCLUSIVE`.

## Exact five-cell isolation matrix

The stage order and required outcomes are fixed:

| Cell | JavaScript | Operation | Required outcome |
|---|---|---|---|
| `add-style-disabled` | disabled | exact `page.addStyleTag` with canonical CSS | `TIMEOUT` |
| `add-style-enabled` | enabled | exact `page.addStyleTag` with canonical CSS | `PASS` |
| `evaluate-entry-disabled` | disabled | synchronous `page.evaluate` returns exact entry sentinel | `PASS` |
| `collection-disabled` | disabled | synchronous in-page DOM/style/bounds capability probe only | `PASS` |
| `synchronous-full-disabled` | disabled | one synchronous evaluation injects style, mutates, and collects | `PASS` |

No cell is retried, replaced, reordered, discarded, or selected as a best
trial.

Every cell whose actual outcome equals its required outcome must:

- exit `0`;
- write one exclusive result and one compact stdout record;
- write empty stderr;
- produce one ordered controller process row with the exact ID, integer PID,
  canonical creation time, exit `0`, deadline `190000`, exact stdout/stderr
  paths, `validationErrors: []`, and `pass: true`; and
- preserve exact result/stdout/matrix semantic equality.

The intentional `add-style-disabled: TIMEOUT` is a valid outcome only when the
operation identity, deadline, transport, close, cleanup, and evidence all
pass. A valid completed outcome mismatch exits `2` and produces `FALSIFIED`.
Infrastructure or cleanup failure is `INCONCLUSIVE` and cannot satisfy an
expected matrix outcome.

### Entry sentinel

The inherited fixed sentinel remains:

```json
{
  "entered": true,
  "entryToken": "v8-evaluate-entry"
}
```

The token is intentionally preserved as experiment data. V9 evidence schemas
and paths use v9 namespaces; changing the sentinel would change a frozen
evaluation case.

### Collection probe

`collection-disabled` synchronously queries the same fixture elements and
computed-style/bounds primitives without injecting style or performing
mutations. It returns the complete raw object plus the fixed capability
summary proving:

- the exact top-level key set is present;
- label text is `initializing systems` and count text is `73`;
- every required bounds object has exactly six keys and finite numeric values;
- animation count is a non-negative integer;
- video-controls collection contains exactly one complete record; and
- every computed-style field has the required primitive type.

The fixture's `.pre-mark` animation remains active, so raw animated
opacity/transform values are timing-dependent. The cell must not require,
record as canonical, or select by a raw-state digest. It is a capability,
schema, and type probe.

It schedules no Promise, timer, frame callback, event callback, or sleep.

### Synchronous full probe

`synchronous-full-disabled` performs, inside one synchronous page evaluation:

1. create one `<style type="text/css">`;
2. append a text node containing the byte-identical canonical stylesheet;
3. append it to `document.head` without an `onload` or `onerror` Promise;
4. set the count text to `0`;
5. suppress video controls and guardedly pause video;
6. synchronously query the same elements;
7. synchronously read the same computed styles, animation count, controls,
   and bounds; and
8. return the exact existing canonical-state schema.

The result must equal the two sealed passing v7 states and recompute to:

```text
b8634b4f899eee08ce6d1c14c57c11657214372a9f2eb53107282af5eb43ac67
```

## Decision contract

`CONFIRMED` requires:

- the exact five ordered outcomes;
- exact operation identities and deadlines;
- exact entry sentinel;
- a complete collection object satisfying the fixed capability/schema/type
  contract without a raw-state digest;
- exact canonical full state and digest;
- exact runtime, fixture, stylesheet, and causal-source identities;
- zero HTTP(S) requests;
- a top-level five-element process-result array;
- five ordered passing process rows with exit `0`, empty validation errors,
  and exact transport fields;
- empty stderr;
- complete journals;
- clean context/profile/task-owned process/fixed-port cleanup;
- unchanged Git and product boundaries; and
- an independently recomputed evidence seal.

A valid completed operation mismatch is `FALSIFIED`.

Any identity, launch, transport, filesystem, network, deadline enforcement,
missing result, cleanup, terminal-write, terminal-readback, or seal failure is
`INCONCLUSIVE`.

Every v9 decision is terminal. `CONFIRMED` does not authorize an in-v9 helper
edit. It authorizes only a separate fresh design for the smallest
evidence-based helper correction.

## Failure and cleanup policy

V9 fails closed:

- setup/source preflight failure stops before control-root creation;
- offline contract failure stops before reconstruction;
- reconstruction rejection preserves the partial root and stops;
- browser-free transport preflight rejection stops before the diagnostic
  matrix;
- diagnostic `FALSIFIED` or `INCONCLUSIVE` seals and stops;
- diagnostic `CONFIRMED` seals and stops successfully; and
- any product, predecessor, runtime, Git, network, release, or cleanup drift
  stops.

Cleanup may act only on an identity proven to belong to v9. Before terminating
a process or deleting a profile, cleanup must revalidate the exact process
identity or exact normalized profile path. It must never terminate unrelated
global activity or delete an unrelated browser profile.

Incomplete task-owned cleanup produces `INCONCLUSIVE`. Global activity remains
sealed in audit evidence regardless of the decision.

Every invocation reserves time for an exclusive terminal record and immediate
byte/hash readback. If terminal evidence cannot be written and verified, no
completion claim is allowed. The existing root and evidence remain untouched,
and no automatic retry follows.

## Test-first contract

Before any one-shot v9 root is created, offline tests must prove:

### Semantic comparison

- shuffled manifest-map keys pass;
- nested shuffled object keys pass;
- missing keys fail;
- extra keys fail;
- changed file counts fail;
- changed digests fail;
- scalar type changes fail;
- array reordering fails; and
- exact evidence bytes remain unchanged by semantic comparison.

### Ownership and audit separation

- unrelated added Node, Git, PowerShell, Chrome, and Edge identities are
  recorded in `globalActivity` and do not enter `ownedResidue`;
- unrelated removed identities remain audit-only;
- same-PID identical-creation identities are compared normally;
- same-PID different-creation identities are treated as PID reuse;
- registered operator, reconstruction, controller, and cell identities are
  owned;
- recursive descendants of owned identities are owned;
- exact v9 command/path/run-token matches are owned;
- exact v9 browser-profile matches are owned;
- task-owned browser renderers are owned through ancestry;
- a pre-existing fixed-port listener rejects preflight;
- a terminal fixed-port listener rejects cleanup;
- an owned surviving process rejects cleanup; and
- an unrelated global process is never selected for termination.

### Reconstruction and terminalization

- freshness, reparse, path-escape, nested-Git, source-drift, runtime-drift,
  Git-drift, release-root, and forbidden-path failures reject;
- zero child starts rejects;
- more than one reconstruction child start rejects;
- timeout, nonzero exit, signal, non-empty stderr, malformed stdout, and stdout
  mismatch reject;
- independent readback mismatch rejects;
- terminalization-reserve exhaustion rejects;
- terminal write or readback failure rejects; and
- a fully exact reconstruction accepts despite unrelated simulated global
  churn.

### Diagnostic contract

- the five fixed cases, order, JavaScript conditions, operations, deadlines,
  and outcomes are exact;
- every operation mutation is detected;
- the inherited entry sentinel is exact;
- the collection schema/type contract is exact;
- the synchronous-full algorithm and canonical digest are exact;
- network, profile, process, result-array, stream, journal, and seal contracts
  are exact; and
- `CONFIRMED`, `FALSIFIED`, and `INCONCLUSIVE` classifications are mutually
  exclusive and exhaustive.

The complete offline contract suite runs twice. Both runs must pass and emit
byte-identical normalized result records before the browser-free preflight is
authorized.

## Verification and review gates

A separate read-only verifier must recompute facts from disk rather than trust
the producer's booleans. It must verify:

1. committed design and implementation-plan identities;
2. Git, runtime, predecessor, and product boundaries;
3. v8 terminal failure and no-retry state;
4. v9 reconstruction content and semantic manifests;
5. both offline test-run identities and equality;
6. browser-free preflight evidence;
7. the five diagnostic cell records, process array, journals, streams, and
   cleanup;
8. global audit completeness and owned-residue classification;
9. decision classification and evidence seal; and
10. release-root absence.

Review gates occur after controller implementation and its two offline runs,
after reconstruction, after browser-free preflight, and after terminal
diagnostic evidence. A failed review stops the next stage. Review records are
append-only and may not repair producer evidence.

## Success criteria

V9 succeeds only when:

1. v5, v6, v7, and v8 remain byte-identical and terminal;
2. v8 remains classified as failed with no retry;
3. all product and immutable-tree snapshots remain exact;
4. one fresh v9 result root is reconstructed once;
5. semantic manifest equality accepts order-only differences and rejects
   content differences;
6. unrelated global process/browser churn is audited but does not gate;
7. every v9-owned process, profile, listener, path, and cleanup fact gates
   correctly;
8. offline contracts pass twice with byte-identical normalized output;
9. one browser-free preflight accepts;
10. one five-cell diagnostic stage produces exact sealed `CONFIRMED`;
11. evidence proves which operation blocks and which synchronous primitive
    preserves the canonical state;
12. runtime, network, Git, product, and cleanup boundaries pass;
13. the v9 release root remains absent; and
14. no product, visible surface, publication, deployment, or live-site
    mutation occurs.

If any criterion fails, v9 does not succeed. Its terminal evidence remains the
result; there is no v9 retry or repair stage.
