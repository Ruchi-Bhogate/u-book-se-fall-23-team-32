// routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/user_model');
const bcrypt = require('bcrypt');

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email not found');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    res.send('Logged in successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/signup', async (req, res) => {
    try {
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      })
      res.json({status :'ok'})
    } catch (error) {
        res.json({status: 'error', error: 'Duplicate email'})
    }
  });

module.exports = router;
