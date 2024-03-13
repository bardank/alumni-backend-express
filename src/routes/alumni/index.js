import { Router } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import alumniServices from "../../services/alumni/index.js";
const router = Router();

router.post(
  "/",
  catchAsync(async (req, res, next) => {
    const {
      fullName,
      email,
      phoneNumber,
      currentAddress,
      usn,
      branch,
      isPlacementProvidedBySkit,
      isApproved,
      yearOfCompletion,
      presentOrganization,
      currentPosition,
      suggestion,
      offerLetterLink,
      linkedIn,
    } = req.body;


    const result = await alumniServices.create(
      fullName,
      email,
      phoneNumber,
      currentAddress,
      usn,
      branch,
      isPlacementProvidedBySkit,
      isApproved,
      yearOfCompletion,
      presentOrganization,
      currentPosition,
      suggestion,
      offerLetterLink,
      linkedIn
    );
    return res.status(200).json(result);
  })
);
export default router;
