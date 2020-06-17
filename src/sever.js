const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const passport = require('passport');

/**
 * @Initializations
 */
const app = express();
require('./config/passport');

/**
 * @settings
 */
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('json spaces', 2);

/**
 * @Middlewares
 */
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

/**
 * @GlovalVariable
 */
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

/**
 * @Routes
 */
app.use(require('./routes/index.routes'));
app.use('/api/person',require('./routes/person.routes'));
app.use('/api/user',require('./routes/user.routes'));
/**
 * @StaticFiles
 */
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;