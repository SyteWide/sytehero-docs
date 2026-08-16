---
description: Autonomous spec → plan → implement → double /fullreview → land pipeline; PR merges stay with the operator.
argument-hint: "[idea | spec path | requirements]"
---

You are running the **full build pipeline** on the target below. Invoking this command IS the approval for every internal gate (spec approval, plan approval, execution) — do not stop to ask for sign-off between phases. Work autonomously end to end.

## Target

`$ARGUMENTS`

If the argument is a spec/requirements file, start from it (skip to Phase 2 if it is already a reviewed spec). Otherwise treat the argument as the idea/requirements and start at Phase 1.

## Phases

1. **Spec.** Apply brainstorm-grade rigor, self-directed: explore the repo's context, resolve open questions using the repo's own conventions and sensible defaults, and write the spec to this repo's spec location (follow its conventions; `.agent/specs/` in SyteWide site/template repos). Stop to ask ONLY for a genuinely blocking decision that changes the shape of the work — never for confirmation.
2. **Plan.** Use the writing-plans skill (if available) to turn the spec into a bite-sized, testable implementation plan. Save it per repo conventions.
3. **Implement end to end.** FIRST: if you are on the default branch, create the feature branch NOW — before the first commit, so no task commit ever lands on local main. Then execute the whole plan: TDD where the repo has a test harness (red → green → commit per task), and run the repo's full relevant test + lint suite before calling the implementation done. Do not stop between tasks.
4. **Review round 1.** Run `/fullreview` on the work. Fix ALL findings — including ones you would normally defer. Verify each fix before applying (a reviewer can be wrong; prove it first), then re-run the affected tests.
5. **Review round 2.** Run `/fullreview` again. Same rule: fix everything, even deferred-severity findings, verified first.
6. **Land.** Run the repo's pre-PR hygiene (e.g. the pre-PR reconciliation sweep: delete completed specs/plans, reconcile roadmap/to-do docs). Commit ALL tracked and untracked work-product and push the current feature branch to remote. Open a PR with a summary of what shipped. **Never merge** — PR merges are the operator's alone.

## Hard limits

- The pre-approval above grants **repo-side** autonomy only. Live mutations (production sites, databases, VPS, DNS/WAF/Cloudflare writes, deploys) remain operator-gated per-change — surface them as proposed follow-ups; never run them under this command.
- Never commit secret-shaped files: `*.env`, keys, tokens, credentials, dumps. If one shows up untracked, leave it and flag it.
- If tests cannot be made green or a blocker needs operator input, stop and report exactly where the pipeline halted and why.
