/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/confetti.min.js":
/*!*************************************!*\
  !*** ./src/scripts/confetti.min.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Confetti = function () {\n  var t = function () {\n    return function () {\n      this.gravity = 10, this.particle_count = 75, this.particle_size = 1, this.explosion_power = 25, this.destroy_target = !0, this.fade = !1;\n    };\n  }(),\n      e = function () {\n    function e(n) {\n      var r = this;\n      if (this.bursts = [], this.setCount = function (t) {\n        if (\"number\" != typeof t) throw new Error(\"Input must be of type 'number'\");\n        e.CONFIG.particle_count = t;\n      }, this.setPower = function (t) {\n        if (\"number\" != typeof t) throw new Error(\"Input must be of type 'number'\");\n        e.CONFIG.explosion_power = t;\n      }, this.setSize = function (t) {\n        if (\"number\" != typeof t) throw new Error(\"Input must be of type 'number'\");\n        e.CONFIG.particle_size = t;\n      }, this.setFade = function (t) {\n        if (\"boolean\" != typeof t) throw new Error(\"Input must be of type 'boolean'\");\n        e.CONFIG.fade = t;\n      }, this.destroyTarget = function (t) {\n        if (\"boolean\" != typeof t) throw new Error(\"Input must be of type 'boolean'\");\n        e.CONFIG.destroy_target = t;\n      }, this.setupCanvasContext = function () {\n        if (!e.CTX) {\n          var t = document.createElement(\"canvas\");\n          e.CTX = t.getContext(\"2d\"), t.width = 2 * window.innerWidth, t.height = 2 * window.innerHeight, t.style.position = \"fixed\", t.style.top = \"0\", t.style.left = \"0\", t.style.width = \"calc(100%)\", t.style.height = \"calc(100%)\", t.style.margin = \"0\", t.style.padding = \"0\", t.style.zIndex = \"999999999\", t.style.pointerEvents = \"none\", document.body.appendChild(t), window.addEventListener(\"resize\", function () {\n            t.width = 2 * window.innerWidth, t.height = 2 * window.innerHeight;\n          });\n        }\n      }, this.setupElement = function (t) {\n        var n;\n        r.element = document.getElementById(t), null === (n = r.element) || void 0 === n || n.addEventListener(\"click\", function (t) {\n          var n = new o(2 * t.clientX, 2 * t.clientY);\n          r.bursts.push(new i(n)), e.CONFIG.destroy_target && (r.element.style.visibility = \"hidden\");\n        });\n      }, this.update = function (t) {\n        r.delta_time = (t - r.time) / 1e3, r.time = t;\n\n        for (var e = r.bursts.length - 1; e >= 0; e--) r.bursts[e].update(r.delta_time), 0 == r.bursts[e].particles.length && r.bursts.splice(e, 1);\n\n        r.draw(), window.requestAnimationFrame(r.update);\n      }, !n) throw new Error(\"Missing id\");\n      e.CONFIG || (e.CONFIG = new t()), this.time = new Date().getTime(), this.delta_time = 0, this.setupCanvasContext(), this.setupElement(n), window.requestAnimationFrame(this.update);\n    }\n\n    return e.prototype.draw = function () {\n      s.clearScreen();\n\n      for (var t = 0, e = this.bursts; t < e.length; t++) {\n        e[t].draw();\n      }\n    }, e;\n  }(),\n      i = function () {\n    function t(t) {\n      this.particles = [];\n\n      for (var i = 0; i < e.CONFIG.particle_count; i++) this.particles.push(new n(t));\n    }\n\n    return t.prototype.update = function (t) {\n      for (var e = this.particles.length - 1; e >= 0; e--) this.particles[e].update(t), this.particles[e].checkBounds() && this.particles.splice(e, 1);\n    }, t.prototype.draw = function () {\n      for (var t = this.particles.length - 1; t >= 0; t--) this.particles[t].draw();\n    }, t;\n  }(),\n      n = function () {\n    function t(t) {\n      this.size = new o((16 * Math.random() + 4) * e.CONFIG.particle_size, (4 * Math.random() + 4) * e.CONFIG.particle_size), this.position = new o(t.x - this.size.x / 2, t.y - this.size.y / 2), this.velocity = r.generateVelocity(), this.rotation = 360 * Math.random(), this.rotation_speed = 10 * (Math.random() - .5), this.hue = 360 * Math.random(), this.opacity = 100, this.lifetime = Math.random() + .25;\n    }\n\n    return t.prototype.update = function (t) {\n      this.velocity.y += e.CONFIG.gravity * (this.size.y / (10 * e.CONFIG.particle_size)) * t, this.velocity.x += 25 * (Math.random() - .5) * t, this.velocity.y *= .98, this.velocity.x *= .98, this.position.x += this.velocity.x, this.position.y += this.velocity.y, this.rotation += this.rotation_speed, e.CONFIG.fade && (this.opacity -= this.lifetime);\n    }, t.prototype.checkBounds = function () {\n      return this.position.y - 2 * this.size.x > 2 * window.innerHeight;\n    }, t.prototype.draw = function () {\n      s.drawRectangle(this.position, this.size, this.rotation, this.hue, this.opacity);\n    }, t;\n  }(),\n      o = function () {\n    return function (t, e) {\n      this.x = t || 0, this.y = e || 0;\n    };\n  }(),\n      r = function () {\n    function t() {}\n\n    return t.generateVelocity = function () {\n      var t = Math.random() - .5,\n          i = Math.random() - .7,\n          n = Math.sqrt(t * t + i * i);\n      return i /= n, new o((t /= n) * (Math.random() * e.CONFIG.explosion_power), i * (Math.random() * e.CONFIG.explosion_power));\n    }, t;\n  }(),\n      s = function () {\n    function t() {}\n\n    return t.clearScreen = function () {\n      e.CTX && e.CTX.clearRect(0, 0, 2 * window.innerWidth, 2 * window.innerHeight);\n    }, t.drawRectangle = function (t, i, n, o, r) {\n      e.CTX && (e.CTX.save(), e.CTX.beginPath(), e.CTX.translate(t.x + i.x / 2, t.y + i.y / 2), e.CTX.rotate(n * Math.PI / 180), e.CTX.rect(-i.x / 2, -i.y / 2, i.x, i.y), e.CTX.fillStyle = \"hsla(\" + o + \"deg, 90%, 65%, \" + r + \"%)\", e.CTX.fill(), e.CTX.restore());\n    }, t;\n  }();\n\n  return e;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Confetti);\n\n//# sourceURL=webpack://nombrededodosansmimi/./src/scripts/confetti.min.js?");

/***/ }),

