import { motion } from 'framer-motion'

export default function SectionTitle({ number, children, inView }) {
  return (
    <motion.div
      className="flex items-center gap-4 mb-14 sm:mb-20"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      <span className="font-mono text-[0.65rem] text-accent tracking-widest">/{number}</span>
      <span className="text-[0.65rem] uppercase tracking-[0.25em] text-text-muted">({children})</span>
      <div className="flex-1 h-px bg-border-subtle" />
    </motion.div>
  )
}
