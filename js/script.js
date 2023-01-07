$(document).ready(function(){
    // nav
    $("header nav ul.gnb > li").hover(function(){
        $("ul.sub,.nav_bg").stop().show()
    },function(){
        $("ul.sub,.nav_bg").stop().hide()
    });

    // slide
    $(".slide_main").slick({
        slide: "li",
        slidesToShow: 1,
        slideToScroll: 1,
        Infinite: true,
        speed : 600,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        dotsClass: "dots_custom",
        pauseOnHover: false
    });

    $(".slide_sub").slick({
        slide: "li",
        slidesToShow: 4,
        slideToScroll: 1,
        Infinity: true,
        speed: 600,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

});