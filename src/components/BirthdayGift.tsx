import { motion } from "framer-motion";

type Card = {
  title: string;
  image: string; // path dari /public
  href?: string;
};

type Props = {
  title?: string;
  items?: Card[];
};

export function BirthdayGift({
  title = "Birthday Gift",
  items = [
    { title: "FRESH FLOWERS", image: "/pink-buket.jpeg" },
    { title: "EVERLASTING FLOWERS", image: "/special-buket.jpeg" },
    { title: "GIFTS", image: "/garbera-buket.jpeg" },
  ],
}: Props) {
  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="mb-8 md:mb-10 text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#FF6F61]" />
            <h2 className="font-heading text-2xl md:text-3xl tracking-wide text-ink">
              {title}
            </h2>
            <span className="h-1 w-1 rounded-full bg-[#FF6F61]" />
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((c, i) => {
            const Wrapper = c.href ? "a" : "div";
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Wrapper
                  {...(c.href ? { href: c.href } : {})}
                  className="group block relative"
                >
                  {/* offset shadow ping di belakang frame */}
                  <div
                    aria-hidden
                    className="absolute inset-0 translate-x-2 translate-y-2 rounded-lg bg-[#FAD9E3] opacity-70"
                  />
                  {/* frame gambar */}
                  <div className="relative rounded-lg bg-white ring-1 ring-[#ef9fb1]/40 overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-[260px] md:h-[300px] object-cover"
                    />
                  </div>

                  {/* Label dengan offset shadow hitam */}
                  <div className="relative w-max mx-auto -mt-4">
                    {/* shadow hitam offset */}
                    <span
                      aria-hidden
                      className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-black rounded-md"
                    />
                    <div className="relative px-4 py-2 rounded-md bg-[#F5E6E8] ring-1 ring-black/10">
                      <span className="text-[12px] tracking-[0.12em] text-ink/90">
                        {c.title}
                      </span>
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
