let body = document.querySelector("body");
let section1 = document.querySelector("#section1");
let section2 = document.querySelector("#section2");
let section3 = document.querySelector("#section3");

let section1Btn = document.querySelector("#section1Btn");
let section2Btn = document.querySelector("#section2Btn");
let section3Btn = document.querySelector("#section3Btn");

section1Btn.addEventListener("click", function () {
    gsap.to(window, {duration:1.5, scrollTo:{y:section2, ease: "power4", autoKill: true, onAutoKill: myAutoKillFunction}});
})

section2Btn.addEventListener("click", function () {
    gsap.to(window, {duration:1.5, scrollTo:{y:section3, ease: "power4", autoKill: true, onAutoKill: myAutoKillFunction}});
})

section3Btn.addEventListener("click", function () {
    gsap.to(window, {duration:1, scrollTo:{y:body, ease: "power4", autoKill: true, onAutoKill: myAutoKillFunction}});
})

function myAutoKillFunction() {
    alert("autoKill");
};

/* document.querySelectorAll("button").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        gsap.to(window, {duration: 1, scrollTo:{y:"#section" + (index + 1), offsetY:0}});
    });
}); */