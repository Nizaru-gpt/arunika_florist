import { featured } from "@/data/products";
import { motion } from "framer-motion";
import { useState } from "react";
import ProductQuickView from "./ProductQuickView";

export function FeaturedProducts() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<(typeof featured)[number] | null>(null);

  return (
    <section className="mt-10 md:mt-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header sama */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-heading text-2xl text-ink">Aneka Buket Bunga</h2>
          <div className="flex gap-2">
            <button className="h-8 w-8 rounded-full ring-1 ring-black/10 grid place-items-center">&larr;</button>
            <button className="h-8 w-8 rounded-full ring-1 ring-black/10 grid place-items-center bg-coral text-white">&rarr;</button>
          </div>
        </div>

        {/* Grid sama persis */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => { setCurrent(p); setOpen(true); }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="text-left group rounded-xl ring-1 ring-black/5 bg-white shadow-softxl overflow-hidden focus:outline-none"
            >
              <div className="bg-white relative grid place-items-center p-4">
                {p.badge && (
                  <span className="absolute top-2 left-2 rounded-full bg-coral text-white text-xs px-2 py-1">
                    {p.badge.toUpperCase()}
                  </span>
                )}
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-40 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-sm font-medium">{p.name}</h3>
                <p className="mt-1 text-coral font-semibold">{p.price}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Quick View muncul saat kartu diklik */}
      <ProductQuickView
        open={open}
        product={current}
        onClose={() => setOpen(false)}
      />
    </section>
  );
}
