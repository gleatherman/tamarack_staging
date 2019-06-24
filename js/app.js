$( document ).ready(function() {

    // Smart Scroll

     var options = {
        mode: "vp", // "vp", "set"
        autoHash: false,
        sectionScroll: true,
        initialScroll: true,
        keepHistory: false,
        sectionWrapperSelector: ".section-wrapper",
        sectionClass: "section",
        animationSpeed: 300,
        breakpoint: 800,
        headerHash: "top",
        breakpoint: null,
        eventEmitter: null,
        dynamicHeight: false
    };
  $.smartscroll(options);

});
