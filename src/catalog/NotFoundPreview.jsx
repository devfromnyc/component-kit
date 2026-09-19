import { Link } from "react-router-dom";

export function NotFoundPreview() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-950 text-zinc-100">
      <p>Component not found.</p>
      <Link to="/" className="text-cyan-400 underline">
        Back to library
      </Link>
    </div>
  );
}
