import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiStackoverflow } from 'react-icons/si'
import { socialLinks } from '../../../data/socialLinks'

const iconMap = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  'Stack Overflow': SiStackoverflow,
  Email: FiMail,
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 md:pt-20 py-24">
      <div className="relative z-[1] max-w-[1100px] mx-auto px-6">
        <motion.p
          className="font-mono text-sm sm:text-base text-accent-light mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          className="gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Jaron Jose Raj Joseph.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'I build scalable back-end systems.',
              2000,
              'I architect cloud-native APIs.',
              2000,
              'I lead engineering teams.',
              2000,
              'I craft robust Node.js services.',
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-secondary leading-tight mb-6 min-h-[1.3em]"
          />
        </motion.div>

        <motion.p
          className="max-w-[540px] text-text-secondary text-base sm:text-lg leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Senior Software Engineer with 5.5+ years of experience specializing in
          Node.js, AWS, and distributed systems. Based in Kerala, India.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-[0.95rem] font-semibold bg-accent text-white shadow-[0_4px_20px_var(--color-accent-glow)] transition-all duration-300 no-underline hover:bg-accent-light hover:-translate-y-0.5 hover:shadow-[0_8px_30px_var(--color-accent-glow)] hover:text-white"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-[0.95rem] font-semibold border border-accent-light text-accent-light bg-transparent transition-all duration-300 no-underline hover:bg-accent-light/10 hover:-translate-y-0.5 hover:text-accent-light"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className="flex gap-4 sm:gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          {socialLinks.map((s) => {
            const Icon = iconMap[s.label]
            return (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={s.label}
                className="flex items-center justify-center w-11 h-11 rounded-full border border-border-subtle text-text-muted text-xl transition-all duration-300 no-underline hover:text-accent-light hover:border-accent-light hover:-translate-y-1 hover:shadow-[0_4px_12px_var(--color-accent-glow)]"
              >
                <Icon />
              </a>
            )
          })}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="w-px h-[60px] bg-gradient-to-b from-accent-light to-transparent animate-scroll-pulse" />
      </motion.div>
    </section>
  )
}
