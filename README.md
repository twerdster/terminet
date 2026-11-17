# TermiNet

TermiNet explored how a first-person game agent could learn individual actions and longer action sequences from images. Itai Caspi developed it as a Technion project supervised by Aaron Wetzler in Spring 2016; GIP lists it under 2017.

The original Python code implements DQN variants, exploration policies and recurrent macro-actions for ViZDoom. The privately recovered report describes separately trained shooting and navigation agents, followed by an experiment with learned action sequences. It reports that the latter did not outperform ordinary DQN.

## Updated

**[Open the browser demo](https://twerdster.github.io/terminet/)** — watch original recordings (converted from OGV to MP4), switch action sets, and adjust example Q values to explore softmax and ε-greedy action selection. The policy lab is new educational code; it does not load the checkpoints, run Doom or train a model.

To serve a checkout locally with Python 3, use `python3 -m http.server 8000 --directory demo` and open `http://localhost:8000`.

## Original work and current scope

[Selected original source](original/) is preserved byte-for-byte, with [the upstream implementation and six checkpoints](https://github.com/itaicaspi/keras-dqn-doom/tree/4241a994a49a39b88bfe5261b37d5abe6e0459a4) linked at a fixed revision. The legacy Keras/ViZDoom environment has not been restored. The upstream snapshot supplies no software license; no broader reuse permission is inferred.

[Usage and limitations](docs/USAGE.md) · [Recorded checks](docs/VALIDATION.md) · [Recovery and attribution](docs/PROVENANCE.md) · [Official GIP record](https://gip.cs.technion.ac.il/lab-projects.php?id=9)
