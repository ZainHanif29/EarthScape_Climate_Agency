import express from "express";
import { getAllData } from "../controllers/climate.controller.js";  // Corrected function name import

const router = express.Router();
router.route("/getAllData").get(getAllData);  // Consistent endpoint and function reference

export default router;
