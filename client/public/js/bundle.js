/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoAside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoAside.js */ \"./src/js/TodoAside.js\");\n/* harmony import */ var _TodoHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoHeader.js */ \"./src/js/TodoHeader.js\");\n\n\ncustomElements.define('todo-header', _TodoHeader_js__WEBPACK_IMPORTED_MODULE_1__.TodoHeader);\ncustomElements.define('todo-header-title', _TodoHeader_js__WEBPACK_IMPORTED_MODULE_1__.TodoHeaderTitle);\ncustomElements.define('todo-header-menu', _TodoHeader_js__WEBPACK_IMPORTED_MODULE_1__.TodoHeaderMenu);\ncustomElements.define('todo-aside-close-icon', _TodoAside_js__WEBPACK_IMPORTED_MODULE_0__.TodoAsideCloseIcon);\ncustomElements.define('todo-aside', _TodoAside_js__WEBPACK_IMPORTED_MODULE_0__.TodoAside);\n\n//# sourceURL=webpack://client/./src/js/App.js?");

/***/ }),

/***/ "./src/js/TodoAside.js":
/*!*****************************!*\
  !*** ./src/js/TodoAside.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoAside\": function() { return /* binding */ TodoAside; },\n/* harmony export */   \"TodoAsideCloseIcon\": function() { return /* binding */ TodoAsideCloseIcon; }\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar TodoAside = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(TodoAside, _HTMLElement);\n\n  var _super = _createSuper(TodoAside);\n\n  function TodoAside() {\n    _classCallCheck(this, TodoAside);\n\n    return _super.call(this);\n  }\n\n  _createClass(TodoAside, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.connectWithTodoHeaderMenu();\n    }\n  }, {\n    key: \"connectWithTodoHeaderMenu\",\n    value: function connectWithTodoHeaderMenu() {\n      var $todoHeaderMenu = document.querySelector('todo-header-menu');\n      $todoHeaderMenu.connectWithTodoAside(this);\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this.style.right = '0%';\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.style.right = '-100%';\n    }\n  }]);\n\n  return TodoAside;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\nvar TodoAsideCloseIcon = /*#__PURE__*/function (_HTMLElement2) {\n  _inherits(TodoAsideCloseIcon, _HTMLElement2);\n\n  var _super2 = _createSuper(TodoAsideCloseIcon);\n\n  function TodoAsideCloseIcon() {\n    _classCallCheck(this, TodoAsideCloseIcon);\n\n    return _super2.call(this);\n  }\n\n  _createClass(TodoAsideCloseIcon, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.addEventListener('click', this.onClick);\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick() {\n      var $todoAside = document.querySelector('todo-aside');\n      $todoAside.close();\n    }\n  }]);\n\n  return TodoAsideCloseIcon;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n\n\n//# sourceURL=webpack://client/./src/js/TodoAside.js?");

/***/ }),

/***/ "./src/js/TodoHeader.js":
/*!******************************!*\
  !*** ./src/js/TodoHeader.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoHeader\": function() { return /* binding */ TodoHeader; },\n/* harmony export */   \"TodoHeaderMenu\": function() { return /* binding */ TodoHeaderMenu; },\n/* harmony export */   \"TodoHeaderTitle\": function() { return /* binding */ TodoHeaderTitle; }\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar TodoHeader = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(TodoHeader, _HTMLElement);\n\n  var _super = _createSuper(TodoHeader);\n\n  function TodoHeader() {\n    _classCallCheck(this, TodoHeader);\n\n    return _super.call(this);\n  }\n\n  _createClass(TodoHeader, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {}\n  }]);\n\n  return TodoHeader;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\nvar TodoHeaderMenu = /*#__PURE__*/function (_HTMLElement2) {\n  _inherits(TodoHeaderMenu, _HTMLElement2);\n\n  var _super2 = _createSuper(TodoHeaderMenu);\n\n  function TodoHeaderMenu() {\n    _classCallCheck(this, TodoHeaderMenu);\n\n    return _super2.call(this);\n  }\n\n  _createClass(TodoHeaderMenu, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.addEventListener('click', this.onClick);\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick() {\n      this.$aside.open();\n    }\n  }, {\n    key: \"connectWithTodoAside\",\n    value: function connectWithTodoAside($el) {\n      this.$aside = $el;\n    }\n  }]);\n\n  return TodoHeaderMenu;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\nvar TodoHeaderTitle = /*#__PURE__*/function (_HTMLElement3) {\n  _inherits(TodoHeaderTitle, _HTMLElement3);\n\n  var _super3 = _createSuper(TodoHeaderTitle);\n\n  function TodoHeaderTitle() {\n    _classCallCheck(this, TodoHeaderTitle);\n\n    return _super3.call(this);\n  }\n\n  _createClass(TodoHeaderTitle, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {}\n  }]);\n\n  return TodoHeaderTitle;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n//# sourceURL=webpack://client/./src/js/TodoHeader.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/App.js");
/******/ 	
/******/ })()
;