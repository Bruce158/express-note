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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// require('less/index.less');

// var NoteManager = require('mod/note-manager.js').NoteManager;
// var Event = require('mod/event.js');
// var WaterFall = require('mod/waterfall.js');

// NoteManager.load();

// $('.add-note').on('click', function() {
//   NoteManager.add();
// })

// Event.on('waterfall', function(){
//   WaterFall.init($('#content'));
// })

//////////////////////test//////////////
let event = __webpack_require__(1)
event.on('click',function(){console.log('click1')})
event.on('click',function(){console.log('click2')})
event.on('load',function(){console.log('load1')})
event.trigger('click')
event.trigger('load')

// let toast = require('../src/js/mod/toast')
// toast('sdfsd',5000);
// let waterfall = require('../src/js/mod/note')

/***/ }),
/* 1 */
/***/ (function(module, exports) {

class EventCenter {
  constructor() {
    this.events = {}
  }
  
  on(evt, handler) {
    this.events[evt] = this.events[evt] || []
    this.events[evt].push({
      handler:handler
    })
  }

  trigger(evt, args) {
    if (!this.events[evt]) return
    for (let i = 0; i < this.events[evt].length; i++) {
      this.events[evt][i].handler(args)
    } 
  }
}

let eventCenter = new EventCenter()

module.exports = eventCenter




/***/ })
/******/ ]);