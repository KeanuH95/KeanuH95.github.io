import React from "react";
import { Link } from "react-router-dom";
import routes from "../../utils/routes";
import { Button, Box, Center, Text } from "@chakra-ui/react";

export const NotFound: React.FC = () => {
  return (
    <Box className="pageWrapper">
      <Box
        display="flex"
        flexDirection="column"
        padding={{ base: "80px 30px", md: "80px 80px" }}
        margin="0 auto"
        justifyContent="center"
        color="lilac.500"
        fontFamily="'Roboto Mono', monospace"
      >
        <Text fontSize="60px" margin="0 0">
          404
        </Text>
        <Text fontSize="30px" paddingBottom="20px">
          Page not found
        </Text>
        <Text
          fontSize="17px"
          maxWidth="372px"
          paddingBottom="30px"
        >
          The page you are looking for doesn't exist or another error occurred.
        </Text>
        <Center>
          <Link to={routes.HOME_ROUTE}>
            <Button
              variant="outline"
            >
              RETURN TO HOMEPAGE
            </Button>
          </Link>
        </Center>
      </Box>
    </Box>
  );
};
