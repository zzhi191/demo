var BlogInfo=require('../model/blogInfo');


exports.blog_save=function(newblog){

	var blogInfo=new BlogInfo();

	blogInfo.onSave(newblog);

	blogInfo.emitEvent(newblog);
};

