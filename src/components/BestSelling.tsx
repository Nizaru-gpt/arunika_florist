import { motion } from "framer-motion";

export function BestSelling() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-heading text-2xl text-ink mb-6">Best Selling Products</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-2xlp ring-1 ring-black/5 shadow-softxl overflow-hidden"
          >
            <img
              className="w-full h-[360px] object-cover"
              src="https://images.unsplash.com/photo-1457530378978-8bac673b8062?q=80&w=1600&auto=format&fit=crop"
              alt="Best Selling"
            />
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-coral font-medium">Hurry Up!</p>
            <h3 className="font-heading text-3xl text-ink mt-1">
              Hot Deal! Sale Up To <span className="text-coral">40% Off</span>
            </h3>
            <p className="mt-3 text-slate-600">
              Limited time only — embellish your day with fresh, premium flowers from Arunika.
            </p>

            {/* Dummy countdown (static to match layout) */}
            <div className="mt-6 grid grid-cols-4 gap-3 max-w-md">
              {[
                { label: "Days", value: "336" },
                { label: "Hours", value: "20" },
                { label: "Mins", value: "56" },
                { label: "Secs", value: "12" },
              ].map((b) => (
                <div key={b.label} className="rounded-xl ring-1 ring-black/10 py-3 text-center">
                  <div className="text-xl font-semibold">{b.value}</div>
                  <div className="text-xs text-slate-500">{b.label}</div>
                </div>
              ))}
            </div>

            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-white font-medium shadow-softxl hover:opacity-90 transition">
              Shop Now
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
