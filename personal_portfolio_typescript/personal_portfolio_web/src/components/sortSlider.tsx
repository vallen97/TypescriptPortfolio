import {
  Box,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import React from "react";

interface sortSliderProps {
  boxTitle: string;
  boxDescription: string;
  boxDescriptionID: string;
  sliderDefaultValue: number;
  sliderID: string;
  sliderMin: number;
  sliderMax: number;
  sliderOnChangeFunction?: string;
}

export const SortSlider: React.FC<sortSliderProps> = (prop) => {
  return (
    <Box>
      <Box m={4}>
        <p>{prop.boxTitle}</p>
        <p id={prop.boxDescriptionID}>{prop.boxDescription}</p>
      </Box>

      <Box m={4}>
        <Slider
          aria-label="slider-ex-2"
          colorScheme="pink"
          defaultValue={prop.sliderDefaultValue}
          id={prop.sliderID}
          min={prop.sliderMin}
          max={prop.sliderMax}
          onChange={(val: number): void => {}}
        >
          <SliderTrack bg="red.100">
            <Box position="relative" right={10} />
            <SliderFilledTrack bg="tomato" />
          </SliderTrack>
          <SliderThumb boxSize={6} />
        </Slider>
      </Box>
    </Box>
  );
};

export default SortSlider;
