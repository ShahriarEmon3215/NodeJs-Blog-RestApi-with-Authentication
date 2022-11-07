import express from "express";
import { getUserData } from "../controllers/userController.js";
var router = express.Router();


router.post('/getuser', getUserData);

export default router;