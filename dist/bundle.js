/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: grid;\r\n  grid-template: 100px 1fr 50px / 1fr 1fr;\r\n}\r\n\r\n.header,\r\n.main,\r\n.footer {\r\n  grid-area: span 1 / span 2;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 36px;\r\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n  letter-spacing: 1px;\r\n  background-image: linear-gradient(white, skyblue);\r\n}\r\n\r\n.footer {\r\n  background-color: #006994;\r\n}\r\n\r\nh1 {\r\n  -webkit-text-stroke: 1px black;\r\n  color: #ced3d4;\r\n}\r\n\r\nh3 {\r\n  margin: 0px auto;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  background-image: linear-gradient(skyblue, #006994);\r\n}\r\n\r\n.main > div {\r\n  grid-area: span 1 / span 1;\r\n  width: 50%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.new-game {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  height: 100px;\r\n  width: 200px;\r\n  font-size: 30px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.setup {\r\n  background-color: white;\r\n  height: 700px;\r\n  width: 900px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  /* transform: translate(-50%, -50%); */\r\n}\r\n\r\n.setup {\r\n  opacity: 0;\r\n  transform: translate(-50%, -100%);\r\n}\r\n\r\n.setup.show {\r\n  opacity: 1;\r\n  transform: translate(-50%, -50%);\r\n  transition: transform .5s ease-in-out, opacity .3s ease-in-out;\r\n}\r\n\r\n\r\n.setup-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.setup-div > div {\r\n  display: flex;\r\n  gap: 30px;\r\n}\r\n\r\n.setup-div .ships-list {\r\n  outline: 1px solid black;\r\n  height: 400px;\r\n  width: 200px;\r\n}\r\n\r\n.rotate-btn,\r\n.ships-list button {\r\n  width: 90%;\r\n  height: 60px;\r\n  font-size: 24px;\r\n  margin: 10px 5%;\r\n}\r\n\r\n.ships-list button {\r\n  pointer-events: none;\r\n}\r\n\r\n.board,\r\n.setup .setup-board {\r\n  height: 500px;\r\n  width: 500px;\r\n  outline: 3px solid black;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  background-color: rgb(167, 234, 255);\r\n}\r\n\r\ndialog::backdrop {\r\n  background-color: gray;\r\n  opacity: .5;\r\n}\r\n\r\n.invalid {\r\n  background-color: red;\r\n}\r\n\r\n.occupied {\r\n  background-color: gray;\r\n}\r\n\r\n.highlight {\r\n  background-color: rgb(0, 255, 4);\r\n}\r\n\r\nh2 {\r\n  font-size: 24px;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.fight,\r\n.retreat {\r\n  height: 60px;\r\n  width: 200px;\r\n  font-size: 24px;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.sunk {\r\n  background-color: rgb(118, 1, 1);\r\n}\r\n\r\n.grid {\r\n  border: 1px solid black;\r\n}\r\n\r\n.hit {\r\n  background-color: red;\r\n  animation: shake .7s ease-in-out;\r\n}\r\n\r\n.miss {\r\n  animation: from-center .5s ease-in-out;\r\n  background-color: #0066cc;\r\n}\r\n\r\n.disabled {\r\n  color: gray;\r\n  pointer-events: none;\r\n}\r\n\r\n@keyframes shake {\r\n  0% {\r\n    transform: translate(0%);\r\n  }\r\n\r\n  20% {\r\n    transform: translate(3px, 1px);\r\n  }\r\n\r\n  80% {\r\n    transform: translate(-3px, -1px);\r\n  }\r\n\r\n  100% {\r\n    transform: translate(0%)\r\n  }\r\n}\r\n\r\n@keyframes from-center {\r\n  0% {\r\n    transform: scale(0);\r\n  }\r\n\r\n  80% {\r\n    transform: scale(1.1);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://template/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://template/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/dom-handler.ts":
/*!************************************!*\
  !*** ./src/scripts/dom-handler.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst createDomHandler = () => {\n    const dialog = document.querySelector(\".setup\");\n    const openSetup = () => {\n        dialog.showModal();\n        dialog.classList.add(\"show\");\n    };\n    const closeSetup = () => {\n        // clumsy but gets the job done. i dont want to break it lol\n        // clear ships list when the player clicks on 'retreat'\n        const shipsListDiv = document.querySelector(\".ships-list\");\n        shipsListDiv.innerHTML = \"\";\n        dialog.close();\n        dialog.classList.remove(\"show\");\n    };\n    const drawGrid = (div, gameboard = null) => {\n        // reset div before adding new content\n        while (div.firstChild)\n            div.removeChild(div.firstChild);\n        // slice needed because computed style includes 'px'\n        const divStyle = getComputedStyle(div);\n        let width = Number(divStyle.width.slice(0, -2)) / 10;\n        for (let y = 9; y >= 0; y--) {\n            for (let x = 0; x < 10; x++) {\n                const grid = document.createElement(\"div\");\n                grid.classList.add(\"grid\");\n                grid.style.height = `${width}px`;\n                grid.style.width = `${width}px`;\n                grid.setAttribute(\"coords\", JSON.stringify([x, y]));\n                div.appendChild(grid);\n            }\n        }\n        if (gameboard !== null) {\n            let positions = Object.keys(gameboard.shipPositions);\n            positions.forEach((coord) => {\n                document\n                    .querySelector(`[coords=\"[${JSON.parse(coord)}]\"]`)\n                    .classList.add(\"occupied\");\n            });\n        }\n    };\n    const loadShipsList = () => {\n        const shipsList = document.querySelector(\".ships-list\");\n        let shipNames = [\n            \"Carrier (5)\",\n            \"Battleship (4)\",\n            \"Cruiser (3)\",\n            \"Submarine (3)\",\n            \"Destroyer (2)\",\n        ];\n        shipNames.forEach((ship) => {\n            const shipBtn = document.createElement(\"button\");\n            shipBtn.textContent = ship;\n            shipBtn.setAttribute(\"type\", \"button\");\n            shipsList.appendChild(shipBtn);\n        });\n    };\n    const clearGrids = () => {\n        document.querySelector(\".player\").innerHTML = \"\";\n        document.querySelector(\".computer\").innerHTML = \"\";\n    };\n    return { openSetup, drawGrid, loadShipsList, closeSetup, clearGrids };\n};\nexports[\"default\"] = createDomHandler;\n\n\n//# sourceURL=webpack://template/./src/scripts/dom-handler.ts?");

/***/ }),

