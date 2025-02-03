const express = require("express");

const {
  getAllGames,
  getGameById,
  deleteGame,
  editGame,
  postGame,
} = require("../controllers/controllorGames");

const router = express.Router();

router.get("/", getAllGames);
router.get("/:id", getGameById);
router.delete("/:id", deleteGame);
router.put("/:id", editGame);
router.post("/", postGame);

module.exports = router;
