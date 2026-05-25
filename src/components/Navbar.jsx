import { useState } from 'react';
import { siteConfig } from '../config/siteConfig.js';

const MENU_LABELS = {
  open: 'Open navigation menu',
  close: 'Close navigation menu'
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(currentState => !currentState);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`navbar ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <a href="#home" className="brand" aria-label="Go to home" onClick={closeMenu}>
        <span className="brand-mark">RC</span>
        <span>{siteConfig.nickname}</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? MENU_LABELS.close : MENU_LABELS.open}
        aria-expanded={isMenuOpen}
        aria-controls="main-navigation"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="main-navigation" className="nav-links" aria-label="Main navigation">
        {siteConfig.navigationLinks.map(link => (
          <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
      </nav>
    </header>
  );
}
