import React from 'react';
import styles from './Education.module.scss';
import Image from 'next/dist/client/image';

const Education = () => {
  return (
    <section className={styles.Education} id="education">
      <div className={styles.inner}>
        <h1>My Education:</h1>
        <p>
          Last year, I decided to completely change my professional activity and
          started studying for courses at the Beetroot Academy, where I learned
          from zero the basics of creating web products, CSS, HTML, Javascript
          languages, Vue framework. Further, I continue to develop myself in
          this, making projects that are interesting to me and this way I am
          studied the React framework and all its technologies.
        </p>
      </div>
      <div className="skills">
        <Image
          src="/Diploma.png"
          alt="diploma"
          width="350px"
          height="250px"
          style={{ borderRadius: '1rem' }}
        />
      </div>
    </section>
  );
};

export default Education;
