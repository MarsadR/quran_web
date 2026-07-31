import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  BookOpen, 
  Sparkles, 
  CreditCard, 
  ShieldAlert, 
  UserCheck, 
  Scale, 
  Clock, 
  AlertTriangle, 
  CheckCircle2,
  Mail,
  Smartphone,
  MapPin
} from 'lucide-react';
import './TermsOfService.css';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service - Al Quran";
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const featureTerms = [
    {
      icon: <BookOpen className="term-icon text-emerald-400" />,
      title: "Quran & Audio Recitation",
      description: "Granted a personal, non-exclusive license to stream, download, and listen to Quran recitations for non-commercial spiritual use."
    },
    {
      icon: <Sparkles className="term-icon text-cyan-400" />,
      title: "AI Islamic Assistant Disclaimer",
      description: "Our Islamic AI Assistant is for informational guidance. It does NOT issue binding fatwas or replace certified Islamic scholars."
    },
    {
      icon: <Clock className="term-icon text-amber-400" />,
      title: "Prayer Times & Adhan Calculations",
      description: "Calculated using scientific mathematical algorithms based on device coordinates. Users are advised to verify local mosque timings."
    },
    {
      icon: <CreditCard className="term-icon text-purple-400" />,
      title: "Premium Subscriptions (RevenueCat)",
      description: "Purchases and renewals are processed securely via Google Play Store / Apple App Store. Manage cancellations anytime in store settings."
    }
  ];

  return (
    <main className="terms-page">
      {/* Background Ambient Glows */}
      <div className="terms-glow terms-glow-1"></div>
      <div className="terms-glow terms-glow-2"></div>

      <div className="container relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="terms-hero text-center"
        >
          <h1 className="terms-title font-heading">
            Terms of Service
          </h1>

          <p className="terms-subtitle">
            Please read these Terms of Service carefully before using the <strong className="text-[var(--color-primary-dark)]">Al Quran</strong> and related services.
          </p>

          <div className="terms-meta flex items-center justify-center gap-4 mt-6">
            <span className="meta-pill">
              <FileText className="w-4 h-4 text-[var(--color-primary-dark)]" />
              Last Updated: July 31, 2026
            </span>
            <span className="meta-pill">
              <CheckCircle2 className="w-4 h-4 text-[var(--color-primary-dark)]" />
              Google Play & App Store Compliant
            </span>
          </div>

          {/* Jump Navigation Bar */}
          <div className="terms-nav-wrapper mt-8">
            <div className="terms-nav-pills">
              <button onClick={() => scrollToSection('acceptance')} className="nav-pill-btn">
                <span>1. Acceptance</span>
              </button>
              <button onClick={() => scrollToSection('services')} className="nav-pill-btn">
                <span>2. App Services</span>
              </button>
              <button onClick={() => scrollToSection('ai-disclaimer')} className="nav-pill-btn pill-highlight">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>3. AI Disclaimer</span>
              </button>
              <button onClick={() => scrollToSection('subscriptions')} className="nav-pill-btn">
                <span>4. Subscriptions & Ads</span>
              </button>
              <button onClick={() => scrollToSection('accounts')} className="nav-pill-btn">
                <span>5. User Accounts</span>
              </button>
              <button onClick={() => scrollToSection('conduct')} className="nav-pill-btn">
                <span>6. Prohibited Conduct</span>
              </button>
              <button onClick={() => scrollToSection('liability')} className="nav-pill-btn">
                <span>7. Liability</span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-pill-btn">
                <span>8. Contact</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Main Terms Body */}
        <div className="terms-body">

          {/* Section 1: Acceptance */}
          <motion.section 
            id="acceptance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-emerald-500/10 text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">1. Acceptance of Terms</h2>
                <p className="card-subtitle">Binding agreement between you and Al Quran</p>
              </div>
            </div>
            <p className="policy-text">
              By downloading, installing, accessing, or using the <strong>Al Quran</strong> (`com.marsad77.alquranapp`), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our <a href="/privacy-policy" className="text-[var(--color-primary-dark)] underline font-semibold">Privacy Policy</a>. 
            </p>
            <p className="policy-text">
              If you do not agree with any portion of these terms, you must immediately cease using the application and uninstall it from your device.
            </p>
          </motion.section>

          {/* Section 2: App Services & Features */}
          <motion.section 
            id="services"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-amber-500/10 text-amber-400">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">2. Scope of Services & Features</h2>
                <p className="card-subtitle">Digital Quran, Prayer Schedules, Guides, and Tools</p>
              </div>
            </div>

            <p className="policy-text">
              Our application offers a comprehensive suite of digital Islamic resources including:
            </p>

            <div className="grid grid-cols-1 md-grid-cols-2 gap-6 mt-6">
              {featureTerms.map((item, idx) => (
                <div key={idx} className="feature-mini-card">
                  <div className="icon-wrapper mb-3">{item.icon}</div>
                  <h3 className="mini-card-title font-heading">{item.title}</h3>
                  <p className="mini-card-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 3: AI Assistant Disclaimer */}
          <motion.section 
            id="ai-disclaimer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark border-amber-500/30"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-amber-500/10 text-amber-400">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">3. Islamic AI Assistant Disclaimer</h2>
                <p className="card-subtitle">Important religious advisory notice regarding AI generated content</p>
              </div>
            </div>

            <div className="disclaimer-callout p-6 rounded-xl bg-amber-500/5 border border-amber-500/20">
              <h4 className="font-heading text-amber-400 text-lg font-bold mb-2">Notice to All Users:</h4>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed mb-3">
                The <strong>Islamic AI Assistant</strong> embedded within our app utilizes artificial intelligence to answer questions based on authentic Islamic texts.
              </p>
              <ul className="list-disc pl-5 text-[var(--color-text-muted)] text-sm space-y-2">
                <li><strong>Not a Qualified Mufti:</strong> The AI tool is designed strictly for educational reference and research assistance. It does NOT possess religious authority to issue legal rulings (*Fatwas*).</li>
                <li><strong>Consult Local Scholars:</strong> For critical personal, marital, financial, or jurisprudence matters, users must consult qualified Islamic scholars and local religious institutions.</li>
                <li><strong>No Guaranteed Infallibility:</strong> While we strive for accuracy, AI models may occasionally produce incomplete or inaccurate interpretations.</li>
              </ul>
            </div>
          </motion.section>

          {/* Section 4: Subscriptions & Ads */}
          <motion.section 
            id="subscriptions"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-purple-500/10 text-purple-400">
                <CreditCard className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">4. In-App Purchases, Subscriptions & Advertisements</h2>
                <p className="card-subtitle">RevenueCat premium tier and Google AdMob policies</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="tp-card">
                <h3 className="tp-name font-heading text-[var(--color-primary-dark)] mb-1">Premium Subscriptions (RevenueCat)</h3>
                <p className="tp-desc">
                  We offer premium tiers that remove advertisements and unlock enhanced features. Subscriptions are billed automatically through your Google Play Store or Apple App Store account. You may cancel auto-renewal at any time at least 24 hours before the billing period ends via your App Store settings.
                </p>
              </div>

              <div className="tp-card">
                <h3 className="tp-name font-heading text-cyan-400 mb-1">Advertisements (Google AdMob)</h3>
                <p className="tp-desc">
                  Free users will see Google AdMob banner, interstitial, or rewarded ads. We carefully filter ad categories to ensure all displayed ads align with respectful standards. Attempting to modify, block, or hack ad delivery system mechanisms is strictly prohibited.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 5: User Accounts */}
          <motion.section 
            id="accounts"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-cyan-500/10 text-cyan-400">
                <UserCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">5. User Accounts & Data Security</h2>
                <p className="card-subtitle">Account registration, OAuth, and user responsibility</p>
              </div>
            </div>

            <p className="policy-text">
              To save your bookmarks, Tasbeeh history, and spiritual notes across devices, you can register an account using Email or Google Sign-In via our Supabase backend.
            </p>
            <ul className="list-disc pl-6 text-[var(--color-text-muted)] space-y-2 mt-2">
              <li>You are responsible for keeping your login credentials confidential.</li>
              <li>You agree to notify us immediately of any unauthorized access to your account.</li>
              <li>You have the right to request a copy of your personal data or ask for its permanent deletion at any time.</li>
              <li>We reserve the right to suspend or terminate accounts that violate our terms or engage in fraudulent activities.</li>
            </ul>
          </motion.section>

          {/* Section 6: Prohibited Conduct */}
          <motion.section 
            id="conduct"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-rose-500/10 text-rose-400">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">6. Prohibited Conduct & Acceptable Use</h2>
                <p className="card-subtitle">Rules governing community usage and system protection</p>
              </div>
            </div>

            <p className="policy-text">When using the Al Quran, you agree NOT to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] mb-2" />
                Decompile, reverse engineer, or disassemble any part of the mobile app code.
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] mb-2" />
                Scrape, extract, or automatically collect audio recitations or AI API responses.
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] mb-2" />
                Use the AI Assistant to generate hate speech, offensive content, or misleading guidance.
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] mb-2" />
                Attempt to bypass subscription paywalls or tamper with AdMob ad units.
              </div>
            </div>
          </motion.section>

          {/* Section 7: Limitation of Liability */}
          <motion.section 
            id="liability"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="policy-card glass-panel-dark"
          >
            <div className="card-header-flex">
              <div className="header-icon-box bg-emerald-500/10 text-emerald-400">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h2 className="card-title font-heading">7. Limitation of Liability & Warranty Disclaimer</h2>
                <p className="card-subtitle">Provided "AS IS" without express or implied warranties</p>
              </div>
            </div>

            <p className="policy-text">
              The Al Quran and all related content, audio, and tools are provided on an <strong>"AS IS"</strong> and <strong>"AS AVAILABLE"</strong> basis. While we strive for 100% accuracy in prayer time algorithms, Quranic text rendering, and recitation streaming, we do not guarantee uninterrupted or error-free operation.
            </p>
            <p className="policy-text">
              Under no circumstances shall the app developers, mosque administration, or affiliates be liable for any indirect, incidental, or consequential damages resulting from your use of the application.
            </p>
          </motion.section>

          {/* Section 8: Contact Us */}
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
                <h2 className="card-title font-heading">8. Questions & Contact Information</h2>
                <p className="card-subtitle">Reach out for legal queries or terms clarification</p>
              </div>
            </div>

            <p className="policy-text">
              If you have any questions regarding these Terms of Service, please contact our legal & support team:
            </p>

            <div className="contact-card-grid mt-6">
              <div className="contact-box flex items-start gap-4">
                <Mail className="w-6 h-6 text-[var(--color-primary-dark)] mt-1" />
                <div>
                  <h4 className="font-heading text-[var(--color-text)] font-bold">Terms & Legal Support</h4>
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
