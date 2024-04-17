
//FILENAME : User.js

const mongoose = require("mongoose");
const registerSchema = mongoose.Schema({
    inputName: {
        type: String,
        required: true
      },
      inputEmail: {
        type: String,
        required: true
      },
      inputBranch: {
        type: String,
        required: true
      },
      inputCGPA: {
        type: String,
        required: true
      },
      inputCollege: {
        type: String,
        required: true
      },
      resume: {
        type: String,
        required: true
      },
      
 
});

// export model user with UserSchema
module.exports = mongoose.model("registerlogin", registerSchema);