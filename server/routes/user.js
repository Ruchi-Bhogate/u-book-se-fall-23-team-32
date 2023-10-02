//import { reset_email } from '../models/email_template';
const template = () => require('../models/email_template');
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

      if(req.body.password != req.body.confirmpassword)
      res.send({message: 'password not matched'});
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const user = await User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        role: req.body.role,
        email: req.body.email,
        username: username,
        password: hashedPassword,
      })
      res.json({status :'ok'})
    } catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'Duplicate email'})
    }
  });

  router.post('/Forgot', async (req,res) => {
    const email = template.reset_email
    let mailTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user:"ubookint@gmail.com",
            pass:"ufgj gaun khqk vpsn"
        }
    });
    const details = {
        from:"Support@UBook.com",
        to:req.body.email,
        subject:"Password Reset",
        text:"Password Reset",
        html: email
    }
    /*const mailTransport.sendMail(details, (err)=>{
        if(err) {
           return res.status(400).send("unable to send mail");
        }
        else {
            res.send("email has been sent");
        }
    })*/
    const check = await mailTransport.sendMail(details);
    console.log =("Status ",check.status);
});
module.exports = router;
