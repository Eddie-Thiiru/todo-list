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
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\n  height: 100%;\n  width: 100%;\n  /* background-color: #f7f9fc; */\n  padding: 15px;\n  position: relative;\n  grid-column: span 6;\n  display: grid;\n  grid-template-rows: 100px 1fr;\n}\n\n.task-display {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  /* Inroduce scroll bar\n  height: 596px;\n  overflow-y: auto; */\n}\n\n.empty-indicator {\n  padding: 10px;\n  position: absolute;\n  bottom: 50%;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n}\n\n.task {\n  width: 100%;\n  height: 50px;\n  padding: 5px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.display-btn-container {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.back-btn-container,\n.del-btn-container {\n  align-self: center;\n}\n\n.wrapper button {\n  padding: 5px;\n  border: none;\n  border-radius: 50%;\n  display: grid;\n  justify-self: self-start;\n  align-items: center;\n}\n\n.task > div {\n  padding: 5px;\n  display: flex;\n  gap: 5px;\n  pointer-events: none;\n}\n\n.task > div:nth-child(2) {\n  flex-direction: column;\n}\n\n.task > div:nth-of-type(2) {\n  margin-left: auto;\n}\n\n.task img {\n  height: 15px;\n  width: 15px;\n  align-self: center;\n}\n\n.back-btn img,\n.del-btn img,\n.create-list-btn img {\n  height: 30px;\n  width: 30px;\n}\n\n.empty-indicator img {\n  height: 100px;\n  width: 100px;\n}\n\n.wrapper button:hover {\n  background-color: gray;\n}\n", "",{"version":3,"sources":["webpack://./src/content.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,WAAW;EACX,+BAA+B;EAC/B,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT;;qBAEmB;AACrB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,aAAa;EACb,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,QAAQ;EACR,oBAAoB;AACtB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;AACpB;;AAEA;;;EAGE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":[".wrapper {\n  height: 100%;\n  width: 100%;\n  /* background-color: #f7f9fc; */\n  padding: 15px;\n  position: relative;\n  grid-column: span 6;\n  display: grid;\n  grid-template-rows: 100px 1fr;\n}\n\n.task-display {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  /* Inroduce scroll bar\n  height: 596px;\n  overflow-y: auto; */\n}\n\n.empty-indicator {\n  padding: 10px;\n  position: absolute;\n  bottom: 50%;\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n}\n\n.task {\n  width: 100%;\n  height: 50px;\n  padding: 5px;\n  display: flex;\n  gap: 10px;\n  align-items: center;\n}\n\n.display-btn-container {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.back-btn-container,\n.del-btn-container {\n  align-self: center;\n}\n\n.wrapper button {\n  padding: 5px;\n  border: none;\n  border-radius: 50%;\n  display: grid;\n  justify-self: self-start;\n  align-items: center;\n}\n\n.task > div {\n  padding: 5px;\n  display: flex;\n  gap: 5px;\n  pointer-events: none;\n}\n\n.task > div:nth-child(2) {\n  flex-direction: column;\n}\n\n.task > div:nth-of-type(2) {\n  margin-left: auto;\n}\n\n.task img {\n  height: 15px;\n  width: 15px;\n  align-self: center;\n}\n\n.back-btn img,\n.del-btn img,\n.create-list-btn img {\n  height: 30px;\n  width: 30px;\n}\n\n.empty-indicator img {\n  height: 100px;\n  width: 100px;\n}\n\n.wrapper button:hover {\n  background-color: gray;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 3fr 50px 50px;\n  gap: 10px;\n}\n\n.full-task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 50px 3fr 50px 50px;\n  justify-items: center;\n}\n\nbody.modal-open {\n  pointer-events: none;\n}\n\nbody.modal-open .task-form {\n  opacity: 0.5;\n}\n\nbody.modal-open .pop-up {\n  pointer-events: auto;\n}\n\n.pop-up {\n  position: absolute;\n  width: 250px;\n  height: 150px;\n  background-color: aqua;\n  border-radius: 5px;\n  padding: 10px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.pop-up label,\n.pop-up div {\n  padding: 5px 0px;\n}\n\n.pop-up input {\n  background-color: aqua;\n  border-radius: 0px;\n  border-bottom: 2px solid black;\n}\n\n.pop-up > div {\n  margin-top: auto;\n  display: flex;\n  gap: 10px;\n  justify-content: end;\n}\n\n.pop-up button {\n  border-radius: 5px;\n  width: 60px;\n}\n\n.task > form {\n  padding: 5px;\n}\n\n.task-form > div {\n  padding: 5px;\n}\n\n.full-task-form #task-title {\n  height: auto;\n  width: 300px;\n  text-align: center;\n}\n\n.task-form #task-title {\n  width: 300px;\n}\n\n.title-wrapper {\n  grid-column: 2 / 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.description-wrapper {\n  grid-column: 2 / 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.due-date-wrapper {\n  grid-column: 2 / 4;\n  grid-row: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.priority-wrapper {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 60px 140px;\n  align-items: center;\n}\n\n.list-wrapper {\n  grid-column: 3 / 4;\n  grid-row: 4 / 5;\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  align-items: center;\n}\n\n.date-container,\n.time-container {\n  display: grid;\n  grid-template-columns: 60px 140px;\n  align-items: center;\n}\n\n.full-task-form > div {\n  grid-column: 2 / 3;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.full-task-form .date-container,\n.full-task-form .time-container {\n  grid-template-columns: 80px 140px;\n}\n\n.full-task-form > div:nth-child(4) {\n  gap: 10px;\n}\n\n.full-task-form select {\n  width: 100px;\n}\n\n.list-wrapper > div {\n  display: grid;\n  grid-template-columns: 60px minmax(100px, 140px);\n  align-items: center;\n}\n\ninput,\ntextarea,\nselect {\n  height: 30px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  background-color: #ecf0f2;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n}\n\nlabel {\n  font-weight: 600;\n}\n\ntextarea {\n  resize: none;\n}\n\n.description > textarea,\n.description-wrapper > textarea {\n  height: 100%;\n  width: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/forms.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,0CAA0C;EAC1C,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;;EAEE,iCAAiC;AACnC;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gDAAgD;EAChD,mBAAmB;AACrB;;AAEA;;;EAGE,YAAY;EACZ,oCAAoC;EACpC,gBAAgB;EAChB,eAAe;EACf,yBAAyB;EACzB,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,YAAY;EACZ,WAAW;AACb","sourcesContent":[".task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 3fr 50px 50px;\n  gap: 10px;\n}\n\n.full-task-form {\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: 1fr 50px 3fr 50px 50px;\n  justify-items: center;\n}\n\nbody.modal-open {\n  pointer-events: none;\n}\n\nbody.modal-open .task-form {\n  opacity: 0.5;\n}\n\nbody.modal-open .pop-up {\n  pointer-events: auto;\n}\n\n.pop-up {\n  position: absolute;\n  width: 250px;\n  height: 150px;\n  background-color: aqua;\n  border-radius: 5px;\n  padding: 10px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.pop-up label,\n.pop-up div {\n  padding: 5px 0px;\n}\n\n.pop-up input {\n  background-color: aqua;\n  border-radius: 0px;\n  border-bottom: 2px solid black;\n}\n\n.pop-up > div {\n  margin-top: auto;\n  display: flex;\n  gap: 10px;\n  justify-content: end;\n}\n\n.pop-up button {\n  border-radius: 5px;\n  width: 60px;\n}\n\n.task > form {\n  padding: 5px;\n}\n\n.task-form > div {\n  padding: 5px;\n}\n\n.full-task-form #task-title {\n  height: auto;\n  width: 300px;\n  text-align: center;\n}\n\n.task-form #task-title {\n  width: 300px;\n}\n\n.title-wrapper {\n  grid-column: 2 / 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.description-wrapper {\n  grid-column: 2 / 4;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.due-date-wrapper {\n  grid-column: 2 / 4;\n  grid-row: 3 / 4;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.priority-wrapper {\n  grid-column: 2 / 3;\n  display: grid;\n  grid-template-columns: 60px 140px;\n  align-items: center;\n}\n\n.list-wrapper {\n  grid-column: 3 / 4;\n  grid-row: 4 / 5;\n  display: grid;\n  grid-template-columns: 1fr 40px;\n  align-items: center;\n}\n\n.date-container,\n.time-container {\n  display: grid;\n  grid-template-columns: 60px 140px;\n  align-items: center;\n}\n\n.full-task-form > div {\n  grid-column: 2 / 3;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.full-task-form .date-container,\n.full-task-form .time-container {\n  grid-template-columns: 80px 140px;\n}\n\n.full-task-form > div:nth-child(4) {\n  gap: 10px;\n}\n\n.full-task-form select {\n  width: 100px;\n}\n\n.list-wrapper > div {\n  display: grid;\n  grid-template-columns: 60px minmax(100px, 140px);\n  align-items: center;\n}\n\ninput,\ntextarea,\nselect {\n  height: 30px;\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n  background-color: #ecf0f2;\n  border: none;\n  border-radius: 5px;\n  padding: 5px;\n}\n\nlabel {\n  font-weight: 600;\n}\n\ntextarea {\n  resize: none;\n}\n\n.description > textarea,\n.description-wrapper > textarea {\n  height: 100%;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  font-size: 1rem;\n  font-family: \"Open Sans\", sans-serif;\n  /* background-color: #ecf0f2; */\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px 4fr 100px;\n}\n\n.header {\n  grid-row: 1 / 2;\n  background-color: #ecf0f2;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-section {\n  grid-row: 2 / 3;\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n}\n\n.footer {\n  grid-row: 3 / 4;\n  padding: 10px;\n}\n\nbutton {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n}\n\n.task-header {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.menu-button {\n  border: none;\n  display: grid;\n  align-items: center;\n}\n\n.header > div:nth-child(2) {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.header img {\n  height: 35px;\n  width: 40px;\n}\n\n.menu-button:hover {\n  background-color: grey;\n}\n\n.display-btn-container img,\n.del-btn-container img,\n.create-list-btn img,\n.add-project-btn img,\n.back-btn img {\n  pointer-events: none;\n}\n", "",{"version":3,"sources":["webpack://./src/layout.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,eAAe;EACf,oCAAoC;EACpC,+BAA+B;AACjC;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,0BAA0B;EAC1B,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,aAAa;AACf;;AAEA;EACE,oCAAoC;EACpC,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;;;;EAKE,oBAAoB;AACtB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans&display=swap\");\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  height: 100vh;\n  font-size: 1rem;\n  font-family: \"Open Sans\", sans-serif;\n  /* background-color: #ecf0f2; */\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 80px 4fr 100px;\n}\n\n.header {\n  grid-row: 1 / 2;\n  background-color: #ecf0f2;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.main-section {\n  grid-row: 2 / 3;\n  display: grid;\n  grid-auto-columns: 1fr;\n  grid-auto-flow: column;\n}\n\n.footer {\n  grid-row: 3 / 4;\n  padding: 10px;\n}\n\nbutton {\n  font-family: \"Open Sans\", sans-serif;\n  font-weight: 400;\n  font-size: 1rem;\n}\n\n.task-header {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.menu-button {\n  border: none;\n  display: grid;\n  align-items: center;\n}\n\n.header > div:nth-child(2) {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n}\n\n.header img {\n  height: 35px;\n  width: 40px;\n}\n\n.menu-button:hover {\n  background-color: grey;\n}\n\n.display-btn-container img,\n.del-btn-container img,\n.create-list-btn img,\n.add-project-btn img,\n.back-btn img {\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
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
  taskInput.maxLength = "35";
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
  const display = document.querySelector(".task-display");

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
  input.placeholder = "Enter List Name";

  btnContainer.appendChild(acceptBtn);
  btnContainer.appendChild(cancelBtn);
  listForm.appendChild(label);
  listForm.appendChild(input);
  listForm.appendChild(btnContainer);
  display.appendChild(listForm);
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

  if (projects) {
    projects.textContent = "";
  }

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

    if (projects) {
      projects.appendChild(container);
    }
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

  if (projectsContainer) {
    if (projectsContainer.textContent === "") {
      image.src = _images_expand_less_svg__WEBPACK_IMPORTED_MODULE_5__;
      image.alt = "Expand less icon";
    } else {
      image.src = _images_expand_more_svg__WEBPACK_IMPORTED_MODULE_6__;
      image.alt = "Expand more icon";
    }
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
  descriptionLabel.htmlFor = "description";
  dateLabel.htmlFor = "date";
  dateLabel.textContent = "Due Date";
  timeLabel.htmlFor = "time";
  timeLabel.textContent = "Due Time";
  priorityLabel.htmlFor = "priority";
  listSelectLabel.htmlFor = "list";
  backBtn.type = "button";
  backBtn.classList.add("back-btn");
  backBtnImg.src = _images_back_svg__WEBPACK_IMPORTED_MODULE_8__;
  backBtnImg.alt = "Back arrow icon";
  title.name = "title";
  title.id = "task-title";
  title.value = taskTitle;
  title.maxLength = "35";
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
            display.removeChild(listForm);
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
          display.removeChild(listForm);
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
        document.body.classList.toggle("modal-open");
      }

      // Cancel new list form
      if (e.target.className === "cancel-list-btn") {
        document.body.classList.toggle("modal-open");

        display.removeChild(listForm);
      }

      // Add new list option
      if (e.target.className === "add-list-btn") {
        const isFormValid = listForm.checkValidity();

        document.body.classList.toggle("modal-open");

        if (!isFormValid) {
          listForm.reportValidity();
        } else {
          e.preventDefault();
          (0,_layout_js__WEBPACK_IMPORTED_MODULE_0__.updateListArray)();

          if (display.contains(form)) {
            (0,_main_content_js__WEBPACK_IMPORTED_MODULE_1__.addListOption)();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.projectList)();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.changeProjectsImage)();
            display.removeChild(listForm);
          } else {
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.projectList)();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.changeProjectsImage)();
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.taskCount)();
            display.removeChild(listForm);
          }
        }
      }

      // Sort tasks according to the clicked project or priority list
      if (e.target.id === "task-btn" || e.target.id === "priority-btn") {
        const btn = e.target;

        (0,_task_display_js__WEBPACK_IMPORTED_MODULE_3__.sortTaskBars)(btn);
      }

      // Display full task details
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsaUJBQWlCLDZDQUFJO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsaURBQUc7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsNkNBQUk7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQWFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzVXlDO0FBQ3hCO0FBQ2tCO0FBQ0E7QUFDSTtBQUNHO0FBQ0E7QUFDSDtBQUNKO0FBQ0U7QUFDRTtBQUNKO0FBQ0s7QUFDTDtBQUNLOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QVEsb0VBQWtCO0FBQzFCOztBQUVBO0FBQ0EsUUFBUSw0REFBVTtBQUNsQixRQUFRLG1EQUFTO0FBQ2pCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2NvbnRlbnQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3Jtcy5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xheW91dC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL25hdi5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY29udGVudC5jc3M/YzM0NyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybXMuY3NzPzdkZDIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xheW91dC5jc3M/ZWFlYyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbmF2LmNzcz8yMGE3Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xheW91dC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbWFpbi1jb250ZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLWRpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi53cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYzsgKi9cXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLWNvbHVtbjogc3BhbiA2O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcbn1cXG5cXG4udGFzay1kaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogSW5yb2R1Y2Ugc2Nyb2xsIGJhclxcbiAgaGVpZ2h0OiA1OTZweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87ICovXFxufVxcblxcbi5lbXB0eS1pbmRpY2F0b3Ige1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXNwbGF5LWJ0bi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBib3R0b206IDEwcHg7XFxufVxcblxcbi5iYWNrLWJ0bi1jb250YWluZXIsXFxuLmRlbC1idG4tY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLndyYXBwZXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LXNlbGY6IHNlbGYtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzayA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhc2sgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrID4gZGl2Om50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4udGFzayBpbWcge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYWNrLWJ0biBpbWcsXFxuLmRlbC1idG4gaW1nLFxcbi5jcmVhdGUtbGlzdC1idG4gaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uZW1wdHktaW5kaWNhdG9yIGltZyB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4ud3JhcHBlciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2NvbnRlbnQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVDs7cUJBRW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixRQUFRO0VBQ1Isb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7OztFQUdFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi53cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjlmYzsgKi9cXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBncmlkLWNvbHVtbjogc3BhbiA2O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMWZyO1xcbn1cXG5cXG4udGFzay1kaXNwbGF5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbiAgLyogSW5yb2R1Y2Ugc2Nyb2xsIGJhclxcbiAgaGVpZ2h0OiA1OTZweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87ICovXFxufVxcblxcbi5lbXB0eS1pbmRpY2F0b3Ige1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXNwbGF5LWJ0bi1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDEwcHg7XFxuICBib3R0b206IDEwcHg7XFxufVxcblxcbi5iYWNrLWJ0bi1jb250YWluZXIsXFxuLmRlbC1idG4tY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLndyYXBwZXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LXNlbGY6IHNlbGYtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFzayA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhc2sgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi50YXNrID4gZGl2Om50aC1vZi10eXBlKDIpIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4udGFzayBpbWcge1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDE1cHg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5iYWNrLWJ0biBpbWcsXFxuLmRlbC1idG4gaW1nLFxcbi5jcmVhdGUtbGlzdC1idG4gaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uZW1wdHktaW5kaWNhdG9yIGltZyB7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4ud3JhcHBlciBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhc2stZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzZnIgNTBweCA1MHB4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA1MHB4IDNmciA1MHB4IDUwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJvZHkubW9kYWwtb3BlbiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuYm9keS5tb2RhbC1vcGVuIC50YXNrLWZvcm0ge1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5ib2R5Lm1vZGFsLW9wZW4gLnBvcC11cCB7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuLnBvcC11cCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLnBvcC11cCBsYWJlbCxcXG4ucG9wLXVwIGRpdiB7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG5cXG4ucG9wLXVwIGlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBib3JkZXItcmFkaXVzOiAwcHg7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wb3AtdXAgPiBkaXYge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLnBvcC11cCBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcblxcbi50YXNrID4gZm9ybSB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi50YXNrLWZvcm0gPiBkaXYge1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gI3Rhc2stdGl0bGUge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udGFzay1mb3JtICN0YXNrLXRpdGxlIHtcXG4gIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnRpdGxlLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kZXNjcmlwdGlvbi13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZHVlLWRhdGUtd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucHJpb3JpdHktd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDE0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxpc3Qtd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBncmlkLXJvdzogNCAvIDU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXRlLWNvbnRhaW5lcixcXG4udGltZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCAxNDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSA+IGRpdiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gLmRhdGUtY29udGFpbmVyLFxcbi5mdWxsLXRhc2stZm9ybSAudGltZS1jb250YWluZXIge1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IDE0MHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gPiBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtIHNlbGVjdCB7XFxuICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi5saXN0LXdyYXBwZXIgPiBkaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCBtaW5tYXgoMTAwcHgsIDE0MHB4KTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmlucHV0LFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMjtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxubGFiZWwge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gPiB0ZXh0YXJlYSxcXG4uZGVzY3JpcHRpb24td3JhcHBlciA+IHRleHRhcmVhIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZm9ybXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMscUNBQXFDO0VBQ3JDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLDBDQUEwQztFQUMxQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztFQUNoQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsU0FBUztFQUNULG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7O0VBRUUsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGFzay1mb3JtIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDNmciA1MHB4IDUwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDUwcHggM2ZyIDUwcHggNTBweDtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYm9keS5tb2RhbC1vcGVuIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG5ib2R5Lm1vZGFsLW9wZW4gLnRhc2stZm9ybSB7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbmJvZHkubW9kYWwtb3BlbiAucG9wLXVwIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbn1cXG5cXG4ucG9wLXVwIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogNXB4O1xcbn1cXG5cXG4ucG9wLXVwIGxhYmVsLFxcbi5wb3AtdXAgZGl2IHtcXG4gIHBhZGRpbmc6IDVweCAwcHg7XFxufVxcblxcbi5wb3AtdXAgaW5wdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnBvcC11cCA+IGRpdiB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4ucG9wLXVwIGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogNjBweDtcXG59XFxuXFxuLnRhc2sgPiBmb3JtIHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuLnRhc2stZm9ybSA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSAjdGFzay10aXRsZSB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMzAwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWZvcm0gI3Rhc2stdGl0bGUge1xcbiAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4udGl0bGUtd3JhcHBlciB7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLXdyYXBwZXIge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5kdWUtZGF0ZS13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBnYXA6IDIwcHg7XFxufVxcblxcbi5wcmlvcml0eS13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMTQwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGlzdC13cmFwcGVyIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGdyaWQtcm93OiA0IC8gNTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRhdGUtY29udGFpbmVyLFxcbi50aW1lLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDE0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZ1bGwtdGFzay1mb3JtID4gZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSAuZGF0ZS1jb250YWluZXIsXFxuLmZ1bGwtdGFzay1mb3JtIC50aW1lLWNvbnRhaW5lciB7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggMTQwcHg7XFxufVxcblxcbi5mdWxsLXRhc2stZm9ybSA+IGRpdjpudGgtY2hpbGQoNCkge1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uZnVsbC10YXNrLWZvcm0gc2VsZWN0IHtcXG4gIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuLmxpc3Qtd3JhcHBlciA+IGRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IG1pbm1heCgxMDBweCwgMTQwcHgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaW5wdXQsXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYyO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5kZXNjcmlwdGlvbiA+IHRleHRhcmVhLFxcbi5kZXNjcmlwdGlvbi13cmFwcGVyID4gdGV4dGFyZWEge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYyOyAqL1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCA0ZnIgMTAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tc2VjdGlvbiB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5kaXNwbGF5LWJ0bi1jb250YWluZXIgaW1nLFxcbi5kZWwtYnRuLWNvbnRhaW5lciBpbWcsXFxuLmNyZWF0ZS1saXN0LWJ0biBpbWcsXFxuLmFkZC1wcm9qZWN0LWJ0biBpbWcsXFxuLmJhY2stYnRuIGltZyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xheW91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7O0VBS0Usb0JBQW9CO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2FucyZkaXNwbGF5PXN3YXBcXFwiKTtcXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYyOyAqL1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODBweCA0ZnIgMTAwcHg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmMjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tc2VjdGlvbiB7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDFmcjtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxufVxcblxcbi5mb290ZXIge1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi50YXNrLWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4ubWVudS1idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgPiBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGVhZGVyIGltZyB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLm1lbnUtYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi5kaXNwbGF5LWJ0bi1jb250YWluZXIgaW1nLFxcbi5kZWwtYnRuLWNvbnRhaW5lciBpbWcsXFxuLmNyZWF0ZS1saXN0LWJ0biBpbWcsXFxuLmFkZC1wcm9qZWN0LWJ0biBpbWcsXFxuLmJhY2stYnRuIGltZyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1haW4tbWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYyO1xcbiAgcGFkZGluZzogMTVweCAwcHg7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLW1lbnUgYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcblxcbi5tYWluLW1lbnUgLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi50b2RheS1jb250YWluZXIsXFxuLnVwY29taW5nLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxufVxcblxcbi5mYXYtY29udGFpbmVyLFxcbi5wcm9qLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDNmciAzNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbn1cXG5cXG4uZmF2LWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSksXFxuLnByb2otY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxufVxcblxcbi5mYXZvcml0ZXMsXFxuLnByb2plY3RzIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4uZmF2b3JpdGVzID4gZGl2LFxcbi5wcm9qZWN0cyA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDNmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmF2b3JpdGVzID4gZGl2ID4gaW1nLFxcbi5wcm9qZWN0cyA+IGRpdiA+IGltZyB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lciA+IGltZyxcXG4udXBjb21pbmctY29udGFpbmVyID4gaW1nLFxcbi5mYXYtY29udGFpbmVyIGltZyxcXG4ucHJvai1jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbltjbGFzcyo9XFxcImNvdW50XFxcIl0ge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyOmhvdmVyLFxcbi51cGNvbWluZy1jb250YWluZXI6aG92ZXIsXFxuLmZhdi13cmFwcGVyOmhvdmVyLFxcbi5wcm9qLXdyYXBwZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lcjpob3ZlciAudG9kYXktYnRuLFxcbi51cGNvbWluZy1jb250YWluZXI6aG92ZXIgLnVwY29taW5nLWJ0bixcXG4uZmF2LXdyYXBwZXI6aG92ZXIgLmZhdm9yaXRlcy1idG4sXFxuLnByb2otd3JhcHBlcjpob3ZlciAucHJvamVjdHMtYnRuLFxcbi5wcm9qLXdyYXBwZXI6aG92ZXIgLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4uZmF2b3JpdGVzID4gZGl2OmhvdmVyLFxcbi5wcm9qZWN0cyA+IGRpdjpob3ZlcixcXG4uZmF2b3JpdGVzID4gZGl2OmhvdmVyIGJ1dHRvbixcXG4ucHJvamVjdHMgPiBkaXY6aG92ZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcXG59XFxuXFxuLm1haW4tbWVudSBidXR0b246aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL25hdi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQ0FBa0M7QUFDcEM7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBOzs7O0VBSUUsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLHNCQUFzQjtBQUN4Qjs7QUFFQTs7Ozs7RUFLRSxzQkFBc0I7QUFDeEI7O0FBRUE7Ozs7RUFJRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4tbWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGYyO1xcbiAgcGFkZGluZzogMTVweCAwcHg7XFxuICBncmlkLWNvbHVtbjogc3BhbiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEwcHg7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLW1lbnUgYnV0dG9uIHtcXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZzogMnB4IDEwcHg7XFxufVxcblxcbi5tYWluLW1lbnUgLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi50b2RheS1jb250YWluZXIsXFxuLnVwY29taW5nLWNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxufVxcblxcbi5mYXYtY29udGFpbmVyLFxcbi5wcm9qLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXB4IDNmciAzNXB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbn1cXG5cXG4uZmF2LWNvbnRhaW5lciA+IGRpdjpudGgtY2hpbGQoMSksXFxuLnByb2otY29udGFpbmVyID4gZGl2Om50aC1jaGlsZCgxKSB7XFxuICBwYWRkaW5nOiA1cHggMTBweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDM1cHggM2ZyIDM1cHg7XFxuICBjb2x1bW4tZ2FwOiA1cHg7XFxufVxcblxcbi5mYXZvcml0ZXMsXFxuLnByb2plY3RzIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcbn1cXG5cXG4uZmF2b3JpdGVzID4gZGl2LFxcbi5wcm9qZWN0cyA+IGRpdiB7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMHB4IDNmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZmF2b3JpdGVzID4gZGl2ID4gaW1nLFxcbi5wcm9qZWN0cyA+IGRpdiA+IGltZyB7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lciA+IGltZyxcXG4udXBjb21pbmctY29udGFpbmVyID4gaW1nLFxcbi5mYXYtY29udGFpbmVyIGltZyxcXG4ucHJvai1jb250YWluZXIgaW1nIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnRuIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMHB4O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcbltjbGFzcyo9XFxcImNvdW50XFxcIl0ge1xcbiAgdGV4dC1hbGlnbjogZW5kO1xcbn1cXG5cXG4udG9kYXktY29udGFpbmVyOmhvdmVyLFxcbi51cGNvbWluZy1jb250YWluZXI6aG92ZXIsXFxuLmZhdi13cmFwcGVyOmhvdmVyLFxcbi5wcm9qLXdyYXBwZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG59XFxuXFxuLnRvZGF5LWNvbnRhaW5lcjpob3ZlciAudG9kYXktYnRuLFxcbi51cGNvbWluZy1jb250YWluZXI6aG92ZXIgLnVwY29taW5nLWJ0bixcXG4uZmF2LXdyYXBwZXI6aG92ZXIgLmZhdm9yaXRlcy1idG4sXFxuLnByb2otd3JhcHBlcjpob3ZlciAucHJvamVjdHMtYnRuLFxcbi5wcm9qLXdyYXBwZXI6aG92ZXIgLmFkZC1wcm9qZWN0LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4uZmF2b3JpdGVzID4gZGl2OmhvdmVyLFxcbi5wcm9qZWN0cyA+IGRpdjpob3ZlcixcXG4uZmF2b3JpdGVzID4gZGl2OmhvdmVyIGJ1dHRvbixcXG4ucHJvamVjdHMgPiBkaXY6aG92ZXIgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGNob2NvbGF0ZTtcXG59XFxuXFxuLm1haW4tbWVudSBidXR0b246aG92ZXIge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGVudC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRlbnQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm1zLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xheW91dC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFwiLi9sYXlvdXQuY3NzXCI7XG5pbXBvcnQgSW1nIGZyb20gXCIuL2ltYWdlcy9tZW51LnN2Z1wiO1xuaW1wb3J0IEltZzIgZnJvbSBcIi4vaW1hZ2VzL2NhdC5zdmdcIjtcbmltcG9ydCBJbWczIGZyb20gXCIuL2ltYWdlcy9iZWxsLnN2Z1wiO1xuaW1wb3J0IEltZzQgZnJvbSBcIi4vaW1hZ2VzL2hlbHAuc3ZnXCI7XG5cbmNvbnN0IGxpc3RBcnJheSA9IFtcInBlcnNvbmFsXCIsIFwid29ya1wiLCBcInNob3BwaW5nXCJdO1xuY29uc3QgcHJpb3JpdHlBcnJheSA9IFtcImNyaXRpY2FsXCIsIFwiaGlnaFwiLCBcIm5vcm1hbFwiXTtcblxuY29uc3QgcGFnZUxheW91dCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbWVudUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvZmlsZUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBiZWxsSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGhlbHBJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKFwibWFpbi1zZWN0aW9uXCIpO1xuICBmb290ZXIuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgbWVudUltZy5zcmMgPSBJbWc7XG4gIG1lbnVJbWcuYWx0ID0gXCJtZW51IGljb25cIjtcbiAgbWVudUJ1dHRvbi50eXBlID0gXCJidXR0b25cIjtcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b25cIik7XG4gIHByb2ZpbGVJbWcuc3JjID0gSW1nMjtcbiAgcHJvZmlsZUltZy5hbHQgPSBcIkEgY2F0IGljb25cIjtcbiAgYmVsbEltZy5zcmMgPSBJbWczO1xuICBiZWxsSW1nLmFsdCA9IFwiQSBiZWxsIGljb25cIjtcbiAgaGVscEltZy5zcmMgPSBJbWc0O1xuICBoZWxwSW1nLmFsdCA9IFwiQSBxdWVzdGlvbiBtYXJrIGljb25cIjtcblxuICBtZW51QnV0dG9uLmFwcGVuZENoaWxkKG1lbnVJbWcpO1xuICBwcm9maWxlLmFwcGVuZENoaWxkKGhlbHBJbWcpO1xuICBwcm9maWxlLmFwcGVuZENoaWxkKGJlbGxJbWcpO1xuICBwcm9maWxlLmFwcGVuZENoaWxkKHByb2ZpbGVJbWcpO1xuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudUNvbnRhaW5lcik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChwcm9maWxlKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG59O1xuXG5jb25zdCB1cGRhdGVMaXN0QXJyYXkgPSAoKSA9PiB7XG4gIGNvbnN0IG5ld0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ldy1saXN0XCIpLnZhbHVlO1xuICBsaXN0QXJyYXkucHVzaChuZXdMaXN0KTtcbn07XG5cbmV4cG9ydCB7IGxpc3RBcnJheSwgcHJpb3JpdHlBcnJheSwgcGFnZUxheW91dCwgdXBkYXRlTGlzdEFycmF5IH07XG4iLCJpbXBvcnQgXCIuL2NvbnRlbnQuY3NzXCI7XG5pbXBvcnQgXCIuL2Zvcm1zLmNzc1wiO1xuaW1wb3J0IHsgbGlzdEFycmF5IH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgSW1nIGZyb20gXCIuL2ltYWdlcy9hZGQtdGFzay5zdmdcIjtcbmltcG9ydCBJbWcyIGZyb20gXCIuL2ltYWdlcy9iYWNrLnN2Z1wiO1xuaW1wb3J0IEltZzMgZnJvbSBcIi4vaW1hZ2VzL2FkZC1saXN0LnN2Z1wiO1xuaW1wb3J0IEltZzQgZnJvbSBcIi4vaW1hZ2VzL3NhdmUuc3ZnXCI7XG5pbXBvcnQgSW1nNSBmcm9tIFwiLi9pbWFnZXMvY2FsZW5kYXIuc3ZnXCI7XG5cbmNvbnN0IHRhc2tBcnJheSA9IFtdO1xuXG5jb25zdCBtYWluQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXNlY3Rpb25cIik7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwid3JhcHBlclwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWhlYWRlclwiKTtcbiAgdGFza0Rpc3BsYXkuY2xhc3NMaXN0LmFkZChcInRhc2stZGlzcGxheVwiKTtcbiAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LWJ0bi1jb250YWluZXJcIik7XG4gIGJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJmb3JtLWJ0blwiKTtcbiAgYnRuSW1nLnNyYyA9IEltZztcbiAgYnRuSW1nLmFsdCA9IFwiUGx1cyBpY29uXCI7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICBidG4uYXBwZW5kQ2hpbGQoYnRuSW1nKTtcbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgd3JhcHBlci5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheSk7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xufTtcblxuY29uc3QgZW1wdHlJbmRpY2F0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImVtcHR5LWluZGljYXRvclwiKTtcbiAgaW1nLnNyYyA9IEltZzU7XG4gIGltZy5hbHQgPSBcImVtcHR5IGltYWdlXCI7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBcIk5vdGhpbmcgdG8gZG9cIjtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmEpO1xuICBkaXNwbGF5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIik7XG5cbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgLy8gY3JlYXRlIGZvcm0gaW5wdXRzXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGR1ZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNvbnN0IGJhY2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBiYWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYmFja0J0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIC8vIGNyZWF0ZSBmb3JtIHNlbGVjdGlvbnNcbiAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3Qgc3VibWl0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VibWl0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3Qgc3VibWl0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHN1Ym1pdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgcHJpb3JpdHlPcHRpb24zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgY29uc3QgY3JlYXRlTGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGNyZWF0ZUxpc3RJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAvL0FkZCBhdHRyaWJ1dGVzXG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcInRhc2stZm9ybVwiKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtd3JhcHBlclwiKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLXdyYXBwZXJcIik7XG4gIGR1ZURhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImR1ZS1kYXRlLXdyYXBwZXJcIik7XG4gIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eS13cmFwcGVyXCIpO1xuICBzdWJtaXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3Qtd3JhcHBlclwiKTtcbiAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1jb250YWluZXJcIik7XG4gIGJhY2tCdG5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJhY2stYnRuLWNvbnRhaW5lclwiKTtcbiAgYmFja0J0bi50eXBlID0gXCJidXR0b25cIjtcbiAgYmFja0J0bi5jbGFzc0xpc3QuYWRkKFwiYmFjay1idG5cIik7XG4gIGJhY2tCdG5JbWcuc3JjID0gSW1nMjtcbiAgYmFja0J0bkltZy5hbHQgPSBcIkJhY2sgYXJyb3cgaWNvblwiO1xuICB0YXNrTGFiZWwuaHRtbEZvciA9IFwidGFzay10aXRsZVwiO1xuICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2sgbmFtZVwiO1xuICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIldoYXQgaXMgdG8gYmUgZG9uZT9cIjtcbiAgZHVlRGF0ZUxhYmVsLmh0bWxGb3IgPSBcImRhdGVcIjtcbiAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XG4gIHByaW9yaXR5TGFiZWwuaHRtbEZvciA9IFwicHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgc3VibWl0TGFiZWwuaHRtbEZvciA9IFwibGlzdFwiO1xuICBzdWJtaXRMYWJlbC50ZXh0Q29udGVudCA9IFwiTGlzdFwiO1xuICBkdWVEYXRlSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICB0YXNrSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICB0YXNrSW5wdXQubmFtZSA9IFwidGl0bGVcIjtcbiAgdGFza0lucHV0LmlkID0gXCJ0YXNrLXRpdGxlXCI7XG4gIHRhc2tJbnB1dC5tYXhMZW5ndGggPSBcIjM1XCI7XG4gIHRhc2tJbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gIGRlc2NyaXB0aW9uSW5wdXQubmFtZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb25JbnB1dC5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZHVlRGF0ZUlucHV0Lm5hbWUgPSBcImRhdGVcIjtcbiAgZHVlRGF0ZUlucHV0LmlkID0gXCJkYXRlXCI7XG4gIHByaW9yaXR5SW5wdXQubmFtZSA9IFwicHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlJbnB1dC5pZCA9IFwicHJpb3JpdHlcIjtcbiAgY3JlYXRlTGlzdEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgY3JlYXRlTGlzdEJ0bi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlLWxpc3QtYnRuXCIpO1xuICBjcmVhdGVMaXN0SW1nLnNyYyA9IEltZzM7XG4gIGNyZWF0ZUxpc3RJbWcuYWx0ID0gXCJBZGQgbGlzdCBpY29uXCI7XG4gIHN1Ym1pdElucHV0Lm5hbWUgPSBcImxpc3RcIjtcbiAgc3VibWl0SW5wdXQuaWQgPSBcImxpc3RcIjtcbiAgcHJpb3JpdHlPcHRpb24xLnZhbHVlID0gXCJjcml0aWNhbFwiO1xuICBwcmlvcml0eU9wdGlvbjEudGV4dENvbnRlbnQgPSBcIkNyaXRpY2FsXCI7XG4gIHByaW9yaXR5T3B0aW9uMi52YWx1ZSA9IFwiaGlnaFwiO1xuICBwcmlvcml0eU9wdGlvbjIudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgcHJpb3JpdHlPcHRpb24zLnZhbHVlID0gXCJub3JtYWxcIjtcbiAgcHJpb3JpdHlPcHRpb24zLnRleHRDb250ZW50ID0gXCJOb3JtYWxcIjtcblxuICAvLyBEeW5hbWljYWxseSBhZGQgbGlzdCBvcHRpb25zLiBXaGVuIHRoZSB1c2VyIGFkZHMgYSBuZXcgbGlzdCxcbiAgLy8gdGhlIG5ldyBsaXN0IHdpbGwgYmUgcHJlc2VudCBpbiB0aGUgbmV4dCBmb3JtLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHN1Ym1pdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICBzdWJtaXRPcHRpb24udmFsdWUgPSBsaXN0QXJyYXlbaV07XG4gICAgc3VibWl0T3B0aW9uLnRleHRDb250ZW50ID0gbGlzdEFycmF5W2ldO1xuXG4gICAgc3VibWl0SW5wdXQuYXBwZW5kQ2hpbGQoc3VibWl0T3B0aW9uKTtcbiAgfVxuXG4gIC8vIEFwcGVuZCBub2Rlc1xuICBwcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHByaW9yaXR5T3B0aW9uMSk7XG4gIHByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24yKTtcbiAgcHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChwcmlvcml0eU9wdGlvbjMpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tMYWJlbCk7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICBzdWJtaXRTZWxlY3QuYXBwZW5kQ2hpbGQoc3VibWl0TGFiZWwpO1xuICBzdWJtaXRTZWxlY3QuYXBwZW5kQ2hpbGQoc3VibWl0SW5wdXQpO1xuICBjcmVhdGVMaXN0QnRuLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RJbWcpO1xuICBzdWJtaXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3VibWl0U2VsZWN0KTtcbiAgc3VibWl0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUxpc3RCdG4pO1xuICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVDb250YWluZXIpO1xuICBiYWNrQnRuLmFwcGVuZENoaWxkKGJhY2tCdG5JbWcpO1xuICBiYWNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuICBmb3JtLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Q29udGFpbmVyKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGJhY2tCdG5Db250YWluZXIpO1xuICBkaXNwbGF5LmFwcGVuZENoaWxkKGZvcm0pO1xufTtcblxuY29uc3QgY2hhbmdlQnV0dG9uID0gKGVsZSkgPT4ge1xuICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXktYnRuLWNvbnRhaW5lclwiKTtcblxuICBidG5Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGlmIChlbGUuY2xhc3NOYW1lID09PSBcImZvcm0tYnRuXCIpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic3VibWl0LWJ0blwiKTtcbiAgICBidG5JbWcuc3JjID0gSW1nNDtcbiAgICBidG5JbWcuYWx0ID0gXCJDaGVjayBjaXJjbGUgaWNvblwiO1xuXG4gICAgYnRuLmFwcGVuZENoaWxkKGJ0bkltZyk7XG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIH0gZWxzZSBpZiAoXG4gICAgZWxlLmNsYXNzTmFtZSA9PT0gXCJzdWJtaXQtYnRuXCIgfHxcbiAgICBlbGUuY2xhc3NOYW1lID09PSBcImJhY2stYnRuXCIgfHxcbiAgICBlbGUuY2xhc3NOYW1lID09PSBcInNhdmUtYnRuXCJcbiAgKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjb25zdCBidG5JbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImZvcm0tYnRuXCIpO1xuICAgIGJ0bkltZy5zcmMgPSBJbWc7XG4gICAgYnRuSW1nLmFsdCA9IFwiQWRkIGNpcmNsZSBpY29uXCI7XG5cbiAgICBidG4uYXBwZW5kQ2hpbGQoYnRuSW1nKTtcbiAgICBidG5Db250YWluZXIuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNvbnN0IGJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gICAgYnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwic2F2ZS1idG5cIik7XG4gICAgYnRuSW1nLnNyYyA9IEltZzQ7XG4gICAgYnRuSW1nLmFsdCA9IFwiQ2hlY2sgY2lyY2xlIGljb25cIjtcblxuICAgIGJ0bi5hcHBlbmRDaGlsZChidG5JbWcpO1xuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG4pO1xuICB9XG59O1xuXG5jb25zdCBuZXdMaXN0Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuXG4gIGNvbnN0IGxpc3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYWNjZXB0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBsaXN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwicG9wLXVwXCIpO1xuICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKFwiY2FuY2VsLWxpc3QtYnRuXCIpO1xuICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICBhY2NlcHRCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGFjY2VwdEJ0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWxpc3QtYnRuXCIpO1xuICBhY2NlcHRCdG4udGV4dENvbnRlbnQgPSBcIkFkZFwiO1xuICBsYWJlbC5odG1sRm9yID0gXCJuZXctbGlzdFwiO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IExpc3RcIjtcbiAgaW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICBpbnB1dC5uYW1lID0gXCJuZXctbGlzdFwiO1xuICBpbnB1dC5pZCA9IFwibmV3LWxpc3RcIjtcbiAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgTGlzdCBOYW1lXCI7XG5cbiAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGFjY2VwdEJ0bik7XG4gIGJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICBsaXN0Rm9ybS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIGxpc3RGb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgbGlzdEZvcm0uYXBwZW5kQ2hpbGQoYnRuQ29udGFpbmVyKTtcbiAgZGlzcGxheS5hcHBlbmRDaGlsZChsaXN0Rm9ybSk7XG59O1xuXG5jb25zdCBhZGRUaW1lT3B0aW9uID0gKCkgPT4ge1xuICBjb25zdCBzaWJsaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kYXRlLWNvbnRhaW5lclwiKTtcbiAgY29uc3Qgc2libGluZ1R3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZS1jb250YWluZXJcIik7XG4gIGNvbnN0IHBhcmVudCA9IHNpYmxpbmcucGFyZW50Tm9kZTtcblxuICBpZiAocGFyZW50LmNvbnRhaW5zKHNpYmxpbmdUd28pKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgY29uc3QgdGltZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lLWNvbnRhaW5lclwiKTtcbiAgICBsYWJlbC5odG1sRm9yID0gXCJ0aW1lXCI7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlRpbWVcIjtcbiAgICB0aW1lSW5wdXQudHlwZSA9IFwidGltZVwiO1xuICAgIHRpbWVJbnB1dC5uYW1lID0gXCJ0aW1lXCI7XG4gICAgdGltZUlucHV0LmlkID0gXCJ0aW1lXCI7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lSW5wdXQpO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9XG59O1xuXG5jb25zdCBhZGRMaXN0T3B0aW9uID0gKCkgPT4ge1xuICBjb25zdCBvcHRpb25zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsaXN0XCIpO1xuICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuZXctbGlzdFwiKS52YWx1ZTtcbiAgY29uc3QgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICBuZXdPcHRpb24udmFsdWUgPSBuYW1lO1xuICBuZXdPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICBuZXdPcHRpb24udGV4dENvbnRlbnQgPSBuYW1lO1xuXG4gIG9wdGlvbnNDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3T3B0aW9uKTtcbn07XG5cbmNvbnN0IHByb2Nlc3NGb3JtID0gKCkgPT4ge1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWZvcm1cIik7XG4gIGNvbnN0IGdldEZvcm1EYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShmb3JtKSk7XG5cbiAgdGFza0FycmF5LnB1c2goZ2V0Rm9ybURhdGEpO1xufTtcblxuY29uc3QgbW9kaWZ5VGFzayA9ICgpID0+IHtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZnVsbC10YXNrLWZvcm1cIik7XG4gIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQoZm9ybS5kYXRhc2V0Lm51bSk7XG4gIGNvbnN0IGZvcm1EYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShmb3JtKSk7XG5cbiAgdGFza0FycmF5LnNwbGljZShpbmRleCwgMSwgZm9ybURhdGEpO1xufTtcblxuY29uc3QgYmFja0J1dHRvbkNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIik7XG4gIGNvbnN0IGNoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYWNrLWJ0bi1jb250YWluZXJcIik7XG5cbiAgaWYgKGhlYWRlci5jb250YWlucyhjaGlsZCkpIHtcbiAgICBoZWFkZXIucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICB9XG59O1xuZXhwb3J0IHtcbiAgbWFpbkNvbnRlbnQsXG4gIGVtcHR5SW5kaWNhdG9yLFxuICBjcmVhdGVGb3JtLFxuICBjaGFuZ2VCdXR0b24sXG4gIG5ld0xpc3RGb3JtLFxuICBhZGRUaW1lT3B0aW9uLFxuICBhZGRMaXN0T3B0aW9uLFxuICBwcm9jZXNzRm9ybSxcbiAgbW9kaWZ5VGFzayxcbiAgYmFja0J1dHRvbkNvbnRyb2xsZXIsXG4gIHRhc2tBcnJheSxcbn07XG4iLCJpbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi9tYWluLWNvbnRlbnRcIjtcbmltcG9ydCBcIi4vbmF2LmNzc1wiO1xuaW1wb3J0IHsgbGlzdEFycmF5IH0gZnJvbSBcIi4vbGF5b3V0XCI7XG5pbXBvcnQgSW1nIGZyb20gXCIuL2ltYWdlcy90b2RheS5zdmdcIjtcbmltcG9ydCBJbWcyIGZyb20gXCIuL2ltYWdlcy91cGNvbWluZy5zdmdcIjtcbmltcG9ydCBJbWczIGZyb20gXCIuL2ltYWdlcy9leHBhbmQtbGVzcy5zdmdcIjtcbmltcG9ydCBJbWc0IGZyb20gXCIuL2ltYWdlcy9leHBhbmQtbW9yZS5zdmdcIjtcbmltcG9ydCBJbWc1IGZyb20gXCIuL2ltYWdlcy9jcml0aWNhbC5zdmdcIjtcbmltcG9ydCBJbWc2IGZyb20gXCIuL2ltYWdlcy9oaWdoLnN2Z1wiO1xuaW1wb3J0IEltZzcgZnJvbSBcIi4vaW1hZ2VzL25vcm1hbC5zdmdcIjtcbmltcG9ydCBJbWc4IGZyb20gXCIuL2ltYWdlcy9wZXJzb25hbC5zdmdcIjtcbmltcG9ydCBJbWc5IGZyb20gXCIuL2ltYWdlcy93b3JrLnN2Z1wiO1xuaW1wb3J0IEltZzEwIGZyb20gXCIuL2ltYWdlcy9zaG9wcGluZy5zdmdcIjtcbmltcG9ydCBJbWcxMSBmcm9tIFwiLi9pbWFnZXMvbmV3LnN2Z1wiO1xuaW1wb3J0IEltZzEyIGZyb20gXCIuL2ltYWdlcy9hZGQtbGlzdC5zdmdcIjtcblxuY29uc3QgbWFpbk1lbnUgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tc2VjdGlvblwiKTtcbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRvZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdG9kYXlJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgdG9kYXlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCB0b2RheUNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdXBjb21pbmdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB1cGNvbWluZ0ltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCB1cGNvbWluZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHVwY29taW5nQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBmYXZXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZmF2b3JpdGVzSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGZhdm9yaXRlc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByb2plY3RzSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdHNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBhZGRMaXN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgYWRkTGlzdEltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1haW4tbWVudVwiKTtcbiAgdG9kYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZGF5LWNvbnRhaW5lclwiKTtcbiAgdXBjb21pbmdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInVwY29taW5nLWNvbnRhaW5lclwiKTtcbiAgdG9kYXlCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIHRvZGF5QnRuLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1idG5cIik7XG4gIHRvZGF5QnRuLnRleHRDb250ZW50ID0gXCJUb2RheVwiO1xuICB1cGNvbWluZ0J0bi50eXBlID0gXCJidXR0b25cIjtcbiAgdXBjb21pbmdCdG4uY2xhc3NMaXN0LmFkZChcInVwY29taW5nLWJ0blwiKTtcbiAgdXBjb21pbmdCdG4udGV4dENvbnRlbnQgPSBcIlVwY29taW5nXCI7XG4gIHRvZGF5Q291bnQuY2xhc3NMaXN0LmFkZChcInRvZGF5LWNvdW50XCIpO1xuICB1cGNvbWluZ0NvdW50LmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZy1jb3VudFwiKTtcbiAgZmF2Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmYXYtY29udGFpbmVyXCIpO1xuICBmYXZXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJmYXYtd3JhcHBlclwiKTtcbiAgcHJvakNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvai1jb250YWluZXJcIik7XG4gIHByb2pXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qLXdyYXBwZXJcIik7XG4gIGZhdm9yaXRlc0J0bi50eXBlID0gXCJidXR0b25cIjtcbiAgZmF2b3JpdGVzQnRuLmNsYXNzTGlzdC5hZGQoXCJmYXZvcml0ZXMtYnRuXCIpO1xuICBmYXZvcml0ZXNCdG4udGV4dENvbnRlbnQgPSBcIkZhdm9yaXRlc1wiO1xuICBwcm9qZWN0c0J0bi50eXBlID0gXCJidXR0b25cIjtcbiAgcHJvamVjdHNCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3RzLWJ0blwiKTtcbiAgcHJvamVjdHNCdG4udGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gIGFkZExpc3RCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGFkZExpc3RCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1wcm9qZWN0LWJ0blwiKTtcbiAgZmF2b3JpdGVzLmNsYXNzTGlzdC5hZGQoXCJmYXZvcml0ZXNcIik7XG4gIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0c1wiKTtcbiAgdG9kYXlJbWcuc3JjID0gSW1nO1xuICB0b2RheUltZy5hbHQgPSBcIkNhbGVuZGVyIGljb25cIjtcbiAgdXBjb21pbmdJbWcuc3JjID0gSW1nMjtcbiAgdXBjb21pbmdJbWcuYWx0ID0gXCJDYWxlbmRlciBpY29uXCI7XG4gIGZhdm9yaXRlc0ltZy5zcmMgPSBJbWczO1xuICBmYXZvcml0ZXNJbWcuYWx0ID0gXCJFeHBhbmQgbGVzcyBpY29uXCI7XG4gIGZhdm9yaXRlc0ltZy5jbGFzc0xpc3QuYWRkKFwiZmF2b3JpdGVzLWltZ1wiKTtcbiAgcHJvamVjdHNJbWcuc3JjID0gSW1nMztcbiAgcHJvamVjdHNJbWcuYWx0ID0gXCJFeHBhbmQgbGVzcyBpY29uXCI7XG4gIHByb2plY3RzSW1nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0cy1pbWdcIik7XG4gIGFkZExpc3RJbWcuc3JjID0gSW1nMTI7XG4gIGFkZExpc3RJbWcuYWx0ID0gXCJBZGQgbGlzdCBpY29uXCI7XG5cbiAgYWRkTGlzdEJ0bi5hcHBlbmRDaGlsZChhZGRMaXN0SW1nKTtcbiAgdG9kYXlDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kYXlJbWcpO1xuICB0b2RheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RheUJ0bik7XG4gIHRvZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZGF5Q291bnQpO1xuICB1cGNvbWluZ0NvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGNvbWluZ0ltZyk7XG4gIHVwY29taW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwY29taW5nQnRuKTtcbiAgdXBjb21pbmdDb250YWluZXIuYXBwZW5kQ2hpbGQodXBjb21pbmdDb3VudCk7XG4gIGZhdldyYXBwZXIuYXBwZW5kQ2hpbGQoZmF2b3JpdGVzSW1nKTtcbiAgZmF2V3JhcHBlci5hcHBlbmRDaGlsZChmYXZvcml0ZXNCdG4pO1xuICBmYXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZmF2V3JhcHBlcik7XG4gIGZhdkNvbnRhaW5lci5hcHBlbmRDaGlsZChmYXZvcml0ZXMpO1xuICBwcm9qV3JhcHBlci5hcHBlbmRDaGlsZChwcm9qZWN0c0ltZyk7XG4gIHByb2pXcmFwcGVyLmFwcGVuZENoaWxkKHByb2plY3RzQnRuKTtcbiAgcHJvaldyYXBwZXIuYXBwZW5kQ2hpbGQoYWRkTGlzdEJ0bik7XG4gIHByb2pDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvaldyYXBwZXIpO1xuICBwcm9qQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzKTtcbiAgbWVudS5hcHBlbmRDaGlsZCh0b2RheUNvbnRhaW5lcik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQodXBjb21pbmdDb250YWluZXIpO1xuICBtZW51LmFwcGVuZENoaWxkKGZhdkNvbnRhaW5lcik7XG4gIG1lbnUuYXBwZW5kQ2hpbGQocHJvakNvbnRhaW5lcik7XG4gIG1haW4uaW5zZXJ0QmVmb3JlKG1lbnUsIHdyYXBwZXIpO1xufTtcblxuY29uc3QgZmF2b3JpdGVzTGlzdCA9ICgpID0+IHtcbiAgY29uc3QgZmF2b3JpdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXNcIik7XG4gIGNvbnN0IGNvbnRhaW5lck9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhaW5lclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNvbnRhaW5lclRocmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpb3JpdHlPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwcmlvcml0eVR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHByaW9yaXR5VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwcmlvcml0eU9uZUNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJpb3JpdHlUd29Db3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5VGhyZWVDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGNyaXRpY2FsSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGhpZ2hJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3Qgbm9ybWFsSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgcHJpb3JpdHlPbmUuY2xhc3NMaXN0LmFkZChcImNyaXRpY2FsLWJ0blwiKTtcbiAgcHJpb3JpdHlPbmUuaWQgPSBcInByaW9yaXR5LWJ0blwiO1xuICBwcmlvcml0eU9uZS50ZXh0Q29udGVudCA9IFwiQ3JpdGljYWwgUHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlUd28uY2xhc3NMaXN0LmFkZChcImhpZ2gtYnRuXCIpO1xuICBwcmlvcml0eVR3by5pZCA9IFwicHJpb3JpdHktYnRuXCI7XG4gIHByaW9yaXR5VHdvLnRleHRDb250ZW50ID0gXCJIaWdoIFByaW9yaXR5XCI7XG4gIHByaW9yaXR5VGhyZWUuY2xhc3NMaXN0LmFkZChcIm5vcm1hbC1idG5cIik7XG4gIHByaW9yaXR5VGhyZWUuaWQgPSBcInByaW9yaXR5LWJ0blwiO1xuICBwcmlvcml0eVRocmVlLnRleHRDb250ZW50ID0gXCJOb3JtYWwgUHJpb3JpdHlcIjtcbiAgcHJpb3JpdHlPbmVDb3VudC5jbGFzc0xpc3QuYWRkKFwiY3JpdGljYWwtY291bnRcIik7XG4gIHByaW9yaXR5VHdvQ291bnQuY2xhc3NMaXN0LmFkZChcImhpZ2gtY291bnRcIik7XG4gIHByaW9yaXR5VGhyZWVDb3VudC5jbGFzc0xpc3QuYWRkKFwibm9ybWFsLWNvdW50XCIpO1xuXG4gIGNyaXRpY2FsSW1nLnNyYyA9IEltZzU7XG4gIGNyaXRpY2FsSW1nLmFsdCA9IFwiV2F0ZXIgZHJvcCBpY29uXCI7XG4gIGhpZ2hJbWcuc3JjID0gSW1nNjtcbiAgaGlnaEltZy5hbHQgPSBcIldhdGVyIGRyb3AgaWNvblwiO1xuICBub3JtYWxJbWcuc3JjID0gSW1nNztcbiAgbm9ybWFsSW1nLmFsdCA9IFwiV2F0ZXIgZHJvcCBpY29uXCI7XG5cbiAgY29udGFpbmVyT25lLmFwcGVuZENoaWxkKGNyaXRpY2FsSW1nKTtcbiAgY29udGFpbmVyT25lLmFwcGVuZENoaWxkKHByaW9yaXR5T25lKTtcbiAgY29udGFpbmVyT25lLmFwcGVuZENoaWxkKHByaW9yaXR5T25lQ291bnQpO1xuICBjb250YWluZXJUd28uYXBwZW5kQ2hpbGQoaGlnaEltZyk7XG4gIGNvbnRhaW5lclR3by5hcHBlbmRDaGlsZChwcmlvcml0eVR3byk7XG4gIGNvbnRhaW5lclR3by5hcHBlbmRDaGlsZChwcmlvcml0eVR3b0NvdW50KTtcbiAgY29udGFpbmVyVGhyZWUuYXBwZW5kQ2hpbGQobm9ybWFsSW1nKTtcbiAgY29udGFpbmVyVGhyZWUuYXBwZW5kQ2hpbGQocHJpb3JpdHlUaHJlZSk7XG4gIGNvbnRhaW5lclRocmVlLmFwcGVuZENoaWxkKHByaW9yaXR5VGhyZWVDb3VudCk7XG4gIGZhdm9yaXRlcy5hcHBlbmRDaGlsZChjb250YWluZXJPbmUpO1xuICBmYXZvcml0ZXMuYXBwZW5kQ2hpbGQoY29udGFpbmVyVHdvKTtcbiAgZmF2b3JpdGVzLmFwcGVuZENoaWxkKGNvbnRhaW5lclRocmVlKTtcbn07XG5cbmNvbnN0IHByb2plY3RMaXN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIik7XG5cbiAgaWYgKHByb2plY3RzKSB7XG4gICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBsaXN0TmFtZSA9IGxpc3RBcnJheVtpXTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbGlzdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29uc3QgdGFza0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGAke2xpc3ROYW1lfS1saXN0YCk7XG4gICAgbGlzdEJ0bi50eXBlID0gXCJidXR0b25cIjtcbiAgICBsaXN0QnRuLmNsYXNzTGlzdC5hZGQoYCR7bGlzdE5hbWV9LWJ0bmApO1xuICAgIGxpc3RCdG4uaWQgPSBcInRhc2stYnRuXCI7XG4gICAgbGlzdEJ0bi50ZXh0Q29udGVudCA9IGxpc3ROYW1lO1xuICAgIHRhc2tDb3VudC5jbGFzc0xpc3QuYWRkKGAke2xpc3ROYW1lfS1jb3VudGApO1xuXG4gICAgaWYgKGxpc3ROYW1lID09PSBcInBlcnNvbmFsXCIpIHtcbiAgICAgIGltZy5zcmMgPSBJbWc4O1xuICAgICAgaW1nLmFsdCA9IFwiUGVyc29uIGljb25cIjtcbiAgICB9IGVsc2UgaWYgKGxpc3ROYW1lID09PSBcIndvcmtcIikge1xuICAgICAgaW1nLnNyYyA9IEltZzk7XG4gICAgICBpbWcuYWx0ID0gXCJCcmllZmNhc2UgaWNvblwiO1xuICAgIH0gZWxzZSBpZiAobGlzdE5hbWUgPT09IFwic2hvcHBpbmdcIikge1xuICAgICAgaW1nLnNyYyA9IEltZzEwO1xuICAgICAgaW1nLmFsdCA9IFwiU2hvcHBpbmcgY2FydCBpY29uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGltZy5zcmMgPSBJbWcxMTtcbiAgICAgIGltZy5hbHQgPSBcIkxhcmdlIGRvdCBpY29uXCI7XG4gICAgfVxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RCdG4pO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ291bnQpO1xuXG4gICAgaWYgKHByb2plY3RzKSB7XG4gICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgdGFza0NvdW50ID0gKCkgPT4ge1xuICBjb25zdCBjb3VudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2NsYXNzKj0nY291bnQnXVwiKTtcbiAgY29uc3QgdG9kYXlEYXRlID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcblxuICBjb3VudHMuZm9yRWFjaCgoY291bnQpID0+IHtcbiAgICBsZXQgY2xhc3NOYW1lID0gY291bnQuY2xhc3NOYW1lO1xuXG4gICAgbGV0IG51bSA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2JqID0gdGFza0FycmF5W2ldO1xuICAgICAgY29uc3QgbGlzdENob2ljZSA9IG9ialtcImxpc3RcIl07XG4gICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBvYmpbXCJwcmlvcml0eVwiXTtcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gb2JqW1wiZGF0ZVwiXTtcblxuICAgICAgaWYgKFxuICAgICAgICBjbGFzc05hbWUuaW5jbHVkZXMobGlzdENob2ljZSkgfHxcbiAgICAgICAgKHRvZGF5RGF0ZSA9PT0gdGFza0RhdGUgJiYgY2xhc3NOYW1lLmluY2x1ZGVzKFwidG9kYXlcIikpIHx8XG4gICAgICAgICh0b2RheURhdGUgIT09IHRhc2tEYXRlICYmIGNsYXNzTmFtZS5pbmNsdWRlcyhcInVwY29taW5nXCIpKSB8fFxuICAgICAgICBjbGFzc05hbWUuaW5jbHVkZXModGFza1ByaW9yaXR5KVxuICAgICAgKSB7XG4gICAgICAgIG51bSArPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChudW0gPT09IDApIHtcbiAgICAgIGNvdW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQudGV4dENvbnRlbnQgPSBudW07XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IGNoYW5nZUZhdm9yaXRlc0ltYWdlID0gKCkgPT4ge1xuICBjb25zdCBmYXZvcml0ZXNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlc1wiKTtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlcy1pbWdcIik7XG5cbiAgaWYgKGZhdm9yaXRlc0NvbnRhaW5lci50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgIGltYWdlLnNyYyA9IEltZzM7XG4gICAgaW1hZ2UuYWx0ID0gXCJFeHBhbmQgbGVzcyBpY29uXCI7XG4gIH0gZWxzZSB7XG4gICAgaW1hZ2Uuc3JjID0gSW1nNDtcbiAgICBpbWFnZS5hbHQgPSBcIkV4cGFuZCBtb3JlIGljb25cIjtcbiAgfVxufTtcblxuY29uc3QgY2hhbmdlUHJvamVjdHNJbWFnZSA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtaW1nXCIpO1xuXG4gIGlmIChwcm9qZWN0c0NvbnRhaW5lcikge1xuICAgIGlmIChwcm9qZWN0c0NvbnRhaW5lci50ZXh0Q29udGVudCA9PT0gXCJcIikge1xuICAgICAgaW1hZ2Uuc3JjID0gSW1nMztcbiAgICAgIGltYWdlLmFsdCA9IFwiRXhwYW5kIGxlc3MgaWNvblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbWFnZS5zcmMgPSBJbWc0O1xuICAgICAgaW1hZ2UuYWx0ID0gXCJFeHBhbmQgbW9yZSBpY29uXCI7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQge1xuICBsaXN0QXJyYXksXG4gIG1haW5NZW51LFxuICBwcm9qZWN0TGlzdCxcbiAgZmF2b3JpdGVzTGlzdCxcbiAgdGFza0NvdW50LFxuICBjaGFuZ2VGYXZvcml0ZXNJbWFnZSxcbiAgY2hhbmdlUHJvamVjdHNJbWFnZSxcbn07XG4iLCJpbXBvcnQgeyB0YXNrQXJyYXksIGVtcHR5SW5kaWNhdG9yIH0gZnJvbSBcIi4vbWFpbi1jb250ZW50LmpzXCI7XG5pbXBvcnQgeyBsaXN0QXJyYXksIHByaW9yaXR5QXJyYXkgfSBmcm9tIFwiLi9sYXlvdXQuanNcIjtcbmltcG9ydCBcIi4vZm9ybXMuY3NzXCI7XG5pbXBvcnQgSW1nIGZyb20gXCIuL2ltYWdlcy9wZXJzb25hbC5zdmdcIjtcbmltcG9ydCBJbWcyIGZyb20gXCIuL2ltYWdlcy93b3JrLnN2Z1wiO1xuaW1wb3J0IEltZzMgZnJvbSBcIi4vaW1hZ2VzL3Nob3BwaW5nLnN2Z1wiO1xuaW1wb3J0IEltZzQgZnJvbSBcIi4vaW1hZ2VzL25ldy5zdmdcIjtcbmltcG9ydCBJbWc1IGZyb20gXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgSW1nNiBmcm9tIFwiLi9pbWFnZXMvYmFjay5zdmdcIjtcblxuY29uc3QgdGFza0JhcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGlzcGxheVwiKTtcblxuICBkaXNwbGF5LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBpZiAodGFza0FycmF5Lmxlbmd0aCAhPT0gMCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBvYmogPSB0YXNrQXJyYXlbaV07XG4gICAgICBjb25zdCB0YXNrVGl0bGUgPSBvYmpbXCJ0aXRsZVwiXTtcbiAgICAgIGNvbnN0IGxpc3RDaG9pY2UgPSBvYmpbXCJsaXN0XCJdO1xuICAgICAgY29uc3QgdGFza0RhdGUgPSBvYmpbXCJkYXRlXCJdO1xuXG4gICAgICAvLyBjcmVhdGUgZWxlbWVudHMgZm9yIGVhY2ggdGFza1xuICAgICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBjaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgY29uc3QgY2hlY2tCb3hMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgY29uc3Qgd3JhcHBlclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBsaXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICB3cmFwcGVyLmlkID0gdGFza1RpdGxlO1xuICAgICAgd3JhcHBlci5kYXRhc2V0Lm51bSA9IGAke2l9YDtcbiAgICAgIGNoZWNrQm94TGFiZWwuaHRtbEZvciA9IFwiY2hlY2tib3hcIjtcbiAgICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCI7XG4gICAgICBjaGVja0JveC5uYW1lID0gXCJ0YXNrLWNoZWNrYm94XCI7XG4gICAgICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tib3hcIik7XG4gICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcbiAgICAgIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrRGF0ZTtcbiAgICAgIGxpc3ROYW1lLnRleHRDb250ZW50ID0gbGlzdENob2ljZTtcblxuICAgICAgaWYgKGxpc3RDaG9pY2UgPT09IFwicGVyc29uYWxcIikge1xuICAgICAgICBpbWcuc3JjID0gSW1nO1xuICAgICAgICBpbWcuYWx0ID0gXCJQZXJzb24gaWNvblwiO1xuICAgICAgfSBlbHNlIGlmIChsaXN0Q2hvaWNlID09PSBcIndvcmtcIikge1xuICAgICAgICBpbWcuc3JjID0gSW1nMjtcbiAgICAgICAgaW1nLmFsdCA9IFwiQnJpZWZjYXNlIGljb25cIjtcbiAgICAgIH0gZWxzZSBpZiAobGlzdENob2ljZSA9PT0gXCJzaG9wcGluZ1wiKSB7XG4gICAgICAgIGltZy5zcmMgPSBJbWczO1xuICAgICAgICBpbWcuYWx0ID0gXCJTaG9wcGluZyBjYXJ0IGljb25cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5zcmMgPSBJbWc0O1xuICAgICAgICBpbWcuYWx0ID0gXCJMYXJnZSBkb3QgaWNvblwiO1xuICAgICAgfVxuXG4gICAgICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveExhYmVsKTtcbiAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgIHdyYXBwZXJUd28uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgd3JhcHBlclR3by5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuICAgICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChjaGVja0JveENvbnRhaW5lcik7XG4gICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHdyYXBwZXJUd28pO1xuICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbiAgICAgIGRpc3BsYXkuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGVtcHR5SW5kaWNhdG9yKCk7XG4gIH1cbn07XG5cbmNvbnN0IHRhc2tQYWdlID0gKHRhc2tJbmRleCkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1oZWFkZXJcIik7XG5cbiAgZGlzcGxheS50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgY29uc3Qgb2JqID0gdGFza0FycmF5W3Rhc2tJbmRleF07XG4gIGNvbnN0IHRhc2tUaXRsZSA9IG9ialtcInRpdGxlXCJdO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBvYmpbXCJkZXNjcmlwdGlvblwiXTtcbiAgY29uc3QgdGFza0RhdGUgPSBvYmpbXCJkYXRlXCJdO1xuICBjb25zdCB0YXNrVGltZSA9IG9ialtcInRpbWVcIl07XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IG9ialtcInByaW9yaXR5XCJdO1xuICBjb25zdCBsaXN0Q2hvaWNlID0gb2JqW1wibGlzdFwiXTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gIGNvbnN0IGRhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgdGltZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRpbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY29uc3QgbGlzdE5hbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsaXN0U2VsZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IGxpc3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBjb25zdCBwcmlvcml0eUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgY29uc3QgYmFja0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBiYWNrQnRuSW1nID0gbmV3IEltYWdlKCk7XG5cbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiZnVsbC10YXNrLWZvcm1cIik7XG4gIGZvcm0uZGF0YXNldC5udW0gPSB0YXNrSW5kZXg7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgZGF0ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1jb250YWluZXJcIik7XG4gIHRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRpbWUtY29udGFpbmVyXCIpO1xuICBiYWNrQnRuQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJiYWNrLWJ0bi1jb250YWluZXJcIik7XG4gIHRpdGxlTGFiZWwuaHRtbEZvciA9IFwidGFzay10aXRsZVwiO1xuICBkZXNjcmlwdGlvbkxhYmVsLmh0bWxGb3IgPSBcImRlc2NyaXB0aW9uXCI7XG4gIGRhdGVMYWJlbC5odG1sRm9yID0gXCJkYXRlXCI7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRHVlIERhdGVcIjtcbiAgdGltZUxhYmVsLmh0bWxGb3IgPSBcInRpbWVcIjtcbiAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgVGltZVwiO1xuICBwcmlvcml0eUxhYmVsLmh0bWxGb3IgPSBcInByaW9yaXR5XCI7XG4gIGxpc3RTZWxlY3RMYWJlbC5odG1sRm9yID0gXCJsaXN0XCI7XG4gIGJhY2tCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gIGJhY2tCdG4uY2xhc3NMaXN0LmFkZChcImJhY2stYnRuXCIpO1xuICBiYWNrQnRuSW1nLnNyYyA9IEltZzY7XG4gIGJhY2tCdG5JbWcuYWx0ID0gXCJCYWNrIGFycm93IGljb25cIjtcbiAgdGl0bGUubmFtZSA9IFwidGl0bGVcIjtcbiAgdGl0bGUuaWQgPSBcInRhc2stdGl0bGVcIjtcbiAgdGl0bGUudmFsdWUgPSB0YXNrVGl0bGU7XG4gIHRpdGxlLm1heExlbmd0aCA9IFwiMzVcIjtcbiAgdGl0bGUucmVxdWlyZWQgPSB0cnVlO1xuICBkZXNjcmlwdGlvbi5uYW1lID0gXCJkZXNjcmlwdGlvblwiO1xuICBkZXNjcmlwdGlvbi5pZCA9IFwiZGVzY3JpcHRpb25cIjtcbiAgZGVzY3JpcHRpb24udmFsdWUgPSB0YXNrRGVzY3JpcHRpb247XG4gIGxpc3RTZWxlY3QubmFtZSA9IFwibGlzdFwiO1xuICBsaXN0U2VsZWN0LmlkID0gXCJsaXN0XCI7XG4gIGRhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICBkYXRlLm5hbWUgPSBcImRhdGVcIjtcbiAgZGF0ZS5pZCA9IFwiZGF0ZVwiO1xuICBkYXRlLnZhbHVlID0gdGFza0RhdGU7XG4gIHRpbWUudHlwZSA9IFwidGltZVwiO1xuICB0aW1lLm5hbWUgPSBcInRpbWVcIjtcbiAgdGltZS5pZCA9IFwidGltZVwiO1xuICB0aW1lLnZhbHVlID0gdGFza1RpbWU7XG4gIHByaW9yaXR5U2VsZWN0Lm5hbWUgPSBcInByaW9yaXR5XCI7XG4gIHByaW9yaXR5U2VsZWN0LmlkID0gXCJwcmlvcml0eVwiO1xuXG4gIC8vIER5bmFtaWNhbGx5IGFkZCBsaXN0IG9wdGlvbnMuIFdoZW4gdGhlIHVzZXIgYWRkcyBhIG5ldyBsaXN0LFxuICAvLyB0aGUgbmV3IGxpc3Qgd2lsbCBiZSBwcmVzZW50IGluIHRoZSBuZXh0IGZvcm0uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbGlzdE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICBsaXN0T3B0aW9uLnZhbHVlID0gbGlzdEFycmF5W2ldO1xuICAgIGxpc3RPcHRpb24udGV4dENvbnRlbnQgPSBsaXN0QXJyYXlbaV07XG5cbiAgICBpZiAobGlzdE9wdGlvbi52YWx1ZSA9PT0gbGlzdENob2ljZSkge1xuICAgICAgbGlzdE9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIGxpc3RTZWxlY3QuYXBwZW5kQ2hpbGQobGlzdE9wdGlvbik7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXR5QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwcmlvcml0eU9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICBwcmlvcml0eU9wdGlvbi52YWx1ZSA9IHByaW9yaXR5QXJyYXlbaV07XG4gICAgcHJpb3JpdHlPcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eUFycmF5W2ldO1xuXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHlPcHRpb24pO1xuXG4gICAgaWYgKHByaW9yaXR5QXJyYXlbaV0gPT09IHRhc2tQcmlvcml0eSkge1xuICAgICAgcHJpb3JpdHlPcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGxpc3ROYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RTZWxlY3RMYWJlbCk7XG4gIGxpc3ROYW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RTZWxlY3QpO1xuICBwcmlvcml0eUNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgcHJpb3JpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gIGRhdGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIHRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQodGltZUxhYmVsKTtcbiAgdGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgZGF0ZVdyYXBwZXIuYXBwZW5kQ2hpbGQoZGF0ZUNvbnRhaW5lcik7XG4gIGRhdGVXcmFwcGVyLmFwcGVuZENoaWxkKHRpbWVDb250YWluZXIpO1xuICBiYWNrQnRuLmFwcGVuZENoaWxkKGJhY2tCdG5JbWcpO1xuICBiYWNrQnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJhY2tCdG4pO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQoYmFja0J0bkNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGxpc3ROYW1lQ29udGFpbmVyKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkNvbnRhaW5lcik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZVdyYXBwZXIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5Q29udGFpbmVyKTtcbiAgZGlzcGxheS5hcHBlbmRDaGlsZChmb3JtKTtcbn07XG5cbmNvbnN0IHNvcnRUYXNrQmFycyA9IChidG4pID0+IHtcbiAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICBjb25zdCBzaWJsaW5nID0gYnRuLm5leHRFbGVtZW50U2libGluZztcbiAgY29uc3QgYnRuQ2xhc3MgPSBidG4uY2xhc3NOYW1lO1xuICBjb25zdCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdO1xuXG4gIGRpc3BsYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGlmIChzaWJsaW5nLnRleHRDb250ZW50ICE9PSBcIlwiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IG9iaiA9IHRhc2tBcnJheVtpXTtcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IG9ialtcInRpdGxlXCJdO1xuICAgICAgY29uc3QgbGlzdENob2ljZSA9IG9ialtcImxpc3RcIl07XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IG9ialtcImRhdGVcIl07XG4gICAgICBjb25zdCBwcmlvcml0eSA9IG9ialtcInByaW9yaXR5XCJdO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGJ0bkNsYXNzLmluY2x1ZGVzKGxpc3RDaG9pY2UpIHx8XG4gICAgICAgICh0b2RheURhdGUgPT09IHRhc2tEYXRlICYmIGJ0bkNsYXNzLmluY2x1ZGVzKFwidG9kYXlcIikpIHx8XG4gICAgICAgICh0b2RheURhdGUgIT09IHRhc2tEYXRlICYmIGJ0bkNsYXNzLmluY2x1ZGVzKFwidXBjb21pbmdcIikpIHx8XG4gICAgICAgIGJ0bkNsYXNzLmluY2x1ZGVzKHByaW9yaXR5KVxuICAgICAgKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBmb3IgZWFjaCB0YXNrXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBjaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBjb25zdCBjaGVja0JveExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgY29uc3Qgd3JhcHBlclR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGxpc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IGxpc3RJbWcgPSBuZXcgSW1hZ2UoKTtcblxuICAgICAgICB3cmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpO1xuICAgICAgICB3cmFwcGVyLmlkID0gdGFza1RpdGxlO1xuICAgICAgICB3cmFwcGVyLmRhdGFzZXQubnVtID0gaTtcbiAgICAgICAgY2hlY2tCb3hMYWJlbC5odG1sRm9yID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjaGVja0JveC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjaGVja0JveC5uYW1lID0gXCJ0YXNrLWNoZWNrYm94XCI7XG4gICAgICAgIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja2JveFwiKTtcbiAgICAgICAgbGlzdEltZy5hbHQgPSBcImltZ1wiO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRhc2tUaXRsZTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2tEYXRlO1xuICAgICAgICBsaXN0TmFtZS50ZXh0Q29udGVudCA9IGxpc3RDaG9pY2U7XG5cbiAgICAgICAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hMYWJlbCk7XG4gICAgICAgIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgICAgICAgd3JhcHBlclR3by5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgICAgIHdyYXBwZXJUd28uYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gICAgICAgIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQobGlzdE5hbWUpO1xuICAgICAgICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxpc3RJbWcpO1xuICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZCh3cmFwcGVyVHdvKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbiAgICAgICAgZGlzcGxheS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZW1wdHlJbmRpY2F0b3IoKTtcbiAgfVxufTtcblxuY29uc3QgYWRkRGVsZXRlT3B0aW9uID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbC1idG4tY29udGFpbmVyXCIpO1xuXG4gIGlmIChoZWFkZXIuY29udGFpbnMoZGl2KSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGRlbEJ0bkltZyA9IG5ldyBJbWFnZSgpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGVsLWJ0bi1jb250YWluZXJcIik7XG4gIGRlbEJ0bi50eXBlID0gXCJzdWJtaXRcIjtcbiAgZGVsQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWwtYnRuXCIpO1xuICBkZWxCdG5JbWcuc3JjID0gSW1nNTtcbiAgZGVsQnRuSW1nLmFsdCA9IFwiRGVsZXRlIGljb25cIjtcblxuICBkZWxCdG4uYXBwZW5kQ2hpbGQoZGVsQnRuSW1nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufTtcblxuY29uc3QgcmVtb3ZlRGVsZXRlT3B0aW9uID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2staGVhZGVyXCIpO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlbC1idG4tY29udGFpbmVyXCIpO1xuXG4gIGlmIChoZWFkZXIuY29udGFpbnMoZGl2KSkge1xuICAgIGhlYWRlci5yZW1vdmVDaGlsZChkaXYpO1xuICB9XG59O1xuXG5jb25zdCBkZWxldGVUYXNrID0gKCkgPT4ge1xuICBjb25zdCBkaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWRpc3BsYXlcIik7XG4gIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jaGVja2JveFwiKTtcbiAgY29uc3QgZGlzcGxheU5vZGVzID0gZGlzcGxheS5jaGlsZE5vZGVzO1xuXG4gIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICBpZiAodGFzay5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBncmFuZFBhcmVudCA9IHRhc2sucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgY29uc3QgdGFza0luZGV4ID0gZ3JhbmRQYXJlbnQuZGF0YXNldC5udW07XG5cbiAgICAgIHRhc2tBcnJheS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgIGRpc3BsYXkucmVtb3ZlQ2hpbGQoZGlzcGxheU5vZGVzW3Rhc2tJbmRleF0pO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBkaXNwbGF5Tm9kZXNbaV0uZGF0YXNldC5udW0gPSBpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGRpc3BsYXkudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICBlbXB0eUluZGljYXRvcigpO1xuICAgIHJlbW92ZURlbGV0ZU9wdGlvbigpO1xuICB9XG59O1xuXG5leHBvcnQge1xuICB0YXNrQmFycyxcbiAgdGFza1BhZ2UsXG4gIHNvcnRUYXNrQmFycyxcbiAgYWRkRGVsZXRlT3B0aW9uLFxuICByZW1vdmVEZWxldGVPcHRpb24sXG4gIGRlbGV0ZVRhc2ssXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBwYWdlTGF5b3V0LCB1cGRhdGVMaXN0QXJyYXkgfSBmcm9tIFwiLi9sYXlvdXQuanNcIjtcbmltcG9ydCB7XG4gIG1haW5Db250ZW50LFxuICBlbXB0eUluZGljYXRvcixcbiAgY3JlYXRlRm9ybSxcbiAgY2hhbmdlQnV0dG9uLFxuICBuZXdMaXN0Rm9ybSxcbiAgYWRkVGltZU9wdGlvbixcbiAgYWRkTGlzdE9wdGlvbixcbiAgcHJvY2Vzc0Zvcm0sXG4gIG1vZGlmeVRhc2ssXG4gIGJhY2tCdXR0b25Db250cm9sbGVyLFxufSBmcm9tIFwiLi9tYWluLWNvbnRlbnQuanNcIjtcbmltcG9ydCB7XG4gIG1haW5NZW51LFxuICBwcm9qZWN0TGlzdCxcbiAgZmF2b3JpdGVzTGlzdCxcbiAgdGFza0NvdW50LFxuICBjaGFuZ2VGYXZvcml0ZXNJbWFnZSxcbiAgY2hhbmdlUHJvamVjdHNJbWFnZSxcbn0gZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IHtcbiAgdGFza0JhcnMsXG4gIHRhc2tQYWdlLFxuICBzb3J0VGFza0JhcnMsXG4gIGFkZERlbGV0ZU9wdGlvbixcbiAgcmVtb3ZlRGVsZXRlT3B0aW9uLFxuICBkZWxldGVUYXNrLFxufSBmcm9tIFwiLi90YXNrLWRpc3BsYXkuanNcIjtcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICAvLyBHZW5lcmF0ZSBpbml0aWFsIHBhZ2UgbGF5b3V0XG4gIHBhZ2VMYXlvdXQoKTtcbiAgbWFpbkNvbnRlbnQoKTtcbiAgZW1wdHlJbmRpY2F0b3IoKTtcblxuICBmdW5jdGlvbiBldmVudEhhbmRsZXIoKSB7XG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudS1idXR0b25cIik7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1zZWN0aW9uXCIpO1xuXG4gICAgLy8gVG9nZ2xlIHRoZSBNYWluIE1lbnVcbiAgICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLW1lbnVcIik7XG5cbiAgICAgIGlmIChtYWluLmNvbnRhaW5zKG1lbnUpKSB7XG4gICAgICAgIG1haW4ucmVtb3ZlQ2hpbGQobWVudSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYWluTWVudSgpO1xuICAgICAgICB0YXNrQ291bnQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImgyXCIpO1xuXG4gICAgICAvLyBUb2dnbGUgVG9kYXkgb3IgVXBjb21pbmcgcHJvamVjdHNcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwidG9kYXktYnRuXCIpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQ7XG5cbiAgICAgICAgaGVhZGluZy50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcblxuICAgICAgICBzb3J0VGFza0JhcnMoYnRuKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJ1cGNvbWluZy1idG5cIikge1xuICAgICAgICBjb25zdCBidG4gPSBlLnRhcmdldDtcblxuICAgICAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gXCJVcGNvbWluZ1wiO1xuXG4gICAgICAgIHNvcnRUYXNrQmFycyhidG4pO1xuICAgICAgfVxuXG4gICAgICAvLyBUb2dnbGUgRmF2b3JpdGVzIGFuZCBQcm9qZWN0cyBtZW51IGNob2ljZXNcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZmF2b3JpdGVzLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGZhdm9yaXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzXCIpO1xuXG4gICAgICAgIGlmIChmYXZvcml0ZXMudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICAgICAgICBmYXZvcml0ZXNMaXN0KCk7XG4gICAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICAgICAgY2hhbmdlRmF2b3JpdGVzSW1hZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmYXZvcml0ZXMudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgIGNoYW5nZUZhdm9yaXRlc0ltYWdlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1kaXNwbGF5XCIpO1xuICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay1mb3JtXCIpO1xuXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcInByb2plY3RzLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcblxuICAgICAgICBpZiAocHJvamVjdHMudGV4dENvbnRlbnQgPT09IFwiXCIpIHtcbiAgICAgICAgICBwcm9qZWN0TGlzdCgpO1xuICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICAgIGNoYW5nZVByb2plY3RzSW1hZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgY2hhbmdlUHJvamVjdHNJbWFnZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpc3BsYXkuY29udGFpbnMoZm9ybSkpIHtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXNrQmFycygpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxpc3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3AtdXBcIik7XG5cbiAgICAgIC8vIGNyZWF0ZSwgc3VibWl0IGFuZCBwcm9jZXNzIGZvcm1zXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImZvcm0tYnRuXCIpIHtcbiAgICAgICAgcmVtb3ZlRGVsZXRlT3B0aW9uKCk7XG4gICAgICAgIGNyZWF0ZUZvcm0oKTtcbiAgICAgICAgY2hhbmdlQnV0dG9uKGUudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzdWJtaXQtYnRuXCIpIHtcbiAgICAgICAgY29uc3QgaXNGb3JtVmFsaWQgPSBmb3JtLmNoZWNrVmFsaWRpdHkoKTtcblxuICAgICAgICBpZiAoIWlzRm9ybVZhbGlkKSB7XG4gICAgICAgICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChsaXN0Rm9ybSkge1xuICAgICAgICAgICAgZGlzcGxheS5yZW1vdmVDaGlsZChsaXN0Rm9ybSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHByb2Nlc3NGb3JtKCk7XG4gICAgICAgICAgYmFja0J1dHRvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgICB0YXNrQmFycygpO1xuICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICAgIGNoYW5nZUJ1dHRvbihlLnRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJzYXZlLWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZ1bGwtdGFzay1mb3JtXCIpO1xuICAgICAgICBjb25zdCBpc0Zvcm1WYWxpZCA9IGZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuXG4gICAgICAgIGlmICghaXNGb3JtVmFsaWQpIHtcbiAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kaWZ5VGFzaygpO1xuICAgICAgICAgIGJhY2tCdXR0b25Db250cm9sbGVyKCk7XG4gICAgICAgICAgdGFza0JhcnMoKTtcbiAgICAgICAgICB0YXNrQ291bnQoKTtcbiAgICAgICAgICBjaGFuZ2VCdXR0b24oZS50YXJnZXQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEFkZCB0aW1lIGlucHV0IG9wdGlvblxuICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBcImRhdGVcIiAmJiBlLnRhcmdldC5uYW1lID09PSBcImRhdGVcIikge1xuICAgICAgICBhZGRUaW1lT3B0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBmb3JtIGRpc3BsYXkgb3IgZnVsbC10YXNrIGRpc3BsYXlcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYmFjay1idG5cIikge1xuICAgICAgICBpZiAobGlzdEZvcm0pIHtcbiAgICAgICAgICBkaXNwbGF5LnJlbW92ZUNoaWxkKGxpc3RGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhY2tCdXR0b25Db250cm9sbGVyKCk7XG4gICAgICAgIHRhc2tCYXJzKCk7XG4gICAgICAgIGNoYW5nZUJ1dHRvbihlLnRhcmdldCk7XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBuZXcgbGlzdCBmb3JtXG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhZGQtcHJvamVjdC1idG5cIiB8fFxuICAgICAgICBlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiY3JlYXRlLWxpc3QtYnRuXCJcbiAgICAgICkge1xuICAgICAgICBuZXdMaXN0Rm9ybSgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJtb2RhbC1vcGVuXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyBDYW5jZWwgbmV3IGxpc3QgZm9ybVxuICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjYW5jZWwtbGlzdC1idG5cIikge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJtb2RhbC1vcGVuXCIpO1xuXG4gICAgICAgIGRpc3BsYXkucmVtb3ZlQ2hpbGQobGlzdEZvcm0pO1xuICAgICAgfVxuXG4gICAgICAvLyBBZGQgbmV3IGxpc3Qgb3B0aW9uXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImFkZC1saXN0LWJ0blwiKSB7XG4gICAgICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gbGlzdEZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnRvZ2dsZShcIm1vZGFsLW9wZW5cIik7XG5cbiAgICAgICAgaWYgKCFpc0Zvcm1WYWxpZCkge1xuICAgICAgICAgIGxpc3RGb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHVwZGF0ZUxpc3RBcnJheSgpO1xuXG4gICAgICAgICAgaWYgKGRpc3BsYXkuY29udGFpbnMoZm9ybSkpIHtcbiAgICAgICAgICAgIGFkZExpc3RPcHRpb24oKTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICBjaGFuZ2VQcm9qZWN0c0ltYWdlKCk7XG4gICAgICAgICAgICBkaXNwbGF5LnJlbW92ZUNoaWxkKGxpc3RGb3JtKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgIGNoYW5nZVByb2plY3RzSW1hZ2UoKTtcbiAgICAgICAgICAgIHRhc2tDb3VudCgpO1xuICAgICAgICAgICAgZGlzcGxheS5yZW1vdmVDaGlsZChsaXN0Rm9ybSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFNvcnQgdGFza3MgYWNjb3JkaW5nIHRvIHRoZSBjbGlja2VkIHByb2plY3Qgb3IgcHJpb3JpdHkgbGlzdFxuICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSBcInRhc2stYnRuXCIgfHwgZS50YXJnZXQuaWQgPT09IFwicHJpb3JpdHktYnRuXCIpIHtcbiAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQ7XG5cbiAgICAgICAgc29ydFRhc2tCYXJzKGJ0bik7XG4gICAgICB9XG5cbiAgICAgIC8vIERpc3BsYXkgZnVsbCB0YXNrIGRldGFpbHNcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwidGFza1wiKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZGF0YXNldC5udW07XG5cbiAgICAgICAgcmVtb3ZlRGVsZXRlT3B0aW9uKCk7XG4gICAgICAgIHRhc2tQYWdlKGluZGV4KTtcbiAgICAgICAgY2hhbmdlQnV0dG9uKGUudGFyZ2V0KTtcbiAgICAgIH1cblxuICAgICAgLy8gRGVsZXRlIHRhc2tzXG4gICAgICBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImNoZWNrYm94XCIgJiYgZS50YXJnZXQuY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICBhZGREZWxldGVPcHRpb24oKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjaGVja2JveFwiICYmXG4gICAgICAgIGUudGFyZ2V0LmNoZWNrZWQgPT09IGZhbHNlXG4gICAgICApIHtcbiAgICAgICAgcmVtb3ZlRGVsZXRlT3B0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiZGVsLWJ0blwiKSB7XG4gICAgICAgIGRlbGV0ZVRhc2soKTtcbiAgICAgICAgdGFza0NvdW50KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZXZlbnRIYW5kbGVyKCk7XG59XG5jb21wb25lbnQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==