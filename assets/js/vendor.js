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

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

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

/***/ "./src/js/sassy-social-share-public.js":
/*!*********************************************!*\
  !*** ./src/js/sassy-social-share-public.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function heateorSssCallAjax(e) {
  if (typeof jQuery != "undefined") {
    e();
  } else {
    heateorSssGetScript("https://code.jquery.com/jquery-latest.min.js", e);
  }
}

function heateorSssGetScript(e, t) {
  var n = document.createElement("script");
  n.src = e;
  var r = document.getElementsByTagName("head")[0],
      i = false;

  n.onload = n.onreadystatechange = function () {
    if (!i && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
      i = true;
      t();
      n.onload = n.onreadystatechange = null;
      r.removeChild(n);
    }
  };

  r.appendChild(n);
}

function heateorSssDetermineWhatsappShareAPI(a) {
  if (a) return -1 != navigator.userAgent.indexOf("Mobi") ? "api.whatsapp.com" : "web.whatsapp.com";
  var p = jQuery("i.heateorSssWhatsappBackground a").attr("href");
  return void 0 !== p ? -1 != navigator.userAgent.indexOf("Mobi") ? (jQuery("i.heateorSssWhatsappBackground a").attr("href", p.replace("web.whatsapp.com", "api.whatsapp.com")), "api.whatsapp.com") : (jQuery("i.heateorSssWhatsappBackground a").attr("href", p.replace("api.whatsapp.com", "web.whatsapp.com")), "web.whatsapp.com") : "";
}

heateorSssHorizontalSharingCountEnable = false;
heateorSssVerticalSharingCountEnable = false;
heateorSssMobileStickySharingEnabled = false;
/**
 * Show more sharing services popup
 */

