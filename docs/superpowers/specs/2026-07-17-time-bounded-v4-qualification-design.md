# Time-Bounded Picture Poster Qualification v4 Design

## Status

Approved direction: the user's repeated `do it` selects the recommended fresh
v4 qualification. This document defines the exact design that must be reviewed
before the implementation plan is written.

The v3 run is terminal and immutable. V4 is a new experiment, not a repair,
retry, continuation, or reclassification of v3.

## Goal

Qualify and, only after every gate passes, publish the already-built responsive
picture-poster performance candidate without changing the visible UI, video,
scroll choreography, scene changes, zoom behavior, or animations.

V4 fixes two harness defects demonstrated by v3:

1. the browser child had no parent-enforced execution deadline and could remain
   alive after all useful evidence stopped advancing; and
2. cleanup represented an absent temporary-profile root as `[null]`, producing
   a false remaining-profile count of `1`.

No product bytes may be changed to solve either defect.

## Evidence and Root Cause

V3 achieved launch authentication `4/4`, preflight `COMPLETED/PENDING`, AVIF
decode `2/2`, and responsive selection `5/5`. The final emitted browser result
was `decode-selection.json` at `2026-07-16T22:01:07.0207646Z`.

The child then opened profile `09-chrome`, requested the baseline page, poster,
fonts, logo, and favicon, but produced zero screenshots and no later result.
The runner was still blocked at an unbounded `Wait-Process` after the controller
tool timed out. This proves the control-plane defect: no parent deadline could
return the run to its reviewed failure and cleanup path. The exact internal
Playwright call that stalled is not proven, so v4 must record phase boundaries
instead of pretending the stall location is known.

Cleanup later removed the exact profile root, found zero owned processes and
zero occupied ports, and recorded no cleanup errors. Its false failure came
from this PowerShell behavior: assigning the no-output result of `else { @() }`
to a hashtable property produces `$null`; wrapping that property with `@(...)`
then serializes one null entry. V4 must initialize the property as an actual
empty `System.Object[]` and only replace it when paths exist.

The terminal v3 report is locked at:

- 20,532 bytes
- SHA-256
  `1adef1eee2b7c8c022332bdc55b899b2b389b59a547f635dc856621d5485165a`

The approved v3 design and plan remain locked at:

- design: 16,590 bytes, SHA-256
  `d2cfdfe906507059d2a578cbbdd056b2f2ddbc935d25038a5b3cb13f1d1b7407`
- plan: 63,936 bytes, SHA-256
  `0286e302e01b9b5aa3a6f6079c0371250d3bd0180518f09ac41c1ccb0d37e690`

## Approaches Considered

### 1. Parent deadlines plus phase evidence — selected

The runner owns every child process, applies an exact wall-clock deadline,
records a deterministic timeout, stops only the timed-out owned child, and
then uses the existing exhaustive cleanup path for descendants, ports, and
profiles. The Playwright program writes synchronous phase-start and phase-end
records so a timeout identifies the last completed boundary.

This is the smallest design that both prevents another indefinite controller
stall and improves the evidence available after a failure.

### 2. Playwright operation timeouts only — rejected

Page navigation and response waits already had timeouts. They did not bound
`context.close()`, browser shutdown, or the Node process itself. Adding more
page-level timeouts without a parent deadline would leave the demonstrated
failure mode open.

### 3. Separate watchdog service — rejected

A second service could terminate the browser runner, but it would introduce a
new executable, ownership protocol, log stream, cleanup responsibility, and
failure mode. The existing PowerShell parent already owns the process tree and
is the correct enforcement boundary.

## Authority and Isolation

- Authoritative deploy source:
  `C:\Users\tarik\Claude Projects\efficient-technologies\site`
- Publish checkout:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`
- Branch: `agent/performance-without-motion-loss`
- V4 design base HEAD:
  `df529e6a83005305f5f766e81a17eacfbbaf8966`
- Unchanged remote PR head and deploy base:
  `b416b8113315c95c32d4674aa54769d90c562abd`
- Terminal v3 root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-v3`
- Fresh v4 root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-17\poster-picture-layer-v4`
- V4 release-control root, allowed only after isolated `PROMOTE`:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-17\poster-picture-layer-release-v4`

The standalone publish checkout remains the approved Git workspace. It is
already the feature-branch checkout connected to PR #2, so creating another
worktree would split the pinned release state without improving isolation.

V4 must not exist before reconstruction. V1, v2, and v3 remain read-only.
The v4 preparer records a complete v3 tree snapshot before copying any source;
every later boundary check must prove that snapshot remains byte-identical.

## Locked Product Inputs

V4 reproduces the already-approved product candidate byte-for-byte:

