import { SITE_CONFIG } from '../config/siteConfig.js';
import { navItems } from '../data/navItems.js';

export function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="#home" aria-label="Go to home">
        <span>{SITE_CONFIG.shortName.charAt(0)}</span>
        {SITE_CONFIG.shortName}
      </a>

      <nav className="navbar__links" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>
    </header>
  );
}