function heateorSssMoreSharingPopup(elem, postUrl, postTitle, twitterTitle) {
  postUrl = encodeURIComponent(postUrl);
  concate = '</ul></div><div class="footer-panel"><p></p></div></div>';
  var heateorSssMoreSharingServices = {
    facebook: {
      title: "Facebook",
      locale: "en-US",
      redirect_url: "https://www.facebook.com/sharer.php?u=" + postUrl + "&t=" + postTitle + "&v=3"
    },
    twitter: {
      title: "Twitter",
      locale: "en-US",
      redirect_url: "https://twitter.com/intent/tweet?text=" + (twitterTitle ? twitterTitle : postTitle) + " " + postUrl
    },
    linkedin: {
      title: "Linkedin",
      locale: "en-US",
      redirect_url: "https://www.linkedin.com/shareArticle?mini=true&url=" + postUrl + "&title=" + postTitle
    },
    pinterest: {
      title: "Pinterest",
      locale: "en-US",
      redirect_url: "https://pinterest.com/pin/create/button/?url=" + postUrl + "&media=${media_link}&description=" + postTitle,
      bookmarklet_url: "javascript:void((function(){var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','//assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)})());"
    },
    CopyLink: {
      title: "Copy Link",
      locale: "en-US",
      redirect_url: "",
      bookmarklet_url: ""
    },
    Diaspora: {
      title: "Diaspora",
      locale: "en-US",
      redirect_url: "https://joindiaspora.com/bookmarklet?url=" + postUrl + "&title=" + postTitle + "&v=1"
    },
    Douban: {
      title: "Douban",
      locale: "en-US",
      redirect_url: "https://www.douban.com/share/service?name=" + postTitle + "&href=" + postUrl + "&image=&updated=&bm=&url=" + postUrl + "&title=" + postTitle + "&sel="
    },
    Draugiem: {
      title: "Draugiem",
      locale: "en-US",
      redirect_url: "https://www.draugiem.lv/say/ext/add.php?link=" + postUrl + "&title=" + postTitle
    },
    Facebook_Messenger: {
      title: "Facebook Messenger",
      locale: "en-US",
      redirect_url: "https://www.facebook.com/dialog/send?app_id=1904103319867886&display=popup&link=" + postUrl + "&redirect_uri=" + postUrl
    },
    Google_Classroom: {
      title: "Google Classroom",
      locale: "en-US",
      redirect_url: "https://classroom.google.com/u/0/share?url=" + postUrl
    },
    Kik: {
      title: "Kik",
      locale: "en-US",
      redirect_url: "https://www.kik.com/send/article/?app_name=Share&text=&title=" + postTitle + "&url=" + postUrl
    },
    Papaly: {
      title: "Papaly",
      locale: "en-US",
      redirect_url: "https://papaly.com/api/share.html?url=" + postUrl + "&title=" + postTitle
    },
    Refind: {
      title: "Refind",
      locale: "en-US",
      redirect_url: "https://refind.com/?url=" + postUrl
    },
    Skype: {
      title: "Skype",
      locale: "en-US",
      redirect_url: "https://web.skype.com/share?url=" + postUrl
    },
    SMS: {
      title: "SMS",
      locale: "en-US",
      bookmarklet_url: "sms://?&body=" + postTitle + " " + postUrl
    },
    Trello: {
      title: "Trello",
      locale: "en-US",
      redirect_url: "https://trello.com/add-card?mode=popup&url=" + postUrl + "&name=" + postTitle + "&desc="
    },
    Viber: {
      title: "Viber",
      locale: "en-US",
      bookmarklet_url: "viber://forward?text=" + postTitle + " " + postUrl
    },
    Threema: {
      title: "Threema",
      locale: "en-US",
      bookmarklet_url: "threema://compose?text=" + postTitle + " " + postUrl
    },
    Telegram: {
      title: "Telegram",
      locale: "en-US",
      redirect_url: "https://telegram.me/share/url?url=" + postUrl + "&text=" + postTitle
    },
    email: {
      title: "Email",
      locale: "en-US",
      redirect_url: "mailto:?subject=" + postTitle + "&body=Link: " + postUrl
    },
    reddit: {
      title: "Reddit",
      locale: "en-US",
      redirect_url: "http://reddit.com/submit?url=" + postUrl + "&title=" + postTitle
    },
    float_it: {
      title: "Float it",
      locale: "en-US",
      redirect_url: "http://www.designfloat.com/submit.php?url=" + postUrl + "&title=" + postTitle
    },
    google_mail: {
      title: "Google Gmail",
      locale: "en-US",
      redirect_url: "https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&su=" + postTitle + "&body=Link: " + postUrl
    },
    gentlereader: {
      title: "GentleReader",
      locale: "en-US",
      redirect_url: "https://app.gentlereader.com/bookmark?url=" + postUrl
    },
    google_bookmarks: {
      title: "Google Bookmarks",
      locale: "en-US",
      redirect_url: "http://www.google.com/bookmarks/mark?op=edit&bkmk=" + postUrl + "&title=" + postTitle
    },
    digg: {
      title: "Digg",
      locale: "en-US",
      redirect_url: "http://digg.com/submit?phase=2&url=" + postUrl + "&title=" + postTitle
    },
    printfriendly: {
      title: "PrintFriendly",
      locale: "en-US",
      redirect_url: "http://www.printfriendly.com/print?url=" + postUrl
    },
    print: {
      title: "Print",
      locale: "en-US",
      redirect_url: "http://www.printfriendly.com/print?url=" + postUrl,
      bookmarklet_url: "javascript:window.print()"
    },
    tumblr: {
      title: "Tumblr",
      locale: "en-US",
      redirect_url: "https://www.tumblr.com/widgets/share/tool?posttype=link&canonicalUrl=" + postUrl + "&title=" + postTitle + "&caption=",
      bookmarklet_url: "javascript:var d=document,w=window,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),f='http://www.tumblr.com/share',l=d.location,e=encodeURIComponent,p='?v=3&u='+e(l.href) +'&t='+e(d.title) +'&s='+e(s),u=f+p;try{if(!/^(.*\\.)?tumblr[^.]*$/.test(l.host))throw(0);tstbklt();}catch(z){a =function(){if(!w.open(u,'t','toolbar=0,resizable=0,status=1,width=450,height=430'))l.href=u;};if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else a();}void(0);"
    },
    vk: {
      title: "Vkontakte",
      locale: "ru",
      redirect_url: "https://vk.com/share.php?url=" + postUrl + "&title=" + postTitle
    },
    evernote: {
      title: "Evernote",
      locale: "en-US",
      redirect_url: "https://www.evernote.com/clip.action?url=" + postUrl + "&title=" + postTitle,
      bookmarklet_url: "javascript:(function(){EN_CLIP_HOST='http://www.evernote.com';try{var x=document.createElement('SCRIPT');x.type='text/javascript';x.src=EN_CLIP_HOST+'/public/bookmarkClipper.js?'+(new Date().getTime()/100000);document.getElementsByTagName('head')[0].appendChild(x);}catch(e){location.href=EN_CLIP_HOST+'/clip.action?url='+encodeURIComponent(location.href)+'&title='+encodeURIComponent(document.title);}})();"
    },
    amazon_us_wish_list: {
      title: "Amazon Wish List",
      locale: "en-US",
      redirect_url: "http://www.amazon.com/wishlist/add?u=" + postUrl + "&t=" + postTitle,
      bookmarklet_url: "javascript:(function(){var w=window,l=w.location,d=w.document,s=d.createElement('script'),e=encodeURIComponent,x='undefined',u='http://www.amazon.com/gp/wishlist/add';if(typeof s!='object')l.href=u+'?u='+e(l)+'&t='+e(d.title);function g(){if(d.readyState&&d.readyState!='complete'){setTimeout(g,200);}else{if(typeof AUWLBook==x)s.setAttribute('src',u+'.js?loc='+e(l)),d.body.appendChild(s);function f(){(typeof AUWLBook==x)?setTimeout(f,200):AUWLBook.showPopover();}f();}}g();}())"
    },
    wordpress_blog: {
      title: "WordPress",
      locale: "en-US",
      redirect_url: "http://www.addtoany.com/ext/wordpress/press_this?linkurl=" + postUrl + "&linkname=" + postTitle
    },
    whatsapp: {
      title: "Whatsapp",
      locale: "en-US",
      bookmarklet_url: "https://" + heateorSssDetermineWhatsappShareAPI(true) + "/send?text=" + postTitle + " " + postUrl
    },
    diigo: {
      title: "Diigo",
      locale: "en-US",
      redirect_url: "http://www.diigo.com/post?url=" + postUrl + "&title=" + postTitle
    },
    yc_hacker_news: {
      title: "Hacker News",
      locale: "en-US",
      redirect_url: "http://news.ycombinator.com/submitlink?u=" + postUrl + "&t=" + postTitle
    },
    box_net: {
      title: "Box.net",
      locale: "en-US",
      redirect_url: "https://www.box.net/api/1.0/import?url=" + postUrl + "&name=" + postTitle + "&import_as=link"
    },
    aol_mail: {
      title: "AOL Mail",
      locale: "en-US",
      redirect_url: "http://webmail.aol.com/25045/aol/en-us/Mail/compose-message.aspx?subject=" + postTitle + "&body=" + postUrl
    },
    yahoo_mail: {
      title: "Yahoo Mail",
      locale: "en-US",
      redirect_url: "http://compose.mail.yahoo.com/?Subject=" + postTitle + "&body=Link: " + postUrl
    },
    instapaper: {
      title: "Instapaper",
      locale: "en-US",
      redirect_url: "http://www.instapaper.com/edit?url=" + postUrl + "&title=" + postTitle
    },
    plurk: {
      title: "Plurk",
      locale: "en-US",
      redirect_url: "http://www.plurk.com/m?content=" + postUrl + "&qualifier=shares"
    },
    aim: {
      title: "AIM",
      locale: "en-US",
      redirect_url: "http://share.aim.com/share/?url=" + postUrl + "&title=" + postTitle
    },
    viadeo: {
      title: "Viadeo",
      locale: "en-US",
      redirect_url: "http://www.viadeo.com/shareit/share/?url=" + postUrl + "&title=" + postTitle
    },
    pinboard_in: {
      title: "Pinboard",
      locale: "en-US",
      redirect_url: "http://pinboard.in/add?url=" + postUrl + "&title=" + postTitle
    },
    blogger_post: {
      title: "Blogger Post",
      locale: "en-US",
      redirect_url: "http://www.blogger.com/blog_this.pyra?t=&u=" + postUrl + "&l&n=" + postTitle
    },
    typepad_post: {
      title: "TypePad Post",
      locale: "en-US",
      redirect_url: "http://www.typepad.com/services/quickpost/post?v=2&qp_show=ac&qp_title=" + postTitle + "&qp_href=" + postUrl + "&qp_text=" + postTitle
    },
    buffer: {
      title: "Buffer",
      locale: "en-US",
      redirect_url: "http://bufferapp.com/add?url=" + postUrl + "&text=" + postTitle
    },
    flipboard: {
      title: "Flipboard",
      locale: "en-US",
      redirect_url: "https://share.flipboard.com/bookmarklet/popout?v=2&url=" + postUrl + "&title=" + postTitle
    },
    pocket: {
      title: "Pocket",
      locale: "en-US",
      redirect_url: "https://readitlaterlist.com/save?url=" + postUrl + "&title=" + postTitle
    },
    fark: {
      title: "Fark",
      locale: "en-US",
      redirect_url: "http://cgi.fark.com/cgi/fark/submit.pl?new_url=" + postUrl
    },
    fintel: {
      title: "Fintel",
      locale: "en-US",
      redirect_url: "https://fintel.io/submit?url=" + postUrl
    },
    yummly: {
      title: "Yummly",
      locale: "en-US",
      redirect_url: "http://www.yummly.com/urb/verify?url=" + postUrl + "&title=" + postTitle
    },
    app_net: {
      title: "App.net",
      locale: "en-US",
      redirect_url: "https://account.app.net/login/"
    },
    balatarin: {
      title: "Balatarin",
      locale: "en-US",
      redirect_url: "https://www.balatarin.com/login"
    },
    bibSonomy: {
      title: "BibSonomy",
      locale: "en-US",
      redirect_url: "http://www.bibsonomy.org/login"
    },
    Bitty_Browser: {
      title: "Bitty Browser",
      locale: "en-US",
      redirect_url: "http://www.bitty.com/manual/?contenttype=&contentvalue=" + postUrl
    },
    Blinklist: {
      title: "Blinklist",
      locale: "en-US",
      redirect_url: "http://blinklist.com/blink?t=" + postTitle + "&d=&u=" + postUrl
    },
    BlogMarks: {
      title: "BlogMarks",
      locale: "en-US",
      redirect_url: "http://blogmarks.net/my/new.php?mini=1&simple=1&title=" + postTitle + "&url=" + postUrl
    },
    Bookmarks_fr: {
      title: "Bookmarks.fr",
      locale: "en-US",
      redirect_url: "http://www.bookmarks.fr/Connexion/?action=add&address=" + postUrl + "&title=" + postTitle
    },
    BuddyMarks: {
      title: "BuddyMarks",
      locale: "en-US",
      redirect_url: "http://buddymarks.com/login.php?bookmark_title=" + postTitle + "&bookmark_url=" + postUrl + "&bookmark_desc=&bookmark_tags="
    },
    Care2_news: {
      title: "Care2 News",
      locale: "en-US",
      redirect_url: "http://www.care2.com/passport/login.html?promoID=10&pg=http://www.care2.com/news/compose?sharehint=news&share[share_type]news&bookmarklet=Y&share[title]=" + postTitle + "&share[link_url]=" + postUrl + "&share[content]="
    },
    Diary_Ru: {
      title: "Diary.Ru",
      locale: "en-US",
      redirect_url: "http://www.diary.ru/?newpost&title=" + postTitle + "&text=" + postUrl
    },
    Folkd: {
      title: "Folkd",
      locale: "en-US",
      redirect_url: "http://www.folkd.com/page/social-bookmarking.html?addurl=" + postUrl
    },
    Hatena: {
      title: "Hatena",
      locale: "en-US",
      redirect_url: "http://b.hatena.ne.jp/bookmarklet?url=" + postUrl + "&btitle=" + postTitle
    },
    Jamespot: {
      title: "Jamespot",
      locale: "en-US",
      redirect_url: "//my.jamespot.com/"
    },
    Kakao: {
      title: "Kakao",
      locale: "en-US",
      redirect_url: "https://story.kakao.com/share?url=" + postUrl
    },
    Kindle_It: {
      title: "Kindle_It",
      locale: "en-US",
      redirect_url: "//fivefilters.org/kindle-it/send.php?url=" + postUrl
    },
    Known: {
      title: "Known",
      locale: "en-US",
      redirect_url: "https://withknown.com/share/?url=" + postUrl + "&title=" + postTitle
    },
    Line: {
      title: "Line",
      locale: "en-US",
      redirect_url: "https://social-plugins.line.me/lineit/share?url=" + postUrl
    },
    LiveJournal: {
      title: "LiveJournal",
      locale: "en-US",
      redirect_url: "http://www.livejournal.com/update.bml?subject=" + postTitle + "&event=" + postUrl
    },
    Mail_Ru: {
      title: "Mail.Ru",
      locale: "en-US",
      redirect_url: "https://connect.mail.ru/share?share_url=" + postUrl
    },
    Mendeley: {
      title: "Mendeley",
      locale: "en-US",
      redirect_url: "https://www.mendeley.com/sign-in/"
    },
    Meneame: {
      title: "Meneame",
      locale: "en-US",
      redirect_url: "https://www.meneame.net/submit.php?url=" + postUrl
    },
    MeWe: {
      title: "MeWe",
      locale: "en-US",
      redirect_url: "https://mewe.com/share?link=" + postUrl
    },
    Mix: {
      title: "Mix",
      locale: "en-US",
      redirect_url: "https://mix.com/mixit?url=" + postUrl
    },
    Mixi: {
      title: "Mixi",
      locale: "en-US",
      redirect_url: "https://mixi.jp/share.pl?mode=login&u=" + postUrl
    },
    MySpace: {
      title: "MySpace",
      locale: "en-US",
      redirect_url: "https://myspace.com/post?u=" + encodeURIComponent(postUrl) + "&t=" + postTitle + "&l=3&c=" + postTitle
    },
    Netvouz: {
      title: "Netvouz",
      locale: "en-US",
      redirect_url: "http://www.netvouz.com/action/submitBookmark?url=" + postUrl + "&title=" + postTitle + "&popup=no&description="
    },
    Odnoklassniki: {
      title: "Odnoklassniki",
      locale: "en-US",
      redirect_url: "https://connect.ok.ru/dk?cmd=WidgetSharePreview&st.cmd=WidgetSharePreview&st.shareUrl=" + postUrl + "&st.client_id=-1"
    },
    Outlook_com: {
      title: "Outlook.com",
      locale: "en-US",
      redirect_url: "https://mail.live.com/default.aspx?rru=compose?subject=" + postTitle + "&body=" + postUrl + "&lc=1033&id=64855&mkt=en-us&cbcxt=mai"
    },
    Protopage_Bookmarks: {
      title: "Protopage_Bookmarks",
      locale: "en-US",
      redirect_url: "http://www.protopage.com/add-button-site?url=" + postUrl + "&label=&type=page"
    },
    Pusha: {
      title: "Pusha",
      locale: "en-US",
      redirect_url: "//www.pusha.se/posta?url=" + postUrl
    },
    Qzone: {
      title: "Qzone",
      locale: "en-US",
      redirect_url: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + postUrl
    },
    Rediff_MyPage: {
      title: "Rediff MyPage",
      locale: "en-US",
      redirect_url: "//share.rediff.com/bookmark/addbookmark?bookmarkurl=" + postUrl + "&title=" + postTitle
    },
    Renren: {
      title: "Renren",
      locale: "en-US",
      redirect_url: "//www.connect.renren.com/share/sharer?url=" + postUrl + "&title=" + postTitle
    },
    Sina_Weibo: {
      title: "Sina Weibo",
      locale: "en-US",
      redirect_url: "http://service.weibo.com/share/share.php?url=" + postUrl + "&title=" + postTitle
    },
    SiteJot: {
      title: "SiteJot",
      locale: "en-US",
      redirect_url: "http://www.sitejot.com/loginform.php?iSiteAdd=&iSiteDes="
    },
    Slashdot: {
      title: "Slashdot",
      locale: "en-US",
      redirect_url: "//slashdot.org/submission?url=" + postUrl
    },
    StockTwits: {
      title: "StockTwits",
      locale: "en-US",
      redirect_url: "https://stocktwits.com/widgets/share?body=" + postTitle + " " + postUrl
    },
    Svejo: {
      title: "Svejo",
      locale: "en-US",
      redirect_url: "https://svejo.net/story/submit_by_url?url=" + postUrl + "&title=" + postTitle + "&summary="
    },
    Symbaloo_Feeds: {
      title: "Symbaloo_Feeds",
      locale: "en-US",
      redirect_url: "//www.symbaloo.com/"
    },
    Tuenti: {
      title: "Tuenti",
      locale: "en-US",
      redirect_url: "https://www.tuenti.com/share?p=b5dd6602&url=" + postUrl
    },
    Twiddla: {
      title: "Twiddla",
      locale: "en-US",
      redirect_url: "//www.twiddla.com/New.aspx?url=" + postUrl + "&title=" + postTitle
    },
    Webnews: {
      title: "Webnews",
      locale: "en-US",
      redirect_url: "//www.webnews.de/login"
    },
    Wykop: {
      title: "Wykop",
      locale: "en-US",
      redirect_url: "//www.wykop.pl/dodaj?url=" + postUrl + "&title=" + postTitle
    },
    Xing: {
      title: "Xing",
      locale: "en-US",
      redirect_url: "https://www.xing.com/spi/shares/new?cb=0&url=" + postUrl
    },
    Yoolink: {
      title: "Yoolink",
      locale: "en-US",
      redirect_url: "//yoolink.to/addorshare?url_value=" + postUrl + "&title=" + postTitle
    }
  };
  var heateorSssMoreSharingServicesHtml = '<button id="heateor_sss_sharing_popup_close" class="close-button separated"><img src="' + heateorSssCloseIconPath + '" /></button><div id="heateor_sss_sharing_more_content" data-href="' + decodeURIComponent(postUrl) + '"><div class="filter"><input type="text" onkeyup="heateorSssFilterSharing(this.value.trim())" placeholder="Search" class="search"></div><div class="all-services"><ul class="mini">';

  for (var i in heateorSssMoreSharingServices) {
    var tempTitle = heateorSssCapitaliseFirstLetter(heateorSssMoreSharingServices[i].title.replace(/[_. ]/g, ""));
    heateorSssMoreSharingServicesHtml += '<li><a rel="nofollow" class="heateorSss' + i + 'Share" title="' + heateorSssMoreSharingServices[i].title + '" alt="' + heateorSssMoreSharingServices[i].title + '" ';

    if (heateorSssMoreSharingServices[i].bookmarklet_url) {
      heateorSssMoreSharingServicesHtml += 'href="' + heateorSssMoreSharingServices[i].bookmarklet_url + '" ';
    } else if (heateorSssMoreSharingServices[i].redirect_url) {
      heateorSssMoreSharingServicesHtml += 'onclick="heateorSssPopup(\'' + heateorSssMoreSharingServices[i].redirect_url + '\')" href="javascript:void(0)" ';
    } else {
      heateorSssMoreSharingServicesHtml += 'href="javascript:void(0)" ';
    }

    heateorSssMoreSharingServicesHtml += '"><i style="width:22px;height:22px" title="' + heateorSssMoreSharingServices[i].title + '" class="heateorSssSharing heateorSss' + tempTitle + 'Background"><ss style="display:block;width:100%;height:100%;" class="heateorSssSharingSvg heateorSss' + tempTitle + 'Svg"></ss></i>' + heateorSssMoreSharingServices[i].title + '</a></li>';
  }

  heateorSssMoreSharingServicesHtml += concate;
  var mainDiv = document.createElement('div');
  mainDiv.innerHTML = heateorSssMoreSharingServicesHtml;
  mainDiv.setAttribute('id', 'heateor_sss_sharing_more_providers');
  var bgDiv = document.createElement('div');
  bgDiv.setAttribute('id', 'heateor_sss_popup_bg');
  jQuery('body').append(mainDiv).append(bgDiv);

  document.getElementById('heateor_sss_popup_bg').onclick = document.getElementById('heateor_sss_sharing_popup_close').onclick = function () {
    mainDiv.parentNode.removeChild(mainDiv);
    bgDiv.parentNode.removeChild(bgDiv);
  };
}

