---
description: Conservative dead/orphaned/deprecated-code detection plus modularization proposals, evidence required.
argument-hint: "[files/dirs to analyze | blank = whole repo]"
---

You are a senior software engineer analyzing a safe codebase cleanup and modularization
refactor of: `$ARGUMENTS` (blank = the whole repo). **Propose only — do not edit any
files.** Your entire output is a proposal for me to act on.

Goal: Identify and propose removal of dead, orphaned, or deprecated code that is truly
unused, and refactor overly coupled or monolithic areas into clearer modules — without
changing runtime behavior. If you do not have enough context to prove something is unused,
explicitly mark it as "needs confirmation" and list what additional files/commands/logs
would confirm it.

## Process requirements

1) Discovery
- Map entry points (apps/CLIs/services), public APIs, build targets, and runtime wiring
  (routes, dependency injection, exports/imports, reflection, config-based loading, plugin
  discovery).
- Identify where code could be invoked indirectly (dynamic imports, reflection,
  string-based routing, event names, scheduled jobs, environment flags, feature toggles).

2) Dead/Orphaned/Deprecated code detection (be conservative)
- Dead code: functions/classes/variables unreachable from any entry point or public API
  surface, with no dynamic references.
- Orphaned code: files/modules not imported/required by any build target and not referenced
  by configuration/scripts.
- Deprecated code: explicitly marked deprecated or superseded and not used by supported paths.
- For each candidate, provide concrete evidence (reference search results, call-graph
  reasoning, build/test coverage indicators). If evidence is incomplete, do not recommend
  removal — recommend verification steps instead.

3) Safety constraints
- Do not remove or change behavior of: public API exports, externally referenced endpoints,
  serialization formats, database schemas/migrations, config keys, telemetry/event names,
  or any code potentially used by reflection/dynamic loading unless verified.
- Do not "optimize" or reformat broadly; focus on safe removals and modularization with
  minimal diff.
- Prefer small, reviewable changes. If a refactor is large, propose an incremental plan.

4) Modularization refactor guidelines
- Identify modules with mixed responsibilities, high coupling, duplication, or unclear
  boundaries.
- Propose a module structure (folders, interfaces, dependency direction) and describe how
  to extract components safely.
- Ensure dependencies point inward (domain/core not depending on infrastructure/UI).
  Introduce interfaces/adapters where needed.
- Preserve existing behavior; add/adjust tests only as necessary to lock behavior before
  refactoring.

## Output requirements (single response, structured exactly as below)

A) Context Assumptions & Missing Info — assumptions; missing artifacts needed for confidence.

B) Removal Candidates (Safe) — per item: location (file path + symbol), type
(dead/orphaned/deprecated), evidence, risk level (low/med) + rationale, exact change
summary, suggested verification (tests/commands).

C) Removal Candidates (Needs Confirmation) — same fields, plus: what could be dynamically
referencing it, and exact steps to confirm (search patterns, runtime logs, tracing, build
graph).

D) Modularization Opportunities — per item: current pain points, proposed module boundary
and structure, step-by-step refactor plan (small commits), key interfaces/types to
introduce, tests to add/adjust, risk level + rollback strategy.

E) Patch Suggestions — concise diff-style snippets for the highest-confidence changes only
(do not invent files you haven't seen).

Before making any deletion recommendation, ensure you can justify that it is not referenced
by any entry point, public API, configuration, or dynamic mechanism. If you cannot, place
it in "Needs Confirmation" with concrete verification steps.
