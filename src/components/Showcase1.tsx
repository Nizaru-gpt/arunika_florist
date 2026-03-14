import { motion } from "framer-motion";

type Props = {
  topRightImage?: string;   // “Beautiful Flowers”
  bottomLeftImage?: string; // “Gift Wrapping”
};

export default function Showcase1({
  topRightImage = "/pink-buket.jpeg",
  bottomLeftImage = "/special-buket.jpeg",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* diagonal band */}
      <div
        className="pointer-events-none absolute -left-[20%] top-1/2 h-[140%] w-[160%] -translate-y-1/2 rotate-[-12deg] bg-gradient-to-b from-white via-rose-50 to-white"
        aria-hidden
      />

      {/* ✅ Hapus watermark Flowers! */}

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        {/* Headline kiri */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <p className="uppercase tracking-[0.22em] text-[11px] text-slate-500">
            Spring Summer 2017
          </p>
          <h2 className="font-heading mt-2 text-3xl md:text-[34px] leading-snug text-ink">
            We’ve Unlimited Flower
            <br /> Collections
          </h2>
          <p className="mt-4 max-w-md text-slate-600">
            Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Uterque
            enim summo bono fruitur, id est voluptate barbarorum pedibu. Vero mollitia
            suscipit officiis quia nobis sapiente corrupti ipsum exer.
          </p>
          {/* ✅ Tombol shop now dihapus */}
        </div>

        {/* Kanan-atas: Beautiful Flowers */}
        <div className="relative">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="ml-auto w-full max-w-sm"
          >
            <h3 className="font-heading mb-3 text-[28px] leading-7 text-ink italic">
              Beautiful
              <br /> Flowers
            </h3>
            <div className="overflow-hidden rounded-xl ring-1 ring-black/10 shadow-softxl bg-white">
              <img
                src={topRightImage}
                alt="Beautiful Flowers"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Kiri-bawah: Gift Wrapping */}
        <div className="relative">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-md"
          >
            <div className="relative">
              {/* frame offset tipis */}
              <div className="absolute left-6 top-6 h-full w-full rounded-xl ring-1 ring-black/10" />
              <div className="overflow-hidden rounded-xl ring-1 ring-black/10 bg-white shadow-softxl">
                <img
                  src={bottomLeftImage}
                  alt="Gift Wrapping"
                  className="h-[320px] w-full object-cover"
                />
              </div>
            </div>
            <div className="mt-4 pl-1">
              <span className="font-heading text-[22px] text-ink">Gift</span>{" "}
              <span className="font-heading text-[22px] text-ink/80 italic">Wrapping</span>
            </div>
          </motion.div>
        </div>

        {/* Kanan-bawah: Organie Store */}
        <div className="relative">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <p className="text-slate-400 italic">~ Flower store ~</p>
            <h3 className="mt-2 text-4xl font-extrabold tracking-wide text-ink">ORGANIE</h3>
            <h4 className="text-xl tracking-[0.3em] text-ink">STORE</h4>
            <p className="mt-4 max-w-md text-slate-600">
              Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Uterque
              enim summo bono fruitur, id est voluptate.
            </p>
            {/* ✅ Tombol shop now dihapus */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
