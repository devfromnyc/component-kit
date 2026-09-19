import { Link } from "react-router-dom";

export function ComponentCard({ entry }) {
  return (
    <Link
      to={`/preview/${entry.id}`}
      className="group relative block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition hover:border-cyan-400/50"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan-400">{entry.type}</p>
      <h2 className="mb-3 text-2xl font-bold text-zinc-50 group-hover:text-cyan-400">{entry.name}</h2>
      <p className="text-zinc-400">{entry.description}</p>
    </Link>
  );
}
