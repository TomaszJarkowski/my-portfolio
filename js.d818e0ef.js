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
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/scss/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\img\\background-header.webp":[["background-header.658df265.webp","src/img/background-header.webp"],"src/img/background-header.webp"],"./..\\img\\bg.jpg":[["bg.7597a4f5.jpg","src/img/bg.jpg"],"src/img/bg.jpg"],"./..\\img\\bg-contact4.jpg":[["bg-contact4.ee2b2771.jpg","src/img/bg-contact4.jpg"],"src/img/bg-contact4.jpg"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/aos/dist/aos.js":[function(require,module,exports) {
var define;
var global = arguments[3];
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.AOS=t()}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()};function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}(u);if(f)return s=setTimeout(k,n),y(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},O.flush=function(){return void 0===s?c:x(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}(s);if(l)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(S())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)},ae.throttleDelay)))},se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)},refresh:ce,refreshHard:se}});

},{}],"node_modules/aos/dist/aos.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/js/menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menu = void 0;

var menu = function menu() {
  var burger = document.querySelector(".burger");
  var menuItems = document.querySelector(".menu");
  var navLinks = document.querySelectorAll(".menu li");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      burger.classList.remove("toggle");
      flague = false;
      menuItems.style.animation = "backAnimation .65s ease forwards";
      navLinks.forEach(function (link, index) {
        link.style.animation = "backNavLinkFade 0.7s ease forwards";
      });
    });
  });
  var flague = false;
  burger.addEventListener("click", function () {
    burger.classList.toggle("toggle");

    if (flague) {
      flague = false;
      menuItems.style.animation = "backAnimation .65s ease forwards";
    } else {
      flague = true;
      menuItems.style.animation = "menuAnimation .65s ease forwards";
    }

    navLinks.forEach(function (link, index) {
      if (!flague) {
        link.style.animation = "backNavLinkFade 0.7s ease forwards";
      } else {
        link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 5 + 0.3, "s");
      }
    });
  });
};

exports.menu = menu;
},{}],"src/img/skills/html5.png":[function(require,module,exports) {
module.exports = "/html5.f8ef990f.png";
},{}],"src/img/skills/css3.png":[function(require,module,exports) {
module.exports = "/css3.d2ba5fac.png";
},{}],"src/img/skills/sass.png":[function(require,module,exports) {
module.exports = "/sass.2e07d446.png";
},{}],"src/img/skills/javascript.png":[function(require,module,exports) {
module.exports = "/javascript.97d993ba.png";
},{}],"src/img/skills/react.png":[function(require,module,exports) {
module.exports = "/react.d50b7ef0.png";
},{}],"src/img/skills/redux.png":[function(require,module,exports) {
module.exports = "/redux.c5d32ba4.png";
},{}],"src/img/skills/rwd.png":[function(require,module,exports) {
module.exports = "/rwd.d33b7ff3.png";
},{}],"src/img/skills/node-js.png":[function(require,module,exports) {
module.exports = "/node-js.c751c6ca.png";
},{}],"src/img/skills/mongodb.png":[function(require,module,exports) {
module.exports = "/mongodb.c6da3a6d.png";
},{}],"src/img/skills/npm.png":[function(require,module,exports) {
module.exports = "/npm.1b2b86c1.png";
},{}],"src/img/skills/jest.png":[function(require,module,exports) {
module.exports = "/jest.9311218e.png";
},{}],"src/img/skills/git.png":[function(require,module,exports) {
module.exports = "/git.4faa239e.png";
},{}],"src/img/skills/visual-studio-code.png":[function(require,module,exports) {
module.exports = "/visual-studio-code.fc88be70.png";
},{}],"src/img/skills/parcel.png":[function(require,module,exports) {
module.exports = "/parcel.d226e4df.png";
},{}],"src/img/skills/seo.png":[function(require,module,exports) {
module.exports = "/seo.434f49c6.png";
},{}],"src/img/skills/typescript.png":[function(require,module,exports) {
module.exports = "/typescript.ff62d379.png";
},{}],"src/img/skills/nextJS.png":[function(require,module,exports) {
module.exports = "/nextJS.44bc22a6.png";
},{}],"src/img/skills/mysql.png":[function(require,module,exports) {
module.exports = "/mysql.4ce3a352.png";
},{}],"src/img/skills/nest.png":[function(require,module,exports) {
module.exports = "/nest.32a2786d.png";
},{}],"src/img/skills/docker.png":[function(require,module,exports) {
module.exports = "/docker.f03fc590.png";
},{}],"src/img/skills/styled-components.png":[function(require,module,exports) {
module.exports = "/styled-components.6795c2d2.png";
},{}],"src/js/skills.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skills = void 0;

