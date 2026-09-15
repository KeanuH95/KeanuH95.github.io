import React from "react";
import { Box, Text, Image, Card, CardBody, CardFooter, Heading, Button } from "@chakra-ui/react";

interface ContentCardProps {
  cardTitle: string;
  cardImage: string;
  cardDesc: string;
  cardLink?: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({ cardTitle, cardImage, cardDesc, cardLink }) => {
  return (
    <Card
      variant="glass"
      maxW="sm"
      overflow="hidden"
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "translateY(-6px)",
        borderColor: "gold.400",
        boxShadow: "0 16px 40px rgba(212, 175, 55, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.22)",
      }}
    >
      {/* Light tile keeps the (often dark) company logos legible on the
          now-translucent card. */}
      <Box
        m="16px"
        bg="whiteAlpha.900"
        borderRadius="lg"
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        height="140px"
      >
        <Image p="10px" maxW="80%" maxH="80%" objectFit="contain" src={cardImage} alt={cardTitle} />
      </Box>
      <CardBody pt={0}>
        <Heading size="md" mb={3} color="lilac.500">
          {cardTitle}
        </Heading>
        <Text fontSize="sm" color="whiteAlpha.900">
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
            variant="glass"
            height="44px"
            width="160px"
            fontSize="14px"
          >
            Learn More
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
