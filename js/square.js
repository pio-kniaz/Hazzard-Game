var allSquares= document.querySelectorAll('.box');



function ifIWin1(){

  if ((boxy[0].style.background=='url("img/node.png")')& (boxy[1].style.background=='url("img/node.png")')&(boxy[2].style.background=='url("img/node.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[0].val);

    var wygrana=nodeVal.textContent=all[0].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;


  }
    if ((boxy[0].style.background=='url("img/html5.png")')& (boxy[1].style.background=='url("img/html5.png")')&(boxy[2].style.background=='url("img/html5.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[1].val);

    var wygrana=html5Val.textContent=all[1].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;

  }
    if ((boxy[0].style.background=='url("img/css.png")')& (boxy[1].style.background=='url("img/css.png")')&(boxy[2].style.background=='url("img/css.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[2].val);

    var wygrana=cssVal.textContent=all[2].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;
  }
   if ((boxy[0].style.background=='url("img/angular.png")')& (boxy[1].style.background=='url("img/angular.png")')&(boxy[2].style.background=='url("img/angular.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[3].val);

    var wygrana=angularVal.textContent=all[3].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;
  }
  if ((boxy[0].style.background=='url("img/js.png")')& (boxy[1].style.background=='url("img/js.png")')&(boxy[2].style.background=='url("img/js.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[4].val);

    var wygrana=jsVal.textContent=all[4].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;
  }

    if ((boxy[0].style.background=='url("img/bootstrap.png")')& (boxy[1].style.background=='url("img/bootstrap.png")')&(boxy[2].style.background=='url("img/bootstrap.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[5].val);

    var wygrana=bootstrapVal.textContent=all[5].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;

  }

}

// bottom squares
function ifIWin2(){

  if ((boxy[6].style.background=='url("img/node.png")')& (boxy[7].style.background=='url("img/node.png")')&(boxy[8].style.background=='url("img/node.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[0].val);

    var wygrana=nodeVal.textContent=all[0].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;


  }
    if ((boxy[6].style.background=='url("img/html5.png")')& (boxy[7].style.background=='url("img/html5.png")')&(boxy[8].style.background=='url("img/html5.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[1].val);

    var wygrana=html5Val.textContent=all[1].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;
 }
    if ((boxy[6].style.background=='url("img/css.png")')& (boxy[7].style.background=='url("img/css.png")')&(boxy[8].style.background=='url("img/css.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[2].val);

    var wygrana=cssVal.textContent=all[2].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;
  }
   if ((boxy[6].style.background=='url("img/angular.png")')& (boxy[7].style.background=='url("img/angular.png")')&(boxy[8].style.background=='url("img/angular.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[3].val);

    var wygrana=angularVal.textContent=all[3].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;
  }
    if ((boxy[6].style.background=='url("img/js.png")')& (boxy[7].style.background=='url("img/js.png")')&(boxy[8].style.background=='url("img/js.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[4].val);

    var wygrana=jsVal.textContent=all[4].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;
  }

    if ((boxy[6].style.background=='url("img/bootstrap.png")')& (boxy[7].style.background=='url("img/bootstrap.png")')&(boxy[8].style.background=='url("img/bootstrap.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[5].val);

    var wygrana=bootstrapVal.textContent=all[5].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;

  }

}


function ifIWin4(){

  if ((boxy[0].style.background=='url("img/node.png")')& (boxy[4].style.background=='url("img/node.png")')&(boxy[8].style.background=='url("img/node.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[0].val);

    var wygrana=nodeVal.textContent=all[0].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;


  }
    if ((boxy[0].style.background=='url("img/html5.png")')& (boxy[4].style.background=='url("img/html5.png")')&(boxy[8].style.background=='url("img/html5.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[1].val);

    var wygrana=html5Val.textContent=all[1].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;



  }
    if ((boxy[0].style.background=='url("img/css.png")')& (boxy[4].style.background=='url("img/css.png")')&(boxy[8].style.background=='url("img/css.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[2].val);

    var wygrana=cssVal.textContent=all[2].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;

  }
   if ((boxy[0].style.background=='url("img/angular.png")')& (boxy[4].style.background=='url("img/angular.png")')&(boxy[8].style.background=='url("img/angular.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[3].val);

    var wygrana=angularVal.textContent=all[3].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;

  }
    if ((boxy[0].style.background=='url("img/js.png")')& (boxy[4].style.background=='url("img/js.png")')&(boxy[8].style.background=='url("img/js.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[4].val);

    var wygrana=jsVal.textContent=all[4].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;

  }

   if ((boxy[0].style.background=='url("img/bootstrap.png")')& (boxy[4].style.background=='url("img/bootstrap.png")')&(boxy[8].style.background=='url("img/bootstrap.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[5].val);

    var wygrana=bootstrapVal.textContent=all[5].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;


  }

}
function ifIWin3(){

  if ((boxy[2].style.background=='url("img/node.png")')& (boxy[4].style.background=='url("img/node.png")')&(boxy[6].style.background=='url("img/node.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[0].val);

    var wygrana=nodeVal.textContent=all[0].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;



  }
    if ((boxy[2].style.background=='url("img/html5.png")')& (boxy[4].style.background=='url("img/html5.png")')&(boxy[6].style.background=='url("img/html5.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[1].val);

    var wygrana=html5Val.textContent=all[1].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;


  }
   if ((boxy[2].style.background=='url("img/css.png")')& (boxy[4].style.background=='url("img/css.png")')&(boxy[6].style.background=='url("img/css.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[2].val);

    var wygrana=cssVal.textContent=all[2].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;

  }
    if ((boxy[2].style.background=='url("img/angular.png")')& (boxy[4].style.background=='url("img/angular.png")')&(boxy[6].style.background=='url("img/angular.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[3].val);

    var wygrana=angularVal.textContent=all[3].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;

  }
    if ((boxy[2].style.background=='url("img/js.png")')& (boxy[4].style.background=='url("img/js.png")')&(boxy[6].style.background=='url("img/js.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[4].val);

    var wygrana=jsVal.textContent=all[4].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;
  }

    if ((boxy[2].style.background=='url("img/bootstrap.png")')& (boxy[4].style.background=='url("img/bootstrap.png")')&(boxy[6].style.background=='url("img/bootstrap.png")')){
    // boxy[4].style.background)&&boxy[5].style.background==boxy[3].style.background) {
    // console.log(boxy[3].style.background);
    console.log(all[5].val);

    var wygrana=bootstrapVal.textContent=all[5].val*mnoznik;
    coinsValue=coinsValue+wygrana;
    console.log(wygrana);
    console.log(`stank konta po wygranej ${coinsValue}`);
    var winingScore=document.querySelector(".winingScore");
    winingScore.textContent=wygrana;

  }

}
