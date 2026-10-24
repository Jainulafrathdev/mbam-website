
import useScrollAnimation  from '../Utilities/useScrollAnimation';
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
export default Mission;