if (heateorSssHorizontalSharingCountEnable || heateorSssVerticalSharingCountEnable) {
  // get sharing counts on window load
  heateorSssLoadEvent(function () {
    // sharing counts
    heateorSssCallAjax(function () {
      heateorSssGetSharingCounts();
    });
  });
}
/**
 * Search sharing services
 */


function heateorSssFilterSharing(val) {
  jQuery('ul.mini li a').each(function () {
    if (jQuery(this).text().toLowerCase().indexOf(val.toLowerCase()) != -1) {
      jQuery(this).parent().css('display', 'block');
    } else {
      jQuery(this).parent().css('display', 'none');
    }
  });
}

;
var heateorSssFacebookTargetUrls = [];
/**
 * Get sharing counts
 */

function heateorSssGetSharingCounts() {
  var targetUrls = [];
  jQuery('.heateor_sss_sharing_container').each(function () {
    if (typeof jQuery(this).attr('heateor-sss-no-counts') == 'undefined') {
      var currentTargetUrl = jQuery(this).attr('heateor-sss-data-href');

      if (currentTargetUrl != null && jQuery.inArray(currentTargetUrl, heateorSssUrlCountFetched) == -1) {
        targetUrls.push(currentTargetUrl);
        heateorSssUrlCountFetched.push(currentTargetUrl);
      }
    }
  });

  if (targetUrls.length == 0) {
    return;
  }

  jQuery.ajax({
    type: 'GET',
    dataType: 'json',
    url: heateorSssSharingAjaxUrl,
    data: {
      action: 'heateor_sss_sharing_count',
      urls: targetUrls
    },
    success: function success(data, textStatus, XMLHttpRequest) {
      if (data.status == 1) {
        if (data.facebook) {
          heateorSssFacebookTargetUrls = data.facebook_urls;
        }

        for (var i in data.message) {
          var sharingContainers = jQuery("div[heateor-sss-data-href='" + i + "']");
          jQuery(sharingContainers).each(function () {
            var totalCount = 0;

            for (var j in data.message[i]) {
              var sharingCount = parseInt(data.message[i][j]) || 0;
              var targetElement = jQuery(this).find('.heateor_sss_' + j + '_count');

              if (jQuery(targetElement).attr('sss_st_count')) {
                sharingCount = parseInt(sharingCount) + parseInt(jQuery(targetElement).attr('sss_st_count'));
              }

              totalCount += parseInt(sharingCount);

              if (sharingCount < 1) {
                continue;
              }

              jQuery(targetElement).html(heateorSssCalculateApproxCount(sharingCount)).css({
                'visibility': 'visible',
                'display': 'block'
              });

              if (typeof heateorSssReduceHorizontalSvgWidth != 'undefined' && jQuery(this).hasClass('heateor_sss_horizontal_sharing') || typeof heateorSssReduceVerticalSvgWidth != 'undefined' && jQuery(this).hasClass('heateor_sss_vertical_sharing')) {
                jQuery(targetElement).parents('li').find('.heateorSssSharingSvg').css('float', 'left');
              }

              if (typeof heateorSssReduceHorizontalSvgHeight != 'undefined' && jQuery(this).hasClass('heateor_sss_horizontal_sharing') || typeof heateorSssReduceVerticalSvgHeight != 'undefined' && jQuery(this).hasClass('heateor_sss_vertical_sharing')) {
                jQuery(targetElement).parents('li').find('.heateorSssSharingSvg').css('marginTop', '0');
              }
            }

            var totalCountContainer = jQuery(this).find('.heateorSssTCBackground'),
                totalShares = heateorSssCalculateApproxCount(totalCount);
            jQuery(totalCountContainer).each(function () {
              var containerHeight = jQuery(this).css('height');
              jQuery(this).html('<div class="heateorSssTotalShareCount" style="font-size: ' + parseInt(containerHeight) * 62 / 100 + 'px">' + totalShares + '</div><div class="heateorSssTotalShareText" style="font-size: ' + parseInt(containerHeight) * 38 / 100 + 'px">' + (totalCount == 0 || totalCount > 1 ? heateorSssSharesText : heateorSssShareText) + '</div>').css('visibility', 'visible');
            });
          });
        }

        if (heateorSssFacebookTargetUrls.length != 0) {
          heateorSssFetchFacebookShares(heateorSssFacebookTargetUrls);
        }
      }
    }
  });
}

