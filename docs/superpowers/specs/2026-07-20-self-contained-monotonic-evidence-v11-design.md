# Self-Contained Monotonic-Evidence Capture Isolation V11 Design

## Status

This design was approved section by section on 2026-07-20. It defines a fresh,
diagnostic-only V11 recovery after the terminal V10 immutable-evidence breach.

Committing this document authorizes only:

1. user review of the committed specification; and
2. after that review is accepted, creation of a detailed V11 implementation
   plan.

It does not yet authorize a V11 control root, implementation, browser launch,
result root, release root, Git push, publication, deployment, or live-site
change.

V10 remains terminal and immutable. V11 is not a repair, retry, reseal, or
continuation inside the V10 control root.

## Goal

V11 has three sequential goals:

1. authenticate and materialize V10's accepted Task 1 evidence into a fresh,
   self-contained V11 control root without trusting V10 Task 2;
2. replace reusable attempt-result filenames with a single-writer,
   monotonically numbered, create-only evidence protocol; and
3. if every offline, review, reconstruction, installation, and transport gate
   accepts, run the unchanged five-cell browser-operation isolation experiment
   exactly once.

The experiment remains the terminal goal. A correct controller or passing
offline suite is necessary but not sufficient for V11 success.

## Product and user-visible boundary

V11 is harness-only. It must not change:

- page layout, content, colors, typography, or assets;
- the world video, source bytes, attributes, or takeover behavior;
- scrolling, scene changes, zoom-in or zoom-out behavior;
- loader, navigation, chapters, cursor, or overlays;
- transitions, triggers, durations, easings, or animations;
- deployable HTML, CSS, JavaScript, images, fonts, SVG, video, or headers;
- publication, deployment, Cloudflare configuration, or the live website.

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

No V11 decision changes those identities. A product-tree difference is drift,
not an optimization result.

## Fixed authority and paths

- Publish checkout:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\publish\efficient-technologies-site`
- Branch:
  `agent/performance-without-motion-loss`
- Design base HEAD:
  `e1e028741de151d4daaa835dc9843e7e7c7bec53`
- Upstream:
  `b416b8113315c95c32d4674aa54769d90c562abd`
- Remote:
  `https://github.com/tarik-ux/efficient-technologies-site.git`
