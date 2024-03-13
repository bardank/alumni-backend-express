import { Router } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import eventServices from "../../services/event/index.js";

const router = Router();

router.post(
  "/",
  catchAsync(async (req, res, next) => {
    const { createdBy, eventName, date, location, image } = req.body;
    const result = eventServices.create(
      createdBy,
      eventName,
      date,
      location,
      image
    );
    return res.status(200).json(result);
  })
);
export default router;
