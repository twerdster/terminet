// Updated, dependency-free exploration-policy calculations. No network inference.
export function probabilities(values, policy, parameter) {
  if (!Array.isArray(values) || !values.length || values.some(v => !Number.isFinite(v))) throw Error('Finite Q values required');
  if (!Number.isFinite(parameter)) throw Error('Finite parameter required');
  if (policy === 'epsilon') {
    if (parameter < 0 || parameter > 1) throw Error('Epsilon must be between zero and one');
    const best = values.indexOf(Math.max(...values));
    return values.map((_, i) => parameter / values.length + (i === best ? 1 - parameter : 0));
  }
  if (policy !== 'softmax' || parameter <= 0) throw Error('Positive softmax temperature required');
  const maximum = Math.max(...values);
  const weights = values.map(v => Math.exp((v - maximum) / parameter));
  const total = weights.reduce((a, b) => a + b, 0);
  return weights.map(v => v / total);
}

export function sample(probabilities, value) {
  if (value < 0 || value >= 1) throw Error('Sample must be in [0, 1)');
  let cumulative = 0;
  for (let i = 0; i < probabilities.length; i++) {
    cumulative += probabilities[i];
    if (value < cumulative) return i;
  }
  return probabilities.length - 1;
}
