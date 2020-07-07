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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/jquery.rateit.js":
/*!*********************************!*\
  !*** ./src/js/jquery.rateit.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! RateIt | v1.1.2 / 03/28/2019
    https://github.com/gjunge/rateit.js | Twitter: @gjunge
*/
(function ($) {
  $.rateit = {
    aria: {
      resetLabel: 'reset rating',
      ratingLabel: 'rating'
    }
  };

  $.fn.rateit = function (p1, p2) {
    //quick way out.
    var index = 1;
    var options = {};
    var mode = 'init';

    var capitaliseFirstLetter = function capitaliseFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.substr(1);
    };

    if (this.length === 0) {
      return this;
    }

    var tp1 = $.type(p1);

    if (tp1 == 'object' || p1 === undefined || p1 === null) {
      options = $.extend({}, $.fn.rateit.defaults, p1); //wants to init new rateit plugin(s).
    } else if (tp1 == 'string' && p1 !== 'reset' && p2 === undefined) {
      return this.data('rateit' + capitaliseFirstLetter(p1)); //wants to get a value.
    } else if (tp1 == 'string') {
      mode = 'setvalue';
    }

    return this.each(function () {
      var item = $(this); //shorten all the item.data('rateit-XXX'), will save space in closure compiler, will be like item.data('XXX') will become x('XXX')

      var itemdata = function itemdata(key, value) {
        if (value != null) {
          //update aria values
          var ariakey = 'aria-value' + (key == 'value' ? 'now' : key);
          var range = item.find('.rateit-range');

          if (range.attr(ariakey) != undefined) {
            range.attr(ariakey, value);
          }
        }

        arguments[0] = 'rateit' + capitaliseFirstLetter(key);
        return item.data.apply(item, arguments); ////Fix for WI: 523
      }; //handle programmatic reset


      if (p1 == 'reset') {
        var setup = itemdata('init'); //get initial value

        for (var prop in setup) {
          item.data(prop, setup[prop]);
        }

        if (itemdata('backingfld')) {
          //reset also backingfield
          var fld = $(itemdata('backingfld')); // If backing field is a select box with valuesrc option set to "index", reset its selectedIndex property; otherwise, reset its value.

          if (fld[0].nodeName == 'SELECT' && fld[0].getAttribute('data-rateit-valuesrc') === 'index') {
            fld.prop('selectedIndex', itemdata('value'));
          } else {
            fld.val(itemdata('value'));
          }

          fld.trigger('change');

          if (fld[0].min) {
            fld[0].min = itemdata('min');
          }

          if (fld[0].max) {
            fld[0].max = itemdata('max');
          }

          if (fld[0].step) {
            fld[0].step = itemdata('step');
          }
        }

        item.trigger('reset');
      } //add the rate it class.


      if (!item.hasClass('rateit')) {
        item.addClass('rateit');
      }

      var ltr = item.css('direction') != 'rtl'; // set value mode

      if (mode == 'setvalue') {
        if (!itemdata('init')) {
          throw 'Can\'t set value before init';
        } //if readonly now and it wasn't readonly, remove the eventhandlers.


        if (p1 == 'readonly' && p2 == true && !itemdata('readonly')) {
          item.find('.rateit-range').unbind();
          itemdata('wired', false);
        } //when we receive a null value, reset the score to its min value.


        if (p1 == 'value') {
          p2 = p2 == null ? itemdata('min') : Math.max(itemdata('min'), Math.min(itemdata('max'), p2));
        }

        if (itemdata('backingfld')) {
          //if we have a backing field, check which fields we should update. 
          //In case of input[type=range], although we did read its attributes even in browsers that don't support it (using fld.attr())
          //we only update it in browser that support it (&& fld[0].min only works in supporting browsers), not only does it save us from checking if it is range input type, it also is unnecessary.
          var fld = $(itemdata('backingfld')); // If backing field is a select box with valuesrc option set to "index", update its selectedIndex property; otherwise, update its value.

          if (fld[0].nodeName == 'SELECT' && fld[0].getAttribute('data-rateit-valuesrc') === 'index') {
            if (p1 == 'value') {
              fld.prop('selectedIndex', p2);
            }
          } else {
            if (p1 == 'value') {
              fld.val(p2);
            }
          }

          if (p1 == 'min' && fld[0].min) {
            fld[0].min = p2;
          }

          if (p1 == 'max' && fld[0].max) {
            fld[0].max = p2;
          }

          if (p1 == 'step' && fld[0].step) {
            fld[0].step = p2;
          }
        }

        itemdata(p1, p2);
      } //init rateit plugin


      if (!itemdata('init')) {
        //get our values, either from the data-* html5 attribute or from the options.
        itemdata('mode', itemdata('mode') || options.mode);
        itemdata('icon', itemdata('icon') || options.icon);
        itemdata('min', isNaN(itemdata('min')) ? options.min : itemdata('min'));
        itemdata('max', isNaN(itemdata('max')) ? options.max : itemdata('max'));
        itemdata('step', itemdata('step') || options.step);
        itemdata('readonly', itemdata('readonly') !== undefined ? itemdata('readonly') : options.readonly);
        itemdata('resetable', itemdata('resetable') !== undefined ? itemdata('resetable') : options.resetable);
        itemdata('backingfld', itemdata('backingfld') || options.backingfld);
        itemdata('starwidth', itemdata('starwidth') || options.starwidth);
        itemdata('starheight', itemdata('starheight') || options.starheight);
        itemdata('value', Math.max(itemdata('min'), Math.min(itemdata('max'), !isNaN(itemdata('value')) ? itemdata('value') : !isNaN(options.value) ? options.value : options.min)));
        itemdata('ispreset', itemdata('ispreset') !== undefined ? itemdata('ispreset') : options.ispreset); //are we LTR or RTL?

        if (itemdata('backingfld')) {
          //if we have a backing field, hide it, override defaults if range or select.
          var fld = $(itemdata('backingfld')).hide();

          if (fld.attr('disabled') || fld.attr('readonly')) {
            itemdata('readonly', true); //http://rateit.codeplex.com/discussions/362055 , if a backing field is disabled or readonly at instantiation, make rateit readonly.
          }

          if (fld[0].nodeName == 'INPUT') {
            if (fld[0].type == 'range' || fld[0].type == 'text') {
              //in browsers not support the range type, it defaults to text
              itemdata('min', parseInt(fld.attr('min')) || itemdata('min')); //if we would have done fld[0].min it wouldn't have worked in browsers not supporting the range type.

              itemdata('max', parseInt(fld.attr('max')) || itemdata('max'));
              itemdata('step', parseInt(fld.attr('step')) || itemdata('step'));
            }
          }

          if (fld[0].nodeName == 'SELECT' && fld[0].options.length > 1) {
            // If backing field is a select box with valuesrc option set to "index", use the indexes of its options; otherwise, use the values.
            if (fld[0].getAttribute('data-rateit-valuesrc') === 'index') {
              itemdata('min', !isNaN(itemdata('min')) ? itemdata('min') : Number(fld[0].options[0].index));
              itemdata('max', Number(fld[0].options[fld[0].length - 1].index));
              itemdata('step', Number(fld[0].options[1].index) - Number(fld[0].options[0].index));
            } else {
              itemdata('min', !isNaN(itemdata('min')) ? itemdata('min') : Number(fld[0].options[0].value));
              itemdata('max', Number(fld[0].options[fld[0].length - 1].value));
              itemdata('step', Number(fld[0].options[1].value) - Number(fld[0].options[0].value));
            } //see if we have a option that as explicity been selected


            var selectedOption = fld.find('option[selected]');

            if (selectedOption.length == 1) {
              // If backing field is a select box with valuesrc option set to "index", use the index of selected option; otherwise, use the value.
              if (fld[0].getAttribute('data-rateit-valuesrc') === 'index') {
                itemdata('value', selectedOption[0].index);
              } else {
                itemdata('value', selectedOption.val());
              }
            }
          } else {
            //if it is not a select box, we can get's it's value using the val function. 
            //If it is a selectbox, we always get a value (the first one of the list), even if it was not explicity set.
            itemdata('value', fld.val());
          }
        } //Create the necessary tags. For ARIA purposes we need to give the items an ID. So we use an internal index to create unique ids


        var element = item[0].nodeName == 'DIV' ? 'div' : 'span';
        index++; // tabindex="0" gets only added in readonly mode. When keyboard tabbing, no focus is needed in readonly mode.

        var html = '<button id="rateit-reset-{{index}}" type="button" data-role="none" class="rateit-reset" aria-label="' + $.rateit.aria.resetLabel + '" aria-controls="rateit-range-{{index}}"><span></span></button><{{element}} id="rateit-range-{{index}}" class="rateit-range"' + (itemdata('readonly') == true ? '' : ' tabindex="0"') + ' role="slider" aria-label="' + $.rateit.aria.ratingLabel + '" aria-owns="rateit-reset-{{index}}" aria-valuemin="' + itemdata('min') + '" aria-valuemax="' + itemdata('max') + '" aria-valuenow="' + itemdata('value') + '"><{{element}} class="rateit-empty"></{{element}}><{{element}} class="rateit-selected"></{{element}}><{{element}} class="rateit-hover"></{{element}}></{{element}}>';
        item.append(html.replace(/{{index}}/gi, index).replace(/{{element}}/gi, element)); //if we are in RTL mode, we have to change the float of the "reset button"

        if (!ltr) {
          item.find('.rateit-reset').css('float', 'right');
          item.find('.rateit-selected').addClass('rateit-selected-rtl');
          item.find('.rateit-hover').addClass('rateit-hover-rtl');
        }

        if (itemdata('mode') == 'font') {
          item.addClass('rateit-font').removeClass('rateit-bg');
        } else {
          item.addClass('rateit-bg').removeClass('rateit-font');
        }

        itemdata('init', JSON.parse(JSON.stringify(item.data()))); //cheap way to create a clone
      }

      var isfont = itemdata('mode') == 'font'; //resize the height of all elements, 

      if (!isfont) {
        item.find('.rateit-selected, .rateit-hover').height(itemdata('starheight'));
      }

      var range = item.find('.rateit-range');

      if (isfont) {
        //fill the ranges with the icons
        var icon = itemdata('icon');
        var stars = itemdata('max') - itemdata('min');
        var txt = '';

        for (var i = 0; i < stars; i++) {
          txt += icon;
        }

        range.find('> *').text(txt);
        itemdata('starwidth', range.width() / (itemdata('max') - itemdata('min')));
      } else {
        //set the range element to fit all the stars.
        range.width(itemdata('starwidth') * (itemdata('max') - itemdata('min'))).height(itemdata('starheight'));
      } //add/remove the preset class


      var presetclass = 'rateit-preset' + (ltr ? '' : '-rtl');

      if (itemdata('ispreset')) {
        item.find('.rateit-selected').addClass(presetclass);
      } else {
        item.find('.rateit-selected').removeClass(presetclass);
      } //set the value if we have it.


      if (itemdata('value') != null) {
        var score = (itemdata('value') - itemdata('min')) * itemdata('starwidth');
        item.find('.rateit-selected').width(score);
      } //setup the reset button


      var resetbtn = item.find('.rateit-reset');

      if (resetbtn.data('wired') !== true) {
        resetbtn.bind('click', function (e) {
          e.preventDefault();
          resetbtn.blur();
          var event = $.Event('beforereset');
          item.trigger(event);

          if (event.isDefaultPrevented()) {
            return false;
          }

          item.rateit('value', null);
          item.trigger('reset');
        }).data('wired', true);
      } //this function calculates the score based on the current position of the mouse.


      var calcRawScore = function calcRawScore(element, event) {
        var pageX = event.changedTouches ? event.changedTouches[0].pageX : event.pageX;
        var offsetx = pageX - $(element).offset().left;

        if (!ltr) {
          offsetx = range.width() - offsetx;
        }

        ;

        if (offsetx > range.width()) {
          offsetx = range.width();
        }

        if (offsetx < 0) {
          offsetx = 0;
        }

        return score = Math.ceil(offsetx / itemdata('starwidth') * (1 / itemdata('step')));
      }; //sets the hover element based on the score.


      var setHover = function setHover(score) {
        var w = score * itemdata('starwidth') * itemdata('step');
        var h = range.find('.rateit-hover');

        if (h.data('width') != w) {
          range.find('.rateit-selected').hide();
          h.width(w).show().data('width', w);
          var data = [score * itemdata('step') + itemdata('min')];
          item.trigger('hover', data).trigger('over', data);
        }
      };

      var setSelection = function setSelection(value) {
        var event = $.Event('beforerated');
        item.trigger(event, [value]);

        if (event.isDefaultPrevented()) {
          return false;
        }

        itemdata('value', value);

        if (itemdata('backingfld')) {
          // If backing field is a select box with valuesrc option set to "index", update its selectedIndex property; otherwise, update its value.
          if (fld[0].nodeName == 'SELECT' && fld[0].getAttribute('data-rateit-valuesrc') === 'index') {
            $(itemdata('backingfld')).prop('selectedIndex', value).trigger('change');
          } else {
            $(itemdata('backingfld')).val(value).trigger('change');
          }
        }

        if (itemdata('ispreset')) {
          //if it was a preset value, unset that.
          range.find('.rateit-selected').removeClass(presetclass);
          itemdata('ispreset', false);
        }

        range.find('.rateit-hover').hide();
        range.find('.rateit-selected').width(value * itemdata('starwidth') - itemdata('min') * itemdata('starwidth')).show();
        item.trigger('hover', [null]).trigger('over', [null]).trigger('rated', [value]);
        return true;
      };

      if (!itemdata('readonly')) {
        //if we are not read only, add all the events
        //if we have a reset button, set the event handler.
        if (!itemdata('resetable')) {
          resetbtn.hide();
        } //when the mouse goes over the range element, we set the "hover" stars.


        if (!itemdata('wired')) {
          range.bind('touchmove touchend', touchHandler); //bind touch events

          range.mousemove(function (e) {
            var score = calcRawScore(this, e);
            setHover(score);
          }); //when the mouse leaves the range, we have to hide the hover stars, and show the current value.

          range.mouseleave(function (e) {
            range.find('.rateit-hover').hide().width(0).data('width', '');
            item.trigger('hover', [null]).trigger('over', [null]);
            range.find('.rateit-selected').show();
          }); //when we click on the range, we have to set the value, hide the hover.

          range.mouseup(function (e) {
            var score = calcRawScore(this, e);
            var value = score * itemdata('step') + itemdata('min');
            setSelection(value);
            range.blur();
          }); //support key nav

          range.keyup(function (e) {
            if (e.which == 38 || e.which == (ltr ? 39 : 37)) {
              setSelection(Math.min(itemdata('value') + itemdata('step'), itemdata('max')));
            }

            if (e.which == 40 || e.which == (ltr ? 37 : 39)) {
              setSelection(Math.max(itemdata('value') - itemdata('step'), itemdata('min')));
            }
          });
          itemdata('wired', true);
        }

        if (itemdata('resetable')) {
          resetbtn.show();
        }
      } else {
        resetbtn.hide();
      }

      range.attr('aria-readonly', itemdata('readonly'));
    });
  }; //touch converter http://ross.posterous.com/2008/08/19/iphone-touch-events-in-javascript/


  function touchHandler(event) {
    var touches = event.originalEvent.changedTouches,
        first = touches[0],
        type = "";

    switch (event.type) {
      case "touchmove":
        type = "mousemove";
        break;

      case "touchend":
        type = "mouseup";
        break;

      default:
        return;
    }

    var simulatedEvent = document.createEvent("MouseEvent");
    simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0
    /*left*/
    , null);
    first.target.dispatchEvent(simulatedEvent);
    event.preventDefault();
  }

  ; //some default values.

  $.fn.rateit.defaults = {
    min: 0,
    max: 5,
    step: 0.5,
    mode: 'bg',
    icon: '★',
    starwidth: 16,
    starheight: 16,
    readonly: false,
    resetable: true,
    ispreset: false
  }; //invoke it on all .rateit elements. This could be removed if not wanted.

  $(function () {
    $('div.rateit, span.rateit').rateit();
  });
})(jQuery);

