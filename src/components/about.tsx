import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-dvh bg-white flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-right"
        >
          <p className="text-md text-[#C8102E] font-bold tracking-widest mb-3">
            من نحن
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight">
            شركة متخصصة في استيراد
            <br />
            القرطاسية والأدوات المكتبية
          </h2>

          <p className="mt-8 text-gray-600 leading-relaxed text-base md:text-lg max-w-xl text-justify">
            <span className="text-[#C8102E] font-bold">شركة الرسم</span> هي شركة
            متخصصة في استيراد وتوريد القرطاسية والأدوات المكتبية، نعمل على توفير
            منتجات عالية الجودة تلبي احتياجات المكتبات، المدارس، والشركات في
            السوق المحلي بأسعار تنافسية وتوريد منتظم.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-xl text-justify">
            نؤمن بأن الجودة والالتزام هما أساس بناء علاقات طويلة الأمد مع
            عملائنا، ونسعى دائماً لتقديم حلول موثوقة ومستدامة.
          </p>

          <div className="mt-10 flex justify-center gap-18 text-sm text-gray-700">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-[#C8102E]">
                +10
              </span>
              <span>سنوات خبرة</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-[#C8102E]">
                +2500
              </span>
              <span>منتج متنوع</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-[#C8102E]">
                +1200
              </span>
              <span>عميل دائم</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="shadow-xl"
        >
          <img
            src="/images/about.jpg"
            className="h-full w-full object-contain rounded-3xl shadow-xl"
          />

          <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
