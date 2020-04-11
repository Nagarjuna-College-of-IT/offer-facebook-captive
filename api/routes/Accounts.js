const AccountRouter = require("express").Router();

// user registration
const {registration} = require("../controllers/Account/registration")
AccountRouter.post("/registration", registration);

AccountRouter.get("/test", (req, res) => {
    res.status(200).json({
        msg: "This is just test api!"
    })
})

// user authentication

// user verification

module.exports = AccountRouter;
