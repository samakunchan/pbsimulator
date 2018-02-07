let port = 1000;
let http = require("http");
let express = require("express");
let app = express();
const All = require("./public/js/allgods");
app.listen(port, ()=>{console.log("Vous êtes sur le port : " + port);})
app.use(express.static(__dirname + '/public'));//Pour le css et les autres fichiers js
app.set('view engine', 'pug');
app.get("/", (req, res)=>{
  //console.log(All);
  //let gods = new All();
  //gods.showToConsole();
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
app.get("/insert", (req, res)=>{
  res.render('form');
});
