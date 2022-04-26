const { json, urlencoded } = require('express')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userController = require('./Controller/User-controller')

const req = require('express/lib/request')
const res = require('express/lib/response')
const { addUser } = require('./Controller/User-controller')



const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors(
    {origin:"*"}
))

mongoose.connect('mongodb://localhost:27017/ecom',function(err){
    if(err){
        console.log("db is not connected");
    }else{
        console.log('mongodb is connected');
    }
})

app.get('/',function(req,res){
    res.write('welcome');
    res.end();
})

app.post('/adduser',userController.addUser)
app.get('/getAllUser',userController.getAllUsers)
app.get('/getuser/:id',userController.findUser)

app.listen(3000,function(){
    console.log('server started');
}
)