# Capture Operation Isolation v8 Diagnostic Design

## Status

This design defines a fresh diagnostic-only v8 experiment. It authorizes no
product edit, helper adaptation, browser qualification, Lighthouse run,
release root, Git publication, deployment, or live-site change by itself.

V7 is terminal and immutable. Its single RED result is valid evidence and may
not be retried, repaired, resealed, reclassified, or continued.

## Goal

Identify the exact remaining browser operation that prevents deterministic
canonical capture while the browser context has page JavaScript disabled.

The experiment must distinguish:

1. Playwright `page.addStyleTag(...)`;
2. entry into a synchronous `page.evaluate(...)`;
3. synchronous in-page state-collection capability; and
4. one synchronous in-page operation that injects the unchanged canonical
   stylesheet, performs the unchanged DOM/video mutations, and collects the
   unchanged canonical state.

Only an exact, sealed causal result may inform a later helper rewrite. V8
itself does not change the production capture helper.

## User-visible boundary

V8 is harness-only. It must not change:

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

## Terminal v7 evidence

The one v7 RED invocation is sealed:

```text
decision: INCONCLUSIVE
pass: false
evidence: 20 / bcc6d42bf7818a0e4cc890aafc60cc9c0151a06d4ffa8cd99f1d4718ca8af592
lock: 3788 / 3ede556397f773f8b9898d05b9ee116f4c53e1567384aae4ce6ad78b9f9d1657
```

The exact ordered outcomes are:

```text
legacy-js-disabled: TIMEOUT
legacy-js-enabled: PASS
proposed-js-disabled: TIMEOUT
proposed-js-enabled: PASS
```

The unexpected result is only:

```json
{
  "field": "proposed-js-disabled.passingState"
}
```

with the exact expected/actual mismatch:

```text
proposed-js-disabled: expected PASS, actual TIMEOUT
```

The failure is causal rather than a control-plane defect:

- persistent-context launch completed;
- new-page completed;
- fixture installation completed;
- the five-second `capture-canonicalization` operation timed out;
- the same proposed module passed with JavaScript enabled;
- process-results is a top-level array of length four;
- controller validation, journals, stderr, runtime identity, module identity,
  network blocking, cleanup, evidence sealing, and read-only verification all
  passed; and
- zero qualification process, profile, or port residue remained.

The independently reviewed Task 5 result is:

```text
.superpowers/sdd/singleton-array-v7/task-5-review.md
13926 / 69cf7749184acfc7f794d2c39aae3c36237a944d3bcaee86c6a09fd958caca02
evidence verdict: COMPLIANT
Task 6 / GREEN: not authorized
```

## Corrected hypothesis

The earlier hypothesis assumed that removing the nested
`requestAnimationFrame` dependency would be sufficient. V7 falsified that
assumption.

The sealed proposed helper still performs, in order:

```text
await page.addStyleTag({ content: CANONICAL_CAPTURE_STYLE })
return page.evaluate(() => { ...synchronous mutations and collection... })
```

The fixed installed Playwright runtime is:

```text
Playwright: 1.62.0-alpha-1783623505000
coreBundle.js:
3407411 / be2e09efef3017b4eaa76f0cb5289f66c4ea57833f94319b17c1c2f184987ad7
```

Its `addStyleTag` implementation obtains the page main context, evaluates a
function that creates and appends a `<style>` element, and then awaits a
Promise resolved by `style.onload`. That is a distinct asynchronous page
callback dependency even though the helper no longer contains an explicit
frame callback.

The exact causal-source path is:

```text
C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules\playwright-core\lib\coreBundle.js
```

The existing v7 Playwright identity covers the sibling `playwright` wrapper
tree, not this `playwright-core` file. V8 must therefore authenticate and
record this exact path, byte count, and SHA-256 separately. Every probe cell
and terminal finalizer must reauthenticate it.

Playwright documents that `page.addStyleTag` adds the tag and returns after
the CSS content is injected, and that `page.evaluate` runs a function in the
page context. Chromium documents that
`Emulation.setScriptExecutionDisabled` switches page script execution.

Primary references:

- https://playwright.dev/docs/api/class-page#page-add-style-tag
- https://playwright.dev/docs/evaluating
- https://github.com/microsoft/playwright/blob/main/packages/playwright-core/src/server/frames.ts
- https://chromedevtools.github.io/devtools-protocol/tot/Emulation/#method-setScriptExecutionDisabled

The corrected hypothesis is:

> Under the fixed JavaScript-disabled Chrome context, Playwright can enter a
> synchronous evaluation and return synchronous DOM/layout data, but
> `page.addStyleTag` does not complete because its internal `style.onload`
> Promise depends on a page callback that does not run. A single synchronous
> evaluation that appends the same style without awaiting `onload`, performs
> the same mutations, and reads the same state should complete.

This remains unproven until v8 produces the exact matrix below.

## Approaches considered

### Directly rewrite the helper — rejected

V7 localizes the timeout only to the whole helper. Rewriting before separating
the two awaits would guess at the blocker and could alter capture semantics.

