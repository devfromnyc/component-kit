import { Hero, defaultContent, defaultLayout } from "./kit/marketing/Hero.jsx";
import { About, defaultContent as aboutDefaultContent } from "./kit/marketing/About.jsx";
import { Services, defaultContent as servicesDefaultContent } from "./kit/marketing/Services.jsx";
import { ProcessSteps, defaultContent as processDefaultContent } from "./kit/marketing/ProcessSteps.jsx";
import { TechStack, defaultContent as techStackDefaultContent } from "./kit/marketing/TechStack.jsx";
import { Faq, defaultContent as faqDefaultContent } from "./kit/marketing/Faq.jsx";
import { ConnectCta, defaultContent as connectDefaultContent } from "./kit/marketing/ConnectCta.jsx";
import { SimpleFooter, defaultContent as footerDefaultContent } from "./kit/marketing/SimpleFooter.jsx";
import { IntroText, defaultContent as introDefaultContent } from "./kit/marketing/IntroText.jsx";
import {
  ImageWithText,
  defaultContent as imageTextDefaultContent,
  defaultLayout as imageTextDefaultLayout,
} from "./kit/marketing/ImageWithText.jsx";
import { AppNav, defaultContent as appNavDefaultContent } from "./kit/nav/AppNav.jsx";
import { AuthPage, defaultContent as authDefaultContent } from "./kit/auth/AuthPage.jsx";
import { ProductCard, defaultContent as productCardDefaultContent } from "./kit/ecommerce/ProductCard.jsx";
import { StoreNavbar, defaultContent as storeNavDefaultContent } from "./kit/ecommerce/StoreNavbar.jsx";
import { CollectionGrid } from "./kit/ecommerce/CollectionGrid.jsx";
import { Pdp, defaultContent as pdpDefaultContent } from "./kit/ecommerce/Pdp.jsx";
import { CartDrawerPreview, defaultLayout as cartDrawerDefaultLayout } from "./kit/ecommerce/CartDrawerPreview.jsx";
import { Checkout, defaultContent as checkoutDefaultContent } from "./kit/ecommerce/Checkout.jsx";
import { ThankYou, defaultContent as thankYouDefaultContent } from "./kit/ecommerce/ThankYou.jsx";
import {
  StoreAuthForm,
  defaultContent as storeAuthDefaultContent,
  defaultLayout as storeAuthDefaultLayout,
} from "./kit/ecommerce/StoreAuthForm.jsx";
import { StoreFooter, defaultContent as storeFooterDefaultContent } from "./kit/ecommerce/StoreFooter.jsx";

