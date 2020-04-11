// models
const UserModel = require("../../models/User");
const UserDetailModel = require("../../models/UserDetail");

//packages
const mongoose = require("mongoose");

module.exports = {
  registration: async (req, res, next) => {
    const _id = mongoose.Types.ObjectId();
    const { email, password, full_name } = req.body;
    try {
      const newUser = new UserModel({
        _id,
        email,
        password,
      });

      const newUserDetails = new UserDetailModel({
        _id,
        full_name,
      });

      let promises = [newUser.save(), newUserDetails.save()];
      await Promise.all(promises);

      res.status(200).json({
        msg: "User account created successfully!",
      });
    } catch (err) {
      if (err)
        res.status(500).json({
          msg: "Internal server error => ./controllers/Account/registration.js",
        });
    }
  },
};
