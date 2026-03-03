import React, { useEffect, useRef } from 'react';
import './Hero.css';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';

const rotatingWords = ['Behavioral Health', 'Counseling', 'Excellence', 'Compassion'];

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
            Serving Texas, Montana &amp; Wyoming
          </div>

          <h1 className="hero-title">
            <div className="hero-title-line-wrap">
              <span className="hero-title-line">Primary Care &amp;</span>
            </div>
            <div className="hero-title-line-wrap">
              <span className="hero-title-line hero-title-accent">
                <span ref={wordRef} className="rotating-word">{rotatingWords[0]}</span>
              </span>
            </div>
            <div className="hero-title-line-wrap">
              <span className="hero-title-line">in Post-Acute Care.</span>
            </div>
          </h1>

          <p className="hero-subtitle">
            Our MDs, NPs, Psych NPs, and LCSWs provide on-site primary care, behavioral health,
            and counseling services in long-term care, assisted living, and post-acute facilities.
            All insurances accepted.
          </p>

          <div className="hero-cta-group">
            <a href="#appointment" className="hero-btn-primary">
              <span>Book an Appointment</span>
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
            <a href="#services" className="hero-btn-secondary">
              Our Services
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">3</span>
              <span className="hero-stat-label">States Served</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">All</span>
              <span className="hero-stat-label">Insurances Accepted</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">24/7</span>
              <span className="hero-stat-label">RN Support</span>
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

        </div>
      </div>

    </section>
  );
};

export default Hero;
