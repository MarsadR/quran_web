import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Globe, Camera, Video, MapPin } from 'lucide-react';
import './Footer.css';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-grid">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="footer-brand-col"
          >
            <Link to="/" onClick={scrollToTop} className="footer-logo">
              <img src="/web_logo.png" alt="Quran App Logo" style={{ height: '48px', width: 'auto' }} />
              <span>Al Quran</span>
            </Link>
            <p className="footer-desc">
              Your complete Islamic companion — Quran, Hadith, AI Assistant,
              prayer times, and daily worship tools in one beautiful app.
            </p>
            <p className="footer-desc" style={{ fontSize: '0.85rem', marginTop: '-0.5rem', opacity: 0.9 }}>
              <strong>OAuth & Data Transparency:</strong> Al Quran requests Google Sign-In to securely authenticate users. We strictly use your email and basic profile data to sync your bookmarks, prayer time settings, and subscription status across your devices.
            </p>
            <div className="footer-socials">
              <a href="#fb" className="social-btn" aria-label="Facebook"><Globe className="social-icon" /></a>
              <a href="#ig" className="social-btn" aria-label="Instagram"><Camera className="social-icon" /></a>
              <a href="#yt" className="social-btn" aria-label="YouTube"><Video className="social-icon" /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="footer-col"
          >
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-menu">
              <li><Link to="/" onClick={scrollToTop} className="footer-link">Home</Link></li>
              <li><a href="#features" className="footer-link">Features</a></li>
              <li><a href="#ai-chat" className="footer-link">AI Assistant</a></li>
              <li><Link to="/about-us" onClick={scrollToTop} className="footer-link">About Us</Link></li>
              <li><a href="#premium" className="footer-link">Premium</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="footer-col"
          >
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-menu">
              <li>
                <Link to="/privacy-policy" onClick={scrollToTop} className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" onClick={scrollToTop} className="footer-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="footer-col"
          >
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Mail className="footer-contact-icon" />
                <a href="mailto:marsadrd@gmail.com" className="footer-link">
                  marsadrd@gmail.com
                </a>
              </li>
              <li className="footer-contact-item">
                <MapPin className="footer-contact-icon" />
                <span className="footer-text" style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', textAlign: 'left', lineHeight: '1.5' }}>
                  5th Floor, District 39, Dream Gardens<br/>
                  Lahore, Punjab, Pakistan
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; 2026 Al Quran AI-Powered Islamic Companion. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy" onClick={scrollToTop} className="footer-bottom-link">
              Privacy
            </Link>
            <span className="footer-bottom-dot">&bull;</span>
            <Link to="/terms-of-service" onClick={scrollToTop} className="footer-bottom-link">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
