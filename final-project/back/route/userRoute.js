const express = require("express");
const {
  getAllUsers,
  getUserById,
  deleteUser,
  editUser,
  banUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);
router.put("/:id", editUser);
router.post("/ban/:id", banUser);

module.exports = router;