function heateorSssFetchFacebookShares(targetUrls) {
  var loopCounter = 0;

  for (var i in targetUrls) {
    for (var j in targetUrls[i]) {
      loopCounter++;
      heateorSssFBShareJSONCall(targetUrls[i][j], loopCounter, targetUrls[0].length * targetUrls.length, targetUrls[0][j]);
    }
  }
}

function heateorSssFBShareJSONCall(targetUrl, loopCounter, targetUrlsLength, dataHref) {
  jQuery.getJSON('//graph.facebook.com/?id=' + targetUrl, function (data) {
    if (data.share && data.share.share_count >= 0) {
      var sharingContainers = jQuery("div[heateor-sss-data-href='" + dataHref + "']");
      jQuery(sharingContainers).each(function () {
        var targetElement = jQuery(this).find('.heateor_sss_facebook_count');
        var facebookBackground = jQuery(this).find('i.heateorSssFacebookBackground');
        var sharingCount = parseInt(data.share.share_count);

        if (jQuery(targetElement).attr('sss_st_count') !== undefined) {
          sharingCount += parseInt(jQuery(targetElement).attr('sss_st_count'));
        }

        if (sharingCount > 0) {
          if (typeof jQuery(facebookBackground).attr('heateor-sss-fb-shares') == 'undefined') {
            jQuery(targetElement).html(heateorSssCalculateApproxCount(sharingCount)).css({
              'visibility': 'visible',
              'display': 'block'
            });
            jQuery(facebookBackground).attr('heateor-sss-fb-shares', sharingCount);
          } else if (typeof jQuery(facebookBackground).attr('heateor-sss-fb-shares') != 'undefined') {
            var tempShareCount = parseInt(jQuery(facebookBackground).attr('heateor-sss-fb-shares'));
            jQuery(facebookBackground).attr('heateor-sss-fb-shares', sharingCount + tempShareCount);
            jQuery(targetElement).html(heateorSssCalculateApproxCount(sharingCount + tempShareCount));
          }

          if (typeof heateorSssReduceHorizontalSvgWidth != 'undefined' && jQuery(this).hasClass('heateor_sss_horizontal_sharing') || typeof heateorSssReduceVerticalSvgWidth != 'undefined' && jQuery(this).hasClass('heateor_sss_vertical_sharing')) {
            jQuery(targetElement).parents('li').find('.heateorSssSharingSvg').css('float', 'left');
          }

          if (typeof heateorSssReduceHorizontalSvgHeight != 'undefined' && jQuery(this).hasClass('heateor_sss_horizontal_sharing') || typeof heateorSssReduceVerticalSvgHeight != 'undefined' && jQuery(this).hasClass('heateor_sss_vertical_sharing')) {
            jQuery(targetElement).parents('li').find('.heateorSssSharingSvg').css('marginTop', '0');
          }

          var totalCountContainer = jQuery(this).find('.heateorSssTCBackground');
          jQuery(totalCountContainer).each(function () {
            var totalShareCountElem = jQuery(this).find('.heateorSssTotalShareCount');
            var totalShareCount = jQuery(totalShareCountElem).text();
            var newTotalCount = heateorSssCalculateActualCount(totalShareCount) + sharingCount;
            jQuery(totalShareCountElem).text(heateorSssCalculateApproxCount(newTotalCount));
            jQuery(this).find('.heateorSssTotalShareText').text(newTotalCount == 0 || newTotalCount > 1 ? heateorSssSharesText : heateorSssShareText);
          });
        }
      });
    }

    if (loopCounter == targetUrlsLength) {
      setTimeout(function () {
        var facebookShares = {};

        for (var i in heateorSssFacebookTargetUrls[0]) {
          var sharingContainers = jQuery("div[heateor-sss-data-href='" + heateorSssFacebookTargetUrls[0][i] + "']");
          jQuery(sharingContainers).each(function () {
            var facebookCountElement = jQuery(this).find('.heateor_sss_facebook_count');
            var facebookCountElementBg = jQuery(this).find('i.heateorSssFacebookBackground');
            var shareCountString = typeof jQuery(facebookCountElementBg).attr('heateor-sss-fb-shares') != 'undefined' ? jQuery(facebookCountElementBg).attr('heateor-sss-fb-shares').trim() : '';

            if (shareCountString != '') {
              var shareCount = parseInt(heateorSssCalculateActualCount(shareCountString));

              if (jQuery(facebookCountElement).attr('sss_st_count') !== undefined) {
                var startingCount = parseInt(jQuery(facebookCountElement).attr('sss_st_count').trim());
                shareCount = Math.abs(shareCount - startingCount);
              }

              facebookShares[heateorSssFacebookTargetUrls[0][i]] = shareCount;
              return;
            }
          });
        }

        if (!jQuery.isEmptyObject(facebookShares)) {
          heateorSssSaveFacebookShares(facebookShares);
        }
      }, 1000);
    }
  });
}

