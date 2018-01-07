let express  = require('express')

//请求体中间件，将将请求对象中获取请求体，
//将请求体转换为对象赋值给一个函数
//需要调用执行后，秀才返回对象
let app=express();
app.use(express.static('./'));
let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//中间件可以部门匹配
//req,res可以在中间件内封装一些方法
app.use(function (req, res, next) {
    //允许的来源
    res.header('Access-Control-Allow-Origin', '*');
    //res.header('Access-Control-Allow-Origin', '*');
    //允许客户端请求的方法
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    //允许客户端发送的请求头
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //允许客户端发送Cookie
    res.header('Access-Control-Allow-Credentials', "true");
    //当客户端发向服务器发post跨域的时候，会先发送OPTIONS请求。如果服务器返回的响应头Access-Control-Allow-Methods里有POST的话，才会再次发送POST请求
    if (req.method == 'OPTIONS') {
        //res.end();
        next();
    } else {
        next();
    }
});
/*
 *给请求和相应对象添加一些公共的方法和属性
 * 进行一些公共的处理逻辑
 * */
//use方法可以添加中间件
app.use(function(req,res,next){
	res.setHeader('Content-Type',"text/html;charset=utf-8");
	console.log("1111");
	console.log(next)
	next();
	//只有调用了next方法
	//
})

//use方法可以添加中间件,可以结束相应
//中间件属于中间环节
//处理玩逻辑还会继续往下走
//走到路由才会真正往下走
//路由是真正的业务逻辑
app.use(function(req,res,next){
	console.log("2222");
	next();
	//只有调用了next方法
	//
})
//使用js的高级方法都是浅拷贝
app.get('/home',function(req,res){
	res.end('首页')
})
app.get('/signup_new',function(req,res){
	res.end(`
		<form method="post" url="./signup_back">
		<label>qq</label><input type="text" name="username"/>
		<label>qqq</label><input type="text" name="password"/>
		<input type="submit" value="submit"/>
		</form>
	`)
})
app.post('/signup_new',function(req,res){
	let body=req.body;
	console.log(body);
	res.end(JSON.stringify(body))
})
app.get('/signin',function(req,res){
	res.end('3333')
})
app.post('/gogo',function(req,res){
	res.end('fuck you')
})
app.get('/send',function(req,res){
	//res.send({'www':'fuck you'})
	res.send([{'www':'fuck you'},{'www':'fuck you'}])
	//res.send(200)
})
//send可以直接返回数字，对象
//json可以直接返回对象
///works
app.get('/1.express.js',function(req,res){
	res.sendFile(__dirname + '/index.js')
})
app.get('/2.express.js',function(req,res){
	res.sendFile(__dirname + '/server.js')
})
app.post('/works',function(req,res){
	res.end('fuck you')
})
app.get('/user',function(req,res){
	console.log(req.url);
	console.log(req.query);
	console.log(req.body);
	console.log(req.headers);
	res.end('gogoboy is not usser')
})
app.get('/users/:id/:name',function(req,res){
	let id=req.params.id;
	console.log(req.params)
//	console.log(req.url);
//	console.log(req.query);
//	console.log(req.body);
//	console.log(req.headers);
	res.end('gogoboy is not usser')
})
//put head
app.all('*',function(req,res){
	res.end('404')
});

app.use(function(err,req,res,next){
	console.log(err);
	next();
})
app.listen(3000,function(){
	console.log("port is 3000");
})
