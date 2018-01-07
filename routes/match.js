let express=require('express')
    router =express.Router()
    
router.get('/join',function(req,res){
	res.json({'backdata':'sss'});
	//1获取所有的用户信息
	//2获取客户端传递进来的user_id,slogan
	//3在所有的用户信息中找出id和user_id相同的一项、
	//4把这一项中的id设置为slogn
	//5设置match自增长。获取matchid里面最大的一个
	//在原来的基础上累加一
	//获取所有信息，应该放在中间件
	let userData=req.myUserData; 
//	{userId, slogan}=req.query;
	//post request  req.body
	
	let userInfo=userData.filter(item=>{
		item['id']==userId
	});
	
	if(userInfo.length>0){
		userInfo.isMatch=1;
		userInfo.slogn=slogn;
		userInfo.matched='xxx';
		return;
	}
	fs.writeFile(req.userPath,JSON.stringify(userData))
	res.send({code:1,message:'error'},'utf-8',err=>{
		if(err)=>{
			res.send({code:1,message:'error'})
		return
		}
	})
});    

module.exports=router
