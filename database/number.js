const mongoose = require('mongoose')
const Schema = mongoose.Schema
const addSchema = new Schema({
    'number':{
        require:true,
        type:Number,
    }
})
const addModel = mongoose.model('addModel',addSchema)
module.exports = addModel