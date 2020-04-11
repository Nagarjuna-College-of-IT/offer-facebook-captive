const AccountRouter = require("express").Router();

// user registration
const {registration} = require("../controllers/Account/registration")
AccountRouter.post("/registration", registration);

// user authentication

// user verification

module.exports = AccountRouter;