/***/ "./src/scripts/floating.js":
/*!*********************************!*\
  !*** ./src/scripts/floating.js ***!
  \*********************************/
/***/ (function(module) {

eval("(function (global, factory) {\n   true ? module.exports = factory() : 0;\n})(this, function () {\n  'use strict';\n\n  function floating() {\n    var a = 0 < arguments.length && arguments[0] !== void 0 ? arguments[0] : {},\n        b = a.content,\n        c = b === void 0 ? '\\uD83D\\uDC4C' : b,\n        d = a.number,\n        e = d === void 0 ? 1 : d,\n        f = a.duration,\n        g = f === void 0 ? 10 : f,\n        h = a.repeat,\n        j = h === void 0 ? 'infinite' : h,\n        k = a.direction,\n        l = k === void 0 ? 'normal' : k,\n        m = a.size,\n        n = m === void 0 ? 2 : m,\n        o = document.createElement('style');\n    o.id = 'floating-style', document.getElementById('floating-style') || document.head.appendChild(o);\n    var p = 201,\n        q = '\\n  .float-container {\\n    width: 100vw;\\n    height: 100vh;\\n    overflow: hidden;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    pointer-events: none;\\n  }\\n\\n  .float-container div * {\\n    width: 1em;\\n    height: 1em\\n  }\\n\\n  @keyframes float{\\n    ' + Array.apply(null, {\n      length: p + 1\n    }).map(function (a, b) {\n      return {\n        percent: 100 * b / p,\n        width: 10 * Math.sin(b / 10),\n        height: 110 + b * (-120 / p)\n      };\n    }).map(function (a) {\n      var b = a.percent,\n          c = a.width,\n          d = a.height;\n      return b + '% {\\n          transform: translate(\\n            ' + c + 'vw,\\n            ' + d + 'vh\\n          )\\n        }';\n    }).join('') + '\\n  }';\n    document.getElementById('floating-style').innerHTML = q;\n    var r = document.createElement('div');\n    r.className = 'float-container';\n\n    for (var s = Array.isArray(n) ? Math.floor(Math.random() * (n[1] - n[0] + 1)) + n[0] : n, t = function (a) {\n      var b = document.createElement('div');\n      b.innerHTML = c, b.style.cssText = '\\n     position: absolute;\\n     left: 0;\\n     font-size: ' + s + 'em;\\n     transform: translateY(110vh);\\n     animation: \\n       float\\n       ' + g + 's\\n       linear\\n       ' + a * Math.random() + 's\\n       ' + j + '\\n       ' + l + ';\\n    margin-left: ' + 100 * Math.random() + 'vw;', b.addEventListener('animationend', function (a) {\n        'float' === a.animationName && r.removeChild(b);\n      }), r.appendChild(b);\n    }, u = 0; u < e; u++) t(u);\n\n    document.body.appendChild(r);\n  }\n\n  return floating;\n});\n\n//# sourceURL=webpack://nombrededodosansmimi/./src/scripts/floating.js?");

/***/ }),

