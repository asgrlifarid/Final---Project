const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const gameRouter = require("./route/routeGames");

const tournamentRouter = require("./route/routeTournament");
const userRouter = require("./route/userRoute");
const authRouter = require("./route/authRoute");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use("/api/games", gameRouter);
app.use("/api/users", userRouter);
app.use("/api/tournaments",tournamentRouter);
app.use("/api", authRouter);


mongoose
  .connect(
    "mongodb+srv://farideaazmp202:farideaazmp202@cluster0.prbin.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
    console.log("Connected!");
  });
