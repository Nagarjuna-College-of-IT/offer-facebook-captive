const mongoose = require('mongoose');

const setStringSchema = (cond, msg) => {
    return {
        type: String,
        required: [cond, msg]
    }
}
const _id = mongoose.Types.ObjectId;

const newUserDetailSchema = new mongoose.Schema({
    user_id: _id,
    user_verified: Boolean,
    full_name:setStringSchema(true, "Full name can't be empty!"),
    created_at: {
        type: Date,
        default: Date.now
    },
    expires_at: String
})

module.exports = UserDetailModel = mongoose.model("user_detail", newUserDetailSchema);