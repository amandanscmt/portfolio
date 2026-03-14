// About.tsx
import { motion, type Variants } from 'framer-motion'
import SectionWrapper from '../components/layout/SectionWrapper'

const stacks = [
  'React', 'TypeScript', 'Next.js', 'Tailwind',
  'AWS Cognito', 'AWS Amplify', 'REST APIs', 'Git',
]

const education = [
  { degree: 'Análise e Desenvolvimento de Sistemas', institution: 'Senac' },
  { degree: 'Letras', institution: 'UFRPE' },
]

const highlights = [
  { value: 'Mobile-first', label: 'abordagem' },
  { value: 'MVP', label: 'corporativo' },
  { value: 'A11y', label: 'acessibilidade' },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: i * 0.09 },
  }),
}

const About = () => {
  return (
    <SectionWrapper className="bg-background">

      {/* Heading — igual ao seu atual */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
        <h2 className="font-display-1 text-text-primary text-4xl md:text-5xl whitespace-nowrap uppercase">
          Sobre mim
        </h2>
        <div className="h-0.5 w-full md:flex-1 bg-linear-to-r from-text-primary via-accent to-transparent" />
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">

        {/* Coluna esquerda */}
        <div className="flex flex-col gap-5">

          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface p-6 flex flex-col gap-4"
          >
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Desenvolvedora front-end focada em criar interfaces modernas, responsivas e acessíveis.
              Trabalho principalmente com{' '}
              <span className="text-text-primary font-medium">React, TypeScript e Next.js</span>,
              aplicando princípios mobile-first e boas práticas de performance e usabilidade.
            </p>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Tenho experiência no desenvolvimento de aplicações front-end completas, integração com APIs REST,
              fluxos de autenticação com{' '}
              <span className="text-text-primary font-medium">AWS Cognito</span>{' '}
              e deploys com{' '}
              <span className="text-text-primary font-medium">AWS Amplify</span>.
              Já participei da construção de um MVP corporativo, atuando no front-end e integração com o backend.
            </p>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              Formada em{' '}
              <span className="text-text-primary font-medium">Letras pela UFRPE</span>
              {' '}e{' '}
              <span className="text-text-primary font-medium">ADS pelo Senac</span>
              {' '}— combinando visão analítica, comunicação clara e atenção a detalhes.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            variants={fadeUp}
            className="grid grid-cols-3 gap-3"
          >
            {highlights.map(({ value, label }) => (
              <div
                key={value}
                className="rounded-2xl border border-border bg-surface p-5 flex flex-col gap-1"
              >
                <span className="font-display-2 text-lg font-semibold text-text-primary leading-tight">
                  {value}
                </span>
                <span className="text-xs text-white/35">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Stack */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-4">
              stack
            </p>
            <div className="flex flex-wrap gap-2">
              {stacks.map((stack) => (
                <span
                  key={stack}
                  className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary-soft"
                >
                  {stack}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Coluna direita */}
        <div className="flex flex-col gap-5">


          {/* Formação */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            variants={fadeUp}
            className="rounded-2xl border border-border bg-surface p-6"
          >
            <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest mb-4">
              formação
            </p>
            <div className="flex flex-col">
              {education.map(({ degree, institution }, i) => (
                <div
                  key={degree}
                  className={`flex items-start gap-3 py-3 ${i < education.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-text-primary leading-snug">{degree}</p>
                    <p className="text-xs text-white/40 mt-0.5">{institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}

export default About;
