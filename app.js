const port = 1000;
const http = require("http");
const express = require("express");
const app = express();
const DB = require("./public/js/dataBase");
const All = require("./public/js/allgods");
app.listen(port, ()=>{console.log("Vous êtes sur le port : " + port);})
app.use(express.static(__dirname + '/public'));//Pour le css et les autres fichiers js
app.set('view engine', 'pug');
app.get("/", (req, res)=>{
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
app.get("/insert", (req, res)=>{
  let db = new DB();
  db.test();
  res.render('form');
});
