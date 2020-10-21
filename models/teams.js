const { Schema, model } = require("mongoose");
const mongoose = require("../db/connection.js");

const teamSchema = new Schema(
  {
    tid: Number,
    region: String,
    name: String,
    pop: Number,    
    imgURL: String,
    stadiumCapacity: {type: Number},
    strategy: String,
    players: [{
        type: Object, 
        ref: "Player", type: mongoose.Types.ObjectId
    }],
    // Logo: String,
  },
  
);

//Team MODEL
const Team = model("team", teamSchema);

//EXPORT MODEL
module.exports = Team;