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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TodoAside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoAside.js */ \"./src/js/TodoAside.js\");\n/* harmony import */ var _TodoHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoHeader.js */ \"./src/js/TodoHeader.js\");\n/* harmony import */ var _TodoSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoSection.js */ \"./src/js/TodoSection.js\");\n/* harmony import */ var _TodoCard_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TodoCard.js */ \"./src/js/TodoCard.js\");\n\n\n\n\ncustomElements.define('todo-header', _TodoHeader_js__WEBPACK_IMPORTED_MODULE_1__.TodoHeader);\ncustomElements.define('todo-header-title', _TodoHeader_js__WEBPACK_IMPORTED_MODULE_1__.TodoHeaderTitle);\ncustomElements.define('todo-header-menu', _TodoHeader_js__WEBPACK_IMPORTED_MODULE_1__.TodoHeaderMenu);\ncustomElements.define('todo-aside-close-icon', _TodoAside_js__WEBPACK_IMPORTED_MODULE_0__.TodoAsideCloseIcon);\ncustomElements.define('todo-aside', _TodoAside_js__WEBPACK_IMPORTED_MODULE_0__.TodoAside);\ncustomElements.define('todo-log', _TodoAside_js__WEBPACK_IMPORTED_MODULE_0__.TodoLog);\ncustomElements.define('todo-section', _TodoSection_js__WEBPACK_IMPORTED_MODULE_2__.TodoSection);\ncustomElements.define('todo-section-header', _TodoSection_js__WEBPACK_IMPORTED_MODULE_2__.TodoSectionHeader);\ncustomElements.define('todo-card', _TodoCard_js__WEBPACK_IMPORTED_MODULE_3__.TodoCard);\n\n//# sourceURL=webpack://client/./src/js/App.js?");

/***/ }),

