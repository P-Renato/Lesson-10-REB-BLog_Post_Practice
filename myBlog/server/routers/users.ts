import { Router } from "express";
import { addNewUser, loginUser } from "../controllers/users";
const router = Router();

// register
router.post("/register", addNewUser);

// login 
router.post("/login", loginUser);


// profile


export default router;