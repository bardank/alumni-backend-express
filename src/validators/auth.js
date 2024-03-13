import Joi from "joi";

export const SignUpUserBody = Joi.object({
  email: Joi.string().email().required(),
  fullName: Joi.string().min(3).max(128).required(),
  password: Joi.string().min(6).max(64).required(),
});

const authValidators = {
    SignUpUserBody,
}


export default authValidators;  