---
description: Read-only final verification of completed work — completion, syntax, drift, unscripted removals. Never auto-fixes.
argument-hint: "[work/task to verify | blank = this session's work]"
---

Please perform a **final verification review** of the completed work: `$ARGUMENTS`
(blank = the work completed in this session).

## Objectives

- Confirm that **all required work was fully captured and completed** according to the
  approved instructions.
- Verify there are **no syntax errors**, malformed structures, or invalid references.
- Ensure **no unnecessary drift** occurred beyond what was explicitly specified.
- Confirm **no unscripted or unnecessary removals** (files, content, logic, comments, or
  documentation) took place.

## Review scope

- Only evaluate against: the explicitly approved task instructions, defined acceptance
  criteria (if present), and applicable project rules and documentation standards.
- Do NOT introduce new requirements, refactors, or cleanup.

## Checks to perform

1) Completion Check — every required step completed; nothing skipped, partial, or deferred.
2) Syntax & Structural Integrity — no syntax errors in code, config, scripts, or docs;
   file formats, headers, and structural conventions valid (run the native linters).
3) Drift Detection — no behavior, structure, wording, or scope changes beyond what was
   specified; no "helpful" additions, refactors, or stylistic rewrites outside scope.
4) Acceptance Criteria Verification — all stated criteria satisfied; if none were stated,
   confirm none were implicitly invented.
5) Removal Audit — no files, sections, logic, comments, or docs removed unless explicitly
   instructed; instructed removals match scope exactly.

## Reporting rules

- If **no issues are found**: a brief confirmation only — do not journal or log anything.
- If **any issues are found**, report each with: exact file paths and sections, description,
  impact assessment, blocking or non-blocking, and a recommended corrective action.

## Constraints

- Do NOT modify files during this review.
- Do NOT fix issues automatically.
- Do NOT infer intent beyond explicit instructions.
- Do NOT restate completed work unless necessary to explain a problem.
