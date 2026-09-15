import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import OarHealthLogo from "../../images/OarHealthLogo.jpg";
import ShoeboxLogo from "../../images/ShoeboxLogo.png";
import KitLogo from "../../images/KitLogo.png";
import JPHDesignLogo from "../../images/JPHDesignLogo.png";
import Stealth from "../../images/Stealth.jpg";
import StepfulLogo from "../../images/StepfulLogo.png";
import ElegyLogo from "../../images/ElegyLogo.svg";
import EstelleLogo from "../../images/EstelleLogo.png";
import PromptGoatLogo from "../../images/PromptGoatLogoDark.png";
import { ContentCard } from "../ContentCard/ContentCard";
import { Box, Text } from '@chakra-ui/react';

export const Work: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .8, ease: "easeInOut" }}
    >
      <Helmet>
        <title>Keanu Moreno-Hilaire | My Work</title>
      </Helmet>
      <Box className="pageWrapper">
        <Box textAlign="center" width="100%" paddingBottom="80px">
          <Text textStyle="pageTitle" color="lilac.500" mb={{ base: 4, md: 6 }}>Companies and Projects I've Helped Build</Text>
          <Box py={{ base: 8, md: 14 }} justifyItems="center" display="grid" gridTemplateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)"}}  gridTemplateRows="repeat(2, 1fr)" gap="30px">
             <ContentCard
              cardTitle={"Elegy"}
              cardImage={ElegyLogo}
              cardDesc={"Elegy is a dedicated online platform designed to help families organize practical and financial support following the death of a loved one."}
              cardLink={"https://www.elegy.co/"}
            />
            <ContentCard
              cardTitle={"Estelle"}
              cardImage={EstelleLogo}
              cardDesc={"Estelle is an on-call text-based personal astrologer and app that provides personalized astrology readings, relationship guidance, and birth chart insights."}
              cardLink={"https://www.askestelle.com/"}
            />
             <ContentCard
              cardTitle={"Stepful"}
              cardImage={StepfulLogo}
              cardDesc={"Stepful specializes in training and placing healthcare professionals in various healthcare roles, including Medical Assistants, Pharmaceutical Technicians, Surgical Technicians, and Phlebotomists."}
              cardLink={"https://www.stepful.com/"}
            />
            <ContentCard
              cardTitle={"PromptGoat"}
              cardImage={PromptGoatLogo}
              cardDesc={"PromptGoat is a lightweight browser extension that automatically upgrades your basic text inputs into expert-level AI prompts."}
              cardLink={"https://promptgoat.co/"}
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
      </Box>
    </motion.div>
  );
};
