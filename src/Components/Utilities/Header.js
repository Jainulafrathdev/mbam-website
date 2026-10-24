import { useState, useEffect } from 'react';

// Header Component
const Header = ({ darkMode, setDarkMode }) => {

    // Theme Toggle Component
const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button 
      className="theme-toggle" 
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      )}
    </button>
  );
};


  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="brand">
        <img src="/assets/IMG_2944.jpeg" alt="MBAM logo" className="MBAM-logo" />
        <div className="brand-text">
          <span className="eyebrow">Muthupet Bayt Ul Mal Al Muslimin</span>
          <h1>MBAM</h1>
        </div>
      </div>

      <button 
        className="mobile-menu-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
        <a href="#involved" onClick={() => setMobileMenuOpen(false)}>Get Involved</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </nav>

      <div className="header-actions">
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        <a href="#donate" className="donate-btn">Donate</a>
      </div>
    </header>
  );
};

export default Header;