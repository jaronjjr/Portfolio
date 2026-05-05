import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { projects } from '../../../data/projects'
import SectionTitle from '../../layout/SectionTitle'

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="projects" className="relative py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle number="04" inView={inView}>Portfolio</SectionTitle>

        <motion.h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight uppercase text-text-primary mb-14 sm:mb-20 max-w-[600px]"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Selected <span className="text-accent">Work</span>
        </motion.h2>

        <div>
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className="group border-t border-border-subtle py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-4 lg:gap-14 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.2, duration: 0.4 }}
            >
              <div>
                <p className="font-mono text-[0.6rem] text-accent tracking-wider uppercase mb-2">{project.period}</p>
                <h3 className="text-lg sm:text-xl font-bold text-text-primary transition-colors duration-300 group-hover:text-accent">
                  {project.title}
                </h3>
              </div>

              <div>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.6rem] text-text-muted px-3 py-1.5 rounded-full border border-border-subtle uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-border-subtle" />
        </div>
      </div>
    </section>
  )
}
