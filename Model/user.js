const mongoose = require('mongoose')


let UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
})

let UserModel = mongoose.model('user1',UserSchema)

module.exports = UserModel;