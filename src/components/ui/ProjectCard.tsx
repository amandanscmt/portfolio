// ProjectCard.tsx
import { motion } from 'framer-motion'
import { cardVariants } from './animations'

export type CardSize = 'normal' | 'wide' | 'tall'

export interface Project {
  title: string
  description?: string
  topics?: string[]
  gif: string
  stacks: string[]
  repoUrl?: string
  siteUrl?: string
  badge?: string
}

interface ProjectCardProps {
  project: Project
  size?: CardSize
}

function GithubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function ProjectCard({ project, size = 'normal' }: ProjectCardProps) {
  const { title, description, topics, gif, stacks, repoUrl, siteUrl, badge } = project

const showTopics = size === 'tall' && topics && topics.length > 0
const showDescription = !!description

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="group relative flex flex-col h-full rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-700 bg-gray-800 shadow-md sm:shadow-lg hover:shadow-accent-soft/20 transition-all duration-300"
    >
      {/* Shine sweep */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl">
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-linear-to-r from-transparent via-white/5 to-transparent" />
      </div>

      {/* GIF */}
      <div className="relative flex-1 overflow-hidden bg-gray-900 min-h-0">
        <img
          src={gif}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        {/* Gradient overlay — mais forte nos cards com texto sobre a imagem */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-800 via-gray-800/20 to-transparent" />

        {/* Badge/Tag no topo esquerdo */}
        {badge && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute top-2 sm:top-3 lg:top-4 left-2 sm:left-3 lg:left-4 z-20"
          >
            <span className="text-[10px] sm:text-[11px] lg:text-xs font-semibold px-2 sm:px-2.5 lg:px-3 py-1 sm:py-1.5 rounded-full bg-linear-to-r from-primary/60 to-accent/50 text-white shadow-lg backdrop-blur-sm border border-white/20 whitespace-nowrap">
              {badge}
            </span>
          </motion.div>
        )}

        {/* Tall card: descrição e tópicos flutuam sobre o gif */}
        {size === 'tall' && (
          <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 lg:p-4 z-1">
            <h3 className="font-semibold text-white text-sm sm:text-base leading-snug mb-1">
              {title}
            </h3>
            <p className="text-[11px] sm:text-[12.5px] text-white/40 leading-relaxed mb-2">
              {description}
            </p>
            {showTopics && (
              <ul className="flex flex-col gap-0.5 sm:gap-1 mb-2">
                {topics!.map((topic) => (
                  <li key={topic} className="flex items-start gap-1 text-[10px] sm:text-[11.5px] text-white/60">
                    <span className="mt-0.5 shrink-0 text-pink-400"><CheckIcon /></span>
                    {topic}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      {/* Footer — todos os tamanhos */}
      <div className="relative z-1 shrink-0 px-2 sm:px-4 py-2 sm:py-3 lg:py-4 border-t border-gray-700/50 bg-gray-900/70 backdrop-blur-sm">

        {/* Wide e normal: título no footer */}
        {size !== 'tall' && (
          <h3 className="font-semibold text-xs sm:text-sm lg:text-[13px] text-white leading-snug mb-1 sm:mb-2">
            {title}
          </h3>
        )}

        {/* Wide: descrição curta no footer */}
        {showDescription && size !== 'tall' && (
          <p className="text-[11px] sm:text-[12px] text-white/40 leading-relaxed mb-2 sm:mb-3 line-clamp-3">
            {description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
          {/* Stacks */}
          <div className="flex flex-wrap gap-1 min-w-0">
            {stacks.slice(0, size === 'wide' ? 4 : 3).map((stack) => (
              <span
                key={stack}
                className="text-[8px] sm:text-[10px] font-mono font-semibold px-1.5 sm:px-2 py-0.5 rounded-full border border-purple-400/30 bg-purple-400/10 text-purple-300 whitespace-nowrap"
              >
                {stack}
              </span>
            ))}
            {stacks.length > (size === 'wide' ? 4 : 3) && (
              <span className="text-[8px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 text-white/40">
                +{stacks.length - (size === 'wide' ? 4 : 3)}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-yellow-400 transition-colors"
                aria-label="Repositório"
              >
                <GithubIcon />
              </a>
            )}
            {siteUrl && (
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-pink-400 transition-colors"
                aria-label="Ver site"
              >
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
