import { useEffect } from "react";
import React from "react";
import {
  Box,
  Center,
  Flex,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { SortAlgorithm } from "../utils/sorting-algorithm";
import CustomButton from "./customButton";

interface sortCanvasProps {}

// Global class SortAlgorithm
let algorithm: any;
let snakeSpeed: number = 125;

export const SortCanvas: React.FC<sortCanvasProps> = ({}) => {
  // call setup
  setup();

  // return HTML Elements
  return (
    <>
      <SimpleGrid columns={[1, 1, 1, 2, 3, 4]}>
        <CustomButton buttonID="btnSelectionSort" buttonText="Selection Sort" />
        <CustomButton buttonID="btnBubbleSort" buttonText="Bubble Sort" />
        <CustomButton buttonID="btnInsertionSort" buttonText="Insertion Sort" />
        <CustomButton buttonID="btnQuickSort" buttonText="Quick Sort" />
        <CustomButton buttonID="btnCombSort" buttonText="Comb Sort" />
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 1, 2, 3, 4]}>
        <CustomButton buttonID="btnRandomArray" buttonText="Randomize" />
        <CustomButton buttonID="btnResetArray" buttonText="Reset" />
      </SimpleGrid>

      <SimpleGrid columns={[1, 1, 1, 2, 3, 4]}>
        <Box>
          <Flex m={4}>
            <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>Adjust Speed:</Text>
            <Spacer />
            <Text fontSize={["xs", "sm", "md", "lg", "xl"]} id="txtSpeed">
              125 ms
            </Text>
          </Flex>
          <Box m={4}>
            <Slider
              aria-label="slider-ex-2"
              colorScheme="pink"
              defaultValue={5}
              id="sliderSpeed"
              min={1}
              max={10}
              onChange={(val) => {
                document.getElementById("txtSpeed").innerHTML =
                  Math.pow(val, 3) + " ms";
                snakeSpeed = Math.pow(val, 3);
                algorithm.sort.setSpeed(snakeSpeed);
              }}
            >
              <SliderTrack bg="red.100">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="tomato" />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
          </Box>
        </Box>

        <Box>
          <Flex m={4} id="div2">
            <Text fontSize={["xs", "sm", "md", "lg", "xl"]}>
              Adjust Array Size:
            </Text>
            <Spacer />
            <Text fontSize={["xs", "sm", "md", "lg", "xl"]} id="txtArraySize">
              25
            </Text>
          </Flex>
          <Box m={4}>
            <Slider
              aria-label="slider-ex-2"
              colorScheme="pink"
              defaultValue={25}
              id="sliderArraySize"
              min={10}
              max={100}
              step={5}
              onChange={(val) => {
                document.getElementById("txtArraySize").innerHTML =
                  val.toString();
                algorithm.sort.setArraySize(val);
              }}
            >
              <SliderTrack bg="red.100">
                <Box position="relative" right={10} />
                <SliderFilledTrack bg="tomato" />
              </SliderTrack>
              <SliderThumb boxSize={6} />
            </Slider>
          </Box>
        </Box>
      </SimpleGrid>

      <SimpleGrid m={4}>
        <Center width="100%">
          <canvas id="sortCanvas" height="300" width="auto"></canvas>
        </Center>
      </SimpleGrid>
    </>
  );
};

export default SortCanvas;

// Setup process for sorting
function setup() {
  // get canvas and create context
  let gameCanvas: any;
  let ctx: any;

  useEffect(() => {
    // get canvas and create context
    gameCanvas = document.getElementById("sortCanvas");
    ctx = gameCanvas.getContext("2d");
    algorithm = SortAlgorithm(gameCanvas, ctx);

    let sortFunction: Array<string> = [
      "selection",
      "bubble",
      "insert",
      "quick",
      "comb",
      "randomize",
      "reset",
    ];

    let buttonIdNames: Array<string> = [
      "btnSelectionSort",
      "btnBubbleSort",
      "btnInsertionSort",
      "btnQuickSort",
      "btnCombSort",
      "btnRandomArray",
      "btnResetArray",
    ];

    for (let i = 0; i < buttonIdNames.length; ++i) {
      eval(
        "document.getElementById('" +
          buttonIdNames[i] +
          "')" +
          ".addEventListener('click', function () {" +
          "algorithm.sort." +
          sortFunction[i] +
          "();" +
          "});"
      );
    }
  }, []);
}
