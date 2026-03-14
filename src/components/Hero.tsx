import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url('/hero-tulips.jpeg')", // <-- dari /public
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay tipis biar teks kebaca */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-28 md:pt-32 md:pb-40">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-lg"
        >
          <p className="uppercase tracking-wide text-sm text-white/90 mb-2">New Arrivals</p>
          <h1 className="font-heading text-4xl md:text-5xl text-white leading-tight">
            For Mother's Day!
          </h1>
          <p className="mt-3 text-white/90">Exclusive Offer On This Week</p>
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-white font-medium shadow-softxl hover:opacity-90 transition">
            Shop Now
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
