let express  = require('express')
console.log(express);
let app=express();
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
        res.end();
    } else {
        next();
    }
});
app.get('/signup',function(req,res){
	res.end('222')
})
app.get('/signin',function(req,res){
	res.end('3333')
})

app.post('/gogo',function(req,res){
	res.end('gogoboy')
})
//put head
app.all('*',function(req,res){
	res.end('404')
});

app.listen(3000,function(){
	console.log("port is 3000");
})
function bodyParser(){
	return function(res,res.next){
		req.body={};
		let str="";
		res.on("data",function(chunk){
			req.body+=chunk;
		})
		req.on("end",function(){
			if(req.headers['content-type'] === 'application/json'){
               Object.assign(req.body,JSON.parse(str))
            }else if(req.headers['content-type']==='application/x-www-form-urlencoded'){
               Object.assign(req.body, require('querystring').parse(str));
            }
            next();// req.on是异步的

		})
	}
}
