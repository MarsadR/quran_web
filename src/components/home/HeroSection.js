import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Smartphone, Download, Moon } from 'lucide-react';
import './HeroSection.css';

export function HeroSection() {
  const [showModal, setShowModal] = useState(false);
  const [hijriDate, setHijriDate] = useState('');

  React.useEffect(() => {
    try {
      const formatter = new Intl.DateTimeFormat('en-US-u-ca-islamic-umalqura', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
      setHijriDate(formatter.format(new Date()));
    } catch (e) {
      setHijriDate('Safar 1446 AH');
    }
  }, []);

  return (
    <section id="home" className="hero-section">
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="hero-modal-overlay" 
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
              className="hero-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="hero-modal-icon-wrapper">
                <img src="/Apple_logo_black.png" alt="Apple Logo" style={{ width: '2rem', height: '2rem', objectFit: 'contain' }} />
              </div>
              <h3 className="hero-modal-title">Coming Soon!</h3>
              <p className="hero-modal-message">
                We're currently perfecting the iOS experience. The Apple App Store version will be available very soon!
              </p>
              <button className="hero-modal-close-btn" onClick={() => setShowModal(false)}>
                Got it, Thanks!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hero-pattern" aria-hidden="true" />
      <div className="hero-glow hero-glow-1" aria-hidden="true" />
      <div className="hero-glow hero-glow-2" aria-hidden="true" />

      <div className="container hero-container">
        <div className="hero-grid">
          <div className="hero-content">


            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="hero-date-badge"
            >
              <Moon className="hero-date-icon" />
              <span>{hijriDate}</span>
              <div className="hero-date-pulse" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="hero-title"
            >
              Al Quran: Your
              <span className="hero-title-accent" style={{ display: 'block', marginTop: '0.5rem' }}>
                <Typewriter
                  options={{
                    strings: ['Spiritual Companion', 'Quran Teacher', 'Daily Guide'],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="hero-description"
              style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem', opacity: 0.95 }}
            >
              <strong>Al Quran</strong> is your comprehensive Islamic spiritual companion designed to help Muslims worldwide grow their faith. Our application empowers users to seamlessly read and listen to the Holy Quran, track daily prayer times, learn through our interactive AI Assistant, and maintain daily worship routines with our Tasbeeh counter. To ensure a seamless and personalized experience, we use <strong>Google Sign-In</strong> for secure authentication. We request your basic profile information solely to safeguard your account and seamlessly sync your bookmarks, prayer configurations, and subscription status across all your devices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="hero-cta-group"
            >
              <button className="store-btn store-btn-dark">
                <img src="/google_logo.png" alt="Google Play" className="store-btn-icon" style={{ objectFit: 'contain' }} />
                <div className="store-btn-text">
                  <span className="store-btn-label">Get it on</span>
                  <span className="store-btn-name">Google Play</span>
                </div>
              </button>

              <button 
                className="store-btn store-btn-light"
                onClick={() => setShowModal(true)}
              >
                <img src="/Apple_logo_black.png" alt="App Store" className="store-btn-icon" style={{ objectFit: 'contain' }} />
                <div className="store-btn-text">
                  <span className="store-btn-label">Download on the</span>
                  <span className="store-btn-name">App Store</span>
                </div>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="hero-trust"
            >

              <div className="hero-trust-item">
                <Smartphone className="hero-trust-icon" />
                <span>Works Offline</span>
              </div>
              <div className="hero-trust-divider" />
              <div className="hero-trust-item">
                <Download className="hero-trust-icon" />
                <span>Free to Start</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8 }}
            className="hero-visual"
          >
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <img 
                  src="/dashboard.jpeg" 
                  alt="App Dashboard" 
                  style={{ width: '100%', height: '104%', objectFit: 'cover', marginTop: '-4%' }} 
                />
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
}
