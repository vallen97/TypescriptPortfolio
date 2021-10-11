import { SimpleGrid, Box } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import React from "react";
import Card from "../components/card";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import theme from "../theme";
import { Image } from "@chakra-ui/react";

interface homeProps {}

export const Home: React.FC<homeProps> = ({}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box position="relative" minHeight="100vh">
        <NavBar />
        <SimpleGrid columns={[1, 1, 1, 2, 3, 4]} pb="100px">
          <Box m={4}>
            <Card
              imageURLSARRAY={[
                "https://vaughnallenbackup.herokuapp.com/images/compare_songs-1.PNG",
                "https://vaughnallenbackup.herokuapp.com/images/compare_songs-2.PNG",
                "https://vaughnallenbackup.herokuapp.com/images/compare_songs-3.PNG",
                "https://vaughnallenbackup.herokuapp.com/images/compare_songs-4.PNG",
                "https://vaughnallenbackup.herokuapp.com/images/compare_songs-5.PNG",
              ]}
              imageUrl="https://bit.ly/2Z4KKcF"
              imageAlt="Rear view of modern home with pool"
              cardTitle="Song Comparison"
              cardDescription="This application was made in python and it compare the lyrics of two different songs. When searching for a song, the user can either search for an artist, song, or partial lyrics, and the top ten results will be returned to the user. Once both songs are selected a graph is made for the most common words used by either songs. Those lyrics are filter through a most common words in the English language(i.e. at, the, was). Finally, a summary of both lyrics are made, which is determined to be the most important part of the lyrics."
              buttonTitle="View Project"
              buttonLink="https://github.com/vallen97/song_comparison"
              externalLink={true}
            />
          </Box>
          <Box m={4}>
            <Card
              imageURLSARRAY={[
                "https://vaughnallenbackup.herokuapp.com/images/local_game-1.PNG",
                "https://vaughnallenbackup.herokuapp.com/images/local_game-2.PNG",
                "https://vaughnallenbackup.herokuapp.com/images/local_game-3.PNG",
              ]}
              imageUrl="https://bit.ly/2Z4KKcF"
              imageAlt="Rear view of modern home with pool"
              cardTitle="Local Online Game"
              cardDescription="This project is a game made with the Unity engine. The core mechanics are simple each player has three lives and can move either, up, left, or right. The purpose of this game is to have local online multiplayer, which up to four players can play together. There is a host which each user needs to connect to, each player is color coated with a different color. Once there is only one player left, they would be the winner, and everyone is sent back to the main menu."
              buttonTitle="View Project"
              buttonLink="https://github.com/vallen97/local_online_game"
              externalLink={true}
            />
          </Box>
          <Box m={4}>
            <Card
              imageURLSARRAY={[
                "https://vaughnallenbackup.herokuapp.com/images/snake_ai-1.PNG",
              ]}
              imageUrl="https://bit.ly/2Z4KKcF"
              imageAlt="Rear view of modern home with pool"
              cardTitle="Snake AI"
              cardDescription="This application is a snake game that uses machine learning to play the game."
              buttonTitle="View Snake AI"
              buttonLink="/snakeai"
            />
          </Box>
          <Box m={4}>
            <Card
              imageURLSARRAY={[
                "https://vaughnallenbackup.herokuapp.com/images/sort_algorithm-1.PNG",
              ]}
              imageUrl="https://bit.ly/2Z4KKcF"
              imageAlt="Rear view of modern home with pool"
              cardTitle="Visualizing Sorting Algorithms"
              cardDescription="This application is used to visualize different sorting algorithms"
              buttonTitle="Start Visualizing"
              buttonLink="/sortalgorithm"
            />
          </Box>
        </SimpleGrid>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default Home;
