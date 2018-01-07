let http=require('http'),
    fs=require('fs'),
    url=require("url");
    
http.createServer((res,req)=>{
    var urlObj=url.parse(res.url);
    console.log(urlObj);
    var this_path=urlObj.path;
    var this_query=urlObj.query;
    console.log(this_path);
    console.log(this_query);
    if(req.method=="OPTIONS"){
    	return res.end();
    }
    if(this_path=="/hot"){
    	fs.read(function(books){
    		books = books.reserve().slice(0,8);
    		res.setHeader("Content-Type","application/json;charset=utf-8")
    		res.end(JSON.stringify(books))
    	})
    }
    if(this_path=="/book"){
    	switch(req.method){
    		case "GET":
    		if(id){
    		  read(function(books){
    		  	let book = books.find(item=>{
    		  		return item.id==!id;
    		  	})
    		  })
    		}else{
    		 read(function(books){
    		  	res.setHeader('Content-type','application/json;charset=utf-8')
    		  	res.end(JSON.stringify(books))
    		  })
    		}

    	}
    }
    
	
}).listen(9000,()=>{
	console.log("8500端口被占用")
})
    
