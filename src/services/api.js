import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8085');

function subscribeToTimer(cb) {
  socket.on('new bleat', newBleat => cb(null, newBleat));
  socket.emit('new bleat', 1000);
}
export { subscribeToTimer };
