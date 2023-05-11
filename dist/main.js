/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/content.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/content.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  grid-column: span 3;\n  display: grid;\n  grid-template-rows: 100px 1fr;\n}\n\n.task-display {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  /* Inroduce scroll bar\n  height: 596px;\n  overflow-y: auto; */\n}\n\n.wrapper > form {\n  background-color: aqua;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-self: center;\n}\n\n.display-btn-container {\n  position: absolute;\n  right: 0px;\n  align-self: end;\n}\n\n.empty-indicator {\n  position: absolute;\n  bottom: 50%;\n  align-self: center;\n}\n\n.task {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  gap: 10px;\n}\n\n.task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 3fr 50px 50px 50px;\n}\n\n.full-task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 50px 3fr 50px 50px;\n  justify-items: center;\n  /* align-items: center; */\n}\n\n.back-btn {\n  grid-column: 1 / 2;\n  align-self: center;\n}\n\n.task-form > div > textarea {\n  height: 100%;\n  resize: none;\n}\n\n.task-form > div:nth-of-type(1),\n.task-form > div:nth-of-type(2),\n.task-form > div:nth-of-type(4) {\n  grid-column: 2 / 3;\n  /* width: 100%; */\n\n  display: flex;\n  flex-direction: column;\n}\n\n.task-form > div:nth-of-type(3),\n.task-form > div:nth-of-type(5) {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.full-task-form > div {\n  grid-column: 2 / 3;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.full-task-form > div > textarea {\n  text-align: center;\n  resize: none;\n}\n\n.description > textarea {\n  height: 100%;\n  width: 100%;\n}\n\n.task > div {\n  display: flex;\n}\n\n.task > div:nth-child(2) {\n  flex-direction: column;\n}\n\n.task > div:nth-of-type(2) {\n  margin-left: auto;\n}\n\n.task img {\n  height: 20px;\n  width: 20px;\n}\n\n.back-btn img,\n.del-btn img,\n.create-list-btn img {\n  height: 30px;\n  width: 30px;\n}\n\n.empty-indicator img {\n  height: 100px;\n  width: 100px;\n}\n", "",{"version":3,"sources":["webpack://./src/content.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB;;qBAEmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,0CAA0C;AAC5C;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,0CAA0C;EAC1C,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;;;EAGE,kBAAkB;EAClB,iBAAiB;;EAEjB,aAAa;EACb,sBAAsB;AACxB;;AAEA;;EAEE,kBAAkB;EAClB,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;;;EAGE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,YAAY;AACd","sourcesContent":[".wrapper {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  grid-column: span 3;\n  display: grid;\n  grid-template-rows: 100px 1fr;\n}\n\n.task-display {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  /* Inroduce scroll bar\n  height: 596px;\n  overflow-y: auto; */\n}\n\n.wrapper > form {\n  background-color: aqua;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-self: center;\n}\n\n.display-btn-container {\n  position: absolute;\n  right: 0px;\n  align-self: end;\n}\n\n.empty-indicator {\n  position: absolute;\n  bottom: 50%;\n  align-self: center;\n}\n\n.task {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  gap: 10px;\n}\n\n.task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 3fr 50px 50px 50px;\n}\n\n.full-task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 50px 3fr 50px 50px;\n  justify-items: center;\n  /* align-items: center; */\n}\n\n.back-btn {\n  grid-column: 1 / 2;\n  align-self: center;\n}\n\n.task-form > div > textarea {\n  height: 100%;\n  resize: none;\n}\n\n.task-form > div:nth-of-type(1),\n.task-form > div:nth-of-type(2),\n.task-form > div:nth-of-type(4) {\n  grid-column: 2 / 3;\n  /* width: 100%; */\n\n  display: flex;\n  flex-direction: column;\n}\n\n.task-form > div:nth-of-type(3),\n.task-form > div:nth-of-type(5) {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n\n.full-task-form > div {\n  grid-column: 2 / 3;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.full-task-form > div > textarea {\n  text-align: center;\n  resize: none;\n}\n\n.description > textarea {\n  height: 100%;\n  width: 100%;\n}\n\n.task > div {\n  display: flex;\n}\n\n.task > div:nth-child(2) {\n  flex-direction: column;\n}\n\n.task > div:nth-of-type(2) {\n  margin-left: auto;\n}\n\n.task img {\n  height: 20px;\n  width: 20px;\n}\n\n.back-btn img,\n.del-btn img,\n.create-list-btn img {\n  height: 30px;\n  width: 30px;\n}\n\n.empty-indicator img {\n  height: 100px;\n  width: 100px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/layout.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/layout.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  font-size: 1rem;\n  /* background-color: #ecf0f2; */\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px 4fr 100px;\n}\n\n.content > div {\n  padding: 10px;\n}\n\n.header {\n  grid-row: 1 / 2;\n}\n\n.main-section {\n  grid-row: 2 / 3;\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n}\n\n.footer {\n  grid-row: 3 / 4;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.header img {\n  height: 30px;\n  width: 30px;\n}\n\n.display-btn-container img,\n.del-btn-container img,\n.create-list-btn img,\n.add-project-btn img,\n.back-btn img {\n  pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/layout.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,0BAA0B;EAC1B,kCAAkC;AACpC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;;;;;EAKE,oBAAoB;AACtB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  font-size: 1rem;\n  /* background-color: #ecf0f2; */\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px 4fr 100px;\n}\n\n.content > div {\n  padding: 10px;\n}\n\n.header {\n  grid-row: 1 / 2;\n}\n\n.main-section {\n  grid-row: 2 / 3;\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n}\n\n.footer {\n  grid-row: 3 / 4;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.header img {\n  height: 30px;\n  width: 30px;\n}\n\n.display-btn-container img,\n.del-btn-container img,\n.create-list-btn img,\n.add-project-btn img,\n.back-btn img {\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/nav.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/nav.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-menu {\n  background-color: #ecf0f2;\n  grid-column: span 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-items: center;\n}\n\n.main-menu > div {\n  padding: 5px;\n}\n\n.main-menu button {\n  text-align: start;\n}\n\n.today-container,\n.upcoming-container {\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  column-gap: 5px;\n}\n\n.fav-container,\n.proj-container {\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  grid-template-rows: auto;\n}\n\n.fav-container > div:nth-child(1),\n.proj-container > div:nth-child(1) {\n  grid-column: 1 / 4;\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  column-gap: 5px;\n}\n\n.favorites,\n.projects {\n  grid-column: 2 / 4;\n  display: grid;\n}\n\n.favorites > div,\n.projects > div {\n  padding: 10px 0px;\n  display: grid;\n  grid-template-columns: 20px 3fr 1fr;\n}\n\n.favorites > div > img,\n.projects > div > img {\n  height: 15px;\n  width: 15px;\n}\n\n.today-container > img,\n.upcoming-container > img,\n.fav-container img,\n.proj-container img {\n  height: 30px;\n  width: 30px;\n}\n\n.add-project-btn {\n  height: 30px;\n  width: 30px;\n  justify-self: end;\n}\n\n[class*=\"count\"] {\n  text-align: end;\n}\n", "",{"version":3,"sources":["webpack://./src/nav.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,aAAa;EACb,oCAAoC;EACpC,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,oCAAoC;EACpC,wBAAwB;AAC1B;;AAEA;;EAEE,kBAAkB;EAClB,aAAa;EACb,oCAAoC;EACpC,eAAe;AACjB;;AAEA;;EAEE,kBAAkB;EAClB,aAAa;AACf;;AAEA;;EAEE,iBAAiB;EACjB,aAAa;EACb,mCAAmC;AACrC;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;;;;EAIE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB","sourcesContent":[".main-menu {\n  background-color: #ecf0f2;\n  grid-column: span 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-items: center;\n}\n\n.main-menu > div {\n  padding: 5px;\n}\n\n.main-menu button {\n  text-align: start;\n}\n\n.today-container,\n.upcoming-container {\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  column-gap: 5px;\n}\n\n.fav-container,\n.proj-container {\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  grid-template-rows: auto;\n}\n\n.fav-container > div:nth-child(1),\n.proj-container > div:nth-child(1) {\n  grid-column: 1 / 4;\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  column-gap: 5px;\n}\n\n.favorites,\n.projects {\n  grid-column: 2 / 4;\n  display: grid;\n}\n\n.favorites > div,\n.projects > div {\n  padding: 10px 0px;\n  display: grid;\n  grid-template-columns: 20px 3fr 1fr;\n}\n\n.favorites > div > img,\n.projects > div > img {\n  height: 15px;\n  width: 15px;\n}\n\n.today-container > img,\n.upcoming-container > img,\n.fav-container img,\n.proj-container img {\n  height: 30px;\n  width: 30px;\n}\n\n.add-project-btn {\n  height: 30px;\n  width: 30px;\n  justify-self: end;\n}\n\n[class*=\"count\"] {\n  text-align: end;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/content.css":
/*!*************************!*\
  !*** ./src/content.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./content.css */ "./node_modules/css-loader/dist/cjs.js!./src/content.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_content_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/layout.css":
/*!************************!*\
  !*** ./src/layout.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./layout.css */ "./node_modules/css-loader/dist/cjs.js!./src/layout.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_layout_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/nav.css":
/*!*********************!*\
  !*** ./src/nav.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/nav.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/layout.js":
/*!***********************!*\
  !*** ./src/layout.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "listArray": () => (/* binding */ listArray),
/* harmony export */   "pageLayout": () => (/* binding */ pageLayout),
/* harmony export */   "priorityArray": () => (/* binding */ priorityArray),
/* harmony export */   "updateListArray": () => (/* binding */ updateListArray)
/* harmony export */ });
/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.css */ "./src/layout.css");
/* harmony import */ var _images_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/menu.svg */ "./src/images/menu.svg");
/* harmony import */ var _images_cat_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cat.svg */ "./src/images/cat.svg");
/* harmony import */ var _images_bell_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/bell.svg */ "./src/images/bell.svg");
/* harmony import */ var _images_help_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/help.svg */ "./src/images/help.svg");






const listArray = ["personal", "work", "shopping"];
const priorityArray = ["critical", "high", "normal"];

const pageLayout = () => {
  const content = document.querySelector(".content");
  const header = document.createElement("div");
  const main = document.createElement("div");
  const footer = document.createElement("div");
  const menuContainer = document.createElement("div");
  const menuButton = document.createElement("button");
  const menuImg = new Image();
  const profile = document.createElement("div");
  const profileImg = new Image();
  const bellImg = new Image();
  const helpImg = new Image();

  header.classList.add("header");
  main.classList.add("main-section");
  footer.classList.add("footer");
  menuImg.src = _images_menu_svg__WEBPACK_IMPORTED_MODULE_1__;
  menuImg.alt = "menu icon";
  menuButton.type = "button";
  menuButton.classList.add("menu-button");
  profileImg.src = _images_cat_svg__WEBPACK_IMPORTED_MODULE_2__;
  profileImg.alt = "A cat icon";
  bellImg.src = _images_bell_svg__WEBPACK_IMPORTED_MODULE_3__;
  bellImg.alt = "A bell icon";
  helpImg.src = _images_help_svg__WEBPACK_IMPORTED_MODULE_4__;
  helpImg.alt = "A question mark icon";

  menuButton.appendChild(menuImg);
  profile.appendChild(helpImg);
  profile.appendChild(bellImg);
  profile.appendChild(profileImg);
  menuContainer.appendChild(menuButton);
  header.appendChild(menuContainer);
  header.appendChild(profile);
  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
};

const updateListArray = () => {
  const newList = document.querySelector("#new-list").value;
  listArray.push(newList);
};




/***/ }),

/***/ "./src/main-content.js":
/*!*****************************!*\
  !*** ./src/main-content.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addListOption": () => (/* binding */ addListOption),
/* harmony export */   "addTimeOption": () => (/* binding */ addTimeOption),
/* harmony export */   "changeButton": () => (/* binding */ changeButton),
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "emptyIndicator": () => (/* binding */ emptyIndicator),
/* harmony export */   "mainContent": () => (/* binding */ mainContent),
/* harmony export */   "modifyTask": () => (/* binding */ modifyTask),
/* harmony export */   "newListForm": () => (/* binding */ newListForm),
/* harmony export */   "processForm": () => (/* binding */ processForm),
/* harmony export */   "taskArray": () => (/* binding */ taskArray)
/* harmony export */ });
/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.css */ "./src/content.css");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _images_add_task_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/add-task.svg */ "./src/images/add-task.svg");
/* harmony import */ var _images_back_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/back.svg */ "./src/images/back.svg");
/* harmony import */ var _images_add_list_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/add-list.svg */ "./src/images/add-list.svg");
/* harmony import */ var _images_save_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/save.svg */ "./src/images/save.svg");
/* harmony import */ var _images_calendar_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/calendar.svg */ "./src/images/calendar.svg");








const taskArray = [];

const mainContent = () => {
  const container = document.querySelector(".main-section");

  const wrapper = document.createElement("div");
  const header = document.createElement("div");
  const taskDisplay = document.createElement("div");
  const heading = document.createElement("h2");
  const btnContainer = document.createElement("div");
  const btn = document.createElement("button");
  const btnImg = new Image();

  wrapper.classList.add("wrapper");
  header.classList.add("task-header");
  taskDisplay.classList.add("task-display");
  btnContainer.classList.add("display-btn-container");
  btn.type = "button";
  btn.classList.add("form-btn");
  btnImg.src = _images_add_task_svg__WEBPACK_IMPORTED_MODULE_2__;
  btnImg.alt = "Add circle icon";
  heading.textContent = "Today";

  header.appendChild(heading);
  btn.appendChild(btnImg);
  btnContainer.appendChild(btn);
  wrapper.appendChild(header);
  wrapper.appendChild(taskDisplay);
  wrapper.appendChild(btnContainer);
  container.appendChild(wrapper);
};

const emptyIndicator = () => {
  const display = document.querySelector(".task-display");
  const container = document.createElement("div");
  const para = document.createElement("p");
  const img = new Image();

  container.classList.add("empty-indicator");
  img.src = _images_calendar_svg__WEBPACK_IMPORTED_MODULE_6__;
  img.alt = "empty image";
  para.textContent = "Nothing to do";

  container.appendChild(img);
  container.appendChild(para);
  display.appendChild(container);
};

