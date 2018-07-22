const express=require('express');
const expressStatic=require('express-static');
var users={zhaoyan:'123456'};
var server=express();
server.listen('1234');

server.get('/login',function (req,res) {
    var user=req.query['user'];
    var pass=req.query['pass'];
    if(users[user]==null){
        res.send({"ok":false,"msg":"此用户不存在"});
    }else if (users[user]!=pass){
        res.send({'ok':false,'msg':'用户名或密码错误'});
    }else {
        res.send({'ok':true,'msg':'登录成功'});
    }
});

server.get('/reg',function (req,res) {
    var user=req.query['user'];
    var pass=req.query['pass'];
    if(users[user]){
        res.send({ok:false,msg:'用户名已存在'});
    }else {
        users[user]=pass;
        res.send({ok:true,msg:'注册成功'});
    }
})
server.use(expressStatic('./../login'));
