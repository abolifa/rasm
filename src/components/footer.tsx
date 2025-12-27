import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="text-right">
            <img src="/meta/logo.png" className="h-10 mb-4 ml-auto" />

            <p className="text-gray-600 leading-relaxed text-sm">
              شركة الرسم لاستيراد القرطاسية والأدوات المكتبية، نوفر منتجات عالية
              الجودة لتلبية احتياجات المكتبات، المدارس، والشركات داخل السوق
              المحلي.
            </p>
          </div>

          <div className="text-right">
            <h4 className="font-bold text-gray-900 mb-4">روابط سريعة</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-[#C8102E] transition"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-600 hover:text-[#C8102E] transition"
                >
                  منتجاتنا
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-[#C8102E] transition"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-[#C8102E] transition"
                >
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="font-bold text-gray-900 mb-4">التصنيفات</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-600">القرطاسية المدرسية</li>
              <li className="text-gray-600">الأدوات المكتبية</li>
              <li className="text-gray-600">الأدوات الفنية</li>
              <li className="text-gray-600">الورق والطباعة</li>
              <li className="text-gray-600">الألعاب</li>
            </ul>
          </div>

          <div className="text-right">
            <h4 className="font-bold text-gray-900 mb-4">معلومات التواصل</h4>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3 justify-start">
                <Phone className="w-5 h-5 text-[#C8102E]" />
                <a
                  href="tel:+218912135345"
                  dir="ltr"
                  className="text-gray-600 hover:text-[#C8102E] transition"
                >
                  +218 91 213 5345
                </a>
              </div>

              <div className="flex items-start gap-3 justify-start">
                <Mail className="w-5 h-5 text-[#C8102E]" />
                <a
                  href="mailto:info@rasm.com.ly"
                  className="text-gray-600 hover:text-[#C8102E] transition"
                >
                  info@rasm.com.ly
                </a>
              </div>

              <div className="flex items-start gap-3 justify-start">
                <MapPin className="w-5 h-5 text-[#C8102E]" />
                <span className="text-gray-600">
                  السكيرات - طريق الفوار - مصراتة
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-black/5 flex items-center justify-center gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-[#C8102E]">شركة الرسم</span>. جميع الحقوق
            محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
