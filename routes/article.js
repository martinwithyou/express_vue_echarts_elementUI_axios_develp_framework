let express=require('express');
let router=express.Router();
//创建一个子路由函数
router.get('/',function(req,res){
	res.render("article.ejs")
});

router.get('/add',function(req,res){
	res.render("a_form.ejs")
});
//login
var backdata =require('../module/u.json')
router.post('/login',function(req,res){
	res.json(backdata)
});

router.get('/req',function(req,res){
	res.send('gogo')
});

module.exports=router;

//user里面，
//在server里面
//问号传参数
//设置请求主体
//设置请求头
//跨域
//客户端通常使用ajax来向服务端发送请求
//ajax是同源策略请求
//不允许跨域访问
//协议，域名，端口好做对比
//3者有一个不一样
//基于jsonp实现跨域请求
//jsonp是利用script/img/link等标签不存在