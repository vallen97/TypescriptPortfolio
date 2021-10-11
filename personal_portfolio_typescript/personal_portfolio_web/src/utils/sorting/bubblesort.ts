import { Swap } from "../sorting/swap";

let sortingSpeed: number;
let isSorting: boolean = true;

export const BubbleSort = () => {
  return {
    bubble: async (
      arr: Array<number>,
      states: Array<number>,
      speed: number,
      drawArray: any,
      CHANGETHIS: Array<any>
    ) => {
      sortingSpeed = speed;
      // loop through array length
      loop1: for (let i = 0; i < arr.length; i++) {
        // loop through array - i - 1
        for (let j = 0; j < arr.length - i - 1; j++) {
          if (isSorting == false) {
            break loop1;
            // return [arr, states];
          }

          // set color comparing
          states[j] = 0;
          // set color being compared
          states[j + 1] = 1;
          // if index + 1 is > index
          if (arr[j] > arr[j + 1]) {
            // swap
            arr = await Swap(
              arr,
              j,
              j + 1,
              sortingSpeed,
              drawArray,
              CHANGETHIS
            );
          }
          // reset colors
          states[j] = -1;
          states[j + 1] = -1;
        }
      }

      // reset colors when finished
      for (let i = 0; i < states.length; i++) {
        states[i] = -1;
        // draw array values into canvas
        drawArray.clear(CHANGETHIS[2], CHANGETHIS[3]);
        drawArray.draw(
          CHANGETHIS[0],
          CHANGETHIS[1],
          CHANGETHIS[2],
          CHANGETHIS[3],
          CHANGETHIS[4]
        );
      }

      return [arr, states];
    },
    setSpeed: async (speed) => {
      sortingSpeed = speed;
    },
    setIsSorting: async (sorting: boolean) => {
      isSorting = sorting;
    },
  };
};
