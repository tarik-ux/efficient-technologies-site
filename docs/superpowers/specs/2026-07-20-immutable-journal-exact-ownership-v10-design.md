# Immutable-Journal Exact-Ownership Capture Isolation v10 Design

## Status

This approved design defines a fresh, diagnostic-only V10 experiment. It
authorizes a new implementation plan and, after that plan is committed, one
execution of the bounded V10 qualification chain.

It does not authorize a product edit, helper correction, responsive-poster
change, browser-based product qualification, Lighthouse run, release root,
Git push, publication, deployment, or live-site change.

V8 and V9 are terminal predecessor evidence:

- V8 remains failed, immutable, and without retry authority.
- V9 remains noncompliant, immutable, and stopped after Task 1.
- V9 Task 2 and every later V9 task remain unauthorized.
- V10 is not a repair, continuation, reseal, or retry of either predecessor.

## Goal

V10 has two sequential goals:

1. establish a sealed controller contract that cannot repeat V9's
   evidence-ordering, argument-overmatch, or PID-reuse defects; and
2. if every offline and independent gate accepts, run the unchanged five-cell
   operation-isolation experiment exactly once.

Reconstruction and transport acceptance are intermediate gates. Only an exact
terminal five-cell result can confirm or falsify the browser-operation
hypothesis.

## User-visible and product boundary

V10 is harness-only. It must not change:

- page layout, copy, colors, typography, or assets;
- the world video, source bytes, attributes, or takeover behavior;
- scrolling, scene changes, zoom-in or zoom-out behavior;
- loader, navigation, chapter, cursor, or overlay behavior;
- transitions, triggers, durations, easings, or animations; or
- any deployable HTML, CSS, JavaScript, image, font, SVG, video, or header.

The responsive picture-poster evidence remains byte-identical:

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

No V10 success state changes those identities.

## Terminal predecessor evidence

### V8

The sole V8 reconstruction invocation remains terminal:

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

The exact controlling V8 artifacts remain:

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

V10 may authenticate and copy the allowed immutable content from the terminal
V8 result root. It may not reinterpret the V8 parent decision or copy failed
V8 controller evidence as active V10 evidence.

### V9

V9 stopped after its independent Task 1 review returned:

```text
NONCOMPLIANT AND TASK 2 UNAUTHORIZED
```

The V9 result and release roots are absent. The V9 control root contains
exactly these eleven entries:

```text
process-ownership-v9.mjs:
5149 / 5520f54f08e09a5d27d9844f7f45435f0e7d9cd728a45d3ab3496d9198a66e8b

process-ownership-v9.test.mjs:
11132 / a22b51a7a497e6bda970bab16bafb47bb02289ce6dfde78e89f38a3e4ede43b5

progress.md:
1747 / 39bccb07aa2e4eca1432e384b57fe78018859bbb1961174eae74fb557d7f1670

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
```

V10 preflight must independently recompute those identities and reproduce the
three V9 failures from the preserved bytes. V10 may use V9 only as negative
evidence. No V9 source file is copied into an active V10 surface.

## V9 failure model

### Evidence-ordering breach

V9's `progress.md` did not preserve the previous file as a byte prefix. Its
completion block was inserted before already-existing semantic-GREEN and
ownership-RED blocks. The resulting chronology declares Task 1 complete
before recording prerequisite evidence.

Appending a correction cannot restore the historical prefix. Rewriting the
file or recreating the root would violate V9's terminal contract.

### Non-exact ownership seeds

V9 used substring matching for the run identifier and persistent-profile
path. It classified both of these near misses as owned:

```text
C:/tmp/v9-profile-unrelated
xrun-v9-exacty
```

That could select unrelated processes for termination.

### PID-reuse ancestry leak

V9 allowed any historically owned process with a matching PID and an earlier
creation time to prove parenthood. An old owned PID, a later unrelated process
reusing that PID, and a child of the replacement caused the unrelated child to
be classified as owned.

## Hypotheses

### Controller hypothesis

> An immutable, exclusively-created event journal plus exact parsed-argument
> ownership and snapshot-scoped ancestry will preserve evidence order, reject
> near-match ownership, and prevent PID reuse from crossing ownership while
> continuing to identify registered V10 processes and their observed
> descendants.

This hypothesis is proven offline and through independent review before V10
reconstruction authority exists.

### Browser-operation hypothesis

The browser hypothesis remains byte-for-byte equivalent to V9:

