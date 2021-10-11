import { Box, Button, Center, Text } from "@chakra-ui/react";
import React from "react";

interface sortButtonProps {
  buttonID: string;
  buttonText: string;
  hide?: string;
  hideID?: string;
}

export const CustomButton: React.FC<sortButtonProps> = (prop) => {
  return (
    <Center id={prop.hideID} display={prop.hide}>
      <Box m={4} width={{ base: "100%", xs: "95%", sm: "95%", md: "95%" }}>
        <Button id={prop.buttonID} type="button" width="100%">
          <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>
            {prop.buttonText}
          </Text>
        </Button>
      </Box>
    </Center>
  );
};

export default CustomButton;
