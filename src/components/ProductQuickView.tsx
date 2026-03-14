import { motion, AnimatePresence } from "framer-motion";
import type { Product } from "@/data/products";
import { useEffect, useMemo } from "react";
import { useCart } from "@/context/CartContext";

type Props = {
  open: boolean;
  product: Product | null;
  onClose: () => void;
};

export default function ProductQuickView({ open, product, onClose }: Props) {
  const { addItem, openCart } = useCart();

  // close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Build WA link untuk produk saat ini
  const WA_PHONE = "6281328435855"; // 081328435855 -> 62
  const waLink = useMemo(() => {
    if (!product) return "#";
    const text =
      `Halo Arunika Florist! Saya ingin pesan:\n` +
      `- ${product.name} (${product.price})\n` +
      `Mohon konfirmasi stok.`;
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  }, [product]);

  // handler: add to cart + buka drawer cart
  const handleAddToCart = () => {
    if (!product) return;
    addItem(product, 1);
    openCart();
    onClose(); // tutup quick view biar fokus ke cart
  };

  return (
    <AnimatePresence>
      {open && product && (
        <>
          {/* backdrop (klik di luar putih = close) */}
          <motion.div
            className="fixed inset-0 bg-black/40 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* card */}
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <div className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl overflow-hidden ring-1 ring-black/5">
              {/* CLOSE di pojok kanan atas */}
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full bg-white/90 ring-1 ring-black/10 hover:bg-slate-50"
              >
                ✕
              </button>

              <div className="grid md:grid-cols-2">
                {/* image */}
                <div className="bg-white p-6 md:p-8">
                  <div className="rounded-xl overflow-hidden ring-1 ring-black/5 shadow-softxl">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[320px] md:h-[380px] object-contain bg-white"
                    />
                  </div>
                </div>

                {/* info */}
                <div className="p-6 md:p-8">
                  {product.badge && (
                    <span className="inline-block mb-3 rounded-full bg-coral/10 text-coral text-xs px-2 py-1">
                      {product.badge.toUpperCase()}
                    </span>
                  )}
                  <h3 className="font-heading text-2xl text-ink">{product.name}</h3>

                  {/* rating */}
                  {(product.rating || product.reviews) && (
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => {
                          const filled = (product.rating ?? 0) >= i + 1;
                          return (
                            <span
                              key={i}
                              className={filled ? "text-yellow-500" : "text-slate-300"}
                            >
                              ★
                            </span>
                          );
                        })}
                      </div>
                      <span className="text-slate-500">
                        {product.rating?.toFixed(1)} ({product.reviews ?? 0})
                      </span>
                    </div>
                  )}

                  {/* desc */}
                  {product.desc && <p className="mt-3 text-slate-600">{product.desc}</p>}

                  {/* ingredients */}
                  {product.ingredients && product.ingredients.length > 0 && (
                    <ul className="mt-4 space-y-1 text-sm text-slate-700">
                      {product.ingredients.map((x) => (
                        <li key={x} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-slate-400 inline-block" />
                          {x}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* price */}
                  <div className="mt-5 flex items-end gap-3">
                    {product.oldPrice && (
                      <span className="text-slate-400 line-through">{product.oldPrice}</span>
                    )}
                    <span className="text-2xl font-semibold text-coral">{product.price}</span>
                  </div>

                  {/* actions: Add to Cart + WA */}
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <button
                      onClick={handleAddToCart}
                      className="rounded-full px-6 py-2.5 bg-coral text-white shadow-softxl hover:opacity-90"
                    >
                      Add to Cart
                    </button>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full px-5 py-2 ring-1 ring-black/10 hover:bg-slate-50 inline-flex items-center gap-2"
                    >
                      Pesan via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
