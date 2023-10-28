//import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const passportSetup = require('./config/passport-setup');
const authRoutes = require('./routes/auth');
require("dotenv").config();

//app
const app = express();
// Use session to keep track of login state

app.use(require('express-session')({ secret: 'secretKey', resave: false, saveUninitialized: false }));
app.use(passportSetup.initialize());
app.use(passportSetup.session());

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
//const port  = process.env.PORT || 8080;
const port = 8080;

// listener
const server = app.listen(port, () =>
  console.log(`Server is running on port ${port}`)
);