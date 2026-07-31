import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  UserCheck, 
  Smartphone, 
  Server, 
  Lock, 
  Trash2, 
  Mail, 
  MapPin, 
  Bell, 
  Volume2, 
  Image as ImageIcon, 
  Power, 
  Sparkles, 
  Database, 
  FileText,
  CheckCircle2
} from 'lucide-react';
import './PrivacyPolicy.css';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy - Al Quran App";
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const collectionItems = [
    {
      icon: <UserCheck className="policy-icon text-emerald-400" />,
      title: "Authentication & Identity Data",
      description: "When signing up via Email/Password or Google Sign-In, we store your email, display name, and avatar to securely manage your account via Supabase.",
      tag: "Supabase Auth"
    },
    {
      icon: <Database className="policy-icon text-amber-400" />,
      title: "User Progress & Spiritual Data",
      description: "Your Quran reading bookmarks, Tasbeeh counter numbers, custom notes, and daily progress are synced across devices.",
      tag: "Encrypted Cloud Sync"
    },
    {
      icon: <Sparkles className="policy-icon text-cyan-400" />,
      title: "AI Assistant Conversations",
      description: "Interactions with our Islamic AI Assistant are stored temporarily to maintain context. We never sell chat data or use it for AI model training.",
      tag: "AI Assistant"
    },
    {
      icon: <ImageIcon className="policy-icon text-purple-400" />,
      title: "Profile Media Storage",
      description: "Custom profile avatars you choose to upload are securely processed and hosted using Cloudinary's encrypted CDN.",
      tag: "Cloudinary CDN"
    }
  ];

  const permissionItems = [
    {
      icon: <Volume2 className="perm-icon text-emerald-400" />,
      title: "Foreground Service (Audio Playback)",
      detail: "FOREGROUND_SERVICE_MEDIA_PLAYBACK",
      purpose: "Allows continuous Quran recitation playback in the background when the app is minimized or the screen is locked."
    },
    {
      icon: <Bell className="perm-icon text-amber-400" />,
      title: "Push Notifications",
      detail: "POST_NOTIFICATIONS",
      purpose: "Delivers timely location-based Adhan (Prayer Time) alerts, daily reminders, and important Islamic calendar events."
    },
    {
      icon: <Power className="perm-icon text-cyan-400" />,
      title: "Boot Completed Trigger",
      detail: "RECEIVE_BOOT_COMPLETED",
      purpose: "Automatically reschedules your local prayer alarm notifications whenever your phone reboots."
    },
    {
      icon: <ImageIcon className="perm-icon text-purple-400" />,
      title: "Media Library Access",
      detail: "Camera Roll / Image Picker",
      purpose: "Only accessed when you explicitly select a custom image to upload as your profile picture."
    }
  ];

  const thirdPartyItems = [
    {
      name: "Google AdMob",
      type: "Advertising & Analytics",
      description: "Serves non-intrusive banner, interstitial, and rewarded ads. AdMob uses device identifiers (AAID / IDFA) in accordance with your privacy choices.",
      badge: "Google Play Compliant"
    },
    {
      name: "RevenueCat",
      type: "In-App Purchases & Subscriptions",
      description: "Manages premium app tier entitlements safely without storing raw financial or credit card credentials on our servers.",
      badge: "Secure Payment Layer"
    },
    {
      name: "Supabase & Cloudinary",
      type: "Backend Infrastructure",
      description: "Enterprise-grade database hosting and CDN services operating under strict GDPR and international encryption standards.",
      badge: "SSL/TLS Encrypted"
    },
    {
      name: "Firebase FCM v1 & Expo Device",
      type: "Push Notifications & Device Info",
      description: "Delivers timely prayer alerts and retrieves basic device metadata to ensure notifications are routed to the correct device model securely.",
      badge: "Encrypted Delivery"
    }
  ];

  return (
    <main className="privacy-page">
      {/* Decorative Background Glows */}
      <div className="privacy-glow privacy-glow-1"></div>
      <div className="privacy-glow privacy-glow-2"></div>

      <div className="container relative z-10">
        
        {/* Header Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="privacy-hero text-center"
        >
          <h1 className="privacy-title font-heading">
            Privacy Policy & Data Security
          </h1>

          <p className="privacy-subtitle">
            Transparency and respect for your privacy are fundamental to our mission. 
            Learn how the <strong className="text-[var(--color-primary-dark)]">Al Quran App</strong> protects your personal information, permissions, and rights.
          </p>

          <div className="privacy-meta flex items-center justify-center gap-4 mt-6">
            <span className="meta-pill">
              <FileText className="w-4 h-4 text-[var(--color-primary-dark)]" />
              Effective Date: July 31, 2026
            </span>
            <span className="meta-pill">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-dark)]" />
              Version 1.0 (Production)
            </span>
          </div>

          {/* Jump Navigation */}
          <div className="privacy-nav-wrapper mt-8">
            <div className="privacy-nav-pills">
              <button onClick={() => scrollToSection('overview')} className="nav-pill-btn">1. Overview</button>
              <button onClick={() => scrollToSection('data-collected')} className="nav-pill-btn">2. Data We Collect</button>
              <button onClick={() => scrollToSection('permissions')} className="nav-pill-btn">3. Device Permissions</button>
              <button onClick={() => scrollToSection('third-parties')} className="nav-pill-btn">4. Third-Party Services</button>
              <button onClick={() => scrollToSection('security')} className="nav-pill-btn">5. Security</button>
              <button onClick={() => scrollToSection('deletion')} className="nav-pill-btn pill-highlight">
                <Trash2 className="w-3.5 h-3.5 text-amber-400" />
                <span>6. Account Deletion</span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-pill-btn">7. Contact</button>
            </div>
          </div>
        </motion.div>

        {/* Main Content Container */}
        <div className="privacy-body">

          {/* Section 1: Overview */}
          <motion.section 
            id="overview"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">1. Introduction & Overview</h2>
                <p className="card-subtitle">Our commitment to safeguarding your spiritual journey</p>
              </div>
            </div>
            <p className="policy-text">
              Welcome to the <strong>Al Quran App</strong> ("we," "our," or "us"). We are dedicated to providing a serene, safe, and privacy-respecting digital environment for reading the Quran, tracking daily prayers, and learning Islamic guidance. 
            </p>
            <p className="policy-text">
              This Privacy Policy details the exact data collection, permission usage, and security practices implemented in our application. It strictly adheres to the <strong>Google Play Developer Distribution Agreement</strong> and <strong>Google User Data Policies</strong>. By downloading or using our mobile application, you agree to the practices outlined in this policy.
            </p>
          </motion.section>

          {/* Section 2: Information We Collect */}
          <motion.section 
            id="data-collected"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-amber-500/10 text-amber-400">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">2. Information We Collect</h2>
                <p className="card-subtitle">Detailed breakdown of personal and app usage data</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md-grid-cols-2 gap-6 mt-6">
              {collectionItems.map((item, idx) => (
                <div key={idx} className="feature-mini-card">
                  <div className="flex items-center justify-between mb-3">
                    <div className="icon-wrapper">{item.icon}</div>
                    <span className="badge-tag">{item.tag}</span>
                  </div>
                  <h3 className="mini-card-title font-heading">{item.title}</h3>
                  <p className="mini-card-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 3: Device Permissions */}
          <motion.section 
            id="permissions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-cyan-500/10 text-cyan-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">3. Device Permissions We Request</h2>
                <p className="card-subtitle">Explicit justification for Android and iOS runtime permissions</p>
              </div>
            </div>

            <p className="policy-text">
              To deliver seamless core features like audio recitation playback and timely prayer alerts, our app requests specific device capabilities:
            </p>

            <div className="permissions-grid mt-6">
              {permissionItems.map((perm, idx) => (
                <div key={idx} className="perm-card">
                  <div className="perm-header flex items-center gap-3">
                    {perm.icon}
                    <div>
                      <h4 className="perm-title font-heading">{perm.title}</h4>
                      <code className="perm-code">{perm.detail}</code>
                    </div>
                  </div>
                  <p className="perm-purpose">{perm.purpose}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 4: Third-Party SDKs & Services */}
          <motion.section 
            id="third-parties"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-purple-500/10 text-purple-400">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">4. Third-Party Services & Integrations</h2>
                <p className="card-subtitle">Trusted industry partners supporting our app features</p>
              </div>
            </div>

            <div className="third-party-list mt-6">
              {thirdPartyItems.map((tp, idx) => (
                <div key={idx} className="tp-card flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="tp-name font-heading">{tp.name}</h3>
                      <span className="tp-type">{tp.type}</span>
                    </div>
                    <p className="tp-desc">{tp.description}</p>
                  </div>
                  <span className="tp-badge">{tp.badge}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 5: Data Security & Storage */}
          <motion.section 
            id="security"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-emerald-500/10 text-emerald-400">
                <Lock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">5. Data Protection & Security Measures</h2>
                <p className="card-subtitle">Encryption protocols guarding your information</p>
              </div>
            </div>

            <p className="policy-text">
              We implement industry-leading technical and organizational security measures to protect your personal information against unauthorized access, loss, or alteration:
            </p>

            <div className="security-highlights-grid mt-6">
              <div className="sec-box">
                <h4 className="sec-heading font-heading text-[var(--color-primary-dark)]">End-to-End Encryption</h4>
                <p className="sec-desc">All API traffic between your device, Supabase, and our AI backend is encrypted using 256-bit SSL/TLS protocol.</p>
              </div>
              <div className="sec-box">
                <h4 className="sec-heading font-heading text-amber-400">On-Device Storage</h4>
                <p className="sec-desc">Sensitive tokens and authentication credentials are stored within hardware-backed storage via Expo SecureStore.</p>
              </div>
            </div>
          </motion.section>

          {/* Section 6: Account & Data Deletion */}
          <motion.section 
            id="deletion"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark border-emerald-500/30"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-rose-500/10 text-rose-400">
                <Trash2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">6. User Rights & Account Deletion</h2>
                <p className="card-subtitle">Full control over your personal data (Google Play Policy Requirement)</p>
              </div>
            </div>

            <p className="policy-text">
              As an authenticated user, you have the absolute right to request access to your personal data, as well as the permanent deletion of your account and all associated personal data stored on our servers.
            </p>

            <div className="deletion-steps-card mt-6">
              <h4 className="steps-header font-heading">How to Delete Your Account:</h4>
              <ol className="steps-list">
                <li>
                  <span className="step-num">1</span>
                  <span>Open <strong>Al Quran App</strong> and log into your account.</span>
                </li>
                <li>
                  <span className="step-num">2</span>
                  <span>Navigate to <strong>Profile Screen</strong>.</span>
                </li>
                <li>
                  <span className="step-num">3</span>
                  <span>Tap <strong>Delete Account & Data</strong> and confirm your choice.</span>
                </li>
              </ol>

              <div className="deletion-note mt-6">
                <p className="text-sm text-[var(--color-text-muted)]">
                  <strong>Alternative Web Request:</strong> If you cannot access the app, you can request immediate account erasure by sending an email to <a href="mailto:support@qubitkode.com" className="text-[var(--color-primary-dark)] underline">support@qubitkode.com</a> with the subject line <em>"Account Deletion Request"</em>. All profile records, notes, and sync files will be permanently purged within 30 days.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 7: Contact Us */}
          <motion.section 
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-emerald-500/10 text-emerald-400">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">7. Contact & Support</h2>
                <p className="card-subtitle">Have questions regarding our privacy practices?</p>
              </div>
            </div>

            <p className="policy-text">
              If you have any questions, concerns, or legal inquiries regarding this Privacy Policy, please feel free to reach out to our administration team:
            </p>

            <div className="contact-card-grid mt-6">
              <div className="contact-box flex items-start gap-4">
                <Mail className="w-6 h-6 text-[var(--color-primary-dark)] mt-1" />
                <div>
                  <h4 className="font-heading text-[var(--color-text)] font-bold">Email Inquiries</h4>
                  <a href="mailto:support@qubitkode.com" className="text-[var(--color-primary-dark)] font-semibold hover:underline">support@qubitkode.com</a>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">Response time: Within 24-48 hours</p>
                </div>
              </div>

              <div className="contact-box flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[var(--color-accent)] mt-1" />
                <div>
                  <h4 className="font-heading text-[var(--color-text)] font-bold">Administration Office</h4>
                  <p className="text-[var(--color-text-muted)] text-sm">5th Floor, District 39, Dream Gardens</p>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">Lahore, Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  );
}
