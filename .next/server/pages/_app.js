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

/***/ "./contexts/AuthContext.jsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.jsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth),\n/* harmony export */   \"default\": () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase */ \"./firebase.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase__WEBPACK_IMPORTED_MODULE_2__]);\n_firebase__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst AuthContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();\nfunction useAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AuthContext);\n}\nfunction AuthProvider({ children  }) {\n    const { 0: currentUser , 1: setCurrentUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    function signup(email, password) {\n        return _firebase__WEBPACK_IMPORTED_MODULE_2__.auth.createUserWithEmailAndPassword(email, password);\n    }\n    function googleSignup() {\n        return _firebase__WEBPACK_IMPORTED_MODULE_2__.auth.signInWithPopup(_firebase__WEBPACK_IMPORTED_MODULE_2__.googleProvider);\n    }\n    function login(email, password) {\n        return _firebase__WEBPACK_IMPORTED_MODULE_2__.auth.signInWithEmailAndPassword(email, password);\n    }\n    function logout() {\n        return _firebase__WEBPACK_IMPORTED_MODULE_2__.auth.signOut();\n    }\n    function resetPassword(email) {\n        return _firebase__WEBPACK_IMPORTED_MODULE_2__.auth.sendPasswordResetEmail(email);\n    }\n    function updateEmail(email) {\n        return currentUser.updateEmail(email);\n    }\n    function updateDisplayName(newDisplayName) {\n        return currentUser.updateProfile({\n            displayName: newDisplayName\n        });\n    }\n    function updatePassword(password) {\n        return currentUser.updatePassword(password);\n    }\n    function updatePhotoURL(url) {\n        return currentUser.updateProfile({\n            photoURL: url\n        });\n    }\n    function deleteUser() {\n        return currentUser.delete();\n    }\n    function reauthenticate(credential) {\n        return currentUser.reauthenticateWithCredential(credential);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = _firebase__WEBPACK_IMPORTED_MODULE_2__.auth.onAuthStateChanged(async (user)=>{\n            await setCurrentUser(user);\n            setLoading(false);\n        });\n        return unsubscribe;\n    }, []);\n    // eslint-disable-next-line react/jsx-no-constructed-context-values\n    const value = {\n        currentUser,\n        signup,\n        googleSignup,\n        login,\n        logout,\n        resetPassword,\n        updateEmail,\n        updateDisplayName,\n        updatePassword,\n        updatePhotoURL,\n        deleteUser,\n        reauthenticate\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: value,\n        children: !loading && children\n    }, void 0, false, {\n        fileName: \"/Users/agod/Documents/git-repos/studyflow-next/contexts/AuthContext.jsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlILFFBQVE7Ozs7OztBQUczQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3R1ZHlmbG93LW5leHQvLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qc3g/YjU1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYXV0aCwgZ29vZ2xlUHJvdmlkZXIgfSBmcm9tICcuLi9maXJlYmFzZSdcblxuY29uc3QgQXV0aENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KClcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUF1dGgoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGZ1bmN0aW9uIHNpZ251cChlbWFpbCwgcGFzc3dvcmQpIHtcbiAgICByZXR1cm4gYXV0aC5jcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxuICB9XG5cbiAgZnVuY3Rpb24gZ29vZ2xlU2lnbnVwKCkge1xuICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhQb3B1cChnb29nbGVQcm92aWRlcilcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZ2luKGVtYWlsLCBwYXNzd29yZCkge1xuICAgIHJldHVybiBhdXRoLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcbiAgfVxuXG4gIGZ1bmN0aW9uIGxvZ291dCgpIHtcbiAgICByZXR1cm4gYXV0aC5zaWduT3V0KClcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcbiAgICByZXR1cm4gYXV0aC5zZW5kUGFzc3dvcmRSZXNldEVtYWlsKGVtYWlsKVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlRW1haWwoZW1haWwpIHtcbiAgICByZXR1cm4gY3VycmVudFVzZXIudXBkYXRlRW1haWwoZW1haWwpXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5TmFtZShuZXdEaXNwbGF5TmFtZSkge1xuICAgIHJldHVybiBjdXJyZW50VXNlci51cGRhdGVQcm9maWxlKHtcbiAgICAgIGRpc3BsYXlOYW1lOiBuZXdEaXNwbGF5TmFtZVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQYXNzd29yZChwYXNzd29yZCkge1xuICAgIHJldHVybiBjdXJyZW50VXNlci51cGRhdGVQYXNzd29yZChwYXNzd29yZClcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVBob3RvVVJMKHVybCkge1xuICAgIHJldHVybiBjdXJyZW50VXNlci51cGRhdGVQcm9maWxlKHtcbiAgICAgIHBob3RvVVJMOiB1cmxcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gZGVsZXRlVXNlcigpIHtcbiAgICByZXR1cm4gY3VycmVudFVzZXIuZGVsZXRlKClcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYXV0aGVudGljYXRlKGNyZWRlbnRpYWwpIHtcbiAgICByZXR1cm4gY3VycmVudFVzZXIucmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbChjcmVkZW50aWFsKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YnNjcmliZSA9IGF1dGgub25BdXRoU3RhdGVDaGFuZ2VkKGFzeW5jIHVzZXIgPT4ge1xuICAgICAgYXdhaXQgc2V0Q3VycmVudFVzZXIodXNlcilcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSlcbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcbiAgfSwgW10pXG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L2pzeC1uby1jb25zdHJ1Y3RlZC1jb250ZXh0LXZhbHVlc1xuICBjb25zdCB2YWx1ZSA9IHtcbiAgICBjdXJyZW50VXNlcixcbiAgICBzaWdudXAsXG4gICAgZ29vZ2xlU2lnbnVwLFxuICAgIGxvZ2luLFxuICAgIGxvZ291dCxcbiAgICByZXNldFBhc3N3b3JkLFxuICAgIHVwZGF0ZUVtYWlsLFxuICAgIHVwZGF0ZURpc3BsYXlOYW1lLFxuICAgIHVwZGF0ZVBhc3N3b3JkLFxuICAgIHVwZGF0ZVBob3RvVVJMLFxuICAgIGRlbGV0ZVVzZXIsXG4gICAgcmVhdXRoZW50aWNhdGVcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+XG4gICAgICB7IWxvYWRpbmcgJiYgY2hpbGRyZW59XG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXV0aCIsImdvb2dsZVByb3ZpZGVyIiwiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlQXV0aCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2lnbnVwIiwiZW1haWwiLCJwYXNzd29yZCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsImdvb2dsZVNpZ251cCIsInNpZ25JbldpdGhQb3B1cCIsImxvZ2luIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJsb2dvdXQiLCJzaWduT3V0IiwicmVzZXRQYXNzd29yZCIsInNlbmRQYXNzd29yZFJlc2V0RW1haWwiLCJ1cGRhdGVFbWFpbCIsInVwZGF0ZURpc3BsYXlOYW1lIiwibmV3RGlzcGxheU5hbWUiLCJ1cGRhdGVQcm9maWxlIiwiZGlzcGxheU5hbWUiLCJ1cGRhdGVQYXNzd29yZCIsInVwZGF0ZVBob3RvVVJMIiwidXJsIiwicGhvdG9VUkwiLCJkZWxldGVVc2VyIiwiZGVsZXRlIiwicmVhdXRoZW50aWNhdGUiLCJjcmVkZW50aWFsIiwicmVhdXRoZW50aWNhdGVXaXRoQ3JlZGVudGlhbCIsInVuc3Vic2NyaWJlIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsInZhbHVlIiwiUHJvdmlkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AuthContext.jsx\n");

