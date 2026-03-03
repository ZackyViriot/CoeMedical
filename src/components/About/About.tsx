import React, { useEffect, useRef } from 'react';
import './About.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CircleCheckBig, Heart, Clock } from 'lucide-react';

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
            At COE Medical, we believe quality healthcare is a calling. Our providers deliver
            on-site primary care and behavioral health services to long-term care facilities,
            post-acute settings, and assisted living communities across Texas, Montana, and Wyoming.
          </p>
          <p className="about-text">
            We bring the provider to the patient — our MDs and NPs handle primary care,
            while our Psych NPs and LCSWs provide behavioral health and counseling services.
            All insurances accepted.
          </p>

          <div className="about-features">
            <div className="about-feature">
              <div className="about-feature-icon green">
                <CircleCheckBig size={20} />
              </div>
              <div>
                <h4 className="about-feature-title">Primary Care</h4>
                <p className="about-feature-text">MDs and NPs providing on-site medical care</p>
              </div>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon purple">
                <Heart size={20} />
              </div>
              <div>
                <h4 className="about-feature-title">Behavioral Health</h4>
                <p className="about-feature-text">Psych NPs and LCSWs for mental health and counseling</p>
              </div>
            </div>
            <div className="about-feature">
              <div className="about-feature-icon gold">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="about-feature-title">All Insurances Accepted</h4>
                <p className="about-feature-text">Serving Texas, Montana, and Wyoming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
