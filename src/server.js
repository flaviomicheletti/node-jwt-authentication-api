﻿const app = require('./app');

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 3000;

const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
