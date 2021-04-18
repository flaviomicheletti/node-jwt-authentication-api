const express = require('express');
const cors = require('cors');
const jwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');
const routers = require('./routers')

const app = express();
app.use(cors());
app.use(express.json());

// use JWT auth to secure the api
// comente para desligar
app.use(jwt());

// global error handler
app.use(errorHandler());

// api routes
app.use(routers());

module.exports = app;
