$(document).ready((function(){function a(a){$("html, body").animate({scrollTop:$("section[data-section-name="+a+"]").offset().top},750,"swing")}$(".menu-button").on("click",(function(){$("body").toggleClass("menu-active")})),$(".down-arrow").on("click",(function(){$.scrollify.next()})),$(".founder-card-small.michael-small .arrow-right").on("click",(function(){$(".founders").addClass("founders-active michael-active"),window.matchMedia("(max-width: 1100px)").matches&&a("founders")})),$(".founder-card-small.larry-small .arrow-right").on("click",(function(){$(".founders").addClass("founders-active larry-active"),window.matchMedia("(max-width: 1100px)").matches&&a("founders")})),$(".founder-card-small.jd-small .arrow-right").on("click",(function(){$(".founders").addClass("founders-active jd-active"),window.matchMedia("(max-width: 1100px)").matches&&a("founders")})),$(".michael-large").on("click",(function(a){$(".founders").addClass("michael-active").removeClass("larry-active jd-active")})),$(".larry-large").on("click",(function(a){$(".founders").addClass("larry-active").removeClass("michael-active jd-active")})),$(".jd-large").on("click",(function(a){$(".founders").addClass("jd-active").removeClass("larry-active michael-active")})),$(".close-x").on("click",(function(){return $(".founders").removeClass("founders-active"),$(".play-active").removeClass("play-active"),$(".play").removeClass("play"),setTimeout((function(){$(".founders").removeClass("michael-active larry-active jd-active")}),300),!1})),$(".switch").on("click",(function(){return $(this).toggleClass("play"),$(this).closest(".founder-card-large").toggleClass("play-active"),!1})),$(".partner-card-small.michael-small .arrow-right").on("click",(function(){$(".partners").addClass("partners-active michael-active"),window.matchMedia("(max-width: 1100px)").matches&&a("partners")})),$(".partner-card-small.larry-small .arrow-right").on("click",(function(){$(".partners").addClass("partners-active larry-active"),window.matchMedia("(max-width: 1100px)").matches&&a("partners")})),$(".partner-card-small.jd-small .arrow-right").on("click",(function(){$(".partners").addClass("partners-active jd-active"),window.matchMedia("(max-width: 1100px)").matches&&a("partners")})),$(".michael-large").on("click",(function(a){$(".partners").addClass("michael-active").removeClass("larry-active jd-active")})),$(".larry-large").on("click",(function(a){$(".partners").addClass("larry-active").removeClass("michael-active jd-active")})),$(".jd-large").on("click",(function(a){$(".partners").addClass("jd-active").removeClass("larry-active michael-active")})),$(".close-x").on("click",(function(){return $(".partners").removeClass("partners-active"),$(".play-active").removeClass("play-active"),$(".play").removeClass("play"),setTimeout((function(){$(".partners").removeClass("michael-active larry-active jd-active")}),300),!1})),$(".info").on("click",(function(){return $(this).closest(".transaction").addClass("is-flipped"),!1})),$(".info-close").on("click",(function(){return $(this).closest(".transaction").removeClass("is-flipped").addClass("no-delay"),!1})),$.scrollify({section:".section",sectionName:"section-name",interstitialSection:"",easing:"easeOutExpo",scrollSpeed:2e3,offset:0,scrollbars:!0,standardScrollElements:"",setHeights:!1,overflowScroll:!0,updateHash:!1,touchScroll:!0,before:function(a,e){var s=e[a].attr("data-section-name");$("#main-nav .active").removeClass("active"),$("#main-nav").find('a[href="#'+s+'"]').addClass("active"),setTimeout((function(){$(".founders").removeClass("founders-active"),$(".play-active").removeClass("play-active"),$(".play").removeClass("play"),$(".founders").removeClass("michael-active larry-active")}),500),setTimeout((function(){$(".is-flipped").removeClass("is-flipped"),$(".transaction").attr("class","transaction")}),500)},after:function(){},afterResize:function(){},afterRender:function(){}}),$("#main-nav a, #logo").on("click",(function(){return $.scrollify.move($(this).attr("href")),!1})),$("#mobile-nav a, #logo").on("click",(function(){return $("body").removeClass("menu-active"),a($(this).attr("href").substring(1)),!1})),window.matchMedia("(max-width: 1100px)").matches&&($.scrollify.disable(),$(".down-arrow").on("click",(function(){return a("founders"),!1})))})),$(window).scroll((function(){var a=$(window).scrollTop()/2250%Math.PI;$(".sunburst-green").css({transform:"rotate(-"+a+"rad)"}),$(".sunburst-gold").css({transform:"rotate("+a+"rad)"}),$(window).scrollTop()>150?$(".nav-wrapper").addClass("collapsed"):$(".nav-wrapper").removeClass("collapsed")})),$(window).resize((function(){var a=$(window).width();a>1100&&$.scrollify.enable(),a<1100&&$.scrollify.disable()})),$(".transactions-slider").slick({slidesToShow:3,dots:!0,responsive:[{breakpoint:800,settings:{slidesToShow:2}},{breakpoint:480,settings:"unslick"}]});