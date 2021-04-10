const express = require('express');
const router = express.Router();
const userService = require('./service');

// routes
router.post('/foo', foo);
router.post('/authenticate', authenticate);
router.get('/', getAll);

module.exports = router;

function authenticate(req, res, next) {
    console.log(req);
    userService.authenticate(req.body.username, req.body.password)
        .then(user => 
            user ? 
            res.json(user) :
            res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err =>
            next(err)
        );
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function foo(req, res, next) {
    res.json({"mensage":"foi"});
}
