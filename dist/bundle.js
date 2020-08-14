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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio */ \"./src/audio/index.js\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_audio__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/state/index.js\");\n/* harmony import */ var _domNodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domNodes */ \"./src/domNodes/index.js\");\n/* harmony import */ var _hedges__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hedges */ \"./src/hedges/index.js\");\n\r\n\r\n\r\n\r\n//always contain the latest value of microphone sound level\r\nlet soundLevel = 0\r\n_audio__WEBPACK_IMPORTED_MODULE_0___default()( x => {\r\n  if(x) \r\n      soundLevel = x * _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sensitivity\r\n})\r\n\r\ndocument.addEventListener('keydown', e => {\r\n    const key = e.keyCode \r\n    if(key === 32){\r\n      startGame()\r\n    }\r\n})\r\n\r\nconst startGame = () => {\r\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameInPlay = true \r\n    Object(_hedges__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n    requestAnimationFrame(updateScreen)\r\n}\r\n\r\nconst updateScreen = () => {\r\n  if(!_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameOver){    \r\n    // get container height \r\n    const containerHeight = Math.round(_domNodes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].container.getBoundingClientRect().height)\r\n    // distance from top \r\n    const characterOffsetTop = _domNodes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].character.offsetTop\r\n                          //if character is not touching the bottom\r\n    if(soundLevel < 400 && characterOffsetTop < containerHeight - 50 ) {\r\n        _domNodes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].character.style.top = characterOffsetTop +4 + \"px\"\r\n    }                    // if character is not touching the top\r\n    else if(soundLevel > 400 && characterOffsetTop > 0){\r\n      _domNodes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].character.style.top = characterOffsetTop -4 + \"px\"\r\n    }\r\n    moveHedges()\r\n    updateScore()\r\n    requestAnimationFrame(updateScreen)\r\n  }\r\n}\r\n\r\nconst moveHedges = () => {\r\n  const hedges = document.getElementsByClassName('hedge')\r\n  for(let hedge of hedges) {\r\n      let hedgeLeft = Math.round(hedge.getBoundingClientRect().left)\r\n      hedgeLeft-= 2\r\n      if(hedgeLeft <= -30){\r\n        _domNodes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].container.removeChild(hedge)\r\n      }\r\n      hedge.style.left = hedgeLeft + 'px'\r\n  }\r\n}\r\nconst updateScore = () => {\r\n  const distances = []\r\n  const hedges = document.getElementsByClassName('hedge')\r\n\r\n  for(let hedge of hedges) {\r\n    const hedgeDistanceFromLeft = hedge.offsetLeft + 30 \r\n    const characterDistanceFromLeft = _domNodes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].character.offsetLeft \r\n    const distance = hedgeDistanceFromLeft - characterDistanceFromLeft\r\n    if(distance >= -3)\r\n      distances.push(hedge)  \r\n  }\r\n\r\n  if(distances.length){\r\n    if(distances[0].offsetLeft+30 < _domNodes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].character.offsetLeft) {\r\n      _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerScore++\r\n      _domNodes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].score.innerHTML = _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].playerScore\r\n    }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/audio/index.js":
/*!****************************!*\
  !*** ./src/audio/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Courtesy www/0AV.com, LGPL license or as set by forked host, Travis Holliday, https://codepen.io/travisholliday/pen/gyaJk \r\n const getMicSoundLevel = (cb) => {\r\n\tnavigator.getUserMedia = navigator.getUserMedia ||\r\n\tnavigator.webkitGetUserMedia ||\r\n\tnavigator.mozGetUserMedia;\r\n\tif (navigator.getUserMedia) {\r\n\tnavigator.getUserMedia({\r\n\taudio: true\r\n\t}, function(stream) {\r\n\t\taudioContext = new AudioContext();\r\n\t\tanalyser = audioContext.createAnalyser();\r\n\t\tmicrophone = audioContext.createMediaStreamSource(stream);\r\n\t\tjavascriptNode = audioContext.createScriptProcessor(2048, 1, 1);\r\n   \r\n\t\tanalyser.smoothingTimeConstant = 0.8;\r\n\t\tanalyser.fftSize = 1024;\r\n   \r\n\t\tmicrophone.connect(analyser);\r\n\t\tanalyser.connect(javascriptNode);\r\n\t\tjavascriptNode.connect(audioContext.destination);\r\n   \r\n   \r\n\t\tjavascriptNode.onaudioprocess = () => {\r\n\t\t\tlet array = new Uint8Array(analyser.frequencyBinCount);\r\n\t\t\tanalyser.getByteFrequencyData(array);\r\n\t\t\tlet values = 0;\r\n   \r\n\t\t\tlet length = array.length;\r\n\t\t\tfor (let i = 0; i < length; i++) {\r\n\t\t\t  values += (array[i]);\r\n\t\t\t}\r\n\t\t\tif(typeof cb === \"function\")\r\n\t\t\tcb(values)   \r\n\t\t} \r\n\t   },\r\n\t   function(err) {\r\n\t\t console.log(\"The following error occured: \" + err.name)\r\n\t   });\r\n   } else {\r\n\t console.log(\"getUserMedia not supported\");\r\n\t}\r\n   }\r\n\r\n\r\n   getMicSoundLevel()\r\n   module.exports = getMicSoundLevel\n\n//# sourceURL=webpack:///./src/audio/index.js?");

/***/ }),

/***/ "./src/domNodes/index.js":
/*!*******************************!*\
  !*** ./src/domNodes/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst nodes = {\r\n    container: document.querySelector('.container'),\r\n    character: document.querySelector('.character'),\r\n    score: document.querySelector('.score')\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (nodes); \n\n//# sourceURL=webpack:///./src/domNodes/index.js?");

/***/ }),

/***/ "./src/hedges/index.js":
/*!*****************************!*\
  !*** ./src/hedges/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domNodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domNodes */ \"./src/domNodes/index.js\");\n\r\nconst createHedges = () => {    \r\n    setInterval(() => {\r\n    const hedgeTop = document.createElement('div')\r\n    const hedgeBottom = document.createElement('div')\r\n\r\n    hedgeTop.setAttribute('class', 'hedge')\r\n    hedgeBottom.setAttribute('class', 'hedge')\r\n    \r\n    hedgeBottom.style.bottom = 0 \r\n\r\n    _domNodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].container.appendChild(hedgeTop)\r\n    _domNodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].container.appendChild(hedgeBottom)\r\n    }, 2000)\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (createHedges);\n\n//# sourceURL=webpack:///./src/hedges/index.js?");

/***/ }),

/***/ "./src/state/index.js":
/*!****************************!*\
  !*** ./src/state/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// contain the current state of the game \r\nconst states = {\r\n    playerScore: 0,\r\n    gameSpeed: 1,\r\n    gameInPlay: false,\r\n    gameOver: false,\r\n    sensitivity: 0.05\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (states);\n\n//# sourceURL=webpack:///./src/state/index.js?");

/***/ })

/******/ });