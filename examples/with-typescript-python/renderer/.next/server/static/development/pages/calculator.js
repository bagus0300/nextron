module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/index.ts":
/*!**************************!*\
  !*** ./helpers/index.ts ***!
  \**************************/
/*! exports provided: resolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resolve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resolve */ "./helpers/resolve.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return _resolve__WEBPACK_IMPORTED_MODULE_0__["resolve"]; });




/***/ }),

/***/ "./helpers/resolve.ts":
/*!****************************!*\
  !*** ./helpers/resolve.ts ***!
  \****************************/
/*! exports provided: resolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolve", function() { return resolve; });
var resolve = function resolve(pathname) {
  if (false) {}

  return "/" + pathname;
};



/***/ }),

/***/ "./pages/calculator/index.tsx":
/*!************************************!*\
  !*** ./pages/calculator/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zerorpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zerorpc */ "zerorpc");
/* harmony import */ var zerorpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zerorpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./helpers/index.ts");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./pages/calculator/styles.css.ts");
var _jsxFileName = "D:\\Websites\\Tahiti\\nextron-don\\examples\\with-typescript-python\\renderer\\pages\\calculator\\index.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


console.log("TODO DEBUG if I import zerorpc here the client code fails silently (server is fine)");
 // tslint:disable-line

console.log("TODO DEBUG Past import of zerorpc");



var CalculatorPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CalculatorPage, _React$Component);

  function CalculatorPage() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CalculatorPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CalculatorPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.resultDiv = void 0;
    _this.client = void 0;

    _this.handleKeyDown = function (event) {
      if (event.key === "Enter") {
        _this.client.invoke("calc", event.currentTarget.value, function (error, res) {
          if (error) {
            console.error(error);
          } else {
            _this.resultDiv.textContent = res;
          }
        });
      }
    };

    return _this;
  }

  _createClass(CalculatorPage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //
      // NOTE componentDidMount is only called on the client
      //
      console.log("TODO DEBUG in calc componentDidMount");
      console.log(zerorpc__WEBPACK_IMPORTED_MODULE_1__);
      console.log("TODO DEBUG uncomment the following code once zerorpc runs on the client"); // client = new zerorpc.Client();
      // client.connect("tcp://127.0.0.1:4242");
      // client.invoke("echo", "server is ready", (error, res) => {
      //   if (error) {
      //     console.error(error);
      //   } else {
      //     console.log(res);
      //   }
      // });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("style", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, _styles_css__WEBPACK_IMPORTED_MODULE_3__["css"]), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Calculator"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ol", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
        href: Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["resolve"])("home"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Home"))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Hello Calculator!"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Input something like ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "1 + 1"), "."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "This calculator supports ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "+-*/^()"), ", whitespaces, and integers and floating numbers."), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", {
        style: {
          color: "black"
        },
        onKeyDown: this.handleKeyDown,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        ref: function ref(elem) {
          return _this2.resultDiv = elem;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })));
    }
  }]);

  return CalculatorPage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CalculatorPage);

/***/ }),

/***/ "./pages/calculator/styles.css.ts":
/*!****************************************!*\
  !*** ./pages/calculator/styles.css.ts ***!
  \****************************************/
/*! exports provided: css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
var css = "\n  .container {\n    position: absolute;\n    top: 30%;\n    left: 10px;\n  }\n\n  .container h2 {\n    font-size: 5rem;\n  }\n\n  .container a {\n    font-size: 1.4rem;\n  }\n\n  .container ol {\n    padding-left: 20px;\n  }\n";


/***/ }),

/***/ 4:
/*!******************************************!*\
  !*** multi ./pages/calculator/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/calculator/index.tsx */"./pages/calculator/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "zerorpc":
/*!**************************!*\
  !*** external "zerorpc" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zerorpc");

/***/ })

/******/ });
//# sourceMappingURL=calculator.js.map