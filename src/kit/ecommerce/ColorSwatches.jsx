export function ColorSwatches({ colors = [], value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {colors.map((color) => (
        <button
          key={color.id}
          type="button"
          aria-label={color.label}
          onClick={() => onChange?.(color.id)}
          className={`h-8 w-8 rounded-full ring-2 ring-offset-2 ${
            value === color.id ? "ring-zinc-900" : "ring-transparent"
          }`}
          style={{ backgroundColor: color.value }}
        />
      ))}
    </div>
  );
}
