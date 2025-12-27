import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const brands = [
  "/images/krish.png",
  "/images/target.jpg",
  "/images/funon.png",
  "/images/flair.jpg",
];

const Brands = () => {
  return (
    <section id="brands" className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-sm font-bold tracking-widest text-[#C8102E] mb-3">
            شركاؤنا
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            علامات تجارية نعمل معها
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            نتعامل مع موردين وعلامات تجارية موثوقة لضمان جودة المنتجات
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-10 items-center justify-center">
          {brands.map((logo, index) => (
            <motion.div
              key={logo}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Brand logo"
                className="h-16 w-auto transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
