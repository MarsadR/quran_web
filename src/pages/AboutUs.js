import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Heart, Shield, Code, Sparkles, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

export function AboutUs() {
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
    <div className="about-section">
      <div className="about-bg-pattern" aria-hidden="true" />
      
      <div className="container about-container">
        <Link to="/#home" className="about-back-link">
          <ArrowLeft className="back-icon" />
          Back to Home
        </Link>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="about-content-wrapper"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="about-hero text-center">
            <h1 className="about-title font-heading">
              Empowering the Ummah with <span className="text-emerald-600">Next-Gen Technology</span>
            </h1>
            <p className="about-subtitle">
              Al Quran AI-Powered Islamic Companion is on a mission to make the Holy Quran and Islamic guidance accessible, intuitive, and engaging for everyone worldwide.
            </p>
          </motion.div>

          {/* Mission Grid */}
          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-card glass-card">
              <div className="card-icon-wrapper bg-emerald-100 text-emerald-600">
                <BookOpen size={32} />
              </div>
              <h2 className="card-title font-heading">The App</h2>
              <p className="card-desc">
                We believe technology should serve faith. By integrating authentic Islamic texts with cutting-edge artificial intelligence, we aim to provide context-aware answers, deep Tafsir insights, and continuous learning opportunities to help Muslims connect deeper with their religion in their daily lives.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="about-card glass-card company-card">
              <div className="card-icon-wrapper bg-blue-100 text-blue-600">
                <Code size={32} />
              </div>
              <h2 className="card-title font-heading">Backed by QubitKode</h2>
              <p className="card-desc">
                This app is proudly crafted by <strong>QubitKode</strong>, a premier technology agency specializing in Web Development, Mobile Apps, and AI & Machine Learning. We leverage our enterprise-grade expertise to build digital products that stand apart, ensuring the Quran App is fast, secure, and beautiful.
              </p>
              <a href="https://www.qubitkode.com/" target="_blank" rel="noopener noreferrer" className="company-link">
                Visit QubitKode <Globe size={16} />
              </a>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div variants={itemVariants} className="about-values-section">
            <h2 className="values-title font-heading text-center">Our Core Values</h2>
            
            <div className="values-grid">
              <motion.div whileHover={{ y: -5 }} className="value-item">
                <div className="value-icon-circle bg-emerald-50 text-emerald-500">
                  <Shield size={28} />
                </div>
                <h4>Authenticity & Privacy</h4>
                <p>Grounding everything we build in the Quran and authentic Sunnah, while strictly protecting your data and privacy.</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="value-item">
                <div className="value-icon-circle bg-amber-50 text-amber-500">
                  <Sparkles size={28} />
                </div>
                <h4>Innovation</h4>
                <p>Utilizing state-of-the-art AI to answer your questions and personalize your daily spiritual tracking seamlessly.</p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }} className="value-item">
                <div className="value-icon-circle bg-rose-50 text-rose-500">
                  <Heart size={28} />
                </div>
                <h4>Sadaqah Jariyah</h4>
                <p>Keeping the core app 100% free for the masses, sustained by the generous monthly support of our community.</p>
              </motion.div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}
