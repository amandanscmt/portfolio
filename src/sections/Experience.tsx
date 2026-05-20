// Experience.tsx
import { motion, type Variants } from 'framer-motion'
import SectionWrapper from '../components/layout/SectionWrapper'

const experiences = [
  {
    company: 'Compass UOL',
    role: 'Programadora Trainee',
    period: 'Jun 2024 – Jan 2025',
    type: 'CLT',
    highlights: [
      'Desenvolvimento completo do front-end de um MVP corporativo com React,, TypeScript, SCSS, e Vite',
      'Autenticação de usuários com AWS Cognito e integração do Bedrock com APIs REST via Axios',
      'Deploy do projeto utilizando AWS Amplify e monitoramento de performance e erros em produção',
      'Colaboração com designers e equipe de back-end para transformar layouts em interfaces interativas',
      'Otimização de performance, responsividade e acessibilidade da aplicação',
      'Versionamento e organização de código com Git/GitHub',
      'Resolução de bugs em produção com contato a Java, RabbitMQ e Oracle DB',
    ],
    stacks: ['React', 'TypeScript', 'SCSS', 'Tailwind', 'AWS Cognito', 'Axios', 'Vite'],
  },
  {
    company: 'Compass UOL',
    role: 'Bolsista — Front-end Journey (React)',
    period: 'Abr 2023 – Set 2023',
    type: 'Bolsa',
    highlights: [
      'Aprimoramento em HTML, CSS, JavaScript, React e TypeScript com projetos práticos',
      'Certificação AWS Cloud Practitioner',
      'Adoção de metodologias ágeis e boas práticas de versionamento com Git',
    ],
    stacks: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'AWS'],
  },
  {
    company: 'Autônoma',
    role: 'Desenvolvedora Front-end Freelance',
    period: '2024 – presente',
    type: 'Freelance',
    highlights: [
      'Desenvolvimento de aplicações front-end modernas com React, Tailwind e SCSS',
      'Foco em usabilidade, responsividade e boas práticas de código',
      'Projetos para clientes como Igreja Dókimos e grupo voluntário Filhos de Deus',
    ],
    stacks: ['React', 'Tailwind', 'SCSS', 'Vite'],
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
  }),
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[3px]">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function Experience() {
  return (
    <SectionWrapper className="bg-surface" id='experience'>

      {/* Heading */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <h2 className="font-display-1 text-text-primary text-4xl md:text-5xl whitespace-nowrap uppercase">
          Experiência
        </h2>
        <div className="h-0.5 w-full md:flex-1 bg-linear-to-r from-text-primary via-accent to-transparent" />
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col gap-5">

        {/* Linha vertical — só desktop */}
        <div className="hidden lg:block absolute left-42 top-0 bottom-0 w-px bg-border" />

        {experiences.map((exp, i) => (
          <motion.div
            key={`${exp.company}-${i}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
            variants={fadeUp}
            className="flex flex-col lg:flex-row gap-4 lg:gap-8"
          >
            {/* Lado esquerdo — período e empresa */}
            <div className="lg:w-40 lg:text-right shrink-0 flex lg:flex-col gap-3 lg:gap-1 items-start lg:items-end pt-0 lg:pt-5">
              <div>
                <p className="font-mono text-[11px] text-white/35 leading-relaxed">
                  {exp.period}
                </p>
                <span className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary-soft font-mono">
                  {exp.type}
                </span>
              </div>
            </div>

            {/* Dot — só desktop */}
            <div className="hidden lg:flex items-start pt-6 shrink-0">
              <div className="w-2.5 h-2.5 rounded-full bg-accent border-2 border-background ring-2 ring-accent/30" />
            </div>

            {/* Card */}
            <div className="flex-1 rounded-2xl border border-border bg-surface p-5 lg:p-6 flex flex-col gap-4">

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                <div>
                  <h3 className="font-display-2 text-base font-semibold text-text-primary leading-snug">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-text-secondary font-medium mt-0.5">
                    {exp.company}
                  </p>
                </div>
                {/* Período visível só no mobile */}
                <p className="sm:hidden font-mono text-[11px] text-white/35">
                  {exp.period}
                </p>
              </div>

              {/* Highlights */}
              <ul className="flex flex-col gap-2">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[12.5px] text-white/55 leading-relaxed">
                    <span className="text-accent"><CheckIcon /></span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stacks */}
              <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border">
                {exp.stacks.map((stack) => (
                  <span
                    key={stack}
                    className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary-soft"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
