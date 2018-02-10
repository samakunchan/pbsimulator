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
    this.db.connect((err)=>{if (err) throw err;})
  }
}
/*
class Manager extends DataBase{
  create(name, pantheon){
    if (name !== "" && pantheon !== "") {
      //this.db.query("INSERT INTO gods (name, country) VALUES (?,?)",[name, pantheon], (err, result)=>{if (err) throw err;})
      return true;
    }else {
      return false;
    }
  }

  readAll(){
    let readAllData = null;
    this.db.query("SELECT * FROM gods", (err, result, fields)=> {
      if (err) throw err;
      this.readAllData = result[0].name;
      console.log(this.readAllData);
    });
    return this.readAllData;
  }

  readOneGods(nameParam){
    this.db.query("SELECT name FROM gods WHERE name=?",[nameParam], (err, result)=> {if (err) throw err;});
  }

  readPantheon(param){
    this.db.query("SELECT * FROM gods WHERE pantheon=?",[param], (err, result)=> {if (err) throw err;});
  }
  get getResult(){
    return this.resultData;
  }
}*/
module.exports = DataBase;
