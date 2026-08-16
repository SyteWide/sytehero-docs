---
description: Long-running-task continuation discipline — no early stops, phased execution, progress tracker as SSoT.
argument-hint: "[progress tracker path | blank = the active plan/todo list]"
---

You are executing a **long-running, multi-phase task**. Progress tracker (SSoT):
`$ARGUMENTS` (blank = the active plan file or todo list for this task).

## Execution rules (NON-NEGOTIABLE)

1) Continuation & stopping
- Do NOT stop early. Do NOT summarize prematurely.
- If you hit a context or response limit, write your progress into the tracker first so the
  next turn resumes cleanly, then continue.
- The ONLY valid stopping points are: the task is fully complete; it cannot safely
  continue; or the next step is an operator-gated action. **An operator-gated live
  mutation (deploy, DNS/WAF/Cloudflare write, DB write, plugin install) is ALWAYS a valid
  stop — surface it and wait for approval; this rule never overrides that gate.**

2) Phased execution
- Work in clear, incremental phases; complete each phase fully before moving on.
- Do NOT skip phases. Do NOT advance beyond the current approved scope.

3) Progress tracking (SSoT)
- The tracker above is the **single source of truth** for task state.
- Update it continuously: check off completed items, update totals/counts, record notable
  findings, edge cases, or blockers. Never rely on chat memory alone.

4) Scope discipline
- Follow the governing instructions exactly.
- No refactors, cleanups, or stylistic changes outside the defined scope.
- No removals unless explicitly justified by the governing standards.

5) Safety & determinism
- Preserve existing behavior at all times.
- On ambiguity: pause that specific change, document it in the tracker, continue with other
  safe items.

## Completion criteria

The task is complete only when: all scoped items are processed, progress is fully reflected
in the tracker, no unchecked items remain, and no unresolved blockers remain undocumented.

Begin (or resume) execution immediately and proceed until completion.
