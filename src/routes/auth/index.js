import { Router } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import  {validator}  from "../../middlewares/validator.js";

const router = Router();

router.post(
  "/login",
  catchAsync(async (req, res, next) => {
    return res.status(200).json({ user });
  })
);

router.post(
  "/register",
  validator({ body: "SignUpUserBody" }),
  catchAsync(async (req, res, next) => {
    return res.status(200).json({ user });
  })
);
export default router;
