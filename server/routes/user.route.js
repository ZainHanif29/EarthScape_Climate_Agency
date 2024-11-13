import express from "express";
import { login, logout, register } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { handleContactForm } from "../controllers/contact.controller.js";


const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);


router.route("/contact").post(handleContactForm);

export default router;
