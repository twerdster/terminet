# TermiNet repository context

Read SKILL.md next. This repository documents Itai Caspi’s Spring 2016 project supervised by Aaron Wetzler, cataloged by GIP in 2017. The original final-submission project page confirms itaicaspi/keras-dqn-doom as its agent-code source. Public upstream is pinned at 4241a994a49a39b88bfe5261b37d5abe6e0459a4.

The original/ subset is unchanged README, two Python modules, four configurations and eight referenced figures; hashes are in original/SHA256.json. Six checkpoints and other original assets remain at the fixed upstream link. The private final-submission archive/report/slides are not distributed. Upstream has no license; do not invent one or confuse public availability with permission.

The updated demo contains historical OGV-to-MP4 playback plus new, dependency-free JavaScript ε-greedy and numerically stable softmax calculations using synthetic Q values. It does not run Doom, infer from the checkpoints or train. The report says learned macro-actions did not outperform ordinary DQN. Browser checks and validation records must preserve these distinctions.

README is brief; longer usage, recovery, environment limitations and validation are linked under docs/. Live demo: https://twerdster.github.io/terminet/. Pages deploys demo/ via GitHub Actions.

A real tools-disabled Claude editorial review on 2026-11-17 informed narrower platform wording, explicit original-source subset/hashes, converted-playback wording and source-license qualifications. Suggestions about algorithm names were checked directly against the original code and report.

Original subset hashes verified for fifteen files. New-policy invariant checks and desktop Chrome interactions passed at 1100/390px; no model inference, training or physical-device test performed.

The browser identifies historical clips by upstream filename, without inferring which scenario each unnamed OGV contains.

The original README’s eight local figure references are included unchanged, so its relative figure links resolve. Fifteen files are now covered by original/SHA256.json; original source/configuration file count remains six. Inherited whitespace in original files is retained deliberately; new-file whitespace checks exclude original/.

Final actual Claude follow-up confirmed the narrowed README and provenance. The six upstream checkpoints and all 26 student-project entries were independently checked. Local and deployed Chrome policy/playback flows passed; other media-server/browser combinations remain unverified.