- Terminal V10 control root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v10-control`
- Absent V10 result root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v10`
- Absent V10 release root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v10`
- Fresh V11 control root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\capture-operation-v11-control`
- Fresh V11 result root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-v11`
- Forbidden V11 release root:
  `C:\Users\tarik\Claude Projects\efficient-technologies\output\performance\2026-07-20\poster-picture-layer-release-v11`

At design approval:

- Git status was clean;
- staged and unstaged diffs were empty;
- `git diff --check` was empty;
- `.git\index.lock` was absent; and
- all three V11 roots were absent.

The committed implementation plan, not this design base, becomes the V11
execution HEAD. Before creating the V11 control root, preflight must
reauthenticate exact branch, execution HEAD, upstream, remote, clean Git,
empty diffs, `git diff --check`, absent index lock, immutable predecessor
identities, runtime identities, product-tree identities, absent V11 roots,
absent V11 profile paths, and absent fixed-port listeners.

## Terminal V10 evidence

### Controlling repository records

| Record | Bytes | SHA-256 |
|---|---:|---|
| `docs/superpowers/specs/2026-07-20-immutable-journal-exact-ownership-v10-design.md` | 39,684 | `ce303e860b217c387b457964569eded72283671ea759f8ed45d430bef97c1199` |
| `docs/superpowers/plans/2026-07-20-immutable-journal-exact-ownership-v10.md` | 106,007 | `83c90dbb4c47fd70c2cac74c8cead657b6c869507d489ae0c84dec8f169eae10` |
| `.superpowers/sdd/v10-execution/task-2-evidence-breach-report.md` | 3,080 | `cb3a2e25e5ba9293bdd9dcc78a058ee1304f02b927d93479fd5c92313b7e04c4` |

### Complete terminal V10 control-tree identity

The terminal V10 control root currently has:

```text
file count: 91
canonical digest: 7b734dc536ea62e92ba12a4cfddc7e7d57a5e82a01a28fe8bde6a5d15b2b4ded
```

The digest algorithm is:

1. reject a non-directory root, reparse entry, unsupported entry, nested Git
   metadata, or path escape;
2. recursively enumerate files;
3. represent each file as an exact object with ordered keys
   `relativePath`, `bytes`, and `sha256`;
4. normalize path separators to `/`;
5. sort rows by `relativePath` using JavaScript `localeCompare`;
6. encode `JSON.stringify(rows)` as UTF-8; and
7. SHA-256 the encoded bytes.

V11 preflight must require both the exact count and digest. It must not
recompute a new expected identity from a changed V10 root.

### Accepted V10 Task 1 import set

The accepted import set has:

```text
file count: 23
canonical digest: c0a410b460b5ef9d3a0645c41c527263d3fa5d7b9fb1dddf0c8fe8a26d77ac56
```

Its exact rows are:

| Relative path | Bytes | SHA-256 |
|---|---:|---|
| `journal/000001-task-1-boundary.json` | 2,380 | `5dc7a67ffe33366e7e6cf3a5d01bd4e46bfbc923580574dc5ceb6cdb3ea1db8f` |
| `journal/000002-task-1-contract-sealed.json` | 3,985 | `fc790d47efaf26aac81e1654597d131650b4a9c03567c77de15a2b5d5fedad59` |
| `journal/000003-task-1-review-accepted.json` | 1,159 | `37b1352e40160d4bb06cf1f25724332e29fafa59ea05a611507cd5f692934159` |
| `locks/task-1-authorization-lock.json` | 1,616 | `74a0085fdd1a1abf4796a3119acb90ca3dc259c9d5f3512204bb3a6356fee7b1` |
| `locks/task-1-contract-lock.json` | 25,807 | `ea0555a00bb757d76a96575b153c7b29b671739cfbc3ed42d0091d92595c92ee` |
| `reviews/task-1-candidate-review-1.json` | 6,966 | `9faba3cff80b4cf525c7e897b585796d670bae4ce0bfa50d3e8465392b6c4f60` |
| `reviews/task-1-candidate-review-2.json` | 9,887 | `2abcfab487ca8af94350ba755c64e4ee6243c5e5212569b2bcf02c85939b13c0` |
| `reviews/task-1-candidate-review-3.json` | 12,093 | `a32e5f401d19c9b6886f61f1210d12e6d45a221a5d5599ad87ca56e5aa0cb59c` |
| `reviews/task-1-candidate-review-4.json` | 14,100 | `5ebbdc2ea847bd8338569aeead327df023ebdc707876f70abc58a27fe4dd5fab` |
| `reviews/task-1-candidate-review-5.json` | 16,122 | `9c9669b5647b1e3eb4fd79ca0dd5fc8fa3ef3dc92122a7c860e319525a91ce0d` |
| `reviews/task-1-candidate-review-6.json` | 18,105 | `2c0cefa7eb14a91ea042abe1f4b5fe886bfedf2db682c19b9f336d5edb6b8085` |
| `reviews/task-1-candidate-review-7.json` | 19,565 | `29022fd2e13141f497710536d9302e4b7381950e30429a9c51bedad89f25d7e0` |
| `reviews/task-1-candidate-review-8.json` | 19,814 | `f105bf4ef1042e6c4171abe5634f5082fad49854fd9a14988343b870c488c6f4` |
| `reviews/task-1-seal-review.json` | 815 | `4b7a23464133197b327ccff5bd1538608d6833267c3a6f8de1ef9a9c531f1218` |
| `sealed/immutable-journal-v10.mjs` | 16,538 | `f1be9be78e88099cd10b40f1f07f0cca7b395e58d818bf653f75bb082971cb60` |
| `sealed/process-ownership-v10.mjs` | 13,611 | `d65d89d67991a7e9b6b89bf3d2d726b946a80cd8f52e55db7ef69bbee83ab0cd` |
| `sealed/semantic-map-v10.mjs` | 4,798 | `789b679b53ee9f32e2d7b08615a873fcf4a3aaf4a56e32dff81c74b067d28a61` |
| `sealed/task-1-tests/immutable-journal-v10.test.mjs` | 28,507 | `7d79b593d08bc4767691de3d96c74302ac234f3c50c6e14f6641e8b8510a86f4` |
| `sealed/task-1-tests/process-ownership-v10.test.mjs` | 32,876 | `ec608c742968e0d56791a08c1d43c64a7d3e7b2d7641c413859d05e9f844119a` |
| `sealed/task-1-tests/semantic-map-v10.test.mjs` | 9,324 | `6b9a05dca00df515133859c64eaed05ead2dd5083e6c5f30e4379d40829f0cbc` |
| `sealed/task-1-tests/task-1-negative-injections.mjs` | 11,745 | `edd719a3d148501b32718f1a0c55462d8027f724f31da9a11f8783b96a9b2721` |
| `sealed/task-1-tests/windows-command-line-v10.test.mjs` | 13,225 | `6b7955049bd2552373cf02f5d5264c367bde894619c89c8578dff9c61e581cb9` |
| `sealed/windows-command-line-v10.mjs` | 8,122 | `5154c8687a83dea8b5207cbe3a73f409d53bd14a40638553862a855916a07f6f` |

These 23 files are the only V10 files eligible for authoritative Task 1
materialization. Candidate Task 1 history remains authenticated by the
complete 91-file root digest but is not copied as active V11 authority.

### Terminal V10 Task 2 breach set

The five-file V10 Task 2 set has:

```text
file count: 5
canonical digest: beb180a2cbe3970d551776c374f8ccf3cc2ed2fea4ed581a91e1e84801d10955
```

| Relative path | Bytes | SHA-256 |
|---|---:|---|
| `candidate/task-2/prepare-v10-core.mjs` | 39,437 | `62b2e68a99f54075e3f92096fe786b292af7cec880227bf818b63dc069a245f4` |
| `candidate/task-2/prepare-v10-core.test.mjs` | 8,764 | `c4473a3eb45fd87a80a2769cc9c60e2b857eeda29e107f3cb20dc34123b5209e` |
| `candidate/task-2/task-2-core-debug-green-attempt-1.json` | 3,170 | `41cb8d8f78d852c644eec301c4c99632ef337f4790e99dd86a6c3dcca8f2cbbf` |
| `candidate/task-2/task-2-core-green-attempt-1.json` | 2,551 | `1d9bbac2be170393f54fca2c5caa043c27def6698b71dba1dbaa7849c796f1a3` |
| `candidate/task-2/task-2-core-red-attempt-1.json` | 3,270 | `be8e5ff11ac6d2192f5b22c124aff41afe62d944db3bf766cf8b7d9278210363` |

The terminal facts are:

1. the original canonical GREEN path held the 3,170-byte failing record;
2. those bytes were moved to the debug filename;
3. the vacated canonical path was reused for the different 2,551-byte passing
   record;
4. V10 Task 2 never became eligible for candidate review or sealing;
5. V10 Phase B and every later V10 task remained unauthorized;
6. the V10 result and release roots remained absent; and
7. product bytes remained unchanged.

The source and test files may be copied only into a clearly labeled,
non-authoritative V11 terminal-reference area. They may inform a new candidate
implementation, but they receive no passing credit and cannot be copied
directly to V11 `sealed`.

The three V10 Task 2 result records are terminal failure evidence only. They
must never be treated as V11 attempts, renamed into a V11 attempt namespace,
or used to prove a V11 test result.

## Approaches considered

### Authenticated materialization and differential derivation — selected

V11 exclusively copies the exact accepted 23-file V10 Task 1 set into an
immutable import subtree. It authenticates the source and destination
manifests, then derives V11-native candidate contracts under an explicit,
reviewed version-delta policy.

This provides local auditability without making later V11 execution depend on
live reads from V10.

### Direct cross-version references — rejected

V11 could import V10 modules directly from the V10 control root at runtime.
That is smaller, but it creates a permanent cross-version dependency, allows
later V10 drift to affect V11, and makes V11 evidence non-self-contained.

### Full Task 1 reimplementation — rejected

V11 could ignore accepted V10 Task 1 work and recreate every contract from
scratch. That has the cleanest version label but repeats reviewed logic,
increases defect surface, and does not address the actual V10 failure, which
was attempt-record ownership.

## Version-specific derivation boundary

Accepted V10 Task 1 code contains V10-specific schema strings, import names,
run-token literals, and relevance labels. Those bytes cannot be silently
treated as V11-native code.

V11 therefore separates:

1. immutable imported V10 evidence;
2. a deterministic V11 derivation candidate; and
3. newly authored V11-only attempt-evidence code.

The implementation plan must enumerate every permitted deterministic
V10-to-V11 source and test transformation. At minimum it must account for:

- module filenames and relative imports;
- `capture-operation-v10` versus `capture-operation-v11` schema strings;
- `--capture-operation-v10-run-id` versus
  `--capture-operation-v11-run-id`; and
- V10-specific diagnostic labels that identify V11-relevant rows.

The derivation tool must:

- consume only authenticated imported source bytes;
- apply only the plan-declared ordered replacements;
- reject a missing source token, an unexpected replacement count, an output
  collision, an undeclared byte difference, or path escape;
- exclusively create the V11 candidate files;
- emit a complete source-to-output byte/hash map as an immutable attempt
  result; and
- never edit the imported V10 files.

Version-neutral logic may remain byte-identical apart from filename/import
changes. V11-specific evidence allocation and recovery logic is new code and
must not be disguised as a mechanical V10 derivation.

Every V11-native module and test remains candidate material until its full
positive, negative, independent-review, seal, and seal-review gates pass.

## V11 control-root architecture

The fresh V11 control root has isolated zones:

```text
capture-operation-v11-control/
  imports/
    v10-task-1/
      journal/
      locks/
      reviews/
      sealed/
    v10-terminal/
      task-2-evidence-breach-report.md
      task-2-reference/
      v10-root-snapshot.json
      import-manifest.json
  candidate/
    task-1/
    task-2/
    task-3/
  attempts/
    task-01/
    task-02/
    task-03/
  journal/
  locks/
  reviews/
  sealed/
  streams/
  terminal/
