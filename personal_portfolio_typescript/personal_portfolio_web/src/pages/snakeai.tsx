import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SnakeCanvas from "../components/snakeCanvas";
import theme from "../theme";

interface snakeaiProps {}

export const Snakeai: React.FC<snakeaiProps> = ({}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box position="relative" minHeight="100vh">
        <Navbar />
        <Box pb="100px">
          <SnakeCanvas />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Snakeai;
