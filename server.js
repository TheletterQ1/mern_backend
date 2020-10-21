require("dotenv").config();
const { PORT = 3000, NODE_ENV = "development" } = process.env;
//MONGO CONNECTION
const mongoose = require("./db/connection.js");
//CORS...(attempt)
const cors = require("cors");
const corsOptions = require("./configs/config.js");
//Bringing in Express
const express = require("express");
const app = express();
//OTHER IMPORTS
const morgan = require("morgan");
const teamRouter = require("./controllers/teamRouter");
const playerRouter = require("./controllers/playerRouter");
////////////
////////////
//MIDDLEWARE
////////////
NODE_ENV === "production" ? app.use(cors(corsOptions)) : app.use(cors());
app.use(express.json());
console.log("express.json is running!")

app.use(morgan("tiny")); //logging
console.log("morgan is running!");

///////////////
//Routes and Routers
//////////////

//Route for testing server is working
app.get("/", (req, res) => {
  res.json({ hello: "Server is running!" });
});

// Team & Player Routes send to their routers
 app.use("/team", teamRouter);
 app.use("/player", playerRouter);

//LISTENER
app.listen(PORT, () => {
  console.log(`Your are listening on port ${PORT}`);
});
