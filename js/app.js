$( document ).ready(function() {

    // Founders
    $('.founder-card-small.michael-small').on('click', function(){
        $('.founders').addClass('founders-active michael-active');
    });

    $('.founder-card-small.larry-small').on('click', function(){
        $('.founders').addClass('founders-active larry-active');
    });

    $('.michael-large').on('click', function(){
        $('.founders').addClass('michael-active').removeClass('larry-active');
    });
    $('.larry-large').on('click', function(){
        $('.founders').addClass('larry-active').removeClass('michael-active');
    });

    $('.close-x').on('click', function(){
        $('.founders').removeClass('founders-active');
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


    // Scrollify
    $.scrollify({
        section : ".section",
        sectionName : "section-name",
        interstitialSection : "",
        easing: "easeOutExpo",
        scrollSpeed: 1200,
        offset : 0,
        scrollbars: true,
        standardScrollElements: "",
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll:true,
        before:function(i,panels) {

            // Update active nav items
            var ref = panels[i].attr("data-section-name");
            $("#main-nav .active").removeClass("active");
            $("#main-nav").find("a[href=\"#" + ref + "\"]").addClass("active");

        },
        after:function() {
        },
        afterResize:function() {},
        afterRender:function() {}
    });


    // Smooth scroll when clicking nav items / logo
    $("#main-nav a, #logo").on("click",function() {
        $.scrollify.move($(this).attr("href"));
        return false;
    });

});

// Scroll-based effects
$(window).scroll(function() {

    // Spin sunbursts on scroll
    var theta = $(window).scrollTop() / 2250 % Math.PI;
    $('.sunburst-green').css({ transform: 'rotate(-' + theta + 'rad)' });
    $('.sunburst-gold').css({ transform: 'rotate(' + theta + 'rad)' });

    // Collapse nav when not at the top
    if ( $(window).scrollTop() > 150 ) {
        $("nav").addClass('collapsed');
    } else {
        $("nav").removeClass('collapsed');
    }

});