```

The plan must define the exact allowlist at each task boundary. Unlisted files,
directories, reparse entries, alternate data streams, or nested Git metadata
reject the boundary.

Data flows in one direction:

```text
authenticate committed authority and terminal V10
  -> create the V11 control root once
  -> materialize accepted Task 1 and terminal reference bytes once
  -> authenticate imported destination bytes
  -> derive and test V11-native core contracts
  -> independently review and seal the core
  -> build, test, review, and seal the controller
  -> build, test, review, and seal the diagnostic harness
  -> run the normalized offline suite twice
  -> reconstruct the V11 result root once
  -> independently verify and install once
  -> run one browser-free transport preflight
  -> run one unchanged five-cell stage
  -> independently recompute and terminalize
```

No later stage may modify, replace, delete, rename, reinterpret, or reseal an
earlier import, attempt file, journal event, review, lock, sealed file, result,
or terminal decision.

## Bootstrap and import contract

The V11 bootstrap is a plan-bound, browser-free, network-free, one-shot
operator.

Before root creation it must authenticate:

- committed design and implementation-plan identities;
- exact Git authority and cleanliness;
- exact V8/V9/V10 terminal identities required by the plan;
- the complete 91-file V10 root identity;
- the exact 23-file accepted import set;
- the exact five-file V10 Task 2 terminal-reference set;
- fixed runtime and product-tree identities;
- absent V11 control, result, and release roots;
- absent V11 profile paths and fixed-port listeners; and
- containment, regular-directory, non-reparse, and no-nested-Git boundaries.

It then:

1. exclusively creates the V11 control root as a regular directory;
2. exclusively creates the fixed bootstrap directories;
3. copies each import file using create-new semantics;
4. writes exact source and destination identities to
   `imports/v10-terminal/import-manifest.json`;
5. writes the authenticated 91-file root identity to
   `imports/v10-terminal/v10-root-snapshot.json`;
6. immediately re-reads every copied file and recomputes both manifests; and
7. exclusively creates the first V11 journal event only after all readback
   checks pass.

The V10 breach report is copied from its committed repository identity. The
five Task 2 files are copied only under `imports/v10-terminal/task-2-reference`
and are labeled `authority: "terminal-reference-only"` in the import manifest.

A bootstrap rejection before root creation leaves all V11 roots absent. A
rejection after root creation preserves the partial V11 root and terminally
stops V11. The root is never deleted or recreated.

## Write classes and freeze boundaries

### Immediately immutable writes

These files are immutable from successful exclusive creation:

- imported predecessor files;
- import and predecessor manifests;
- attempt intents, streams, results, and abandonment records;
- V11 journal events;
- review records;
- contract and authorization locks;
- sealed code and tests;
- result-root files;
- terminal records.

Corrections use a new path defined by the plan. Existing bytes are never
replaced.

### Candidate writes

Only the currently authorized `candidate/task-N` subtree is editable. Candidate
code may change before seal, but every execution binds the exact candidate
tree count and digest in its immutable attempt intent and result.

Candidate corrections do not permit evidence corrections. A corrected
candidate must run under the next attempt number.

Once a task is sealed:

- its candidate tree becomes read-only evidence;
- final source and test files are copied exclusively into `sealed`;
- its contract lock freezes candidate, attempt, review, and sealed identities;
- a seal review reauthenticates the complete boundary; and
- no candidate or sealed byte may change.

## Monotonic attempt namespace

Reusable semantic filenames such as
`task-2-core-green-attempt-1.json` are forbidden in V11.

Every executable candidate phase owns one fixed attempt series:

```text
attempts/task-02/core/000001/
attempts/task-02/core/000002/
attempts/task-02/core/000003/
```

The task and phase directory names are fixed by the committed plan. Attempt
directory names are exactly six decimal digits.

For each series:

- numbering begins at `000001`;
- the next number is exactly one greater than the highest existing number;
- all lower numbers must exist;
- an operator cannot choose an attempt number;
- a gap, duplicate, unexpected name, or collision is an integrity failure;
- allocation uses atomic exclusive directory creation; and
- an allocation collision stops rather than silently selecting another
  number.

The number describes chronology only. RED, GREEN, negative, correction, and
verification semantics live inside the intent and result records, not in a
reusable filename.

## Attempt file protocol

An attempt directory permits this ordered allowlist:

```text
intent.json
stdout.bin
stderr.bin
result.json
```

An interrupted open candidate attempt may instead end with either or both
already-created stream files preserved:

```text
intent.json
[stdout.bin]
[stderr.bin]
abandoned.json
```

`result.json` and `abandoned.json` are mutually exclusive.

### Intent

The controller exclusively creates and immediately reads back `intent.json`
before launching a child. Its canonical record binds:

- fixed schema and V11 version;
- task, phase, and attempt number;
- declared purpose and expected outcome class;
- exact executable, arguments, working directory, and bounded environment;
- exact candidate input tree count and digest;
- exact imported, sealed, Git, runtime, and product identities consumed;
- the current journal-head identity;
- the previous attempt closure identity or `null` for `000001`;
- controller PID, process creation time, and unique writer nonce; and
- UTC timestamp with milliseconds.

Environment capture uses a fixed non-secret allowlist. Undeclared environment
values, tokens, credentials, cookies, and unrelated user state are neither
captured nor passed.

### Child result and streams

Test and helper programs do not receive an evidence output path. They report
their bounded machine-readable result through stdout and use stderr only for
diagnostics.

The controller:

1. launches exactly the intent-bound child;
2. captures bounded stdout and stderr in memory;
3. enforces the fixed deadline without a blocking sleep;
4. records exact child PID and creation time;
5. after child exit, exclusively creates and reads back `stdout.bin`;
6. exclusively creates and reads back `stderr.bin`; and
7. exclusively creates and reads back canonical `result.json`.

`result.json` binds:

- the exact intent identity;
- child executable and process identity;
- start and end timestamps;
- exit code, signal/termination facts, and timeout status;
- stdout and stderr byte counts and hashes;
- parsed test totals, passed, failed, and ordered case results;
- exact post-run candidate and dependency identities;
- complete prior-attempt readback;
- the journal head; and
- a controller verdict.

Malformed stdout, output above the plan's fixed cap, an unexpected stderr
contract, or schema mismatch produces a failing result. It does not permit
rewriting the attempt.

All JSON evidence uses canonical UTF-8 without BOM and exactly one trailing
line feed. Binary stream files preserve exact captured bytes.

### Interrupted candidate attempts

If `intent.json` exists without `result.json` or `abandoned.json`, the attempt
is open. Zero, one, or both stream files may already exist.

A dedicated recovery verifier may exclusively create `abandoned.json` only
when:

- the attempt belongs to a candidate-development phase;
- the recorded writer PID and creation time no longer identify a live process;
- no matching or ambiguous child remains;
- all existing attempt bytes still match their prior identities; and
- no one-shot, sealed, reconstruction, installation, preflight, matrix, or
  terminal phase had begun.

The abandonment record binds the intent, the exact identities of any preserved
stream files, process-absence evidence, observer identity, reason, and time.
It is a forward-only closure, not a replacement. The next candidate attempt
may then use the next number.

An interrupted one-shot or post-seal attempt terminalizes V11. It cannot be
closed and retried as candidate work.

## Single-writer and readback rules

Only the V11 attempt controller may create files inside `attempts`.

Before allocation it must:

- validate the exact series allowlist;
- read and hash every prior attempt file;
- validate contiguous numbering and closure;
- prove no earlier open attempt remains;
- prove no live or ambiguous competing writer exists; and
- bind the previous closure digest.

After every exclusive write it immediately verifies:

- regular-file and non-reparse status;
- exact path containment;
- expected byte count and SHA-256;
- canonical JSON where applicable; and
- unchanged identities for all earlier files.

Multiple writer claims, a path collision, an existing-file write error,
unexpected prior-byte drift, or readback mismatch is an immutable-evidence
integrity failure. It terminally stops V11.

## Immutable V11 journal

V11 uses a new schema:

```text
efficient-technologies/capture-operation-v11-event-v1
```

The V10 journal module is imported as predecessor evidence. A V11-native
journal module is deterministically derived and then expanded with V11 event
definitions and tests.

Journal rules remain:

- one event per file;
- fixed zero-padded sequence in the filename;
- a committed-plan registry of event IDs, tasks, phases, statuses, and exact
  fact keys;
- canonical UTF-8 JSON with one trailing line feed;
- exclusive creation and immediate readback;
- each event binds the exact byte count and SHA-256 of its predecessor;
- complete-chain validation before and after every append;
- no mutable status file; and
- any human-readable progress view is a read-only projection.

The plan must freeze events covering:

1. committed authority and terminal-predecessor authentication;
2. accepted Task 1 import materialization;
3. V11-native core seal and independent acceptance;
4. Task 2 controller seal and independent acceptance;
5. Task 3 harness seal and independent acceptance;
6. reconstruction authorization and completion;
7. installation acceptance;
8. browser-free preflight acceptance;
9. five-cell stage completion; and
10. terminal decision.

No implementation may add an ad hoc event after the registry is sealed.

## Reviews, locks, and authorization

Each offline task has two separate review gates.

### Candidate review

The candidate reviewer receives:

- exact candidate source and test identities;
- the complete attempt series;
- required positive and negative case inventory;
- imported and sealed dependency identities;
- boundary allowlist; and
- prior journal and authorization identities.

The reviewer recomputes results from bytes rather than trusting a candidate
summary. Findings require a new candidate attempt and a new review record.
Earlier review records remain.

### Seal review

After candidate acceptance, a one-shot sealer exclusively copies final code
and tests to their fixed `sealed` paths and creates a contract lock.

The seal reviewer independently verifies:

- candidate-to-sealed byte identity;
- exact source, test, attempt, and review allowlists;
- passing positive and negative cases;
- canonical evidence and journal chain;
- exact import and dependency identities;
- no path escape, reparse, or nested Git entry;
- no product-tree or Git drift; and
- absent later-task, result, and release paths.

Only a compliant seal review permits the task authorization lock and next
journal event.

Review failure never permits editing sealed bytes. It preserves the root and
stops the version unless the failure occurred before sealing and the plan
explicitly classifies it as correctable candidate feedback.

## Task sequence

### Task 1: Import and establish V11-native core contracts

Task 1:

- bootstraps the root and materializes the exact accepted V10 set;
- copies the V10 Task 2 breach material as terminal reference only;
- derives V11-native journal, semantic, Windows argument, and ownership
  candidates under the declared delta map;
- implements the new monotonic attempt allocator/writer and recovery verifier;
- runs all inherited and new negative tests;
- independently reviews and seals the V11 core; and
- creates Task 2 authorization.

### Task 2: Build the source and reconstruction controller

Task 2:

- starts with a fresh V11 attempt series;
- may consult the imported V10 Task 2 source only as untrusted reference;
- authenticates design, plan, Git, terminal predecessors, runtime, product
  trees, fixed deadlines, and absent targets;
- implements one-shot reconstruction, installation, and read-only
  verification operators;
- runs all source-authentication and operator negative tests;
- independently reviews and seals the controller; and
- creates Task 3 authorization.

No V10 Task 2 result counts as a V11 RED or GREEN attempt.

### Task 3: Build the diagnostic harness

Task 3:

- stages the unchanged synthetic fixture, CSS, state schema, operation
  contracts, and five-cell matrix;
- uses exact parsed V11 run-token ownership and snapshot-scoped ancestry;
- captures global, owned, ambiguous, and resolution-trace channels;
- enforces fixed deadlines, network denial, and cleanup;
- proves offline cases and exact normalized output twice;
- independently reviews and seals the diagnostic harness; and
- authorizes reconstruction.

### Task 4: Reconstruct once

Task 4 creates the fresh V11 result root exactly once from authenticated
allowed predecessor content. It performs no browser launch, site-server start,
network access, or product write.

The source allowlist remains:

```text
baseline
candidate
browser
source-v4-browser
accepted-harness-source
source-v7-diagnostic
```

The source-v7 diagnostic identity remains:

```text
9 / 5613ad53c84c6e2541baed9a90a2b6c11bf645ed6d3ef920b423a6b1d9753ba7
```

The V11 result top-level allowlist remains thirteen entries:

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

All generated records use the V11 namespace. A rejection preserves the partial
result root and terminalizes V11.

### Task 5: Install once

Task 5 independently reauthenticates the result root, sealed diagnostic
manifest, Git, runtime, product, and process boundaries, then installs the
reviewed diagnostic files exactly once. Rejection stops before preflight.

### Task 6: Browser-free transport preflight once

Task 6 proves:

- exact registered-child start and process identity;
- exact parsed V11 run-token transport;
- bounded stdout and empty-stderr transport;
- top-level process-result array shape;
- deadline containment and terminalization reserve;
- complete global, owned, ambiguous, and trace channels;
- immutable event creation and readback;
- no browser, profile, fixed-port listener, network, or product mutation; and
- zero owned and ambiguous residue.

Acceptance plus independent verification authorizes the matrix. Rejection
terminalizes V11.

### Task 7: Run the five-cell stage once

Task 7 runs the fixed cells sequentially in fixed order. No cell is retried,
replaced, reordered, discarded, or selected as a best run.

### Task 8: Independently close V11

Task 8 recomputes every decision fact from immutable evidence, performs final
Git/product/network/process/cleanup checks, writes exactly one terminal
decision event and terminal lock, and routes the result.

`CONFIRMED`, `FALSIFIED`, and `INCONCLUSIVE` are mutually exclusive,
exhaustive, and terminal.

## Fixed runtime and causal source

The current fixed identities remain:

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

Playwright causal source:
C:\Users\tarik\AppData\Local\npm-cache\_npx\31e32ef8478fbf80\node_modules\playwright-core\lib\coreBundle.js
3407411 / be2e09efef3017b4eaa76f0cb5289f66c4ea57833f94319b17c1c2f184987ad7
last-write UTC ticks: 639192713587991449
regular file: true
reparse: false
```

