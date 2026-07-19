# Singleton-Array v7 Qualification Implementation Plan

> Execute task-by-task with fresh implementation and independent review
> boundaries. Never retry a root-creating or one-shot stage.

**Goal:** Requalify the unchanged Efficient Technologies performance candidate
in a fresh v7 root after fixing the confirmed one-element PowerShell JSON-array
serialization defect.

**Architecture:** A fail-closed preparer authenticates terminal v5 and v6
evidence, copies only fixed immutable snapshots and an explicit eight-file
active diagnostic allowlist, and writes a fresh v7 root once. Offline TDD then
updates diagnostic namespaces and replaces the writer pipeline with
`ConvertTo-Json -InputObject`. One browser-free preflight gates one RED,
conditional GREEN, inherited browser/visual/Lighthouse gates, isolated
promotion, Git publication, deployment, and live verification.

**Technology:** Node.js ESM, Windows PowerShell 5.1, Playwright, Chrome, the
existing static HTML/CSS/JS candidate, Git, GitHub, and Cloudflare Pages.

---

## Fixed inputs

Repository:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site
```

Branch and predecessor:

```text
branch: agent/performance-without-motion-loss
v6 terminal predecessor root:
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6
```

Committed design:

```text
docs/superpowers/specs/2026-07-19-singleton-array-v7-qualification-design.md
commit: 053ee7a8686c624c09817aaf44dd1f760c985496
bytes: 11468
sha256: 6201a6700c4c90916bb471f423a5df9c832692296d26ec6769cd6f0effd2aef9
```

V7 roots:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v7
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-release-v7
```

Terminal v6 preflight:

```text
decision: INCONCLUSIVE
evidence files: 7
evidence digest: 4d819e0698b658562a3668d766ba03f9247523d64ab906ed03ac9a08166d64b2
sole failure: preflight.controllerRecords
cell-process-results top-level shape: object
cell chromeLaunched: false
retry: forbidden
```

Active v6 diagnostic source allowlist:

```text
canonicalization-cell.mjs
canonicalization-fixture.mjs
diagnostic-contract.test.mjs
diagnostic-evidence-seal.mjs
finalize-canonicalization-diagnostic.mjs
run-canonicalization-diagnostic.ps1
seal-adaptation.json
source/capture-stabilizer-proposed.mjs
```

Allowlist identity:

```text
files: 8
digest: 10f314fc7cf37bc3cee0ae07241d07d21bc75746b3600836da4f1c11f70a3a38
```

Immutable snapshot identities:

```text
baseline: 47 / cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850
candidate: 48 / bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653
browser: 20 / f7eb49d601f34fb29f097a902b2f8f29a85008ea9e78416c43320443428a4082
source-v4-browser: 18 / 089513385f53893c4cdbb1bc2b8402fb3c7f972886da05af9e94fda3a37c0782
accepted-harness-source: 49 / 46be90cedf7913ec4ee4c9b26a01b14fb1a0b8b923d86db0bf5270b4c52be4d1
```

## Global stop conditions

- Never mutate or retry v5 or v6.
- Never create the same v7 qualification root twice.
- Never create the v7 release root before promotion.
- Never run RED unless v7 preflight is sealed `ACCEPT`.
- Never run GREEN unless v7 RED is sealed `CONFIRMED`.
- Never run browser or Lighthouse gates unless GREEN accepts.
- Never mutate the publish checkout before release parity.
- Never change visible UI, video, scroll, scenes, zoom, motion, or animation.
- On any terminal or provider failure, preserve exact evidence and stop that
  versioned path.

---

### Task 1: Build and review the fail-closed v7 preparer

**Files:**

- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v7-core.mjs`
- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v7-core.test.mjs`
- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v7.mjs`
- Create:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v7-contract.test.mjs`
- Create evidence under:
  `.superpowers/sdd/singleton-array-v7/`

**Step 1: Write focused RED tests**

The core suite must cover:

1. nested Git metadata rejection, including case variants and tree root;
2. reparse-point rejection in source, target, and target parent chain;
3. exact regular-file and SHA-256 authentication;
4. terminal evidence-lock verification;
5. explicit allowlist selection that rejects missing or unexpected files;
6. exclusive copy and exact copied-manifest equality;
7. existing qualification or release root rejection;
8. terminal marker written last.

The controller suite must cover:

1. exact committed design and plan authentication;
2. exact Git branch, HEAD, upstream, remote, clean state, and absent lock;
3. both terminal v5 seals;
4. terminal v6 preflight seal and exact `INCONCLUSIVE` matrix;
5. exact sole failure `preflight.controllerRecords`;
6. object-shaped v6 process record and otherwise passing cell/cleanup;
7. five immutable source manifests;
8. exact eight-file diagnostic allowlist;
9. current runtime identities;
10. `--check-only` write paths `[]`;
11. premature evidence/release paths explicitly absent;
12. `reconstruction.json` as the final exclusive success marker.

