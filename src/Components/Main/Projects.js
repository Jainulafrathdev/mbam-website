import React from 'react';
import  useScrollAnimation  from '../Utilities/useScrollAnimation';

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

export default Projects;
