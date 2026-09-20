import { notFound } from "next/navigation";
import { Pdp } from "@/components/Pdp.jsx";
import { getProductById } from "@/lib/demoProducts.js";

export default async function ProductPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  return (
    <Pdp
      content={{
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        images: product.images,
        colors: product.colors,
        sizes: product.sizes,
      }}
    />
  );
}
