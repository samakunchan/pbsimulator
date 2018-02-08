const port = 1000;
const http = require("http");
const express = require("express");
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
server.listen(port, ()=>{console.log("Vous êtes sur le port : " + port);});

const DB = require("./public/js/dataBase");
const All = require("./public/js/allgods");
app.use(express.static(__dirname + '/public'));//Pour le css et les autres fichiers js
app.set('view engine', 'pug');
app.get("/", (req, res)=>{
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
app.get("/insert", (req, res)=>{
  let db = new DB();
  //db.create("artemis", "greek");
  db.readAll();
  res.render('form');
});

io.on('connection', (socket)=>{
  console.log("Connection a socket.io réussi.");
  socket.on("nameValue", (result)=>{ console.log(result)});
  socket.on("pantheonValue", (result)=>{ console.log(result)});
});
