import { Box } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SortCanvas from "../components/sortCanvas";
import theme from "../theme";

interface sortalgorithmProps {}

export const Sortalgorithm: React.FC<sortalgorithmProps> = ({}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box position="relative" minHeight="100vh">
        <Navbar />
        <Box pb="100px">
          <SortCanvas />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Sortalgorithm;
