---
description: Run this repo's own documentation/artifact hygiene sweep per its own conventions. Report first; apply only on explicit go.
argument-hint: "[apply | blank = report only]"
---

Run this repository's **documentation and artifact hygiene sweep**, using THIS repo's own
conventions as the authority — never a generic taxonomy.

Mode: `$ARGUMENTS` (blank = REPORT ONLY — plan every move/delete but change nothing;
`apply` = execute the plan after showing it; any other value = treat as report-only and
say so).

## Find the governing conventions (in order)

1. This repo's sweep rules, if any — e.g. a "Pre-PR reconciliation sweep" section in
   CLAUDE.md and `.cursor/rules/*documentation-drift*`, or a docs-taxonomy rule (in repos
   whose docs tree is organized by a root index / start-here document).
2. The repo's documented directory purposes (specs, plans, execplans, audits, mockups,
   historical/, drafts/).
3. If the repo has NO documented conventions, report that and propose a minimal
   classification instead of inventing a taxonomy.

## Sweep

- Inventory candidate artifacts: session/chat leftovers in the repo root, completed
  specs/plans/execplans the associated work already merged, closed-milestone audit or
  verification artifacts, unreferenced mockups/snapshots, orphan probe scripts and images,
  stale roadmap/to-do entries the work has resolved.
- Classify each candidate per the repo's conventions (keep / delete-git-preserves /
  relocate / needs-operator-decision), with the evidence for the classification.
- NEVER touch: historical or immutable docs (anything the repo marks read-only),
  `*.env`-shaped or secret-bearing files, anything a lint/allowlist names on purpose, or
  files you cannot attribute — put those in needs-operator-decision.

## Output

- The full classification table (path, class, evidence, planned action).
- In report mode: the exact commands the apply run would execute, and stop.
- In apply mode: execute, then re-run the repo's doc linters (if present) and show their
  results plus a summary of what moved/was deleted.
