export const demoProducts = [
  {
    id: "trail-01",
    title: "Trail Runner",
    description: "Cushioned daily trainer for mixed terrain.",
    category: "trail",
    price: 128,
    imageSrc: "/placeholders/product.jpg",
    images: ["/placeholders/product.jpg", "/placeholders/feature.jpg"],
    href: "/products/trail-01",
    colors: [
      { id: "slate", label: "Slate", value: "#64748b" },
      { id: "sand", label: "Sand", value: "#d6c3a5" },
    ],
    sizes: ["7", "8", "9", "10", "11"],
  },
  {
    id: "city-01",
    title: "City Low",
    description: "Clean leather sneaker for weekday miles.",
    category: "city",
    price: 96,
    imageSrc: "/placeholders/hero.jpg",
    images: ["/placeholders/hero.jpg", "/placeholders/feature.jpg"],
    href: "/products/city-01",
    colors: [
      { id: "ink", label: "Ink", value: "#1c1917" },
      { id: "white", label: "White", value: "#f5f5f4" },
    ],
    sizes: ["6", "7", "8", "9", "10"],
  },
  {
    id: "kids-01",
    title: "Kids Scout",
    description: "Lightweight hook-and-loop shoe for playgrounds.",
    category: "kids",
    price: 54,
    imageSrc: "/placeholders/portrait.jpg",
    images: ["/placeholders/portrait.jpg"],
    href: "/products/kids-01",
    colors: [{ id: "sky", label: "Sky", value: "#38bdf8" }],
    sizes: ["1", "2", "3", "4"],
  },
  {
    id: "trail-02",
    title: "Ridge Mid",
    description: "Ankle support for weekend hikes.",
    category: "trail",
    price: 154,
    imageSrc: "/placeholders/feature.jpg",
    images: ["/placeholders/feature.jpg", "/placeholders/product.jpg"],
    href: "/products/trail-02",
    colors: [{ id: "pine", label: "Pine", value: "#3f6212" }],
    sizes: ["8", "9", "10", "11", "12"],
  },
];

export function getProductById(id) {
  return demoProducts.find((product) => product.id === id);
}
