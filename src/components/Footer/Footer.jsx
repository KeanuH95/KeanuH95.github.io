import React from "react";
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>© {new Date().getFullYear()} Keanu Hilaire</div>
    </div>
  );
}

export default Footer;
