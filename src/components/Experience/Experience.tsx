import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { container, item } from "../../utils/textAnimation";
import { Link } from "react-router-dom";
import styles from './Experience.module.scss';

const experiences = [
   {
    jobTitle: "Product Engineer",
    employer: "Stepful",
    employerLink: "https://stepful.com/",
    time: "December 2023 - Present",
    descriptions: [
      "Designed and maintained platforms for coordinators, coaches, and managers to optimize student success in finding job opportunities post graduations",
      "Implemented features to enable thousands of students to match with clinics and pharmacies all over the US",
      "Designed and developed an integration with Hubspot to import and synchronize over 200k healthcare companies to the platform",
    ]
  },
  {
    jobTitle: "Software Engineer",
    employer: "Newco: An IAC Incubator",
    employerLink: "https://buildwithnewco.com/",
    time: "August 2020 - October 2023",
    descriptions: [
      "Collaborated closely with UX/UI designers in order to implement engaging and intuitive user experiences on web platforms",
      "Built and maintained multiple data layers and APIs in order to serve and support applications",
      "Designed and developed multiple key features and refactors across different microservices",
      "Led collaborative initiatives with partner companies, ensuring compatibility and interoperability of software systems"
    ]
  },
  {
    jobTitle: "Pre-Calculus/Robotics Teacher",
    employer: "Northwood School",
    employerLink: "https://www.northwoodschool.org/",
    time: "June 2019 - June 2020",
    descriptions: [
      "Assisted students in learning the proper methods for Robotics programming",
      "Assisted students in building and testing robot drivetrains and components"
    ]
  },
  {
    jobTitle: "Software Engineer Intern",
    employer: "Friends & Family",
    employerLink: "http://www.friendsfamily.co/",
    time: "June 2018 - August 2018",
    descriptions: [
      "Developed frontend code for various applications (HTML, CSS, Javascript)",
      "Developed backend code for various applications (Ruby)",
      "Built features for internal and customer facing applications (RoR)"
    ]
  }
];

export const Experience: React.FC = () => {
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
            {experiences.map((experience, index) => (
              <div key={index} className={styles.experienceItem}>
                <div className={styles.jobTitle}>{experience.jobTitle}</div>
                <Link target="_blank" rel="noopener noreferrer" to={experience.employerLink} className={styles.jobEmployer}>{experience.employer}</Link>
                <div className={styles.jobTime}>{experience.time}</div>
                <div className={styles.jobDesc}>
                  <motion.ul variants={container} initial="hidden" animate="show">
                    {experience.descriptions.map((desc, descIndex) => (
                      <motion.li key={descIndex} variants={item}>{desc}</motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
