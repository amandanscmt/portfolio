import { motion, type Variants } from 'framer-motion'
import { cardVariants } from '../ui/animations'
import ProjectCard, { type Project } from '../ui/ProjectCard';

const projects: Project[] = [
  {
    title: 'Projeto 1',
    description: 'Descrição curta do projeto, o problema que resolve e o impacto gerado.',
    topics: [
      'Feature principal do projeto',
      'Outra feature relevante',
      'Deploy / infra / diferencial',
    ],
    gif: `${import.meta.env.BASE_URL}gifs/project1.gif`,
    stacks: ['React', 'TypeScript', 'Node.js'],
    repoUrl: 'https://github.com/voce/projeto1',
    siteUrl: 'https://projeto1.com',
  },
  {
    title: 'Projeto 2',
    description: 'App mobile ou projeto com interface vertical.',
    gif: `${import.meta.env.BASE_URL}gifs/project2.gif`,
    stacks: ['React Native', 'Expo'],
    repoUrl: 'https://github.com/voce/projeto2',
  },
  {
    title: 'Projeto 3',
    description: 'Descrição do projeto 3.',
    gif: `${import.meta.env.BASE_URL}gifs/project3.gif`,
    stacks: ['Next.js', 'Tailwind'],
    siteUrl: 'https://projeto3.com',
  },
  {
    title: 'Projeto 4',
    description: 'Descrição do projeto 4, pode ser um pouco mais longa aqui.',
    gif: `${import.meta.env.BASE_URL}gifs/project4.gif`,
    stacks: ['Python', 'FastAPI', 'PostgreSQL'],
    repoUrl: 'https://github.com/voce/projeto4',
    siteUrl: 'https://projeto4.com',
  },
  {
    title: 'Projeto 5',
    description: 'Descrição do projeto 5.',
    gif: `${import.meta.env.BASE_URL}gifs/project5.gif`,
    stacks: ['Vue', 'Pinia'],
    siteUrl: 'https://projeto5.com',
  },
  {
    title: 'Projeto 6',
    description: 'Descrição do projeto 6.',
    gif: `${import.meta.env.BASE_URL}gifs/project6.gif`,
    stacks: ['Three.js', 'GSAP'],
    repoUrl: 'https://github.com/voce/projeto6',
  },
]

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export default function BentoGrid() {
  const [p1, p2, p3, p4, p5, p6] = projects

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-16">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-3 grid-rows-[200px_200px_200px] gap-3"
      >
        {/* P1 — wide, linha 1 */}
        <motion.div variants={cardVariants} className="col-span-2 row-span-1">
          <ProjectCard project={p1} size="wide" />
        </motion.div>

        {/* P2 — tall, linhas 1+2 */}
        <motion.div variants={cardVariants} className="col-span-1 row-span-2">
          <ProjectCard project={p2} size="tall" />
        </motion.div>

        {/* P3 — normal, linha 2 col 1 */}
        <motion.div variants={cardVariants} className="col-span-1 row-span-1">
          <ProjectCard project={p3} size="normal" />
        </motion.div>

        {/* P4 — wide, linha 2 col 2 (ocupa col 2 da linha 2) */}
        <motion.div variants={cardVariants} className="col-span-1 row-span-1">
          <ProjectCard project={p4} size="normal" />
        </motion.div>

        {/* P5 — wide, linha 3 */}
        <motion.div variants={cardVariants} className="col-span-2 row-span-1">
          <ProjectCard project={p5} size="wide" />
        </motion.div>

        {/* P6 — normal, linha 3 col 3 */}
        <motion.div variants={cardVariants} className="col-span-1 row-span-1">
          <ProjectCard project={p6} size="normal" />
        </motion.div>
      </motion.div>
    </section>
  )
}
