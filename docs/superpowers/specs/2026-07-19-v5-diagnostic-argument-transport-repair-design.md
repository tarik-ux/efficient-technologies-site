# V5 Diagnostic Argument-Transport Repair Design

## Status and authority

This supplemental design is approved by the user's 2026-07-19 instruction to
repair v5 and to stop requesting routine approvals. That instruction authorizes
the scoped repair, its offline tests, independent review, one bounded repaired
RED execution, and automatic continuation into the already-approved v5 plan
only if the repaired RED decision is `CONFIRMED`.

No additional conversational approval is required at intermediate checkpoints.
Work must still stop for a genuine blocker, a failed terminal gate, or an
action outside the existing SEO, GEO, performance, publish, and deployment
scope.

This design supplements, but does not rewrite or reclassify, the original v5
design and plan. Their no-retry rule remains binding on the consumed
`diagnostic/red` execution and its evidence. The later user instruction creates
one narrow repair authority in a new sibling namespace.

## Observed failure

The one authorized `diagnostic/red` execution completed and sealed an
`INCONCLUSIVE` decision. All four cells failed before Chrome launch with the
same Node error:

```text
Error: Cannot find module 'C:\Users\tarik\Claude'
code: 'MODULE_NOT_FOUND'
```

The controller built an array of raw argument tokens, including paths beneath
`C:\Users\tarik\Claude Projects\...`, and passed that array to
`Start-Process -ArgumentList`. Windows reconstructed a native command line
without preserving the intended token boundaries. Node consequently received
the truncated script path `C:\Users\tarik\Claude`.

This is a harness argument-transport defect. It is not evidence about the
canonicalization hypothesis, the website, the video, motion, or performance
candidate.

## Immutable predecessor

The following evidence is terminal and read-only:

| Artifact | Bytes | SHA-256 |
|---|---:|---|
| `diagnostic/red/diagnostic-evidence-lock.json` | 2,396 | `34c81cbf4009aeeb2b8449744e3bf28f3168c77b5cb0e714b48911d6625b175c` |
| `diagnostic/red/canonicalization-liveness-red.json` | 3,115 | `5c62e04fb9193de0dbb2cb514a0718818161bea8cf634c56329c1856cc0603d2` |

The sealed predecessor has 12 files and digest
`d23c0800ddeb53cdae0ea31728b9d63149b1c41d5d17e9198cb73c8e32567f3d`.
It must verify exactly before and after the repair. No file beneath
`diagnostic/red` may be edited, deleted, renamed, copied over, resealed, or
rerun.

## Goal

Repair the native argument boundary once, prove the repair without a browser,
then run the unchanged four-cell causal matrix exactly once in
`diagnostic/red-repair-1`.

The repair must preserve:

- all deployable product bytes;
- the world video and its source, takeover, scene, scroll, zoom, and playback
  behavior;
- every visible layout, style, transition, trigger, duration, easing, and
  animation;
- all original diagnostic cell order, strategies, expectations, and deadlines;
- the no-HTTP diagnostic boundary; and
- the original failed evidence as an explicit predecessor.

## Repair architecture

### 1. Give the process helper one raw-token contract

`Invoke-OwnedProcessWithDeadline` becomes the single boundary responsible for
encoding raw PowerShell argument tokens for Windows `Start-Process`.

Callers pass unquoted logical tokens. The helper applies the existing
`ConvertTo-OwnedProcessArgument` algorithm exactly once immediately before
`Start-Process`. Existing callers that pre-encode tokens must be converted to
the raw-token contract to prevent double encoding.

This is preferred over quoting only the diagnostic controller because it
removes the same footgun for every current and future helper caller.

Direct `Start-Process` calls outside the helper retain their own explicit
quoting; they are not covered by the helper contract.

### 2. Add a browser-free transport regression

Before implementation, add a test that invokes the actual process helper with a
Node script and argument paths containing spaces. The child must record its
received `process.argv` vector.

The test must prove all of the following:

- a script path containing spaces arrives as one token;
- `--profile`, `--output`, and `--phase-journal` remain separate option tokens;
- each corresponding path containing spaces arrives as one token;
- token values and ordering are exact; and
- the child exits cleanly without launching a browser or making a network
  request.

The pre-fix run must fail for the intended transport reason. The post-fix run
must pass. A setup failure is not acceptable RED evidence.

### 3. Introduce one explicit repair stage

The controller and finalizer may accept exactly these stages:

```text
red
red-repair-1
green
```

`red-repair-1` has RED semantics:

