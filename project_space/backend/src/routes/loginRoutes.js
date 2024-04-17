const express = require('express');
const Router = express.Router();

const loginControll = require('../controllers/loginController')

//User Routes

Router.post('/api/login',loginControll.loginUser);
Router.get('/api/admin-login', loginControll.adminLogin);

module.exports = Router;
