

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user_model');

passport.use(new GoogleStrategy({
  clientID: '614086975345-7khpfkharqvbbd4vn55u4thkaemgunc9.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'http://localhost:8080/auth/google/callback',
},
(accessToken, refreshToken, profile, done) => {
    // Here you'd typically search your database for the user.
    // For this example, we'll just simulate it with a find-or-create logic.

    const user = { id: profile.id, email: profile.emails[0].value, name: profile.displayName };
    return done(null, user);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
