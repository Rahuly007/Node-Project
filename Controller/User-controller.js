const mongoose = require('mongoose');
const UserModel =require('../Model/user')



module.exports.addUser = function(req,res){
        let name = req.body.name
        let email = req.body.email

        let user = new UserModel(
            {
                name:name,
                email:email
            }
        )

        user.save(function(err,sucess){
            if(err){
                res.json({msg:"error"})
            }else{
                res.json({msg:"sucess",data:sucess})
            }
        })
}

module.exports.getAllUsers = function(req,res){
    UserModel.find(function (err, data) {
        if (err) {
            console.log(err);
            //sendMailtoDev(err)
            res.json({ msg: "error", status: -1, data: res.err })
        } else {
            res.json({ msg: "USER retrived......", status: 200, data: data })
        }
    })
}

module.exports.findUser = function(req,res){
    let id = req.params.id;
    UserModel.findOne({_id:id},function(err,sucess){
        if(err){
            console.log(err);
        }else{
            res.json({msg:"sucess",data:sucess})
        }
    })
}