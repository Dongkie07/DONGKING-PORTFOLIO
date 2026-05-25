import { siteConfig } from '../config/siteConfig.js';

export function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="brand" aria-label="Go to home">
        <span className="brand-mark">RC</span>
        <span>{siteConfig.nickname}</span>
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        {siteConfig.navigationLinks.map(link => (
          <a key={link.href} href={link.href}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}
