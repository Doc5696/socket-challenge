import openSocket from 'socket.io-client'
// import Message from '../components/Message';

const socket = openSocket('http://localhost:8085');

function subscribeToTimer(cb) {
  socket.on('new bleat', newBleat => cb(newBleat));
  socket.emit('new bleat', 1000);
}
export { subscribeToTimer };
