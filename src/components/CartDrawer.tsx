import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { isOpen, closeCart, items, inc, dec, removeItem, subtotal } = useCart();

  const WA_PHONE = "6281328435855"; // 081328435855 -> 62 format
  const waMsg = (() => {
    const lines = items.map(
      (i) => `- ${i.product.name} x${i.qty} (${i.product.price})`
    );
    const text =
      `Halo Arunika Florist! Saya ingin order:\n` +
      lines.join("\n") +
      `\nSubtotal: $${subtotal.toFixed(2)}\nMohon konfirmasi stok.`;
    return `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  })();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />
          <motion.aside
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[90] shadow-2xl ring-1 ring-black/5 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-heading text-xl">Your Cart</h3>
              <button onClick={closeCart} aria-label="Close" className="h-8 w-8 grid place-items-center rounded-full hover:bg-slate-100">✕</button>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-4">
              {items.length === 0 ? (
                <p className="text-slate-500">Keranjangmu kosong.</p>
              ) : (
                items.map((i) => (
                  <div key={i.product.id} className="flex gap-3 items-center">
                    <img
                      src={i.product.image}
                      alt={i.product.name}
                      className="h-16 w-16 rounded-lg ring-1 ring-black/10 object-contain bg-white"
                    />
                    <div className="flex-1">
                      <div className="font-medium">{i.product.name}</div>
                      <div className="text-sm text-slate-500">{i.product.price}</div>
                      <div className="mt-2 flex items-center gap-2">
                        <button className="h-7 w-7 ring-1 ring-black/10 rounded" onClick={() => dec(i.product.id)}>-</button>
                        <span className="px-2">{i.qty}</span>
                        <button className="h-7 w-7 ring-1 ring-black/10 rounded" onClick={() => inc(i.product.id)}>+</button>
                        <button className="ml-3 text-slate-500 hover:text-red-500 text-sm" onClick={() => removeItem(i.product.id)}>Remove</button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-4 border-t">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-500">Subtotal</span>
                <span className="text-lg font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <a
                href={waMsg}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center rounded-full bg-coral text-white py-3 shadow-softxl hover:opacity-90"
              >
                Checkout via WhatsApp
              </a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
