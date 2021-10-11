import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

interface navbarProps {}

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

export const Navbar: React.FC<navbarProps> = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <NextLink href="/home">
            <Link>Portfolio</Link>
          </NextLink>
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="white"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{
          xs: show ? "block" : "none",
          sm: show ? "block" : "none",
          md: "flex",
        }}
        width={{ xs: "full", sm: "auto", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>
          <NextLink href="/snakeai">
            <Link>Snake AI</Link>
          </NextLink>
        </MenuItems>
        <MenuItems>
          <NextLink href="/sortalgorithm">
            <Link>Sort Algorithm</Link>
          </NextLink>
        </MenuItems>
        <MenuItems>
          <NextLink href="pathalgorithm">
            <Link>Path Algorithm</Link>
          </NextLink>
        </MenuItems>
        <MenuItems>
          <NextLink href="pathalgorithm">
            <Link>View GitHub</Link>
          </NextLink>
        </MenuItems>
      </Box>
    </Flex>
  );
};

export default Navbar;
