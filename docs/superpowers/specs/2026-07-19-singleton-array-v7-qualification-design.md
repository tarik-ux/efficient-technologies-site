# Singleton-Array v7 Qualification Design

## Status and authority

This design continues the already-authorized Efficient Technologies
performance release qualification. It does not request or imply any visible
UI, video, scroll, scene, zoom, motion, or animation change.

The user has authorized routine offline checks, safe harness repairs, commit,
push, deployment, and live verification without repeated approval prompts.
That authority does not permit mutation or retry of terminal v5 or v6
evidence, bypassing a failed gate, or broadening the product change.

## Goal

Create one fresh, versioned v7 qualification root that:

1. preserves the terminal v6 preflight byte-for-byte;
2. preserves the five immutable product and harness snapshots;
3. fixes only the confirmed singleton JSON-array serialization defect;
4. proves the fix with native Windows PowerShell behavior before execution;
5. repeats the browser-free preflight once;
6. proceeds to RED, conditional GREEN, visual/browser, Lighthouse, promotion,
   Git, and deployment gates only when every predecessor accepts.

The product candidate remains the existing performance candidate. V7 is a
harness repair, not a new product experiment.

## Terminal predecessor

V6 is terminal and immutable.

The only v6 preflight invocation:

- ran from
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v6`;
- started at `2026-07-19T12:44:17.2641418Z`;
- ended at `2026-07-19T12:44:20.7885235Z`;
- ran for `3523 ms`;
- used controller PID `35248` and cell PID `44436`;
- exited `2`;
- produced decision `INCONCLUSIVE`;
- produced an accepted evidence seal with `7` files and aggregate digest
  `4d819e0698b658562a3668d766ba03f9247523d64ab906ed03ac9a08166d64b2`.

The cell itself passed:

- exact preflight sentinel;
- `chromeLaunched: false`;
- exit `0`;
- empty stderr;
- exact `START` and `END` journal;
- zero stopped PIDs;
- zero exact-profile fallbacks;
- zero residual processes, profiles, ports, or cleanup errors.

The sole matrix failure was:

```json
{
  "field": "preflight.controllerRecords"
}
```

`cell-process-results.json` was a top-level object. The finalizer requires a
top-level array and correctly returned `INCONCLUSIVE`.

## Root cause

The controller accepted `@($processResults)` as a one-element `Object[]`, but
its generic writer serialized by pipeline:

```powershell
$Value | ConvertTo-Json -Depth 30
```

Windows PowerShell enumerates pipeline input. One item therefore reaches
`ConvertTo-Json` as a scalar object; four RED or GREEN items would become an
array. This is a cardinality-dependent transport defect.

The exact correction is:

```powershell
ConvertTo-Json -InputObject $Value -Depth 30
```

`-InputObject` receives the `Object[]` as one value and preserves a
one-element JSON array. Cleanup objects remain JSON objects.

## Alternatives

### Fresh v7 with the exact serialization repair — selected

This preserves v6 evidence, makes the repair independently testable, and keeps
the product candidate unchanged.

### Patch or retry v6 — rejected

V6 is already sealed and one-shot. Patching its controller or creating a
second preflight would destroy the experiment boundary.

### Treat the passing cell as sufficient and continue v6 — rejected

The controller/finalizer boundary is part of the qualification. Ignoring its
failed canonical record would bypass the gate and make later evidence
untrustworthy.

### Replace the controller or simplify away native PowerShell — rejected

The live qualification uses the real Windows PowerShell controller. Replacing
it would test a different transport and add unnecessary change.

## Fresh v7 roots

Qualification root:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-v7
```

Release root:

```text
C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-19\poster-picture-layer-release-v7
```

Both must be absent before reconstruction. The qualification root may be
created once. The release root may be created only after all offline, causal,
visual, Lighthouse, promotion, and parity gates pass.

## Immutable copied snapshots

V7 copies and then continuously authenticates:

| Snapshot | Files | SHA-256 |
|---|---:|---|
| baseline | 47 | `cf67b483cd1c62eab3a07b8223d63e689c77636b4ec6640ce2b3cdf1ca390850` |
| candidate | 48 | `bfaf8f5f9863012f8f911054aabdfe182b20d6533d624fbfb222f2f7034f4653` |
| browser | 20 | `f7eb49d601f34fb29f097a902b2f8f29a85008ea9e78416c43320443428a4082` |
| source-v4-browser | 18 | `089513385f53893c4cdbb1bc2b8402fb3c7f972886da05af9e94fda3a37c0782` |
| accepted-harness-source | 49 | `46be90cedf7913ec4ee4c9b26a01b14fb1a0b8b923d86db0bf5270b4c52be4d1` |

No byte in these five trees may change before isolated promotion.

## Reconstruction contract

A reviewed preparer must:

1. authenticate this committed design and its committed implementation plan;
2. authenticate Git branch, HEAD, upstream, remote, clean status, and absent
   index lock;
3. authenticate both terminal v5 seals;
4. authenticate the terminal v6 preflight seal, matrix, exact sole failure,
   exact cell sentinel, cleanup, and object-shaped process record;
5. authenticate current Node, Playwright, Chrome, and Edge identities;
6. reject an existing v7 qualification or release root;
7. reject Git or reparse-point boundaries in any copied source or target
   ancestor;
8. copy the five immutable trees exclusively;
9. copy only the active v6 diagnostic source allowlist, excluding
   `diagnostic/preflight`, `diagnostic/red`, `diagnostic/green`, `.profiles`,
   locks, matrices, journals, streams, cleanup, and process records;
