var http = require('http');
var port = process.env.PORT || 3000;	// set port up - process.env.PORT comes from heroku
console.log("This goes to the console window");	// if doesn't work, port 3000
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
   res.write("<h2>Hello World</h2>");
   res.write ("Success!  This app is deployed online");
   res.end();
}).listen(port);
