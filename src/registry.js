import { Hero, defaultContent, defaultLayout } from "./kit/marketing/Hero.jsx";
import { About, defaultContent as aboutDefaultContent } from "./kit/marketing/About.jsx";
import { Services, defaultContent as servicesDefaultContent } from "./kit/marketing/Services.jsx";

const registry = [
  {
    id: "hero",
    name: "Hero",
    type: "marketing",
    description: "Full-bleed landing hero with alignable content and gradient overlay.",
    component: Hero,
    defaults: {
      content: { ...defaultContent },
      layout: { ...defaultLayout },
    },
    controls: [
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "subheading", label: "Subheading", kind: "text" },
      { group: "content", key: "body", label: "Body", kind: "textarea" },
      { group: "content", key: "backgroundImage", label: "Background image", kind: "url" },
      {
        group: "layout",
        key: "align",
        label: "Align",
        kind: "select",
        options: ["left", "center", "right"],
      },
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
    defaults: {
      content: { ...aboutDefaultContent },
    },
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
    defaults: {
      content: { ...servicesDefaultContent },
    },
    controls: [
      { group: "content", key: "eyebrow", label: "Eyebrow", kind: "text" },
      { group: "content", key: "heading", label: "Heading", kind: "text" },
      { group: "content", key: "subheading", label: "Subheading", kind: "textarea" },
    ],
  },
];

export default registry;
