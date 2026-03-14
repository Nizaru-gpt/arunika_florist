import React from "react";
import { CartProvider, useCart } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";

import { Hero } from "@/components/Hero";
import { CategoryTiles } from "@/components/CategoryTiles";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { BestSelling } from "@/components/BestSelling";
import { Footer } from "@/components/Footer";
import Showcase1 from "@/components/Showcase1";  // ⬅️ pakai Showcase1

function Header() {
  const { openCart, count } = useCart();
  return (
    <header className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-heading text-ink">
          Arunika <span className="text-coral">Florist</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm">
          <a className="hover:text-coral" href="#">Home</a>
          <a className="hover:text-coral" href="#">About</a>
          <a className="hover:text-coral" href="#">Shop</a>
          <a className="hover:text-coral" href="#">Blogs</a>
          <a className="hover:text-coral" href="#">Contact</a>
        </nav>
        <button onClick={openCart} className="text-sm hover:text-coral">
          🛒 <span className="font-medium">Cart</span> ({count})
        </button>
      </div>
    </header>
  );
}

export default function App(): JSX.Element {
  return (
    <CartProvider>
      <Header />

      <Hero />
      <CategoryTiles />
      <FeaturedProducts />

      {/* ⬇️ showcase section */}
      <Showcase1 
        topRightImage="/pink-buket.jpeg" 
        bottomLeftImage="/special-buket.jpeg" 
      />

      <BestSelling />
      <Footer />

      <CartDrawer />
    </CartProvider>
  );
}
