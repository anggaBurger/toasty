//Routing function will be done here

//Requiring in Express (import express)
const express = require('express')

//Requiring in userController file (import userController)
//Refer to userController.js in controller folder to know the function
const userController = require('./controller/userController')

//Defining the variable router as a way to call the Router function inside express
const router = express.Router()


//Responding to a "GET" request on the homepage '/'
router.get('/', userController.home)

//Responding to a "GET" request on loginpage
router.get('/loginpage', userController.loginpage)

//Responding to a "GET" request on loginpage
router.get('/register', userController.register)

//Exporting the router variable
module.exports = router