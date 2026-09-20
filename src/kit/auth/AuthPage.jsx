import { mergeGroup } from "../../mergeGroup.js";
import { AuthShell, defaultContent as shellDefaults } from "./AuthShell.jsx";

export const defaultContent = {
  ...shellDefaults,
  emailLabel: "Email",
  passwordLabel: "Password",
  submitLabel: "Log in",
  footerBefore: "New here?",
  footerLinkLabel: "Sign up",
  footerLinkHref: "#signup",
};

export function AuthPage({ content }) {
  const merged = mergeGroup(defaultContent, content);

  return (
    <AuthShell
      content={{
        brand: merged.brand,
        panelHeading: merged.panelHeading,
        panelBody: merged.panelBody,
        imageSrc: merged.imageSrc,
        title: merged.title,
        subtitle: merged.subtitle,
      }}
      footer={
        <>
          {merged.footerBefore}{" "}
          <a href={merged.footerLinkHref} className="font-semibold text-amber-800">
            {merged.footerLinkLabel}
          </a>
        </>
      }
    >
      <form
        className="space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          <label htmlFor="kit-auth-email" className="mb-2 block text-sm font-medium text-stone-900">
            {merged.emailLabel}
          </label>
          <input
            id="kit-auth-email"
            type="email"
            className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-800"
          />
        </div>
        <div>
          <label htmlFor="kit-auth-password" className="mb-2 block text-sm font-medium text-stone-900">
            {merged.passwordLabel}
          </label>
          <input
            id="kit-auth-password"
            type="password"
            className="w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-800"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
        >
          {merged.submitLabel}
        </button>
      </form>
    </AuthShell>
  );
}
