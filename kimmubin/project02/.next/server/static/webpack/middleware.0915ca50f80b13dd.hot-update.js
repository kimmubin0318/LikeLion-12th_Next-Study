"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.js":
/*!***********************!*\
  !*** ./middleware.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   middleware: () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n\nfunction middleware(request) {\n    console.log(request);\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n}\nconst config = {\n    matcher: \"/news\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFDcEMsU0FBU0MsV0FBV0MsT0FBTztJQUM5QkMsUUFBUUMsR0FBRyxDQUFDRjtJQUVaLE9BQU9GLHFEQUFZQSxDQUFDSyxJQUFJO0FBQzVCO0FBQ08sTUFBTUMsU0FBUztJQUFFQyxTQUFTO0FBQVEsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9taWRkbGV3YXJlLmpzPzNiY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xuZXhwb3J0IGZ1bmN0aW9uIG1pZGRsZXdhcmUocmVxdWVzdCkge1xuICAgIGNvbnNvbGUubG9nKHJlcXVlc3QpO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5uZXh0KCk7XG59XG5leHBvcnQgY29uc3QgY29uZmlnID0geyBtYXRjaGVyOiAnL25ld3MnIH07XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwibWlkZGxld2FyZSIsInJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwibmV4dCIsImNvbmZpZyIsIm1hdGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(middleware)/./middleware.js\n");

/***/ })

});