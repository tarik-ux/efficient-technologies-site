# Canonicalization Liveness v5 Qualification Design

## Status

The design direction is approved. Written-spec review is pending.

This document defines a fresh v5 experiment. It does not authorize an edit to
the deployable site, a browser diagnostic, a qualification run, Lighthouse,
promotion, GitHub mutation, merge, or deployment by itself.

V4 is terminal and immutable. Its one-shot `execute` returned exit `2`, sealed
`REJECT`, and may never be retried, repaired, continued, resealed, or
reclassified.

## Goal

Prove or falsify the suspected cause of v4's canonicalization timeout in a
small real-Chrome experiment, make the smallest justified harness-only change
if the hypothesis is confirmed, and then qualify and publish the already-built
responsive picture-poster candidate without changing its visible or behavioral
surface.

The unchanged surface includes:

- page layout, copy, colors, typography, and assets;
- the world video, its source bytes, attributes, and takeover behavior;
- scroll choreography, scene changes, zoom-in and zoom-out behavior;
- loader, navigation, chapter, cursor, and overlay behavior; and
- every transition, trigger, duration, easing, and animation.

The canonicalization production deadline remains exactly `15000` ms.

## Non-goals

V5 will not:

- alter HTML, CSS, JavaScript, images, fonts, SVG, video, headers, or copy to
  make the harness pass;
- keep a poster layer permanently visible behind the video;
- reduce, replace, simplify, or disable the video, scenes, zooms, or motion;
- increase the canonicalization deadline or introduce a fixed sleep;
- enable page JavaScript during the no-script visual capture;
- run any v4 wrapper, runner mode, finalizer, cleanup, or seal command;
- install or update Playwright, Chrome, Edge, Node, Python, FFmpeg, Lighthouse,
  or any dependency; or
- start Lighthouse, promotion, push, preview, merge, or production work before
  all preceding gates are independently approved.

## Terminal v4 Evidence

V4's exact primary failure is:

```text
System.Management.Automation.RuntimeException: Picture poster browser program failed with exit code 1: PhaseTimeoutError: Browser phase 'capture-canonicalization' timed out after 15000 ms
    at Timeout.<anonymous> (file:///C:/Users/tarik/Claude%20Projects/efficient-technologies/output/performance/2026-07-17/poster-picture-layer-v4/browser/phase-deadline.mjs:24:16)
    at listOnTimeout (node:internal/timers:605:17)
    at process.processTimers (node:internal/timers:541:7)
```

The phase journal contains 113 contiguous records. Its sole timeout is sequence
`109`, phase `capture-canonicalization`, state `TIMEOUT`, capture `baseline-a`.
Cleanup ended at sequence `113` with zero owned processes, zero occupied ports,
and zero remaining profiles. Protected product boundaries and Git were
unchanged.

The terminal evidence seal contains 161 files and has digest:

```text
d4478009ca43cc5657c7fa51bc7382ffad98a9871cddc80bc05a3b677dd10beb
```

The lock file is 31,008 bytes with SHA-256:

```text
82769e4c701eaea3988fab733f52b546e82b8c7de8be432f6ed042dfad20155a
```

The v4 terminal report and independent review are locked as follows:

| File | Bytes | SHA-256 |
|---|---:|---|
| `.superpowers/sdd/time-bounded-v4/task-3-report.md` | 13,892 | `b2e588efeda3bd710e1b399ad6757b65cca34819fd15bfce717e6928525e74ad` |
| `.superpowers/sdd/time-bounded-v4/task-3-review.md` | 1,476 | `50e2742832d64a2adca2a84af38163d2bbc59e5c5d0b1e4cebaa06a78b25da27` |
| `.superpowers/sdd/time-bounded-v4/progress.md` | 3,038 | `dcaee4352f570e2477411a3da26a62052450341c74a5c9e5b70ed3b3895b1e4a` |

The approved v4 design is 19,851 bytes with SHA-256
`5a5c36c38bfab97f8459e5499d4bd55633fb461e5914be8f4efeba129ab381de`.
The committed v4 plan is 61,484 bytes with SHA-256
`b983f99012acbcdaa3e2647a015455180d3eb4bb2c29ab2247b8fdb2178f810a`.

