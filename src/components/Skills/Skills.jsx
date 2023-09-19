import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { container, item } from "../../utils/textAnimation";
import styles from './Skills.module.scss';

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .8, ease: "easeInOut" }}
    >
      <Helmet>
        <title>Keanu Hilaire | My Skills</title>
      </Helmet>
      <div className={styles.pageWrapper}>
        <div className={styles.skillsContent}>
          <h1>My Skill Set</h1>
          <h2>Here are some technologies I've worked with:</h2>
          <div className={styles.skillLists}>
            <motion.ul variants={container} initial="hidden" animate="show">
              <h3>Languages:</h3>
              <motion.li variants={item}>Java</motion.li>
              <motion.li variants={item}>Javascript/Typescript</motion.li>
              <motion.li variants={item}>Ruby</motion.li>
              <motion.li variants={item}>HTML/CSS</motion.li>
              <motion.li variants={item}>SQL</motion.li>
              <motion.li variants={item}>Python</motion.li>
              <motion.li variants={item}>C++</motion.li>
            </motion.ul>
            <motion.ul variants={container} initial="hidden" animate="show">
              <h3>Frameworks/Libraries:</h3>
              <motion.li variants={item}>Ruby on Rails</motion.li>
              <motion.li variants={item}>Spring Boot</motion.li>
              <motion.li variants={item}>React</motion.li>
              <motion.li variants={item}>Redux</motion.li>
            </motion.ul>
            <motion.ul variants={container} initial="hidden" animate="show">
              <h3>Other Technologies:</h3>
              <motion.li variants={item}>AWS Cloud Products</motion.li>
              <motion.li variants={item}>Heroku</motion.li>
            </motion.ul>
          </div>
          <p>*Not included is a vast array of third party web integrations for analytics, ads, payment processing, logging, and more.</p>
        </div>   
      </div>
    </motion.div>

  );
}

export default Skills;
