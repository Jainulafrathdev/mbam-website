import { useState, useEffect } from 'react';
import Header from './Components/Utilities/Header';
import Footer from './Components/Utilities/Footer';
import './App.css';
import Hero from './Components/Main/Hero';
import QuranSection from './Components/Main/Quran';
import Mission from './Components/Main/Mission';
import Projects from './Components/Main/Projects';
import GetInvolved from './Components/Main/Involved';
import Stats from './Components/Main/Stats';
import DonateSection from './Components/Main/Donate';

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
      <GetInvolved />
      <Stats />
      <DonateSection />
      <Footer />
    </div>
  );
}

export default App;