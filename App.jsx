import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Scroll Animation Hook
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, []);

  return [ref, isVisible];
};

// Header
const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="brand">
        <img src="/assets/IMG_2944.jpeg" alt="MBAM logo" className="logo" />
        <span className="brand-name">MBAM</span>
      </div>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#involved" onClick={() => setMenuOpen(false)}>Get Involved</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

      <div className="actions">
        <button className="icon-btn" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle theme">
          {darkMode ? '☀️' : '🌙'}
        </button>
        <a href="#donate" className="btn btn-primary">Donate</a>
        <button className="icon-btn menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">☰</button>
      </div>
    </header>
  );
};

// Hero — simple banner instead of a carousel
const Hero = () => (
  <section className="hero">
    <div className="hero-content">
      <span className="tag">Serving Humanity with Integrity</span>
      <h1>Restoring dignity through compassion and action</h1>
      <p>MBAM supports vulnerable families with food aid, education, and sustainable community programs guided by Islamic values.</p>
      <div className="hero-actions">
        <a href="#donate" className="btn btn-primary">Donate Now</a>
        <a href="#projects" className="btn btn-outline">Our Work</a>
      </div>
    </div>
  </section>
);

// Quran Section
const QuranSection = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="quran-section">
      <div className="quran-box">
        <p className="quran-label">Reflection from the Qur'an</p>
        <p className="quran-arabic">
          مَثَلُ الَّذِیْنَ یُنْفِقُوْنَ اَمْوَالَهُمْ فِیْ سَبِیْلِ اللّٰهِ كَمَثَلِ حَبَّةٍ اَنْۢبَتَتْ سَبْعَ سَنَابِلَ فِیْ كُلِّ سُنْۢبُلَةٍ مِّائَةُ حَبَّةٍ
        </p>
        <p className="quran-translation">
          "The example of those who spend their wealth in the cause of Allah is that of a grain that sprouts into seven ears, each bearing one hundred grains."
          <span>— Qur'an 2:261</span>
        </p>
        <button className="play-btn" onClick={togglePlay}>
          {isPlaying ? '⏸ Pause' : '▶ Play recitation'}
        </button>
        <audio ref={audioRef} preload="metadata">
          <source src="/assets/quran-261.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </section>
  );
};

// Generic animated section wrapper
const Section = ({ id, eyebrow, title, text, light, children }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section id={id} className={`section ${light ? 'light' : ''}`}>
      <div className={`section-header ${isVisible ? 'in' : ''}`} ref={ref}>
        {eyebrow && <span>{eyebrow}</span>}
        {title && <h2>{title}</h2>}
        {text && <p className="section-text">{text}</p>}
      </div>
      {children}
    </section>
  );
};

// Card grid used by Projects & GetInvolved
const CardGrid = ({ items }) => {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <div className={`grid ${isVisible ? 'in' : ''}`} ref={ref}>
      {items.map((item, i) => (
        <article key={i} className="card">
          <div className="card-icon">{item.icon}</div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          {item.cta && <a href={item.cta.href} className="btn btn-primary btn-sm">{item.cta.label}</a>}
        </article>
      ))}
    </div>
  );
};

const projects = [
  { icon: '🍽️', title: 'Food Assistance', description: 'Providing essential food supplies to families facing hardship.' },
  { icon: '📚', title: 'Education Support', description: 'Scholarships and learning resources for children and youth.' },
  { icon: '🏠', title: 'Community Care', description: 'Emergency relief and long-term development programs.' },
];

const involvedOptions = [
  { icon: '🤝', title: 'Volunteer', description: 'Support food distribution and community programs with your time.', cta: { href: '#contact', label: 'Join Now' } },
  { icon: '🌍', title: 'Partner With Us', description: 'Collaborate with MBAM to create sustainable social impact.', cta: { href: '#contact', label: 'Join Now' } },
  { icon: '❤️', title: 'Sponsor a Family', description: 'Support struggling families through monthly contributions.', cta: { href: '#contact', label: 'Join Now' } },
];

// Stats
const Stats = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [counts, setCounts] = useState({ families: 0, meals: 0, students: 0 });

  useEffect(() => {
    if (!isVisible) return;
    const targets = { families: 500, meals: 50000, students: 250 };
    const steps = 60;
    const timer = setInterval(() => {
      setCounts((prev) => ({
        families: Math.min(prev.families + Math.ceil(targets.families / steps), targets.families),
        meals: Math.min(prev.meals + Math.ceil(targets.meals / steps), targets.meals),
        students: Math.min(prev.students + Math.ceil(targets.students / steps), targets.students),
      }));
    }, 2000 / steps);
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className="stats" ref={ref}>
      <div className="stat"><strong>{counts.families.toLocaleString()}+</strong><span>Families Supported</span></div>
      <div className="stat"><strong>{counts.meals.toLocaleString()}+</strong><span>Meals Distributed</span></div>
      <div className="stat"><strong>{counts.students.toLocaleString()}+</strong><span>Students Educated</span></div>
    </section>
  );
};

// Donate CTA
const DonateSection = () => (
  <section id="donate" className="donate">
    <h2>Your generosity changes lives</h2>
    <p>Every contribution helps us reach those who need support most.</p>
    <a href="#contact" className="btn btn-primary btn-lg">Donate Securely</a>
  </section>
);

// Footer
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h3>MBAM</h3>
          <p>Muthupet Bayt Ul Mal Al Muslimin</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#about">About Us</a>
          <a href="#projects">Our Projects</a>
          <a href="#donate">Donate</a>
        </div>
        <div>
          <h4>Get Involved</h4>
          <a href="#involved">Volunteer</a>
          <a href="#involved">Partner With Us</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Connect</h4>
          <a href="#facebook">Facebook</a>
          <a href="#instagram">Instagram</a>
          <a href="#email">Email Us</a>
        </div>
      </div>
      <p className="footer-bottom">© {year} MBAM · All rights reserved</p>
    </footer>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <QuranSection />
      <Section id="about" eyebrow="Our Mission" title="Charity that creates lasting impact"
        text="We channel generosity into meaningful programs that uplift families, strengthen communities, and protect dignity." />
      <Section id="projects" eyebrow="Our Work" title="How we help communities" light>
        <CardGrid items={projects} />
      </Section>
      <Section id="involved" eyebrow="Get Involved" title="Be part of the change">
        <CardGrid items={involvedOptions} />
      </Section>
      <Stats />
      <DonateSection />
      <Footer />
    </div>
  );
}

export default App;