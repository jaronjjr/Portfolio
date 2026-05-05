import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillCategories } from '../../../data/skills'
import SectionTitle from '../../layout/SectionTitle'

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="relative py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle number="02" inView={inView}>Skills</SectionTitle>

        <motion.p
          className="text-text-secondary text-sm sm:text-base max-w-[550px] mb-14 sm:mb-20"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Sharp engineering, smart architecture, and a deep commitment to clean, maintainable code.
        </motion.p>

        <div>
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="border-t border-border-subtle py-7 sm:py-9 grid grid-cols-1 sm:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-3 sm:gap-8 items-start"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * ci + 0.2, duration: 0.4 }}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-[0.6rem] text-accent tracking-wider">/00{ci + 1}</span>
                <h3 className="text-xs sm:text-sm font-semibold text-text-primary uppercase tracking-wide">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon
                  return (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-border-subtle text-xs sm:text-sm text-text-secondary transition-all duration-300 hover:border-accent/40 hover:text-text-primary"
                    >
                      <Icon className="text-accent text-sm" />
                      {skill.name}
                    </span>
                  )
                })}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border-subtle" />
        </div>
      </div>
    </section>
  )
}
