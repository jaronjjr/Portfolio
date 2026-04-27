import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiStackoverflow } from 'react-icons/si'
import { contactInfo } from '../../../data/socialLinks'
import SectionTitle from '../../layout/SectionTitle'

const iconMap = {
  Email: FiMail,
  Phone: FiPhone,
  Location: FiMapPin,
}

const socialDisplayLinks = [
  { icon: <FiGithub />, label: 'GitHub', href: 'https://github.com/jaronjjr' },
  { icon: <FiLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/in/jaron-jose' },
  { icon: <SiStackoverflow />, label: 'Stack Overflow', href: 'https://stackoverflow.com/users/jaron-jose' },
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="contact" className="relative py-20 sm:py-24 lg:py-28" ref={ref}>
      <div className="max-w-[1100px] mx-auto px-6">
        <SectionTitle number="05" inView={inView}>Get In Touch</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">Let's work together</h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of something great. Whether you have a
              question or just want to say hi, feel free to reach out.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {contactInfo.map((item) => {
                const Icon = iconMap[item.label]
                return (
                  <div key={item.label} className="flex items-center gap-4">
                    <span className="flex items-center justify-center w-11 h-11 rounded-[10px] bg-accent/[0.08] border border-accent/[0.15] text-accent-light text-lg shrink-0">
                      <Icon />
                    </span>
                    <div>
                      <span className="block text-[0.7rem] sm:text-xs text-text-muted uppercase tracking-wide mb-0.5">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a href={item.href} className="text-sm sm:text-[0.95rem] text-text-secondary no-underline hover:text-accent-light transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm sm:text-[0.95rem] text-text-secondary">{item.value}</span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-3">
              {socialDisplayLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg border border-border-subtle text-text-secondary text-xs sm:text-sm font-medium no-underline transition-all duration-300 hover:border-accent-light hover:text-accent-light hover:bg-accent/[0.06]"
                  whileHover={{ y: -3, scale: 1.05 }}
                  aria-label={link.label}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="bg-bg-card border border-border-subtle rounded-2xl sm:rounded-[20px] p-8 sm:p-12 text-center backdrop-blur-sm">
              <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
                <span className="w-10 h-px bg-accent-light opacity-30" />
                <span className="w-2 h-2 rounded-full bg-accent-light animate-pulse-dot" />
                <span className="w-10 h-px bg-accent-light opacity-30" />
              </div>

              <h4 className="text-lg sm:text-xl font-bold text-text-primary mb-3">Ready to start a project?</h4>
              <p className="text-text-secondary leading-relaxed mb-7">
                Drop me an email and let's bring your ideas to life.
              </p>
              <a
                href="mailto:jaronjose18@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-[0.95rem] font-semibold bg-accent text-white shadow-[0_4px_20px_var(--color-accent-glow)] transition-all duration-300 no-underline hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--color-accent-glow)] hover:text-white"
              >
                <FiMail /> Say Hello
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
