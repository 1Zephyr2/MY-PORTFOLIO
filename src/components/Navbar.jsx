function Navbar({ links, theme, themeLabel, onThemeToggle }) {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Primary navigation">
        <a className="brand" href="#home">
          <span className="brand-mark">L</span>
          <span className="brand-text">Lei - Portfolio</span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <button className="theme-toggle" type="button" onClick={onThemeToggle} aria-label={themeLabel}>
          <span aria-hidden="true">{theme === 'dark' ? '☀' : '☾'}</span>
          <span>{themeLabel}</span>
        </button>
      </nav>
    </header>
  )
}

export default Navbar