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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  height: 100vh;\r\n  width: 100vw;\r\n  display: grid;\r\n  grid-template: 100px 1fr 50px / 1fr 1fr;\r\n}\r\n\r\nbody > div {\r\n}\r\n\r\n.header,\r\n.main,\r\n.footer {\r\n  grid-area: span 1 / span 2;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 36px;\r\n  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n  letter-spacing: 1px;\r\n  background-image: linear-gradient(white, skyblue);\r\n}\r\n\r\n.footer {\r\n  background-color: #006994;\r\n}\r\n\r\nh1 {\r\n  -webkit-text-stroke: 1px black;\r\n  color: #ced3d4;\r\n}\r\n\r\nh3 {\r\n  margin: 0px auto;\r\n}\r\n\r\n.main {\r\n  display: flex;\r\n  background-image: linear-gradient(skyblue, #006994);\r\n}\r\n\r\n.main > div {\r\n  grid-area: span 1 / span 1;\r\n  width: 50%;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n/* .board {\r\n  height: 500px;\r\n  width: 500px;\r\n  border: 3px solid black;\r\n  background-color: lightblue;\r\n} */\r\n\r\n.new-game {\r\n  position: absolute;\r\n  top: 40%;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  height: 100px;\r\n  width: 200px;\r\n  font-size: 30px;\r\n  border: 2px solid black;\r\n}\r\n\r\n.setup {\r\n  background-color: white;\r\n  height: 700px;\r\n  width: 900px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.setup-div {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.setup-div > div {\r\n  display: flex;\r\n  gap: 30px;\r\n}\r\n\r\n.setup-div .ships-list {\r\n  outline: 1px solid black;\r\n  height: 400px;\r\n  width: 200px;\r\n}\r\n\r\n.rotate-btn,\r\n.ships-list button {\r\n  width: 90%;\r\n  height: 60px;\r\n  font-size: 24px;\r\n  margin: 10px 5%;\r\n}\r\n\r\n.ships-list button {\r\n  pointer-events: none;\r\n}\r\n\r\n.board,\r\n.setup .setup-board {\r\n  height: 500px;\r\n  width: 500px;\r\n  outline: 3px solid black;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  background-color: rgb(233, 249, 254);\r\n}\r\n\r\n.grid {\r\n  border: 1px solid black;\r\n}\r\n\r\ndialog::backdrop {\r\n  background-color: gray;\r\n  opacity: .5;\r\n}\r\n\r\n.invalid {\r\n  background-color: red;\r\n}\r\n\r\n.occupied {\r\n  background-color: #003153;\r\n}\r\n\r\n.highlight {\r\n  background-color: rgb(132, 226, 255);\r\n}\r\n\r\nh2 {\r\n  font-size: 24px;\r\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\n.fight,\r\n.retreat {\r\n  height: 60px;\r\n  width: 200px;\r\n  font-size: 24px;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://template/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

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

/***/ "./src/scripts/dom-handler.js":
/*!************************************!*\
  !*** ./src/scripts/dom-handler.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createDomHandler = () => {\r\n\r\n  const dialog = document.querySelector('.setup');\r\n\r\n  const openSetup = () => {\r\n    dialog.showModal();\r\n  }\r\n\r\n  const closeSetup = () => {\r\n    dialog.close(); \r\n  }\r\n\r\n  const drawGrid = (div, gameboard = null) => {\r\n    const divStyle = getComputedStyle(div);\r\n\r\n    // slice needed because computed style includes 'px'\r\n    let width = divStyle.width.slice(0, -2) / 10;\r\n\r\n    for (let y = 9; y >= 0; y--) {\r\n      for (let x = 0; x < 10; x++) {\r\n        const grid = document.createElement('div');\r\n        grid.classList.add('grid');\r\n        grid.style.height = `${ width }px`;\r\n        grid.style.width = `${ width }px`;\r\n        grid.setAttribute('coords', JSON.stringify([x, y]));\r\n        div.appendChild(grid);\r\n      }\r\n    }\r\n\r\n    if (gameboard) {\r\n      let positions = Object.keys(gameboard.shipPositions);\r\n      positions.forEach((coord) => {\r\n        document.querySelector(`[coords=\"[${JSON.parse(coord)}]\"]`)\r\n          .classList.add('occupied');\r\n      });\r\n    }\r\n  }\r\n\r\n  const loadShipsList = () => {\r\n    const shipsList = document.querySelector('.ships-list');\r\n    let shipNames = ['Carrier (5)', 'Battleship (4)', 'Cruiser (3)', 'Submarine (3)', 'Destroyer (2)'];\r\n    shipNames.forEach((ship) => {\r\n      const shipBtn = document.createElement('button');\r\n      shipBtn.textContent = ship;\r\n      shipBtn.setAttribute('type', 'button');\r\n      shipsList.appendChild(shipBtn);\r\n    });\r\n  }\r\n\r\n\r\n  const checkPlacement = (grid, length, direction, shipPositions) => {\r\n    // parse and push coords into shipCoordinates\r\n    let shipCoordinates = [];\r\n    let [x, y] = JSON.parse(grid.getAttribute('coords'));\r\n    if (direction === 'horizontal') {\r\n      for (let i = 0; i < length; i++) {\r\n        shipCoordinates.push([x, y]);\r\n        x += 1;\r\n      }\r\n    } else {\r\n      for (let i = 0; i < length; i++) {\r\n        shipCoordinates.push([x, y]);\r\n        y -= 1;\r\n      }\r\n    }\r\n\r\n    // checking if out of bounds\r\n    const countOutOfBounds = shipCoordinates.reduce((invalid, coord) => {\r\n      let [x, y] = coord;\r\n      if (x > 9 || y > 9 || x < 0 || y < 0) \r\n        return invalid + 1;\r\n      return invalid;\r\n    }, 0);\r\n\r\n    // checking if coord is already taken\r\n    const countOccupiedCoords = shipCoordinates.reduce((invalid, coord) => {\r\n      let strCoord = JSON.stringify(coord);\r\n      if (shipPositions[strCoord])\r\n        return invalid + 1;\r\n      return invalid;\r\n    }, 0);\r\n\r\n    if (countOutOfBounds > 0 || countOccupiedCoords > 0) return false;\r\n    return shipCoordinates;\r\n  }\r\n\r\n  return { openSetup, drawGrid, loadShipsList, checkPlacement, closeSetup };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDomHandler);\n\n//# sourceURL=webpack://template/./src/scripts/dom-handler.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createGameboard () {\r\n  let hits = [];\r\n  let misses = [];\r\n  let shipPositions = {};\r\n  let activeShips = [];\r\n\r\n  // does not check if occupied, would rely on gameflow to check\r\n  function placeShip (ship, coord, direction) {\r\n    let [x, y] = coord;\r\n    let length = ship.getLength();\r\n    activeShips.push(length);\r\n    for (let i = 0; i < length; i++) {\r\n      shipPositions[JSON.stringify([x, y])] = ship;\r\n      if (direction === 'horizontal') \r\n        x += 1;\r\n      else y -= 1;\r\n    }\r\n  }\r\n\r\n  function receiveAttack (coord) {\r\n    // coords recorded in JSON for easy comparison\r\n    let coordStr = JSON.stringify(coord);\r\n    if (shipPositions[coordStr]) {\r\n      let ship = shipPositions[coordStr];\r\n      ship.hit();\r\n      if (ship.isSunk()) {\r\n        activeShips.splice(activeShips.indexOf(ship.getLength()), 1);\r\n      }\r\n      hits.push(coordStr);\r\n      return true;\r\n    } \r\n    misses.push(coordStr);\r\n    return false;\r\n  }\r\n\r\n  function getHits () {\r\n    return hits;\r\n  }\r\n\r\n  function getMisses () {\r\n    return misses;\r\n  }\r\n  \r\n  function areAllSunk () {\r\n    if (activeShips.length < 1) return true;\r\n    return false;\r\n  }\r\n\r\n  function clear () {\r\n    hits = [];\r\n    misses = [];\r\n    shipPositions = [];\r\n    activeShips = [];\r\n  }\r\n\r\n  function randomizeBoard () {\r\n    \r\n  }\r\n\r\n  // draws board in console\r\n  function drawBoard () {\r\n    let string = '';\r\n    for (let y = 9; y >= 0; y--) {\r\n      \r\n      for (let x = 0; x < 10; x++) {\r\n        \r\n        if (shipPositions[JSON.stringify([x, y])]) {\r\n          string += 'o ';\r\n        } else {\r\n          string += '- ';\r\n        }\r\n      }\r\n      string += '\\n';\r\n    }\r\n    console.log(string);\r\n  }\r\n\r\n  return { placeShip, receiveAttack, getHits, getMisses, areAllSunk, clear, shipPositions, drawBoard  };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);\r\n//  module.exports = createGameboard;\n\n//# sourceURL=webpack://template/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-handler */ \"./src/scripts/dom-handler.js\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/styles.css */ \"./src/styles/styles.css\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction gameflow () {\r\n\r\n  const domHandler = (0,_dom_handler__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  const fleet = [\r\n    (0,_ship__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(5),\r\n    (0,_ship__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(4),\r\n    (0,_ship__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(3),\r\n    (0,_ship__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(3),\r\n    (0,_ship__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(2)\r\n  ];\r\n\r\n  const init = () => {\r\n    domHandler.drawGrid(document.querySelector('.setup-board'));\r\n    domHandler.loadShipsList(fleet);\r\n    setListeners();\r\n  }\r\n\r\n  const setListeners = () => {\r\n    // semi-global variables\r\n    let direction = 'horizontal';\r\n    let isValid = false;\r\n\r\n    // showModal button\r\n    const newGameBtn = document.querySelector('.new-game');\r\n    newGameBtn.addEventListener('click', domHandler.openSetup);\r\n\r\n    // closeModal\r\n    const retreatBtn = document.querySelector('.retreat');\r\n    retreatBtn.addEventListener('click', domHandler.closeSetup);\r\n    \r\n    const setupBoard = document.querySelector('.setup-board');\r\n    setupBoard.addEventListener('click', (e) => {\r\n      // clientX/Y uses coords relative to window\r\n      // subtract board's position\r\n      const setupPos = setupBoard.getBoundingClientRect();\r\n      let x = (e.clientX - setupPos.left);\r\n      let y = (e.clientY - setupPos.top);\r\n      console.log(`${x}, ${y}`);\r\n    });\r\n\r\n    // setup grids listeners\r\n    const grids = document.querySelectorAll('.setup-board .grid');\r\n    grids.forEach((grid) => {\r\n      // resets highlights and invalids\r\n      grid.addEventListener('mouseenter', () => {\r\n        document.querySelectorAll('.invalid')\r\n          .forEach((grid) => {\r\n            grid.classList.remove('invalid');\r\n          });\r\n        document.querySelectorAll('.highlight')\r\n          .forEach((grid) => {\r\n            grid.classList.remove('highlight');\r\n          });\r\n      });\r\n\r\n      // add highlights on valid placements\r\n      grid.addEventListener('mouseenter', (e) => {\r\n        let length = fleet[0].getLength();\r\n\r\n        // returns coordinates if valid, else false\r\n        isValid = domHandler.checkPlacement(grid, length, direction, gameboard.shipPositions);\r\n        if (isValid) {\r\n          isValid.forEach((coord) => {\r\n            let highlight = document.querySelector(`[coords=\"[${coord}]\"]`);\r\n            highlight.classList.add('highlight');\r\n          });\r\n        } else {\r\n          e.target.classList.add('invalid');\r\n        }\r\n      });\r\n\r\n      // listener for placing ships\r\n      grid.addEventListener('click', () => {\r\n        if (isValid) {\r\n          let nextShip = fleet.shift();\r\n          let coord = JSON.parse(grid.getAttribute('coords'));\r\n          gameboard.placeShip(nextShip, coord, direction);\r\n\r\n          // removes ships from right pane\r\n          const shipsList = document.querySelector('.ships-list');\r\n          shipsList.removeChild(shipsList.firstChild);\r\n\r\n          // highlights occupied tiles\r\n          isValid.forEach((coord) => {\r\n            let occupied = document.querySelector(`[coords=\"[${coord}]\"]`);\r\n            occupied.classList.add('occupied');\r\n          });\r\n        } else {\r\n          alert('Invalid placement!');\r\n        }\r\n      });\r\n    });\r\n\r\n    const rotateBtn = document.querySelector('.rotate-btn');\r\n    rotateBtn.addEventListener('click', () => {\r\n      if (direction === 'horizontal') direction = 'vertical';\r\n      else direction = 'horizontal';\r\n    });\r\n\r\n    const fightBtn = document.querySelector('.fight');\r\n    fightBtn.addEventListener('click', startGame);\r\n  }\r\n\r\n  const startGame = () => {\r\n    document.querySelector('.new-game').classList.add('hide');\r\n    domHandler.closeSetup();\r\n\r\n    domHandler.drawGrid(document.querySelector('.player'), gameboard);\r\n\r\n    domHandler.drawGrid(document.querySelector('.computer'));\r\n    const computerGameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n    alert('startGame');\r\n    \r\n  }\r\n\r\n  init();\r\n}\r\n\r\ngameflow();\n\n//# sourceURL=webpack://template/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createPlayer = (name, gameboard) => {\r\n  // let name = name;\r\n  // let gameboard = gameboard;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);\n\n//# sourceURL=webpack://template/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createShip (length) {\r\n  // closure in action with length variable\r\n  let shotsTaken = 0;\r\n\r\n  function hit () {\r\n    shotsTaken += 1;\r\n  }\r\n\r\n  function isSunk () {\r\n    if (shotsTaken >= length) {\r\n      return true;\r\n    } \r\n    return false;\r\n  }\r\n\r\n  function getLength() {\r\n    return length;\r\n  }\r\n\r\n  return { hit, isSunk, getLength };\r\n}\r\n\r\n// module.exports = createShip;\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);\n\n//# sourceURL=webpack://template/./src/scripts/ship.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;