const mongoose = require('mongoose')
const modelSchema = mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
const model = model('model', modelSchema)
module.export = model;
