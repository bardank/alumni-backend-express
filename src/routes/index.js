import { Router } from "express";
import authRoutes from "./auth/index.js";
import alumniRoutes from "./alumni/index.js"
import eventRoutes from "./event/index.js"
const router = Router();

router.use("/auth", authRoutes);
router.use("/alumnis", alumniRoutes);
router.use("/events", eventRoutes);

export default router;
