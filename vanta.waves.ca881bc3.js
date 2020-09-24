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
})({"node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
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
},{}],"node_modules/@babel/runtime/helpers/setPrototypeOf.js":[function(require,module,exports) {
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
},{}],"vanta-master/src/helpers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = extend;
exports.mobileCheck = mobileCheck;
exports.rn = rn;
exports.ri = ri;
exports.getBrightness = exports.color2Rgb = exports.color2Hex = exports.q = exports.sample = void 0;

Number.prototype.clamp = function (min, max) {
  return Math.min(Math.max(this, min), max);
}; // # module.exports = helpers


function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }

  return a;
}

function mobileCheck() {
  if (typeof navigator !== 'undefined') {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 600;
  }

  return null;
}

var sample = function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
};

exports.sample = sample;

function rn(start, end) {
  if (start == null) start = 0;
  if (end == null) end = 1;
  return start + Math.random() * (end - start);
}

function ri(start, end) {
  if (start == null) start = 0;
  if (end == null) end = 1;
  return Math.floor(start + Math.random() * (end - start + 1));
}

var q = function q(sel) {
  return document.querySelector(sel);
};

exports.q = q;

var color2Hex = function color2Hex(color) {
  if (typeof color == 'number') {
    return '#' + ('00000' + color.toString(16)).slice(-6);
  } else return color;
};

exports.color2Hex = color2Hex;

var color2Rgb = function color2Rgb(color) {
  var alpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var hex = color2Hex(color);
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var obj = result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
  return 'rgba(' + obj.r + ',' + obj.g + ',' + obj.b + ',' + alpha + ')';
};

exports.color2Rgb = color2Rgb;

var getBrightness = function getBrightness(threeColor) {
  return 0.299 * threeColor.r + 0.587 * threeColor.g + 0.114 * threeColor.b;
};

exports.getBrightness = getBrightness;
},{}],"vanta-master/src/_base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.VANTA = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _helpers = require("./helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const DEBUGMODE = window.location.toString().indexOf('VANTADEBUG') !== -1
var win = (typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) == 'object';
var THREE = win && window.THREE || {};
if (win && !window.VANTA) window.VANTA = {};
var VANTA = win && window.VANTA || {};
exports.VANTA = VANTA;

VANTA.register = function (name, Effect) {
  return VANTA[name] = function (opts) {
    return new Effect(opts);
  };
};

VANTA.version = '0.5.18';

// const ORBITCONTROLS = {
//   enableZoom: false,
//   userPanSpeed: 3,
//   userRotateSpeed: 2.0,
//   maxPolarAngle: Math.PI * 0.8, // (pi/2 is pure horizontal)
//   mouseButtons: {
//     ORBIT: THREE.MOUSE.LEFT,
//     ZOOM: null,
//     PAN: null
//   }
// }
// if (DEBUGMODE) {
//   extend(ORBITCONTROLS, {
//     enableZoom: true,
//     zoomSpeed: 4,
//     minDistance: 100,
//     maxDistance: 4500
//   })
// }
// Namespace for errors
var error = function error() {
  Array.prototype.unshift.call(arguments, '[VANTA]');
  return console.error.apply(this, arguments);
};

