import React from 'react';
import styles from './Intro.module.scss';
import Image from 'next/dist/client/image';

const Intro = () => {
  return (
    <section className={styles.Intro}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>I`m Ihor Kholod</h1>
          <p>Frontend Developer</p>
        </div>
        <div className={styles.image}>
          <Image src="/ava.jpg" alt="avatar" width="400px" height="400px" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
