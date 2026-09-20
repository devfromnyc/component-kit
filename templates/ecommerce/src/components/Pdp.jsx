"use client";

import { useState } from "react";
import { mergeGroup } from "@/lib/mergeGroup.js";
import { AddToBagButton } from "./AddToBagButton.jsx";
import { ColorSwatches } from "./ColorSwatches.jsx";
import { demoProducts } from "@/lib/demoProducts.js";
import { ProductGallery } from "./ProductGallery.jsx";
import { SizePicker } from "./SizePicker.jsx";
import { useDemoCart } from "@/lib/demoCart.js";

const first = demoProducts[0];

export const defaultContent = {
  title: first.title,
  price: first.price,
  description: first.description,
  images: first.images,
  colors: first.colors,
  sizes: first.sizes,
  id: first.id,
};

export function Pdp({ content }) {
  const merged = mergeGroup(defaultContent, content);
  const addItem = useDemoCart((state) => state.addItem);
  const [color, setColor] = useState(merged.colors?.[0]?.id);
  const [size, setSize] = useState("");
  const price = typeof merged.price === "number" ? `$${merged.price.toFixed(2)}` : merged.price;

  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <ProductGallery images={merged.images} alt={merged.title} />
        <div>
          <h1 className="text-3xl font-semibold text-zinc-900">{merged.title}</h1>
          <p className="mt-2 text-lg text-zinc-700">{price}</p>
          {merged.description ? <p className="mt-4 text-zinc-600">{merged.description}</p> : null}
          <div className="mt-6">
            <p className="mb-2 text-sm font-medium text-zinc-800">Color</p>
            <ColorSwatches colors={merged.colors} value={color} onChange={setColor} />
          </div>
          <div className="mt-6">
            <p className="mb-2 text-sm font-medium text-zinc-800">Size</p>
            <SizePicker sizes={merged.sizes} value={size} onChange={setSize} />
          </div>
          <div className="mt-8">
            <AddToBagButton
              disabled={!size}
              onClick={() =>
                addItem({
                  id: merged.id || merged.title,
                  title: merged.title,
                  price: Number(merged.price) || 0,
                  imageSrc: merged.images?.[0],
                  color,
                  size,
                })
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
