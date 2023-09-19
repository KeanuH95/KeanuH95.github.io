import React from "react";
import { motion } from "framer-motion";
import styles from "./Work.module.scss";
import OarHealthLogo from "../../images/OarHealthLogo.jpg";
import ShoeboxLogo from "../../images/ShoeboxLogo.png";
import KitLogo from "../../images/KitLogo.png";
import JPHDesignLogo from "../../images/JPHDesignLogo.png";
import KHLogo from "../../images/KHLogo.png";
import ContentCard from "../ContentCard/ContentCard";

function Work() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .8, ease: "easeInOut" }}
    >
      <div className={styles.pageWrapper}>
        <div className={styles.workContent}>
          <h1>Companies and Projects I've Helped Build</h1>
          <div className={styles.workProjects}>
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
              cardLink={"https://kitreno.com/"}
            />
            <ContentCard
              cardTitle={"JPH Design"}
              cardImage={JPHDesignLogo}
              cardDesc={"A Montreal based retail design company that offers concept development, 3D renders, CAD digitalization and more."}
              cardLink={"https://jph-design.com/"}
            />
            <ContentCard
              cardTitle={"Stealth Startup"}
              cardImage={KHLogo}
              cardDesc={"A music startup that empowers both artists and fans. This project had me developing a Java backend and diving into a wide range of AWS services."}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
