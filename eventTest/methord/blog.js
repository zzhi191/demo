var BlogInfo=require('../model/blogInfo');


exports.blog_save=function(newblog){

	var blogInfo=new BlogInfo();

	blogInfo.on('save',function(){
		console.log('保存博客....',newblog);
	});

	blogInfo.on('index',function(){
		console.log('博客创建索引中....',newblog);
	});

	blogInfo.on('count',function(){
		console.log('博客统计中....',newblog);
	});

	blogInfo.on('saveEnd',function(){
		console.log('保存博客结束....',newblog);
	});

	blogInfo.eventsDone();
};

