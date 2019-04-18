const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    loginId: String,
    loginPwd: String
}, {
    versionKey: false
})

module.exports = mongoose.model("user", userSchema);