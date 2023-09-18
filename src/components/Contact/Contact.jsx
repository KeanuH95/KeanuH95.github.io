import React from "react";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import styles from './Contact.module.scss';
import BGInitials from "../BGInitials/BGInitials";

function Contact() {
  return (
    <>
      <div className={styles.pageWrapper}>
        <div className={styles.contactInfo}>
          <h1>Get In Touch</h1>
          <p>
            I am currently looking for new work opprotunities and 
            hope to find a position that will allow me to grow professionally, 
            earn leadership and develop cool products.
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
      <BGInitials />
    </>
  );
}

export default Contact;
