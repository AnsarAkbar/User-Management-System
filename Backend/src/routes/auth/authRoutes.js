import { Router } from "express";
import { loginUser } from "../../controller/authController";

const router = Router();

router.get('/login', loginUser)

export default router;