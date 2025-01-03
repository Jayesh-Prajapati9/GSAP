gsap.to('#box',{ // TO IS USED TO MOVE ELEMENT FROM INTIAL POSITION TO THE DESIRED POSITION
    x: 1000, // THE BOX WILL MOVE FROM LEFT TO RIGHT ON X AXIS
    duration: 2, // THE DURATION OF THE ANIMATION IS 2 SECONDS
    delay: 1, // THE DELAY OF THE ANIMATION IS 1 SECOND
    backgroundColor: 'blue', // THE BACKGROUND COLOR OF THE BOX WILL CHANGE TO BLUE  -> HERE WE ARE USING CSS PROPERTY IN CAMEL CASE
    repeat: -1, // THIS IS USED TO MAKE THE ANIMATION TO BECOME RUN IN LOOP FOR INFINITE TIMES
    yoyo: true, // THIS IS USED TO MAKE THE ANIMATION RUN BACK AND FORTH
});
// gsap.from('#box', { // FROM IS USED TO MOVE ELEMENT FROM THE DESIRED POSITION TO THE INTIAL POSITION
//     x: -1000, // THE BOX WILL MOVE FROM RIGHT TO LEFT ON X AXIS
//     duration: 2, // THE DURATION OF THE ANIMATION IS 2 SECONDS
//     delay: 1, // THE DELAY OF THE ANIMATION IS 1 SECOND
// });
gsap.from('h1',{
    y: -1000,
    duration: 1,
    delay: 1,
    stagger: 1, // THIS IS USED TO MAKE THE ANIMATION OF THE ELEMENTS TO BECOME ONE AFTER ANOTHER
    
});

// var tl = gsap.timeline();

// tl.from('.h1',{ // THIS IS USED TO MAKE THE ANIMATION OF THE ELEMENTS TO BECOME ONE AFTER ANOTHER 
//     y: -1000,
//     duration: 1,
//     delay: 1,
    
// });
// tl.from('.h2',{
//     y: -1000,
//     duration: 1,
//     delay: 1,
// });
// tl.from('.h3',{
//     y: -1000,
//     duration: 1,
//     delay: 1,
// });
// tl.from('.h4',{
//     y: -1000,
//     duration: 1,
//     delay: 1,
// }); 