var _html = _interopRequireDefault(require("../img/skills/html5.png"));

var _css = _interopRequireDefault(require("../img/skills/css3.png"));

var _sass = _interopRequireDefault(require("../img/skills/sass.png"));

var _javascript = _interopRequireDefault(require("../img/skills/javascript.png"));

var _react = _interopRequireDefault(require("../img/skills/react.png"));

var _redux = _interopRequireDefault(require("../img/skills/redux.png"));

var _rwd = _interopRequireDefault(require("../img/skills/rwd.png"));

var _nodeJs = _interopRequireDefault(require("../img/skills/node-js.png"));

var _mongodb = _interopRequireDefault(require("../img/skills/mongodb.png"));

var _npm = _interopRequireDefault(require("../img/skills/npm.png"));

var _jest = _interopRequireDefault(require("../img/skills/jest.png"));

var _git = _interopRequireDefault(require("../img/skills/git.png"));

var _visualStudioCode = _interopRequireDefault(require("../img/skills/visual-studio-code.png"));

var _parcel = _interopRequireDefault(require("../img/skills/parcel.png"));

var _seo = _interopRequireDefault(require("../img/skills/seo.png"));

var _typescript = _interopRequireDefault(require("../img/skills/typescript.png"));

var _nextJS = _interopRequireDefault(require("../img/skills/nextJS.png"));

var _mysql = _interopRequireDefault(require("../img/skills/mysql.png"));

var _nest = _interopRequireDefault(require("../img/skills/nest.png"));

var _docker = _interopRequireDefault(require("../img/skills/docker.png"));

var _styledComponents = _interopRequireDefault(require("../img/skills/styled-components.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSkills = [{
  id: 1,
  type: "front",
  name: "HTML",
  img: _html.default
}, {
  id: 2,
  type: "front",
  name: "CSS",
  img: _css.default
}, {
  id: 3,
  type: "front",
  name: "SASS",
  img: _sass.default
}, {
  id: 4,
  type: "front",
  name: "Styled-Components",
  img: _styledComponents.default
}, {
  id: 5,
  type: "front",
  name: "JavaScript",
  img: _javascript.default
}, {
  id: 6,
  type: "front",
  name: "TypeScript",
  img: _typescript.default
}, {
  id: 7,
  type: "front",
  name: "Next.js",
  img: _nextJS.default
}, {
  id: 8,
  type: "front",
  name: "React",
  img: _react.default
}, {
  id: 9,
  type: "back",
  name: "Node.js",
  img: _nodeJs.default
}, {
  id: 10,
  type: "back",
  name: "MongoDB",
  img: _mongodb.default
}, {
  id: 11,
  type: "back",
  name: "MySQL",
  img: _mysql.default
}, {
  id: 12,
  type: "back",
  name: "Nest.js",
  img: _nest.default
}, {
  id: 13,
  type: "other",
  name: "Redux",
  img: _redux.default
}, {
  id: 14,
  type: "other",
  name: "Jest",
  img: _jest.default
}, {
  id: 15,
  type: "other",
  name: "GIT",
  img: _git.default
}, {
  id: 16,
  type: "other",
  name: "NPM",
  img: _npm.default
}, {
  id: 17,
  type: "other",
  name: "Visual Studio Code",
  img: _visualStudioCode.default
}, {
  id: 18,
  type: "other",
  name: "Parcel",
  img: _parcel.default
}, {
  id: 19,
  type: "other",
  name: "SEO",
  img: _seo.default
}, {
  id: 20,
  type: "other",
  name: "RWD",
  img: _rwd.default
}, {
  id: 21,
  type: "back",
  name: "Docker",
  img: _docker.default
}];

