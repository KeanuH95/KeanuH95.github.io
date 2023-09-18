import React from "react";
import styles from './Experience.module.scss';

function Experience() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.experienceContent}>
        <h1>Where I've Worked</h1>
        <div className={styles.professionalExperience}>
          <div className={styles.experienceItem}>
            <div className={styles.jobTitle}>Software Engineer</div>
            <div className={styles.jobEmployer}>Newco: An IAC Incubator</div>
            <div className={styles.jobTime}>August 2020 - Present</div>
            <div className={styles.jobDesc}>
              <ul>
                <li>Collaborated closely with UX/UI designers in order to implement engaging and intuitive user experiences on web platforms</li>
                <li>Built and maintained multiple data layers and APIs in order to serve and support applications</li>
                <li>Designed and developed multiple key features and refactors across different microservices</li>
                <li>Led collaborative initiatives with partner companies, ensuring compatibility and interoperability of software systems</li>
              </ul>
            </div>
          </div>
          <div className={styles.experienceItem}>
            <div className={styles.jobTitle}>Pre-Calculus/Robotics Teacher</div>
            <div className={styles.jobEmployer}>Northwood School</div>
            <div className={styles.jobTime}>June 2019 - June 2020</div>
            <div className={styles.jobDesc}>
              <ul>
                <li>Assisted students in learning the proper methods for Robotics programming</li>
                <li>Assisted students in building and testing robot drivetrains and components</li>
              </ul>
            </div>
          </div>
          <div className={styles.experienceItem}>
            <div className={styles.jobTitle}>Software Engineer Intern</div>
            <div className={styles.jobEmployer}>Friends & Family</div>
            <div className={styles.jobTime}>June 2018 - August 2018</div>
            <div className={styles.jobDesc}>
              <ul>
                <li>Developed frontend code for various applications (HTML, CSS, Javascript)</li>
                <li>Developed backend code for various applications (Ruby)</li>
                <li>Built features for internal and customer facing applications (RoR)</li>
              </ul>
            </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Experience;
