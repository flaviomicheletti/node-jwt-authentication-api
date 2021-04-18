const expressJwt = require('express-jwt');
const config = require('../config.json');

function jwt() {
    const { secret } = config;

    // const { secret } = {
    //     "secret": "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING"
    // };

    // public routes that don't require authentication
    return expressJwt({ secret }).unless({
        path: [
            '/users/authenticate',
            '/users/unprotected'
        ]
    });
}

module.exports = jwt;