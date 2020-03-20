// require('bootstrap');

$(document).ready(function(){
    $("#main-slider").owlCarousel({
        items: 6,
        startPosition: 0,
        margin: 20,
        dots: false,
        loop: true,
        autoplay: true,
        nav: true,
        pagination :true,
        autoplayTimeout:6000,
        responsiveClass:true,
        navText: ['yes', 'no'],
    });

    var image = document.getElementsByClassName('parallax');
    new simpleParallax(image);
  });