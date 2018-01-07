var express  = require('express')
var app= express();
var fs = require('fs');

let bodyParser = require('body-parser');

app.use(bodyParser.json());

var multipart = require('connect-multiparty')
var multipartMiddleware = multipart();
var url =require('url');
var querystring = require('querystring');
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
var getdata =require('./module/user.json')

app.get('/',function(req,res){
	console.log(req.url);
   res.json(getdata);
});

var listdata =require('./module/all.json')

app.get('/all',function(req,res){
	console.log(req.url);
   res.json(listdata);
});


var backdata =require('./module/u.json')
var dataArr =require('./module/s.json')

app.post('/works',function (req, res,next) {

    var body='';
    //每当接收到请求体数据，累加到post中
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
        console.log("chunk:",chunk);
        console.log("body:", body);

        fs.writeFile(__dirname + '/test.txt',body, {flag: 'a'}, function (err) {
        if(err) {
        console.error(err);
        } else {
         console.log('写入成功');
        }
      });
    });
    
    req.on('end', function () {
//   	body = JSON.parse(body);  //将一个字符串反序列化为一个对象
//   	console.log(dataArr);
//   	console.log(dataArr.total)
     	console.log(JSON.stringify(body))
     	dataArr.total.push(JSON.stringify(body));
        fs.writeFile(__dirname + '/result.json',dataArr, {flag: 'a'}, function (err) {
        if(err) {
        console.error(err);
        } else {
         console.log('写入json成功');
        }
       });
       

       res.json(backdata);
    });
    
});

//后台部门
//实现请求的接口的逻辑
//后台部门
//实现/hot,返回最新的8条数据

var server = app.listen(3000,function(){
	console.log('this is localhost 3000')
})
function static(pathname){
	return function(req,res ,next){
		
	}
}
