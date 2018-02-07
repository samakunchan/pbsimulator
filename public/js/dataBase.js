class DataBase {
  constructor() {
    this.mysql = require("mysql");
    this.paramater ={
      host: "localhost",
      user: "root",
      password: "badge",
      database: "pbss"
    };
    this.db = this.mysql.createConnection(this.paramater);
    this.db.connect((err)=>{if (err) throw err;
  console.log("Connected!");})
  }
  test(){
    this.db.query("SELECT * FROM gods", (err, result)=> {
  if (err) throw err;
  console.log(result[0].name);
});
  }
}
module.exports = DataBase;
