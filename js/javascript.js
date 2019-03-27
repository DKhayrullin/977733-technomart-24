//Map popup
var objMapBut = document.querySelector(".minimap-a");
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
////Write us form check
var objWriteContName = objWriteWin.querySelector("[name=author-name]"); //Write popup Content
var objWriteContMail = objWriteWin.querySelector("[name=author-email]");
var objWriteContBody = objWriteWin.querySelector("[name=mail-body]");
var objWriteContSub = objWriteWin.querySelector(".submit-button");
//Map popup
objMapBut.addEventListener("click", function (evt) {
  evt.preventDefault();
  objMapPop.classList.add("animation1");
  objMapPop.classList.remove("popup-hidden");
});
objMapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  objMapPop.classList.remove("animation1");
  objMapPop.classList.add("popup-hidden");
});
//Write-us
objWriteBut.addEventListener("click", function (evt) {
  evt.preventDefault();
  objWriteWin.classList.remove("popup-hidden");
});
objWriteClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  objWriteWin.classList.remove("animation1");
  objWriteWin.classList.remove("animation2");
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
//WHY U DO'T WORK?
//window.addEventListener("keydown", function (evt1) {
//  if (evt1.keyCode === 27) {
//    if (objMapPop.classList.contains("cross-button")) { //objMapPop.classList.contains("cross-button")) = false
//      objMapPop.classList.add("popup-hidden");
//    }
    //else if (objWriteWin.classList.contains("cross-button")) {
    //  objWriteWin.classList.add("popup-hidden");
    //}
//  }
//});
window.addEventListener("keydown", function (evt2) {
  if (evt2.keyCode === 27) {
    if (!objWriteWin.classList.contains("popup-hidden")) {
      evt2.preventDefault();
      objWriteWin.classList.remove("animation1");
      objWriteWin.classList.remove("animation2");
      objWriteWin.classList.add("popup-hidden");
    }
    else if (!objMapPop.classList.contains("popup-hidden")) {
      evt2.preventDefault();
      objMapPop.classList.remove("animation1");
      objMapPop.classList.add("popup-hidden");
    }
  }
});
objWriteContSub.addEventListener("click", function (evt) {
  if (!objWriteContName.value || !objWriteContMail.value || !objWriteContBody.value) {
    evt.preventDefault();
    console.log("Нужно заполнить все поля!");
    objWriteWin.classList.add("animation2");
  }   
});
