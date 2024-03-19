import * as bcrypt from "bcrypt";

export const encryptPassword = async (password, salt) => {
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const generateSalt = async () => {
  const salt = await bcrypt.genSalt(10);
  return salt;
};

export const comparePassword = async (password, hashedPassword) => {
  const result = await bcrypt.compare(password, hashedPassword);
  return result;
};
