import React, { useState, useEffect, useRef } from 'react';
import './App.css';

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

// Scroll Animation Hook
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible];
};

// Carousel Component
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  
  const images = [
    '/assets/IMG_2944.jpeg',
    '/assets/slide2.jpg',
    '/assets/slide3.jpg',
  ];

  useEffect(() => {
    if (!isAutoPlay || isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length, isAutoPlay, isPaused]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
  };

  return (
    <div 
      className="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index + 1}`} loading={index === 0 ? "eager" : "lazy"} />
            <div className="carousel-overlay"></div>
          </div>
        ))}
      </div>
      
      <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button className="carousel-btn next" onClick={nextSlide} aria-label="Next slide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
      
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Header Component
const Header = ({ darkMode, setDarkMode }) => {
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
        <img src="public\assets\IMG_2944.jpeg" alt="MBAM logo" className="MBAM-logo" />
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

// Hero Component
const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section className="hero" ref={ref}>
      <Carousel />
      <div className={`hero-overlay ${isVisible ? 'animate-in' : ''}`}>
        <div className="hero-content">
          <span className="hero-tag">Serving Humanity with Integrity</span>
          <h2>Restoring dignity through compassion and action</h2>
          <p>
            MBAM supports vulnerable families with food aid, education,
            and sustainable community programs guided by Islamic values.
          </p>

          <div className="hero-actions">
            <a href="#donate" className="btn primary">Donate Now</a>
            <a href="#projects" className="btn outline">Our Work</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Quran Section Component
const QuranSection = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ref, isVisible] = useScrollAnimation();

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="quran-section">
      <div className={`quran-box ${isVisible ? 'animate-in' : ''}`} ref={ref}>
        <p className="quran-label">Reflection from the Qur'an</p>

        <p className="quran-arabic">
          مَثَلُ الَّذِیْنَ یُنْفِقُوْنَ اَمْوَالَهُمْ فِیْ سَبِیْلِ اللّٰهِ كَمَثَلِ حَبَّةٍ اَنْۢبَتَتْ سَبْعَ سَنَابِلَ فِیْ كُلِّ سُنْۢبُلَةٍ مِّائَةُ حَبَّةٍ ؕ وَاللّٰهُ یُضٰعِفُ لِمَنْ یَّشَآءُ ؕ وَاللّٰهُ وَاسِعٌ عَلِیْمٌ
        </p>

        <p className="quran-tamil">
          "(நபியே!) அல்லாஹ்வுடைய பாதையில் தங்கள் பொருள்களைச் செலவு செய்கிறவர்களுடைய (பொருள்களின்) உதாரணம், ஒரு வித்தின் உதாரணத்தை ஒத்திருக்கிறது. அ(ந்த வித்)து ஏழு கதிர்களைத் தந்தது. ஒவ்வொரு கதிரிலும் நூறு வித்துக்கள் (ஆக, எழுநூறு வித்துக்கள் அந்த ஒரு வித்திலிருந்து) உற்பத்தியாயின. அல்லாஹ், தான் விரும்பியவர்களுக்கு (இதை மேலும்,) இரட்டிப்பாக்குகிறான். ஏனெனில், அல்லாஹ் (வழங்குவதில்) மிக விசாலமானவன், நன்கறிந்தவன்"
        </p>

        <p className="quran-translation">
          "The example of those who spend their wealth in the cause of Allah is that of a grain that sprouts into seven ears, each bearing one hundred grains. And Allah multiplies ˹the reward even more˺ to whoever He wills. For Allah is All-Bountiful, All-Knowing"
          <span>— Qur'an 2:261</span>
        </p>

        <div className="audio-player">
          <button className="play-button" onClick={togglePlay} aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
            )}
          </button>
          <audio ref={audioRef} preload="metadata">
            <source src="/assets/quran-261.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  );
};

// Mission Component
const Mission = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="about" className="content-section">
      <div className={`section-header ${isVisible ? 'animate-in' : ''}`} ref={ref}>
        <span>Our Mission</span>
        <h3>Charity that creates lasting impact</h3>
      </div>
      <p className={`section-text ${isVisible ? 'animate-in delay-1' : ''}`}>
        We channel generosity into meaningful programs that uplift families,
        strengthen communities, and protect dignity. Transparency and trust
        guide every initiative we undertake.
      </p>
    </section>
  );
};

// Projects Component
const Projects = () => {
  const [ref, isVisible] = useScrollAnimation();

  const projects = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      title: "Food Assistance",
      description: "Providing essential food supplies to families facing hardship, ensuring no one goes hungry."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
      title: "Education Support",
      description: "Scholarships and learning resources for children and youth to build brighter futures."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: "Community Care",
      description: "Emergency relief and long-term development programs for sustainable growth."
    }
  ];

  return (
    <section id="projects" className="content-section light">
      <div className={`section-header ${isVisible ? 'animate-in' : ''}`} ref={ref}>
        <span>Our Work</span>
        <h3>How we help communities</h3>
      </div>

      <div className="cards">
        {projects.map((project, index) => (
          <article key={index} className={isVisible ? `animate-in delay-${index + 1}` : ''}>
            <div className="card-icon">{project.icon}</div>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

// Stats Component
const Stats = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [counts, setCounts] = useState({ families: 0, meals: 0, students: 0 });

  useEffect(() => {
    if (!isVisible) return;

    const targets = { families: 500, meals: 50000, students: 250 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts(prev => ({
        families: Math.min(prev.families + Math.ceil(targets.families / steps), targets.families),
        meals: Math.min(prev.meals + Math.ceil(targets.meals / steps), targets.meals),
        students: Math.min(prev.students + Math.ceil(targets.students / steps), targets.students)
      }));
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className="stats-section" ref={ref}>
      <div className={`stats-grid ${isVisible ? 'animate-in' : ''}`}>
        <div className="stat-item">
          <div className="stat-number">{counts.families.toLocaleString()}+</div>
          <div className="stat-label">Families Supported</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.meals.toLocaleString()}+</div>
          <div className="stat-label">Meals Distributed</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{counts.students.toLocaleString()}+</div>
          <div className="stat-label">Students Educated</div>
        </div>
      </div>
    </section>
  );
};

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
            <a href="#volunteer">Volunteer</a>
            <a href="#partner">Partner With Us</a>
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
        <p>© {year} MBAM · All rights reserved · Built with ❤️ for humanity</p>
      </div>
    </footer>
  );
};

// Main App Component
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
      <Mission />
      <Projects />
      <Stats />
      <DonateSection />
      <Footer />
    </div>
  );
}

export default App;
