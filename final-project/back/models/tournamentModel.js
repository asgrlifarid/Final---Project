const mongoose = require("mongoose");

// const { Schema } = mongoose;

const Schema = mongoose.Schema;

const TournamentSchema = new Schema(
  {
    title: { type: String, required: true },
    tournamentName: { type: String, required: true },
    imageUrl: { type: String, required: true },
    startTime:{type :String },
    playersCount:{type :Number },
    category: { type: String },
  },
  { timestamps: true }
);

const TournamentModel = mongoose.model("Tournaments", TournamentSchema);

module.exports = TournamentModel;
