import { useState, useRef } from 'react';
import useScrollAnimation from '../Utilities/useScrollAnimation';


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
            <source src="/assets/Quran-261.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </section>
  );
};

export default QuranSection;