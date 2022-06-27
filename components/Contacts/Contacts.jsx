import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <section className={styles.Contacts} id="contacts">
      <h1>My Contacts:</h1>
      <div
        className="line"
        style={{ width: '15rem', filter: 'invert(1)' }}
      ></div>
      <ul>
        <li>
          <b>City:</b> Kyiv
        </li>
        <li>
          <b>Phone Number:</b> +38(066)349-35-66
        </li>
        <li>
          <b>Email:</b> <i>kholodihor@gmail.com</i>
        </li>
        <li>
          <a target="_blank" href="https://t.me/iamcold666" rel="noreferrer">
            <b>Telegram</b>
          </a>
        </li>

        <li>
          <a
            href="https://github.com/coldXIII?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <b>Github</b>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=100008100491583"
            target="_blank"
            rel="noreferrer"
          >
            <b>Facebook</b>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ihor-kholod/"
            target="_blank"
            rel="noreferrer"
          >
            <b>Linkedin</b>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contacts;
