"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/memory",{

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_pokeball_pokemon_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pokeball-pokemon-svgrepo-com.svg */ \"./styles/pokeball-pokemon-svgrepo-com.svg\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Card = function(param) {\n    var value = param.value, onClick = param.onClick, active = param.active, img = param.img, clearCard = param.clearCard;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(active || false), isFlipped = ref[0], setIsFlipped = ref[1];\n    var handleClick = function() {\n        onClick(value);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setIsFlipped(active);\n        console.log(active);\n    }, [\n        active\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            opacity: clearCard ? 0.2 : 1,\n            pointerEvents: clearCard ? \"none\" : \"\"\n        },\n        className: \"card \".concat(isFlipped ? \"flipped\" : \"\"),\n        onClick: handleClick,\n        children: [\n            clearCard ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-front\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _styles_pokeball_pokemon_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    width: 100,\n                    height: 150,\n                    style: {\n                        opacity: 0.7\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Personal\\\\Documents\\\\estudio\\\\poke-memory\\\\components\\\\Card.js\",\n                    lineNumber: 19,\n                    columnNumber: 49\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Personal\\\\Documents\\\\estudio\\\\poke-memory\\\\components\\\\Card.js\",\n                lineNumber: 19,\n                columnNumber: 20\n            }, _this) : \"\",\n            !clearCard ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-front\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: _styles_pokeball_pokemon_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    width: 100,\n                    height: 150,\n                    style: {\n                        opacity: 0.3\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Personal\\\\Documents\\\\estudio\\\\poke-memory\\\\components\\\\Card.js\",\n                    lineNumber: 20,\n                    columnNumber: 49\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Personal\\\\Documents\\\\estudio\\\\poke-memory\\\\components\\\\Card.js\",\n                lineNumber: 20,\n                columnNumber: 21\n            }, _this) : \"\",\n            !clearCard ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-back\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: img !== null && img !== void 0 ? img : \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Personal\\\\Documents\\\\estudio\\\\poke-memory\\\\components\\\\Card.js\",\n                    lineNumber: 21,\n                    columnNumber: 48\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Personal\\\\Documents\\\\estudio\\\\poke-memory\\\\components\\\\Card.js\",\n                lineNumber: 21,\n                columnNumber: 21\n            }, _this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Personal\\\\Documents\\\\estudio\\\\poke-memory\\\\components\\\\Card.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(Card, \"nx4pjhID3t816tl5l4YSaqcWIP4=\");\n_c = Card;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\nvar _c;\n$RefreshReg$(_c, \"Card\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7O0FBQTRDO0FBQ2I7QUFDbUM7QUFFbEUsSUFBTUksSUFBSSxHQUFHLGdCQUFnRDtRQUE3Q0MsS0FBSyxTQUFMQSxLQUFLLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxNQUFNLFNBQU5BLE1BQU0sRUFBRUMsR0FBRyxTQUFIQSxHQUFHLEVBQUVDLFNBQVMsU0FBVEEsU0FBUzs7SUFDcEQsSUFBa0NSLEdBQXlCLEdBQXpCQSwrQ0FBUSxDQUFDTSxNQUFNLElBQUksS0FBSyxDQUFDLEVBQXBERyxTQUFTLEdBQWtCVCxHQUF5QixHQUEzQyxFQUFFVSxZQUFZLEdBQUlWLEdBQXlCLEdBQTdCO0lBRTlCLElBQU1XLFdBQVcsR0FBRyxXQUFNO1FBQ3RCTixPQUFPLENBQUNELEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFREwsZ0RBQVMsQ0FBQyxXQUFNO1FBQ1pXLFlBQVksQ0FBQ0osTUFBTSxDQUFDLENBQUM7UUFDckJNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxNQUFNLENBQUM7SUFDckIsQ0FBQyxFQUFFO1FBQUNBLE1BQU07S0FBQyxDQUFDLENBQUM7SUFFZixxQkFDRSw4REFBQ1EsS0FBRztRQUFHQyxLQUFLLEVBQUU7WUFBQ0MsT0FBTyxFQUFFUixTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFBRVMsYUFBYSxFQUFFVCxTQUFTLEdBQUcsTUFBTSxHQUFFLEVBQUU7U0FBQztRQUFFVSxTQUFTLEVBQUUsT0FBTSxDQUE2QixPQUEzQlQsU0FBUyxHQUFHLFNBQVMsR0FBRyxFQUFFLENBQUU7UUFBRUosT0FBTyxFQUFFTSxXQUFXOztZQUN2SkgsU0FBUyxpQkFBRyw4REFBQ00sS0FBRztnQkFBQ0ksU0FBUyxFQUFDLFlBQVk7MEJBQUUsNEVBQUNqQixtREFBSztvQkFBQ2tCLEdBQUcsRUFBRWpCLGdGQUFRO29CQUFFa0IsS0FBSyxFQUFFLEdBQUc7b0JBQUVDLE1BQU0sRUFBRSxHQUFHO29CQUFFTixLQUFLLEVBQUU7d0JBQUNDLE9BQU8sRUFBRyxHQUFHO3FCQUFDOzs7Ozt5QkFBRzs7Ozs7cUJBQU0sR0FBRSxFQUFFO1lBQzNILENBQUNSLFNBQVMsaUJBQUcsOERBQUNNLEtBQUc7Z0JBQUNJLFNBQVMsRUFBQyxZQUFZOzBCQUFDLDRFQUFDakIsbURBQUs7b0JBQUNrQixHQUFHLEVBQUVqQixnRkFBUTtvQkFBRWtCLEtBQUssRUFBRSxHQUFHO29CQUFFQyxNQUFNLEVBQUUsR0FBRztvQkFBRU4sS0FBSyxFQUFFO3dCQUFDQyxPQUFPLEVBQUcsR0FBRztxQkFBQzs7Ozs7eUJBQUc7Ozs7O3FCQUFNLEdBQUcsRUFBRTtZQUM1SCxDQUFDUixTQUFTLGlCQUFHLDhEQUFDTSxLQUFHO2dCQUFDSSxTQUFTLEVBQUMsV0FBVzswQkFBQyw0RUFBQ1gsS0FBRztvQkFBQ1ksR0FBRyxFQUFFWixHQUFHLGFBQUhBLEdBQUcsY0FBSEEsR0FBRyxHQUFJLEVBQUU7Ozs7O3lCQUFJOzs7OztxQkFBTSxHQUFFLEVBQUU7Ozs7OzthQUN0RSxDQUNOO0FBQ0osQ0FBQztHQW5CS0osSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBcUJWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkLmpzP2Q2MjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgUG9rZWJvbGEgZnJvbSAnLi4vc3R5bGVzL3Bva2ViYWxsLXBva2Vtb24tc3ZncmVwby1jb20uc3ZnJztcclxuXHJcbmNvbnN0IENhcmQgPSAoeyB2YWx1ZSwgb25DbGljaywgYWN0aXZlLCBpbWcsIGNsZWFyQ2FyZH0pICA9PiB7XHJcbiAgY29uc3QgW2lzRmxpcHBlZCwgc2V0SXNGbGlwcGVkXSA9IHVzZVN0YXRlKGFjdGl2ZSB8fCBmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBvbkNsaWNrKHZhbHVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBzZXRJc0ZsaXBwZWQoYWN0aXZlKTtcclxuICAgICAgY29uc29sZS5sb2coYWN0aXZlKVxyXG4gICAgfSwgW2FjdGl2ZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiAgIHN0eWxlPXt7b3BhY2l0eTogY2xlYXJDYXJkID8gMC4yIDogMSwgcG9pbnRlckV2ZW50czogY2xlYXJDYXJkID8gJ25vbmUnOiAnJ319IGNsYXNzTmFtZT17YGNhcmQgJHtpc0ZsaXBwZWQgPyAnZmxpcHBlZCcgOiAnJ31gfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgIHtjbGVhckNhcmQgPyA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZnJvbnRcIiA+PEltYWdlIHNyYz17UG9rZWJvbGF9IHdpZHRoPXsxMDB9IGhlaWdodD17MTUwfSBzdHlsZT17e29wYWNpdHk6ICAwLjd9fS8+PC9kaXY+OiAnJ31cclxuICAgICAgeyFjbGVhckNhcmQgPyA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZnJvbnRcIj48SW1hZ2Ugc3JjPXtQb2tlYm9sYX0gd2lkdGg9ezEwMH0gaGVpZ2h0PXsxNTB9IHN0eWxlPXt7b3BhY2l0eTogIDAuM319Lz48L2Rpdj4gOiAnJ31cclxuICAgICAgeyFjbGVhckNhcmQgPyA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYmFja1wiPjxpbWcgc3JjPXtpbWcgPz8gJyd9IC8+PC9kaXY+OiAnJ31cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmQ7Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJQb2tlYm9sYSIsIkNhcmQiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJhY3RpdmUiLCJpbWciLCJjbGVhckNhcmQiLCJpc0ZsaXBwZWQiLCJzZXRJc0ZsaXBwZWQiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJzdHlsZSIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Card.js\n"));

/***/ })

});