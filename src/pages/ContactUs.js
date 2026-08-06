import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ContactUs.css';

export function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="contact-section">
      <div className="contact-bg-pattern" aria-hidden="true" />
      
      <div className="container contact-container">
        <Link to="/#home" className="contact-back-link">
          <ArrowLeft className="back-icon" />
          Back to Home
        </Link>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="contact-content-wrapper"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="contact-hero text-center">
            <h1 className="contact-title font-heading">
              Let's <span className="text-emerald-600">Connect</span>
            </h1>
            <p className="contact-subtitle">
              Have questions, feedback, or need support with the Al Quran AI-Powered Islamic Companion? Our team is always here to help you.
            </p>
          </motion.div>

          {/* Contact Cards Grid */}
          <div className="contact-grid">
            
            {/* Email Card */}
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="contact-card glass-card">
              <div className="contact-icon-circle bg-emerald-50 text-emerald-600">
                <Mail size={32} />
              </div>
              <h2 className="card-title font-heading">Email Support</h2>
              <p className="card-desc">
                For support, feedback, and general inquiries. We aim to respond within 24 hours.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                <a href="mailto:support@qubitkode.com" className="contact-action-link">
                  support@qubitkode.com
                </a>
                <a href="mailto:marsadrd@gmail.com" className="contact-action-link">
                  marsadrd@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="contact-card glass-card" style={{ padding: 0, overflow: 'hidden' }}>
              <iframe 
                src="https://maps.google.com/maps?q=District+39,+Dream+Gardens,+Lahore,+Punjab,+Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="200" 
                style={{ border: 0, borderRadius: '1.5rem 1.5rem 0 0', flexShrink: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="QubitKode Headquarters Map"
              ></iframe>
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                <h2 className="card-title font-heading" style={{ marginBottom: '0.5rem' }}>Our Headquarters</h2>
                <p className="card-desc" style={{ marginBottom: '1rem' }}>
                  Come visit us! We're based in the heart of Lahore, building digital products for the Ummah.
                </p>
                <a 
                  href="https://maps.app.goo.gl/H4FZVCjoBihix4U38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-action-link"
                >
                  5th Floor, District 39, Dream Gardens<br />
                  Lahore, Punjab, Pakistan
                </a>
              </div>
            </motion.div>

          </div>

          {/* Bottom Banner */}
          <motion.div variants={itemVariants} className="contact-bottom-banner">
            <MessageSquare className="banner-icon text-emerald-500" size={40} />
            <h3 className="font-heading">We Value Your Feedback</h3>
            <p>
              Your insights help us improve. If you have feature requests or found a bug, please don't hesitate to reach out!
            </p>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
