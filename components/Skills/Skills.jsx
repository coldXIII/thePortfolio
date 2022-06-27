import React from 'react';
import styles from './Skills.module.scss';

const Skills = () => {
  return (
    <section className={styles.Skills} id="skills">
      <div className={styles.title}>
        <h1>My Skills:</h1>
        <div className="line" style={{ width: '13rem' }}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.softskills}>
          <ul>
            <h3>Soft Skills:</h3>
            <li>Verbal and written communication skills</li>
            <li>Listening/understanding others</li>
            <li>Connection and consideration of colleagues</li>
            <li>Ability to think critically and rationally</li>
            <li>Problem-solving and creative thinking</li>
            <li>General ability to communicate clearly</li>
            <li>
              <strong>Foreign Languages:</strong> <em>English, Polish, Spanish</em>
            </li>
          </ul>
        </div>
        <div className={styles.hardskills}>
          <ul>
            <h3>Technical Skills:</h3>
            <li>HTML, CSS, JavaScript</li>
            <li>Vue, React</li>
            <li>SASS, PUG</li>
            <li>Bootstrap, Tailwind, WindyCSS</li>
            <li>Photoshop, Figma</li>
            <li>Vite, Webpack, Gulp</li>
            <li>Firebase, Sanity</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
