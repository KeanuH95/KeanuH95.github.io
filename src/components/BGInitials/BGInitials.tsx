import React from "react";
import { Box } from "@chakra-ui/react";

/**
 * Faint oversized "KH" watermark behind the page content.
 * Migrated from BGInitials.module.scss to inline Chakra styling (Phase 2).
 */
export const BGInitials: React.FC = () => {
    return (
        <Box position="absolute" zIndex={1} top="0" left="0" bottom="0" right="0" overflow="hidden">
            <Box
                position="fixed"
                height="100%"
                width="100%"
                display="flex"
                fontFamily='"Gorehand"'
                alignItems="center"
                justifyContent="space-around"
                fontSize="50vw"
                color="gray.500"
                opacity={0.08}
            >
                KH
            </Box>
        </Box>
    );
};
