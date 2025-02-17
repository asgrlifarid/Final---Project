const mongoose = require("mongoose");

// const { Schema } = mongoose;

const Schema = mongoose.Schema;

const GamesSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    raiting: { type: Number },
    gameLink :{type: String},
    category: { type: String },
  },
  { timestamps: true }
);

const GamesModel = mongoose.model("Games", GamesSchema);

module.exports = GamesModel;
