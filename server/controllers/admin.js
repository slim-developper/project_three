import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import AdminModal from "../models/admin.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldAdmin = await AdminModal.findOne({ email });

    if (!oldAdmin) return res.status(404).json({ message: "Admin doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldAdmin.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldAdmin.email, id: oldAdmin._id }, secret, { expiresIn: "3h" });

    res.status(200).json({ result: oldAdmin, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

