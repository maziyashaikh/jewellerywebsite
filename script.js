gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
    }
});
// Existing animations for moving elements
tl.to("#necklace", {
    top: "105%",
    left: "17%"
}, 'orange');

tl.to("#ear-left", {
    top: "119%",
    left: "12.2%" // Adjust the final left position as needed
}, 'orange');

tl.to("#ear-right", {
    top: "120%",
    right: "78.2%" // Adjust the final right position as needed
}, 'orange');



tl.to("#leaf", {
    top: "160%",
    rotate: "130deg",
    left: "80%"
}, 'orange');

tl.to("#leaf2", {
    top: "110%",
    rotate: "130deg",
    left: "0%"
}, 'orange');

var tlScale = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "70% 50%",
        scrub: true,
    }
});

tlScale.to("#necklace", {
    scale: 0.3, // Starting scale (original size)
    ease: "power1.inOut"
});

tlScale.to("#necklace", {
    scale: 0.2, // Final scale size
    ease: "power1.inOut"
}, 'scale'); // Add a label

tlScale.to("#leaf", {
    scale: 0.6,
    zIndex: 0,
    ease: "power1.inOut"
}, 'scale');

tlScale.to("#leaf2", {
    scale: 0.4,
    ease: "power1.inOut"
}, 'scale');

tlScale.to("#ear-left", {
    scale: 0.1,
    ease: "power1.inOut"
}, 'scale+=0.1'); 

tlScale.to("#ear-right", {
    scale: 0.1,
    ease: "power1.inOut"
}, 'scale+=0.1'); 

// let scroll_tl = gsap.timeline({
//         scrollTrigger: {
//             trigger: '.factsContainer',
//             start: "top center",
//             pin: true,
//             scrub: true,
//             end: "+=300",
//             markers: true,
//         }
//     }),
//         facts = [...document.querySelectorAll('.fact')]
//     scroll_tl.to('.factsContainer h2', {
//         scale: 1.5,
//         duration: 1,
//         ease: "slow"
//     })
//     scroll_tl.to(facts, {
//         xPercent: -85 * (facts.length - 1),
//         scrollTrigger: {
//             trigger: ".factsContainer_sm",
//             start: "center center",
//             pin: true,
//             horizontal: true,
//             pinSpacing:false,
//             markers: true,
//             scrub: 1,
//             snap: 1 / (facts.length - 1),
//             base vertical scrolling on how wide the container is so it feels more natural.
//             end: () => `+=${smallFactsContainer.offsetWidth}`
//             end: () => `+=4320`
//         }
//     });