/***/ "./src/js/TodoAside.js":
/*!*****************************!*\
  !*** ./src/js/TodoAside.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoAside\": function() { return /* binding */ TodoAside; },\n/* harmony export */   \"TodoAsideCloseIcon\": function() { return /* binding */ TodoAsideCloseIcon; },\n/* harmony export */   \"TodoLog\": function() { return /* binding */ TodoLog; }\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar TodoAside = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(TodoAside, _HTMLElement);\n\n  var _super = _createSuper(TodoAside);\n\n  function TodoAside() {\n    _classCallCheck(this, TodoAside);\n\n    return _super.call(this);\n  }\n\n  _createClass(TodoAside, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.connectWithTodoHeaderMenu();\n      window.addEventListener('click', this.handleBackgroundTouchEvent.bind(this));\n    }\n  }, {\n    key: \"connectWithTodoHeaderMenu\",\n    value: function connectWithTodoHeaderMenu() {\n      var $todoHeaderMenu = document.querySelector('todo-header-menu');\n      $todoHeaderMenu.connectWithTodoAside(this);\n      this.$todoHeaderMenu = $todoHeaderMenu;\n    }\n  }, {\n    key: \"handleBackgroundTouchEvent\",\n    value: function handleBackgroundTouchEvent(evt) {\n      if (this.contains(evt.target) === false && this.$todoHeaderMenu.contains(evt.target) === false) {\n        this.close();\n      }\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      this.style.right = '0%';\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      this.style.right = '-100%';\n    }\n  }]);\n\n  return TodoAside;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\nvar TodoAsideCloseIcon = /*#__PURE__*/function (_HTMLElement2) {\n  _inherits(TodoAsideCloseIcon, _HTMLElement2);\n\n  var _super2 = _createSuper(TodoAsideCloseIcon);\n\n  function TodoAsideCloseIcon() {\n    _classCallCheck(this, TodoAsideCloseIcon);\n\n    return _super2.call(this);\n  }\n\n  _createClass(TodoAsideCloseIcon, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.addEventListener('click', this.onClick);\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick() {\n      var $todoAside = document.querySelector('todo-aside');\n      $todoAside.close();\n    }\n  }]);\n\n  return TodoAsideCloseIcon;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\nvar TodoLog = /*#__PURE__*/function (_HTMLElement3) {\n  _inherits(TodoLog, _HTMLElement3);\n\n  var _super3 = _createSuper(TodoLog);\n\n  function TodoLog() {\n    _classCallCheck(this, TodoLog);\n\n    return _super3.call(this);\n  }\n\n  _createClass(TodoLog, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.mountChildElements();\n    }\n  }, {\n    key: \"mountChildElements\",\n    value: function mountChildElements() {\n      var contents = this.getAttribute('contents');\n      var action = this.getAttribute('action');\n      var target = this.getAttribute('target');\n      var timestamp = this.getAttribute('timestamp');\n      var $todoLogIconBox = document.createElement('todo-log-icon-box');\n      var $todoLogIcon = document.createElement('todo-log-icon');\n      $todoLogIcon.textContent = '🥳';\n      $todoLogIconBox.appendChild($todoLogIcon);\n      var $todoLogBox = document.createElement('todo-log-box');\n      var $todoLogMessage = document.createElement('todo-log-message');\n      $todoLogMessage.innerHTML = this.parseContents(target, action, contents);\n      var $todoLogTime = document.createElement('todo-log-time');\n      $todoLogTime.textContent = this.parseTimestamp(+timestamp);\n      $todoLogBox.appendChild($todoLogMessage);\n      $todoLogBox.appendChild($todoLogTime);\n      this.appendChild($todoLogIconBox);\n      this.appendChild($todoLogBox);\n    }\n  }, {\n    key: \"parseContents\",\n    value: function parseContents(target, action, contents) {\n      return \"<span class=\\\"point\\\">\".concat(target, \"</span>\\uC5D0 <span class=\\\"point\\\">\").concat(contents, \"</span>\\uC744(\\uB97C) <span class=\\\"point\\\">\").concat(action, \"</span>\\uD558\\uC600\\uC2B5\\uB2C8\\uB2E4.\");\n    }\n  }, {\n    key: \"parseTimestamp\",\n    value: function parseTimestamp(timestamp) {\n      var current = new Date();\n      var diff = current - timestamp;\n      var ONE_HOUR = 1000 * 60 * 60;\n\n      if (current - timestamp < ONE_HOUR) {\n        return \"\".concat(Math.floor(diff / 1000 / 60), \"\\uBD84 \\uC804\");\n      }\n\n      var dt = new Date(timestamp);\n      return \"\".concat(dt.getFullYear(), \"-\").concat(dt.getMonth() + 1, \"-\").concat(dt.getDate(), \" \").concat(dt.getHours(), \":\").concat(dt.getMinutes() < 10 ? \"0\".concat(dt.getMinutes()) : dt.getMinutes());\n    }\n  }]);\n\n  return TodoLog;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n\n\n//# sourceURL=webpack://client/./src/js/TodoAside.js?");

/***/ }),

