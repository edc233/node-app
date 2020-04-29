const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema({
    'username':{
        require:true,
        type:String,
    },
    'userid':{
        require:true,
        type:String
    },
    'password':{
        require:true,
        type:String
    },
    'gender':{
        require:true,
        type:Boolean,
    },
    'joinDate':{
        type:Date,
        default:Date.now
    }
})
const userModel = mongoose.model('userModel',userSchema)
module.exports = userModel