function heateorSssSaveFacebookShares(facebookShares) {
  jQuery.ajax({
    type: 'GET',
    dataType: 'json',
    url: heateorSssSharingAjaxUrl,
    data: {
      action: 'heateor_sss_save_facebook_shares',
      share_counts: facebookShares
    },
    success: function success(data, textStatus, XMLHttpRequest) {}
  });
}

function heateorSssCalculateApproxCount(sharingCount) {
  // round to one decimal
  if (sharingCount > 999 && sharingCount < 10000) {
    sharingCount = Math.round(sharingCount / 100) / 10 + 'K';
  } else if (sharingCount > 9999 && sharingCount < 100000) {
    sharingCount = Math.round(sharingCount / 100) / 10 + 'K';
  } else if (sharingCount > 99999 && sharingCount < 1000000) {
    sharingCount = Math.round(sharingCount / 100) / 10 + 'K';
  } else if (sharingCount > 999999) {
    sharingCount = Math.round(sharingCount / 100000) / 10 + 'M';
  }

  return sharingCount;
}

function heateorSssCalculateActualCount(sharingCount) {
  if (sharingCount.indexOf('K') > 0) {
    sharingCount = sharingCount.replace('K', '') * 1000;
  } else if (sharingCount.indexOf('M') > 0) {
    sharingCount = sharingCount.replace('M', '') * 1000000;
  }

  return parseInt(sharingCount);
}

