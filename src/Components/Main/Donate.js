import React from 'react';
import  useScrollAnimation  from '../Utilities/useScrollAnimation';

// Donate Section Component
const DonateSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="donate" className="donate-section">
      <div className={`donate-content ${isVisible ? 'animate-in' : ''}`} ref={ref}>
        <h3>Your generosity changes lives</h3>
        <p>Every contribution helps us reach those who need support most.</p>
        <a href="#contact" className="btn primary large">Donate Securely</a>
      </div>
    </section>
  );
};

export default DonateSection;