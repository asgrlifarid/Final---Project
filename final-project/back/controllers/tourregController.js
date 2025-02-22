// const express = require("express");
// const TournamentModel = require("../models/tournamentModel");
// const userModel = require("../models/userModel");

// const router = express.Router();

// // Kullanıcıyı turnuvaya kaydetme
// router.post("/registertournament", async (req, res) => {
//   const { username, password, tournamentId } = req.body;

//   try {
//     // 1. Kullanıcı adı ile kullanıcıyı bul
//     const user = await userModel.findOne({ username });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     // 2. Kullanıcı şifresini doğrula (Bu kısımda bcrypt kullanabilirsiniz)
//     const isPasswordCorrect = await bcrypt.compare(password, user.password);
//     if (!isPasswordCorrect) {
//       return res.status(400).json({ message: "Incorrect password" });
//     }

//     // 3. Turnuvayı bul
//     const tournament = await TournamentModel.findById(tournamentId);
//     if (!tournament) {
//       return res.status(404).json({ message: "Tournament not found" });
//     }

//     // 4. Turnuvaya katılmak için yeterli yer var mı? Max oyuncu sayısına bak
//     if (tournament.players.length >= tournament.maxPlayers) {
//       return res.status(400).json({ message: "Tournament is full" });
//     }

//     // 5. Kullanıcıyı turnuvaya kaydet
//     tournament.players.push(user._id); // Turnuvaya oyuncu ekle
//     await tournament.save();

//     // 6. Kullanıcıyı kaydettikten sonra, kullanıcının katıldığı turnuvayı güncelle
//     user.tournaments.push(tournament._id); // Kullanıcının katıldığı turnuvayı ekle
//     await user.save();

//     res.status(200).json({
//       message: "User successfully registered for the tournament",
//       tournament,
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error during registration" });
//   }
// });

// module.exports = router;
