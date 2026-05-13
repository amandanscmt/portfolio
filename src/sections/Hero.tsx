import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleDownloadCV = () => {
    // Aqui você pode adicionar a lógica para baixar o CV
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1smQHV2XnxMUyajkh6H_VuppJb3wJa0eO/view?usp=drive_link'; // Adicione o caminho do seu CV
    link.download = 'Amanda_Nascimento_CV.pdf';
    link.click();
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-aurora-1 flex flex-col justify-center items-start p-4 sm:p-5 lg:p-8">
      {/* Conteúdo Principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl"
      >
        <h1
          className="text-[10vw]
          sm:text-[8vw]
          md:text-5xl
          lg:text-7xl
          xl:text-[8rem]
          font-display-2
          tracking-tight
          text-white
          mix-blend-difference
          leading-none
          uppercase
          mb-2
          sm:mb-4"
        >
          Amanda Nascimento
          <span className="cursor-blink ml-1 sm:ml-2">|</span>
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base
          sm:text-lg
          md:text-2xl
          lg:text-3xl
          font-sans font-extralight tracking-tight
          text-white
          mix-blend-difference
          leading-none
          mb-6
          sm:mb-8
          md:mb-10"
        >
          Front-end Developer
        </motion.h2>

        {/* Descrição curta */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xs
          sm:text-sm
          md:text-base
          text-white/80
          mix-blend-difference
          max-w-md
          leading-relaxed
          mb-8
          sm:mb-10"
        >
          Especializada em React e TypeScript, criando interfaces modernas e responsivas com foco em experiência do usuário.
        </motion.p>

        {/* Botões - Mobile First Stack Vertical */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col
          sm:flex-row
          gap-3
          sm:gap-4
          w-full
          sm:w-auto"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={handleDownloadCV}
            className="w-full sm:w-auto cursor-pointer"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            }
          >
            Baixar CV
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={handleScrollToProjects}
            className="w-full sm:w-auto cursor-pointer"
            icon={
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            }
          >
            Ver Projetos
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator - apenas em desktop */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 text-white/50"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <polyline points="19 12 12 19 5 12" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
