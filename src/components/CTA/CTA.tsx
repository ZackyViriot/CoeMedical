import React, { useEffect, useRef } from 'react';
import './CTA.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone } from 'lucide-react';

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
            <h2 className="cta-title">Partner with<br />COE Medical</h2>
            <p className="cta-text">
              Bring on-site primary care and behavioral health services to your facility.
              We serve long-term care, post-acute, and assisted living communities
              across Texas, Montana, and Wyoming. All insurances accepted.
            </p>
            <div className="cta-buttons">
              <a href="#appointment" className="cta-btn-primary">
                Request a Consultation
                <ArrowRight size={18} strokeWidth={2.5} />
              </a>
              <a href="tel:+18005551234" className="cta-btn-secondary">
                <Phone size={18} />
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
