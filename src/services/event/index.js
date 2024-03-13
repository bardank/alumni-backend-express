import EventModel from "../../models/Event.js";

const create = async (createdBy, eventName, date, location, image) => {
  const response = {};
  const userId = false;
  const alumni = await EventModel.create({
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

const eventServices = {
  create,
};

export default eventServices;
