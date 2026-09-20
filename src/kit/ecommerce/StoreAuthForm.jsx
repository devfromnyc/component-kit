import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  headingSignIn: "Sign in",
  headingSignUp: "Create account",
  emailLabel: "Email",
  passwordLabel: "Password",
  nameLabel: "Name",
  submitSignIn: "Sign in",
  submitSignUp: "Create account",
};

export const defaultLayout = {
  mode: "sign-in",
};

export function StoreAuthForm({ content, layout }) {
  const merged = mergeGroup(defaultContent, content);
  const { mode } = mergeGroup(defaultLayout, layout);
  const signUp = mode === "sign-up";

  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
      <form
        className="w-full max-w-md space-y-4 rounded-xl bg-white p-8 ring-1 ring-zinc-200"
        onSubmit={(event) => event.preventDefault()}
      >
        <h1 className="text-2xl font-semibold text-zinc-900">
          {signUp ? merged.headingSignUp : merged.headingSignIn}
        </h1>
        {signUp ? (
          <label className="block text-sm text-zinc-700">
            {merged.nameLabel}
            <input className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2" />
          </label>
        ) : null}
        <label className="block text-sm text-zinc-700">
          {merged.emailLabel}
          <input type="email" className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2" />
        </label>
        <label className="block text-sm text-zinc-700">
          {merged.passwordLabel}
          <input type="password" className="mt-1 w-full rounded-md border border-zinc-200 px-3 py-2" />
        </label>
        <button type="submit" className="w-full rounded-full bg-zinc-900 py-3 text-sm font-semibold text-white">
          {signUp ? merged.submitSignUp : merged.submitSignIn}
        </button>
        <div className="flex gap-3">
          <button type="button" className="flex-1 rounded-md border border-zinc-200 py-2 text-sm">
            Google
          </button>
          <button type="button" className="flex-1 rounded-md border border-zinc-200 py-2 text-sm">
            Apple
          </button>
        </div>
      </form>
    </section>
  );
}
