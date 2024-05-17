const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");
//const jwt = require("jsonwebtoken");
const User = require ('../Models/User');
const Posts = require('../Models/Post');
const multer = require('multer');
const path = require('path');


//DEFINE ROLES
async function checkIfAdmin(email){
    const adminEmails = ['chantellemphusu@gmail.com']
  
    return adminEmails.includes(email);
  }

//SIGNUP-LOGIN LOGIC
module.exports.Signup = async (req, res, next) => {
    try {
  
      
      const { email, password, username, createdAt } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.json({ message: "User already exists" });
      }
  
  
      const isAdmin = await checkIfAdmin(email);
      const role = isAdmin ? 'admin' : 'user';
      const user = await User.create({ email, password, username, createdAt, role,isVerified: false });
      
     
    
      res
        .status(201)
        .json({ message: "User signed in successfully", success: true, user});
      next();
    } catch (error) {
      console.error(error);
    }
  
  };

module.exports.Login = async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.json({ message: 'All fields are required' });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.json({ message: 'Incorrect password or email' });
      }
      const auth = await bcrypt.compare(password, user.password);
      if (!auth) {
        return res.json({ message: 'Incorrect password or email' });
      }
      const isAdmin = await checkIfAdmin(email); // Check if the user is an admin
      const token = createSecretToken(user._id, user.role, user.email);
      
  
      res.cookie('token', token, {
        httpOnly: true,
      });
  
     
  
      if (isAdmin) {
        // If user is admin, redirect to dashboard
        res.status(201).json({ message: 'User logged in successfully as admin', token, success: true, role: 'admin' });
        next();
        
      } else {
        // If user is not admin, redirect to home
        //console.log(token)
        res.status(201).json({ message: 'User logged in successfully as user', token, success: true, role: 'user' });
        next();
      }
    } catch (error) {
      console.error(error);
    }
  };


//IMAGE FILE MULTER



//CREATE POST
module.exports.Entry = async (req, res, next) => {
    try{
        const{title, author, description} = req.body;

      
        

        const existingPost = await Posts.findOne({title})

        if(existingPost){
            return res.json({message: "That title already exists"})
        }

       
            const post = Posts.create({title, author, description, createdAt})
            res
            .status(201)
            .json({ message: "Post made successfully", success: true, post});
            next();

    }
    catch(error){
        console.error('Error making post')
    }
}