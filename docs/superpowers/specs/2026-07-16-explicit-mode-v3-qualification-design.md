# Explicit-Mode Picture Poster Qualification v3 Design

**Status:** Approved for specification on 2026-07-16.

## Context

The deterministic v2 browser harness passed its complete static preflight but
ended in terminal `REJECT` before browser launch. The exact approved Task 4
command invoked `run-browser-gates.ps1` without a mode, while the runner
required one of `preflight`, `execute`, or `finalize-review`.

The single authorized v2 invocation therefore exited `1` with:

```text
Mode is required when run-browser-gates.ps1 is executed
```

Execution mode was never entered. No browser, localhost server, profile,
candidate rendering, compatibility matrix, visual comparison, Lighthouse run,
project mutation, push, deployment, or production action occurred.

V2 is terminal and immutable. It must not be repaired, retried, reclassified,
or used as passing v3 evidence.

## Goal

Qualify and release the existing responsive-picture poster candidate through a
fresh v3 evidence root whose preflight proves that every runner invocation
supplies the correct named mode before the one-shot browser sequence can be
consumed.

## Non-Goals

- Do not change the candidate HTML, CSS, JavaScript, images, MP4s, fonts, copy,
  SEO/GEO content, structured data, brand values, video behavior, animation
  timing, transitions, keyframes, easing, or runtime branches.
- Do not re-encode, crop, regenerate, or substitute the selected AVIF or
  fallback WebP.
- Do not weaken overlay identity, SSIM, PSNR, runtime, compatibility,
  Lighthouse, preview, delivery, or production gates.
- Do not modify or add a default execution mode to the runner.
- Do not add a second wrapper interface around the runner.
- Do not treat v2 RED/GREEN files as v3 passing evidence.
- Do not reuse v2 screenshots, terminal artifacts, cleanup claims, visual
  reviews, Lighthouse reports, verdicts, or evidence locks.
- Do not push, merge, deploy, or change production unless v3 reaches isolated
  `PROMOTE` and every downstream gate passes.

## Approved Approach

Use direct named-mode runner invocations plus a dedicated launch-contract test.

The three approved runner commands are:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode preflight
```

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode execute
```

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode finalize-review
```

No v3 instruction, helper, plan step, or controller handoff may invoke the
runner without the named `-Mode` argument.

### Alternatives considered

1. **Direct named modes plus contract tests — selected.**
   This is the smallest correction, preserves the runner's fail-closed
   interface, and makes the documentation-to-runner contract testable.
2. **Add a one-shot wrapper script — rejected.**
   This would centralize the execute call but introduce another executable
   interface and another place for argument or exit-code drift.
3. **Default a missing mode to `execute` — rejected.**
   This would make accidental no-argument invocation consume the one-shot run.
   The runner must continue to reject missing modes.

## Authority and Isolation

- Authoritative deploy source:
  `C:\Users\tarik\Claude Projects\efficient-technologies\site`
- Publish checkout:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`
- Branch:
  `agent/performance-without-motion-loss`
- Deploy base and unchanged remote PR head:
  `b416b8113315c95c32d4674aa54769d90c562abd`
