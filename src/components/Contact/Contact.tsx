import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Box, Center, Text, Button } from "@chakra-ui/react";
import routes from "../../utils/routes";

export const Contact: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <Helmet>
        <title>Keanu Moreno-Hilaire | Contact Me</title>
      </Helmet>
      <Box className="pageWrapper">
        <Box
          textAlign="center"
          margin="20px 0"
        >
          <Text
            as="h1"
            textStyle="pageTitle"
            color="lilac.500"
            mb={{ base: 4, md: 6 }}
          >
            Get In Touch
          </Text>
          <Text m="20px 0px" fontSize="50px">
            👋🏾
          </Text>
          <Text
            textStyle="body"
            color="gray.500"
            maxWidth="500px"
            margin="0 auto"
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            If you have a project in mind or just want to say hi, feel free to reach out!
          </Text>
        </Box>
        <Center>
          <Box
            display="flex"
            justifyContent="space-around"
            gap="20px"
            padding="20px 0"
            width="100%"
            maxWidth="500px"
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "center", md: "flex-start" }}
            height={{ base: "200px", md: "auto" }}
          >
            <Link to={routes.LINKEDIN} target="_blank" rel="noopener noreferrer">
              <Button
                variant="glass"
              >
                View my LinkedIn
              </Button>
            </Link>
            <Link to={routes.EMAIL_ME}>
              <Button variant="glass">Email Me</Button>
            </Link>
          </Box>
        </Center>
      </Box>
    </motion.div>
  );
};