10. write v7 reconstruction, policy, runtime, workspace-integrity, and terminal
    v6 lock records;
11. write `reconstruction.json` exclusively as the last success marker.

Check-only mode must report zero write paths.

## V7 diagnostic adaptation

Before any real v7 stage:

- change active diagnostic evidence/schema namespaces from v6 to v7;
- retain stage names exactly `preflight`, `red`, and `green`;
- retain the fixed legacy helper SHA-256
  `369f0040d23235c711f51cee875d7f13fac9f8b72a65f03df6e6fb746155b696`;
- retain the exact preflight switch `--transport-preflight`;
- retain the exact four-field sentinel, with the namespace updated to v7;
- retain the branch before `chromium.launchPersistentContext`;
- replace only the writer pipeline with
  `ConvertTo-Json -InputObject $Value -Depth 30`;
- retain direct binding of GREEN to a sealed, verified, `CONFIRMED` v7 RED and
  the actual sealed proposed-module bytes;
- retain no repair stage.

The diagnostic evidence sealer must be reconstructed exactly from the fixed
browser source with every transformation and count recorded.

## Native singleton regression

Offline tests must fail before the writer correction and pass afterward.
They must prove:

1. the active writer uses `ConvertTo-Json -InputObject $Value`;
2. the active writer does not pipe `$Value` into `ConvertTo-Json`;
3. a one-element `Object[]` serializes as a top-level JSON array of length one;
4. a four-element `Object[]` remains a top-level array of length four;
5. a cleanup object remains a top-level JSON object;
6. the exact preflight controller path still writes
   `cell-process-results.json` through that writer;
7. the full diagnostic contract retains the exact twelve ordered cases;
8. native runner guards remain `9/9`, including raw argv with spaces.

At least one RED and two identical GREEN outputs must be preserved before the
real preflight.

## One-shot stages

Invocation limits are:

| Stage | Limit |
|---|---:|
| v7 preflight | 1 |
| v7 RED | 1 |
| v7 GREEN | 1, only after sealed `CONFIRMED` RED |
| browser qualification | 1 |
| Lighthouse | 1 |

There is no in-root retry or repair stage.

### Preflight

The real controller launches exactly one `legacy-js-disabled` transport cell.
Acceptance requires:

- controller exit `0`;
- matrix decision `ACCEPT`;
- exact sentinel and `chromeLaunched: false`;
- top-level one-element process-result array;
- exactly one registered, normal exit-0 child;
- empty stderr;
- exact two-record journal;
- no `.profiles` creation;
- empty stopped-PID and exact-profile-fallback arrays;
- zero residual process, profile, port, or cleanup errors;
- accepted independently recomputed evidence seal;
- no new Chrome or Edge process with a profile contained by the stage.

Any failure seals the v7 preflight, stops v7 before RED, and forbids a retry.

### RED and conditional GREEN

RED runs only after preflight `ACCEPT`.

The exact RED outcome is:

| Cell | Expected |
|---|---|
| legacy-js-disabled | `TIMEOUT` |
| legacy-js-enabled | `PASS` |
| proposed-js-disabled | `PASS` |
| proposed-js-enabled | `PASS` |

Only exact sealed `CONFIRMED` RED permits adapting the proposed helper into
the production browser source and running GREEN. Any other decision stops.

GREEN requires the production cells to match the passing proposed state and
must bind to the actual sealed RED proposed-module bytes.

## Browser, visual, Lighthouse, and promotion gates

After GREEN only, inherit the already-locked browser qualification:

- no product-surface change;
- exact baseline/candidate locks;
- full interaction and media-motion coverage;
- overlay exact SHA-256;
- SSIM at least `0.98` for every required comparison;
- average PSNR at least `35 dB`;
- no functional, video, scroll, scene, zoom, motion, or animation regression;
- one Lighthouse run;
- performance score at least `0.90`;
- simulated LCP at most `2500 ms`;
- median simulated LCP at most `2500 ms`;
- CLS at most `0.02`;
- no discarded trial.

Promotion copies the qualified candidate into a fresh release root, verifies
exact parity, and only then permits changes to the publish checkout.

## Git and deployment boundary

Before any tracked mutation:

- all v7 gates must accept;
- release parity must pass;
- branch, upstream, remote, clean status, and index lock must be rechecked.

Only the already-qualified candidate delta may be applied. Existing UI,
video, scroll, scene, zoom, motion, and animation behavior must remain
visibly unchanged.

After commit and push, verify the connected deployment and live production
site. Report GitHub, deployment-provider, or live-verification failures
exactly; do not claim publication when an external step failed.

## Failure policy

- reconstruction failure: preserve partial state and do not recreate the same
  v7 root;
- preflight failure: seal and stop before RED;
- RED `FALSIFIED` or `INCONCLUSIVE`: seal and stop;
- offline, GREEN, visual, Lighthouse, promotion, or parity failure: stop
  before publication;
- external push/deployment/live failure: preserve exact provider error and
  report local success separately;
- no terminal evidence mutation or retry.

## Acceptance

V7 succeeds only when:

1. v5 and v6 remain byte-identical and terminal;
2. all five copied immutable snapshots remain exact;
3. the native singleton regression passes twice;
4. one preflight accepts without launching Chrome;
5. one RED is sealed `CONFIRMED`;
6. conditional GREEN accepts and is bound to the sealed RED;
7. inherited functional, visual, and motion gates pass;
8. Lighthouse thresholds pass on the single run;
9. release parity passes;
10. only the qualified candidate delta is committed;
11. push, deployment, and live verification succeed.
