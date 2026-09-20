# Owner email website assistant

The owner sends website content requests to `updates@globalinsightscollective.com` from `iwarsame8@gmail.com`. Gmail DKIM authenticates the original bytes. The VPS coordinator prepares an isolated branch; Jev selects the subscribed model and stronger independent reviewer. The owner replies **Publish** to the latest preview email. Only the exact recorded commit can advance main, without force pushing.

Operator escalations go to `zuhurahmed1995@gmail.com`. The Worker monitors VPS progress; a separate VPS timer monitors outbound delivery. Its independent Gmail fallback uses the explicitly selected operator account when enabled after verification. An unknown send result is alerted, never blindly repeated.

## Runtime

- `provision.py`: idempotent KV, D1, Email Worker, cron and preview branch configuration. `--activate-address` requires enabled private configuration.
- `worker.py run`: single-writer coordinator, owner replies, Jev, tool-free subscribed model calls, source restrictions, builds, previews, release verification, rollback and cadence.
- `monitor.py`: independent local monitoring process with Gmail fallback.
- `systemd/`: service and monitor timer definitions for this VPS. User lingering is enabled.
- `~/.local/state/gic-email/`: private configuration, SQLite state, attachments, working copies, render captures and backups. No credentials are copied into this directory or repository.
- Runtime interpreter: `~/.local/share/dr-ahmed-email-runtime/bin/python`. Model runner uses the existing Hermes interpreter and supported credential loader.

Run tests with the runtime interpreter: `python -m unittest discover -s services/email-assistant/tests`. Check site source with `node node_modules/typescript/bin/tsc --noEmit` and `npm run build`.

## Operating limits

Content changes are restricted to existing route files; imports, new executable JSX, event handlers and unsafe URL schemes are rejected. PNG/JPEG/WebP images are re-encoded; text and PDFs up to 30 pages can supply facts. Attachments are capped at 5 MB each and emails at 10 MB. Major redesigns and account changes require operator handling.

Four preparation attempts maximum, including one correction per model tier; 30-minute execution deadline; eight text-model calls maximum. Jev routing failure stops preparation rather than bypassing Jev. Jev allowance is $0.05 per request with bounded decision calls; text generation uses the existing subscribed Codex account. External URL contents are not fetched for the model: ask the owner for the facts or attachment.

Preview links are unlisted Cloudflare Pages URLs, **not access-controlled**. Do not submit confidential unpublished material. Cloudflare preview responses must carry `X-Robots-Tag: noindex`. Draft publication uses the same approved source commit rebuilt by the existing Pages Git integration; it is source-identity promotion, not binary artifact promotion. Live visible text is checked against the preview, and the canonical production deployment must identify the approved commit.

## Recovery

Inspect `systemctl --user status gic-email.service` and `gic-email-monitor.timer`. `worker.py status` lists request states. Inspect request data locally through SQLite; do not print raw messages or credentials into shared logs.

For `publishing` or `rolling-back`, first reconcile remote main and the Cloudflare canonical deployment. Preserve state after an unknown push response. The coordinator alerts after 20 minutes while continuing reconciliation. Do not manually resend an `uncertain` email; inspect provider evidence first. To pause processing, stop only `gic-email.service`; incoming signed email remains stored for 30 days. Disable the specific receiving rule if the pause will exceed that interval.

Daily SQLite backups are integrity-checked. Restore by stopping the service, preserving the current DB plus WAL/SHM files, restoring a backup to a new path, running integrity checks, then reconciling Git, D1 and outbox records before resuming. A readiness test restores request and deduplication state from a real SQLite backup.

Private raw email expires in KV after 30 days. Completed request attachments are removed after 30 days. Completed request text/history is redacted after 90 days; backups expire after 90 days, so older text can remain in a prior backup during that window. The latest ten release working copies are retained. Preview deployments and Git draft branches currently require operator cleanup; automatic expiry is not enabled.

## Cadence

Acknowledgment, missing-information question or preview, then completion after verified publication. One reminder after 48 hours during 9am–6pm America/New_York. One monthly check-in on the first day, 2pm–6pm in that timezone, only when there is no open request or activity within 30 days. Reply **Unsubscribe** to stop reminders and check-ins. Silence never publishes.

## Design consistency and owner questions

`policy.py` supplies the site's editorial/design rules to both drafting and
independent review. Both receive the actual current stylesheet; review also sees
the original affected pages and attachment text. The source guard rejects new
class combinations and added/changed inline styles, including literal data and
JSX-expression routes around those checks. Existing page patterns can be reused.

For missing facts, duplicates, ambiguity or a request that conflicts with the
site's design, the assistant should explain the concern, suggest one fitting
alternative and ask one clear question. It waits in `needs-information` without
publishing. These editorial judgments remain model-based; owner preview approval
and desktop/mobile checks remain necessary. No claim of foolproof visual judgment
or factual verification is made.
