import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-border-subtle' : ''
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between">
        <a href="#hero" className="text-text-primary font-bold text-base tracking-tight no-underline uppercase">
          Jaron<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex list-none gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
            >
              <a href={link.href} className="text-text-muted text-[0.7rem] uppercase tracking-[0.15em] font-medium no-underline transition-colors duration-300 hover:text-text-primary">
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        <a
          href="/Jaron-Jose-Raj-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block text-[0.7rem] uppercase tracking-[0.15em] font-medium px-5 py-2 border border-border-subtle rounded-full text-text-muted no-underline transition-all duration-300 hover:border-text-primary hover:text-text-primary"
        >
          Resume
        </a>

        <button
          className="md:hidden bg-transparent border-none text-text-primary text-xl cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center gap-6 py-10 bg-bg-primary border-b border-border-subtle"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-secondary text-sm uppercase tracking-[0.15em] no-underline hover:text-text-primary"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
