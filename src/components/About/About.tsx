import React, { useEffect, useRef } from 'react';
import './About.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(section.querySelector('.about-image-wrap'),
      { x: -60, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%' }
      }
    );

    gsap.fromTo(section.querySelector('.about-content'),
      { x: 60, opacity: 0 },
      {
        x: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 75%' }
      }
    );

    gsap.fromTo(section.querySelectorAll('.about-feature'),
      { y: 30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: section.querySelector('.about-features'), start: 'top 85%' }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="about-section" id="about">
      <div className="about-inner">
        <div className="about-image-wrap">
          <div className="about-image-card">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=700&auto=format&fit=crop"
              alt="Medical team providing care"
              className="about-image"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="about-experience-badge">
            <span className="exp-number">15+</span>
            <span className="exp-label">Years of<br/>Excellence</span>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">About Us</span>
          <h2 className="about-title">
            Faith-Guided Care<br />with Clinical Excellence
          </h2>
          <p className="about-text">
            At COE Medical, we believe quality healthcare is a calling. Our team provides
            compassionate, on-site medical care to long-term care facilities, nursing homes,
            and assisted living communities across Texas.
          </p>
          <p className="about-text">
            Rooted in faith and driven by a commitment to excellence, we bring the provider
            to the patient — ensuring everyone receives the care they deserve.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature-icon green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="about-feature-title">On-Site Providers</h4>
                <p className="about-feature-text">MD & NP team visits your facility directly</p>
              </div>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon purple">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <div>
                <h4 className="about-feature-title">Compassionate Care</h4>
                <p className="about-feature-text">Faith-based approach to patient well-being</p>
              </div>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon gold">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="about-feature-title">Available 24/7</h4>
                <p className="about-feature-text">Round-the-clock nurse call center support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
