import { useEffect, useState } from "react";
import { mergeGroup } from "../../mergeGroup.js";
import { CartDrawer } from "./CartDrawer.jsx";
import { demoProducts } from "./demoProducts.js";
import { useDemoCart } from "./demoCart.js";

export const defaultLayout = { open: true };

export function CartDrawerPreview({ layout }) {
  const { open } = mergeGroup(defaultLayout, layout);
  const addItem = useDemoCart((state) => state.addItem);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (useDemoCart.getState().items.length === 0) {
      const product = demoProducts[0];
      addItem({
        id: product.id,
        title: product.title,
        price: product.price,
        imageSrc: product.imageSrc,
        size: product.sizes[0],
        color: product.colors[0]?.id,
      });
    }
    setReady(true);
  }, [addItem]);

  if (!ready) return <div className="min-h-screen bg-zinc-50" />;
  return (
    <div className="min-h-screen bg-zinc-50">
      <CartDrawer open={open} />
    </div>
  );
}
