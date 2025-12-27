import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BookOpen,
  CheckCircle,
  Pencil,
  Ruler,
  ShieldCheck,
  Star,
  Truck,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-dvh bg-[#f7f7f7] overflow-hidden"
    >
      <svg
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[500px] pointer-events-none"
      >
        <path
          d="M0,160 C200,220 400,200 600,220 800,240 1000,220 1200,230 1320,235 1440,260 1440,260 L0,260 Z"
          fill="#C8102E"
        />
      </svg>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#C8102E]/5 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-[#C8102E]/4 blur-3xl" />

        <Star
          size={48}
          className="absolute top-32 left-24 text-[#C8102E]/12 rotate-[-25deg] floating-slow"
        />
        <Pencil
          size={42}
          className="absolute top-56 right-40 text-[#C8102E]/10 rotate-20 floating"
        />
        <BookOpen
          size={46}
          className="absolute bottom-32 left-1/4 text-[#C8102E]/12 rotate-[-10deg] floating-slower"
        />
        <Ruler
          size={52}
          className="absolute bottom-40 right-24 text-[#C8102E]/20 rotate-15 floating"
        />
      </div>

      <div className="relative z-10 min-h-dvh flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="text-center text-gray-900 flex flex-col items-center justify-center">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
            >
              شركة الرسم
            </motion.h1>

            <motion.h3
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
              className="text-[#C8102E] text-xl md:text-2xl mt-4 font-semibold"
            >
              لاستيراد القرطاسية والأدوات المكتبية
            </motion.h3>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
              className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm md:text-base"
            >
              <div className="flex items-center gap-2 text-gray-700">
                <CheckCircle size={18} className="text-[#C8102E]" />
                <span>جودة معتمدة</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <Truck size={18} className="text-[#C8102E]" />
                <span>توريد سريع ومنتظم</span>
              </div>

              <div className="flex items-center gap-2 text-gray-700">
                <ShieldCheck size={18} className="text-[#C8102E]" />
                <span>أسعار تنافسية</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              className="mt-6 flex items-center gap-4"
            >
              <div className="border border-[#C8102E]/40 text-[#C8102E] px-4 py-2 rounded-full font-semibold">
                إعرف المزيد
              </div>

              <Link
                to="/products"
                className="bg-[#C8102E] hover:bg-[#a50d26] transition px-8 py-3 rounded-full font-semibold text-white"
              >
                تصفح المنتجات
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            className="relative mt-14 md:mt-0 flex justify-center md:justify-end"
          >
            <img
              src="/images/hero.png"
              className="w-3/4 drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
