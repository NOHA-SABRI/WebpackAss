(()=>{"use strict";var __webpack_modules__={"./src/assets/c.jpg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/c.jpg");\n\n//# sourceURL=webpack://labwebpack/./src/assets/c.jpg?')},"./src/assets/image.png":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/image.png");\n\n//# sourceURL=webpack://labwebpack/./src/assets/image.png?')},"./src/component/header/style.scss":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://labwebpack/./src/component/header/style.scss?")},"./src/component/text/style-component.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://labwebpack/./src/component/text/style-component.css?")},"./src/component/header/header.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_c_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/c.jpg */ "./src/assets/c.jpg");\n/* harmony import */ var _assets_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/image.png */ "./src/assets/image.png");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/component/header/style.scss");\n\r\n\r\n\r\n\r\nconst element = document.createElement("header");\r\n\r\nelement.innerHTML = "this is webpack demo";\r\n// element.classList.add(\'info\')\r\ndocument.body.appendChild(element);\r\n// document.classList.add\r\n// class Person {\r\n    \r\n//     constructor(fname, lname) {\r\n//        this.fname = fname;\r\n//        this.lname = lname;\r\n//     }\r\n \r\n//     get fullname() {\r\n//        return this.fname +" "+this.lname;\r\n//     }\r\n//  }\r\n\r\n//  console.log(new Person("sals","hussien"));\r\n\r\nconst img =document.createElement("img");\r\nimg.src=_assets_c_jpg__WEBPACK_IMPORTED_MODULE_0__.default;\r\ndocument.body.appendChild(img);\n\n//# sourceURL=webpack://labwebpack/./src/component/header/header.js?')},"./src/component/text/component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_component_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style-component.css */ "./src/component/text/style-component.css");\n\r\nfunction component() {\r\n    const element = document.createElement("div");\r\n  \r\n    element.innerHTML = "and it is cool";\r\n    element.classList.add(\'myDiv\')\r\n    return element;\r\n};\r\n\r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://labwebpack/./src/component/text/component.js?')},"./src/hellowolrd.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction hello() {\r\n    console.log("hello world ");\r\n       \r\n   }\r\n   /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hello);\n\n//# sourceURL=webpack://labwebpack/./src/hellowolrd.js?')},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hellowolrd_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hellowolrd.js */ "./src/hellowolrd.js");\n/* harmony import */ var _component_text_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/text/component */ "./src/component/text/component.js");\n/* harmony import */ var _component_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/header/header */ "./src/component/header/header.js");\n\r\n(0,_hellowolrd_js__WEBPACK_IMPORTED_MODULE_0__.default)()\r\n;\r\n\r\n// import \'./assets/c.jpg\'\r\n\r\n\n\n//# sourceURL=webpack://labwebpack/./src/index.js?')}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var _=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](_,_.exports,__webpack_require__),_.exports}__webpack_require__.d=(e,_)=>{for(var r in _)__webpack_require__.o(_,r)&&!__webpack_require__.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:_[r]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;__webpack_require__.g.importScripts&&(e=__webpack_require__.g.location+"");var _=__webpack_require__.g.document;if(!e&&_&&(_.currentScript&&(e=_.currentScript.src),!e)){var r=_.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),__webpack_require__.p=e})(),__webpack_require__("./src/index.js")})();