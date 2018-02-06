let port = 1000;
let http = require("http");
let express = require("express");
let app = express();
const All = require("./public/js/allgods");
app.listen(port, ()=>{console.log("Vous êtes sur le port : " + port);})
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.get("/", (req, res)=>{
  console.log(All);
  let gods = new All();
  console.log(gods);
  gods.affiche();
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