function heateorSssCapitaliseFirstLetter(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}

jQuery(function () {
  var heateorSssWhatsappJSAPI = heateorSssDetermineWhatsappShareAPI(false);
  var classes = ['heateor_sss_vertical_sharing', 'heateor_sss_vertical_counter'];

  for (var i = 0; i < classes.length; i++) {
    if (jQuery('.' + classes[i]).length) {
      jQuery('.' + classes[i]).each(function () {
        var verticalSharingHtml = jQuery(this).html();

        if (jQuery(this).attr('style').indexOf('right') >= 0) {
          var removeClass = 'heateorSssPushIn',
              margin = 'Right',
              alignment = 'right',
              addClass = 'heateorSssPullOut';
        } else {
          var removeClass = 'heateorSssPullOut',
              margin = 'Left',
              alignment = 'left',
              addClass = 'heateorSssPushIn';
        }

        jQuery(this).html(verticalSharingHtml + '<div title="Hide" style="float:' + alignment + '" onclick="heateorSssHideSharing(this, \'' + removeClass + '\', \'' + addClass + '\',\'' + margin + '\', \'' + alignment + '\')" class="heateorSssSharingArrow ' + removeClass + '"></div>');
      });
    }
  }

  if (heateorSssMobileStickySharingEnabled == 1) {
    if (jQuery('div.heateor_sss_vertical_sharing').length) {
      // insert div before </body>
      jQuery(document.body).append("<div class='heateor_sss_mobile_footer'></div>");
    }
  }

  var heateorSssClipboard = new ClipboardJS('.heateorSssCopyLinkBackground, .heateorSssCopyLinkShare, .heateorSssCopyLinkSvg', {
    text: function text(trigger) {
      if (jQuery(trigger).hasClass('heateorSssCopyLinkShare')) {
        var element = trigger.parentElement.parentElement.parentElement.parentElement;
        var url = jQuery(element).attr("data-href") || "";
      } else if (jQuery(trigger).hasClass('heateorSssCopyLinkSvg')) {
        var element = trigger.parentElement.parentElement.parentElement.parentElement;
        var url = jQuery(element).attr("heateor-sss-data-href") || "";

        if (!url) {
          var element = trigger.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
          var url = jQuery(element).attr("data-href") || "";
        }
      }

      return url;
    }
  });
  heateorSssClipboard.on('success', function (e) {
    alert(heateorSssCopyLinkMessage);
  });
});

