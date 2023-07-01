var http = require('http');
var fs = require('fs');


function onRequest(req,res)
{
if(req.url=='/test.html' || req.url=='/'){
fs.readFile('./test.html', function inner(error,data) {
if(error){
res.writeHead(404);
res.write('File Not Found');
}
else{
res.writeHead(200,{"Content-Type": "text/css"});
res.writeHead(200, {'Content-Type': 'text/html'});
res.write(data);
//Test Demo Code
//res.write('Index.html');
res.end();
}
//res.end();
});
}
}
http.createServer(onRequest).listen(8080);

