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

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth),\n/* harmony export */   \"default\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/supabase */ \"./utils/supabase.tsx\");\n\n\n\nconst AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\nfunction AuthProvider({ children  }) {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(async ()=>{\n        // Check active sessions and sets the user\n        const session1 = await _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.session();\n        var ref1;\n        setUser((ref1 = session1 === null || session1 === void 0 ? void 0 : session1.user) !== null && ref1 !== void 0 ? ref1 : null);\n        setLoading(false);\n        // Listen for changes on auth state (logged in, signed out, etc.)\n        const { data: listener  } = _utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.onAuthStateChange(async (event, session)=>{\n            var ref;\n            setUser((ref = session === null || session === void 0 ? void 0 : session.user) !== null && ref !== void 0 ? ref : null);\n            setLoading(false);\n        });\n        return ()=>{\n            listener === null || listener === void 0 ? void 0 : listener.unsubscribe();\n        };\n    }, []);\n    const value = {\n        signOut: ()=>_utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.signOut()\n        ,\n        signInWithGoogle: ()=>_utils_supabase__WEBPACK_IMPORTED_MODULE_2__.supabase.auth.signIn({\n                provider: 'google'\n            }, {\n                redirectTo: 'http://localhost:3000/dash'\n            })\n        ,\n        user\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: !loading && children\n    }, void 0, false, {\n        fileName: \"/Users/agod/Documents/git-repos/studyflow-next/contexts/AuthContext.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEQ7QUFDbEI7QUFFNUMsS0FBSyxDQUFDSyxXQUFXLGlCQUFHTCwwREFBbUIsQ0FBQyxJQUFJO0FBRXJDLFNBQVNPLE9BQU8sR0FBRyxDQUFDO0lBQ3pCLE1BQU0sQ0FBQ04saURBQVUsQ0FBQ0ksV0FBVztBQUMvQixDQUFDO0FBRWMsUUFBUSxDQUFDRyxZQUFZLENBQUMsQ0FBQyxDQUFDQyxRQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbEQsS0FBSyxNQUFFQyxJQUFJLE1BQUVDLE9BQU8sTUFBSVIsK0NBQVE7SUFDaEMsS0FBSyxNQUFFUyxPQUFPLE1BQUVDLFVBQVUsTUFBSVYsK0NBQVEsQ0FBQyxJQUFJO0lBRTNDRCxnREFBUyxXQUFhLENBQUM7UUFDckIsRUFBMEM7UUFDMUMsS0FBSyxDQUFDWSxRQUFPLEdBQUcsS0FBSyxDQUFDVixrRUFBcUI7WUFFbkNVLElBQWE7UUFBckJILE9BQU8sRUFBQ0csSUFBYSxHQUFiQSxRQUFPLGFBQVBBLFFBQU8sY0FBUEEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLFFBQU8sQ0FBRUosSUFBSSxjQUFiSSxJQUFhLGNBQWJBLElBQWEsR0FBSSxJQUFJO1FBQzdCRCxVQUFVLENBQUMsS0FBSztRQUVoQixFQUFpRTtRQUNqRSxLQUFLLENBQUMsQ0FBQyxDQUFDRyxJQUFJLEVBQUVDLFFBQVEsRUFBQyxDQUFDLEdBQUdiLDRFQUErQixRQUNqRGUsS0FBSyxFQUFFTCxPQUFPLEdBQUssQ0FBQztnQkFDakJBLEdBQWE7WUFBckJILE9BQU8sRUFBQ0csR0FBYSxHQUFiQSxPQUFPLGFBQVBBLE9BQU8sY0FBUEEsSUFBSSxDQUFKQSxDQUFhLEdBQWJBLE9BQU8sQ0FBRUosSUFBSSxjQUFiSSxHQUFhLGNBQWJBLEdBQWEsR0FBSSxJQUFJO1lBQzdCRCxVQUFVLENBQUMsS0FBSztRQUNsQixDQUFDO1FBR0gsTUFBTSxLQUFPLENBQUM7WUFDWkksUUFBUSxhQUFSQSxRQUFRLGNBQVJBLElBQUksQ0FBSkEsQ0FBcUIsR0FBckJBLFFBQVEsQ0FBRUcsV0FBVyxFQTdCM0IsQ0E2QjZCO1FBQ3pCLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsS0FBSyxDQUFDQyxLQUFLLEdBQUcsQ0FBQztRQUNiQyxPQUFPLE1BQVFsQixrRUFBcUI7O1FBQ3BDbUIsZ0JBQWdCLE1BQ2RuQixpRUFBb0IsQ0FDbEIsQ0FBQztnQkFDQ3FCLFFBQVEsRUFBRSxDQUFRO1lBQ3BCLENBQUMsRUFDRCxDQUFDO2dCQUNDQyxVQUFVLEVBQUUsQ0FBNEI7WUFDMUMsQ0FBQzs7UUFFTGhCLElBQUk7SUFDTixDQUFDO0lBRUQsTUFBTSw2RUFDSEwsV0FBVyxDQUFDc0IsUUFBUTtRQUFDTixLQUFLLEVBQUVBLEtBQUs7bUJBQzlCVCxPQUFPLElBQUlILFFBQVE7Ozs7OztBQUczQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZHlmbG93LW5leHQvLi9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/NmQ4MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc3VwYWJhc2UgfSBmcm9tICcuLi91dGlscy9zdXBhYmFzZSdcblxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VBdXRoKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAvLyBDaGVjayBhY3RpdmUgc2Vzc2lvbnMgYW5kIHNldHMgdGhlIHVzZXJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3VwYWJhc2UuYXV0aC5zZXNzaW9uKClcblxuICAgIHNldFVzZXIoc2Vzc2lvbj8udXNlciA/PyBudWxsKVxuICAgIHNldExvYWRpbmcoZmFsc2UpXG5cbiAgICAvLyBMaXN0ZW4gZm9yIGNoYW5nZXMgb24gYXV0aCBzdGF0ZSAobG9nZ2VkIGluLCBzaWduZWQgb3V0LCBldGMuKVxuICAgIGNvbnN0IHsgZGF0YTogbGlzdGVuZXIgfSA9IHN1cGFiYXNlLmF1dGgub25BdXRoU3RhdGVDaGFuZ2UoXG4gICAgICBhc3luYyAoZXZlbnQsIHNlc3Npb24pID0+IHtcbiAgICAgICAgc2V0VXNlcihzZXNzaW9uPy51c2VyID8/IG51bGwpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICB9XG4gICAgKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGxpc3RlbmVyPy51bnN1YnNjcmliZSgpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCB2YWx1ZSA9IHtcbiAgICBzaWduT3V0OiAoKSA9PiBzdXBhYmFzZS5hdXRoLnNpZ25PdXQoKSxcbiAgICBzaWduSW5XaXRoR29vZ2xlOiAoKSA9PlxuICAgICAgc3VwYWJhc2UuYXV0aC5zaWduSW4oXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlcjogJ2dvb2dsZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJlZGlyZWN0VG86ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvZGFzaCdcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICB1c2VyXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9PlxuICAgICAgeyFsb2FkaW5nICYmIGNoaWxkcmVufVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN1cGFiYXNlIiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXV0aCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNlc3Npb24iLCJhdXRoIiwiZGF0YSIsImxpc3RlbmVyIiwib25BdXRoU3RhdGVDaGFuZ2UiLCJldmVudCIsInVuc3Vic2NyaWJlIiwidmFsdWUiLCJzaWduT3V0Iiwic2lnbkluV2l0aEdvb2dsZSIsInNpZ25JbiIsInByb3ZpZGVyIiwicmVkaXJlY3RUbyIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loading-skeleton/dist/skeleton.css */ \"./node_modules/react-loading-skeleton/dist/skeleton.css\");\n/* harmony import */ var react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loading_skeleton_dist_skeleton_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_transition_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/transition.css */ \"./styles/transition.css\");\n/* harmony import */ var _styles_transition_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_transition_css__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_4__]);\nswr__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nconst colors = {\n    brand: {\n        900: '#24272E',\n        800: '#9ACBCE',\n        700: '#2a69ac'\n    }\n};\nconst fetcher = (query)=>(0,graphql_request__WEBPACK_IMPORTED_MODULE_2__.request)('/api/graphql', query)\n;\nfunction MyApp({ Component , pageProps: { session , ...pageProps }  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swr__WEBPACK_IMPORTED_MODULE_4__.SWRConfig, {\n            value: {\n                fetcher: fetcher\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/agod/Documents/git-repos/studyflow-next/pages/_app.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/agod/Documents/git-repos/studyflow-next/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/agod/Documents/git-repos/studyflow-next/pages/_app.tsx\",\n            lineNumber: 22,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNOO0FBRVE7QUFDbEI7QUFDRDtBQUNHO0FBRWpDLEtBQUssQ0FBQ0csTUFBTSxHQUFHLENBQUM7SUFDZEMsS0FBSyxFQUFFLENBQUM7QUFDTixXQUFHLEVBQUUsQ0FBUztBQUNkLFdBQUcsRUFBRSxDQUFTO0FBQ2QsV0FBRyxFQUFFLENBQVM7SUFDaEIsQ0FBQztBQUNILENBQUM7QUFFRCxLQUFLLENBQUNDLE9BQU8sSUFBR0MsS0FBSyxHQUFJTCx3REFBTyxDQUFDLENBQWMsZUFBRUssS0FBSzs7U0FFN0NDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFFLENBQUMsQ0FBQ0MsT0FBTyxNQUFLRCxTQUFTLENBQUMsQ0FBQyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQzdFLE1BQU07OEZBRURQLDBDQUFTO1lBQUNTLEtBQUssRUFBRSxDQUFDO2dCQUFDTixPQUFPLEVBQUVBLE9BQU87WUFBQyxDQUFDO2tHQUNuQ0wsNERBQVk7c0dBQ1ZRLFNBQVM7dUJBQUtDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0dWR5Zmxvdy1uZXh0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXV0aFByb3ZpZGVyIGZyb20gJ2NvbnRleHRzL0F1dGhDb250ZXh0J1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCdcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCAncmVhY3QtbG9hZGluZy1za2VsZXRvbi9kaXN0L3NrZWxldG9uLmNzcydcbmltcG9ydCB7IFNXUkNvbmZpZyB9IGZyb20gJ3N3cidcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0ICcuLi9zdHlsZXMvdHJhbnNpdGlvbi5jc3MnXG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgYnJhbmQ6IHtcbiAgICA5MDA6ICcjMjQyNzJFJyxcbiAgICA4MDA6ICcjOUFDQkNFJyxcbiAgICA3MDA6ICcjMmE2OWFjJ1xuICB9XG59XG5cbmNvbnN0IGZldGNoZXIgPSBxdWVyeSA9PiByZXF1ZXN0KCcvYXBpL2dyYXBocWwnLCBxdWVyeSlcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSB9OiBBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U1dSQ29uZmlnIHZhbHVlPXt7IGZldGNoZXI6IGZldGNoZXIgfX0+XG4gICAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0F1dGhQcm92aWRlcj5cbiAgICAgIDwvU1dSQ29uZmlnPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwicmVxdWVzdCIsIlNXUkNvbmZpZyIsImNvbG9ycyIsImJyYW5kIiwiZmV0Y2hlciIsInF1ZXJ5IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./utils/supabase.tsx":
/*!****************************!*\
  !*** ./utils/supabase.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supabase\": () => (/* binding */ supabase)\n/* harmony export */ });\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/supabase-js */ \"@supabase/supabase-js\");\n/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst supabaseUrl = \"https://afmrynysmeogummgkkrb.supabase.co\" || 0;\nconst supabaseAnonKey = \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmbXJ5bnlzbWVvZ3VtbWdra3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTA3Mjg1MjMsImV4cCI6MTk2NjMwNDUyM30._rIn5VvogJ8ZMtiPp819afSALutqzuSD-Fs-ZwJw9IA\" || 0;\nconst supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(supabaseUrl, supabaseAnonKey);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9zdXBhYmFzZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9EO0FBRXBELEtBQUssQ0FBQ0MsV0FBVyxHQUFHQywwQ0FBb0MsSUFBSSxDQUFFO0FBQzlELEtBQUssQ0FBQ0csZUFBZSxHQUFHSCxrTkFBeUMsSUFBSSxDQUFFO0FBRWhFLEtBQUssQ0FBQ0ssUUFBUSxHQUFHUCxtRUFBWSxDQUFDQyxXQUFXLEVBQUVJLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdHVkeWZsb3ctbmV4dC8uL3V0aWxzL3N1cGFiYXNlLnRzeD82NTk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcydcblxuY29uc3Qgc3VwYWJhc2VVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwgfHwgJydcbmNvbnN0IHN1cGFiYXNlQW5vbktleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIHx8ICcnXG5cbmV4cG9ydCBjb25zdCBzdXBhYmFzZSA9IGNyZWF0ZUNsaWVudChzdXBhYmFzZVVybCwgc3VwYWJhc2VBbm9uS2V5KVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsInN1cGFiYXNlVXJsIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX1VSTCIsInN1cGFiYXNlQW5vbktleSIsIk5FWFRfUFVCTElDX1NVUEFCQVNFX0FOT05fS0VZIiwic3VwYWJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/supabase.tsx\n");

/***/ }),

/***/ "./node_modules/react-loading-skeleton/dist/skeleton.css":
/*!***************************************************************!*\
  !*** ./node_modules/react-loading-skeleton/dist/skeleton.css ***!
  \***************************************************************/
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

/***/ "@supabase/supabase-js":
/*!****************************************!*\
  !*** external "@supabase/supabase-js" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-request");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

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