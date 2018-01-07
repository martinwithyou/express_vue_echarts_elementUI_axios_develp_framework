let express=require('express');
let router=express.Router();
let fs=require('fs')
//创建一个子路由函数
router.get('/login',function(req,res){
	//res.send("登录")
	res.render('hello.ejs',{val:'gogoboy',name:'martin',a:"<h2 style='color:red'>colorful boy</h2>",school:{name:'zf',age:8}});
	//渲染某个页面
	//直接写文件名即可
});
router.get('/',function(req,res){
	res.render('form.ejs');
	console.log(req.path);
	console.log(req.query);
	let{name ,age}=req.query;
});
router.get('/data',function(req,res){
	res.json(backdata);
});
var backdata =require('../module/u.json')
router.post('/login',function(req,res){
	var resoult=req.body;
	backdata.push(resoult);
	fs.writeFile(__dirname + '/../module/u.json',JSON.stringify(backdata), function (err) {
        if(err) {
        console.error(err);
        } else {
         console.log('写入json成功');
        }
    });
	res.render('form.ejs');
	//res.sendFile('./index.html',{root:__diename})
	//读取指定文件的内容，返回给客户端
	//res.json();
	//res.send();
	//res.statuscode
	//res.redirect
	//遍历userdata,把最新信息替换原有信息
	//把替换好的信息写入到文件里面
});


var backdata =require('../module/u.json')
router.get('/req',function(req,res){
	res.render('interface.ejs');
});

module.exports=router;
