const mongoose = require("mongoose");
const registerSchema = mongoose.Schema({
  inputName: {
    type: String,
    required: true
  },
  inputEmail: {
    type: String,
    require: true
  },
  inputBranch: {
    type: String,
    required: true
  },
  inputCGPA: {
    type: String,
    required: true
  },
  inputBacklog: {
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
  // createdAt:{
  //   type:Date,
  //   default: Date.now()
  // }
},

{ 
  collection: 'register' 
});

// export model user with UserSchema
module.exports = mongoose.model("register", registerSchema);