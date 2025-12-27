import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", path: "#hero" },
    { name: "من نحن", path: "#about" },
    { name: "منتجاتنا", path: "#categories" },
    { name: "شركاؤنا", path: "#brands" },
    { name: "اتصل بنا", path: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md h-16" : "bg-transparent h-20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex h-full items-center justify-between">
          <div className="shrink-0">
            <Link to="/">
              <img
                src="/meta/logo.png"
                className={`transition-all duration-300 ${
                  scrolled ? "h-10" : "h-12"
                }`}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={`relative font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-[#C8102E]"
                    : "text-gray-700 hover:text-[#C8102E]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                    scrolled ? "bg-[#C8102E]" : "bg-orange-400"
                  } w-0 group-hover:w-full`}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/218912135345"
              target="_blank"
              className="group rounded-full p-1.5 flex items-center justify-center border border-gray-600 transition hover:border-green-600"
            >
              <FaWhatsapp
                size={22}
                className="text-gray-600 transition group-hover:text-green-600"
              />
            </a>
            <a
              href="mailto:info@rasm.com.ly"
              target="_blank"
              className="rounded-full p-1.5 flex items-center justify-center border border-gray-600 hover:border-gray-700 transition"
            >
              <Mail
                size={22}
                className="text-gray-600 hover:text-gray-700 transition"
              />
            </a>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={scrolled ? "text-gray-700" : "text-white"}
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <div className="flex flex-col space-y-4 px-6 py-8 text-right">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-800 hover:text-[#C8102E]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
