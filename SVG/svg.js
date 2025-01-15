var path = "M 10 250 Q 250 250 1510 250";
var finalPath = "M 10 250 Q 250 250 1510 250";


var container = document.querySelector('#container');



container.addEventListener("mousemove", function (dets) {
    path = `M 10 250 Q ${dets.x} ${dets.y} 1510 250`;
    gsap.to("svg path", {
        duration: 0.1,
        attr: {
            d: path
        },
        ease: "power1elastic.out(2,0.2)",
    })
})

container.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: {
            d: finalPath
        },
        ease: "power1.out",
    })
})