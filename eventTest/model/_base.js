var events=require('events');
var util=require('util');

function _base(){

	var self=this;

	events.EventEmitter.call(self);

	self.on('newListener', function(listener) {
        console.log('Event Listener: ' + listener);
    });

    self.eventsDone=function(){
		self.emit('save',console.log('emit --  (save)'));

		self.emit('index',console.log('emit --  (index)'));

		self.emit('count',console.log('emit --  (count)'));

		self.emit('saveEnd',console.log('emit -- (save-end)'));
	};

}


util.inherits(_base,events.EventEmitter);


module.exports=_base;