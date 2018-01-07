// variable
var boxy = document.querySelectorAll(".box");
var check = document.querySelectorAll("#check");

// starting values for foods

var pizzaVal = 80;
var beerVal = 70;
var brocoilVal = 60;
var lemonVal = 40;
var grapeVal = 50;
var cherriesVal = 30;

var classes = [
  "cherries",
  "cherries",
  "cherries",
  "grapes",
  "pizza",
   "beer",
  "brocoil",
  "lemon"
 ]

// sounds
const audioWin = document.querySelector(".sound__win");

// start bet
var startBet = 10;
var multiplier = 1;
// Coins
var coinsValue = 1000;



var coins = document.querySelector(".score--start-coins");
coins.textContent = coinsValue;
// bet down button

var betDown = document.querySelector("#valDown")
betDown.addEventListener("click", function() {
  multiplier = multiplier - 1
  lemonListt.textContent = lemonVal * multiplier;
  beerList.textContent = beerVal * multiplier;
  pizzaList.textContent = pizzaVal * multiplier;
  grapeList.textContent = grapeVal * multiplier;
  cherriesList.textContent = cherriesVal * multiplier;
  brocoilList.textContent = brocoilVal * multiplier;

  startBet = startBet - 10;
  scoreDisplay.textContent = startBet;
  checkLess();
  check3();


})

// bet Up butoon
var betOn = document.querySelector("#valUp");
betOn.addEventListener("click", function() {

  multiplier = multiplier + 1;

  lemonListt.textContent = lemonVal * multiplier;
  beerList.textContent = beerVal * multiplier;
  pizzaList.textContent = pizzaVal * multiplier;
  grapeList.textContent = grapeVal * multiplier;
  cherriesList.textContent = cherriesVal * multiplier;
  brocoilList.textContent = brocoilVal * multiplier;

  startBet = startBet + 10;
  scoreDisplay.textContent = startBet;
  checkMore();
  check3();



})
// winingScore
var winingScore = document.querySelector(".score--winingScore");
winingScore.textContent = 0;
// Score display
var scoreDisplay = document.querySelector(".score--bet");

scoreDisplay.textContent = startBet

// Spin Button
var spin = document.querySelector("#spin");
spin.addEventListener("click", function() {
  coinsValue = coinsValue - startBet;

  for (var i = 0; i < boxy.length; i++) {
    boxy[i].classList.toggle("scroll");

  }
  spin.setAttribute("disabled", true)

  randomImg();

  putClassesInToSquare();

  winingScore.textContent = 0;
  coins.textContent = coinsValue;
  ifIWin();
  if (coinsValue <= 0) {
    spin.setAttribute("disabled", true);
    coins.textContent = 0;

  }
  window.setTimeout(function() {
    for (var i = 0; i < boxy.length; i++) {
      boxy[i].classList.remove("scroll");
      spin.removeAttribute("disabled", true)
      coins.textContent = coinsValue;

    }
    if (startBet > coinsValue) {
      // if start bet is over than coins value game over and disabled spin button

      spin.setAttribute("disabled", true);

    }
    if (coinsValue <= 0) {
      spin.setAttribute("disabled", true);
      coins.textContent = 0;

    }



  }, 1500);



})


// ~~NAVIGATION VALUES
var brocoilList = document.querySelector(".brocoil-nav");
brocoilList.textContent = brocoilVal * multiplier;

var grapeList = document.querySelector(".grape-nav");
grapeList.textContent = grapeVal * multiplier;

var lemonListt = document.querySelector(".lemon-nav");
lemonListt.textContent = lemonVal * multiplier;

var pizzaList = document.querySelector(".pizza-nav")
pizzaList.textContent = pizzaVal * multiplier;

var cherriesList = document.querySelector(".cherries-nav")
cherriesList.textContent = cherriesVal * multiplier;

var beerList = document.querySelector(".beer-nav")
beerList.textContent = beerVal * multiplier;

