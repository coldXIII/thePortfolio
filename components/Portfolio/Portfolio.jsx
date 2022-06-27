import React, { useEffect, useState } from 'react';
import styles from './Portfolio.module.scss';
import Image from 'next/dist/client/image';
import 'tippy.js/dist/tippy.css';
import myProjects from '../../store/myProjects';

const Portfolio = () => {
  const [showTooltip, setShowTooltip] = useState(null);
  const [projects, setProjects] = useState(myProjects);
  const toggleShowTooltip = (index) => {
    setShowTooltip(index);
  };

  const filterProjects = (category) => {
    const filteredProjects = myProjects.filter((currenProjects) => {
      return currenProjects.category === category;
    });
    setProjects(filteredProjects);
  };
  return (
    <section className={styles.Portfolio} id="projects">
      <div className={styles.title}>
        <h1>My Projects:</h1>
        <div className="line" style={{ width: '15rem' }}></div>
      </div>
      <div className={styles.tabs}>
        <span onClick={() => setProjects(myProjects)}>All</span>
        <span onClick={() => filterProjects('vue')}>Vue</span>
        <span onClick={() => filterProjects('react')}>React</span>
      </div>
      <div className={styles.gallery}>
        {projects.map((item, index) => (
          <div className={styles.image} key={index}>
            <span
              className={styles.tooltip}
              onClick={() => toggleShowTooltip(index)}
              style={{ cursor: 'pointer', marginBottom: '1rem' }}
            >
              💬
            </span>
            <a href={item.link} target="_blank" rel="noreferrer">
              <Image
                src={item.image}
                alt="photo"
                width="450px"
                height="280px"
                style={{ borderRadius: '1rem' }}
              />
              {showTooltip === index && (
                <div className={styles.tooltipbox}>
                  <p>{item.tooltip}</p>
                </div>
              )}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
