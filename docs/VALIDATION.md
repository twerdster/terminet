# Validation of the 2026 update

The browser demo is a historical recording viewer and new exploration-policy calculation. It has not run the legacy network or ViZDoom.

`node demo/policy.test.mjs` checks ε=0 and ε=1 limits, equal-value softmax, normalization and stability at large Q values, invariance to a constant offset, sampling boundaries and rejected invalid parameters. These checks concern only the new policy calculation.

Desktop Chrome checks at 1100px and 390px passed historical clip playback/selection, ε=0 probability limits, single and 400-sample draws, action-set changes, Q-value changes and reset, with no overflow or page errors. These are two layouts of the same interface, not independent model experiments. Physical mobile browsers and other engines remain untested. Deployed-site checks are recorded after publication. They are not historical result replication. Original-source SHA-256 hashes are checked against the pinned public revision. No benchmark or accuracy measurement is inferred from the historical plots.
