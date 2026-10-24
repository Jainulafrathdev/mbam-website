import React from 'react';
import useScrollAnimation  from '../Utilities/useScrollAnimation';

//Involved Component
const Involved = () => {
  const [ref, isVisible] = useScrollAnimation();

  const options = [
    {
      title: "Volunteer",
      description:
        "Support food distribution, events, and community programs with your time and skills.",
      icon: "🤝"
    },
    {
      title: "Partner With Us",
      description:
        "Collaborate with MBAM to create meaningful and sustainable social impact.",
      icon: "🌍"
    },
    {
      title: "Sponsor a Family",
      description:
        "Help provide essential support for struggling families through monthly contributions.",
      icon: "❤️"
    }
  ];

  return (
    <section id="involved" className="content-section">
      <div
        className={`section-header ${isVisible ? "animate-in" : ""}`}
        ref={ref}
      >
        <span>Get Involved</span>
        <h3>Be part of the change</h3>
      </div>

      <div className="cards">
        {options.map((item, index) => (
          <article
            key={index}
            className={isVisible ? `animate-in delay-${index + 1}` : ""}
          >
            <div
              className="card-icon"
              style={{ fontSize: "2.5rem" }}
            >
              {item.icon}
            </div>

            <h4>{item.title}</h4>
            <p>{item.description}</p>

            <a
              href="#contact"
              className="btn primary"
              style={{ marginTop: "1.5rem" }}
            >
              Join Now
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Involved;