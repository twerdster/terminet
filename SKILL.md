# Maintaining TermiNet

Read SUMMARY.md, README.md, docs/PROVENANCE.md, docs/USAGE.md and docs/VALIDATION.md before editing. Keep original files byte-identical to their pinned source and verify original/SHA256.json. Never execute the historical module’s training entrypoint as part of a browser check. No model training budget is implied.

Serve the static demo with python3 -m http.server 8000 --directory demo. Run node demo/policy.test.mjs for the new calculations. Browser QA must cover recording selection/playback, policy/parameter/scenario/Q changes, one draw, 400 draws, reset and responsive overflow. Do not claim live-agent execution or device validation from desktop Chrome checks.

Before every commit review and synchronize SUMMARY.md and SKILL.md, keeping paths and reports generic. Keep long logs out of README and preserve attribution. Real Claude prose review is requested for this revision; record and verify useful feedback. Pages publishes only demo/, not private recovery materials or the original implementation.

A real tools-disabled Claude editorial review on 2026-11-17 informed narrower platform wording, explicit original-source subset/hashes, converted-playback wording and source-license qualifications. Suggestions about algorithm names were checked directly against the original code and report.

Original subset hashes verified for nine files. New-policy invariant checks and desktop Chrome interactions passed at 1100/390px; no model inference, training or physical-device test performed.
