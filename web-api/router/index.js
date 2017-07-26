const users = require('./routers/user-api');

module.exports = function (app) {
    app.use('/users', users);

};
