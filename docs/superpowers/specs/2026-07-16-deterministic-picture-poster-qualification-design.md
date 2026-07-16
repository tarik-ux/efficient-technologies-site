# Deterministic Picture Poster Qualification v2 Design

**Status:** Approved for implementation planning on 2026-07-16.

## Context

The responsive `<picture>` candidate passed its structural contract, locked-asset checks, AVIF decode in Chrome and Edge, and all five responsive selection cases. Its first browser qualification nevertheless ended in terminal `REJECT` because the baseline and candidate overlay-only screenshots were captured at different preloader animation and paint phases.

Independent review found four evidence-harness defects:

1. the capture protocol did not freeze or synchronize the preloader before exact-hash comparison;
2. the isolated baseline video screenshot contained Chromium native controls, which would have contaminated SSIM and PSNR;
3. failure-path cleanup did not preserve `browser-cleanup.json` and swallowed cleanup exceptions; and
4. `finalizer.log` changed after the evidence lock was written, making the terminal bundle digest stale.

The rejected v1 root is immutable. It remains terminal evidence and must not be edited, retried, reclassified, or used as a passing result.

## Goal

Create a fresh v2 evidence experiment that qualifies the exact existing responsive-picture candidate with deterministic visual capture, authenticated cleanup, and a final evidence seal, without changing the website surface, candidate bytes, video behavior, animations, or release thresholds.

## Non-Goals

- Do not change authoritative `site/` or publish-checkout deploy files.
- Do not change the selected AVIF, fallback WebP, HTML, CSS, JavaScript, MP4s, fonts, copy, SEO/GEO content, structured data, brand values, motion constants, or runtime behavior.
- Do not re-encode, crop, or optimize another image.
- Do not relax exact overlay hashing, SSIM, PSNR, runtime, matrix, Lighthouse, or release thresholds.
- Do not reuse v1 screenshots, matrix summaries, cleanup claims, or terminal locks as v2 passing evidence.
- Do not push, merge, publish, or change production unless the complete v2 qualification reaches `PROMOTE`.

## Authority and Isolation

- Authoritative deploy source: `C:\Users\tarik\Claude Projects\efficient-technologies\site`
- Publish checkout: `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`
- Branch: `agent/performance-without-motion-loss`
- Frozen deploy base: `b416b8113315c95c32d4674aa54769d90c562abd`
- Approved execution HEAD before v2 design work: `d0b648e537537ffb2c90098c9ecbfc48bef64e51`
- Read-only rejected evidence: `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-v1`
- Fresh v2 root: `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-16\poster-picture-layer-v2`

The v2 root must not exist before execution. Evidence remains outside deploy trees. The existing standalone feature-branch publish checkout remains the plan-selected workspace; no additional worktree is required.

## Immutable Candidate Contract

The v2 reconstruction must reproduce the v1 Task 2 baseline and candidate byte-for-byte:

- baseline: 47 files, digest `cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850`;
- candidate: 48 files, digest `bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653`;
- candidate scope: one added path, eleven modified paths, zero removed paths;
- selected AVIF: 38,457 bytes, SHA-256 `9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49`;
- fallback WebP: 120,376 bytes, SHA-256 `098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb`;
- portrait selection condition: `(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)`;
- `js/main.js`, `js/ambient.js`, all MP4s, motion rules, runtime branches, and video attributes remain byte-exact;
- the world video has no `poster` attribute in the candidate;
- no opacity transition is added.

Any mismatch stops v2 before browser execution.

## Architecture

### 1. Fresh Reconstruction and Source Locks

The v2 preparer authenticates the frozen Git base, the v1 Task 2 policy, locked asset, candidate-build record, both 20/20 structural contract results, and the complete v1 baseline/candidate trees. It then reconstructs fresh baseline and candidate directories under v2 and proves their digests equal the immutable contract above.

The preparer may adapt v1 scripts only after recording their path, bytes, SHA-256, and exact adaptation diff. It must not copy v1 terminal browser outputs into v2.