const createForm = () => {
  const display = document.querySelector(".task-display");

  display.textContent = "";

  // create form inputs
  const form = document.createElement("form");
  const taskContainer = document.createElement("div");
  const taskLabel = document.createElement("label");
  const taskInput = document.createElement("textarea");
  const descriptionContainer = document.createElement("div");
  const descriptionLabel = document.createElement("label");
  const descriptionInput = document.createElement("textarea");
  const dueDateContainer = document.createElement("div");
  const dateContainer = document.createElement("div");
  const dueDateLabel = document.createElement("label");
  const dueDateInput = document.createElement("input");
  const backBtn = document.createElement("button");
  const backBtnImg = new Image();

  // create form selections
  const priorityDiv = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const priorityInput = document.createElement("select");
  const submitContainer = document.createElement("div");
  const submitSelect = document.createElement("div");
  const submitLabel = document.createElement("label");
  const submitInput = document.createElement("select");
  const priorityOption1 = document.createElement("option");
  const priorityOption2 = document.createElement("option");
  const priorityOption3 = document.createElement("option");
  const createListBtn = document.createElement("button");
  const createListImg = new Image();

  //Add attributes
  form.classList.add("task-form");
  dateContainer.classList.add("date-container");
  backBtn.type = "button";
  backBtn.classList.add("back-btn");
  backBtnImg.src = _images_back_svg__WEBPACK_IMPORTED_MODULE_3__;
  backBtnImg.alt = "Back arrow icon";
  taskLabel.htmlFor = "task-title";
  taskLabel.textContent = "Task name";
  descriptionLabel.htmlFor = "description";
  descriptionLabel.textContent = "What is to be done?";
  dueDateLabel.htmlFor = "date";
  dueDateLabel.textContent = "Due date";
  priorityLabel.htmlFor = "priority";
  priorityLabel.textContent = "Priority";
  submitLabel.htmlFor = "list";
  submitLabel.textContent = "Add to List";
  dueDateInput.type = "date";
  taskInput.name = "title";
  taskInput.id = "task-title";
  taskInput.required = true;
  descriptionInput.name = "description";
  descriptionInput.id = "description";
  dueDateInput.name = "date";
  dueDateInput.id = "date";
  priorityInput.name = "priority";
  priorityInput.id = "priority";
  createListBtn.type = "button";
  createListBtn.classList.add("create-list-btn");
  createListImg.src = _images_add_list_svg__WEBPACK_IMPORTED_MODULE_4__;
  createListImg.alt = "Add list icon";
  submitInput.name = "list";
  submitInput.id = "list";
  priorityOption1.value = "critical";
  priorityOption1.textContent = "Critical";
  priorityOption2.value = "high";
  priorityOption2.textContent = "High";
  priorityOption3.value = "normal";
  priorityOption3.textContent = "Normal";

  // Dynamically add list options. When the user adds a new list,
  // the new list will be present in the next form.
  for (let i = 0; i < _layout__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
    const submitOption = document.createElement("option");

    submitOption.value = _layout__WEBPACK_IMPORTED_MODULE_1__.listArray[i];
    submitOption.textContent = _layout__WEBPACK_IMPORTED_MODULE_1__.listArray[i];

    submitInput.appendChild(submitOption);
  }

  // Append nodes
  priorityInput.appendChild(priorityOption1);
  priorityInput.appendChild(priorityOption2);
  priorityInput.appendChild(priorityOption3);
  taskContainer.appendChild(taskLabel);
  taskContainer.appendChild(taskInput);
  descriptionContainer.appendChild(descriptionLabel);
  descriptionContainer.appendChild(descriptionInput);
  dateContainer.appendChild(dueDateLabel);
  dateContainer.appendChild(dueDateInput);
  priorityDiv.appendChild(priorityLabel);
  priorityDiv.appendChild(priorityInput);
  submitSelect.appendChild(submitLabel);
  submitSelect.appendChild(submitInput);
  createListBtn.appendChild(createListImg);
  submitContainer.appendChild(submitSelect);
  submitContainer.appendChild(createListBtn);
  dueDateContainer.appendChild(dateContainer);
  backBtn.appendChild(backBtnImg);
  form.appendChild(backBtn);
  form.appendChild(taskContainer);
  form.appendChild(descriptionContainer);
  form.appendChild(dueDateContainer);
  form.appendChild(priorityDiv);
  form.appendChild(submitContainer);
  display.appendChild(form);
};

const changeButton = (ele) => {
  const btnContainer = document.querySelector(".display-btn-container");

  btnContainer.textContent = "";

  if (ele.className === "form-btn") {
    const btn = document.createElement("button");
    const btnImg = new Image();

    btn.type = "button";
    btn.classList.add("submit-btn");
    btnImg.src = _images_save_svg__WEBPACK_IMPORTED_MODULE_5__;
    btnImg.alt = "Check circle icon";

    btn.appendChild(btnImg);
    btnContainer.appendChild(btn);
  } else if (
    ele.className === "submit-btn" ||
    ele.className === "back-btn" ||
    ele.className === "save-btn"
  ) {
    const btn = document.createElement("button");
    const btnImg = new Image();

    btn.type = "button";
    btn.classList.add("form-btn");
    btnImg.src = _images_add_task_svg__WEBPACK_IMPORTED_MODULE_2__;
    btnImg.alt = "Add circle icon";

    btn.appendChild(btnImg);
    btnContainer.appendChild(btn);
  } else {
    const btn = document.createElement("button");
    const btnImg = new Image();

    btn.type = "button";
    btn.classList.add("save-btn");
    btnImg.src = _images_save_svg__WEBPACK_IMPORTED_MODULE_5__;
    btnImg.alt = "Check circle icon";

    btn.appendChild(btnImg);
    btnContainer.appendChild(btn);
  }
};

const newListForm = () => {
  const wrapper = document.querySelector(".wrapper");

  const listForm = document.createElement("form");
  const label = document.createElement("label");
  const input = document.createElement("input");
  const btnContainer = document.createElement("div");
  const cancelBtn = document.createElement("button");
  const acceptBtn = document.createElement("button");

  listForm.classList.add("list-form");
  cancelBtn.type = "button";
  cancelBtn.classList.add("cancel-list-btn");
  cancelBtn.textContent = "Cancel";
  acceptBtn.type = "button";
  acceptBtn.classList.add("add-list-btn");
  acceptBtn.textContent = "Add";
  label.htmlFor = "new-list";
  label.textContent = "New List";
  input.type = "text";
  input.name = "new-list";
  input.id = "new-list";
  input.required = true;

  btnContainer.appendChild(cancelBtn);
  btnContainer.appendChild(acceptBtn);
  listForm.appendChild(label);
  listForm.appendChild(input);
  listForm.appendChild(btnContainer);
  wrapper.appendChild(listForm);
};

const addTimeOption = () => {
  const sibling = document.querySelector(".date-container");
  const siblingTwo = document.querySelector(".time-container");
  const parent = sibling.parentNode;

  if (parent.contains(siblingTwo)) {
    return;
  } else {
    const container = document.createElement("div");
    const label = document.createElement("label");
    const timeInput = document.createElement("input");

    container.classList.add("time-container");
    label.htmlFor = "time";
    label.textContent = "Time:";
    timeInput.type = "time";
    timeInput.name = "time";
    timeInput.id = "time";

    container.appendChild(label);
    container.appendChild(timeInput);
    parent.appendChild(container);
  }
};

const addListOption = () => {
  const optionsContainer = document.querySelector("#list");
  const name = document.querySelector("#new-list").value;
  const newOption = document.createElement("option");

  newOption.value = name;
  newOption.selected = true;
  newOption.textContent = name;

  optionsContainer.appendChild(newOption);
};

const processForm = () => {
  const form = document.querySelector(".task-form");
  const getFormData = Object.fromEntries(new FormData(form));

  taskArray.push(getFormData);
};

const modifyTask = () => {
  const form = document.querySelector(".full-task-form");
  const index = parseInt(form.dataset.num);
  const formData = Object.fromEntries(new FormData(form));

  taskArray.splice(index, 1, formData);
};



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeFavoritesImage": () => (/* binding */ changeFavoritesImage),
/* harmony export */   "changeProjectsImage": () => (/* binding */ changeProjectsImage),
/* harmony export */   "favoritesList": () => (/* binding */ favoritesList),
/* harmony export */   "listArray": () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.listArray),
/* harmony export */   "mainMenu": () => (/* binding */ mainMenu),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "taskCount": () => (/* binding */ taskCount)
/* harmony export */ });
/* harmony import */ var _main_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-content */ "./src/main-content.js");
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.css */ "./src/nav.css");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _images_today_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/today.svg */ "./src/images/today.svg");
/* harmony import */ var _images_upcoming_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/upcoming.svg */ "./src/images/upcoming.svg");
/* harmony import */ var _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/expand-less.svg */ "./src/images/expand-less.svg");
/* harmony import */ var _images_expand_more_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/expand-more.svg */ "./src/images/expand-more.svg");
/* harmony import */ var _images_critical_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/critical.svg */ "./src/images/critical.svg");
/* harmony import */ var _images_high_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/high.svg */ "./src/images/high.svg");
/* harmony import */ var _images_normal_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/normal.svg */ "./src/images/normal.svg");
/* harmony import */ var _images_personal_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/personal.svg */ "./src/images/personal.svg");
/* harmony import */ var _images_work_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/work.svg */ "./src/images/work.svg");
/* harmony import */ var _images_shopping_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/shopping.svg */ "./src/images/shopping.svg");
/* harmony import */ var _images_new_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/new.svg */ "./src/images/new.svg");
/* harmony import */ var _images_add_list_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/add-list.svg */ "./src/images/add-list.svg");
















const mainMenu = () => {
  const main = document.querySelector(".main-section");
  const wrapper = document.querySelector(".wrapper");
  const menu = document.createElement("div");
  const todayContainer = document.createElement("div");
  const todayImg = new Image();
  const todayBtn = document.createElement("button");
  const todayCount = document.createElement("div");
  const upcomingContainer = document.createElement("div");
  const upcomingImg = new Image();
  const upcomingBtn = document.createElement("button");
  const upcomingCount = document.createElement("div");
  const favContainer = document.createElement("div");
  const favWrapper = document.createElement("div");
  const favoritesImg = new Image();
  const favoritesBtn = document.createElement("button");
  const favorites = document.createElement("div");
  const projContainer = document.createElement("div");
  const projWrapper = document.createElement("div");
  const projectsImg = new Image();
  const projects = document.createElement("div");
  const projectsBtn = document.createElement("button");
  const addListBtn = document.createElement("button");
  const addListImg = new Image();

  menu.classList.add("main-menu");
  todayContainer.classList.add("today-container");
  upcomingContainer.classList.add("upcoming-container");
  todayBtn.type = "button";
  todayBtn.classList.add("today-btn");
  todayBtn.textContent = "Today";
  upcomingBtn.type = "button";
  upcomingBtn.classList.add("upcoming-btn");
  upcomingBtn.textContent = "Upcoming";
  todayCount.classList.add("today-count");
  upcomingCount.classList.add("upcoming-count");
  favContainer.classList.add("fav-container");
  projContainer.classList.add("proj-container");
  favoritesBtn.type = "button";
  favoritesBtn.classList.add("favorites-btn");
  favoritesBtn.textContent = "Favorites";
  projectsBtn.type = "button";
  projectsBtn.classList.add("projects-btn");
  projectsBtn.textContent = "Projects";
  addListBtn.type = "button";
  addListBtn.classList.add("add-project-btn");
  favorites.classList.add("favorites");
  projects.classList.add("projects");
  todayImg.src = _images_today_svg__WEBPACK_IMPORTED_MODULE_3__;
  todayImg.alt = "Calender icon";
  upcomingImg.src = _images_upcoming_svg__WEBPACK_IMPORTED_MODULE_4__;
  upcomingImg.alt = "Calender icon";
  favoritesImg.src = _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_5__;
  favoritesImg.alt = "Expand less icon";
  favoritesImg.classList.add("favorites-img");
  projectsImg.src = _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_5__;
  projectsImg.alt = "Expand less icon";
  projectsImg.classList.add("projects-img");
  addListImg.src = _images_add_list_svg__WEBPACK_IMPORTED_MODULE_14__;
  addListImg.alt = "Add list icon";

  addListBtn.appendChild(addListImg);
  todayContainer.appendChild(todayImg);
  todayContainer.appendChild(todayBtn);
  todayContainer.appendChild(todayCount);
  upcomingContainer.appendChild(upcomingImg);
  upcomingContainer.appendChild(upcomingBtn);
  upcomingContainer.appendChild(upcomingCount);
  favWrapper.appendChild(favoritesImg);
  favWrapper.appendChild(favoritesBtn);
  favContainer.appendChild(favWrapper);
  favContainer.appendChild(favorites);
  projWrapper.appendChild(projectsImg);
  projWrapper.appendChild(projectsBtn);
  projWrapper.appendChild(addListBtn);
  projContainer.appendChild(projWrapper);
  projContainer.appendChild(projects);
  menu.appendChild(todayContainer);
  menu.appendChild(upcomingContainer);
  menu.appendChild(favContainer);
  menu.appendChild(projContainer);
  main.insertBefore(menu, wrapper);
};

const favoritesList = () => {
  const favorites = document.querySelector(".favorites");
  const containerOne = document.createElement("div");
  const containerTwo = document.createElement("div");
  const containerThree = document.createElement("div");
  const priorityOne = document.createElement("button");
  const priorityTwo = document.createElement("button");
  const priorityThree = document.createElement("button");
  const priorityOneCount = document.createElement("div");
  const priorityTwoCount = document.createElement("div");
  const priorityThreeCount = document.createElement("div");
  const criticalImg = new Image();
  const highImg = new Image();
  const normalImg = new Image();

  priorityOne.classList.add("critical-btn");
  priorityOne.id = "priority-btn";
  priorityOne.textContent = "Critical";
  priorityTwo.classList.add("high-btn");
  priorityTwo.id = "priority-btn";
  priorityTwo.textContent = "High";
  priorityThree.classList.add("normal-btn");
  priorityThree.id = "priority-btn";
  priorityThree.textContent = "Normal";
  priorityOneCount.classList.add("critical-count");
  priorityTwoCount.classList.add("high-count");
  priorityThreeCount.classList.add("normal-count");

  criticalImg.src = _images_critical_svg__WEBPACK_IMPORTED_MODULE_7__;
  criticalImg.alt = "Water drop icon";
  highImg.src = _images_high_svg__WEBPACK_IMPORTED_MODULE_8__;
  highImg.alt = "Water drop icon";
  normalImg.src = _images_normal_svg__WEBPACK_IMPORTED_MODULE_9__;
  normalImg.alt = "Water drop icon";

  containerOne.appendChild(criticalImg);
  containerOne.appendChild(priorityOne);
  containerOne.appendChild(priorityOneCount);
  containerTwo.appendChild(highImg);
  containerTwo.appendChild(priorityTwo);
  containerTwo.appendChild(priorityTwoCount);
  containerThree.appendChild(normalImg);
  containerThree.appendChild(priorityThree);
  containerThree.appendChild(priorityThreeCount);
  favorites.appendChild(containerOne);
  favorites.appendChild(containerTwo);
  favorites.appendChild(containerThree);
};

const projectList = () => {
  const projects = document.querySelector(".projects");

  projects.textContent = "";

  for (let i = 0; i < _layout__WEBPACK_IMPORTED_MODULE_2__.listArray.length; i++) {
    const listName = _layout__WEBPACK_IMPORTED_MODULE_2__.listArray[i];

    const container = document.createElement("div");
    const listBtn = document.createElement("button");
    const taskCount = document.createElement("div");
    const img = new Image();

    container.classList.add(`${listName}-list`);
    listBtn.type = "button";
    listBtn.classList.add(`${listName}-btn`);
    listBtn.id = "task-btn";
    listBtn.textContent = listName;
    taskCount.classList.add(`${listName}-count`);

    if (listName === "personal") {
      img.src = _images_personal_svg__WEBPACK_IMPORTED_MODULE_10__;
      img.alt = "Person icon";
    } else if (listName === "work") {
      img.src = _images_work_svg__WEBPACK_IMPORTED_MODULE_11__;
      img.alt = "Briefcase icon";
    } else if (listName === "shopping") {
      img.src = _images_shopping_svg__WEBPACK_IMPORTED_MODULE_12__;
      img.alt = "Shopping cart icon";
    } else {
      img.src = _images_new_svg__WEBPACK_IMPORTED_MODULE_13__;
      img.alt = "Large dot icon";
    }

    container.appendChild(img);
    container.appendChild(listBtn);
    container.appendChild(taskCount);
    projects.appendChild(container);
  }
};

