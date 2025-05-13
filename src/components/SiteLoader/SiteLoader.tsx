import React from "react";
import { motion } from "motion/react";
import styles from './SiteLoader.module.scss';
import { useTheme } from "styled-components";
import { Box } from "@chakra-ui/react";

export const SiteLoader: React.FC = () => {
    const theme = useTheme();
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
        >
            <Box 
                position="relative"
                z-index="5"
                width="100%"
                height="100vh"
                overflow="hidden"
                background={`${theme.background}`}
                boxShadow={`inset 0px 0px 300px 30px ${theme.shadow}`}
            >
                <svg id={styles.logo}  width="252" height="159" viewBox="0 0 252 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M131 117.5H136.518H154.438H156.649L156.919 115.305L163.114 64.8796L164.535 76.2476L164.809 78.4375H167.016H203.254L195.003 145.947L194.199 152.525L199.147 148.117L234.225 116.867L234.929 116.24L235.044 115.305L248.481 5.92985L248.826 3.125H246H214.75H212.536L212.268 5.32224L207.771 42.1875H165.902L170.356 5.92985L170.701 3.125H167.875H151.004H144.438H136.625H134.413H97.5625H96.6101L95.8991 3.75868L52.782 42.1875H48.7454L53.1691 5.92776L53.511 3.125H50.6875H19.4375H17.2258L16.9562 5.32015L3.51866 114.695L3.38206 115.807L4.12089 116.649L31.5428 147.899L35.2259 152.096L35.9034 146.553L44.2287 78.4375H48.6963L82.2464 116.649L82.9931 117.5H84.125H120.362H123.188H131ZM86.5468 60.5293L132.375 19.7153L122.347 101.343L86.5468 60.5293Z" stroke="white" strokeWidth="5" />
                </svg>
            </Box>
        </motion.div>
    );
};