> Under the fixed JavaScript-disabled Chrome context, Playwright can enter a
> synchronous evaluation and return synchronous DOM/layout data, but
> `page.addStyleTag` does not complete because its internal `style.onload`
> Promise depends on a page callback that does not run. A single synchronous
> evaluation that appends the same style without awaiting `onload`, performs
> the same mutations, and reads the same state should complete.

Only the unchanged five-cell matrix may confirm or falsify it.

## Approaches considered

### Minimal corrective V10 — selected

Retain V9's reconstruction, transport, fixture, runtime, diagnostic matrix,
deadlines, and terminal decision model. Replace only:

1. mutable progress evidence with an immutable event-file journal;
2. substring ownership matching with exact parsed-argument matching; and
3. historical PID-only ancestry with snapshot-scoped identity ancestry.

This is the smallest approach that addresses every demonstrated V9 failure
while still reaching the original diagnostic goal.

### Contract-only V10 — rejected

Stopping after offline contracts would validate the controller corrections
but would not test the browser-operation hypothesis. It does not reach the
approved performance-investigation goal.

### Full harness redesign — rejected

Replacing the entire controller or introducing Windows Job Object containment
would add native interop, browser breakaway questions, and a much larger
verification surface. No evidence shows that V9's reconstruction, transport,
fixture, or five-cell design is defective.

## Authority and paths

- Publish checkout:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`
- Branch:
  `agent/performance-without-motion-loss`
- Design base HEAD:
  `32f908bf51a1cea59b7f9a0cd12c1b1281596ea1`
- Upstream:
  `b416b8113315c95c32d4674aa54769d90c562abd`
- Remote:
  `https://github.com/tarik-ux/efficient-technologies-site.git`
- Terminal V8 result root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8`
- Terminal V8 control root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\capture-operation-v8-control`
- Terminal V9 control root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v9-control`
- Absent V9 result root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v9`
- Absent V9 release root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v9`
- Fresh V10 control root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control`
- Fresh V10 result root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v10`
- Forbidden V10 release root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v10`

The committed implementation plan becomes the V10 execution HEAD. Before
creating a V10 root, preflight must authenticate:

- this committed design and the committed implementation plan;
- exact branch, execution HEAD, upstream, and remote;
- clean status, empty staged and unstaged diffs, passing `git diff --check`,
  and absent `.git/index.lock`;
- terminal V8 and V9 identities;
- runtime and causal-source identities;
- immutable product-tree identities;
- absent V10 control, result, and release roots; and
- absent fixed-port listeners and V10 profile paths.

## Architecture

V10 has four isolated zones:

1. terminal V8 and V9 predecessor evidence, which remains read-only;
2. a candidate subtree inside the fresh V10 control root, which is explicitly
   non-authoritative and editable only before Task 1 sealing;
3. sealed V10 control evidence, immutable event files, locks, operators, and
   verifier records; and
4. a fresh V10 result root created only by the one-shot reconstructor.

Data flows in one direction:

```text
authenticate committed authority and terminal predecessors
  -> create the V10 control root once
  -> develop candidate contracts under RED/GREEN
  -> independently review candidate code and negative cases
  -> seal final contract bytes and immutable journal genesis once
  -> independently review the sealed Task 1 boundary
  -> complete controller and diagnostic offline contracts
  -> run the complete normalized suite twice
  -> reconstruct the V10 result root once
  -> independently read back the result root
  -> install the reviewed diagnostic harness once
  -> run one browser-free transport preflight
  -> run one unchanged five-cell diagnostic stage
  -> independently recompute and terminalize
```

No later stage may modify, replace, delete, reinterpret, or reseal an earlier
event, lock, result, or decision.

## Write classes and freeze boundary

V10 explicitly separates candidate writes from evidence writes.

### Candidate writes

Before Task 1 sealing, files below:

```text
capture-operation-v10-control\candidate
```

may be revised during test-first development and reviewer-requested
correction. Candidate files are not evidence and never authorize a later
stage. Every RED/GREEN output uses a new attempt-specific filename so no test
record is overwritten.

An independent candidate review references exact candidate paths, bytes, and
SHA-256 identities. The approved candidate identity is the only input the
sealer may copy.

### Sealed writes

Every file below these control-root surfaces is created exclusively and never
modified:

```text
sealed
journal
locks
reviews
streams
terminal
```

Result-root evidence is also exclusively created and immutable.

