$( document ).ready(function() {

    // Mobile Menu

    $('.menu-button').on('click', function(){
        $('body').toggleClass('menu-active');
    });

    // Hero

    $('.down-arrow').on('click', function () {
        $.scrollify.next();
    });

    // Founders
    $('.founder-card-small.michael-small .arrow-right').on('click', function(){
        $('.founders').addClass('founders-active michael-active');

        // If on mobile, scroll up to top of Founders
        if (window.matchMedia('(max-width: 1024px)').matches) {
            $('html, body').animate({
                scrollTop: $('section[data-section-name="founders"]').offset().top
            }, 750, 'swing');
        }
    });

    $('.founder-card-small.larry-small .arrow-right').on('click', function(){
        $('.founders').addClass('founders-active larry-active');

        // If on mobile, scroll up to top of Founders
        if (window.matchMedia('(max-width: 1024px)').matches) {
            $('html, body').animate({
                scrollTop: $('section[data-section-name="founders"]').offset().top
            }, 750, 'swing');
        }
    });

    $('.michael-large').on('click', function(e){
        $('.founders').addClass('michael-active').removeClass('larry-active');
    });

    $('.larry-large').on('click', function(e){
        $('.founders').addClass('larry-active').removeClass('michael-active');
    });

    $('.close-x').on('click', function(){
        $('.founders').removeClass('founders-active');
        $('.play-active').removeClass('play-active');
        $('.play').removeClass('play');
        setTimeout(function(){
            $('.founders').removeClass('michael-active larry-active');
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

    // Clicking category cards hides cards & shows matching set of transactions
    $('.card').on('click', function(){
        $('.transactions').addClass('transactions-active');
        $('.transactions-display').addClass($(this).attr('data-category') + '-active');
        return false;
    });

    // Hide transactions grid & show category cards. Also, reset classes
    $('.close').on('click', function(){
        // Hide transactions
        $('.transactions').removeClass('transactions-active');

        // Strip is-flipped from all transactions
        $('.is-flipped').removeClass('is-flipped');

        // Reset classes
        $('.transactions-display').attr('class', 'transactions-display');
        $('.transaction').attr('class', 'transaction');
        return false;
    });

    // Transactions nav strips classes & switches to new category
    $('.transactions-nav a').not('.close').on('click', function(){
        // Reset classes
        $('.transactions-display').attr('class', 'transactions-display');
        $('.transaction').attr('class', 'transaction');

        // Set active class on nav
        $('.transactions-display').addClass($(this).attr('data-category') + '-active');
        return false;
    });

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
                $('.transactions').removeClass('transactions-active');
                $('.is-flipped').removeClass('is-flipped');
                $('.transactions-display').attr('class', 'transactions-display');
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
        $('html, body').animate({
            scrollTop: $('section[data-section-name=' + nav_target + ']').offset().top
        }, 750, 'swing');
        return false;
    });

    if (window.matchMedia('(max-width: 1024px)').matches) {
        // functionality for screens smaller than 1024px
        $.scrollify.disable();

        // Down arrow on mobile
        $(".down-arrow").on("click",function() {
            // Animate scrolling to founders
            $('html, body').animate({
                scrollTop: $('section[data-section-name="founders"]').offset().top
            }, 750, 'swing');
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


$(window).resize(function() {
    var width = $(window).width();
    if (width > 1024){
        $.scrollify.enable();
    }
    if (width < 1024){
        $.scrollify.disable();
    }
});
