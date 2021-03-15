import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import CompeteModal from "../models/Compete.js";

const secret = 'test';

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldCompete = await CompeteModal.findOne({ email });

    if (!oldCompete) return res.status(404).json({ message: "Compete doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldCompete.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldCompete.email, id: oldCompete._id }, secret, { expiresIn: "1h" });

    res.status(200).json({ result: oldCompete, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wronggg" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldCompete = await CompeteModal.findOne({ email });

    if (oldCompete) return res.status(400).json({ message: "Compete already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await CompeteModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
    
    console.log(error);
  }
};
