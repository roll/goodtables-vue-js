var goodtablesVue =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if (media) {
		styleElement.setAttribute("media", media);
	}

	if (sourceMap) {
		// https://developer.chrome.com/devtools/docs/javascript-debugging
		// this makes source maps inside style tags work properly in Chrome
		css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(23)
__webpack_require__(22)

/* script */
__vue_exports__ = __webpack_require__(3)

/* template */
var __vue_template__ = __webpack_require__(18)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/roll/projects/goodtables-vue-js/src/Report.vue"
if(typeof __vue_options__.name === "undefined") {
  __vue_options__.name = "Report"
}__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-628e2d76"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-628e2d76", __vue_options__)
  } else {
    hotAPI.reload("data-v-628e2d76", __vue_options__)
  }
})()}
if (__vue_options__.functional && typeof __vue_template__ !== "undefined") {console.error("[vue-loader] Report.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Table_vue__);



/* harmony default export */ __webpack_exports__["default"] = {
  props: ['report'],
  components: {
    'report-table': __WEBPACK_IMPORTED_MODULE_0__Table_vue___default.a
  }
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TableErrors_vue__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TableErrors_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TableErrors_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableValues_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableValues_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__TableValues_vue__);




/* harmony default export */ __webpack_exports__["default"] = {
  props: ['table'],
  data: function data() {
    return {
      id1: Math.random().toString(36).substring(10),
      id2: Math.random().toString(36).substring(10),
      show: false,
      values: false
    };
  },
  components: {
    'table-values': __WEBPACK_IMPORTED_MODULE_1__TableValues_vue___default.a,
    'table-errors': __WEBPACK_IMPORTED_MODULE_0__TableErrors_vue___default.a
  }
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = {
  props: ['table']
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* harmony default export */ __webpack_exports__["default"] = {
  props: ['table'],
  data: function data() {
    return {
      expandedRows: []
    };
  },
  computed: {
    rows: function rows() {
      var rows = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.table.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var error = _step.value;

          var rowNumber = error['row-number'] || 0;
          var values = [null].concat(_toConsumableArray(rowNumber === 0 ? this.table.headers : error.row));
          var headers = [null].concat(_toConsumableArray(this.table.headers));
          // Initial
          if (!rows[rowNumber]) rows[rowNumber] = { values: [], badcols: [], errors: [] };
          // Values
          if (error['code'] === 'blank-row') {
            rows[rowNumber].values = headers.map(function () {
              return '';
            });
          } else {
            rows[rowNumber].values = values;
            if (error['code'] === 'missing-value') {
              rows[rowNumber].values[error['column-number']] = '';
            }
          }
          // Badcols
          if (!error['column-number']) {
            var base = error['code'] === 'blank-row' ? headers : values;
            rows[rowNumber].badcols = base.map(function (value, index) {
              return index;
            }).filter(Boolean);
          } else {
            rows[rowNumber].badcols.push(error['column-number']);
          }
          // Errors
          rows[rowNumber].errors.push(error);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return rows;
    }
  },
  methods: {
    toggleExpandedRow: function toggleExpandedRow(rowNumber) {
      if (this.expandedRows.includes(rowNumber)) {
        this.expandedRows = this.expandedRows.filter(function (value) {
          return value !== rowNumber;
        });
      } else {
        this.expandedRows.push(rowNumber);
      }
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\ntable[data-v-0e38c54f] {\n  min-width: 50em;\n}\ntd[data-v-0e38c54f] {\n  cursor: pointer;\n}\ntd.error[data-v-0e38c54f] {\n  background-color: #d9534f;\n  color: #fff;\n}\ntd.row-number[data-v-0e38c54f] {\n  text-align: center;\n  padding: 10px 5px;\n  background-color: #f0ad4e;\n  color: #fff;\n}\ntd.errors[data-v-0e38c54f] {\n  padding: 10px 5px;\n  background-color: #eee;\n  color: #777;\n}\n.help[data-v-0e38c54f] {\n  padding-left: 15px;\n  font-style: italic;\n  color: #888;\n}\n", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\nh3[data-v-528ee8cd] {\n  display: inline-block;\n  color: #5cb85c;\n  margin: 10px 0;\n}\nh3.error[data-v-528ee8cd] {\n  color: #d9534f;\n  cursor: pointer;\n}\nh3.error[data-v-528ee8cd]:hover {\n  text-decoration: underline;\n}\ninput[data-v-528ee8cd] {\n  display: none;\n}\nlabel[data-v-528ee8cd] {\n  width: 10em;\n  display: inline-block;\n  margin: 0 0 -1px;\n  padding: 15px 25px;\n  font-weight: 600;\n  text-align: center;\n  color: #bbb;\n  border: 1px solid transparent;\n}\nlabel[data-v-528ee8cd]:hover {\n  color: #888;\n  cursor: pointer;\n}\ninput:checked + label[data-v-528ee8cd] {\n  color: #333;\n  border: 1px solid #d9534f;\n  border-top: 2px solid #d9534f;\n  border-bottom: 1px solid #fff;\n}\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\n.goodtables-vue-report {\n  color: #333;\n  font-family: monospace;\n  letter-spacing: -0.5px;\n}\n.goodtables-vue-report table {\n  border: 2px solid #d9534f;\n  border-radius: 3px;\n  background-color: #fff;\n}\n.goodtables-vue-report th {\n  background-color: #d9534f;\n  color: #eee;\n}\n.goodtables-vue-report td {\n  background-color: #f9f9f9;\n}\n.goodtables-vue-report th,\n.goodtables-vue-report td {\n  padding: 10px 20px;\n  height: 1em;\n}\n.goodtables-vue-report th.active {\n  color: #fff;\n}\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "\ntable.summary[data-v-628e2d76] {\n  width: 10em;\n}\nh2[data-v-628e2d76] {\n  margin-bottom: 10px;\n}\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(21)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(17)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/roll/projects/goodtables-vue-js/src/Table.vue"
if(typeof __vue_options__.name === "undefined") {
  __vue_options__.name = "Table"
}__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-528ee8cd"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-528ee8cd", __vue_options__)
  } else {
    hotAPI.reload("data-v-528ee8cd", __vue_options__)
  }
})()}
if (__vue_options__.functional && typeof __vue_template__ !== "undefined") {console.error("[vue-loader] Table.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(20)

/* script */
__vue_exports__ = __webpack_require__(5)

/* template */
var __vue_template__ = __webpack_require__(16)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/roll/projects/goodtables-vue-js/src/TableErrors.vue"
if(typeof __vue_options__.name === "undefined") {
  __vue_options__.name = "TableErrors"
}__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-141769d0"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-141769d0", __vue_options__)
  } else {
    hotAPI.reload("data-v-141769d0", __vue_options__)
  }
})()}
if (__vue_options__.functional && typeof __vue_template__ !== "undefined") {console.error("[vue-loader] TableErrors.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* styles */
__webpack_require__(19)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(15)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/roll/projects/goodtables-vue-js/src/TableValues.vue"
if(typeof __vue_options__.name === "undefined") {
  __vue_options__.name = "TableValues"
}__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0e38c54f"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e38c54f", __vue_options__)
  } else {
    hotAPI.reload("data-v-0e38c54f", __vue_options__)
  }
})()}
if (__vue_options__.functional && typeof __vue_template__ !== "undefined") {console.error("[vue-loader] TableValues.vue: functional components are not supported with templates, they should use render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "root"
  }, [_c('table', [_c('tbody', [_vm._l((_vm.rows), function(row, rowNumber) {
    return (row) ? [_c('tr', {
      on: {
        "click": function($event) {
          _vm.toggleExpandedRow(rowNumber)
        }
      }
    }, [_c('td', {
      staticClass: "row-number"
    }, [_vm._v(_vm._s(rowNumber || 'H'))]), _vm._v(" "), _vm._l((row.values), function(value, colNumber) {
      return (colNumber) ? _c('td', {
        class: {
          error: row.badcols.includes(colNumber)
        }
      }, [_vm._v("\n            " + _vm._s(value) + "\n          ")]) : _vm._e()
    })], 2), _vm._v(" "), (_vm.expandedRows.includes(rowNumber)) ? _c('tr', [_c('td', {
      staticClass: "errors",
      attrs: {
        "colspan": "100%"
      }
    }, _vm._l((row.errors), function(error) {
      return _c('div', [_vm._v("\n              [" + _vm._s(error['column-number'] || '-') + "] " + _vm._s(error.message) + "\n            ")])
    }))]) : _vm._e()] : _vm._e()
  })], 2)]), _vm._v(" "), _c('p', {
    staticClass: "help"
  }, [_vm._v("*click on a row to see errors")])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0e38c54f", module.exports)
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "root"
  }, [_c('table', [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.table.errors), function(error) {
    return _c('tr', [_c('td', [_vm._v(_vm._s(error['row-number'] || 'H'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(error['column-number'] || '-'))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(error.code))]), _vm._v(" "), _c('td', [_vm._v(_vm._s(error.message))])])
  }))])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('thead', [_c('tr', [_c('th', [_vm._v("Row")]), _vm._v(" "), _c('th', [_vm._v("Col")]), _vm._v(" "), _c('th', [_vm._v("Code")]), _vm._v(" "), _c('th', [_vm._v("Message")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-141769d0", module.exports)
  }
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "root"
  }, [(_vm.table.valid) ? [_c('h3', [_vm._v("\n      " + _vm._s(_vm.table.source) + "\n      [" + _vm._s(_vm.table['row-count']) + " rows/" + _vm._s(_vm.table['error-count']) + " errors]\n    ")])] : [_c('h3', {
    staticClass: "error",
    on: {
      "click": function($event) {
        _vm.show = !_vm.show
      }
    }
  }, [_vm._v("\n      " + _vm._s(_vm.table.source) + "\n      [" + _vm._s(_vm.table['row-count']) + " rows/" + _vm._s(_vm.table['error-count']) + " errors]\n      [" + _vm._s((_vm.show) ? '-' : '+') + "]\n    ")]), _vm._v(" "), (_vm.show) ? _c('div', [_c('input', {
    attrs: {
      "id": _vm.id1,
      "type": "radio",
      "name": "tabs",
      "checked": ""
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": _vm.id1
    },
    on: {
      "click": function($event) {
        _vm.values = false
      }
    }
  }, [_vm._v("Errors view")]), _vm._v(" "), _c('input', {
    attrs: {
      "id": _vm.id2,
      "type": "radio",
      "name": "tabs"
    }
  }), _vm._v(" "), _c('label', {
    attrs: {
      "for": _vm.id2
    },
    on: {
      "click": function($event) {
        _vm.values = true
      }
    }
  }, [_vm._v("Values view")]), _vm._v(" "), (_vm.values) ? _c('table-values', {
    attrs: {
      "table": _vm.table
    }
  }) : _c('table-errors', {
    attrs: {
      "table": _vm.table
    }
  })], 1) : _vm._e()]], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-528ee8cd", module.exports)
  }
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "goodtables-vue-report"
  }, [_c('h1', [_vm._v("Report")]), _vm._v(" "), _c('table', {
    staticClass: "summary"
  }, [_c('tbody', [_c('tr', [_c('th', [_vm._v("valid")]), _c('td', [_vm._v(_vm._s((_vm.report.valid) ? 'yes' : 'no'))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("tables")]), _c('td', [_vm._v(_vm._s(_vm.report['table-count']))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("errors")]), _c('td', [_vm._v(_vm._s(_vm.report['error-count']))])]), _vm._v(" "), _c('tr', [_c('th', [_vm._v("time")]), _c('td', [_vm._v(_vm._s(_vm.report.time))])])])]), _vm._v(" "), _c('h2', [_vm._v("Tables")]), _vm._v(" "), _vm._l((_vm.report.tables), function(table) {
    return _c('report-table', {
      attrs: {
        "table": table
      }
    })
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-628e2d76", module.exports)
  }
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0e38c54f&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableValues.vue", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-0e38c54f&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableValues.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-141769d0&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableErrors.vue", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-141769d0&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableErrors.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-528ee8cd&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Table.vue", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-528ee8cd&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Table.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-628e2d76!./../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Report.vue", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-628e2d76!./../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Report.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(1)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-628e2d76&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Report.vue", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-628e2d76&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Report.vue");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Report_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Report_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Report_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return __WEBPACK_IMPORTED_MODULE_0__Report_vue___default.a; });




/***/ })
/******/ ]);