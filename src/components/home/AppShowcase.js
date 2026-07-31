import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import './AppShowcase.css';

const chatSequence = [
  { type: 'bot', text: 'Assalamu\'alaikum! I am your AI Islamic Assistant. How can I help you today?' },
  { type: 'user', text: 'Can you tell me the benefits of reciting Surah Al-Kahf on Friday?' },
  { type: 'bot', text: 'According to authentic Hadith, whoever recites Surah Al-Kahf on Friday, a light will shine for them between the two Fridays (Al-Hakim 2/399, Al-Bayhaqi 3/249).' },
];

export function AppShowcase() {
  const [messages, setMessages] = useState([chatSequence[0]]);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => {
        setMessages([chatSequence[0], chatSequence[1]]);
        setStep(1);
      }, 2000);
      return () => clearTimeout(timer);
    }
    if (step === 1) {
      const timer = setTimeout(() => {
        setMessages([chatSequence[0], chatSequence[1], chatSequence[2]]);
        setStep(2);
      }, 2500);
      return () => clearTimeout(timer);
    }
    if (step === 2) {
      const timer = setTimeout(() => {
        setMessages([chatSequence[0]]);
        setStep(0);
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <section id="ai-chat" className="showcase-section section-padding">
      <div className="showcase-bg-glow" aria-hidden="true" />

      <div className="container showcase-container">
        <div className="showcase-grid">
          <div className="showcase-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-badge showcase-badge"
            >
              <Sparkles className="showcase-badge-icon" />
              <span>Powered by Islamic AI Assistant</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="showcase-title"
            >
              Your Personal
              <span className="showcase-title-accent"> Islamic Scholar</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="showcase-desc"
            >
              Have a question about Fiqh, Hadith, or Quranic interpretation? Our intelligent
              AI Assistant fetches answers from authentic, verified Islamic sources instantly.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="showcase-list"
            >
              {[
                'Answers based on authentic Quran & Sunnah',
                'Context-aware Islamic AI Assistant',
                'Multilingual support worldwide',
              ].map((item) => (
                <li key={item} className="showcase-list-item">
                  <span className="showcase-list-dot" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="showcase-chat-wrap"
          >
            <div className="chat-mockup">
              <div className="chat-header">
                <div className="chat-header-avatar">
                  <Bot className="chat-header-icon" />
                </div>
                <div>
                  <h3 className="chat-header-name">Islamic AI</h3>
                  <p className="chat-header-status">
                    <span className="chat-status-dot" />
                    Online
                  </p>
                </div>
              </div>

              <div className="chat-body">
                <AnimatePresence>
                  {messages.map((msg, idx) => (
                    <motion.div
                      key={`${idx}-${msg.text.slice(0, 20)}`}
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`chat-message ${msg.type === 'user' ? 'chat-message-user' : ''}`}
                    >
                      <div className={`chat-avatar ${msg.type === 'user' ? 'chat-avatar-user' : ''}`}>
                        {msg.type === 'user' ? (
                          <User className="chat-avatar-icon" />
                        ) : (
                          <Bot className="chat-avatar-icon" />
                        )}
                      </div>
                      <div className={`chat-bubble ${msg.type === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'}`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}

                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="chat-message"
                    >
                      <div className="chat-avatar">
                        <Bot className="chat-avatar-icon" />
                      </div>
                      <div className="chat-bubble chat-bubble-bot chat-typing">
                        <span /><span /><span />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="chat-input-bar">
                <div className="chat-input-placeholder">Ask a question...</div>
                <button className="chat-send-btn" aria-label="Send">
                  <Send className="chat-send-icon" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
