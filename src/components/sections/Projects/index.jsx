import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '../../../data/projects'
import SectionTitle from '../../layout/SectionTitle'

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="relative py-20 sm:py-24 lg:py-28" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionTitle number="04" inView={inView}>Projects</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="project-card group relative overflow-hidden bg-bg-card border border-border-subtle rounded-2xl p-6 sm:p-8 flex flex-col backdrop-blur-sm transition-all duration-300 hover:border-accent/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              whileHover={{ y: -6 }}
              style={{ '--card-accent': project.color }}
            >
              <div className="flex justify-between items-start mb-5">
                <div style={{ color: project.color }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <span className="font-mono text-[0.7rem] sm:text-xs text-text-muted whitespace-nowrap">
                  {project.period}
                </span>
              </div>

              <h3
                className="text-base sm:text-lg font-bold text-text-primary mb-3 transition-colors duration-300"
                style={{ '--hover-color': project.color }}
              >
                <span className="group-hover:text-[var(--hover-color)]">{project.title}</span>
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[0.65rem] sm:text-[0.72rem] text-text-muted px-2.5 py-1 bg-white/[0.03] rounded border border-white/[0.05]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
