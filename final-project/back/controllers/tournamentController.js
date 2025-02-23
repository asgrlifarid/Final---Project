const TournamentModel = require("../models/tournamentModel");


const getAllTournament = async (req, res) => {
  console.log("salam");
  
  try {
    const games = await TournamentModel.find({});

    res.status(200).json({ data: games, message: "success!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getTournamentById = async (req, res) => {
  const { id } = req.params;
  try {
    const game = await TournamentModel.findById(id);

    if (!game) {
      return res.status(404).json({ message: "category not found!" });
    }

    res.status(200).json({ data: game, message: "success!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteTournament = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTournament = await TournamentModel.findByIdAndDelete(id);
    if (!deletedTournament) {
      return res
        .status(404)
        .json({ message: "failed to delete! | games not found!" });
    }
    res.status(200).json({
      deletedTournament,
      message: "deleted successfully!",
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const editTournament = async (req, res) => {
  const { id } = req.params;
console.log("salam");

  try {
    const updatedTournament = await TournamentModel.findByIdAndUpdate(
      id,
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    if (!updatedTournament) {
      return res.status(404).json({
        message: "user not found!",
      });
    }

    res.status(200).json({
      message: "updated successfully!",
      updatedTournament,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
postTournament = async (req, res) => {
  try {
    const newTournament = TournamentModel({ ...req.body });
    await newTournament.save();
    res.status(200).send({ newTournament: newTournament, message: "success" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
 getAllTournament ,
 getTournamentById ,
 deleteTournament ,
 editTournament ,
 postTournament ,
};
