import React from 'react';
import { motion } from 'framer-motion';
import { Check, Heart, Shield } from 'lucide-react';
import './PremiumSection.css';

const freeFeatures = [
  { text: 'Full Quran & Audio', included: true },
  { text: 'Prayer Times & Adhan', included: true },
  { text: 'All Islamic Guides & AI', included: true },
  { text: 'Contains Ads', included: false },
];

const donationFeatures = [
  'Everything in Free',
  'Earn Sadaqah Jariyah (Ongoing Reward)',
  'Help keep the app free for others',
  '100% Ad-Free Experience (Our Gift)',
];

export function PremiumSection() {
  return (
    <section id="premium" className="premium-section section-padding">
      <div className="premium-bg-pattern" aria-hidden="true" />

      <div className="container premium-container">
        <div className="premium-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            <Heart className="premium-badge-icon text-rose-500" />
            Sadaqah Jariyah
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="premium-title"
          >
            Support Our Mission
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="premium-subtitle"
          >
            Everything in the app is 100% free. You can donate monthly according to your capacity to earn rewards (Ajr) from Allah. As a thank you, we'll remove all ads.
          </motion.p>
        </div>

        <div className="pricing-grid">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="pricing-card"
          >
            <h3 className="pricing-tier">Free Access</h3>
            <p className="pricing-desc">Everything you need for daily worship.</p>
            <div className="pricing-price">Free</div>

            <ul className="pricing-features">
              {freeFeatures.map((item) => (
                <li key={item.text} className={`pricing-feature ${!item.included ? 'pricing-feature-muted' : ''}`}>
                  {item.included ? (
                    <Check className="pricing-check pricing-check-free" />
                  ) : (
                    <Shield className="pricing-check pricing-check-muted" />
                  )}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <button className="pricing-btn pricing-btn-basic" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <img src="/google_logo.png" alt="Google Play" style={{ height: '1.25rem', width: 'auto', objectFit: 'contain' }} />
              Get it on Google Play
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="pricing-card pricing-card-featured"
          >
            <div className="pricing-popular">
              <Heart className="pricing-popular-icon text-rose-500" />
              Sadaqah
            </div>

            <h3 className="pricing-tier">App Supporter</h3>
            <p className="pricing-desc">Donate what you can afford monthly.</p>
            <div className="pricing-price-row">
              <span className="pricing-price" style={{ fontSize: '2rem' }}>Any Amount</span>
              <span className="pricing-period">/ month</span>
            </div>

            <ul className="pricing-features">
              {donationFeatures.map((text, i) => (
                <li key={text} className="pricing-feature">
                  <Check className={`pricing-check ${i > 0 && i < 3 ? 'pricing-check-gold' : 'pricing-check-free'}`} />
                  <span className={i > 0 && i < 3 ? 'pricing-feature-highlight' : ''}>{text}</span>
                </li>
              ))}
            </ul>

            <button className="pricing-btn pricing-btn-premium" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
              <img src="/google_logo.png" alt="Google Play" style={{ height: '1.25rem', width: 'auto', objectFit: 'contain' }} />
              Get it on Google Play
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
