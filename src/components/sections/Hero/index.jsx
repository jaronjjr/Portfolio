import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-end pb-16 sm:pb-24 pt-32 px-6 sm:px-10 lg:px-16">
      <div className="relative z-[1] max-w-[1400px] mx-auto w-full">
        {/* Label */}
        <motion.p
          className="font-mono text-[0.65rem] text-text-muted uppercase tracking-[0.2em] mb-8 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Portfolio / ©2026
        </motion.p>

        {/* Main statement */}
        <motion.h1
          className="text-[clamp(1.8rem,5.5vw,5rem)] font-bold leading-[1.08] tracking-[-0.02em] uppercase text-text-primary max-w-[1000px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Senior software engineer building{' '}
          <span className="text-accent">scalable back-end</span>{' '}
          systems & cloud-native digital solutions.
        </motion.h1>

        {/* Tech ticker */}
        <motion.div
          className="mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <TypeAnimation
            sequence={[
              'Node.js · AWS · PostgreSQL · Oracle',
              3000,
              'Express.js · Docker · Redis · Jenkins',
              3000,
              'Spring Boot · Socket.IO · Elasticsearch',
              3000,
            ]}
            wrapper="p"
            speed={40}
            repeat={Infinity}
            className="font-mono text-[0.7rem] sm:text-xs text-text-muted tracking-wider uppercase"
          />
        </motion.div>

        {/* CTA row */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 mt-10 sm:mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-text-primary text-bg-primary text-[0.7rem] sm:text-xs font-semibold uppercase tracking-[0.15em] no-underline transition-all duration-300 hover:bg-accent hover:text-bg-primary"
          >
            View My Work
          </a>
          <span className="text-text-muted text-[0.65rem] uppercase tracking-[0.2em] hidden sm:inline">
            Scroll Down
          </span>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-text-muted/50 to-transparent animate-scroll-pulse" />
      </motion.div>
    </section>
  )
}
