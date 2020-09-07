/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// require('bootstrap');
$(document).ready(function () {
  var image = document.getElementsByClassName('parallax'); // new simpleParallax(image);

  $('#main-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="icon chevron left large cursor-pointer slider-prev">',
    nextArrow: '<i class="icon chevron right large cursor-pointer slider-next"></i>',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false
      }
    } // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
});
$(document).ready(function () {
  saveAdViews();
  $(window).on('scroll', function (e) {
    if ($(window).width() > 992) {
      $('#main-top-nav').toggleClass('mini-nav', $(window).scrollTop() > 150);
    }
  }); //open full screen search

  $('.open-full-screen-search').on("click", function (event) {
    event.preventDefault();
    $('.full-screen-search').addClass("open");
  }); //close full screen search

  $('#close-full-screen-search').on("click", function (event) {
    event.preventDefault();
    $('.full-screen-search').removeClass("open");
  }); // var rellax = new Rellax('.rellax');
  // $('.my-parallax-window').parallax({
  //   speed: -.2,
  //   sliderSelector: '>.my-parallax-slider',
  // })

  $('#video-grid-button').click(function (event) {
    event.preventDefault();
    $('#video-card-grid').addClass('grid-format');
    $(this).addClass('text-primary');
    $('#video-list-button').removeClass('text-primary');
  });
  $('#video-list-button').click(function (event) {
    event.preventDefault();
    $('#video-card-grid').removeClass('grid-format');
    $(this).addClass('text-primary');
    $('#video-grid-button').removeClass('text-primary');
  });
  $('.footer-nav .title').click(function (event) {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $('.footer-nav .title').removeClass('open');
      $(this).addClass('open');
    }
  });
  $('.rateit').bind('rated', function (e) {
    var ri = $(this); //if the use pressed reset, it will get value: 0 (to be compatible with the HTML range control), we could check if e.type == 'reset', and then set the value to  null .

    var value = ri.rateit('value');
    var postid = ri.data('postid'); // if the product id was in some hidden field: ri.closest('li').find('input[name="productid"]').val()
    //maybe we want to disable voting?

    ri.rateit('readonly', true);
    console.log(postid);
    $.oc.stripeLoadIndicator.show();
    $.request('onVote', {
      data: {
        value: value,
        postid: postid
      },
      complete: function complete() {
        $.oc.stripeLoadIndicator.hide();
        window.localStorage.setItem('cws_recipe_voted_' + postid.toString(), true);
      }
    }); // $.ajax({
    //     url: 'rateit.aspx', //your server side script
    //     data: { id: productID, value: value }, //our data
    //     type: 'POST',
    //     success: function (data) {
    //         $('#response').append('<li>' + data + '</li>');
    //     },
    //     error: function (jxhr, msg, err) {
    //         $('#response').append('<li style="color:red">' + msg + '</li>');
    //     }
    // });
  });
  var postId = $('.rateit').data('postid');
  var voted = localStorage.getItem('cws_voted_' + postId);

  if (localStorage.getItem('cws_recipe_voted_' + postId)) {
    $('.rateit').rateit('readonly', true);
  }
});
$(document).ready(function () {
  $('#gdpr-accept').on('click', function (e) {
    e.preventDefault();
    $('.gdpr').hide();
    localStorage.setItem('gdpr-accepted', true);
  });
});
gdprStatus = localStorage.getItem('gdpr-accepted');
console.log(gdprStatus);

if (!gdprStatus) {
  console.log(localStorage.getItem('gdpr-accepted'));
  $('.gdpr').show();
}

function saveAdViews() {
  var ads = $('.ads');
  console.log(ads);
  var entries = [];
  ads.each(function (i, item) {
    var adId = $(item).attr('data-ads-id');
    var spaceId = $(item).attr('data-space-id');
    entries.push({
      'ad_id': adId,
      'space_id': spaceId,
      'action': 'view'
    });
  });
  console.log(entries);
  $.request('onSaveAdsStats', {
    data: {
      data: entries
    }
  });
}

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/scss/vendor.scss":
/*!******************************!*\
  !*** ./src/scss/vendor.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ./src/scss/vendor.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/nets/SSD/Development/Web/Octobercms/cws/themes/cws/src/js/app.js */"./src/js/app.js");
__webpack_require__(/*! /Users/nets/SSD/Development/Web/Octobercms/cws/themes/cws/src/scss/app.scss */"./src/scss/app.scss");
module.exports = __webpack_require__(/*! /Users/nets/SSD/Development/Web/Octobercms/cws/themes/cws/src/scss/vendor.scss */"./src/scss/vendor.scss");


/***/ })

/******/ });