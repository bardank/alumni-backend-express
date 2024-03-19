import UserModel from "../models/User.js";
import AlumniModel from "../models/Alumni.js";

const create = async (
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
) => {
  const response = {};
  const userId = false;
  const alumni = await AlumniModel.create({
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
    isApproved: userId ? true : false,
    createdBy: userId ? userId : null,
  });

  response.message = "Event created successfully";
  response.success = true;
  response.data = alumni;

  return response;
};

const alumniServices = {
  create,
};

export default alumniServices;
