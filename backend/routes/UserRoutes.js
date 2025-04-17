import { UserController } from "../controllers/UserController.js";
import express from "express";
import { verifyToken } from "../helpers/verify-token.js";
const router = express.Router();

// jwt token helper
// register
router.post("/register", UserController.Register);
// login 
router.post("/login", UserController.Login);
// logout
router.post("/logout", UserController.Logout);
// router.post("/login", UserController.Login());
//profile
// router.post("/profile/:id", UserController.Profile());
//update
// router.post("/edit/:id", UserController.Update());

export {router as UserRoutes};