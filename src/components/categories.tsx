import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const categories = [
  { title: "القرطاسية المدرسية", image: "/images/cat-1.jpg" },
  { title: "الأدوات المكتبية", image: "/images/cat-2.jpg" },
  { title: "المستلزمات التعليمية", image: "/images/cat-3.jpg" },
  { title: "الأدوات الفنية", image: "/images/cat-4.jpg" },
  { title: "الورق والطباعة", image: "/images/cat-5.jpg" },
  { title: "الألعاب", image: "/images/cat-6.jpg" },
];

const Categories = () => {
  return (
    <section
      id="categories"
      className="relative w-full bg-[#f7f7f7] py-28 overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#C8102E]/5 blur-3xl" />
      <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-[#C8102E]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold tracking-widest text-[#C8102E] mb-3">
            منتجاتنا
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            تصنيفات المنتجات
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            تشكيلة متكاملة من القرطاسية والأدوات المكتبية لتلبية احتياجات مختلف
            القطاعات
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="group relative h-[340px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-0 w-full p-6 text-right">
                <h3 className="text-lg font-bold text-white leading-snug">
                  {cat.title}
                </h3>

                <span className="mt-2 inline-block h-0.5 w-10 bg-[#C8102E] transition-all duration-500 group-hover:w-16" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
