const GamesModel = require("../models/gamesModel");


const getAllGames = async (req, res) => {
  try {
    const games = await GamesModel.find({});

    res.status(200).json({ data: games, message: "success!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getGameById = async (req, res) => {
  const { id } = req.params;
  try {
    const game = await GamesModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: "category not found!" });
    }

    res.status(200).json({ data: game, message: "success!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteGame = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGame = await GamesModel.findByIdAndDelete(id);
    if (!deleteGame) {
      return res
        .status(404)
        .json({ message: "failed to delete! | games not found!" });
    }
    res.status(200).json({
      deletedGame,
      message: "deleted successfully!",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const editGame = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedGame = await GamesModel.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    if (!updatedGame) {
      return res.status(404).json({
        message: "user not found!",
      });
    }

    res.status(200).json({
      message: "updated successfully!",
      updatedGame,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
postGame = async (req, res) => {
  try {
    const newGame = GamesModel({ ...req.body });
    await newGame.save();
    res.status(200).send({ newGame: newGame, message: "success" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
 getAllGames ,
 getGameById ,
 deleteGame ,
 editGame ,
 postGame,
};
