const express = require("express");

const {
  editTournament,
  getAllTournament,
  deleteTournament,
  postTournament,
  getTournamentById,
} = require("../controllers/tournamentController");

const router = express.Router();

router.get("/", getAllTournament);
router.get("/:id", getTournamentById);
router.delete("/:id", deleteTournament);
router.put("/:id", editTournament);
router.post("/", postTournament);

module.exports = router;
