var socket = io.connect('http://localhost:1000');

socket.on("godChoose1", (result) => {
  document.getElementById("player1").innerHTML = result;
});
socket.on("godChoose2", (result) => {
  document.getElementById("player2").innerHTML = result;
});
socket.on("godChoose3", (result) => {
  document.getElementById("player3").innerHTML = result;
});
socket.on("godChoose4", (result) => {
  document.getElementById("player4").innerHTML = result;
});
socket.on("godChoose5", (result) => {
  document.getElementById("player5").innerHTML = result;
});
socket.on("statusConnection", (result) => {
  alert("Controller disconnected !!");
  setTimeout(() => {
    window.location.href = '/';
  }, 500);
});
