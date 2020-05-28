// require('bootstrap');

$(document).ready(function(){
    var image = document.getElementsByClassName('parallax');
    // new simpleParallax(image);
    $('#main-slider').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
  });


$(document).ready(function() {
    $(window).on('scroll', function (e) {
        $('#main-top-nav').toggleClass('mini-nav', $(window).scrollTop() > 150);
    });

<<<<<<< HEAD
    //open full screen search
    $('#open-full-screen-search').on("click", function(event) {
        event.preventDefault();
        $('.full-screen-search').addClass("open");
    });
    //close full screen search
    $('#close-full-screen-search').on("click", function(event) {
        event.preventDefault();
        $('.full-screen-search').removeClass("open");
    });


})
=======
    var image = document.getElementsByClassName('parallax');
    new simpleParallax(image);
  });


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      $('.navbar').addClass('shrink')
  } else {
      $('.navbar').removeClass('shrink')
  }
}
>>>>>>> ffad7967c231dcfc43d96f624f4c22ea5ce7dbe3
