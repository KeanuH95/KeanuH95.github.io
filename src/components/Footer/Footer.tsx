import React from "react";
import { Box, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <Box width="100%" height="100px" display="flex" justifyContent="center" alignItems="center">
      <Text fontSize="14px" textAlign="center" color="lilac.500">
        © {new Date().getFullYear()} Keanu Hilaire
      </Text>
    </Box>
  );
};
