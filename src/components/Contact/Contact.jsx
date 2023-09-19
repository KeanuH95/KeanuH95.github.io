import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import styles from './Contact.module.scss';

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .8, ease: "easeInOut" }}
    >
      <div className={styles.pageWrapper}>
        <div className={styles.contactInfo}>
          <h1>Get In Touch</h1>
          <p style={{fontSize: '50px', margin: '20px 0px'}}>👋🏾</p>
          <p>
            I am currently looking for new work opprotunities and 
            hope to find a position that will allow me to grow professionally, 
            gain leadership skills, and develop cool products.
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
}

export default Contact;
