const express = require('express');
const router = express.Router();
const User = require('../models/user_model');
const bcrypt = require('bcrypt');

router.post('/reset', async (req, res) => {
    try {
      let user;
      if (req.body.emailOrUsername.includes('@')) {
        user = await User.findOne({ email: req.body.emailOrUsername });
      } else {
        user = await User.findOne({ username: req.body.emailOrUsername });

  
      if (!user) return res.status(400).send('User not found');
  
      const validPassword = await bcrypt.compare(req.body.password, user.password);
      if (!validPassword) return res.status(400).send('Invalid password');
  
      res.send('Logged in successfully');
    }} catch (error) {
      res.status(500).send(error.message);
    }
  });
  