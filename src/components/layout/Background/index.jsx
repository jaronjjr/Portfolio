// Pure dark background — no 3D effects, letting the editorial design speak
export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-bg-primary" aria-hidden="true">
      {/* Subtle radial gradient for depth */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.04) 0%, transparent 60%)',
        }}
      />
    </div>
  )
}
