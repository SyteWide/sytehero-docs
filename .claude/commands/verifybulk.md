---
description: Verify a bulk rename/find-replace left no double-prefixes, orphaned imports, or stale names.
argument-hint: "[rename/refactor to verify | blank = last change]"
---

After the rename/find-replace/refactor named below (blank = the most recent one in this
session or working tree), grep the entire codebase for any double-prefixed strings,
orphaned imports, or references to the old names. Show me anything suspicious before we
commit.

## Target

`$ARGUMENTS`

## Checks (run all)

1. Double-prefix bugs, across every code/doc extension the rename touched (not just
   php/sh). Portability note: `grep -E` rejects backreferences under ugrep, and stock BSD
   grep has no `-P` — the perl form works everywhere:

   ```bash
   { find . \( -name '*.php' -o -name '*.sh' -o -name '*.py' -o -name '*.js' -o -name '*.md' \) \
       -type f -not -path '*/.git/*' -not -path '*/vendor/*' -not -path '*/node_modules/*' -print0 \
     | xargs -0 perl -ne 'print "$ARGV:$.:$_" if /([a-z]{3,})\1[-_]/; close ARGV if eof'; } | head -10
   ```

2. Unrendered scaffold tokens in non-example files:

   ```bash
   grep -rE '\{\{[A-Z_]+\}\}' . --include='*.md' --include='*.php' \
     --exclude-dir=.git --exclude-dir=vendor 2>/dev/null | grep -v '\.example:' | head -10
   ```

3. The OLD names themselves: grep for every pre-rename identifier (function names, option
   keys, file paths, CSS classes, env vars) across code, docs, and configs — a hit outside
   a changelog/historical doc is a stale reference.

4. Orphaned imports/requires/sources pointing at moved or renamed files.

5. Lint every modified file with its native linter (`php -l` for PHP, `bash -n` for shell,
   `python3 -m py_compile` for Python) before committing.

Report findings grouped by check, with file:line references. Do not fix anything until I
confirm which hits are real.