Every controller, preflight, cell, finalizer, and verifier reauthenticates
these exact identities. Drift is an identity failure, not a browser result.

No dependency is installed or updated.

## Fixed deadlines

Reconstruction timings remain:

```text
reconstruction child deadline: 180000 ms
complete reconstruction budget: 240000 ms
environment snapshot ceiling: 30000 ms
terminalization reserve: 5000 ms
```

Diagnostic timings remain:

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

No deadline is changed dynamically, replaced by a blocking sleep, or retried.
Parent deadlines remain authoritative over child output.

## Synthetic fixture and browser boundary

The diagnostic preserves:

- the same local inline fixture;
- the same canonical stylesheet and state schema;
- viewport `412 x 823`, device scale factor `1`, and dark color scheme;
- the fixed Chrome, Node, Playwright, and causal-source identities;
- blocked service workers, no permissions, and no downloads;
- a fresh V11 persistent profile for each cell;
- a separate hidden registered Node child for each cell;
- explicit `javaScriptEnabled`;
- no site server or product navigation;
- zero HTTP(S) requests; and
- exact owned/profile cleanup with ambiguity gating.

## Exact five-cell matrix

| Cell | JavaScript | Operation | Required outcome |
|---|---|---|---|
| `add-style-disabled` | disabled | exact `page.addStyleTag` with canonical CSS | `TIMEOUT` |
| `add-style-enabled` | enabled | exact `page.addStyleTag` with canonical CSS | `PASS` |
| `evaluate-entry-disabled` | disabled | synchronous `page.evaluate` returns exact entry sentinel | `PASS` |
| `collection-disabled` | disabled | synchronous DOM/style/bounds capability probe only | `PASS` |
| `synchronous-full-disabled` | disabled | one synchronous evaluation injects style, mutates, and collects | `PASS` |

