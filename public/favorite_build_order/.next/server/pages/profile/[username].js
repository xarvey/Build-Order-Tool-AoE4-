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
exports.id = "pages/profile/[username]";
exports.ids = ["pages/profile/[username]"];
exports.modules = {

/***/ "./fetchData/getProfileData.js":
/*!*************************************!*\
  !*** ./fetchData/getProfileData.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProfileData\": () => (/* binding */ getProfileData)\n/* harmony export */ });\n/* harmony import */ var _firebase_nodeApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../firebase/nodeApp */ \"./firebase/nodeApp.js\");\n\nconst getProfileData = async (username)=>{\n    const db = _firebase_nodeApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"].firestore();\n    const profileCollection = db.collection(\"profile\");\n    const profileDoc = await profileCollection.doc(username).get();\n    if (!profileDoc.exists) {\n        return null;\n    }\n    return profileDoc.data();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZXRjaERhdGEvZ2V0UHJvZmlsZURhdGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsY0FBYyxHQUFHLE9BQU9DLFFBQVEsR0FBSztJQUNoRCxNQUFNQyxFQUFFLEdBQUdILG1FQUFlLEVBQUU7SUFDNUIsTUFBTUssaUJBQWlCLEdBQUdGLEVBQUUsQ0FBQ0csVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUNsRCxNQUFNQyxVQUFVLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLEdBQUcsQ0FBQ04sUUFBUSxDQUFDLENBQUNPLEdBQUcsRUFBRTtJQUU5RCxJQUFJLENBQUNGLFVBQVUsQ0FBQ0csTUFBTSxFQUFFO1FBQ3RCLE9BQU8sSUFBSTtLQUNaO0lBRUQsT0FBT0gsVUFBVSxDQUFDSSxJQUFJLEVBQUU7Q0FDekIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9mZXRjaERhdGEvZ2V0UHJvZmlsZURhdGEuanM/Y2FlMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRtaW4gZnJvbSAnLi4vZmlyZWJhc2Uvbm9kZUFwcCdcblxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGVEYXRhID0gYXN5bmMgKHVzZXJuYW1lKSA9PiB7XG4gIGNvbnN0IGRiID0gYWRtaW4uZmlyZXN0b3JlKClcbiAgY29uc3QgcHJvZmlsZUNvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdwcm9maWxlJylcbiAgY29uc3QgcHJvZmlsZURvYyA9IGF3YWl0IHByb2ZpbGVDb2xsZWN0aW9uLmRvYyh1c2VybmFtZSkuZ2V0KClcblxuICBpZiAoIXByb2ZpbGVEb2MuZXhpc3RzKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIHJldHVybiBwcm9maWxlRG9jLmRhdGEoKVxufVxuIl0sIm5hbWVzIjpbImFkbWluIiwiZ2V0UHJvZmlsZURhdGEiLCJ1c2VybmFtZSIsImRiIiwiZmlyZXN0b3JlIiwicHJvZmlsZUNvbGxlY3Rpb24iLCJjb2xsZWN0aW9uIiwicHJvZmlsZURvYyIsImRvYyIsImdldCIsImV4aXN0cyIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./fetchData/getProfileData.js\n");

/***/ }),

