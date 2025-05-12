import { useSelector } from "react-redux";
import { selectLanguagePercentages, selectLastSiteUpdate } from "../../redux/slices/siteInfoSlice";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import styles from "./Home.module.scss";
import Silhouette from "../../images/silhouette.png";
import routes from "../../utils/routes";


export const Home: React.FC = () => {
    const latestUpdate = useSelector(selectLastSiteUpdate) as string | null;
    const languagePercentages = useSelector(selectLanguagePercentages) as Record<string, number> | null;

    return (
            <>
            <Helmet>
                <title>Keanu Hilaire | Portfolio</title>
            </Helmet>
            <div className={styles.pageWrapper}>
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{ opacity: 0 }}
                    transition={{duration: 1, ease: "easeInOut"}}
                >
                <div className={styles.homeIntro}>
                    <div className={styles.introText}>
                        <span>Hey, my name is</span>
                        <h2>Keanu Hilaire.</h2>
                        <h3>I like to build cool products.</h3>
                        <p>
                            I'm a software engineer based in Brooklyn specializing in backend, 
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
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <div className={styles.aboutSite}>
                        <h2>About This Site</h2>
                        <p>This portfolio was built using React, Redux, and Framer Motion. I've also integrated the Github API in order to provide the information below.</p>
                        <h3>Latest Update:</h3>
                        <p>{latestUpdate ? new Date(latestUpdate).toLocaleDateString('en-US') : "No updates available"}</p>
                        <h3>Languages Used:</h3>
                        <div className={styles.aboutLanguages}>
                            {
                                languagePercentages ? (Object.entries(languagePercentages).map((lang, index) => {
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, background: `radial-gradient(closest-side, white 90%, transparent 80% 100%), conic-gradient(#98821e 0%, white 0)`, borderRadius: '50%' }}
                                            whileInView={{ opacity: 1, background: `radial-gradient(closest-side, white 90%, transparent 80% 100%), conic-gradient(#98821e ${lang[1]}%, white 0)`, borderRadius: '50%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: "easeInOut" }}
                                            whileHover={{ scale: 1.2 }}
                                        >
                                            <div className={styles.languageBubble}>
                                                <p>{lang[0]}</p>
                                                <p>{`${lang[1]}%`}</p>    
                                            </div>
                                        </motion.div>
                                    ) 
                                })) : (
                                    <p>No language data available</p>
                                )
                            }
                        </div>
                    </div>
                </motion.div>    
            </div>
        </>
    );
}