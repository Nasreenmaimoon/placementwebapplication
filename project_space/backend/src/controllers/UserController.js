
// // // const User = require("../models/user");
// // const Login = require("../models/login");


// // const addUser = async (req, res, next) => {
// //   console.log("write ur functionality here")
 
// // }

// // exports.addUser = addUser;




// const mongoose = require ('mongoose');
// // const login = require ("../models/signupadmin");
// // const adminlogin = require("../models/signupadmin");
// // const login = require("../models/login")
// const { response, request } = require('express');
// const criteria = require("../models/criteria");

// const criteriaform = async (req, res, next) => {
//     console.log(req.body);
//     try {
//         const { CompanyName, Skill1, Skill2, Skill3 } = req.body;
        
//         const newcriteria = new criteria({ CompanyName, Skill1, Skill2, Skill3 });
//         await newcriteria.save();

//         // Assuming the following variables are defined elsewhere
//         const { name, role, password } = req.body;
//         const newUser = new User({ name, Skill1,Skill2,Skill3 });
//         await newUser.save();

//         res.status(201).json({ message: 'User criteria successfully' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };

// const criteriaUser = async (req, res) => {
//     console.log("criteria ");
//     const { CompanyName, Skill1, Skill2, Skill3 } = req.body;

//     // try {
//     //     const user = await criteria.findOne({ CompanyName, Skill1, Skill2, Skill3 });
//     //     console.log(user);
//     //     if (!user) {
//     //         return res.status(404).json({ message: 'User not found' });
//     //     }

//         // Additional login logic here

// //     } catch (error) {
// //         console.error('Error during criteria:', error);
// //         res.status(500).json({ error: 'An error occurred while criteria in' });
// //     }
//  };

// const criteriaLogin = async (req, res) => {
//     try {
//         const admindata = await criteriaLogin.find();
//         res.status(200).json();
//     } catch (error) {
//         console.error('Error fetching admin data:', error);
//         res.status(500).json({ error: 'An error occurred while fetching ' });
//     }
// };

// exports.criteriaform = criteriaform;
// exports.criteriaUser = criteriaUser;
//     // exports.loginController = loginController
// exports.criteriaLogin = criteriaLogin;