There is no `progress.md`, mutable index, append operation, or in-place status
file in V10. Progress is a read-only projection of sealed journal events.

After the Task 1 contract lock exists, candidate and sealed contract bytes are
frozen. A later defect is terminal; it is not repaired inside V10.

## Immutable event journal

### File model

The control journal is a directory of immutable event files:

```text
journal\000001-task-1-boundary.json
journal\000002-task-1-contract-sealed.json
journal\000003-task-1-review-accepted.json
```

Later tasks continue the sequence. Filenames are six-digit sequence numbers,
one hyphen, an exact lowercase event ID, and `.json`.

Every event uses:

```js
{
  schema: 'efficient-technologies/capture-operation-v10-event-v1',
  sequence: 1,
  eventId: 'task-1-boundary',
  task: 1,
  phase: 'boundary',
  status: 'ACCEPT',
  observedAtUtc: '2026-07-20T12:34:56.789Z',
  writerIdentity: {
    processId: 12345,
    creationTimeUtc: '2026-07-20T12:34:00.000Z',
  },
  previous: null,
  facts: {},
}
```

The timestamps shown above are illustrative values. Actual timestamps use
exactly millisecond-precision UTC ISO 8601:
`YYYY-MM-DDTHH:mm:ss.sssZ`. `writerIdentity.processId` is a positive integer,
and its creation time is freshly read from the writer process identity.

Allowed statuses are:

```text
START
ACCEPT
REJECT
INCONCLUSIVE
CONFIRMED
FALSIFIED
```

The implementation plan freezes the complete event-ID registry and exact
plain-JSON `facts` keys for each ID. Unknown event IDs, statuses, fact keys, or
missing fact keys reject.

For sequence `2` and later, `previous` is:

```js
{
  file: '000001-task-1-boundary.json',
  bytes: 0,
  sha256: 'lowercase 64-character SHA-256',
}
```

The bytes value is a non-negative integer matching the previous file exactly.

### Writer contract

The sole journal writer must:

1. enumerate regular non-reparse event files;
2. reject unknown names, duplicate sequences, gaps, malformed JSON, schema
   drift, filename/record disagreement, and a broken predecessor chain;
3. derive the next sequence and predecessor identity from disk;
4. serialize the new plain-JSON event through the fixed semantic
   canonicalizer with UTF-8 and one trailing LF;
5. create the exact next path with exclusive-create semantics;
6. read it back immediately and verify bytes, SHA-256, schema, sequence,
   filename, event ID, and predecessor identity; and
7. return the immutable file identity without writing an index.

If exclusive creation or immediate readback fails, no success claim is
allowed. The existing root is preserved and the next stage is unauthorized.

### Read-only projector

The status projector uses the same validation rules, reads every event in
sequence, and returns:

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

It writes no file. It never trusts a producer's status summary.

### Journal versus diagnostic phase records

The V10 control journal records cross-task authority and terminal routing.
Per-cell diagnostic phase records remain the fixed operation journals inherited
from the reviewed diagnostic source. Both classes are immutable, but they use
their own schemas and are verified independently.

## Semantic comparator

The semantic comparator retains the accepted V9 algorithm but is implemented
from this V10 design rather than copied from V9.

It recursively canonicalizes keys only for plain JSON objects. It must:

- preserve scalar types and values;
- preserve array order and length;
- reject missing or extra keys;
- reject changed counts or digests;
- reject non-finite numbers, cycles, non-plain objects, and non-JSON values;
- leave supplied evidence bytes unchanged; and
- require a non-empty comparison label for throwing assertions.

Canonicalization is allowed only for declared semantic object maps. File
identity, ordered arrays, stdout, matrix rows, event chains, allowlists, and
locks remain byte- or order-exact.

## Exact Windows argument contract

### Parser

`tokenizeWindowsCommandLine(raw)` is a pure parser implementing the Windows
backslash-and-quote rules used by `CommandLineToArgvW`:

- whitespace delimits unquoted arguments;
- quotes group whitespace without remaining in the value;
- backslashes not before a quote remain literal;
- `2n` backslashes before a quote become `n` backslashes and toggle quote
  state;
- `2n + 1` backslashes before a quote become `n` backslashes plus a literal
  quote;
- empty quoted arguments are preserved;
- an unmatched quote, NUL, non-string input, or unsupported control character
  rejects parsing.

The parser returns the exact ordered argument strings and never normalizes
unrelated values.

