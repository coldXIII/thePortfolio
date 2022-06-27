import React from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
