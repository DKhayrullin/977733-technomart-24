//Catalog js
var objBuyBut = document.querySelector(".buy-button");
var objBuyWin = document.querySelector(".buy-dialog");
var objBuyClose = objBuyWin.querySelector(".cross-button");
var objBuyContinue = objBuyWin.querySelector(".buy-continue");
//Catalog js
objBuyBut.addEventListener("click", function (evt) {
  evt.preventDefault();
  objBuyWin.classList.add("animation1");
  objBuyWin.classList.remove("popup-hidden");
});
objBuyClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  objBuyWin.classList.remove("animation1");
  objBuyWin.classList.add("popup-hidden");
});
objBuyContinue.addEventListener("click", function (evt) {
  evt.preventDefault();
  objBuyWin.classList.remove("animation1");
  objBuyWin.classList.add("popup-hidden");
});
window.addEventListener("keydown", function (evt) {  
  if (evt.keyCode === 27) {    
    if (!objBuyWin.classList.contains("popup-hidden")) {
      evt.preventDefault();
      objBuyWin.classList.remove("animation1");
      objBuyWin.classList.add("popup-hidden");
    }
  }
});
