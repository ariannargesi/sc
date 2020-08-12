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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audio */ \"./src/audio/index.js\");\n/* harmony import */ var _audio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_audio__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/state/index.js\");\n\r\n\r\n//always contain the latest value of microphone sound level\r\nlet soundLevel = 0\r\n_audio__WEBPACK_IMPORTED_MODULE_0___default()( x => {\r\n  if(x) \r\n      soundLevel = x  \r\n})\r\ndocument.addEventListener(\"keydown\", e => {\r\n  const keyCode = e.keyCode \r\n  if(keyCode === 32){\r\n    startGame()\r\n  }\r\n})\r\nconst startGame = () => {\r\n  _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gameInPlay = true \r\n  requestAnimationFrame(update)\r\n}\r\n\r\nconst update = () => {\r\n  console.log(\"update function\")\r\n  requestAnimationFrame(update)\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/audio/index.js":
/*!****************************!*\
  !*** ./src/audio/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Courtesy www/0AV.com, LGPL license or as set by forked host, Travis Holliday, https://codepen.io/travisholliday/pen/gyaJk \r\n const getMicSoundLevel = (cb) => {\r\n\tnavigator.getUserMedia = navigator.getUserMedia ||\r\n\tnavigator.webkitGetUserMedia ||\r\n\tnavigator.mozGetUserMedia;\r\n\tif (navigator.getUserMedia) {\r\n\tnavigator.getUserMedia({\r\n\taudio: true\r\n\t}, function(stream) {\r\n\t\taudioContext = new AudioContext();\r\n\t\tanalyser = audioContext.createAnalyser();\r\n\t\tmicrophone = audioContext.createMediaStreamSource(stream);\r\n\t\tjavascriptNode = audioContext.createScriptProcessor(2048, 1, 1);\r\n   \r\n\t\tanalyser.smoothingTimeConstant = 0.8;\r\n\t\tanalyser.fftSize = 1024;\r\n   \r\n\t\tmicrophone.connect(analyser);\r\n\t\tanalyser.connect(javascriptNode);\r\n\t\tjavascriptNode.connect(audioContext.destination);\r\n   \r\n   \r\n\t\tjavascriptNode.onaudioprocess = () => {\r\n\t\t\tlet array = new Uint8Array(analyser.frequencyBinCount);\r\n\t\t\tanalyser.getByteFrequencyData(array);\r\n\t\t\tlet values = 0;\r\n   \r\n\t\t\tlet length = array.length;\r\n\t\t\tfor (let i = 0; i < length; i++) {\r\n\t\t\t  values += (array[i]);\r\n\t\t\t}\r\n\t\t\tif(typeof cb === \"function\")\r\n\t\t\tcb(values)   \r\n\t\t} \r\n\t   },\r\n\t   function(err) {\r\n\t\t console.log(\"The following error occured: \" + err.name)\r\n\t   });\r\n   } else {\r\n\t console.log(\"getUserMedia not supported\");\r\n\t}\r\n   }\r\n\r\n\r\n   getMicSoundLevel()\r\n   module.exports = getMicSoundLevel\n\n//# sourceURL=webpack:///./src/audio/index.js?");

/***/ }),

/***/ "./src/state/index.js":
/*!****************************!*\
  !*** ./src/state/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// contain the current state of the game \r\nconst state = {\r\n    playerScore: 0,\r\n    gameSpeed: 1,\r\n    gameInPlay: false,\r\n    gameOver: false,\r\n    animationReapet: null\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (state); \n\n//# sourceURL=webpack:///./src/state/index.js?");

/***/ })

/******/ });