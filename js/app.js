$( document ).ready(function() {

    // Mobile Menu

    $('.menu-button').on('click', function(){
        $('body').toggleClass('menu-active');
    });

    // Hero

    $('.down-arrow').on('click', function () {
        $.scrollify.next();
    });

    // Handle scrolling to a specific section
    function scrollTo(section) {
        $('html, body').animate({
                scrollTop: $('section[data-section-name=' + section + ']').offset().top
        }, 750, 'swing');
    }

    // Founders
    $('.founder-card-small.michael-small .arrow-right').on('click', function(){
        $('.founders').addClass('founders-active michael-active');

        // If on mobile, scroll up to top of Founders
        if (window.matchMedia('(max-width: 1100px)').matches) {
            scrollTo('founders');
        }
    });

    $('.founder-card-small.larry-small .arrow-right').on('click', function(){
        $('.founders').addClass('founders-active larry-active');

        // If on mobile, scroll up to top of Founders
        if (window.matchMedia('(max-width: 1100px)').matches) {
            scrollTo('founders');
        }
    });

    $('.founder-card-small.jd-small .arrow-right').on('click', function(){
        $('.founders').addClass('founders-active jd-active');

        // If on mobile, scroll up to top of Founders
        if (window.matchMedia('(max-width: 1100px)').matches) {
            scrollTo('founders');
        }
    });

    $('.michael-large').on('click', function(e){
        $('.founders').addClass('michael-active').removeClass('larry-active jd-active');
    });

    $('.larry-large').on('click', function(e){
        $('.founders').addClass('larry-active').removeClass('michael-active jd-active');
    });

    $('.jd-large').on('click', function(e){
        $('.founders').addClass('jd-active').removeClass('larry-active michael-active');
    });

    $('.close-x').on('click', function(){
        $('.founders').removeClass('founders-active');
        $('.play-active').removeClass('play-active');
        $('.play').removeClass('play');
        setTimeout(function(){
            $('.founders').removeClass('michael-active larry-active jd-active');
        }, 300);
        return false;
    });


    // Work / Play Switch
    $('.switch').on('click', function(){
        $(this).toggleClass('play');
        $(this).closest('.founder-card-large').toggleClass('play-active');
        return false;
    });

    // Transactions
    // Flip transaction card over
    $('.info').on('click', function(){
        $(this).closest('.transaction').addClass('is-flipped');
        return false;
    });

    // Flip transaction card back
    $('.info-close').on('click', function(){
        $(this).closest('.transaction').removeClass('is-flipped').addClass('no-delay');
        return false;
    });

    // Scrollify
    $.scrollify({
        section : ".section",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 2000,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: false,
        overflowScroll: true,
        updateHash: false,
        touchScroll:true,
        before:function(i,panels) {

            // Update active nav items
            var ref = panels[i].attr("data-section-name");
            $("#main-nav .active").removeClass("active");
            $("#main-nav").find("a[href=\"#" + ref + "\"]").addClass("active");

            // Wait a half second and reset Founders
            setTimeout(function(){
                $('.founders').removeClass('founders-active');
                $('.play-active').removeClass('play-active');
                $('.play').removeClass('play');
                $('.founders').removeClass('michael-active larry-active');
            }, 500);

            // Wait a half second and reset Transactions
            setTimeout(function(){
                $('.is-flipped').removeClass('is-flipped');
                $('.transaction').attr('class', 'transaction');
            }, 500);

        },
        after:function() {},
        afterResize:function() {},
        afterRender:function() {}
    });


    // Smooth scroll when clicking nav items / logo
    $("#main-nav a, #logo").on("click",function() {
        $.scrollify.move($(this).attr("href"));
        return false;
    });

    // Scroll to mobile nav items
    $("#mobile-nav a, #logo").on("click",function() {
        // Dismiss mobile nav
        $('body').removeClass('menu-active');
        // Get target & chop off # from anchor
        var nav_target = $(this).attr("href").substring(1);
        // Animate scrolling to the matching section
        scrollTo(nav_target);
        return false;
    });

    if (window.matchMedia('(max-width: 1100px)').matches) {
        // functionality for screens smaller than 1100px
        $.scrollify.disable();

        // Down arrow on mobile
        $(".down-arrow").on("click",function() {
            // Animate scrolling to founders
            scrollTo('founders');
            return false;
        });

    }

});

// Scroll-based effects
$(window).scroll(function() {

    // Spin sunbursts on scroll
    var theta = $(window).scrollTop() / 2250 % Math.PI;
    $('.sunburst-green').css({ transform: 'rotate(-' + theta + 'rad)' });
    $('.sunburst-gold').css({ transform: 'rotate(' + theta + 'rad)' });

    // Collapse nav when not at the top
    if ( $(window).scrollTop() > 150 ) {
        $(".nav-wrapper").addClass('collapsed');
    } else {
        $(".nav-wrapper").removeClass('collapsed');
    }

});


// Window Resize Disables Scrollify
$(window).resize(function() {
    var width = $(window).width();
    if (width > 1100){
        $.scrollify.enable();
    }
    if (width < 1100){
        $.scrollify.disable();
    }
});

// Initialize Slick JS
$('.transactions-slider').slick({
    slidesToShow: 3,
    dots: true,
    responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
          }
        },{
          breakpoint: 480,
          settings: "unslick"
        }
    ]
});
