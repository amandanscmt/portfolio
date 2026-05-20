import { motion, type Variants } from "framer-motion";
import { cardVariants } from "../ui/animations";
import ProjectCard, { type Project } from "../ui/ProjectCard";

const projects: Project[] = [
  {
    title: "Audio",
    description:
      "Projeto de loja de headphones e headsets, com funcionalidades de navegação, detalhes do produto, carrinho de compras e checkout. Design responsivo e moderno, focado em usabilidade e experiência do usuário.",
    gif: `${import.meta.env.BASE_URL}gifs/project3.gif`,
    stacks: ["React", "API REST", "Context API", "HTML", "CSS"],
    repoUrl: "https://github.com/amandanscmt/final-challenge",
    badge: "Projeto Individual",
  },
  {
    title: "Pacientes & Cuidadores",
    description: "",
    topics: ["Projeto acadêmico", "Landing Page", "Design Responsivo"],
    gif: `${import.meta.env.BASE_URL}gifs/project6.gif`,
    stacks: ["Next.js", "Tailwind CSS", "HTML", "CRUD"],
    siteUrl: "https://guipmuller.github.io/pacientes-cuidadores-LP/",
    repoUrl: "https://github.com/guipmuller/ADS_Senac_PI_Grupo_02",
    badge: "Projeto em Equipe",
  },
  {
    title: "Plant Shop",
    description:
      "E-commerce de plantas, onde os usuários podem navegar por uma variedade de plantas, visualizar detalhes e adicionar ao carrinho.",
    gif: `${import.meta.env.BASE_URL}gifs/project2.gif`,
    stacks: ["React", "CSS", "API REST", "Clerk"],
    repoUrl: "https://github.com/WagnerSousaLima/PlantShop-ChallengeCompassUOL",
    badge: "Projeto em Equipe",
  },
  {
    title: "Register Form",
    description:
      "Primeiro projeto realizado no programa de bolsas da Compass UOL, focado em validação de usuário e conceitos de JavaScript, HTML e CSS.",
    gif: `${import.meta.env.BASE_URL}gifs/project1.gif`,
    stacks: ["HTML", "JavaScript", "CSS"],
    repoUrl: "https://github.com/amandanscmt/challenge-01",
    badge: "Projeto Individual",
  },
  {
    title: "Igreja Dókimos",
    description:
      "Site desenvolvido para a igreja Dókimos, com informações sobre horários, localização, projetos e formas de contato.",
    gif: `${import.meta.env.BASE_URL}gifs/project4.gif`,
    stacks: ["React", "Tailwind CSS", "Mobile-first", "Framer Motion", "HTML"],
    badge: "Freelance",
  },
  {
    title: "Filhos de Deus",
    description:
      "Site desenvolvido para a o grupo voluntário Filhos de Deus, com informações sobre a organização, projetos e formas de contato.",
    gif: `${import.meta.env.BASE_URL}gifs/project5.gif`,
    stacks: ["React", "Tailwind CSS", "HTML", "CSS"],
    badge: "Freelance",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function BentoGrid() {
  const [p1, p2, p3, p4, p5, p6] = projects;

  return (
    <section
      id="projects"
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 lg:py-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5"
      >
        {/* Audio — tablet: 2col | desktop: 4col linha 1 */}
        <motion.div
          variants={cardVariants}
          className="col-span-2 lg:col-span-4 min-h-52 lg:min-h-60"
        >
          <ProjectCard project={p1} size="wide" />
        </motion.div>

        {/* Pacientes — tablet: 1col | desktop: tall 2col linhas 1+2 */}
        <motion.div
          variants={cardVariants}
          className="col-span-1 lg:col-span-2 lg:row-span-1 min-h-52 lg:min-h-60"
        >
          <ProjectCard project={p2} size="tall" />
        </motion.div>

        {/* Plant Shop — tablet: 1col | desktop: 3col linha 2 */}
        <motion.div
          variants={cardVariants}
          className="col-span-1 lg:col-span-3 min-h-52 lg:min-h-60"
        >
          <ProjectCard project={p3} size="normal" />
        </motion.div>

        {/* Register Form — tablet: 2col | desktop: 3col linha 2 */}
        <motion.div
          variants={cardVariants}
          className="col-span-2 lg:col-span-3 min-h-52 lg:min-h-60"
        >
          <ProjectCard project={p4} size="normal" />
        </motion.div>

        {/* Igreja — tablet: 2col | desktop: 4col linha 3 */}
        <motion.div
          variants={cardVariants}
          className="col-span-2 lg:col-span-4 min-h-52 lg:min-h-60"
        >
          <ProjectCard project={p5} size="wide" />
        </motion.div>

        {/* Filhos de Deus — tablet: 2col | desktop: 2col linha 3 */}
        <motion.div
          variants={cardVariants}
          className="col-span-2 lg:col-span-2 min-h-52 lg:min-h-60"
        >
          <ProjectCard project={p6} size="normal" />
        </motion.div>
      </motion.div>
    </section>
  );
}
