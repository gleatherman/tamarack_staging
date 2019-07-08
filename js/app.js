

$( document ).ready(function() {

    // MenuSpy
    var elm = document.querySelector('#main-nav');
    var ms = new MenuSpy(elm, {
    activeClass: 'active'
    });

    // Smooth Scrolling
    // https://css-tricks.com/snippets/jquery/smooth-scrolling/
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
        }
    });


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
    var theta = $(window).scrollTop() / 2250 % Math.PI;
    $('.sunburst-green').css({ transform: 'rotate(-' + theta + 'rad)' });
    $('.sunburst-gold').css({ transform: 'rotate(' + theta + 'rad)' });
});

