import React from "react";
import styles from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <h1>404</h1>
        <h2>Page not found</h2>
        <div className={styles.desc}>
          The page you are looking for doesn't exist or an other error occurred.
        </div>
        <div className={styles.homeBtn}>
          <a href={"/"}>RETURN TO HOMEPAGE</a>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
