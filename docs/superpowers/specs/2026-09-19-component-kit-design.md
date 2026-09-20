# Component Kit Design

**Date:** 2026-09-19  
**Status:** Draft for review  
**Product location:** sibling repo `C:\Users\aceja\Desktop\James-Portfolio-Projects\component-kit` (not inside `james-freelance`)  
**This spec file:** planning record in `james-freelance` until `component-kit` exists; copy it into that repo on first scaffold

## Goal

A React + Tailwind component workshop that makes freelance UI faster and more consistent for humans and AI. Browse components in a catalog, tune the real knobs in a playground, then copy the file into a client project (or clone the ecommerce template and strip it).

## Constraints

- Completely separate git repository. Not a child of `james-freelance` or any other repo.
- Public GitHub remote: https://github.com/devfromnyc/component-kit. No GitHub Pages, no public npm package.
- Tech: React 19, Tailwind CSS v4, JavaScript (JSX). Components may be converted to TypeScript per client project.
- Catalog app: Vite + React + Tailwind (SPA). No Next.js for the catalog.
- Kit components: plain React + Tailwind. No `next/link`, `next/image`, or other framework-only APIs. Use `<a>` and `<img>` (or a `linkComponent` / `href` prop where a client may swap in Next `Link` later).
- Placeholder copy and images only. Do not copy client names, real product photos, or secrets from source repos.
- Consumption is hybrid, not an installable library:
  - Marketing / nav / auth: copy the `.jsx` file(s) into the client repo.
  - Ecommerce: clone `templates/ecommerce`, then delete what you do not need.

## Repo layout

```
component-kit/
  package.json                 # Vite catalog (root app)
  index.html
  vite.config.js
  src/
    main.jsx
    catalog/                   # gallery chrome, filters, cards, preview, playground
    kit/
      marketing/
      nav/
      auth/
      ecommerce/
    registry.js                # single list of all kit entries
  templates/
    ecommerce/                 # cloneable Next.js store UI (demo data, no backend)
  public/placeholders/
```

Root `npm run dev` starts the catalog. The ecommerce template is its own Next app with its own `package.json` under `templates/ecommerce`.

## Component API

Grouped props, with defaults, **only for knobs that component actually needs**.

Allowed groups, when present:

- `content` — copy, images, links, list items, CTAs
- `layout` — arrangement that the original design already supports (e.g. hero align and content position, image-on-left vs right)
- `appearance` — only brand-level choices that are worth changing per job (e.g. a light vs dark overlay *mode* if the source already has that). Not a CSS remote.

Rules:

- If a component does not need a group, omit the group. A simple footer must not grow fake `layout.align` or `content.backgroundImage` for API symmetry.
- Do not expose spacing, opacity, letter-spacing, radius, hover treatment, or other baked visual details as props. Those stay in the component, matching the source.
- Each component owns `defaultContent` / `defaultLayout` / `defaultAppearance` for the groups it uses. Merge is shallow one level: `{ ...defaults, ...prop }`. Nested objects such as a CTA `{ label, href }` have their own defaults and are replaced as a whole if passed.
- Same group names across the kit so AI can guess where a knob lives. The *list* of keys is short and per-component.

Example (hero — groups it actually needs):

```jsx
<Hero />
<Hero
  content={{ heading: "Plan the trip you'll actually take", backgroundImage: "/placeholders/coast.jpg" }}
  layout={{ align: "right", contentPosition: "bottom" }}
/>
```

Example (simple footer — content only):

```jsx
<SimpleFooter content={{ copyright: "© 2026 Studio Name", links: [...] }} />
```

## Catalog

Private workshop, not a marketing site.

**Home (`/`)**

- Header with type filters: All, Marketing, Navigation, Auth, Ecommerce.
- Flex-wrap card grid in the spirit of `james-freelance` `HowIHelp` service cards: thumbnail, name, short description, type chip.
- One type per card.

**Preview (`/preview/:id`)**

- Full-bleed component with defaults. No gallery header sitting on top of the component.
- Playground starts **collapsed** so the first paint is a blank page (hero looks like a hero). A small corner toggle opens a collapsible panel (side on desktop, sheet on mobile). Hide it again to screenshot or judge the default look.
- Playground edits only the controls declared in that component’s `meta`. Live update. Reset restores defaults.
- Controls match the knob: text, textarea, image URL, select, optional boolean to show/hide a block (e.g. secondary CTA).
- No “edit any CSS” mode. If a key is not in that component’s grouped props, it is not in the panel.
- Unknown `:id` → “component not found” plus a link back to the gallery. No crash.
- Invalid playground input keeps the last good value. Selects cannot submit values outside the declared options.

**Out of catalog v1**

- Copy-source button (open the file).
- Public docs site.
- Visual regression suite.

## Registry and meta

One `src/registry.js` array. Gallery, filters, routes, and playground all read it. A kit component is not registered in four places.

Each entry:

```js
{
  id: "hero",                    // URL slug, unique
  name: "Hero",
  type: "marketing",             // marketing | navigation | auth | ecommerce
  description: "Full-bleed hero with alignable content.",
  component: Hero,               // default export from kit
  defaults: { content: {...}, layout: {...} },
  controls: [
    { group: "content", key: "heading", label: "Heading", kind: "text" },
    { group: "layout", key: "align", label: "Align", kind: "select", options: ["left", "center", "right"] },
  ],
}
```

`controls` may only reference keys that exist on `defaults` for that group. Missing `id`, `type`, `defaults`, or a control that points at a missing key fails the registry test (loud failure in dev, not a silent dead card).

Preview state: start from `defaults`; playground writes a shallow merge per group.

## First-wave inventory