/***/ "./firebase/nodeApp.js":
/*!*****************************!*\
  !*** ./firebase/nodeApp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!firebase_admin__WEBPACK_IMPORTED_MODULE_0__.apps.length) {\n    firebase_admin__WEBPACK_IMPORTED_MODULE_0__.initializeApp({\n        credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0__.credential.cert({\n            \"project_id\": \"aoe4-build-order\",\n            \"client_email\": \"firebase-adminsdk-s054m@aoe4-build-order.iam.gserviceaccount.com\",\n            \"private_key\": \"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvdIHaebfdmk64\\nzSSPQr56+uDBedanL0dzclhGUBn/OGd0T5wzXAJ+4x2SurrJK+ss5fnkDXokHVmL\\n+w0YvETHZZK3AaF1p3tOWKRTfxFVtWbvhulc04ZC+sHkBdK1nlGux14Vtt5ga3yr\\nFD89RYtx/6lmCD38piCj+uLP2w/mW8Z7xywBFzQm7p1YKWjs1j7DWo5HcXZ98tf8\\njwBEyi9pAJzF29/5L2EV6RUthPgE5ygJZiIj5FTAIN4x6gIXOy50O1kMDu0nzPal\\nU/eCYCP9f045Uj+JjJXqmq7EWTPXrpKaoZLCpg/86amxDejbKYX0/VgoBky7IvkN\\nozp7ReqlAgMBAAECggEAIHiSpp0DpOivnH5kv3ml+GsRKOVUTz0N/2TgRuUApq3o\\n4YrxOMUUtihwmuzhcCUnYTgPkv/WhLQE1EXqQtNm9DMNX76Ww8gy5wk7IjPAQMkx\\na29fpV0FOkSfmQRl3lRWQB8n/6NIDPafjCbTXFLQT5D16Arq8+TH4ikmjDq5utMe\\nxAbEBt2z6HdSewFqk4OX3BPWQz3HN1HxRZBNY+3QKlWGc90eCh05zkLNmDI9gv1G\\nR3FMaMm+ToLcvZ7mr9dB1MVCpxWCK7h5/zeCjmC2Dgr51e8BqomiRjhSf5etA5Fu\\nRxueiNxbIqJouBfbmAHll50yhoT/ffsKzT4E7da14QKBgQDvitpOxFxbgSq24dq4\\n8DEAfqY8GtzHcN76VbrwIum27/K7WatV7fMiiG+mcrN9+ZhMbpgY/eZZS0Nhlk3A\\nfOeWeZaEct/dhY6KkR/t+p23QEErS9IB1Wtkf080eBdKacVrmyduToImw9nZozlF\\nNSbFRDNwt2GmST9CsmToih/AoQKBgQC7gnePxwnSie5TgP6yKZFhCdE8Sjl7XRG+\\nHiz1+zceGx/mV8XC+DJUweFjDsOIAGPGPBSwWD00tXQ0o5ipXqMx0juakCLZw6G9\\nw4L0kXqUEQf1KM3VRBEieoFtdMYR/dmpw8ilevyKoJsa97FzPMhaaAxcg+hwn2/6\\nNYIUgLx3hQKBgGB0I8V1sc6yqxVqyhyPstuFI8Ct/Fpea5qXbKeHF16vLakcyS3X\\nm4A7OeHm67l9CEM2gQ4HJnqsIJyp3fL1GHdxzBbW/qd/QM8w8o9ry5ffSp55cD2G\\nxzB3RthUxuQSxQi4N99lw2iCkjTdUZE5frwN4zyuyqYfdlaP6Kvt+i0hAoGAKpZ+\\nW1yEoZoMVFD3CDYiu9yD9mKRXbCMyBaIdbICGcdlXmbPFvJSVCfY7iu7Q1d7Udnx\\nhP/1ntQbuZzynn1NKZKrUPatw7IIOVZ/lta39YtMuGT1IxwbnC4g2WBtYEa8ui8q\\nklM1qrLBp8VcO2UxyD7bl+Op1nKP909R5SA8LhUCgYEAunAmddrZ5CbEIbTaObuc\\nkNtf/smZtPeTzA2O1bO9/b3HNX2qBud/0TK76eIZTVWqqg7An9TCPti1f5LwDsRy\\nQcWBEtWrEGqp2ORaD+F0flW1htQP9GV0g8ZglIzuASR9qCrBJB/Tghd3fx1pO26n\\n1opfKpjhfi9wBF3gBa+UKSs=\\n-----END PRIVATE KEY-----\\n\"\n        }),\n        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebase_admin__WEBPACK_IMPORTED_MODULE_0__);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9ub2RlQXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUV2QyxJQUFJLENBQUNBLHVEQUFpQixFQUFFO0lBQ3RCQSx5REFBbUIsQ0FBQztRQUNsQkksVUFBVSxFQUFFSiwyREFBcUIsQ0FBQztZQUNoQyxZQUFZLEVBQUUsa0JBQWtCO1lBQ2hDLGNBQWMsRUFBRSxrRUFBa0U7WUFDbEYsYUFBYSxFQUFFLHNzREFBc3NEO1NBQ3R0RCxDQUFDO1FBQ0ZNLFdBQVcsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLGlDQUFpQztLQUMzRCxDQUFDO0NBQ0g7QUFFRCxpRUFBZVQsMkNBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9ub2RlQXBwLmpzPzFmODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWRtaW4gZnJvbSAnZmlyZWJhc2UtYWRtaW4nXG5cbmlmICghYWRtaW4uYXBwcy5sZW5ndGgpIHtcbiAgYWRtaW4uaW5pdGlhbGl6ZUFwcCh7XG4gICAgY3JlZGVudGlhbDogYWRtaW4uY3JlZGVudGlhbC5jZXJ0KHtcbiAgICAgIFwicHJvamVjdF9pZFwiOiBcImFvZTQtYnVpbGQtb3JkZXJcIixcbiAgICAgIFwiY2xpZW50X2VtYWlsXCI6IFwiZmlyZWJhc2UtYWRtaW5zZGstczA1NG1AYW9lNC1idWlsZC1vcmRlci5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbVwiLFxuICAgICAgXCJwcml2YXRlX2tleVwiOiBcIi0tLS0tQkVHSU4gUFJJVkFURSBLRVktLS0tLVxcbk1JSUV2UUlCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQktjd2dnU2pBZ0VBQW9JQkFRQ3ZkSUhhZWJmZG1rNjRcXG56U1NQUXI1Nit1REJlZGFuTDBkemNsaEdVQm4vT0dkMFQ1d3pYQUorNHgyU3VyckpLK3NzNWZua0RYb2tIVm1MXFxuK3cwWXZFVEhaWkszQWFGMXAzdE9XS1JUZnhGVnRXYnZodWxjMDRaQytzSGtCZEsxbmxHdXgxNFZ0dDVnYTN5clxcbkZEODlSWXR4LzZsbUNEMzhwaUNqK3VMUDJ3L21XOFo3eHl3QkZ6UW03cDFZS1dqczFqN0RXbzVIY1haOTh0ZjhcXG5qd0JFeWk5cEFKekYyOS81TDJFVjZSVXRoUGdFNXlnSlppSWo1RlRBSU40eDZnSVhPeTUwTzFrTUR1MG56UGFsXFxuVS9lQ1lDUDlmMDQ1VWorSmpKWHFtcTdFV1RQWHJwS2FvWkxDcGcvODZhbXhEZWpiS1lYMC9WZ29Ca3k3SXZrTlxcbm96cDdSZXFsQWdNQkFBRUNnZ0VBSUhpU3BwMERwT2l2bkg1a3YzbWwrR3NSS09WVVR6ME4vMlRnUnVVQXBxM29cXG40WXJ4T01VVXRpaHdtdXpoY0NVbllUZ1Brdi9XaExRRTFFWHFRdE5tOURNTlg3Nld3OGd5NXdrN0lqUEFRTWt4XFxuYTI5ZnBWMEZPa1NmbVFSbDNsUldRQjhuLzZOSURQYWZqQ2JUWEZMUVQ1RDE2QXJxOCtUSDRpa21qRHE1dXRNZVxcbnhBYkVCdDJ6NkhkU2V3RnFrNE9YM0JQV1F6M0hOMUh4UlpCTlkrM1FLbFdHYzkwZUNoMDV6a0xObURJOWd2MUdcXG5SM0ZNYU1tK1RvTGN2WjdtcjlkQjFNVkNweFdDSzdoNS96ZUNqbUMyRGdyNTFlOEJxb21pUmpoU2Y1ZXRBNUZ1XFxuUnh1ZWlOeGJJcUpvdUJmYm1BSGxsNTB5aG9UL2Zmc0t6VDRFN2RhMTRRS0JnUUR2aXRwT3hGeGJnU3EyNGRxNFxcbjhERUFmcVk4R3R6SGNONzZWYnJ3SXVtMjcvSzdXYXRWN2ZNaWlHK21jck45K1poTWJwZ1kvZVpaUzBOaGxrM0FcXG5mT2VXZVphRWN0L2RoWTZLa1IvdCtwMjNRRUVyUzlJQjFXdGtmMDgwZUJkS2FjVnJteWR1VG9JbXc5blpvemxGXFxuTlNiRlJETnd0MkdtU1Q5Q3NtVG9paC9Bb1FLQmdRQzdnbmVQeHduU2llNVRnUDZ5S1pGaENkRThTamw3WFJHK1xcbkhpejEremNlR3gvbVY4WEMrREpVd2VGakRzT0lBR1BHUEJTd1dEMDB0WFEwbzVpcFhxTXgwanVha0NMWnc2RzlcXG53NEwwa1hxVUVRZjFLTTNWUkJFaWVvRnRkTVlSL2RtcHc4aWxldnlLb0pzYTk3RnpQTWhhYUF4Y2craHduMi82XFxuTllJVWdMeDNoUUtCZ0dCMEk4VjFzYzZ5cXhWcXloeVBzdHVGSThDdC9GcGVhNXFYYktlSEYxNnZMYWtjeVMzWFxcbm00QTdPZUhtNjdsOUNFTTJnUTRISm5xc0lKeXAzZkwxR0hkeHpCYlcvcWQvUU04dzhvOXJ5NWZmU3A1NWNEMkdcXG54ekIzUnRoVXh1UVN4UWk0Tjk5bHcyaUNralRkVVpFNWZyd040enl1eXFZZmRsYVA2S3Z0K2kwaEFvR0FLcForXFxuVzF5RW9ab01WRkQzQ0RZaXU5eUQ5bUtSWGJDTXlCYUlkYklDR2NkbFhtYlBGdkpTVkNmWTdpdTdRMWQ3VWRueFxcbmhQLzFudFFidVp6eW5uMU5LWktyVVBhdHc3SUlPVlovbHRhMzlZdE11R1QxSXh3Ym5DNGcyV0J0WUVhOHVpOHFcXG5rbE0xcXJMQnA4VmNPMlV4eUQ3YmwrT3AxbktQOTA5UjVTQThMaFVDZ1lFQXVuQW1kZHJaNUNiRUliVGFPYnVjXFxua050Zi9zbVp0UGVUekEyTzFiTzkvYjNITlgycUJ1ZC8wVEs3NmVJWlRWV3FxZzdBbjlUQ1B0aTFmNUx3RHNSeVxcblFjV0JFdFdyRUdxcDJPUmFEK0YwZmxXMWh0UVA5R1YwZzhaZ2xJenVBU1I5cUNyQkpCL1RnaGQzZngxcE8yNm5cXG4xb3BmS3BqaGZpOXdCRjNnQmErVUtTcz1cXG4tLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tXFxuXCIsXG4gICAgfSksXG4gICAgZGF0YWJhc2VVUkw6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZJUkVCQVNFX0RBVEFCQVNFX1VSTCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRtaW5cbiJdLCJuYW1lcyI6WyJhZG1pbiIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiY3JlZGVudGlhbCIsImNlcnQiLCJkYXRhYmFzZVVSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9EQVRBQkFTRV9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/nodeApp.js\n");

/***/ }),