### 2. Capture-Only Stabilizer

Visual capture continues to use JavaScript-disabled pages. After poster decode and `document.fonts.ready`, Playwright injects a capture-only style into each browser context. This style is never written into baseline, candidate, source, or publish files.

The canonical capture state is:

- `#preloader` displayed at `transform:none` with transitions disabled;
- `.pre-mark` fully visible at `scale(1)` with animation disabled;
- `.pre-chev` at `stroke-dashoffset:0` with animation disabled;
- `.pre-cur` visible with animation disabled;
- `.pre-label` visible with exact text `initializing systems`;
- `#pre-count-n` set to exact text `0`;
- video `controls` property false and `controls` attribute absent;
- Chromium media-control pseudo-elements hidden for capture;
- caret hidden;
- only the targeted preloader and media-control animation surfaces are overridden.

After applying the stabilizer, the harness waits for two consecutive animation frames and records computed styles, text, bounds, animation count, and a canonical-state digest. Screenshots use Playwright's animation-disabling and caret-hiding options as defense in depth.

The stabilizer changes only evidence capture. Runtime and motion behavior are tested without it.

### 3. Baseline Determinism Canary

Before opening the candidate, the harness captures the baseline twice in separate fresh Chrome contexts with identical viewport, network policy, and capture state.

The canary must prove:

- full screenshot SHA-256 identical;
- isolated-scene screenshot SHA-256 identical;
- overlay-only screenshot SHA-256 identical;
- canonical-state digest identical;
- element bounds identical;
- request graph identical;
- zero console errors, page errors, request failures, or blocked required assets; and
- no native media controls visible in either isolated-scene capture.

Any canary failure writes terminal `REJECT` and stops before candidate comparison. Canary captures are planned fixed cases, not retries.

### 4. Candidate Visual Qualification

The candidate is captured once after the baseline canary passes. The existing strict checks remain:

- exact overlay-only SHA-256 equality with the deterministic baseline;
- equal nav, hero, preloader, title, subtitle, primary-button, and scene bounds;
- viewport-covering baseline and candidate scene elements;
- isolated-scene SSIM at least `0.98`;
- isolated-scene average PSNR at least `35 dB`;
- no blank frame, seam, stretch, tofu, right-edge change, native controls, or control-layout change;
- exact poster-request exclusivity; and
- zero console errors, page errors, request failures, or blocked required assets.

If scene metrics fail after control suppression and deterministic capture, that is a legitimate visual-equivalence failure and remains terminal.

### 5. Runtime, Motion, and Compatibility

The stabilizer is not present during runtime qualification. The v2 suite retains:

- AVIF decode 2/2 in stable Chrome and Edge;
- no-script selection 5/5;
- four runtime branches;
- unchanged successful video takeover;
- play-rejection restoration to the picture;
- unchanged scroll zooming, scene changes, chapters, preloader timing, and animation behavior;
- zero MP4 requests for reduced motion, Save Data, 2G, and low-power cases;
- accepted baseline matrix 13/13 cases and 136/136 checks; and
- candidate successor matrix 13/13 cases and 136/136 checks.

`js/main.js`, `js/ambient.js`, CSS motion constants, transition counts, and keyframes remain byte-exact between v2 baseline and candidate.

## Failure and Cleanup Semantics

The runner tracks a primary failure and cleanup failure separately.

Cleanup runs exactly once from `finally` and must:

- stop exact baseline and candidate servers;
- stop only experiment-owned Chrome, Edge, Node, Python, and helper processes;
- confirm all harness ports are closed;
- remove only the path-validated v2 temporary profile root;
- count remaining experiment-owned processes, occupied ports, and profile paths; and
- write `browser-cleanup.json` with `pass:true` or `pass:false`.

Cleanup exceptions are never swallowed. A cleanup failure is appended to the terminal failure and forces `REJECT`, even if every functional gate passed.

The runner must not emit a successful finalizer label for reject mode. Command completion and experiment decision use separate fields.

