import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { experiences } from '../../../data/experiences'
import SectionTitle from '../../layout/SectionTitle'

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="experience" className="relative py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle number="03" inView={inView}>Experience</SectionTitle>

        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="border-t border-border-subtle py-8 sm:py-10 grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-4 md:gap-14 items-start"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.2, duration: 0.4 }}
            >
              <div>
                <p className="font-mono text-[0.6rem] text-accent tracking-wider uppercase mb-2">{exp.period}</p>
                <h3 className="text-base sm:text-lg font-bold text-text-primary leading-snug">{exp.role}</h3>
                <p className="text-xs text-text-muted mt-1">{exp.company}</p>
                <p className="text-xs text-text-muted">{exp.location}</p>
              </div>

              <ul className="list-none space-y-3 mt-1 md:mt-0">
                {exp.points.map((point, pi) => (
                  <li key={pi} className="exp-point relative pl-5 text-text-secondary text-sm leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
          <div className="border-t border-border-subtle" />
        </div>
      </div>
    </section>
  )
}
