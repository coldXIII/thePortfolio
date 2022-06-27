import React from 'react';
import styles from './About.module.scss';
import Image from 'next/dist/client/image';

const About = () => {
  return (
    <section className={styles.About} id="about">
      <div className={styles.image}>
        <Image
          src="/photo.jpg"
          alt="my photo"
          width="300px"
          height="320px"
          style={{ borderRadius: '1rem' }}
        />
      </div>
      <div className={styles.content}>
        <h1>About Me</h1>
        <div className='line' style={{width:'15rem'}}></div>
        <p>
          Hi, my name is Ihor. I`m an enthusiastic and detail-oriented Frontend
          Software Engineer seeking an entry-level position to improve and use
          my skills in coding, troubleshooting complex problems, and assisting
          in the timely completion of projects.
          <br />
          <br />
          As a beginner, I can`t boast of having commercial experience in IT,
          but i really have a passion for software development and constantly
          seeking for new ways to grow and expand my skill set. I am constantly
          developing several projects with Vue and React adding new
          functionality to them, fixing the code and this way I`m learning new
          technologies.
        </p>
      </div>
    </section>
  );
};

export default About;