- Baseline: 47 files, digest
  `cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850`
- Candidate: 48 files, digest
  `bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653`
- Candidate scope: exactly 1 added path, 11 modified paths, and 0 removed
  paths
- Selected AVIF: 38,457 bytes, SHA-256
  `9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49`
- Fallback WebP: 120,376 bytes, SHA-256
  `098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb`
- Selection condition:
  `(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)`
- Rendered-scene SSIM threshold: `>= 0.98`
- Rendered-scene PSNR threshold: `>= 35 dB`

The candidate HTML, CSS, AVIF, WebP, JavaScript, video, SVG, font, and text
bytes are inputs, not implementation surfaces. The v4 harness may not alter
them. In particular, `ambient.js`, `main.js`, the world video attributes and
MP4 bytes, body-class transitions, scroll triggers, scene transforms, zoom
values, chapter behavior, and animation timing remain unchanged.

## Locked V3 Harness Source

V4 may copy only an explicit source allowlist from v3 after authenticating the
terminal report, v3 design, v3 plan, and every source file. It must never copy
v3 result JSON, screenshots, logs, profiles, verdicts, or seals as v4 evidence.

The v3 source locks used for reconstruction are:

| Source file | Bytes | SHA-256 |
|---|---:|---|
| `capture-stabilizer.mjs` | 3,081 | `369f0040d23235c711f51cee875d7f13fac9f8b72a65f03df6e6fb746155b696` |
| `cleanup-contract.mjs` | 3,218 | `23bb8bc83e8714e5d47b4872eb3e0a2948cba2a3f8b8739f6ecaed965397eccb` |
| `evidence-seal.mjs` | 12,282 | `10d1eeffdb0a97d710a65b7ff43327bcbfc95cd1c0138043aba0dbb665acf3cd` |
| `harness-regression.test.mjs` | 24,202 | `1eafd13b4bf9fa59c83542c74e3f98f9c7052b80efbcbe14db7f62e8ae98b132` |
| `static-contract.test.mjs` | 21,262 | `093df4e6d477064d482439e737ad24a6185997d4f3e2d3bdd85e2d4e65523d0e` |
| `prepare-browser-harness.mjs` | 22,610 | `a8ee4d3d8d1c421cdef544fdda1331f8a4c51e559e03aa1e458da278438c35b0` |
| `picture-poster.playwright.js` | 46,102 | `f5225dc31a1c8fe83d6922fee4f1a87ae6a4f0d91771b4757f16db5e709c5edf` |
| `run-browser-gates.ps1` | 32,069 | `8d8cbfa7dd20f13aea16fd04ed43c04e6aae331e4bbf9470e58e89e113f452f0` |
| `finalize-browser.mjs` | 29,905 | `f357803ccb903d873d5ee417ab5e0aacc1d2467b1156efd6333890366e5777ce` |
| `launch-contract.test.mjs` | 16,144 | `d759d29e27ded880468b1a8856fd945e97b944f6d35c475ab461f42a1a65db29` |
| `launch-contract-correction-regression.test.mjs` | 6,972 | `e40d45e860d7067d43fff4c840851160eff14233d8a8556a5d69020dd793f8e5` |
| `policy-lock-correction-regression.test.mjs` | 6,267 | `e5fb9edb84509c5652442bd896b8394ccc51e4be7de2a3e8bad4061a96ea0a02` |

The preparer performs no transformation to copied browser source. It writes one
byte-exact authenticated copy to `source-v3-browser` and a second byte-exact
working copy to `browser`, allowing the focused tests to observe valid RED
before implementation.

After RED is recorded, the v4 adapter may perform only these source
transformations:

1. replace the exact experiment namespace
   `poster-picture-layer-v3` with `poster-picture-layer-v4`;
2. replace v3 schema/version labels with v4 labels where a fresh result must
   identify the new experiment;
3. update the policy, design, plan, and source hashes to their approved v4
   values; and
4. apply the two tested harness corrections defined below.

All other normalized source must remain equal to its v3 source.

## Harness Architecture

### Reconstruction controller

`prepare-v4.mjs` creates the fresh root exclusively. It authenticates all
locked inputs, rejects any existing v4 target, rejects symlinks, junctions,
reparse points, and `.git`, copies only allowlisted source and mechanical
matrix inputs, regenerates v4 policy and evidence paths, and writes before/after
boundary snapshots.

### Owned-process deadline helper

The PowerShell runner gains one internal helper for hidden owned processes. It
accepts the executable, argument list, stdout/stderr paths, label, and an exact
deadline in milliseconds. It must:

