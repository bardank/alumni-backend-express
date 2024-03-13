import { UserModel } from "../models";

const verifyToken = async (req, res, next) => {
  try {
    const authToken = req.headers.authorization
      ?.replace(/^Bearer\s/, "")
      .trim();
    if (!authToken) {
      return next(new HttpError({ code: 401, type: "UNAUTHORIZED" }));
    }
    const { id, isOtpToken = false } = jwt.verify(
      authToken,
      process.env.JWT_SECRET
    );

    const OTP_EXCLUDED_PATH = ["/new-password"];

    const user = await UserModel.findOne({ _id: id });

    if (!user) {
      return next(new HttpError({ code: 401, type: "UNAUTHORIZED" }));
    }
    Object.assign(req, {
      user: {
        id: user._id.toString(),
        role: user.role,
      },
    });
    if (isOtpToken) {
      if (OTP_EXCLUDED_PATH.includes(req.route.path)) {
        return next();
      } else {
        return next(
          new HttpError({
            code: 401,
            type: "UNAUTHORIZED",
            message: "Invalid token use!",
          })
        );
      }
    } else {
      if (OTP_EXCLUDED_PATH.includes(req.route.path)) {
        return next(
          new HttpError({
            code: 401,
            type: "UNAUTHORIZED",
            message: "Invalid token use!",
          })
        );
      }
    }

    next();
  } catch (error) {
    next(new HttpError({ code: 401, type: "UNAUTHORIZED" }));
  }
};

export default verifyToken;