Run RED to fresh JSON outputs. RED is valid only when intended missing
implementation assertions fail; setup/import errors are invalid.

**Step 2: Implement minimal preparer**

Reuse the reviewed v6 core where behavior is identical. Do not weaken its Git,
reparse, regular-file, copy, seal, or terminal-marker guards.

The v7 preparer must copy the five immutable trees and the exact diagnostic
allowlist only. It must not copy `diagnostic/preflight`, `red`, `green`,
`.profiles`, streams, journals, cleanup, matrices, or evidence locks.

Generate:

```text
experiment-policy.json
runtime-identity.json
v5-terminal-lock.json
v6-terminal-lock.json
workspace-integrity-before.json
reconstruction.json
```

`reconstruction.json` is the last success marker.

**Step 3: Run GREEN twice and check-only**

Expected:

- core suite all pass twice with identical normalized results;
- controller suite all pass twice with identical normalized results;
- direct `node --check` passes;
- direct exact `--check-only` exits `0`, decision `ACCEPT`, write paths `[]`;
- both v7 roots remain absent;
- product, Git, process, profile, and port boundaries remain clean.

**Step 4: Independent review**

Review exact source allowlist, predecessor authentication, zero-write mode,
root freshness, reconstruction ordering, and all fixed identities. A clean
review is required before reconstruction.

---

### Task 2: Reconstruct the fresh v7 root once

**Files:**

- Create once:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v7\`

**Step 1: Reauthenticate immediately before launch**

Require:

- v7 qualification and release roots absent;
- both v5 seals accepted at their exact terminal identities;
- v6 preflight seal accepted at `7 / 4d819e...`;
- v6 matrix exact `INCONCLUSIVE` with one controller-record failure;
- all five immutable manifests exact;
- diagnostic allowlist `8 / 10f314...`;
- runtime identities exact;
- Git clean and index lock absent;
- zero matching process, profile, or port residue.

**Step 2: Run reconstruction exactly once**

```powershell
node 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\prepare-v7.mjs' `
  --plan 'C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site\docs\superpowers\plans\2026-07-19-singleton-array-v7-qualification.md'
