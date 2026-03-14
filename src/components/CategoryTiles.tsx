import { motion } from "framer-motion";

const tiles = [
  {
    title: "ROSE",
    image: "rose.jpeg", // merah
  },
  {
    title: "CARNELIAN",
    image: "carnelian-orange.jpeg", // oranye
  },
  {
    title: "GERBERA",
    image: "gerbera-pink.jpeg", // pink
  },
];

export function CategoryTiles() {
  return (
    // Tarik naik agar overlap dengan Hero
    <section className="-mt-10 md:-mt-16 relative z-20">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-3 gap-6">
        {tiles.map((t, i) => (
          <motion.a
            key={t.title}
            href="#"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="group relative rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-softxl"
          >
            <img
              src={t.image}
              alt={t.title}
              className="w-full h-48 md:h-56 object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            {/* overlay gelap tipis */}
            <div className="absolute inset-0 bg-black/25" />
            {/* label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-semibold tracking-wide text-lg">
                {t.title}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
