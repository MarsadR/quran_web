import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CTASection.css';

export function CTASection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="download" className="cta-section section-padding">
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="hero-modal-overlay" 
            onClick={() => setShowModal(false)}
            style={{ zIndex: 9999 }}
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
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="cta-card"
        >
          <div className="cta-glow cta-glow-1" aria-hidden="true" />
          <div className="cta-glow cta-glow-2" aria-hidden="true" />

          <div className="cta-content">
            <h2 className="cta-title">Begin Your Spiritual Journey Today</h2>
            <p className="cta-desc">
              Join thousands of Muslims worldwide who trust Al Quran AI-Powered Islamic Companion
              for their daily worship, learning, and spiritual growth.
            </p>

            <div className="cta-buttons">
              <button className="cta-store-btn">
                <img src="/google_logo.png" alt="Google Play" className="cta-store-icon" style={{ objectFit: 'contain' }} />
                <div>
                  <span className="cta-store-label">Get it on</span>
                  <span className="cta-store-name">Google Play</span>
                </div>
              </button>
              <button 
                className="cta-store-btn cta-store-btn-outline"
                onClick={() => setShowModal(true)}
              >
                <img src="/Apple_logo_black.png" alt="App Store" className="cta-store-icon" style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                <div>
                  <span className="cta-store-label">Download on the</span>
                  <span className="cta-store-name">App Store</span>
                </div>
              </button>
            </div>

            <a href="#features" className="cta-link">
              Explore all features
              <ArrowRight className="cta-link-icon" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
