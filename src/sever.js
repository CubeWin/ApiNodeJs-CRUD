const express = require('express');
const path = require('path');
const morgan = require('morgan');

/**
 * @Initializations
 */
const app = express();

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
app.use(express.json());

/**
 * @GlovalVariable
 */

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