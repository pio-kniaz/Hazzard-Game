// hamburger icon
var hamburger = document.querySelector(".button__hamburger");
var navigation=document.querySelector(".nav__list");
hamburger.addEventListener("click",function() {
  navigation.classList.toggle("visible");
})
