const express = require('express');
const Router = express.Router();
const multer = require("multer")


const registerControll = require('../controllers/registerController')

const resumeFileUpload = multer({dest:'uploads/resumes'})
const upload = multer({ dest: 'uploads/' }); 

//User Routes

Router.post('/api/register', resumeFileUpload.any(), registerControll.registerform);
module.exports = Router;
