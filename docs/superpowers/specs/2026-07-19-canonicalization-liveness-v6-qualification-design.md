# Canonicalization Liveness v6 Qualification Design

## Status and authority

Approved by the user on 2026-07-19 with “alright lets go for that” after the
fresh-v6 recommendation was presented. That approval authorizes this complete
sequence without routine approval pauses:

1. reconstruct a fresh v6 experiment;
2. implement and run the offline controller-to-cell smoke gate;
3. run one authoritative v6 RED diagnostic;
4. continue through GREEN, qualification, visual review, Lighthouse, and
   isolated promotion only while every preceding gate passes; and
5. publish through the existing `tarik-ux/efficient-technologies-site`
   workflow only after all local release gates pass.

This authority does not permit a v5 retry, mutation of sealed v5 evidence, a
visible-site redesign, a deadline relaxation, a discarded trial, or a second
v6 browser run after a terminal result.

## Goal

Qualify the existing responsive poster-layer performance candidate without
changing its product bytes, while fixing the browser-free coverage gap that
allowed the v5 controller and cell to disagree about the diagnostic stage.

Success means the same candidate is proven to preserve the visible video,
scrolling, scene changes, zooms, and animations; passes the causal diagnostic,
browser, visual, cleanup, boundary, and Lighthouse gates; and is then promoted
and published through the authorized repository and Cloudflare workflow.

## Terminal predecessor

V5 is terminal, sealed, and immutable:

```text
root:
  C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-18\poster-picture-layer-v5
original RED:
  decision: INCONCLUSIVE
  files: 12
  digest: d23c0800ddeb53cdae0ea31728b9d63149b1c41d5d17e9198cb73c8e32567f3d
repaired RED:
  decision: INCONCLUSIVE
  files: 12
  digest: a734c3b86e06144cea6b4c6e509cb954108c3f38b60876237f942d05b67d9ba4
repair authority: consumed
retry authorized: no
```

The repaired v5 execution proved that the Windows raw-token transport fix
worked: Node reached the complete space-containing
`diagnostic/canonicalization-cell.mjs` path. It then failed before Chrome
launch because the cell accepted only stage basenames `red` and `green`, while
the repaired controller supplied `red-repair-1`.

The v6 hypothesis is therefore:

```text
If the proven raw-token transport is retained, the authoritative causal run
uses the ordinary red stage, and a browser-free controller-to-cell preflight
exercises the actual launch and stage-containment path first, then setup will
reach Chrome without the v5 transport/stage mismatch.
```

This is a harness/control-plane hypothesis. It is not evidence that product
bytes, video behavior, or animation behavior are defective.

## Approaches considered

### 1. Fresh v6 with ordinary RED and an actual controller-to-cell preflight — selected

Reconstruct a new experiment, preserve all product inputs, keep the raw-token
fix, run a browser-free `preflight` stage through the real diagnostic
controller and real cell, then use the exact ordinary `red` stage for the
single authoritative browser matrix.

This is selected because it preserves v5, tests the boundary the unit fixture
missed, and avoids carrying a repair alias into causal evidence.

### 2. Patch or retry v5 — rejected

This would overwrite or extend a terminal experiment after its one-shot repair
authority was consumed. Even a technically correct patch would make the
evidence lineage ambiguous and would violate the current v5 contract.

### 3. Fresh v6 with only the existing argv unit test — rejected

The nine-case runner suite already proved token preservation but did not
exercise the cell’s stage-containment contract. Reusing it alone would leave
the exact v5 blind spot intact.

## Paths and Git boundary

- Authoritative deploy source:
  `C:\Users\tarik\Claude Projects\efficient-technologies\site`
- Publish checkout:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`
- Remote:
  `https://github.com/tarik-ux/efficient-technologies-site.git`
- Branch:
  `agent/performance-without-motion-loss`
- Design base HEAD:
  `d63366485fde95acfc4c36b76c974a6212db9060`
- Upstream:
  `b416b8113315c95c32d4674aa54769d90c562abd`
