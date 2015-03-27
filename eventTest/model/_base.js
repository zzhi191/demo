var events=require('events');
var util=require('util');

function _base(){
	this.emitter=new events.EventEmitter(this);
};

util.inherits(_base,events.EventEmitter);

_base.prototype.onEvent=function(eventName,callback){
	this.emitter.on(eventName,callback);
}

_base.prototype.emitEvent=function(eventName,arg){
	this.emitter.emit(eventName,arg);
}


module.exports=_base;