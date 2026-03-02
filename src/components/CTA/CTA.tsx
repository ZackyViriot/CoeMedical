import React, { useEffect, useRef } from 'react';
import './CTA.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(section.querySelector('.cta-card'),
      { y: 50, opacity: 0, scale: 0.97 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 80%' }
      }
    );

    gsap.fromTo(section.querySelectorAll('.cta-content > *'),
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%' }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="cta-section" id="contact">
      <div className="cta-inner">
        <div className="cta-card">
          <div className="cta-pattern"></div>
          <div className="cta-content">
            <img src="/logo.png" alt="COE Medical" className="cta-logo" />
            <h2 className="cta-title">Ready to Partner<br />with COE Medical?</h2>
            <p className="cta-text">
              Bring expert on-site healthcare to your facility. Contact us today to learn how
              our services can benefit your residents and staff.
            </p>
            <div className="cta-buttons">
              <a href="#appointment" className="cta-btn-primary">
                Request a Consultation
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="tel:+18005551234" className="cta-btn-secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Us Now
              </a>
            </div>
            <p className="cta-verse">
              "He gives strength to the weary and increases the power of the weak."
              <span>— Isaiah 40:29</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/logo.png" alt="COE Medical" className="footer-logo" />
            <div>
              <span className="footer-name">COE Medical</span>
              <span className="footer-tagline">Care of Excellence PLLC</span>
            </div>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <p className="footer-copy">
            &copy; 2026 COE Medical — Care of Excellence PLLC. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default CTA;
