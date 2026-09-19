import { Hero, defaultContent, defaultLayout } from "./kit/marketing/Hero.jsx";

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
];

export default registry;
