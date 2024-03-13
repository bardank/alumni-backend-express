import validators from "../validators/index.js";
import { HttpError } from "../libs/httpError.js";
const validator = (args) => {
  return async (req, res, next) => {
    try {
      const keys = Object.keys(args);
      for (const key of keys) {
        const payload = req[key];
        const validator = args[key];
        if (validator) {
          const result = validators[validator].validate(payload);
          if (result.error) {
            return next(
              new HttpError({
                code: 422,
                type: "BAD_REQUEST",
                message:
                  process.env.NODE_ENV === "dev"
                    ? `${result.error.message} in ${key}`
                    : result.error.message,
              })
            );
          }
          if (result.value) {
            req[key] = result.value;
          }
        }
      }
      return next();
    } catch (err) {
      return next(
        new HttpError({
          code: 500,
          type: "INTERNAL_SERVER",
          message: err.stack,
        })
      );
    }
  };
};

export { validator };
