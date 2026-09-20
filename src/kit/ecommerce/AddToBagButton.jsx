export function AddToBagButton({ onClick, disabled, label = "Add to bag" }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className="w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-zinc-300"
    >
      {label}
    </button>
  );
}
