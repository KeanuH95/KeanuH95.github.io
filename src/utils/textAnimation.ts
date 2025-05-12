import { Variants } from "framer-motion";

export const container: Variants = {
    hidden: { 
        opacity: 0 
    },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5, 
            staggerChildren: 0.1,
        },
    }
};

export const item: Variants = {
    hidden: { 
        y: "100%",
        opacity: 0  
    },
    show: { 
        y: "0%",
        opacity: 1,
        transition:{ 
            duration: 0.5 
        } 
    } 
};