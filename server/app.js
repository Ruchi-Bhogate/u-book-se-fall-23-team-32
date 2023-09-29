//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const passportSetup = require('./config/passport-setup');
const authRoutes = require('./routes/auth');
const user_model = require('./models/user_model');
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
require("dotenv").config();

//app
const app = express();
// Use session to keep track of login state

app.use(require('express-session')({ secret: 'secretKey', resave: false, saveUninitialized: false }));
app.use(passportSetup.initialize());
app.use(passportSetup.session());
app.use(express.json())

//db
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("DB CONNECTED")).catch(err => console.log("DB CONNECTION ERROR", err));
//middleware
app.use(morgan("dev"));
app.use(express.json())
app.use(cors());
// app.post('/api/register',(req,res)=> {
//     console.log(req.body)
//     res.json({status: 'ok'})  
// })
//routes
app.use("/", require('./routes/user'));
app.use('/auth', authRoutes);


//ports
const port  = process.env.PORT || 8080;

// listener
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);

app.post('/Forgot',(req,res)=> {
  const {email} = req.body;
  user_model.findOne({email:email})
  .then (user => {
    if(!userr) {
      return res.send({status:"User does not exist"})
    }
    const token = jwt.sign({id: user._id}, "jwt_secret_key", {expiresIn: "Id"})
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'weishe',
        pass: 'Sat96817?'
      }
    });
    
    var mailOptions = {
      from: 'weishunhe92@gmail.com',
      to: 'myfriend@yahoo.com',
      subject: 'Password Reset',
      text: 'http://localhost:8080/reset-password/${user._id}/${token}'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        return res.send({Status:"success"})
      }
    });
  })
})