const users = require('./userRoutes');
const books = require('./bookRoutes');
const auth = require('./authRoutes');

module.exports = app => {
    app.use('api/auth', auth);
    app.use('api/users', users);
    app.use('api/books', books);
}