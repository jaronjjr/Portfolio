import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-primary/85 backdrop-blur-xl border-b border-border-subtle py-3'
          : 'py-4'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="font-mono text-xl font-semibold text-text-primary no-underline hover:text-text-primary">
          <span className="text-accent-light">&lt;</span>
          JJ
          <span className="text-accent-light"> /&gt;</span>
        </a>

        <ul className="hidden md:flex list-none gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <a
                href={link.href}
                className="relative text-text-secondary text-sm font-medium transition-colors duration-200 no-underline hover:text-accent-light after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent-light after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <a
          href="/Jaron-Jose-Raj-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block text-sm font-medium px-5 py-2 border border-accent-light rounded-md text-accent-light no-underline transition-all duration-300 hover:bg-accent-light/10 hover:text-accent-light"
        >
          Resume
        </a>

        <button
          className="md:hidden bg-transparent border-none text-text-primary text-2xl cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="flex md:hidden flex-col items-center gap-5 py-6 bg-bg-primary/95 backdrop-blur-xl border-b border-border-subtle overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary text-base font-medium no-underline hover:text-accent-light"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Jaron-Jose-Raj-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-accent-light rounded-md text-accent-light no-underline"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
