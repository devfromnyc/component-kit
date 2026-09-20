/* Copy CartDrawer.jsx + demoCart.js into a client project. */

import { useDemoCart } from "./demoCart.js";

export function CartDrawer({ open = false, onClose }) {
  const items = useDemoCart((state) => state.items);
  const removeItem = useDemoCart((state) => state.removeItem);
  const total = items.reduce((sum, row) => sum + row.price * row.quantity, 0);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Cart">
      <button
        type="button"
        className={`absolute inset-0 bg-black/40 transition ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-label="Close cart overlay"
      />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-xl transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
          <h2 className="text-lg font-semibold text-zinc-900">Your Bag ({items.length})</h2>
          <button type="button" onClick={onClose} className="rounded-md px-2 py-1 text-zinc-600 hover:bg-zinc-100">
            Close
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-sm text-zinc-600">Your cart is empty.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.key} className="flex gap-3">
                  {item.imageSrc ? (
                    <img src={item.imageSrc} alt="" className="h-16 w-16 rounded-md object-cover" />
                  ) : null}
                  <div className="flex-1">
                    <p className="font-medium text-zinc-900">{item.title}</p>
                    <p className="text-sm text-zinc-500">
                      {item.size ? `Size ${item.size}` : null}
                      {item.color ? ` · ${item.color}` : null} · qty {item.quantity}
                    </p>
                    <button type="button" className="text-sm text-zinc-500 underline" onClick={() => removeItem(item.key)}>
                      Remove
                    </button>
                  </div>
                  <p className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="border-t border-zinc-200 px-5 py-4">
          <p className="mb-3 text-sm font-medium text-zinc-900">Total ${total.toFixed(2)}</p>
          <a href="#checkout" className="block rounded-full bg-zinc-900 px-4 py-3 text-center text-sm font-semibold text-white">
            Checkout
          </a>
        </div>
      </aside>
    </div>
  );
}
