const mongoose = require ('mongoose');
// const login = require ("../models/signupadmin");
const adminlogin = require("../models/signupadmin");
const login = require("../models/login")
const { response, request } = require('express');

const loginform =  async (req, res, next) => {
    console.log(req.body)
       try{
        const {inputUsername, inputPassword}=req.body;
        
        const newLogin = new login({inputUsername,inputPassword});
        await newLogin.save();
        const existinglogin = await login.findOne({inputUsername});
        if(existinglogin){
            return res.status(400).json({message:'user already exists'})
        }
        

        const newUser = new User({
            name,
            // email,
            role,
            password
          });
      
          await newUser.save();
      
          res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        }
      };
      
      const loginUser = async (req, res) => {
        console.log("login")
        const {inputUsername, inputPassword}=req.body;
      
        try {
          const user = await login.findOne({ inputUsername });
          console.log(user)
          if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }
      
          if (inputPassword === user.inputPassword) {
            return res.status(200).json({ message: 'User login successful',user });
          } else {
            return res.status(401).json({ message: 'Invalid credentials' });
          }
        } catch (error) {
          console.error('Error during login:', error);
          res.status(500).json({ error: 'An error occurred while logging in' });
        }
      };








        
    //     res.status(201).json({message:'user added '})
    // }catch(err){
    //     console.error(err)
    // }
    // }






    const adminLogin = async(req,res) => {
        const admindata = adminlogin.find().then((response) => {
            console.log(response);
        }).catch((er) => {
            console.log(er);
        })

    }
    exports.loginform = loginform;
    exports.loginUser = loginUser;
    // exports.loginController = loginController
    exports.adminLogin = adminLogin;
    //loginUser



// // const User = require("../models/user");
// const Login = require("../models/login");


// const addUser = async (req, res, next) => {
//   console.log("write ur functionality here")
 
// }

// exports.addUser = addUser;

