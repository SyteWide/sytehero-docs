---
description: Hard-sync every local branch to its upstream and prune gone branches. Destructive to unpushed local work.
---

Synchronize this clone to its remote. **This is destructive to local-only state**: every
local branch with an upstream is reset to that upstream, and local branches whose upstream
is gone are deleted. Follow the numbered procedure exactly — the guards are part of the
procedure, not advice.

1. **Pre-flight (mandatory).** Confirm `git status` is clean. Then enumerate per-branch
   state with:

   ```bash
   git fetch --all --prune
   git for-each-ref --format='%(refname:short) %(upstream:short) %(upstream:track)' refs/heads
   ```

   If the fetch itself fails (any non-zero exit), STOP — every judgment below trusts
   fresh tracking data.

   - Any branch whose track field contains `ahead` has unpushed commits → STOP and show
     me the list instead of resetting anything.
   - For every branch whose track field is `[gone]`, check for commits that exist on no
     remote: `git log --oneline "<branch>" --not --remotes | head -5`. Any output → that
     branch has unpushed work → STOP and show me before deleting it.

2. **Reset (only if step 1 passed).** Never use `git checkout` in a loop — a checkout that
   fails (e.g. the branch is checked out in another worktree) followed by `reset --hard`
   would reset the WRONG branch. Instead:

   ```bash
   current=$(git rev-parse --abbrev-ref HEAD)
   git for-each-ref --format='%(refname:short) %(upstream:short) %(upstream:track)' refs/heads | \
   while read -r branch upstream track _; do
     [ -n "$upstream" ] || continue
     [ "$track" = "[gone]" ] && continue   # gone branches are step 3's job — their upstream ref no longer exists
     if [ "$branch" = "$current" ]; then
       git reset --hard "$upstream"
     else
       err=$(git branch -f "$branch" "$upstream" 2>&1) || echo "SKIPPED $branch (git refused: $err)"
     fi
   done
   ```

   (`git branch -f` refuses the current branch and branches checked out in other
   worktrees — a refusal is reported as SKIPPED, never silently redirected.)

3. **Prune gone branches (only those step 1 cleared).**

   ```bash
   git for-each-ref --format='%(refname:short) %(upstream:track)' refs/heads | \
     awk '$2=="[gone]"{print $1}' | xargs -r git branch -D
   ```

4. **Report.** Which branches were reset, which were SKIPPED, which were deleted, and
   which branch is now checked out.
