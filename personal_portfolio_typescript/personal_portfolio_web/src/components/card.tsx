import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import CarouselProps from "./carousel";

interface cardProps {
  imageURLSARRAY?: Array<String>;
  imageUrl: string;
  imageAlt?: string;
  cardTitle: string;
  cardDescription: string;
  buttonTitle: string;
  buttonLink: string;
  externalLink?: boolean;
}

export const Card: React.FC<cardProps> = (project) => {
  let body = null;
  if (project.externalLink) {
    body = (
      <Link href={project.buttonLink} isExternal>
        {project.buttonTitle}
        <ExternalLinkIcon mx="2px" />
      </Link>
    );
  } else {
    body = <Link href={project.buttonLink}>{project.buttonTitle}</Link>;
  }

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      {/* <Image
        src={project.imageUrl}
        alt={project.imageAlt}
        fallbackSrc="https://via.placeholder.com/150"
      /> */}
      <CarouselProps imageUrls={project.imageURLSARRAY}></CarouselProps>
      <Box p="6">
        <Box>
          <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>
            {project.cardTitle}
          </Text>
        </Box>
        <Box>
          <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>
            {project.cardDescription}
          </Text>
        </Box>
        <br />
        <Button>
          <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>{body}</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
