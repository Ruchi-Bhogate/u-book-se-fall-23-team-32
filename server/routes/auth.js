

const express = require('express');
const router = express.Router();
const passport = require('../config/passport-setup');

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        const token = req.user.token;
        // Successful authentication, redirect home.

        //const token = jwt.sign({ id: req.user.id }, 'mysecretkey170904', { expiresIn: '1h' });
        
        //res.cookie('token', token, { httpOnly: true, secure: true });
        //localStorage.setItem('token', response.data.token);
        //res.redirect(`http://localhost:3000/Home?token=${token}`);
        //res.redirect('http://localhost:3000/Home');
        res.redirect(`https://u-book-se-fall-23-team-32-hm4hr39j8-ruchis-projects-419a70ff.vercel.app/authcallback?token=${token}`);

        //res.redirect('http://localhost:3000/Home');
        //res.redirect('https://u-book-se-fall-23-team-32-hm4hr39j8-ruchis-projects-419a70ff.vercel.app/Home')

    }
);

module.exports = router;