- Terminal v2 predecessor:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-v2`
- Fresh v3 root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-v3`
- V3 release-control root, allowed only after isolated `PROMOTE`:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-release-v3`

The existing standalone publish clone remains the approved Git workspace. A
new linked worktree would contradict the pinned checkout and PR branch.

V3 must not exist before execution. V2 remains read-only throughout v3.

## Locked Product Inputs

The v3 experiment reproduces these candidate inputs byte-for-byte:

- Baseline: 47 files, digest
  `cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850`
- Candidate: 48 files, digest
  `bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653`
- Candidate scope: exactly one added path, eleven modified paths, zero removed
  paths
- Selected AVIF: 38,457 bytes, SHA-256
  `9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49`
- Fallback WebP: 120,376 bytes, SHA-256
  `098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb`
- Selection condition:
  `(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)`

## Locked V2 Recovery Source

V3 may copy source code and mechanical harness inputs from v2 only after
authenticating the terminal predecessor.

Required predecessor locks include:

- V2 Task 4 run report: SHA-256
  `e87168f01be805c1715f4426ecb3352ee530b49962a2a7d6c7def82583b3c633`
- V2 browser root: 117 files, digest
  `c9ef6a68812017dffb42b1ec656001c43ce0e994094eae2664fe62b44f40c6c8`
- `run-browser-gates.ps1`: 32,069 bytes, SHA-256
  `85c442ea8fc94b08b5712dcb9dc4606fb82cbf3f7c82ccecc432bfe54d43a5bd`
- `picture-poster.playwright.js`: 46,102 bytes, SHA-256
  `a3da9b0a3b75d2b8ddab6dae2ddd4a78524c97c1ea3d5f58791046a6c22ac338`
- `finalize-browser.mjs`: 29,905 bytes, SHA-256
  `9d6e955691d955e92cbef0564d6ba53c4a5f299cdb579104283f59764dbf6c60`
- `cleanup-contract.mjs`: 3,218 bytes, SHA-256
  `23bb8bc83e8714e5d47b4872eb3e0a2948cba2a3f8b8739f6ecaed965397eccb`
- `evidence-seal.mjs`: 12,282 bytes, SHA-256
  `35df43f8aba03b049a61f2eaf3b5b450a66118c2c55bffec1562cb43f809aa0a`
- `capture-stabilizer.mjs`: 3,081 bytes, SHA-256
  `369f0040d23235c711f51cee875d7f13fac9f8b72a65f03df6e6fb746155b696`
- `prepare-browser-harness.mjs`: 22,610 bytes, SHA-256
  `00b830bc37cc5f118e71ef7456c30b6e0305e1b4ddc84072e656facdc57acbbe`
- `static-contract.test.mjs`: 21,262 bytes, SHA-256
  `2533fe35d536039c23fdf88517fe157183bf137135c03abb2a26c28c2480e93b`
- V2 frozen static RED: SHA-256
  `8eee5c57f30234ab44744ee411a504db5ba33beb92359d5b9f7a246098554123`
- V2 final static GREEN: SHA-256
  `038b1c167659e70b810880e511bca3c4529ae6152aa9753f5c7f8c513b7ffb28`

V3 copies only an explicit source allowlist. It regenerates all v3 policy,
locks, RED/GREEN reports, matrices, authentication records, browser results,
visual reviews, Lighthouse reports, verdicts, and seals.

## Fresh V3 Reconstruction

The v3 preparer must:

1. prove the v3 root is absent;
2. bind the committed v3 design and plan hashes;
3. authenticate the complete terminal v2 browser root and the Task 4 report;
4. authenticate every allowlisted source file before copying;
5. copy the exact baseline and candidate with exclusive target creation;
6. copy the allowlisted helper and browser source files with exclusive target
   creation;
7. replace only the experiment namespace from
   `poster-picture-layer-v2` to `poster-picture-layer-v3`;
8. regenerate both 49-file matrices from the immutable accepted harness source;
9. verify normalized v2-to-v3 code equality after the namespace substitution;
10. reject `.git`, symlink, junction, or reparse-point entries;
11. write fresh v3 reconstruction and workspace-boundary records; and
12. prove v2, authoritative source, publish deploy files, Git, PR, and
    production remain unchanged.

The accepted browser source remains:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-15\font-fraunces-family-subset-v11\browser-matrix
```

The existing fixed ports remain `4361`, `4362`, and `4363`. Reusing the
already-qualified port contract avoids unrelated mechanical changes. Fresh
root, profile, process ownership, and evidence paths provide experiment
isolation.

## Launch Contract

Create a fresh v3 launch-contract suite with exactly four tests:

```text
approved execute command supplies named execute mode
runner accepts all and only the three documented modes
no v3 runner invocation omits the named mode
preflight and finalize commands use their named modes
```

The suite consumes:

- the committed v3 implementation plan;
- the v3 runner source;
- the v3 controller task brief or command manifest generated from the plan.

The same suite first runs against the terminal v2 plan and runner and must
prove RED because the v2 execute command omits `-Mode execute`.

The suite then runs against v3 and must prove GREEN before any browser,
localhost server, profile, or one-shot artifact can exist.

V3 preflight must also scan every v3 plan, report template, controller handoff,
and executable source file for a no-argument `run-browser-gates.ps1`
invocation. Any match is terminal pre-consumption failure.

The runner itself remains fail-closed:

- missing mode rejects;
- unsupported mode rejects;
- `preflight` cannot launch or write terminal evidence;
- `execute` is the only mode that can consume the browser one-shot;
- `finalize-review` is the only mode that can apply the completed visual review
  and seal a successful automated run.

## Browser Harness Preservation

After normalizing the experiment namespace, the v3 harness must preserve the
final reviewed v2 behavior:

- canonical capture stabilizer and exact CSS;
- explicit picture and video-poster decode before fonts and canonicalization;
- two independent baseline contexts before one candidate context;
- exact full, scene, and overlay screenshot options;
- exact baseline canary equality for screenshots, state, bounds, requests, and
  errors;
- exact overlay equality and visual thresholds for the candidate;
- decode 2/2;
- selection 5/5;
- runtime 4/4;
- accepted matrix 13 cases and 136 checks;
- successor matrix 13 cases and 136 checks;
- recorded PID/descendant process ownership with exact-profile browser fallback;
- exhaustive error-aggregating cleanup and final recount;
- explicit `about:`, `data:`, and `blob:` non-network allowlist;
- finalizer modes and verdict semantics;
- final evidence lock as the last filesystem write; and
- read-only seal verification.

No capture-only code may enter baseline, candidate, authoritative source,
publish files, or promoted output.

## Pre-Consumption Gates

Before execute mode, v3 must pass:

- predecessor source authentication;
- v3 reconstruction and normalized-code equality;
- launch-contract RED against v2;
- launch-contract GREEN against v3;
- helper regressions 8/8;
- static browser contract 4/4;
- structural candidate contract 20/20 twice;
- performance contract 29/29;
- SEO/GEO contract 8/8;
- accepted matrix source lock: 49 files;
- accepted matrix: 13/136;
- successor matrix: 13/136;
- Node syntax checks;
- PowerShell parse checks;
- motion preservation;
- safe runner `-Mode preflight`;
- clean Git and immutable source boundaries;
- absent run-started, verdict, seal, profile, process, and occupied ports.

