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

/***/ "./components/Dashbar/MainNavs.tsx":
/*!*****************************************!*\
  !*** ./components/Dashbar/MainNavs.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainNavs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"./node_modules/next-themes/dist/index.module.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MainNavs() {\n    var _this = this;\n    _s();\n    var theme = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)().theme;\n    var navigation = [\n        {\n            name: 'Home',\n            href: '#',\n            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.HomeIcon,\n            keyboard: 'H',\n            current: true\n        },\n        {\n            name: 'Favorites',\n            href: '#',\n            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.StarIcon,\n            keyboard: 'F',\n            current: false\n        },\n        {\n            name: 'Tasks',\n            href: '#',\n            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.CheckCircleIcon,\n            keyboard: 'T',\n            current: false\n        },\n        {\n            name: 'Calendar',\n            href: '#',\n            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.CalendarIcon,\n            keyboard: 'C',\n            current: false\n        },\n        {\n            name: 'Social',\n            href: '#',\n            icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.UserGroupIcon,\n            keyboard: 'S',\n            current: false\n        }, \n    ];\n    for(var i = 0; i < navigation.length; i++){\n        console.log(item.current && theme === 'dark');\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-1\",\n        children: navigation.map(function(item) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({\n                    'text-gray-700 hover:text-gray-900 hover:bg-gray-50': !item.current && theme === 'light'\n                }, {\n                    'hover:bg-slate-700': !item.current && theme === 'dark'\n                }, {\n                    'bg-gray-200': item.current && theme === 'light'\n                }, {\n                    'bg-slate-600': item.current && theme === 'dark'\n                }, 'group flex items-center justify-between px-2 py-1 text-sm font-medium rounded-md cursor-pointer'),\n                \"aria-current\": item.current ? 'page' : undefined,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({\n                                'text-gray-500': item.current\n                            }, {\n                                'text-gray-400 group-hover:text-gray-500': !item.current\n                            }, 'mr-3 flex-shrink-0 h-4 w-4'),\n                            \"aria-hidden\": \"true\"\n                        }, void 0, false, {\n                            fileName: \"/Users/agod/Documents/git-repos/studyflow-next/components/Dashbar/MainNavs.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-sm font-medium\",\n                            children: item.name\n                        }, void 0, false, {\n                            fileName: \"/Users/agod/Documents/git-repos/studyflow-next/components/Dashbar/MainNavs.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/agod/Documents/git-repos/studyflow-next/components/Dashbar/MainNavs.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, _this)\n            }, item.name, false, {\n                fileName: \"/Users/agod/Documents/git-repos/studyflow-next/components/Dashbar/MainNavs.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/agod/Documents/git-repos/studyflow-next/components/Dashbar/MainNavs.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n};\n_s(MainNavs, \"JkSxfi8+JQlqgIgDOc3wQN+nVIw=\", false, function() {\n    return [\n        next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = MainNavs;\nvar _c;\n$RefreshReg$(_c, \"MainNavs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxFQUFDLENBQXFCO3NDQUFFRixJQUFJLENBQUNULElBQUk7Ozs7Ozs7Ozs7OztlQXRCN0NTLElBQUksQ0FBQ1QsSUFBSTs7Ozs7Ozs7Ozs7QUErQnhCLENBQUM7R0F6RXVCSCxRQUFROztRQUNaRCxpREFBUTs7O0tBREpDLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYmFyL01haW5OYXZzLnRzeD82ZmViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENhbGVuZGFySWNvbixcbiAgQ2hlY2tDaXJjbGVJY29uLFxuICBIb21lSWNvbixcbiAgU3Rhckljb24sXG4gIFVzZXJHcm91cEljb24sXG59IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ25leHQtdGhlbWVzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluTmF2cygpIHtcbiAgY29uc3QgeyB0aGVtZSB9ID0gdXNlVGhlbWUoKVxuICBjb25zdCBuYXZpZ2F0aW9uID0gW1xuICAgIHsgbmFtZTogJ0hvbWUnLCBocmVmOiAnIycsIGljb246IEhvbWVJY29uLCBrZXlib2FyZDogJ0gnLCBjdXJyZW50OiB0cnVlIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0Zhdm9yaXRlcycsXG4gICAgICBocmVmOiAnIycsXG4gICAgICBpY29uOiBTdGFySWNvbixcbiAgICAgIGtleWJvYXJkOiAnRicsXG4gICAgICBjdXJyZW50OiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdUYXNrcycsXG4gICAgICBocmVmOiAnIycsXG4gICAgICBpY29uOiBDaGVja0NpcmNsZUljb24sXG4gICAgICBrZXlib2FyZDogJ1QnLFxuICAgICAgY3VycmVudDogZmFsc2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2FsZW5kYXInLFxuICAgICAgaHJlZjogJyMnLFxuICAgICAgaWNvbjogQ2FsZW5kYXJJY29uLFxuICAgICAga2V5Ym9hcmQ6ICdDJyxcbiAgICAgIGN1cnJlbnQ6IGZhbHNlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1NvY2lhbCcsXG4gICAgICBocmVmOiAnIycsXG4gICAgICBpY29uOiBVc2VyR3JvdXBJY29uLFxuICAgICAga2V5Ym9hcmQ6ICdTJyxcbiAgICAgIGN1cnJlbnQ6IGZhbHNlLFxuICAgIH0sXG4gIF1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdmlnYXRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyhpdGVtLmN1cnJlbnQgJiYgdGhlbWUgPT09ICdkYXJrJylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTFcIj5cbiAgICAgIHtuYXZpZ2F0aW9uLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtpdGVtLm5hbWV9XG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAndGV4dC1ncmF5LTcwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLWdyYXktNTAnOlxuICAgICAgICAgICAgICAgICFpdGVtLmN1cnJlbnQgJiYgdGhlbWUgPT09ICdsaWdodCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyAnaG92ZXI6Ymctc2xhdGUtNzAwJzogIWl0ZW0uY3VycmVudCAmJiB0aGVtZSA9PT0gJ2RhcmsnIH0sXG4gICAgICAgICAgICB7ICdiZy1ncmF5LTIwMCc6IGl0ZW0uY3VycmVudCAmJiB0aGVtZSA9PT0gJ2xpZ2h0JyB9LFxuICAgICAgICAgICAgeyAnYmctc2xhdGUtNjAwJzogaXRlbS5jdXJyZW50ICYmIHRoZW1lID09PSAnZGFyaycgfSxcbiAgICAgICAgICAgICdncm91cCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMiBweS0xIHRleHQtc20gZm9udC1tZWRpdW0gcm91bmRlZC1tZCBjdXJzb3ItcG9pbnRlcicsXG4gICAgICAgICAgKX1cbiAgICAgICAgICBhcmlhLWN1cnJlbnQ9e2l0ZW0uY3VycmVudCA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxpdGVtLmljb25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFxuICAgICAgICAgICAgICAgIHsgJ3RleHQtZ3JheS01MDAnOiBpdGVtLmN1cnJlbnQgfSxcbiAgICAgICAgICAgICAgICB7ICd0ZXh0LWdyYXktNDAwIGdyb3VwLWhvdmVyOnRleHQtZ3JheS01MDAnOiAhaXRlbS5jdXJyZW50IH0sXG4gICAgICAgICAgICAgICAgJ21yLTMgZmxleC1zaHJpbmstMCBoLTQgdy00JyxcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIHtpdGVtLmtleWJvYXJkICYmIChcbiAgICAgICAgICAgIDxrYmQgY2xhc3NOYW1lPVwia2JkIGtiZC14cyB3LTUgdGV4dC14c1wiPntpdGVtLmtleWJvYXJkfTwva2JkPlxuICAgICAgICAgICl9ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiQ2FsZW5kYXJJY29uIiwiQ2hlY2tDaXJjbGVJY29uIiwiSG9tZUljb24iLCJTdGFySWNvbiIsIlVzZXJHcm91cEljb24iLCJjbGFzc25hbWVzIiwidXNlVGhlbWUiLCJNYWluTmF2cyIsInRoZW1lIiwibmF2aWdhdGlvbiIsIm5hbWUiLCJocmVmIiwiaWNvbiIsImtleWJvYXJkIiwiY3VycmVudCIsImkiLCJsZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImFyaWEtY3VycmVudCIsInVuZGVmaW5lZCIsImFyaWEtaGlkZGVuIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Dashbar/MainNavs.tsx\n");

/***/ })

});