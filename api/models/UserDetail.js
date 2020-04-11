const mongoose = require('mongoose');

const setStringSchema = (cond, msg) => {
    return {
        type: String,
        required: [cond, msg]
    }
}

const newUserDetailSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    user_verified: {
        type: Boolean,
        default: false
    },
    full_name:setStringSchema(true, "Full name can't be empty!"),
    created_at: {
        type: Date,
        default: Date.now
    },
    expires_at: String
})

module.exports = UserDetailModel = mongoose.model("user_detail", newUserDetailSchema);