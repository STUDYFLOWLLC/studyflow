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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _supabase_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @supabase/supabase-auth-helpers/nextjs */ \"@supabase/supabase-auth-helpers/nextjs\");\n/* harmony import */ var _supabase_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _supabase_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @supabase/supabase-auth-helpers/react */ \"@supabase/supabase-auth-helpers/react\");\n/* harmony import */ var _supabase_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var styles_flashcard_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/flashcard.css */ \"./styles/flashcard.css\");\n/* harmony import */ var styles_flashcard_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles_flashcard_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _styles_transition_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/transition.css */ \"./styles/transition.css\");\n/* harmony import */ var _styles_transition_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_transition_css__WEBPACK_IMPORTED_MODULE_10__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_8__]);\nswr__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* eslint-disable @typescript-eslint/no-explicit-any */ \n\n\n\n\n\n\n\n\n\nconst fetcher = (query)=>(0,graphql_request__WEBPACK_IMPORTED_MODULE_3__.request)('/api/graphql', query)\n;\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://rsms.me/inter/inter.css\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agod/Documents/git-repos/studyflow-next/pages/_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Studyflow\"\n                    }, void 0, false, {\n                        fileName: \"/Users/agod/Documents/git-repos/studyflow-next/pages/_app.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agod/Documents/git-repos/studyflow-next/pages/_app.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                defaultTheme: \"system\",\n                enableSystem: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_8__.SWRConfig, {\n                    value: {\n                        fetcher\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_supabase_supabase_auth_helpers_react__WEBPACK_IMPORTED_MODULE_2__.UserProvider, {\n                        supabaseClient: _supabase_supabase_auth_helpers_nextjs__WEBPACK_IMPORTED_MODULE_1__.supabaseClient,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/agod/Documents/git-repos/studyflow-next/pages/_app.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/agod/Documents/git-repos/studyflow-next/pages/_app.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/agod/Documents/git-repos/studyflow-next/pages/_app.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/agod/Documents/git-repos/studyflow-next/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEVBQXVELHNEQUNnQjtBQUNIO0FBQzNCO0FBQ0U7QUFFZjtBQUNxQjtBQUNwQjtBQUNFO0FBQ0Q7QUFDRztBQUVqQyxLQUFLLENBQUNNLE9BQU8sSUFBSUMsS0FBVSxHQUFLTCx3REFBTyxDQUFDLENBQWMsZUFBRUssS0FBSzs7U0FFcERDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELE1BQU07O3dGQUVETixrREFBSTs7Z0dBQ0ZPLENBQUk7d0JBQUNDLEdBQUcsRUFBQyxDQUFZO3dCQUFDQyxJQUFJLEVBQUMsQ0FBaUM7Ozs7OztnR0FDNURDLENBQUs7a0NBQUMsQ0FBUzs7Ozs7Ozs7Ozs7O3dGQUVqQlgsc0RBQWE7Z0JBQUNZLFlBQVksRUFBQyxDQUFRO2dCQUFDQyxZQUFZO3NHQUM5Q1gsMENBQVM7b0JBQUNZLEtBQUssRUFBRSxDQUFDO3dCQUFDWCxPQUFPO29CQUFDLENBQUM7MEdBQzFCTCwrRUFBWTt3QkFBQ0QsY0FBYyxFQUFFQSxrRkFBYzs4R0FDekNTLFNBQVM7K0JBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXBDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0dWR5Zmxvdy1uZXh0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55ICovXG5pbXBvcnQgeyBzdXBhYmFzZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1hdXRoLWhlbHBlcnMvbmV4dGpzJ1xuaW1wb3J0IHsgVXNlclByb3ZpZGVyIH0gZnJvbSAnQHN1cGFiYXNlL3N1cGFiYXNlLWF1dGgtaGVscGVycy9yZWFjdCdcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnbmV4dC10aGVtZXMnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgJ3JlYWN0LWxvYWRpbmctc2tlbGV0b24vZGlzdC9za2VsZXRvbi5jc3MnXG5pbXBvcnQgJ3N0eWxlcy9mbGFzaGNhcmQuY3NzJ1xuaW1wb3J0IHsgU1dSQ29uZmlnIH0gZnJvbSAnc3dyJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgJy4uL3N0eWxlcy90cmFuc2l0aW9uLmNzcydcblxuY29uc3QgZmV0Y2hlciA9IChxdWVyeTogYW55KSA9PiByZXF1ZXN0KCcvYXBpL2dyYXBocWwnLCBxdWVyeSlcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3JzbXMubWUvaW50ZXIvaW50ZXIuY3NzXCIgLz5cbiAgICAgICAgPHRpdGxlPlN0dWR5ZmxvdzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VGhlbWVQcm92aWRlciBkZWZhdWx0VGhlbWU9XCJzeXN0ZW1cIiBlbmFibGVTeXN0ZW0+XG4gICAgICAgIDxTV1JDb25maWcgdmFsdWU9e3sgZmV0Y2hlciB9fT5cbiAgICAgICAgICA8VXNlclByb3ZpZGVyIHN1cGFiYXNlQ2xpZW50PXtzdXBhYmFzZUNsaWVudH0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9Vc2VyUHJvdmlkZXI+XG4gICAgICAgIDwvU1dSQ29uZmlnPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsic3VwYWJhc2VDbGllbnQiLCJVc2VyUHJvdmlkZXIiLCJyZXF1ZXN0IiwiVGhlbWVQcm92aWRlciIsIkhlYWQiLCJTV1JDb25maWciLCJmZXRjaGVyIiwicXVlcnkiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxpbmsiLCJyZWwiLCJocmVmIiwidGl0bGUiLCJkZWZhdWx0VGhlbWUiLCJlbmFibGVTeXN0ZW0iLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/react-loading-skeleton/dist/skeleton.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/skeleton.css ***!
  \***************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/flashcard.css":
/*!******************************!*\
  !*** ./styles/flashcard.css ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./styles/transition.css":
/*!*******************************!*\
  !*** ./styles/transition.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "@supabase/supabase-auth-helpers/nextjs":
/*!*********************************************************!*\
  !*** external "@supabase/supabase-auth-helpers/nextjs" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-auth-helpers/nextjs");

/***/ }),

/***/ "@supabase/supabase-auth-helpers/react":
/*!********************************************************!*\
  !*** external "@supabase/supabase-auth-helpers/react" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-auth-helpers/react");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();