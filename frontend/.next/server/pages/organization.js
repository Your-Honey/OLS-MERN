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
exports.id = "pages/organization";
exports.ids = ["pages/organization"];
exports.modules = {

/***/ "./src/pages/organization.tsx":
/*!************************************!*\
  !*** ./src/pages/organization.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io-client */ \"socket.io-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, socket_io_client__WEBPACK_IMPORTED_MODULE_5__]);\n([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, axios__WEBPACK_IMPORTED_MODULE_2__, socket_io_client__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst ENDPOINT = \"http://localhost:8080\";\nvar socket;\nfunction Organization() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [organisations, setOrganisations] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    if (false) { var user; }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchOrganisation = async ()=>{\n            try {\n                const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/apii/organisation/fetch\");\n                setOrganisations(data);\n            } catch (err) {\n                console.log(err);\n            }\n        };\n        fetchOrganisation();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        socket = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(ENDPOINT);\n        return ()=>{\n            socket.disconnect();\n        };\n    });\n    const submitHandler = async ()=>{\n        if (!name) {\n            window.alert(\"Enter Name\");\n            return;\n        }\n        try {\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/apii/organisation/create\", {\n                name\n            }, {\n                headers: {\n                    authorization: `Bearer ${user.token}`\n                }\n            });\n            setOrganisations([\n                data,\n                ...organisations\n            ]);\n            setName(\"\");\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const handleOrganisationLogout = async (org)=>{\n        try {\n            socket.emit(\"Logout Organisation\", org);\n            const { data  } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"apii/activity/updateAll\", {\n                organisationId: org._id\n            }, {\n                headers: {\n                    authorization: `Bearer ${user.token}`\n                }\n            });\n            console.log(data);\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {\n                pl: \"2\",\n                area: \"header\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                    templateColumns: \"repeat(5, 1fr)\",\n                    gap: 4,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {\n                                    children: \"Organistion Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                                    value: name,\n                                    onChange: (e)=>setName(e.target.value),\n                                    type: \"text\",\n                                    placeholder: \"Enter....\"\n                                }, void 0, false, {\n                                    fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            mt: 4,\n                            colorScheme: \"teal\",\n                            type: \"submit\",\n                            onClick: submitHandler,\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                            mt: 4,\n                            onClick: ()=>router.push(\"/admindashboard\"),\n                            children: \"Back\"\n                        }, void 0, false, {\n                            fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                    lineNumber: 99,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.TableContainer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table, {\n                    variant: \"simple\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Thead, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                        children: \"Name\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {\n                                        children: \"Log out All\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                                        lineNumber: 128,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                            lineNumber: 125,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tbody, {\n                            children: organisations.map((org)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                            children: org.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                                            lineNumber: 134,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                                onClick: ()=>handleOrganisationLogout(org),\n                                                children: \"Log Out\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                                                lineNumber: 136,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                                            lineNumber: 135,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, org._id, true, {\n                                    fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                                    lineNumber: 133,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                            lineNumber: 131,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/dell/Desktop/demo/OLS-MERN/frontend/src/pages/organization.tsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Organization);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBS0E7c0NBQ0osNEVBQUNDLGdEQUFFQTs7a0RBQ0QsOERBQUNGLGdEQUFFQTtrREFBQzs7Ozs7O2tEQUNKLDhEQUFDQSxnREFBRUE7a0RBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUdSLDhEQUFDRixtREFBS0E7c0NBQ0hlLGNBQWM0QyxHQUFHLENBQUMsQ0FBQ3BCLG9CQUNsQiw4REFBQ25DLGdEQUFFQTs7c0RBQ0QsOERBQUNILGdEQUFFQTtzREFBRXNDLElBQUl0QixJQUFJOzs7Ozs7c0RBQ2IsOERBQUNoQixnREFBRUE7c0RBQ0QsNEVBQUNULG9EQUFNQTtnREFBQ2dFLFNBQVMsSUFBTWxCLHlCQUF5QkM7MERBQU07Ozs7Ozs7Ozs7OzttQ0FIakRBLElBQUlJLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYzlCO0FBRUEsaUVBQWU5QixZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2xzLWZyb250ZW5kLy4vc3JjL3BhZ2VzL29yZ2FuaXphdGlvbi50c3g/MzM0ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJT3JnYW5pc2F0aW9uIH0gZnJvbSBcIkAvdHlwZXMvb3JnYW5pc2F0aW9uSW50ZXJmYWNlXCI7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIEdyaWQsXG4gIEdyaWRJdGVtLFxuICBJbnB1dCxcbiAgVGFibGUsXG4gIFRhYmxlQ29udGFpbmVyLFxuICBUYm9keSxcbiAgVGQsXG4gIFRoLFxuICBUaGVhZCxcbiAgVHIsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgaW8gZnJvbSBcInNvY2tldC5pby1jbGllbnRcIjtcblxuY29uc3QgRU5EUE9JTlQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiO1xudmFyIHNvY2tldDogYW55O1xuXG5mdW5jdGlvbiBPcmdhbml6YXRpb24oKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbb3JnYW5pc2F0aW9ucywgc2V0T3JnYW5pc2F0aW9uc10gPSB1c2VTdGF0ZTxJT3JnYW5pc2F0aW9uW10+KFtdKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHVzZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJJbmZvXCIpXG4gICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5mb1wiKSBhcyBzdHJpbmcpXG4gICAgICA6IG51bGw7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoT3JnYW5pc2F0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpaS9vcmdhbmlzYXRpb24vZmV0Y2hcIik7XG4gICAgICAgIHNldE9yZ2FuaXNhdGlvbnMoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGZldGNoT3JnYW5pc2F0aW9uKCk7XG4gIH0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNvY2tldCA9IGlvKEVORFBPSU5UKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghbmFtZSkge1xuICAgICAgd2luZG93LmFsZXJ0KFwiRW50ZXIgTmFtZVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgXCIvYXBpaS9vcmdhbmlzYXRpb24vY3JlYXRlXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXIudG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgc2V0T3JnYW5pc2F0aW9ucyhbZGF0YSwgLi4ub3JnYW5pc2F0aW9uc10pO1xuICAgICAgc2V0TmFtZShcIlwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kbGVPcmdhbmlzYXRpb25Mb2dvdXQgPSBhc3luYyAob3JnOiBJT3JnYW5pc2F0aW9uKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHNvY2tldC5lbWl0KFwiTG9nb3V0IE9yZ2FuaXNhdGlvblwiLCBvcmcpO1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wdXQoXG4gICAgICAgIFwiYXBpaS9hY3Rpdml0eS91cGRhdGVBbGxcIixcbiAgICAgICAge1xuICAgICAgICAgIG9yZ2FuaXNhdGlvbklkOiBvcmcuX2lkLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXIudG9rZW59YCxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEdyaWRJdGVtIHBsPVwiMlwiIGFyZWE9e1wiaGVhZGVyXCJ9PlxuICAgICAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoNSwgMWZyKVwiIGdhcD17NH0+XG4gICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgPEZvcm1MYWJlbD5PcmdhbmlzdGlvbiBOYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlci4uLi5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIG10PXs0fVxuICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJ0ZWFsXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgb25DbGljaz17c3VibWl0SGFuZGxlcn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG10PXs0fSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9hZG1pbmRhc2hib2FyZFwiKX0+XG4gICAgICAgICAgICBCYWNrXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZEl0ZW0+XG5cbiAgICAgIDxUYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgPFRhYmxlIHZhcmlhbnQ9XCJzaW1wbGVcIj5cbiAgICAgICAgICA8VGhlYWQ+XG4gICAgICAgICAgICA8VHI+XG4gICAgICAgICAgICAgIDxUaD5OYW1lPC9UaD5cbiAgICAgICAgICAgICAgPFRoPkxvZyBvdXQgQWxsPC9UaD5cbiAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgPC9UaGVhZD5cbiAgICAgICAgICA8VGJvZHk+XG4gICAgICAgICAgICB7b3JnYW5pc2F0aW9ucy5tYXAoKG9yZzogSU9yZ2FuaXNhdGlvbikgPT4gKFxuICAgICAgICAgICAgICA8VHIga2V5PXtvcmcuX2lkfT5cbiAgICAgICAgICAgICAgICA8VGQ+e29yZy5uYW1lfTwvVGQ+XG4gICAgICAgICAgICAgICAgPFRkPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPcmdhbmlzYXRpb25Mb2dvdXQob3JnKX0+XG4gICAgICAgICAgICAgICAgICAgIExvZyBPdXRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvVGQ+XG4gICAgICAgICAgICAgIDwvVHI+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1Rib2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3JnYW5pemF0aW9uO1xuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZvcm1Db250cm9sIiwiRm9ybUxhYmVsIiwiR3JpZCIsIkdyaWRJdGVtIiwiSW5wdXQiLCJUYWJsZSIsIlRhYmxlQ29udGFpbmVyIiwiVGJvZHkiLCJUZCIsIlRoIiwiVGhlYWQiLCJUciIsImF4aW9zIiwidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImlvIiwiRU5EUE9JTlQiLCJzb2NrZXQiLCJPcmdhbml6YXRpb24iLCJyb3V0ZXIiLCJvcmdhbmlzYXRpb25zIiwic2V0T3JnYW5pc2F0aW9ucyIsIm5hbWUiLCJzZXROYW1lIiwidXNlciIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJmZXRjaE9yZ2FuaXNhdGlvbiIsImRhdGEiLCJnZXQiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZGlzY29ubmVjdCIsInN1Ym1pdEhhbmRsZXIiLCJ3aW5kb3ciLCJhbGVydCIsInBvc3QiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInRva2VuIiwiaGFuZGxlT3JnYW5pc2F0aW9uTG9nb3V0Iiwib3JnIiwiZW1pdCIsInB1dCIsIm9yZ2FuaXNhdGlvbklkIiwiX2lkIiwicGwiLCJhcmVhIiwidGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJtdCIsImNvbG9yU2NoZW1lIiwib25DbGljayIsInB1c2giLCJ2YXJpYW50IiwibWFwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/organization.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/organization.tsx"));
module.exports = __webpack_exports__;

})();