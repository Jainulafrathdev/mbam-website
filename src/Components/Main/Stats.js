import React, { useState, useEffect } from 'react';
import  useScrollAnimation  from '../Utilities/useScrollAnimation';

// Stats Component
const Stats = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [counts, setCounts] = useState({ families: 0, meals: 0, students: 0 });

  useEffect(() => {
    if (!isVisible) return;

    const targets = { families: 500, meals: 10000, students: 250 };
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

export default Stats;