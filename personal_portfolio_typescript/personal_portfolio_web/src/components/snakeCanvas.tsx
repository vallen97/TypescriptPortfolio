import { useEffect } from "react";
import React from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Game } from "../utils/snakegame/game";
import CustomButton from "./customButton";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface snakeCanvasProps {}

let game: any = null;

export const SnakeCanvas: React.FC<snakeCanvasProps> = ({}) => {
  setup();
  return (
    <>
      <SimpleGrid columns={[1, 1, 1, 2, 3, 4]}>
        <CustomButton
          buttonID="btnNextGen"
          buttonText="Next Generation"
          hide="none"
          hideID="nextGenDiv"
        />
        <CustomButton
          buttonID="btnStart"
          buttonText="Start"
          hideID="startDiv"
        />
        <Center>
          <Box m={4} width={{ base: "100%", xs: "95%", sm: "95%", md: "95%" }}>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                px={4}
                py={2}
                boxSize="100%"
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
              >
                Save Snake to
              </MenuButton>
              <MenuList color="pink">
                <MenuItem onClick={() => game.saveCustomSnake(0)}>
                  <Text fontSize={["xs", "sm", "md", "lg", "xl"]} color="cyan">
                    Local Storage
                  </Text>
                </MenuItem>
                <MenuItem onClick={() => game.saveCustomSnake(1)}>
                  <Text fontSize={["xs", "sm", "md", "lg", "xl"]} color="cyan">
                    Computer
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Center>
        <Center>
          <Box m={4} width={{ base: "100%", xs: "95%", sm: "95%", md: "95%" }}>
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                px={4}
                py={2}
                boxSize="100%"
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.400" }}
                _expanded={{ bg: "blue.400" }}
                _focus={{ boxShadow: "outline" }}
              >
                Load Snake From
              </MenuButton>
              <MenuList color="pink">
                <MenuItem onClick={() => game.loadCustomSnake(0)}>
                  <Text fontSize={["xs", "sm", "md", "lg", "xl"]} color="cyan">
                    Local Storage
                  </Text>
                </MenuItem>
                <MenuItem onClick={() => game.loadCustomSnake(1)}>
                  <Text fontSize={["xs", "sm", "md", "lg", "xl"]} color="cyan">
                    Website
                  </Text>
                </MenuItem>
                <MenuItem onClick={() => game.loadCustomSnake(2)}>
                  {/* <Text fontSize={["xs", "sm", "md", "lg", "xl"]} color="cyan">
                    Upload
                  </Text> */}
                  <Box>
                    <Input type="file" id="selectFiles" defaultValue="Import" />
                  </Box>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Center>
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 2, 3, 3, 4]} pb="100px">
        <Box>
          <Flex m={4}>
            <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>
              Current Generation:
            </Text>
            <Spacer />
            <Text fontSize={["xs", "sm", "md", "lg", "xl"]} id="currGen">
              0
            </Text>
          </Flex>
        </Box>
        <Box m={4}>
          <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>Adjust Speed</Text>
          <Slider
            aria-label="slider-ex-2"
            colorScheme="pink"
            defaultValue={5}
            id="speedSlider"
            min={1}
            max={10}
            onChange={(val) => {
              game.setGameSpeed(val * 10);
            }}
          >
            <SliderTrack bg="red.100">
              <Box position="relative" right={10} />
              <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </Box>
        <Box>
          <Flex m={4}>
            <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>Score:</Text>
            <Spacer />
            <Text fontSize={["xs", "sm", "md", "lg", "xl"]} id="snakeScore">
              0
            </Text>
          </Flex>
        </Box>
      </SimpleGrid>
      <SimpleGrid m={4}>
        <Center width="100%">
          <canvas id="snakeCanvas" width="auto" height="300" />
        </Center>
      </SimpleGrid>
    </>
  );
};

export default SnakeCanvas;

function setup() {
  // get canvas and create context
  let gameCanvas: any;
  let ctx: any;

  useEffect(() => {
    // setTensorflow();
    // get canvas and create context
    gameCanvas = document.getElementById("snakeCanvas");
    ctx = gameCanvas.getContext("2d");
    // game = Game(gameCanvas, ctx);
    let txtCurrGen = document.getElementById("currGen");
    let txtSnakeScore = document.getElementById("snakeScore");
    game = Game(gameCanvas, ctx, txtCurrGen, txtSnakeScore);

    // EventListeners
    // button for next generation
    document
      .getElementById("btnNextGen")
      .addEventListener("click", function () {
        game.nextGen();
      });

    document.getElementById("btnStart").addEventListener("click", function () {
      document.getElementById("nextGenDiv").style.display = "block";
      document.getElementById("startDiv").style.display = "none";
      // start game
      game.start(ctx);
    });

    window.addEventListener("load", function () {
      var upload = document.getElementById("selectFiles");

      // Make sure the DOM element exists
      if (upload) {
        upload.addEventListener("change", function () {
          // Make sure a file was selected
          if (upload.files.length > 0) {
            var reader = new FileReader(); // File reader to read the file

            // This event listener will happen when the reader has read the file
            reader.addEventListener("load", function () {
              var result = JSON.parse(reader.result); // Parse the result into an object
              game.loadCustomSnake(2, result);
              // console.log(result);
            });

            reader.readAsText(upload.files[0]); // Read the uploaded file
          }
        });
      }
    });
  }, []);
}