/***/ "./src/js/TodoCard.js":
/*!****************************!*\
  !*** ./src/js/TodoCard.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoCard\": function() { return /* binding */ TodoCard; }\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar TodoCard = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(TodoCard, _HTMLElement);\n\n  var _super = _createSuper(TodoCard);\n\n  function TodoCard() {\n    var _this;\n\n    _classCallCheck(this, TodoCard);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    _defineProperty(_assertThisInitialized(_this), \"map\", {\n      \"default\": function _default($el) {\n        $el.className = \"default\";\n\n        _this.render();\n      },\n      active: function active($el) {\n        $el.className = \"active\";\n\n        _this.renderInputCard();\n\n        _this.renderButton();\n      },\n      \"delete\": function _delete($el) {\n        $el.className = \"delete\";\n\n        _this.render();\n      },\n      drag: function drag($el) {\n        $el.className = \"drag\";\n\n        _this.render();\n      },\n      place: function place($el) {\n        $el.className = \"place\";\n\n        _this.render();\n      }\n    });\n\n    return _this;\n  }\n\n  _createClass(TodoCard, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      var state = this.getAttribute('state');\n      this.updateState(state);\n    }\n  }, {\n    key: \"attributeChangedCallback\",\n    value: function attributeChangedCallback(name, oldValue, newValue) {\n      if (name === 'state') this.updateState(newValue);\n    }\n  }, {\n    key: \"updateState\",\n    value: function updateState(state) {\n      var map = this.map;\n\n      if (map.hasOwnProperty(state)) {\n        map[state](this);\n      }\n\n      this.renderDeleteIcon();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      this.innerHTML = \"\";\n      var $todoCardTitle = document.createElement('todo-card-title');\n      var $todoCardContent = document.createElement('todo-card-content');\n      $todoCardTitle.className = 'todo-card-title';\n      $todoCardContent.className = 'todo-card-content';\n      $todoCardTitle.innerHTML = this.getAttribute('title');\n      $todoCardContent.innerHTML = this.getAttribute('content');\n      this.appendChild($todoCardTitle);\n      this.appendChild($todoCardContent);\n    }\n  }, {\n    key: \"renderButton\",\n    value: function renderButton() {\n      var $todoCardBottom = document.createElement('todo-card-Bottom');\n      var $todoCardCencelButton = document.createElement('button');\n      var $todoCardAccentButton = document.createElement('button');\n      $todoCardCencelButton.className = 'todo-card-cencel-button';\n      $todoCardAccentButton.className = 'todo-card-accent-button';\n      $todoCardCencelButton.innerHTML = '취소';\n      $todoCardAccentButton.innerHTML = '등록';\n      $todoCardBottom.appendChild($todoCardCencelButton);\n      $todoCardBottom.appendChild($todoCardAccentButton);\n      this.appendChild($todoCardBottom);\n      this.checkAccentButtonDisabled();\n    }\n  }, {\n    key: \"renderInputCard\",\n    value: function renderInputCard() {\n      this.innerHTML = \"\";\n      var $todoCardTitleInput = document.createElement('input');\n      var $todoCardContentInput = document.createElement('textarea');\n      $todoCardTitleInput.setAttribute('placeholder', '제목을 입력해주세요');\n      $todoCardContentInput.setAttribute('placeholder', '내용을 입력해주세요');\n      $todoCardTitleInput.className = \"todo-card-title-input todo-card-title\";\n      $todoCardContentInput.className = 'todo-card-content-input todo-card-content';\n      $todoCardTitleInput.addEventListener('input', this.checkAccentButtonDisabled);\n      $todoCardContentInput.addEventListener('keyup', this.checkAccentButtonDisabled);\n      this.appendChild($todoCardTitleInput);\n      this.appendChild($todoCardContentInput);\n    }\n  }, {\n    key: \"checkAccentButtonDisabled\",\n    value: function checkAccentButtonDisabled() {\n      var $todoCardTitle = document.querySelector('.todo-card-title-input');\n      var $todoCardContent = document.querySelector('.todo-card-content-input');\n      var $todoCardAccentButton = document.querySelector('.todo-card-accent-button');\n\n      if ($todoCardTitle.value.length > 0 && $todoCardContent.value.length > 0) {\n        $todoCardAccentButton.disabled = false;\n      } else {\n        $todoCardAccentButton.disabled = true;\n      }\n    }\n  }, {\n    key: \"renderDeleteIcon\",\n    value: function renderDeleteIcon() {\n      var $todoCardDeleteIcon = document.createElement('todo-card-delete-icon');\n      $todoCardDeleteIcon.innerHTML = \"X\";\n      $todoCardDeleteIcon.addEventListener('click', this.handleDeleteIconClickEvent.bind(this));\n      this.appendChild($todoCardDeleteIcon);\n    }\n  }, {\n    key: \"handleDeleteIconClickEvent\",\n    value: function handleDeleteIconClickEvent() {\n      this.setAttribute('state', 'delete');\n      alert('삭제');\n    }\n  }], [{\n    key: \"observedAttributes\",\n    get: function get() {\n      return ['state'];\n    }\n  }]);\n\n  return TodoCard;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n//# sourceURL=webpack://client/./src/js/TodoCard.js?");

/***/ }),

