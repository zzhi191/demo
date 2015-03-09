
var fs = require('fs');

var path = __dirname;
var self = __filename.substring(__dirname.length + 1);



var files = fs.readdirSync(path);
files.forEach(function(filename) {
    if(filename == self)
        return;
    var pos = filename.lastIndexOf('.');
    if(pos == -1)
        return;
    var filePrefix = filename.substr(0, pos);
    var filePostfix = filename.substr(pos + 1);
    if(filePrefix.length < 1 || filePostfix.length < 1 || filePostfix != 'js')
        return;
    var model = require(path + '/' + filePrefix);
    
    
    // 装载所有方法
    Object.keys(model).forEach(function(key) {
        if(key != key.toLowerCase())
            return;
        var method = model[key];
        if(typeof method == 'function') {
            if(exports[key])
                throw new Error('Repeated method name: ' + key + ' in file: ' + filename);
            exports[key] = method;
        }
    });
});