VANTA.VantaBase = /*#__PURE__*/function () {
  function VantaBase() {
    var userOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, VantaBase);
    if (!win) return false;
    VANTA.current = this;
    this.windowMouseMoveWrapper = this.windowMouseMoveWrapper.bind(this);
    this.windowTouchWrapper = this.windowTouchWrapper.bind(this);
    this.windowGyroWrapper = this.windowGyroWrapper.bind(this);
    this.resize = this.resize.bind(this);
    this.animationLoop = this.animationLoop.bind(this);
    this.restart = this.restart.bind(this);
    var defaultOptions = typeof this.getDefaultOptions === 'function' ? this.getDefaultOptions() : this.defaultOptions;
    this.options = (0, _helpers.extend)({
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1
    }, defaultOptions);

    if (userOptions instanceof HTMLElement || typeof userOptions === 'string') {
      userOptions = {
        el: userOptions
      };
    }

    (0, _helpers.extend)(this.options, userOptions);

    if (this.options.THREE) {
      THREE = this.options.THREE; // Optionally use a custom build of three.js
    } // Set element


    this.el = this.options.el;

    if (this.el == null) {
      error("Instance needs \"el\" param!");
    } else if (!(this.options.el instanceof HTMLElement)) {
      var selector = this.el;
      this.el = (0, _helpers.q)(selector);

      if (!this.el) {
        error("Cannot find element", selector);
        return;
      }
    }

    this.prepareEl();
    this.initThree();
    this.setSize(); // Init needs size

    try {
      this.init();
    } catch (e) {
      // FALLBACK - just use color
      error('Init error', e);

      if (this.renderer && this.renderer.domElement) {
        this.el.removeChild(this.renderer.domElement);
      }

      if (this.options.backgroundColor) {
        console.log('[VANTA] Falling back to backgroundColor');
        this.el.style.background = (0, _helpers.color2Hex)(this.options.backgroundColor);
      }

      return;
    } // After init


    this.initMouse(); // Triggers mouse, which needs to be called after init

    this.resize();
    this.animationLoop(); // Event listeners

    var ad = window.addEventListener;
    ad('resize', this.resize);
    window.requestAnimationFrame(this.resize); // Force a resize after the first frame
    // Add event listeners on window, because this element may be below other elements, which would block the element's own mousemove event

    if (this.options.mouseControls) {
      ad('scroll', this.windowMouseMoveWrapper);
      ad('mousemove', this.windowMouseMoveWrapper);
    }

    if (this.options.touchControls) {
      ad('touchstart', this.windowTouchWrapper);
      ad('touchmove', this.windowTouchWrapper);
    }

    if (this.options.gyroControls) {
      ad('deviceorientation', this.windowGyroWrapper);
    }
  }

  (0, _createClass2.default)(VantaBase, [{
    key: "setOptions",
    value: function setOptions() {
      var userOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _helpers.extend)(this.options, userOptions);
      this.triggerMouseMove();
    }
  }, {
    key: "prepareEl",
    value: function prepareEl() {
      var i, child; // wrapInner for text nodes, so text nodes can be put into foreground

      if (typeof Node !== 'undefined' && Node.TEXT_NODE) {
        for (i = 0; i < this.el.childNodes.length; i++) {
          var n = this.el.childNodes[i];

          if (n.nodeType === Node.TEXT_NODE) {
            var s = document.createElement('span');
            s.textContent = n.textContent;
            n.parentElement.insertBefore(s, n);
            n.remove();
          }
        }
      } // Set foreground elements


      for (i = 0; i < this.el.children.length; i++) {
        child = this.el.children[i];

        if (getComputedStyle(child).position === 'static') {
          child.style.position = 'relative';
        }

        if (getComputedStyle(child).zIndex === 'auto') {
          child.style.zIndex = 1;
        }
      } // Set canvas and container style


      if (getComputedStyle(this.el).position === 'static') {
        this.el.style.position = 'relative';
      }
    }
  }, {
    key: "applyCanvasStyles",
    value: function applyCanvasStyles(canvasEl) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      (0, _helpers.extend)(canvasEl.style, {
        position: 'absolute',
        zIndex: 0,
        top: 0,
        left: 0,
        background: ''
      });
      (0, _helpers.extend)(canvasEl.style, opts);
      canvasEl.classList.add('vanta-canvas');
    }
  }, {
    key: "initThree",
    value: function initThree() {
      if (!THREE.WebGLRenderer) {
        console.warn("[VANTA] No THREE defined on window");
        return;
      } // Set renderer


      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true
      });
      this.el.appendChild(this.renderer.domElement);
      this.applyCanvasStyles(this.renderer.domElement);

      if (isNaN(this.options.backgroundAlpha)) {
        this.options.backgroundAlpha = 1;
      }

      this.scene = new THREE.Scene();
    }
  }, {
    key: "getCanvasElement",
    value: function getCanvasElement() {
      if (this.renderer) {
        return this.renderer.domElement; // three.js
      }

      if (this.p5renderer) {
        return this.p5renderer.canvas; // p5
      }
    }
  }, {
    key: "getCanvasRect",
    value: function getCanvasRect() {
      var canvas = this.getCanvasElement();
      if (!canvas) return false;
      return canvas.getBoundingClientRect();
    }
  }, {
    key: "windowMouseMoveWrapper",
    value: function windowMouseMoveWrapper(e) {
      var rect = this.getCanvasRect();
      if (!rect) return false;
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;

      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        this.mouseX = x;
        this.mouseY = y;
        if (!this.options.mouseEase) this.triggerMouseMove(x, y);
      }
    }
  }, {
    key: "windowTouchWrapper",
    value: function windowTouchWrapper(e) {
      var rect = this.getCanvasRect();
      if (!rect) return false;

      if (e.touches.length === 1) {
        var x = e.touches[0].clientX - rect.left;
        var y = e.touches[0].clientY - rect.top;

        if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
          this.mouseX = x;
          this.mouseY = y;
          if (!this.options.mouseEase) this.triggerMouseMove(x, y);
        }
      }
    }
  }, {
    key: "windowGyroWrapper",
    value: function windowGyroWrapper(e) {
      var rect = this.getCanvasRect();
      if (!rect) return false;
      var x = Math.round(e.alpha * 2) - rect.left;
      var y = Math.round(e.beta * 2) - rect.top;

      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        this.mouseX = x;
        this.mouseY = y;
        if (!this.options.mouseEase) this.triggerMouseMove(x, y);
      }
    }
  }, {
    key: "triggerMouseMove",
    value: function triggerMouseMove(x, y) {
      if (x === undefined && y === undefined) {
        // trigger at current position
        if (this.options.mouseEase) {
          x = this.mouseEaseX;
          y = this.mouseEaseY;
        } else {
          x = this.mouseX;
          y = this.mouseY;
        }
      }

      if (this.uniforms) {
        this.uniforms.iMouse.value.x = x / this.scale; // pixel values

        this.uniforms.iMouse.value.y = y / this.scale; // pixel values
      }

      var xNorm = x / this.width; // 0 to 1

      var yNorm = y / this.height; // 0 to 1

      typeof this.onMouseMove === "function" ? this.onMouseMove(xNorm, yNorm) : void 0;
    }
  }, {
    key: "setSize",
    value: function setSize() {
      this.scale || (this.scale = 1);

      if ((0, _helpers.mobileCheck)() && this.options.scaleMobile) {
        this.scale = this.options.scaleMobile;
      } else if (this.options.scale) {
        this.scale = this.options.scale;
      }

      this.width = Math.max(this.el.offsetWidth, this.options.minWidth);
      this.height = Math.max(this.el.offsetHeight, this.options.minHeight);
    }
  }, {
    key: "initMouse",
    value: function initMouse() {
      // Init mouseX and mouseY
      if (!this.mouseX && !this.mouseY || this.mouseX === this.options.minWidth / 2 && this.mouseY === this.options.minHeight / 2) {
        this.mouseX = this.width / 2;
        this.mouseY = this.height / 2;
        this.triggerMouseMove(this.mouseX, this.mouseY);
      }
    }
  }, {
    key: "resize",
    value: function resize() {
      this.setSize();

      if (this.camera) {
        this.camera.aspect = this.width / this.height;

        if (typeof this.camera.updateProjectionMatrix === "function") {
          this.camera.updateProjectionMatrix();
        }
      }

      if (this.renderer) {
        this.renderer.setSize(this.width, this.height);
        this.renderer.setPixelRatio(window.devicePixelRatio / this.scale);
      }

      typeof this.onResize === "function" ? this.onResize() : void 0;
    }
  }, {
    key: "isOnScreen",
    value: function isOnScreen() {
      var elHeight = this.el.offsetHeight;
      var elRect = this.el.getBoundingClientRect();
      var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
      var offsetTop = elRect.top + scrollTop;
      var minScrollTop = offsetTop - window.innerHeight;
      var maxScrollTop = offsetTop + elHeight;
      return minScrollTop <= scrollTop && scrollTop <= maxScrollTop;
    }
  }, {
    key: "animationLoop",
    value: function animationLoop() {
      // Step time
      this.t || (this.t = 0);
      this.t += 1; // Uniform time

      this.t2 || (this.t2 = 0);
      this.t2 += this.options.speed || 1;

      if (this.uniforms) {
        this.uniforms.iTime.value = this.t2 * 0.016667; // iTime is in seconds
      }

      if (this.options.mouseEase) {
        this.mouseEaseX = this.mouseEaseX || this.mouseX || 0;
        this.mouseEaseY = this.mouseEaseY || this.mouseY || 0;

        if (Math.abs(this.mouseEaseX - this.mouseX) + Math.abs(this.mouseEaseY - this.mouseY) > 0.1) {
          this.mouseEaseX += (this.mouseX - this.mouseEaseX) * 0.05;
          this.mouseEaseY += (this.mouseY - this.mouseEaseY) * 0.05;
          this.triggerMouseMove(this.mouseEaseX, this.mouseEaseY);
        }
      } // Only animate if element is within view


      if (this.isOnScreen() || this.options.forceAnimate) {
        if (typeof this.onUpdate === "function") {
          this.onUpdate();
        }

        if (this.scene && this.camera) {
          this.renderer.render(this.scene, this.camera);
          this.renderer.setClearColor(this.options.backgroundColor, this.options.backgroundAlpha);
        } // if (this.stats) this.stats.update()
        // if (this.renderStats) this.renderStats.update(this.renderer)


        if (this.fps && this.fps.update) this.fps.update();
        if (typeof this.afterRender === "function") this.afterRender();
      }

      return this.req = window.requestAnimationFrame(this.animationLoop);
    } // setupControls() {
    //   if (DEBUGMODE && THREE.OrbitControls) {
    //     this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
    //     extend(this.controls, ORBITCONTROLS)
    //     return this.scene.add(new THREE.AxisHelper(100))
    //   }
    // }

  }, {
    key: "restart",
    value: function restart() {
      // Restart the effect without destroying the renderer
      if (this.scene) {
        while (this.scene.children.length) {
          this.scene.remove(this.scene.children[0]);
        }
      }

      if (typeof this.onRestart === "function") {
        this.onRestart();
      }

      this.init();
    }
  }, {
    key: "init",
    value: function init() {
      if (typeof this.onInit === "function") {
        this.onInit();
      } // this.setupControls()

    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (typeof this.onDestroy === "function") {
        this.onDestroy();
      }

      var rm = window.removeEventListener;
      rm('touchstart', this.windowTouchWrapper);
      rm('touchmove', this.windowTouchWrapper);
      rm('scroll', this.windowMouseMoveWrapper);
      rm('mousemove', this.windowMouseMoveWrapper);
      rm('deviceorientation', this.windowGyroWrapper);
      rm('resize', this.resize);
      window.cancelAnimationFrame(this.req);

      if (this.renderer) {
        if (this.renderer.domElement) {
          this.el.removeChild(this.renderer.domElement);
        }

        this.renderer = null;
        this.scene = null;
      }
    }
  }]);
  return VantaBase;
}();

