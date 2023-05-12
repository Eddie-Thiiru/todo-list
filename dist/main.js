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
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\n  height: 100%;\n  width: 100%;\n  padding: 15px;\n  position: relative;\n  grid-column: span 6;\n  display: grid;\n  grid-template-rows: 100px 1fr;\n}\n\n.task-display {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  /* Inroduce scroll bar\n  height: 596px;\n  overflow-y: auto; */\n}\n\n.empty-indicator {\n  position: absolute;\n  bottom: 50%;\n  align-self: center;\n}\n\n.task {\n  width: 100%;\n  height: 50px;\n  padding: 5px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.display-btn-container {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.back-btn-container,\n.del-btn-container {\n  align-self: center;\n}\n\n.wrapper button {\n  padding: 5px;\n  border: none;\n  border-radius: 50%;\n  display: grid;\n  justify-self: self-start;\n  align-items: center;\n}\n\n.task > div {\n  padding: 5px;\n  display: flex;\n  gap: 5px;\n}\n\n.task > div:nth-child(2) {\n  flex-direction: column;\n}\n\n.task > div:nth-of-type(2) {\n  margin-left: auto;\n}\n\n.task img {\n  height: 15px;\n  width: 15px;\n  align-self: center;\n}\n\n.back-btn img,\n.del-btn img,\n.create-list-btn img {\n  height: 30px;\n  width: 30px;\n}\n\n.empty-indicator img {\n  height: 100px;\n  width: 100px;\n}\n\n.wrapper button:hover {\n  background-color: gray;\n}\n", "",{"version":3,"sources":["webpack://./src/content.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT;;qBAEmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;;;EAGE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":[".wrapper {\n  height: 100%;\n  width: 100%;\n  padding: 15px;\n  position: relative;\n  grid-column: span 6;\n  display: grid;\n  grid-template-rows: 100px 1fr;\n}\n\n.task-display {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  /* Inroduce scroll bar\n  height: 596px;\n  overflow-y: auto; */\n}\n\n.empty-indicator {\n  position: absolute;\n  bottom: 50%;\n  align-self: center;\n}\n\n.task {\n  width: 100%;\n  height: 50px;\n  padding: 5px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.display-btn-container {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.back-btn-container,\n.del-btn-container {\n  align-self: center;\n}\n\n.wrapper button {\n  padding: 5px;\n  border: none;\n  border-radius: 50%;\n  display: grid;\n  justify-self: self-start;\n  align-items: center;\n}\n\n.task > div {\n  padding: 5px;\n  display: flex;\n  gap: 5px;\n}\n\n.task > div:nth-child(2) {\n  flex-direction: column;\n}\n\n.task > div:nth-of-type(2) {\n  margin-left: auto;\n}\n\n.task img {\n  height: 15px;\n  width: 15px;\n  align-self: center;\n}\n\n.back-btn img,\n.del-btn img,\n.create-list-btn img {\n  height: 30px;\n  width: 30px;\n}\n\n.empty-indicator img {\n  height: 100px;\n  width: 100px;\n}\n\n.wrapper button:hover {\n  background-color: gray;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/forms.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/forms.css ***!
  \*************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ".task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 3fr 50px 50px;\n  gap: 10px;\n}\n\n.pop-up {\n  background-color: aqua;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-self: center;\n}\n\n.full-task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 50px 3fr 50px 50px;\n  justify-items: center;\n}\n\n.task > form {\n  padding: 5px;\n}\n\n.task-form > div {\n  padding: 5px;\n}\n\n.full-task-form #task-title {\n  text-align: center;\n}\n\n.title-wrapper {\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.description-wrapper {\n  grid-column: 2 / 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.due-date-wrapper {\n  grid-column: 2 / 4;\n  grid-row: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.priority-wrapper {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 60px 140px;\n  align-items: center;\n}\n\n.list-wrapper {\n  grid-column: 3 / 4;\n  grid-row: 4 / 5;\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  align-items: center;\n}\n\n/* .title-wrapper input {\n    height: 30px;\n    display: flex;\n    align-items: center;\n  } */\n\n.date-container,\n.time-container {\n  display: grid;\n  grid-template-columns: 60px 140px;\n  align-items: center;\n}\n\n.full-task-form > div {\n  grid-column: 2 / 3;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.full-task-form .date-container,\n.full-task-form .time-container {\n  grid-template-columns: 80px 140px;\n}\n\n.full-task-form > div:nth-child(4) {\n  gap: 10px;\n}\n\n.list-wrapper > div {\n  display: grid;\n  grid-template-columns: 60px minmax(100px, 140px);\n  align-items: center;\n}\n\ninput,\ntextarea,\nselect {\n  height: 30px;\n  background-color: #ecf0f2;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n}\n\nlabel {\n  font-weight: 600;\n}\n\ntextarea {\n  resize: none;\n}\n\n.description > textarea,\n.description-wrapper > textarea {\n  height: 100%;\n  width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/forms.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,0CAA0C;EAC1C,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;;;;KAIK;;AAEL;;EAEE,aAAa;EACb,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,mBAAmB;AACrB;;AAEA;;;EAGE,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb","sourcesContent":[".task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 3fr 50px 50px;\n  gap: 10px;\n}\n\n.pop-up {\n  background-color: aqua;\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-self: center;\n}\n\n.full-task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 50px 3fr 50px 50px;\n  justify-items: center;\n}\n\n.task > form {\n  padding: 5px;\n}\n\n.task-form > div {\n  padding: 5px;\n}\n\n.full-task-form #task-title {\n  text-align: center;\n}\n\n.title-wrapper {\n  grid-column: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.description-wrapper {\n  grid-column: 2 / 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.due-date-wrapper {\n  grid-column: 2 / 4;\n  grid-row: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.priority-wrapper {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 60px 140px;\n  align-items: center;\n}\n\n.list-wrapper {\n  grid-column: 3 / 4;\n  grid-row: 4 / 5;\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  align-items: center;\n}\n\n/* .title-wrapper input {\n    height: 30px;\n    display: flex;\n    align-items: center;\n  } */\n\n.date-container,\n.time-container {\n  display: grid;\n  grid-template-columns: 60px 140px;\n  align-items: center;\n}\n\n.full-task-form > div {\n  grid-column: 2 / 3;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.full-task-form .date-container,\n.full-task-form .time-container {\n  grid-template-columns: 80px 140px;\n}\n\n.full-task-form > div:nth-child(4) {\n  gap: 10px;\n}\n\n.list-wrapper > div {\n  display: grid;\n  grid-template-columns: 60px minmax(100px, 140px);\n  align-items: center;\n}\n\ninput,\ntextarea,\nselect {\n  height: 30px;\n  background-color: #ecf0f2;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n}\n\nlabel {\n  font-weight: 600;\n}\n\ntextarea {\n  resize: none;\n}\n\n.description > textarea,\n.description-wrapper > textarea {\n  height: 100%;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  font-size: 1rem;\n  /* background-color: #ecf0f2; */\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px 4fr 100px;\n}\n\n.header {\n  grid-row: 1 / 2;\n  background-color: #ecf0f2;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-section {\n  grid-row: 2 / 3;\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n}\n\n.footer {\n  grid-row: 3 / 4;\n  padding: 10px;\n}\n\n.task-header {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.menu-button {\n  border: none;\n  display: grid;\n  align-items: center;\n}\n\n.header > div:nth-child(2) {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.header img {\n  height: 35px;\n  width: 40px;\n}\n\n.menu-button:hover {\n  background-color: grey;\n}\n\n.display-btn-container img,\n.del-btn-container img,\n.create-list-btn img,\n.add-project-btn img,\n.back-btn img {\n  pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/layout.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,0BAA0B;EAC1B,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;;;EAKE,oBAAoB;AACtB","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  font-size: 1rem;\n  /* background-color: #ecf0f2; */\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px 4fr 100px;\n}\n\n.header {\n  grid-row: 1 / 2;\n  background-color: #ecf0f2;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-section {\n  grid-row: 2 / 3;\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n}\n\n.footer {\n  grid-row: 3 / 4;\n  padding: 10px;\n}\n\n.task-header {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.menu-button {\n  border: none;\n  display: grid;\n  align-items: center;\n}\n\n.header > div:nth-child(2) {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.header img {\n  height: 35px;\n  width: 40px;\n}\n\n.menu-button:hover {\n  background-color: grey;\n}\n\n.display-btn-container img,\n.del-btn-container img,\n.create-list-btn img,\n.add-project-btn img,\n.back-btn img {\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".main-menu {\n  background-color: #ecf0f2;\n  padding: 15px 0px;\n  grid-column: span 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-items: center;\n}\n\n.main-menu button {\n  text-align: start;\n  border: none;\n  justify-self: flex-start;\n  align-self: center;\n  padding: 2px 10px;\n}\n\n.main-menu .add-project-btn {\n  padding: 0px;\n}\n\n.today-container,\n.upcoming-container {\n  padding: 5px 10px;\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  column-gap: 5px;\n}\n\n.fav-container,\n.proj-container {\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  grid-template-rows: auto;\n}\n\n.fav-container > div:nth-child(1),\n.proj-container > div:nth-child(1) {\n  padding: 5px 10px;\n  grid-column: 1 / 4;\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  column-gap: 5px;\n}\n\n.favorites,\n.projects {\n  grid-column: 2 / 4;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n}\n\n.favorites > div,\n.projects > div {\n  padding: 5px;\n  border-radius: 5px 0px 0px 5px;\n  display: grid;\n  grid-template-columns: 20px 3fr 1fr;\n  align-items: center;\n}\n\n.favorites > div > img,\n.projects > div > img {\n  height: 15px;\n  width: 15px;\n}\n\n.today-container > img,\n.upcoming-container > img,\n.fav-container img,\n.proj-container img {\n  height: 30px;\n  width: 30px;\n}\n\n.add-project-btn {\n  height: 30px;\n  width: 30px;\n  justify-self: end;\n}\n\n[class*=\"count\"] {\n  text-align: end;\n}\n\n.today-container:hover,\n.upcoming-container:hover,\n.fav-wrapper:hover,\n.proj-wrapper:hover {\n  background-color: aqua;\n}\n\n.today-container:hover .today-btn,\n.upcoming-container:hover .upcoming-btn,\n.fav-wrapper:hover .favorites-btn,\n.proj-wrapper:hover .projects-btn,\n.proj-wrapper:hover .add-project-btn {\n  background-color: aqua;\n}\n\n.favorites > div:hover,\n.projects > div:hover,\n.favorites > div:hover button,\n.projects > div:hover button {\n  background-color: chocolate;\n}\n\n.main-menu button:hover {\n  font-weight: 700;\n}\n", "",{"version":3,"sources":["webpack://./src/nav.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;EACzB,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,wBAAwB;EACxB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,iBAAiB;EACjB,aAAa;EACb,oCAAoC;EACpC,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,oCAAoC;EACpC,wBAAwB;AAC1B;;AAEA;;EAEE,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,oCAAoC;EACpC,eAAe;AACjB;;AAEA;;EAEE,kBAAkB;EAClB,aAAa;EACb,kCAAkC;AACpC;;AAEA;;EAEE,YAAY;EACZ,8BAA8B;EAC9B,aAAa;EACb,mCAAmC;EACnC,mBAAmB;AACrB;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb;;AAEA;;;;EAIE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;;;;EAIE,sBAAsB;AACxB;;AAEA;;;;;EAKE,sBAAsB;AACxB;;AAEA;;;;EAIE,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".main-menu {\n  background-color: #ecf0f2;\n  padding: 15px 0px;\n  grid-column: span 1;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  justify-items: center;\n}\n\n.main-menu button {\n  text-align: start;\n  border: none;\n  justify-self: flex-start;\n  align-self: center;\n  padding: 2px 10px;\n}\n\n.main-menu .add-project-btn {\n  padding: 0px;\n}\n\n.today-container,\n.upcoming-container {\n  padding: 5px 10px;\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  column-gap: 5px;\n}\n\n.fav-container,\n.proj-container {\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  grid-template-rows: auto;\n}\n\n.fav-container > div:nth-child(1),\n.proj-container > div:nth-child(1) {\n  padding: 5px 10px;\n  grid-column: 1 / 4;\n  display: grid;\n  grid-template-columns: 35px 3fr 35px;\n  column-gap: 5px;\n}\n\n.favorites,\n.projects {\n  grid-column: 2 / 4;\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n}\n\n.favorites > div,\n.projects > div {\n  padding: 5px;\n  border-radius: 5px 0px 0px 5px;\n  display: grid;\n  grid-template-columns: 20px 3fr 1fr;\n  align-items: center;\n}\n\n.favorites > div > img,\n.projects > div > img {\n  height: 15px;\n  width: 15px;\n}\n\n.today-container > img,\n.upcoming-container > img,\n.fav-container img,\n.proj-container img {\n  height: 30px;\n  width: 30px;\n}\n\n.add-project-btn {\n  height: 30px;\n  width: 30px;\n  justify-self: end;\n}\n\n[class*=\"count\"] {\n  text-align: end;\n}\n\n.today-container:hover,\n.upcoming-container:hover,\n.fav-wrapper:hover,\n.proj-wrapper:hover {\n  background-color: aqua;\n}\n\n.today-container:hover .today-btn,\n.upcoming-container:hover .upcoming-btn,\n.fav-wrapper:hover .favorites-btn,\n.proj-wrapper:hover .projects-btn,\n.proj-wrapper:hover .add-project-btn {\n  background-color: aqua;\n}\n\n.favorites > div:hover,\n.projects > div:hover,\n.favorites > div:hover button,\n.projects > div:hover button {\n  background-color: chocolate;\n}\n\n.main-menu button:hover {\n  font-weight: 700;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/forms.css":
/*!***********************!*\
  !*** ./src/forms.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./forms.css */ "./node_modules/css-loader/dist/cjs.js!./src/forms.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_forms_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _forms_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.css */ "./src/forms.css");
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/layout.js");
/* harmony import */ var _images_add_task_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/add-task.svg */ "./src/images/add-task.svg");
/* harmony import */ var _images_back_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/back.svg */ "./src/images/back.svg");
/* harmony import */ var _images_add_list_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/add-list.svg */ "./src/images/add-list.svg");
/* harmony import */ var _images_save_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/save.svg */ "./src/images/save.svg");
/* harmony import */ var _images_calendar_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/calendar.svg */ "./src/images/calendar.svg");









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
  btnImg.src = _images_add_task_svg__WEBPACK_IMPORTED_MODULE_3__;
  btnImg.alt = "Plus icon";
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
  img.src = _images_calendar_svg__WEBPACK_IMPORTED_MODULE_7__;
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
  const backBtnContainer = document.createElement("div");
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
  backBtnContainer.classList.add("back-btn-container");
  backBtn.type = "button";
  backBtn.classList.add("back-btn");
  backBtnImg.src = _images_back_svg__WEBPACK_IMPORTED_MODULE_4__;
  backBtnImg.alt = "Back arrow icon";
  taskLabel.htmlFor = "task-title";
  taskLabel.textContent = "Task name";
  descriptionLabel.htmlFor = "description";
  descriptionLabel.textContent = "What is to be done?";
  dueDateLabel.htmlFor = "date";
  dueDateLabel.textContent = "Date";
  priorityLabel.htmlFor = "priority";
  priorityLabel.textContent = "Priority";
  submitLabel.htmlFor = "list";
  submitLabel.textContent = "List";
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
  createListImg.src = _images_add_list_svg__WEBPACK_IMPORTED_MODULE_5__;
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
  for (let i = 0; i < _layout__WEBPACK_IMPORTED_MODULE_2__.listArray.length; i++) {
    const submitOption = document.createElement("option");

    submitOption.value = _layout__WEBPACK_IMPORTED_MODULE_2__.listArray[i];
    submitOption.textContent = _layout__WEBPACK_IMPORTED_MODULE_2__.listArray[i];

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
  backBtnContainer.appendChild(backBtn);
  form.appendChild(taskContainer);
  form.appendChild(descriptionContainer);
  form.appendChild(dueDateContainer);
  form.appendChild(priorityDiv);
  form.appendChild(submitContainer);
  header.appendChild(backBtnContainer);
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
    btnImg.src = _images_save_svg__WEBPACK_IMPORTED_MODULE_6__;
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
    btnImg.src = _images_add_task_svg__WEBPACK_IMPORTED_MODULE_3__;
    btnImg.alt = "Add circle icon";

    btn.appendChild(btnImg);
    btnContainer.appendChild(btn);
  } else {
    const btn = document.createElement("button");
    const btnImg = new Image();

    btn.type = "button";
    btn.classList.add("save-btn");
    btnImg.src = _images_save_svg__WEBPACK_IMPORTED_MODULE_6__;
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

  listForm.classList.add("pop-up");
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
    label.textContent = "Time";
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
  const child = document.querySelector(".back-btn-container");

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
  favWrapper.classList.add("fav-wrapper");
  projContainer.classList.add("proj-container");
  projWrapper.classList.add("proj-wrapper");
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
  priorityOne.textContent = "Critical Priority";
  priorityTwo.classList.add("high-btn");
  priorityTwo.id = "priority-btn";
  priorityTwo.textContent = "High Priority";
  priorityThree.classList.add("normal-btn");
  priorityThree.id = "priority-btn";
  priorityThree.textContent = "Normal Priority";
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
/* harmony import */ var _forms_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.css */ "./src/forms.css");
/* harmony import */ var _images_personal_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/personal.svg */ "./src/images/personal.svg");
/* harmony import */ var _images_work_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/work.svg */ "./src/images/work.svg");
/* harmony import */ var _images_shopping_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/shopping.svg */ "./src/images/shopping.svg");
/* harmony import */ var _images_new_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/new.svg */ "./src/images/new.svg");
/* harmony import */ var _images_delete_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg");
/* harmony import */ var _images_back_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/back.svg */ "./src/images/back.svg");










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
        img.src = _images_personal_svg__WEBPACK_IMPORTED_MODULE_3__;
        img.alt = "Person icon";
      } else if (listChoice === "work") {
        img.src = _images_work_svg__WEBPACK_IMPORTED_MODULE_4__;
        img.alt = "Briefcase icon";
      } else if (listChoice === "shopping") {
        img.src = _images_shopping_svg__WEBPACK_IMPORTED_MODULE_5__;
        img.alt = "Shopping cart icon";
      } else {
        img.src = _images_new_svg__WEBPACK_IMPORTED_MODULE_6__;
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
  const backBtnContainer = document.createElement("div");
  const backBtn = document.createElement("button");
  const backBtnImg = new Image();

  form.classList.add("full-task-form");
  form.dataset.num = taskIndex;
  descriptionContainer.classList.add("description");
  dateContainer.classList.add("date-container");
  timeContainer.classList.add("time-container");
  backBtnContainer.classList.add("back-btn-container");
  titleLabel.htmlFor = "task-title";
  // titleLabel.textContent = "Name";
  descriptionLabel.htmlFor = "description";
  dateLabel.htmlFor = "date";
  dateLabel.textContent = "Due Date";
  timeLabel.htmlFor = "time";
  timeLabel.textContent = "Due Time";
  priorityLabel.htmlFor = "priority";
  // priorityLabel.textContent = "Priority";
  listSelectLabel.htmlFor = "list";
  backBtn.type = "button";
  backBtn.classList.add("back-btn");
  backBtnImg.src = _images_back_svg__WEBPACK_IMPORTED_MODULE_8__;
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
  backBtnContainer.appendChild(backBtn);
  header.appendChild(backBtnContainer);
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
  delBtnImg.src = _images_delete_svg__WEBPACK_IMPORTED_MODULE_7__;
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

module.exports = __webpack_require__.p + "c8b39a336d92d4c5c69f.svg";

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

module.exports = __webpack_require__.p + "71eb003d9468e9c32eb2.svg";

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
      const listForm = document.querySelector(".pop-up");

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
        const listForm = document.querySelector(".pop-up");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGlEQUFHO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLDZDQUFJO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBYUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pVeUM7QUFDeEI7QUFDa0I7QUFDQTtBQUNJO0FBQ0c7QUFDQTtBQUNIO0FBQ0o7QUFDRTtBQUNFO0FBQ0o7QUFDSztBQUNMO0FBQ0s7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jb250ZW50LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sYXlvdXQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9uYXYuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRlbnQuY3NzP2MzNDciLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm1zLmNzcz83ZGQyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sYXlvdXQuY3NzP2VhZWMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25hdi5jc3M/MjBhNyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21haW4tY29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay1kaXNwbGF5LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIud3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLWNvbHVtbjogc3BhbiA2O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcbn1cXG5cXG4udGFzay1kaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogSW5yb2R1Y2Ugc2Nyb2xsIGJhclxcbiAgaGVpZ2h0OiA1OTZweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87ICovXFxufVxcblxcbi5lbXB0eS1pbmRpY2F0b3Ige1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXNwbGF5LWJ0bi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBib3R0b206IDEwcHg7XFxufVxcblxcbi5iYWNrLWJ0bi1jb250YWluZXIsXFxuLmRlbC1idG4tY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLndyYXBwZXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LXNlbGY6IHNlbGYtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzayA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi50YXNrID4gZGl2Om50aC1jaGlsZCgyKSB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzayA+IGRpdjpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLnRhc2sgaW1nIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uYmFjay1idG4gaW1nLFxcbi5kZWwtYnRuIGltZyxcXG4uY3JlYXRlLWxpc3QtYnRuIGltZyB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLmVtcHR5LWluZGljYXRvciBpbWcge1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLndyYXBwZXIgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb250ZW50LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVDs7cUJBRW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTs7O0VBR0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLndyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwMHB4IDFmcjtcXG59XFxuXFxuLnRhc2stZGlzcGxheSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIC8qIElucm9kdWNlIHNjcm9sbCBiYXJcXG4gIGhlaWdodDogNTk2cHg7XFxuICBvdmVyZmxvdy15OiBhdXRvOyAqL1xcbn1cXG5cXG4uZW1wdHktaW5kaWNhdG9yIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4udGFzayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGlzcGxheS1idG4tY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uYmFjay1idG4tY29udGFpbmVyLFxcbi5kZWwtYnRuLWNvbnRhaW5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi53cmFwcGVyIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1zZWxmOiBzZWxmLXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sgPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4udGFzayA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnRhc2sgPiBkaXY6bnRoLW9mLXR5cGUoMikge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcbi50YXNrIGltZyB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmJhY2stYnRuIGltZyxcXG4uZGVsLWJ0biBpbWcsXFxuLmNyZWF0ZS1saXN0LWJ0biBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5lbXB0eS1pbmRpY2F0b3IgaW1nIHtcXG4gIGhlaWdodDogMTAwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi53cmFwcGVyIGJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGFzay1mb3JtIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciA1MHB4IDUwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5wb3AtdXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDUwcHggM2ZyIDUwcHggNTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2sgPiBmb3JtIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRhc2stZm9ybSA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSAjdGFzay10aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZS13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24td3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmR1ZS1kYXRlLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuLnByaW9yaXR5LXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5saXN0LXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAudGl0bGUtd3JhcHBlciBpbnB1dCB7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH0gKi9cXG5cXG4uZGF0ZS1jb250YWluZXIsXFxuLnRpbWUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMTQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gPiBkaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtIC5kYXRlLWNvbnRhaW5lcixcXG4uZnVsbC10YXNrLWZvcm0gLnRpbWUtY29udGFpbmVyIHtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCAxNDBweDtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtID4gZGl2Om50aC1jaGlsZCg0KSB7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5saXN0LXdyYXBwZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCBtaW5tYXgoMTAwcHgsIDE0MHB4KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5kZXNjcmlwdGlvbiA+IHRleHRhcmVhLFxcbi5kZXNjcmlwdGlvbi13cmFwcGVyID4gdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9mb3Jtcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxxQ0FBcUM7RUFDckMsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGtDQUFrQztFQUNsQywwQ0FBMEM7RUFDMUMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLCtCQUErQjtFQUMvQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7S0FJSzs7QUFFTDs7RUFFRSxhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBOztFQUVFLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixnREFBZ0Q7RUFDaEQsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRhc2stZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgNTBweCA1MHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ucG9wLXVwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1MHB4IDNmciA1MHB4IDUwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrID4gZm9ybSB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50YXNrLWZvcm0gPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gI3Rhc2stdGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGl0bGUtd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kdWUtZGF0ZS13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcmlvcml0eS13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMTQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLyogLnRpdGxlLXdyYXBwZXIgaW5wdXQge1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9ICovXFxuXFxuLmRhdGUtY29udGFpbmVyLFxcbi50aW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDE0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtID4gZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSAuZGF0ZS1jb250YWluZXIsXFxuLmZ1bGwtdGFzay1mb3JtIC50aW1lLWNvbnRhaW5lciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMTQwcHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSA+IGRpdjpudGgtY2hpbGQoNCkge1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGlzdC13cmFwcGVyID4gZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggbWlubWF4KDEwMHB4LCAxNDBweCk7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5pbnB1dCxcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiB0ZXh0YXJlYSxcXG4uZGVzY3JpcHRpb24td3JhcHBlciA+IHRleHRhcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYyOyAqL1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCA0ZnIgMTAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tc2VjdGlvbiB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4ubWVudS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmRpc3BsYXktYnRuLWNvbnRhaW5lciBpbWcsXFxuLmRlbC1idG4tY29udGFpbmVyIGltZyxcXG4uY3JlYXRlLWxpc3QtYnRuIGltZyxcXG4uYWRkLXByb2plY3QtYnRuIGltZyxcXG4uYmFjay1idG4gaW1nIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF5b3V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7OztFQUtFLG9CQUFvQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYyOyAqL1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCA0ZnIgMTAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tc2VjdGlvbiB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhc2staGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi5tZW51LWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciA+IGRpdjpudGgtY2hpbGQoMikge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5oZWFkZXIgaW1nIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4ubWVudS1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLmRpc3BsYXktYnRuLWNvbnRhaW5lciBpbWcsXFxuLmRlbC1idG4tY29udGFpbmVyIGltZyxcXG4uY3JlYXRlLWxpc3QtYnRuIGltZyxcXG4uYWRkLXByb2plY3QtYnRuIGltZyxcXG4uYmFjay1idG4gaW1nIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbi1tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjI7XFxuICBwYWRkaW5nOiAxNXB4IDBweDtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tbWVudSBidXR0b24ge1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG59XFxuXFxuLm1haW4tbWVudSAuYWRkLXByb2plY3QtYnRuIHtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lcixcXG4udXBjb21pbmctY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAzZnIgMzVweDtcXG4gIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmZhdi1jb250YWluZXIsXFxuLnByb2otY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcblxcbi5mYXYtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSxcXG4ucHJvai1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAzZnIgMzVweDtcXG4gIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmZhdm9yaXRlcyxcXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXYsXFxuLnByb2plY3RzID4gZGl2IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggM2ZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXYgPiBpbWcsXFxuLnByb2plY3RzID4gZGl2ID4gaW1nIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyID4gaW1nLFxcbi51cGNvbWluZy1jb250YWluZXIgPiBpbWcsXFxuLmZhdi1jb250YWluZXIgaW1nLFxcbi5wcm9qLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuW2NsYXNzKj1cXFwiY291bnRcXFwiXSB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi50b2RheS1jb250YWluZXI6aG92ZXIsXFxuLnVwY29taW5nLWNvbnRhaW5lcjpob3ZlcixcXG4uZmF2LXdyYXBwZXI6aG92ZXIsXFxuLnByb2otd3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyOmhvdmVyIC50b2RheS1idG4sXFxuLnVwY29taW5nLWNvbnRhaW5lcjpob3ZlciAudXBjb21pbmctYnRuLFxcbi5mYXYtd3JhcHBlcjpob3ZlciAuZmF2b3JpdGVzLWJ0bixcXG4ucHJvai13cmFwcGVyOmhvdmVyIC5wcm9qZWN0cy1idG4sXFxuLnByb2otd3JhcHBlcjpob3ZlciAuYWRkLXByb2plY3QtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXY6aG92ZXIsXFxuLnByb2plY3RzID4gZGl2OmhvdmVyLFxcbi5mYXZvcml0ZXMgPiBkaXY6aG92ZXIgYnV0dG9uLFxcbi5wcm9qZWN0cyA+IGRpdjpob3ZlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xcbn1cXG5cXG4ubWFpbi1tZW51IGJ1dHRvbjpob3ZlciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbmF2LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQ0FBbUM7RUFDbkMsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7Ozs7RUFJRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7O0VBSUUsc0JBQXNCO0FBQ3hCOztBQUVBOzs7OztFQUtFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7OztFQUlFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbi1tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjI7XFxuICBwYWRkaW5nOiAxNXB4IDBweDtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tbWVudSBidXR0b24ge1xcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBqdXN0aWZ5LXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAycHggMTBweDtcXG59XFxuXFxuLm1haW4tbWVudSAuYWRkLXByb2plY3QtYnRuIHtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lcixcXG4udXBjb21pbmctY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAzZnIgMzVweDtcXG4gIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmZhdi1jb250YWluZXIsXFxuLnByb2otY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxufVxcblxcbi5mYXYtY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSxcXG4ucHJvai1jb250YWluZXIgPiBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzVweCAzZnIgMzVweDtcXG4gIGNvbHVtbi1nYXA6IDVweDtcXG59XFxuXFxuLmZhdm9yaXRlcyxcXG4ucHJvamVjdHMge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXYsXFxuLnByb2plY3RzID4gZGl2IHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwcHggM2ZyIDFmcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXYgPiBpbWcsXFxuLnByb2plY3RzID4gZGl2ID4gaW1nIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyID4gaW1nLFxcbi51cGNvbWluZy1jb250YWluZXIgPiBpbWcsXFxuLmZhdi1jb250YWluZXIgaW1nLFxcbi5wcm9qLWNvbnRhaW5lciBpbWcge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idG4ge1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG59XFxuXFxuW2NsYXNzKj1cXFwiY291bnRcXFwiXSB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxufVxcblxcbi50b2RheS1jb250YWluZXI6aG92ZXIsXFxuLnVwY29taW5nLWNvbnRhaW5lcjpob3ZlcixcXG4uZmF2LXdyYXBwZXI6aG92ZXIsXFxuLnByb2otd3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyOmhvdmVyIC50b2RheS1idG4sXFxuLnVwY29taW5nLWNvbnRhaW5lcjpob3ZlciAudXBjb21pbmctYnRuLFxcbi5mYXYtd3JhcHBlcjpob3ZlciAuZmF2b3JpdGVzLWJ0bixcXG4ucHJvai13cmFwcGVyOmhvdmVyIC5wcm9qZWN0cy1idG4sXFxuLnByb2otd3JhcHBlcjpob3ZlciAuYWRkLXByb2plY3QtYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxufVxcblxcbi5mYXZvcml0ZXMgPiBkaXY6aG92ZXIsXFxuLnByb2plY3RzID4gZGl2OmhvdmVyLFxcbi5mYXZvcml0ZXMgPiBkaXY6aG92ZXIgYnV0dG9uLFxcbi5wcm9qZWN0cyA+IGRpdjpob3ZlciBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY2hvY29sYXRlO1xcbn1cXG5cXG4ubWFpbi1tZW51IGJ1dHRvbjpob3ZlciB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250ZW50LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3Jtcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbGF5b3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL2xheW91dC5jc3NcIjtcbmltcG9ydCBJbWcgZnJvbSBcIi4vaW1hZ2VzL21lbnUuc3ZnXCI7XG5pbXBvcnQgSW1nMiBmcm9tIFwiLi9pbWFnZXMvY2F0LnN2Z1wiO1xuaW1wb3J0IEltZzMgZnJvbSBcIi4vaW1hZ2VzL2JlbGwuc3ZnXCI7XG5pbXBvcnQgSW1nNCBmcm9tIFwiLi9pbWFnZXMvaGVscC5zdmdcIjtcblxuY29uc3QgbGlzdEFycmF5ID0gW1wicGVyc29uYWxcIiwgXCJ3b3JrXCIsIFwic2hvcHBpbmdcIl07XG5jb25zdCBwcmlvcml0eUFycmF5ID0gW1wiY3JpdGljYWxcIiwgXCJoaWdoXCIsIFwibm9ybWFsXCJdO1xuXG5jb25zdCBwYWdlTGF5b3V0ID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBtZW51SW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9maWxlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGJlbGxJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgaGVscEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuICBtYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluLXNlY3Rpb25cIik7XG4gIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuICBtZW51SW1nLnNyYyA9IEltZztcbiAgbWVudUltZy5hbHQgPSBcIm1lbnUgaWNvblwiO1xuICBtZW51QnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51LWJ1dHRvblwiKTtcbiAgcHJvZmlsZUltZy5zcmMgPSBJbWcyO1xuICBwcm9maWxlSW1nLmFsdCA9IFwiQSBjYXQgaWNvblwiO1xuICBiZWxsSW1nLnNyYyA9IEltZzM7XG4gIGJlbGxJbWcuYWx0ID0gXCJBIGJlbGwgaWNvblwiO1xuICBoZWxwSW1nLnNyYyA9IEltZzQ7XG4gIGhlbHBJbWcuYWx0ID0gXCJBIHF1ZXN0aW9uIG1hcmsgaWNvblwiO1xuXG4gIG1lbnVCdXR0b24uYXBwZW5kQ2hpbGQobWVudUltZyk7XG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQoaGVscEltZyk7XG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQoYmVsbEltZyk7XG4gIHByb2ZpbGUuYXBwZW5kQ2hpbGQocHJvZmlsZUltZyk7XG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2ZpbGUpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUxpc3RBcnJheSA9ICgpID0+IHtcbiAgY29uc3QgbmV3TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWxpc3RcIikudmFsdWU7XG4gIGxpc3RBcnJheS5wdXNoKG5ld0xpc3QpO1xufTtcblxuZXhwb3J0IHsgbGlzdEFycmF5LCBwcmlvcml0eUFycmF5LCBwYWdlTGF5b3V0LCB1cGRhdGVMaXN0QXJyYXkgfTtcbiIsImltcG9ydCBcIi4vY29udGVudC5jc3NcIjtcbmltcG9ydCBcIi4vZm9ybXMuY3NzXCI7XG5pbXBvcnQgeyBsaXN0QXJyYXkgfSBmcm9tIFwiLi9sYXlvdXRcIjtcbmltcG9ydCBJbWcgZnJvbSBcIi4vaW1hZ2VzL2FkZC10YXNrLnN2Z1wiO1xuaW1wb3J0IEltZzIgZnJvbSBcIi4vaW1hZ2VzL2JhY2suc3ZnXCI7XG5pbXBvcnQgSW1nMyBmcm9tIFwiLi9pbWFnZXMvYWRkLWxpc3Quc3ZnXCI7XG5pbXBvcnQgSW1nNCBmcm9tIFwiLi9pbWFnZXMvc2F2ZS5zdmdcIjtcbmltcG9ydCBJbWc1IGZyb20gXCIuL2ltYWdlcy9jYWxlbmRhci5zdmdcIjtcblxuY29uc3QgdGFza0FycmF5ID0gW107XG5cbmNvbnN0IG1haW5Db250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc2VjdGlvblwiKTtcblxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0Rpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBidG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ3cmFwcGVyXCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRhc2staGVhZGVyXCIpO1xuICB0YXNrRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwidGFzay1kaXNwbGF5XCIpO1xuICBidG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktYnRuLWNvbnRhaW5lclwiKTtcbiAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBidG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIpO1xuICBidG5JbWcuc3JjID0gSW1nO1xuICBidG5JbWcuYWx0ID0gXCJQbHVzIGljb25cIjtcbiAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gIGJ0bi5hcHBlbmRDaGlsZChidG5JbWcpO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5KTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG59O1xuXG5jb25zdCBlbXB0eUluZGljYXRvciA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZW1wdHktaW5kaWNhdG9yXCIpO1xuICBpbWcuc3JjID0gSW1nNTtcbiAgaW1nLmFsdCA9IFwiZW1wdHkgaW1hZ2VcIjtcbiAgcGFyYS50ZXh0Q29udGVudCA9IFwiTm90aGluZyB0byBkb1wiO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYSk7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWhlYWRlclwiKTtcblxuICBkaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAvLyBjcmVhdGUgZm9ybSBpbnB1dHNcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgY29uc3QgZHVlRGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgYmFja0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBiYWNrQnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgLy8gY3JlYXRlIGZvcm0gc2VsZWN0aW9uc1xuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBzdWJtaXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJtaXRTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBzdWJtaXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3Qgc3VibWl0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBwcmlvcml0eU9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBjb25zdCBwcmlvcml0eU9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBjb25zdCBwcmlvcml0eU9wdGlvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICBjb25zdCBjcmVhdGVMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgY3JlYXRlTGlzdEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIC8vQWRkIGF0dHJpYnV0ZXNcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwidGFzay1mb3JtXCIpO1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS13cmFwcGVyXCIpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb24td3JhcHBlclwiKTtcbiAgZHVlRGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGUtd3JhcHBlclwiKTtcbiAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LXdyYXBwZXJcIik7XG4gIHN1Ym1pdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdC13cmFwcGVyXCIpO1xuICBkYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNvbnRhaW5lclwiKTtcbiAgYmFja0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYmFjay1idG4tY29udGFpbmVyXCIpO1xuICBiYWNrQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBiYWNrQnRuLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWJ0blwiKTtcbiAgYmFja0J0bkltZy5zcmMgPSBJbWcyO1xuICBiYWNrQnRuSW1nLmFsdCA9IFwiQmFjayBhcnJvdyBpY29uXCI7XG4gIHRhc2tMYWJlbC5odG1sRm9yID0gXCJ0YXNrLXRpdGxlXCI7XG4gIHRhc2tMYWJlbC50ZXh0Q29udGVudCA9IFwiVGFzayBuYW1lXCI7XG4gIGRlc2NyaXB0aW9uTGFiZWwuaHRtbEZvciA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiV2hhdCBpcyB0byBiZSBkb25lP1wiO1xuICBkdWVEYXRlTGFiZWwuaHRtbEZvciA9IFwiZGF0ZVwiO1xuICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcbiAgcHJpb3JpdHlMYWJlbC5odG1sRm9yID0gXCJwcmlvcml0eVwiO1xuICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICBzdWJtaXRMYWJlbC5odG1sRm9yID0gXCJsaXN0XCI7XG4gIHN1Ym1pdExhYmVsLnRleHRDb250ZW50ID0gXCJMaXN0XCI7XG4gIGR1ZURhdGVJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gIHRhc2tJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gIHRhc2tJbnB1dC5uYW1lID0gXCJ0aXRsZVwiO1xuICB0YXNrSW5wdXQuaWQgPSBcInRhc2stdGl0bGVcIjtcbiAgdGFza0lucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGVzY3JpcHRpb25JbnB1dC5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbklucHV0LmlkID0gXCJkZXNjcmlwdGlvblwiO1xuICBkdWVEYXRlSW5wdXQubmFtZSA9IFwiZGF0ZVwiO1xuICBkdWVEYXRlSW5wdXQuaWQgPSBcImRhdGVcIjtcbiAgcHJpb3JpdHlJbnB1dC5uYW1lID0gXCJwcmlvcml0eVwiO1xuICBwcmlvcml0eUlucHV0LmlkID0gXCJwcmlvcml0eVwiO1xuICBjcmVhdGVMaXN0QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBjcmVhdGVMaXN0QnRuLmNsYXNzTGlzdC5hZGQoXCJjcmVhdGUtbGlzdC1idG5cIik7XG4gIGNyZWF0ZUxpc3RJbWcuc3JjID0gSW1nMztcbiAgY3JlYXRlTGlzdEltZy5hbHQgPSBcIkFkZCBsaXN0IGljb25cIjtcbiAgc3VibWl0SW5wdXQubmFtZSA9IFwibGlzdFwiO1xuICBzdWJtaXRJbnB1dC5pZCA9IFwibGlzdFwiO1xuICBwcmlvcml0eU9wdGlvbjEudmFsdWUgPSBcImNyaXRpY2FsXCI7XG4gIHByaW9yaXR5T3B0aW9uMS50ZXh0Q29udGVudCA9IFwiQ3JpdGljYWxcIjtcbiAgcHJpb3JpdHlPcHRpb24yLnZhbHVlID0gXCJoaWdoXCI7XG4gIHByaW9yaXR5T3B0aW9uMi50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICBwcmlvcml0eU9wdGlvbjMudmFsdWUgPSBcIm5vcm1hbFwiO1xuICBwcmlvcml0eU9wdGlvbjMudGV4dENvbnRlbnQgPSBcIk5vcm1hbFwiO1xuXG4gIC8vIER5bmFtaWNhbGx5IGFkZCBsaXN0IG9wdGlvbnMuIFdoZW4gdGhlIHVzZXIgYWRkcyBhIG5ldyBsaXN0LFxuICAvLyB0aGUgbmV3IGxpc3Qgd2lsbCBiZSBwcmVzZW50IGluIHRoZSBuZXh0IGZvcm0uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3VibWl0T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgIHN1Ym1pdE9wdGlvbi52YWx1ZSA9IGxpc3RBcnJheVtpXTtcbiAgICBzdWJtaXRPcHRpb24udGV4dENvbnRlbnQgPSBsaXN0QXJyYXlbaV07XG5cbiAgICBzdWJtaXRJbnB1dC5hcHBlbmRDaGlsZChzdWJtaXRPcHRpb24pO1xuICB9XG5cbiAgLy8gQXBwZW5kIG5vZGVzXG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24xKTtcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbjIpO1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uMyk7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKTtcbiAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlSW5wdXQpO1xuICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gIHN1Ym1pdFNlbGVjdC5hcHBlbmRDaGlsZChzdWJtaXRMYWJlbCk7XG4gIHN1Ym1pdFNlbGVjdC5hcHBlbmRDaGlsZChzdWJtaXRJbnB1dCk7XG4gIGNyZWF0ZUxpc3RCdG4uYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdEltZyk7XG4gIHN1Ym1pdENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXRTZWxlY3QpO1xuICBzdWJtaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGlzdEJ0bik7XG4gIGR1ZURhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG4gIGJhY2tCdG4uYXBwZW5kQ2hpbGQoYmFja0J0bkltZyk7XG4gIGJhY2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYmFja0J0bik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVDb250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcbiAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXRDb250YWluZXIpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYmFja0J0bkNvbnRhaW5lcik7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQoZm9ybSk7XG59O1xuXG5jb25zdCBjaGFuZ2VCdXR0b24gPSAoZWxlKSA9PiB7XG4gIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheS1idG4tY29udGFpbmVyXCIpO1xuXG4gIGJ0bkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgaWYgKGVsZS5jbGFzc05hbWUgPT09IFwiZm9ybS1idG5cIikge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgYnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzdWJtaXQtYnRuXCIpO1xuICAgIGJ0bkltZy5zcmMgPSBJbWc0O1xuICAgIGJ0bkltZy5hbHQgPSBcIkNoZWNrIGNpcmNsZSBpY29uXCI7XG5cbiAgICBidG4uYXBwZW5kQ2hpbGQoYnRuSW1nKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgfSBlbHNlIGlmIChcbiAgICBlbGUuY2xhc3NOYW1lID09PSBcInN1Ym1pdC1idG5cIiB8fFxuICAgIGVsZS5jbGFzc05hbWUgPT09IFwiYmFjay1idG5cIiB8fFxuICAgIGVsZS5jbGFzc05hbWUgPT09IFwic2F2ZS1idG5cIlxuICApIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1idG5cIik7XG4gICAgYnRuSW1nLnNyYyA9IEltZztcbiAgICBidG5JbWcuYWx0ID0gXCJBZGQgY2lyY2xlIGljb25cIjtcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChidG5JbWcpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgYnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICBidG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJzYXZlLWJ0blwiKTtcbiAgICBidG5JbWcuc3JjID0gSW1nNDtcbiAgICBidG5JbWcuYWx0ID0gXCJDaGVjayBjaXJjbGUgaWNvblwiO1xuXG4gICAgYnRuLmFwcGVuZENoaWxkKGJ0bkltZyk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIH1cbn07XG5cbmNvbnN0IG5ld0xpc3RGb3JtID0gKCkgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpO1xuXG4gIGNvbnN0IGxpc3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYWNjZXB0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBsaXN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwicG9wLXVwXCIpO1xuICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWxpc3QtYnRuXCIpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBhY2NlcHRCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGFjY2VwdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWxpc3QtYnRuXCIpO1xuICBhY2NlcHRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBsYWJlbC5odG1sRm9yID0gXCJuZXctbGlzdFwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IExpc3RcIjtcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBpbnB1dC5uYW1lID0gXCJuZXctbGlzdFwiO1xuICBpbnB1dC5pZCA9IFwibmV3LWxpc3RcIjtcbiAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYWNjZXB0QnRuKTtcbiAgbGlzdEZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICBsaXN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGxpc3RGb3JtLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdEZvcm0pO1xufTtcblxuY29uc3QgYWRkVGltZU9wdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgc2libGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1jb250YWluZXJcIik7XG4gIGNvbnN0IHNpYmxpbmdUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpbWUtY29udGFpbmVyXCIpO1xuICBjb25zdCBwYXJlbnQgPSBzaWJsaW5nLnBhcmVudE5vZGU7XG5cbiAgaWYgKHBhcmVudC5jb250YWlucyhzaWJsaW5nVHdvKSkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGNvbnN0IHRpbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGltZS1jb250YWluZXJcIik7XG4gICAgbGFiZWwuaHRtbEZvciA9IFwidGltZVwiO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCJUaW1lXCI7XG4gICAgdGltZUlucHV0LnR5cGUgPSBcInRpbWVcIjtcbiAgICB0aW1lSW5wdXQubmFtZSA9IFwidGltZVwiO1xuICAgIHRpbWVJbnB1dC5pZCA9IFwidGltZVwiO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUlucHV0KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxufTtcblxuY29uc3QgYWRkTGlzdE9wdGlvbiA9ICgpID0+IHtcbiAgY29uc3Qgb3B0aW9uc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbGlzdFwiKTtcbiAgY29uc3QgbmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3LWxpc3RcIikudmFsdWU7XG4gIGNvbnN0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgbmV3T3B0aW9uLnZhbHVlID0gbmFtZTtcbiAgbmV3T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgbmV3T3B0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcblxuICBvcHRpb25zQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld09wdGlvbik7XG59O1xuXG5jb25zdCBwcm9jZXNzRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpO1xuICBjb25zdCBnZXRGb3JtRGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkpO1xuXG4gIHRhc2tBcnJheS5wdXNoKGdldEZvcm1EYXRhKTtcbn07XG5cbmNvbnN0IG1vZGlmeVRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1bGwtdGFzay1mb3JtXCIpO1xuICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGZvcm0uZGF0YXNldC5udW0pO1xuICBjb25zdCBmb3JtRGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkpO1xuXG4gIHRhc2tBcnJheS5zcGxpY2UoaW5kZXgsIDEsIGZvcm1EYXRhKTtcbn07XG5cbmNvbnN0IGJhY2tCdXR0b25Db250cm9sbGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuICBjb25zdCBjaGlsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFjay1idG4tY29udGFpbmVyXCIpO1xuXG4gIGlmIChoZWFkZXIuY29udGFpbnMoY2hpbGQpKSB7XG4gICAgaGVhZGVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgfVxufTtcbmV4cG9ydCB7XG4gIG1haW5Db250ZW50LFxuICBlbXB0eUluZGljYXRvcixcbiAgY3JlYXRlRm9ybSxcbiAgY2hhbmdlQnV0dG9uLFxuICBuZXdMaXN0Rm9ybSxcbiAgYWRkVGltZU9wdGlvbixcbiAgYWRkTGlzdE9wdGlvbixcbiAgcHJvY2Vzc0Zvcm0sXG4gIG1vZGlmeVRhc2ssXG4gIGJhY2tCdXR0b25Db250cm9sbGVyLFxuICB0YXNrQXJyYXksXG59O1xuIiwiaW1wb3J0IHsgdGFza0FycmF5IH0gZnJvbSBcIi4vbWFpbi1jb250ZW50XCI7XG5pbXBvcnQgXCIuL25hdi5jc3NcIjtcbmltcG9ydCB7IGxpc3RBcnJheSB9IGZyb20gXCIuL2xheW91dFwiO1xuaW1wb3J0IEltZyBmcm9tIFwiLi9pbWFnZXMvdG9kYXkuc3ZnXCI7XG5pbXBvcnQgSW1nMiBmcm9tIFwiLi9pbWFnZXMvdXBjb21pbmcuc3ZnXCI7XG5pbXBvcnQgSW1nMyBmcm9tIFwiLi9pbWFnZXMvZXhwYW5kLWxlc3Muc3ZnXCI7XG5pbXBvcnQgSW1nNCBmcm9tIFwiLi9pbWFnZXMvZXhwYW5kLW1vcmUuc3ZnXCI7XG5pbXBvcnQgSW1nNSBmcm9tIFwiLi9pbWFnZXMvY3JpdGljYWwuc3ZnXCI7XG5pbXBvcnQgSW1nNiBmcm9tIFwiLi9pbWFnZXMvaGlnaC5zdmdcIjtcbmltcG9ydCBJbWc3IGZyb20gXCIuL2ltYWdlcy9ub3JtYWwuc3ZnXCI7XG5pbXBvcnQgSW1nOCBmcm9tIFwiLi9pbWFnZXMvcGVyc29uYWwuc3ZnXCI7XG5pbXBvcnQgSW1nOSBmcm9tIFwiLi9pbWFnZXMvd29yay5zdmdcIjtcbmltcG9ydCBJbWcxMCBmcm9tIFwiLi9pbWFnZXMvc2hvcHBpbmcuc3ZnXCI7XG5pbXBvcnQgSW1nMTEgZnJvbSBcIi4vaW1hZ2VzL25ldy5zdmdcIjtcbmltcG9ydCBJbWcxMiBmcm9tIFwiLi9pbWFnZXMvYWRkLWxpc3Quc3ZnXCI7XG5cbmNvbnN0IG1haW5NZW51ID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXNlY3Rpb25cIik7XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIik7XG4gIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0b2RheUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZGF5SW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHRvZGF5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgdG9kYXlDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHVwY29taW5nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdXBjb21pbmdJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgdXBjb21pbmdCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCB1cGNvbWluZ0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZmF2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZmF2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZhdm9yaXRlc0ltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBmYXZvcml0ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBmYXZvcml0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvaldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0c0ltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYWRkTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGFkZExpc3RJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBtZW51LmNsYXNzTGlzdC5hZGQoXCJtYWluLW1lbnVcIik7XG4gIHRvZGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1jb250YWluZXJcIik7XG4gIHVwY29taW5nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZy1jb250YWluZXJcIik7XG4gIHRvZGF5QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICB0b2RheUJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kYXktYnRuXCIpO1xuICB0b2RheUJ0bi50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgdXBjb21pbmdCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHVwY29taW5nQnRuLmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZy1idG5cIik7XG4gIHVwY29taW5nQnRuLnRleHRDb250ZW50ID0gXCJVcGNvbWluZ1wiO1xuICB0b2RheUNvdW50LmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1jb3VudFwiKTtcbiAgdXBjb21pbmdDb3VudC5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctY291bnRcIik7XG4gIGZhdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmF2LWNvbnRhaW5lclwiKTtcbiAgZmF2V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZmF2LXdyYXBwZXJcIik7XG4gIHByb2pDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2otY29udGFpbmVyXCIpO1xuICBwcm9qV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwicHJvai13cmFwcGVyXCIpO1xuICBmYXZvcml0ZXNCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGZhdm9yaXRlc0J0bi5jbGFzc0xpc3QuYWRkKFwiZmF2b3JpdGVzLWJ0blwiKTtcbiAgZmF2b3JpdGVzQnRuLnRleHRDb250ZW50ID0gXCJGYXZvcml0ZXNcIjtcbiAgcHJvamVjdHNCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHByb2plY3RzQnRuLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1idG5cIik7XG4gIHByb2plY3RzQnRuLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICBhZGRMaXN0QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICBhZGRMaXN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtcHJvamVjdC1idG5cIik7XG4gIGZhdm9yaXRlcy5jbGFzc0xpc3QuYWRkKFwiZmF2b3JpdGVzXCIpO1xuICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHNcIik7XG4gIHRvZGF5SW1nLnNyYyA9IEltZztcbiAgdG9kYXlJbWcuYWx0ID0gXCJDYWxlbmRlciBpY29uXCI7XG4gIHVwY29taW5nSW1nLnNyYyA9IEltZzI7XG4gIHVwY29taW5nSW1nLmFsdCA9IFwiQ2FsZW5kZXIgaWNvblwiO1xuICBmYXZvcml0ZXNJbWcuc3JjID0gSW1nMztcbiAgZmF2b3JpdGVzSW1nLmFsdCA9IFwiRXhwYW5kIGxlc3MgaWNvblwiO1xuICBmYXZvcml0ZXNJbWcuY2xhc3NMaXN0LmFkZChcImZhdm9yaXRlcy1pbWdcIik7XG4gIHByb2plY3RzSW1nLnNyYyA9IEltZzM7XG4gIHByb2plY3RzSW1nLmFsdCA9IFwiRXhwYW5kIGxlc3MgaWNvblwiO1xuICBwcm9qZWN0c0ltZy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdHMtaW1nXCIpO1xuICBhZGRMaXN0SW1nLnNyYyA9IEltZzEyO1xuICBhZGRMaXN0SW1nLmFsdCA9IFwiQWRkIGxpc3QgaWNvblwiO1xuXG4gIGFkZExpc3RCdG4uYXBwZW5kQ2hpbGQoYWRkTGlzdEltZyk7XG4gIHRvZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5SW1nKTtcbiAgdG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlCdG4pO1xuICB0b2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheUNvdW50KTtcbiAgdXBjb21pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQodXBjb21pbmdJbWcpO1xuICB1cGNvbWluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGNvbWluZ0J0bik7XG4gIHVwY29taW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwY29taW5nQ291bnQpO1xuICBmYXZXcmFwcGVyLmFwcGVuZENoaWxkKGZhdm9yaXRlc0ltZyk7XG4gIGZhdldyYXBwZXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzQnRuKTtcbiAgZmF2Q29udGFpbmVyLmFwcGVuZENoaWxkKGZhdldyYXBwZXIpO1xuICBmYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzKTtcbiAgcHJvaldyYXBwZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNJbWcpO1xuICBwcm9qV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0c0J0bik7XG4gIHByb2pXcmFwcGVyLmFwcGVuZENoaWxkKGFkZExpc3RCdG4pO1xuICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2pXcmFwcGVyKTtcbiAgcHJvakNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gIG1lbnUuYXBwZW5kQ2hpbGQodG9kYXlDb250YWluZXIpO1xuICBtZW51LmFwcGVuZENoaWxkKHVwY29taW5nQ29udGFpbmVyKTtcbiAgbWVudS5hcHBlbmRDaGlsZChmYXZDb250YWluZXIpO1xuICBtZW51LmFwcGVuZENoaWxkKHByb2pDb250YWluZXIpO1xuICBtYWluLmluc2VydEJlZm9yZShtZW51LCB3cmFwcGVyKTtcbn07XG5cbmNvbnN0IGZhdm9yaXRlc0xpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzXCIpO1xuICBjb25zdCBjb250YWluZXJPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWluZXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjb250YWluZXJUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwcmlvcml0eVRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlPbmVDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5VHdvQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eVRocmVlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBjcml0aWNhbEltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBoaWdoSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IG5vcm1hbEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIHByaW9yaXR5T25lLmNsYXNzTGlzdC5hZGQoXCJjcml0aWNhbC1idG5cIik7XG4gIHByaW9yaXR5T25lLmlkID0gXCJwcmlvcml0eS1idG5cIjtcbiAgcHJpb3JpdHlPbmUudGV4dENvbnRlbnQgPSBcIkNyaXRpY2FsIFByaW9yaXR5XCI7XG4gIHByaW9yaXR5VHdvLmNsYXNzTGlzdC5hZGQoXCJoaWdoLWJ0blwiKTtcbiAgcHJpb3JpdHlUd28uaWQgPSBcInByaW9yaXR5LWJ0blwiO1xuICBwcmlvcml0eVR3by50ZXh0Q29udGVudCA9IFwiSGlnaCBQcmlvcml0eVwiO1xuICBwcmlvcml0eVRocmVlLmNsYXNzTGlzdC5hZGQoXCJub3JtYWwtYnRuXCIpO1xuICBwcmlvcml0eVRocmVlLmlkID0gXCJwcmlvcml0eS1idG5cIjtcbiAgcHJpb3JpdHlUaHJlZS50ZXh0Q29udGVudCA9IFwiTm9ybWFsIFByaW9yaXR5XCI7XG4gIHByaW9yaXR5T25lQ291bnQuY2xhc3NMaXN0LmFkZChcImNyaXRpY2FsLWNvdW50XCIpO1xuICBwcmlvcml0eVR3b0NvdW50LmNsYXNzTGlzdC5hZGQoXCJoaWdoLWNvdW50XCIpO1xuICBwcmlvcml0eVRocmVlQ291bnQuY2xhc3NMaXN0LmFkZChcIm5vcm1hbC1jb3VudFwiKTtcblxuICBjcml0aWNhbEltZy5zcmMgPSBJbWc1O1xuICBjcml0aWNhbEltZy5hbHQgPSBcIldhdGVyIGRyb3AgaWNvblwiO1xuICBoaWdoSW1nLnNyYyA9IEltZzY7XG4gIGhpZ2hJbWcuYWx0ID0gXCJXYXRlciBkcm9wIGljb25cIjtcbiAgbm9ybWFsSW1nLnNyYyA9IEltZzc7XG4gIG5vcm1hbEltZy5hbHQgPSBcIldhdGVyIGRyb3AgaWNvblwiO1xuXG4gIGNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChjcml0aWNhbEltZyk7XG4gIGNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChwcmlvcml0eU9uZSk7XG4gIGNvbnRhaW5lck9uZS5hcHBlbmRDaGlsZChwcmlvcml0eU9uZUNvdW50KTtcbiAgY29udGFpbmVyVHdvLmFwcGVuZENoaWxkKGhpZ2hJbWcpO1xuICBjb250YWluZXJUd28uYXBwZW5kQ2hpbGQocHJpb3JpdHlUd28pO1xuICBjb250YWluZXJUd28uYXBwZW5kQ2hpbGQocHJpb3JpdHlUd29Db3VudCk7XG4gIGNvbnRhaW5lclRocmVlLmFwcGVuZENoaWxkKG5vcm1hbEltZyk7XG4gIGNvbnRhaW5lclRocmVlLmFwcGVuZENoaWxkKHByaW9yaXR5VGhyZWUpO1xuICBjb250YWluZXJUaHJlZS5hcHBlbmRDaGlsZChwcmlvcml0eVRocmVlQ291bnQpO1xuICBmYXZvcml0ZXMuYXBwZW5kQ2hpbGQoY29udGFpbmVyT25lKTtcbiAgZmF2b3JpdGVzLmFwcGVuZENoaWxkKGNvbnRhaW5lclR3byk7XG4gIGZhdm9yaXRlcy5hcHBlbmRDaGlsZChjb250YWluZXJUaHJlZSk7XG59O1xuXG5jb25zdCBwcm9qZWN0TGlzdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuXG4gIHByb2plY3RzLnRleHRDb250ZW50ID0gXCJcIjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpc3ROYW1lID0gbGlzdEFycmF5W2ldO1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBsaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoYCR7bGlzdE5hbWV9LWxpc3RgKTtcbiAgICBsaXN0QnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGxpc3RCdG4uY2xhc3NMaXN0LmFkZChgJHtsaXN0TmFtZX0tYnRuYCk7XG4gICAgbGlzdEJ0bi5pZCA9IFwidGFzay1idG5cIjtcbiAgICBsaXN0QnRuLnRleHRDb250ZW50ID0gbGlzdE5hbWU7XG4gICAgdGFza0NvdW50LmNsYXNzTGlzdC5hZGQoYCR7bGlzdE5hbWV9LWNvdW50YCk7XG5cbiAgICBpZiAobGlzdE5hbWUgPT09IFwicGVyc29uYWxcIikge1xuICAgICAgaW1nLnNyYyA9IEltZzg7XG4gICAgICBpbWcuYWx0ID0gXCJQZXJzb24gaWNvblwiO1xuICAgIH0gZWxzZSBpZiAobGlzdE5hbWUgPT09IFwid29ya1wiKSB7XG4gICAgICBpbWcuc3JjID0gSW1nOTtcbiAgICAgIGltZy5hbHQgPSBcIkJyaWVmY2FzZSBpY29uXCI7XG4gICAgfSBlbHNlIGlmIChsaXN0TmFtZSA9PT0gXCJzaG9wcGluZ1wiKSB7XG4gICAgICBpbWcuc3JjID0gSW1nMTA7XG4gICAgICBpbWcuYWx0ID0gXCJTaG9wcGluZyBjYXJ0IGljb25cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgaW1nLnNyYyA9IEltZzExO1xuICAgICAgaW1nLmFsdCA9IFwiTGFyZ2UgZG90IGljb25cIjtcbiAgICB9XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEJ0bik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb3VudCk7XG4gICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxufTtcblxuY29uc3QgdGFza0NvdW50ID0gKCkgPT4ge1xuICBjb25zdCBjb3VudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NsYXNzKj0nY291bnQnXVwiKTtcbiAgY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuICBjb3VudHMuZm9yRWFjaCgoY291bnQpID0+IHtcbiAgICBsZXQgY2xhc3NOYW1lID0gY291bnQuY2xhc3NOYW1lO1xuXG4gICAgbGV0IG51bSA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2JqID0gdGFza0FycmF5W2ldO1xuICAgICAgY29uc3QgbGlzdENob2ljZSA9IG9ialtcImxpc3RcIl07XG4gICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBvYmpbXCJwcmlvcml0eVwiXTtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gb2JqW1wiZGF0ZVwiXTtcblxuICAgICAgaWYgKFxuICAgICAgICBjbGFzc05hbWUuaW5jbHVkZXMobGlzdENob2ljZSkgfHxcbiAgICAgICAgKHRvZGF5RGF0ZSA9PT0gdGFza0RhdGUgJiYgY2xhc3NOYW1lLmluY2x1ZGVzKFwidG9kYXlcIikpIHx8XG4gICAgICAgICh0b2RheURhdGUgIT09IHRhc2tEYXRlICYmIGNsYXNzTmFtZS5pbmNsdWRlcyhcInVwY29taW5nXCIpKSB8fFxuICAgICAgICBjbGFzc05hbWUuaW5jbHVkZXModGFza1ByaW9yaXR5KVxuICAgICAgKSB7XG4gICAgICAgIG51bSArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChudW0gPT09IDApIHtcbiAgICAgIGNvdW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQudGV4dENvbnRlbnQgPSBudW07XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGNoYW5nZUZhdm9yaXRlc0ltYWdlID0gKCkgPT4ge1xuICBjb25zdCBmYXZvcml0ZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlc1wiKTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1pbWdcIik7XG5cbiAgaWYgKGZhdm9yaXRlc0NvbnRhaW5lci50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgIGltYWdlLnNyYyA9IEltZzM7XG4gICAgaW1hZ2UuYWx0ID0gXCJFeHBhbmQgbGVzcyBpY29uXCI7XG4gIH0gZWxzZSB7XG4gICAgaW1hZ2Uuc3JjID0gSW1nNDtcbiAgICBpbWFnZS5hbHQgPSBcIkV4cGFuZCBtb3JlIGljb25cIjtcbiAgfVxufTtcblxuY29uc3QgY2hhbmdlUHJvamVjdHNJbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtaW1nXCIpO1xuXG4gIGlmIChwcm9qZWN0c0NvbnRhaW5lci50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgIGltYWdlLnNyYyA9IEltZzM7XG4gICAgaW1hZ2UuYWx0ID0gXCJFeHBhbmQgbGVzcyBpY29uXCI7XG4gIH0gZWxzZSB7XG4gICAgaW1hZ2Uuc3JjID0gSW1nNDtcbiAgICBpbWFnZS5hbHQgPSBcIkV4cGFuZCBtb3JlIGljb25cIjtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgbGlzdEFycmF5LFxuICBtYWluTWVudSxcbiAgcHJvamVjdExpc3QsXG4gIGZhdm9yaXRlc0xpc3QsXG4gIHRhc2tDb3VudCxcbiAgY2hhbmdlRmF2b3JpdGVzSW1hZ2UsXG4gIGNoYW5nZVByb2plY3RzSW1hZ2UsXG59O1xuIiwiaW1wb3J0IHsgdGFza0FycmF5LCBlbXB0eUluZGljYXRvciB9IGZyb20gXCIuL21haW4tY29udGVudC5qc1wiO1xuaW1wb3J0IHsgbGlzdEFycmF5LCBwcmlvcml0eUFycmF5IH0gZnJvbSBcIi4vbGF5b3V0LmpzXCI7XG5pbXBvcnQgXCIuL2Zvcm1zLmNzc1wiO1xuaW1wb3J0IEltZyBmcm9tIFwiLi9pbWFnZXMvcGVyc29uYWwuc3ZnXCI7XG5pbXBvcnQgSW1nMiBmcm9tIFwiLi9pbWFnZXMvd29yay5zdmdcIjtcbmltcG9ydCBJbWczIGZyb20gXCIuL2ltYWdlcy9zaG9wcGluZy5zdmdcIjtcbmltcG9ydCBJbWc0IGZyb20gXCIuL2ltYWdlcy9uZXcuc3ZnXCI7XG5pbXBvcnQgSW1nNSBmcm9tIFwiLi9pbWFnZXMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IEltZzYgZnJvbSBcIi4vaW1hZ2VzL2JhY2suc3ZnXCI7XG5cbmNvbnN0IHRhc2tCYXJzID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG5cbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgaWYgKHRhc2tBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2JqID0gdGFza0FycmF5W2ldO1xuICAgICAgY29uc3QgdGFza1RpdGxlID0gb2JqW1widGl0bGVcIl07XG4gICAgICBjb25zdCBsaXN0Q2hvaWNlID0gb2JqW1wibGlzdFwiXTtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gb2JqW1wiZGF0ZVwiXTtcblxuICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzIGZvciBlYWNoIHRhc2tcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIGNvbnN0IGNoZWNrQm94TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgIGNvbnN0IHdyYXBwZXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgbGlzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgd3JhcHBlci5pZCA9IHRhc2tUaXRsZTtcbiAgICAgIHdyYXBwZXIuZGF0YXNldC5udW0gPSBgJHtpfWA7XG4gICAgICBjaGVja0JveExhYmVsLmh0bWxGb3IgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgY2hlY2tCb3gubmFtZSA9IFwidGFzay1jaGVja2JveFwiO1xuICAgICAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrYm94XCIpO1xuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XG4gICAgICBkYXRlLnRleHRDb250ZW50ID0gdGFza0RhdGU7XG4gICAgICBsaXN0TmFtZS50ZXh0Q29udGVudCA9IGxpc3RDaG9pY2U7XG5cbiAgICAgIGlmIChsaXN0Q2hvaWNlID09PSBcInBlcnNvbmFsXCIpIHtcbiAgICAgICAgaW1nLnNyYyA9IEltZztcbiAgICAgICAgaW1nLmFsdCA9IFwiUGVyc29uIGljb25cIjtcbiAgICAgIH0gZWxzZSBpZiAobGlzdENob2ljZSA9PT0gXCJ3b3JrXCIpIHtcbiAgICAgICAgaW1nLnNyYyA9IEltZzI7XG4gICAgICAgIGltZy5hbHQgPSBcIkJyaWVmY2FzZSBpY29uXCI7XG4gICAgICB9IGVsc2UgaWYgKGxpc3RDaG9pY2UgPT09IFwic2hvcHBpbmdcIikge1xuICAgICAgICBpbWcuc3JjID0gSW1nMztcbiAgICAgICAgaW1nLmFsdCA9IFwiU2hvcHBpbmcgY2FydCBpY29uXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWcuc3JjID0gSW1nNDtcbiAgICAgICAgaW1nLmFsdCA9IFwiTGFyZ2UgZG90IGljb25cIjtcbiAgICAgIH1cblxuICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hMYWJlbCk7XG4gICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICB3cmFwcGVyVHdvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgIHdyYXBwZXJUd28uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3ROYW1lKTtcbiAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hDb250YWluZXIpO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyVHdvKTtcbiAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG4gICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbXB0eUluZGljYXRvcigpO1xuICB9XG59O1xuXG5jb25zdCB0YXNrUGFnZSA9ICh0YXNrSW5kZXgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuXG4gIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGNvbnN0IG9iaiA9IHRhc2tBcnJheVt0YXNrSW5kZXhdO1xuICBjb25zdCB0YXNrVGl0bGUgPSBvYmpbXCJ0aXRsZVwiXTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gb2JqW1wiZGVzY3JpcHRpb25cIl07XG4gIGNvbnN0IHRhc2tEYXRlID0gb2JqW1wiZGF0ZVwiXTtcbiAgY29uc3QgdGFza1RpbWUgPSBvYmpbXCJ0aW1lXCJdO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBvYmpbXCJwcmlvcml0eVwiXTtcbiAgY29uc3QgbGlzdENob2ljZSA9IG9ialtcImxpc3RcIl07XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICBjb25zdCBkYXRlV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IHRpbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0aW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGxpc3ROYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbGlzdFNlbGVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBsaXN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJpb3JpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIGNvbnN0IGJhY2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYmFja0J0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImZ1bGwtdGFzay1mb3JtXCIpO1xuICBmb3JtLmRhdGFzZXQubnVtID0gdGFza0luZGV4O1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xuICB0aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWNvbnRhaW5lclwiKTtcbiAgYmFja0J0bkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYmFjay1idG4tY29udGFpbmVyXCIpO1xuICB0aXRsZUxhYmVsLmh0bWxGb3IgPSBcInRhc2stdGl0bGVcIjtcbiAgLy8gdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRhdGVMYWJlbC5odG1sRm9yID0gXCJkYXRlXCI7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgdGltZUxhYmVsLmh0bWxGb3IgPSBcInRpbWVcIjtcbiAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgVGltZVwiO1xuICBwcmlvcml0eUxhYmVsLmh0bWxGb3IgPSBcInByaW9yaXR5XCI7XG4gIC8vIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gIGxpc3RTZWxlY3RMYWJlbC5odG1sRm9yID0gXCJsaXN0XCI7XG4gIGJhY2tCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGJhY2tCdG4uY2xhc3NMaXN0LmFkZChcImJhY2stYnRuXCIpO1xuICBiYWNrQnRuSW1nLnNyYyA9IEltZzY7XG4gIGJhY2tCdG5JbWcuYWx0ID0gXCJCYWNrIGFycm93IGljb25cIjtcbiAgdGl0bGUubmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGUuaWQgPSBcInRhc2stdGl0bGVcIjtcbiAgdGl0bGUudmFsdWUgPSB0YXNrVGl0bGU7XG4gIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZTtcbiAgZGVzY3JpcHRpb24ubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb24uaWQgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uLnZhbHVlID0gdGFza0Rlc2NyaXB0aW9uO1xuICBsaXN0U2VsZWN0Lm5hbWUgPSBcImxpc3RcIjtcbiAgbGlzdFNlbGVjdC5pZCA9IFwibGlzdFwiO1xuICBkYXRlLnR5cGUgPSBcImRhdGVcIjtcbiAgZGF0ZS5uYW1lID0gXCJkYXRlXCI7XG4gIGRhdGUuaWQgPSBcImRhdGVcIjtcbiAgZGF0ZS52YWx1ZSA9IHRhc2tEYXRlO1xuICB0aW1lLnR5cGUgPSBcInRpbWVcIjtcbiAgdGltZS5uYW1lID0gXCJ0aW1lXCI7XG4gIHRpbWUuaWQgPSBcInRpbWVcIjtcbiAgdGltZS52YWx1ZSA9IHRhc2tUaW1lO1xuICBwcmlvcml0eVNlbGVjdC5uYW1lID0gXCJwcmlvcml0eVwiO1xuICBwcmlvcml0eVNlbGVjdC5pZCA9IFwicHJpb3JpdHlcIjtcblxuICAvLyBEeW5hbWljYWxseSBhZGQgbGlzdCBvcHRpb25zLiBXaGVuIHRoZSB1c2VyIGFkZHMgYSBuZXcgbGlzdCxcbiAgLy8gdGhlIG5ldyBsaXN0IHdpbGwgYmUgcHJlc2VudCBpbiB0aGUgbmV4dCBmb3JtLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGxpc3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgbGlzdE9wdGlvbi52YWx1ZSA9IGxpc3RBcnJheVtpXTtcbiAgICBsaXN0T3B0aW9uLnRleHRDb250ZW50ID0gbGlzdEFycmF5W2ldO1xuXG4gICAgaWYgKGxpc3RPcHRpb24udmFsdWUgPT09IGxpc3RDaG9pY2UpIHtcbiAgICAgIGxpc3RPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsaXN0U2VsZWN0LmFwcGVuZENoaWxkKGxpc3RPcHRpb24pO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmlvcml0eUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcHJpb3JpdHlPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgcHJpb3JpdHlPcHRpb24udmFsdWUgPSBwcmlvcml0eUFycmF5W2ldO1xuICAgIHByaW9yaXR5T3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHlBcnJheVtpXTtcblxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uKTtcblxuICAgIGlmIChwcmlvcml0eUFycmF5W2ldID09PSB0YXNrUHJpb3JpdHkpIHtcbiAgICAgIHByaW9yaXR5T3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBsaXN0TmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0U2VsZWN0TGFiZWwpO1xuICBsaXN0TmFtZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0U2VsZWN0KTtcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIHByaW9yaXR5Q29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICB0aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG4gIHRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZSk7XG4gIGRhdGVXcmFwcGVyLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuICBkYXRlV3JhcHBlci5hcHBlbmRDaGlsZCh0aW1lQ29udGFpbmVyKTtcbiAgYmFja0J0bi5hcHBlbmRDaGlsZChiYWNrQnRuSW1nKTtcbiAgYmFja0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrQnRuKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGJhY2tCdG5Db250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChsaXN0TmFtZUNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Db250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVXcmFwcGVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUNvbnRhaW5lcik7XG4gIGRpc3BsYXkuYXBwZW5kQ2hpbGQoZm9ybSk7XG59O1xuXG5jb25zdCBzb3J0VGFza0JhcnMgPSAoYnRuKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcbiAgY29uc3Qgc2libGluZyA9IGJ0bi5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGNvbnN0IGJ0bkNsYXNzID0gYnRuLmNsYXNzTmFtZTtcbiAgY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuICBkaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBpZiAoc2libGluZy50ZXh0Q29udGVudCAhPT0gXCJcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBvYmogPSB0YXNrQXJyYXlbaV07XG4gICAgICBjb25zdCB0YXNrVGl0bGUgPSBvYmpbXCJ0aXRsZVwiXTtcbiAgICAgIGNvbnN0IGxpc3RDaG9pY2UgPSBvYmpbXCJsaXN0XCJdO1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBvYmpbXCJkYXRlXCJdO1xuICAgICAgY29uc3QgcHJpb3JpdHkgPSBvYmpbXCJwcmlvcml0eVwiXTtcblxuICAgICAgaWYgKFxuICAgICAgICBidG5DbGFzcy5pbmNsdWRlcyhsaXN0Q2hvaWNlKSB8fFxuICAgICAgICAodG9kYXlEYXRlID09PSB0YXNrRGF0ZSAmJiBidG5DbGFzcy5pbmNsdWRlcyhcInRvZGF5XCIpKSB8fFxuICAgICAgICAodG9kYXlEYXRlICE9PSB0YXNrRGF0ZSAmJiBidG5DbGFzcy5pbmNsdWRlcyhcInVwY29taW5nXCIpKSB8fFxuICAgICAgICBidG5DbGFzcy5pbmNsdWRlcyhwcmlvcml0eSlcbiAgICAgICkge1xuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudHMgZm9yIGVhY2ggdGFza1xuICAgICAgICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tCb3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNvbnN0IHdyYXBwZXJUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjb25zdCBsaXN0SW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwidGFza1wiKTtcbiAgICAgICAgd3JhcHBlci5pZCA9IHRhc2tUaXRsZTtcbiAgICAgICAgd3JhcHBlci5kYXRhc2V0Lm51bSA9IGk7XG4gICAgICAgIGNoZWNrQm94TGFiZWwuaHRtbEZvciA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tCb3gudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgY2hlY2tCb3gubmFtZSA9IFwidGFzay1jaGVja2JveFwiO1xuICAgICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgICAgIGxpc3RJbWcuYWx0ID0gXCJpbWdcIjtcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSB0YXNrVGl0bGU7XG4gICAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrRGF0ZTtcbiAgICAgICAgbGlzdE5hbWUudGV4dENvbnRlbnQgPSBsaXN0Q2hvaWNlO1xuICAgICAgICAvLyAgIGxpc3RJbWcgPSBpbWdcblxuICAgICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveExhYmVsKTtcbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICAgICAgICB3cmFwcGVyVHdvLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgd3JhcHBlclR3by5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0TmFtZSk7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdEltZyk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hDb250YWluZXIpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdyYXBwZXJUd28pO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuICAgICAgICBkaXNwbGF5LmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBlbXB0eUluZGljYXRvcigpO1xuICB9XG59O1xuXG5jb25zdCBhZGREZWxldGVPcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIik7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsLWJ0bi1jb250YWluZXJcIik7XG5cbiAgaWYgKGhlYWRlci5jb250YWlucyhkaXYpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZGVsQnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZWwtYnRuLWNvbnRhaW5lclwiKTtcbiAgZGVsQnRuLnR5cGUgPSBcInN1Ym1pdFwiO1xuICBkZWxCdG4uY2xhc3NMaXN0LmFkZChcImRlbC1idG5cIik7XG4gIGRlbEJ0bkltZy5zcmMgPSBJbWc1O1xuICBkZWxCdG5JbWcuYWx0ID0gXCJEZWxldGUgaWNvblwiO1xuXG4gIGRlbEJ0bi5hcHBlbmRDaGlsZChkZWxCdG5JbWcpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59O1xuXG5jb25zdCByZW1vdmVEZWxldGVPcHRpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIik7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsLWJ0bi1jb250YWluZXJcIik7XG5cbiAgaWYgKGhlYWRlci5jb250YWlucyhkaXYpKSB7XG4gICAgaGVhZGVyLnJlbW92ZUNoaWxkKGRpdik7XG4gIH1cbn07XG5cbmNvbnN0IGRlbGV0ZVRhc2sgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcbiAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNoZWNrYm94XCIpO1xuICBjb25zdCBkaXNwbGF5Tm9kZXMgPSBkaXNwbGF5LmNoaWxkTm9kZXM7XG5cbiAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgIGlmICh0YXNrLmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGdyYW5kUGFyZW50ID0gdGFzay5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICBjb25zdCB0YXNrSW5kZXggPSBncmFuZFBhcmVudC5kYXRhc2V0Lm51bTtcblxuICAgICAgdGFza0FycmF5LnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgZGlzcGxheS5yZW1vdmVDaGlsZChkaXNwbGF5Tm9kZXNbdGFza0luZGV4XSk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheU5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGRpc3BsYXlOb2Rlc1tpXS5kYXRhc2V0Lm51bSA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBpZiAoZGlzcGxheS50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgIGVtcHR5SW5kaWNhdG9yKCk7XG4gICAgcmVtb3ZlRGVsZXRlT3B0aW9uKCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIHRhc2tCYXJzLFxuICB0YXNrUGFnZSxcbiAgc29ydFRhc2tCYXJzLFxuICBhZGREZWxldGVPcHRpb24sXG4gIHJlbW92ZURlbGV0ZU9wdGlvbixcbiAgZGVsZXRlVGFzayxcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHBhZ2VMYXlvdXQsIHVwZGF0ZUxpc3RBcnJheSB9IGZyb20gXCIuL2xheW91dC5qc1wiO1xuaW1wb3J0IHtcbiAgbWFpbkNvbnRlbnQsXG4gIGVtcHR5SW5kaWNhdG9yLFxuICBjcmVhdGVGb3JtLFxuICBjaGFuZ2VCdXR0b24sXG4gIG5ld0xpc3RGb3JtLFxuICBhZGRUaW1lT3B0aW9uLFxuICBhZGRMaXN0T3B0aW9uLFxuICBwcm9jZXNzRm9ybSxcbiAgbW9kaWZ5VGFzayxcbiAgYmFja0J1dHRvbkNvbnRyb2xsZXIsXG59IGZyb20gXCIuL21haW4tY29udGVudC5qc1wiO1xuaW1wb3J0IHtcbiAgbWFpbk1lbnUsXG4gIHByb2plY3RMaXN0LFxuICBmYXZvcml0ZXNMaXN0LFxuICB0YXNrQ291bnQsXG4gIGNoYW5nZUZhdm9yaXRlc0ltYWdlLFxuICBjaGFuZ2VQcm9qZWN0c0ltYWdlLFxufSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQge1xuICB0YXNrQmFycyxcbiAgdGFza1BhZ2UsXG4gIHNvcnRUYXNrQmFycyxcbiAgYWRkRGVsZXRlT3B0aW9uLFxuICByZW1vdmVEZWxldGVPcHRpb24sXG4gIGRlbGV0ZVRhc2ssXG59IGZyb20gXCIuL3Rhc2stZGlzcGxheS5qc1wiO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIC8vIEdlbmVyYXRlIGluaXRpYWwgcGFnZSBsYXlvdXRcbiAgcGFnZUxheW91dCgpO1xuICBtYWluQ29udGVudCgpO1xuICBlbXB0eUluZGljYXRvcigpO1xuXG4gIGZ1bmN0aW9uIGV2ZW50SGFuZGxlcigpIHtcbiAgICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51LWJ1dHRvblwiKTtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXNlY3Rpb25cIik7XG5cbiAgICAvLyBUb2dnbGUgdGhlIE1haW4gTWVudVxuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWVudVwiKTtcblxuICAgICAgaWYgKG1haW4uY29udGFpbnMobWVudSkpIHtcbiAgICAgICAgbWFpbi5yZW1vdmVDaGlsZChtZW51KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1haW5NZW51KCk7XG4gICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaDJcIik7XG5cbiAgICAgIC8vIFRvZ2dsZSBUb2RheSBvciBVcGNvbWluZyBwcm9qZWN0c1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ0b2RheS1idG5cIikge1xuICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcblxuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuXG4gICAgICAgIHNvcnRUYXNrQmFycyhidG4pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInVwY29taW5nLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0O1xuXG4gICAgICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlVwY29taW5nXCI7XG5cbiAgICAgICAgc29ydFRhc2tCYXJzKGJ0bik7XG4gICAgICB9XG5cbiAgICAgIC8vIFRvZ2dsZSBGYXZvcml0ZXMgYW5kIFByb2plY3RzIG1lbnUgY2hvaWNlc1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJmYXZvcml0ZXMtYnRuXCIpIHtcbiAgICAgICAgY29uc3QgZmF2b3JpdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXNcIik7XG5cbiAgICAgICAgaWYgKGZhdm9yaXRlcy50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgICAgIGZhdm9yaXRlc0xpc3QoKTtcbiAgICAgICAgICB0YXNrQ291bnQoKTtcbiAgICAgICAgICBjaGFuZ2VGYXZvcml0ZXNJbWFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZhdm9yaXRlcy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgY2hhbmdlRmF2b3JpdGVzSW1hZ2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG5cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwicHJvamVjdHMtYnRuXCIpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0cy50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgICAgIHByb2plY3RMaXN0KCk7XG4gICAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICAgICAgY2hhbmdlUHJvamVjdHNJbWFnZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICBjaGFuZ2VQcm9qZWN0c0ltYWdlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlzcGxheS5jb250YWlucyhmb3JtKSkge1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhc2tCYXJzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcbiAgICAgIGNvbnN0IGxpc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3AtdXBcIik7XG5cbiAgICAgIC8vIGNyZWF0ZSwgc3VibWl0IGFuZCBwcm9jZXNzIGZvcm1zXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImZvcm0tYnRuXCIpIHtcbiAgICAgICAgcmVtb3ZlRGVsZXRlT3B0aW9uKCk7XG4gICAgICAgIGNyZWF0ZUZvcm0oKTtcbiAgICAgICAgY2hhbmdlQnV0dG9uKGUudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzdWJtaXQtYnRuXCIpIHtcbiAgICAgICAgY29uc3QgaXNGb3JtVmFsaWQgPSBmb3JtLmNoZWNrVmFsaWRpdHkoKTtcblxuICAgICAgICBpZiAoIWlzRm9ybVZhbGlkKSB7XG4gICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChsaXN0Rm9ybSkge1xuICAgICAgICAgICAgd3JhcHBlci5yZW1vdmVDaGlsZChsaXN0Rm9ybSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHByb2Nlc3NGb3JtKCk7XG4gICAgICAgICAgYmFja0J1dHRvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgICB0YXNrQmFycygpO1xuICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICAgIGNoYW5nZUJ1dHRvbihlLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzYXZlLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1bGwtdGFzay1mb3JtXCIpO1xuICAgICAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IGZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuXG4gICAgICAgIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kaWZ5VGFzaygpO1xuICAgICAgICAgIGJhY2tCdXR0b25Db250cm9sbGVyKCk7XG4gICAgICAgICAgdGFza0JhcnMoKTtcbiAgICAgICAgICB0YXNrQ291bnQoKTtcbiAgICAgICAgICBjaGFuZ2VCdXR0b24oZS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aW1lIGlucHV0IG9wdGlvblxuICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBcImRhdGVcIiAmJiBlLnRhcmdldC5uYW1lID09PSBcImRhdGVcIikge1xuICAgICAgICBhZGRUaW1lT3B0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBmb3JtIGRpc3BsYXkgb3IgZnVsbC10YXNrIGRpc3BsYXlcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYmFjay1idG5cIikge1xuICAgICAgICBpZiAobGlzdEZvcm0pIHtcbiAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKGxpc3RGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhY2tCdXR0b25Db250cm9sbGVyKCk7XG4gICAgICAgIHRhc2tCYXJzKCk7XG4gICAgICAgIGNoYW5nZUJ1dHRvbihlLnRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBuZXcgbGlzdCBmb3JtXG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhZGQtcHJvamVjdC1idG5cIiB8fFxuICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiY3JlYXRlLWxpc3QtYnRuXCJcbiAgICAgICkge1xuICAgICAgICBuZXdMaXN0Rm9ybSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBDYW5jZWwgbmV3IGxpc3QgZm9ybVxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjYW5jZWwtbGlzdC1idG5cIikge1xuICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIubGFzdENoaWxkKTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIG5ldyBsaXN0IG9wdGlvblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhZGQtbGlzdC1idG5cIikge1xuICAgICAgICBjb25zdCBsaXN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wLXVwXCIpO1xuICAgICAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IGxpc3RGb3JtLmNoZWNrVmFsaWRpdHkoKTtcblxuICAgICAgICBpZiAoIWlzRm9ybVZhbGlkKSB7XG4gICAgICAgICAgbGlzdEZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdXBkYXRlTGlzdEFycmF5KCk7XG5cbiAgICAgICAgICBpZiAoZGlzcGxheS5jb250YWlucyhmb3JtKSkge1xuICAgICAgICAgICAgYWRkTGlzdE9wdGlvbigpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgIGNoYW5nZVByb2plY3RzSW1hZ2UoKTtcbiAgICAgICAgICAgIHdyYXBwZXIucmVtb3ZlQ2hpbGQod3JhcHBlci5sYXN0Q2hpbGQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgY2hhbmdlUHJvamVjdHNJbWFnZSgpO1xuICAgICAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNoaWxkKHdyYXBwZXIubGFzdENoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gU29ydCB0YXNrcyBhY2NvcmRpbmcgdG8gdGhlIGNsaWNrZWQgcHJvamVjdCBvciBwcmlvcml0eSBsaXN0XG4gICAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwidGFzay1idG5cIiB8fCBlLnRhcmdldC5pZCA9PT0gXCJwcmlvcml0eS1idG5cIikge1xuICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcblxuICAgICAgICBzb3J0VGFza0JhcnMoYnRuKTtcbiAgICAgIH1cblxuICAgICAgLy8gRGlzcGxheSBhbGwgdGFzayBkZXRhaWxzXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInRhc2tcIikge1xuICAgICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQubnVtO1xuXG4gICAgICAgIHJlbW92ZURlbGV0ZU9wdGlvbigpO1xuICAgICAgICB0YXNrUGFnZShpbmRleCk7XG4gICAgICAgIGNoYW5nZUJ1dHRvbihlLnRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIC8vIERlbGV0ZSB0YXNrc1xuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjaGVja2JveFwiICYmIGUudGFyZ2V0LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgYWRkRGVsZXRlT3B0aW9uKCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiY2hlY2tib3hcIiAmJlxuICAgICAgICBlLnRhcmdldC5jaGVja2VkID09PSBmYWxzZVxuICAgICAgKSB7XG4gICAgICAgIHJlbW92ZURlbGV0ZU9wdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImRlbC1idG5cIikge1xuICAgICAgICBkZWxldGVUYXNrKCk7XG4gICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGV2ZW50SGFuZGxlcigpO1xufVxuY29tcG9uZW50KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=