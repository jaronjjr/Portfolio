export default function Footer() {
  return (
    <footer className="text-center py-10 border-t border-border-subtle text-sm text-text-secondary">
      <div className="max-w-[1100px] mx-auto px-6">
        <p>
          Designed & Built by{' '}
          <span className="text-accent-light">Jaron Jose Raj Joseph</span>
        </p>
        <p className="mt-1 text-text-muted text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
