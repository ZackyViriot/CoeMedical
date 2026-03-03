import React, { useEffect, useRef } from 'react';
import './ServiceCards.css';
import ServiceCard from './ServiceCard';
import { services } from '../../data/services';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceCards: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Animate section header
    gsap.fromTo(section.querySelector('.section-header'),
      { y: 40, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );

    // Animate cards with stagger
    const cards = section.querySelectorAll('.service-card');
    gsap.fromTo(cards,
      { y: 60, opacity: 0, scale: 0.95 },
      {
        y: 0, opacity: 1, scale: 1,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: section.querySelector('.service-grid'),
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="services-section" id="services">
      <div className="services-inner">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">
            What We Provide
          </h2>
          <p className="section-subtitle">
            On-site primary care and behavioral health services for post-acute,
            long-term care, and assisted living facilities. All insurances accepted.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
              colors={service.colors}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