/***/ }),

/***/ "./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"googleProvider\": () => (/* binding */ googleProvider),\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ \"firebase/compat/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/storage */ \"firebase/compat/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_compat_storage__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst google = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth.GoogleAuthProvider();\nconst app = firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initializeApp({\n    apiKey: 'AIzaSyC6-vXKieNlrq6Ri8q14nrgGHSEM0PyTh4',\n    authDomain: process.env.AUTH_DOMAIN,\n    projectId: process.env.PROJECT_ID,\n    storageBucket: process.env.STORAGE_BUCKET,\n    messagingSenderId: process.env.MESSAGING_SENDER_ID,\n    appId: process.env.APP_ID\n});\nconst googleProvider = google;\nconst auth = app.auth();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEM7QUFDYjtBQUNHO0FBRWhDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLEdBQUcsQ0FBQ0QsbUZBQWdDO0FBRW5ELEtBQUssQ0FBQ0ksR0FBRyxHQUFHSix5RUFBc0IsQ0FBQyxDQUFDO0lBQ2xDTSxNQUFNLEVBQUUsQ0FBeUM7SUFDakRDLFVBQVUsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFdBQVc7SUFDbkNDLFNBQVMsRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLFVBQVU7SUFDakNDLGFBQWEsRUFBRUwsT0FBTyxDQUFDQyxHQUFHLENBQUNLLGNBQWM7SUFDekNDLGlCQUFpQixFQUFFUCxPQUFPLENBQUNDLEdBQUcsQ0FBQ08sbUJBQW1CO0lBQ2xEQyxLQUFLLEVBQUVULE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUyxNQUFNO0FBQzNCLENBQUM7QUFFTSxLQUFLLENBQUNDLGNBQWMsR0FBR2xCLE1BQU07QUFDN0IsS0FBSyxDQUFDQyxJQUFJLEdBQUdFLEdBQUcsQ0FBQ0YsSUFBSTtBQUM1QixpRUFBZUUsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0dWR5Zmxvdy1uZXh0Ly4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvY29tcGF0L2FwcCdcbmltcG9ydCAnZmlyZWJhc2UvY29tcGF0L2F1dGgnXG5pbXBvcnQgJ2ZpcmViYXNlL2NvbXBhdC9zdG9yYWdlJ1xuXG5jb25zdCBnb29nbGUgPSBuZXcgZmlyZWJhc2UuYXV0aC5Hb29nbGVBdXRoUHJvdmlkZXIoKVxuXG5jb25zdCBhcHAgPSBmaXJlYmFzZS5pbml0aWFsaXplQXBwKHtcbiAgYXBpS2V5OiAnQUl6YVN5QzYtdlhLaWVObHJxNlJpOHExNG5yZ0dIU0VNMFB5VGg0JyxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuQVVUSF9ET01BSU4sXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYuUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuU1RPUkFHRV9CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5NRVNTQUdJTkdfU0VOREVSX0lELFxuICBhcHBJZDogcHJvY2Vzcy5lbnYuQVBQX0lEXG59KVxuXG5leHBvcnQgY29uc3QgZ29vZ2xlUHJvdmlkZXIgPSBnb29nbGVcbmV4cG9ydCBjb25zdCBhdXRoID0gYXBwLmF1dGgoKVxuZXhwb3J0IGRlZmF1bHQgYXBwXG4iXSwibmFtZXMiOlsiZmlyZWJhc2UiLCJnb29nbGUiLCJhdXRoIiwiR29vZ2xlQXV0aFByb3ZpZGVyIiwiYXBwIiwiaW5pdGlhbGl6ZUFwcCIsImFwaUtleSIsImF1dGhEb21haW4iLCJwcm9jZXNzIiwiZW52IiwiQVVUSF9ET01BSU4iLCJwcm9qZWN0SWQiLCJQUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIlNUT1JBR0VfQlVDS0VUIiwibWVzc2FnaW5nU2VuZGVySWQiLCJNRVNTQUdJTkdfU0VOREVSX0lEIiwiYXBwSWQiLCJBUFBfSUQiLCJnb29nbGVQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/AuthContext */ \"./contexts/AuthContext.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\ncontexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/agod/Documents/git-repos/studyflow-next/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/agod/Documents/git-repos/studyflow-next/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThCO0FBRWlCO1NBRXRDQyxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxNQUFNOzhGQUVESCw0REFBWTtrR0FDVkUsU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7Ozs7O0FBSWhDLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3N0dWR5Zmxvdy1uZXh0Ly4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBBdXRoUHJvdmlkZXIgZnJvbSAnY29udGV4dHMvQXV0aENvbnRleHQnXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEF1dGhQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9BdXRoUHJvdmlkZXI+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJBdXRoUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



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

/***/ "firebase/compat/app":
/*!**************************************!*\
  !*** external "firebase/compat/app" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/app");;

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/auth");;

/***/ }),

/***/ "firebase/compat/storage":
/*!******************************************!*\
  !*** external "firebase/compat/storage" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/compat/storage");;

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