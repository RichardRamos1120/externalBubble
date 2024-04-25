const mongoose = require('../config/db');

const userSchema = new mongoose.Schema({
    email: String,
    password: String
})


const User = mongoose.model("Users",userSchema);

module.exports = User;