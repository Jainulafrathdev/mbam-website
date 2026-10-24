import Carousel from './Carousel';
import useScrollAnimation  from '../Utilities/useScrollAnimation';
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


export default Hero;