const taskCount = () => {
  const counts = document.querySelectorAll("[class*='count']");
  const todayDate = new Date().toISOString().split("T")[0];

  counts.forEach((count) => {
    let className = count.className;

    let num = 0;

    for (let i = 0; i < _main_content__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {
      const obj = _main_content__WEBPACK_IMPORTED_MODULE_0__.taskArray[i];
      const listChoice = obj["list"];
      const taskPriority = obj["priority"];
      const taskDate = obj["date"];

      if (
        className.includes(listChoice) ||
        (todayDate === taskDate && className.includes("today")) ||
        (todayDate !== taskDate && className.includes("upcoming")) ||
        className.includes(taskPriority)
      ) {
        num += 1;
      }
    }

    if (num === 0) {
      count.textContent = "";
    } else {
      count.textContent = num;
    }
  });
};

const changeFavoritesImage = () => {
  const favoritesContainer = document.querySelector(".favorites");
  const image = document.querySelector(".favorites-img");

  if (favoritesContainer.textContent === "") {
    image.src = _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_5__;
    image.alt = "Expand less icon";
  } else {
    image.src = _images_expand_more_svg__WEBPACK_IMPORTED_MODULE_6__;
    image.alt = "Expand more icon";
  }
};

const changeProjectsImage = () => {
  const projectsContainer = document.querySelector(".projects");
  const image = document.querySelector(".projects-img");

  if (projectsContainer.textContent === "") {
    image.src = _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_5__;
    image.alt = "Expand less icon";
  } else {
    image.src = _images_expand_more_svg__WEBPACK_IMPORTED_MODULE_6__;
    image.alt = "Expand more icon";
  }
};




/***/ }),

/***/ "./src/task-display.js":
/*!*****************************!*\
  !*** ./src/task-display.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addDeleteOption": () => (/* binding */ addDeleteOption),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "removeDeleteOption": () => (/* binding */ removeDeleteOption),
/* harmony export */   "sortTaskBars": () => (/* binding */ sortTaskBars),
/* harmony export */   "taskBars": () => (/* binding */ taskBars),
/* harmony export */   "taskPage": () => (/* binding */ taskPage)
/* harmony export */ });
/* harmony import */ var _main_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-content.js */ "./src/main-content.js");
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.js */ "./src/layout.js");
/* harmony import */ var _images_personal_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/personal.svg */ "./src/images/personal.svg");
/* harmony import */ var _images_work_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/work.svg */ "./src/images/work.svg");
/* harmony import */ var _images_shopping_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/shopping.svg */ "./src/images/shopping.svg");
/* harmony import */ var _images_new_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/new.svg */ "./src/images/new.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");








const taskBars = () => {
  const display = document.querySelector(".task-display");

  display.textContent = "";

  if (_main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.length !== 0) {
    for (let i = 0; i < _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {
      const obj = _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i];
      const taskTitle = obj["title"];
      const listChoice = obj["list"];
      const taskDate = obj["date"];

      // create elements for each task
      const wrapper = document.createElement("div");
      const checkBoxContainer = document.createElement("form");
      const checkBoxLabel = document.createElement("label");
      const checkBox = document.createElement("input");
      const wrapperTwo = document.createElement("div");
      const title = document.createElement("h3");
      const date = document.createElement("div");
      const listContainer = document.createElement("div");
      const listName = document.createElement("p");
      const img = new Image();

      wrapper.classList.add("task");
      wrapper.id = taskTitle;
      wrapper.dataset.num = `${i}`;
      checkBoxLabel.htmlFor = "checkbox";
      checkBox.type = "checkbox";
      checkBox.name = "task-checkbox";
      checkBox.classList.add("checkbox");
      title.textContent = taskTitle;
      date.textContent = taskDate;
      listName.textContent = listChoice;

      if (listChoice === "personal") {
        img.src = _images_personal_svg__WEBPACK_IMPORTED_MODULE_2__;
        img.alt = "Person icon";
      } else if (listChoice === "work") {
        img.src = _images_work_svg__WEBPACK_IMPORTED_MODULE_3__;
        img.alt = "Briefcase icon";
      } else if (listChoice === "shopping") {
        img.src = _images_shopping_svg__WEBPACK_IMPORTED_MODULE_4__;
        img.alt = "Shopping cart icon";
      } else {
        img.src = _images_new_svg__WEBPACK_IMPORTED_MODULE_5__;
        img.alt = "Large dot icon";
      }

      checkBoxContainer.appendChild(checkBoxLabel);
      checkBoxContainer.appendChild(checkBox);
      wrapperTwo.appendChild(title);
      wrapperTwo.appendChild(date);
      listContainer.appendChild(listName);
      listContainer.appendChild(img);
      wrapper.appendChild(checkBoxContainer);
      wrapper.appendChild(wrapperTwo);
      wrapper.appendChild(listContainer);
      display.appendChild(wrapper);
    }
  } else {
    (0,_main_content_js__WEBPACK_IMPORTED_MODULE_0__.emptyIndicator)();
  }
};

const taskPage = (taskIndex) => {
  const display = document.querySelector(".task-display");

  display.textContent = "";

  const obj = _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[taskIndex];
  const taskTitle = obj["title"];
  const taskDescription = obj["description"];
  const taskDate = obj["date"];
  const taskTime = obj["time"];
  const taskPriority = obj["priority"];
  const listChoice = obj["list"];

  const form = document.createElement("form");
  const titleContainer = document.createElement("div");
  const titleLabel = document.createElement("label");
  const title = document.createElement("textarea");
  const descriptionContainer = document.createElement("div");
  const descriptionLabel = document.createElement("label");
  const description = document.createElement("textarea");
  const dateWrapper = document.createElement("div");
  const dateContainer = document.createElement("div");
  const dateLabel = document.createElement("label");
  const date = document.createElement("input");
  const timeContainer = document.createElement("div");
  const timeLabel = document.createElement("label");
  const time = document.createElement("input");
  const listNameContainer = document.createElement("div");
  const listSelectLabel = document.createElement("label");
  const listSelect = document.createElement("select");
  const priorityContainer = document.createElement("div");
  const priorityLabel = document.createElement("label");
  const prioritySelect = document.createElement("select");
  const backBtn = document.createElement("button");

  form.classList.add("full-task-form");
  form.dataset.num = taskIndex;
  descriptionContainer.classList.add("description");
  dateContainer.classList.add("date-container");
  timeContainer.classList.add("time-container");
  backBtn.classList.add("back-btn");
  titleLabel.htmlFor = "task-title";
  titleLabel.textContent = "Name";
  descriptionLabel.htmlFor = "description";
  dateLabel.htmlFor = "date";
  dateLabel.textContent = "Due date: ";
  timeLabel.htmlFor = "time";
  timeLabel.textContent = "Time";
  priorityLabel.htmlFor = "priority";
  priorityLabel.textContent = "Priority";
  listSelectLabel.htmlFor = "list";
  backBtn.type = "button";
  backBtn.textContent = "Back";
  title.name = "title";
  title.id = "task-title";
  title.value = taskTitle;
  title.required = true;
  description.name = "description";
  description.id = "description";
  description.value = taskDescription;
  listSelect.name = "list";
  listSelect.id = "list";
  date.type = "date";
  date.name = "date";
  date.id = "date";
  date.value = taskDate;
  time.type = "time";
  time.name = "time";
  time.id = "time";
  time.value = taskTime;
  prioritySelect.name = "priority";
  prioritySelect.id = "priority";

  // Dynamically add list options. When the user adds a new list,
  // the new list will be present in the next form.
  for (let i = 0; i < _layout_js__WEBPACK_IMPORTED_MODULE_1__.listArray.length; i++) {
    const listOption = document.createElement("option");

    listOption.value = _layout_js__WEBPACK_IMPORTED_MODULE_1__.listArray[i];
    listOption.textContent = _layout_js__WEBPACK_IMPORTED_MODULE_1__.listArray[i];

    if (listOption.value === listChoice) {
      listOption.selected = true;
    }
    listSelect.appendChild(listOption);
  }

  for (let i = 0; i < _layout_js__WEBPACK_IMPORTED_MODULE_1__.priorityArray.length; i++) {
    const priorityOption = document.createElement("option");

    priorityOption.value = _layout_js__WEBPACK_IMPORTED_MODULE_1__.priorityArray[i];
    priorityOption.textContent = _layout_js__WEBPACK_IMPORTED_MODULE_1__.priorityArray[i];

    prioritySelect.appendChild(priorityOption);

    if (_layout_js__WEBPACK_IMPORTED_MODULE_1__.priorityArray[i] === taskPriority) {
      priorityOption.selected = true;
    }
  }

  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(title);
  listNameContainer.appendChild(listSelectLabel);
  listNameContainer.appendChild(listSelect);
  priorityContainer.appendChild(priorityLabel);
  priorityContainer.appendChild(prioritySelect);
  descriptionContainer.appendChild(descriptionLabel);
  descriptionContainer.appendChild(description);
  dateContainer.appendChild(dateLabel);
  dateContainer.appendChild(date);
  timeContainer.appendChild(timeLabel);
  timeContainer.appendChild(time);
  dateWrapper.appendChild(dateContainer);
  dateWrapper.appendChild(timeContainer);
  form.appendChild(backBtn);
  form.appendChild(titleContainer);
  form.appendChild(listNameContainer);
  form.appendChild(descriptionContainer);
  form.appendChild(dateWrapper);
  form.appendChild(priorityContainer);
  display.appendChild(form);
};

const sortTaskBars = (btn) => {
  const display = document.querySelector(".task-display");
  const sibling = btn.nextElementSibling;
  const btnClass = btn.className;
  const todayDate = new Date().toISOString().split("T")[0];

  display.textContent = "";

  if (sibling.textContent !== "") {
    for (let i = 0; i < _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {
      const obj = _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i];
      const taskTitle = obj["title"];
      const listChoice = obj["list"];
      const taskDate = obj["date"];
      const priority = obj["priority"];

      if (
        btnClass.includes(listChoice) ||
        (todayDate === taskDate && btnClass.includes("today")) ||
        (todayDate !== taskDate && btnClass.includes("upcoming")) ||
        btnClass.includes(priority)
      ) {
        // create elements for each task
        const wrapper = document.createElement("div");
        const checkBoxContainer = document.createElement("form");
        const checkBoxLabel = document.createElement("label");
        const checkBox = document.createElement("input");
        const wrapperTwo = document.createElement("div");
        const title = document.createElement("h3");
        const date = document.createElement("div");
        const listContainer = document.createElement("div");
        const listName = document.createElement("p");
        const listImg = new Image();

        wrapper.classList.add("task");
        wrapper.id = taskTitle;
        wrapper.dataset.num = i;
        checkBoxLabel.htmlFor = "checkbox";
        checkBox.type = "checkbox";
        checkBox.name = "task-checkbox";
        checkBox.classList.add("checkbox");
        listImg.alt = "img";
        title.textContent = taskTitle;
        date.textContent = taskDate;
        listName.textContent = listChoice;
        //   listImg = img

        checkBoxContainer.appendChild(checkBoxLabel);
        checkBoxContainer.appendChild(checkBox);
        wrapperTwo.appendChild(title);
        wrapperTwo.appendChild(date);
        listContainer.appendChild(listName);
        listContainer.appendChild(listImg);
        wrapper.appendChild(checkBoxContainer);
        wrapper.appendChild(wrapperTwo);
        wrapper.appendChild(listContainer);
        display.appendChild(wrapper);
      }
    }
  } else {
    (0,_main_content_js__WEBPACK_IMPORTED_MODULE_0__.emptyIndicator)();
  }
};

const addDeleteOption = () => {
  const header = document.querySelector(".task-header");
  const div = document.querySelector(".del-btn-container");

  if (header.contains(div)) {
    return;
  }

  const container = document.createElement("div");
  const delBtn = document.createElement("button");
  const delBtnImg = new Image();

  container.classList.add("del-btn-container");
  delBtn.type = "submit";
  delBtn.classList.add("del-btn");
  delBtnImg.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_6__;
  delBtnImg.alt = "Delete icon";

  delBtn.appendChild(delBtnImg);
  container.appendChild(delBtn);
  header.appendChild(container);
};

const removeDeleteOption = () => {
  const header = document.querySelector(".task-header");
  const div = document.querySelector(".del-btn-container");

  header.removeChild(div);
};

const deleteTask = () => {
  const display = document.querySelector(".task-display");
  const tasks = document.querySelectorAll(".checkbox");
  const displayNodes = display.childNodes;

  tasks.forEach((task) => {
    if (task.checked === true) {
      const grandParent = task.parentNode.parentNode;
      const taskIndex = grandParent.dataset.num;

      _main_content_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.splice(taskIndex, 1);
      display.removeChild(displayNodes[taskIndex]);

      for (let i = 0; i < displayNodes.length; i++) {
        displayNodes[i].dataset.num = i;
      }
    }
  });

  if (display.textContent === "") {
    (0,_main_content_js__WEBPACK_IMPORTED_MODULE_0__.emptyIndicator)();
    removeDeleteOption();
  }
};




/***/ }),

/***/ "./src/images/add-list.svg":
/*!*********************************!*\
  !*** ./src/images/add-list.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "608022691d6d6f840c05.svg";

/***/ }),

/***/ "./src/images/add-task.svg":
/*!*********************************!*\
  !*** ./src/images/add-task.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8e0fbe2faa848d93064d.svg";

/***/ }),

/***/ "./src/images/back.svg":
/*!*****************************!*\
  !*** ./src/images/back.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "29fa7ae3716720eddbde.svg";

/***/ }),

/***/ "./src/images/bell.svg":
/*!*****************************!*\
  !*** ./src/images/bell.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92545f67f5303d0f3922.svg";

/***/ }),

/***/ "./src/images/calendar.svg":
/*!*********************************!*\
  !*** ./src/images/calendar.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8773835d1b8ac70eb34d.svg";

/***/ }),

/***/ "./src/images/cat.svg":
/*!****************************!*\
  !*** ./src/images/cat.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "006d276254200a9c640b.svg";

/***/ }),

/***/ "./src/images/critical.svg":
/*!*********************************!*\
  !*** ./src/images/critical.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd4d84336704fd8a4dad.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24315ab37634d58b5ce3.svg";

/***/ }),

/***/ "./src/images/expand-less.svg":
/*!************************************!*\
  !*** ./src/images/expand-less.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bf169074e2c1dab27b9a.svg";

/***/ }),

/***/ "./src/images/expand-more.svg":
/*!************************************!*\
  !*** ./src/images/expand-more.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0d7c76b47bf772d4197.svg";

/***/ }),

/***/ "./src/images/help.svg":
/*!*****************************!*\
  !*** ./src/images/help.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "03f682be37e4707f1e54.svg";

/***/ }),

/***/ "./src/images/high.svg":
/*!*****************************!*\
  !*** ./src/images/high.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35afbeea52a55255d386.svg";

/***/ }),

