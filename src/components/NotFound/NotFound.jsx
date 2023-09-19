import React from "react";
import styles from "./NotFound.module.scss";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";

function NotFound() {
  const theme = useTheme();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.notFoundContent}>
        <h1>404</h1>
        <h2>Page not found</h2>
        <div className={styles.desc}>
          The page you are looking for doesn't exist or an other error occurred.
        </div>
        <div style={{background: `${theme.shadow}`}} className={styles.homeBtn}>
          <Link to={routes.HOME_ROUTE}>RETURN TO HOMEPAGE</Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
