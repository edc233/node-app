var {userModel} = require('../database/db')
var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
    const {userid,password} = req.body
    let result={
        code:200,
        msg:{
        }
    }
    userModel.findOne({userid}).then( data => {
        if(data&&data.userid==userid&&data.password==password){
            result.code=200
            result.msg.data="登录成功"
            result.userinfo={
                username:data.username,
                gender:data.gender,
                joinDate:data.joinDate
            }
        }else{
            result.code=400
            result.msg.err="账号或密码错误，请重新输入！"
        }
        res.send(result)
    }).catch(err => {
        throw err
    })
});

router.post('/addmember', function(req, res, next) {
    const {userid,password,username,gender} =req.body
    let event={
        code:200,
        msg:{}
    }
    userModel.findOne({userid}).then(result=>{
        if(!result){
            new userModel({userid,password,username,gender})
            .save().then(function(){
                event.msg.data='添加成功'
                res.send(event)
            }).catch(err => { throw err})
        }else{
            event.code = 400;
            event.msg.err = '账号已存在'
            res.send(event)
        }
    }).catch(err => {throw err})
});

router.get('/getuserlist',function(req,res, next){
    userModel.find().then( result => {
        result.forEach(obj => {
            obj.password=''
        })
        res.send(
        {
            code:200,
            data:result
        }
    )})
})

router.post('/deletemember',function(req, res, next){
    const {_id} = req.body
    userModel.findByIdAndDelete({_id}).then(result=>{
        res.send({
            code:200,
            msg:{
                data:"删除成功"
            }
        })
    }).catch(err => { throw err})
})

module.exports = router;
