import { useSelector } from "react-redux";
import { selectLanguagePercentages, selectLastSiteUpdate } from "../../redux/slices/siteInfoSlice";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { Box, Button, Text, Image } from "@chakra-ui/react";
import Silhouette from "../../images/Headshot.webp";
import routes from "../../utils/routes";
import { glassSurface } from "../../theme/glass";

// Keeps only the outer ~13px annulus of the conic disc visible, punching a
// clean transparent hole in the middle so the frosted center disc (a sibling,
// not a child — the mask would clip children too) reads against the page.
const RING_MASK =
    "radial-gradient(farthest-side, transparent calc(100% - 15px), #000 calc(100% - 15px))";

const ringBackground = (pct: number) =>
    `conic-gradient(#D4AF37 ${pct}%, rgba(255, 255, 255, 0.15) 0)`;

export const Home: React.FC = () => {
    const latestUpdate = useSelector(selectLastSiteUpdate) as string | null;
    const languagePercentages = useSelector(selectLanguagePercentages) as Record<string, number> | null;
    const reduceMotion = useReducedMotion();

    return (
        <Box
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }}
                exit={{ opacity: 0 }}
            >
            <Helmet>
                <title>Keanu Moreno-Hilaire | Portfolio</title>
            </Helmet>
            <Box className="pageWrapper">
                <Box position="relative" pt={{base: "30px", md: "0px"}} zIndex={2} display="flex" flexDirection={{base: "column", md: "row"}} justifyContent="space-between" alignItems={{base: "center", md: "flex-start"}}>
                    <Box>
                        <Text textStyle="eyebrow" color="gold.400" mb="2">Hey, my name is</Text>
                        <Text textStyle="displayName" color="lilac.500">Keanu Moreno-Hilaire.</Text>
                        <Text fontFamily="heading" fontWeight="bold" lineHeight="1.1" color="gray.500" opacity=".7" mb="10px" fontSize={{base: "2xl", md: "4xl"}}>I like to build cool products.</Text>
                        <Text textStyle="body" color="gray.500" width={{base: "100%", md: "80%"}} pb="20px">
                            I'm a software engineer based in Brooklyn with 6+ years of experience specializing in full stack web application development. 
                            I have a strong history of developing application
                            features and software solutions to enhance user experience on several startups.
                            I have been successful in working closely with founders, PMs, designers, and integration partners to
                            create truly innovative products.
                        </Text>
                        <Link to={routes.CONTACT_ROUTE}>
                            <Button variant="glass">Contact Me</Button>
                        </Link>

                    </Box>
                    <Box
                        alignSelf="center"
                        zIndex="-1"
                        height="auto"
                        maxW={{base: "100%", md: "40%"}}
                        pt={{base: "30px", md: "0px"}}
                        opacity=".8"
                        sx={{
                            "--mask": "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 0) 100% 50% / 100% 100% repeat-x",
                            WebkitMask: "var(--mask)",
                            mask: "var(--mask)",
                        }}
                    >
                        <Image height="100%" width="100%" filter="grayscale(1) blur(.5px)" src={Silhouette} alt="Portrait"></Image>
                    </Box>
                </Box>
                <Box
                    as={motion.div}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0 }}
                >
                    <Box py={{ base: 8, md: 14 }} textAlign="center" width="100%">
                        <Text textStyle="sectionTitle" color="lilac.500" mb={{ base: 2, md: 3 }}>About This Site</Text>
                        <Text textStyle="body" color="gray.500" mb="4" maxW="600px" textAlign="center" mx="auto">This portfolio was built using React, Redux, ChakraUI, and Framer Motion. I've also integrated the Github API in order to provide the information below.</Text>
                        <Text textStyle="subtitle" color="gray.500" mb="1">Latest Update:</Text>
                        <Text textStyle="body" color="gray.500" mb="4">{latestUpdate ? new Date(latestUpdate).toLocaleDateString('en-US') : "No updates available"}</Text>
                        <Text textStyle="subtitle" color="gold.400" mb={{ base: 4, md: 6 }}>Languages Used:</Text>
                        <Box display="flex" flexWrap="wrap" justifyContent="center" margin="0 auto" maxW="800px" alignItems="center" gap="28px" paddingBottom="40px">
                            {
                                languagePercentages ? (Object.entries(languagePercentages).map((lang, index) => {
                                    const pct = lang[1];
                                    return (
                                        <Box
                                            as={motion.div}
                                            key={index}
                                            position="relative"
                                            width="132px"
                                            height="132px"
                                            whileHover={reduceMotion ? undefined : { scale: 1.08 }}
                                            sx={{
                                                transition: "filter 0.25s ease",
                                                _hover: { filter: "drop-shadow(0 0 14px rgba(212, 175, 55, 0.45))" },
                                            }}
                                        >
                                            {/* animated conic ring (masked to an annulus) */}
                                            <Box
                                                as={motion.div}
                                                position="absolute"
                                                inset={0}
                                                borderRadius="full"
                                                initial={{ background: ringBackground(reduceMotion ? pct : 0) }}
                                                whileInView={{
                                                    background: ringBackground(pct),
                                                    transition: { duration: reduceMotion ? 0 : 1, ease: "easeInOut" },
                                                }}
                                                viewport={{ once: true }}
                                                sx={{ WebkitMask: RING_MASK, mask: RING_MASK }}
                                            />
                                            {/* frosted center disc holding the label */}
                                            <Box
                                                position="absolute"
                                                top="50%"
                                                left="50%"
                                                transform="translate(-50%, -50%)"
                                                width="96px"
                                                height="96px"
                                                borderRadius="full"
                                                display="flex"
                                                flexDirection="column"
                                                justifyContent="center"
                                                alignItems="center"
                                                sx={glassSurface}
                                            >
                                                <Text color="lilac.500" fontWeight="bold" margin="0" fontSize="sm" lineHeight="1.1">{lang[0]}</Text>
                                                <Text textStyle="eyebrow" color="gold.300" margin="0">{`${pct}%`}</Text>
                                            </Box>
                                        </Box>
                                    )
                                })) : (
                                    <Text m="0 auto">No language data available</Text>
                                )
                            }
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
