class Gods {
  constructor() {
    this.arrayOfAllGods = ["anubis", "ao kuang", "agni", "apollo"];
    this.messageToConsole();
  }
  showToConsole(){
    console.log(this.arrayOfAllGods);
  }
  messageToConsole(){console.log("Vous êtes bien sur la class Gods.")};
}
module.exports = Gods;
