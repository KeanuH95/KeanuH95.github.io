import React from "react";
import { Box, Image, useColorMode } from "@chakra-ui/react";
import Sun from "../../images/sun.svg";
import { glassSurface } from "../../theme/glass";

/**
 * Floating button that flips the site between the two color modes (BR-11).
 * Migrated from styled-components useTheme to Chakra color mode (Phase 3).
 * bg uses the shadow-main token and the glow uses bg-main — matching the legacy
 * toggle (bg = theme.shadow, boxShadow color = theme.background).
 */
export const ThemeToggle: React.FC = () => {
    const { toggleColorMode } = useColorMode();
    return (
        <Box
            onClick={toggleColorMode}
            sx={{
                ...glassSurface,
                boxShadow: "0px 0px 30px 12px var(--chakra-colors-bg-main), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
            }}
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
            transition="transform 0.2s ease"
            _hover={{ transform: "scale(1.08)" }}
        >
            <Image src={Sun} alt="sun" />
        </Box>
    );
};
