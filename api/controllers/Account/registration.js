// models
const UserModel = require("../../models/User");
const UserDetailModel = require("../../models/UserDetail");

module.exports = {
  registration: async (req, res, next) => {
      res.send("Hello World!")
    try {
    } catch (err) {
      if (err)
        res
          .status(500)
          .json({
            msg:
              "Internal server error => ./controllers/Account/registration.js",
          });
    }
  },
};
