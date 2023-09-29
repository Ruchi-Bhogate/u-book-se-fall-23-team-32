

const express = require('express');
const router = express.Router();
const passport = require('../config/passport-setup');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('http://localhost:3000/Home');
    }
);

module.exports = router;