var skills = function skills() {
  var containerFront = document.querySelector(".frontend__container");
  var containerBack = document.querySelector(".backend__container");
  var containerOther = document.querySelector(".other__container");
  var delayAnimationFront = 0;
  var delayAnimationBack = 0;
  var delayAnimationOther = 0;
  dataSkills.forEach(function (skill) {
    var div = document.createElement("div");
    var h4 = document.createElement("h4");
    var img = document.createElement("img");
    div.className = "skill";
    div.dataset.aos = "fade";
    h4.innerText = skill.name;
    img.src = skill.img;
    img.alt = skill.name;
    img.setAttribute("loading", "lazy");
    div.appendChild(h4);
    div.appendChild(img);

    if (skill.type == "front") {
      div.dataset.aosDelay = 0 + delayAnimationFront;
      containerFront.appendChild(div);
      delayAnimationFront += 50;
    } else if (skill.type == "back") {
      div.dataset.aosDelay = 0 + delayAnimationBack;
      containerBack.appendChild(div);
      delayAnimationBack += 50;
    } else if (skill.type == "other") {
      div.dataset.aosDelay = 0 + delayAnimationOther;
      containerOther.appendChild(div);
      delayAnimationOther += 50;
    }
  });
};

exports.skills = skills;
},{"../img/skills/html5.png":"src/img/skills/html5.png","../img/skills/css3.png":"src/img/skills/css3.png","../img/skills/sass.png":"src/img/skills/sass.png","../img/skills/javascript.png":"src/img/skills/javascript.png","../img/skills/react.png":"src/img/skills/react.png","../img/skills/redux.png":"src/img/skills/redux.png","../img/skills/rwd.png":"src/img/skills/rwd.png","../img/skills/node-js.png":"src/img/skills/node-js.png","../img/skills/mongodb.png":"src/img/skills/mongodb.png","../img/skills/npm.png":"src/img/skills/npm.png","../img/skills/jest.png":"src/img/skills/jest.png","../img/skills/git.png":"src/img/skills/git.png","../img/skills/visual-studio-code.png":"src/img/skills/visual-studio-code.png","../img/skills/parcel.png":"src/img/skills/parcel.png","../img/skills/seo.png":"src/img/skills/seo.png","../img/skills/typescript.png":"src/img/skills/typescript.png","../img/skills/nextJS.png":"src/img/skills/nextJS.png","../img/skills/mysql.png":"src/img/skills/mysql.png","../img/skills/nest.png":"src/img/skills/nest.png","../img/skills/docker.png":"src/img/skills/docker.png","../img/skills/styled-components.png":"src/img/skills/styled-components.png"}],"src/img/portfolio/world-currencies.jpg":[function(require,module,exports) {
module.exports = "/world-currencies.26c4b0e0.jpg";
},{}],"src/img/portfolio/tic-tac-toe.jpg":[function(require,module,exports) {
module.exports = "/tic-tac-toe.b18abfbc.jpg";
},{}],"src/img/portfolio/booking-app.jpg":[function(require,module,exports) {
module.exports = "/booking-app.ac59b76d.jpg";
},{}],"src/img/portfolio/shop-guru.jpg":[function(require,module,exports) {
module.exports = "/shop-guru.2de1cfcd.jpg";
},{}],"src/img/portfolio/book-search.jpg":[function(require,module,exports) {
module.exports = "/book-search.8dd0839e.jpg";
},{}],"src/img/portfolio/world-currenciesTS.jpg":[function(require,module,exports) {
module.exports = "/world-currenciesTS.e14a1433.jpg";
},{}],"src/js/portfolio.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.portfolio = void 0;

var _worldCurrencies = _interopRequireDefault(require("../img/portfolio/world-currencies.jpg"));

var _ticTacToe = _interopRequireDefault(require("../img/portfolio/tic-tac-toe.jpg"));

var _bookingApp = _interopRequireDefault(require("../img/portfolio/booking-app.jpg"));