/***/ }),

/***/ "./src/js/parallex.js":
/*!****************************!*\
  !*** ./src/js/parallex.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (t) {
  function e(i) {
    if (o[i]) return o[i].exports;
    var r = o[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
  }

  var o = {};
  e.m = t, e.c = o, e.d = function (t, o, i) {
    e.o(t, o) || Object.defineProperty(t, o, {
      configurable: !1,
      enumerable: !0,
      get: i
    });
  }, e.n = function (t) {
    var o = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return e.d(o, "a", o), o;
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, e.p = "", e(e.s = 1);
}([function (t, e) {
  t.exports = jQuery;
}, function (t, e, o) {
  "use strict";

  function i(t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  }

  function r(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var n = function () {
    function t(t, e) {
      for (var o = 0; o < e.length; o++) {
        var i = e[o];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }

    return function (e, o, i) {
      return o && t(e.prototype, o), i && t(e, i), e;
    };
  }(),
      s = o(0),
      a = i(s),
      f = o(2),
      l = i(f),
      d = function () {
    function t(e, o) {
      function i(t, e, i) {
        var r = parseInt(o[t]);
        isNaN(r) ? o[t] !== e && o[t] !== i && (o.pos += (o[t] = "center") + " ") : o.pos += (o[t] = r) + "px ";
      }

      r(this, t);
      var n = (0, a["default"])(e);
      if (o.pos = "", i("posX", "left", "right"), i("posY", "top", "bottom"), navigator.userAgent.match(o.excludeAgents)) o.src && !n.is("img") && n.css("background", 'url("' + o.src + '") ' + o.pos + "/cover");else {
        o.scrollingSelector && (t.scrollingElement = (0, a["default"])(o.scrollingSelector)[0]), t.isSet || t.init(), t.iList.push(this);
        var s = (0, a["default"])("<div>").addClass("parallax-mirror").css({
          visibility: "hidden",
          zIndex: o.zIndex,
          position: "fixed",
          top: 0,
          left: 0,
          overflow: "hidden"
        }).prependTo((0, a["default"])(o.mirrorSelector)),
            f = n.find(o.sliderSelector);
        0 === f.length ? f = (0, a["default"])("<img>").attr("src", o.src) : (o.formerParent = f.parent(), o.formerStyles = f.prop("style")), f.addClass("parallax-slider").prependTo(s), f.children("img").add(f).on("load", function () {
          t.update(!0);
        }), this.$s = f, this.$m = s;
      }
      this.$w = n, this.o = o, "function" == typeof o.afterSetup && o.afterSetup(this);
    }

    return n(t, [{
      key: "refresh",
      value: function value() {
        var e = this.$w,
            o = this.o;
        o.dH = t.dH, o.dW = t.dW;
        var i = o.scrollingElement;

        if (i && i !== document && (o.dH = i.scrollHeight, o.dW = i.scrollWidth), o) {
          o.aspectRatio || function (t, e) {
            var o = 0,
                i = 0,
                r = 0,
                n = 0;
            if (0 === t.children().each(function () {
              var t = (0, a["default"])(this),
                  e = t.offset(),
                  s = e.top + t.outerHeight(),
                  f = e.left + t.outerWidth();
              o = e.top < o ? e.top : o, r = e.left < r ? e.left : r, i = s > i ? s : i, n = f > n ? f : n;
            }).length) e.aspectRatio = t[0].naturalWidth / (t[0].naturalHeight || 1);else {
              var s = t.offset(),
                  f = i - Math.max(o, s.top),
                  l = n - Math.max(r, s.left);
              e.aspectRatio = l / (f || 1);
            }
          }(this.$s, o);
          var r = o.aspectRatio || 1;
          o.boxWidth = e.outerWidth(), o.boxHeight = e.outerHeight() + 2 * o.bleed, o.boxOffsetTop = e.offset().top - o.bleed, o.boxOffsetLeft = e.offset().left, o.boxOffsetBottom = o.boxOffsetTop + o.boxHeight;
          var n = t.wH,
              s = t.dH,
              f = Math.min(o.boxOffsetTop, s - n),
              l = Math.max(o.boxOffsetTop + o.boxHeight - n, 0),
              d = o.boxHeight + (f - l) * (1 - o.speed) | 0,
              u = (o.boxOffsetTop - f) * (1 - o.speed) | 0,
              p = void 0;
          o.boxWidth < d * r ? (o.imageWidth = d * r | 0, o.imageHeight = d, o.offsetBaseTop = u, p = o.imageWidth - o.boxWidth, "left" === o.posX ? o.offsetLeft = 0 : "right" === o.posX ? o.offsetLeft = -p : isNaN(o.posX) ? o.offsetLeft = -p / 2 | 0 : o.offsetLeft = Math.max(o.posX, -p)) : (o.imageWidth = o.boxWidth, o.imageHeight = o.boxWidth / r | 0, o.offsetLeft = 0, p = o.imageHeight - d, "top" === o.posY ? o.offsetBaseTop = u : "bottom" === o.posY ? o.offsetBaseTop = u - p : isNaN(o.posY) ? o.offsetBaseTop = u - p / 2 | 0 : o.offsetBaseTop = u + Math.max(o.posY, -p)), "function" == typeof o.afterRefresh && o.afterRefresh(this);
        }
      }
    }, {
      key: "render",
      value: function value() {
        var e = this.o,
            o = t.sT,
            i = t.sL,
            r = e.overScrollFix ? t.overScroll : 0,
            n = o + t.wH;
        e.boxOffsetBottom > o && e.boxOffsetTop <= n ? (e.visibility = "visible", e.mirrorTop = e.boxOffsetTop - o, e.mirrorLeft = e.boxOffsetLeft - i, e.offsetTop = e.offsetBaseTop - e.mirrorTop * (1 - e.speed)) : e.visibility = "hidden", this.$m.css({
          transform: "translate3d(" + e.mirrorLeft + "px, " + (e.mirrorTop - r) + "px, 0px)",
          visibility: e.visibility,
          height: e.boxHeight,
          width: e.boxWidth
        }), this.$s.css({
          transform: "translate3d(" + e.offsetLeft + "px, " + e.offsetTop + "px, 0px)",
          position: "absolute",
          height: e.imageHeight,
          width: e.imageWidth,
          maxWidth: "none"
        }), "function" == typeof e.afterRender && e.afterRender(this);
      }
    }, {
      key: "destroy",
      value: function value() {
        if (this.$m && this.$m.remove(), this.$s) {
          for (var e = 0; e < t.iList.length; e++) {
            t.iList[e] === this && t.iList.splice(e, 1);
          }

          this.o.formerParent && (this.$s.prop("style", this.o.formerStyles), this.o.formerParent.append(this.$s));
        }

        0 === t.iList.length && ((0, a["default"])(window).off("scroll.px.parallax resize.px.parallax load.px.parallax"), t.isSet = !1), "function" == typeof this.o.afterDestroy && this.o.afterDestroy(this);
      }
    }], [{
      key: "init",
      value: function value() {
        function e() {
          t.wH = r.height(), t.wW = r.width(), t.dH = i[0].scrollHeight || i.height(), t.dW = i[0].scrollWidth || i.width();
        }

        function o() {
          var e = n.scrollTop(),
              o = t.dH - t.wH,
              i = t.dW - t.wW;
          t.sT = Math.max(0, Math.min(o, e)), t.sL = Math.max(0, Math.min(i, n.scrollLeft())), t.overScroll = Math.max(e - o, Math.min(e, 0));
        }

        if (!t.isSet) {
          var i = (0, a["default"])(t.scrollingElement || document),
              r = (0, a["default"])(window),
              n = (0, a["default"])(t.scrollingElement || window);
          r.on("resize.px.parallax load.px.parallax", function () {
            e(), t.update(!0);
          }), e(), t.isSet = !0;
          var s = -1;
          !function e() {
            var i = n.scrollTop();
            s !== i && (s = i, o(), t.update()), window.requestAnimationFrame(e);
          }();
        }
      }
    }, {
      key: "update",
      value: function value() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && a["default"].each(t.iList, function () {
          this.refresh();
        }), a["default"].each(t.iList, function () {
          this.render();
        });
      }
    }]), t;
  }();

  d.DEFAULTS = {
    src: null,
    speed: .2,
    bleed: 0,
    zIndex: -100,
    posX: "center",
    posY: "center",
    overScrollFix: !1,
    excludeAgents: /(iPod|iPhone|iPad|Android)/,
    aspectRatio: null,
    sliderSelector: ">.parallax-slider",
    mirrorSelector: "body",
    scrollingSelector: null,
    afterRefresh: null,
    afterRender: null,
    afterSetup: null,
    afterDestroy: null
  }, d.AUTOINIT = !0, d.sT = 0, d.sL = 0, d.wH = 0, d.wW = 0, d.dH = 1 << 30, d.dW = 1 << 30, d.iList = [], d.isSet = !1, (0, a["default"])(function () {
    d.AUTOINIT && (0, a["default"])("[data-parallax]").parallax();
  }), (0, l["default"])("parallax", d);
}, function (t, e, o) {
  "use strict";

  function i(t, e) {
    var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = "__" + t,
        n = s["default"].fn[t];
    s["default"].fn[t] = function (t) {
      return this.each(function () {
        var o = (0, s["default"])(this),
            n = o.data(i);
        if (n || "destroy" === t) "function" == typeof n.configure && n.configure(options);else {
          var a = s["default"].extend({}, e.DEFAULTS, o.data(), "object" === (void 0 === t ? "undefined" : r(t)) && t);
          o.data(i, n = new e(this, a));
        }
        "string" == typeof t && ("destroy" === t ? (n.destroy(), o.data(i, !1)) : n[t]());
      });
    }, o && (s["default"][t] = function (e) {
      return (0, s["default"])({})[t](e);
    }), s["default"].fn[t].noConflict = function () {
      return s["default"].fn[t] = n;
    };
  }

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  };
  e["default"] = i;

  var n = o(0),
      s = function (t) {
    return t && t.__esModule ? t : {
      "default": t
    };
  }(n);
}]);

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./parallex */ "./src/js/parallex.js");

__webpack_require__(/*! ./jquery.rateit */ "./src/js/jquery.rateit.js");

/***/ }),

/***/ 1:
/*!********************************!*\
  !*** multi ./src/js/vendor.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nets/SSD/Development/Web/cws/themes/cws/src/js/vendor.js */"./src/js/vendor.js");


/***/ })

/******/ });