function heateorSssHideSharing(elem, removeClass, addClass, margin, alignment) {
  var animation = {},
      counter = jQuery(elem).parent().hasClass('heateor_sss_vertical_counter'),
      offset = parseInt(jQuery(elem).parent().css('width')) + 10 - (counter ? 16 : 0);
  var ssOffset = jQuery(elem).parent().attr('ss-offset');

  if (ssOffset) {
    var savedOffset = parseInt(ssOffset);
  } else {
    var savedOffset = counter ? heateorSssCounterOffset : heateorSssSharingOffset;
  }

  if (jQuery(elem).attr('title') == 'Hide') {
    animation[alignment] = "-=" + (offset + savedOffset);
    jQuery(elem).parent().animate(animation, 400, function () {
      jQuery(elem).removeClass(removeClass).addClass(addClass).attr('title', 'Share');

      if (counter) {
        var cssFloat = alignment == 'left' ? 'right' : 'left';
        jQuery(elem).css('float', cssFloat);
      } else {
        jQuery(elem).css('margin' + margin, offset + 'px');
      }
    });
  } else {
    animation[alignment] = "+=" + (offset + savedOffset);
    jQuery(elem).parent().animate(animation, 400, function () {
      jQuery(elem).removeClass(addClass).addClass(removeClass).attr('title', 'Hide');

      if (counter) {
        jQuery(elem).css('float', alignment);
      } else {
        jQuery(elem).css('margin' + margin, '0px');
      }
    });
  }
}
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */


