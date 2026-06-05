import { siteConfig } from '../config/siteConfig.js';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <span>Designed and developed by {siteConfig.name}</span>
        <span>© 2026 All rights reserved.</span>
      </div>
    </footer>
  );
}
