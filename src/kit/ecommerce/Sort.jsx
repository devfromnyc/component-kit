export function Sort({ value = "featured", onChange }) {
  return (
    <label className="flex items-center gap-2 text-sm text-zinc-700">
      Sort
      <select
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        className="rounded-md border border-zinc-200 bg-white px-2 py-1.5"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: low to high</option>
        <option value="price-desc">Price: high to low</option>
      </select>
    </label>
  );
}