- Terminal v5 root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-18\poster-picture-layer-v5`
- Fresh v6 root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6`
- V6 release-control root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-release-v6`

Both v6 roots must be absent before reconstruction. The preparer rejects
reparse points, nested `.git` directories, paths escaping the approved roots,
an unclean tracked Git state, an index lock, the wrong branch or remote, or
drift in any fixed predecessor identity.

## Locked product inputs

V6 uses the exact v5 product trees:

| Input | Files | Aggregate digest |
|---|---:|---|
| Baseline | 47 | `cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850` |
| Candidate | 48 | `bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653` |

Candidate scope remains exactly:

- added:
  `assets/city-poster-mobile-v20260716.avif`;
- modified:
  `404.html`, `_headers`, `about/index.html`,
  `blog/booking-automation-after-hours/index.html`,
  `blog/business-process-automation-small-business/index.html`,
  `blog/crm-automation-local-business/index.html`, `blog/index.html`,
  `blog/review-automation-local-seo/index.html`,
  `blog/software-consulting-vs-in-house/index.html`, `css/styles.css`, and
  `index.html`;
- removed: none.

The selected AVIF remains 38,457 bytes with SHA-256
`9447c0264ca2d7a535b5f3ab62aad819d98a7171b8d0ec4ec09f4e8b1fa21c49`.
The fallback WebP remains 120,376 bytes with SHA-256
`098d2b25cbbbce9e8b5e3bb3dbf74953c65312a82b429dea944e41ce9623d0fb`.
The media condition remains:

```text
(max-width: 640px) and (orientation: portrait) and (max-aspect-ratio: 385/768)
```

The following are immutable throughout v6: `ambient.js`, `main.js`, all MP4
bytes and video attributes, body-class transitions, scroll triggers, scene
transforms, zoom values, chapter behavior, animation timing, HTML/CSS product
copy, and every baseline or candidate byte.

## Fresh reconstruction

`prepare-v6.mjs` is the only component allowed to create the v6 root. It must
authenticate before writing:

1. the two sealed v5 diagnostic directories and their fixed decisions;
2. the v5 baseline and candidate manifests;
3. immutable `source-v4-browser`, 18 files with digest
   `089513385f53893c4cdbb1bc2b8402fb3c7f972886da05af9e94fda3a37c0782`;
4. accepted harness source, 49 files with digest
   `46be90cedf7913ec4ee4c9b26a01b14fb1a0b8b923d86db0bf5270b4c52be4d1`;
5. repaired working browser harness, 21 files with digest
   `e9bf0d7afa0612969d7a70af7a22883c827128bdb2db636e633d2c2dcfa0f772`;
6. the current publish Git branch, HEAD, upstream, remote, tracked cleanliness,
   and absent index lock; and
7. absence of both v6 target roots.

It copies only authenticated baseline, candidate, immutable source,
accepted-harness, current working browser-harness, and diagnostic source
members. It copies no v5 RED result, lock, log, journal, profile, PID, cleanup,
or verdict as v6 evidence.

The preparer writes a v6 reconstruction record, experiment policy, predecessor
lock, workspace boundary, and a fresh runtime identity. It must re-read every
copied file and fail closed on any mismatch.

## Runtime identity

The reconstruction records and authenticates:

- Node executable path, version, bytes, and SHA-256;
- Playwright module path, file count, and aggregate digest;
- Chrome executable path, version, bytes, and SHA-256; and
- Edge executable path, version, bytes, and SHA-256.

The same recorded Node, Playwright, and Chrome identities are required for
preflight, RED, GREEN, browser qualification, and Lighthouse. Edge identity is
required for the Edge decode gate. Drift blocks the next action.

## Controller-to-cell preflight

The real `run-canonicalization-diagnostic.ps1` controller gains the explicit
stage `preflight`. It launches one real
`diagnostic/canonicalization-cell.mjs` child through
`Invoke-OwnedProcessWithDeadline` using raw argument tokens.

The cell accepts `preflight` only when the exact
`--transport-preflight` switch is present. Normal browser cells continue to
accept only `red` or `green`.

Before returning the sentinel, the cell must validate:

- exact ID, strategy, JavaScript mode, stage root, output path, phase-journal
  path, and profile path;
- recorded Node, Playwright, Chrome, and selected strategy identities;
- no pre-existing result, journal, or profile; and
- that the project’s space-containing paths arrived as complete argv tokens.

The preflight then writes:

```json
{
  "schema": "efficient-technologies/poster-picture-layer-v6-controller-cell-preflight-v1",
  "stage": "preflight",
  "pass": true,
  "chromeLaunched": false
}
```

It must do so before `chromium.launchPersistentContext`. The controller
requires exit `0`, the exact sentinel, one registered child, zero residual
processes, zero profiles, zero qualification-port listeners, and an empty
stderr stream. The generic diagnostic sealer writes
`preflight/diagnostic-evidence-lock.json` as the final stage write, and an
immediate independent verification must return `ACCEPT` before RED starts.

Any preflight failure stops v6 before Chrome and does not consume RED
authority.

## Diagnostic RED and GREEN

The synthetic fixture, runtime settings, and deadlines remain those approved
for v5:

- persistent-context launch: `45000` ms;
- new page: `45000` ms;
- fixture installation: `15000` ms;
- stabilizer operation: `5000` ms;
- context close: `15000` ms;
- parent-owned cell: `120000` ms;
- four-cell controller: `300000` ms.

RED uses exactly `diagnostic/red` in this order:

| JavaScript | Stabilizer | Required outcome |
|---|---|---|
| disabled | immutable legacy helper | exact `5000` ms stabilizer timeout |
| enabled | immutable legacy helper | pass |
| disabled | proposed synchronous helper | pass |
| enabled | proposed synchronous helper | pass |

`CONFIRMED` requires all four outcomes, identical normalized state for the
three passing cells, exact runtime and strategy identities, zero HTTP(S)
requests, and cleanup with zero processes, profiles, ports, and errors.

An unexpected completed outcome is `FALSIFIED`. A launch, identity, transport,
filesystem, deadline-enforcement, or cleanup failure is `INCONCLUSIVE`.
Either decision is sealed and stops v6 without adapting the production helper.
There is no RED retry.

Only sealed, verified `CONFIRMED` RED permits the proposed helper to be copied
byte-for-byte over the working production `capture-stabilizer.mjs`. GREEN then
uses exactly `diagnostic/green`:

| JavaScript | Stabilizer | Required outcome |
|---|---|---|
| disabled | immutable legacy helper | exact `5000` ms stabilizer timeout |
| enabled | immutable legacy helper | pass |
| disabled | current production helper | pass |
| enabled | current production helper | pass |

GREEN requires the current helper to match the sealed proposed helper exactly,
the same normalized passing state, the same identity and cleanup rules, and a
sealed `GREEN` decision.

## Authorized behavior change

No product or website behavior change is authorized by v6. The only production
code change inside the isolated browser harness remains the v5-approved
canonicalizer replacement:

1. preserve the canonical stylesheet and mutation ordering;
2. remove the nested `requestAnimationFrame` promise;
3. use synchronous computed-style and bounds reads as the layout barrier;
4. preserve video controls removal and guarded pause behavior; and
5. return the exact existing normalized schema.

This helper is qualification machinery until isolated promotion. It does not
alter the site’s visible rendering or animation code.

## Offline test-first gates

The fixed sequence is:

1. write and observe a failing preparer contract before `prepare-v6.mjs`;
2. implement the minimum fresh reconstruction behavior and pass that contract;
3. reconstruct v6 once and authenticate every copied boundary;
4. write and observe failing controller/cell preflight contracts;
5. implement the preflight and pass all offline contracts;
6. run the real browser-free preflight once;
7. run and seal the one RED matrix;
8. stop unless RED is `CONFIRMED`;
9. adapt the one helper, prove unit/static GREEN, and run sealed browser GREEN;
10. run every inherited non-browser, browser, visual, and performance gate.

At minimum, offline gates must prove:

- raw argument transport preserves space-containing paths;
- preflight is available only through the exact switch and stage;
- preflight returns before Chrome launch;
- normal cells reject `preflight` and preflight cells reject `red`/`green`;
- RED and GREEN have exact distinct predecessor semantics;
- post-seal mutation fails verification;
- product and Git boundaries do not change; and
- no failed assertion is waived or converted to a warning.

## Browser, visual, performance, and promotion gates

After diagnostic GREEN and a clean pre-qualification review, v6 reuses the
approved v5 release gates without weaker thresholds:

- Chrome and Edge AVIF decode `2/2`;
- responsive selection `5/5`;
- deterministic baseline canary captures;
- exact overlay SHA-256;
- unchanged nav, preloader, hero, text, button, scene, video, scroll, zoom, and
  animation behavior;
- rendered-scene SSIM `>= 0.98`;
- rendered-scene PSNR `>= 35 dB`;
- accepted and successor behavior matrices;
- zero process, port, profile, request, and cleanup errors;
- Lighthouse `13.4.0`;
- mobile and desktop performance score `>= 90`;
- simulated LCP `<= 2500` ms;
- CLS `<= 0.02`;
- exact mobile AVIF and desktop WebP request selection; and
- no retry or discarded Lighthouse trial.

Only a consistent isolated `PROMOTE` may copy the exact candidate into the
authoritative source and publish checkout. Promotion must prove source/publish
parity, exact candidate scope, performance `29/29`, SEO/GEO `8/8`, complete
deployable copy, motion/video locks, and a clean intentional Git diff.

## Publication

After promotion and implementation review pass, the authorized workflow may:

1. commit only the reviewed deploy diff;
2. push the existing feature branch;
3. update the existing pull request;
4. verify the exact-SHA Cloudflare preview;
5. run route, header, font, browser, visual, request-selection, behavior,
   cleanup, SEO/GEO, and Lighthouse gates;
6. merge only while the preview remains fully green; and
7. verify production routes, UI, motion, video, SEO/GEO, request selection,
   cleanup, and Lighthouse.

The final report must distinguish local qualification, promotion, commit,
push, pull request, preview, merge, deployment, and production readback. A
later state cannot be inferred from an earlier one.

## Failure and cleanup semantics

Every owned child is registered before waiting. Cleanup stops only exact owned
PIDs and exact-profile browser fallbacks, removes only contained profile roots,
records primary and cleanup errors separately, and recounts processes,
profiles, and ports.

V6 stops at the first failed boundary:

- preflight failure: stop before RED;
- RED `FALSIFIED` or `INCONCLUSIVE`: seal and stop before helper adaptation;
- offline, GREEN, inherited, boundary, or review failure: stop before
  qualification;
- one-shot qualification failure: seal terminal `REJECT` and do not retry;
- visual failure: stop before Lighthouse;
- Lighthouse failure: preserve evidence and do not promote;
- promotion/parity failure: stop before push;
- GitHub, preview, merge, deployment, or production failure: preserve the
  exact external state and do not claim release completion.

## Success criteria

V6 succeeds only when:

1. v5 remains byte-identical and terminal;
2. baseline and candidate remain byte-identical;
3. browser-free preflight proves the actual controller-to-cell boundary without
   launching Chrome;
4. the one RED matrix confirms the causal hypothesis;
5. the single helper adaptation passes offline and browser GREEN;
6. all browser, visual, cleanup, boundary, SEO/GEO, and Lighthouse gates pass;
7. the visible UI, video, scrolling, scenes, zooms, and animations are
   unchanged;
8. the exact candidate is promoted and published through the authorized
   `tarik-ux` workflow; and
9. production verification passes at the deployed commit.

If any required gate fails, success is not claimed and publication stops at
the last proven safe boundary.
