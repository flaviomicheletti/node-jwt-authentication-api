const service = require('./service');

function authenticate(req, res, next) {
    service.authenticate(req.body.username, req.body.password)
        .then(user =>
            user ?
                res.json(user) :
                res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err =>
            next(err)
        );
}

function getAll(req, res, next) {
    service.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function foo(req, res, next) {
    res.json({ "message": "ok" });
}

module.exports = { authenticate, getAll, foo };