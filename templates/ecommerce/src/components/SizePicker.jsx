"use client";

export function SizePicker({ sizes = [], value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          type="button"
          onClick={() => onChange?.(size)}
          className={`min-w-10 rounded-md border px-3 py-1.5 text-sm ${
            value === size ? "border-zinc-900 bg-zinc-900 text-white" : "border-zinc-200 bg-white text-zinc-800"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