1. launch with `-WindowStyle Hidden`;
2. register the returned PID before waiting;
3. wait using the .NET process API with the supplied finite deadline;
4. on timeout, write the label, PID, deadline, and last browser phase to the
   primary failure;
5. stop only that exact registered PID at the immediate boundary;
6. leave descendant, port, and profile cleanup to the existing owned-process
   cleanup sequence;
7. preserve a nonzero child exit code and stderr exactly; and
8. return stdout and exit code only when the child exits within its deadline.

Production deadlines are fixed:

- `picture-poster.playwright.js`: `300000` ms
- accepted compatibility matrix: `180000` ms
- candidate-successor compatibility matrix: `180000` ms

Test fixtures may supply shorter deadlines but production calls may not.
There is no retry, deadline extension, replacement run, or best-run selection.

### Browser phase journal

The Playwright program writes `browser-phase-journal.jsonl` synchronously. Each
record contains schema version, UTC timestamp, PID, monotonically increasing
sequence, phase, state (`START`, `END`, or `TIMEOUT`), and stable case or
capture ID when applicable.

Required boundaries include:

- module and profile initialization;
- each stable-browser decode case;
- baseline video contract;
- each responsive-selection case;
- each capture context launch;
- poster response and decode;
- font readiness;
- capture canonicalization;
- each full, scene, and overlay screenshot;
- context close and profile removal;
- each runtime case; and
- browser-program completion.

The journal records control flow only. It must not inject DOM, CSS, network,
timing, or animation changes. Synchronous writes occur between browser actions,
not inside the page.

### Browser phase deadlines

The Playwright program also wraps every high-risk phase on the unbounded v3
capture path. Production limits are fixed:

- persistent-context launch and new-page creation: `45000` ms;
- poster/image decode and `document.fonts.ready`: `15000` ms;
- capture canonicalization: `15000` ms;
- each screenshot: `30000` ms; and
- persistent-context close: `15000` ms.

Existing `page.goto`, response, selector, and runtime waits retain their
shorter explicit limits. A phase timeout writes a `TIMEOUT` journal record and
throws a deterministic error naming the phase and limit. Because rejecting a
JavaScript promise cannot guarantee termination of the underlying browser
transport, these phase limits complement rather than replace the runner's
`300000` ms parent deadline.

### Cleanup correction

`remainingProfiles` starts as an explicit empty `System.Object[]`. The recount
phase leaves that object unchanged when the exact profile root does not exist.
If the root exists, it replaces the property with an explicit array of the
root and contained paths.

The cleanup record must serialize an absent root as:

```json
{
  "remainingTemporaryProfiles": [],
  "remainingTemporaryProfileCount": 0
}
```

It must still fail closed for a real remaining path, process, occupied port,
cleanup exception, unsafe reparse point, or failed record write.

## Test-First Contract

No correction may be written before a focused behavioral RED is captured.

### Deadline RED/GREEN

A synthetic child fixture that never exits must first demonstrate that the
copied v3 wait path lacks a finite deadline. The v4 GREEN test then requires:

- timeout occurs within the fixture budget plus a small scheduling tolerance;
- the recorded timeout names the exact label, PID, and deadline;
- the exact child is absent afterward;
- an unrelated control process remains alive;
- cleanup is invoked exactly once;
- final process, port, and profile recounts are zero; and
- no second child invocation occurs.

A successful short-lived fixture must also prove normal stdout, stderr, and
exit-code propagation.

A never-resolving JavaScript operation must separately prove each phase helper
times out with the exact phase and test-supplied limit. GREEN integration tests
must prove all five production call sites use their fixed limits and that the
parent deadline remains present as the final enforcement boundary.

### Cleanup RED/GREEN

An absent-profile fixture must reproduce v3's `[null]` and count `1` before the
fix. GREEN requires `[]`, count `0`, and cleanup `pass: true` when every other
cleanup dimension passes. A real remaining-profile fixture must produce a
nonempty string array, the exact count, and `pass: false`.

### Static and integration gates

Before any browser, localhost server, or one-shot marker exists, v4 must prove:

- all focused deadline and cleanup tests pass;
- launch contract `4/4` for the committed plan and extracted Task 3 brief;
- the three named modes remain exactly `preflight`, `execute`, and
  `finalize-review`, with no default;
- every production browser child uses the exact finite deadline;
- no relevant unbounded `Wait-Process` remains;
- the v3 launch-parser and policy-lock corrections remain covered;
- helper suite `8/8` passes;
- structural contract `20/20` passes twice with identical normalized output;
- both 13-case/136-check matrices are reconstructed exactly;
- source and publish performance contracts pass `29/29`;
- source and publish SEO/GEO contracts pass `8/8`;
- product inputs and all predecessor roots remain exact; and
- Git, remote tracking, PR #2, preview, and production remain unchanged.

