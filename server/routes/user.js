const express = require('express');
const router = express.Router();
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');


router.post('/login', async (req, res) => {
  try {
    let user;
    if (req.body.emailOrUsername.includes('@')) {
      user = await User.findOne({ email: req.body.emailOrUsername });
    } else {
      user = await User.findOne({ username: req.body.emailOrUsername });
    }

    if (!user) return res.status(400).send('User not found');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid password');

    res.send('Logged in successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/signup', async (req, res) => {
    try {
      const emailName = req.body.email.split('@')[0];
      const randomNum = Math.floor(Math.random() * 10000);
      const username = `${emailName}${randomNum}`;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        username: username,
        password: hashedPassword,
      })
      res.json({status :'ok'})
    } catch (error) {
        res.json({status: 'error', error: 'Duplicate email'})
    }
  });

  router.post('/Forgot', async (req,res) => {
    const email = req.body.email
    const user = await User.findOne({ email: req.body.email});
    let mailTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:"ubookint@gmail.com",
            pass:"ufgj gaun khqk vpsn"
        }
    });
    const details = {
        from:"Support@UBook.com",
        to:email,
        subject:"Password Reset",
        //text:'http://localhost:3000/Reset/${user._id}'
        html: "<p>Hi, This email is being sent in response to a password reset request. Please click <a href ='http://localhost:3000/Reset/${user_.id}/'>here</a> to reset your password.</p>"
    }
    const check = await mailTransport.sendMail(details);
    console.log =("Status ",check.status);
});

  router.post('/reset', async (req, res) => {
    const {id} = req.params
    //const {password} = req.body
    const password = await bcrypt.hash(req.body.password, 10);

    try{
      User.findByIdAndUpdate({_id:id},{password})
      res.send('Password was changed');
    }
    catch (error) {
      res.status(500).send(error.message)
    }
  });
  
module.exports = router;
