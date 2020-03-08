const { validationResult } = require("express-validator");
const { ErrorHandler } = require("../utils/errors")
const { STATUS_CODES } = require("../constants")

const handleValidateErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new ErrorHandler(STATUS_CODES["UNPROCESSABLE_ENTITY"], errors.array());
  }
  next();
};

module.exports = {
    handleValidateErrors
};
