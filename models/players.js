const { Schema, model } = require("mongoose");
const mongoose = require("../db/connection");

const playerSchema = new Schema(
  {
    tid: Number,
    name: String,
    pos: String,
    hgt: Number,
    weight: Number,
    number: Number,
    awards: String,
    imgURL: String,
    team: [
        {
        type: String, 
          ref: "Team", type: mongoose.Schema.Types.ObjectId
        }
    ]
  },
  
);

//Player MODEL
const Player = model("player", playerSchema);

//EXPORT MODEL
module.exports = Player;
