import { useState } from 'react';

// Footer Component
const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/assets/IMG_2944.jpeg" alt="MBAM logo" className="footer-logo" />
          <h3>MBAM</h3>
          <p>Muthupet Bayt Ul Mal Al Muslimin</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#about">About Us</a>
            <a href="#projects">Our Projects</a>
            <a href="#donate">Donate</a>
          </div>
          <div className="footer-column">
            <h4>Get Involved</h4>
            <a href="#involved">Volunteer</a>
            <a href="#involved">Partner With Us</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <a href="#facebook">Facebook</a>
            <a href="#instagram">Instagram</a>
            <a href="#email">Email Us</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} MBAM · All rights reserved ·</p>
      </div>
    </footer>
  );
};

export default Footer;