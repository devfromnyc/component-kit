import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  heading: "Places, events & stays",
  body: "One account for restaurants and parks, concerts and festivals, hotels and rentals — each saved as a card with photos, details, and a maps link.",
  imageSrc: "/placeholders/feature.jpg",
  imageAlt: "Sunlit outdoor table with a map and coffee",
};

export const defaultLayout = {
  imageSide: "right",
};

export function ImageWithText({ content, layout }) {
  const merged = mergeGroup(defaultContent, content);
  const { imageSide } = mergeGroup(defaultLayout, layout);
  const imageFirst = imageSide === "left";

  return (
    <section className="bg-stone-50 px-4 py-16 sm:px-6">
      <article className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-12">
        <div className={imageFirst ? "" : "md:order-2"}>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-lg">
            <img src={merged.imageSrc} alt={merged.imageAlt} className="h-full w-full object-cover" />
          </div>
        </div>
        <div className={imageFirst ? "" : "md:order-1"}>
          <h3 className="font-serif text-3xl text-stone-900">{merged.heading}</h3>
          {merged.body ? (
            <p className="mt-3 max-w-md text-base leading-relaxed text-stone-600">{merged.body}</p>
          ) : null}
        </div>
      </article>
    </section>
  );
}
