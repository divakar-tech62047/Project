var crsr = document.querySelector(".cursor")
var blurs = document.querySelector(".cursor-blurs")
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
    blurs.style.left = dets.x - 300 + "px"
    blurs.style.top = dets.y - 300 + "px"
})

var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        crsr.style.scale = 5
        crsr.style.border = "0.1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave", function () {
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95c11e"
        crsr.style.backgroundColor = "#95c11e"
    })
})


gsap.to(".nav", {
    backgroundColor: "#000",
    height: "150px",
    duration: 0.5,
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
    }
})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -70%",
        scrub: 3,
    }
})

gsap.from(".about-us img, .about-us-in", {
    y: 60,
    opacity: 0,
    duration: 1,
    // stagger:0.5,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        // markers:true,
        start: "top 60%",
        end: "top 55%",
        scrub: 1
    }
})
// gsap.from(".card",{
//     scale:0.8,
//     opacity:0,
//     duration:1,
//     // stagger:0.5,
//     scrollTrigger:{
//         trigger:".card",
//         scroller:"body",
//         markers:true,
//         start:"top 90%",
//         end:"top 75%",
//         scrub:1
//     }
// })
gsap.from(".colon1", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: ".colon1",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 47%",
        scrub: 4
    }
})
gsap.from(".colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: ".colon1",
        scroller: "body",
        // markers:true,
        start: "top 50%",
        end: "top 47%",
        scrub: 4
    }
})
gsap.from(".page4 h1",{
    y: 50,
    scrollTrigger: {
        trigger: ".page4 h1",
        scroller: "body",
        // markers:true,
        start: "top 75%",
        end: "top 70%",
        scrub: 3
    }
})