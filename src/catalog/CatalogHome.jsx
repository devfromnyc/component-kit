import { useMemo, useState } from "react";
import registry from "../registry.js";
import { TYPES } from "../validateRegistry.js";
import { ComponentCard } from "./ComponentCard.jsx";

export default function CatalogHome() {
  const [type, setType] = useState("all");
  const items = useMemo(
    () => (type === "all" ? registry : registry.filter((entry) => entry.type === type)),
    [type],
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="border-b border-zinc-800 px-4 py-10 sm:px-8">
        <p className="font-mono text-sm text-cyan-400">component-kit</p>
        <h1 className="mt-2 text-4xl font-bold">Library</h1>
        <p className="mt-2 max-w-xl text-zinc-400">
          Filter by type, open a preview, hide the playground to judge the default look.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["all", ...TYPES].map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setType(value)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium capitalize ${
                type === value ? "bg-cyan-400 text-zinc-950" : "bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </header>
      <div className="flex flex-wrap gap-8 p-4 sm:p-8">
        {items.map((entry) => (
          <div key={entry.id} className="w-full max-w-sm">
            <ComponentCard entry={entry} />
          </div>
        ))}
      </div>
    </div>
  );
}
