---
description: Commit ALL tracked and untracked changes as a single descriptive chore commit and push.
argument-hint: "[optional context for the commit message]"
---

Commit and push all changes — tracked AND untracked — to the current remote branch using a
**single `chore:` commit**.

## Commit requirements (non-negotiable)

- Commit type MUST be `chore:`
- Commit message MUST be descriptive and specific
- Message MUST summarize:
  - What was changed
  - Why the change was necessary
  - Any structural or organizational impact

## Commit message format

```
chore: <concise summary>

- Scope: <areas/filesystems affected>
- Reason: <why this was required>
- Impact: <behavioral, structural, or documentation impact>
- Notes: <anything important for future maintainers>
```

## Rules

- If the current branch IS the default branch (main/master), STOP **before committing**
  and confirm with me — the commit must not land on local main first
- Do NOT split into multiple commits
- Do NOT include unrelated changes already staged by someone else without flagging them
- Do NOT reference task IDs unless explicitly provided
- NEVER commit secret-shaped files: `*.env`, keys, tokens, credentials, DB dumps. If one is
  untracked, leave it untracked and tell me.
- Do NOT modify historical or protected docs

## After committing

- Push the commit to the current remote branch
- Do not create or switch branches
- Stop after push completes, or report the exact failure if push is not possible

Additional context for the message: `$ARGUMENTS`
