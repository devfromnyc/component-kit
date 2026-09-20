"use client";

import { useState } from "react";
import { CartDrawer } from "./CartDrawer.jsx";
import { StoreFooter } from "./StoreFooter.jsx";
import { StoreNavbar } from "./StoreNavbar.jsx";

export function StoreShell({ children }) {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-white text-zinc-900">
      <StoreNavbar onCartClick={() => setCartOpen(true)} />
      <main className="flex-1">{children}</main>
      <StoreFooter />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
}
