import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import OarHealthLogo from "../../images/OarHealthLogo.jpg";
import ShoeboxLogo from "../../images/ShoeboxLogo.png";
import KitLogo from "../../images/KitLogo.png";
import JPHDesignLogo from "../../images/JPHDesignLogo.png";
import Stealth from "../../images/Stealth.jpg";
import StepfulLogo from "../../images/StepfulLogo.png";
import { ContentCard } from "../ContentCard/ContentCard";
import { Box, Text, Image } from '@chakra-ui/react';

export const Work: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .8, ease: "easeInOut" }}
    >
      <Helmet>
        <title>Keanu Hilaire | My Work</title>
      </Helmet>
      <Box className="pageWrapper">
        <Box fontFamily="'Poppins', sans-serif" textAlign="center" width="100%">
          <Text color="lilac.500" fontSize="42px" fontWeight="bold">Companies and Projects I've Helped Build</Text>
          <Box p="30px 0px" justifyItems="center" display="grid" gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}}  gridTemplateRows="repeat(2, 1fr)" gap="30px">
             <ContentCard
              cardTitle={"Stepful"}
              cardImage={StepfulLogo}
              cardDesc={"Stepful specializes in training and placing healthcare professionals in various healthcare roles, including Medical Assistants, Pharmaceutical Technicians, Surgical Technicians, and Phlebotomists."}
              cardLink={"https://www.stepful.com/"}
            />
            <ContentCard
              cardTitle={"Oar Health"}
              cardImage={OarHealthLogo}
              cardDesc={"A service that provides people who are ready to change their relationship with drinking access to medical support and science-based solutions."}
              cardLink={"https://www.oarhealth.com/"}
            />
            <ContentCard
              cardTitle={"Shoebox"}
              cardImage={ShoeboxLogo}
              cardDesc={"The smartest home base for your sports cards. Scan your cards to discover your next grail, follow market pricing, and showcase your collection."}
              cardLink={"https://myshoebox.app/"}
            />
            <ContentCard
              cardTitle={"Kit Renovation"}
              cardImage={KitLogo}
              cardDesc={"A stress-free, fixed-price bathroom remodel including design, materials, project management and construction."}
            />
            <ContentCard
              cardTitle={"JPH Design"}
              cardImage={JPHDesignLogo}
              cardDesc={"A Montreal based retail design company that offers concept development, 3D renders, CAD digitalization and more."}
              cardLink={"https://jph-design.com/"}
            />
            <ContentCard
              cardTitle={"Stealth Startup"}
              cardImage={Stealth}
              cardDesc={"A music startup that empowers both artists and fans. This project had me developing a Java backend and diving into a wide range of AWS services."}
            />
          </Box>
        </Box>
        <Box fontFamily="'Poppins', sans-serif" textAlign="center" width="100%">
          <Text color="lilac.500" fontSize="36px" fontWeight="bold">My Recent Contributions</Text>
          <Box width="80%" m="0 auto">
            <Image width="100%" height="auto" src="https://ghchart.rshah.org/460673/KeanuH95" alt="GH Chart"></Image>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};
