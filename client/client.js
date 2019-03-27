const app = require('express')();
const express = require('express');
const http = require('http').Server(app);

app.use(express.static('js'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client.html');
});

http.listen(3001, function(){
    console.log('Client is listening on port 8080');
});
