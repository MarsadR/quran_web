import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Wallet } from 'lucide-react';
import './DonationSection.css';

export function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState(100000);
  const amounts = [50000, 100000, 250000, 500000];

  return (
    <section id="donate" className="section-padding donate-section relative">
      <div className="donate-background absolute inset-0 z-0"></div>
      <div className="donate-pattern absolute inset-0 z-0 opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md-grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="donate-content text-white"
          >
            <div className="donate-badge flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-secondary" />
              <span>Let's Donate</span>
            </div>
            <h2 className="donate-title font-heading">Support Islamic Dawah & Mosque Operations</h2>
            <p className="donate-description">
              Your Infaq and Sadaqah will be used for mosque operations, 
              dawah activities, education, and social assistance for the community 
              in need.
            </p>
            
            <div className="donate-stats grid grid-cols-2 gap-6 mt-8">
              <div className="donate-stat-item">
                <h4 className="font-heading">Bank Syariah Indonesia</h4>
                <p>1234 5678 90</p>
                <span className="donate-stat-label">a.n Masjid Raya Al-Osmani</span>
              </div>
              <div className="donate-stat-item">
                <h4 className="font-heading">Bank Mandiri</h4>
                <p>0987 6543 21</p>
                <span className="donate-stat-label">a.n Masjid Raya Al-Osmani</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="donate-card glass-panel"
          >
            <div className="donate-card-header text-center mb-8">
              <div className="donate-card-icon-wrapper">
                <Wallet className="donate-card-icon" />
              </div>
              <h3 className="font-heading text-primary text-2xl font-bold">Online Donation</h3>
              <p className="text-muted mt-2">Choose your donation amount</p>
            </div>

            <div className="donate-amounts grid grid-cols-2 gap-4 mb-8">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`donate-amount-btn ${selectedAmount === amount ? 'active' : ''}`}
                >
                  Rp {amount.toLocaleString('id-ID')}
                </button>
              ))}
            </div>

            <div className="donate-custom-amount mb-8">
              <label className="donate-label">Other Amount</label>
              <div className="donate-input-wrapper">
                <span className="donate-currency">Rp</span>
                <input 
                  type="number" 
                  className="donate-input"
                  placeholder="Enter amount"
                  value={selectedAmount}
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                />
              </div>
            </div>

            <button className="btn btn-primary w-full donate-submit-btn font-heading text-lg">
              Continue Payment
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
