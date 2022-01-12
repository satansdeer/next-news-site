"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/categories";
exports.ids = ["pages/api/categories"];
exports.modules = {

/***/ "./pages/api/categories/index.ts":
/*!***************************************!*\
  !*** ./pages/api/categories/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ categoriesHandler)\n/* harmony export */ });\n/* harmony import */ var _server_categories_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../server/categories.json */ \"./server/categories.json\");\n\nfunction categoriesHandler(req, res) {\n    const categories = _server_categories_json__WEBPACK_IMPORTED_MODULE_0__;\n    return res.status(200).json(categories);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUU4RDtBQUUvQyxRQUFRLENBQUNDLGlCQUFpQixDQUN2Q0MsR0FBbUIsRUFDbkJDLEdBQWdDLEVBQ2hDLENBQUM7SUFDRCxLQUFLLENBQUNDLFVBQVUsR0FBR0osb0RBQWdCO0lBQ25DLE1BQU0sQ0FBQ0csR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUNGLFVBQVU7QUFDeEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25ld3Mtc2l0ZS1zdGVwcy8uL3BhZ2VzL2FwaS9jYXRlZ29yaWVzL2luZGV4LnRzP2ZjMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuaW1wb3J0IHR5cGUgeyBDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvdHlwZXNcIlxuaW1wb3J0IGNhdGVnb3JpZXNTb3VyY2UgZnJvbSBcIi4uLy4uLy4uL3NlcnZlci9jYXRlZ29yaWVzLmpzb25cIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXRlZ29yaWVzSGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8Q2F0ZWdvcnlbXT5cbikge1xuICBjb25zdCBjYXRlZ29yaWVzID0gY2F0ZWdvcmllc1NvdXJjZSBhcyBDYXRlZ29yeVtdXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbihjYXRlZ29yaWVzKVxufVxuIl0sIm5hbWVzIjpbImNhdGVnb3JpZXNTb3VyY2UiLCJjYXRlZ29yaWVzSGFuZGxlciIsInJlcSIsInJlcyIsImNhdGVnb3JpZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/categories/index.ts\n");

/***/ }),

/***/ "./server/categories.json":
/*!********************************!*\
  !*** ./server/categories.json ***!
  \********************************/
/***/ ((module) => {

module.exports = JSON.parse('["Science","Technology","Arts"]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/categories/index.ts"));
module.exports = __webpack_exports__;

})();