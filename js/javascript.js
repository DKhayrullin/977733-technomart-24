//Map popup
var objMapBut = document.querySelector(".minimap");
var objMapPop = document.querySelector(".map-popup");
var objMapClose = objMapPop.querySelector(".cross-button");
//Write-us
var objWriteBut = document.querySelector(".write-us");
var objWriteWin = document.querySelector(".write-us-form");
var objWriteClose = objWriteWin.querySelector(".cross-button");
//Slider perf/drill
var objSlidePrev = document.querySelector(".slider-previous");
var objSlideNext = document.querySelector(".slider-next");
var objSlidePerf = document.querySelector(".perforator-slide");
var objSlideDrill = document.querySelector(".drill-slide");
//Slider services
var objDeliveryBut = document.querySelector(".delivery-button");
var objWarantyBut = document.querySelector(".waranty-button");
var objCreditBut = document.querySelector(".credit-button");
var objDeliveryWin = document.querySelector(".delivery-slider");
var objWarantyWin = document.querySelector(".waranty-slider");
var objCreditWin = document.querySelector(".credit-slider");

//Map popup
objMapBut.addEventListener("click", function (evt) {
  evt.preventDefault();
  objMapPop.classList.remove("popup-hidden");
});
objMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  objMapPop.classList.add("popup-hidden");
});
//Write-us
objWriteBut.addEventListener("click", function (evt) {
  evt.preventDefault();
  objWriteWin.classList.remove("popup-hidden");
});
objWriteClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  objWriteWin.classList.add("popup-hidden");
});
//Slider perf/drill
objSlidePrev.addEventListener("click", function (evt) {
  evt.preventDefault();
  objSlideDrill.classList.toggle("cat-slide-off");
  objSlidePerf.classList.toggle("cat-slide-off");
});
objSlideNext.addEventListener("click", function (evt) {
  evt.preventDefault();
  objSlideDrill.classList.toggle("cat-slide-off");
  objSlidePerf.classList.toggle("cat-slide-off");
});
//Slider services
objDeliveryBut.addEventListener("click", function (evt) {
  evt.preventDefault();
  objWarantyBut.classList.remove("slider-active");
  objCreditBut.classList.remove("slider-active");
  objDeliveryBut.classList.add("slider-active");
  objDeliveryWin.classList.remove("slider-active");
  objWarantyWin.classList.remove("slider-active");
  objCreditWin.classList.remove("slider-active");
  objDeliveryWin.classList.add("slider-active");
});
objWarantyBut.addEventListener("click", function (evt) {
  evt.preventDefault();
  objDeliveryBut.classList.remove("slider-active");
  objWarantyBut.classList.add("slider-active");
  objCreditBut.classList.remove("slider-active");
  objDeliveryWin.classList.remove("slider-active");
  objWarantyWin.classList.remove("slider-active");
  objCreditWin.classList.remove("slider-active");
  objWarantyWin.classList.add("slider-active");
});
objCreditBut.addEventListener("click", function (evt) {
  evt.preventDefault();
  objDeliveryBut.classList.remove("slider-active");
  objWarantyBut.classList.remove("slider-active");
  objCreditBut.classList.add("slider-active");
  objDeliveryWin.classList.remove("slider-active");
  objWarantyWin.classList.remove("slider-active");
  objCreditWin.classList.remove("slider-active");
  objCreditWin.classList.add("slider-active");
});