## Evidence Lifecycle and Final Seal

Evidence writes occur in this order:

1. policy, locks, tests, and preflight;
2. `run-started.json`;
3. browser results and screenshots;
4. cleanup record;
5. boundary-after record;
6. finalizer log;
7. `final-verification.json`;
8. `browser-evidence-lock.json` as the final filesystem write under the v2 evidence root.

The lock excludes only itself and includes `final-verification.json`, `browser-cleanup.json`, and the closed finalizer log. Nothing may write under the v2 evidence root after the lock.

A separate verifier runs read-only after sealing. It recomputes every locked file and the aggregate digest, prints its result to stdout, and writes no file under the evidence root. The controller records the verifier result in the ignored SDD report outside the sealed root.

Any post-seal byte, path, or file-count change makes verification fail.

## Test Strategy

Harness changes follow test-driven development.

### Static and Fixture Regressions

Tests must first fail against v1 behavior, then pass with v2:

1. two fixtures at different preloader animation phases fail exact overlay identity before stabilization and pass after canonical stabilization;
2. a baseline video fixture with visible native controls fails scene purity before suppression and passes after suppression;
3. a simulated primary failure still produces `browser-cleanup.json`;
4. a simulated cleanup failure is preserved and forces terminal `REJECT`;
5. reject-mode command success is distinct from experiment rejection;
6. a seal created before a later log append fails read-only verification;
7. a seal created after all logs and verdict files passes read-only verification; and
8. any post-seal mutation is detected.

### Browser Gates

Browser execution is fixed before launch:

- one two-context baseline determinism canary;
- one baseline/candidate qualification sequence;
- one four-case runtime sequence;
- one accepted 13-case matrix;
- one candidate 13-case matrix;
- no retries, replacement reports, discarded failures, or best-run substitution.

### Downstream Gates

Only browser `GREEN` authorizes the existing Lighthouse, promotion, preview, merge, and production sequence, adapted to the v2 evidence root. Lighthouse thresholds and retry rules remain unchanged.

## Experiment Discipline

**Hypothesis:** The exact existing candidate can be evaluated reliably when capture timing, native controls, cleanup recording, and evidence sealing are deterministic.

**Fixed cases:** The same responsive selection table, visual thresholds, runtime cases, behavior matrices, motion checks, and Lighthouse thresholds from the approved responsive-picture plan.

**Baseline:** v1 passed decode 2/2 and selection 5/5 but rejected at an unsynchronized overlay exact-hash gate; later visual metrics were not validly reached.

**Editable surface:** Browser evidence harness and evidence lifecycle only.

**Complexity cost:** One capture stabilizer, one determinism canary, explicit cleanup-result propagation, and one final seal verifier.

**Decision rule:** Keep the harness only if the baseline canary is exact, evidence sealing verifies, and the fixed candidate gates pass. Otherwise reject or revise in another fresh root.

## Promotion Boundary

Browser `GREEN` does not itself change the website. It only authorizes the original downstream tasks.

Promotion is permitted only after every v2 browser and Lighthouse gate passes. The promoted bytes must equal the v2 candidate exactly. Before any push, the active GitHub account must be `tarik-ux`, repository permission must report `push:true`, the remote base must remain the expected SHA, PR #2 must remain open, and internal `docs/superpowers` material must be removed from the release tree.

Any failure keeps PR #2 draft and production unchanged.

## Success Criteria

The v2 experiment is successful only when:

- baseline and candidate reconstruction is byte-exact;
- baseline determinism canary passes every exact check;
- decode is 2/2 and selection is 5/5;
- exact overlay identity passes;
- SSIM and PSNR meet their unchanged thresholds;
- runtime is 4/4;
- both behavior matrices are 13/13 and 136/136;
- cleanup is recorded and passes;
- the final evidence seal verifies read-only;
- Lighthouse and downstream release gates pass; and
- independent review finds no unresolved Critical or Important issue.

Until then, no candidate promotion or production claim is authorized.
