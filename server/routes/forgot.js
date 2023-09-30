import etem from "../models/email_template";
const express = require('express');
const router = express.Router();
const User = require('../models/user_model');
const bcrypt = require('bcrypt');
const nodemailer = require(nodemailer);

router.post('/forgot', async (req,res) => {
    const email = req.body.email;
    const template = reset_email();
    let mailTransport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user:"ubookint@gmail.com",
            pass:"UBookgroup32"
        }
    })
    let details = {
        from:"Support@UBook.com",
        to:email,
        subject:"Password Reset",
        text:"Password Reset",
        html: template
    }
    mailTransport.sendMail(details, (err)=>{
        if(err) {
           return res.status(400).send("unable to send mail");
        }
        else {
            res.send("email has been sent");
        }
    })
});
  
module.exports = router;