/***/ "./src/scripts/hearts.js":
/*!*******************************!*\
  !*** ./src/scripts/hearts.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeart\": () => (/* binding */ createHeart)\n/* harmony export */ });\nclass FlyingHeart {\n  constructor(sContainer, sGravity) {\n    const container = document.querySelector(sContainer);\n    const heart = document.createElement('h1');\n    heart.innerHTML = '❤️';\n    heart.classList.add('flying-heart');\n    container.appendChild(heart);\n    this.heart = heart;\n    this.heartPhysics = {\n      position: [Math.random() * window.innerWidth, Math.random() * window.innerHeight],\n      speed: [Math.random() * 0.05, 0],\n      acceleration: [0, 0],\n      mass: 1\n    };\n    const gravity = document.querySelector(sGravity);\n    this.gravityBall = {\n      position: [gravity.offsetLeft + gravity.offsetWidth / 2, gravity.offsetTop + gravity.offsetHeight / 2],\n      mass: 10\n    };\n    this.timer = {\n      previousTime: 0,\n      fps: 60\n    };\n  }\n\n  startAnimation() {\n    const animate = this.animate.bind(this);\n    window.requestAnimationFrame(animate);\n  }\n\n  animate(time) {\n    const animate = this.animate.bind(this);\n    window.requestAnimationFrame(animate);\n    const dt = time - this.timer.previousTime; // animation\n\n    if (dt > 1000 / this.timer.fps) {\n      this.timer.previousTime = time;\n\n      if (this.heartPhysics.position[0] > window.innerWidth - 10 && this.heartPhysics.position[0] < window.innerWidth + 10 && this.heartPhysics.position[1] > window.innerHeight - 10 && this.heartPhysics.position[1] < window.innerHeight + 10) {\n        this.heartPhysics.speed[0] /= 2;\n        this.heartPhysics.speed[1] /= 2;\n        return;\n      }\n\n      this.heartPhysics.position[0] += this.heartPhysics.speed[0] * dt;\n      this.heartPhysics.position[1] += this.heartPhysics.speed[1] * dt;\n      this.heartPhysics.speed[0] += this.heartPhysics.acceleration[0] * dt;\n      this.heartPhysics.speed[1] += this.heartPhysics.acceleration[1] * dt;\n      this.heartPhysics.acceleration[0] = this.gravitize(0);\n      this.heartPhysics.acceleration[1] = this.gravitize(1);\n      this.heart.style.left = this.heartPhysics.position[0] + \"px\";\n      this.heart.style.top = this.heartPhysics.position[1] + \"px\";\n    }\n  }\n\n  gravitize() {\n    let dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    const G = 0.005;\n    const rd = this.heartPhysics.position[dir] - this.gravityBall.position[dir];\n    const rx = this.heartPhysics.position[0] - this.gravityBall.position[0];\n    const ry = this.heartPhysics.position[1] - this.gravityBall.position[1];\n    const r = rx * rx + ry * ry;\n    const f = -G * (1 / r);\n    return rd * f;\n  }\n\n}\n\nconst createHeart = () => {\n  const heart = new FlyingHeart(\".container\", \".days\");\n  heart.startAnimation();\n};\n\n//# sourceURL=webpack://nombrededodosansmimi/./src/scripts/hearts.js?");

/***/ }),

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ \"./src/scripts/utils.js\");\n/* harmony import */ var _hearts_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hearts.js */ \"./src/scripts/hearts.js\");\n/* harmony import */ var _floating_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floating.js */ \"./src/scripts/floating.js\");\n/* harmony import */ var _floating_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_floating_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _confetti_min_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confetti.min.js */ \"./src/scripts/confetti.min.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', async () => {\n  const overlay = document.querySelector('.loading-overlay');\n  const [days, event] = await (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.daysUntilNextDodo)();\n  overlay.classList.add('hidden');\n  (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.loadCarousel)();\n  await new Promise(resolve => setTimeout(resolve, 2000));\n  const daysContainer = document.querySelector('.days'); // animate days decrement from 100 to days\n\n  for (let i = 100; i >= days; i--) {\n    daysContainer.innerHTML = i;\n    await new Promise(resolve => setTimeout(resolve, 50 + (100 - i) - i));\n  }\n\n  let confetti = new _confetti_min_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"days\");\n  confetti.draw();\n  const text = document.querySelector('.text');\n  text.classList.add('visible');\n  const subtext = document.querySelector('.subtext');\n  subtext.innerHTML = event;\n  subtext.classList.add('visible');\n  const credits = document.querySelector('.credits');\n  credits.classList.add('visible');\n  const hearts = [\"💖\", \"💘\", \"💓\", \"💕\", \"💛\", \"💙\", \"💜\", \"💚\", \"💗\", \"💝\", \"💞\", \"💟\"];\n  _floating_js__WEBPACK_IMPORTED_MODULE_2___default()({\n    content: hearts[Math.floor(Math.random() * hearts.length)],\n    number: days,\n    size: 2\n  });\n});\n\n//# sourceURL=webpack://nombrededodosansmimi/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"daysUntilNextDodo\": () => (/* binding */ daysUntilNextDodo),\n/* harmony export */   \"loadCarousel\": () => (/* binding */ loadCarousel)\n/* harmony export */ });\nconst ITEM_LENGTH = 11;\n\nconst fetchNextDodo = async () => {\n  const response = await fetch(\"https://faas-lon1-917a94a7.doserverless.co/api/v1/web/fn-e61fc1e4-1801-4bd5-8c0c-92857d566040/notion/fetch\");\n  const data = await response.json();\n  return [data.next, data.event];\n};\n\nconst daysUntilNextDodo = async () => {\n  const [nextDodo, event] = await fetchNextDodo();\n  const today = new Date();\n  const nextDodoDate = new Date(nextDodo);\n  const diffTime = Math.abs(nextDodoDate - today);\n  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));\n  return [diffDays, event];\n};\nconst loadCarousel = () => {\n  const carrouselItemsContainer = document.querySelector('.carrousel-items');\n  const carrouselItems = getItems();\n  const domItems = [];\n  carrouselItems.forEach(item => {\n    const img = document.createElement('img');\n    img.src = item;\n    img.classList.add('carrousel-item');\n    carrouselItemsContainer.appendChild(img);\n    domItems.push(img);\n  });\n  let i = Math.floor(Math.random() * domItems.length);\n  domItems[i].classList.add('visible');\n  let beforeI = 0;\n  setInterval(() => {\n    domItems[beforeI].classList.remove('after');\n    domItems[i].classList.remove('visible'); // get random number between 0 and 10\n\n    beforeI = i;\n    domItems[i].classList.add('after');\n    i = (i + 1) % domItems.length;\n    domItems[i].classList.add('visible');\n  }, 3000 + 10000 * Math.random());\n};\n\nconst getItems = () => {\n  const items = [];\n\n  for (let i = 0; i < ITEM_LENGTH; i++) {\n    items.push(`./assets/images/${i + 1}.jpg`);\n  }\n\n  return items;\n};\n\n//# sourceURL=webpack://nombrededodosansmimi/./src/scripts/utils.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://nombrededodosansmimi/./src/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/scripts/main.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/styles/main.scss");
/******/ 	
/******/ })()
;