import { UserController } from "../controllers/UserController.js";
import express from "express";
import { verifyToken } from "../helpers/verify-token.js";
const router = express.Router();

// register
router.post("/register", UserController.Register);
// login 
router.post("/login", UserController.Login);
// logout
router.post("/logout", UserController.Logout);
// check user
router.get("/check-user", UserController.checkUser); 
//profile
router.get("/profile/:id", verifyToken, UserController.getUserById);
//edit profile
// router.post("/profile/edit/:id", UserController.Update());

export {router as UserRoutes};