V5 must authenticate these locks read-only before creating any v5 file.

## Evidence-backed Hypothesis

The following facts are proven:

1. `captureSurface` launches its persistent Chrome context with
   `javaScriptEnabled: false`.
2. Poster decode and `document.fonts.ready` completed before the timeout.
3. `canonicalizeCaptureState` then:
   - injects the canonical capture stylesheet;
   - performs synchronous DOM and video mutations;
   - awaits two nested `requestAnimationFrame` callbacks; and
   - reads computed styles and element bounds.
4. The timeout occurred inside the bounded call to that helper.
5. The unit fixture replaces `requestAnimationFrame` with `queueMicrotask`, so
   it cannot test native Chromium frame-callback liveness.
6. Playwright documents `javaScriptEnabled: false` as disabling JavaScript in
   the browser context, and Chromium exposes script disabling through
   `Emulation.setScriptExecutionDisabled`.

Primary references:

- [Playwright BrowserType launch and context options](https://playwright.dev/docs/api/class-browsertype)
- [Chrome DevTools Protocol Emulation domain](https://chromedevtools.github.io/devtools-protocol/tot/Emulation/)

The working hypothesis is therefore:

> In the real script-disabled capture context, Playwright-injected synchronous
> evaluation begins, but the nested page `requestAnimationFrame` callbacks do
> not complete. The fake unit scheduler hides that liveness defect.

This is not yet a proven root cause. Documentation establishes the script
disable semantics, not the callback result in this exact environment. V5 may
change the production helper only after the approved real-browser diagnostic
produces the exact causal matrix below.

## Approaches Considered

### 1. Synchronous style/layout barrier after causal proof - selected

Keep page JavaScript disabled, preserve the canonical stylesheet and DOM
mutations, remove the double-frame dependency, and synchronously read computed
styles and bounds. Those reads force style/layout resolution and also produce
the existing canonical-state result.

This is the smallest change that removes the suspected non-resolving scheduler
dependency without letting site scripts run.

### 2. Temporarily enable JavaScript - rejected

Re-enabling JavaScript could start loader, video, scroll, cursor, and animation
code. That would change the state being measured and invalidate the no-script
capture boundary.

### 3. Increase the timeout or add a fixed sleep - rejected

A longer deadline does not make a callback runnable. A sleep adds latency and
nondeterminism while preserving the same unproven dependency.

## Authority, Paths, and Current Git Lock

- Authoritative deploy source:
  `C:\Users\tarik\Claude Projects\efficient-technologies\site`
- Publish checkout:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`
- Remote:
  `https://github.com/tarik-ux/efficient-technologies-site.git`
- Branch:
  `agent/performance-without-motion-loss`
- V5 design base HEAD:
  `ab48f5e516770ece074b7b35e6cd04111afa1162`
- V5 design base tree:
  `094d5f7c53ee8003de048f22d463d8f9f95b1485`
- Upstream:
  `b416b8113315c95c32d4674aa54769d90c562abd`
- Terminal v4 root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-17\poster-picture-layer-v4`
- Fresh v5 root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-18\poster-picture-layer-v5`
- V5 release-control root, allowed only after isolated `PROMOTE`:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-18\poster-picture-layer-release-v5`

Both v5 roots were absent when this design was written. Reconstruction must
reject either target if it exists. It must also reject symlinks, junctions,
reparse points, nested `.git` directories, or any resolved path outside the
approved roots.

The publish checkout remains the approved Git workspace. Another worktree
would split the already-pinned feature branch and is not required.

The terminal v4 boundary readback supplies these additional locks:

| Boundary | File count | Digest |
|---|---:|---|
| Authoritative source | 206 | `9455e021a337fb1b858e35362e594d1358b85e94417f4a008ed7058bae815bad` |
| Publish boundary | 219 | `d1c072747e4ecdb872746581cd0f489f5a3c0991cc2b8b3a0f2ab633313fa662` |
| Accepted harness source | 49 | `46be90cedf7913ec4ee4c9b26a01b14fb1a0b8b923d86db0bf5270b4c52be4d1` |
| Rejected v1 root | 257 | `f282b267ddfe8a7f1a72e69435b3350ef745ed3fb03093812c85ae0230b3b830` |
| V2 root | 217 | `4f80f4373e9670c3bee497d84ede74740a1e2e6a7afed597bce6e6f45e7b0b9c` |
| Terminal v3 root | 255 | `4d8760f9e1750e837b6a3d0f3a39cd18b390c9395e584c8238cadaa1f9d1401b` |

The full post-execute v4 root has no previously committed whole-tree digest.
V5 must not invent one. Its preparer records a fresh authenticated v4 snapshot
before reconstruction and compares every later v4 readback to that snapshot.

## Locked Product Inputs

V5 reconstructs the same product candidate byte-for-byte:

| Input | File count | Digest |
|---|---:|---|
| Baseline | 47 | `cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850` |
| Candidate | 48 | `bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653` |

Candidate scope remains exactly:

- one added path:
  `assets/city-poster-mobile-v20260716.avif`;
- eleven modified paths:
  `404.html`, `_headers`, `about/index.html`,
  `blog/booking-automation-after-hours/index.html`,
  `blog/business-process-automation-small-business/index.html`,
  `blog/crm-automation-local-business/index.html`, `blog/index.html`,
  `blog/review-automation-local-seo/index.html`,
  `blog/software-consulting-vs-in-house/index.html`, `css/styles.css`, and
  `index.html`; and
- zero removed paths.

The selected AVIF remains 38,457 bytes with SHA-256
`9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49`.
The fallback WebP remains 120,376 bytes with SHA-256
`098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb`.

The media condition remains:

```text
(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)
```

`ambient.js`, `main.js`, the world video attributes and MP4 bytes, body-class
transitions, scroll triggers, scene transforms, zoom values, chapter behavior,
and animation timing are locked inputs and may not change.

## Fresh v5 Reconstruction

`prepare-v5.mjs` is the only component allowed to create the v5 root. Before
copying, it must:

1. authenticate the terminal report, independent review, design, plan,
   evidence lock, and all 161 sealed v4 browser entries;
2. record a complete v4 tree snapshot containing relative path, byte length,
   SHA-256, modification ticks, and reparse status;
3. authenticate the baseline, candidate, accepted harness source, authoritative
   source, publish boundary, predecessor roots, Git branch, HEAD, tree,
   upstream, remote, clean tracked status, and absent index lock; and
4. prove both v5 target roots are absent.

It copies only:

- the locked baseline and candidate trees;
- the accepted 49-file browser-matrix source whose digest is
  `46be90cedf7913ec4ee4c9b26a01b14fb1a0b8b923d86db0bf5270b4c52be4d1`;
  and
- this v4 harness-source allowlist into both immutable
  `source-v4-browser` and mutable `browser` copies:

```text
capture-stabilizer.mjs
cleanup-contract.mjs
evidence-seal.mjs
finalize-browser.mjs
harness-regression.test.mjs
launch-contract.test.mjs
launch-contract-correction-regression.test.mjs
phase-deadline.mjs
phase-deadline.test.mjs
picture-poster.playwright.js
policy-lock-correction-regression.test.mjs
prepare-browser-harness.mjs
process-fixture.mjs
run-browser-gates.ps1
runner-guards.psm1
runner-guards.tests.ps1
static-contract.test.mjs
v4-hardening-static.test.mjs
```

Each allowlisted source must match its entry in the authenticated v4 evidence
lock. No v4 result JSON, log, screenshot, profile, PID file, verdict, failure,
cleanup record, phase journal, or seal may be copied as v5 evidence.

Mechanical v5 adaptation is restricted to:

- experiment namespaces and schema versions from v4 to v5;
- root paths and policy/design/plan/source hashes;
- loopback ports `4371/4372/4373` to `4381/4382/4383`; and
- the single production canonicalizer change authorized later in this design.

All other normalized source must remain equal to the authenticated v4 source.

## Runtime Identity Lock

V4 recorded Node `v24.11.1` and the Playwright module path:

```text
C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules\playwright
```

V4 did not record a Chrome executable hash. Cross-run byte identity with v4
therefore cannot be claimed.

V5 reconstruction must record the Node executable, Playwright module tree,
Chrome executable, and Edge executable paths, versions, byte lengths, and
SHA-256 values. The same recorded Node, Playwright, and Chrome identities are
required for every RED and GREEN diagnostic cell and every local v5 Chrome
child, including qualification and Lighthouse. The same recorded Edge identity
is required for the Edge decode gate. Any drift blocks the next action.

## Diagnostic Architecture

The diagnostic is synthetic and local. It uses `about:blank` plus a fixed
inline DOM fixture containing exactly the preloader, mark, chevron, cursor,
label, count, and video elements required by `canonicalizeCaptureState`. It
does not start a site server, navigate to product pages, or permit an HTTP(S)
request.

The controller launches each cell as a separate hidden, registered Node child.
Each cell receives:

- stable Chrome through the locked Playwright module;
- a fresh persistent profile below its own diagnostic evidence directory;
- viewport `412x823`, device scale factor `1`, dark color scheme, no
  permissions, blocked service workers, and no downloads;
- one explicit `javaScriptEnabled` value; and
- one authenticated stabilizer module.

The legacy module is the immutable v4
`source-v4-browser/capture-stabilizer.mjs`, 3,081 bytes with SHA-256
`369f0040d23235c711f51cee875d7f13fac9f8b72a65f03df6e6fb746155b696`.
The proposed module is a diagnostic-only complete replacement module. Its
bytes are sealed before the production helper changes.

### Fixed diagnostic deadlines

- persistent-context launch: `45000` ms;
- new page: `45000` ms;
- fixture installation: `15000` ms;
- stabilizer operation: `5000` ms;
- context close: `15000` ms;
- each parent-owned cell child: `120000` ms; and
- the full four-cell controller: `300000` ms.

An expected stabilizer timeout is caught only when its error type, operation
name, and `5000` ms limit are exact. It is then recorded as the cell's expected
outcome and cleanup continues. Launch, fixture, transport, close, parent, or
cleanup timeouts are infrastructure failures, not confirming evidence.

### Required RED matrix

The first authoritative real-browser diagnostic runs before the working
production helper changes:

| JavaScript | Stabilizer | Required outcome |
|---|---|---|
| disabled | authenticated legacy double `requestAnimationFrame` | exact `5000` ms stabilizer timeout |
| enabled | authenticated legacy double `requestAnimationFrame` | pass |
| disabled | proposed synchronous style/layout barrier | pass |
| enabled | proposed synchronous style/layout barrier | pass |

The order is exactly the table order. There is no retry, order shuffle,
replacement cell, discarded trial, deadline change, or best-result selection.

Each passing cell must return the same canonical-state schema:

```text
labelText
countText
preloaderDisplay
preloaderTransform
preloaderTransition
markOpacity
markTransform
chevronDashOffset
cursorOpacity
activePreloaderAnimationCount
videoControls[].controlsProperty
videoControls[].controlsAttribute
bounds.preloader.{left,top,right,bottom,width,height}
bounds.mark.{left,top,right,bottom,width,height}
bounds.label.{left,top,right,bottom,width,height}
bounds.count.{left,top,right,bottom,width,height}
```

The three passing cells must have identical normalized state and state digest.
The diagnostic records per-phase timing for evidence, but timing below the
fixed deadline is not used to select a result.

### Diagnostic decision

`CONFIRMED` requires the exact four outcomes, exact passing-state equality,
locked runtime identity, zero HTTP(S) requests, and cleanup with zero processes,
ports, profiles, and errors.

An unexpected completed matrix outcome is `FALSIFIED`. A launch, identity,
transport, filesystem, deadline-enforcement, or cleanup failure is
`INCONCLUSIVE`. Both decisions stop v5 before any production helper change.

The RED evidence directory is sealed and becomes read-only before adaptation.
Its evidence lock must remain its final write.

## Authorized Production Change

Only `CONFIRMED` diagnostic evidence unlocks the change.

There is one production behavior change:

1. keep `CANONICAL_CAPTURE_STYLE` byte-identical;
2. keep `page.addStyleTag` and its ordering unchanged;
3. keep the count mutation, video `controls` property removal, controls
   attribute removal, and guarded pause unchanged;
4. remove the nested `requestAnimationFrame` promise;
5. make the inner page evaluation synchronous, with no timer, frame callback,
   sleep, or promise-based scheduler;
6. query the same elements;
7. synchronously read the same computed-style values and bounding rectangles,
   thereby forcing style/layout resolution; and
8. return the exact existing schema and normalized values.

The diagnostic proposed module and the adapted production
`browser/capture-stabilizer.mjs` must be byte-identical. Test and v5 control
files may change to enforce the contract, but no second production behavior
change is allowed.

`picture-poster.playwright.js` must continue to use:

```text
javaScriptEnabled: false
```

for all canonical visual captures and:

```text
bounded('capture-canonicalization', label, 15_000, ...)
```

for the production canonicalization call.

## Test-first Verification

The implementation sequence is fixed:

1. reconstruct the authenticated v4 source into v5;
2. add focused expectations that the production canonicalizer is synchronous
   and scheduler-free;
3. record valid unit/static RED against the copied legacy helper;
4. run and seal the required real-browser RED matrix;
5. stop unless its decision is exactly `CONFIRMED`;
6. copy the sealed proposed module byte-for-byte over the working production
   helper;
7. update the existing canonicalizer unit fixture so it does not replace
   `requestAnimationFrame` with `queueMicrotask`; any scheduler access must
   fail the test;
8. record unit/static GREEN;
9. run and seal the real-browser GREEN matrix; and
10. run the complete inherited verification suite.

The GREEN matrix uses the immutable legacy reference and the current production
helper:

| JavaScript | Stabilizer | Required outcome |
|---|---|---|
| disabled | immutable legacy reference | exact `5000` ms stabilizer timeout |
| enabled | immutable legacy reference | pass |
| disabled | current production helper | pass |
| enabled | current production helper | pass |

The current production helper must match the sealed proposed module
byte-for-byte. Passing states and digests must remain identical. Cleanup and
runtime identity requirements are the same as RED.

Required focused results are:

- RED matrix: `4/4` expected outcomes;
- GREEN matrix: `4/4` expected outcomes;
- canonicalizer contract: `3/3`;
- inherited harness regression: `8/8`;
- inherited static contract: `4/4`;
- phase-deadline helper: `6/6`;
- native runner guards: `8/8`;
- launch contract: `4/4`; and
- v5 hardening contract: inherited `11` checks plus four liveness checks,
  `15/15`.

The four new hardening checks require:

1. no frame, timer, sleep, or promise scheduler in the production stabilizer;
2. exact canonical stylesheet, mutations, state schema, and computed
   style/bounds reads;
3. script-disabled capture plus the unchanged `15000` ms production deadline;
   and
4. sealed RED evidence preceding a byte-identical proposed-to-production
   adaptation.

The complete non-browser gates then require:

- structural contract `20/20` twice with identical normalized output;
- source and publish performance contracts `29/29`;
- source and publish SEO/GEO contracts `8/8`;
- baseline, candidate, predecessor, source, publish, motion, video, and Git
  boundaries exact; and
- no unfinished copy on any deployable page.

No failed assertion may be waived, renamed away, or converted into a warning.

## Diagnostic and Test Cleanup

Every diagnostic or native test child is registered before waiting. Process
termination is limited to the exact registered PID and exact-profile
Chrome/Edge fallbacks. Cleanup always:

1. records the primary result;
2. stops only owned survivors;
3. removes only exact diagnostic profile roots;
4. recounts owned processes, ports, and profiles;
5. records cleanup errors without replacing the primary result;
6. verifies protected product, predecessor, and Git boundaries; and
7. seals the stage only after all earlier writes close.

A cleanup failure blocks adaptation or qualification even when the expected
matrix outcomes were observed.

## Independent Pre-qualification Review

Before the v5 qualification runner can start, an independent reviewer must
approve:

- terminal v4 authentication and immutability;
- valid unit/static RED;
- the sealed `CONFIRMED` real-browser RED matrix;
- the one-file production behavior diff;
- valid unit/static and real-browser GREEN;
- all focused and inherited test counts;
- zero process, port, and profile residue;
- exact product, predecessor, Git, and runtime-identity boundaries;
- the one-shot runner policy and fixed deadlines; and
- the absence of unresolved Critical, Important, or Minor findings.

A finding that requires a product change, deadline change, diagnostic rewrite,
or new causal hypothesis blocks v5. It does not authorize a repair loop.

## One-shot Qualification

The v5 runner retains exactly three named modes and no default:

```text
preflight
execute
finalize-review
```

Read-only preflight may repeat only before execute begins, and every invocation
must be recorded. `execute` may run exactly once. `run-started.json` consumes
that authority before a server or browser child launches.

The runner preserves the v4 parent deadlines:

- picture-poster browser child: `300000` ms;
- accepted compatibility matrix: `180000` ms; and
- candidate-successor matrix: `180000` ms.

It also preserves the browser phase deadlines:

- persistent-context launch and new page: `45000` ms;
- poster decode and fonts: `15000` ms;
- capture canonicalization: `15000` ms;
- each screenshot: `30000` ms; and
- context close: `15000` ms.

There is no retry, replacement execute, repair run, deadline extension, cleanup
rerun, order shuffle, discarded trial, or best-run substitution.

## Browser and Visual Gates

The one-shot automated run must produce:

- stable Chrome and Edge AVIF decode `2/2`;
- responsive selection `5/5`;
- two exact deterministic baseline captures before one candidate capture;
- exact full, scene, and overlay screenshots;
- identical overlay-only SHA-256;
- matching nav, preloader, hero, text, button, and scene bounds;
- rendered-scene SSIM `>= 0.98`;
- rendered-scene PSNR `>= 35 dB`;
- runtime branches `4/4`;
- accepted matrix 13 cases and 136 checks;
- candidate-successor matrix 13 cases and 136 checks;
- cleanup `PASS` with zero processes, ports, profiles, and errors;
- protected boundary `PASS`;
- a complete monotonic phase journal with no timeout; and
- a generated visual-review request.

One controller review and one independent visual review must both report
`PASS`. They must inspect full, scene, overlay, diff, and runtime evidence and
confirm that UI, video, scrolling, scene changes, zooms, and animations remain
unchanged. Only then may `finalize-review` seal browser `GREEN`.

## Lighthouse and Isolated Promotion

Browser `GREEN`, both visual passes, a valid browser seal, and exact boundary
readback are required before Lighthouse.

The existing local h2+Brotli plan remains eight reports in fixed order:

- three mobile baseline/candidate pairs; then
- one desktop baseline/candidate pair.

Lighthouse remains version `13.4.0`. Every definition uses a unique port and
profile. There are no retries or discarded trials.

Every mobile candidate run requires score `>= 90`, LCP `<= 2500` ms,
CLS `<= 0.02`, one 38,457-byte AVIF request, zero WebP requests, zero failed
requests, cleanup pass, and median LCP `<= 2500` ms.

Every desktop candidate run requires score `>= 90`, LCP `<= 2500` ms,
CLS `<= 0.02`, one WebP request, zero AVIF requests, transfer increase
`<= 2048` bytes, zero failed requests, cleanup pass, and median LCP
`<= 2500` ms.

Only a consistent isolated `PROMOTE` may create the v5 release-control root and
copy the exact candidate bytes into the authoritative source and publish
checkout. Promotion must prove:

- source/publish byte parity;
- candidate scope exact;
- performance `29/29`;
- SEO/GEO `8/8`;
- no unfinished deployable copy;
- motion and video byte locks;
- a clean intentional Git diff; and
- no unrelated tracked or untracked release file.

## Publication Gates

After local promotion and implementation review pass, the authorized
`tarik-ux` workflow may:

1. commit only the reviewed deploy diff;
2. push the existing feature branch once;
3. update PR #2;
4. verify the exact-SHA Cloudflare preview;
5. run route, header, font, browser, visual, request-selection, behavior,
   cleanup, and preview Lighthouse gates;
6. squash-merge only while the preview remains fully green; and
7. verify production routes, SEO/GEO, UI, motion, video, selection, behavior,
   cleanup, and production Lighthouse.

The preview Lighthouse run remains three mobile and three desktop reports with
unique profiles and ports and no retry. Production remains three mobile
reports with no retry.

The final report must distinguish local qualification, isolated promotion,
commit, push, PR, preview, merge, Cloudflare deployment, and production
readback. A later state may not be inferred from an earlier one.

## Failure Semantics

V5 stops at the first failed boundary:

- RED matrix mismatch: seal `FALSIFIED`; do not change the helper.
- Diagnostic infrastructure or cleanup failure: seal `INCONCLUSIVE`; do not
  change the helper.
- Unit, static, GREEN matrix, inherited test, boundary, or independent review
  failure: do not start qualification.
- Qualification execute failure: seal terminal `REJECT`; do not retry,
  finalize, run Lighthouse, promote, push, or deploy.
- Visual failure: seal terminal `REJECT`; do not run Lighthouse.
- Lighthouse failure: preserve the isolated evidence and do not promote.
- Promotion or parity failure: stop before push and report the exact changed
  and unchanged boundaries.
- Push, preview, merge, deployment, or production verification failure:
  preserve the exact external state and error; do not hide it with a second
  run or claim release completion.

Any failure requiring a different diagnostic, helper behavior, product byte,
deadline, or qualification run requires a separately approved experiment.

## Required Evidence

V5 must produce versioned, deterministic records for:

- terminal v4 authentication;
- predecessor tree snapshots before and after each boundary;
- reconstruction and copied-source authentication;
- runtime executable and module identities;
- unit/static RED;
- RED diagnostic cell results, matrix verdict, cleanup, and evidence seal;
- proposed module hash;
- exact adaptation before/after hashes and normalized diff;
- unit/static GREEN;
- GREEN diagnostic cell results, matrix verdict, cleanup, and evidence seal;
- every focused and inherited test result;
- independent pre-qualification review;
- preflight invocation ledger;
- one-shot start marker;
- phase journal, browser results, cleanup, boundaries, verdict, and seal;
- both visual reviews;
- all eight local Lighthouse reports and isolated decision;
- promotion manifest and source/publish parity;
- Git commit/push/PR/preview/merge/deployment identities; and
- production verification.

Each evidence directory is write-once after its lock. A seal verification
decision of `ACCEPT` means only that evidence is intact; it never changes an
experiment decision of `FALSIFIED`, `INCONCLUSIVE`, or `REJECT`.

## Security and Network Boundary

- No secret, credential, cookie, saved session, private data, or browser profile
  is written to evidence.
- The synthetic diagnostic permits no HTTP(S) request.
- Qualification navigation is limited to loopback ports `4381`, `4382`, and
  `4383`, plus the site's three existing pinned CDN subresources.
- Preview and production automation is limited to the immutable approved
  Cloudflare targets.
- No login, proxy, stealth, anti-bot bypass, form submission, upload,
  telemetry, dependency installation, or dependency update is allowed.
- Every helper is hidden and registered before waiting.
- Process termination is limited to registered owned PIDs and exact-profile
  browser fallbacks.
- GitHub and Cloudflare mutation remains blocked until all local release gates
  pass.

## Success Criteria

V5 succeeds only when:

1. v4 remains byte-identical and its terminal `REJECT` remains immutable;
2. the real-browser RED matrix confirms the exact hypothesis without retry;
3. the only production behavior change is the synchronous canonicalizer;
4. unit/static and real-browser GREEN prove the replacement under both
   JavaScript modes;
5. all focused, structural, performance, SEO/GEO, motion, video, cleanup,
   boundary, browser, visual, and Lighthouse gates pass;
6. the exact candidate is promoted with no UI, video, scene, zoom, scroll, or
   animation regression;
7. the reviewed branch is committed, pushed, previewed, merged, deployed, and
   verified in production; and
8. the final report states every completed and blocked release state exactly.

If any required gate fails, success is not claimed and publication stops at
the last proven safe boundary.