The preflight must snapshot every v3 browser-root file by path, bytes, SHA-256,
and mtime and prove the explicit preflight call changed nothing.

## One-Shot Browser Sequence

Execute exactly once:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode execute
```

No retry, replacement run, discarded result, repair, or best-run substitution
is allowed in v3.

Expected automated-pass exit is `3`, which means native-scale controller and
independent visual review are required. It is not an error and does not
authorize another execute call.

Any other nonzero terminal result stops all downstream v3 tasks. Browser
`REJECT` remains terminal even when the cause is harness-side.

## Visual Review and Final Seal

After automated exit `3`, both controller and independent reviewer inspect all
baseline, candidate, overlay, diff, and runtime PNGs at native scale.

Both must explicitly approve:

```json
{
  "noBlankFrame": true,
  "noSeam": true,
  "noStretch": true,
  "noTofu": true,
  "noRightEdgeChange": true,
  "noNativeVideoControls": true,
  "noControlLayoutChange": true,
  "preloaderCanonicalStateExact": true,
  "sceneVisuallyEquivalent": true
}
```

After `visual-review.json` exists, finalize exactly once:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File `
  (Join-Path $root 'browser\run-browser-gates.ps1') `
  -Mode finalize-review
```

Finalization must write the verdict before the evidence lock, close all logs,
seal once, verify the seal read-only, and write nothing under the browser root
after the lock.

Any visual rejection produces a sealed terminal `REJECT`.

## Lighthouse and Isolated Decision

Browser `GREEN` is required before Lighthouse.

Retain the v2 thresholds:

- Lighthouse version `13.4.0`;
- three paired mobile baseline/candidate runs;
- minimum performance score `0.90`;
- maximum simulated LCP `2500 ms` for every mobile run;
- maximum median simulated LCP `2500 ms`;
- maximum CLS `0.02`;
- no retries or substitutions.

The isolated experiment reaches `PROMOTE` only when browser, visual,
compatibility, cleanup, boundary, Lighthouse, and evidence-seal gates all pass.

Any isolated `REJECT` stops project mutation and leaves PR #2 draft and
production unchanged.

## Promotion and Release

Only isolated `PROMOTE` permits:

1. pinning the tracked deployment contract and proving it RED;
2. copying the exact candidate into authoritative source and publish checkout;
3. materializing the exact media manifest;
4. running local source/publish contracts and browser checks;
5. independent whole-branch review;
6. one branch push;
7. immutable preview qualification;
8. PR merge; and
9. production verification with rollback on regression.

Before any push, copy the v3 design, plan, and release briefs into the ignored
handoff directory, hash them, and remove every tracked `docs/superpowers` file
named by the release plan.

## Security and Browser Boundary

- Browser automation is limited to `127.0.0.1` experiment origins, existing
  pinned site CDN URLs, immutable Cloudflare preview, and production
  verification.
- No login, cookie reuse, saved session, proxy, stealth, anti-bot bypass,
  CAPTCHA bypass, form submission, upload, telemetry, or private URL.
- Every `Start-Process` background helper uses `-WindowStyle Hidden`.
- Process cleanup may stop only recorded owned process trees or an exact-profile
  browser fallback.
- No secrets, tokens, credentials, cookies, private data, or customer data may
  enter evidence, reports, docs, or logs.
- No new dependency is installed.

## Failure Handling

- A failure before execute mode may be fixed only while the v3 root has no
  `run-started.json` and after focused RED-to-GREEN tests.
- Once execute mode is invoked, the v3 one-shot is consumed.
- Any execute-mode failure is terminal for v3.
- Cleanup runs once, attempts every safe phase, aggregates errors, performs
  final recounts, writes one authenticated cleanup record, and fails closed.
- A terminal failure preserves exact evidence and stops Lighthouse, promotion,
  push, merge, and production tasks.
- V1, v2, and v3 evidence roots are never rewritten after their terminal
  decision.

## Acceptance Criteria

V3 is successful only when:

1. the fresh root is authenticated and independent of terminal v2 evidence;
2. the v2 command mismatch is reproduced as launch-contract RED;
3. every v3 runner invocation uses a correct named mode;
4. the launch contract is GREEN before browser consumption;
5. the unchanged candidate passes browser, visual, compatibility, cleanup, and
   evidence-seal gates;
6. Lighthouse passes every absolute and median threshold;
7. the exact candidate is promoted without UI, video, or animation change;
8. local, preview, and production contracts pass;
9. PR #2 merges only after immutable preview qualification; and
10. production remains correct or is rolled back to the pre-merge SHA.

## Expected Result

The v3 experiment changes no product surface. Its only behavioral correction is
to the qualification protocol: the preflight, one-shot execute, and visual
finalization commands are explicit, statically compatible with the runner, and
impossible to invoke successfully without the correct named mode.
