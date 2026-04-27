import { motion } from 'framer-motion'

export default function SectionTitle({ number, children, inView }) {
  return (
    <motion.div
      className="section-title flex items-center gap-4 text-2xl sm:text-3xl font-bold mb-10 sm:mb-12"
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <span className="font-mono text-base text-accent-light font-medium">{number}.</span> {children}
    </motion.div>
  )
}
