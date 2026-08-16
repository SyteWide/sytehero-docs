---
description: Read-only Cloudflare alignment audit for this site, then a gated per-step menu of fixes.
---

Run the Cloudflare alignment AUDIT for this site and then offer me the choices.

If this repo has no `ops/site-identity.json`, it is not a scaffolded site repo (the
template/hub also lacks it) — say so and stop; do not improvise a Cloudflare audit
another way.

1. Get the live domain from this repo (`ops/site-identity.json` `LIVE_DOMAIN`, or
   CLAUDE.md). Read the current `CF_LLMS` value from `.scaffold-profile`.
2. Run the READ-ONLY audit and show me the output:
       scripts/cf-align.sh <domain> --report
3. Summarize what it found across the four steps — (1) IP allowlist drift,
   (2) baseline WAF/rate-limit rules, (3) zone security settings, (4) DNS drift —
   and call out, specifically, the LLMS Amplifier bundle status: are the LLMS
   allow clauses folded into the "Allow Good Bots" rule (on a converged zone the
   old standalone "Allow AI Crawlers for LLMS Files" rule is deliberately RETIRED —
   its absence alone does not mean the bundle is off; only an unconverged zone
   still carries it standalone), is the "Cache LLMS Amplifier files (edge 1h)"
   cache rule present, and what is CF_LLMS set to here. Report the current
   CF_LLMS value.
4. Then present me a clear menu of what I can do, one gated choice at a time:
   - sync the IP allowlist (additive),
   - apply the baseline WAF + rate-limit rules,
   - add the LLMS Amplifier bundle now (allow + edge-cache) vs. leave it off,
     and if I want it on, whether to flip CF_LLMS=yes in .scaffold-profile,
   - align zone security settings (SSL/TLS/HSTS/Early Hints),
   - or do nothing.

Per the live-mutation guardrail: make NO live Cloudflare changes until I
explicitly approve each one. The audit/report is read-only and pre-authorized.
For anything I approve, run it via `scripts/cf-align.sh <domain> --apply`
(it re-prompts per gated step) or the targeted `scripts/cf-bootstrap.sh <domain>
--llms/--no-llms`, then verify after.
