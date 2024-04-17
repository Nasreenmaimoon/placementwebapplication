const express = require('express');
const Router = express.Router();

const criteriaControll = require('../controllers/jobcriteriaController')

//User Routes

Router.post('/api/add-criteria',criteriaControll.criteriaForm);
// Router.get('/api/admin-criteria', criteriaControll.Jobcriteria);

module.exports = Router;
