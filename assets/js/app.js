!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=0)}([function(e,t,o){o(1),o(4),e.exports=o(9)},function(e,t){$(document).ready((function(){document.getElementsByClassName("parallax");$("#main-slider").slick({dots:!1,infinite:!1,speed:300,slidesToShow:6,slidesToScroll:1,arrows:!0,prevArrow:'<i class="icon chevron left large cursor-pointer slider-prev">',nextArrow:'<i class="icon chevron right large cursor-pointer slider-next"></i>',responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1,dots:!1}},{breakpoint:600,settings:{slidesToShow:3,slidesToScroll:1,dots:!1}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:1,dots:!1}}]})})),$(document).ready((function(){$(window).on("scroll",(function(e){$("#main-top-nav").toggleClass("mini-nav",$(window).scrollTop()>150)})),$("#open-full-screen-search").on("click",(function(e){e.preventDefault(),$(".full-screen-search").addClass("open")})),$("#close-full-screen-search").on("click",(function(e){e.preventDefault(),$(".full-screen-search").removeClass("open")}));new Rellax(".rellax");$(".my-parallax-window").parallax({speed:-.2,sliderSelector:">.my-parallax-slider"}),$("#video-grid-button").click((function(e){e.preventDefault(),$("#video-card-grid").addClass("grid-format"),$(this).addClass("text-primary"),$("#video-list-button").removeClass("text-primary")})),$("#video-list-button").click((function(e){e.preventDefault(),$("#video-card-grid").removeClass("grid-format"),$(this).addClass("text-primary"),$("#video-grid-button").removeClass("text-primary")})),$(".footer-nav .title").click((function(e){$(this).hasClass("open")?$(this).removeClass("open"):($(".footer-nav .title").removeClass("open"),$(this).addClass("open"))}))}))},,,function(e,t){},,,,,function(e,t){}]);