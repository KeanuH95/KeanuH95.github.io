import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { container, item } from "../../utils/textAnimation";
import styles from './Skills.module.scss';

const skillCategories = [
  {
    title: "Languages:",
    skills: ["Java", "Javascript/Typescript", "Ruby", "HTML/CSS", "SQL"]
  },
  {
    title: "Frameworks/Libraries:",
    skills: ["Ruby on Rails", "Spring Boot", "React", "GraphQL"]
  },
  {
    title: "Other Technologies:",
    skills: ["AWS Cloud Products", "Heroku"]
  }
];

export const Skills: React.FC = () => {
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
            {skillCategories.map((category, index) => (
              <motion.ul key={index} variants={container} initial="hidden" animate="show">
                <h3>{category.title}</h3>
                {category.skills.map((skill, skillIndex) => (
                  <motion.li key={skillIndex} variants={item}>{skill}</motion.li>
                ))}
              </motion.ul>
            ))}
          </div>
          <p>*Not included is a vast array of third party web integrations for analytics, ads, payment processing, logging, and more.</p>
        </div>   
      </div>
    </motion.div>
  );
};
