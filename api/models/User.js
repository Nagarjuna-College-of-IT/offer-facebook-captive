const mongoose = require('mongoose');

const setStringSchema = (cond, msg) => {
    return {
        type: String,
        required: [cond, msg]
    }
}

const newUserSchema = new mongoose.Schema({
    user_id: mongoose.Types.ObjectId,
    user_verified: Boolean,
    email:setStringSchema(true, "Email can't be empty!"),
    password: setStringSchema(true, "Password can't be empty!"),
    created_at: {
        type: Date,
        default: Date.now
    },
    expires_at: String
})

module.exports = UserModel = mongoose.model("user", newUserSchema);