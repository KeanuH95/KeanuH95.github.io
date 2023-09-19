import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./Home.module.scss";
import Silhouette from "../../images/silhouette.png"
import routes from "../../utils/routes";

function Home() {
    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{ opacity: 0 }}
            transition={{duration: 1, ease: "easeInOut"}}
        >
            <Helmet>
                <title>Keanu Hilaire | Portfolio</title>
            </Helmet>
            <div className={styles.pageWrapper}>
                <div className={styles.homeIntro}>
                    <div className={styles.introText}>
                        <span>Hey, my name is</span>
                        <h2>Keanu Hilaire.</h2>
                        <h3>I like to build cool products.</h3>
                        <p>
                            I'm a software engineer with based in Brooklyn specializing in backend, 
                            web and microservices development. I have a strong history of developing application 
                            features and software solutions to enhance user experience on several startups. 
                        </p>
                        <Link to={routes.CONTACT_ROUTE}>
                            <button className={styles.contactButton}>Contact Me</button>
                        </Link>
                        
                    </div>
                    <div className={styles.portraitImgContainer}>
                        <img src={Silhouette} alt="Portrait"></img>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;