### Temporarily enable page JavaScript — rejected

That could start loader, video, scroll, cursor, and animation code. It would
change the no-script capture boundary rather than repair the harness.

### Increase a deadline or add a sleep — rejected

Neither makes a disabled page callback runnable. Both add latency and weaken
determinism.

### Operation-level probes under the same fixed runtime — selected

Run fresh, independent contexts for the individual operations. Require exact
timeouts and exact synchronous results. This is the smallest experiment that
can distinguish an asynchronous style-injection failure from evaluation or
collection failure.

## Authority and paths

- Publish checkout:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`
- Branch:
  `agent/performance-without-motion-loss`
- Design base HEAD:
  `540d16c25cfd78bc63ab6d255405501a4339cb9d`
- Upstream:
  `b416b8113315c95c32d4674aa54769d90c562abd`
- Remote:
  `https://github.com/tarik-ux/efficient-technologies-site.git`
- Terminal v7 root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v7`
- Fresh v8 root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v8`
- V8 release root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-release-v8`
  (forbidden and must remain absent).

The v8 root must be absent before its one reconstruction. V8 must reject
reparse points, nested Git directories, target escape, dirty tracked Git,
runtime drift, predecessor drift, or an existing v8 root.

## Fresh reconstruction

One preparer may create v8 once. It must authenticate:

1. this committed design and its committed implementation plan;
2. Git branch, HEAD, upstream, remote, clean status, empty diff, diff-check,
   and absent index lock;
3. terminal v5 original and repaired evidence;
4. terminal v6 preflight evidence;
5. sealed v7 preflight evidence;
6. sealed terminal v7 RED evidence and Task 5 review;
7. the fixed Node, Playwright wrapper, Chrome, and Edge runtime identities;
8. the exact `playwright-core/lib/coreBundle.js` causal-source identity
   `3407411 /
   be2e09efef3017b4eaa76f0cb5289f66c4ea57833f94319b17c1c2f184987ad7`;
9. the five immutable trees; and
10. the six fixed v7 reconstruction/predecessor records.

It copies the five immutable trees exactly:

```text
baseline
candidate
browser
source-v4-browser
accepted-harness-source
```

It also copies only the minimal v7 diagnostic source allowlist needed to
build the v8 probe. It must not copy v7 `preflight`, `red`, `green`, profiles,
streams, journals, process records, matrices, locks, cleanup, browser
run-started, Lighthouse, or release evidence as active v8 evidence.

V8 writes a terminal-v7 lock record that preserves the exact v7 preflight and
RED identities and decisions. Reconstruction writes its success marker last.
It also writes `playwright-core-identity.json` with the resolved absolute
path, byte count, SHA-256, modification ticks, regular-file/reparse status,
and its relationship to the recorded Playwright wrapper path. Any later drift
blocks execution.

## Synthetic fixture and fixed runtime

The probe uses the same local inline fixture, canonical stylesheet, canonical
state schema, viewport, dark color scheme, stable Chrome executable, Node
executable, and Playwright wrapper tree recorded by v7, plus the separately
locked `playwright-core/lib/coreBundle.js` causal source.

It starts no site server, navigates to no product URL, makes no HTTP(S)
request, and installs or updates no dependency.

Each cell uses:

- a fresh persistent profile below the v8 diagnostic stage;
- a separate hidden, registered Node child;
- explicit `javaScriptEnabled`;
- `412 x 823`, device scale factor `1`, dark color scheme;
- blocked service workers, no permissions, no downloads;
- exact owned-process and exact-profile cleanup; and
- a terminal result even when an expected operation timeout occurs.

Before launching Chrome and again before writing its result, every cell must
authenticate the exact `playwright-core` path, bytes, and SHA-256 from
`playwright-core-identity.json`. The terminal finalizer independently
reauthenticates the same file. A mismatch is an identity failure, never a
causal outcome.

## Fixed operation deadlines

- persistent context: `45000` ms;
- new page: `45000` ms;
- fixture installation: `15000` ms;
- each probe operation: `5000` ms;
- context close: `15000` ms;
- exact-profile removal: `30000` ms;
- each child: `190000` ms;
- complete five-cell stage: `1000000` ms.

Cells run sequentially in the fixed matrix order. The per-cell phase maxima
sum to `125000` ms. The inherited exact-profile removal may consume another
`30000` ms. The `190000` ms child limit therefore leaves `35000` ms for
process startup, result serialization, journaling, and other cleanup
overhead. Five child limits sum to `950000` ms; the `1000000` ms controller
limit leaves `50000` ms for controller orchestration, finalization, and
sealing. No parent deadline may be lower than the sum it contains.

An expected timeout counts only when the operation name and `5000` ms limit
are exact. Any launch, identity, fixture, transport, close, cleanup, or parent
deadline failure is `INCONCLUSIVE`.

## Exact five-cell isolation matrix

The stage order is fixed:

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
  exit `0`, deadline `190000`, exact stdout/stderr paths,
  `validationErrors: []`, and `pass: true`; and
- preserve exact result/stdout/matrix semantic equality.

This includes the intentional `add-style-disabled: TIMEOUT` result. A
completed outcome mismatch exits `2`, produces a valid result, and classifies
the stage `FALSIFIED`. A transport, identity, launch, fixture, parent-deadline,
close, result-shape, or cleanup failure exits nonzero and classifies
`INCONCLUSIVE`; it cannot satisfy an expected matrix outcome.

### Entry sentinel

`evaluate-entry-disabled` must return exactly:

```json
{
  "entered": true,
  "entryToken": "v8-evaluate-entry"
}
```

This token proves only that the synchronous evaluation entered and returned.
The disabled-JavaScript condition is proven by the authenticated cell launch
configuration/process record and the fixed disabled/enabled control matrix,
not by a page-returned boolean.

### Collection probe

`collection-disabled` must synchronously query the same fixture elements and
the same computed-style/bounds primitives without injecting style or
performing mutations. It must return the complete raw object plus a fixed
capability summary that proves:

- the exact top-level key set is present;
- label text is `initializing systems` and count text is `73`;
- every required bounds object has the exact six keys and finite numeric
  values;
- animation count is a non-negative integer;
- video-controls collection contains exactly one complete record; and
- every computed-style field has the required primitive type.

The fixture's `.pre-mark` animation is intentionally still active, so raw
animated opacity/transform values are timing-dependent. V8 must not require,
record as canonical, or select by a raw-state digest for this cell. This is a
capability/schema/type probe, not a visual-state comparison.

It must not schedule a Promise, timer, frame callback, event callback, or
sleep.

### Synchronous full probe

`synchronous-full-disabled` must, inside one synchronous page evaluation:

1. create one `<style type="text/css">`;
2. append a text node containing the byte-identical
   `CANONICAL_CAPTURE_STYLE`;
3. append it to `document.head` without an `onload`/`onerror` Promise;
4. set the count text to `0`;
5. suppress video controls and guardedly pause video;
6. synchronously query the same elements;
7. synchronously read the same computed styles, animation count, controls,
   and bounds; and
8. return the exact existing canonical-state schema.

The result must equal the two passing v7 states and recompute to:

```text
b8634b4f899eee08ce6d1c14c57c11657214372a9f2eb53107282af5eb43ac67
```

## Decision

`CONFIRMED` requires:

- the exact five ordered outcomes;
- exact operation identities and deadlines;
- exact entry sentinel;
- a complete collection object satisfying the fixed capability/schema/type
  contract without a raw-state digest;
- exact canonical full state and digest;
- exact fixed runtime and fixture/style identities;
- exact fixed `playwright-core` causal-source identity;
- zero HTTP(S) requests;
- top-level five-element process-result array;
- five ordered, passing process rows with exit `0`, empty validation errors,
  and exact transport fields;
- empty stderr;
- complete journals;
- clean context/profile/process/port cleanup; and
- an independently recomputed evidence seal.

Any completed outcome mismatch is `FALSIFIED`. Any identity, launch,
transport, filesystem, deadline enforcement, missing result, cleanup, or seal
failure is `INCONCLUSIVE`.

Every decision is terminal for v8. There is no v8 retry or repair stage.

## Test-first implementation

Before any real probe:

1. reconstruct v8 once;
2. write contract tests for the exact five cases, operation boundaries,
   deadlines, synchronous full algorithm, result schemas, top-level arrays,
   cleanup, and evidence sealing;
3. preserve a valid RED against an uninstrumented copied source;
4. implement only the v8 probe harness and version namespaces;
5. run the offline contracts twice and require byte-identical GREEN;
6. independently review the implementation and boundaries;
7. execute one browser-free transport preflight;
8. independently review the preflight; and
9. execute the five-cell isolation stage once.

The probe harness may not modify the v7 proposed helper, v7 production
helper, copied product trees, or publish checkout.

## Review and failure policy

Independent review is required after reconstruction, probe implementation,
preflight, and terminal isolation evidence.

- reconstruction failure: preserve the partial v8 root; do not recreate it;
- preflight failure: seal and stop; do not retry;
- isolation `FALSIFIED` or `INCONCLUSIVE`: seal and stop;
- isolation `CONFIRMED`: seal and stop v8 successfully;
- any product, predecessor, runtime, Git, network, or cleanup drift: stop.

Even `CONFIRMED` does not authorize an in-v8 helper edit. It authorizes only a
separate fresh qualification design for the smallest evidence-based helper
correction.

## Success criteria

V8 succeeds only when:

1. v5, v6, and v7 remain byte-identical and terminal;
2. all product and harness snapshots remain exact;
3. one fresh v8 root is reconstructed once;
4. offline contracts pass twice with identical output;
5. one browser-free preflight accepts;
6. one isolation stage produces exact sealed `CONFIRMED`;
7. evidence proves which operation blocks and which synchronous primitive
   preserves the canonical state;
8. cleanup, runtime, network, Git, and residue boundaries pass; and
9. no product, visible surface, release, publication, deployment, or live-site
   mutation occurs.
