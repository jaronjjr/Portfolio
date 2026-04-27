import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experiences } from '../../../data/experiences'
import SectionTitle from '../../layout/SectionTitle'

export default function Experience() {
  const [active, setActive] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="relative py-20 sm:py-24 lg:py-28" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionTitle number="03" inView={inView}>Experience</SectionTitle>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[260px_1fr] gap-6 md:gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div
            className="flex md:flex-col gap-1 md:border-l-2 border-b-2 md:border-b-0 border-border-subtle overflow-x-auto md:overflow-x-visible"
            role="tablist"
          >
            {experiences.map((exp, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={active === i}
                className={`text-left px-4 py-3 md:py-3.5 md:px-5 cursor-pointer transition-all duration-300 border-b-2 md:border-b-0 md:border-l-2 md:-ml-[2px] -mb-[2px] md:mb-0 whitespace-nowrap md:whitespace-normal bg-transparent ${
                  active === i
                    ? 'border-accent-light md:border-l-accent-light md:border-b-transparent bg-accent/[0.06]'
                    : 'border-transparent'
                }`}
                onClick={() => setActive(i)}
              >
                <span className={`block text-xs sm:text-sm font-semibold transition-colors duration-300 ${
                  active === i ? 'text-accent-light' : 'text-text-secondary hover:text-accent-light'
                }`}>
                  {exp.company}
                </span>
                <span className="block text-[0.7rem] sm:text-xs text-text-muted mt-0.5">
                  {exp.role}
                </span>
              </button>
            ))}
          </div>

          <div className="min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-1">
                  {experiences[active].role}
                  <span className="text-accent-light"> @ {experiences[active].company}</span>
                </h3>
                <p className="font-mono text-xs sm:text-sm text-text-muted mb-6">
                  {experiences[active].period} · {experiences[active].location}
                </p>
                <ul className="list-none space-y-3">
                  {experiences[active].points.map((point, i) => (
                    <motion.li
                      key={i}
                      className="exp-point relative pl-6 text-text-secondary text-sm sm:text-[0.95rem] leading-relaxed"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i, duration: 0.3 }}
                    >
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