var _shopGuru = _interopRequireDefault(require("../img/portfolio/shop-guru.jpg"));

var _bookSearch = _interopRequireDefault(require("../img/portfolio/book-search.jpg"));

var _worldCurrenciesTS = _interopRequireDefault(require("../img/portfolio/world-currenciesTS.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var portfolioDB = [{
  id: 1,
  name: "Shop-Guru",
  technologys: "MERN (MongoDB, Express, React, Node.js)",
  gh: "https://github.com/TomaszJarkowski/guru",
  link: "https://guru-shop.herokuapp.com/shop",
  img: _shopGuru.default
}, {
  id: 2,
  name: "Tic-Tac-Toe",
  technologys: "SCSS, HTML, JavaScript, Local Storage, RWD, Parcel",
  gh: "https://github.com/TomaszJarkowski/Tic_Tac_Toe_Game",
  link: "https://tomaszjarkowski.github.io/Tic_Tac_Toe_Game",
  img: _ticTacToe.default
}, {
  id: 3,
  name: "Booking-App",
  technologys: "MERN (MongoDB, Express, React, Node.js)",
  gh: "https://github.com/TomaszJarkowski/Booking-App-Front",
  link: "https://booking-app-front.herokuapp.com/",
  img: _bookingApp.default
}, {
  id: 4,
  name: "Search-Book-App",
  technologys: "React, Context, Jest, SCSS, RWD",
  gh: "https://github.com/TomaszJarkowski/search-books-app",
  link: "https://tomaszjarkowski.github.io/search-books-app/",
  img: _bookSearch.default
}];

var portfolio = function portfolio() {
  var portfolio__content = document.querySelector(".portfolio__content");
  var i = 1;
  portfolioDB.forEach(function (el) {
    var container = document.createElement("div");
    container.classList.add("portfolio__item");
    var img = document.createElement("img");
    img.src = el.img;
    img.alt = el.name;
    img.classList.add("portfolio__img");
    img.setAttribute("loading", "lazy");
    var bg = document.createElement("div");
    bg.classList.add("portfolio__bg");
    var header = document.createElement("div");
    header.classList.add("portfolio__header");
    var h2 = document.createElement("h2");
    h2.classList.add("portfolio__name");
    h2.textContent = el.name;
    var p = document.createElement("p");
    p.classList.add("portfolio__technologys");
    p.textContent = "".concat(el.technologys);
    var buttons = document.createElement("div");
    buttons.classList.add("portfolio__buttons");
    var buttonGH = document.createElement("button");
    buttonGH.classList.add("portfolio__buttonGH");
    buttonGH.innerHTML = "<a href=".concat(el.gh, " target='_blank' rel=\"noopener\" rel=\"noreferrer\">Github <i class='fab fa-github'></i></a>");
    var buttonLive = document.createElement("button");
    buttonLive.classList.add("portfolio__buttonLive");
    buttonLive.innerHTML = "<a href=".concat(el.link, " target='_blank' rel=\"noopener\" rel=\"noreferrer\">Demo <i class='fas fa-desktop'></i></a>");
    buttons.appendChild(buttonGH);
    buttons.appendChild(buttonLive);
    header.appendChild(h2);
    header.appendChild(p);
    header.appendChild(buttons);
    container.appendChild(img);
    container.appendChild(bg);
    container.appendChild(header);

    if (i % 2) {
      container.dataset.aos = "fade-right";
    } else {
      container.dataset.aos = "fade-left";
    }

    portfolio__content.appendChild(container);
    i++;
  });
};

exports.portfolio = portfolio;
},{"../img/portfolio/world-currencies.jpg":"src/img/portfolio/world-currencies.jpg","../img/portfolio/tic-tac-toe.jpg":"src/img/portfolio/tic-tac-toe.jpg","../img/portfolio/booking-app.jpg":"src/img/portfolio/booking-app.jpg","../img/portfolio/shop-guru.jpg":"src/img/portfolio/shop-guru.jpg","../img/portfolio/book-search.jpg":"src/img/portfolio/book-search.jpg","../img/portfolio/world-currenciesTS.jpg":"src/img/portfolio/world-currenciesTS.jpg"}],"node_modules/@babel/runtime/helpers/arrayLikeToArray.js":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
},{}],"node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
},{"./arrayLikeToArray":"node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"node_modules/@babel/runtime/helpers/iterableToArray.js":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;
},{}],"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
},{"./arrayLikeToArray":"node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"node_modules/@babel/runtime/helpers/nonIterableSpread.js":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
},{}],"node_modules/@babel/runtime/helpers/toConsumableArray.js":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles");

