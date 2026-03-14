import React, { createContext, useContext, useMemo, useState } from "react";
import type { Product } from "@/data/products";

type CartItem = { product: Product; qty: number };

type CartContextType = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (p: Product, qty?: number) => void;
  removeItem: (id: number) => void;
  inc: (id: number) => void;
  dec: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextType | null>(null);

function parsePrice(p: Product) {
  const n = parseFloat((p.price || "0").replace(/[^0-9.]/g, ""));
  return isNaN(n) ? 0 : n;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product: Product, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.product.id === product.id);
      if (found) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [...prev, { product, qty }];
    });
  };

  const removeItem = (id: number) =>
    setItems((prev) => prev.filter((i) => i.product.id !== id));

  const inc = (id: number) =>
    setItems((prev) =>
      prev.map((i) => (i.product.id === id ? { ...i, qty: i.qty + 1 } : i))
    );

  const dec = (id: number) =>
    setItems((prev) =>
      prev
        .map((i) =>
          i.product.id === id ? { ...i, qty: Math.max(1, i.qty - 1) } : i
        )
        .filter((i) => i.qty > 0)
    );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const count = items.reduce((a, b) => a + b.qty, 0);
  const subtotal = items.reduce((a, b) => a + parsePrice(b.product) * b.qty, 0);

  const value = useMemo(
    () => ({
      items,
      isOpen,
      addItem,
      removeItem,
      inc,
      dec,
      openCart,
      closeCart,
      count,
      subtotal,
    }),
    [items, isOpen, count, subtotal]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
