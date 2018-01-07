let express=require('express');
let user=require('./routes/user');
let article=require('./routes/article');
let app=express();
let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(bodyParser.text());

let path=require('path');

app.use(express.static('./dist'));
//中间件
app.use((req,res,next)=>{
	next();
})
//中间件

app.use('/user',user)
app.use('/article',article)
//app.use('/match',require('./routes/match'))
app.use('/users',require('./routes/users'))

app.get('/',function(req,res){
	res.render('font_page.ejs');
	console.log(req.path);
	console.log(req.query);
	//get请求可以传递参数
	console.log(req.headers);
	console.log(req.headers.host);
	//获取请求头里面的信息
})
app.get('/baidu',function(req,res){
	res.redirect("http://www.baidu.com");
	//res.statusCode=302;
	//res.setHeader('location','http://www.baidu.com')
})

app.all('*',function(req,res){
	res.sendStatus(404);
})
app.listen(3000);