var iterableToArray = require("./iterableToArray");

var unsupportedIterableToArray = require("./unsupportedIterableToArray");

var nonIterableSpread = require("./nonIterableSpread");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
},{"./arrayWithoutHoles":"node_modules/@babel/runtime/helpers/arrayWithoutHoles.js","./iterableToArray":"node_modules/@babel/runtime/helpers/iterableToArray.js","./unsupportedIterableToArray":"node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableSpread":"node_modules/@babel/runtime/helpers/nonIterableSpread.js"}],"src/js/contact.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contact = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contact = function contact() {
  var form = document.querySelector(".contact__form");
  var inputEmail = document.querySelector(".input__email");
  var inputText = document.querySelector(".input__text");
  var lockEmail = document.querySelector(".email__lock");
  var lockText = document.querySelector(".text__lock");
  var btnForm = document.querySelector(".btn__form");
  var spinner = document.querySelector(".spinner");
  var error = document.querySelector(".form__error");
  var success = document.querySelector(".form__success");
  var activeEmail = false;
  var activeText = false;
  var correctEmail = false;
  var correctText = false;

  var hendleError = function hendleError(text) {
    error.textContent = text;
    error.style.display = "flex";
  };

  var sendEmail = function sendEmail(text, email) {
    var data = {
      email: email,
      text: text
    };
    error.style.display = "none";
    success.style.display = "none";
    spinner.style.display = "flex";
    fetch("https://portfolio-backend-tj.herokuapp.com/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      return response.json();
    }).then(function (response) {
      spinner.style.display = "none";

      if (response.error) {
        hendleError(response.error);
      } else {
        success.style.display = "flex";
      }
    }).catch(function (err) {
      spinner.style.display = "none";
      error.style.display = "flex";
    });
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (correctEmail && correctText) {
      sendEmail(inputText.value, inputEmail.value);
    }
  });
  inputText.addEventListener("focus", function () {
    activeText = true;

    if (!correctText) {
      if (activeText) {
        lockText.style.color = "#DF524A";
      }
    }
  });
  inputEmail.addEventListener("focus", function () {
    activeEmail = true;

    if (!correctEmail) {
      if (activeEmail) {
        lockEmail.style.color = "#DF524A";
      }
    }
  });
  inputEmail.addEventListener("keyup", function (e) {
    validationEmail(e);
  });
  inputEmail.addEventListener("keydown", function (e) {
    validationEmail(e);
  });
  inputText.addEventListener("keyup", function (e) {
    validationText(e);
  });
  inputText.addEventListener("keydown", function (e) {
    validationText(e);
  });

  function validationEmail(e) {
    if (testEmail(e.target)) {
      correctEmail = true;
      lockEmail.classList.remove("fa-lock");
      lockEmail.classList.add("fa-unlock");
      lockEmail.style.color = "#76b852";
      inputEmail.style.borderBottom = "2px solid #76b852";
    } else {
      correctEmail = false;
      lockEmail.classList.remove("fa-unlock");
      lockEmail.classList.add("fa-lock");
      lockEmail.style.color = "#DF524A";
      inputEmail.style.borderBottom = "2px solid #DF524A";
    }

    styleButton();
  }

  function validationText(e) {
    var withoutSpace = testText(e.target.value);

    if (withoutSpace.length > 5) {
      correctText = true;
      lockText.classList.remove("fa-lock");
      lockText.classList.add("fa-unlock");
      lockText.style.color = "#76b852";
      inputText.style.borderBottom = "2px solid #76b852";
    } else {
      correctText = false;
      lockText.classList.remove("fa-unlock");
      lockText.classList.add("fa-lock");
      lockText.style.color = "#DF524A";
      inputText.style.borderBottom = "2px solid #DF524A";
    }

    styleButton();
  }

  function styleButton() {
    if (correctEmail && correctText) {
      btnForm.classList.remove("disabled");
      btnForm.classList.add("active");
    } else {
      btnForm.classList.remove("active");
      btnForm.classList.add("disabled");
    }
  }

  function testText(field) {
    var arrField = (0, _toConsumableArray2.default)(field);
    var arrWithoutSpace = [];
    arrField.forEach(function (el) {
      var reg = new RegExp("[A-Za-z]");

      if (reg.test(el)) {
        arrWithoutSpace.push(el);
      }
    });
    return arrWithoutSpace;
  }

  function testEmail(field) {
    var reg = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
    return reg.test(field.value);
  }
};