The inherited entry sentinel remains:

```json
{
  "entered": true,
  "entryToken": "v8-evaluate-entry"
}
```

The collection probe remains a schema, type, and capability probe. It does not
record or gate on a timing-dependent raw-state digest.

The synchronous-full result must equal the two sealed passing V7 states and
recompute to:

```text
b8634b4f899eee08ce6d1c14c57c11657214372a9f2eb53107282af5eb43ac67
```

The intentional `add-style-disabled: TIMEOUT` is valid only if the exact
operation, 5,000 ms deadline, transport, close, cleanup, and evidence
contracts all pass.

## Test-first contract

### Import and derivation

Tests must prove:

- exact V10 source and destination import manifests accept;
- changed, missing, extra, renamed, moved, or reparse-backed import rejects;
- incomplete or unauthorized V10 Task 1 chain rejects;
- V10 Task 2 files remain terminal-reference-only;
- undeclared version transformation rejects;
- missing or extra replacement counts reject;
- deterministic derivation produces exact repeated output; and
- imported V10 bytes remain unchanged.

### Attempt allocation and evidence

Tests must prove:

- `000001` is the only valid first allocation;
- exact contiguous next allocation accepts;
- manual number selection, gaps, duplicate names, and collisions reject;
- existing intent, stream, result, and abandonment files cannot be replaced;
- result and abandonment are mutually exclusive;
- an open candidate attempt with a dead exact writer can be abandoned once;
- a live or ambiguous writer cannot be abandoned;
- a post-seal or one-shot attempt cannot be recovered for retry;
- test children cannot choose evidence paths;
- prior-attempt byte drift rejects before new allocation;
- multiple writers reject;
- oversized or malformed child output becomes a failing immutable result;
- command, input, stream, and result identities chain exactly; and
- interruption never vacates or reuses an attempt path.

