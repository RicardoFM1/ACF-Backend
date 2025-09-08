import { Router } from "express";
import { forgotPasswordController, resetPasswordController } from "../controllers/auth.controllers";


const router = Router();

router.post("/forgot-password", forgotPasswordController);

router.post("/reset-password", resetPasswordController);

export const authRoutes = router;
