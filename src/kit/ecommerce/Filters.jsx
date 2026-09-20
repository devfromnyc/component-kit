const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "trail", label: "Trail" },
  { id: "city", label: "City" },
  { id: "kids", label: "Kids" },
];

export function Filters({ value = "all", onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          type="button"
          onClick={() => onChange?.(category.id)}
          className={`rounded-full px-3 py-1.5 text-sm font-medium ${
            value === category.id ? "bg-zinc-900 text-white" : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
