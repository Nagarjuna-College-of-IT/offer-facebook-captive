const mongoose = require('mongoose');

const setStringSchema = (cond, msg) => {
    return {
        type: String,
        required: [cond, msg]
    }
}

const newCapturedDataSchema = new mongoose.Schema({
    _id:  mongoose.Types.ObjectId,
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