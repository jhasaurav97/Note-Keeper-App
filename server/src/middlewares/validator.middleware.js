import { validationResult } from "express-validator";
import { ApiError } from "../utils/api-error.js";

export const validate = (req, res, next) => {
    try {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            return next();
        }

        const extractedErrors = errors.array().map((err) => ({
            field: err.path,
            message: err.msg,
        }));

        throw new ApiError(422, "Received data is not valid", extractedErrors);
    } catch (error) {
        next(error);
    }
};
