const jwt = require('jsonwebtoken');
const config = require('../config.json');
const users = require('./model.js');

async function authenticate(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const token = jwt.sign({ sub: user.id }, config.secret);
        return { token };
    }
}

async function getAll() {
    return users.map(user => {
        return user;
    });
}

module.exports = { authenticate, getAll };