// ~~~~~FUNCTIONS~~~~~~

// generate Random Class
function randomImg() {
  // var random = Math.floor(Math.random() * imgs.length)
  var random = Math.floor(Math.random() * classes.length)


  return classes[random]

}
// put classes in to squares
function putClassesInToSquare() {
  for (var i = 0; i < boxy.length; i++) {


    var template = '<div id="check" class="' + randomImg() + '">' + "</div>"
    boxy[i].innerHTML = template;

    // boxy[i].innerHTML=`<div id="check" class="${randomImg()}"></div>`



  }
}


// wining coindtions
function ifIWin() {
  var check = document.querySelectorAll("#check");

  if ((check[0].className === "pizza") && (check[0].className == check[1].className) && (check[2].className == check[0].className)) {

    var wygrana = pizzaVal.textContent = pizzaVal * multiplier;

    var winingScore = document.querySelector(".score--winingScore");
    window.setTimeout(function() {
      coinsValue = coinsValue + wygrana;
      winingScore.textContent = wygrana;
      // audioWin.play();

    }, 1200);


  }
  if ((check[0].className === "cherries") && (check[0].className == check[1].className) && (check[2].className == check[0].className)) {



    var wygrana = cherriesVal.textContent = cherriesVal * multiplier;
    var winingScore = document.querySelector(".score--winingScore");
    window.setTimeout(function() {
      // audioWin.play();
      coinsValue = coinsValue + wygrana;
      winingScore.textContent = wygrana;

    }, 1200);

  }
  if  ((check[0].className === "grapes") && (check[0].className == check[1].className) && (check[2].className == check[0].className)){



    var wygrana = grapeVal.textContent = grapeVal * multiplier;
    var winingScore = document.querySelector(".score--winingScore");
    window.setTimeout(function() {
      // audioWin.play();
      coinsValue = coinsValue + wygrana;
      winingScore.textContent = wygrana;

    }, 1200);
  }
  if ((check[0].className === "brocoil") && (check[0].className == check[1].className) && (check[2].className == check[0].className)) {

    var wygrana = brocoilVal.textContent = brocoilVal * multiplier;
    var winingScore = document.querySelector(".score--winingScore");
    window.setTimeout(function() {
      // audioWin.play();
      coinsValue = coinsValue + wygrana;
      winingScore.textContent = wygrana;

    }, 1200);
  }
  if ((check[0].className === "beer") && (check[0].className == check[1].className) && (check[2].className == check[0].className)) {
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {


    var wygrana = beerVal.textContent = beerVal * multiplier;
    var winingScore = document.querySelector(".score--winingScore");
    window.setTimeout(function() {
      // audioWin.play();
      coinsValue = coinsValue + wygrana;
      winingScore.textContent = wygrana;

    }, 1200);
  }

  if ((check[0].className === "lemon") && (check[0].className == check[1].className) && (check[2].className == check[0].className)) {

    var wygrana = lemonVal.textContent = lemonVal * multiplier;
    var winingScore = document.querySelector(".score--winingScore");
    window.setTimeout(function() {
      // audioWin.play();
      coinsValue = coinsValue + wygrana;
      winingScore.textContent = wygrana;

    }, 1200);

  }

}

function checkLess() {
  if (startBet == 0) {
    spin.setAttribute("disabled", true)
  } else if (startBet > 0) {
    betOn.removeAttribute("disabled", true);
  } else if (startBet >= coinsValue) {
    spin.removeAttribute("disabled", true);
  }
}

function check3() {
  if (startBet == coinsValue) {
    spin.removeAttribute("disabled", true);
  }
  if (startBet == 0) {
    valDown.setAttribute("disabled", true);
  }
}

function checkMore() {
  if ((startBet > 0) & (startBet >= coinsValue)) {
    betOn.setAttribute("disabled", true);
  } else if (startBet > 0) {
    betDown.removeAttribute("disabled", true);
    spin.removeAttribute("disabled", true)
  }
}
