"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dash",{

/***/ "./components/buttons/BigProfileButtonMenuItem.tsx":
/*!*********************************************************!*\
  !*** ./components/buttons/BigProfileButtonMenuItem.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BigProfileButtonMenuItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction BigProfileButtonMenuItem(props) {\n    var _this = this;\n    _s();\n    var active1 = props.active, name = props.name, href = props.href;\n    var ref = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)(), theme = ref.theme, setTheme = ref.setTheme;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Menu.Item, {\n        children: function(param) {\n            var active = param.active;\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                href: href,\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({\n                    'bg-gray-100 text-gray-900': theme === 'light'\n                }, {\n                    'text-gray-700': !active && theme === 'light'\n                }, 'block px-4 py-2 text-sm'),\n                children: name\n            }, void 0, false, {\n                fileName: \"/Users/agod/Documents/git-repos/studyflow-next/components/buttons/BigProfileButtonMenuItem.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, _this);\n        }\n    }, void 0, false, {\n        fileName: \"/Users/agod/Documents/git-repos/studyflow-next/components/buttons/BigProfileButtonMenuItem.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n};\n_s(BigProfileButtonMenuItem, \"5ABGV54qnXKp6rHn7MS/8MjwRhQ=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = BigProfileButtonMenuItem;\nvar _c;\n$RefreshReg$(_c, \"BigProfileButtonMenuItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2J1dHRvbnMvQmlnUHJvZmlsZUJ1dHRvbk1lbnVJdGVtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNMO0FBQ0c7O0FBUXZCLFFBQVEsQ0FBQ0csd0JBQXdCLENBQUNDLEtBQVksRUFBRSxDQUFDOzs7SUFDOUQsR0FBSyxDQUFHQyxPQUFNLEdBQWlCRCxLQUFLLENBQTVCQyxNQUFNLEVBQUVDLElBQUksR0FBV0YsS0FBSyxDQUFwQkUsSUFBSSxFQUFFQyxJQUFJLEdBQUtILEtBQUssQ0FBZEcsSUFBSTtJQUMxQixHQUFLLENBQXVCTCxHQUFVLEdBQVZBLHFEQUFRLElBQTVCTSxLQUFLLEdBQWVOLEdBQVUsQ0FBOUJNLEtBQUssRUFBRUMsUUFBUSxHQUFLUCxHQUFVLENBQXZCTyxRQUFRO0lBRXZCLE1BQU0sNkVBQ0hULHdEQUFTO2tCQUNQLFFBQVE7Z0JBQUxLLE1BQU0sU0FBTkEsTUFBTTsrRkFDUE0sQ0FBQztnQkFDQUosSUFBSSxFQUFFQSxJQUFJO2dCQUNWSyxTQUFTLEVBQUVYLGlEQUFVLENBQ25CLENBQUM7b0JBQ0MsQ0FBMkIsNEJBQUVPLEtBQUssS0FBSyxDQUFPO2dCQUNoRCxDQUFDLEVBQ0QsQ0FBQztvQkFBQyxDQUFlLGlCQUFHSCxNQUFNLElBQUlHLEtBQUssS0FBSyxDQUFPO2dCQUFDLENBQUMsRUFDakQsQ0FBeUI7MEJBRzFCRixJQUFJOzs7Ozs7Ozs7Ozs7QUFLZixDQUFDO0dBdEJ1Qkgsd0JBQXdCOztRQUVsQkQsaURBQVE7OztLQUZkQyx3QkFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b25zL0JpZ1Byb2ZpbGVCdXR0b25NZW51SXRlbS50c3g/MTY2YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZW51IH0gZnJvbSAnQGhlYWRsZXNzdWkvcmVhY3QnXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYWN0aXZlOiBib29sZWFuXG4gIG5hbWU6IHN0cmluZ1xuICBocmVmOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmlnUHJvZmlsZUJ1dHRvbk1lbnVJdGVtKHByb3BzOiBQcm9wcykge1xuICBjb25zdCB7IGFjdGl2ZSwgbmFtZSwgaHJlZiB9ID0gcHJvcHNcbiAgY29uc3QgeyB0aGVtZSwgc2V0VGhlbWUgfSA9IHVzZVRoZW1lKClcblxuICByZXR1cm4gKFxuICAgIDxNZW51Lkl0ZW0+XG4gICAgICB7KHsgYWN0aXZlIH0pID0+IChcbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPXtocmVmfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgJ2JnLWdyYXktMTAwIHRleHQtZ3JheS05MDAnOiB0aGVtZSA9PT0gJ2xpZ2h0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7ICd0ZXh0LWdyYXktNzAwJzogIWFjdGl2ZSAmJiB0aGVtZSA9PT0gJ2xpZ2h0JyB9LFxuICAgICAgICAgICAgJ2Jsb2NrIHB4LTQgcHktMiB0ZXh0LXNtJyxcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvYT5cbiAgICAgICl9XG4gICAgPC9NZW51Lkl0ZW0+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJNZW51IiwiY2xhc3NuYW1lcyIsInVzZVRoZW1lIiwiQmlnUHJvZmlsZUJ1dHRvbk1lbnVJdGVtIiwicHJvcHMiLCJhY3RpdmUiLCJuYW1lIiwiaHJlZiIsInRoZW1lIiwic2V0VGhlbWUiLCJJdGVtIiwiYSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/buttons/BigProfileButtonMenuItem.tsx\n");

/***/ })

});