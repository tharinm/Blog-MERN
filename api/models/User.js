const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        tyepe: String,
        required: true,
        unique: true,
    },
    password: {
        tyepe: String,
        required: true,
    },
    profilePic: {
        tyepe: String,
        default: '',
    },
  
},
{
        timestamps: true
    }
);

module.exports=mongoose.model('User',UserSchema)