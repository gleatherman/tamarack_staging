$( document ).ready(function() {

//     // Smart Scroll

//      var options = {
//         mode: "vp", // "vp", "set"
//         autoHash: false,
//         sectionScroll: true,
//         initialScroll: true,
//         keepHistory: false,
//         sectionWrapperSelector: ".section-wrapper",
//         sectionClass: "section",
//         animationSpeed: 1000,
//         breakpoint: 800,
//         headerHash: "top",
//         breakpoint: null,
//         eventEmitter: null,
//         dynamicHeight: false
//     };
//   $.smartscroll(options);


});

$(window).scroll(function() {
    var theta = $(window).scrollTop() / 2500 % Math.PI;
    $('.sunburst-green').css({ transform: 'rotate(-' + theta + 'rad)' });
    $('.sunburst-gold').css({ transform: 'rotate(' + theta + 'rad)' });
});