const registry = [
  {
    id: "hero",
    name: "Hero",
    type: "marketing",
    description: "Full-bleed landing hero with alignable content and gradient overlay.",
    component: Hero,
    defaults: { content: { ...defaultContent }, layout: { ...defaultLayout } },
    controls: [
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "subheading", label: "Subheading", kind: "text" },
      { group: "content", key: "body", label: "Body", kind: "textarea" },
      { group: "content", key: "backgroundImage", label: "Background image", kind: "url" },
      { group: "layout", key: "align", label: "Align", kind: "select", options: ["left", "center", "right"] },
      {
        group: "layout",
        key: "contentPosition",
        label: "Content position",
        kind: "select",
        options: ["top", "center", "bottom"],
      },
    ],
  },
  {
    id: "about",
    name: "About",
    type: "marketing",
    description: "Portrait, bio copy, and stat highlights in a split layout.",
    component: About,
    defaults: { content: { ...aboutDefaultContent } },
    controls: [
      { group: "content", key: "eyebrow", label: "Eyebrow", kind: "text" },
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "body", label: "Body", kind: "textarea" },
      { group: "content", key: "imageSrc", label: "Portrait image", kind: "url" },
    ],
  },
  {
    id: "services",
    name: "Services",
    type: "marketing",
    description: "Three-column service cards with icons, copy, and skill tags.",
    component: Services,
    defaults: { content: { ...servicesDefaultContent } },
    controls: [
      { group: "content", key: "eyebrow", label: "Eyebrow", kind: "text" },
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "subheading", label: "Subheading", kind: "textarea" },
    ],
  },
  {
    id: "process-steps",
    name: "Process Steps",
    type: "marketing",
    description: "Numbered process timeline with icons, titles, and connecting lines.",
    component: ProcessSteps,
    defaults: { content: { ...processDefaultContent } },
    controls: [
      { group: "content", key: "eyebrow", label: "Eyebrow", kind: "text" },
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "subheading", label: "Subheading", kind: "textarea" },
    ],
  },
  {
    id: "tech-stack",
    name: "Tech Stack",
    type: "marketing",
    description: "Dual-row CSS marquee of technology chips with reduced-motion wrap.",
    component: TechStack,
    defaults: { content: { ...techStackDefaultContent } },
    controls: [
      { group: "content", key: "eyebrow", label: "Eyebrow", kind: "text" },
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "subheading", label: "Subheading", kind: "textarea" },
    ],
  },
  {
    id: "faq",
    name: "FAQ",
    type: "marketing",
    description: "Accordion of common questions with a rotating plus indicator.",
    component: Faq,
    defaults: { content: { ...faqDefaultContent } },
    controls: [
      { group: "content", key: "eyebrow", label: "Eyebrow", kind: "text" },
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "subheading", label: "Subheading", kind: "textarea" },
    ],
  },
  {
    id: "connect-cta",
    name: "Connect CTA",
    type: "marketing",
    description: "Centered closing call-to-action with accent heading and pill button.",
    component: ConnectCta,
    defaults: { content: { ...connectDefaultContent } },
    controls: [
      { group: "content", key: "eyebrow", label: "Eyebrow", kind: "text" },
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "headingAccent", label: "Accent heading", kind: "text" },
      { group: "content", key: "body", label: "Body", kind: "textarea" },
      { group: "content", key: "ctaLabel", label: "CTA label", kind: "text" },
      { group: "content", key: "ctaHref", label: "CTA href", kind: "text" },
    ],
  },
  {
    id: "simple-footer",
    name: "Simple Footer",
    type: "marketing",
    description: "Three-column footer with brand, text links, and copyright.",
    component: SimpleFooter,
    defaults: { content: { ...footerDefaultContent } },
    controls: [
      { group: "content", key: "brand", label: "Brand", kind: "text" },
      { group: "content", key: "tagline", label: "Tagline", kind: "text" },
      { group: "content", key: "copyright", label: "Copyright", kind: "text" },
    ],
  },
  {
    id: "intro-text",
    name: "Intro Text",
    type: "marketing",
    description: "Eyebrow, heading, and body intro block.",
    component: IntroText,
    defaults: { content: { ...introDefaultContent } },
    controls: [
      { group: "content", key: "eyebrow", label: "Eyebrow", kind: "text" },
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "body", label: "Body", kind: "textarea" },
    ],
  },
  {
    id: "image-with-text",
    name: "Image with Text",
    type: "marketing",
    description: "Two-column image and copy row with a flipable image side.",
    component: ImageWithText,
    defaults: { content: { ...imageTextDefaultContent }, layout: { ...imageTextDefaultLayout } },
    controls: [
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "body", label: "Body", kind: "textarea" },
      { group: "content", key: "imageSrc", label: "Image", kind: "url" },
      { group: "layout", key: "imageSide", label: "Image side", kind: "select", options: ["left", "right"] },
    ],
  },
  {
    id: "app-nav",
    name: "App Nav",
    type: "navigation",
    description: "Sticky pill navigation with current-path highlighting.",
    component: AppNav,
    defaults: { content: { ...appNavDefaultContent } },
    controls: [
      { group: "content", key: "brand", label: "Brand", kind: "text" },
      { group: "content", key: "tagline", label: "Tagline", kind: "text" },
    ],
  },
  {
    id: "auth-page",
    name: "Auth Page",
    type: "auth",
    description: "Split-screen login shell with a placeholder email and password form.",
    component: AuthPage,
    defaults: { content: { ...authDefaultContent } },
    controls: [
      { group: "content", key: "title", label: "Title", kind: "text" },
      { group: "content", key: "subtitle", label: "Subtitle", kind: "text" },
      { group: "content", key: "brand", label: "Brand", kind: "text" },
      { group: "content", key: "imageSrc", label: "Panel image", kind: "url" },
    ],
  },
  {
    id: "product-card",
    name: "Product Card",
    type: "ecommerce",
    description: "Store product tile with image, title, and price.",
    component: ProductCard,
    defaults: { content: { ...productCardDefaultContent } },
    controls: [
      { group: "content", key: "title", label: "Title", kind: "text" },
      { group: "content", key: "price", label: "Price", kind: "text" },
      { group: "content", key: "imageSrc", label: "Image", kind: "url" },
      { group: "content", key: "href", label: "Href", kind: "text" },
    ],
  },
  {
    id: "store-navbar",
    name: "Store Navbar",
    type: "ecommerce",
    description: "Store header with desktop links, cart count, and mobile hamburger.",
    component: StoreNavbar,
    defaults: { content: { ...storeNavDefaultContent } },
    controls: [
      { group: "content", key: "brand", label: "Brand", kind: "text" },
      { group: "content", key: "logoHref", label: "Logo href", kind: "text" },
    ],
  },
  {
    id: "collection-grid",
    name: "Collection Grid",
    type: "ecommerce",
    description: "In-memory product grid with category filters and price sort.",
    component: CollectionGrid,
    defaults: { content: {} },
    controls: [],
  },
  {
    id: "pdp",
    name: "PDP",
    type: "ecommerce",
    description: "Product detail page with gallery, swatches, sizes, and add to bag.",
    component: Pdp,
    defaults: { content: { ...pdpDefaultContent } },
    controls: [
      { group: "content", key: "title", label: "Title", kind: "text" },
      { group: "content", key: "price", label: "Price", kind: "text" },
      { group: "content", key: "description", label: "Description", kind: "textarea" },
    ],
  },
  {
    id: "cart-drawer",
    name: "Cart Drawer",
    type: "ecommerce",
    description: "Slide-over bag on demo Zustand state. Copy CartDrawer.jsx + demoCart.js.",
    component: CartDrawerPreview,
    defaults: { layout: { ...cartDrawerDefaultLayout } },
    controls: [{ group: "layout", key: "open", label: "Open", kind: "boolean" }],
  },
  {
    id: "checkout",
    name: "Checkout",
    type: "ecommerce",
    description: "Demo checkout form and order summary. No payments.",
    component: Checkout,
    defaults: { content: { ...checkoutDefaultContent } },
    controls: [
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "ctaLabel", label: "CTA label", kind: "text" },
    ],
  },
  {
    id: "thank-you",
    name: "Thank You",
    type: "ecommerce",
    description: "Demo order confirmation screen.",
    component: ThankYou,
    defaults: { content: { ...thankYouDefaultContent } },
    controls: [
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "body", label: "Body", kind: "textarea" },
      { group: "content", key: "orderId", label: "Order id", kind: "text" },
    ],
  },
  {
    id: "store-auth",
    name: "Store Auth",
    type: "ecommerce",
    description: "Store sign-in / sign-up form with visual social buttons only.",
    component: StoreAuthForm,
    defaults: { content: { ...storeAuthDefaultContent }, layout: { ...storeAuthDefaultLayout } },
    controls: [{ group: "layout", key: "mode", label: "Mode", kind: "select", options: ["sign-in", "sign-up"] }],
  },
  {
    id: "store-footer",
    name: "Store Footer",
    type: "ecommerce",
    description: "Light store footer distinct from the simple marketing footer.",
    component: StoreFooter,
    defaults: { content: { ...storeFooterDefaultContent } },
    controls: [
      { group: "content", key: "brand", label: "Brand", kind: "text" },
      { group: "content", key: "copyright", label: "Copyright", kind: "text" },
    ],
  },
];

export default registry;