## One-Shot Execution and Failure Semantics

The v4 runner retains the required named modes:

```text
preflight
execute
finalize-review
```

Preflight may be repeated while it remains read-only and execute has never
started. `execute` may be invoked exactly once. `run-started.json` consumes the
run before any server or browser child launches.

If a browser child exceeds its deadline, the runner must terminate that exact
child automatically, complete the normal error-aggregating cleanup, write the
boundary-after evidence, close the finalizer log, and seal a terminal `REJECT`.
The controller must not manually kill a process, rerun cleanup, retry execute,
or reinterpret the timeout as a candidate failure.

Any post-consumption failure is terminal for v4. Later qualification,
promotion, commit, push, PR mutation, preview, merge, and deployment are
prohibited. A new attempt would require a separately approved v5 root.

## Browser and Visual Qualification

If the bounded browser program completes, v4 retains the prior complete gates:

- stable Chrome and Edge AVIF decode `2/2`;
- responsive selection `5/5`;
- two exact deterministic baseline captures before one candidate capture;
- native video controls suppressed for capture only;
- exact full, scene, and overlay screenshots;
- identical overlay-only SHA-256;
- matching nav, preloader, hero, text, button, and scene bounds;
- rendered scene SSIM `>= 0.98`;
- rendered scene PSNR `>= 35 dB`;
- runtime branches `4/4`;
- accepted matrix 13 cases and 136 checks;
- candidate-successor matrix 13 cases and 136 checks;
- cleanup `PASS` with zero processes, ports, profiles, and errors;
- protected boundary `PASS`; and
- a generated visual-review request.

The controller must inspect the full, scene, overlay, diff, and runtime images.
An independent visual reviewer must separately assess surface equivalence and
motion-preservation evidence. Both reviews must be `PASS` before
`finalize-review` may seal `GREEN`.

## Lighthouse, Promotion, and Release

Browser `GREEN` is required before Lighthouse. The isolated candidate then
runs the existing no-retry local h2+Brotli mobile and desktop matrix.

Mobile requires median score `>= 90`, median LCP `<= 2500 ms`, CLS `<= 0.02`,
exact AVIF selection, zero WebP request, and transfer reduction consistent with
the locked 38,457-byte AVIF replacing the 120,376-byte WebP.

Desktop requires median score `>= 90`, median LCP `<= 2500 ms`, CLS `<= 0.02`,
one WebP request, zero AVIF request, and no more than 2,048 bytes transfer
increase. Every run requires cleanup pass and zero failed requests.

Only a consistent isolated `PROMOTE` may copy candidate bytes into the
authoritative source and publish checkout. Promotion must then prove exact
source/publish parity, performance `29/29`, SEO/GEO `8/8`, candidate scope,
motion and video byte locks, and a clean intentional Git diff.

After an approved implementation review, the existing `tarik-ux` branch may be
committed and pushed, PR #2 updated, and the official Cloudflare preview tested.
The preview must pass route/header/font checks, browser behavior, visual
equivalence, cleanup, and the no-retry Lighthouse thresholds before squash
merge. Production must then pass public route, SEO/GEO, browser, motion, video,
request-selection, and Lighthouse readback. Any failed external gate stops the
release and preserves the exact error; it does not trigger a hidden retry.

## Security Boundary

- No secrets, credentials, cookies, saved sessions, or private data are written
  to evidence.
- No dependency install or update is allowed.
- Browser automation is limited to the fixed loopback experiment origins, the
  site's three existing pinned CDN resources, the immutable Cloudflare preview,
  and the production verification target.
- No login, proxy, stealth, anti-bot bypass, form submission, upload, telemetry,
  or unrelated account action is allowed.
- Every launched helper is hidden and must be registered before waiting.
- Process termination is limited to registered owned PIDs and exact-profile
  Chrome/Edge fallback processes.
- Commit, push, PR update, merge, and deployment occur only after all local and
  preview gates pass under the user's existing publication authorization.

## Success Criteria

The work is complete only when all of the following are true:

1. v4 is fresh and v1/v2/v3 remain byte-identical;
2. deadline and cleanup regressions show valid RED then GREEN;
3. every preflight, browser, visual, compatibility, Lighthouse, integrity,
   performance, and SEO/GEO gate passes without retry;
4. candidate, UI, video, scroll, scene, zoom, and animation behavior remain
   unchanged;
5. the exact candidate is promoted, reviewed, committed, pushed, previewed,
   merged, and verified in production; and
6. the final report distinguishes local success, preview success, merge state,
   and production state with exact evidence.

If any terminal gate fails, success is not claimed and publication stops at the
last proven safe boundary.
