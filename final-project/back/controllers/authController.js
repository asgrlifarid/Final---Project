const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const register = async (req, res) => {
  const { email, username, password,role } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Bu email artıq istifadə edilib!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      role,
      bannedUntil: null,
    });

    await newUser.save();
    res.status(201).json({ message: "Successfully registered!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    let user;

    if (email) {
      user = await UserModel.findOne({ email });
    }
   
    else if (username) {
      user = await UserModel.findOne({ username });
    }

    if (!user) {
      return res
        .status(400)
        .json({ message: "Kullanıcı adı veya email hatalı!" });
    }

    if (user.bannedUntil && new Date(user.bannedUntil) > new Date()) {
      return res.status(403).json({
        message: `Hesabınız ${new Date(
          user.bannedUntil
        ).toLocaleDateString()} tarihine kadar yasaklanmış.`,
      });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Yanlış şifre!" });
    }

    const token = jwt.sign(
      { _id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "Başarıyla giriş yapıldı!",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
