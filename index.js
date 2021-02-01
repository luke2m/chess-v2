const express = require("express");
const app = express();
const path = require('path');
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const dbCrud = require("./dbCrud");
 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use('/static', express.static(path.join(__dirname, '/public')));


http.listen(3000, () => {
  console.log('listening on *:3000');
});