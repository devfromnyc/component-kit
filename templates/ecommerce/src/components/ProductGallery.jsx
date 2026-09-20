export function ProductGallery({ images = [], alt = "" }) {
  const list = images.length ? images : ["/placeholders/product.jpg"];
  return (
    <div>
      <div className="aspect-square overflow-hidden rounded-xl bg-zinc-100">
        <img src={list[0]} alt={alt} className="h-full w-full object-cover" />
      </div>
      {list.length > 1 ? (
        <div className="mt-3 flex gap-2">
          {list.map((src) => (
            <img key={src} src={src} alt="" className="h-16 w-16 rounded-md object-cover ring-1 ring-zinc-200" />
          ))}
        </div>
      ) : null}
    </div>
  );
}
