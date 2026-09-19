function Stub() {
  return null;
}

const registry = [
  {
    id: "stub",
    name: "Stub",
    type: "marketing",
    description: "Temporary registry row for catalog tests.",
    component: Stub,
    defaults: { content: { heading: "Stub" } },
    controls: [{ group: "content", key: "heading", label: "Heading", kind: "text" }],
  },
];

export default registry;
