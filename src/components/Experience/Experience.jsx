import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { container, item } from "../../utils/textAnimation";
import { Link } from "react-router-dom";
import styles from './Experience.module.scss';

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .8, ease: "easeInOut" }}
    >
      <Helmet>
        <title>Keanu Hilaire | My Experience</title>
      </Helmet>
      <div className={styles.pageWrapper}>
        <div className={styles.experienceContent}>
          <h1>Where I've Worked</h1>
          <div className={styles.professionalExperience}>
            <div className={styles.experienceItem}>
              <div className={styles.jobTitle}>Software Engineer</div>
              <Link target="_blank" rel="noopener noreferrer" to={"https://buildwithnewco.com/"} className={styles.jobEmployer}>Newco: An IAC Incubator</Link>
              <div className={styles.jobTime}>August 2020 - Present</div>
              <div className={styles.jobDesc}>
                <motion.ul variants={container} initial="hidden" animate="show">
                  <motion.li variants={item}>Collaborated closely with UX/UI designers in order to implement engaging and intuitive user experiences on web platforms</motion.li>
                  <motion.li variants={item}>Built and maintained multiple data layers and APIs in order to serve and support applications</motion.li>
                  <motion.li variants={item}>Designed and developed multiple key features and refactors across different microservices</motion.li>
                  <motion.li variants={item}>Led collaborative initiatives with partner companies, ensuring compatibility and interoperability of software systems</motion.li>
                </motion.ul>
              </div>
            </div>
            <div className={styles.experienceItem}>
              <div className={styles.jobTitle}>Pre-Calculus/Robotics Teacher</div>
              <Link target="_blank" rel="noopener noreferrer" to={"https://www.northwoodschool.org/"} className={styles.jobEmployer}>Northwood School</Link>
              <div className={styles.jobTime}>June 2019 - June 2020</div>
              <div className={styles.jobDesc}>
                <motion.ul variants={container} initial="hidden" animate="show">
                  <motion.li variants={item}>Assisted students in learning the proper methods for Robotics programming</motion.li>
                  <motion.li variants={item}>Assisted students in building and testing robot drivetrains and components</motion.li>
                </motion.ul>
              </div>
            </div>
            <div className={styles.experienceItem}>
              <div className={styles.jobTitle}>Software Engineer Intern</div>
              <Link target="_blank" rel="noopener noreferrer" to={"http://www.friendsfamily.co/"} className={styles.jobEmployer}>Friends & Family</Link>
              <div className={styles.jobTime}>June 2018 - August 2018</div>
              <div className={styles.jobDesc}>
                <motion.ul variants={container} initial="hidden" animate="show">
                  <motion.li variants={item}>Developed frontend code for various applications (HTML, CSS, Javascript)</motion.li>
                  <motion.li variants={item}>Developed backend code for various applications (Ruby)</motion.li>
                  <motion.li variants={item}>Built features for internal and customer facing applications (RoR)</motion.li>
                </motion.ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    
  );
}

export default Experience;
