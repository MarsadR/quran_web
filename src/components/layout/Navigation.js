import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Features', href: '/#features' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Contact Us', href: '/contact-us' },
    { name: 'Donation', href: '/#premium' },
  ];

  return (
    <nav className={`navigation ${isScrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="/#home" className="nav-logo">
          <img src="/web_logo.png" alt="Quran App Logo" style={{ height: '60px', width: 'auto' }} />
          <span className="nav-logo-text">Al Quran App</span>
        </a>

        <div className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="/#download" className="btn btn-primary nav-cta-btn">
            Download App
          </a>
        </div>

        <button
          className="nav-mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="nav-mobile-content">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#download"
              className="btn btn-primary nav-mobile-cta"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download App
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
