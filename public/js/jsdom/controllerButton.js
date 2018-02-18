document.getElementById("player1").addEventListener("submit", function(event){
event.preventDefault();
});
document.getElementById("playerBtn1").addEventListener("click", function(event){
document.getElementById("player1").classList.remove("off") ;
document.getElementById("player1").classList.add("active")
document.getElementById("player2").classList.remove("active") ;
document.getElementById("player2").classList.add("off");
document.getElementById("player3").classList.remove("active") ;
document.getElementById("player3").classList.add("off");
document.getElementById("player4").classList.remove("active") ;
document.getElementById("player4").classList.add("off");
document.getElementById("player5").classList.remove("active") ;
document.getElementById("player5").classList.add("off");
});

document.getElementById("playerBtn2").addEventListener("click", function(event){
document.getElementById("player2").classList.remove("off") ;
document.getElementById("player2").classList.add("active");
document.getElementById("player1").classList.remove("active") ;
document.getElementById("player1").classList.add("off");
document.getElementById("player3").classList.remove("active") ;
document.getElementById("player3").classList.add("off");
document.getElementById("player4").classList.remove("active") ;
document.getElementById("player4").classList.add("off");
document.getElementById("player5").classList.remove("active") ;
document.getElementById("player5").classList.add("off");
});

document.getElementById("playerBtn3").addEventListener("click", function(event){
document.getElementById("player3").classList.remove("off") ;
document.getElementById("player3").classList.add("active")
document.getElementById("player2").classList.remove("active") ;
document.getElementById("player2").classList.add("off");
document.getElementById("player1").classList.remove("active") ;
document.getElementById("player1").classList.add("off");
document.getElementById("player4").classList.remove("active") ;
document.getElementById("player4").classList.add("off");
document.getElementById("player5").classList.remove("active") ;
document.getElementById("player5").classList.add("off");
});

document.getElementById("playerBtn4").addEventListener("click", function(event){
document.getElementById("player4").classList.remove("off") ;
document.getElementById("player4").classList.add("active")
document.getElementById("player2").classList.remove("active") ;
document.getElementById("player2").classList.add("off");
document.getElementById("player1").classList.remove("active") ;
document.getElementById("player1").classList.add("off");
document.getElementById("player3").classList.remove("active") ;
document.getElementById("player3").classList.add("off");
document.getElementById("player5").classList.remove("active") ;
document.getElementById("player5").classList.add("off");
});

document.getElementById("playerBtn5").addEventListener("click", function(event){
document.getElementById("player5").classList.remove("off") ;
document.getElementById("player5").classList.add("active")
document.getElementById("player4").classList.remove("active") ;
document.getElementById("player4").classList.add("off");
document.getElementById("player3").classList.remove("active") ;
document.getElementById("player3").classList.add("off");
document.getElementById("player2").classList.remove("active") ;
document.getElementById("player2").classList.add("off");
document.getElementById("player1").classList.remove("active") ;
document.getElementById("player1").classList.add("off");
});
