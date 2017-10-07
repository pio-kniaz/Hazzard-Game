var spinSound = document.querySelector("#spin");
var spinBet = document.querySelector("#valUp");
var spinBet1 = document.querySelector("#valDown");

var audioBet = document.querySelector(".sound__bet")





function playBet(){
  if (!audioBet) return;
  audioBet.play();
  audioBet.currentTime = 0.1;
}
spinSound.addEventListener('click', function() {
  const audioSpin = document.querySelector(".sound__spin")
  if (!audioSpin) return;
  audioSpin.play();


})
