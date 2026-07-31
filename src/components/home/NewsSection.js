import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import './NewsSection.css';

export function NewsSection() {
  const news = [
    {
      title: 'Commemoration of the Prophet\'s Birthday 1445 H',
      date: '12 Rabiul Awal 1445 H',
      image: 'https://images.unsplash.com/photo-1591462489370-985223c34eb3?q=80&w=600&auto=format&fit=crop', // Working image
      category: 'Events'
    },
    {
      title: 'Orphans and Needy Donation Program',
      date: '10 Muharram 1445 H',
      image: 'https://images.unsplash.com/photo-1593118247619-e2d6f056869e?q=80&w=600&auto=format&fit=crop',
      category: 'Social'
    },
    {
      title: 'Routine Quranic Exegesis Study',
      date: 'Every Sunday After Fajr',
      image: 'https://images.unsplash.com/photo-1601142634808-38923eb7c560?q=80&w=600&auto=format&fit=crop',
      category: 'Education'
    }
  ];

  return (
    <section id="news" className="section-padding news-section">
      <div className="container">
        <div className="news-header flex justify-between items-end mb-12">
          <div className="news-header-text">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="news-section-title font-heading"
            >
              News & Events
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="news-section-subtitle text-muted"
            >
              Follow the latest updates and activities at Al-Osmani Grand Mosque
            </motion.p>
          </div>
          <motion.a 
            href="#all-news"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="news-see-all hidden md-flex items-center"
          >
            See All <ArrowRight className="news-icon-arrow" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md-grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="news-card"
            >
              <div className="news-card-image-wrapper">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="news-card-image"
                />
                <div className="news-category-badge">
                  {item.category}
                </div>
              </div>
              <div className="news-card-content">
                <div className="news-date flex items-center gap-2">
                  <Calendar className="news-date-icon" />
                  <span>{item.date}</span>
                </div>
                <h3 className="news-card-title font-heading">
                  {item.title}
                </h3>
                <a href="#read-more" className="news-read-more flex items-center">
                  Read More <ArrowRight className="news-read-more-icon" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
