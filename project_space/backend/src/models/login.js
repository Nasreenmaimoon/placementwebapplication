//FILENAME : User.js

const mongoose = require("mongoose");
const validRoles = ['inputUsername','inputPassword'];
const loginSchema = mongoose.Schema({
  inputUsername: {
    type: String,
    required: true
  },
  inputPassword: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required:true,
    enum:validRoles
  },

},

{ 
  collection: 'login' 
});

// export model user with UserSchema
module.exports = mongoose.model("login", loginSchema);