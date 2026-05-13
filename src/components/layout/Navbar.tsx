import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import profilepic from '../../assets/profilepic.jpg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const navItems = [
    { label: 'Início', href: '#' },
    { label: 'Sobre', href: '#about' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-0 left-0 w-full z-50
        bg-background/95
        backdrop-blur-xl
        border-b border-border
        shadow-glow
      "
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo/Profile Picture */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center shrink-0"
          >
            <img
              src={profilepic}
              alt="Profile Picture"
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm text-text-primary ml-auto">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                whileHover={{ color: '#ec4899' }}
                className="transition-colors font-semibold hover:border-b-2 cursor-pointer"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            className="sm:hidden ml-auto p-2 text-text-primary hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="sm:hidden mt-3 pb-3 border-t border-border/30"
            >
              <div className="flex flex-col gap-2 pt-3">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick}
                    whileHover={{ x: 4 }}
                    className="px-3 py-2 text-sm text-text-primary hover:text-text-secondary hover:bg-white/5 rounded-lg transition-colors font-semibold cursor-pointer"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
