//Main starting point of the application.

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express(); //instance of express
const router = require('./router');
const mongoose = require('mongoose');
const config = require('./config');

const cors =require ('cors');

//DB setup
mongoose.connect('mongodb://localhost:auth/auth-task');

//App Setup
app.use(morgan('combined')); //morgan is used for logs (debugging)
app.use(bodyParser.json({type:'*/*'}));
app.use(cors());
router(app);

//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on :', port);
