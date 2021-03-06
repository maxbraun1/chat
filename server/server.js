var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

users = [];
connections = [];

server.listen(3000);
console.log("Server running on ");
console.log("Updated...");

/* app.get('/', function(req,res){
  res.sendFile(__dirname+"/index.html");
}); */

io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  //Disconect
  socket.on('disconnect', function(data){
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });

  //Send message
  socket.on('send message', function(data){
    console.log("Message Received");
    io.sockets.emit('new message', data);
  });
});