!function (t, e) {
  "object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module)) ? module.exports = e() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  return o = {}, r.m = n = [function (t, e) {
    t.exports = function (t) {
      var e;
      if ("SELECT" === t.nodeName) t.focus(), e = t.value;else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
        var n = t.hasAttribute("readonly");
        n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;
      } else {
        t.hasAttribute("contenteditable") && t.focus();
        var o = window.getSelection(),
            r = document.createRange();
        r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString();
      }
      return e;
    };
  }, function (t, e) {
    function n() {}

    n.prototype = {
      on: function on(t, e, n) {
        var o = this.e || (this.e = {});
        return (o[t] || (o[t] = [])).push({
          fn: e,
          ctx: n
        }), this;
      },
      once: function once(t, e, n) {
        var o = this;

        function r() {
          o.off(t, r), e.apply(n, arguments);
        }

        return r._ = e, this.on(t, r, n);
      },
      emit: function emit(t) {
        for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) {
          n[o].fn.apply(n[o].ctx, e);
        }

        return this;
      },
      off: function off(t, e) {
        var n = this.e || (this.e = {}),
            o = n[t],
            r = [];
        if (o && e) for (var i = 0, a = o.length; i < a; i++) {
          o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
        }
        return r.length ? n[t] = r : delete n[t], this;
      }
    }, t.exports = n, t.exports.TinyEmitter = n;
  }, function (t, e, n) {
    var d = n(3),
        h = n(4);

    t.exports = function (t, e, n) {
      if (!t && !e && !n) throw new Error("Missing required arguments");
      if (!d.string(e)) throw new TypeError("Second argument must be a String");
      if (!d.fn(n)) throw new TypeError("Third argument must be a Function");
      if (d.node(t)) return s = e, f = n, (u = t).addEventListener(s, f), {
        destroy: function destroy() {
          u.removeEventListener(s, f);
        }
      };
      if (d.nodeList(t)) return a = t, c = e, l = n, Array.prototype.forEach.call(a, function (t) {
        t.addEventListener(c, l);
      }), {
        destroy: function destroy() {
          Array.prototype.forEach.call(a, function (t) {
            t.removeEventListener(c, l);
          });
        }
      };
      if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i);
      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
      var o, r, i, a, c, l, u, s, f;
    };
  }, function (t, n) {
    n.node = function (t) {
      return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
    }, n.nodeList = function (t) {
      var e = Object.prototype.toString.call(t);
      return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]));
    }, n.string = function (t) {
      return "string" == typeof t || t instanceof String;
    }, n.fn = function (t) {
      return "[object Function]" === Object.prototype.toString.call(t);
    };
  }, function (t, e, n) {
    var a = n(5);

    function i(t, e, n, o, r) {
      var i = function (e, n, t, o) {
        return function (t) {
          t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t);
        };
      }.apply(this, arguments);

      return t.addEventListener(n, i, r), {
        destroy: function destroy() {
          t.removeEventListener(n, i, r);
        }
      };
    }

    t.exports = function (t, e, n, o, r) {
      return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
        return i(t, e, n, o, r);
      }));
    };
  }, function (t, e) {
    if ("undefined" != typeof Element && !Element.prototype.matches) {
      var n = Element.prototype;
      n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
    }

    t.exports = function (t, e) {
      for (; t && 9 !== t.nodeType;) {
        if ("function" == typeof t.matches && t.matches(e)) return t;
        t = t.parentNode;
      }
    };
  }, function (t, e, n) {
    "use strict";

    n.r(e);
    var o = n(0),
        r = n.n(o),
        i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    };

    function a(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    function c(t) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, c), this.resolveOptions(t), this.initSelection();
    }

    var l = (function (t, e, n) {
      return e && a(t.prototype, e), n && a(t, n), t;
    }(c, [{
      key: "resolveOptions",
      value: function value(t) {
        var e = 0 < arguments.length && void 0 !== t ? t : {};
        this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = "";
      }
    }, {
      key: "initSelection",
      value: function value() {
        this.text ? this.selectFake() : this.target && this.selectTarget();
      }
    }, {
      key: "selectFake",
      value: function value() {
        var t = this,
            e = "rtl" == document.documentElement.getAttribute("dir");
        this.removeFake(), this.fakeHandlerCallback = function () {
          return t.removeFake();
        }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
        var n = window.pageYOffset || document.documentElement.scrollTop;
        this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = r()(this.fakeElem), this.copyText();
      }
    }, {
      key: "removeFake",
      value: function value() {
        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);
      }
    }, {
      key: "selectTarget",
      value: function value() {
        this.selectedText = r()(this.target), this.copyText();
      }
    }, {
      key: "copyText",
      value: function value() {
        var e = void 0;

        try {
          e = document.execCommand(this.action);
        } catch (t) {
          e = !1;
        }

        this.handleResult(e);
      }
    }, {
      key: "handleResult",
      value: function value(t) {
        this.emitter.emit(t ? "success" : "error", {
          action: this.action,
          text: this.selectedText,
          trigger: this.trigger,
          clearSelection: this.clearSelection.bind(this)
        });
      }
    }, {
      key: "clearSelection",
      value: function value() {
        this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();
      }
    }, {
      key: "destroy",
      value: function value() {
        this.removeFake();
      }
    }, {
      key: "action",
      set: function set(t) {
        var e = 0 < arguments.length && void 0 !== t ? t : "copy";
        if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
      },
      get: function get() {
        return this._action;
      }
    }, {
      key: "target",
      set: function set(t) {
        if (void 0 !== t) {
          if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
          if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
          if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
          this._target = t;
        }
      },
      get: function get() {
        return this._target;
      }
    }]), c),
        u = n(1),
        s = n.n(u),
        f = n(2),
        d = n.n(f),
        h = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
      return _typeof(t);
    } : function (t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
    },
        p = function p(t, e, n) {
      return e && y(t.prototype, e), n && y(t, n), t;
    };

    function y(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
      }
    }

    var m = (function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }(v, s.a), p(v, [{
      key: "resolveOptions",
      value: function value(t) {
        var e = 0 < arguments.length && void 0 !== t ? t : {};
        this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === h(e.container) ? e.container : document.body;
      }
    }, {
      key: "listenClick",
      value: function value(t) {
        var e = this;
        this.listener = d()(t, "click", function (t) {
          return e.onClick(t);
        });
      }
    }, {
      key: "onClick",
      value: function value(t) {
        var e = t.delegateTarget || t.currentTarget;
        this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l({
          action: this.action(e),
          target: this.target(e),
          text: this.text(e),
          container: this.container,
          trigger: e,
          emitter: this
        });
      }
    }, {
      key: "defaultAction",
      value: function value(t) {
        return b("action", t);
      }
    }, {
      key: "defaultTarget",
      value: function value(t) {
        var e = b("target", t);
        if (e) return document.querySelector(e);
      }
    }, {
      key: "defaultText",
      value: function value(t) {
        return b("text", t);
      }
    }, {
      key: "destroy",
      value: function value() {
        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);
      }
    }], [{
      key: "isSupported",
      value: function value(t) {
        var e = 0 < arguments.length && void 0 !== t ? t : ["copy", "cut"],
            n = "string" == typeof e ? [e] : e,
            o = !!document.queryCommandSupported;
        return n.forEach(function (t) {
          o = o && !!document.queryCommandSupported(t);
        }), o;
      }
    }]), v);

    function v(t, e) {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, v);

      var n = function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
      }(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this));

      return n.resolveOptions(e), n.listenClick(t), n;
    }

    function b(t, e) {
      var n = "data-clipboard-" + t;
      if (e.hasAttribute(n)) return e.getAttribute(n);
    }

    e["default"] = m;
  }], r.c = o, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) {
      r.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
    }
    return n;
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return r.d(e, "a", e), e;
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.p = "", r(r.s = 6)["default"];

  function r(t) {
    if (o[t]) return o[t].exports;
    var e = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports;
  }

  var n, o;
});

function heateorSssPopup(e) {
  window.open(e, "popUpWindow", "height=400,width=600,left=400,top=100,resizable,scrollbars,toolbar=0,personalbar=0,menubar=no,location=no,directories=no,status");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./parallex */ "./src/js/parallex.js");

__webpack_require__(/*! ./jquery.rateit */ "./src/js/jquery.rateit.js");

__webpack_require__(/*! ./sassy-social-share-public */ "./src/js/sassy-social-share-public.js");

/***/ }),

/***/ 1:
/*!********************************!*\
  !*** multi ./src/js/vendor.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nets/SSD/Development/Web/Octobercms/cws/themes/cws/src/js/vendor.js */"./src/js/vendor.js");


/***/ })

/******/ });