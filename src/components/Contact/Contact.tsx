import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import styles from './Contact.module.scss';

export const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .8, ease: "easeInOut" }}
    >
      <Helmet>
        <title>Keanu Hilaire | Contact Me</title>
      </Helmet>
      <div className={styles.pageWrapper}>
        <div className={styles.contactInfo}>
          <h1>Get In Touch</h1>
          <p style={{fontSize: '50px', margin: '20px 0px'}}>👋🏾</p>
          <p>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            If you have a project in mind or just want to say hi, feel free to reach out!
          </p>
        </div>
        <div className={styles.contactButtons}>
          <Link to={routes.LINKEDIN} target="_blank" rel="noopener noreferrer">
            <button className={styles.contactButton}>View my LinkedIn</button>
          </Link>
          <Link to={routes.EMAIL_ME}>
            <button className={styles.contactButton}>Email Me</button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
