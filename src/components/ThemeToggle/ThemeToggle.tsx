import React from "react";
import { Box, Image } from "@chakra-ui/react";
import Sun from "../../images/sun.svg";
import { useTheme } from "styled-components";

export const ThemeToggle: React.FC<{ isBlackTheme: boolean; setIsBlackTheme: (value: boolean) => void }> = ({ isBlackTheme, setIsBlackTheme }) => {
    const theme = useTheme();
    return (
        <Box
            onClick={() => setIsBlackTheme(!isBlackTheme)}
            bg={`${theme.shadow}`}
            boxShadow={`0px 0px 30px 20px ${theme.background}`}
            cursor="pointer"
            zIndex={5}
            position="fixed"
            bottom={0}
            right={0}
            width="50px"
            height="50px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="20px"
            borderRadius="50%"
        >
            <Image src={Sun} alt="sun" />
        </Box>
    );
};
