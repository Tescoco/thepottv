                 /*************************/
                 /*   All rights Reserved */
                 /*    OlaDev Tech 2020   */
                 /*************************/

                 var i = 0
                 function openNav() {
                    
                     i++
                     if (i%2 != 0 ){
                 
                    
                     document.getElementById("myNav")
                     .style.width="100%";
                    } 
                 
                 else if (i%2 == 0 ) {
                     document.getElementById("myNav")
                     .style.width = "0%";
                 
                 }}
                    
                    function closeNav() {
                     document.getElementById("myNav")
                     .style.width = "0%";
                    }
                    function myFunction(x) {
                        x.classList.toggle("change");
                        rankbtn.style.fill = "white"
                     homebtn.style.fill = "white"
                     navbtn.style.background = "#ffcc00"
                     navbtn2.style.background = "#ffcc00"
                    }
                    //on and off
                    const switchContainer = document.querySelector('.switch');
                 const airplanes = switchContainer.querySelectorAll('.airplane');
                 const switchButton = switchContainer.querySelector('.switch__button');
                 const cloudLine = document.querySelector('.cloud-line');
                 const sky = document.querySelector('.sky');
                 const airport = document.querySelector('.airport');
                 
                 const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
                 
                 const getStyleVariable = (property, element = document.documentElement) => {
                   return getComputedStyle(element).getPropertyValue(`--${property}`);
                 };
                 
                 const animateClouds = (() => {
                   const cloudFinalX = -cloudLine.children[0].clientWidth;
                   const cloudTimeline = gsap.timeline({ repeat: -1 });
                   cloudTimeline.to(cloudLine, 4, { x: cloudFinalX, duration: 2, ease: 'none' });
                 })();
                 
                 let isAnimating = false;
                 const switchButtonFinalX =
                   switchContainer.clientWidth - switchButton.clientWidth;
                 const airplanesFinalX =
                   airplanes[0].clientWidth +
                   switchButton.clientWidth / 2 -
                   airplanes[0].clientWidth / 2;
                 const airplanesInitialX =
                   -1 * (switchButton.clientWidth / 2 - airplanes[0].clientWidth / 2);
                 
                 const toggleAnimation = isOn => {
                   const ease = 'power2.inOut';
                   const duration = 0.5;
                   const nextState = isOn ? 'off' : 'on';
                   const background = getStyleVariable(`color-background-${nextState}`);
                   const boxShadow = getStyleVariable(`shadow-${nextState}`);
                   const switchButtonX = isOn ? 0 : switchButtonFinalX;
                   const airplanesX = isOn ? airplanesInitialX : airplanesFinalX;
                   const airportX = isOn ? -110 : -20;
                   const opacity = isOn ? 0 : 1;
                 
                    gsap.to(document.body, duration, { background, ease });
                 
                   gsap.to(switchContainer, duration, { boxShadow, ease });
                 
                   gsap.to(switchButton, duration, {
                     x: switchButtonX,
                     ease
                   });
                 
                   gsap.to(airplanes, duration, {
                     x: airplanesX,
                     ease
                   });
                 
                   gsap.to(airport, duration, {
                     x: airportX,
                     ease
                   });
                 
                   gsap.to(sky, duration, {
                     opacity,
                     ease,
                     onComplete() {
                       isAnimating = false;
                     }
                   });
                 };
                 
                 const configOn = {
                   background: getStyleVariable('color-background-on'),
                   shadow: getStyleVariable('shadow-on'),
                   opacity: 1,
                   switchButtonX: switchButtonFinalX,
                   airplanesX: airplanesFinalX
                 };
                 
                 const toggleSwitch = ({ currentTarget }) => {
                   if (isAnimating) return;
                   isAnimating = true;
                   const isCurrentlyOn = currentTarget.classList.contains('-on');
                   currentTarget.classList.toggle('-on');
                 
                   toggleAnimation(isCurrentlyOn);
                 };
                 
                 switchContainer.addEventListener('click', toggleSwitch);
                   
                 
                 //dark mode
                 var darkclick = 1
                 var curtain = document.querySelector("#curtain")
                 var section = document.querySelectorAll("section")
                 var empty = document.querySelector(".empty")
                 var hr = document.querySelector(".hrline")
                 var hrdown = document.querySelector(".hrlinedown")
                 var cardbody = document.querySelectorAll(".card-body") 
                 var descheader = document.getElementById("descheader")
                 var header = document.querySelector("header")
                 var footer = document.querySelector("footer")
                 var first = document.getElementById("first") 
                 var potlogo = document.querySelector("img.potlogo")
                 var second = document.querySelector(".second") 
                 var mask1 = document.querySelector(".mask1")
                 var mask2 = document.querySelector(".mask2")
                  second.style.display ="none"
                  first.style.display ="none"
                  //btn clicks
                  var homebtn = document.querySelector(".homebtncolor")
                  var rankbtn = document.querySelector(".rankpagecolor")
                  var navbtn = document.getElementById("navbarcolor")
                  var navbtn2 = document.getElementById("navbarcolor2")
                 
                 
                 function darkmode(){
                   darkclick++
                   if(darkclick % 2 == 0){
                     curtain.style.background = "#505052"
                     empty.classList.add("darkmodebody")
                     hr.classList.add("lineafter")
                     hrdown.classList.add("lineafter")
                     for (let j = 0; j < section.length;j++){
                    
                       section[j].classList.add("darkmodebody")
                        }
                 for (let j = 0; j < cardbody.length;j++){
                    
                    cardbody[j].classList.add("allcards")
                     }
                   
                 
                   }
                   if(darkclick % 2 == 1){
                     
                     curtain.style.background = "#ffcc00"
                     empty.classList.remove("darkmodebody")
                     hr.classList.remove("lineafter")
                     hrdown.classList.remove("lineafter")
                     for (let k = 0; k < section.length;k++){
                         section[k].classList.remove("darkmodebody")
                        }
                     for (let j = 0; j < cardbody.length;j++){
                    cardbody[j].classList.remove("allcards")
                        }
                 
                   }
                 
                 }
                 function rank () {
                   second.style.display ="block"
                   first.style.display ="none"
                   rankbtn.style.fill = " #ffcc00"
                   homebtn.style.fill = "white"
                   navbtn.style.background = "white"
                   navbtn2.style.background = "white"
                   
                   }
                    function home() {
                     second.style.display ="none"
                     first.style.display ="block"
                     rankbtn.style.fill = "white"
                     homebtn.style.fill = "#ffcc00"
                     navbtn.style.background = "white"
                     navbtn2.style.background = "white"
                     
                   }
                 
                 setTimeout(() => {
                   first.style.display ="block"
                   potlogo.style.display ="none"
                   mask1.style.display ="none"
                   mask2.style.display ="none"
                 }, 1500);
                 
                 if (darkclick == 1){
                   curtain.style.background = "#ffcc00"
                 }
                 