import React, { useEffect, useRef } from 'react';
import './Hero.css';
import gsap from 'gsap';

const rotatingWords = ['Excellence', 'Compassion', 'Strength', 'Faith'];

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLSpanElement>(null);
  const wordIndex = useRef(0);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Animate the background gradient orbs
    tl.fromTo('.hero-orb-1',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 0.15, duration: 1.5 }
    );
    tl.fromTo('.hero-orb-2',
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 0.1, duration: 1.5 },
      '-=1.2'
    );

    // Animate the badge
    tl.fromTo('.hero-badge',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.8'
    );

    // Animate the title lines
    tl.fromTo('.hero-title-line',
      { y: 60, opacity: 0, skewY: 3 },
      { y: 0, opacity: 1, skewY: 0, duration: 0.9, stagger: 0.12 },
      '-=0.5'
    );

    // Animate the subtitle
    tl.fromTo('.hero-subtitle',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.4'
    );

    // Animate the CTA buttons
    tl.fromTo('.hero-cta-group',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.5'
    );

    // Animate the logo visual — scale up with a slight rotation
    tl.fromTo('.hero-logo-visual',
      { scale: 0.6, opacity: 0, rotate: -5 },
      { scale: 1, opacity: 1, rotate: 0, duration: 1.2, ease: 'back.out(1.4)' },
      '-=1.0'
    );

    // Animate the glow ring behind the logo
    tl.fromTo('.hero-logo-glow',
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.4 },
      '-=1.2'
    );

    // Animate the floating cards
    tl.fromTo('.hero-floating-card',
      { scale: 0.8, opacity: 0, y: 30 },
      { scale: 1, opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
      '-=0.6'
    );

    // Animate the stats
    tl.fromTo('.hero-stat',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      '-=0.6'
    );

    // Rotating word animation
    const animateWord = () => {
      const word = wordRef.current;
      if (!word) return;

      gsap.to(word, {
        y: -20,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          wordIndex.current = (wordIndex.current + 1) % rotatingWords.length;
          if (word) {
            word.textContent = rotatingWords[wordIndex.current];
          }
          gsap.fromTo(word,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
          );
        }
      });
    };

    const wordInterval = setInterval(animateWord, 2800);

    // Continuous gentle float on the logo
    gsap.to('.hero-logo-img', {
      y: -12,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      delay: 1.5
    });

    // Continuous slow rotation on the glow ring
    gsap.to('.hero-logo-glow', {
      rotate: 360,
      duration: 30,
      ease: 'none',
      repeat: -1
    });

    // Floating animation for cards
    gsap.to('.hero-floating-card', {
      y: -8,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
      delay: 2
    });

    return () => {
      clearInterval(wordInterval);
    };
  }, []);

  return (
    <section ref={heroRef} className="hero" id="home">
      {/* Background gradient orbs */}
      <div className="hero-orb hero-orb-1"></div>
      <div className="hero-orb hero-orb-2"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            24/7 Faith-Based Healthcare
          </div>

          <h1 className="hero-title">
            <div className="hero-title-line-wrap">
              <span className="hero-title-line">Expert care with</span>
            </div>
            <div className="hero-title-line-wrap">
              <span className="hero-title-line hero-title-accent">
                <span ref={wordRef} className="rotating-word">{rotatingWords[0]}</span>
              </span>
            </div>
            <div className="hero-title-line-wrap">
              <span className="hero-title-line">for every patient.</span>
            </div>
          </h1>

          <p className="hero-subtitle">
            Comprehensive primary care and behavioral health services for long-term care,
            nursing homes, and assisted living communities. Guided by faith, driven by excellence.
          </p>

          <div className="hero-cta-group">
            <a href="#appointment" className="hero-btn-primary">
              <span>Book an Appointment</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#services" className="hero-btn-secondary">
              Our Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">500+</span>
              <span className="hero-stat-label">Patients Served</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">24/7</span>
              <span className="hero-stat-label">RN Support</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">15+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          {/* Main logo as the hero visual */}
          <div className="hero-logo-visual">
            <div className="hero-logo-glow"></div>
            <img
              src="/logo.png"
              alt="COE Medical — Care of Excellence PLLC"
              className="hero-logo-img"
            />
          </div>

          {/* Floating cards */}
          <div className="hero-floating-card card-expertise">
            <div className="floating-card-icon green">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <span>Primary Care</span>
          </div>

          <div className="hero-floating-card card-wellness">
            <div className="floating-card-icon purple">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <span>Wellness</span>
          </div>

          <div className="hero-floating-card card-support">
            <div className="floating-card-icon gold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span>24/7 Support</span>
          </div>

          {/* Scripture quote card */}
          <div className="hero-floating-card card-verse">
            <p className="verse-text">"He gives strength to the weary."</p>
            <span className="verse-ref">Isaiah 40:29</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
