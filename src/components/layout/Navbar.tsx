import { motion } from "framer-motion";
import profilepic from '../../assets/profilepic.jpg'

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed top-0 left-0 w-full z-50
        bg-background
        backdrop-blur-xl
        border-b border-border
        shadow-glow
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        
        <span className="flex items-center">
          <img src={profilepic} alt="Profile Picture" className="w-12 h-12 rounded-full object-cover grayscale hover:invert transition-all duration-300" />
        </span>

        <div className="flex items-center gap-8 text-sm text-text-primary">
          <a className="hover:text-text-secondary transition-colors duration-300">
            Sobre
          </a>
          <a className="hover:text-text-secondary transition-colors duration-300">
            Projetos
          </a>
          <a className="hover:text-text-secondary transition-colors duration-300">
            Contato
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