var _default = VANTA.VantaBase;
exports.default = _default;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/typeof":"node_modules/@babel/runtime/helpers/typeof.js","./helpers.js":"vanta-master/src/helpers.js"}],"vanta-master/src/vanta.waves.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _base = _interopRequireWildcard(require("./_base.js"));

var _helpers = require("./helpers.js");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var THREE = (typeof window === "undefined" ? "undefined" : (0, _typeof2.default)(window)) == 'object' && window.THREE;
var defaultOptions = {
  color: 0x005588,
  shininess: 30,
  waveHeight: 15,
  waveSpeed: 1,
  zoom: 1
};

var Waves = /*#__PURE__*/function (_VantaBase) {
  (0, _inherits2.default)(Waves, _VantaBase);

  var _super = _createSuper(Waves);

  (0, _createClass2.default)(Waves, null, [{
    key: "initClass",
    value: function initClass() {
      this.prototype.ww = 100;
      this.prototype.hh = 80;
      this.prototype.waveNoise = 4; // Choppiness of water
    }
  }]);

  function Waves(userOptions) {
    (0, _classCallCheck2.default)(this, Waves);
    THREE = userOptions.THREE || THREE;
    return _super.call(this, userOptions);
  }

  (0, _createClass2.default)(Waves, [{
    key: "getMaterial",
    value: function getMaterial() {
      var options = {
        color: this.options.color,
        shininess: this.options.shininess,
        flatShading: true,
        vertexColors: THREE.FaceColors,
        // Allow coloring individual faces
        side: THREE.DoubleSide
      };
      return new THREE.MeshPhongMaterial(options);
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var i, j;
      var CELLSIZE = 18;
      var material = this.getMaterial();
      var geometry = new THREE.Geometry(); // Add vertices

      this.gg = [];

      for (i = 0; i <= this.ww; i++) {
        this.gg[i] = [];

        for (j = 0; j <= this.hh; j++) {
          var id = geometry.vertices.length;
          var newVertex = new THREE.Vector3((i - this.ww * 0.5) * CELLSIZE, (0, _helpers.rn)(0, this.waveNoise) - 10, (this.hh * 0.5 - j) * CELLSIZE);
          geometry.vertices.push(newVertex);
          this.gg[i][j] = id;
        }
      } // Add faces
      // a b
      // c d <-- Looking from the bottom right point


      for (i = 1; i <= this.ww; i++) {
        for (j = 1; j <= this.hh; j++) {
          var face1 = void 0,
              face2 = void 0;
          var d = this.gg[i][j];
          var b = this.gg[i][j - 1];
          var c = this.gg[i - 1][j];
          var a = this.gg[i - 1][j - 1];

          if ((0, _helpers.ri)(0, 1)) {
            face1 = new THREE.Face3(a, b, c);
            face2 = new THREE.Face3(b, c, d);
          } else {
            face1 = new THREE.Face3(a, b, d);
            face2 = new THREE.Face3(a, c, d);
          }

          geometry.faces.push(face1, face2);
        }
      }

      this.plane = new THREE.Mesh(geometry, material);
      this.scene.add(this.plane); // WIREFRAME
      // lightColor = 0x55aaee
      // darkColor = 0x225577
      // thresholdAngle = 2
      // geo = new THREE.EdgesGeometry(geometry, thresholdAngle)
      // mat = new THREE.LineBasicMaterial( { color: lightColor, linewidth: 2 } )
      // @wireframe = new THREE.LineSegments( geo, mat )
      // @scene.add( @wireframe )
      // LIGHTS

      var ambience = new THREE.AmbientLight(0xffffff, 0.9);
      this.scene.add(ambience);
      var pointLight = new THREE.PointLight(0xffffff, 0.9);
      pointLight.position.set(-100, 250, -100);
      this.scene.add(pointLight); // CAMERA

      this.camera = new THREE.PerspectiveCamera(35, this.width / this.height, 50, 10000);
      var xOffset = -10;
      var zOffset = -10;
      this.cameraPosition = new THREE.Vector3(250 + xOffset, 200, 400 + zOffset);
      this.cameraTarget = new THREE.Vector3(150 + xOffset, -30, 200 + zOffset);
      this.camera.position.copy(this.cameraPosition);
      this.scene.add(this.camera);
    }
  }, {
    key: "onUpdate",
    value: function onUpdate() {
      // Update options
      var diff;
      this.plane.material.color.set(this.options.color);
      this.plane.material.shininess = this.options.shininess;
      this.camera.ox = this.cameraPosition.x / this.options.zoom;
      this.camera.oy = this.cameraPosition.y / this.options.zoom;
      this.camera.oz = this.cameraPosition.z / this.options.zoom;

      if (this.controls != null) {
        this.controls.update();
      }

      var c = this.camera;

      if (Math.abs(c.tx - c.position.x) > 0.01) {
        diff = c.tx - c.position.x;
        c.position.x += diff * 0.02;
      }

      if (Math.abs(c.ty - c.position.y) > 0.01) {
        diff = c.ty - c.position.y;
        c.position.y += diff * 0.02;
      }

      if (Math.abs(c.tz - c.position.z) > 0.01) {
        diff = c.tz - c.position.z;
        c.position.z += diff * 0.02;
      }

      c.lookAt(this.cameraTarget); // Fix flickering problems
      // c.near = Math.max((c.position.y * 0.5) - 20, 1);
      // c.updateMatrix();
      // WAVES

      for (var i = 0; i < this.plane.geometry.vertices.length; i++) {
        var v = this.plane.geometry.vertices[i];

        if (!v.oy) {
          // INIT
          v.oy = v.y;
        } else {
          var s = this.options.waveSpeed;
          var crossChop = Math.sqrt(s) * Math.cos(-v.x - v.z * 0.7); // + s * (i % 229) / 229 * 5

          var delta = Math.sin(s * this.t * 0.02 - s * v.x * 0.025 + s * v.z * 0.015 + crossChop);
          var trochoidDelta = Math.pow(delta + 1, 2) / 4;
          v.y = v.oy + trochoidDelta * this.options.waveHeight;
        }
      } // @wireframe.geometry.vertices[i].y = v.y


      this.plane.geometry.dynamic = true;
      this.plane.geometry.computeFaceNormals();
      this.plane.geometry.verticesNeedUpdate = true;
      this.plane.geometry.normalsNeedUpdate = true; // @scene.remove( @wireframe )
      // geo = new THREE.EdgesGeometry(@plane.geometry)
      // mat = new THREE.LineBasicMaterial( { color: 0x55aaee, linewidth: 2} )
      // @wireframe = new THREE.LineSegments( geo, mat )
      // @scene.add( @wireframe )

      if (this.wireframe) {
        this.wireframe.geometry.fromGeometry(this.plane.geometry);
        this.wireframe.geometry.computeFaceNormals();
      }
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(x, y) {
      var c = this.camera;

      if (!c.oy) {
        c.oy = c.position.y;
        c.ox = c.position.x;
        c.oz = c.position.z;
      }

      c.tx = c.ox + (x - 0.5) * 100 / this.options.zoom;
      c.ty = c.oy + (y - 0.5) * -100 / this.options.zoom;
      return c.tz = c.oz + (x - 0.5) * -50 / this.options.zoom;
    }
  }]);
  return Waves;
}(_base.default);

Waves.prototype.defaultOptions = defaultOptions;
Waves.initClass();

var _default = _base.VANTA.register('WAVES', Waves);

exports.default = _default;
},{"@babel/runtime/helpers/classCallCheck":"node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/inherits":"node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/possibleConstructorReturn":"node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/typeof":"node_modules/@babel/runtime/helpers/typeof.js","./_base.js":"vanta-master/src/_base.js","./helpers.js":"vanta-master/src/helpers.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","vanta-master/src/vanta.waves.js"], null)
//# sourceMappingURL=/vanta.waves.ca881bc3.js.map