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
exports.id = "pages/userhome";
exports.ids = ["pages/userhome"];
exports.modules = {

/***/ "./src/pages/userhome.tsx":
/*!********************************!*\
  !*** ./src/pages/userhome.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, socket_io_client__WEBPACK_IMPORTED_MODULE_5__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, socket_io_client__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst ENDPOINT = \"http://localhost:8080\";\nvar socket;\nfunction UserHome() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    if (false) { var user; }\n    const logoutHandler = async ()=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"/apii/activity/update\", {\n                id: user.activityId\n            }, {\n                headers: {\n                    Authorization: `Bearer ${user.token}`\n                }\n            });\n            localStorage.removeItem(\"userInfo\");\n            router.push(\"/home\");\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!user) {\n            router.push(\"/home\");\n        } else {\n            const logoutStatus = async ()=>{\n                try {\n                    const { activityId  } = user;\n                    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`/apii/activity/fetch/${activityId}`, {\n                        headers: {\n                            Authorization: `Bearer ${user.token}`\n                        }\n                    });\n                    if (data.logouttime) {\n                        localStorage.removeItem(\"userInfo\");\n                        router.push(\"/home\");\n                    }\n                } catch (err) {\n                    console.log(err);\n                }\n            };\n            logoutStatus();\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ENDPOINT);\n        socket.emit(\"User Join\", user);\n        return ()=>{\n            socket.disconnect();\n        };\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        socket.on(\"Logout\", ()=>{\n            logoutHandler();\n        });\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"Welcome\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                onClick: logoutHandler,\n                children: \"Log out\"\n            }, void 0, false, {\n                fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/userhome.tsx\",\n                lineNumber: 79,\n                columnNumber: 14\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserHome);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdXNlcmhvbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ2hCO0FBQ2M7QUFDTjtBQUNBO0FBRWxDLE1BQU1LLFdBQVc7QUFDakIsSUFBSUM7QUFFSixTQUFTQyxXQUFXO0lBQ2xCLE1BQU1DLFNBQVNOLHNEQUFTQTtJQUN4QixJQUFJLEtBQTZCLEVBQUUsYUFJbEM7SUFFRCxNQUFNWSxnQkFBZ0IsVUFBWTtRQUNoQyxJQUFJO1lBQ0YsTUFBTWIsaURBQVMsQ0FDYix5QkFDQTtnQkFDRWUsSUFBSVAsS0FBS1EsVUFBVTtZQUNyQixHQUNBO2dCQUNFQyxTQUFTO29CQUNQQyxlQUFlLENBQUMsT0FBTyxFQUFFVixLQUFLVyxLQUFLLENBQUMsQ0FBQztnQkFDdkM7WUFDRjtZQUVGVixhQUFhVyxVQUFVLENBQUM7WUFDeEJiLE9BQU9jLElBQUksQ0FBQztRQUNkLEVBQUUsT0FBT0MsS0FBSztZQUNaQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUVBcEIsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ00sTUFBTTtZQUNURCxPQUFPYyxJQUFJLENBQUM7UUFDZCxPQUFPO1lBQ0wsTUFBTUksZUFBZSxVQUFZO2dCQUMvQixJQUFJO29CQUNGLE1BQU0sRUFBRVQsV0FBVSxFQUFFLEdBQUdSO29CQUN2QixNQUFNLEVBQUVrQixLQUFJLEVBQUUsR0FBRyxNQUFNMUIsaURBQVMsQ0FDOUIsQ0FBQyxxQkFBcUIsRUFBRWdCLFdBQVcsQ0FBQyxFQUNwQzt3QkFDRUMsU0FBUzs0QkFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRVYsS0FBS1csS0FBSyxDQUFDLENBQUM7d0JBQ3ZDO29CQUNGO29CQUVGLElBQUlPLEtBQUtFLFVBQVUsRUFBRTt3QkFDbkJuQixhQUFhVyxVQUFVLENBQUM7d0JBQ3hCYixPQUFPYyxJQUFJLENBQUM7b0JBQ2QsQ0FBQztnQkFDSCxFQUFFLE9BQU9DLEtBQUs7b0JBQ1pDLFFBQVFDLEdBQUcsQ0FBQ0Y7Z0JBQ2Q7WUFDRjtZQUNBRztRQUNGLENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTHZCLGdEQUFTQSxDQUFDLElBQU07UUFDZEcsU0FBU0YsNERBQUVBLENBQUNDO1FBQ1pDLE9BQU93QixJQUFJLENBQUMsYUFBYXJCO1FBQ3pCLE9BQU8sSUFBTTtZQUNYSCxPQUFPeUIsVUFBVTtRQUNuQjtJQUNGO0lBQ0E1QixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RHLE9BQU8wQixFQUFFLENBQUMsVUFBVSxJQUFNO1lBQ3hCbEI7UUFDRjtJQUNGO0lBQ0EscUJBQ0U7O1lBQUU7MEJBQ08sOERBQUNkLG9EQUFNQTtnQkFBQ2lDLFNBQVNuQjswQkFBZTs7Ozs7Ozs7QUFHN0M7QUFFQSxpRUFBZVAsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29scy1mcm9udGVuZC8uL3NyYy9wYWdlcy91c2VyaG9tZS50c3g/YjIwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBpbyBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xuXG5jb25zdCBFTkRQT0lOVCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwXCI7XG52YXIgc29ja2V0OiBhbnk7XG5cbmZ1bmN0aW9uIFVzZXJIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgdXNlciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlckluZm9cIilcbiAgICAgID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJbmZvXCIpIGFzIHN0cmluZylcbiAgICAgIDogbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGxvZ291dEhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGF4aW9zLnB1dChcbiAgICAgICAgXCIvYXBpaS9hY3Rpdml0eS91cGRhdGVcIixcbiAgICAgICAge1xuICAgICAgICAgIGlkOiB1c2VyLmFjdGl2aXR5SWQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlci50b2tlbn1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJJbmZvXCIpO1xuICAgICAgcm91dGVyLnB1c2goXCIvaG9tZVwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsb2dvdXRTdGF0dXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBhY3Rpdml0eUlkIH0gPSB1c2VyO1xuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KFxuICAgICAgICAgICAgYC9hcGlpL2FjdGl2aXR5L2ZldGNoLyR7YWN0aXZpdHlJZH1gLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXIudG9rZW59YCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICAgIGlmIChkYXRhLmxvZ291dHRpbWUpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlckluZm9cIik7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9ob21lXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGxvZ291dFN0YXR1cygpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc29ja2V0ID0gaW8oRU5EUE9JTlQpO1xuICAgIHNvY2tldC5lbWl0KFwiVXNlciBKb2luXCIsIHVzZXIpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldC5vbihcIkxvZ291dFwiLCAoKSA9PiB7XG4gICAgICBsb2dvdXRIYW5kbGVyKCk7XG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICBXZWxjb21lPEJ1dHRvbiBvbkNsaWNrPXtsb2dvdXRIYW5kbGVyfT5Mb2cgb3V0PC9CdXR0b24+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJIb21lO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsImF4aW9zIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiaW8iLCJFTkRQT0lOVCIsInNvY2tldCIsIlVzZXJIb21lIiwicm91dGVyIiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsb2dvdXRIYW5kbGVyIiwicHV0IiwiaWQiLCJhY3Rpdml0eUlkIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxvZ291dFN0YXR1cyIsImRhdGEiLCJnZXQiLCJsb2dvdXR0aW1lIiwiZW1pdCIsImRpc2Nvbm5lY3QiLCJvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/userhome.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "socket.io-client":
/*!***********************************!*\
  !*** external "socket.io-client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("socket.io-client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/userhome.tsx"));
module.exports = __webpack_exports__;

})();