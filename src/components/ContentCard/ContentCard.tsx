import React from "react";
import { Box, Text, Image, Card, CardBody, CardFooter, Heading, Button, Divider } from "@chakra-ui/react";

interface ContentCardProps {
  cardTitle: string;
  cardImage: string;
  cardDesc: string;
  cardLink?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({ cardTitle, cardImage, cardDesc, cardLink }) => {
  return (
    <Card
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      _hover={{ transform: "scale(1.05)", transition: "0.3s ease-in-out" }}
      bg="lilac.500"
    >
      <Box bg="white" position="relative" display="flex" justifyContent="center" alignItems="center" overflow="hidden" width="100%" height="60%">
        <Image p="10px 0px" maxW="80%" src={cardImage} alt={cardTitle} />
      </Box>  
      <Divider borderColor="black.500" />
      <CardBody>
        <Heading size="md" mb={4} color="indigo.500">
          {cardTitle}
        </Heading>
        <Text fontSize="sm" color="black.500">
          {cardDesc}
        </Text>
      </CardBody>
      <CardFooter display="flex" justifyContent="center" alignItems="center">
        {cardLink && (
          <Button
            as="a"
            href={cardLink}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
          >
            Learn More
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
