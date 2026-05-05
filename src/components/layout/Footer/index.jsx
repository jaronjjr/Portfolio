import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiStackoverflow } from 'react-icons/si'

const links = [
  { icon: <FiGithub />, href: 'https://github.com/jaronjjr', label: 'GitHub' },
  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/jaron-jose', label: 'LinkedIn' },
  { icon: <SiStackoverflow />, href: 'https://stackoverflow.com/users/jaron-jose', label: 'Stack Overflow' },
  { icon: <FiMail />, href: 'mailto:jaronjose18@gmail.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle px-6 sm:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto py-14 sm:py-20">
        {/* Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight uppercase text-text-primary">
              Jaron<span className="text-accent">.</span>
            </h2>
            <p className="text-[0.6rem] text-text-muted uppercase tracking-[0.2em] mt-2">
              Senior Software Engineer
            </p>
          </div>

          <div className="flex gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel={l.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={l.label}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-border-subtle text-text-muted text-sm no-underline transition-all duration-300 hover:border-accent hover:text-accent"
              >
                {l.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border-subtle mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.6rem] text-text-muted uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} Jaron Jose Raj Joseph</p>
          <p>Kerala, India</p>
        </div>
      </div>
    </footer>
  )
}
