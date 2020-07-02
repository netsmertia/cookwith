// require('bootstrap');

$(document).ready(function(){
    var image = document.getElementsByClassName('parallax');
    // new simpleParallax(image);
    $('#main-slider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<i class="icon chevron left large cursor-pointer slider-prev">',
        nextArrow: '<i class="icon chevron right large cursor-pointer slider-next"></i>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              dots: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: false,
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
        if($(window).width() > 992) {
          $('#main-top-nav').toggleClass('mini-nav', $(window).scrollTop() > 150);
        }
    });

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



    var rellax = new Rellax('.rellax');
    $('.my-parallax-window').parallax({
      speed: -.2,
      sliderSelector: '>.my-parallax-slider',
    })

    $('#video-grid-button').click(function(event) {
      event.preventDefault();
      $('#video-card-grid').addClass('grid-format');
      $(this).addClass('text-primary');
      $('#video-list-button').removeClass('text-primary');
    });

    $('#video-list-button').click(function(event) {
      event.preventDefault();
      $('#video-card-grid').removeClass('grid-format');
      $(this).addClass('text-primary');
      $('#video-grid-button').removeClass('text-primary');
    });

    $('.footer-nav .title').click(function(event) {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open');
      } else {
        $('.footer-nav .title').removeClass('open');
        $(this).addClass('open');
      }
    });
})
