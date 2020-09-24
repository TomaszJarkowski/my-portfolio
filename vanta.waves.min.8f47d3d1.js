// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@babel/runtime/helpers/setPrototypeOf.js":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
},{}],"node_modules/@babel/runtime/helpers/inherits.js":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;
},{"./setPrototypeOf":"node_modules/@babel/runtime/helpers/setPrototypeOf.js"}],"node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
},{}],"node_modules/@babel/runtime/helpers/assertThisInitialized.js":[function(require,module,exports) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;
},{}],"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":[function(require,module,exports) {
var _typeof = require("../helpers/typeof");

var assertThisInitialized = require("./assertThisInitialized");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;
},{"../helpers/typeof":"node_modules/@babel/runtime/helpers/typeof.js","./assertThisInitialized":"node_modules/@babel/runtime/helpers/assertThisInitialized.js"}],"node_modules/@babel/runtime/helpers/getPrototypeOf.js":[function(require,module,exports) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
},{}],"node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],"node_modules/@babel/runtime/helpers/createClass.js":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],"vanta-master/dist/vanta.waves.min.js":[function(require,module,exports) {
var define;
"use strict";

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2.default)(exports)) && "object" == (typeof module === "undefined" ? "undefined" : (0, _typeof2.default)(module)) ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : (0, _typeof2.default)(exports)) ? exports._vantaEffect = e() : t._vantaEffect = e();
}("undefined" != typeof self ? self : void 0, function () {
  return function (t) {
    var e = {};

    function i(s) {
      if (e[s]) return e[s].exports;
      var o = e[s] = {
        i: s,
        l: !1,
        exports: {}
      };
      return t[s].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
    }

    return i.m = t, i.c = e, i.d = function (t, e, s) {
      i.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: s
      });
    }, i.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, i.t = function (t, e) {
      if (1 & e && (t = i(t)), 8 & e) return t;
      if (4 & e && "object" == (0, _typeof2.default)(t) && t && t.__esModule) return t;
      var s = Object.create(null);
      if (i.r(s), Object.defineProperty(s, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var o in t) {
        i.d(s, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return s;
    }, i.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return i.d(e, "a", e), e;
    }, i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, i.p = "", i(i.s = 17);
  }({
    0: function _(t, e, i) {
      "use strict";

      function s(t, e) {
        for (var _i in e) {
          e.hasOwnProperty(_i) && (t[_i] = e[_i]);
        }

        return t;
      }

      function o() {
        return "undefined" != typeof navigator ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600 : null;
      }

      i.d(e, "c", function () {
        return s;
      }), i.d(e, "e", function () {
        return o;
      }), i.d(e, "i", function () {
        return n;
      }), i.d(e, "h", function () {
        return r;
      }), i.d(e, "g", function () {
        return h;
      }), i.d(e, "f", function () {
        return a;
      }), i.d(e, "a", function () {
        return c;
      }), i.d(e, "b", function () {
        return u;
      }), i.d(e, "d", function () {
        return l;
      }), Number.prototype.clamp = function (t, e) {
        return Math.min(Math.max(this, t), e);
      };

      var n = function n(t) {
        return t[Math.floor(Math.random() * t.length)];
      };

      function r(t, e) {
        return null == t && (t = 0), null == e && (e = 1), t + Math.random() * (e - t);
      }

      function h(t, e) {
        return null == t && (t = 0), null == e && (e = 1), Math.floor(t + Math.random() * (e - t + 1));
      }

      var a = function a(t) {
        return document.querySelector(t);
      },
          c = function c(t) {
        return "number" == typeof t ? "#" + ("00000" + t.toString(16)).slice(-6) : t;
      },
          u = function u(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var i = c(t),
            s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),
            o = s ? {
          r: parseInt(s[1], 16),
          g: parseInt(s[2], 16),
          b: parseInt(s[3], 16)
        } : null;
        return "rgba(" + o.r + "," + o.g + "," + o.b + "," + e + ")";
      },
          l = function l(t) {
        return .299 * t.r + .587 * t.g + .114 * t.b;
      };
    },
    1: function _(t, e, i) {
      "use strict";

      i.d(e, "a", function () {
        return r;
      });
      var s = i(0);
      var o = "object" == (typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window));
      var n = o && window.THREE || {};
      o && !window.VANTA && (window.VANTA = {});
      var r = o && window.VANTA || {};
      r.register = function (t, e) {
        return r[t] = function (t) {
          return new e(t);
        };
      }, r.version = "0.5.18";

      var h = function h() {
        return Array.prototype.unshift.call(arguments, "[VANTA]"), console.error.apply(this, arguments);
      };

      r.VantaBase = /*#__PURE__*/function () {
        function _class() {
          var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          (0, _classCallCheck2.default)(this, _class);
          if (!o) return !1;
          r.current = this, this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this), this.windowTouchWrapper = this.windowTouchWrapper.bind(this), this.windowGyroWrapper = this.windowGyroWrapper.bind(this), this.resize = this.resize.bind(this), this.animationLoop = this.animationLoop.bind(this), this.restart = this.restart.bind(this);
          var e = "function" == typeof this.getDefaultOptions ? this.getDefaultOptions() : this.defaultOptions;
          if (this.options = Object(s.c)({
            mouseControls: !0,
            touchControls: !0,
            gyroControls: !1,
            minHeight: 200,
            minWidth: 200,
            scale: 1,
            scaleMobile: 1
          }, e), (t instanceof HTMLElement || "string" == typeof t) && (t = {
            el: t
          }), Object(s.c)(this.options, t), this.options.THREE && (n = this.options.THREE), this.el = this.options.el, null == this.el) h('Instance needs "el" param!');else if (!(this.options.el instanceof HTMLElement)) {
            var _t = this.el;
            if (this.el = Object(s.f)(_t), !this.el) return void h("Cannot find element", _t);
          }
          this.prepareEl(), this.initThree(), this.setSize();

          try {
            this.init();
          } catch (t) {
            return h("Init error", t), this.renderer && this.renderer.domElement && this.el.removeChild(this.renderer.domElement), void (this.options.backgroundColor && (console.log("[VANTA] Falling back to backgroundColor"), this.el.style.background = Object(s.a)(this.options.backgroundColor)));
          }

          this.initMouse(), this.resize(), this.animationLoop();
          var i = window.addEventListener;
          i("resize", this.resize), window.requestAnimationFrame(this.resize), this.options.mouseControls && (i("scroll", this.windowMouseMoveWrapper), i("mousemove", this.windowMouseMoveWrapper)), this.options.touchControls && (i("touchstart", this.windowTouchWrapper), i("touchmove", this.windowTouchWrapper)), this.options.gyroControls && i("deviceorientation", this.windowGyroWrapper);
        }

        (0, _createClass2.default)(_class, [{
          key: "setOptions",
          value: function setOptions() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            Object(s.c)(this.options, t), this.triggerMouseMove();
          }
        }, {
          key: "prepareEl",
          value: function prepareEl() {
            var t, e;
            if ("undefined" != typeof Node && Node.TEXT_NODE) for (t = 0; t < this.el.childNodes.length; t++) {
              var _e = this.el.childNodes[t];

              if (_e.nodeType === Node.TEXT_NODE) {
                var _t2 = document.createElement("span");

                _t2.textContent = _e.textContent, _e.parentElement.insertBefore(_t2, _e), _e.remove();
              }
            }

            for (t = 0; t < this.el.children.length; t++) {
              e = this.el.children[t], "static" === getComputedStyle(e).position && (e.style.position = "relative"), "auto" === getComputedStyle(e).zIndex && (e.style.zIndex = 1);
            }

            "static" === getComputedStyle(this.el).position && (this.el.style.position = "relative");
          }
        }, {
          key: "applyCanvasStyles",
          value: function applyCanvasStyles(t) {
            var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            Object(s.c)(t.style, {
              position: "absolute",
              zIndex: 0,
              top: 0,
              left: 0,
              background: ""
            }), Object(s.c)(t.style, e), t.classList.add("vanta-canvas");
          }
        }, {
          key: "initThree",
          value: function initThree() {
            n.WebGLRenderer ? (this.renderer = new n.WebGLRenderer({
              alpha: !0,
              antialias: !0
            }), this.el.appendChild(this.renderer.domElement), this.applyCanvasStyles(this.renderer.domElement), isNaN(this.options.backgroundAlpha) && (this.options.backgroundAlpha = 1), this.scene = new n.Scene()) : console.warn("[VANTA] No THREE defined on window");
          }
        }, {
          key: "getCanvasElement",
          value: function getCanvasElement() {
            return this.renderer ? this.renderer.domElement : this.p5renderer ? this.p5renderer.canvas : void 0;
          }
        }, {
          key: "getCanvasRect",
          value: function getCanvasRect() {
            var t = this.getCanvasElement();
            return !!t && t.getBoundingClientRect();
          }
        }, {
          key: "windowMouseMoveWrapper",
          value: function windowMouseMoveWrapper(t) {
            var e = this.getCanvasRect();
            if (!e) return !1;
            var i = t.clientX - e.left,
                s = t.clientY - e.top;
            i >= 0 && s >= 0 && i <= e.width && s <= e.height && (this.mouseX = i, this.mouseY = s, this.options.mouseEase || this.triggerMouseMove(i, s));
          }
        }, {
          key: "windowTouchWrapper",
          value: function windowTouchWrapper(t) {
            var e = this.getCanvasRect();
            if (!e) return !1;

            if (1 === t.touches.length) {
              var _i2 = t.touches[0].clientX - e.left,
                  _s = t.touches[0].clientY - e.top;

              _i2 >= 0 && _s >= 0 && _i2 <= e.width && _s <= e.height && (this.mouseX = _i2, this.mouseY = _s, this.options.mouseEase || this.triggerMouseMove(_i2, _s));
            }
          }
        }, {
          key: "windowGyroWrapper",
          value: function windowGyroWrapper(t) {
            var e = this.getCanvasRect();
            if (!e) return !1;
            var i = Math.round(2 * t.alpha) - e.left,
                s = Math.round(2 * t.beta) - e.top;
            i >= 0 && s >= 0 && i <= e.width && s <= e.height && (this.mouseX = i, this.mouseY = s, this.options.mouseEase || this.triggerMouseMove(i, s));
          }
        }, {
          key: "triggerMouseMove",
          value: function triggerMouseMove(t, e) {
            void 0 === t && void 0 === e && (this.options.mouseEase ? (t = this.mouseEaseX, e = this.mouseEaseY) : (t = this.mouseX, e = this.mouseY)), this.uniforms && (this.uniforms.iMouse.value.x = t / this.scale, this.uniforms.iMouse.value.y = e / this.scale);
            var i = t / this.width,
                s = e / this.height;
            "function" == typeof this.onMouseMove && this.onMouseMove(i, s);
          }
        }, {
          key: "setSize",
          value: function setSize() {
            this.scale || (this.scale = 1), Object(s.e)() && this.options.scaleMobile ? this.scale = this.options.scaleMobile : this.options.scale && (this.scale = this.options.scale), this.width = Math.max(this.el.offsetWidth, this.options.minWidth), this.height = Math.max(this.el.offsetHeight, this.options.minHeight);
          }
        }, {
          key: "initMouse",
          value: function initMouse() {
            (!this.mouseX && !this.mouseY || this.mouseX === this.options.minWidth / 2 && this.mouseY === this.options.minHeight / 2) && (this.mouseX = this.width / 2, this.mouseY = this.height / 2, this.triggerMouseMove(this.mouseX, this.mouseY));
          }
        }, {
          key: "resize",
          value: function resize() {
            this.setSize(), this.camera && (this.camera.aspect = this.width / this.height, "function" == typeof this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix()), this.renderer && (this.renderer.setSize(this.width, this.height), this.renderer.setPixelRatio(window.devicePixelRatio / this.scale)), "function" == typeof this.onResize && this.onResize();
          }
        }, {
          key: "isOnScreen",
          value: function isOnScreen() {
            var t = this.el.offsetHeight,
                e = this.el.getBoundingClientRect(),
                i = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop,
                s = e.top + i;
            return s - window.innerHeight <= i && i <= s + t;
          }
        }, {
          key: "animationLoop",
          value: function animationLoop() {
            return this.t || (this.t = 0), this.t += 1, this.t2 || (this.t2 = 0), this.t2 += this.options.speed || 1, this.uniforms && (this.uniforms.iTime.value = .016667 * this.t2), this.options.mouseEase && (this.mouseEaseX = this.mouseEaseX || this.mouseX || 0, this.mouseEaseY = this.mouseEaseY || this.mouseY || 0, Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > .1 && (this.mouseEaseX += .05 * (this.mouseX - this.mouseEaseX), this.mouseEaseY += .05 * (this.mouseY - this.mouseEaseY), this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY))), (this.isOnScreen() || this.options.forceAnimate) && ("function" == typeof this.onUpdate && this.onUpdate(), this.scene && this.camera && (this.renderer.render(this.scene, this.camera), this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha)), this.fps && this.fps.update && this.fps.update(), "function" == typeof this.afterRender && this.afterRender()), this.req = window.requestAnimationFrame(this.animationLoop);
          }
        }, {
          key: "restart",
          value: function restart() {
            if (this.scene) for (; this.scene.children.length;) {
              this.scene.remove(this.scene.children[0]);
            }
            "function" == typeof this.onRestart && this.onRestart(), this.init();
          }
        }, {
          key: "init",
          value: function init() {
            "function" == typeof this.onInit && this.onInit();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            "function" == typeof this.onDestroy && this.onDestroy();
            var t = window.removeEventListener;
            t("touchstart", this.windowTouchWrapper), t("touchmove", this.windowTouchWrapper), t("scroll", this.windowMouseMoveWrapper), t("mousemove", this.windowMouseMoveWrapper), t("deviceorientation", this.windowGyroWrapper), t("resize", this.resize), window.cancelAnimationFrame(this.req), this.renderer && (this.renderer.domElement && this.el.removeChild(this.renderer.domElement), this.renderer = null, this.scene = null);
          }
        }]);
        return _class;
      }(), e.b = r.VantaBase;
    },
    17: function _(t, e, i) {
      "use strict";

      i.r(e);
      var s = i(1),
          o = i(0);
      var n = "object" == (typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) && window.THREE;

      var r = /*#__PURE__*/function (_s$b) {
        (0, _inherits2.default)(r, _s$b);

        var _super = _createSuper(r);

        (0, _createClass2.default)(r, null, [{
          key: "initClass",
          value: function initClass() {
            this.prototype.ww = 100, this.prototype.hh = 80, this.prototype.waveNoise = 4;
          }
        }]);

        function r(t) {
          var _this;

          (0, _classCallCheck2.default)(this, r);
          n = t.THREE || n, _this = _super.call(this, t);
          return _this;
        }

        (0, _createClass2.default)(r, [{
          key: "getMaterial",
          value: function getMaterial() {
            var t = {
              color: this.options.color,
              shininess: this.options.shininess,
              flatShading: !0,
              vertexColors: n.FaceColors,
              side: n.DoubleSide
            };
            return new n.MeshPhongMaterial(t);
          }
        }, {
          key: "onInit",
          value: function onInit() {
            var t, e;
            var i = this.getMaterial(),
                s = new n.Geometry();

            for (this.gg = [], t = 0; t <= this.ww; t++) {
              for (this.gg[t] = [], e = 0; e <= this.hh; e++) {
                var _i3 = s.vertices.length,
                    _r = new n.Vector3(18 * (t - .5 * this.ww), Object(o.h)(0, this.waveNoise) - 10, 18 * (.5 * this.hh - e));

                s.vertices.push(_r), this.gg[t][e] = _i3;
              }
            }

            for (t = 1; t <= this.ww; t++) {
              for (e = 1; e <= this.hh; e++) {
                var _i4 = void 0,
                    _r2 = void 0;

                var _h = this.gg[t][e],
                    a = this.gg[t][e - 1],
                    c = this.gg[t - 1][e],
                    u = this.gg[t - 1][e - 1];
                Object(o.g)(0, 1) ? (_i4 = new n.Face3(u, a, c), _r2 = new n.Face3(a, c, _h)) : (_i4 = new n.Face3(u, a, _h), _r2 = new n.Face3(u, c, _h)), s.faces.push(_i4, _r2);
              }
            }

            this.plane = new n.Mesh(s, i), this.scene.add(this.plane);
            var r = new n.AmbientLight(16777215, .9);
            this.scene.add(r);
            var h = new n.PointLight(16777215, .9);
            h.position.set(-100, 250, -100), this.scene.add(h), this.camera = new n.PerspectiveCamera(35, this.width / this.height, 50, 1e4);
            this.cameraPosition = new n.Vector3(240, 200, 390), this.cameraTarget = new n.Vector3(140, -30, 190), this.camera.position.copy(this.cameraPosition), this.scene.add(this.camera);
          }
        }, {
          key: "onUpdate",
          value: function onUpdate() {
            var t;
            this.plane.material.color.set(this.options.color), this.plane.material.shininess = this.options.shininess, this.camera.ox = this.cameraPosition.x / this.options.zoom, this.camera.oy = this.cameraPosition.y / this.options.zoom, this.camera.oz = this.cameraPosition.z / this.options.zoom, null != this.controls && this.controls.update();
            var e = this.camera;
            Math.abs(e.tx - e.position.x) > .01 && (t = e.tx - e.position.x, e.position.x += .02 * t), Math.abs(e.ty - e.position.y) > .01 && (t = e.ty - e.position.y, e.position.y += .02 * t), Math.abs(e.tz - e.position.z) > .01 && (t = e.tz - e.position.z, e.position.z += .02 * t), e.lookAt(this.cameraTarget);

            for (var _t3 = 0; _t3 < this.plane.geometry.vertices.length; _t3++) {
              var _e2 = this.plane.geometry.vertices[_t3];

              if (_e2.oy) {
                var _t4 = this.options.waveSpeed,
                    _i5 = Math.sqrt(_t4) * Math.cos(-_e2.x - .7 * _e2.z),
                    _s2 = Math.sin(_t4 * this.t * .02 - _t4 * _e2.x * .025 + _t4 * _e2.z * .015 + _i5),
                    _o = Math.pow(_s2 + 1, 2) / 4;

                _e2.y = _e2.oy + _o * this.options.waveHeight;
              } else _e2.oy = _e2.y;
            }

            this.plane.geometry.dynamic = !0, this.plane.geometry.computeFaceNormals(), this.plane.geometry.verticesNeedUpdate = !0, this.plane.geometry.normalsNeedUpdate = !0, this.wireframe && (this.wireframe.geometry.fromGeometry(this.plane.geometry), this.wireframe.geometry.computeFaceNormals());
          }
        }, {
          key: "onMouseMove",
          value: function onMouseMove(t, e) {
            var i = this.camera;
            return i.oy || (i.oy = i.position.y, i.ox = i.position.x, i.oz = i.position.z), i.tx = i.ox + 100 * (t - .5) / this.options.zoom, i.ty = i.oy + -100 * (e - .5) / this.options.zoom, i.tz = i.oz + -50 * (t - .5) / this.options.zoom;
          }
        }]);
        return r;
      }(s.b);

      r.prototype.defaultOptions = {
        color: 21896,
        shininess: 30,
        waveHeight: 15,
        waveSpeed: 1,
        zoom: 1
      }, r.initClass(), e.default = s.a.register("WAVES", r);
    }
  });
});
},{"@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/typeof":"node_modules/@babel/runtime/helpers/typeof.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64712" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","vanta-master/dist/vanta.waves.min.js"], null)
//# sourceMappingURL=/vanta.waves.min.8f47d3d1.js.map