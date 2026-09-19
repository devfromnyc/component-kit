export function mergeGroup(defaults, overrides) {
  return { ...defaults, ...(overrides || {}) };
}