/***/ "./pages/profile/[username].js":
/*!*************************************!*\
  !*** ./pages/profile/[username].js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SSRPage),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fetchData_getProfileData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fetchData/getProfileData */ \"./fetchData/getProfileData.js\");\n\n\n\nfunction SSRPage({ data  }) {\n    const { username , profile  } = data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Next.js w/ Firebase Client-Side\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Build-Order-Tool-AoE4-\\\\public\\\\favorite_build_order\\\\pages\\\\profile\\\\[username].js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Build-Order-Tool-AoE4-\\\\public\\\\favorite_build_order\\\\pages\\\\profile\\\\[username].js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Build-Order-Tool-AoE4-\\\\public\\\\favorite_build_order\\\\pages\\\\profile\\\\[username].js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"title\",\n                        children: \"Next.js w/ Firebase Server-Side\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Build-Order-Tool-AoE4-\\\\public\\\\favorite_build_order\\\\pages\\\\profile\\\\[username].js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: username\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Build-Order-Tool-AoE4-\\\\public\\\\favorite_build_order\\\\pages\\\\profile\\\\[username].js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: profile.message\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Build-Order-Tool-AoE4-\\\\public\\\\favorite_build_order\\\\pages\\\\profile\\\\[username].js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Build-Order-Tool-AoE4-\\\\public\\\\favorite_build_order\\\\pages\\\\profile\\\\[username].js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Build-Order-Tool-AoE4-\\\\public\\\\favorite_build_order\\\\pages\\\\profile\\\\[username].js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n};\nconst getServerSideProps = async ({ params  })=>{\n    const { username  } = params;\n    const profile = await (0,_fetchData_getProfileData__WEBPACK_IMPORTED_MODULE_2__.getProfileData)(username);\n    if (!profile) {\n        return {\n            notFound: true\n        };\n    }\n    return {\n        props: {\n            data: {\n                username,\n                profile\n            }\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlL1t1c2VybmFtZV0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBRW1DO0FBRWhELFNBQVNFLE9BQU8sQ0FBQyxFQUFFQyxJQUFJLEdBQUUsRUFBRTtJQUN4QyxNQUFNLEVBQUVDLFFBQVEsR0FBRUMsT0FBTyxHQUFFLEdBQUdGLElBQUk7SUFFbEMscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFdBQVc7OzBCQUN4Qiw4REFBQ1Asa0RBQUk7O2tDQUNILDhEQUFDUSxPQUFLO2tDQUFDLGlDQUErQjs7Ozs7NEJBQVE7a0NBQzlDLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDOzBCQUVQLDhEQUFDQyxNQUFJOztrQ0FDSCw4REFBQ0MsSUFBRTt3QkFBQ04sU0FBUyxFQUFDLE9BQU87a0NBQUMsaUNBQStCOzs7Ozs0QkFBSztrQ0FDMUQsOERBQUNPLElBQUU7a0NBQUVWLFFBQVE7Ozs7OzRCQUFNO2tDQUNuQiw4REFBQ1csR0FBQztrQ0FBRVYsT0FBTyxDQUFDVyxPQUFPOzs7Ozs0QkFBSzs7Ozs7O29CQUNuQjs7Ozs7O1lBQ0gsQ0FDUDtDQUNGO0FBRU0sTUFBTUMsa0JBQWtCLEdBQUcsT0FBTyxFQUFFQyxNQUFNLEdBQUUsR0FBSztJQUN0RCxNQUFNLEVBQUVkLFFBQVEsR0FBRSxHQUFHYyxNQUFNO0lBQzNCLE1BQU1iLE9BQU8sR0FBRyxNQUFNSix5RUFBYyxDQUFDRyxRQUFRLENBQUM7SUFDOUMsSUFBSSxDQUFDQyxPQUFPLEVBQUU7UUFDWixPQUFPO1lBQUVjLFFBQVEsRUFBRSxJQUFJO1NBQUU7S0FDMUI7SUFDRCxPQUFPO1FBQUVDLEtBQUssRUFBRTtZQUFFakIsSUFBSSxFQUFFO2dCQUFFQyxRQUFRO2dCQUFFQyxPQUFPO2FBQUU7U0FBRTtLQUFFO0NBQ2xEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZmlsZS9bdXNlcm5hbWVdLmpzPzRhMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5pbXBvcnQgeyBnZXRQcm9maWxlRGF0YSB9IGZyb20gJy4uLy4uL2ZldGNoRGF0YS9nZXRQcm9maWxlRGF0YSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU1NSUGFnZSh7IGRhdGEgfSkge1xuICBjb25zdCB7IHVzZXJuYW1lLCBwcm9maWxlIH0gPSBkYXRhXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OZXh0LmpzIHcvIEZpcmViYXNlIENsaWVudC1TaWRlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+TmV4dC5qcyB3LyBGaXJlYmFzZSBTZXJ2ZXItU2lkZTwvaDE+XG4gICAgICAgIDxoMj57dXNlcm5hbWV9PC9oMj5cbiAgICAgICAgPHA+e3Byb2ZpbGUubWVzc2FnZX08L3A+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHBhcmFtc1xuICBjb25zdCBwcm9maWxlID0gYXdhaXQgZ2V0UHJvZmlsZURhdGEodXNlcm5hbWUpXG4gIGlmICghcHJvZmlsZSkge1xuICAgIHJldHVybiB7IG5vdEZvdW5kOiB0cnVlIH1cbiAgfVxuICByZXR1cm4geyBwcm9wczogeyBkYXRhOiB7IHVzZXJuYW1lLCBwcm9maWxlIH0gfSB9XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsImdldFByb2ZpbGVEYXRhIiwiU1NSUGFnZSIsImRhdGEiLCJ1c2VybmFtZSIsInByb2ZpbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwiaDIiLCJwIiwibWVzc2FnZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsIm5vdEZvdW5kIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/profile/[username].js\n");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/profile/[username].js"));
module.exports = __webpack_exports__;

})();