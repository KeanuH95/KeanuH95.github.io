import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { container, item } from "../../utils/textAnimation";
import { Badge, Box, Flex, Text } from "@chakra-ui/react";

const skillCategories = [
  {
    title: "Languages:",
    skills: ["Java", "Javascript/Typescript", "Ruby", "HTML/CSS", "SQL"]
  },
  {
    title: "Frameworks/Libraries:",
    skills: ["Ruby on Rails", "Spring Boot", "React", "GraphQL", "Redux", "ChakraUI", "Redis", "tRPC"]
  },
  {
    title: "Other Technologies:",
    skills: ["AWS Cloud Products", "Heroku", "DataDog", "Preset", "Railway"]
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
        <title>Keanu Moreno-Hilaire | My Skills</title>
      </Helmet>
      <Box className="pageWrapper" >
        <Text as="h1" textStyle="pageTitle" color="lilac.500" mb={{ base: 4, md: 6 }}>
          My Skill Set
        </Text>
        <Text textStyle="subtitle" textAlign="center" color="gray.500">
          Here are some technologies I've worked with:
        </Text>
        <Box
          display="flex"
          maxW="800px"
          width="100%"
          justifyContent="space-between"
          flexDirection={{ base: "column", md: "row" }}
          marginTop="20px"
          gap="20px"
        >
          {skillCategories.map((category, index) => (
            <motion.ul key={index} variants={container} initial="hidden" animate="show" style={{ flex: 1 }}>
              <Text fontFamily="heading" fontWeight="semibold" fontSize={{ base: "md", md: "lg" }} color="gold.400" textAlign="center" marginBottom="14px">
                {category.title}
              </Text>
              <Flex flexWrap="wrap" gap="10px" justifyContent="center" maxW="260px" mx="auto">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li key={skillIndex} variants={item} style={{ listStyleType: "none" }}>
                    <Badge variant="glass" fontSize="13px">{skill}</Badge>
                  </motion.li>
                ))}
              </Flex>
            </motion.ul>
          ))}
        </Box>
        <Text as="p" textStyle="body" color="gray.500" marginTop="20px">
          *Not included is a vast array of third-party web integrations for analytics, ads, payment processing, logging, and more.
        </Text>
      </Box>
    </motion.div>
  );
};
