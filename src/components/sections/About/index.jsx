import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../../layout/SectionTitle'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle number="01" inView={inView}>About</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-bold leading-snug tracking-tight uppercase text-text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Full-service back-end engineer that loves building{' '}
            <span className="text-accent">reliable</span> systems and leading teams.
          </motion.h2>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              IT professional with 5.5+ years of experience across the complete software
              development life cycle — requirement analysis, design, coding, testing, debugging,
              and production deployment. A creative thinker proficient in leveraging new technologies.
            </p>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              I lead and mentor back-end development teams, design application workflows,
              manage CI/CD pipelines with Docker and Jenkins, and ensure services run smoothly
              in production on AWS infrastructure.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-border-subtle">
              {[
                { num: '5.5+', label: 'Years' },
                { num: '4+', label: 'Projects' },
                { num: '3+', label: 'Teams Led' },
                { num: '5', label: 'Languages' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-xl sm:text-2xl font-bold text-text-primary">{s.num}</p>
                  <p className="text-[0.65rem] text-text-muted uppercase tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
