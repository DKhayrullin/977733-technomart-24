var objMapBut=document.querySelector(".minimap-a"),objMapPop=document.querySelector(".map-popup"),objMapClose=objMapPop.querySelector(".cross-button"),objWriteBut=document.querySelector(".write-us"),objWriteWin=document.querySelector(".write-us-form"),objWriteClose=objWriteWin.querySelector(".cross-button"),objSlidePrev=document.querySelector(".slider-previous"),objSlideNext=document.querySelector(".slider-next"),objSlidePerf=document.querySelector(".perforator-slide"),objSlideDrill=document.querySelector(".drill-slide"),objDeliveryBut=document.querySelector(".delivery-button"),objWarantyBut=document.querySelector(".waranty-button"),objCreditBut=document.querySelector(".credit-button"),objDeliveryWin=document.querySelector(".delivery-slider"),objWarantyWin=document.querySelector(".waranty-slider"),objCreditWin=document.querySelector(".credit-slider"),objWriteContName=objWriteWin.querySelector("[name=author-name]"),objWriteContMail=objWriteWin.querySelector("[name=author-email]"),objWriteContBody=objWriteWin.querySelector("[name=mail-body]"),objWriteContSub=objWriteWin.querySelector(".submit-button");objMapBut.addEventListener("click",function(e){e.preventDefault(),objMapPop.classList.add("animation1"),objMapPop.classList.remove("popup-hidden")}),objMapClose.addEventListener("click",function(e){e.preventDefault(),objMapPop.classList.remove("animation1"),objMapPop.classList.add("popup-hidden")}),objWriteBut.addEventListener("click",function(e){e.preventDefault(),objWriteWin.classList.add("animation1"),objWriteWin.classList.remove("popup-hidden")}),objWriteClose.addEventListener("click",function(e){e.preventDefault(),objWriteWin.classList.remove("animation1"),objWriteWin.classList.remove("animation2"),objWriteWin.classList.add("popup-hidden")}),objSlidePrev.addEventListener("click",function(e){e.preventDefault(),objSlideDrill.classList.toggle("cat-slide-off"),objSlidePerf.classList.toggle("cat-slide-off")}),objSlideNext.addEventListener("click",function(e){e.preventDefault(),objSlideDrill.classList.toggle("cat-slide-off"),objSlidePerf.classList.toggle("cat-slide-off")}),objDeliveryBut.addEventListener("click",function(e){e.preventDefault(),objWarantyBut.classList.remove("slider-active"),objCreditBut.classList.remove("slider-active"),objDeliveryBut.classList.add("slider-active"),objDeliveryWin.classList.remove("slider-active"),objWarantyWin.classList.remove("slider-active"),objCreditWin.classList.remove("slider-active"),objDeliveryWin.classList.add("slider-active")}),objWarantyBut.addEventListener("click",function(e){e.preventDefault(),objDeliveryBut.classList.remove("slider-active"),objWarantyBut.classList.add("slider-active"),objCreditBut.classList.remove("slider-active"),objDeliveryWin.classList.remove("slider-active"),objWarantyWin.classList.remove("slider-active"),objCreditWin.classList.remove("slider-active"),objWarantyWin.classList.add("slider-active")}),objCreditBut.addEventListener("click",function(e){e.preventDefault(),objDeliveryBut.classList.remove("slider-active"),objWarantyBut.classList.remove("slider-active"),objCreditBut.classList.add("slider-active"),objDeliveryWin.classList.remove("slider-active"),objWarantyWin.classList.remove("slider-active"),objCreditWin.classList.remove("slider-active"),objCreditWin.classList.add("slider-active")}),window.addEventListener("keydown",function(e){27===e.keyCode&&(objWriteWin.classList.contains("popup-hidden")?objMapPop.classList.contains("popup-hidden")||(e.preventDefault(),objMapPop.classList.remove("animation1"),objMapPop.classList.add("popup-hidden")):(e.preventDefault(),objWriteWin.classList.remove("animation1"),objWriteWin.classList.remove("animation2"),objWriteWin.classList.add("popup-hidden")))}),objWriteContSub.addEventListener("click",function(e){objWriteContName.value&&objWriteContMail.value&&objWriteContBody.value||(e.preventDefault(),objWriteWin.classList.remove("animation2"),console.log("����� ��������� ��� ����!"),objWriteWin.offsetWidth=objWriteWin.offsetWidth,objWriteWin.classList.add("animation2"))});