exports.contact = contact;
},{"@babel/runtime/helpers/toConsumableArray":"node_modules/@babel/runtime/helpers/toConsumableArray.js"}],"node_modules/jump.js/dist/jump.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// Robert Penner's easeInOutQuad
// find the rest of his easing functions here: http://robertpenner.com/easing/
// find them exported for ES6 consumption here: https://github.com/jaxgeller/ez.js
var easeInOutQuad = function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var jumper = function jumper() {
  // private variable cache
  // no variables are created during a jump, preventing memory leaks
  var element = void 0; // element to scroll to                   (node)

  var start = void 0; // where scroll starts                    (px)

  var stop = void 0; // where scroll stops                     (px)

  var offset = void 0; // adjustment from the stop position      (px)

  var easing = void 0; // easing function                        (function)

  var a11y = void 0; // accessibility support flag             (boolean)

  var distance = void 0; // distance of scroll                     (px)

  var duration = void 0; // scroll duration                        (ms)

  var timeStart = void 0; // time scroll started                    (ms)

  var timeElapsed = void 0; // time spent scrolling thus far          (ms)

  var next = void 0; // next scroll position                   (px)

  var callback = void 0; // to call when done scrolling            (function)
  // scroll position helper

  function location() {
    return window.scrollY || window.pageYOffset;
  } // element offset helper


  function top(element) {
    return element.getBoundingClientRect().top + start;
  } // rAF loop helper


  function loop(timeCurrent) {
    // store time scroll started, if not started already
    if (!timeStart) {
      timeStart = timeCurrent;
    } // determine time spent scrolling so far


    timeElapsed = timeCurrent - timeStart; // calculate next scroll position

    next = easing(timeElapsed, start, distance, duration); // scroll to it

    window.scrollTo(0, next); // check progress

    timeElapsed < duration ? window.requestAnimationFrame(loop) // continue scroll loop
    : done(); // scrolling is done
  } // scroll finished helper


  function done() {
    // account for rAF time rounding inaccuracies
    window.scrollTo(0, start + distance); // if scrolling to an element, and accessibility is enabled

    if (element && a11y) {
      // add tabindex indicating programmatic focus
      element.setAttribute('tabindex', '-1'); // focus the element

      element.focus();
    } // if it exists, fire the callback


    if (typeof callback === 'function') {
      callback();
    } // reset time for next jump


    timeStart = false;
  } // API


  function jump(target) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}; // resolve options, or use defaults

    duration = options.duration || 1000;
    offset = options.offset || 0;
    callback = options.callback; // "undefined" is a suitable default, and won't be called

    easing = options.easing || easeInOutQuad;
    a11y = options.a11y || false; // cache starting position

    start = location(); // resolve target

    switch (typeof target === 'undefined' ? 'undefined' : _typeof(target)) {
      // scroll from current position
      case 'number':
        element = undefined; // no element to scroll to

        a11y = false; // make sure accessibility is off

        stop = start + target;
        break;
      // scroll to element (node)
      // bounding rect is relative to the viewport

      case 'object':
        element = target;
        stop = top(element);
        break;
      // scroll to element (selector)
      // bounding rect is relative to the viewport

      case 'string':
        element = document.querySelector(target);
        stop = top(element);
        break;
    } // resolve scroll distance, accounting for offset


    distance = stop - start + offset; // resolve duration

    switch (_typeof(options.duration)) {
      // number in ms
      case 'number':
        duration = options.duration;
        break;
      // function passed the distance of the scroll

      case 'function':
        duration = options.duration(distance);
        break;
    } // start the loop


    window.requestAnimationFrame(loop);
  } // expose only the jump method


  return jump;
}; // export singleton


