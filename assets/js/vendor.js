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

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
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

/***/ 1:
/*!********************************!*\
  !*** multi ./src/js/vendor.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nets/SSD/Development/Web/Oct/themes/cookwithsousou/src/js/vendor.js */"./src/js/vendor.js");


/***/ })

/******/ });