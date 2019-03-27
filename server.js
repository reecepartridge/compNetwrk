const express = require('express')
const app = express();
const cors = require(`cors`);
const bodyParser = require(`body-parser`);
app.use(cors());

// const server = require('http').createServer(response);
// server.listen(3000);
// console.log("App running…");
// function response(req, res) {
//  res.writeHead(200);
//  res.end("Hi, your server is working!");
// }
  
// app.use(express.bodyParser());
// app.use(app.router);
// app.use(express.logger());
app.use(bodyParser.json());
const messages = [];

app.get('/messages', (request, response) => {
    response.json({
      messages: messages
})
  })
app.post(`/chat`, (request, response) => {
    messages.push(request.body.message)
})
app.listen(3000);