/***/ "./src/scripts/gameboard.ts":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./src/scripts/helpers.ts\");\nconst createGameboard = (player) => {\n    let hits = [];\n    let misses = [];\n    let shipPositions = {};\n    let activeShips = [];\n    // does not check if occupied, would rely on gameflow to check\n    const placeShip = (ship, coord, direction) => {\n        let x = Number(coord[0]);\n        let y = Number(coord[1]);\n        let length = ship.getLength();\n        activeShips.push(length);\n        for (let i = 0; i < length; i++) {\n            shipPositions[JSON.stringify([x, y])] = ship;\n            if (direction === \"horizontal\")\n                x += 1;\n            else\n                y -= 1;\n        }\n    };\n    const receiveAttack = (coord) => {\n        // coords recorded in JSON for easy comparison\n        let coordStr = JSON.stringify(coord);\n        if (shipPositions[coordStr]) {\n            let ship = shipPositions[coordStr];\n            ship.hit();\n            if (ship.isSunk()) {\n                // bug waiting to happen\n                activeShips.splice(activeShips.indexOf(ship.getLength()), 1);\n            }\n            hits.push(coordStr);\n            if (areAllSunk()) {\n                return `${player}`;\n            }\n            return true;\n        }\n        misses.push(coordStr);\n        return false;\n    };\n    const getHits = () => {\n        return hits;\n    };\n    const getMisses = () => {\n        return misses;\n    };\n    const areAllSunk = () => {\n        if (activeShips.length < 1)\n            return true;\n        return false;\n    };\n    const clear = () => {\n        hits = [];\n        misses = [];\n        shipPositions = {};\n        activeShips = [];\n    };\n    // returns false if invalid, list of coordinates if valid\n    const checkPlacement = (grid, length, direction) => {\n        // parse and push coords into shipCoordinates\n        let shipCoordinates = [];\n        let [x, y] = JSON.parse(grid.getAttribute(\"coords\"));\n        if (direction === \"horizontal\") {\n            for (let i = 0; i < length; i++) {\n                shipCoordinates.push([x, y]);\n                x += 1;\n            }\n        }\n        else {\n            for (let i = 0; i < length; i++) {\n                shipCoordinates.push([x, y]);\n                y -= 1;\n            }\n        }\n        // checking if out of bounds\n        const countOutOfBounds = shipCoordinates.reduce((invalid, coord) => {\n            let x = Number(coord[0]);\n            let y = Number(coord[1]);\n            if (x > 9 || y > 9 || x < 0 || y < 0)\n                return invalid + 1;\n            return invalid;\n        }, 0);\n        // checking if coord is already taken\n        const countOccupiedCoords = shipCoordinates.reduce((invalid, coord) => {\n            let strCoord = JSON.stringify(coord);\n            if (shipPositions[strCoord])\n                return invalid + 1;\n            return invalid;\n        }, 0);\n        if (countOutOfBounds > 0 || countOccupiedCoords > 0)\n            return false;\n        return shipCoordinates;\n    };\n    const randomizeBoard = () => {\n        const ships = (0, helpers_1.createFiveShips)();\n        while (ships.length > 0) {\n            let ship = ships.shift();\n            let isValid = false;\n            let direction = \"horizontal\";\n            do {\n                // random direction\n                direction =\n                    Math.floor(Math.random() * 2) === 0 ? \"horizontal\" : \"vertical\";\n                // mock grid\n                let coords = JSON.stringify([\n                    Math.floor(Math.random() * 10),\n                    Math.floor(Math.random() * 10),\n                ]);\n                let grid = {\n                    getAttribute: () => coords,\n                    coords,\n                };\n                isValid = checkPlacement(grid, ship.getLength(), direction);\n            } while (!isValid);\n            placeShip(ship, isValid[0], direction);\n        }\n    };\n    const getRandomUnusedTile = () => {\n        let coordStr = \"\";\n        let x = 0;\n        let y = 0;\n        // can potentially cause long loading, but shouldn't cause an infinite loop\n        while (true) {\n            x = Math.floor(Math.random() * 10);\n            y = Math.floor(Math.random() * 10);\n            coordStr = JSON.stringify([x, y]);\n            if (!hits.includes(coordStr) && !misses.includes(coordStr))\n                break;\n        }\n        return coordStr;\n    };\n    // should be in domHandler\n    const highlightShips = () => {\n        let positions = Object.keys(shipPositions);\n        positions.forEach((coord) => {\n            document\n                .querySelector(`[coords=\"[${JSON.parse(coord)}]\"]`)\n                .classList.add(\"occupied\");\n        });\n    };\n    // draws board in console\n    const drawBoard = () => {\n        let string = \"\";\n        for (let y = 9; y >= 0; y--) {\n            for (let x = 0; x < 10; x++) {\n                if (shipPositions[JSON.stringify([x, y])]) {\n                    string += \"o \";\n                }\n                else {\n                    string += \"- \";\n                }\n            }\n            string += \"\\n\";\n        }\n        console.log(string);\n    };\n    return {\n        placeShip,\n        receiveAttack,\n        getHits,\n        getMisses,\n        areAllSunk,\n        clear,\n        drawBoard,\n        checkPlacement,\n        randomizeBoard,\n        getRandomUnusedTile,\n        highlightShips,\n        shipPositions,\n    };\n};\nexports[\"default\"] = createGameboard;\n\n\n//# sourceURL=webpack://template/./src/scripts/gameboard.ts?");

