import express from "express";
var router = express.Router();


import {registerUser, loginUser} from "../controllers/authController.js";

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;