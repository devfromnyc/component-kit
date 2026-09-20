import { mergeGroup } from "../../mergeGroup.js";
import { useDemoCart } from "./demoCart.js";

export const defaultContent = {
  heading: "Checkout",
  ctaLabel: "Place demo order",
};

export function Checkout({ content, onSubmit }) {
  const merged = mergeGroup(defaultContent, content);
  const items = useDemoCart((state) => state.items);
  const total = items.reduce((sum, row) => sum + row.price * row.quantity, 0);

  return (
    <section className="min-h-screen bg-zinc-50 px-6 py-12">
      <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
        <form
          className="space-y-4 rounded-xl bg-white p-6 ring-1 ring-zinc-200"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit?.({ orderId: "DEMO-1042" });
          }}
        >
          <h1 className="text-2xl font-semibold text-zinc-900">{merged.heading}</h1>
          <input className="w-full rounded-md border border-zinc-200 px-3 py-2" placeholder="Full name" />
          <input className="w-full rounded-md border border-zinc-200 px-3 py-2" placeholder="Email" type="email" />
          <input className="w-full rounded-md border border-zinc-200 px-3 py-2" placeholder="Shipping address" />
          <button type="submit" className="w-full rounded-full bg-zinc-900 py-3 text-sm font-semibold text-white">
            {merged.ctaLabel}
          </button>
        </form>
        <aside className="rounded-xl bg-white p-6 ring-1 ring-zinc-200">
          <h2 className="mb-4 font-semibold text-zinc-900">Order summary</h2>
          {items.length === 0 ? (
            <p className="text-sm text-zinc-600">Cart is empty. Add a product from the PDP first.</p>
          ) : (
            <ul className="space-y-3 text-sm">
              {items.map((item) => (
                <li key={item.key} className="flex justify-between">
                  <span>
                    {item.title} × {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
          )}
          <p className="mt-6 font-medium text-zinc-900">Total ${total.toFixed(2)}</p>
        </aside>
      </div>
    </section>
  );
}
