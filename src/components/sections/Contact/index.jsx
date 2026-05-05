import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { contactInfo } from '../../../data/socialLinks'
import SectionTitle from '../../layout/SectionTitle'

const iconMap = { Email: FiMail, Phone: FiPhone, Location: FiMapPin }

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="contact" className="relative py-24 sm:py-32 lg:py-40 px-6 sm:px-10 lg:px-16" ref={ref}>
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle number="05" inView={inView}>Contact</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight uppercase text-text-primary leading-snug">
              Have a project in mind?
            </h2>
            <p className="text-text-secondary text-sm sm:text-base mt-4 max-w-[400px] leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of something great.
            </p>
            <a
              href="mailto:jaronjose18@gmail.com"
              className="inline-flex items-center gap-2 mt-8 sm:mt-10 px-7 sm:px-9 py-3.5 rounded-full bg-text-primary text-bg-primary text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.15em] no-underline transition-all duration-300 hover:bg-accent"
            >
              Let's Talk
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {contactInfo.map((item) => {
              const Icon = iconMap[item.label]
              return (
                <div key={item.label} className="flex items-center gap-4 py-5 border-b border-border-subtle">
                  <span className="text-accent text-base"><Icon /></span>
                  <div>
                    <span className="block text-[0.6rem] text-text-muted uppercase tracking-[0.2em] mb-0.5">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="text-text-primary text-sm sm:text-base font-medium no-underline hover:text-accent transition-colors duration-300">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-text-primary text-sm sm:text-base font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