/***/ "./src/js/TodoHeader.js":
/*!******************************!*\
  !*** ./src/js/TodoHeader.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoHeader\": function() { return /* binding */ TodoHeader; },\n/* harmony export */   \"TodoHeaderMenu\": function() { return /* binding */ TodoHeaderMenu; },\n/* harmony export */   \"TodoHeaderTitle\": function() { return /* binding */ TodoHeaderTitle; }\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar TodoHeader = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(TodoHeader, _HTMLElement);\n\n  var _super = _createSuper(TodoHeader);\n\n  function TodoHeader() {\n    _classCallCheck(this, TodoHeader);\n\n    return _super.call(this);\n  }\n\n  _createClass(TodoHeader, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {}\n  }]);\n\n  return TodoHeader;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\nvar TodoHeaderMenu = /*#__PURE__*/function (_HTMLElement2) {\n  _inherits(TodoHeaderMenu, _HTMLElement2);\n\n  var _super2 = _createSuper(TodoHeaderMenu);\n\n  function TodoHeaderMenu() {\n    _classCallCheck(this, TodoHeaderMenu);\n\n    return _super2.call(this);\n  }\n\n  _createClass(TodoHeaderMenu, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.addEventListener('click', this.onClick);\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick() {\n      this.$aside.open();\n    }\n  }, {\n    key: \"connectWithTodoAside\",\n    value: function connectWithTodoAside($el) {\n      this.$aside = $el;\n    }\n  }]);\n\n  return TodoHeaderMenu;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\nvar TodoHeaderTitle = /*#__PURE__*/function (_HTMLElement3) {\n  _inherits(TodoHeaderTitle, _HTMLElement3);\n\n  var _super3 = _createSuper(TodoHeaderTitle);\n\n  function TodoHeaderTitle() {\n    _classCallCheck(this, TodoHeaderTitle);\n\n    return _super3.call(this);\n  }\n\n  _createClass(TodoHeaderTitle, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {}\n  }]);\n\n  return TodoHeaderTitle;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n//# sourceURL=webpack://client/./src/js/TodoHeader.js?");

/***/ }),

/***/ "./src/js/TodoSection.js":
/*!*******************************!*\
  !*** ./src/js/TodoSection.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TodoSection\": function() { return /* binding */ TodoSection; },\n/* harmony export */   \"TodoSectionHeader\": function() { return /* binding */ TodoSectionHeader; }\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _wrapNativeSuper(Class) { var _cache = typeof Map === \"function\" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== \"function\") { throw new TypeError(\"Super expression must either be null or a function\"); } if (typeof _cache !== \"undefined\") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _isNativeFunction(fn) { return Function.toString.call(fn).indexOf(\"[native code]\") !== -1; }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar TodoSection = /*#__PURE__*/function (_HTMLElement) {\n  _inherits(TodoSection, _HTMLElement);\n\n  var _super = _createSuper(TodoSection);\n\n  function TodoSection() {\n    _classCallCheck(this, TodoSection);\n\n    return _super.call(this);\n  }\n\n  _createClass(TodoSection, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      console.log('TodoSection');\n    }\n  }]);\n\n  return TodoSection;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\nvar TodoSectionHeader = /*#__PURE__*/function (_HTMLElement2) {\n  _inherits(TodoSectionHeader, _HTMLElement2);\n\n  var _super2 = _createSuper(TodoSectionHeader);\n\n  function TodoSectionHeader() {\n    _classCallCheck(this, TodoSectionHeader);\n\n    return _super2.call(this);\n  }\n\n  _createClass(TodoSectionHeader, [{\n    key: \"connectedCallback\",\n    value: function connectedCallback() {\n      this.mountChildelements();\n    }\n  }, {\n    key: \"mountChildelements\",\n    value: function mountChildelements() {\n      var title = this.getAttribute('title');\n      var count = this.getAttribute('count');\n      var $todoSectionHeaderTitle = document.createElement('todo-section-header-title');\n      var $todoSectionHeaderCount = document.createElement('todo-section-header-count');\n      var $todoSectionHeaderAddIcon = document.createElement('todo-section-header-add-icon');\n      $todoSectionHeaderTitle.textContent = title;\n      $todoSectionHeaderCount.textContent = count;\n      $todoSectionHeaderAddIcon.textContent = '+';\n      this.appendChild($todoSectionHeaderTitle);\n      this.appendChild($todoSectionHeaderCount);\n      this.appendChild($todoSectionHeaderAddIcon);\n    }\n  }]);\n\n  return TodoSectionHeader;\n}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));\n\n\n\n//# sourceURL=webpack://client/./src/js/TodoSection.js?");

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