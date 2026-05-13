import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/amandanscmt',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/amandanscmnt',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.811 0-9.728h3.554v1.375c.427-.659 1.191-1.598 2.898-1.598 2.117 0 3.704 1.381 3.704 4.356v5.595zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.77-1.703 1.954-1.703 1.183 0 1.915.752 1.94 1.703 0 .946-.757 1.704-1.979 1.704zm1.58 11.597H3.635V9.724h3.282v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: 'mailto:apmnsilva@gmail.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 5L2 7" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-primary border-t border-gray-700/50" id='contact'>
      {/* Gradient decorativo no topo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Grid layout - mobile first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-10">
          {/* Coluna 1: Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="text-lg sm:text-xl font-display-2 text-text-primary uppercase tracking-wide mb-2">
              APMNS
            </h3>
            <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
              Front-end Developer focada em criar experiências web modernas e inclusivas.
            </p>
          </motion.div>

          {/* Coluna 2: Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <h4 className="text-sm sm:text-base font-semibold text-white uppercase tracking-wide mb-3 sm:mb-4">
              Links Rápidos
            </h4>
            <nav className="flex flex-col gap-2 text-xs sm:text-sm">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-white/60 hover:text-text-primary hover:font-semibold transition-colors duration-300 cursor-pointer"
              >
                Projetos
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-white/60 hover:text-text-primary hover:font-semibold transition-colors duration-300 cursor-pointer"
              >
                Sobre
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-white/60 hover:text-text-primary hover:font-semibold transition-colors duration-300 cursor-pointer"
              >
                Contato
              </a>
            </nav>
          </motion.div>

          {/* Coluna 3: Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <h4 className="text-sm sm:text-base font-semibold text-white uppercase tracking-wide mb-3 sm:mb-4">
              Conecte-se
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/60 hover:text-text-primary hover:font-semibold transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700/30 mb-6 sm:mb-8" />

        {/* Bottom section - mobile first */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs sm:text-sm text-white/50"
        >
          <p>
            &copy; {currentYear} Amanda Nascimento. Todos os direitos reservados.
          </p>
          <p className="text-text-primary/60">
            Feito com React, TypeScript & Tailwind CSS ✨
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;