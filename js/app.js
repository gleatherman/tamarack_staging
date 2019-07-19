$( document ).ready(function() {

    // Hero

    $('.down-arrow').on('click', function () {
        $.scrollify.next();
    });

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

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 16,

        draggable: false,

        zoomControl: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(44.9779031, -93.2728441),

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(44.9779031, -93.2728441),
        map: map,
        icon: '../img/icon-map-pin.svg',
        url: 'https://www.google.com/maps/place/60+South+6th+St+%232625,+Minneapolis,+MN+55402/@44.9779031,-93.2728494,17z/data=!3m1!4b1!4m5!3m4!1s0x52b3329a75fc44b3:0xaf78993ea69052e!8m2!3d44.9778993!4d-93.2706554',
        title: 'Tarmarack Partners'
    });

    google.maps.event.addListener(marker, 'click', function() {
        window.location.href = this.url;
    });
}
