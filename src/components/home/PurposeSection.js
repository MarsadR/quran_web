import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, UserCheck } from 'lucide-react';
import './PurposeSection.css';

export function PurposeSection() {
  const features = [
    {
      icon: <Heart className="purpose-icon text-rose-500" />,
      title: "Our Core Mission",
      description: "Al Quran is designed to be your comprehensive Islamic companion. We empower Muslims globally to seamlessly read the Quran, track daily prayers, and grow their faith with our AI assistant."
    },
    {
      icon: <UserCheck className="purpose-icon text-blue-500" />,
      title: "Google Authentication",
      description: "To provide a personalized experience, we use Google Sign-In. We solely request your email and basic profile data to securely sync your spiritual progress, bookmarks, and settings across all your devices."
    },
    {
      icon: <ShieldCheck className="purpose-icon text-emerald-500" />,
      title: "Data Privacy & Security",
      description: "Your trust is our priority. Your data is encrypted and strictly used to enhance your experience within the app. We never sell your personal information or share it with unauthorized third parties."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="purpose-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="purpose-header text-center"
        >
          <div className="purpose-badge">App Purpose & Transparency</div>
          <h2 className="purpose-title font-heading">
            Built with <span className="text-emerald-600">Purpose</span> & <span className="text-blue-600">Trust</span>
          </h2>
          <p className="purpose-subtitle">
            Everything you need to know about what Al Quran does and how we protect your data.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="purpose-grid"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="purpose-card">
              <div className="purpose-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="purpose-card-title font-heading">{feature.title}</h3>
              <p className="purpose-card-desc">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
