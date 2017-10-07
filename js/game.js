// variable
var boxy = document.querySelectorAll(".box");

// starting values for foods

var pizzaVal = 80;
var beerVal = 70;
var brocoilVal = 60;
var lemonVal = 40;
var grapeVal = 50;
var cherriesVal = 30;

// imgs
var imgs = [
  "url(img/005-grapes.png)",
  "url(img/001-fruit.png)",
  "url(img/003-cherries.png)",
  "url(img/006-pizza.png)",
  "url(img/004-beer.png)",
  "url(img/002-food.png)",
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
  putImagesInToSquare();

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

// generate Random IMG
function randomImg() {
  var random = Math.floor(Math.random() * imgs.length)

  return imgs[random]

}
// put images to squares
function putImagesInToSquare() {
  var square = document.querySelectorAll(".box");
  for (var i = 0; i < square.length; i++) {
    square[i].style.background = randomImg();
  }
}


// wining coindtions
function ifIWin() {

  if ((boxy[0].style.background == 'url("img/006-pizza.png")') & (boxy[1].style.background == 'url("img/006-pizza.png")') & (boxy[2].style.background == 'url("img/006-pizza.png")')) {

    var wygrana = pizzaVal.textContent = pizzaVal * multiplier;


    // console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore = document.querySelector(".score--winingScore");
    window.setTimeout(function() {
      audioWin.play();
      coinsValue = coinsValue + wygrana;
      winingScore.textContent = wygrana;

    }, 1200);


  }
  if ((boxy[0].style.background == 'url("img/003-cherries.png")') & (boxy[1].style.background == 'url("img/003-cherries.png")') & (boxy[2].style.background == 'url("img/003-cherries.png")')) {



    var wygrana = cherriesVal.textContent = cherriesVal * multiplier;

    // console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore = document.querySelector(".score--winingScore");
    window.setTimeout(function() {
      audioWin.play();
      coinsValue = coinsValue + wygrana;
      winingScore.textContent = wygrana;

    }, 1200);

  }
  if ((boxy[0].style.background == 'url("img/005-grapes.png")') & (boxy[1].style.background == 'url("img/005-grapes.png")') & (boxy[2].style.background == 'url("img/005-grapes.png")')) {



    var wygrana = grapeVal.textContent = grapeVal * multiplier;


    // console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore = document.querySelector(".score--winingScore");
    window.setTimeout(function() {
      audioWin.play();
      coinsValue = coinsValue + wygrana;
      winingScore.textContent = wygrana;

    }, 1200);
  }
  if ((boxy[0].style.background == 'url("img/002-food.png")') & (boxy[1].style.background == 'url("img/002-food.png")') & (boxy[2].style.background == 'url("img/002-food.png")')) {



    var wygrana = brocoilVal.textContent = brocoilVal * multiplier;


    // console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore = document.querySelector(".score--winingScore");
    window.setTimeout(function() {
      audioWin.play();
      coinsValue = coinsValue + wygrana;
      winingScore.textContent = wygrana;

    }, 1200);
  }
  if ((boxy[0].style.background == 'url("img/004-beer.png")') & (boxy[1].style.background == 'url("img/004-beer.png")') & (boxy[2].style.background == 'url("img/004-beer.png")')) {
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {


    var wygrana = beerVal.textContent = beerVal * multiplier;

    // console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore = document.querySelector(".score--winingScore");
    window.setTimeout(function() {
      audioWin.play();
      coinsValue = coinsValue + wygrana;
      winingScore.textContent = wygrana;

    }, 1200);
  }

  if ((boxy[0].style.background == 'url("img/001-fruit.png")') & (boxy[1].style.background == 'url("img/001-fruit.png")') & (boxy[2].style.background == 'url("img/001-fruit.png")')) {



    var wygrana = lemonVal.textContent = lemonVal * multiplier;

    // console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore = document.querySelector(".score--winingScore");
    window.setTimeout(function() {
      audioWin.play();
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