### Journal and ownership

All accepted V10 journal, semantic-map, Windows parser, and ownership tests are
ported through the declared differential derivation. Additional tests prove:

- V11 schema and run-token exactness;
- V10 token and all near matches reject V11 ownership;
- duplicate and order-only argument cases behave exactly;
- same-snapshot descendants are owned;
- PID reuse does not inherit old ancestry;
- missing, conflicting, or ambiguous parent identity remains ambiguous;
- global audit facts remain separate from owned cleanup; and
- journal replacement, deletion, insertion, reordering, and noncanonical bytes
  reject.

### Controller and one-shot boundaries

Tests must prove:

- committed authority and terminal predecessors authenticate exactly;
- missing, extra, or changed manifest facts reject;
- result-root reconstruction is exact and one-shot;
- source and destination manifests match;
- path escape, reparse, nested Git, existing target, and partial target reject;
- browser-free preflight cannot launch a browser or create a profile;
- fixed deadlines and terminalization reserve are enforced;
- one-shot operations cannot be retried; and
- release-root or product-write attempts reject.

### Normalized repetition

Before reconstruction, the complete sealed offline suite runs twice in fresh
temporary fixture roots. Timestamps, process IDs, random nonces, and temporary
absolute paths are normalized only in fields explicitly declared
nondeterministic by the plan.

