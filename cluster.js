var cluster = require('cluster');
var http=require('http');
var cpu_num = require('os').cpus().length;

//console.log('----',cluster.isMaster,cluster.isWorker);

if (cluster.isMaster) {
    console.log("==启动主进程==");

    for (var i = 0; i < cpu_num; i++) {
        cluster.fork();
        //根据cpu的数量主进程 fork 了相同数量的子进程出来
    }

    cluster.on('listening',function(worker,address){
        console.log('listening: worker ' + worker.process.pid +', Address: '+address.address+":"+address.port);
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    http.createServer(function(req, res) {
        res.writeHead(200);
        res.end("<a href='http://yijiebuyi.com'>一介布衣</a>\n");
    }).listen(7000);
}