### Exact matching

Windows filesystem arguments are normalized by:

- converting `/` to `\`;
- resolving `.` and `..` lexically without filesystem traversal;
- removing redundant separators except a UNC prefix;
- preserving a drive or UNC root;
- removing a trailing separator except at a root; and
- comparing case-insensitively.

The following ownership claims require complete argument equality:

- V10 preparer, operator, controller, verifier, and cell script paths;
- V10 control and result paths when supplied as complete arguments;
- the dedicated token
  `--capture-operation-v10-run-id=<uuid>`;
- `--user-data-dir=<normalized-profile-path>`; and
- the two-argument form `--user-data-dir <normalized-profile-path>`.

Prefix, suffix, embedded, or neighboring-token matches are not owned.
Successful parsing plus non-equality classifies a near miss as unrelated.

If parsing fails and the raw command line contains a V10-exclusive run marker,
exact V10 root, or exact V10 profile-root prefix, the row is ambiguous rather
than unrelated.

## Snapshot-scoped ownership graph

### Process identity

Exact process identity remains:

```text
processId + canonical creationTimeUtc
```

Every projected row contains:

```text
name
processId
parentProcessId
creationTimeUtc
executablePath
commandLine
```

PID alone is never an identity.

### Ordered observations

The classifier consumes ordered snapshots:

```js
{
  snapshotId: 'before',
  observedAtUtc: '2026-07-20T12:34:56.789Z',
  rows: [],
}
```

The timestamp shown is illustrative and follows the same exact
millisecond-precision UTC contract as journal events.

Each snapshot is deduplicated by exact process identity. Two different
creation times for the same PID are two identities. Conflicting rows with the
same exact identity make that snapshot ambiguous.

### Ownership seeds

An identity becomes owned only through:

1. an exact registered identity;
2. an exact parsed V10 script, run-token, or profile argument; or
3. same-snapshot ancestry from an already-owned exact parent identity.

Registered identities persist as owned across later observations.

### Ancestry

For each snapshot, the classifier repeatedly resolves children until no new
identity is added. A row inherits ownership only when:

- one exact parent row with `processId === child.parentProcessId` exists in the
  same snapshot; and
- that exact parent identity is already owned.

If the same PID has multiple different identities in one snapshot, parent
resolution is ambiguous. If the parent is absent, no new ancestry ownership
is inferred. An old owned identity from an earlier snapshot cannot prove
parenthood for a later child by PID alone.

Once a child has been proven owned in one snapshot, its exact identity remains
owned even if its parent exits.

### Three-channel result

The classifier returns:

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

- `globalActivity` records all relevant changes and never gates by itself.
- `ownedResidue` contains only final-snapshot rows with proven owned identity.
- `ambiguousResidue` contains final-snapshot rows with V10 relevance that
  cannot be safely resolved.
- `resolutionTrace` records the exact rule and evidence identity for every
  owned or ambiguous classification.

All arrays use deterministic sorting. Changed rows preserve exact before and
after projected rows and are excluded from added and removed.

## Cleanup contract

Cleanup may terminate only an exact owned identity after immediately
revalidating both `processId` and `creationTimeUtc`.

Cleanup may remove only an exact normalized V10 profile path after confirming
that it lies below the fixed V10 diagnostic root, is not a reparse point, and
matches the recorded profile identity.

Cleanup never terminates or deletes:

- unrelated global activity;
- a near-match run or profile;
- an ambiguous process;
- a PID whose creation time changed; or
- a path outside the exact V10 root.

Any surviving owned or ambiguous residue produces `INCONCLUSIVE`. Ambiguity is
never converted to ownership merely to make cleanup pass.

Fixed ports remain exclusive:

```text
4381
4382
4383
```

A listener on any fixed port rejects the relevant gate regardless of process
ownership. The controller records the listener but does not terminate it
unless its exact owning process independently satisfies the ownership
contract.

## Candidate and seal review gates

Task 1 has two independent reviews.

### Candidate review

The candidate reviewer reads:

- the approved V10 design and committed plan;
- candidate modules and tests;
- every attempt-specific RED/GREEN record;
- exact V9 negative fixtures; and
- Git, root, and product boundaries.

The reviewer runs read-only or scratch-only independent injections for:

- run-token prefix and suffix near misses;
- profile prefix and suffix near misses;
- quoted paths containing spaces and trailing backslashes;
- PID reuse with a replacement parent;
- a child observed after an old parent disappears;
- conflicting same-PID identities in one snapshot;
- journal duplicate, gap, reorder, predecessor-hash, replacement, and partial
  record cases; and
- owned, unrelated, and ambiguous cleanup routing.

Only a finding-free candidate review may authorize sealing. Candidate defects
may be corrected before sealing. Every review attempt has a new exclusive
review record; no review record is replaced.

### Seal review

The one-shot sealer:

1. authenticates the accepted candidate-review record and exact candidate
   hashes;
2. exclusively creates the final files under `sealed`;
3. creates the initial immutable journal events in chronological order;
4. exclusively creates the Task 1 lock; and
5. immediately recomputes every sealed byte and hash.

The seal reviewer independently verifies the sealed sources, event chain,
lock, root allowlist, absent result/release roots, and unchanged Git/product
boundaries. It performs the negative injections against imports without
modifying sealed bytes.

Only exact seal acceptance authorizes Task 2.

## One-shot reconstruction

V10 reconstructs from authenticated allowed content in the terminal V8 result
root. It copies only:

```text
baseline
candidate
browser
source-v4-browser
accepted-harness-source
source-v7-diagnostic
```

The exact source-v7 diagnostic reference remains:

```text
9 / 5613ad53c84c6e2541baed9a90a2b6c11bf645ed6d3ef920b423a6b1d9753ba7
```

The reconstructor creates one fresh empty regular `diagnostic` directory and
new V10-namespaced records. The top-level allowlist is:

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

`terminal-predecessors-lock.json` authenticates both terminal predecessor
states without copying their failed controller files as active V10 evidence.

The reconstruction child starts no browser, site server, or unregistered
helper. The parent writes one prelaunch event before one child start and
independently authenticates the completed root before writing a terminal
reconstruction event.

Timings remain:

```text
reconstruction child deadline: 180000 ms
complete reconstruction budget: 240000 ms
environment snapshot ceiling: 30000 ms
terminalization reserve: 5000 ms
```

A rejection preserves the partial V10 root and terminalizes V10. The root is
not deleted, recreated, or retried.

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

Every preflight, controller, cell, finalizer, and verifier reauthenticates
those exact identities. Drift is an identity failure, not a browser outcome.

## Browser-free transport preflight

After reconstruction, diagnostic installation, and two byte-identical
normalized offline-suite runs, one browser-free preflight must prove:

- exact registered-child start and identity capture;
- exact parsed run-token transport;
- compact stdout and empty-stderr transport;
- a top-level process-result array;
- deadline containment and terminalization reserve;
- complete global, owned, ambiguous, and resolution-trace channels;
- immutable event creation and readback;
- absence of browser launch, profile creation, fixed-port listeners, network
  access, and product mutation; and
- zero owned and ambiguous residue.

The preflight is one-shot. Acceptance plus independent verification authorizes
the diagnostic matrix. Rejection terminalizes V10.

## Synthetic fixture and browser boundary

The diagnostic retains the exact V9 fixture and browser boundary:

- same local inline fixture;
- same canonical stylesheet and state schema;
- `412 x 823`, device scale factor `1`, dark color scheme;
- same fixed Chrome, Node, Playwright, and causal-source identities;
- blocked service workers, no permissions, and no downloads;
- fresh V10 persistent profile per cell;
- separate hidden registered Node child per cell;
- explicit `javaScriptEnabled`;
- no site server or product navigation;
- zero HTTP(S) requests; and
- exact owned/profile cleanup with ambiguity gating.

No dependency is installed or updated.

## Fixed diagnostic deadlines

The operation deadlines remain:

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

Cells run sequentially in fixed order. No deadline is changed dynamically,
replaced with a sleep, or retried.

## Exact five-cell isolation matrix

| Cell | JavaScript | Operation | Required outcome |
|---|---|---|---|
| `add-style-disabled` | disabled | exact `page.addStyleTag` with canonical CSS | `TIMEOUT` |
| `add-style-enabled` | enabled | exact `page.addStyleTag` with canonical CSS | `PASS` |
| `evaluate-entry-disabled` | disabled | synchronous `page.evaluate` returns exact entry sentinel | `PASS` |
| `collection-disabled` | disabled | synchronous DOM/style/bounds capability probe only | `PASS` |
| `synchronous-full-disabled` | disabled | one synchronous evaluation injects style, mutates, and collects | `PASS` |

No cell is retried, replaced, reordered, discarded, or selected as a best
trial.

The inherited entry sentinel remains:

```json
{
  "entered": true,
  "entryToken": "v8-evaluate-entry"
}
```

The collection probe remains a schema, type, and capability probe. It must not
record or gate on a timing-dependent raw-state digest.

The synchronous-full result must equal the two sealed passing V7 states and
recompute to:

```text
b8634b4f899eee08ce6d1c14c57c11657214372a9f2eb53107282af5eb43ac67
```

The intentional `add-style-disabled: TIMEOUT` is valid only when the exact
operation, `5000` ms deadline, transport, close, cleanup, and evidence
contracts all pass.

## Decision contract

### CONFIRMED

`CONFIRMED` requires:

- the exact five ordered outcomes;
- exact operation identities and deadlines;
- exact entry sentinel;
- complete collection capability/schema/type facts;
- exact synchronous-full state and digest;
- exact runtime, fixture, stylesheet, and causal-source identities;
- zero HTTP(S) requests;
- five ordered registered exit-zero process rows;
- empty stderr and validation-error arrays;
- complete phase journals and immutable control-journal chain;
- empty owned and ambiguous residue;
- clean context/profile/fixed-port cleanup;
- unchanged Git and product identities;
- absent V10 release root; and
- independent evidence recomputation.

### FALSIFIED

A valid, fully completed operation outcome that differs from the fixed matrix
is `FALSIFIED`.

### INCONCLUSIVE

Any identity, ambiguity, launch, transport, filesystem, network, deadline,
missing result, cleanup, event-chain, lock, terminal-write, terminal-readback,
or independent-seal failure is `INCONCLUSIVE`.

The three decisions are mutually exclusive and exhaustive.

Every decision is terminal. `CONFIRMED` authorizes only a separate design for
the smallest evidence-based helper correction. It does not authorize an
in-V10 code edit.

## Failure and terminal policy

V10 fails closed:

- authority failure stops before V10 root creation;
- candidate failure stops before sealing or returns to an explicitly recorded
  candidate correction;
- seal or seal-review failure preserves the control root and stops before
  reconstruction;
- reconstruction rejection preserves the partial result root and stops;
- installation rejection stops before preflight;
- browser-free preflight rejection stops before the matrix;
- `FALSIFIED` or `INCONCLUSIVE` seals and stops;
- `CONFIRMED` seals and stops successfully; and
- any predecessor, runtime, product, Git, network, release, journal, ownership,
  or cleanup drift stops.

There is no automatic retry, best-run selection, root recreation, evidence
replacement, or post-seal repair.

If a terminal event itself cannot be created and read back, no completion
claim is allowed. Existing files remain untouched and the exact failure is
reported from externally observed process and filesystem facts.

## Test-first contract

Before sealing Task 1, offline tests must prove all of the following.

### Immutable event journal

- a valid genesis event accepts;
- a valid next event links exact predecessor name, bytes, and hash;
- status projection is deterministic and write-free;
- duplicate, gap, negative, non-integer, or out-of-order sequences reject;
- unknown filenames and filename/record disagreement reject;
- predecessor-name, byte-count, or hash mismatch rejects;
- malformed JSON, schema drift, missing keys, and extra keys reject;
- a partial event rejects;
- a reparse entry rejects;
- exclusive recreation of an existing event fails;
- a replaced earlier event breaks downstream verification; and
- no code path writes `progress.md` or a mutable index.

### Windows command-line parsing

- unquoted arguments parse;
- quoted spaces parse;
- empty quoted arguments persist;
- even and odd backslashes before quotes follow the fixed rules;
- trailing backslashes in quoted paths parse;
- unmatched quotes, NUL, non-string input, and unsupported controls reject;
- case-insensitive exact Windows path equality accepts;
- path prefix, suffix, and embedded near misses reject;
- exact run-token equality accepts;
- run-token prefix, suffix, and embedded near misses reject;
- exact one-token and two-token profile forms accept; and
- profile prefix, suffix, neighboring-token, and directory-sibling near misses
  reject.

### Ownership and audit separation

- unrelated added and removed Node, Git, PowerShell, Chrome, and Edge rows are
  audit-only;
- same exact identity with projected-field changes enters `changed`;
- exact registered operator, reconstruction, controller, verifier, and cell
  identities are owned;
- exact parsed V10 arguments seed ownership;
- recursive same-snapshot descendants are owned;
- an already-proven exact child remains owned after its parent exits;
- a reused PID is a new unowned identity;
- a child of an observed unrelated replacement PID remains unrelated;
- a child seen after an old parent disappears receives no PID-only ownership;
- conflicting same-PID identities in one snapshot are ambiguous;
- failed parsing with a V10-exclusive fragment is ambiguous;
- successful near-match parsing is unrelated;
- missing-parent V10-relevant rows are ambiguous;
- owned and ambiguous residue are separately sorted and sealed;
- cleanup targets only revalidated exact owned identities;
- ambiguous and unrelated rows are never selected for termination;
- any ambiguous final residue produces `INCONCLUSIVE`;
- fixed-port listeners reject the relevant gate; and
- global churn never determines qualification by itself.

### Semantic comparison

- shuffled plain-object keys pass;
- nested shuffled keys pass;
- missing and extra keys fail;
- changed counts, digests, and scalar types fail;
- array reordering fails;
- unsupported JSON values fail; and
- comparison leaves supplied evidence bytes unchanged.

### Reconstruction and terminalization

- freshness, reparse, path escape, nested Git, predecessor drift, source drift,
  runtime drift, Git drift, release-root presence, and forbidden paths reject;
- zero or multiple reconstruction-child starts reject;
- timeout, nonzero exit, signal, non-empty stderr, malformed stdout, and stdout
  mismatch reject;
- independent readback mismatch rejects;
- terminalization-reserve exhaustion rejects;
- terminal event failure rejects; and
- exact reconstruction accepts despite unrelated simulated global churn.

### Diagnostic contract

- five fixed cases, order, JavaScript conditions, operations, deadlines, and
  required outcomes remain exact;
- every operation mutation is detected;
- the inherited sentinel is exact;
- collection schema/type/capability requirements are exact;
- synchronous-full algorithm and canonical digest are exact;
- network, profile, process, argument, result-array, stream, phase-journal,
  control-journal, ambiguity, and seal contracts are exact; and
- terminal decisions are mutually exclusive and exhaustive.

The complete normalized offline suite runs twice. Both runs must pass and emit
byte-identical normalized result records before one-shot reconstruction is
authorized.

## Verification and review gates

A separate verifier recomputes disk facts and never trusts a producer's
booleans. It verifies:

1. committed design and implementation-plan identities;
2. Git, runtime, product, and terminal predecessor boundaries;
3. V9's exact terminal inventory and reproducible negative cases;
4. accepted candidate-review and sealed Task 1 identities;
5. the complete immutable event chain and every task lock;
6. both normalized offline-suite identities and equality;
7. one-shot V10 reconstruction content and semantic manifests;
8. diagnostic installation identity;
9. browser-free preflight evidence;
10. five diagnostic records, process rows, streams, phase journals, and
    cleanup;
11. global, owned, ambiguous, and resolution-trace classifications;
12. terminal decision and evidence seal; and
13. V10 release-root absence.

Review gates occur:

- before Task 1 sealing;
- after Task 1 sealing;
- after complete controller implementation and both offline runs;
- after reconstruction;
- after diagnostic installation;
- after browser-free preflight; and
- after terminal diagnostic evidence.

Every review record is exclusively created. A review may stop a later stage
but never repairs producer evidence.

## Success criteria

V10 succeeds only when:

1. V5 through V9 remain byte-identical and terminal;
2. V8 remains failed without retry and V9 remains noncompliant with Task 2
   unauthorized;
3. all product and immutable-tree snapshots remain exact;
4. the immutable control-journal chain passes every negative and positive
   contract;
5. exact parsed-argument ownership rejects every frozen near miss;
6. snapshot-scoped ancestry rejects PID-reuse leakage;
7. candidate and sealed Task 1 reviews accept without findings;
8. offline contracts pass twice with byte-identical normalized output;
9. one fresh V10 result root is reconstructed exactly once;
10. one reviewed diagnostic installation accepts;
11. one browser-free preflight accepts;
12. one five-cell stage produces exact sealed `CONFIRMED`;
13. owned and ambiguous terminal residue are empty;
14. runtime, network, Git, product, journal, and cleanup boundaries pass;
15. the V10 release root remains absent; and
16. no product, visible surface, publication, deployment, or live-site
    mutation occurs.

If any criterion fails, V10 does not succeed. Its preserved evidence is the
terminal result. There is no V10 retry or repair stage after sealing.
