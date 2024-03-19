import { Router } from "express";
import authRoutes from "./auth/index.js";
import alumniRoutes from "./alumni.js"
import eventRoutes from "./event.js"
const router = Router();

router.use("/auth", authRoutes);
router.use("/alumnis", alumniRoutes);
router.use("/events", eventRoutes);

export default router;
