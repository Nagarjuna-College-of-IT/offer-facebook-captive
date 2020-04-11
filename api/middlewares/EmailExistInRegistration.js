// models
const UserModel = require("../models/User");

//validators
const validateRegistration = require("../validations/UserRegistration");

// function to check if email exist
let userExist = false;

const emailExist = async (data) => {
  try {
    const { email } = data;

    const userAlreadyExist = await UserModel.findOne({ email });
    if (userAlreadyExist !== null) userExist = true;
  } catch (err) {
    res.status(500).json({
      msg: "Internal Server Error => ./middlewares/EmailExistInRegistration.js",
    });
  }
};

module.exports = {
  emailExistInRegistration: async (req, res, next) => {
    try {
      // validate the incming data for the registration
      const validation = await validateRegistration(req.body);

      if (validation && validation.error && validation.error.details)
        return res.status(400).json({
          validationErrors: validation.error.details[0].message,
        });

      // check if email already exist
      await emailExist(req.body);

      if (userExist) {
        userExist = false;
        return res.status(400).json({
          msg: "User already exist with that credential!",
        });
      }

      userExist = false;
      next();
    } catch (err) {
      res.status(500).json({
        msg:
          "Internal Server Error => ./middlewares/EmailExistInRegistration.js",
      });
    }
  },
};