Generic names in the kit. Source files are references for look and structure, not copy.

### Marketing (`src/kit/marketing/`)

| Kit name | Source |
| --- | --- |
| `Hero` | `bucket-list/src/components/LandingPage.tsx` (and the same pattern in `family-meal-planner`). Layout props: `align` (`left` \| `center` \| `right`), `contentPosition` if the source already supports it. |
| `About` | `james-freelance/src/components/home/AboutMini.tsx` |
| `Services` | `james-freelance/src/components/home/HowIHelp.tsx` |
| `ProcessSteps` | `james-freelance/src/components/home/AISpotlight.tsx` (`ProcessSection`) |
| `TechStack` | `james-freelance/src/components/home/TechStack.tsx` |
| `Faq` | `james-freelance/src/components/home/FAQSection.tsx` |
| `ConnectCta` | `james-freelance/src/components/home/FinalCTA.tsx` |
| `SimpleFooter` | `james-freelance/src/components/layout/Footer.tsx` |
| `IntroText` | “What you get” block in `bucket-list/src/components/LandingPage.tsx` |
| `ImageWithText` | “Places, events & stays” block in that landing page. `layout.imageSide` (`left` \| `right`) only if the original actually flips. |

### Navigation (`src/kit/nav/`)

| Kit name | Source |
| --- | --- |
| `AppNav` | `bucket-list/src/components/AppNav.tsx` (same pill nav as family-meal-planner) |

### Auth (`src/kit/auth/`)

| Kit name | Source |
| --- | --- |
| `AuthShell` | `bucket-list/src/components/AuthShell.tsx` plus the login/signup page composition. One reusable screen, not a pile of form atoms. Catalog preview is the full split-screen auth page with placeholder fields (no real auth). |

### Ecommerce (`src/kit/ecommerce/` + `templates/ecommerce`)

Source: `ecommerce-fullstack-store`. Catalog cards for each piece; template wires them into routes.

| Kit / template piece | Source |
| --- | --- |
| Store nav + mobile menu | `src/components/Navbar.tsx` |
| Product card | `src/components/Card.tsx` |
| Collection page (filters, sort, grid) | `src/app/(root)/products/page.tsx`, `Filters.tsx`, `Sort.tsx` |
| PDP (gallery, swatches, size, add to cart) | `src/app/(root)/products/[id]/page.tsx`, `ProductGallery.tsx`, `ColorSwatches.tsx`, `SizePicker.tsx`, `AddToBagButton.tsx` |
| Cart drawer | `src/components/CartDrawer.tsx` |
| Checkout + thank-you | `src/app/(root)/checkout/page.tsx`, `checkout/thank-you/[orderId]/page.tsx` |
| Store auth screens | `AuthForm.tsx`, `SocialProviders.tsx`, `sign-in` / `sign-up` pages |
| Store footer | `src/components/Footer.tsx` (ecommerce footer, distinct from `SimpleFooter`) |

Also port supporting UI the store pages need (`CollapsibleSection`, contact page if it is part of the store chrome). Do not port Neon, Drizzle, better-auth, or payment providers in v1.

## Ecommerce template vs catalog

- **Catalog:** each ecommerce piece is a card. Cart and checkout use in-memory / Zustand demo state and placeholder products so the playground works without a backend.
- **`templates/ecommerce`:** Next.js App Router app (JavaScript) that already routes home, collection, PDP, cart, checkout, and auth screens. Demo product data in-repo. Clone it, then strip. Replace demo data and add a real backend per client.
- Shared look comes from copying or importing the same kit files. Template may import from `../../src/kit/ecommerce` while it lives in this monorepo folder; after clone, the job copies kit files into the client tree. Implementation must keep kit files self-contained so that copy still works.

## Copy-paste workflow

1. Run the catalog, filter, open preview, hide playground to judge the default look, or open playground to try knobs.
2. Copy the kit `.jsx` file and any local child files it imports into the client project.
3. Pass grouped props at the call site. Convert to TypeScript only if that client is TypeScript.

No versioned package, no `npm install @aceja/component-kit`.

## Errors and checks

- Unknown preview id: not-found view + link home.
- Broken placeholder image: page still renders.
- Registry test (Vitest): every entry has unique `id`, type in `marketing | navigation | auth | ecommerce`, `defaults`, and `controls` whose `group`+`key` exist on `defaults`.
- Catalog smoke: home shows cards; filter by type; open a preview; toggle playground; reset defaults.
- Browser pass: gallery plus one preview per category, including a full-bleed hero with the playground hidden.

No visual-regression suite and no ecommerce backend tests in v1.

## Out of scope (v1)

- Publishing to npm
- TypeScript conversion of the kit
- GitHub Pages or any public URL
- Real payments, database, or auth backends
- A copy-to-clipboard source button
- Components not in the first-wave inventory (e.g. `james-freelance` Finder/portfolio desktop)

## Implementation order (for the later plan)

1. Create private `component-kit` repo (sibling folder + `gh repo create --private`).
2. Vite catalog shell: home cards, filters, preview route, playground chrome.
3. Registry + Vitest contract.
4. Marketing + nav + auth kit, sourced from the files above, placeholder content.
5. Ecommerce kit pieces + demo state.
6. `templates/ecommerce` Next app wired to those pieces with demo data.

## Success

- `component-kit` exists as its own public GitHub repo, sibling to `james-freelance`.
- `npm run dev` at the repo root shows a filterable card catalog.
- Clicking a card opens a blank-page preview with a hideable playground that only exposes real knobs.
- First-wave components render with placeholders and are copy-pasteable JSX + Tailwind.
- `templates/ecommerce` runs as a demo store UI without a database.
