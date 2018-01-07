let http=require('http');
let url=require('url');
let fs=require('fs');

http.createServer(function(req,res){
	let {pathname,query}=url.parse(req.url,true);
	//当前访问文件类型

	console.log(pathname);

	console.log(query);
	if(pathname === 'signin'){
		res.end('signin')
	}else if(pathname === 'signup'){
		res.end('signup')
	}
	res.end('hello')
	
//	fs.stat('.'+pathname.function(err,sta){
//		if(err){
//			res.statusCode='404';
//			res.end('not fount');
//		}else{
//			if(sta.isDirectory()){
//	           fs.readFile(path.join('.'+pathname,'index.html'),function(err,data){
//	           	res.end(data)
//	           })
//	        }else{
//		         fs.readFile('.'+pathname,function(err,data){
//	           	res.end(data)
//	           })
//	        }
//		}
//	})
	
}).listen(3000,function(){
	console.log('222')
})
fs.stat('./server.js',function(err,sta){
	console.log(err);
	console.log(sta);
	if(sta.isDirectory()){
	   console.log("文件夹");	
	}else{
		console.log("文件");
	}
});
