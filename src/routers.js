﻿const express = require('express');

const router = express.Router();
const users = require('./users/controller');

// users
router.post('/users/authenticate', users.authenticate);
router.get('/users/', users.getAll);
router.get('/users/protected', users.foo);
router.get('/users/unprotected', users.foo);

module.exports =  () => router;