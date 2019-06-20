const Express = require('express');
const app = Express();
const socketio = require('socket.io');

const PORT = 1337;
const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

const io = socketio(server);

io.on('connection', (socket) => {
  console.log('New client has connected with ID: ' + socket.id);

  socket.on('message', (message) => {
    io.sockets.emit('message', message);
  })

  socket.on('disconnect', () => {
    console.log('Disconnection from client with ID: ' + socket.id);
  });
});
