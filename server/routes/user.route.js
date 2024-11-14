import express from "express";
import { getUser, login, logout, register } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { handleContactForm } from "../controllers/contact.controller.js";


const router = express.Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/getuser").get(getUser);


router.route("/contact").post(handleContactForm);

export default router;
