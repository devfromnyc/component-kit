export function PlaygroundPanel({ entry, values, open, onToggle, onReset, onPatch }) {
  return (
    <>
      <button
        type="button"
        onClick={onToggle}
        className="fixed top-4 right-4 z-50 rounded-full bg-zinc-950 px-3 py-1.5 text-xs font-medium text-white shadow"
      >
        {open ? "Hide controls" : "Show controls"}
      </button>
      {open ? (
        <aside className="fixed top-0 right-0 z-40 h-full w-80 overflow-y-auto border-l border-zinc-200 bg-white p-4 pt-16 text-zinc-900 shadow-xl">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold">{entry.name}</p>
            <button type="button" className="text-sm underline" onClick={onReset}>
              Reset
            </button>
          </div>
          <LinkHome />
          {entry.controls.map((control) => (
            <Control key={`${control.group}-${control.key}`} control={control} values={values} onPatch={onPatch} />
          ))}
        </aside>
      ) : null}
    </>
  );
}

function LinkHome() {
  return (
    <a href="/" className="mb-4 block text-sm text-zinc-500 underline">
      Back to library
    </a>
  );
}

function Control({ control, values, onPatch }) {
  const value = values[control.group]?.[control.key];
  const id = `${control.group}-${control.key}`;
  if (control.kind === "select") {
    return (
      <label className="mb-4 block text-sm" htmlFor={id}>
        {control.label}
        <select
          id={id}
          className="mt-1 w-full rounded border border-zinc-300 p-2"
          value={value}
          onChange={(event) => {
            if (control.options.includes(event.target.value)) {
              onPatch(control.group, control.key, event.target.value);
            }
          }}
        >
          {control.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
  if (control.kind === "boolean") {
    return (
      <label className="mb-4 flex items-center gap-2 text-sm" htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          checked={Boolean(value)}
          onChange={(event) => onPatch(control.group, control.key, event.target.checked)}
        />
        {control.label}
      </label>
    );
  }
  const Tag = control.kind === "textarea" ? "textarea" : "input";
  return (
    <label className="mb-4 block text-sm" htmlFor={id}>
      {control.label}
      <Tag
        id={id}
        type={control.kind === "url" ? "url" : "text"}
        className="mt-1 w-full rounded border border-zinc-300 p-2"
        value={value ?? ""}
        onChange={(event) => onPatch(control.group, control.key, event.target.value)}
      />
    </label>
  );
}
