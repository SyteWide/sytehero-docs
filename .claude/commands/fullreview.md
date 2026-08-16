---
description: Full maximum-recall multi-agent code + security review of a target, then fix every legitimate finding in one pass.
argument-hint: "[PR# | branch | commit-range | path/subsystem | blank = uncommitted changes if dirty, else branch vs main]"
---

You are running a **full, maximum-recall review** of the target below, followed by a single fix pass. This is the heavyweight review — run all angles at full strength; do not trim. Catching a real bug matters more than avoiding a false positive, so err toward surfacing, then verify before fixing.

## Target

`$ARGUMENTS`

If the argument is blank, resolve the scope yourself in this order: (1) uncommitted changes if the working tree is dirty (`git diff HEAD`); else (2) the current branch vs its base (`git diff main...HEAD` / `master`); else (3) the last commit (`git diff HEAD~1`). If the argument is a PR number, branch, commit range, file, or subsystem/directory, review that. For a whole subsystem or a multi-phase body of work, review the **current state of the files** (not a giant historical diff) so superseded intermediate states don't pollute the review. State the resolved scope before you start.

## Phase 0 — Orient

- Read the repo's convention files that govern the target: the root `CLAUDE.md`/`AGENTS.md`, plus any `CLAUDE.md`/`CLAUDE.local.md` in ancestor directories of the changed files. These define the rules you enforce in the conventions pass — quote them, don't invent style preferences.
- Identify the repo's build, test, and lint commands (from `CLAUDE.md`/`AGENTS.md`/`package.json`/`composer.json`/Makefile). You'll need them to verify fixes. Note any test-harness quirks (e.g. benign DB-cleanup noise, exit-code-only gates).
- Map the file set in scope (paths + sizes). Partition it into coherent groups for the finders.

## Phase 1 — Find (parallel subagents, full strength)

Dispatch **independent subagents in parallel**. Do not let one angle's conclusion suppress another's. Each returns findings as `file:line` · severity (HIGH/MED/LOW) · confidence (0–1) · one-line description · concrete failure/exploit scenario (quote the offending line). Each says "CLEAN" for any area with no real finding and names what it scrutinized hardest. Scale the number of finder agents to the size of the target (a tiny diff → fewer; a whole subsystem → one correctness agent per file-group plus the cross-cutting passes). Cover, at minimum:

**Code-review angles**
- **Correctness (recall):** line-by-line + removed-behavior + cross-file/caller-impact + language/framework pitfalls + edge cases (null/empty/zero, type coercion, off-by-one, missing guards, wrong-variable, inverted conditions, ordering/lifecycle). For large targets, split correctness across file-groups so each agent reads its slice in full.
- **Conventions:** violations of the repo's CLAUDE.md/AGENTS.md rules ONLY — quote the exact rule + the offending line. No style opinions.
- **Prose that executes (syntax-context scan):** text written as a COMMENT or explanation that the surrounding context *evaluates* instead of ignoring. Run this as a real scan over the target, not a read-through — the bug is invisible on inspection because the line looks like documentation. Check at minimum:
  - **Unquoted heredocs** (`<<EOF`, not `<<'EOF'`): a backtick, `$(...)`, or `$VAR` **in a comment inside the body** is executed/expanded LOCALLY at expansion time. Escaped forms (`` \` ``, `\$`) are safe. Seen live: a comment reading ``the go-live `lscwp` step`` made every run shell out to `lscwp`.
  - **Single-quoted command bodies** (`wp eval '<php>'`, `ssh host '<script>'`, `awk '<prog>'`, `python3 -c '<src>'`): an apostrophe anywhere in the body — *including in a comment* — closes the string early. An UNBALANCED one breaks the command outright, and a tool that reports a failed call as a benign SKIP hides it.
  - **Ordering inside embedded mini-languages**: in `awk`, a `/^[[:space:]]*#/ { next }` rule placed BEFORE a marker rule silently skips markers that are themselves comments (e.g. `# BEGIN LSCACHE`).
  - Double-quoted strings containing `` ` `` or `$(`; SQL/PHP/JS comments containing the host language's terminator.
  Report each as file:line with the offending line quoted. If the target is clean, PROVE the scan works by planting the bug and re-running — a scanner with a mis-scoped range or no escape handling reports zero and means nothing. Plant the canary OUTSIDE the repo (a scratch dir) when possible; if it must go in-tree, revert it immediately after the scan and verify the tree is clean.
- **Cleanup / altitude:** reuse (logic that duplicates an existing helper — name it), duplication across files, dead code / stale comments / leftover placeholders, simplification, efficiency, and whether each change sits at the right depth vs a fragile special-case bandaid.

**Security passes (report only high-confidence, newly-real, exploitable issues; exclude DoS, rate-limiting, secrets-merely-on-disk, theoretical races, path-only SSRF, and pure hardening wishes)**
- **Attack surface:** authn/authz bypass, IDOR, missing capability/permission checks, CSRF/nonce, injection (SQL/command/template), XSS (verify the escaping boundary for every untrusted-value sink), unsafe deserialization, SSRF (host/protocol control).
- **Data handling:** secret storage + decrypt-at-point-of-use + no secret in logs/responses/pages, sanitization, header injection, `json_decode`/file-op guards, outbound request safety.

Give each security agent the system's intended security model as context so it can verify the model actually holds.

## Phase 2 — Verify & triage

- Dedup findings that point at the same line/mechanism (keep the most concrete).
- For each non-trivial finding, verify it against the actual source before trusting it (a quick adversarial check, or a verifier subagent for subtle ones). Drop the refuted; keep CONFIRMED + PLAUSIBLE.
- Triage each survivor into: **real bug / gap** (fix), **convention violation** (fix), **by-design / accepted pattern** (don't fix — say why), or **refactor suggestion** (fix only if low-risk and in-scope; otherwise note as a follow-up).
- Present a compact triage table to the user: finding · severity · location · decision.

## Phase 3 — Fix every legitimate finding in one pass

- If reviewing code already merged to the default branch, do the fixes on a new branch (`fix/<topic>-review-followups`). If reviewing a feature branch's committed work (including when invoked from /fullbuild), fix in place on that branch. If reviewing uncommitted work, fix in place.
- Fix ALL legitimate findings in a single pass — do not require the user to say "fix everything." Apply the repo's conventions. Where a fix is delicate (changing a function's return shape, an escaping/encoding boundary, i18n of mixed HTML), verify the consuming call sites and avoid double-encoding / breakage.
- Add a regression test for each genuine bug fix where the harness allows it; model new tests on the repo's existing ones.
- Defer only true refactors or by-design items — and say so explicitly with reasons.

## Phase 4 — Verify & hand off

- Run the repo's build, full relevant test suite, and lint/architecture checks. Report the actual results. Don't commit generated build artifacts that are just timestamp churn; do commit legitimate build output (e.g. a bundled dist file that reflects a real source change), per the repo's rules.
- Commit with a clear message summarizing what was fixed and what was deferred.
- For merged-code reviews, open a follow-up PR (ending the body with the repo's required trailer). For uncommitted reviews, follow the repo's finishing flow. End with the triage table: fixed vs deferred.

## Principles

- **Full strength every time.** Don't substitute a trimmed fan-out because the diff looks small or was reviewed before. If the target is genuinely tiny, the finders simply return little.
- **Verify before fixing.** A plausible-but-wrong finding that gets "fixed" introduces a bug.
- **Respect the repo.** Enforce its CLAUDE.md/AGENTS.md, match its patterns, use its commands — this command runs in any repo.
