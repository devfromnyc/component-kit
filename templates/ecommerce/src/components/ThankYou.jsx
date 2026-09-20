import Link from "next/link";
import { mergeGroup } from "@/lib/mergeGroup.js";

export const defaultContent = {
  heading: "Order confirmed",
  body: "This is a demo confirmation. Swap this screen onto a real order id in a client project.",
  orderId: "DEMO-1042",
  homeHref: "/",
};

export function ThankYou({ content }) {
  const merged = mergeGroup(defaultContent, content);

  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-3xl font-semibold text-zinc-900">{merged.heading}</h1>
      <p className="mt-3 max-w-md text-zinc-600">{merged.body}</p>
      <p className="mt-4 font-mono text-sm text-zinc-500">Order {merged.orderId}</p>
      <Link href={merged.homeHref} className="mt-8 text-sm font-medium text-zinc-900 underline">
        Back home
      </Link>
    </section>
  );
}
