var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!. Este server escucha por el puerto 8081. ok' + Date()); //write a response to the client
  res.end(); //end the response
}).listen(8081);
