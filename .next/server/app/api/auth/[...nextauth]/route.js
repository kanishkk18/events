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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_project_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.ts */ \"(rsc)/./app/api/auth/[...nextauth]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/home/project/app/api/auth/[...nextauth]/route.ts\",\n    nextConfigOutput,\n    userland: _home_project_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGcHJvamVjdCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGaG9tZSUyRnByb2plY3QmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0M7QUFDOUU7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25mZXJpby1uZXh0anMvPzM4ZjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2hvbWUvcHJvamVjdC9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvaG9tZS9wcm9qZWN0L2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.ts":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./lib/auth.ts\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_lib_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNRO0FBRXhDLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyxrREFBV0E7QUFFTSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbmZlcmlvLW5leHRqcy8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzP2M4YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCdcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSAnQC9saWIvYXV0aCdcblxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH0iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/auth.ts":
/*!*********************!*\
  !*** ./lib/auth.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"(rsc)/./node_modules/@next-auth/prisma-adapter/dist/index.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prisma */ \"(rsc)/./lib/prisma.ts\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(rsc)/./node_modules/uuid/dist/esm/v4.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nasync function generateUsername(name) {\n    const cleanName = name.replace(/\\s+/g, \"\").toLowerCase();\n    const baseUsername = cleanName;\n    const uuidSuffix = (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().replace(/\\s+/g, \"\").slice(0, 4);\n    let username = `${baseUsername}${uuidSuffix}`;\n    let existingUser = await _prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n        where: {\n            username\n        }\n    });\n    while(existingUser){\n        username = `${baseUsername}${(0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])().replace(/\\s+/g, \"\").slice(0, 4)}`;\n        existingUser = await _prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n            where: {\n                username\n            }\n        });\n    }\n    return username;\n}\nconst authOptions = {\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_1__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    events: {\n        async createUser ({ user }) {\n            try {\n                const username = await generateUsername(user.name || user.email.split(\"@\")[0]);\n                await _prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.update({\n                    where: {\n                        id: user.id\n                    },\n                    data: {\n                        username,\n                        availability: {\n                            create: {\n                                timeGap: 30,\n                                days: {\n                                    create: Object.values(_prisma_client__WEBPACK_IMPORTED_MODULE_3__.DayOfWeek).map((day)=>({\n                                            day,\n                                            startTime: new Date(`2025-03-01T09:00:00Z`),\n                                            endTime: new Date(`2025-03-01T17:00:00Z`),\n                                            isAvailable: day !== _prisma_client__WEBPACK_IMPORTED_MODULE_3__.DayOfWeek.SUNDAY && day !== _prisma_client__WEBPACK_IMPORTED_MODULE_3__.DayOfWeek.SATURDAY\n                                        }))\n                                }\n                            }\n                        }\n                    }\n                });\n            } catch (error) {\n                console.error(\"Error in createUser event:\", error);\n                throw error;\n            }\n        }\n    },\n    callbacks: {\n        async signIn ({ user, account }) {\n            if (account?.provider === \"google\") {\n                try {\n                    const existingUser = await _prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                        where: {\n                            email: user.email\n                        }\n                    });\n                    if (existingUser) {\n                        // Check if Google account is linked\n                        const existingAccount = await _prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.account.findFirst({\n                            where: {\n                                userId: existingUser.id,\n                                provider: account.provider,\n                                providerAccountId: account.providerAccountId\n                            }\n                        });\n                        // Link account if not already linked\n                        if (!existingAccount) {\n                            await _prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.account.create({\n                                data: {\n                                    userId: existingUser.id,\n                                    type: account.type,\n                                    provider: account.provider,\n                                    providerAccountId: account.providerAccountId,\n                                    refresh_token: account.refresh_token,\n                                    access_token: account.access_token,\n                                    expires_at: account.expires_at,\n                                    token_type: account.token_type,\n                                    scope: account.scope,\n                                    id_token: account.id_token,\n                                    session_state: account.session_state\n                                }\n                            });\n                        }\n                        // Update username if missing\n                        if (!existingUser.username) {\n                            const username = await generateUsername(existingUser.name || existingUser.email.split(\"@\")[0]);\n                            await _prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.update({\n                                where: {\n                                    id: existingUser.id\n                                },\n                                data: {\n                                    username\n                                }\n                            });\n                        }\n                    }\n                } catch (error) {\n                    console.error(\"Error in signIn callback:\", error);\n                    return false;\n                }\n            }\n            return true;\n        },\n        async session ({ session, user }) {\n            if (session.user) {\n                const dbUser = await _prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\n                    where: {\n                        email: session.user.email\n                    }\n                });\n                if (dbUser) {\n                    session.user.id = dbUser.id;\n                    session.user.username = dbUser.username;\n                }\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\"\n    },\n    session: {\n        strategy: \"database\"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNQSxDQUFDYyxJQUFJLENBQUNDLFVBQVUsQ0FBQztvQkFDMUNDLE9BQU87d0JBQUVZLE9BQU9xQyxRQUFRbkQsSUFBSSxDQUFDYyxLQUFLO29CQUFFO2dCQUN0QztnQkFFQSxJQUFJc0MsUUFBUTtvQkFDVkQsUUFBUW5ELElBQUksQ0FBQ2lCLEVBQUUsR0FBR21DLE9BQU9uQyxFQUFFO29CQUMzQmtDLFFBQVFuRCxJQUFJLENBQUNGLFFBQVEsR0FBR3NELE9BQU90RCxRQUFRO2dCQUN6QztZQUNGO1lBQ0EsT0FBT3FEO1FBQ1Q7SUFDRjtJQUNBRSxPQUFPO1FBQ0xqQixRQUFRO0lBQ1Y7SUFDQWUsU0FBUztRQUNQRyxVQUFVO0lBQ1o7QUFDRixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29uZmVyaW8tbmV4dGpzLy4vbGliL2F1dGgudHM/YmY3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnXG5pbXBvcnQgeyBQcmlzbWFBZGFwdGVyIH0gZnJvbSAnQG5leHQtYXV0aC9wcmlzbWEtYWRhcHRlcidcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gJy4vcHJpc21hJ1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCdcbmltcG9ydCB7IERheU9mV2VlayB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVVzZXJuYW1lKG5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGNsZWFuTmFtZSA9IG5hbWUucmVwbGFjZSgvXFxzKy9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpXG4gIGNvbnN0IGJhc2VVc2VybmFtZSA9IGNsZWFuTmFtZVxuICBjb25zdCB1dWlkU3VmZml4ID0gdXVpZHY0KCkucmVwbGFjZSgvXFxzKy9nLCBcIlwiKS5zbGljZSgwLCA0KVxuICBsZXQgdXNlcm5hbWUgPSBgJHtiYXNlVXNlcm5hbWV9JHt1dWlkU3VmZml4fWBcbiAgXG4gIGxldCBleGlzdGluZ1VzZXIgPSBhd2FpdCBwcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICB3aGVyZTogeyB1c2VybmFtZSB9LFxuICB9KVxuXG4gIHdoaWxlIChleGlzdGluZ1VzZXIpIHtcbiAgICB1c2VybmFtZSA9IGAke2Jhc2VVc2VybmFtZX0ke3V1aWR2NCgpLnJlcGxhY2UoL1xccysvZywgXCJcIikuc2xpY2UoMCwgNCl9YFxuICAgIGV4aXN0aW5nVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoeyB3aGVyZTogeyB1c2VybmFtZSB9IH0pXG4gIH1cblxuICByZXR1cm4gdXNlcm5hbWVcbn1cblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfSUQhLFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCEsXG4gICAgfSksXG4gIF0sXG4gIGV2ZW50czoge1xuICAgIGFzeW5jIGNyZWF0ZVVzZXIoeyB1c2VyIH0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYXdhaXQgZ2VuZXJhdGVVc2VybmFtZSh1c2VyLm5hbWUgfHwgdXNlci5lbWFpbCEuc3BsaXQoJ0AnKVswXSlcbiAgICAgICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgICAgICB3aGVyZTogeyBpZDogdXNlci5pZCB9LFxuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgYXZhaWxhYmlsaXR5OiB7XG4gICAgICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgICAgIHRpbWVHYXA6IDMwLFxuICAgICAgICAgICAgICAgIGRheXM6IHtcbiAgICAgICAgICAgICAgICAgIGNyZWF0ZTogT2JqZWN0LnZhbHVlcyhEYXlPZldlZWspLm1hcCgoZGF5KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICBkYXksXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoYDIwMjUtMDMtMDFUMDk6MDA6MDBaYCksXG4gICAgICAgICAgICAgICAgICAgIGVuZFRpbWU6IG5ldyBEYXRlKGAyMDI1LTAzLTAxVDE3OjAwOjAwWmApLFxuICAgICAgICAgICAgICAgICAgICBpc0F2YWlsYWJsZTogZGF5ICE9PSBEYXlPZldlZWsuU1VOREFZICYmIGRheSAhPT0gRGF5T2ZXZWVrLlNBVFVSREFZLFxuICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjcmVhdGVVc2VyIGV2ZW50OicsIGVycm9yKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQgfSkge1xuICAgICAgaWYgKGFjY291bnQ/LnByb3ZpZGVyID09PSAnZ29vZ2xlJykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgZW1haWw6IHVzZXIuZW1haWwhIH0sXG4gICAgICAgICAgfSlcblxuICAgICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIEdvb2dsZSBhY2NvdW50IGlzIGxpbmtlZFxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdBY2NvdW50ID0gYXdhaXQgcHJpc21hLmFjY291bnQuZmluZEZpcnN0KHtcbiAgICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IGV4aXN0aW5nVXNlci5pZCxcbiAgICAgICAgICAgICAgICBwcm92aWRlcjogYWNjb3VudC5wcm92aWRlcixcbiAgICAgICAgICAgICAgICBwcm92aWRlckFjY291bnRJZDogYWNjb3VudC5wcm92aWRlckFjY291bnRJZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIExpbmsgYWNjb3VudCBpZiBub3QgYWxyZWFkeSBsaW5rZWRcbiAgICAgICAgICAgIGlmICghZXhpc3RpbmdBY2NvdW50KSB7XG4gICAgICAgICAgICAgIGF3YWl0IHByaXNtYS5hY2NvdW50LmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBleGlzdGluZ1VzZXIuaWQsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBhY2NvdW50LnR5cGUsXG4gICAgICAgICAgICAgICAgICBwcm92aWRlcjogYWNjb3VudC5wcm92aWRlcixcbiAgICAgICAgICAgICAgICAgIHByb3ZpZGVyQWNjb3VudElkOiBhY2NvdW50LnByb3ZpZGVyQWNjb3VudElkLFxuICAgICAgICAgICAgICAgICAgcmVmcmVzaF90b2tlbjogYWNjb3VudC5yZWZyZXNoX3Rva2VuLFxuICAgICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2NvdW50LmFjY2Vzc190b2tlbixcbiAgICAgICAgICAgICAgICAgIGV4cGlyZXNfYXQ6IGFjY291bnQuZXhwaXJlc19hdCxcbiAgICAgICAgICAgICAgICAgIHRva2VuX3R5cGU6IGFjY291bnQudG9rZW5fdHlwZSxcbiAgICAgICAgICAgICAgICAgIHNjb3BlOiBhY2NvdW50LnNjb3BlLFxuICAgICAgICAgICAgICAgICAgaWRfdG9rZW46IGFjY291bnQuaWRfdG9rZW4sXG4gICAgICAgICAgICAgICAgICBzZXNzaW9uX3N0YXRlOiBhY2NvdW50LnNlc3Npb25fc3RhdGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIHVzZXJuYW1lIGlmIG1pc3NpbmdcbiAgICAgICAgICAgIGlmICghZXhpc3RpbmdVc2VyLnVzZXJuYW1lKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gYXdhaXQgZ2VuZXJhdGVVc2VybmFtZShleGlzdGluZ1VzZXIubmFtZSB8fCBleGlzdGluZ1VzZXIuZW1haWwuc3BsaXQoJ0AnKVswXSlcbiAgICAgICAgICAgICAgYXdhaXQgcHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgICAgICAgICAgICB3aGVyZTogeyBpZDogZXhpc3RpbmdVc2VyLmlkIH0sXG4gICAgICAgICAgICAgICAgZGF0YTogeyB1c2VybmFtZSB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBzaWduSW4gY2FsbGJhY2s6JywgZXJyb3IpXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdXNlciB9KSB7XG4gICAgICBpZiAoc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgIGNvbnN0IGRiVXNlciA9IGF3YWl0IHByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7IGVtYWlsOiBzZXNzaW9uLnVzZXIuZW1haWwhIH0sXG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBpZiAoZGJVc2VyKSB7XG4gICAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gZGJVc2VyLmlkXG4gICAgICAgICAgc2Vzc2lvbi51c2VyLnVzZXJuYW1lID0gZGJVc2VyLnVzZXJuYW1lXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvYXV0aC9zaWduaW4nLFxuICB9LFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6ICdkYXRhYmFzZScsXG4gIH0sXG59Il0sIm5hbWVzIjpbIkdvb2dsZVByb3ZpZGVyIiwiUHJpc21hQWRhcHRlciIsInByaXNtYSIsInY0IiwidXVpZHY0IiwiRGF5T2ZXZWVrIiwiZ2VuZXJhdGVVc2VybmFtZSIsIm5hbWUiLCJjbGVhbk5hbWUiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJiYXNlVXNlcm5hbWUiLCJ1dWlkU3VmZml4Iiwic2xpY2UiLCJ1c2VybmFtZSIsImV4aXN0aW5nVXNlciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJhdXRoT3B0aW9ucyIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJldmVudHMiLCJjcmVhdGVVc2VyIiwiZW1haWwiLCJzcGxpdCIsInVwZGF0ZSIsImlkIiwiZGF0YSIsImF2YWlsYWJpbGl0eSIsImNyZWF0ZSIsInRpbWVHYXAiLCJkYXlzIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwiZGF5Iiwic3RhcnRUaW1lIiwiRGF0ZSIsImVuZFRpbWUiLCJpc0F2YWlsYWJsZSIsIlNVTkRBWSIsIlNBVFVSREFZIiwiZXJyb3IiLCJjb25zb2xlIiwiY2FsbGJhY2tzIiwic2lnbkluIiwiYWNjb3VudCIsInByb3ZpZGVyIiwiZXhpc3RpbmdBY2NvdW50IiwiZmluZEZpcnN0IiwidXNlcklkIiwicHJvdmlkZXJBY2NvdW50SWQiLCJ0eXBlIiwicmVmcmVzaF90b2tlbiIsImFjY2Vzc190b2tlbiIsImV4cGlyZXNfYXQiLCJ0b2tlbl90eXBlIiwic2NvcGUiLCJpZF90b2tlbiIsInNlc3Npb25fc3RhdGUiLCJzZXNzaW9uIiwiZGJVc2VyIiwicGFnZXMiLCJzdHJhdGVneSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma ?? new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxNQUFNQyxrQkFBa0JDO0FBSWpCLE1BQU1DLFNBQVNGLGdCQUFnQkUsTUFBTSxJQUFJLElBQUlILHdEQUFZQSxHQUFFO0FBRWxFLElBQUlJLElBQXlCLEVBQWNILGdCQUFnQkUsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbmZlcmlvLW5leHRqcy8uL2xpYi9wcmlzbWEudHM/OTgyMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHtcbiAgcHJpc21hOiBQcmlzbWFDbGllbnQgfCB1bmRlZmluZWRcbn1cblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgPz8gbmV3IFByaXNtYUNsaWVudCgpXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/uuid","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/preact","vendor-chunks/oidc-token-hash","vendor-chunks/object-hash","vendor-chunks/cookie","vendor-chunks/@next-auth"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fproject%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fproject&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();