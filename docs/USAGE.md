# Using the updated demo

The browser viewer needs no account, camera, model download or build step. It plays two historical clips and calculates exploration probabilities from three manually supplied action values. Playback controls and the recording selector work independently of the policy lab.

Select an action set, change its Q values, then choose softmax or ε-greedy. Temperature spreads or concentrates softmax probabilities; ε mixes uniform exploration with the first maximum-valued action. “Choose an action” draws once from that distribution. “Sample 400 choices” shows a random histogram, not a trained-agent evaluation.

For local use, install Python 3, run `python3 -m http.server 8000 --directory demo` from the repository root and open `http://localhost:8000`. Static files can also be hosted by any ordinary HTTPS server. The interface is responsive for desktop and mobile browsers. Physical Android and iOS browsers have not been tested in this update.

## Original environment

The original code imports Python-2-era Keras APIs, Theano-style channel-first layers and the then-current ViZDoom binding. Its configuration files contain relative scenario paths. Current Python, Keras and ViZDoom packages are not drop-in replacements. No supported original-environment installation recipe or inference claim is offered here.

The complete upstream includes six HDF5 checkpoints, larger recordings, additional plots and a machine-specific native-binding symlink. This archive links that fixed revision and copies only the documented selection of source/configuration files and plots. No original file was edited to imply compatibility.

## Limits

The updated JavaScript uses stable softmax probabilities and an explicit ε-greedy distribution. It illustrates these policies; it is not a translation of the network, recurrent model, replay memory or game environment. Example Q values are synthetic. Historical clips are observations of old runs, not new benchmarks or reproducibility evidence. Browser playback and policy tests do not establish numerical equivalence or model performance.
