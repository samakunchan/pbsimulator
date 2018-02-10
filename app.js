const express = require("express");
const app = express();

const port = 1000;
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(port, ()=>{console.log("Vous êtes sur le port : " + port);});
//Middleware
const bodyParser = require("body-parser");
const methodOverride = require('method-override');
//Class
const DB = require("./public/js/DataBase");
const All = require("./public/js/Allgods");
//Views
app.use(express.static(__dirname + '/public'));//Pour le css et les autres fichiers js

app.set('view engine', 'pug');
app.get("/", (req, res)=>{
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
app.get("/insert", (req, res)=>{
  let mysql = new DB();
  mysql.db.query("SELECT * FROM gods WHERE pantheon=?",["japanese"], (err, result)=> {
    if (err) throw err;
    //res.render('form', {egypt : result});
  });
  mysql.db.query("SELECT * FROM gods", (err, result, fields)=> {
    if (err) throw err;
    console.log(result[0]);
    res.render('form', {all : result});
  });
});
app.get('*', function(req, res){
  res.status(404).send("La page que vous demandez n'existe pas.");
});
//Socket.io
io.on('connection', (socket)=>{
  console.log("Connection a socket.io réussi.");
  socket.on("dataGods", (result)=>{
    console.log("Reception donnée : " + result.name);
    let mysql = new DB();
    if (result.name !== "" && result.pantheon !== "") {
      mysql.db.query("INSERT INTO gods (name, pantheon) VALUES (?,?)",[result.name, result.pantheon], (err, result)=>{if (err) throw err;})
      socket.emit("success", result.name + " a été ajouté avec succès!!");
      return true;
    }else {
      socket.emit("fail", "Les champs ne doivent pas être vide");
      return false;
    }
  })
//fin query
});//fin io

///////////////////GESTION DES ERREURS////////////////////////////////
app.use(methodOverride());

app.use((err, req, res, next)=>{//clientErrorHandler
    if (req.xhr) {
        res.status(500).send({ error: 'Un truc ne marche pas :' + err});
    } else {
        next(err);
    }
});
app.use((err, req, res, next)=>{//errorHandler
    res.status(500);
    console.log(res.status(500));
    res.render('error', { error: "Message d'\erreur : " + err });
});
app.use((err, req, res, next)=>{//logError
    console.error(err.stack);
    res.status(500).send("Il y a une erreur : " + err);
    next(err);
});
