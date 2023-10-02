

const mongoose = require('mongoose');

const User = new mongoose.Schema(
    {
        firstname: {type: String,required: true},
        lastname: {type: String,required: true},
  email: { type: String, required: true, unique: true },
  username: { type: String, unique: true }, 
  password: { type: String, required: true },
  role:{type:String,required:true},
  quote: { type: String},
},
{collection: 'user-data'})

module.exports = mongoose.model('UserData', User);
