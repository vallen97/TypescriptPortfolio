import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import theme from "../theme";

interface pathalgorithmProps {}

export const Pathalgorithm: React.FC<pathalgorithmProps> = ({}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box position="relative" minHeight="100vh">
        <Navbar />
        <Box pb="100px">
          <div>This is the path sorting algorithm</div>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Pathalgorithm;
