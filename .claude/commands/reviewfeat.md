---
description: End-to-end integration QA review — verify every component of a recent integration is wired, configured, and working.
argument-hint: "[feature/integration to review]"
---

Act as a senior integration QA engineer. Review the integration named below and verify that
every component is correctly wired, configured, and functioning as intended end-to-end.

## Target

`$ARGUMENTS`

Context you should gather first from the repo/session (ask concise questions only for what
you cannot find yourself): what systems/services were integrated (names, versions,
environments); intended user journeys and acceptance criteria (what "working" means);
integration architecture, data contracts/schemas, and auth model; recent changes
(PRs/commits) and rollout method; observability access (logs/metrics/traces), test/staging
endpoints, sample data.

## Tasks

1) Map the integration surface:
- Identify all touchpoints (APIs, webhooks, message queues/topics, batch jobs, ETL, DB
  connections, SSO/OAuth, file transfers).
- List each dependency and direction of data flow.

2) Validate wiring and configuration for each touchpoint:
- Endpoints/URLs, ports, DNS, network rules, secrets/keys, certificates, scopes/roles,
  timeouts, retries, idempotency keys.
- Environment parity (dev/stage/prod), feature flags, version compatibility.

3) Verify behavior against expectations:
- Happy-path flows for each critical journey.
- Error/edge cases: auth failures, malformed payloads, partial outages, retries, duplicate
  events, out-of-order events, rate limits, time skew.
- Data correctness: required fields, transformations, mappings, encoding,
  rounding/timezones, PII handling.

4) Check non-functional requirements:
- Performance/latency, throughput, backpressure, scaling limits.
- Reliability: retry policies, circuit breakers, DLQs, replay strategy.
- Security/compliance: least privilege, secret storage, audit logging, encryption in
  transit/at rest.

5) Confirm observability and operability:
- Logging, metrics, tracing, dashboards, alert thresholds.
- Runbooks, on-call handoff, rollback plan.

## Output (clear headings + bullets)

- Integration Checklist (per component/touchpoint with Pass/Fail/Not Verified and evidence)
- Findings (issues/risks with severity: Critical/High/Medium/Low)
- Reproduction Steps and Evidence Needed (logs, traces, screenshots, payload samples)
- Recommended Fixes (specific configuration/code changes)
- Validation Plan (tests to run, expected results) and a Go/No-Go recommendation

## Constraints

- Do not assume details; state what you could not verify and what evidence is required.
- Prefer actionable, verifiable checks over general advice.
- Reads are fine; any LIVE mutation (site/VPS/Cloudflare/DB writes) needs my per-change
  approval first. Probing live endpoints counts as a read ONLY for GET-shaped requests —
  sending a write-shaped or malformed payload to a production endpoint is gated like a
  mutation; run those probes against staging/test endpoints or ask first.
