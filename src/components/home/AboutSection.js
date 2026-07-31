import React from 'react';
import { motion } from 'framer-motion';
import { History, Heart, Target } from 'lucide-react';
import './AboutSection.css';

export function AboutSection() {
  const features = [
    {
      icon: <History className="about-feature-icon-svg" />,
      title: 'Long History',
      description: 'Established in 1854, witnessing the development of Islam in North Sumatra.'
    },
    {
      icon: <Target className="about-feature-icon-svg" />,
      title: 'Vision & Mission',
      description: 'To become a center of Islamic civilization that is moderate, inclusive, and a blessing to the universe.'
    },
    {
      icon: <Heart className="about-feature-icon-svg" />,
      title: 'Community Service',
      description: 'Serving the congregation wholeheartedly through various featured programs.'
    }
  ];

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="grid grid-cols-1 md-grid-cols-2 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-image-column"
          >
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1519817914152-2a640c547c23?q=80&w=800&auto=format&fit=crop"
                alt="Sejarah Masjid"
                className="about-image"
              />
              <div className="about-experience-badge glass-panel">
                <span className="about-experience-number font-heading text-primary">170+</span>
                <span className="about-experience-text">Years<br/>Established</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="about-content"
          >
            <h2 className="about-title text-primary font-heading">Historic Mosque in Deli Land</h2>
            <p className="about-description text-muted">
              Al-Osmani Grand Mosque is the oldest mosque in Medan City. Built in 1854 
              by Sultan Osman Perkasa Alam, this mosque features a blend of Malay, 
              Middle Eastern, Spanish, Indian, and Chinese architecture.
            </p>

            <div className="about-features-list">
              {features.map((feature, index) => (
                <div key={index} className="about-feature-item flex items-center">
                  <div className="about-feature-icon">
                    {feature.icon}
                  </div>
                  <div className="about-feature-text">
                    <h4 className="font-bold text-primary font-heading">{feature.title}</h4>
                    <p className="text-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="btn btn-primary about-btn">Learn More</button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

