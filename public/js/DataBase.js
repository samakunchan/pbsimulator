class DataBase {
  constructor() {
    this.mysql = require("mysql");
    this.paramater = {
      host: "localhost",
      user: "root",
      password: "badge",
      database: "pbss"
    };
    this.db = this.mysql.createConnection(this.paramater);
    this.db.connect((err)=>{if (err) throw err;
  console.log("Vous êtes connectés à la base de donnée :" + this.paramater.database);})
  }
}

class Manager extends DataBase{
  create(name, pantheon){
    if (name !== "" && pantheon !== "") {
      //this.db.query("INSERT INTO gods (name, country) VALUES (?,?)",[name, pantheon], (err, result)=>{if (err) throw err;})
      return true;
    }else {
      return false;
    }
    console.log("DB2 : "+name);
  }
  readAll(){
    this.db.query("SELECT * FROM gods", (err, result)=> {if (err) throw err;});
  }
  readOneGods(nameParam){
    this.db.query("SELECT name FROM gods WHERE name=?",[nameParam], (err, result)=> {if (err) throw err;});
  }
}
module.exports = Manager;
