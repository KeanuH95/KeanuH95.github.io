import React from "react";
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        © {new Date().getFullYear()} Keanu Hilaire
      </div>
    </div>
  );
};
