
var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function(socket){

  console.log('socket connection!!');

  socket.on('send:message', function(msg){
    console.log('message: ' + msg);
    io.emit('send:message', msg);
  });

  socket.on('event', function(data){
    console.log(data);
  });

  // socket.on('disconnect', function(){});

});

server.listen(8001);
console.log('Example app listening at http://%s:%s', 'localhost', 8001);
