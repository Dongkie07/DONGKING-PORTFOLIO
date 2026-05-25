import { siteConfig } from '../config/siteConfig.js';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <span>{siteConfig.name}</span>
        <span>Professional Technology Portfolio</span>
      </div>
    </footer>
  );
}
