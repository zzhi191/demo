var _base=require('./_base');
var util=require('util');
function blogInfo(){
	this.base=new _base();
}

util.inherits(blogInfo,_base);

blogInfo.prototype.onSave=function(blog){

	this.base.onEvent('saveStart',function(blog){
		console.log('saveStart',blog);
	});

	this.base.onEvent('blogCount',function(blog){
		console.log('blogCount',blog);
	});

	this.base.onEvent('userInfoCount',function(blog){
		console.log('count',blog);
	});

	this.base.onEvent('saveEnd',function(blog){
		console.log('saveEnd',blog);
	});
};

blogInfo.prototype.emitEvent=function(blog){

	this.base.emitEvent('saveStart',blog);

	this.base.emitEvent('blogCount',blog);

	this.base.emitEvent('userInfoCount',blog);

	this.base.emitEvent('saveEnd',blog);
};




module.exports=blogInfo;