import express from "express";
const router = express.Router();

import {signin} from "../controllers/admin.js";

router.post("/signin", signin);


export default router;