---
description: Merge the PR into main, clean up merged/gone branches, and push. The operator's post-/fullbuild approval action.
argument-hint: "[PR# | blank = current branch's PR]"
---

I am approving the merge. Target: `$ARGUMENTS` (blank = the PR belonging to the current
branch).

0. **Pre-flight.** Confirm the working tree is clean (a dirty tree breaks the later
   branch switch — stash nothing silently; show me what's dirty and stop). Confirm the PR
   you resolved is the one I named: echo its number + title before merging. A branch
   reused across multiple historical PRs can resolve to the wrong one — when in doubt,
   ask.
1. **Stacked-PR check before any branch delete.** Run `gh pr list --base <branch>` for the
   branch being merged: if any OPEN PR uses it as a base, merging with `--delete-branch`
   would auto-close that dependent PR (this has happened in this portfolio). In that case
   merge WITHOUT deleting the remote branch and tell me about the dependents.
2. Merge the PR into the default branch (`gh pr merge` — the repo's conventional merge
   strategy; delete the remote branch on merge only when step 1 found no dependents).
3. Switch to the default branch and pull.
4. **Prune local branches — judge merged-ness by PR state, not git ancestry.** Under squash
   merge, `git branch --merged` will NOT list a just-merged branch, and an upstream being
   gone does not by itself prove the work landed. A local branch is safe to delete only if
   (a) `gh pr view <branch> --json state,mergedAt` shows a MERGED PR, or
   (b) `git log --oneline <branch> --not --remotes` is empty (nothing local-only).
   Anything else: keep it and list it with the reason.
5. **Leftover working-tree changes are not auto-committed to the default branch.** If the
   tree is dirty after the merge, list what's there and ask — unless the leftovers are
   obviously this task's own work-product AND I asked for them in this invocation. Never
   commit secret-shaped files (`*.env`, keys, credentials).
6. Report: what merged, which branches were deleted, which were kept and why.

If the merge cannot proceed (checks failing, conflicts, review required), stop and report —
do not force anything.