var singleton = jumper();
var _default = singleton;
exports.default = _default;
},{}],"src/js/animationScroll.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationScroll = void 0;

var _jump = _interopRequireDefault(require("jump.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animationScroll = function animationScroll() {
  var arrow = document.querySelector(".header__arrow");
  var aboutMe = document.querySelector(".aboutMe");
  var skills = document.querySelector(".skills");
  var portfolio = document.querySelector(".portfolio");
  var contact = document.querySelector(".contact");
  var header = document.querySelector(".header");
  var linkAboutMe = document.querySelector(".link__aboutMe");
  var linkSkills = document.querySelector(".link__skills");
  var linkPortfolio = document.querySelector(".link__portfolio");
  var linkContact = document.querySelector(".link__contact");
  var backTop = document.querySelector(".backTop button");
  var linkInText = document.querySelector(".aboutMe__content a");
  var option = {
    duration: 1000,
    offset: 0,
    callback: undefined,
    a11y: false
  };
  window.addEventListener("scroll", function () {
    if (window.scrollY >= aboutMe.offsetTop) {
      backTop.classList.add("active");
    } else {
      backTop.classList.remove("active");
    }
  });
  linkInText.addEventListener("click", function () {
    (0, _jump.default)(skills, option);
  });
  arrow.addEventListener("click", function () {
    (0, _jump.default)(aboutMe, option);
  });
  backTop.addEventListener("click", function () {
    (0, _jump.default)(header, option);
  });
  linkAboutMe.addEventListener("click", function () {
    (0, _jump.default)(aboutMe, option);
  });
  linkSkills.addEventListener("click", function () {
    (0, _jump.default)(skills, option);
  });
  linkPortfolio.addEventListener("click", function () {
    (0, _jump.default)(portfolio, option);
  });
  linkContact.addEventListener("click", function () {
    (0, _jump.default)(contact, option);
  });
};

exports.animationScroll = animationScroll;
},{"jump.js":"node_modules/jump.js/dist/jump.module.js"}],"src/js/spinner.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.spinner = void 0;

var spinner = function spinner() {
  var content = document.querySelector(".content");
  var spinner = document.querySelector(".loading__spinner");
  window.addEventListener("load", function () {
    spinner.style.display = "none";
    content.style.display = "block";
  });
};

exports.spinner = spinner;
},{}],"src/js/index.js":[function(require,module,exports) {
"use strict";

require("../scss/style.scss");

var _aos = _interopRequireDefault(require("aos"));

require("aos/dist/aos.css");

var _menu = require("./menu");

var _skills = require("./skills");

var _portfolio = require("./portfolio");

var _contact = require("./contact");

var _animationScroll = require("./animationScroll");

var _spinner = require("./spinner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _spinner.spinner)();
(0, _menu.menu)();
(0, _skills.skills)();
(0, _portfolio.portfolio)();
(0, _contact.contact)();
(0, _animationScroll.animationScroll)();

_aos.default.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded",
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init",
  // class applied after initialization
  animatedClassName: "aos-animate",
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 1500,
  // values from 0 to 3000, with step 50ms
  easing: "ease",
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom" // defines which position of the element regarding to window should trigger the animation

});
},{"../scss/style.scss":"src/scss/style.scss","aos":"node_modules/aos/dist/aos.js","aos/dist/aos.css":"node_modules/aos/dist/aos.css","./menu":"src/js/menu.js","./skills":"src/js/skills.js","./portfolio":"src/js/portfolio.js","./contact":"src/js/contact.js","./animationScroll":"src/js/animationScroll.js","./spinner":"src/js/spinner.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52050" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/index.js"], null)
//# sourceMappingURL=/js.d818e0ef.js.map