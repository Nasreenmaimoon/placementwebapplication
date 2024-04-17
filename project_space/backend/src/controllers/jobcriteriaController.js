
const mongoose = require ('mongoose');
// const login = require ("../models/signupadmin");
// const adminlogin = require("../models/signupadmin");
// const login = require("../models/login")
const { response, request } = require('express');
const criteria = require("../models/criteria");

const criteriaForm = async (req, res, next) => {
    console.log(req.body);
    try {
        const {CompanyName, role, Basicskills, Programmingskills, CGPA, Backlog} = req.body;
        
        const newcriteria = new criteria({ CompanyName, role, Basicskills, Programmingskills, CGPA, Backlog });
        await newcriteria.save();

        res.status(201).json({ message: 'User criteria successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const criteriaUser = async (req, res) => {
    console.log("criteria ");
    const { CompanyName, role, Basicskills, Programmingskills, CGPA, Backlog } = req.body;

    // try {
    //     const user = await criteria.findOne({ CompanyName, Skill1, Skill2, Skill3 });
    //     console.log(user);
    //     if (!user) {
    //         return res.status(404).json({ message: 'User not found' });
    //     }

        // Additional login logic here

//     } catch (error) {
//         console.error('Error during criteria:', error);
//         res.status(500).json({ error: 'An error occurred while criteria in' });
//     }
 };

const criteriaLogin = async (req, res) => {
    try {
        const criteriadata = await criteriaLogin.find();
        res.status(200).json();
    } catch (error) {
        console.error('Error fetching admin data:', error);
        res.status(500).json({ error: 'An error occurred while fetching ' });
    }
};

exports.criteriaForm = criteriaForm;
exports.criteriaUser = criteriaUser;
    // exports.loginController = loginController
exports.criteriaLogin = criteriaLogin;