```

Do not retry after any root-creating failure.

Expected stdout is one completed JSON object with mode `reconstruct`, decision
`ACCEPT`, and schema version `7`.

**Step 3: Independent readback**

Verify:

- exact top-level allowlist;
- all copied manifests;
- v5 and v6 terminal locks;
- fresh v7 runtime and policy records;
- no preflight, RED, GREEN, browser run-started, Lighthouse, or release path;
- terminal reconstruction marker and boundary digests;
- Git and residue boundaries.

---

### Task 3: Repair singleton serialization and version diagnostic under TDD

**Files:**

- Modify:
  `diagnostic/run-canonicalization-diagnostic.ps1`
- Modify:
  `diagnostic/canonicalization-cell.mjs`
- Modify:
  `diagnostic/diagnostic-contract.test.mjs`
- Modify:
  `diagnostic/diagnostic-evidence-seal.mjs`
- Modify:
  `diagnostic/finalize-canonicalization-diagnostic.mjs`
- Modify:
  `diagnostic/seal-adaptation.json`
- Create:
  `diagnostic/controller-json-serialization-contract.tests.ps1`

All paths are beneath the v7 root.

**Step 1: Write native serialization RED**

The native suite must prove these exact behaviors:

1. active writer uses `ConvertTo-Json -InputObject $Value`;
2. active writer does not pipeline `$Value` into `ConvertTo-Json`;
3. one process result serializes as a top-level array of length one;
4. four process results serialize as a top-level array of length four;
5. cleanup serializes as a top-level object;
6. every process-result write uses the shared writer;
7. active diagnostic namespaces are v7 and contain no v6 namespace;
8. stage contracts remain exactly preflight, red, and green with no repair.

Run against the unmodified copied v6 source. Expected: nonzero with only the
writer and v7 namespace cases failing.

**Step 2: Apply the exact repair**

In the shared writer, replace:

```powershell
$Value | ConvertTo-Json -Depth 30
```

with:

```powershell
ConvertTo-Json -InputObject $Value -Depth 30
```

Do not special-case preflight and do not change process-result shape anywhere
else.

Update active diagnostic namespaces from v6 to v7. Reconstruct the diagnostic
sealer from the fixed browser source and record every transformation/count.

**Step 3: Run offline GREEN twice**

Require:

- native serialization suite all pass twice identically;
- diagnostic contract exact `12/12` twice identically;
- runner guards exact `9/9`;
- Node syntax and PowerShell parse pass;
- exact sealer reconstruction;
- no active v6 namespace or repair-stage assertion;
- five immutable manifests unchanged;
- v5/v6 terminal evidence unchanged;
- preflight/RED/GREEN/release absent;
- zero processes, profiles, and ports;
- Git clean.

**Step 4: Independent code/evidence review**

The reviewer must confirm the actual writer path, not only a simulated
expression. No real stage may run before a clean review.

---

### Task 4: Execute and seal browser-free v7 preflight

**Files:**

- Create once:
  `diagnostic/preflight/*`

**Step 1: Audit**

Reauthenticate every predecessor, copied manifest, runtime, Git, process,
profile, port, and absent-stage boundary. Capture before Chrome/Edge command
lines.

**Step 2: Run once**

```powershell
powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass `
  -File diagnostic\run-canonicalization-diagnostic.ps1 `
  -Stage preflight
```

Expected:

- exit `0`;
- decision `ACCEPT`;
- `chromeLaunched: false`;
- `cell-process-results.json` is an array of length one;
- one registered normal child;
- empty stderr;
- no `.profiles`;
- no stopped/fallback/residual PIDs, profiles, ports, or errors.

Do not retry.

**Step 3: Verify seal read-only**

```powershell
node diagnostic\finalize-canonicalization-diagnostic.mjs verify `
  --root 'C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v7\diagnostic\preflight'
```

Require `ACCEPT` and exact lock parity. Compare before/after Chromium snapshots.

---

### Task 5: Run one causal RED

**Files:**

- Create once:
  `diagnostic/red/*`

Precondition: sealed v7 preflight `ACCEPT`.

Run:

```powershell
powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass `
  -File diagnostic\run-canonicalization-diagnostic.ps1 `
  -Stage red
```

Do not retry.

Require exact matrix:

```text
legacy-js-disabled: TIMEOUT
legacy-js-enabled: PASS
proposed-js-disabled: PASS
proposed-js-enabled: PASS
decision: CONFIRMED
pass: true
```

Independently verify the seal and zero residue. Any other decision stops v7.

---

### Task 6: Conditional GREEN, browser, visual, Lighthouse, and promotion

**Files:**

- Create once:
  `diagnostic/green/*`
- Create once:
  `browser/run-started.json` and browser evidence
- Create once:
  `lighthouse/*`
- Create only after every gate:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-release-v7\`

**Step 1: Adapt production helper**

Only after sealed `CONFIRMED` RED, copy/adapt the exact sealed proposed helper
into the production browser source. Record byte identity and source binding.

**Step 2: Run GREEN once**

```powershell
powershell.exe -NoProfile -NonInteractive -ExecutionPolicy Bypass `
  -File diagnostic\run-canonicalization-diagnostic.ps1 `
  -Stage green
```

Require exact sealed `GREEN` and actual proposed-module binding.

**Step 3: Run inherited offline/browser gates**

Run the accepted static, harness, policy, phase-deadline, launch-contract,
visual, interaction, video, scroll, scene, zoom, motion, and animation gates.
Run browser qualification once. No retry.

**Step 4: Run Lighthouse once**

Require:

```text
performance >= 0.90
simulated LCP <= 2500 ms
median simulated LCP <= 2500 ms
CLS <= 0.02
```

**Step 5: Promote**

Create the release root exclusively from the qualified candidate and prove
exact release/candidate parity. Independent review must be clean before Git
mutation.

---

### Task 7: Apply, publish, and verify

**Files:**

- Modify only the release-parity candidate delta in the publish checkout.

**Step 1: Reauthenticate Git and release**

Require expected branch, upstream, `tarik-ux` remote, clean status, absent
index lock, release parity, and no unrelated delta.

**Step 2: Apply qualified delta**

Apply only the candidate lock:

```text
allowed added:
assets/city-poster-mobile-v20260716.avif

allowed modified:
404.html
_headers
about/index.html
blog/booking-automation-after-hours/index.html
blog/business-process-automation-small-business/index.html
blog/crm-automation-local-business/index.html
blog/index.html
blog/review-automation-local-seo/index.html
blog/software-consulting-vs-in-house/index.html
css/styles.css
index.html
```

No UI/video/motion behavior may differ from the qualified release.

**Step 3: Run final local gates**

Require SEO/GEO static checks, performance checks, release parity, Git diff
scope, `git diff --check`, and final no-placeholder audit.

**Step 4: Commit and push**

Commit the qualified release on
`agent/performance-without-motion-loss`, push to
`https://github.com/tarik-ux/efficient-technologies-site.git`, and verify the
remote branch commit.

**Step 5: Deploy and verify live**

Verify Cloudflare Pages observes the pushed commit, then verify the production
URL for:

- exact canonical/robots/sitemap/schema facts;
- crawlable SEO/GEO pages;
- asset and cache headers;
- visible UI/video/scroll/scene/zoom/motion/animation parity;
- live performance and error-free console/network behavior.

Report local, GitHub, deployment, and live-production status separately.

---

## Final report

The terminal report must include:

- v5, v6, and v7 evidence identities and decisions;
- singleton regression RED/GREEN evidence;
- one-shot invocation counts;
- RED/GREEN causal decisions;
- visual and Lighthouse metrics;
- release parity;
- exact Git commit and remote branch;
- deployment and live verification;
- explicit confirmation that visible UI, video, scroll, scenes, zoom, motion,
  and animation were not changed.
