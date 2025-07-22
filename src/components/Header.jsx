import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  React.useEffect(() => {
    document.body.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>Waleed SEO</Link>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(m => !m)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map(link => (
            <li key={link.name}>
              {link.href.startsWith('/') ? (
                <Link to={link.href} onClick={() => setMenuOpen(false)}>{link.name}</Link>
              ) : (
                <a href={link.href}>{link.name}</a>
              )}
            </li>
          ))}
          <li>
            <button className="theme-toggle" aria-label="Toggle dark mode" onClick={() => setDark(d => !d)}>
              {dark ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 