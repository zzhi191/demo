var http = require('http');        
var blog= require('./methord/blog');


var webServer = function (req, res){ 
	if(req.url!='/favicon.ico'){
		console.log('************');
		var newblog={title:"标题",content:"内容"};
		blog.blog_save(newblog);

		res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'}); 
		res.write('<html><body>'); 
		res.write('<h1>*** save blog ***</h1>'); 
		res.write('<h2>Hello!</h2>'); 
		res.end('</body></html>'); 
	}
};

var createWebServer=http.createServer(webServer);

createWebServer.listen(8000);
console.log('listen 8000');
