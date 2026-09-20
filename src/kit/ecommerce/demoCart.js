import { create } from "zustand";

export const useDemoCart = create((set, get) => ({
  items: [],
  addItem: (item) =>
    set((state) => {
      const key = `${item.id}-${item.color || ""}-${item.size || ""}`;
      const existing = state.items.find((row) => row.key === key);
      if (existing) {
        return {
          items: state.items.map((row) =>
            row.key === key ? { ...row, quantity: row.quantity + (item.quantity || 1) } : row,
          ),
        };
      }
      return {
        items: [...state.items, { ...item, key, quantity: item.quantity || 1 }],
      };
    }),
  removeItem: (key) => set((state) => ({ items: state.items.filter((row) => row.key !== key) })),
  clear: () => set({ items: [] }),
  itemCount: () => get().items.reduce((sum, row) => sum + row.quantity, 0),
  total: () => get().items.reduce((sum, row) => sum + row.price * row.quantity, 0),
}));
