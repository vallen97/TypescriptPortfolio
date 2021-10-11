import express from "express";

const main = async () => {
  const app = express();

  app.get("/", (_, res) => {
    res.send("Hello from express");
  });

  app.get("/snakeai/bestsnale.json", (_, res) => {
    res.send("Get the json of the snake and send to the user.");
  });

  app.listen(9000, () => console.log("Server started on localhost:9000"));
};

main().catch((err) => {
  console.error(err);
});
