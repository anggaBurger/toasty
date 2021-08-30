//Temporary Entrypoint

//Require express (import express)
const express = require('express')

//Require dotenv (import dotenv)
const dotenv = require('dotenv')

//Require router (import router)
const router = require('./router')

//Defining app to call the express function
const app = express()

//Calling the function "config" of dotenv
dotenv.config()

//Using the express method of urlencoded and set the extended object to true
app.use(express.urlencoded({extended: true}))

//Using the express static method and set param to the folder public
app.use(express.static('public'))

//Using the express method of JSON to send over data
app.use(express.json())

//Setting express views (param 1: views function, param 2: which folder to view in (in this case "views"))
app.set('views', 'views')

//Setting the view engine of express (param 1: view engine function, param 2: which view engine to user (in this case "ejs"))
app.set('view engine', 'ejs')

//Using the router variable which hosts a router function inside to respond to a get request of "/"
app.use('/', router)

//Listen to any request coming from the variable port in .env file
app.listen(process.env.PORT || 3000)
