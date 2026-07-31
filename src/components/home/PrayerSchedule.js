import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, BellRing } from 'lucide-react';
import './PrayerSchedule.css';

export function PrayerSchedule() {
  const [prayers, setPrayers] = useState([
    { name: 'Fajr', time: '--:--', arabic: 'الفجر' },
    { name: 'Dhuhr', time: '--:--', arabic: 'الظهر' },
    { name: 'Asr', time: '--:--', arabic: 'العصر' },
    { name: 'Maghrib', time: '--:--', arabic: 'المغرب' },
    { name: 'Isha', time: '--:--', arabic: 'العشاء' },
  ]);
  const [locationName, setLocationName] = useState('Detecting location...');
  const [currentTime, setCurrentTime] = useState('');
  const [nextPrayer, setNextPrayer] = useState('');

  useEffect(() => {
    const fetchTimings = async (lat, lng, city) => {
      try {
        const res = await fetch(`https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lng}&method=2`);
        const data = await res.json();
        if (data && data.data && data.data.timings) {
          const t = data.data.timings;
          setPrayers([
            { name: 'Fajr', time: t.Fajr, arabic: 'الفجر' },
            { name: 'Dhuhr', time: t.Dhuhr, arabic: 'الظهر' },
            { name: 'Asr', time: t.Asr, arabic: 'العصر' },
            { name: 'Maghrib', time: t.Maghrib, arabic: 'المغرب' },
            { name: 'Isha', time: t.Isha, arabic: 'العشاء' },
          ]);
          setLocationName(city);
        }
      } catch (err) {
        console.error('Error fetching prayer times', err);
        setLocationName('Failed to load');
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchTimings(position.coords.latitude, position.coords.longitude, 'Auto-detected Location');
        },
        (error) => {
          fetchTimings(51.5072, -0.1276, 'London, UK (Default)');
        }
      );
    } else {
      fetchTimings(51.5072, -0.1276, 'London, UK (Default)');
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }));

      // Determine next prayer
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
      const currentTotalMinutes = currentHours * 60 + currentMinutes;

      let foundNext = false;
      for (const prayer of prayers) {
        if (prayer.time !== '--:--') {
          const [pHours, pMinutes] = prayer.time.split(':').map(Number);
          const pTotalMinutes = pHours * 60 + pMinutes;
          if (pTotalMinutes > currentTotalMinutes) {
            setNextPrayer(prayer.name);
            foundNext = true;
            break;
          }
        }
      }
      if (!foundNext) setNextPrayer('Fajr');
    }, 1000);
    return () => clearInterval(timer);
  }, [prayers]);

  return (
    <section id="jadwal" className="prayer-section section-padding">
      <div className="container">
        <div className="prayer-header">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-badge"
          >
            <BellRing className="prayer-badge-icon" />
            Adhan Notifications
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="prayer-title"
          >
            Never Miss a Prayer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="prayer-subtitle"
          >
            Highly accurate calculation methods provide precise prayer times based on your
            location. Enable push notifications to hear the Adhan when it&apos;s time to pray.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="prayer-meta"
          >
            <div className="prayer-meta-item">
              <MapPin className="prayer-meta-icon" />
              <span>{locationName}</span>
            </div>
            <span className="prayer-meta-dot" />
            <div className="prayer-meta-item">
              <Clock className="prayer-meta-icon prayer-meta-icon-alt" />
              <span>{currentTime || '12:00 PM'}</span>
            </div>
          </motion.div>
        </div>

        <div className="prayer-grid">
          {prayers.map((prayer, index) => {
            const isNext = prayer.name === nextPrayer;
            return (
              <motion.div
                key={prayer.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * index }}
                className={`prayer-card ${isNext ? 'prayer-card-active' : ''}`}
              >
                {isNext && (
                  <span className="prayer-card-badge">Next Prayer</span>
                )}
                <span className="prayer-arabic">{prayer.arabic}</span>
                <h3 className="prayer-name">{prayer.name}</h3>
                <p className="prayer-time">{prayer.time}</p>
                {isNext && (
                  <div className="prayer-alert">
                    <BellRing className="prayer-alert-icon" />
                    Alert Active
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
