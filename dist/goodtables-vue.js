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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./../~/css-loader/lib/css-base.js */ 6)();
// imports


// module
exports.push([module.i, ".goodtables-vue-report {\n  color: #333;\n  font-family: monospace;\n  letter-spacing: -0.5px;\n}\n\n.goodtables-vue-report table {\n  border: 2px solid #d9534f;\n  border-radius: 3px;\n  background-color: #fff;\n}\n\n.goodtables-vue-report table.summary {\n  width: 10em;\n}\n\n.goodtables-vue-report table.values {\n  min-width: 50em;\n}\n\n.goodtables-vue-report th {\n  background-color: #d9534f;\n  color: #eee;\n}\n\n.goodtables-vue-report td {\n  background-color: #f9f9f9;\n}\n\n.goodtables-vue-report th,\n.goodtables-vue-report td {\n  padding: 10px 20px;\n  height: 1em;\n}\n\n.goodtables-vue-report th.active {\n  color: #fff;\n}\n\n.goodtables-vue-report table.values td {\n  cursor: pointer;\n}\n\n.goodtables-vue-report td.error {\n  background-color: #d9534f;\n  color: #fff;\n}\n\n.goodtables-vue-report td.row-number {\n  text-align: center;\n  padding: 10px 5px;\n  background-color: #f0ad4e;\n  color: #fff;\n}\n\n.goodtables-vue-report td.errors {\n  padding: 10px 5px;\n  background-color: #eee;\n  color: #777;\n}\n\n.goodtables-vue-report h2 {\n  margin-bottom: 10px;\n}\n\n.goodtables-vue-report h3 {\n  display: inline-block;\n  color: #5cb85c;\n  margin: 10px 0;\n}\n\n.goodtables-vue-report h3.error {\n  color: #d9534f;\n  cursor: pointer;\n}\n\n.goodtables-vue-report h3.error:hover {\n  text-decoration: underline;\n}\n\n.goodtables-vue-report input {\n  display: none;\n}\n\n.goodtables-vue-report label {\n  width: 10em;\n  display: inline-block;\n  margin: 0 0 -1px;\n  padding: 15px 25px;\n  font-weight: 600;\n  text-align: center;\n  color: #bbb;\n  border: 1px solid transparent;\n}\n\n.goodtables-vue-report label:hover {\n  color: #888;\n  cursor: pointer;\n}\n\n.goodtables-vue-report input:checked + label {\n  color: #333;\n  border: 1px solid #d9534f;\n  border-top: 2px solid #d9534f;\n  border-bottom: 1px solid #fff;\n}\n\n.goodtables-vue-report p.help {\n  padding-left: 15px;\n  font-style: italic;\n  color: #888;\n}\n", ""]);

// exports


/***/ }),
/* 1 */
/* unknown exports provided */
/* exports used: default */
/*!************************!*\
  !*** ./src/Report.vue ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./Report.vue */ 2)

/* template */
var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-628e2d76!vue-loader/lib/selector?type=template&index=0!./Report.vue */ 13)
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
/* 2 */
/* exports provided: default */
/* all exports used */
/*!************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Report.vue ***!
  \************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table_vue__ = __webpack_require__(/*! ./Table.vue */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Table_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Table_vue__);



/* harmony default export */ __webpack_exports__["default"] = {
  props: ['report'],
  components: {
    'report-table': __WEBPACK_IMPORTED_MODULE_0__Table_vue___default.a
  }
};

/***/ }),
/* 3 */
/* exports provided: default */
/* all exports used */
/*!***********************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./src/Table.vue ***!
  \***********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TableErrors_vue__ = __webpack_require__(/*! ./TableErrors.vue */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TableErrors_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TableErrors_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TableValues_vue__ = __webpack_require__(/*! ./TableValues.vue */ 9);
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
/* 4 */
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./src/TableErrors.vue ***!
  \*****************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/* harmony default export */ __webpack_exports__["default"] = {
  props: ['table']
};

/***/ }),
/* 5 */
/* exports provided: default */
/* all exports used */
/*!*****************************************************************************************************!*\
  !*** ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./src/TableValues.vue ***!
  \*****************************************************************************************************/
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
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
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
/* 7 */
/* unknown exports provided */
/* exports used: default */
/*!***********************!*\
  !*** ./src/Table.vue ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./Table.vue */ 3)

/* template */
var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-528ee8cd!vue-loader/lib/selector?type=template&index=0!./Table.vue */ 12)
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
/* 8 */
/* unknown exports provided */
/* exports used: default */
/*!*****************************!*\
  !*** ./src/TableErrors.vue ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./TableErrors.vue */ 4)

/* template */
var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-141769d0!vue-loader/lib/selector?type=template&index=0!./TableErrors.vue */ 11)
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
/* 9 */
/* unknown exports provided */
/* exports used: default */
/*!*****************************!*\
  !*** ./src/TableValues.vue ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./TableValues.vue */ 5)

/* template */
var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-0e38c54f!vue-loader/lib/selector?type=template&index=0!./TableValues.vue */ 10)
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
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-0e38c54f!./~/vue-loader/lib/selector.js?type=template&index=0!./src/TableValues.vue ***!
  \*********************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('table', {
    staticClass: "values"
  }, [_c('tbody', [_vm._l((_vm.rows), function(row, rowNumber) {
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
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-141769d0!./~/vue-loader/lib/selector.js?type=template&index=0!./src/TableErrors.vue ***!
  \*********************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('table', [_vm._m(0), _vm._v(" "), _c('tbody', _vm._l((_vm.table.errors), function(error) {
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
/* 12 */
/* unknown exports provided */
/* all exports used */
/*!***************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-528ee8cd!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Table.vue ***!
  \***************************************************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.table.valid) ? [_c('h3', [_vm._v("\n      " + _vm._s(_vm.table.source) + "\n      [" + _vm._s(_vm.table['row-count']) + " rows/" + _vm._s(_vm.table['error-count']) + " errors]\n    ")])] : [_c('h3', {
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
/* 13 */
/* unknown exports provided */
/* all exports used */
/*!****************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-628e2d76!./~/vue-loader/lib/selector.js?type=template&index=0!./src/Report.vue ***!
  \****************************************************************************************************************************************/
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
/* 14 */
/* exports provided: Report */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Report_vue__ = __webpack_require__(/*! ./Report.vue */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Report_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Report_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css__ = __webpack_require__(/*! ./styles.css */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_css__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return __WEBPACK_IMPORTED_MODULE_0__Report_vue___default.a; });





/***/ })
/******/ ]);