The two normalized outputs must be byte-identical. Semantic similarity is not
enough.

## Decision contract

### CONFIRMED

`CONFIRMED` requires:

- exact authenticated V10 import and terminal facts;
- exact monotonic attempt and journal chains;
- accepted candidate and seal reviews for every offline task;
- two byte-identical normalized offline-suite results;
- exact one-shot reconstruction and installation;
- accepted browser-free preflight;
- the five exact ordered outcomes;
- exact operation identities and deadlines;
- exact entry sentinel;
- complete collection capability, schema, and type facts;
- exact synchronous-full state and digest;
- exact runtime, fixture, stylesheet, and causal-source identities;
- zero HTTP(S) requests;
- five ordered registered exit-zero process rows;
- empty stderr and validation-error arrays;
- empty owned and ambiguous residue;
- clean context, profile, and fixed-port cleanup;
- unchanged Git and product identities;
- absent V11 release root; and
- independent terminal recomputation and readback.

### FALSIFIED

A valid, fully completed, identity-clean operation result that differs from the
fixed five-cell matrix is `FALSIFIED`.

### INCONCLUSIVE

Any authority, import, identity, ambiguity, launch, transport, filesystem,
network, deadline, missing result, cleanup, evidence-chain, journal, lock,
terminal-write, terminal-readback, or independent-review failure is
`INCONCLUSIVE`.

