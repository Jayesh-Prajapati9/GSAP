gsap.from(".page3 h1", {
    x: 500,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".page3 h1",
        markers: true,
        scroller: "body",
        start:"top 50%",
    }

})
gsap.from(".page3 h2", {
    x: -500,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".page3 h1",
        markers: true,
        scroller: "body",
        start:"top 50%",
    }

})
gsap.from(".page2 .box", {
    scale: 0,
    duration: 5,
    rotate: 360,
    // scrollTrigger: ".page2 .box" // THIS IS THE TRIGGER THAT WILL START THE ANIMATION WHEN THE ELEMENT IS IN THE VIEWPORT WHICH MEANS WHEN THE PAGE2 IS SCROLLED BOX WILL START ANIMATING

    scrollTrigger: {
        trigger: ".page2 .box", // THIS INDICATES THAT WHICH ELEMENT WILL BE THE TRIGGER
        scroller: "body",
        markers: true, // THIS WILL SHOW THE MARKERS ON THE SCREEN

        start: "top 50%", // THIS WILL START THE ANIMATION WHEN THE TOP OF THE ELEMENT REACHES THE 50% OF THE VIEWPORT THIS IS LIKE THE TRIGGER POINT OF THE ANIMATION

        // end: "bottom 50%", // THIS WILL END THE ANIMATION WHEN THE BOTTOM OF THE ELEMENT REACHES THE 50% OF THE VIEWPORT
        scrub: 1, // THIS WILL MAKE THE ANIMATION SMOOTH
        pin: true // pin the trigger element while active
    }

})
gsap.from(".page3 .box", {
    scale: 0,
    duration: 5,
    rotate: 360,
})
