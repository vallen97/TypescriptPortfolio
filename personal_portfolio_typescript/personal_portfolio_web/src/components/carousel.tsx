import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";

const fadeIn = keyframes`
0% { opacity:0; }
100% { opacity:1; }
`;

let arr = [
  // { show: "block", url: "https://source.unsplash.com/WLUHO9A_xik/1440x960" },
  // { show: "none", url: "https://source.unsplash.com/DNE9iZ1Kqzk/1440x960" },
  // { show: "none", url: "https://source.unsplash.com/6ccJQ5qPFvY/1440x960" },
  // { show: "none", url: "https://source.unsplash.com/qTLyiHW1nIc/1440x960" },
  // { show: "none", url: "https://source.unsplash.com/fxX__3GRtsg/1440x960" },
];
let added: boolean = false;
let totalCarousel: number = 3;
let currentCarousel: number = 0;

interface CarouselProps {
  imageUrls: Array<String>;
}

export const CarouselProps: React.FC<CarouselProps> = (props) => {
  arr = [];
  console.log("added: ", added);

  let tempImagURLSLength: number =
    typeof props.imageUrls === "undefined" ? 0 : props.imageUrls.length;
  if (added == false || currentCarousel == totalCarousel) {
    if (tempImagURLSLength == 0) {
      console.log("There is no image to display");
    } else {
      console.log("There is an image that needs to be displayed");
      for (let i = 0; i < props.imageUrls.length; i++) {
        console.log("currentCarousel: ", currentCarousel + 1, "index: ", i);

        if (i == 0) {
          arr.push({ show: "block", url: props.imageUrls[i].toString() });
        }
        console.log(props.imageUrls[i]);
        arr.push({ show: "none", url: props.imageUrls[i].toString() });
      }
      if (currentCarousel + 1 == totalCarousel) {
        added = true;
      }
      console.log(arr);
    }
    currentCarousel++;
    console.log("IN Carousel: ", currentCarousel);
  }

  // export const CarouselProps = (props) => {
  const [value, setValue] = React.useState(1);
  const [delay, setDelay] = React.useState(5000);

  const handleChange = (e) => {
    if (e.target.id === "+") {
      value === 4 ? setValue(0) : setValue(value + 1);
      arr.map((i) => {
        return (i.show = "none");
      });
      arr[value].show = "block";
    } else {
      console.log(value - 1);
      if (value - 1 === -1) {
        setValue(4);
      } else {
        setValue(value - 1);
      }
      arr.map((i) => {
        return (i.show = "none");
      });
      arr[value].show = "block";
    }
  };
  useInterval(() => {
    // Your custom logic here
    value === 4 ? setValue(1) : setValue(value + 1);
    arr.map((i) => {
      return (i.show = "none");
    });
    arr[value].show = "block";
  }, delay);
  return (
    <>
      <div>
        {arr.map((item, key) => {
          return (
            <Box
              backgroundColor="#222"
              backgroundImage={`url(${item.url})`}
              backgroundPosition="center"
              backgroundSize="cover"
              backgroundRepeat="no-repeat"
              width="100vw"
              height="80vh"
              animation={`${fadeIn} ease 3s`}
              display={item.show}
              key={key}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backdropFilter: "contrast(.8)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "inherit",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div style={{ color: "#fff" }}>hola</div>
                  <div style={{ color: "#fff" }}>hola</div>
                </div>
              </div>
            </Box>
          );
        })}
      </div>

      <div>
        <button onClick={handleChange} id="-">{`<<<`}</button>
        <button onClick={handleChange} id="+">
          {`>>>`}{" "}
        </button>
      </div>
    </>
  );
};

function useInterval(callback, delay) {
  let savedCallback;
  savedCallback = useRef();
  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// ReactDOM.render(<CarouselProps />, rootElement);
export default CarouselProps;
