import { useSelector } from "react-redux";
import { selectLanguagePercentages, selectLastSiteUpdate } from "../../redux/slices/siteInfoSlice";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Box, Button, Text, Image } from "@chakra-ui/react";
import styles from "./Home.module.scss";
import Silhouette from "../../images/Headshot.png";
import routes from "../../utils/routes";


export const Home: React.FC = () => {
    const latestUpdate = useSelector(selectLastSiteUpdate) as string | null;
    const languagePercentages = useSelector(selectLanguagePercentages) as Record<string, number> | null;

    return (
            <>
            <Helmet>
                <title>Keanu Hilaire | Portfolio</title>
            </Helmet>
            <Box className="pageWrapper">
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{ opacity: 0 }}
                    transition={{duration: 1, ease: "easeInOut"}}
                >
                <Box position="relative" pt={{base: "30px", md: "0px"}} zIndex={2} display="flex" flexDirection={{base: "column", md: "row"}} justifyContent="space-between" alignItems={{base: "center", md: "flex-start"}}>
                    <Box>
                        <Text color="gold.500" fontSize="md" fontFamily="code">Hey, my name is</Text>
                        <Text color="lilac.500" fontSize={{base: "3xl", md: "6xl"}} fontWeight="bold">Keanu Hilaire.</Text>
                        <Text color="gray.500" mb="10px"lineHeight="0 0" opacity=".7" fontWeight="bold" fontSize={{base: "2xl", md: "4xl"}}>I like to build cool products.</Text>
                        <Text color="gray.500" width={{base: "100%", md: "80%"}} lineHeight="1.4" pb="20px">
                            I'm a software engineer based in Brooklyn specializing in backend, 
                            web and microservices development. I have a strong history of developing application 
                            features and software solutions to enhance user experience on several startups. 
                        </Text>
                        <Link to={routes.CONTACT_ROUTE}>
                            <Button variant="outline">Contact Me</Button>
                        </Link>
                        
                    </Box>
                    <Box alignSelf="center" zIndex="-1" height="auto" maxW={{base: "100%", md: "40%"}} pt={{base: "30px", md: "0px"}} opacity=".8" className={styles.portraitImgContainer}>
                        <Image height="100%" width="100%" filter="grayscale(1) blur(.5px)" src={Silhouette} alt="Portrait"></Image>
                    </Box>
                </Box>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <Box p={{base: "30px 0px", md: "50px 0px"}} fontFamily="'Poppins', sans-serif" textAlign="center" width="100%"  className={styles.aboutSite}>
                        <Text fontSize="2xl" fontWeight="bold" color="lilac.500" mb="10px">About This Site</Text>
                        <Text color="gray.500" mb="10px" maxW="600px" textAlign="center">This portfolio was built using React, Redux, ChakraUI, and Framer Motion. I've also integrated the Github API in order to provide the information below.</Text>
                        <Text color="gray.500" fontSize="xl" mb="10px">Latest Update:</Text>
                        <Text color="gray.500" mb="10px">{latestUpdate ? new Date(latestUpdate).toLocaleDateString('en-US') : "No updates available"}</Text>
                        <Text color="gray.500" fontSize="xl" mb="10px">Languages Used:</Text>
                        <Box display="flex" flexWrap="wrap" justifyContent="space-between" margin="0 auto" maxW="800px" alignItems="center" gap="20px">
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
                                            <Box height="100px" width="100px" display="flex" flexDirection="column" justifyContent="center">
                                                <Text color="indigo.500" fontWeight="bold" margin="0">{lang[0]}</Text>
                                                <Text color="gray.500" margin="0" fontSize="sm">{`${lang[1]}%`}</Text>    
                                            </Box>
                                        </motion.div>
                                    ) 
                                })) : (
                                    <Text m="0 auto">No language data available</Text>
                                )
                            }
                        </Box>
                    </Box>
                </motion.div>    
            </Box>
        </>
    );
}