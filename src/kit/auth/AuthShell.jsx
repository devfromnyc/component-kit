import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  brand: "Studio",
  panelHeading: "Studio",
  panelBody: "Your places, your pace — warm cards, nearby filters, and a little help when today needs a plan.",
  imageSrc: "/placeholders/hero.jpg",
  title: "Welcome back",
  subtitle: "Log in with your email and password.",
};

export function AuthShell({ content, children, footer }) {
  const merged = mergeGroup(defaultContent, content);

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden min-h-screen lg:block">
        <img src={merged.imageSrc} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-10">
          <p className="font-serif text-4xl text-white">{merged.panelHeading}</p>
          {merged.panelBody ? (
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">{merged.panelBody}</p>
          ) : null}
        </div>
      </div>
      <div className="flex min-h-screen flex-col justify-center px-4 py-12 sm:px-10">
        <div className="mx-auto w-full max-w-md">
          <a href="/" className="mb-8 inline-block font-serif text-2xl text-stone-900 lg:hidden">
            {merged.brand}
          </a>
          <h1 className="font-serif text-3xl text-stone-900 sm:text-4xl">{merged.title}</h1>
          {merged.subtitle ? <p className="mt-2 text-sm text-stone-500">{merged.subtitle}</p> : null}
          <div className="mt-8">{children}</div>
          {footer ? <div className="mt-6 text-sm text-stone-500">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
}
