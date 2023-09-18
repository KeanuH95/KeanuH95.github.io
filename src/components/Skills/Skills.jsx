import React from "react";
import styles from './Skills.module.scss';
import BGInitials from "../BGInitials/BGInitials";

function Skills() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.skillsContent}>
        <h1>My Skill Set</h1>
        <h2>Here are some technologies I've worked with:</h2>
        <div className={styles.skillLists}>
          <ul>
            <h3>Languages:</h3>
            <li>Java</li>
            <li>Javascript/Typescript</li>
            <li>Ruby</li>
            <li>HTML/CSS</li>
            <li>SQL</li>
            <li>Python</li>
            <li>C++</li>
          </ul>
          <ul>
            <h3>Frameworks/Libraries:</h3>
            <li>Ruby on Rails</li>
            <li>Spring Boot</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
          <ul>
            <h3>Other Technologies:</h3>
            <li>AWS Cloud Products</li>
            <li>Heroku</li>
          </ul>
        </div>
        <p>*Not included are a vast array of third party web integrations for analytics, ads, payment processing and logging.</p>
      </div>
       
      <BGInitials />
    </div>
  );
}

export default Skills;
