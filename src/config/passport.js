const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');


passport.use(new LocalStrategy({
    usernameField: 'user',
    passwordField: 'password'
}, async (user, password, done) => {
    User.findOne({ user: user }, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.matchPassword(password)) { return done(null, false, {message: 'Icorrect Password.'}); }
        return done(null, user);
    })
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});


passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user);
    });
});