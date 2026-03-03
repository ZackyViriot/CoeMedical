import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import gsap from 'gsap';
import { Phone, ArrowRight, Pill } from 'lucide-react';

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroLogoVisible, setHeroLogoVisible] = useState(true);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.fromTo(nav,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Watch the hero logo — hide navbar logo while it's in view
  useEffect(() => {
    const heroLogo = document.querySelector('.hero-logo-img');
    if (!heroLogo) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHeroLogoVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(heroLogo);
    return () => observer.disconnect();
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav ref={navRef} className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-inner">
          <a href="/" className={`logo ${heroLogoVisible ? 'logo-hidden' : ''}`}>
            <img src="/logo.png" alt="COE Medical — Care of Excellence PLLC" className="logo-img" />
          </a>

          {/* Desktop nav */}
          <div className="nav-links-center">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="nav-actions">
            <a href="#rx-requests" className="nav-rx">
              <Pill size={16} />
              <span>Rx Requests</span>
            </a>
            <a href="tel:+18005551234" className="nav-phone">
              <Phone size={18} />
              <span>(800) 555-1234</span>
            </a>
            <a href="#appointment" className="nav-cta">
              Book Appointment
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>

          {/* Hamburger button — mobile only */}
          <button
            className={`hamburger ${menuOpen ? 'hamburger-open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-overlay ${menuOpen ? 'mobile-overlay-open' : ''}`} onClick={() => setMenuOpen(false)} />
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-header">
          <img src="/logo.png" alt="COE Medical" className="mobile-menu-logo" />
        </div>
        <div className="mobile-menu-links">
          <a href="#home" className="mobile-link" onClick={handleLinkClick}>Home</a>
          <a href="#services" className="mobile-link" onClick={handleLinkClick}>Services</a>
          <a href="#about" className="mobile-link" onClick={handleLinkClick}>About</a>
          <a href="#contact" className="mobile-link" onClick={handleLinkClick}>Contact</a>
          <a href="#rx-requests" className="mobile-link" onClick={handleLinkClick}>Rx Requests</a>
        </div>
        <div className="mobile-menu-actions">
          <a href="tel:+18005551234" className="mobile-phone" onClick={handleLinkClick}>
            <Phone size={18} />
            (800) 555-1234
          </a>
          <a href="#appointment" className="mobile-cta" onClick={handleLinkClick}>
            Book Appointment
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
