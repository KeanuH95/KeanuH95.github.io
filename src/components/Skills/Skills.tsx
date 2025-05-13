import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { container, item } from "../../utils/textAnimation";
import { Box, Text } from "@chakra-ui/react";

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
      <Box className="pageWrapper" >
        <Text fontWeight="bold" as="h1" fontSize="42px" color="lilac.500" mb="20px">
          My Skill Set
        </Text>
        <Text fontWeight="bold" color="gray.500" fontSize="24px">
          Here are some technologies I've worked with:
        </Text>
        <Box
          display="flex"
          maxW="800px"
          width="100%"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          marginTop="20px"
        >
          {skillCategories.map((category, index) => (
            <motion.ul key={index} variants={container} initial="hidden" animate="show" color="gray.500" >
              <Text color="gold.500" textAlign="center" fontSize="20px" marginBottom="10px">
                {category.title}
              </Text>
              <Box display="flex" flexDirection="column" gap="8px" alignItems="center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li key={skillIndex} variants={item} >
                    <Text color="gray.500" fontFamily="code" listStyleType="none">{skill}</Text>
                  </motion.li>
                ))}
              </Box>
            </motion.ul>
          ))}
        </Box>
        <Text as="p" color="gray.500" marginTop="20px">
          *Not included is a vast array of third-party web integrations for analytics, ads, payment processing, logging, and more.
        </Text>
      </Box>
    </motion.div>
  );
};
