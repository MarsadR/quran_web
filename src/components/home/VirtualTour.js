import React from 'react';
import { motion } from 'framer-motion';
import { Play, Maximize2 } from 'lucide-react';
import './VirtualTour.css';

export function VirtualTour() {
  return (
    <section id="tour" className="section-padding tour-section">
      <div className="container">
        <div className="tour-header text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="tour-title font-heading"
          >
            Mosque Virtual Tour
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="tour-subtitle text-muted"
          >
            Explore the historical architectural beauty of Al-Osmani Grand Mosque virtually
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="tour-video-container"
        >
          <div className="tour-video-wrapper relative">
            <img 
              src="https://images.unsplash.com/photo-1564683214965-3619addd900d?q=80&w=1200&auto=format&fit=crop"
              alt="Virtual Tour Masjid"
              className="tour-video-thumbnail"
            />
            
            {/* Play Button Overlay */}
            <div className="tour-play-overlay absolute inset-0 flex items-center justify-center">
              <button className="tour-play-btn">
                <Play className="tour-play-icon" />
              </button>
            </div>

            {/* Controls Overlay */}
            <div className="tour-controls-overlay absolute bottom-0 left-0 right-0">
              <div className="tour-controls flex justify-between items-center">
                <div className="tour-controls-left flex items-center gap-4">
                  <span className="tour-indicator flex items-center gap-2">
                    <span className="tour-dot"></span>
                    360° View
                  </span>
                </div>
                <button className="tour-fullscreen-btn">
                  <Maximize2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
