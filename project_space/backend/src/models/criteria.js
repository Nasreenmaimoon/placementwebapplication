//FILENAME : User.js

const mongoose = require("mongoose");
const validRoles = ['CompanyName','role', 'Basicskills', 'Programmingskills', 'CGPA', 'Backlog'];
const criteriaSchema = mongoose.Schema({
  CompanyName: {
    type: String,
    required: true
  },
  
  role: {
    type: String,
    required: true
  },
  Basicskills: {
    type: String,
    required: true
  },
  Programmingskills: {
    type: String,
    required: true
  },
  CGPA: {
    type: String,
    required: true
  },
  Backlog: {
    type: String,
    required: true
  },
//   role: {
//     type: String,
//     required:true,
//     enum:validRoles
//   },

},

{ 
  collection: 'criteria' 
});

// export model user with UserSchema
module.exports = mongoose.model("criteria", criteriaSchema);