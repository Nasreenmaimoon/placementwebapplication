
//FILENAME : User.js

const mongoose = require("mongoose");
const loginSchema = mongoose.Schema({
    inputusername: {
        type: String,
        required: true
      },
      inputPassword: {
        type: String,
        required: true
      },
      role: {
        type: String,
        default: 'student'
      },
 
});

// export model user with UserSchema
module.exports = mongoose.model("adminlogin", loginSchema);