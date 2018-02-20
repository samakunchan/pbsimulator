var socket = io.connect('http://localhost:1000');
//socket.emit("coCtrl", "Connection a controlleur.pug <=> socket.io réussi.")
class ControllerHandler {
  godSelectedPlayer1(data){
    socket.emit("godSelected1", document.getElementById("" + data.name + "1").value);
  }
}
let player = new ControllerHandler();
socket.on("dataAllGods", (result) => {
  result.forEach((data) => {
    document.getElementById("" + data.name + "1").addEventListener("click", (event) => {
      socket.emit("godSelected1", document.getElementById("" + data.name + "1").value);
    });

    document.getElementById("" + data.name + "2").addEventListener("click", (event) => {
      socket.emit("godSelected2", document.getElementById("" + data.name + "2").value);
    });

    document.getElementById("" + data.name + "3").addEventListener("click", (event) => {
      socket.emit("godSelected3", document.getElementById("" + data.name + "3").value);
    });

    document.getElementById("" + data.name + "4").addEventListener("click", (event) => {
      socket.emit("godSelected4", document.getElementById("" + data.name + "4").value);
    });

    document.getElementById("" + data.name + "5").addEventListener("click", (event) => {
      socket.emit("godSelected5", document.getElementById("" + data.name + "5").value);
    });

  }); //fin foreach
}); //fin socket dataAllGods

socket.on("statusConnection", (result) => {
  window.close();
})
