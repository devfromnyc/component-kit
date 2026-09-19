import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import registry from "../registry.js";
import { mergeGroup } from "../mergeGroup.js";
import { PlaygroundPanel } from "./PlaygroundPanel.jsx";
import { NotFoundPreview } from "./NotFoundPreview.jsx";

export default function PreviewPage() {
  const { id } = useParams();
  const entry = registry.find((item) => item.id === id);
  if (!entry) return <NotFoundPreview />;
  return <PreviewLoaded entry={entry} />;
}

function PreviewLoaded({ entry }) {
  const [values, setValues] = useState(() => ({ ...entry.defaults }));
  const [open, setOpen] = useState(false);
  const Component = entry.component;

  const props = useMemo(() => {
    const next = {};
    for (const group of Object.keys(entry.defaults)) {
      next[group] = mergeGroup(entry.defaults[group], values[group]);
    }
    return next;
  }, [entry, values]);

  function patch(group, key, value) {
    setValues((current) => ({
      ...current,
      [group]: { ...current[group], [key]: value },
    }));
  }

  return (
    <div className="relative min-h-screen bg-white">
      <Component {...props} />
      <PlaygroundPanel
        entry={entry}
        values={values}
        open={open}
        onToggle={() => setOpen((value) => !value)}
        onReset={() => setValues({ ...entry.defaults })}
        onPatch={patch}
      />
    </div>
  );
}