/***/ "./src/images/menu.svg":
/*!*****************************!*\
  !*** ./src/images/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c16ad7d4e68aa1552ac6.svg";

/***/ }),

/***/ "./src/images/new.svg":
/*!****************************!*\
  !*** ./src/images/new.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51da3c0fe3bb7d998c5b.svg";

/***/ }),

/***/ "./src/images/normal.svg":
/*!*******************************!*\
  !*** ./src/images/normal.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e3a1460054427b2960d.svg";

/***/ }),

/***/ "./src/images/personal.svg":
/*!*********************************!*\
  !*** ./src/images/personal.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a33861281f830f8e98c.svg";

/***/ }),

/***/ "./src/images/save.svg":
/*!*****************************!*\
  !*** ./src/images/save.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fc1dbab6caa6d7dc57b.svg";

/***/ }),

/***/ "./src/images/shopping.svg":
/*!*********************************!*\
  !*** ./src/images/shopping.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "74275fe8ffa62dc026a3.svg";

/***/ }),

/***/ "./src/images/today.svg":
/*!******************************!*\
  !*** ./src/images/today.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "467da477053ac6a2ef12.svg";

/***/ }),

/***/ "./src/images/upcoming.svg":
/*!*********************************!*\
  !*** ./src/images/upcoming.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca4a672c8f53f481164c.svg";

/***/ }),

/***/ "./src/images/work.svg":
/*!*****************************!*\
  !*** ./src/images/work.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3e2e6ad3d3479c6f52d9.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.js */ "./src/layout.js");
/* harmony import */ var _main_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-content.js */ "./src/main-content.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _task_display_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-display.js */ "./src/task-display.js");





