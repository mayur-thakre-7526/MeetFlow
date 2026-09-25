import { userModel } from "../models/user.model.js";
import httpStatus from "http-status";
import bcrypt from "bcrypt";
import crypto from "crypto";

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Please Provide Username OR Password" });
  }

  try {
    const user = await userModel.findOne({ username });

    if (!user) {
      return res
        .status(httpStatus.NOT_FOUND)
        .json({ message: "User Not FOUND" });
    }

    if (bcrypt.compare(password, user.password)) {
      let token = crypto.randomBytes(20).toString("hex");

      user.token = token;
      await user.save();
      return res.status(httpStatus.OK).json({ token: token });
    }
  } catch (e) {
    return res.status(500).json({ message: `Something went wrong ${e}` });
  }
};

const register = async (req, res) => {
  const { name, username, password } = req.body;

  const userExists = await userModel.findOne({ username });
  try {
    if (userExists) {
      return res
        .status(httpStatus.FOUND)
        .json({ message: "User Already Exists" });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await userModel({
      name: name,
      username: username,
      password: hashedPass,
    });

    await newUser.save();

    res.status(httpStatus.CREATED).json({
      message: "User Registered Successfully",
    });
  } catch (e) {
    res.json({
      message: `Something went wrong ${e}`,
    });
  }
};

export { login, register };