- exact cell order:
  `legacy-js-disabled`, `legacy-js-enabled`,
  `proposed-js-disabled`, `proposed-js-enabled`;
- exact RED strategies and expectations;
- an exact copy of `diagnostic/source/capture-stabilizer-proposed.mjs`;
- decision vocabulary `CONFIRMED`, `FALSIFIED`, or `INCONCLUSIVE`;
- matrix name `canonicalization-liveness-red-repair-1.json`;
- a fresh evidence lock in the repair directory; and
- the original diagnostic deadlines with no extension.

The finalizer must normalize the stage root to the exact absolute path
`diagnostic/red-repair-1`. It must never treat `diagnostic/red` as writable.

### 4. Make the repaired RED authoritative only on confirmation

If `red-repair-1` seals and independently verifies `CONFIRMED`, downstream
GREEN logic must authenticate and consume the repaired proposed-module record
from `diagnostic/red-repair-1`. It must also verify the immutable original RED
lock as predecessor evidence.

If the repair stage returns `FALSIFIED` or `INCONCLUSIVE`, or cannot seal and
verify, v5 stops. No `red-repair-2`, hidden retry, cleanup rerun, deadline
change, or replacement evidence is authorized.

## Control-state corrections

The Task 2 report currently opens with the stale preflight state
`READY_TO_RUN_RED` even though its later terminal section says `BLOCKED`.
Preserve the historical preflight evidence, but make the current terminal state
the sole top-level status:

```text
BLOCKED / INCONCLUSIVE / original RED authority consumed
```

The global v5 progress ledger must record:

- original Task 2 RED: terminal sealed `INCONCLUSIVE`;
- repair task: in progress, then its exact terminal result;
- Task 3: locked unless `red-repair-1` is sealed, verified, independently
  approved, and `CONFIRMED`; and
- product/UI mutation: still forbidden before isolated `PROMOTE`.

## Files in scope

Control documents in the publish checkout:

- this design;
- `docs/superpowers/plans/2026-07-19-v5-diagnostic-argument-transport-repair.md`;
- `.superpowers/sdd/progress.md`;
- `.superpowers/sdd/canonicalization-liveness-v5/task-2-report.md`; and
- new repair brief, report, review, and test-evidence records in the same SDD
  namespace.

Harness files in the existing v5 root:

- `browser/runner-guards.psm1`;
- `browser/runner-guards.tests.ps1`;
- `diagnostic/run-canonicalization-diagnostic.ps1`;
- `diagnostic/finalize-canonicalization-diagnostic.mjs`;
- `diagnostic/diagnostic-contract.test.mjs`; and
- a minimal browser-free argv fixture or regression test if needed.

No path in `site/`, `baseline/`, `candidate/`, `diagnostic/red/`, terminal v4,
or a release root is in repair scope.

## Verification gates

Before the one repaired browser execution:

1. authenticate the original RED lock, matrix hash, 12-file count, and digest;
2. capture focused TDD RED for the space-containing argv boundary;
3. make the minimal helper, caller, and stage-alias changes;
4. pass the focused transport regression;
5. pass the complete existing runner-guard and diagnostic contract suites;
6. prove zero product, baseline, candidate, original RED, and Git-boundary
   drift;
7. prove no owned process, temporary profile, or qualification-port residue;
8. produce a `READY_TO_RUN_REPAIR` report; and
9. obtain independent read-only approval of the repair and launch boundary.

Only the root controller may then invoke:

```powershell
& $root\diagnostic\run-canonicalization-diagnostic.ps1 `
  -Stage red-repair-1
```

That command may be consumed once. Its result is immediately finalized, sealed,
verified, independently recomputed, and reviewed.

## Decision table

| Repaired result | Required action |
|---|---|
| `CONFIRMED`, sealed, verified, independently approved | Mark the repair complete and continue automatically at original v5 Task 3 using `red-repair-1` as the authoritative RED predecessor. |
| `FALSIFIED` | Preserve and seal the result; stop v5. |
| `INCONCLUSIVE` | Preserve and seal the result; stop v5. |
| Launch, cleanup, finalization, seal, verification, or boundary failure | Preserve exact state; stop v5. |

## Non-goals

This repair does not:

- alter the website or its visible surface;
- optimize, simplify, replace, or disable any animation or video behavior;
- change the causal hypothesis, cell expectations, deadlines, or browser;
- authorize repeated repair attempts;
- erase or reclassify the original failure; or
- broaden GitHub, Cloudflare, credential, deployment, or external-service
  authority beyond the already-approved v5 publish workflow.