/***/ }),

/***/ "./src/scripts/helpers.ts":
/*!********************************!*\
  !*** ./src/scripts/helpers.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createFiveShips = void 0;\nconst ship_1 = __importDefault(__webpack_require__(/*! ./ship */ \"./src/scripts/ship.ts\"));\nconst createFiveShips = () => {\n    // modify to change ship sizes\n    let lengths = [5, 4, 3, 3, 2];\n    const ships = lengths.map((ship) => {\n        return (0, ship_1.default)(ship);\n    });\n    return ships;\n};\nexports.createFiveShips = createFiveShips;\n\n\n//# sourceURL=webpack://template/./src/scripts/helpers.ts?");

/***/ }),

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst dom_handler_1 = __importDefault(__webpack_require__(/*! ./dom-handler */ \"./src/scripts/dom-handler.ts\"));\n__webpack_require__(/*! ../styles/styles.css */ \"./src/styles/styles.css\");\nconst ship_1 = __importDefault(__webpack_require__(/*! ./ship */ \"./src/scripts/ship.ts\"));\nconst gameboard_1 = __importDefault(__webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.ts\"));\nfunction gameflow() {\n    const domHandler = (0, dom_handler_1.default)();\n    const gameboard = (0, gameboard_1.default)(\"Player\");\n    const computerGameboard = (0, gameboard_1.default)(\"Computer\");\n    let fleet = [];\n    let direction = \"horizontal\";\n    const init = () => {\n        setListeners();\n    };\n    const setListeners = () => {\n        // showModal button\n        const newGameBtn = document.querySelector(\".new-game\");\n        newGameBtn.addEventListener(\"click\", newGame);\n        // closeModal\n        const retreatBtn = document.querySelector(\".retreat\");\n        retreatBtn.addEventListener(\"click\", domHandler.closeSetup);\n        const fightBtn = document.querySelector(\".fight\");\n        fightBtn.addEventListener(\"click\", startGame);\n        const rotateBtn = document.querySelector(\".rotate-btn\");\n        rotateBtn.addEventListener(\"click\", () => {\n            if (direction === \"horizontal\")\n                direction = \"vertical\";\n            else\n                direction = \"horizontal\";\n        });\n    };\n    const setGridListeners = () => {\n        // setup grids listeners\n        const grids = document.querySelectorAll(\".setup-board .grid\");\n        grids.forEach((grid) => {\n            let isValid = false;\n            // for refactor: move to domhandler\n            // resets highlights and invalids\n            grid.addEventListener(\"mouseenter\", () => {\n                document.querySelectorAll(\".invalid\").forEach((grid) => {\n                    grid.classList.remove(\"invalid\");\n                });\n                document.querySelectorAll(\".highlight\").forEach((grid) => {\n                    grid.classList.remove(\"highlight\");\n                });\n            });\n            // add highlights on valid placements\n            grid.addEventListener(\"mouseenter\", function check(e) {\n                if (fleet.length === 0) {\n                    grids.forEach((grid) => {\n                        grid.removeEventListener(\"mouseenter\", check);\n                    });\n                }\n                else {\n                    let length = fleet[0].getLength();\n                    // returns coordinates if valid, else false\n                    isValid = gameboard.checkPlacement(grid, length, direction);\n                    if (isValid) {\n                        isValid.forEach((coord) => {\n                            let highlight = document.querySelector(`[coords=\"[${coord}]\"]`);\n                            highlight.classList.add(\"highlight\");\n                        });\n                    }\n                    else {\n                        const target = e.target;\n                        target.classList.add(\"invalid\");\n                    }\n                }\n            });\n            // listener for placing ships\n            grid.addEventListener(\"click\", () => {\n                let length = fleet[0].getLength();\n                isValid = gameboard.checkPlacement(grid, length, direction);\n                if (isValid) {\n                    let nextShip = fleet.shift();\n                    let coord = JSON.parse(grid.getAttribute(\"coords\") || \"\");\n                    gameboard.placeShip(nextShip, coord, direction);\n                    // removes ships from right pane\n                    const shipsList = document.querySelector(\".ships-list\");\n                    if (shipsList.firstChild)\n                        shipsList.removeChild(shipsList.firstChild);\n                    if (shipsList.firstChild === null) {\n                        document.querySelector(\".fight\").classList.remove(\"disabled\");\n                    }\n                    // highlights occupied tiles\n                    isValid.forEach((coord) => {\n                        let occupied = document.querySelector(`[coords=\"[${coord}]\"]`);\n                        occupied.classList.add(\"occupied\");\n                    });\n                }\n                else {\n                    alert(\"Invalid placement!\");\n                }\n            });\n        });\n    };\n    const newGame = () => {\n        // reset\n        gameboard.clear();\n        computerGameboard.clear();\n        domHandler.clearGrids();\n        domHandler.openSetup();\n        fleet = [\n            (0, ship_1.default)(5),\n            (0, ship_1.default)(4),\n            (0, ship_1.default)(3),\n            (0, ship_1.default)(3),\n            (0, ship_1.default)(2),\n        ];\n        domHandler.drawGrid(document.querySelector(\".setup-board\"));\n        domHandler.loadShipsList();\n        setGridListeners();\n        document.querySelector(\".fight\").classList.add(\"disabled\");\n    };\n    const startGame = () => {\n        document.querySelector(\".new-game\").classList.add(\"hide\");\n        domHandler.closeSetup();\n        domHandler.drawGrid(document.querySelector(\".player\"));\n        domHandler.drawGrid(document.querySelector(\".computer\"));\n        computerGameboard.randomizeBoard();\n        gameboard.highlightShips();\n        const enemyGrid = document.querySelectorAll(\".computer .grid\");\n        enemyGrid.forEach((grid) => {\n            grid.addEventListener(\"click\", function attack() {\n                // your attack\n                let coord = JSON.parse(grid.getAttribute(\"coords\") || \"\");\n                // can return true, if hit, false, if miss, or player name if all ships are sunk\n                let attackResult = computerGameboard.receiveAttack(coord);\n                if (attackResult) {\n                    grid.classList.add(\"hit\");\n                    if (typeof attackResult === \"string\")\n                        gameOver(attackResult);\n                }\n                else {\n                    grid.classList.add(\"miss\");\n                    setTimeout(enemyTurn, 500);\n                }\n                grid.removeEventListener(\"click\", attack);\n            });\n        });\n    };\n    const enemyTurn = () => {\n        let attackedCoord = JSON.parse(gameboard.getRandomUnusedTile());\n        let attackedTile = document.querySelector(`[coords=\"[${attackedCoord}]\"]`);\n        let attackResult = gameboard.receiveAttack(attackedCoord);\n        if (attackResult) {\n            attackedTile.classList.add(\"hit\");\n            if (typeof attackResult === \"string\")\n                gameOver(attackResult);\n            setTimeout(enemyTurn, 500);\n        }\n        else\n            attackedTile.classList.add(\"miss\");\n    };\n    const gameOver = (player) => {\n        alert(player + \" defeated!\");\n        document.querySelector(\".new-game\").classList.remove(\"hide\");\n    };\n    init();\n}\ngameflow();\n\n\n//# sourceURL=webpack://template/./src/scripts/index.ts?");

/***/ }),

/***/ "./src/scripts/ship.ts":
/*!*****************************!*\
  !*** ./src/scripts/ship.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction createShip(length) {\n    // closure in action with length variable\n    let shotsTaken = 0;\n    function hit() {\n        shotsTaken += 1;\n    }\n    function isSunk() {\n        if (shotsTaken >= length)\n            return true;\n        return false;\n    }\n    function getLength() {\n        return length;\n    }\n    return { hit, isSunk, getLength };\n}\n// module.exports = createShip;\nexports[\"default\"] = createShip;\n\n\n//# sourceURL=webpack://template/./src/scripts/ship.ts?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.ts");
/******/ 	
/******/ })()
;