// nodejs 域名解析
var proxy = require('http-proxy').createProxyServer({});

proxy.on(function(err, req, res){
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });
  
});

var server = require('http').createServer(function(req, res){
  var host = req.headers.host;

  switch (host) {
    case 'dm.test':
      proxy.web(req, res, {target: 'http://localhost:7001'});
      break;

    default:
      res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.end('what are u doing!!??');
      break;
  }
});

console.log('listening on port 80');
server.listen(80);
