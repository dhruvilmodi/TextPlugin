let body = document.querySelector("body");
let header = document.querySelector("header");
let section1 = document.querySelector("#section1");
let section2 = document.querySelector("#section2");
let section3 = document.querySelector("#section3");

let section1Btn = document.querySelector("#section1Btn");
let section2Btn = document.querySelector("#section2Btn");
let section3Btn = document.querySelector("#section3Btn");


let section1H1 = document.querySelector("#section1H1");
let section1H4 = document.querySelector("#section1H4");

let section2H1 = document.querySelector("#section2H1");
let section3H1 = document.querySelector("#section3H1");

let timeline1 = gsap.timeline({defaults: {duration: 0.5, ease: "none"}});
let timeline2 = gsap.timeline({defaults: {duration: 0.5, ease: "none"}});
let timeline3 = gsap.timeline({defaults: {duration: 0.5, ease: "none"}});
let timeline4 = gsap.timeline({defaults: {duration: 0.5, ease: "none"}});

window.onload = function(){
        timeline1.from(header, {duration: 1, opacity:0})
        timeline1.to(section1H1, {duration: 1, text:"Hello World!", ease:"power1"}, "+=1")
        timeline1.to(section1H4, {duration: 1, text:"My name is Dhruvil Modi.", ease:"power1"}, "+=1")
        timeline1.from(section1Btn, {duration: 2, opacity:0}, "+=1")
}

section1Btn.addEventListener("click", function () {
        timeline2.to(window, {duration:1, scrollTo:{y:section2, ease: "power4", autoKill: true}});
        timeline2.to(section2H1, {duration: 1, text:"This is section 2 and it does nothing ;)", ease:"power1"}, "+=1")
        timeline2.from(section2Btn, {duration: 2, opacity:0}, "+=1")
})

section2Btn.addEventListener("click", function () {
        timeline3.to(window, {duration:1, scrollTo:{y:section3, ease: "power4", autoKill: true}});
        timeline3.to(section3H1, {duration: 1, text:"This is section 3. You have come this far for nothing. GO HOME NOW.", ease:"power1"}, "+=1")
        timeline3.from(section3Btn, {duration: 2, opacity:0}, "+=1")
})

section3Btn.addEventListener("click", function () {
        timeline4.to(window, {duration:0.5, scrollTo:{y:body, ease: "power4", autoKill: true}});
})