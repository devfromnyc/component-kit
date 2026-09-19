export const TYPES = ["marketing", "navigation", "auth", "ecommerce"];
export const CONTROL_KINDS = ["text", "textarea", "url", "select", "boolean"];

export function validateRegistry(entries) {
  const errors = [];
  const ids = new Set();
  for (const entry of entries) {
    if (!entry.id) errors.push("entry missing id");
    if (entry.id) {
      if (ids.has(entry.id)) errors.push(`duplicate id: ${entry.id}`);
      ids.add(entry.id);
    }
    if (!entry.name) errors.push(`${entry.id || "?"} missing name`);
    if (!TYPES.includes(entry.type)) errors.push(`${entry.id || "?"} invalid type`);
    if (!entry.description) errors.push(`${entry.id || "?"} missing description`);
    if (typeof entry.component !== "function") errors.push(`${entry.id || "?"} missing component`);
    if (!entry.defaults || typeof entry.defaults !== "object") {
      errors.push(`${entry.id || "?"} missing defaults`);
      continue;
    }
    for (const control of entry.controls || []) {
      if (!CONTROL_KINDS.includes(control.kind)) {
        errors.push(`${entry.id} control ${control.key} has invalid kind`);
      }
      const group = entry.defaults[control.group];
      if (!group || !Object.prototype.hasOwnProperty.call(group, control.key)) {
        errors.push(`${entry.id} control ${control.group}.${control.key} not in defaults`);
      }
      if (control.kind === "select" && (!control.options || control.options.length === 0)) {
        errors.push(`${entry.id} select ${control.key} missing options`);
      }
    }
  }
  return { ok: errors.length === 0, errors };
}
