import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { skillCategories } from '../../../data/skills'
import SectionTitle from '../../layout/SectionTitle'

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="relative py-20 sm:py-24 lg:py-28" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionTitle number="02" inView={inView}>Skills & Technologies</SectionTitle>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="bg-bg-card border border-border-subtle rounded-2xl p-5 sm:p-7 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * ci, duration: 0.5 }}
            >
              <h3 className="text-xs sm:text-sm font-semibold text-accent-light uppercase tracking-widest mb-5">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, si) => {
                  const Icon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-accent/[0.06] border border-accent/[0.12] rounded-lg text-xs sm:text-sm font-medium text-text-secondary cursor-default transition-all duration-300 hover:bg-accent/[0.12] hover:border-accent/30 hover:text-text-primary"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.15 * ci + 0.05 * si, duration: 0.3 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="text-base sm:text-lg text-accent-light flex items-center">
                        <Icon />
                      </span>
                      <span>{skill.name}</span>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
