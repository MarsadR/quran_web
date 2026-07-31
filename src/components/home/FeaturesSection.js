import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Bot, Compass, Bell, Activity, Trophy } from 'lucide-react';
import './FeaturesSection.css';

const features = [
  {
    icon: BookOpen,
    colorClass: 'feature-icon-emerald',
    title: 'Complete Quran & Hadith',
    description: 'Read and listen to the Holy Quran with translations, audio recitations, and offline capabilities. Browse authentic Hadith collections.',
  },
  {
    icon: Bot,
    colorClass: 'feature-icon-teal',
    title: 'Islamic AI Assistant',
    description: 'Ask questions and get context-aware answers powered by our advanced Islamic AI Assistant, grounded in authentic sources.',
  },
  {
    icon: Bell,
    colorClass: 'feature-icon-green',
    title: 'Accurate Prayer Times',
    description: 'Location-based prayer timings with customizable Adhan push notifications so you never miss a prayer.',
  },
  {
    icon: Compass,
    colorClass: 'feature-icon-forest',
    title: 'Comprehensive Guides',
    description: 'Step-by-step interactive guides for Hajj, Umrah, Wudu, and Janazah to help you perform rituals correctly.',
  },
  {
    icon: Activity,
    colorClass: 'feature-icon-mint',
    title: 'Daily Worship Tools',
    description: 'Built-in digital Tasbeeh counter, daily Duas, and a spiritual note-taking system to track your progress.',
  },
  {
    icon: Trophy,
    colorClass: 'feature-icon-gold',
    title: 'Gamification & Rewards',
    description: 'Earn points and unlock achievements as you build spiritual habits and complete daily Islamic goals.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="features-section section-padding">
      <div className="container">
        <div className="features-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            Core Features
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="features-title"
          >
            Everything You Need in One App
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="features-subtitle"
          >
            Built with modern technology to provide the most comprehensive,
            seamless, and ad-free Islamic experience on mobile.
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="feature-card"
              >
                <div className={`feature-icon-wrap ${feature.colorClass}`}>
                  <Icon className="feature-icon" />
                </div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-desc">{feature.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
