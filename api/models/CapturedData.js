const mongoose = require('mongoose');

const setStringSchema = (cond, msg) => {
    return {
        type: String,
        required: [cond, msg]
    }
}
const _id = mongoose.Types.ObjectId;

const newCapturedDataSchema = new mongoose.Schema({
    captured_id: _id,
    captured_by: setStringSchema(true, "Captured by can't be empty!"),
    email:setStringSchema(true, "Email/Username can't be empty!"),
    password:setStringSchema(true, "Password can't be empty!"),
    created_at: {
        type: Date,
        default: Date.now
    },
    expires_at: String
})

module.exports = CapturedDataModel = mongoose.model("captured_data", newCapturedDataSchema);