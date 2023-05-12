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
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\n  height: 100%;\n  width: 100%;\n  padding: 10px;\n  position: relative;\n  grid-column: span 3;\n  display: grid;\n  grid-template-rows: 100px 1fr;\n}\n\n.task-display {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  /* Inroduce scroll bar\n  height: 596px;\n  overflow-y: auto; */\n}\n\n.wrapper > form {\n  background-color: aqua;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-self: center;\n}\n\n.display-btn-container {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.empty-indicator {\n  position: absolute;\n  bottom: 50%;\n  align-self: center;\n}\n\n.task {\n  width: 100%;\n  height: 50px;\n  padding: 5px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 3fr 50px 50px;\n  gap: 10px;\n}\n\n.full-task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 50px 3fr 50px 50px;\n  justify-items: center;\n  /* align-items: center; */\n}\n\n.back-btn {\n  justify-self: self-start;\n}\n\n.create-list-btn {\n  align-self: center;\n  justify-self: start;\n}\n\n.task-form > div {\n  padding: 5px;\n}\n\n.title-wrapper {\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.title-wrapper input {\n  height: 30px;\n  padding: 0px 5px;\n  display: flex;\n  align-items: center;\n}\n\n.description-wrapper {\n  grid-column: 2 / 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.description-wrapper textarea {\n  height: 100%;\n  resize: none;\n  padding: 5px 5px;\n}\n\n.due-date-wrapper {\n  grid-column: 2 / 4;\n  grid-row: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.priority-wrapper {\n  grid-column: 2 / 3;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.list-wrapper {\n  grid-column: 3 / 4;\n  grid-row: 4 / 5;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.due-date-wrapper > div,\n.list-wrapper > div {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.due-date-wrapper .time-container {\n  padding: 5px;\n}\n\n.description > textarea {\n  height: 100%;\n  width: 100%;\n}\n\n.task > form {\n  padding: 5px;\n}\n.task > div {\n  padding: 5px;\n  display: flex;\n  gap: 5px;\n}\n\n.task > div:nth-child(2) {\n  flex-direction: column;\n}\n\n.task > div:nth-of-type(2) {\n  margin-left: auto;\n}\n\n.task img {\n  height: 15px;\n  width: 15px;\n  align-self: center;\n}\n\n.full-task-form > div {\n  grid-column: 2 / 3;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.full-task-form > div:nth-child(4) {\n  padding: 0px 10px;\n  gap: 10px;\n}\n\n.full-task-form textarea {\n  resize: none;\n  padding: 5px 5px;\n}\n\n.back-btn img,\n.del-btn img,\n.create-list-btn img {\n  height: 30px;\n  width: 30px;\n}\n\n.empty-indicator img {\n  height: 100px;\n  width: 100px;\n}\n", "",{"version":3,"sources":["webpack://./src/content.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT;;qBAEmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,0CAA0C;EAC1C,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;;EAEE,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;;;EAGE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,YAAY;AACd","sourcesContent":[".wrapper {\n  height: 100%;\n  width: 100%;\n  padding: 10px;\n  position: relative;\n  grid-column: span 3;\n  display: grid;\n  grid-template-rows: 100px 1fr;\n}\n\n.task-display {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  /* Inroduce scroll bar\n  height: 596px;\n  overflow-y: auto; */\n}\n\n.wrapper > form {\n  background-color: aqua;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-self: center;\n}\n\n.display-btn-container {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.empty-indicator {\n  position: absolute;\n  bottom: 50%;\n  align-self: center;\n}\n\n.task {\n  width: 100%;\n  height: 50px;\n  padding: 5px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 3fr 50px 50px;\n  gap: 10px;\n}\n\n.full-task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 50px 3fr 50px 50px;\n  justify-items: center;\n  /* align-items: center; */\n}\n\n.back-btn {\n  justify-self: self-start;\n}\n\n.create-list-btn {\n  align-self: center;\n  justify-self: start;\n}\n\n.task-form > div {\n  padding: 5px;\n}\n\n.title-wrapper {\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.title-wrapper input {\n  height: 30px;\n  padding: 0px 5px;\n  display: flex;\n  align-items: center;\n}\n\n.description-wrapper {\n  grid-column: 2 / 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.description-wrapper textarea {\n  height: 100%;\n  resize: none;\n  padding: 5px 5px;\n}\n\n.due-date-wrapper {\n  grid-column: 2 / 4;\n  grid-row: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n\n.priority-wrapper {\n  grid-column: 2 / 3;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.list-wrapper {\n  grid-column: 3 / 4;\n  grid-row: 4 / 5;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.due-date-wrapper > div,\n.list-wrapper > div {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.due-date-wrapper .time-container {\n  padding: 5px;\n}\n\n.description > textarea {\n  height: 100%;\n  width: 100%;\n}\n\n.task > form {\n  padding: 5px;\n}\n.task > div {\n  padding: 5px;\n  display: flex;\n  gap: 5px;\n}\n\n.task > div:nth-child(2) {\n  flex-direction: column;\n}\n\n.task > div:nth-of-type(2) {\n  margin-left: auto;\n}\n\n.task img {\n  height: 15px;\n  width: 15px;\n  align-self: center;\n}\n\n.full-task-form > div {\n  grid-column: 2 / 3;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.full-task-form > div:nth-child(4) {\n  padding: 0px 10px;\n  gap: 10px;\n}\n\n.full-task-form textarea {\n  resize: none;\n  padding: 5px 5px;\n}\n\n.back-btn img,\n.del-btn img,\n.create-list-btn img {\n  height: 30px;\n  width: 30px;\n}\n\n.empty-indicator img {\n  height: 100px;\n  width: 100px;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  font-size: 1rem;\n  /* background-color: #ecf0f2; */\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px 4fr 100px;\n}\n\n.header {\n  grid-row: 1 / 2;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-section {\n  grid-row: 2 / 3;\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n}\n\n.footer {\n  grid-row: 3 / 4;\n  padding: 10px;\n}\n\n.task-header {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n/* .content {\n  padding: 10px;\n} */\n\n.header > div:nth-child(2) {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.header img {\n  height: 30px;\n  width: 30px;\n}\n\n.display-btn-container img,\n.del-btn-container img,\n.create-list-btn img,\n.add-project-btn img,\n.back-btn img {\n  pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/layout.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,0BAA0B;EAC1B,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;;GAEG;;AAEH;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;;;;;EAKE,oBAAoB;AACtB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  font-size: 1rem;\n  /* background-color: #ecf0f2; */\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px 4fr 100px;\n}\n\n.header {\n  grid-row: 1 / 2;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-section {\n  grid-row: 2 / 3;\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n}\n\n.footer {\n  grid-row: 3 / 4;\n  padding: 10px;\n}\n\n.task-header {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n/* .content {\n  padding: 10px;\n} */\n\n.header > div:nth-child(2) {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.header img {\n  height: 30px;\n  width: 30px;\n}\n\n.display-btn-container img,\n.del-btn-container img,\n.create-list-btn img,\n.add-project-btn img,\n.back-btn img {\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "backButtonController": () => (/* binding */ backButtonController),
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
  const header = document.querySelector(".task-header");

  display.textContent = "";

  // create form inputs
  const form = document.createElement("form");
  const taskContainer = document.createElement("div");
  const taskLabel = document.createElement("label");
  const taskInput = document.createElement("input");
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
  taskContainer.classList.add("title-wrapper");
  descriptionContainer.classList.add("description-wrapper");
  dueDateContainer.classList.add("due-date-wrapper");
  priorityDiv.classList.add("priority-wrapper");
  submitContainer.classList.add("list-wrapper");
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
  submitLabel.textContent = "Add To";
  dueDateInput.type = "date";
  taskInput.type = "text";
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
  form.appendChild(taskContainer);
  form.appendChild(descriptionContainer);
  form.appendChild(dueDateContainer);
  form.appendChild(priorityDiv);
  form.appendChild(submitContainer);
  header.appendChild(backBtn);
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

const backButtonController = () => {
  const header = document.querySelector(".task-header");
  const child = document.querySelector(".back-btn");

  if (header.contains(child)) {
    header.removeChild(child);
  }
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
/* harmony import */ var _images_back_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/back.svg */ "./src/images/back.svg");









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
  const header = document.querySelector(".task-header");

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
  const backBtnImg = new Image();

  form.classList.add("full-task-form");
  form.dataset.num = taskIndex;
  descriptionContainer.classList.add("description");
  dateContainer.classList.add("date-container");
  timeContainer.classList.add("time-container");
  titleLabel.htmlFor = "task-title";
  // titleLabel.textContent = "Name";
  descriptionLabel.htmlFor = "description";
  dateLabel.htmlFor = "date";
  dateLabel.textContent = "Due On: ";
  timeLabel.htmlFor = "time";
  timeLabel.textContent = "At: ";
  priorityLabel.htmlFor = "priority";
  // priorityLabel.textContent = "Priority";
  listSelectLabel.htmlFor = "list";
  backBtn.type = "button";
  backBtn.classList.add("back-btn");
  backBtnImg.src = _images_back_svg__WEBPACK_IMPORTED_MODULE_7__;
  backBtnImg.alt = "Back arrow icon";
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
  backBtn.appendChild(backBtnImg);
  header.appendChild(backBtn);
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

  if (header.contains(div)) {
    header.removeChild(div);
  }
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
        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.removeDeleteOption)();
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
          (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.backButtonController)();
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
          (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.backButtonController)();
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

        (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.backButtonController)();
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
        const index = e.target.dataset.num;

        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.removeDeleteOption)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLDZEQUFXO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVLDJEQUFlOztBQUV6QjtBQUNBLFlBQVksK0RBQWE7QUFDekIsWUFBWSxxREFBVztBQUN2QixZQUFZLDZEQUFtQjtBQUMvQjtBQUNBLFlBQVk7QUFDWixZQUFZLHFEQUFXO0FBQ3ZCLFlBQVksNkRBQW1CO0FBQy9CLFlBQVksbURBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsOERBQVk7QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsb0VBQWtCO0FBQzFCLFFBQVEsMERBQVE7QUFDaEIsUUFBUSw4REFBWTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxpRUFBZTtBQUN2QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvRUFBa0I7QUFDMUI7O0FBRUE7QUFDQSxRQUFRLDREQUFVO0FBQ2xCLFFBQVEsbURBQVM7QUFDakI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGVudC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xheW91dC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25hdi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGVudC5jc3M/YzM0NyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGF5b3V0LmNzcz9lYWVjIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uYXYuY3NzPzIwYTciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tYWluLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2stZGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLndyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG59XFxuXFxuLnRhc2stZGlzcGxheSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIC8qIElucm9kdWNlIHNjcm9sbCBiYXJcXG4gIGhlaWdodDogNTk2cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvOyAqL1xcbn1cXG5cXG4ud3JhcHBlciA+IGZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5kaXNwbGF5LWJ0bi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBib3R0b206IDEwcHg7XFxufVxcblxcbi5lbXB0eS1pbmRpY2F0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgM2ZyIDUwcHggNTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNTBweCAzZnIgNTBweCA1MHB4O1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXG59XFxuXFxuLmJhY2stYnRuIHtcXG4gIGp1c3RpZnktc2VsZjogc2VsZi1zdGFydDtcXG59XFxuXFxuLmNyZWF0ZS1saXN0LWJ0biB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4udGFzay1mb3JtID4gZGl2IHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRpdGxlLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50aXRsZS13cmFwcGVyIGlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHBhZGRpbmc6IDBweCA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi13cmFwcGVyIHRleHRhcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxufVxcblxcbi5kdWUtZGF0ZS13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5wcmlvcml0eS13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtd3JhcHBlciA+IGRpdixcXG4ubGlzdC13cmFwcGVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZHVlLWRhdGUtd3JhcHBlciAudGltZS1jb250YWluZXIge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiB0ZXh0YXJlYSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnRhc2sgPiBmb3JtIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLnRhc2sgPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udGFzayA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2sgPiBkaXY6bnRoLW9mLXR5cGUoMikge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi50YXNrIGltZyB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtID4gZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtID4gZGl2Om50aC1jaGlsZCg0KSB7XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG4gIHBhZGRpbmc6IDVweCA1cHg7XFxufVxcblxcbi5iYWNrLWJ0biBpbWcsXFxuLmRlbC1idG4gaW1nLFxcbi5jcmVhdGUtbGlzdC1idG4gaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uZW1wdHktaW5kaWNhdG9yIGltZyB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29udGVudC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1Q7O3FCQUVtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMscUNBQXFDO0VBQ3JDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDBDQUEwQztFQUMxQyxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLWNvbHVtbjogc3BhbiAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcbn1cXG5cXG4udGFzay1kaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogSW5yb2R1Y2Ugc2Nyb2xsIGJhclxcbiAgaGVpZ2h0OiA1OTZweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87ICovXFxufVxcblxcbi53cmFwcGVyID4gZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmRpc3BsYXktYnRuLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIGJvdHRvbTogMTBweDtcXG59XFxuXFxuLmVtcHR5LWluZGljYXRvciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDUwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgNTBweCA1MHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1MHB4IDNmciA1MHB4IDUwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbn1cXG5cXG4uYmFjay1idG4ge1xcbiAganVzdGlmeS1zZWxmOiBzZWxmLXN0YXJ0O1xcbn1cXG5cXG4uY3JlYXRlLWxpc3QtYnRuIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxufVxcblxcbi50YXNrLWZvcm0gPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4udGl0bGUtd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnRpdGxlLXdyYXBwZXIgaW5wdXQge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgcGFkZGluZzogMHB4IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24td3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXdyYXBwZXIgdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG59XFxuXFxuLmR1ZS1kYXRlLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLnByaW9yaXR5LXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kdWUtZGF0ZS13cmFwcGVyID4gZGl2LFxcbi5saXN0LXdyYXBwZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kdWUtZGF0ZS13cmFwcGVyIC50aW1lLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbiA+IHRleHRhcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udGFzayA+IGZvcm0ge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4udGFzayA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50YXNrID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzayA+IGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRhc2sgaW1nIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gPiBkaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gdGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbiAgcGFkZGluZzogNXB4IDVweDtcXG59XFxuXFxuLmJhY2stYnRuIGltZyxcXG4uZGVsLWJ0biBpbWcsXFxuLmNyZWF0ZS1saXN0LWJ0biBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5lbXB0eS1pbmRpY2F0b3IgaW1nIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjI7ICovXFxufVxcblxcbi5jb250ZW50IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4MHB4IDRmciAxMDBweDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLXNlY3Rpb24ge1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4vKiAuY29udGVudCB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn0gKi9cXG5cXG4uaGVhZGVyID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLmhlYWRlciBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5kaXNwbGF5LWJ0bi1jb250YWluZXIgaW1nLFxcbi5kZWwtYnRuLWNvbnRhaW5lciBpbWcsXFxuLmNyZWF0ZS1saXN0LWJ0biBpbWcsXFxuLmFkZC1wcm9qZWN0LWJ0biBpbWcsXFxuLmJhY2stYnRuIGltZyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTs7Ozs7RUFLRSxvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMjsgKi9cXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwcHggNGZyIDEwMHB4O1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tc2VjdGlvbiB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi8qIC5jb250ZW50IHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufSAqL1xcblxcbi5oZWFkZXIgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmRpc3BsYXktYnRuLWNvbnRhaW5lciBpbWcsXFxuLmRlbC1idG4tY29udGFpbmVyIGltZyxcXG4uY3JlYXRlLWxpc3QtYnRuIGltZyxcXG4uYWRkLXByb2plY3QtYnRuIGltZyxcXG4uYmFjay1idG4gaW1nIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbi1tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjI7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLW1lbnUgPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4ubWFpbi1tZW51IGJ1dHRvbiB7XFxuICB0ZXh0LWFsaWduOiBzdGFydDtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lcixcXG4udXBjb21pbmctY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxufVxcblxcbi5mYXYtY29udGFpbmVyLFxcbi5wcm9qLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDNmciAzNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbn1cXG5cXG4uZmF2LWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSksXFxuLnByb2otY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDNmciAzNXB4O1xcbiAgY29sdW1uLWdhcDogNXB4O1xcbn1cXG5cXG4uZmF2b3JpdGVzLFxcbi5wcm9qZWN0cyB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZmF2b3JpdGVzID4gZGl2LFxcbi5wcm9qZWN0cyA+IGRpdiB7XFxuICBwYWRkaW5nOiAxMHB4IDBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggM2ZyIDFmcjtcXG59XFxuXFxuLmZhdm9yaXRlcyA+IGRpdiA+IGltZyxcXG4ucHJvamVjdHMgPiBkaXYgPiBpbWcge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbi50b2RheS1jb250YWluZXIgPiBpbWcsXFxuLnVwY29taW5nLWNvbnRhaW5lciA+IGltZyxcXG4uZmF2LWNvbnRhaW5lciBpbWcsXFxuLnByb2otY29udGFpbmVyIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbn1cXG5cXG5bY2xhc3MqPVxcXCJjb3VudFxcXCJdIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL25hdi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsbUNBQW1DO0FBQ3JDOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7Ozs7RUFJRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluLW1lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMjtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tbWVudSA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5tYWluLW1lbnUgYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyLFxcbi51cGNvbWluZy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAzZnIgMzVweDtcXG4gIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmZhdi1jb250YWluZXIsXFxuLnByb2otY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcblxcbi5mYXYtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSxcXG4ucHJvai1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxufVxcblxcbi5mYXZvcml0ZXMsXFxuLnByb2plY3RzIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXYsXFxuLnByb2plY3RzID4gZGl2IHtcXG4gIHBhZGRpbmc6IDEwcHggMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAzZnIgMWZyO1xcbn1cXG5cXG4uZmF2b3JpdGVzID4gZGl2ID4gaW1nLFxcbi5wcm9qZWN0cyA+IGRpdiA+IGltZyB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lciA+IGltZyxcXG4udXBjb21pbmctY29udGFpbmVyID4gaW1nLFxcbi5mYXYtY29udGFpbmVyIGltZyxcXG4ucHJvai1jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbltjbGFzcyo9XFxcImNvdW50XFxcIl0ge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL2xheW91dC5jc3NcIjtcbmltcG9ydCBJbWcgZnJvbSBcIi4vaW1hZ2VzL21lbnUuc3ZnXCI7XG5pbXBvcnQgSW1nMiBmcm9tIFwiLi9pbWFnZXMvY2F0LnN2Z1wiO1xuaW1wb3J0IEltZzMgZnJvbSBcIi4vaW1hZ2VzL2JlbGwuc3ZnXCI7XG5pbXBvcnQgSW1nNCBmcm9tIFwiLi9pbWFnZXMvaGVscC5zdmdcIjtcblxuY29uc3QgbGlzdEFycmF5ID0gW1wicGVyc29uYWxcIiwgXCJ3b3JrXCIsIFwic2hvcHBpbmdcIl07XG5jb25zdCBwcmlvcml0eUFycmF5ID0gW1wiY3JpdGljYWxcIiwgXCJoaWdoXCIsIFwibm9ybWFsXCJdO1xuXG5jb25zdCBwYWdlTGF5b3V0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBtZW51SW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9maWxlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGJlbGxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgaGVscEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLXNlY3Rpb25cIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBtZW51SW1nLnNyYyA9IEltZztcbiAgbWVudUltZy5hbHQgPSBcIm1lbnUgaWNvblwiO1xuICBtZW51QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvblwiKTtcbiAgcHJvZmlsZUltZy5zcmMgPSBJbWcyO1xuICBwcm9maWxlSW1nLmFsdCA9IFwiQSBjYXQgaWNvblwiO1xuICBiZWxsSW1nLnNyYyA9IEltZzM7XG4gIGJlbGxJbWcuYWx0ID0gXCJBIGJlbGwgaWNvblwiO1xuICBoZWxwSW1nLnNyYyA9IEltZzQ7XG4gIGhlbHBJbWcuYWx0ID0gXCJBIHF1ZXN0aW9uIG1hcmsgaWNvblwiO1xuXG4gIG1lbnVCdXR0b24uYXBwZW5kQ2hpbGQobWVudUltZyk7XG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQoaGVscEltZyk7XG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQoYmVsbEltZyk7XG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQocHJvZmlsZUltZyk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2ZpbGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUxpc3RBcnJheSA9ICgpID0+IHtcbiAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWxpc3RcIikudmFsdWU7XG4gIGxpc3RBcnJheS5wdXNoKG5ld0xpc3QpO1xufTtcblxuZXhwb3J0IHsgbGlzdEFycmF5LCBwcmlvcml0eUFycmF5LCBwYWdlTGF5b3V0LCB1cGRhdGVMaXN0QXJyYXkgfTtcbiIsImltcG9ydCBcIi4vY29udGVudC5jc3NcIjtcbmltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuL2xheW91dFwiO1xuaW1wb3J0IEltZyBmcm9tIFwiLi9pbWFnZXMvYWRkLXRhc2suc3ZnXCI7XG5pbXBvcnQgSW1nMiBmcm9tIFwiLi9pbWFnZXMvYmFjay5zdmdcIjtcbmltcG9ydCBJbWczIGZyb20gXCIuL2ltYWdlcy9hZGQtbGlzdC5zdmdcIjtcbmltcG9ydCBJbWc0IGZyb20gXCIuL2ltYWdlcy9zYXZlLnN2Z1wiO1xuaW1wb3J0IEltZzUgZnJvbSBcIi4vaW1hZ2VzL2NhbGVuZGFyLnN2Z1wiO1xuXG5jb25zdCB0YXNrQXJyYXkgPSBbXTtcblxuY29uc3QgbWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zZWN0aW9uXCIpO1xuXG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrRGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGFzay1oZWFkZXJcIik7XG4gIHRhc2tEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWRpc3BsYXlcIik7XG4gIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1idG4tY29udGFpbmVyXCIpO1xuICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idG5cIik7XG4gIGJ0bkltZy5zcmMgPSBJbWc7XG4gIGJ0bkltZy5hbHQgPSBcIkFkZCBjaXJjbGUgaWNvblwiO1xuICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgYnRuLmFwcGVuZENoaWxkKGJ0bkltZyk7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0Rpc3BsYXkpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbn07XG5cbmNvbnN0IGVtcHR5SW5kaWNhdG9yID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlbXB0eS1pbmRpY2F0b3JcIik7XG4gIGltZy5zcmMgPSBJbWc1O1xuICBpbWcuYWx0ID0gXCJlbXB0eSBpbWFnZVwiO1xuICBwYXJhLnRleHRDb250ZW50ID0gXCJOb3RoaW5nIHRvIGRvXCI7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhKTtcbiAgZGlzcGxheS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufTtcblxuY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuXG4gIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIC8vIGNyZWF0ZSBmb3JtIGlucHV0c1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBkdWVEYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYmFja0J0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIC8vIGNyZWF0ZSBmb3JtIHNlbGVjdGlvbnNcbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3Qgc3VibWl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VibWl0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VibWl0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHN1Ym1pdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgY3JlYXRlTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNyZWF0ZUxpc3RJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAvL0FkZCBhdHRyaWJ1dGVzXG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2stZm9ybVwiKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtd3JhcHBlclwiKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLXdyYXBwZXJcIik7XG4gIGR1ZURhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlLXdyYXBwZXJcIik7XG4gIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS13cmFwcGVyXCIpO1xuICBzdWJtaXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3Qtd3JhcHBlclwiKTtcbiAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1jb250YWluZXJcIik7XG4gIGJhY2tCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGJhY2tCdG4uY2xhc3NMaXN0LmFkZChcImJhY2stYnRuXCIpO1xuICBiYWNrQnRuSW1nLnNyYyA9IEltZzI7XG4gIGJhY2tCdG5JbWcuYWx0ID0gXCJCYWNrIGFycm93IGljb25cIjtcbiAgdGFza0xhYmVsLmh0bWxGb3IgPSBcInRhc2stdGl0bGVcIjtcbiAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gXCJUYXNrIG5hbWVcIjtcbiAgZGVzY3JpcHRpb25MYWJlbC5odG1sRm9yID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJXaGF0IGlzIHRvIGJlIGRvbmU/XCI7XG4gIGR1ZURhdGVMYWJlbC5odG1sRm9yID0gXCJkYXRlXCI7XG4gIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIGRhdGVcIjtcbiAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gXCJwcmlvcml0eVwiO1xuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICBzdWJtaXRMYWJlbC5odG1sRm9yID0gXCJsaXN0XCI7XG4gIHN1Ym1pdExhYmVsLnRleHRDb250ZW50ID0gXCJBZGQgVG9cIjtcbiAgZHVlRGF0ZUlucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgdGFza0lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgdGFza0lucHV0Lm5hbWUgPSBcInRpdGxlXCI7XG4gIHRhc2tJbnB1dC5pZCA9IFwidGFzay10aXRsZVwiO1xuICB0YXNrSW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uSW5wdXQuaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGR1ZURhdGVJbnB1dC5uYW1lID0gXCJkYXRlXCI7XG4gIGR1ZURhdGVJbnB1dC5pZCA9IFwiZGF0ZVwiO1xuICBwcmlvcml0eUlucHV0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIHByaW9yaXR5SW5wdXQuaWQgPSBcInByaW9yaXR5XCI7XG4gIGNyZWF0ZUxpc3RCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNyZWF0ZUxpc3RCdG4uY2xhc3NMaXN0LmFkZChcImNyZWF0ZS1saXN0LWJ0blwiKTtcbiAgY3JlYXRlTGlzdEltZy5zcmMgPSBJbWczO1xuICBjcmVhdGVMaXN0SW1nLmFsdCA9IFwiQWRkIGxpc3QgaWNvblwiO1xuICBzdWJtaXRJbnB1dC5uYW1lID0gXCJsaXN0XCI7XG4gIHN1Ym1pdElucHV0LmlkID0gXCJsaXN0XCI7XG4gIHByaW9yaXR5T3B0aW9uMS52YWx1ZSA9IFwiY3JpdGljYWxcIjtcbiAgcHJpb3JpdHlPcHRpb24xLnRleHRDb250ZW50ID0gXCJDcml0aWNhbFwiO1xuICBwcmlvcml0eU9wdGlvbjIudmFsdWUgPSBcImhpZ2hcIjtcbiAgcHJpb3JpdHlPcHRpb24yLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gIHByaW9yaXR5T3B0aW9uMy52YWx1ZSA9IFwibm9ybWFsXCI7XG4gIHByaW9yaXR5T3B0aW9uMy50ZXh0Q29udGVudCA9IFwiTm9ybWFsXCI7XG5cbiAgLy8gRHluYW1pY2FsbHkgYWRkIGxpc3Qgb3B0aW9ucy4gV2hlbiB0aGUgdXNlciBhZGRzIGEgbmV3IGxpc3QsXG4gIC8vIHRoZSBuZXcgbGlzdCB3aWxsIGJlIHByZXNlbnQgaW4gdGhlIG5leHQgZm9ybS5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBzdWJtaXRPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgc3VibWl0T3B0aW9uLnZhbHVlID0gbGlzdEFycmF5W2ldO1xuICAgIHN1Ym1pdE9wdGlvbi50ZXh0Q29udGVudCA9IGxpc3RBcnJheVtpXTtcblxuICAgIHN1Ym1pdElucHV0LmFwcGVuZENoaWxkKHN1Ym1pdE9wdGlvbik7XG4gIH1cblxuICAvLyBBcHBlbmQgbm9kZXNcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbjEpO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uMik7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24zKTtcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbnB1dCk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0KTtcbiAgc3VibWl0U2VsZWN0LmFwcGVuZENoaWxkKHN1Ym1pdExhYmVsKTtcbiAgc3VibWl0U2VsZWN0LmFwcGVuZENoaWxkKHN1Ym1pdElucHV0KTtcbiAgY3JlYXRlTGlzdEJ0bi5hcHBlbmRDaGlsZChjcmVhdGVMaXN0SW1nKTtcbiAgc3VibWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdFNlbGVjdCk7XG4gIHN1Ym1pdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVMaXN0QnRuKTtcbiAgZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlQ29udGFpbmVyKTtcbiAgYmFja0J0bi5hcHBlbmRDaGlsZChiYWNrQnRuSW1nKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZUNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdENvbnRhaW5lcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChiYWNrQnRuKTtcbiAgZGlzcGxheS5hcHBlbmRDaGlsZChmb3JtKTtcbn07XG5cbmNvbnN0IGNoYW5nZUJ1dHRvbiA9IChlbGUpID0+IHtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5LWJ0bi1jb250YWluZXJcIik7XG5cbiAgYnRuQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcblxuICBpZiAoZWxlLmNsYXNzTmFtZSA9PT0gXCJmb3JtLWJ0blwiKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBidG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcInN1Ym1pdC1idG5cIik7XG4gICAgYnRuSW1nLnNyYyA9IEltZzQ7XG4gICAgYnRuSW1nLmFsdCA9IFwiQ2hlY2sgY2lyY2xlIGljb25cIjtcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChidG5JbWcpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICB9IGVsc2UgaWYgKFxuICAgIGVsZS5jbGFzc05hbWUgPT09IFwic3VibWl0LWJ0blwiIHx8XG4gICAgZWxlLmNsYXNzTmFtZSA9PT0gXCJiYWNrLWJ0blwiIHx8XG4gICAgZWxlLmNsYXNzTmFtZSA9PT0gXCJzYXZlLWJ0blwiXG4gICkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgYnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiKTtcbiAgICBidG5JbWcuc3JjID0gSW1nO1xuICAgIGJ0bkltZy5hbHQgPSBcIkFkZCBjaXJjbGUgaWNvblwiO1xuXG4gICAgYnRuLmFwcGVuZENoaWxkKGJ0bkltZyk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBidG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcInNhdmUtYnRuXCIpO1xuICAgIGJ0bkltZy5zcmMgPSBJbWc0O1xuICAgIGJ0bkltZy5hbHQgPSBcIkNoZWNrIGNpcmNsZSBpY29uXCI7XG5cbiAgICBidG4uYXBwZW5kQ2hpbGQoYnRuSW1nKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgfVxufTtcblxuY29uc3QgbmV3TGlzdEZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG5cbiAgY29uc3QgbGlzdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBhY2NlcHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGxpc3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWZvcm1cIik7XG4gIGNhbmNlbEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoXCJjYW5jZWwtbGlzdC1idG5cIik7XG4gIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gIGFjY2VwdEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgYWNjZXB0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtbGlzdC1idG5cIik7XG4gIGFjY2VwdEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkXCI7XG4gIGxhYmVsLmh0bWxGb3IgPSBcIm5ldy1saXN0XCI7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCJOZXcgTGlzdFwiO1xuICBpbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIGlucHV0Lm5hbWUgPSBcIm5ldy1saXN0XCI7XG4gIGlucHV0LmlkID0gXCJuZXctbGlzdFwiO1xuICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChhY2NlcHRCdG4pO1xuICBsaXN0Rm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGxpc3RGb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgbGlzdEZvcm0uYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChsaXN0Rm9ybSk7XG59O1xuXG5jb25zdCBhZGRUaW1lT3B0aW9uID0gKCkgPT4ge1xuICBjb25zdCBzaWJsaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWNvbnRhaW5lclwiKTtcbiAgY29uc3Qgc2libGluZ1R3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZS1jb250YWluZXJcIik7XG4gIGNvbnN0IHBhcmVudCA9IHNpYmxpbmcucGFyZW50Tm9kZTtcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKHNpYmxpbmdUd28pKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgdGltZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWNvbnRhaW5lclwiKTtcbiAgICBsYWJlbC5odG1sRm9yID0gXCJ0aW1lXCI7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlRpbWU6XCI7XG4gICAgdGltZUlucHV0LnR5cGUgPSBcInRpbWVcIjtcbiAgICB0aW1lSW5wdXQubmFtZSA9IFwidGltZVwiO1xuICAgIHRpbWVJbnB1dC5pZCA9IFwidGltZVwiO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxufTtcblxuY29uc3QgYWRkTGlzdE9wdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdFwiKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWxpc3RcIikudmFsdWU7XG4gIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgbmV3T3B0aW9uLnZhbHVlID0gbmFtZTtcbiAgbmV3T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG59O1xuXG5jb25zdCBwcm9jZXNzRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpO1xuICBjb25zdCBnZXRGb3JtRGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkpO1xuXG4gIHRhc2tBcnJheS5wdXNoKGdldEZvcm1EYXRhKTtcbn07XG5cbmNvbnN0IG1vZGlmeVRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1bGwtdGFzay1mb3JtXCIpO1xuICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGZvcm0uZGF0YXNldC5udW0pO1xuICBjb25zdCBmb3JtRGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkpO1xuXG4gIHRhc2tBcnJheS5zcGxpY2UoaW5kZXgsIDEsIGZvcm1EYXRhKTtcbn07XG5cbmNvbnN0IGJhY2tCdXR0b25Db250cm9sbGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFjay1idG5cIik7XG5cbiAgaWYgKGhlYWRlci5jb250YWlucyhjaGlsZCkpIHtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgbWFpbkNvbnRlbnQsXG4gIGVtcHR5SW5kaWNhdG9yLFxuICBjcmVhdGVGb3JtLFxuICBjaGFuZ2VCdXR0b24sXG4gIG5ld0xpc3RGb3JtLFxuICBhZGRUaW1lT3B0aW9uLFxuICBhZGRMaXN0T3B0aW9uLFxuICBwcm9jZXNzRm9ybSxcbiAgbW9kaWZ5VGFzayxcbiAgYmFja0J1dHRvbkNvbnRyb2xsZXIsXG4gIHRhc2tBcnJheSxcbn07XG4iLCJpbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi9tYWluLWNvbnRlbnRcIjtcbmltcG9ydCBcIi4vbmF2LmNzc1wiO1xuaW1wb3J0IHsgbGlzdEFycmF5IH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgSW1nIGZyb20gXCIuL2ltYWdlcy90b2RheS5zdmdcIjtcbmltcG9ydCBJbWcyIGZyb20gXCIuL2ltYWdlcy91cGNvbWluZy5zdmdcIjtcbmltcG9ydCBJbWczIGZyb20gXCIuL2ltYWdlcy9leHBhbmQtbGVzcy5zdmdcIjtcbmltcG9ydCBJbWc0IGZyb20gXCIuL2ltYWdlcy9leHBhbmQtbW9yZS5zdmdcIjtcbmltcG9ydCBJbWc1IGZyb20gXCIuL2ltYWdlcy9jcml0aWNhbC5zdmdcIjtcbmltcG9ydCBJbWc2IGZyb20gXCIuL2ltYWdlcy9oaWdoLnN2Z1wiO1xuaW1wb3J0IEltZzcgZnJvbSBcIi4vaW1hZ2VzL25vcm1hbC5zdmdcIjtcbmltcG9ydCBJbWc4IGZyb20gXCIuL2ltYWdlcy9wZXJzb25hbC5zdmdcIjtcbmltcG9ydCBJbWc5IGZyb20gXCIuL2ltYWdlcy93b3JrLnN2Z1wiO1xuaW1wb3J0IEltZzEwIGZyb20gXCIuL2ltYWdlcy9zaG9wcGluZy5zdmdcIjtcbmltcG9ydCBJbWcxMSBmcm9tIFwiLi9pbWFnZXMvbmV3LnN2Z1wiO1xuaW1wb3J0IEltZzEyIGZyb20gXCIuL2ltYWdlcy9hZGQtbGlzdC5zdmdcIjtcblxuY29uc3QgbWFpbk1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc2VjdGlvblwiKTtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kYXlJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCB0b2RheUNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdXBjb21pbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB1cGNvbWluZ0ltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCB1cGNvbWluZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHVwY29taW5nQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmYXZXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZmF2b3JpdGVzSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGZhdm9yaXRlc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RzSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBhZGRMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYWRkTGlzdEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1haW4tbWVudVwiKTtcbiAgdG9kYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZGF5LWNvbnRhaW5lclwiKTtcbiAgdXBjb21pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInVwY29taW5nLWNvbnRhaW5lclwiKTtcbiAgdG9kYXlCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHRvZGF5QnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1idG5cIik7XG4gIHRvZGF5QnRuLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICB1cGNvbWluZ0J0bi50eXBlID0gXCJidXR0b25cIjtcbiAgdXBjb21pbmdCdG4uY2xhc3NMaXN0LmFkZChcInVwY29taW5nLWJ0blwiKTtcbiAgdXBjb21pbmdCdG4udGV4dENvbnRlbnQgPSBcIlVwY29taW5nXCI7XG4gIHRvZGF5Q291bnQuY2xhc3NMaXN0LmFkZChcInRvZGF5LWNvdW50XCIpO1xuICB1cGNvbWluZ0NvdW50LmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZy1jb3VudFwiKTtcbiAgZmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmYXYtY29udGFpbmVyXCIpO1xuICBwcm9qQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qLWNvbnRhaW5lclwiKTtcbiAgZmF2b3JpdGVzQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBmYXZvcml0ZXNCdG4uY2xhc3NMaXN0LmFkZChcImZhdm9yaXRlcy1idG5cIik7XG4gIGZhdm9yaXRlc0J0bi50ZXh0Q29udGVudCA9IFwiRmF2b3JpdGVzXCI7XG4gIHByb2plY3RzQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBwcm9qZWN0c0J0bi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtYnRuXCIpO1xuICBwcm9qZWN0c0J0bi50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgYWRkTGlzdEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgYWRkTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLXByb2plY3QtYnRuXCIpO1xuICBmYXZvcml0ZXMuY2xhc3NMaXN0LmFkZChcImZhdm9yaXRlc1wiKTtcbiAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZChcInByb2plY3RzXCIpO1xuICB0b2RheUltZy5zcmMgPSBJbWc7XG4gIHRvZGF5SW1nLmFsdCA9IFwiQ2FsZW5kZXIgaWNvblwiO1xuICB1cGNvbWluZ0ltZy5zcmMgPSBJbWcyO1xuICB1cGNvbWluZ0ltZy5hbHQgPSBcIkNhbGVuZGVyIGljb25cIjtcbiAgZmF2b3JpdGVzSW1nLnNyYyA9IEltZzM7XG4gIGZhdm9yaXRlc0ltZy5hbHQgPSBcIkV4cGFuZCBsZXNzIGljb25cIjtcbiAgZmF2b3JpdGVzSW1nLmNsYXNzTGlzdC5hZGQoXCJmYXZvcml0ZXMtaW1nXCIpO1xuICBwcm9qZWN0c0ltZy5zcmMgPSBJbWczO1xuICBwcm9qZWN0c0ltZy5hbHQgPSBcIkV4cGFuZCBsZXNzIGljb25cIjtcbiAgcHJvamVjdHNJbWcuY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWltZ1wiKTtcbiAgYWRkTGlzdEltZy5zcmMgPSBJbWcxMjtcbiAgYWRkTGlzdEltZy5hbHQgPSBcIkFkZCBsaXN0IGljb25cIjtcblxuICBhZGRMaXN0QnRuLmFwcGVuZENoaWxkKGFkZExpc3RJbWcpO1xuICB0b2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheUltZyk7XG4gIHRvZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5QnRuKTtcbiAgdG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlDb3VudCk7XG4gIHVwY29taW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwY29taW5nSW1nKTtcbiAgdXBjb21pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQodXBjb21pbmdCdG4pO1xuICB1cGNvbWluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGNvbWluZ0NvdW50KTtcbiAgZmF2V3JhcHBlci5hcHBlbmRDaGlsZChmYXZvcml0ZXNJbWcpO1xuICBmYXZXcmFwcGVyLmFwcGVuZENoaWxkKGZhdm9yaXRlc0J0bik7XG4gIGZhdkNvbnRhaW5lci5hcHBlbmRDaGlsZChmYXZXcmFwcGVyKTtcbiAgZmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGZhdm9yaXRlcyk7XG4gIHByb2pXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RzSW1nKTtcbiAgcHJvaldyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNCdG4pO1xuICBwcm9qV3JhcHBlci5hcHBlbmRDaGlsZChhZGRMaXN0QnRuKTtcbiAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qV3JhcHBlcik7XG4gIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICBtZW51LmFwcGVuZENoaWxkKHRvZGF5Q29udGFpbmVyKTtcbiAgbWVudS5hcHBlbmRDaGlsZCh1cGNvbWluZ0NvbnRhaW5lcik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQoZmF2Q29udGFpbmVyKTtcbiAgbWVudS5hcHBlbmRDaGlsZChwcm9qQ29udGFpbmVyKTtcbiAgbWFpbi5pbnNlcnRCZWZvcmUobWVudSwgd3JhcHBlcik7XG59O1xuXG5jb25zdCBmYXZvcml0ZXNMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBmYXZvcml0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlc1wiKTtcbiAgY29uc3QgY29udGFpbmVyT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFpbmVyVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY29udGFpbmVyVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eU9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHByaW9yaXR5VHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHByaW9yaXR5T25lQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eVR3b0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpb3JpdHlUaHJlZUNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY3JpdGljYWxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgaGlnaEltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBub3JtYWxJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBwcmlvcml0eU9uZS5jbGFzc0xpc3QuYWRkKFwiY3JpdGljYWwtYnRuXCIpO1xuICBwcmlvcml0eU9uZS5pZCA9IFwicHJpb3JpdHktYnRuXCI7XG4gIHByaW9yaXR5T25lLnRleHRDb250ZW50ID0gXCJDcml0aWNhbFwiO1xuICBwcmlvcml0eVR3by5jbGFzc0xpc3QuYWRkKFwiaGlnaC1idG5cIik7XG4gIHByaW9yaXR5VHdvLmlkID0gXCJwcmlvcml0eS1idG5cIjtcbiAgcHJpb3JpdHlUd28udGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgcHJpb3JpdHlUaHJlZS5jbGFzc0xpc3QuYWRkKFwibm9ybWFsLWJ0blwiKTtcbiAgcHJpb3JpdHlUaHJlZS5pZCA9IFwicHJpb3JpdHktYnRuXCI7XG4gIHByaW9yaXR5VGhyZWUudGV4dENvbnRlbnQgPSBcIk5vcm1hbFwiO1xuICBwcmlvcml0eU9uZUNvdW50LmNsYXNzTGlzdC5hZGQoXCJjcml0aWNhbC1jb3VudFwiKTtcbiAgcHJpb3JpdHlUd29Db3VudC5jbGFzc0xpc3QuYWRkKFwiaGlnaC1jb3VudFwiKTtcbiAgcHJpb3JpdHlUaHJlZUNvdW50LmNsYXNzTGlzdC5hZGQoXCJub3JtYWwtY291bnRcIik7XG5cbiAgY3JpdGljYWxJbWcuc3JjID0gSW1nNTtcbiAgY3JpdGljYWxJbWcuYWx0ID0gXCJXYXRlciBkcm9wIGljb25cIjtcbiAgaGlnaEltZy5zcmMgPSBJbWc2O1xuICBoaWdoSW1nLmFsdCA9IFwiV2F0ZXIgZHJvcCBpY29uXCI7XG4gIG5vcm1hbEltZy5zcmMgPSBJbWc3O1xuICBub3JtYWxJbWcuYWx0ID0gXCJXYXRlciBkcm9wIGljb25cIjtcblxuICBjb250YWluZXJPbmUuYXBwZW5kQ2hpbGQoY3JpdGljYWxJbWcpO1xuICBjb250YWluZXJPbmUuYXBwZW5kQ2hpbGQocHJpb3JpdHlPbmUpO1xuICBjb250YWluZXJPbmUuYXBwZW5kQ2hpbGQocHJpb3JpdHlPbmVDb3VudCk7XG4gIGNvbnRhaW5lclR3by5hcHBlbmRDaGlsZChoaWdoSW1nKTtcbiAgY29udGFpbmVyVHdvLmFwcGVuZENoaWxkKHByaW9yaXR5VHdvKTtcbiAgY29udGFpbmVyVHdvLmFwcGVuZENoaWxkKHByaW9yaXR5VHdvQ291bnQpO1xuICBjb250YWluZXJUaHJlZS5hcHBlbmRDaGlsZChub3JtYWxJbWcpO1xuICBjb250YWluZXJUaHJlZS5hcHBlbmRDaGlsZChwcmlvcml0eVRocmVlKTtcbiAgY29udGFpbmVyVGhyZWUuYXBwZW5kQ2hpbGQocHJpb3JpdHlUaHJlZUNvdW50KTtcbiAgZmF2b3JpdGVzLmFwcGVuZENoaWxkKGNvbnRhaW5lck9uZSk7XG4gIGZhdm9yaXRlcy5hcHBlbmRDaGlsZChjb250YWluZXJUd28pO1xuICBmYXZvcml0ZXMuYXBwZW5kQ2hpbGQoY29udGFpbmVyVGhyZWUpO1xufTtcblxuY29uc3QgcHJvamVjdExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcblxuICBwcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsaXN0TmFtZSA9IGxpc3RBcnJheVtpXTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdGFza0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke2xpc3ROYW1lfS1saXN0YCk7XG4gICAgbGlzdEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBsaXN0QnRuLmNsYXNzTGlzdC5hZGQoYCR7bGlzdE5hbWV9LWJ0bmApO1xuICAgIGxpc3RCdG4uaWQgPSBcInRhc2stYnRuXCI7XG4gICAgbGlzdEJ0bi50ZXh0Q29udGVudCA9IGxpc3ROYW1lO1xuICAgIHRhc2tDb3VudC5jbGFzc0xpc3QuYWRkKGAke2xpc3ROYW1lfS1jb3VudGApO1xuXG4gICAgaWYgKGxpc3ROYW1lID09PSBcInBlcnNvbmFsXCIpIHtcbiAgICAgIGltZy5zcmMgPSBJbWc4O1xuICAgICAgaW1nLmFsdCA9IFwiUGVyc29uIGljb25cIjtcbiAgICB9IGVsc2UgaWYgKGxpc3ROYW1lID09PSBcIndvcmtcIikge1xuICAgICAgaW1nLnNyYyA9IEltZzk7XG4gICAgICBpbWcuYWx0ID0gXCJCcmllZmNhc2UgaWNvblwiO1xuICAgIH0gZWxzZSBpZiAobGlzdE5hbWUgPT09IFwic2hvcHBpbmdcIikge1xuICAgICAgaW1nLnNyYyA9IEltZzEwO1xuICAgICAgaW1nLmFsdCA9IFwiU2hvcHBpbmcgY2FydCBpY29uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltZy5zcmMgPSBJbWcxMTtcbiAgICAgIGltZy5hbHQgPSBcIkxhcmdlIGRvdCBpY29uXCI7XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RCdG4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ291bnQpO1xuICAgIHByb2plY3RzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH1cbn07XG5cbmNvbnN0IHRhc2tDb3VudCA9ICgpID0+IHtcbiAgY29uc3QgY291bnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltjbGFzcyo9J2NvdW50J11cIik7XG4gIGNvbnN0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cbiAgY291bnRzLmZvckVhY2goKGNvdW50KSA9PiB7XG4gICAgbGV0IGNsYXNzTmFtZSA9IGNvdW50LmNsYXNzTmFtZTtcblxuICAgIGxldCBudW0gPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9iaiA9IHRhc2tBcnJheVtpXTtcbiAgICAgIGNvbnN0IGxpc3RDaG9pY2UgPSBvYmpbXCJsaXN0XCJdO1xuICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gb2JqW1wicHJpb3JpdHlcIl07XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG9ialtcImRhdGVcIl07XG5cbiAgICAgIGlmIChcbiAgICAgICAgY2xhc3NOYW1lLmluY2x1ZGVzKGxpc3RDaG9pY2UpIHx8XG4gICAgICAgICh0b2RheURhdGUgPT09IHRhc2tEYXRlICYmIGNsYXNzTmFtZS5pbmNsdWRlcyhcInRvZGF5XCIpKSB8fFxuICAgICAgICAodG9kYXlEYXRlICE9PSB0YXNrRGF0ZSAmJiBjbGFzc05hbWUuaW5jbHVkZXMoXCJ1cGNvbWluZ1wiKSkgfHxcbiAgICAgICAgY2xhc3NOYW1lLmluY2x1ZGVzKHRhc2tQcmlvcml0eSlcbiAgICAgICkge1xuICAgICAgICBudW0gKz0gMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobnVtID09PSAwKSB7XG4gICAgICBjb3VudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50LnRleHRDb250ZW50ID0gbnVtO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBjaGFuZ2VGYXZvcml0ZXNJbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgZmF2b3JpdGVzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXNcIik7XG4gIGNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXMtaW1nXCIpO1xuXG4gIGlmIChmYXZvcml0ZXNDb250YWluZXIudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICBpbWFnZS5zcmMgPSBJbWczO1xuICAgIGltYWdlLmFsdCA9IFwiRXhwYW5kIGxlc3MgaWNvblwiO1xuICB9IGVsc2Uge1xuICAgIGltYWdlLnNyYyA9IEltZzQ7XG4gICAgaW1hZ2UuYWx0ID0gXCJFeHBhbmQgbW9yZSBpY29uXCI7XG4gIH1cbn07XG5cbmNvbnN0IGNoYW5nZVByb2plY3RzSW1hZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWltZ1wiKTtcblxuICBpZiAocHJvamVjdHNDb250YWluZXIudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICBpbWFnZS5zcmMgPSBJbWczO1xuICAgIGltYWdlLmFsdCA9IFwiRXhwYW5kIGxlc3MgaWNvblwiO1xuICB9IGVsc2Uge1xuICAgIGltYWdlLnNyYyA9IEltZzQ7XG4gICAgaW1hZ2UuYWx0ID0gXCJFeHBhbmQgbW9yZSBpY29uXCI7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIGxpc3RBcnJheSxcbiAgbWFpbk1lbnUsXG4gIHByb2plY3RMaXN0LFxuICBmYXZvcml0ZXNMaXN0LFxuICB0YXNrQ291bnQsXG4gIGNoYW5nZUZhdm9yaXRlc0ltYWdlLFxuICBjaGFuZ2VQcm9qZWN0c0ltYWdlLFxufTtcbiIsImltcG9ydCB7IHRhc2tBcnJheSwgZW1wdHlJbmRpY2F0b3IgfSBmcm9tIFwiLi9tYWluLWNvbnRlbnQuanNcIjtcbmltcG9ydCB7IGxpc3RBcnJheSwgcHJpb3JpdHlBcnJheSB9IGZyb20gXCIuL2xheW91dC5qc1wiO1xuaW1wb3J0IEltZyBmcm9tIFwiLi9pbWFnZXMvcGVyc29uYWwuc3ZnXCI7XG5pbXBvcnQgSW1nMiBmcm9tIFwiLi9pbWFnZXMvd29yay5zdmdcIjtcbmltcG9ydCBJbWczIGZyb20gXCIuL2ltYWdlcy9zaG9wcGluZy5zdmdcIjtcbmltcG9ydCBJbWc0IGZyb20gXCIuL2ltYWdlcy9uZXcuc3ZnXCI7XG5pbXBvcnQgSW1nNSBmcm9tIFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IEltZzYgZnJvbSBcIi4vaW1hZ2VzL2JhY2suc3ZnXCI7XG5cbmNvbnN0IHRhc2tCYXJzID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG5cbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgaWYgKHRhc2tBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2JqID0gdGFza0FycmF5W2ldO1xuICAgICAgY29uc3QgdGFza1RpdGxlID0gb2JqW1widGl0bGVcIl07XG4gICAgICBjb25zdCBsaXN0Q2hvaWNlID0gb2JqW1wibGlzdFwiXTtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gb2JqW1wiZGF0ZVwiXTtcblxuICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzIGZvciBlYWNoIHRhc2tcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIGNvbnN0IGNoZWNrQm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNvbnN0IHdyYXBwZXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgd3JhcHBlci5pZCA9IHRhc2tUaXRsZTtcbiAgICAgIHdyYXBwZXIuZGF0YXNldC5udW0gPSBgJHtpfWA7XG4gICAgICBjaGVja0JveExhYmVsLmh0bWxGb3IgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgY2hlY2tCb3gubmFtZSA9IFwidGFzay1jaGVja2JveFwiO1xuICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFza0RhdGU7XG4gICAgICBsaXN0TmFtZS50ZXh0Q29udGVudCA9IGxpc3RDaG9pY2U7XG5cbiAgICAgIGlmIChsaXN0Q2hvaWNlID09PSBcInBlcnNvbmFsXCIpIHtcbiAgICAgICAgaW1nLnNyYyA9IEltZztcbiAgICAgICAgaW1nLmFsdCA9IFwiUGVyc29uIGljb25cIjtcbiAgICAgIH0gZWxzZSBpZiAobGlzdENob2ljZSA9PT0gXCJ3b3JrXCIpIHtcbiAgICAgICAgaW1nLnNyYyA9IEltZzI7XG4gICAgICAgIGltZy5hbHQgPSBcIkJyaWVmY2FzZSBpY29uXCI7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RDaG9pY2UgPT09IFwic2hvcHBpbmdcIikge1xuICAgICAgICBpbWcuc3JjID0gSW1nMztcbiAgICAgICAgaW1nLmFsdCA9IFwiU2hvcHBpbmcgY2FydCBpY29uXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWcuc3JjID0gSW1nNDtcbiAgICAgICAgaW1nLmFsdCA9IFwiTGFyZ2UgZG90IGljb25cIjtcbiAgICAgIH1cblxuICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hMYWJlbCk7XG4gICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICB3cmFwcGVyVHdvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIHdyYXBwZXJUd28uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3ROYW1lKTtcbiAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hDb250YWluZXIpO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyVHdvKTtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbXB0eUluZGljYXRvcigpO1xuICB9XG59O1xuXG5jb25zdCB0YXNrUGFnZSA9ICh0YXNrSW5kZXgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuXG4gIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IG9iaiA9IHRhc2tBcnJheVt0YXNrSW5kZXhdO1xuICBjb25zdCB0YXNrVGl0bGUgPSBvYmpbXCJ0aXRsZVwiXTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gb2JqW1wiZGVzY3JpcHRpb25cIl07XG4gIGNvbnN0IHRhc2tEYXRlID0gb2JqW1wiZGF0ZVwiXTtcbiAgY29uc3QgdGFza1RpbWUgPSBvYmpbXCJ0aW1lXCJdO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBvYmpbXCJwcmlvcml0eVwiXTtcbiAgY29uc3QgbGlzdENob2ljZSA9IG9ialtcImxpc3RcIl07XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBkYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHRpbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGxpc3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGlzdFNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBiYWNrQnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZnVsbC10YXNrLWZvcm1cIik7XG4gIGZvcm0uZGF0YXNldC5udW0gPSB0YXNrSW5kZXg7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1jb250YWluZXJcIik7XG4gIHRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpbWUtY29udGFpbmVyXCIpO1xuICB0aXRsZUxhYmVsLmh0bWxGb3IgPSBcInRhc2stdGl0bGVcIjtcbiAgLy8gdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRhdGVMYWJlbC5odG1sRm9yID0gXCJkYXRlXCI7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIE9uOiBcIjtcbiAgdGltZUxhYmVsLmh0bWxGb3IgPSBcInRpbWVcIjtcbiAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJBdDogXCI7XG4gIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9IFwicHJpb3JpdHlcIjtcbiAgLy8gcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgbGlzdFNlbGVjdExhYmVsLmh0bWxGb3IgPSBcImxpc3RcIjtcbiAgYmFja0J0bi50eXBlID0gXCJidXR0b25cIjtcbiAgYmFja0J0bi5jbGFzc0xpc3QuYWRkKFwiYmFjay1idG5cIik7XG4gIGJhY2tCdG5JbWcuc3JjID0gSW1nNjtcbiAgYmFja0J0bkltZy5hbHQgPSBcIkJhY2sgYXJyb3cgaWNvblwiO1xuICB0aXRsZS5uYW1lID0gXCJ0aXRsZVwiO1xuICB0aXRsZS5pZCA9IFwidGFzay10aXRsZVwiO1xuICB0aXRsZS52YWx1ZSA9IHRhc2tUaXRsZTtcbiAgdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICBkZXNjcmlwdGlvbi5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbi5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrRGVzY3JpcHRpb247XG4gIGxpc3RTZWxlY3QubmFtZSA9IFwibGlzdFwiO1xuICBsaXN0U2VsZWN0LmlkID0gXCJsaXN0XCI7XG4gIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICBkYXRlLm5hbWUgPSBcImRhdGVcIjtcbiAgZGF0ZS5pZCA9IFwiZGF0ZVwiO1xuICBkYXRlLnZhbHVlID0gdGFza0RhdGU7XG4gIHRpbWUudHlwZSA9IFwidGltZVwiO1xuICB0aW1lLm5hbWUgPSBcInRpbWVcIjtcbiAgdGltZS5pZCA9IFwidGltZVwiO1xuICB0aW1lLnZhbHVlID0gdGFza1RpbWU7XG4gIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIHByaW9yaXR5U2VsZWN0LmlkID0gXCJwcmlvcml0eVwiO1xuXG4gIC8vIER5bmFtaWNhbGx5IGFkZCBsaXN0IG9wdGlvbnMuIFdoZW4gdGhlIHVzZXIgYWRkcyBhIG5ldyBsaXN0LFxuICAvLyB0aGUgbmV3IGxpc3Qgd2lsbCBiZSBwcmVzZW50IGluIHRoZSBuZXh0IGZvcm0uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGlzdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICBsaXN0T3B0aW9uLnZhbHVlID0gbGlzdEFycmF5W2ldO1xuICAgIGxpc3RPcHRpb24udGV4dENvbnRlbnQgPSBsaXN0QXJyYXlbaV07XG5cbiAgICBpZiAobGlzdE9wdGlvbi52YWx1ZSA9PT0gbGlzdENob2ljZSkge1xuICAgICAgbGlzdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGxpc3RTZWxlY3QuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbik7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXR5QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IHByaW9yaXR5QXJyYXlbaV07XG4gICAgcHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eUFycmF5W2ldO1xuXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgaWYgKHByaW9yaXR5QXJyYXlbaV0gPT09IHRhc2tQcmlvcml0eSkge1xuICAgICAgcHJpb3JpdHlPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGxpc3ROYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RTZWxlY3RMYWJlbCk7XG4gIGxpc3ROYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RTZWxlY3QpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIHRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcbiAgdGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgZGF0ZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG4gIGRhdGVXcmFwcGVyLmFwcGVuZENoaWxkKHRpbWVDb250YWluZXIpO1xuICBiYWNrQnRuLmFwcGVuZENoaWxkKGJhY2tCdG5JbWcpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGxpc3ROYW1lQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZVdyYXBwZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcbiAgZGlzcGxheS5hcHBlbmRDaGlsZChmb3JtKTtcbn07XG5cbmNvbnN0IHNvcnRUYXNrQmFycyA9IChidG4pID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCBzaWJsaW5nID0gYnRuLm5leHRFbGVtZW50U2libGluZztcbiAgY29uc3QgYnRuQ2xhc3MgPSBidG4uY2xhc3NOYW1lO1xuICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXG4gIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGlmIChzaWJsaW5nLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9iaiA9IHRhc2tBcnJheVtpXTtcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IG9ialtcInRpdGxlXCJdO1xuICAgICAgY29uc3QgbGlzdENob2ljZSA9IG9ialtcImxpc3RcIl07XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG9ialtcImRhdGVcIl07XG4gICAgICBjb25zdCBwcmlvcml0eSA9IG9ialtcInByaW9yaXR5XCJdO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGJ0bkNsYXNzLmluY2x1ZGVzKGxpc3RDaG9pY2UpIHx8XG4gICAgICAgICh0b2RheURhdGUgPT09IHRhc2tEYXRlICYmIGJ0bkNsYXNzLmluY2x1ZGVzKFwidG9kYXlcIikpIHx8XG4gICAgICAgICh0b2RheURhdGUgIT09IHRhc2tEYXRlICYmIGJ0bkNsYXNzLmluY2x1ZGVzKFwidXBjb21pbmdcIikpIHx8XG4gICAgICAgIGJ0bkNsYXNzLmluY2x1ZGVzKHByaW9yaXR5KVxuICAgICAgKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBmb3IgZWFjaCB0YXNrXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBjaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBjb25zdCBjaGVja0JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IGxpc3RJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICB3cmFwcGVyLmlkID0gdGFza1RpdGxlO1xuICAgICAgICB3cmFwcGVyLmRhdGFzZXQubnVtID0gaTtcbiAgICAgICAgY2hlY2tCb3hMYWJlbC5odG1sRm9yID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjaGVja0JveC5uYW1lID0gXCJ0YXNrLWNoZWNrYm94XCI7XG4gICAgICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICAgICAgbGlzdEltZy5hbHQgPSBcImltZ1wiO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2tEYXRlO1xuICAgICAgICBsaXN0TmFtZS50ZXh0Q29udGVudCA9IGxpc3RDaG9pY2U7XG4gICAgICAgIC8vICAgbGlzdEltZyA9IGltZ1xuXG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94TGFiZWwpO1xuICAgICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgIHdyYXBwZXJUd28uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICB3cmFwcGVyVHdvLmFwcGVuZENoaWxkKGRhdGUpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3ROYW1lKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0SW1nKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjaGVja0JveENvbnRhaW5lcik7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQod3JhcHBlclR3byk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVtcHR5SW5kaWNhdG9yKCk7XG4gIH1cbn07XG5cbmNvbnN0IGFkZERlbGV0ZU9wdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWhlYWRlclwiKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWwtYnRuLWNvbnRhaW5lclwiKTtcblxuICBpZiAoaGVhZGVyLmNvbnRhaW5zKGRpdikpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZWxCdG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlbC1idG4tY29udGFpbmVyXCIpO1xuICBkZWxCdG4udHlwZSA9IFwic3VibWl0XCI7XG4gIGRlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsLWJ0blwiKTtcbiAgZGVsQnRuSW1nLnNyYyA9IEltZzU7XG4gIGRlbEJ0bkltZy5hbHQgPSBcIkRlbGV0ZSBpY29uXCI7XG5cbiAgZGVsQnRuLmFwcGVuZENoaWxkKGRlbEJ0bkltZyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmNvbnN0IHJlbW92ZURlbGV0ZU9wdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWhlYWRlclwiKTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZWwtYnRuLWNvbnRhaW5lclwiKTtcblxuICBpZiAoaGVhZGVyLmNvbnRhaW5zKGRpdikpIHtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoZGl2KTtcbiAgfVxufTtcblxuY29uc3QgZGVsZXRlVGFzayA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tib3hcIik7XG4gIGNvbnN0IGRpc3BsYXlOb2RlcyA9IGRpc3BsYXkuY2hpbGROb2RlcztcblxuICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgaWYgKHRhc2suY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZ3JhbmRQYXJlbnQgPSB0YXNrLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgIGNvbnN0IHRhc2tJbmRleCA9IGdyYW5kUGFyZW50LmRhdGFzZXQubnVtO1xuXG4gICAgICB0YXNrQXJyYXkuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICBkaXNwbGF5LnJlbW92ZUNoaWxkKGRpc3BsYXlOb2Rlc1t0YXNrSW5kZXhdKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwbGF5Tm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGlzcGxheU5vZGVzW2ldLmRhdGFzZXQubnVtID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGlmIChkaXNwbGF5LnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgZW1wdHlJbmRpY2F0b3IoKTtcbiAgICByZW1vdmVEZWxldGVPcHRpb24oKTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgdGFza0JhcnMsXG4gIHRhc2tQYWdlLFxuICBzb3J0VGFza0JhcnMsXG4gIGFkZERlbGV0ZU9wdGlvbixcbiAgcmVtb3ZlRGVsZXRlT3B0aW9uLFxuICBkZWxldGVUYXNrLFxufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgcGFnZUxheW91dCwgdXBkYXRlTGlzdEFycmF5IH0gZnJvbSBcIi4vbGF5b3V0LmpzXCI7XG5pbXBvcnQge1xuICBtYWluQ29udGVudCxcbiAgZW1wdHlJbmRpY2F0b3IsXG4gIGNyZWF0ZUZvcm0sXG4gIGNoYW5nZUJ1dHRvbixcbiAgbmV3TGlzdEZvcm0sXG4gIGFkZFRpbWVPcHRpb24sXG4gIGFkZExpc3RPcHRpb24sXG4gIHByb2Nlc3NGb3JtLFxuICBtb2RpZnlUYXNrLFxuICBiYWNrQnV0dG9uQ29udHJvbGxlcixcbn0gZnJvbSBcIi4vbWFpbi1jb250ZW50LmpzXCI7XG5pbXBvcnQge1xuICBtYWluTWVudSxcbiAgcHJvamVjdExpc3QsXG4gIGZhdm9yaXRlc0xpc3QsXG4gIHRhc2tDb3VudCxcbiAgY2hhbmdlRmF2b3JpdGVzSW1hZ2UsXG4gIGNoYW5nZVByb2plY3RzSW1hZ2UsXG59IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCB7XG4gIHRhc2tCYXJzLFxuICB0YXNrUGFnZSxcbiAgc29ydFRhc2tCYXJzLFxuICBhZGREZWxldGVPcHRpb24sXG4gIHJlbW92ZURlbGV0ZU9wdGlvbixcbiAgZGVsZXRlVGFzayxcbn0gZnJvbSBcIi4vdGFzay1kaXNwbGF5LmpzXCI7XG5cbmZ1bmN0aW9uIGNvbXBvbmVudCgpIHtcbiAgLy8gR2VuZXJhdGUgaW5pdGlhbCBwYWdlIGxheW91dFxuICBwYWdlTGF5b3V0KCk7XG4gIG1haW5Db250ZW50KCk7XG4gIGVtcHR5SW5kaWNhdG9yKCk7XG5cbiAgZnVuY3Rpb24gZXZlbnRIYW5kbGVyKCkge1xuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnUtYnV0dG9uXCIpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc2VjdGlvblwiKTtcblxuICAgIC8vIFRvZ2dsZSB0aGUgTWFpbiBNZW51XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1tZW51XCIpO1xuXG4gICAgICBpZiAobWFpbi5jb250YWlucyhtZW51KSkge1xuICAgICAgICBtYWluLnJlbW92ZUNoaWxkKG1lbnUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFpbk1lbnUoKTtcbiAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoMlwiKTtcblxuICAgICAgLy8gVG9nZ2xlIFRvZGF5IG9yIFVwY29taW5nIHByb2plY3RzXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInRvZGF5LWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xuXG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG5cbiAgICAgICAgc29ydFRhc2tCYXJzKGJ0bik7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwidXBjb21pbmctYnRuXCIpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQ7XG5cbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVXBjb21pbmdcIjtcblxuICAgICAgICBzb3J0VGFza0JhcnMoYnRuKTtcbiAgICAgIH1cblxuICAgICAgLy8gVG9nZ2xlIEZhdm9yaXRlcyBhbmQgUHJvamVjdHMgbWVudSBjaG9pY2VzXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImZhdm9yaXRlcy1idG5cIikge1xuICAgICAgICBjb25zdCBmYXZvcml0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlc1wiKTtcblxuICAgICAgICBpZiAoZmF2b3JpdGVzLnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgICAgICAgZmF2b3JpdGVzTGlzdCgpO1xuICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICAgIGNoYW5nZUZhdm9yaXRlc0ltYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmF2b3JpdGVzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICBjaGFuZ2VGYXZvcml0ZXNJbWFnZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcbiAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZm9ybVwiKTtcblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJwcm9qZWN0cy1idG5cIikge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5cbiAgICAgICAgaWYgKHByb2plY3RzLnRleHRDb250ZW50ID09PSBcIlwiKSB7XG4gICAgICAgICAgcHJvamVjdExpc3QoKTtcbiAgICAgICAgICB0YXNrQ291bnQoKTtcbiAgICAgICAgICBjaGFuZ2VQcm9qZWN0c0ltYWdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIGNoYW5nZVByb2plY3RzSW1hZ2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkaXNwbGF5LmNvbnRhaW5zKGZvcm0pKSB7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFza0JhcnMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuICAgICAgY29uc3QgbGlzdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3QtZm9ybVwiKTtcblxuICAgICAgLy8gY3JlYXRlLCBzdWJtaXQgYW5kIHByb2Nlc3MgZm9ybXNcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZm9ybS1idG5cIikge1xuICAgICAgICByZW1vdmVEZWxldGVPcHRpb24oKTtcbiAgICAgICAgY3JlYXRlRm9ybSgpO1xuICAgICAgICBjaGFuZ2VCdXR0b24oZS50YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInN1Ym1pdC1idG5cIikge1xuICAgICAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IGZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuXG4gICAgICAgIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGxpc3RGb3JtKSB7XG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKGxpc3RGb3JtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgcHJvY2Vzc0Zvcm0oKTtcbiAgICAgICAgICBiYWNrQnV0dG9uQ29udHJvbGxlcigpO1xuICAgICAgICAgIHRhc2tCYXJzKCk7XG4gICAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICAgICAgY2hhbmdlQnV0dG9uKGUudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInNhdmUtYnRuXCIpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnVsbC10YXNrLWZvcm1cIik7XG4gICAgICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG5cbiAgICAgICAgaWYgKCFpc0Zvcm1WYWxpZCkge1xuICAgICAgICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2RpZnlUYXNrKCk7XG4gICAgICAgICAgYmFja0J1dHRvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgICB0YXNrQmFycygpO1xuICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICAgIGNoYW5nZUJ1dHRvbihlLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRpbWUgaW5wdXQgb3B0aW9uXG4gICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwiZGF0ZVwiICYmIGUudGFyZ2V0Lm5hbWUgPT09IFwiZGF0ZVwiKSB7XG4gICAgICAgIGFkZFRpbWVPcHRpb24oKTtcbiAgICAgIH1cblxuICAgICAgLy8gUmVtb3ZlIGZvcm0gZGlzcGxheSBvciBmdWxsLXRhc2sgZGlzcGxheVxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJiYWNrLWJ0blwiKSB7XG4gICAgICAgIGlmIChsaXN0Rm9ybSkge1xuICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQobGlzdEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgYmFja0J1dHRvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGFza0JhcnMoKTtcbiAgICAgICAgY2hhbmdlQnV0dG9uKGUudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgLy8gQ3JlYXRlIG5ldyBsaXN0IGZvcm1cbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImFkZC1wcm9qZWN0LWJ0blwiIHx8XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjcmVhdGUtbGlzdC1idG5cIlxuICAgICAgKSB7XG4gICAgICAgIG5ld0xpc3RGb3JtKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENhbmNlbCBuZXcgbGlzdCBmb3JtXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImNhbmNlbC1saXN0LWJ0blwiKSB7XG4gICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgbmV3IGxpc3Qgb3B0aW9uXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImFkZC1saXN0LWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGxpc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5saXN0LWZvcm1cIik7XG4gICAgICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gbGlzdEZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuXG4gICAgICAgIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICAgICAgICBsaXN0Rm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB1cGRhdGVMaXN0QXJyYXkoKTtcblxuICAgICAgICAgIGlmIChkaXNwbGF5LmNvbnRhaW5zKGZvcm0pKSB7XG4gICAgICAgICAgICBhZGRMaXN0T3B0aW9uKCk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgY2hhbmdlUHJvamVjdHNJbWFnZSgpO1xuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZCh3cmFwcGVyLmxhc3RDaGlsZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0c0ltYWdlKCk7XG4gICAgICAgICAgICB0YXNrQ291bnQoKTtcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTb3J0IHRhc2tzIGFjY29yZGluZyB0byB0aGUgY2xpY2tlZCBwcm9qZWN0IG9yIHByaW9yaXR5IGxpc3RcbiAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJ0YXNrLWJ0blwiIHx8IGUudGFyZ2V0LmlkID09PSBcInByaW9yaXR5LWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xuXG4gICAgICAgIHNvcnRUYXNrQmFycyhidG4pO1xuICAgICAgfVxuXG4gICAgICAvLyBEaXNwbGF5IGFsbCB0YXNrIGRldGFpbHNcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwidGFza1wiKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5udW07XG5cbiAgICAgICAgcmVtb3ZlRGVsZXRlT3B0aW9uKCk7XG4gICAgICAgIHRhc2tQYWdlKGluZGV4KTtcbiAgICAgICAgY2hhbmdlQnV0dG9uKGUudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVsZXRlIHRhc2tzXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImNoZWNrYm94XCIgJiYgZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBhZGREZWxldGVPcHRpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjaGVja2JveFwiICYmXG4gICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgcmVtb3ZlRGVsZXRlT3B0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZGVsLWJ0blwiKSB7XG4gICAgICAgIGRlbGV0ZVRhc2soKTtcbiAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZXZlbnRIYW5kbGVyKCk7XG59XG5jb21wb25lbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==