The three decisions are mutually exclusive and exhaustive. Every decision is
terminal.

`CONFIRMED` authorizes only a separate design for the smallest
evidence-supported helper correction. It does not authorize a product edit,
push, publication, deployment, or live-site mutation inside V11.

## Failure policy

V11 fails closed:

- authority failure before root creation leaves V11 absent;
- bootstrap or import failure after root creation preserves the partial root
  and stops;
- candidate code or test failure may proceed only through the next immutable
  attempt;
- a correctly abandoned candidate attempt may proceed only through the next
  immutable attempt;
- evidence-integrity, import-integrity, seal, or seal-review failure stops;
- reconstruction rejection preserves the partial result root and stops;
- installation rejection stops before preflight;
- preflight rejection stops before the matrix;
- a matrix interruption or rejection stops without retry;
- `FALSIFIED`, `INCONCLUSIVE`, and `CONFIRMED` seal and stop; and
- any predecessor, runtime, Git, product, network, release, ownership,
  ambiguity, or cleanup drift stops.

There is no root recreation, evidence repair, filename reuse, best-run
selection, automatic retry, post-seal correction, or retroactive relabeling.

If a required terminal record itself cannot be exclusively created and read
back, no completion claim is allowed. Existing files remain untouched and the
failure is reported from externally observed process and filesystem facts.

## Success criteria

V11 succeeds only when:

1. V5 through V10 remain byte-identical and terminal;
2. V10 remains stopped at its immutable-evidence breach;
3. the exact accepted V10 Task 1 set is self-contained inside V11;
4. V10 Task 2 remains terminal-reference-only and receives no V11 credit;
5. all product and immutable-tree snapshots remain exact;
6. V11-native version derivation contains only declared differences;
7. monotonic attempt allocation passes every positive and negative contract;
8. no attempt or evidence path is reused, replaced, renamed, moved, or
   deleted;
9. exact parsed-argument ownership rejects every frozen near miss;
10. snapshot-scoped ancestry rejects PID-reuse leakage;
11. every candidate and seal review accepts without findings;
12. the complete offline suite passes twice with byte-identical normalized
    output;
13. one fresh V11 result root is reconstructed exactly once;
14. one reviewed diagnostic installation accepts;
15. one browser-free preflight accepts;
16. one five-cell stage produces exact sealed `CONFIRMED`;
17. owned and ambiguous terminal residue are empty;
18. runtime, network, Git, product, journal, attempt, and cleanup boundaries
    pass;
19. the V11 release root remains absent; and
20. no product, visible surface, publication, deployment, or live-site
    mutation occurs.

If any criterion fails, V11 does not succeed. Its preserved evidence is the
terminal result.
