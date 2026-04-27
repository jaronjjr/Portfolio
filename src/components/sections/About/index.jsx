import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiServer, FiCloud, FiDatabase, FiUsers } from 'react-icons/fi'
import SectionTitle from '../../layout/SectionTitle'

const highlights = [
  { icon: <FiServer />, label: 'Back-end Development', desc: 'Node.js & Java' },
  { icon: <FiCloud />, label: 'Cloud Architecture', desc: 'AWS Services' },
  { icon: <FiDatabase />, label: 'Database Design', desc: 'PostgreSQL, Oracle, Redis' },
  { icon: <FiUsers />, label: 'Team Leadership', desc: 'Mentoring & Delivery' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="relative py-20 sm:py-24 lg:py-28" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionTitle number="01" inView={inView}>About Me</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-4"
          >
            <p className="text-text-secondary text-base leading-relaxed">
              I'm a Senior Software Engineer with over 5.5 years of hands-on experience
              across the full software development lifecycle — from requirement analysis
              and system design to coding, testing, and production deployment.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              My core expertise lies in building scalable back-end services with
              <span className="text-accent-light font-medium"> Node.js</span> and
              <span className="text-accent-light font-medium"> Express.js</span>, deployed on
              <span className="text-accent-light font-medium"> AWS</span> infrastructure. I've worked with
              government clients, enterprise applications, and mobile platforms, always
              focused on clean architecture and reliable delivery.
            </p>
            <p className="text-text-secondary text-base leading-relaxed">
              Beyond writing code, I lead and mentor back-end development teams,
              design application workflows, manage CI/CD pipelines, and ensure our
              services run smoothly in production.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-start gap-3.5 p-4 sm:p-5 bg-bg-card border border-border-subtle rounded-xl backdrop-blur-sm transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(99,102,241,0.15)' }}
              >
                <div className="text-xl text-accent-light shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <h4 className="text-sm font-semibold text-text-primary mb-0.5">{item.label}</h4>
                  <p className="text-xs text-text-muted">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
