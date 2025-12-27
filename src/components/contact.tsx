"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("to", "info@rasm.com.ly");

    try {
      const response = await fetch("https://relay.eratech.com.ly/send", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      if (text.includes("OK")) {
        setSent(true);
        form.reset();
      } else {
        setError("حدث خطأ أثناء الإرسال");
      }
    } catch {
      setError("فشل الاتصال بالخادم");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 overflow-hidden bg-[#f7f7f7]"
    >
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#C8102E]/5 blur-3xl" />
      <div className="absolute bottom-0 -right-32 h-96 w-96 rounded-full bg-[#C8102E]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <p className="text-sm font-bold tracking-widest text-[#C8102E] mb-3">
            تواصل معنا
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            نحن هنا لخدمتك
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            يسعدنا استقبال استفساراتكم وطلبات التوريد والتعاون التجاري
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="bg-white rounded-3xl border border-black/5 p-10 space-y-12 shadow-lg"
          >
            <div className="flex gap-5 items-start">
              <Phone className="w-7 h-7 text-[#C8102E] shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">الهاتف</h4>
                <a
                  href="tel:+218912135345"
                  dir="ltr"
                  className="text-gray-600 hover:text-[#C8102E] transition"
                >
                  +218 91 213 5345
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <Mail className="w-7 h-7 text-[#C8102E] shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  البريد الإلكتروني
                </h4>
                <a
                  href="mailto:info@rasm.com.ly"
                  className="text-gray-600 hover:text-[#C8102E] transition"
                >
                  info@rasm.com.ly
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <MapPin className="w-7 h-7 text-[#C8102E] shrink-0" />
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  العنوان
                </h4>
                <p className="text-gray-600">
                  السكيرات - طريق الفوار - مصراتة | ليبيا
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-[300px] border border-black/5">
              <iframe
                src="https://maps.google.com/maps?q=32.35530691070605,15.124854267526304&z=15&output=embed"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="bg-white rounded-3xl border border-black/5 p-10 flex flex-col gap-6 shadow-lg"
          >
            <input
              name="name"
              placeholder="الاسم بالكامل"
              required
              className="p-4 rounded-xl bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-[#C8102E] outline-none"
            />

            <input
              name="email"
              type="email"
              placeholder="البريد الإلكتروني"
              required
              className="p-4 rounded-xl bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-[#C8102E] outline-none"
            />

            <input
              name="phone"
              placeholder="رقم الهاتف"
              className="p-4 rounded-xl bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-[#C8102E] outline-none"
            />

            <input
              name="subject"
              placeholder="الموضوع"
              className="p-4 rounded-xl bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-[#C8102E] outline-none"
            />

            <textarea
              name="message"
              rows={6}
              placeholder="اكتب رسالتك..."
              required
              className="p-4 rounded-xl bg-white text-gray-900 border border-gray-200 focus:ring-2 focus:ring-[#C8102E] outline-none"
            />

            {sent && (
              <p className="text-green-600 text-sm text-center">
                تم إرسال الرسالة بنجاح
              </p>
            )}
            {error && (
              <p className="text-red-600 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-4 py-4 rounded-xl bg-[#C8102E] hover:bg-[#a50d26] transition text-white font-bold text-lg disabled:opacity-50"
            >
              {loading ? "جارٍ الإرسال..." : "إرسال الرسالة"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