function component() {
  // Generate initial page layout
  (0,_layout_js__WEBPACK_IMPORTED_MODULE_0__.pageLayout)();
  (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.mainContent)();
  (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.emptyIndicator)();

  function eventHandler() {
    const menuBtn = document.querySelector(".menu-button");
    const main = document.querySelector(".main-section");

    // Toggle the Main Menu
    menuBtn.addEventListener("click", () => {
      const menu = document.querySelector(".main-menu");

      if (main.contains(menu)) {
        main.removeChild(menu);
      } else {
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.mainMenu)();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.taskCount)();
      }
    });

    main.addEventListener("click", function (e) {
      const heading = document.querySelector("h2");

      // Toggle Today or Upcoming projects
      if (e.target.className === "today-btn") {
        const btn = e.target;

        heading.textContent = "Today";

        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.sortTaskBars)(btn);
      }

      if (e.target.className === "upcoming-btn") {
        const btn = e.target;

        heading.textContent = "Upcoming";

        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.sortTaskBars)(btn);
      }

      // Toggle Favorites and Projects menu choices
      if (e.target.className === "favorites-btn") {
        const favorites = document.querySelector(".favorites");

        if (favorites.textContent === "") {
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.favoritesList)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.taskCount)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.changeFavoritesImage)();
        } else {
          favorites.textContent = "";
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.changeFavoritesImage)();
        }
      }

      const display = document.querySelector(".task-display");
      const form = document.querySelector(".task-form");

      if (e.target.className === "projects-btn") {
        const projects = document.querySelector(".projects");

        if (projects.textContent === "") {
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.projectList)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.taskCount)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.changeProjectsImage)();
        } else {
          projects.textContent = "";
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.changeProjectsImage)();
        }

        if (display.contains(form)) {
        } else {
          (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.taskBars)();
        }
      }

      const wrapper = document.querySelector(".wrapper");
      const listForm = document.querySelector(".list-form");

      // create, submit and process forms
      if (e.target.className === "form-btn") {
        console.log("yeah");
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.createForm)();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.changeButton)(e.target);
      }

      if (e.target.className === "submit-btn") {
        const isFormValid = form.checkValidity();

        if (!isFormValid) {
          form.reportValidity();
        } else {
          if (listForm) {
            wrapper.removeChild(listForm);
          }

          e.preventDefault();
          (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.processForm)();
          (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.taskBars)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.taskCount)();
          (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.changeButton)(e.target);
        }
      }

      if (e.target.className === "save-btn") {
        const form = document.querySelector(".full-task-form");
        const isFormValid = form.checkValidity();

        if (!isFormValid) {
          form.reportValidity();
        } else {
          (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.modifyTask)();
          (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.taskBars)();
          (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.taskCount)();
          (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.changeButton)(e.target);
        }
      }

      // Add time input option
      if (e.target.id === "date" && e.target.name === "date") {
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.addTimeOption)();
      }

      // Remove form display or full-task display
      if (e.target.className === "back-btn") {
        if (listForm) {
          wrapper.removeChild(listForm);
        }

        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.taskBars)();
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.changeButton)(e.target);
      }

      // Create new list form
      if (
        e.target.className === "add-project-btn" ||
        e.target.className === "create-list-btn"
      ) {
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.newListForm)();
      }

      // Cancel new list form
      if (e.target.className === "cancel-list-btn") {
        wrapper.removeChild(wrapper.lastChild);
      }

      // Add new list option
      if (e.target.className === "add-list-btn") {
        const listForm = document.querySelector(".list-form");
        const isFormValid = listForm.checkValidity();

        if (!isFormValid) {
          listForm.reportValidity();
        } else {
          e.preventDefault();
          (0,_layout_js__WEBPACK_IMPORTED_MODULE_0__.updateListArray)();

          if (display.contains(form)) {
            (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.addListOption)();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.projectList)();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.changeProjectsImage)();
            wrapper.removeChild(wrapper.lastChild);
          } else {
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.projectList)();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.changeProjectsImage)();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.taskCount)();
            wrapper.removeChild(wrapper.lastChild);
          }
        }
      }

      // Sort tasks according to the clicked project or priority list
      if (e.target.id === "task-btn" || e.target.id === "priority-btn") {
        const btn = e.target;

        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.sortTaskBars)(btn);
      }

      // Display all task details
      if (e.target.className === "task") {
        const header = document.querySelector(".task-header");
        const delBtnContainer = document.querySelector(".del-btn-container");
        const index = e.target.dataset.num;

        if (header.contains(delBtnContainer)) {
          header.removeChild(delBtnContainer);
        }

        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.taskPage)(index);
        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.changeButton)(e.target);
      }

      // Delete tasks
      if (e.target.className === "checkbox" && e.target.checked === true) {
        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.addDeleteOption)();
      } else if (
        e.target.className === "checkbox" &&
        e.target.checked === false
      ) {
        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.removeDeleteOption)();
      }

      if (e.target.className === "del-btn") {
        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.deleteTask)();
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.taskCount)();
      }
    });
  }
  eventHandler();
}
component();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esb0RBQW9ELGlCQUFpQixnQkFBZ0IsdUJBQXVCLHdCQUF3QixrQkFBa0Isa0NBQWtDLEdBQUcsbUJBQW1CLGtCQUFrQiwyQkFBMkIsdUJBQXVCLDRDQUE0QyxzQkFBc0IsS0FBSyxxQkFBcUIsMkJBQTJCLHVCQUF1QixrQkFBa0IsMkJBQTJCLHVCQUF1Qix5QkFBeUIsR0FBRyw0QkFBNEIsdUJBQXVCLGVBQWUsb0JBQW9CLEdBQUcsc0JBQXNCLHVCQUF1QixnQkFBZ0IsdUJBQXVCLEdBQUcsV0FBVyxnQkFBZ0IsaUJBQWlCLGtCQUFrQixjQUFjLEdBQUcsZ0JBQWdCLGlCQUFpQixrQkFBa0IsdUNBQXVDLCtDQUErQyxHQUFHLHFCQUFxQixpQkFBaUIsa0JBQWtCLHVDQUF1QywrQ0FBK0MsMEJBQTBCLDRCQUE0QixLQUFLLGVBQWUsdUJBQXVCLHVCQUF1QixHQUFHLGlDQUFpQyxpQkFBaUIsaUJBQWlCLEdBQUcseUdBQXlHLHVCQUF1QixvQkFBb0Isc0JBQXNCLDJCQUEyQixHQUFHLHVFQUF1RSx1QkFBdUIsa0JBQWtCLG1DQUFtQyxHQUFHLDJCQUEyQix1QkFBdUIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLEdBQUcsc0NBQXNDLHVCQUF1QixpQkFBaUIsR0FBRyw2QkFBNkIsaUJBQWlCLGdCQUFnQixHQUFHLGlCQUFpQixrQkFBa0IsR0FBRyw4QkFBOEIsMkJBQTJCLEdBQUcsZ0NBQWdDLHNCQUFzQixHQUFHLGVBQWUsaUJBQWlCLGdCQUFnQixHQUFHLHlEQUF5RCxpQkFBaUIsZ0JBQWdCLEdBQUcsMEJBQTBCLGtCQUFrQixpQkFBaUIsR0FBRyxTQUFTLGtGQUFrRixVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFlBQVksY0FBYyxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLG1DQUFtQyxpQkFBaUIsZ0JBQWdCLHVCQUF1Qix3QkFBd0Isa0JBQWtCLGtDQUFrQyxHQUFHLG1CQUFtQixrQkFBa0IsMkJBQTJCLHVCQUF1Qiw0Q0FBNEMsc0JBQXNCLEtBQUsscUJBQXFCLDJCQUEyQix1QkFBdUIsa0JBQWtCLDJCQUEyQix1QkFBdUIseUJBQXlCLEdBQUcsNEJBQTRCLHVCQUF1QixlQUFlLG9CQUFvQixHQUFHLHNCQUFzQix1QkFBdUIsZ0JBQWdCLHVCQUF1QixHQUFHLFdBQVcsZ0JBQWdCLGlCQUFpQixrQkFBa0IsY0FBYyxHQUFHLGdCQUFnQixpQkFBaUIsa0JBQWtCLHVDQUF1QywrQ0FBK0MsR0FBRyxxQkFBcUIsaUJBQWlCLGtCQUFrQix1Q0FBdUMsK0NBQStDLDBCQUEwQiw0QkFBNEIsS0FBSyxlQUFlLHVCQUF1Qix1QkFBdUIsR0FBRyxpQ0FBaUMsaUJBQWlCLGlCQUFpQixHQUFHLHlHQUF5Ryx1QkFBdUIsb0JBQW9CLHNCQUFzQiwyQkFBMkIsR0FBRyx1RUFBdUUsdUJBQXVCLGtCQUFrQixtQ0FBbUMsR0FBRywyQkFBMkIsdUJBQXVCLGdCQUFnQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLHNDQUFzQyx1QkFBdUIsaUJBQWlCLEdBQUcsNkJBQTZCLGlCQUFpQixnQkFBZ0IsR0FBRyxpQkFBaUIsa0JBQWtCLEdBQUcsOEJBQThCLDJCQUEyQixHQUFHLGdDQUFnQyxzQkFBc0IsR0FBRyxlQUFlLGlCQUFpQixnQkFBZ0IsR0FBRyx5REFBeUQsaUJBQWlCLGdCQUFnQixHQUFHLDBCQUEwQixrQkFBa0IsaUJBQWlCLEdBQUcscUJBQXFCO0FBQ2g3SztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSw2Q0FBNkMsMkJBQTJCLGNBQWMsZUFBZSxHQUFHLFVBQVUsa0JBQWtCLG9CQUFvQixrQ0FBa0MsS0FBSyxjQUFjLGlCQUFpQixnQkFBZ0Isa0JBQWtCLCtCQUErQix1Q0FBdUMsR0FBRyxvQkFBb0Isa0JBQWtCLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxtQkFBbUIsb0JBQW9CLGtCQUFrQiwyQkFBMkIsMkJBQTJCLEdBQUcsYUFBYSxvQkFBb0IsR0FBRyxhQUFhLGtCQUFrQixtQ0FBbUMsR0FBRyxpQkFBaUIsaUJBQWlCLGdCQUFnQixHQUFHLHVIQUF1SCx5QkFBeUIsR0FBRyxTQUFTLGlGQUFpRixZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxTQUFTLFlBQVksNkJBQTZCLDJCQUEyQixjQUFjLGVBQWUsR0FBRyxVQUFVLGtCQUFrQixvQkFBb0Isa0NBQWtDLEtBQUssY0FBYyxpQkFBaUIsZ0JBQWdCLGtCQUFrQiwrQkFBK0IsdUNBQXVDLEdBQUcsb0JBQW9CLGtCQUFrQixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsbUJBQW1CLG9CQUFvQixrQkFBa0IsMkJBQTJCLDJCQUEyQixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsYUFBYSxrQkFBa0IsbUNBQW1DLEdBQUcsaUJBQWlCLGlCQUFpQixnQkFBZ0IsR0FBRyx1SEFBdUgseUJBQXlCLEdBQUcscUJBQXFCO0FBQ3ZqRTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxzREFBc0QsOEJBQThCLHdCQUF3QixrQkFBa0IsMkJBQTJCLGNBQWMsMEJBQTBCLEdBQUcsc0JBQXNCLGlCQUFpQixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyw0Q0FBNEMsa0JBQWtCLHlDQUF5QyxvQkFBb0IsR0FBRyxzQ0FBc0Msa0JBQWtCLHlDQUF5Qyw2QkFBNkIsR0FBRyw0RUFBNEUsdUJBQXVCLGtCQUFrQix5Q0FBeUMsb0JBQW9CLEdBQUcsNEJBQTRCLHVCQUF1QixrQkFBa0IsR0FBRyx3Q0FBd0Msc0JBQXNCLGtCQUFrQix3Q0FBd0MsR0FBRyxvREFBb0QsaUJBQWlCLGdCQUFnQixHQUFHLG1HQUFtRyxpQkFBaUIsZ0JBQWdCLEdBQUcsc0JBQXNCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLFNBQVMsOEVBQThFLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLFFBQVEsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxzQ0FBc0MsOEJBQThCLHdCQUF3QixrQkFBa0IsMkJBQTJCLGNBQWMsMEJBQTBCLEdBQUcsc0JBQXNCLGlCQUFpQixHQUFHLHVCQUF1QixzQkFBc0IsR0FBRyw0Q0FBNEMsa0JBQWtCLHlDQUF5QyxvQkFBb0IsR0FBRyxzQ0FBc0Msa0JBQWtCLHlDQUF5Qyw2QkFBNkIsR0FBRyw0RUFBNEUsdUJBQXVCLGtCQUFrQix5Q0FBeUMsb0JBQW9CLEdBQUcsNEJBQTRCLHVCQUF1QixrQkFBa0IsR0FBRyx3Q0FBd0Msc0JBQXNCLGtCQUFrQix3Q0FBd0MsR0FBRyxvREFBb0QsaUJBQWlCLGdCQUFnQixHQUFHLG1HQUFtRyxpQkFBaUIsZ0JBQWdCLEdBQUcsc0JBQXNCLGlCQUFpQixnQkFBZ0Isc0JBQXNCLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLHFCQUFxQjtBQUN0aUc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQXFHO0FBQ3JHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsd0ZBQU87Ozs7QUFJK0M7QUFDdkUsT0FBTyxpRUFBZSx3RkFBTyxJQUFJLCtGQUFjLEdBQUcsK0ZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBb0c7QUFDcEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUk4QztBQUN0RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFpRztBQUNqRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLG9GQUFPOzs7O0FBSTJDO0FBQ25FLE9BQU8saUVBQWUsb0ZBQU8sSUFBSSwyRkFBYyxHQUFHLDJGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JzQjtBQUNjO0FBQ0E7QUFDQztBQUNBOztBQUVyQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQUc7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRDQUFJO0FBQ3ZCO0FBQ0EsZ0JBQWdCLDZDQUFJO0FBQ3BCO0FBQ0EsZ0JBQWdCLDZDQUFJO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckQxQztBQUNjO0FBQ0c7QUFDSDtBQUNJO0FBQ0o7QUFDSTs7QUFFekM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFHO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxpREFBSTtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQUk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxxREFBZ0IsRUFBRTtBQUN4Qzs7QUFFQSx5QkFBeUIsOENBQVM7QUFDbEMsK0JBQStCLDhDQUFTOztBQUV4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDZDQUFJO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsaURBQUc7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsNkNBQUk7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQVlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwVHlDO0FBQ3hCO0FBQ2tCO0FBQ0E7QUFDSTtBQUNHO0FBQ0E7QUFDSDtBQUNKO0FBQ0U7QUFDRTtBQUNKO0FBQ0s7QUFDTDtBQUNLOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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USxtREFBUztBQUNqQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGF5b3V0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmF2LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250ZW50LmNzcz9jMzQ3Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sYXlvdXQuY3NzP2VhZWMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25hdi5jc3M/MjBhNyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4tY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxufVxcblxcbi50YXNrLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiBJbnJvZHVjZSBzY3JvbGwgYmFyXFxuICBoZWlnaHQ6IDU5NnB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgKi9cXG59XFxuXFxuLndyYXBwZXIgPiBmb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZGlzcGxheS1idG4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwcHg7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi5lbXB0eS1pbmRpY2F0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciA1MHB4IDUwcHggNTBweDtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNTBweCAzZnIgNTBweCA1MHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuLmJhY2stYnRuIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZm9ybSA+IGRpdiA+IHRleHRhcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRhc2stZm9ybSA+IGRpdjpudGgtb2YtdHlwZSgxKSxcXG4udGFzay1mb3JtID4gZGl2Om50aC1vZi10eXBlKDIpLFxcbi50YXNrLWZvcm0gPiBkaXY6bnRoLW9mLXR5cGUoNCkge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2stZm9ybSA+IGRpdjpudGgtb2YtdHlwZSgzKSxcXG4udGFzay1mb3JtID4gZGl2Om50aC1vZi10eXBlKDUpIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSA+IGRpdiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSA+IGRpdiA+IHRleHRhcmVhIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uID4gdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzayA+IGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRhc2sgaW1nIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uYmFjay1idG4gaW1nLFxcbi5kZWwtYnRuIGltZyxcXG4uY3JlYXRlLWxpc3QtYnRuIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmVtcHR5LWluZGljYXRvciBpbWcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQjs7cUJBRW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDBDQUEwQztFQUMxQyxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixpQkFBaUI7O0VBRWpCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOzs7RUFHRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCAxZnI7XFxufVxcblxcbi50YXNrLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAvKiBJbnJvZHVjZSBzY3JvbGwgYmFyXFxuICBoZWlnaHQ6IDU5NnB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgKi9cXG59XFxuXFxuLndyYXBwZXIgPiBmb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZGlzcGxheS1idG4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwcHg7XFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxufVxcblxcbi5lbXB0eS1pbmRpY2F0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciA1MHB4IDUwcHggNTBweDtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNTBweCAzZnIgNTBweCA1MHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuLmJhY2stYnRuIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZm9ybSA+IGRpdiA+IHRleHRhcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnRhc2stZm9ybSA+IGRpdjpudGgtb2YtdHlwZSgxKSxcXG4udGFzay1mb3JtID4gZGl2Om50aC1vZi10eXBlKDIpLFxcbi50YXNrLWZvcm0gPiBkaXY6bnRoLW9mLXR5cGUoNCkge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2stZm9ybSA+IGRpdjpudGgtb2YtdHlwZSgzKSxcXG4udGFzay1mb3JtID4gZGl2Om50aC1vZi10eXBlKDUpIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSA+IGRpdiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSA+IGRpdiA+IHRleHRhcmVhIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uID4gdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi50YXNrID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50YXNrID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzayA+IGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRhc2sgaW1nIHtcXG4gIGhlaWdodDogMjBweDtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uYmFjay1idG4gaW1nLFxcbi5kZWwtYnRuIGltZyxcXG4uY3JlYXRlLWxpc3QtYnRuIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmVtcHR5LWluZGljYXRvciBpbWcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMjsgKi9cXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggNGZyIDEwMHB4O1xcbn1cXG5cXG4uY29udGVudCA+IGRpdiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG59XFxuXFxuLm1haW4tc2VjdGlvbiB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uZGlzcGxheS1idG4tY29udGFpbmVyIGltZyxcXG4uZGVsLWJ0bi1jb250YWluZXIgaW1nLFxcbi5jcmVhdGUtbGlzdC1idG4gaW1nLFxcbi5hZGQtcHJvamVjdC1idG4gaW1nLFxcbi5iYWNrLWJ0biBpbWcge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9sYXlvdXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOzs7OztFQUtFLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYyOyAqL1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCA0ZnIgMTAwcHg7XFxufVxcblxcbi5jb250ZW50ID4gZGl2IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbn1cXG5cXG4ubWFpbi1zZWN0aW9uIHtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5kaXNwbGF5LWJ0bi1jb250YWluZXIgaW1nLFxcbi5kZWwtYnRuLWNvbnRhaW5lciBpbWcsXFxuLmNyZWF0ZS1saXN0LWJ0biBpbWcsXFxuLmFkZC1wcm9qZWN0LWJ0biBpbWcsXFxuLmJhY2stYnRuIGltZyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW4tbWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYyO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1tZW51ID4gZGl2IHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLm1haW4tbWVudSBidXR0b24ge1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxufVxcblxcbi50b2RheS1jb250YWluZXIsXFxuLnVwY29taW5nLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDNmciAzNXB4O1xcbiAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG5cXG4uZmF2LWNvbnRhaW5lcixcXG4ucHJvai1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAzZnIgMzVweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG59XFxuXFxuLmZhdi1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpLFxcbi5wcm9qLWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSkge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAzZnIgMzVweDtcXG4gIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmZhdm9yaXRlcyxcXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmZhdm9yaXRlcyA+IGRpdixcXG4ucHJvamVjdHMgPiBkaXYge1xcbiAgcGFkZGluZzogMTBweCAwcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDNmciAxZnI7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXYgPiBpbWcsXFxuLnByb2plY3RzID4gZGl2ID4gaW1nIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyID4gaW1nLFxcbi51cGNvbWluZy1jb250YWluZXIgPiBpbWcsXFxuLmZhdi1jb250YWluZXIgaW1nLFxcbi5wcm9qLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuW2NsYXNzKj1cXFwiY291bnRcXFwiXSB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9uYXYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOzs7O0VBSUUsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbi1tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjI7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLW1lbnUgPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubWFpbi1tZW51IGJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lcixcXG4udXBjb21pbmctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxufVxcblxcbi5mYXYtY29udGFpbmVyLFxcbi5wcm9qLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDNmciAzNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbn1cXG5cXG4uZmF2LWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSksXFxuLnByb2otY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDNmciAzNXB4O1xcbiAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG5cXG4uZmF2b3JpdGVzLFxcbi5wcm9qZWN0cyB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZmF2b3JpdGVzID4gZGl2LFxcbi5wcm9qZWN0cyA+IGRpdiB7XFxuICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggM2ZyIDFmcjtcXG59XFxuXFxuLmZhdm9yaXRlcyA+IGRpdiA+IGltZyxcXG4ucHJvamVjdHMgPiBkaXYgPiBpbWcge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi50b2RheS1jb250YWluZXIgPiBpbWcsXFxuLnVwY29taW5nLWNvbnRhaW5lciA+IGltZyxcXG4uZmF2LWNvbnRhaW5lciBpbWcsXFxuLnByb2otY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG5bY2xhc3MqPVxcXCJjb3VudFxcXCJdIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9sYXlvdXQuY3NzXCI7XG5pbXBvcnQgSW1nIGZyb20gXCIuL2ltYWdlcy9tZW51LnN2Z1wiO1xuaW1wb3J0IEltZzIgZnJvbSBcIi4vaW1hZ2VzL2NhdC5zdmdcIjtcbmltcG9ydCBJbWczIGZyb20gXCIuL2ltYWdlcy9iZWxsLnN2Z1wiO1xuaW1wb3J0IEltZzQgZnJvbSBcIi4vaW1hZ2VzL2hlbHAuc3ZnXCI7XG5cbmNvbnN0IGxpc3RBcnJheSA9IFtcInBlcnNvbmFsXCIsIFwid29ya1wiLCBcInNob3BwaW5nXCJdO1xuY29uc3QgcHJpb3JpdHlBcnJheSA9IFtcImNyaXRpY2FsXCIsIFwiaGlnaFwiLCBcIm5vcm1hbFwiXTtcblxuY29uc3QgcGFnZUxheW91dCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbWVudUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvZmlsZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBiZWxsSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGhlbHBJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1zZWN0aW9uXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgbWVudUltZy5zcmMgPSBJbWc7XG4gIG1lbnVJbWcuYWx0ID0gXCJtZW51IGljb25cIjtcbiAgbWVudUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b25cIik7XG4gIHByb2ZpbGVJbWcuc3JjID0gSW1nMjtcbiAgcHJvZmlsZUltZy5hbHQgPSBcIkEgY2F0IGljb25cIjtcbiAgYmVsbEltZy5zcmMgPSBJbWczO1xuICBiZWxsSW1nLmFsdCA9IFwiQSBiZWxsIGljb25cIjtcbiAgaGVscEltZy5zcmMgPSBJbWc0O1xuICBoZWxwSW1nLmFsdCA9IFwiQSBxdWVzdGlvbiBtYXJrIGljb25cIjtcblxuICBtZW51QnV0dG9uLmFwcGVuZENoaWxkKG1lbnVJbWcpO1xuICBwcm9maWxlLmFwcGVuZENoaWxkKGhlbHBJbWcpO1xuICBwcm9maWxlLmFwcGVuZENoaWxkKGJlbGxJbWcpO1xuICBwcm9maWxlLmFwcGVuZENoaWxkKHByb2ZpbGVJbWcpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChwcm9maWxlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5jb25zdCB1cGRhdGVMaXN0QXJyYXkgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1saXN0XCIpLnZhbHVlO1xuICBsaXN0QXJyYXkucHVzaChuZXdMaXN0KTtcbn07XG5cbmV4cG9ydCB7IGxpc3RBcnJheSwgcHJpb3JpdHlBcnJheSwgcGFnZUxheW91dCwgdXBkYXRlTGlzdEFycmF5IH07XG4iLCJpbXBvcnQgXCIuL2NvbnRlbnQuY3NzXCI7XG5pbXBvcnQgeyBsaXN0QXJyYXkgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCBJbWcgZnJvbSBcIi4vaW1hZ2VzL2FkZC10YXNrLnN2Z1wiO1xuaW1wb3J0IEltZzIgZnJvbSBcIi4vaW1hZ2VzL2JhY2suc3ZnXCI7XG5pbXBvcnQgSW1nMyBmcm9tIFwiLi9pbWFnZXMvYWRkLWxpc3Quc3ZnXCI7XG5pbXBvcnQgSW1nNCBmcm9tIFwiLi9pbWFnZXMvc2F2ZS5zdmdcIjtcbmltcG9ydCBJbWc1IGZyb20gXCIuL2ltYWdlcy9jYWxlbmRhci5zdmdcIjtcblxuY29uc3QgdGFza0FycmF5ID0gW107XG5cbmNvbnN0IG1haW5Db250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc2VjdGlvblwiKTtcblxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBidG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRhc2staGVhZGVyXCIpO1xuICB0YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwidGFzay1kaXNwbGF5XCIpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktYnRuLWNvbnRhaW5lclwiKTtcbiAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBidG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIpO1xuICBidG5JbWcuc3JjID0gSW1nO1xuICBidG5JbWcuYWx0ID0gXCJBZGQgY2lyY2xlIGljb25cIjtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGJ0bi5hcHBlbmRDaGlsZChidG5JbWcpO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG59O1xuXG5jb25zdCBlbXB0eUluZGljYXRvciA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZW1wdHktaW5kaWNhdG9yXCIpO1xuICBpbWcuc3JjID0gSW1nNTtcbiAgaW1nLmFsdCA9IFwiZW1wdHkgaW1hZ2VcIjtcbiAgcGFyYS50ZXh0Q29udGVudCA9IFwiTm90aGluZyB0byBkb1wiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcblxuICBkaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAvLyBjcmVhdGUgZm9ybSBpbnB1dHNcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgYmFja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGJhY2tCdG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAvLyBjcmVhdGUgZm9ybSBzZWxlY3Rpb25zXG4gIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IHN1Ym1pdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1Ym1pdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHN1Ym1pdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBzdWJtaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IHByaW9yaXR5T3B0aW9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIGNvbnN0IGNyZWF0ZUxpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjcmVhdGVMaXN0SW1nID0gbmV3IEltYWdlKCk7XG5cbiAgLy9BZGQgYXR0cmlidXRlc1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWZvcm1cIik7XG4gIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xuICBiYWNrQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBiYWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWJ0blwiKTtcbiAgYmFja0J0bkltZy5zcmMgPSBJbWcyO1xuICBiYWNrQnRuSW1nLmFsdCA9IFwiQmFjayBhcnJvdyBpY29uXCI7XG4gIHRhc2tMYWJlbC5odG1sRm9yID0gXCJ0YXNrLXRpdGxlXCI7XG4gIHRhc2tMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBuYW1lXCI7XG4gIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiV2hhdCBpcyB0byBiZSBkb25lP1wiO1xuICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9IFwiZGF0ZVwiO1xuICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBkYXRlXCI7XG4gIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9IFwicHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgc3VibWl0TGFiZWwuaHRtbEZvciA9IFwibGlzdFwiO1xuICBzdWJtaXRMYWJlbC50ZXh0Q29udGVudCA9IFwiQWRkIHRvIExpc3RcIjtcbiAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgdGFza0lucHV0Lm5hbWUgPSBcInRpdGxlXCI7XG4gIHRhc2tJbnB1dC5pZCA9IFwidGFzay10aXRsZVwiO1xuICB0YXNrSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkYXRlXCI7XG4gIGR1ZURhdGVJbnB1dC5pZCA9IFwiZGF0ZVwiO1xuICBwcmlvcml0eUlucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIHByaW9yaXR5SW5wdXQuaWQgPSBcInByaW9yaXR5XCI7XG4gIGNyZWF0ZUxpc3RCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNyZWF0ZUxpc3RCdG4uY2xhc3NMaXN0LmFkZChcImNyZWF0ZS1saXN0LWJ0blwiKTtcbiAgY3JlYXRlTGlzdEltZy5zcmMgPSBJbWczO1xuICBjcmVhdGVMaXN0SW1nLmFsdCA9IFwiQWRkIGxpc3QgaWNvblwiO1xuICBzdWJtaXRJbnB1dC5uYW1lID0gXCJsaXN0XCI7XG4gIHN1Ym1pdElucHV0LmlkID0gXCJsaXN0XCI7XG4gIHByaW9yaXR5T3B0aW9uMS52YWx1ZSA9IFwiY3JpdGljYWxcIjtcbiAgcHJpb3JpdHlPcHRpb24xLnRleHRDb250ZW50ID0gXCJDcml0aWNhbFwiO1xuICBwcmlvcml0eU9wdGlvbjIudmFsdWUgPSBcImhpZ2hcIjtcbiAgcHJpb3JpdHlPcHRpb24yLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gIHByaW9yaXR5T3B0aW9uMy52YWx1ZSA9IFwibm9ybWFsXCI7XG4gIHByaW9yaXR5T3B0aW9uMy50ZXh0Q29udGVudCA9IFwiTm9ybWFsXCI7XG5cbiAgLy8gRHluYW1pY2FsbHkgYWRkIGxpc3Qgb3B0aW9ucy4gV2hlbiB0aGUgdXNlciBhZGRzIGEgbmV3IGxpc3QsXG4gIC8vIHRoZSBuZXcgbGlzdCB3aWxsIGJlIHByZXNlbnQgaW4gdGhlIG5leHQgZm9ybS5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdWJtaXRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgc3VibWl0T3B0aW9uLnZhbHVlID0gbGlzdEFycmF5W2ldO1xuICAgIHN1Ym1pdE9wdGlvbi50ZXh0Q29udGVudCA9IGxpc3RBcnJheVtpXTtcblxuICAgIHN1Ym1pdElucHV0LmFwcGVuZENoaWxkKHN1Ym1pdE9wdGlvbik7XG4gIH1cblxuICAvLyBBcHBlbmQgbm9kZXNcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbjEpO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uMik7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24zKTtcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgc3VibWl0U2VsZWN0LmFwcGVuZENoaWxkKHN1Ym1pdExhYmVsKTtcbiAgc3VibWl0U2VsZWN0LmFwcGVuZENoaWxkKHN1Ym1pdElucHV0KTtcbiAgY3JlYXRlTGlzdEJ0bi5hcHBlbmRDaGlsZChjcmVhdGVMaXN0SW1nKTtcbiAgc3VibWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFNlbGVjdCk7XG4gIHN1Ym1pdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMaXN0QnRuKTtcbiAgZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbiAgYmFja0J0bi5hcHBlbmRDaGlsZChiYWNrQnRuSW1nKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChiYWNrQnRuKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdENvbnRhaW5lcik7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQoZm9ybSk7XG59O1xuXG5jb25zdCBjaGFuZ2VCdXR0b24gPSAoZWxlKSA9PiB7XG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1idG4tY29udGFpbmVyXCIpO1xuXG4gIGJ0bkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgaWYgKGVsZS5jbGFzc05hbWUgPT09IFwiZm9ybS1idG5cIikge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgYnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnRuXCIpO1xuICAgIGJ0bkltZy5zcmMgPSBJbWc0O1xuICAgIGJ0bkltZy5hbHQgPSBcIkNoZWNrIGNpcmNsZSBpY29uXCI7XG5cbiAgICBidG4uYXBwZW5kQ2hpbGQoYnRuSW1nKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgfSBlbHNlIGlmIChcbiAgICBlbGUuY2xhc3NOYW1lID09PSBcInN1Ym1pdC1idG5cIiB8fFxuICAgIGVsZS5jbGFzc05hbWUgPT09IFwiYmFjay1idG5cIiB8fFxuICAgIGVsZS5jbGFzc05hbWUgPT09IFwic2F2ZS1idG5cIlxuICApIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idG5cIik7XG4gICAgYnRuSW1nLnNyYyA9IEltZztcbiAgICBidG5JbWcuYWx0ID0gXCJBZGQgY2lyY2xlIGljb25cIjtcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChidG5JbWcpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgYnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzYXZlLWJ0blwiKTtcbiAgICBidG5JbWcuc3JjID0gSW1nNDtcbiAgICBidG5JbWcuYWx0ID0gXCJDaGVjayBjaXJjbGUgaWNvblwiO1xuXG4gICAgYnRuLmFwcGVuZENoaWxkKGJ0bkltZyk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIH1cbn07XG5cbmNvbnN0IG5ld0xpc3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuXG4gIGNvbnN0IGxpc3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYWNjZXB0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBsaXN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwibGlzdC1mb3JtXCIpO1xuICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWxpc3QtYnRuXCIpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBhY2NlcHRCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGFjY2VwdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWxpc3QtYnRuXCIpO1xuICBhY2NlcHRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBsYWJlbC5odG1sRm9yID0gXCJuZXctbGlzdFwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IExpc3RcIjtcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBpbnB1dC5uYW1lID0gXCJuZXctbGlzdFwiO1xuICBpbnB1dC5pZCA9IFwibmV3LWxpc3RcIjtcbiAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWNjZXB0QnRuKTtcbiAgbGlzdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBsaXN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGxpc3RGb3JtLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdEZvcm0pO1xufTtcblxuY29uc3QgYWRkVGltZU9wdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgc2libGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1jb250YWluZXJcIik7XG4gIGNvbnN0IHNpYmxpbmdUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWUtY29udGFpbmVyXCIpO1xuICBjb25zdCBwYXJlbnQgPSBzaWJsaW5nLnBhcmVudE5vZGU7XG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhzaWJsaW5nVHdvKSkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGltZS1jb250YWluZXJcIik7XG4gICAgbGFiZWwuaHRtbEZvciA9IFwidGltZVwiO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaW1lOlwiO1xuICAgIHRpbWVJbnB1dC50eXBlID0gXCJ0aW1lXCI7XG4gICAgdGltZUlucHV0Lm5hbWUgPSBcInRpbWVcIjtcbiAgICB0aW1lSW5wdXQuaWQgPSBcInRpbWVcIjtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVJbnB1dCk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cbn07XG5cbmNvbnN0IGFkZExpc3RPcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IG9wdGlvbnNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RcIik7XG4gIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1saXN0XCIpLnZhbHVlO1xuICBjb25zdCBuZXdPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gIG5ld09wdGlvbi52YWx1ZSA9IG5hbWU7XG4gIG5ld09wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gIG5ld09wdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgb3B0aW9uc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xufTtcblxuY29uc3QgcHJvY2Vzc0Zvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcbiAgY29uc3QgZ2V0Rm9ybURhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGZvcm0pKTtcblxuICB0YXNrQXJyYXkucHVzaChnZXRGb3JtRGF0YSk7XG59O1xuXG5jb25zdCBtb2RpZnlUYXNrID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mdWxsLXRhc2stZm9ybVwiKTtcbiAgY29uc3QgaW5kZXggPSBwYXJzZUludChmb3JtLmRhdGFzZXQubnVtKTtcbiAgY29uc3QgZm9ybURhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMobmV3IEZvcm1EYXRhKGZvcm0pKTtcblxuICB0YXNrQXJyYXkuc3BsaWNlKGluZGV4LCAxLCBmb3JtRGF0YSk7XG59O1xuZXhwb3J0IHtcbiAgbWFpbkNvbnRlbnQsXG4gIGVtcHR5SW5kaWNhdG9yLFxuICBjcmVhdGVGb3JtLFxuICBjaGFuZ2VCdXR0b24sXG4gIG5ld0xpc3RGb3JtLFxuICBhZGRUaW1lT3B0aW9uLFxuICBhZGRMaXN0T3B0aW9uLFxuICBwcm9jZXNzRm9ybSxcbiAgbW9kaWZ5VGFzayxcbiAgdGFza0FycmF5LFxufTtcbiIsImltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gXCIuL21haW4tY29udGVudFwiO1xuaW1wb3J0IFwiLi9uYXYuY3NzXCI7XG5pbXBvcnQgeyBsaXN0QXJyYXkgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCBJbWcgZnJvbSBcIi4vaW1hZ2VzL3RvZGF5LnN2Z1wiO1xuaW1wb3J0IEltZzIgZnJvbSBcIi4vaW1hZ2VzL3VwY29taW5nLnN2Z1wiO1xuaW1wb3J0IEltZzMgZnJvbSBcIi4vaW1hZ2VzL2V4cGFuZC1sZXNzLnN2Z1wiO1xuaW1wb3J0IEltZzQgZnJvbSBcIi4vaW1hZ2VzL2V4cGFuZC1tb3JlLnN2Z1wiO1xuaW1wb3J0IEltZzUgZnJvbSBcIi4vaW1hZ2VzL2NyaXRpY2FsLnN2Z1wiO1xuaW1wb3J0IEltZzYgZnJvbSBcIi4vaW1hZ2VzL2hpZ2guc3ZnXCI7XG5pbXBvcnQgSW1nNyBmcm9tIFwiLi9pbWFnZXMvbm9ybWFsLnN2Z1wiO1xuaW1wb3J0IEltZzggZnJvbSBcIi4vaW1hZ2VzL3BlcnNvbmFsLnN2Z1wiO1xuaW1wb3J0IEltZzkgZnJvbSBcIi4vaW1hZ2VzL3dvcmsuc3ZnXCI7XG5pbXBvcnQgSW1nMTAgZnJvbSBcIi4vaW1hZ2VzL3Nob3BwaW5nLnN2Z1wiO1xuaW1wb3J0IEltZzExIGZyb20gXCIuL2ltYWdlcy9uZXcuc3ZnXCI7XG5pbXBvcnQgSW1nMTIgZnJvbSBcIi4vaW1hZ2VzL2FkZC1saXN0LnN2Z1wiO1xuXG5jb25zdCBtYWluTWVudSA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zZWN0aW9uXCIpO1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b2RheUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCB0b2RheUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHRvZGF5Q291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB1cGNvbWluZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHVwY29taW5nSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHVwY29taW5nQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgdXBjb21pbmdDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZhdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZhdldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmYXZvcml0ZXNJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgZmF2b3JpdGVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZmF2b3JpdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvakNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2pXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdHNJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGFkZExpc3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBhZGRMaXN0SW1nID0gbmV3IEltYWdlKCk7XG5cbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWFpbi1tZW51XCIpO1xuICB0b2RheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kYXktY29udGFpbmVyXCIpO1xuICB1cGNvbWluZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctY29udGFpbmVyXCIpO1xuICB0b2RheUJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgdG9kYXlCdG4uY2xhc3NMaXN0LmFkZChcInRvZGF5LWJ0blwiKTtcbiAgdG9kYXlCdG4udGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gIHVwY29taW5nQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICB1cGNvbWluZ0J0bi5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctYnRuXCIpO1xuICB1cGNvbWluZ0J0bi50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcbiAgdG9kYXlDb3VudC5jbGFzc0xpc3QuYWRkKFwidG9kYXktY291bnRcIik7XG4gIHVwY29taW5nQ291bnQuY2xhc3NMaXN0LmFkZChcInVwY29taW5nLWNvdW50XCIpO1xuICBmYXZDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZhdi1jb250YWluZXJcIik7XG4gIHByb2pDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2otY29udGFpbmVyXCIpO1xuICBmYXZvcml0ZXNCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGZhdm9yaXRlc0J0bi5jbGFzc0xpc3QuYWRkKFwiZmF2b3JpdGVzLWJ0blwiKTtcbiAgZmF2b3JpdGVzQnRuLnRleHRDb250ZW50ID0gXCJGYXZvcml0ZXNcIjtcbiAgcHJvamVjdHNCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHByb2plY3RzQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1idG5cIik7XG4gIHByb2plY3RzQnRuLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICBhZGRMaXN0QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBhZGRMaXN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1idG5cIik7XG4gIGZhdm9yaXRlcy5jbGFzc0xpc3QuYWRkKFwiZmF2b3JpdGVzXCIpO1xuICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gIHRvZGF5SW1nLnNyYyA9IEltZztcbiAgdG9kYXlJbWcuYWx0ID0gXCJDYWxlbmRlciBpY29uXCI7XG4gIHVwY29taW5nSW1nLnNyYyA9IEltZzI7XG4gIHVwY29taW5nSW1nLmFsdCA9IFwiQ2FsZW5kZXIgaWNvblwiO1xuICBmYXZvcml0ZXNJbWcuc3JjID0gSW1nMztcbiAgZmF2b3JpdGVzSW1nLmFsdCA9IFwiRXhwYW5kIGxlc3MgaWNvblwiO1xuICBmYXZvcml0ZXNJbWcuY2xhc3NMaXN0LmFkZChcImZhdm9yaXRlcy1pbWdcIik7XG4gIHByb2plY3RzSW1nLnNyYyA9IEltZzM7XG4gIHByb2plY3RzSW1nLmFsdCA9IFwiRXhwYW5kIGxlc3MgaWNvblwiO1xuICBwcm9qZWN0c0ltZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtaW1nXCIpO1xuICBhZGRMaXN0SW1nLnNyYyA9IEltZzEyO1xuICBhZGRMaXN0SW1nLmFsdCA9IFwiQWRkIGxpc3QgaWNvblwiO1xuXG4gIGFkZExpc3RCdG4uYXBwZW5kQ2hpbGQoYWRkTGlzdEltZyk7XG4gIHRvZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5SW1nKTtcbiAgdG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlCdG4pO1xuICB0b2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheUNvdW50KTtcbiAgdXBjb21pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQodXBjb21pbmdJbWcpO1xuICB1cGNvbWluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGNvbWluZ0J0bik7XG4gIHVwY29taW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwY29taW5nQ291bnQpO1xuICBmYXZXcmFwcGVyLmFwcGVuZENoaWxkKGZhdm9yaXRlc0ltZyk7XG4gIGZhdldyYXBwZXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzQnRuKTtcbiAgZmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGZhdldyYXBwZXIpO1xuICBmYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzKTtcbiAgcHJvaldyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNJbWcpO1xuICBwcm9qV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0c0J0bik7XG4gIHByb2pXcmFwcGVyLmFwcGVuZENoaWxkKGFkZExpc3RCdG4pO1xuICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pXcmFwcGVyKTtcbiAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQodG9kYXlDb250YWluZXIpO1xuICBtZW51LmFwcGVuZENoaWxkKHVwY29taW5nQ29udGFpbmVyKTtcbiAgbWVudS5hcHBlbmRDaGlsZChmYXZDb250YWluZXIpO1xuICBtZW51LmFwcGVuZENoaWxkKHByb2pDb250YWluZXIpO1xuICBtYWluLmluc2VydEJlZm9yZShtZW51LCB3cmFwcGVyKTtcbn07XG5cbmNvbnN0IGZhdm9yaXRlc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzXCIpO1xuICBjb25zdCBjb250YWluZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWluZXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWluZXJUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwcmlvcml0eVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlPbmVDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5VHdvQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eVRocmVlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcml0aWNhbEltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBoaWdoSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG5vcm1hbEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIHByaW9yaXR5T25lLmNsYXNzTGlzdC5hZGQoXCJjcml0aWNhbC1idG5cIik7XG4gIHByaW9yaXR5T25lLmlkID0gXCJwcmlvcml0eS1idG5cIjtcbiAgcHJpb3JpdHlPbmUudGV4dENvbnRlbnQgPSBcIkNyaXRpY2FsXCI7XG4gIHByaW9yaXR5VHdvLmNsYXNzTGlzdC5hZGQoXCJoaWdoLWJ0blwiKTtcbiAgcHJpb3JpdHlUd28uaWQgPSBcInByaW9yaXR5LWJ0blwiO1xuICBwcmlvcml0eVR3by50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICBwcmlvcml0eVRocmVlLmNsYXNzTGlzdC5hZGQoXCJub3JtYWwtYnRuXCIpO1xuICBwcmlvcml0eVRocmVlLmlkID0gXCJwcmlvcml0eS1idG5cIjtcbiAgcHJpb3JpdHlUaHJlZS50ZXh0Q29udGVudCA9IFwiTm9ybWFsXCI7XG4gIHByaW9yaXR5T25lQ291bnQuY2xhc3NMaXN0LmFkZChcImNyaXRpY2FsLWNvdW50XCIpO1xuICBwcmlvcml0eVR3b0NvdW50LmNsYXNzTGlzdC5hZGQoXCJoaWdoLWNvdW50XCIpO1xuICBwcmlvcml0eVRocmVlQ291bnQuY2xhc3NMaXN0LmFkZChcIm5vcm1hbC1jb3VudFwiKTtcblxuICBjcml0aWNhbEltZy5zcmMgPSBJbWc1O1xuICBjcml0aWNhbEltZy5hbHQgPSBcIldhdGVyIGRyb3AgaWNvblwiO1xuICBoaWdoSW1nLnNyYyA9IEltZzY7XG4gIGhpZ2hJbWcuYWx0ID0gXCJXYXRlciBkcm9wIGljb25cIjtcbiAgbm9ybWFsSW1nLnNyYyA9IEltZzc7XG4gIG5vcm1hbEltZy5hbHQgPSBcIldhdGVyIGRyb3AgaWNvblwiO1xuXG4gIGNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChjcml0aWNhbEltZyk7XG4gIGNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChwcmlvcml0eU9uZSk7XG4gIGNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChwcmlvcml0eU9uZUNvdW50KTtcbiAgY29udGFpbmVyVHdvLmFwcGVuZENoaWxkKGhpZ2hJbWcpO1xuICBjb250YWluZXJUd28uYXBwZW5kQ2hpbGQocHJpb3JpdHlUd28pO1xuICBjb250YWluZXJUd28uYXBwZW5kQ2hpbGQocHJpb3JpdHlUd29Db3VudCk7XG4gIGNvbnRhaW5lclRocmVlLmFwcGVuZENoaWxkKG5vcm1hbEltZyk7XG4gIGNvbnRhaW5lclRocmVlLmFwcGVuZENoaWxkKHByaW9yaXR5VGhyZWUpO1xuICBjb250YWluZXJUaHJlZS5hcHBlbmRDaGlsZChwcmlvcml0eVRocmVlQ291bnQpO1xuICBmYXZvcml0ZXMuYXBwZW5kQ2hpbGQoY29udGFpbmVyT25lKTtcbiAgZmF2b3JpdGVzLmFwcGVuZENoaWxkKGNvbnRhaW5lclR3byk7XG4gIGZhdm9yaXRlcy5hcHBlbmRDaGlsZChjb250YWluZXJUaHJlZSk7XG59O1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuXG4gIHByb2plY3RzLnRleHRDb250ZW50ID0gXCJcIjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpc3ROYW1lID0gbGlzdEFycmF5W2ldO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7bGlzdE5hbWV9LWxpc3RgKTtcbiAgICBsaXN0QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGxpc3RCdG4uY2xhc3NMaXN0LmFkZChgJHtsaXN0TmFtZX0tYnRuYCk7XG4gICAgbGlzdEJ0bi5pZCA9IFwidGFzay1idG5cIjtcbiAgICBsaXN0QnRuLnRleHRDb250ZW50ID0gbGlzdE5hbWU7XG4gICAgdGFza0NvdW50LmNsYXNzTGlzdC5hZGQoYCR7bGlzdE5hbWV9LWNvdW50YCk7XG5cbiAgICBpZiAobGlzdE5hbWUgPT09IFwicGVyc29uYWxcIikge1xuICAgICAgaW1nLnNyYyA9IEltZzg7XG4gICAgICBpbWcuYWx0ID0gXCJQZXJzb24gaWNvblwiO1xuICAgIH0gZWxzZSBpZiAobGlzdE5hbWUgPT09IFwid29ya1wiKSB7XG4gICAgICBpbWcuc3JjID0gSW1nOTtcbiAgICAgIGltZy5hbHQgPSBcIkJyaWVmY2FzZSBpY29uXCI7XG4gICAgfSBlbHNlIGlmIChsaXN0TmFtZSA9PT0gXCJzaG9wcGluZ1wiKSB7XG4gICAgICBpbWcuc3JjID0gSW1nMTA7XG4gICAgICBpbWcuYWx0ID0gXCJTaG9wcGluZyBjYXJ0IGljb25cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1nLnNyYyA9IEltZzExO1xuICAgICAgaW1nLmFsdCA9IFwiTGFyZ2UgZG90IGljb25cIjtcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEJ0bik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb3VudCk7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxufTtcblxuY29uc3QgdGFza0NvdW50ID0gKCkgPT4ge1xuICBjb25zdCBjb3VudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NsYXNzKj0nY291bnQnXVwiKTtcbiAgY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuICBjb3VudHMuZm9yRWFjaCgoY291bnQpID0+IHtcbiAgICBsZXQgY2xhc3NOYW1lID0gY291bnQuY2xhc3NOYW1lO1xuXG4gICAgbGV0IG51bSA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2JqID0gdGFza0FycmF5W2ldO1xuICAgICAgY29uc3QgbGlzdENob2ljZSA9IG9ialtcImxpc3RcIl07XG4gICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBvYmpbXCJwcmlvcml0eVwiXTtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gb2JqW1wiZGF0ZVwiXTtcblxuICAgICAgaWYgKFxuICAgICAgICBjbGFzc05hbWUuaW5jbHVkZXMobGlzdENob2ljZSkgfHxcbiAgICAgICAgKHRvZGF5RGF0ZSA9PT0gdGFza0RhdGUgJiYgY2xhc3NOYW1lLmluY2x1ZGVzKFwidG9kYXlcIikpIHx8XG4gICAgICAgICh0b2RheURhdGUgIT09IHRhc2tEYXRlICYmIGNsYXNzTmFtZS5pbmNsdWRlcyhcInVwY29taW5nXCIpKSB8fFxuICAgICAgICBjbGFzc05hbWUuaW5jbHVkZXModGFza1ByaW9yaXR5KVxuICAgICAgKSB7XG4gICAgICAgIG51bSArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChudW0gPT09IDApIHtcbiAgICAgIGNvdW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQudGV4dENvbnRlbnQgPSBudW07XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGNoYW5nZUZhdm9yaXRlc0ltYWdlID0gKCkgPT4ge1xuICBjb25zdCBmYXZvcml0ZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlc1wiKTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1pbWdcIik7XG5cbiAgaWYgKGZhdm9yaXRlc0NvbnRhaW5lci50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgIGltYWdlLnNyYyA9IEltZzM7XG4gICAgaW1hZ2UuYWx0ID0gXCJFeHBhbmQgbGVzcyBpY29uXCI7XG4gIH0gZWxzZSB7XG4gICAgaW1hZ2Uuc3JjID0gSW1nNDtcbiAgICBpbWFnZS5hbHQgPSBcIkV4cGFuZCBtb3JlIGljb25cIjtcbiAgfVxufTtcblxuY29uc3QgY2hhbmdlUHJvamVjdHNJbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtaW1nXCIpO1xuXG4gIGlmIChwcm9qZWN0c0NvbnRhaW5lci50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgIGltYWdlLnNyYyA9IEltZzM7XG4gICAgaW1hZ2UuYWx0ID0gXCJFeHBhbmQgbGVzcyBpY29uXCI7XG4gIH0gZWxzZSB7XG4gICAgaW1hZ2Uuc3JjID0gSW1nNDtcbiAgICBpbWFnZS5hbHQgPSBcIkV4cGFuZCBtb3JlIGljb25cIjtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgbGlzdEFycmF5LFxuICBtYWluTWVudSxcbiAgcHJvamVjdExpc3QsXG4gIGZhdm9yaXRlc0xpc3QsXG4gIHRhc2tDb3VudCxcbiAgY2hhbmdlRmF2b3JpdGVzSW1hZ2UsXG4gIGNoYW5nZVByb2plY3RzSW1hZ2UsXG59O1xuIiwiaW1wb3J0IHsgdGFza0FycmF5LCBlbXB0eUluZGljYXRvciB9IGZyb20gXCIuL21haW4tY29udGVudC5qc1wiO1xuaW1wb3J0IHsgbGlzdEFycmF5LCBwcmlvcml0eUFycmF5IH0gZnJvbSBcIi4vbGF5b3V0LmpzXCI7XG5pbXBvcnQgSW1nIGZyb20gXCIuL2ltYWdlcy9wZXJzb25hbC5zdmdcIjtcbmltcG9ydCBJbWcyIGZyb20gXCIuL2ltYWdlcy93b3JrLnN2Z1wiO1xuaW1wb3J0IEltZzMgZnJvbSBcIi4vaW1hZ2VzL3Nob3BwaW5nLnN2Z1wiO1xuaW1wb3J0IEltZzQgZnJvbSBcIi4vaW1hZ2VzL25ldy5zdmdcIjtcbmltcG9ydCBJbWc1IGZyb20gXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCI7XG5cbmNvbnN0IHRhc2tCYXJzID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG5cbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgaWYgKHRhc2tBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2JqID0gdGFza0FycmF5W2ldO1xuICAgICAgY29uc3QgdGFza1RpdGxlID0gb2JqW1widGl0bGVcIl07XG4gICAgICBjb25zdCBsaXN0Q2hvaWNlID0gb2JqW1wibGlzdFwiXTtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gb2JqW1wiZGF0ZVwiXTtcblxuICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzIGZvciBlYWNoIHRhc2tcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIGNvbnN0IGNoZWNrQm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNvbnN0IHdyYXBwZXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgd3JhcHBlci5pZCA9IHRhc2tUaXRsZTtcbiAgICAgIHdyYXBwZXIuZGF0YXNldC5udW0gPSBgJHtpfWA7XG4gICAgICBjaGVja0JveExhYmVsLmh0bWxGb3IgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgY2hlY2tCb3gubmFtZSA9IFwidGFzay1jaGVja2JveFwiO1xuICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFza0RhdGU7XG4gICAgICBsaXN0TmFtZS50ZXh0Q29udGVudCA9IGxpc3RDaG9pY2U7XG5cbiAgICAgIGlmIChsaXN0Q2hvaWNlID09PSBcInBlcnNvbmFsXCIpIHtcbiAgICAgICAgaW1nLnNyYyA9IEltZztcbiAgICAgICAgaW1nLmFsdCA9IFwiUGVyc29uIGljb25cIjtcbiAgICAgIH0gZWxzZSBpZiAobGlzdENob2ljZSA9PT0gXCJ3b3JrXCIpIHtcbiAgICAgICAgaW1nLnNyYyA9IEltZzI7XG4gICAgICAgIGltZy5hbHQgPSBcIkJyaWVmY2FzZSBpY29uXCI7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RDaG9pY2UgPT09IFwic2hvcHBpbmdcIikge1xuICAgICAgICBpbWcuc3JjID0gSW1nMztcbiAgICAgICAgaW1nLmFsdCA9IFwiU2hvcHBpbmcgY2FydCBpY29uXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWcuc3JjID0gSW1nNDtcbiAgICAgICAgaW1nLmFsdCA9IFwiTGFyZ2UgZG90IGljb25cIjtcbiAgICAgIH1cblxuICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hMYWJlbCk7XG4gICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICB3cmFwcGVyVHdvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIHdyYXBwZXJUd28uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3ROYW1lKTtcbiAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hDb250YWluZXIpO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyVHdvKTtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbXB0eUluZGljYXRvcigpO1xuICB9XG59O1xuXG5jb25zdCB0YXNrUGFnZSA9ICh0YXNrSW5kZXgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuXG4gIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IG9iaiA9IHRhc2tBcnJheVt0YXNrSW5kZXhdO1xuICBjb25zdCB0YXNrVGl0bGUgPSBvYmpbXCJ0aXRsZVwiXTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gb2JqW1wiZGVzY3JpcHRpb25cIl07XG4gIGNvbnN0IHRhc2tEYXRlID0gb2JqW1wiZGF0ZVwiXTtcbiAgY29uc3QgdGFza1RpbWUgPSBvYmpbXCJ0aW1lXCJdO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBvYmpbXCJwcmlvcml0eVwiXTtcbiAgY29uc3QgbGlzdENob2ljZSA9IG9ialtcImxpc3RcIl07XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBkYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHRpbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGxpc3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGlzdFNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImZ1bGwtdGFzay1mb3JtXCIpO1xuICBmb3JtLmRhdGFzZXQubnVtID0gdGFza0luZGV4O1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xuICB0aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWNvbnRhaW5lclwiKTtcbiAgYmFja0J0bi5jbGFzc0xpc3QuYWRkKFwiYmFjay1idG5cIik7XG4gIHRpdGxlTGFiZWwuaHRtbEZvciA9IFwidGFzay10aXRsZVwiO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGF0ZUxhYmVsLmh0bWxGb3IgPSBcImRhdGVcIjtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgZGF0ZTogXCI7XG4gIHRpbWVMYWJlbC5odG1sRm9yID0gXCJ0aW1lXCI7XG4gIHRpbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGltZVwiO1xuICBwcmlvcml0eUxhYmVsLmh0bWxGb3IgPSBcInByaW9yaXR5XCI7XG4gIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gIGxpc3RTZWxlY3RMYWJlbC5odG1sRm9yID0gXCJsaXN0XCI7XG4gIGJhY2tCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGJhY2tCdG4udGV4dENvbnRlbnQgPSBcIkJhY2tcIjtcbiAgdGl0bGUubmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGUuaWQgPSBcInRhc2stdGl0bGVcIjtcbiAgdGl0bGUudmFsdWUgPSB0YXNrVGl0bGU7XG4gIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGVzY3JpcHRpb24ubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb24uaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gdGFza0Rlc2NyaXB0aW9uO1xuICBsaXN0U2VsZWN0Lm5hbWUgPSBcImxpc3RcIjtcbiAgbGlzdFNlbGVjdC5pZCA9IFwibGlzdFwiO1xuICBkYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgZGF0ZS5uYW1lID0gXCJkYXRlXCI7XG4gIGRhdGUuaWQgPSBcImRhdGVcIjtcbiAgZGF0ZS52YWx1ZSA9IHRhc2tEYXRlO1xuICB0aW1lLnR5cGUgPSBcInRpbWVcIjtcbiAgdGltZS5uYW1lID0gXCJ0aW1lXCI7XG4gIHRpbWUuaWQgPSBcInRpbWVcIjtcbiAgdGltZS52YWx1ZSA9IHRhc2tUaW1lO1xuICBwcmlvcml0eVNlbGVjdC5uYW1lID0gXCJwcmlvcml0eVwiO1xuICBwcmlvcml0eVNlbGVjdC5pZCA9IFwicHJpb3JpdHlcIjtcblxuICAvLyBEeW5hbWljYWxseSBhZGQgbGlzdCBvcHRpb25zLiBXaGVuIHRoZSB1c2VyIGFkZHMgYSBuZXcgbGlzdCxcbiAgLy8gdGhlIG5ldyBsaXN0IHdpbGwgYmUgcHJlc2VudCBpbiB0aGUgbmV4dCBmb3JtLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpc3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgbGlzdE9wdGlvbi52YWx1ZSA9IGxpc3RBcnJheVtpXTtcbiAgICBsaXN0T3B0aW9uLnRleHRDb250ZW50ID0gbGlzdEFycmF5W2ldO1xuXG4gICAgaWYgKGxpc3RPcHRpb24udmFsdWUgPT09IGxpc3RDaG9pY2UpIHtcbiAgICAgIGxpc3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsaXN0U2VsZWN0LmFwcGVuZENoaWxkKGxpc3RPcHRpb24pO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgcHJpb3JpdHlPcHRpb24udmFsdWUgPSBwcmlvcml0eUFycmF5W2ldO1xuICAgIHByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHlBcnJheVtpXTtcblxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uKTtcblxuICAgIGlmIChwcmlvcml0eUFycmF5W2ldID09PSB0YXNrUHJpb3JpdHkpIHtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBsaXN0TmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0U2VsZWN0TGFiZWwpO1xuICBsaXN0TmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0U2VsZWN0KTtcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICB0aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG4gIHRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZSk7XG4gIGRhdGVXcmFwcGVyLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuICBkYXRlV3JhcHBlci5hcHBlbmRDaGlsZCh0aW1lQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChiYWNrQnRuKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQobGlzdE5hbWVDb250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXRlV3JhcHBlcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlDb250YWluZXIpO1xuICBkaXNwbGF5LmFwcGVuZENoaWxkKGZvcm0pO1xufTtcblxuY29uc3Qgc29ydFRhc2tCYXJzID0gKGJ0bikgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gIGNvbnN0IHNpYmxpbmcgPSBidG4ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBjb25zdCBidG5DbGFzcyA9IGJ0bi5jbGFzc05hbWU7XG4gIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgaWYgKHNpYmxpbmcudGV4dENvbnRlbnQgIT09IFwiXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2JqID0gdGFza0FycmF5W2ldO1xuICAgICAgY29uc3QgdGFza1RpdGxlID0gb2JqW1widGl0bGVcIl07XG4gICAgICBjb25zdCBsaXN0Q2hvaWNlID0gb2JqW1wibGlzdFwiXTtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gb2JqW1wiZGF0ZVwiXTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gb2JqW1wicHJpb3JpdHlcIl07XG5cbiAgICAgIGlmIChcbiAgICAgICAgYnRuQ2xhc3MuaW5jbHVkZXMobGlzdENob2ljZSkgfHxcbiAgICAgICAgKHRvZGF5RGF0ZSA9PT0gdGFza0RhdGUgJiYgYnRuQ2xhc3MuaW5jbHVkZXMoXCJ0b2RheVwiKSkgfHxcbiAgICAgICAgKHRvZGF5RGF0ZSAhPT0gdGFza0RhdGUgJiYgYnRuQ2xhc3MuaW5jbHVkZXMoXCJ1cGNvbWluZ1wiKSkgfHxcbiAgICAgICAgYnRuQ2xhc3MuaW5jbHVkZXMocHJpb3JpdHkpXG4gICAgICApIHtcbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzIGZvciBlYWNoIHRhc2tcbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBjb25zdCB3cmFwcGVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29uc3QgbGlzdEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICAgIHdyYXBwZXIuaWQgPSB0YXNrVGl0bGU7XG4gICAgICAgIHdyYXBwZXIuZGF0YXNldC5udW0gPSBpO1xuICAgICAgICBjaGVja0JveExhYmVsLmh0bWxGb3IgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICAgIGNoZWNrQm94Lm5hbWUgPSBcInRhc2stY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgICAgICBsaXN0SW1nLmFsdCA9IFwiaW1nXCI7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFza1RpdGxlO1xuICAgICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFza0RhdGU7XG4gICAgICAgIGxpc3ROYW1lLnRleHRDb250ZW50ID0gbGlzdENob2ljZTtcbiAgICAgICAgLy8gICBsaXN0SW1nID0gaW1nXG5cbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hMYWJlbCk7XG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgd3JhcHBlclR3by5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHdyYXBwZXJUd28uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJbWcpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyVHdvKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZW1wdHlJbmRpY2F0b3IoKTtcbiAgfVxufTtcblxuY29uc3QgYWRkRGVsZXRlT3B0aW9uID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbC1idG4tY29udGFpbmVyXCIpO1xuXG4gIGlmIChoZWFkZXIuY29udGFpbnMoZGl2KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGRlbEJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVsLWJ0bi1jb250YWluZXJcIik7XG4gIGRlbEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWwtYnRuXCIpO1xuICBkZWxCdG5JbWcuc3JjID0gSW1nNTtcbiAgZGVsQnRuSW1nLmFsdCA9IFwiRGVsZXRlIGljb25cIjtcblxuICBkZWxCdG4uYXBwZW5kQ2hpbGQoZGVsQnRuSW1nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufTtcblxuY29uc3QgcmVtb3ZlRGVsZXRlT3B0aW9uID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbC1idG4tY29udGFpbmVyXCIpO1xuXG4gIGhlYWRlci5yZW1vdmVDaGlsZChkaXYpO1xufTtcblxuY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tib3hcIik7XG4gIGNvbnN0IGRpc3BsYXlOb2RlcyA9IGRpc3BsYXkuY2hpbGROb2RlcztcblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZ3JhbmRQYXJlbnQgPSB0YXNrLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGdyYW5kUGFyZW50LmRhdGFzZXQubnVtO1xuXG4gICAgICB0YXNrQXJyYXkuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICBkaXNwbGF5LnJlbW92ZUNoaWxkKGRpc3BsYXlOb2Rlc1t0YXNrSW5kZXhdKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwbGF5Tm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGlzcGxheU5vZGVzW2ldLmRhdGFzZXQubnVtID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChkaXNwbGF5LnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgZW1wdHlJbmRpY2F0b3IoKTtcbiAgICByZW1vdmVEZWxldGVPcHRpb24oKTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgdGFza0JhcnMsXG4gIHRhc2tQYWdlLFxuICBzb3J0VGFza0JhcnMsXG4gIGFkZERlbGV0ZU9wdGlvbixcbiAgcmVtb3ZlRGVsZXRlT3B0aW9uLFxuICBkZWxldGVUYXNrLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcGFnZUxheW91dCwgdXBkYXRlTGlzdEFycmF5IH0gZnJvbSBcIi4vbGF5b3V0LmpzXCI7XG5pbXBvcnQge1xuICBtYWluQ29udGVudCxcbiAgZW1wdHlJbmRpY2F0b3IsXG4gIGNyZWF0ZUZvcm0sXG4gIGNoYW5nZUJ1dHRvbixcbiAgbmV3TGlzdEZvcm0sXG4gIGFkZFRpbWVPcHRpb24sXG4gIGFkZExpc3RPcHRpb24sXG4gIHByb2Nlc3NGb3JtLFxuICBtb2RpZnlUYXNrLFxufSBmcm9tIFwiLi9tYWluLWNvbnRlbnQuanNcIjtcbmltcG9ydCB7XG4gIG1haW5NZW51LFxuICBwcm9qZWN0TGlzdCxcbiAgZmF2b3JpdGVzTGlzdCxcbiAgdGFza0NvdW50LFxuICBjaGFuZ2VGYXZvcml0ZXNJbWFnZSxcbiAgY2hhbmdlUHJvamVjdHNJbWFnZSxcbn0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHtcbiAgdGFza0JhcnMsXG4gIHRhc2tQYWdlLFxuICBzb3J0VGFza0JhcnMsXG4gIGFkZERlbGV0ZU9wdGlvbixcbiAgcmVtb3ZlRGVsZXRlT3B0aW9uLFxuICBkZWxldGVUYXNrLFxufSBmcm9tIFwiLi90YXNrLWRpc3BsYXkuanNcIjtcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAvLyBHZW5lcmF0ZSBpbml0aWFsIHBhZ2UgbGF5b3V0XG4gIHBhZ2VMYXlvdXQoKTtcbiAgbWFpbkNvbnRlbnQoKTtcbiAgZW1wdHlJbmRpY2F0b3IoKTtcblxuICBmdW5jdGlvbiBldmVudEhhbmRsZXIoKSB7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idXR0b25cIik7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zZWN0aW9uXCIpO1xuXG4gICAgLy8gVG9nZ2xlIHRoZSBNYWluIE1lbnVcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIik7XG5cbiAgICAgIGlmIChtYWluLmNvbnRhaW5zKG1lbnUpKSB7XG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWVudSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWluTWVudSgpO1xuICAgICAgICB0YXNrQ291bnQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpO1xuXG4gICAgICAvLyBUb2dnbGUgVG9kYXkgb3IgVXBjb21pbmcgcHJvamVjdHNcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwidG9kYXktYnRuXCIpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQ7XG5cbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblxuICAgICAgICBzb3J0VGFza0JhcnMoYnRuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ1cGNvbWluZy1idG5cIikge1xuICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcblxuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJVcGNvbWluZ1wiO1xuXG4gICAgICAgIHNvcnRUYXNrQmFycyhidG4pO1xuICAgICAgfVxuXG4gICAgICAvLyBUb2dnbGUgRmF2b3JpdGVzIGFuZCBQcm9qZWN0cyBtZW51IGNob2ljZXNcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZmF2b3JpdGVzLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzXCIpO1xuXG4gICAgICAgIGlmIChmYXZvcml0ZXMudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICAgICAgICBmYXZvcml0ZXNMaXN0KCk7XG4gICAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICAgICAgY2hhbmdlRmF2b3JpdGVzSW1hZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYXZvcml0ZXMudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIGNoYW5nZUZhdm9yaXRlc0ltYWdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpO1xuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInByb2plY3RzLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcblxuICAgICAgICBpZiAocHJvamVjdHMudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICAgICAgICBwcm9qZWN0TGlzdCgpO1xuICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICAgIGNoYW5nZVByb2plY3RzSW1hZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgY2hhbmdlUHJvamVjdHNJbWFnZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpc3BsYXkuY29udGFpbnMoZm9ybSkpIHtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXNrQmFycygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gICAgICBjb25zdCBsaXN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGlzdC1mb3JtXCIpO1xuXG4gICAgICAvLyBjcmVhdGUsIHN1Ym1pdCBhbmQgcHJvY2VzcyBmb3Jtc1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJmb3JtLWJ0blwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwieWVhaFwiKTtcbiAgICAgICAgY3JlYXRlRm9ybSgpO1xuICAgICAgICBjaGFuZ2VCdXR0b24oZS50YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInN1Ym1pdC1idG5cIikge1xuICAgICAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IGZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuXG4gICAgICAgIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGxpc3RGb3JtKSB7XG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKGxpc3RGb3JtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcHJvY2Vzc0Zvcm0oKTtcbiAgICAgICAgICB0YXNrQmFycygpO1xuICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICAgIGNoYW5nZUJ1dHRvbihlLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzYXZlLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1bGwtdGFzay1mb3JtXCIpO1xuICAgICAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IGZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuXG4gICAgICAgIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kaWZ5VGFzaygpO1xuICAgICAgICAgIHRhc2tCYXJzKCk7XG4gICAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICAgICAgY2hhbmdlQnV0dG9uKGUudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBZGQgdGltZSBpbnB1dCBvcHRpb25cbiAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJkYXRlXCIgJiYgZS50YXJnZXQubmFtZSA9PT0gXCJkYXRlXCIpIHtcbiAgICAgICAgYWRkVGltZU9wdGlvbigpO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgZm9ybSBkaXNwbGF5IG9yIGZ1bGwtdGFzayBkaXNwbGF5XG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImJhY2stYnRuXCIpIHtcbiAgICAgICAgaWYgKGxpc3RGb3JtKSB7XG4gICAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZChsaXN0Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrQmFycygpO1xuICAgICAgICBjaGFuZ2VCdXR0b24oZS50YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgbmV3IGxpc3QgZm9ybVxuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYWRkLXByb2plY3QtYnRuXCIgfHxcbiAgICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImNyZWF0ZS1saXN0LWJ0blwiXG4gICAgICApIHtcbiAgICAgICAgbmV3TGlzdEZvcm0oKTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2FuY2VsIG5ldyBsaXN0IGZvcm1cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiY2FuY2VsLWxpc3QtYnRuXCIpIHtcbiAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCBuZXcgbGlzdCBvcHRpb25cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYWRkLWxpc3QtYnRuXCIpIHtcbiAgICAgICAgY29uc3QgbGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtZm9ybVwiKTtcbiAgICAgICAgY29uc3QgaXNGb3JtVmFsaWQgPSBsaXN0Rm9ybS5jaGVja1ZhbGlkaXR5KCk7XG5cbiAgICAgICAgaWYgKCFpc0Zvcm1WYWxpZCkge1xuICAgICAgICAgIGxpc3RGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHVwZGF0ZUxpc3RBcnJheSgpO1xuXG4gICAgICAgICAgaWYgKGRpc3BsYXkuY29udGFpbnMoZm9ybSkpIHtcbiAgICAgICAgICAgIGFkZExpc3RPcHRpb24oKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0c0ltYWdlKCk7XG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIubGFzdENoaWxkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgIGNoYW5nZVByb2plY3RzSW1hZ2UoKTtcbiAgICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNvcnQgdGFza3MgYWNjb3JkaW5nIHRvIHRoZSBjbGlja2VkIHByb2plY3Qgb3IgcHJpb3JpdHkgbGlzdFxuICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBcInRhc2stYnRuXCIgfHwgZS50YXJnZXQuaWQgPT09IFwicHJpb3JpdHktYnRuXCIpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQ7XG5cbiAgICAgICAgc29ydFRhc2tCYXJzKGJ0bik7XG4gICAgICB9XG5cbiAgICAgIC8vIERpc3BsYXkgYWxsIHRhc2sgZGV0YWlsc1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0YXNrXCIpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWhlYWRlclwiKTtcbiAgICAgICAgY29uc3QgZGVsQnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWwtYnRuLWNvbnRhaW5lclwiKTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0Lm51bTtcblxuICAgICAgICBpZiAoaGVhZGVyLmNvbnRhaW5zKGRlbEJ0bkNvbnRhaW5lcikpIHtcbiAgICAgICAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoZGVsQnRuQ29udGFpbmVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tQYWdlKGluZGV4KTtcbiAgICAgICAgY2hhbmdlQnV0dG9uKGUudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVsZXRlIHRhc2tzXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImNoZWNrYm94XCIgJiYgZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBhZGREZWxldGVPcHRpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjaGVja2JveFwiICYmXG4gICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgcmVtb3ZlRGVsZXRlT3B0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZGVsLWJ0blwiKSB7XG4gICAgICAgIGRlbGV0ZVRhc2soKTtcbiAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZXZlbnRIYW5kbGVyKCk7XG59XG5jb21wb25lbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==