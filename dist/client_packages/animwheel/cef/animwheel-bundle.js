/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/animwheel-ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/rage-rpc/dist/rage-rpc.min.js":
/*!*******************************************************************************!*\
  !*** C:/Projects/ragemp-animwheel/node_modules/rage-rpc/dist/rage-rpc.min.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}("undefined"!=typeof self?self:this,(function(){return function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=1)}([function(e,r,n){"use strict";var t;function o(e,r){const n="client"===s();if(e&&"object"==typeof e&&void 0!==e.id){const o=(r,t,o)=>n?e.type===r&&t.at(e.id)===e:e instanceof o;switch(r){case t.Blip:return o("blip",mp.blips,mp.Blip);case t.Checkpoint:return o("checkpoint",mp.checkpoints,mp.Checkpoint);case t.Colshape:return o("colshape",mp.colshapes,mp.Colshape);case t.Label:return o("textlabel",mp.labels,mp.TextLabel);case t.Marker:return o("marker",mp.markers,mp.Marker);case t.Object:return o("object",mp.objects,mp.Object);case t.Pickup:return o("pickup",mp.pickups,mp.Pickup);case t.Player:return o("player",mp.players,mp.Player);case t.Vehicle:return o("vehicle",mp.vehicles,mp.Vehicle)}}return!1}function c(){const e=46656*Math.random()|0,r=46656*Math.random()|0;return("000"+e.toString(36)).slice(-3)+("000"+r.toString(36)).slice(-3)}function s(){return mp.joaat?"server":mp.game&&mp.game.joaat?"client":mp.trigger?"cef":void 0}function i(e){const r=s();return JSON.stringify(e,(e,n)=>{if("client"===r||"server"===r&&n&&"object"==typeof n){let e;if(o(n,t.Blip)?e=t.Blip:o(n,t.Checkpoint)?e=t.Checkpoint:o(n,t.Colshape)?e=t.Colshape:o(n,t.Marker)?e=t.Marker:o(n,t.Object)?e=t.Object:o(n,t.Pickup)?e=t.Pickup:o(n,t.Player)?e=t.Player:o(n,t.Vehicle)&&(e=t.Vehicle),e)return{__t:e,i:"number"==typeof n.remoteId?n.remoteId:n.id}}return n})}function a(e){const r=s();return JSON.parse(e,(e,n)=>{if(("client"===r||"server"===r)&&n&&"object"==typeof n&&"string"==typeof n.__t&&"number"==typeof n.i&&2===Object.keys(n).length){const e=n.i;let o;switch(n.__t){case t.Blip:o=mp.blips;break;case t.Checkpoint:o=mp.checkpoints;break;case t.Colshape:o=mp.colshapes;break;case t.Label:o=mp.labels;break;case t.Marker:o=mp.markers;break;case t.Object:o=mp.objects;break;case t.Pickup:o=mp.pickups;break;case t.Player:o=mp.players;break;case t.Vehicle:o=mp.vehicles}if(o)return o["client"===r?"atRemoteId":"at"](e)}return n})}function l(e){return new Promise(r=>setTimeout(()=>r(e),0))}function u(e){return new Promise((r,n)=>setTimeout(()=>n(e),0))}function p(e,r){return"number"==typeof r?Promise.race([new Promise((e,n)=>{setTimeout(()=>n("TIMEOUT"),r)}),e]):e}function f(e){try{e.url}catch(e){return!1}return!0}n.d(r,"h",(function(){return c})),n.d(r,"a",(function(){return s})),n.d(r,"g",(function(){return i})),n.d(r,"c",(function(){return a})),n.d(r,"e",(function(){return l})),n.d(r,"d",(function(){return u})),n.d(r,"f",(function(){return p})),n.d(r,"b",(function(){return f})),function(e){e.Blip="b",e.Checkpoint="cp",e.Colshape="c",e.Label="l",e.Marker="m",e.Object="o",e.Pickup="p",e.Player="pl",e.Vehicle="v"}(t||(t={}))},function(e,r,n){"use strict";n.r(r),function(e){n.d(r,"register",(function(){return d})),n.d(r,"unregister",(function(){return h})),n.d(r,"call",(function(){return w})),n.d(r,"callServer",(function(){return v})),n.d(r,"callClient",(function(){return y})),n.d(r,"callBrowsers",(function(){return B})),n.d(r,"callBrowser",(function(){return x})),n.d(r,"on",(function(){return j})),n.d(r,"off",(function(){return O})),n.d(r,"trigger",(function(){return C})),n.d(r,"triggerClient",(function(){return S})),n.d(r,"triggerServer",(function(){return E})),n.d(r,"triggerBrowsers",(function(){return L})),n.d(r,"triggerBrowser",(function(){return M}));var t=n(0);const o=t.a();if(!o)throw"Unknown RAGE environment";const c="PROCEDURE_NOT_FOUND",s="__rpc:id",i="__rpc:process",a="__rpc:browserRegister",l="__rpc:browserUnregister",u="__rpc:triggerEvent",p="__rpc:triggerEventBrowsers",f="cef"===o?window:e;if(!f[i]){if(f.__rpcListeners={},f.__rpcPending={},f.__rpcEvListeners={},f[i]=(e,r)=>{"server"!==o&&(r=e);const n=t.c(r);if(n.req){const r={id:n.id,environment:n.fenv||n.env};"server"===o&&(r.player=e);const c={ret:1,id:n.id,env:o};let s;switch(o){case"server":s=e=>r.player.call(i,[t.g(e)]);break;case"client":if("server"===n.env)s=e=>mp.events.callRemote(i,t.g(e));else if("cef"===n.env){const e=n.b&&f.__rpcBrowsers[n.b];r.browser=e,s=r=>e&&t.b(e)&&g(e,r,!0)}break;case"cef":s=e=>mp.trigger(i,t.g(e))}if(s){const e=m(n.name,n.args,r);n.noRet||e.then(e=>s({...c,res:e})).catch(e=>s({...c,err:e}))}}else if(n.ret){const r=f.__rpcPending[n.id];if("server"===o&&r.player!==e)return;r&&(r.resolve(n.err?t.d(n.err):t.e(n.res)),delete f.__rpcPending[n.id])}},"cef"!==o){if(mp.events.add(i,f[i]),"client"===o){d("__rpc:callServer",([e,r,n],t)=>_(e,r,{fenv:t.environment,noRet:n})),d("__rpc:callBrowsers",([e,r,n],t)=>P(null,e,r,{fenv:t.environment,noRet:n})),f.__rpcBrowsers={};const e=e=>{const r=t.h();Object.keys(f.__rpcBrowsers).forEach(r=>{const n=f.__rpcBrowsers[r];n&&t.b(n)&&n!==e||delete f.__rpcBrowsers[r]}),f.__rpcBrowsers[r]=e,e.execute(`\n                    window.name = '${r}';\n                    if(typeof window['${s}'] === 'undefined'){\n                        window['${s}'] = Promise.resolve(window.name);\n                    }else{\n                        window['${s}:resolve'](window.name);\n                    }\n                `)};mp.browsers.forEach(e),mp.events.add("browserCreated",e),f.__rpcBrowserProcedures={},mp.events.add(a,e=>{const[r,n]=JSON.parse(e);f.__rpcBrowserProcedures[n]=r}),mp.events.add(l,e=>{const[r,n]=JSON.parse(e);f.__rpcBrowserProcedures[n]===r&&delete f.__rpcBrowserProcedures[n]}),d(p,([e,r],n)=>{Object.values(f.__rpcBrowsers).forEach(t=>{k(t,u,[e,r],{fenv:n.environment,noRet:1})})})}}else void 0===f[s]&&(f[s]=new Promise(e=>{window.name?e(window.name):f[s+":resolve"]=e}));d(u,([e,r],n)=>R(e,r,n))}function g(e,r,n){const o=t.g(r);e.execute(`var process = window["${i}"]; if(process){ process(${JSON.stringify(o)}); }else{ ${n?"":`mp.trigger("${i}", '{"ret":1,"id":"${r.id}","err":"${c}","env":"cef"}');`} }`)}function m(e,r,n){const o=f.__rpcListeners[e];return o?t.e(o(r,n)):t.d(c)}function d(e,r){if(2!==arguments.length)throw'register expects 2 arguments: "name" and "cb"';return"cef"===o&&f[s].then(r=>mp.trigger(a,JSON.stringify([r,e]))),f.__rpcListeners[e]=r,()=>h(e)}function h(e){if(1!==arguments.length)throw'unregister expects 1 argument: "name"';"cef"===o&&f[s].then(r=>mp.trigger(l,JSON.stringify([r,e]))),f.__rpcListeners[e]=void 0}function w(e,r,n={}){return arguments.length<1||arguments.length>3?t.d('call expects 1 to 3 arguments: "name", optional "args", and optional "options"'):t.f(m(e,r,{environment:o}),n.timeout)}function _(e,r,n={}){switch(o){case"server":return w(e,r);case"client":{const c=t.h();return new Promise(s=>{n.noRet||(f.__rpcPending[c]={resolve:s});const a={req:1,id:c,name:e,env:o,args:r,...n};mp.events.callRemote(i,t.g(a))})}case"cef":return y("__rpc:callServer",[e,r,+n.noRet])}}function v(e,r,n={}){if(arguments.length<1||arguments.length>3)return t.d('callServer expects 1 to 3 arguments: "name", optional "args", and optional "options"');let o={};return n.noRet&&(o.noRet=1),t.f(_(e,r,o),n.timeout)}function b(e,r,n,c={}){switch(o){case"client":return w(r,n);case"server":{const s=t.h();return new Promise(a=>{c.noRet||(f.__rpcPending[s]={resolve:a,player:e});const l={req:1,id:s,name:r,env:o,args:n,...c};e.call(i,[t.g(l)])})}case"cef":{const e=t.h();return f[s].then(s=>new Promise(a=>{c.noRet||(f.__rpcPending[e]={resolve:a});const l={b:s,req:1,id:e,name:r,env:o,args:n,...c};mp.trigger(i,t.g(l))}))}}}function y(e,r,n,c={}){switch(o){case"client":if(c=n||{},n=r,r=e,e=null,arguments.length<1||arguments.length>3||"string"!=typeof r)return t.d('callClient from the client expects 1 to 3 arguments: "name", optional "args", and optional "options"');break;case"server":if(arguments.length<2||arguments.length>4||"object"!=typeof e)return t.d('callClient from the server expects 2 to 4 arguments: "player", "name", optional "args", and optional "options"');break;case"cef":if(c=n||{},n=r,r=e,e=null,arguments.length<1||arguments.length>3||"string"!=typeof r)return t.d('callClient from the browser expects 1 to 3 arguments: "name", optional "args", and optional "options"')}let s={};return c.noRet&&(s.noRet=1),t.f(b(e,r,n,s),c.timeout)}function k(e,r,n,c={}){return new Promise(s=>{const i=t.h();c.noRet||(f.__rpcPending[i]={resolve:s}),g(e,{req:1,id:i,name:r,env:o,args:n,...c},!1)})}function P(e,r,n,s={}){switch(o){case"client":const o=f.__rpcBrowserProcedures[r];if(!o)return t.d(c);const i=f.__rpcBrowsers[o];return i&&t.b(i)?k(i,r,n,s):t.d(c);case"server":return b(e,"__rpc:callBrowsers",[r,n,+s.noRet],s);case"cef":return b(null,"__rpc:callBrowsers",[r,n,+s.noRet],s)}}function B(e,r,n,c={}){let s,i={};switch(o){case"client":case"cef":if(c=n||{},n=r,r=e,arguments.length<1||arguments.length>3)return t.d('callBrowsers from the client or browser expects 1 to 3 arguments: "name", optional "args", and optional "options"');c.noRet&&(i.noRet=1),s=P(null,r,n,i);break;case"server":if(arguments.length<2||arguments.length>4)return t.d('callBrowsers from the server expects 2 to 4 arguments: "player", "name", optional "args", and optional "options"');c.noRet&&(i.noRet=1),s=P(e,r,n,i)}if(s)return t.f(s,c.timeout)}function x(e,r,n,c={}){if("client"!==o)return t.d("callBrowser can only be used in the client environment");if(arguments.length<2||arguments.length>4)return t.d('callBrowser expects 2 to 4 arguments: "browser", "name", optional "args", and optional "options"');let s={};return c.noRet&&(s.noRet=1),t.f(k(e,r,n,s),c.timeout)}function R(e,r,n){const t=f.__rpcEvListeners[e];t&&t.forEach(e=>e(r,n))}function j(e,r){if(2!==arguments.length)throw'on expects 2 arguments: "name" and "cb"';const n=f.__rpcEvListeners[e]||new Set;return n.add(r),f.__rpcEvListeners[e]=n,()=>O(e,r)}function O(e,r){if(2!==arguments.length)throw'off expects 2 arguments: "name" and "cb"';const n=f.__rpcEvListeners[e];n&&n.delete(r)}function C(e,r){if(arguments.length<1||arguments.length>2)throw'trigger expects 1 or 2 arguments: "name", and optional "args"';R(e,r,{environment:o})}function S(e,r,n){switch(o){case"client":if(n=r,r=e,e=null,arguments.length<1||arguments.length>2||"string"!=typeof r)throw'triggerClient from the client expects 1 or 2 arguments: "name", and optional "args"';break;case"server":if(arguments.length<2||arguments.length>3||"object"!=typeof e)throw'triggerClient from the server expects 2 or 3 arguments: "player", "name", and optional "args"';break;case"cef":if(n=r,r=e,e=null,arguments.length<1||arguments.length>2||"string"!=typeof r)throw'triggerClient from the browser expects 1 or 2 arguments: "name", and optional "args"'}b(e,u,[r,n],{noRet:1})}function E(e,r){if(arguments.length<1||arguments.length>2)throw'triggerServer expects 1 or 2 arguments: "name", and optional "args"';_(u,[e,r],{noRet:1})}function L(e,r,n){switch(o){case"client":case"cef":if(n=r,r=e,e=null,arguments.length<1||arguments.length>2)throw'triggerBrowsers from the client or browser expects 1 or 2 arguments: "name", and optional "args"';break;case"server":if(arguments.length<2||arguments.length>3)throw'triggerBrowsers from the server expects 2 or 3 arguments: "player", "name", and optional "args"'}b(e,p,[r,n],{noRet:1})}function M(e,r,n){if("client"!==o)throw"callBrowser can only be used in the client environment";if(arguments.length<2||arguments.length>4)throw'callBrowser expects 2 or 3 arguments: "browser", "name", and optional "args"';k(e,u,[r,n],{noRet:1})}r.default={register:d,unregister:h,call:w,callServer:v,callClient:y,callBrowsers:B,callBrowser:x,on:j,off:O,trigger:C,triggerServer:E,triggerClient:S,triggerBrowsers:L,triggerBrowser:M}}.call(this,n(2))},function(e,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])}));

/***/ }),

/***/ "./js/animation-data-providers/rage-rpc-animation-data-provider.ts":
/*!*************************************************************************!*\
  !*** ./js/animation-data-providers/rage-rpc-animation-data-provider.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var rpc = __importStar(__webpack_require__(/*! rage-rpc */ "../../../node_modules/rage-rpc/dist/rage-rpc.min.js"));
var deferred_promise_1 = __importDefault(__webpack_require__(/*! ../utils/deferred-promise */ "./js/utils/deferred-promise.ts"));
var lite_event_1 = __importDefault(__webpack_require__(/*! ../utils/lite-event */ "./js/utils/lite-event.ts"));
var invalid_animation_name_exception_1 = __importDefault(__webpack_require__(/*! ../exceptions/invalid-animation-name.exception */ "./js/exceptions/invalid-animation-name.exception.ts"));
var RageRpcAnimationDataProvider = /** @class */ (function () {
    function RageRpcAnimationDataProvider() {
        var _this = this;
        this.onEscape = new lite_event_1.default();
        rpc.register('UpdateFavoriteAnimation_Success', function (slot) { _this.handleUpdateSuccess(slot); });
        rpc.register('UpdateFavoriteAnimation_Failed', function (animationActionName) { _this.handleUpdateFailed(animationActionName); });
        rpc.register('EscapeClicked', function () { _this.onEscape.trigger(); });
    }
    RageRpcAnimationDataProvider.prototype.getFavoriteAnimations = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, rpc.callClient('Animwheel_GetFavoriteAnimations')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RageRpcAnimationDataProvider.prototype.updateFavoriteAnimation = function (slotIndex, animationActionName) {
        this.updatePromise = new deferred_promise_1.default(function () {
            rpc.callClient('Animwheel_UpdateFavoriteAnimation', { slotIndex: slotIndex, animationActionName: animationActionName });
        });
        return this.updatePromise.underlyingPromise;
    };
    RageRpcAnimationDataProvider.prototype.playAnimation = function (animationActionName) {
        rpc.callClient('Animwheel_PlayAnimation', animationActionName);
    };
    RageRpcAnimationDataProvider.prototype.notifyEditorVisibility = function (isVisible) {
        rpc.callClient('setCefActive', isVisible);
    };
    Object.defineProperty(RageRpcAnimationDataProvider.prototype, "OnEscape", {
        get: function () { return this.onEscape.expose(); },
        enumerable: true,
        configurable: true
    });
    RageRpcAnimationDataProvider.prototype.handleUpdateSuccess = function (slot) {
        if (this.updatePromise) {
            this.updatePromise.resolve(slot);
        }
    };
    RageRpcAnimationDataProvider.prototype.handleUpdateFailed = function (animationActionName) {
        if (this.updatePromise) {
            this.updatePromise.reject(new invalid_animation_name_exception_1.default(animationActionName));
        }
    };
    return RageRpcAnimationDataProvider;
}());
exports.RageRpcAnimationDataProvider = RageRpcAnimationDataProvider;


/***/ }),

/***/ "./js/animwheel-ui.ts":
/*!****************************!*\
  !*** ./js/animwheel-ui.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var rage_rpc_animation_data_provider_1 = __webpack_require__(/*! ./animation-data-providers/rage-rpc-animation-data-provider */ "./js/animation-data-providers/rage-rpc-animation-data-provider.ts");
/* Consts */
var minimumWheelItems = 5;
var itemDiameter = 96;
/* Classes */
var WheelItem = /** @class */ (function () {
    function WheelItem(id, text, icon) {
        this.id = id;
        this.text = text;
        this.icon = icon;
    }
    WheelItem.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return WheelItem;
}());
var AnimationWheelItem = /** @class */ (function (_super) {
    __extends(AnimationWheelItem, _super);
    function AnimationWheelItem(favoriteAnimation) {
        var _this = _super.call(this, favoriteAnimation.slot, favoriteAnimation.animation, getIconForCategory(favoriteAnimation.category)) || this;
        _this.favoriteAnimation = favoriteAnimation;
        return _this;
    }
    return AnimationWheelItem;
}(WheelItem));
// A base class for the logic of wheels, responsible for deciding coordinates for each item
var Wheel = /** @class */ (function () {
    function Wheel(containerRadius) {
        this.containerRadius = containerRadius;
        // The radius of the wheel is smaller than its container because we need to leave some space for the items
        this.radius = containerRadius - (itemDiameter / 2);
        this.items = new Array();
    }
    // Calculate position on the wheel for a specific item
    Wheel.prototype.getPositionForItem = function (itemIndex, totalItemCount) {
        var itemCount = Math.max(minimumWheelItems, totalItemCount);
        var rotation = (Math.PI * 2) / itemCount;
        rotation *= itemIndex;
        rotation -= (Math.PI / 2);
        return [this.radius + this.radius * Math.cos(rotation), this.radius + this.radius * Math.sin(rotation)];
    };
    // Position on all items on the wheel based on their index
    Wheel.prototype.positionItems = function () {
        for (var i = 0; i < this.items.length; i++) {
            var _a = this.getPositionForItem(i, this.items.length), x = _a[0], y = _a[1];
            this.items[i].setPosition(x, y);
        }
    };
    Wheel.prototype.insertItems = function (dataItems, index) {
        var _a;
        var _this = this;
        if (index === void 0) { index = 0; }
        // Add the items at the specified index
        (_a = this.items).splice.apply(_a, __spreadArrays([index,
            0], dataItems.map(function (dataItem) { return _this.wheelItemFactory(dataItem); })));
        // Reposition all items on the wheel
        this.positionItems();
        // Return the WheelItem instances created earlier
        return this.items.slice(index, dataItems.length);
    };
    Wheel.prototype.addItems = function (dataItems) {
        /**
         * Adds data items to the "end" of the wheel (last index)
         *
         * @returns The wheel items that were created for the provided data items
         */
        return this.insertItems(dataItems, this.items.length);
    };
    Wheel.prototype.addItem = function (dataItem) {
        return this.addItems(new Array(dataItem))[0];
    };
    Wheel.prototype.replaceItem = function (existingItem, newDataItem) {
        var oldWheelItemIndex = this.items.indexOf(existingItem);
        var oldWheelItem = this.items[oldWheelItemIndex];
        var newWheelItem = this.wheelItemFactory(newDataItem);
        newWheelItem.setPosition(oldWheelItem.x, oldWheelItem.y);
        this.items.splice(oldWheelItemIndex, 1, newWheelItem);
        return [oldWheelItem, newWheelItem];
    };
    return Wheel;
}());
var AnimationWheel = /** @class */ (function (_super) {
    __extends(AnimationWheel, _super);
    function AnimationWheel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationWheel.prototype.wheelItemFactory = function (item) {
        return new AnimationWheelItem(item);
    };
    return AnimationWheel;
}(Wheel));
var Controller = /** @class */ (function () {
    function Controller(animationDataProvider) {
        this.animationDataProvider = animationDataProvider;
    }
    // When a wheel item is hovered, its name appears at the center of the wheel
    Controller.prototype.handleItemHover = function (item) {
        $('#current-wheelitem-name').text(item.text);
    };
    Controller.prototype.handleItemClicked = function (item) {
        var animWheelItem = item;
        this.animationDataProvider.playAnimation(animWheelItem.favoriteAnimation.animation);
    };
    Controller.prototype.handleItemEdit = function (item) {
        var _this = this;
        var animWheelItem = item;
        $('#apply-edit-button').unbind('click');
        $('#cancel-edit-button').unbind('click');
        // TODO: Move to editor component
        this.animationDataProvider.notifyEditorVisibility(true);
        $('#item-editor').show();
        $('#item-editor').css('display', 'flex');
        $('#edit-text').val(animWheelItem.favoriteAnimation.animation);
        $('#editor-current-animation-label').text(animWheelItem.favoriteAnimation.animation);
        $('#edit-text').focus();
        $('#editor-current-animation-label').val(animWheelItem.favoriteAnimation.animation);
        $('#apply-edit-button').unbind('click');
        $('#cancel-edit-button').unbind('click');
        $('#edit-text').unbind('keypress');
        $('#apply-edit-button').click(function () { _this.handleEditApply(animWheelItem); });
        $('#cancel-edit-button').click(function () { _this.handleEditCancel(); });
        // Allow hitting enter in the textbox to apply
        $('#edit-text').keypress(function (e) {
            var keyCode = e.keyCode || e.which;
            if (keyCode == 13) { // On ENTER
                _this.handleEditApply(animWheelItem);
            }
        });
        this.animationDataProvider.OnEscape.on(function () {
            _this.handleEditCancel();
        });
    };
    Controller.prototype.createWheelItemContainerFromTemplate = function (wheelItem) {
        var _this = this;
        var wheelItemTemplateContainer = $("<div data-id=\"" + wheelItem.id + "\">");
        // @ts-ignore  loadTemplate isn't recognized, but it'll be imported by the HTML file
        wheelItemTemplateContainer.loadTemplate($('#wheelitem-template'), wheelItem);
        // Position the item on the wheel
        wheelItemTemplateContainer.css('position', 'absolute');
        wheelItemTemplateContainer.css('left', wheelItem.x + "px");
        wheelItemTemplateContainer.css('top', wheelItem.y + "px");
        wheelItemTemplateContainer.css('width', itemDiameter + "px");
        wheelItemTemplateContainer.css('height', itemDiameter + "px");
        // Register events for interaction with the item
        wheelItemTemplateContainer.mouseenter(function () { _this.handleItemHover(wheelItem); });
        wheelItemTemplateContainer.find('.wheelitem-circle-container').click(function () { _this.handleItemClicked(wheelItem); });
        wheelItemTemplateContainer.find('.wheelitem-edit-button').click(function () { _this.handleItemEdit(wheelItem); });
        return wheelItemTemplateContainer;
    };
    Controller.prototype.replaceExistingWheelItem = function (existingWheelItem, newWheelItem) {
        var wheelContainer = $('#wheel-container');
        // Remove existing item
        $("div[data-id=\"" + existingWheelItem.id + "\"]").remove();
        // Create the new one in its place
        var newContainer = this.createWheelItemContainerFromTemplate(newWheelItem);
        newContainer.appendTo(wheelContainer);
    };
    Controller.prototype.createWheel = function (items) {
        var _this = this;
        var wheelContainer = $('#wheel-container');
        // Calculate the container's diameter
        var idealContainerDiameter = (items.length / 2) * (itemDiameter + 16);
        var containerDiameter = Math.max(idealContainerDiameter, wheelContainer.height());
        // Place the wheel in the center of the window
        wheelContainer.css({
            left: ($(window).width() - containerDiameter) / 2,
            top: ($(window).height() - containerDiameter) / 2,
            width: containerDiameter,
            height: containerDiameter
        });
        // Vertically center the text label that displays the current item's text
        $('.current-wheelitem').css('top', containerDiameter / 2 + "px");
        var wheel = new AnimationWheel(wheelContainer.width() / 2);
        wheel.addItems(items).forEach(function (wheelItem) {
            // Create a DIV element to present the wheel item
            var wheelItemContainer = _this.createWheelItemContainerFromTemplate(wheelItem);
            // Add the item to the page
            wheelItemContainer.appendTo(wheelContainer);
        });
        return wheel;
    };
    Controller.prototype.setupWheel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var favoriteAnimations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.animationDataProvider.getFavoriteAnimations()];
                    case 1:
                        favoriteAnimations = _a.sent();
                        // Sort them by the slot index
                        favoriteAnimations = favoriteAnimations.sort(function (favoriteAnimation) { return favoriteAnimation.slot; });
                        this.wheel = this.createWheel(favoriteAnimations);
                        return [2 /*return*/];
                }
            });
        });
    };
    Controller.prototype.handleEditApply = function (animWheelItem) {
        var _this = this;
        var newAnimationActionName = $('#edit-text').val();
        $('#loading-spinner').css('visibility', 'visible');
        this.animationDataProvider.updateFavoriteAnimation(animWheelItem.favoriteAnimation.slot, newAnimationActionName).then(function (newAnimationSlot) {
            var replacement = _this.wheel.replaceItem(animWheelItem, newAnimationSlot);
            _this.replaceExistingWheelItem(replacement[0], replacement[1]);
            $('#editor-error-message').css('visibility', 'hidden');
            $('#edit-text').val("");
            $('#item-editor').hide();
            $('#loading-spinner').css('visibility', 'hidden');
            _this.animationDataProvider.notifyEditorVisibility(false);
        }).catch(function (reason) {
            console.log(reason);
            $('#editor-error-message').css('visibility', 'visible');
            $('#loading-spinner').css('visibility', 'hidden');
        });
    };
    Controller.prototype.handleEditCancel = function () {
        $('#editor-error-message').css('visibility', 'hidden');
        $('#edit-text').val("");
        $('#item-editor').hide();
        this.animationDataProvider.notifyEditorVisibility(false);
    };
    return Controller;
}());
var controller = new Controller(new rage_rpc_animation_data_provider_1.RageRpcAnimationDataProvider());
controller.setupWheel();
function getIconForCategory(category) {
    // Convert some category names to others
    switch (category.toLowerCase()) {
        // ground is basically the same as laying
        case "ground": {
            category = "laying";
            break;
        }
        // items category only features smoking
        case "items": {
            category = "smoking";
            break;
        }
        // gestures category is basically the same as expressions
        case "gestures": {
            category = "expressions";
            break;
        }
    }
    return "assets/img/categories/" + category.toLowerCase() + ".svg";
}


/***/ }),

/***/ "./js/exceptions/invalid-animation-name.exception.ts":
/*!***********************************************************!*\
  !*** ./js/exceptions/invalid-animation-name.exception.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var InvalidAnimationNameError = /** @class */ (function (_super) {
    __extends(InvalidAnimationNameError, _super);
    function InvalidAnimationNameError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InvalidAnimationNameError;
}(Error));
exports.default = InvalidAnimationNameError;


/***/ }),

/***/ "./js/utils/deferred-promise.ts":
/*!**************************************!*\
  !*** ./js/utils/deferred-promise.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DeferredPromise = /** @class */ (function () {
    function DeferredPromise(executor) {
        var _this = this;
        this.underlyingPromise = new Promise(function (resolve, reject) {
            _this.reject = reject;
            _this.resolve = resolve;
            executor();
        });
    }
    return DeferredPromise;
}());
exports.default = DeferredPromise;


/***/ }),

/***/ "./js/utils/lite-event.ts":
/*!********************************!*\
  !*** ./js/utils/lite-event.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LiteEvent = /** @class */ (function () {
    function LiteEvent() {
        this.handlers = [];
    }
    LiteEvent.prototype.on = function (handler) {
        this.handlers.push(handler);
    };
    LiteEvent.prototype.off = function (handler) {
        this.handlers = this.handlers.filter(function (h) { return h !== handler; });
    };
    LiteEvent.prototype.trigger = function (data) {
        this.handlers.slice(0).forEach(function (h) { return h(data); });
    };
    LiteEvent.prototype.expose = function () {
        return this;
    };
    return LiteEvent;
}());
exports.default = LiteEvent;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1Byb2plY3RzL3JhZ2VtcC1hbmltd2hlZWwvbm9kZV9tb2R1bGVzL3JhZ2UtcnBjL2Rpc3QvcmFnZS1ycGMubWluLmpzIiwid2VicGFjazovLy8uL2pzL2FuaW1hdGlvbi1kYXRhLXByb3ZpZGVycy9yYWdlLXJwYy1hbmltYXRpb24tZGF0YS1wcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9qcy9hbmltd2hlZWwtdWkudHMiLCJ3ZWJwYWNrOi8vLy4vanMvZXhjZXB0aW9ucy9pbnZhbGlkLWFuaW1hdGlvbi1uYW1lLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9qcy91dGlscy9kZWZlcnJlZC1wcm9taXNlLnRzIiwid2VicGFjazovLy8uL2pzL3V0aWxzL2xpdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQWlHLENBQUMsZ0RBQWdELG1CQUFtQixTQUFTLGNBQWMsNEJBQTRCLFlBQVkscUJBQXFCLDJEQUEyRCx1Q0FBdUMscUNBQXFDLG9CQUFvQixFQUFFLGlCQUFpQiw0RkFBNEYsZUFBZSx3Q0FBd0MsU0FBUyxFQUFFLG1CQUFtQiw4QkFBOEIscURBQXFELDBCQUEwQiw2Q0FBNkMsc0JBQXNCLDZEQUE2RCxZQUFZLGVBQWUsU0FBUyxpQkFBaUIsaUNBQWlDLGlCQUFpQixZQUFZLFVBQVUsc0JBQXNCLG1CQUFtQixpREFBaUQsaUJBQWlCLGtCQUFrQixhQUFhLE1BQU0sZ0JBQWdCLHVCQUF1Qix5Q0FBeUMsNkRBQTZELFVBQVUsOENBQThDLHNFQUFzRSw4REFBOEQsMERBQTBELHNEQUFzRCxzREFBc0Qsc0RBQXNELHNEQUFzRCwyREFBMkQsU0FBUyxhQUFhLHNEQUFzRCx3RUFBd0UsYUFBYSxpRkFBaUYsY0FBYyxZQUFZLGdDQUFnQyxzREFBc0QsTUFBTSxpT0FBaU8scURBQXFELFNBQVMsRUFBRSxjQUFjLFlBQVksNEJBQTRCLGlJQUFpSSxZQUFZLE1BQU0sY0FBYyx1QkFBdUIsTUFBTSxtQ0FBbUMsTUFBTSwrQkFBK0IsTUFBTSx5QkFBeUIsTUFBTSwyQkFBMkIsTUFBTSwyQkFBMkIsTUFBTSwyQkFBMkIsTUFBTSwyQkFBMkIsTUFBTSw2QkFBNkIsaURBQWlELFNBQVMsRUFBRSxjQUFjLDhDQUE4QyxjQUFjLGtEQUFrRCxnQkFBZ0IsMkRBQTJELCtCQUErQixRQUFRLGNBQWMsSUFBSSxNQUFNLFNBQVMsU0FBUyxTQUFTLHNCQUFzQixTQUFTLHlCQUF5QixTQUFTLHlCQUF5QixTQUFTLHlCQUF5QixTQUFTLHlCQUF5QixTQUFTLHlCQUF5QixTQUFTLHlCQUF5QixTQUFTLHlCQUF5QixTQUFTLGVBQWUsMkhBQTJILFNBQVMsR0FBRyxpQkFBaUIsYUFBYSxtQkFBbUIsNkJBQTZCLFNBQVMsa0NBQWtDLFNBQVMsNEJBQTRCLFNBQVMsa0NBQWtDLFNBQVMsa0NBQWtDLFNBQVMsb0NBQW9DLFNBQVMsbUNBQW1DLFNBQVMsMEJBQTBCLFNBQVMsMkJBQTJCLFNBQVMsK0JBQStCLFNBQVMscUNBQXFDLFNBQVMscUNBQXFDLFNBQVMsdUNBQXVDLFNBQVMsc0NBQXNDLFNBQVMsR0FBRyxXQUFXLGNBQWMsc0NBQXNDLDhMQUE4TCxVQUFVLHNCQUFzQixrQkFBa0Isc0JBQXNCLGNBQWMsb0JBQW9CLGVBQWUsVUFBVSxTQUFTLG1DQUFtQywyQkFBMkIsU0FBUyxxQkFBcUIsTUFBTSxVQUFVLDRDQUE0QyxNQUFNLHFFQUFxRSx1QkFBdUIsa0NBQWtDLHNDQUFzQyxNQUFNLG9DQUFvQyxNQUFNLDJCQUEyQixzQkFBc0IsV0FBVyxlQUFlLFdBQVcsSUFBSSxlQUFlLDZCQUE2QixxQ0FBcUMseUVBQXlFLFlBQVksdUNBQXVDLHlDQUF5QywyQkFBMkIsbURBQW1ELDJCQUEyQixzQkFBc0IsWUFBWSxjQUFjLHlDQUF5QywyQkFBMkIsNENBQTRDLHlFQUF5RSxFQUFFLEVBQUUsMENBQTBDLEVBQUUsb0JBQW9CLG9DQUFvQyxFQUFFLGtDQUFrQyx1QkFBdUIsS0FBSyxvQ0FBb0MsRUFBRSx3QkFBd0IsdUJBQXVCLHNCQUFzQixvRkFBb0YscUJBQXFCLHlCQUF5Qiw4QkFBOEIsc0JBQXNCLHlCQUF5QixvRUFBb0Usa0JBQWtCLDJDQUEyQyxhQUFhLDJCQUEyQixFQUFFLEVBQUUsR0FBRywwQ0FBMEMsNkNBQTZDLEdBQUcseUJBQXlCLGtCQUFrQixlQUFlLG1DQUFtQyxFQUFFLEdBQUcsYUFBYSxXQUFXLGtCQUFrQixFQUFFLEVBQUUsS0FBSyxHQUFHLG9CQUFvQixFQUFFLEtBQUssZ0JBQWdCLEtBQUssV0FBVyxFQUFFLGNBQWMsR0FBRyxFQUFFLEVBQUUsR0FBRyxrQkFBa0IsNEJBQTRCLDRCQUE0QixnQkFBZ0IsNkVBQTZFLGtHQUFrRyxjQUFjLHFFQUFxRSx3RkFBd0YsbUJBQW1CLEVBQUUsK0lBQStJLGNBQWMsYUFBYSxtQkFBbUIsRUFBRSxVQUFVLDJCQUEyQixjQUFjLGNBQWMsdUJBQXVCLDZCQUE2QixVQUFVLEVBQUUsU0FBUyxxQ0FBcUMsK0JBQStCLEVBQUUsdURBQXVELG1CQUFtQixFQUFFLDZJQUE2SSxTQUFTLG9EQUFvRCxxQkFBcUIsRUFBRSxVQUFVLDJCQUEyQixjQUFjLGNBQWMsdUJBQXVCLDZCQUE2QixtQkFBbUIsRUFBRSxTQUFTLHFDQUFxQyxtQkFBbUIsRUFBRSxXQUFXLGNBQWMsb0NBQW9DLDZCQUE2QixVQUFVLEVBQUUsU0FBUyx5Q0FBeUMscUJBQXFCLEtBQUsscUJBQXFCLEVBQUUsVUFBVSx1QkFBdUIsOExBQThMLE1BQU0sd01BQXdNLE1BQU0sb0JBQW9CLCtMQUErTCxTQUFTLHNEQUFzRCxxQkFBcUIsRUFBRSx1QkFBdUIsY0FBYyw2QkFBNkIsVUFBVSxPQUFPLG9DQUFvQyxLQUFLLEVBQUUscUJBQXFCLEVBQUUsVUFBVSxpREFBaUQsb0JBQW9CLDJCQUEyQixtQ0FBbUMsK0RBQStELGdFQUFnRSxxQkFBcUIsRUFBRSxXQUFXLFVBQVUsaUNBQWlDLGdMQUFnTCxxQ0FBcUMsTUFBTSxzTEFBc0wsa0NBQWtDLDZCQUE2QixxQkFBcUIsRUFBRSxxRkFBcUYseUpBQXlKLFNBQVMsc0RBQXNELGtCQUFrQiw4QkFBOEIsd0JBQXdCLGdCQUFnQix1RUFBdUUsdUNBQXVDLG1EQUFtRCxnQkFBZ0Isd0VBQXdFLDhCQUE4QixlQUFlLGdCQUFnQiwrR0FBK0csT0FBTyxjQUFjLEVBQUUsa0JBQWtCLFVBQVUscUxBQXFMLE1BQU0sZ0xBQWdMLE1BQU0sbUxBQW1MLGFBQWEsUUFBUSxFQUFFLGdCQUFnQixxSEFBcUgsV0FBVyxRQUFRLEVBQUUsa0JBQWtCLFVBQVUsd0xBQXdMLE1BQU0sOEpBQThKLGFBQWEsUUFBUSxFQUFFLGtCQUFrQiw4RUFBOEUsOEhBQThILGFBQWEsUUFBUSxFQUFFLFdBQVcsK0tBQStLLGlCQUFpQixlQUFlLE1BQU0sYUFBYSxZQUFZLEdBQUcsSUFBSSxtQ0FBbUMsU0FBUyxvQ0FBb0MsWUFBWSxHQUFHLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0VqNlksbUhBQWdDO0FBQ2hDLGlJQUF3RDtBQUN4RCwrR0FBNEM7QUFDNUMsMkxBQXVGO0FBR3ZGO0lBSUk7UUFBQSxpQkFJQztRQU5nQixhQUFRLEdBQUcsSUFBSSxvQkFBUyxFQUFRLENBQUM7UUFHOUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQ0FBaUMsRUFBRSxjQUFJLElBQU0sS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLEdBQUcsQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLEVBQUUsNkJBQW1CLElBQU0sS0FBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6SCxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRSxjQUFRLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUssNERBQXFCLEdBQTNCOzs7OzRCQUNXLHFCQUFNLEdBQUcsQ0FBQyxVQUFVLENBQWtCLGlDQUFpQyxDQUFDOzRCQUEvRSxzQkFBTyxTQUF3RSxFQUFDOzs7O0tBQ25GO0lBRUQsOERBQXVCLEdBQXZCLFVBQXdCLFNBQWlCLEVBQUUsbUJBQTJCO1FBQ2xFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSwwQkFBZSxDQUFDO1lBQ3JDLEdBQUcsQ0FBQyxVQUFVLENBQUMsbUNBQW1DLEVBQUUsRUFBRSxTQUFTLGFBQUUsbUJBQW1CLHVCQUFFLENBQUMsQ0FBQztRQUM1RixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUNoRCxDQUFDO0lBRUQsb0RBQWEsR0FBYixVQUFjLG1CQUEyQjtRQUNyQyxHQUFHLENBQUMsVUFBVSxDQUFDLHlCQUF5QixFQUFFLG1CQUFtQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELDZEQUFzQixHQUF0QixVQUF1QixTQUFrQjtRQUNyQyxHQUFHLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsc0JBQVcsa0RBQVE7YUFBbkIsY0FBd0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQzs7O09BQUE7SUFFaEQsMERBQW1CLEdBQTNCLFVBQTRCLElBQW1CO1FBQzNDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNwQztJQUNMLENBQUM7SUFFTyx5REFBa0IsR0FBMUIsVUFBMkIsbUJBQW1CO1FBQzFDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLDBDQUF5QixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztTQUNqRjtJQUNMLENBQUM7SUFDTCxtQ0FBQztBQUFELENBQUM7QUEzQ1ksb0VBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1J6QyxxTUFBMkc7QUFLM0csWUFBWTtBQUNaLElBQU0saUJBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQzVCLElBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUV4QixhQUFhO0FBQ2I7SUFJSSxtQkFBbUIsRUFBTyxFQUFTLElBQVksRUFBUyxJQUFZO1FBQWpELE9BQUUsR0FBRixFQUFFLENBQUs7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNwRSxDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLENBQVMsRUFBRSxDQUFTO1FBQzVCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBaUMsc0NBQVM7SUFDdEMsNEJBQW1CLGlCQUFnQztRQUFuRCxZQUNJLGtCQUFNLGlCQUFpQixDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsU0FDN0c7UUFGa0IsdUJBQWlCLEdBQWpCLGlCQUFpQixDQUFlOztJQUVuRCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLENBSmdDLFNBQVMsR0FJekM7QUFFRCwyRkFBMkY7QUFDM0Y7SUFJSSxlQUFvQixlQUF1QjtRQUF2QixvQkFBZSxHQUFmLGVBQWUsQ0FBUTtRQUN2QywwR0FBMEc7UUFDMUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFlLEdBQUcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxzREFBc0Q7SUFDOUMsa0NBQWtCLEdBQTFCLFVBQTJCLFNBQWlCLEVBQUUsY0FBc0I7UUFDaEUsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUU5RCxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ3pDLFFBQVEsSUFBSSxTQUFTLENBQUM7UUFDdEIsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUUxQixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUM1RyxDQUFDO0lBRUQsMERBQTBEO0lBQ2xELDZCQUFhLEdBQXJCO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLHNEQUFzRCxFQUFyRCxTQUFDLEVBQUUsU0FBa0QsQ0FBQztZQUM3RCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDbkM7SUFDTCxDQUFDO0lBSUQsMkJBQVcsR0FBWCxVQUFZLFNBQWdCLEVBQUUsS0FBUzs7UUFBdkMsaUJBY0M7UUFkNkIsaUNBQVM7UUFDbkMsdUNBQXVDO1FBQ3ZDLFVBQUksQ0FBQyxLQUFLLEVBQUMsTUFBTSwyQkFDYixLQUFLO1lBQ0wsQ0FBQyxHQUVFLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQVEsSUFBSSxZQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEVBQS9CLENBQStCLENBQUMsR0FDL0Q7UUFFRixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRXJCLGlEQUFpRDtRQUNqRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHdCQUFRLEdBQVIsVUFBUyxTQUFnQjtRQUNyQjs7OztXQUlHO1FBQ0gsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCx1QkFBTyxHQUFQLFVBQVEsUUFBYTtRQUNqQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsMkJBQVcsR0FBWCxVQUFZLFlBQXVCLEVBQUUsV0FBZ0I7UUFDakQsSUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzRCxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDbkQsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hELFlBQVksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXRELE9BQU8sQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBNkIsa0NBQUs7SUFBbEM7O0lBSUEsQ0FBQztJQUhHLHlDQUFnQixHQUFoQixVQUFpQixJQUFTO1FBQ3RCLE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxJQUFxQixDQUFDLENBQUM7SUFDekQsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxDQUo0QixLQUFLLEdBSWpDO0FBRUQ7SUFHSSxvQkFBb0IscUJBQTZDO1FBQTdDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBd0I7SUFDakUsQ0FBQztJQUVELDRFQUE0RTtJQUNwRSxvQ0FBZSxHQUF2QixVQUF3QixJQUFlO1FBQ25DLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVPLHNDQUFpQixHQUF6QixVQUEwQixJQUFlO1FBQ3JDLElBQU0sYUFBYSxHQUFHLElBQTBCLENBQUM7UUFDakQsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVPLG1DQUFjLEdBQXRCLFVBQXVCLElBQWU7UUFBdEMsaUJBaUNDO1FBaENHLElBQU0sYUFBYSxHQUFHLElBQTBCLENBQUM7UUFFakQsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV6QyxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JGLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXBGLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN4QyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUVuQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBUSxLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUUsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsS0FBSyxDQUFDLGNBQVEsS0FBSSxDQUFDLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuRSw4Q0FBOEM7UUFDOUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxXQUFDO1lBQ3RCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNuQyxJQUFJLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxXQUFXO2dCQUM1QixLQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQ3ZDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUNuQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyx5REFBb0MsR0FBNUMsVUFBNkMsU0FBb0I7UUFBakUsaUJBbUJDO1FBbEJHLElBQU0sMEJBQTBCLEdBQUcsQ0FBQyxDQUFDLG9CQUFpQixTQUFTLENBQUMsRUFBRSxRQUFJLENBQUMsQ0FBQztRQUV4RSxvRkFBb0Y7UUFDcEYsMEJBQTBCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBRTdFLGlDQUFpQztRQUNqQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELDBCQUEwQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUssU0FBUyxDQUFDLENBQUMsT0FBSSxDQUFDLENBQUM7UUFDM0QsMEJBQTBCLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBSyxTQUFTLENBQUMsQ0FBQyxPQUFJLENBQUMsQ0FBQztRQUMxRCwwQkFBMEIsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFLLFlBQVksT0FBSSxDQUFDLENBQUM7UUFDN0QsMEJBQTBCLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBSyxZQUFZLE9BQUksQ0FBQyxDQUFDO1FBRTlELGdEQUFnRDtRQUNoRCwwQkFBMEIsQ0FBQyxVQUFVLENBQUMsY0FBUSxLQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLDBCQUEwQixDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFRLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUNsSCwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxLQUFLLENBQUMsY0FBUSxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFHLE9BQU8sMEJBQTBCLENBQUM7SUFDdEMsQ0FBQztJQUVPLDZDQUF3QixHQUFoQyxVQUFpQyxpQkFBNEIsRUFBRSxZQUF1QjtRQUNsRixJQUFNLGNBQWMsR0FBRyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU3Qyx1QkFBdUI7UUFDdkIsQ0FBQyxDQUFDLG1CQUFnQixpQkFBaUIsQ0FBQyxFQUFFLFFBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRXJELGtDQUFrQztRQUNsQyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsb0NBQW9DLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0UsWUFBWSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sZ0NBQVcsR0FBbkIsVUFBb0IsS0FBWTtRQUFoQyxpQkE0QkM7UUEzQkcsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFN0MscUNBQXFDO1FBQ3JDLElBQU0sc0JBQXNCLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbkYsOENBQThDO1FBQzlDLGNBQWMsQ0FBQyxHQUFHLENBQUM7WUFDZixJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDO1lBQ2pELEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUM7WUFDakQsS0FBSyxFQUFFLGlCQUFpQjtZQUN4QixNQUFNLEVBQUUsaUJBQWlCO1NBQzVCLENBQUMsQ0FBQztRQUVILHlFQUF5RTtRQUN6RSxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFLLGlCQUFpQixHQUFHLENBQUMsT0FBSSxDQUFDLENBQUM7UUFFakUsSUFBTSxLQUFLLEdBQUcsSUFBSSxjQUFjLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdELEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLG1CQUFTO1lBQ25DLGlEQUFpRDtZQUNqRCxJQUFNLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUVoRiwyQkFBMkI7WUFDM0Isa0JBQWtCLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVLLCtCQUFVLEdBQWhCOzs7Ozs0QkFFNkIscUJBQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixFQUFFOzt3QkFBN0Usa0JBQWtCLEdBQUcsU0FBd0Q7d0JBRWpGLDhCQUE4Qjt3QkFDOUIsa0JBQWtCLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDJCQUFpQixJQUFJLHdCQUFpQixDQUFDLElBQUksRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO3dCQUUxRixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQzs7Ozs7S0FDckQ7SUFFTyxvQ0FBZSxHQUF2QixVQUF3QixhQUFpQztRQUF6RCxpQkFxQkM7UUFwQkcsSUFBTSxzQkFBc0IsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxFQUFZLENBQUM7UUFDL0QsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMscUJBQXFCLENBQUMsdUJBQXVCLENBQzlDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQ3BDLHNCQUFzQixDQUN6QixDQUFDLElBQUksQ0FBQywwQkFBZ0I7WUFDbkIsSUFBSSxXQUFXLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLHdCQUF3QixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUU5RCxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbEQsS0FBSSxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBTTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLHFDQUFnQixHQUF4QjtRQUNJLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbkQsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDTCxpQkFBQztBQUFELENBQUM7QUFFRCxJQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLCtEQUE0QixFQUFFLENBQUMsQ0FBQztBQUN0RSxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7QUFFeEIsU0FBUyxrQkFBa0IsQ0FBQyxRQUFnQjtJQUN4Qyx3Q0FBd0M7SUFDeEMsUUFBUSxRQUFRLENBQUMsV0FBVyxFQUFFLEVBQUU7UUFDNUIseUNBQXlDO1FBQ3pDLEtBQUssUUFBUSxDQUFDLENBQUM7WUFDWCxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3BCLE1BQU07U0FDVDtRQUNELHVDQUF1QztRQUN2QyxLQUFLLE9BQU8sQ0FBQyxDQUFDO1lBQ1YsUUFBUSxHQUFHLFNBQVMsQ0FBQztZQUNyQixNQUFNO1NBQ1Q7UUFDRCx5REFBeUQ7UUFDekQsS0FBSyxVQUFVLENBQUMsQ0FBQztZQUNiLFFBQVEsR0FBRyxhQUFhLENBQUM7WUFDekIsTUFBTTtTQUNUO0tBQ0o7SUFFRCxPQUFPLDJCQUF5QixRQUFRLENBQUMsV0FBVyxFQUFFLFNBQU0sQ0FBQztBQUNqRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1JEO0lBQXVELDZDQUFLO0lBQTVEOztJQUNBLENBQUM7SUFBRCxnQ0FBQztBQUFELENBQUMsQ0FEc0QsS0FBSyxHQUMzRDs7Ozs7Ozs7Ozs7Ozs7OztBQ0REO0lBS0kseUJBQVksUUFBUTtRQUFwQixpQkFPQztRQU5HLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLE9BQU8sQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3BELEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTTtZQUNwQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU87WUFFdEIsUUFBUSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUM7SUFDTixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7SUFBQTtRQUNZLGFBQVEsR0FBNEIsRUFBRSxDQUFDO0lBaUJuRCxDQUFDO0lBZlUsc0JBQUUsR0FBVCxVQUFVLE9BQTZCO1FBQ25DLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFTSx1QkFBRyxHQUFWLFVBQVcsT0FBNkI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFDLElBQUksUUFBQyxLQUFLLE9BQU8sRUFBYixDQUFhLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sMkJBQU8sR0FBZCxVQUFlLElBQVE7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQUMsSUFBSSxRQUFDLENBQUMsSUFBSSxDQUFDLEVBQVAsQ0FBTyxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVNLDBCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDIiwiZmlsZSI6ImFuaW13aGVlbC1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2FuaW13aGVlbC11aS50c1wiKTtcbiIsIiFmdW5jdGlvbihlLHIpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXIoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHIpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHM9cigpOmUucnBjPXIoKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHNlbGY/c2VsZjp0aGlzLChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgcj17fTtmdW5jdGlvbiBuKHQpe2lmKHJbdF0pcmV0dXJuIHJbdF0uZXhwb3J0czt2YXIgbz1yW3RdPXtpOnQsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVt0XS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9cixuLmQ9ZnVuY3Rpb24oZSxyLHQpe24ubyhlLHIpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLHtlbnVtZXJhYmxlOiEwLGdldDp0fSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSxyKXtpZigxJnImJihlPW4oZSkpLDgmcilyZXR1cm4gZTtpZig0JnImJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHQ9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIodCksT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImciYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpbi5kKHQsbyxmdW5jdGlvbihyKXtyZXR1cm4gZVtyXX0uYmluZChudWxsLG8pKTtyZXR1cm4gdH0sbi5uPWZ1bmN0aW9uKGUpe3ZhciByPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQocixcImFcIixyKSxyfSxuLm89ZnVuY3Rpb24oZSxyKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUscil9LG4ucD1cIlwiLG4obi5zPTEpfShbZnVuY3Rpb24oZSxyLG4pe1widXNlIHN0cmljdFwiO3ZhciB0O2Z1bmN0aW9uIG8oZSxyKXtjb25zdCBuPVwiY2xpZW50XCI9PT1zKCk7aWYoZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJnZvaWQgMCE9PWUuaWQpe2NvbnN0IG89KHIsdCxvKT0+bj9lLnR5cGU9PT1yJiZ0LmF0KGUuaWQpPT09ZTplIGluc3RhbmNlb2Ygbztzd2l0Y2gocil7Y2FzZSB0LkJsaXA6cmV0dXJuIG8oXCJibGlwXCIsbXAuYmxpcHMsbXAuQmxpcCk7Y2FzZSB0LkNoZWNrcG9pbnQ6cmV0dXJuIG8oXCJjaGVja3BvaW50XCIsbXAuY2hlY2twb2ludHMsbXAuQ2hlY2twb2ludCk7Y2FzZSB0LkNvbHNoYXBlOnJldHVybiBvKFwiY29sc2hhcGVcIixtcC5jb2xzaGFwZXMsbXAuQ29sc2hhcGUpO2Nhc2UgdC5MYWJlbDpyZXR1cm4gbyhcInRleHRsYWJlbFwiLG1wLmxhYmVscyxtcC5UZXh0TGFiZWwpO2Nhc2UgdC5NYXJrZXI6cmV0dXJuIG8oXCJtYXJrZXJcIixtcC5tYXJrZXJzLG1wLk1hcmtlcik7Y2FzZSB0Lk9iamVjdDpyZXR1cm4gbyhcIm9iamVjdFwiLG1wLm9iamVjdHMsbXAuT2JqZWN0KTtjYXNlIHQuUGlja3VwOnJldHVybiBvKFwicGlja3VwXCIsbXAucGlja3VwcyxtcC5QaWNrdXApO2Nhc2UgdC5QbGF5ZXI6cmV0dXJuIG8oXCJwbGF5ZXJcIixtcC5wbGF5ZXJzLG1wLlBsYXllcik7Y2FzZSB0LlZlaGljbGU6cmV0dXJuIG8oXCJ2ZWhpY2xlXCIsbXAudmVoaWNsZXMsbXAuVmVoaWNsZSl9fXJldHVybiExfWZ1bmN0aW9uIGMoKXtjb25zdCBlPTQ2NjU2Kk1hdGgucmFuZG9tKCl8MCxyPTQ2NjU2Kk1hdGgucmFuZG9tKCl8MDtyZXR1cm4oXCIwMDBcIitlLnRvU3RyaW5nKDM2KSkuc2xpY2UoLTMpKyhcIjAwMFwiK3IudG9TdHJpbmcoMzYpKS5zbGljZSgtMyl9ZnVuY3Rpb24gcygpe3JldHVybiBtcC5qb2FhdD9cInNlcnZlclwiOm1wLmdhbWUmJm1wLmdhbWUuam9hYXQ/XCJjbGllbnRcIjptcC50cmlnZ2VyP1wiY2VmXCI6dm9pZCAwfWZ1bmN0aW9uIGkoZSl7Y29uc3Qgcj1zKCk7cmV0dXJuIEpTT04uc3RyaW5naWZ5KGUsKGUsbik9PntpZihcImNsaWVudFwiPT09cnx8XCJzZXJ2ZXJcIj09PXImJm4mJlwib2JqZWN0XCI9PXR5cGVvZiBuKXtsZXQgZTtpZihvKG4sdC5CbGlwKT9lPXQuQmxpcDpvKG4sdC5DaGVja3BvaW50KT9lPXQuQ2hlY2twb2ludDpvKG4sdC5Db2xzaGFwZSk/ZT10LkNvbHNoYXBlOm8obix0Lk1hcmtlcik/ZT10Lk1hcmtlcjpvKG4sdC5PYmplY3QpP2U9dC5PYmplY3Q6byhuLHQuUGlja3VwKT9lPXQuUGlja3VwOm8obix0LlBsYXllcik/ZT10LlBsYXllcjpvKG4sdC5WZWhpY2xlKSYmKGU9dC5WZWhpY2xlKSxlKXJldHVybntfX3Q6ZSxpOlwibnVtYmVyXCI9PXR5cGVvZiBuLnJlbW90ZUlkP24ucmVtb3RlSWQ6bi5pZH19cmV0dXJuIG59KX1mdW5jdGlvbiBhKGUpe2NvbnN0IHI9cygpO3JldHVybiBKU09OLnBhcnNlKGUsKGUsbik9PntpZigoXCJjbGllbnRcIj09PXJ8fFwic2VydmVyXCI9PT1yKSYmbiYmXCJvYmplY3RcIj09dHlwZW9mIG4mJlwic3RyaW5nXCI9PXR5cGVvZiBuLl9fdCYmXCJudW1iZXJcIj09dHlwZW9mIG4uaSYmMj09PU9iamVjdC5rZXlzKG4pLmxlbmd0aCl7Y29uc3QgZT1uLmk7bGV0IG87c3dpdGNoKG4uX190KXtjYXNlIHQuQmxpcDpvPW1wLmJsaXBzO2JyZWFrO2Nhc2UgdC5DaGVja3BvaW50Om89bXAuY2hlY2twb2ludHM7YnJlYWs7Y2FzZSB0LkNvbHNoYXBlOm89bXAuY29sc2hhcGVzO2JyZWFrO2Nhc2UgdC5MYWJlbDpvPW1wLmxhYmVsczticmVhaztjYXNlIHQuTWFya2VyOm89bXAubWFya2VyczticmVhaztjYXNlIHQuT2JqZWN0Om89bXAub2JqZWN0czticmVhaztjYXNlIHQuUGlja3VwOm89bXAucGlja3VwczticmVhaztjYXNlIHQuUGxheWVyOm89bXAucGxheWVyczticmVhaztjYXNlIHQuVmVoaWNsZTpvPW1wLnZlaGljbGVzfWlmKG8pcmV0dXJuIG9bXCJjbGllbnRcIj09PXI/XCJhdFJlbW90ZUlkXCI6XCJhdFwiXShlKX1yZXR1cm4gbn0pfWZ1bmN0aW9uIGwoZSl7cmV0dXJuIG5ldyBQcm9taXNlKHI9PnNldFRpbWVvdXQoKCk9PnIoZSksMCkpfWZ1bmN0aW9uIHUoZSl7cmV0dXJuIG5ldyBQcm9taXNlKChyLG4pPT5zZXRUaW1lb3V0KCgpPT5uKGUpLDApKX1mdW5jdGlvbiBwKGUscil7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIHI/UHJvbWlzZS5yYWNlKFtuZXcgUHJvbWlzZSgoZSxuKT0+e3NldFRpbWVvdXQoKCk9Pm4oXCJUSU1FT1VUXCIpLHIpfSksZV0pOmV9ZnVuY3Rpb24gZihlKXt0cnl7ZS51cmx9Y2F0Y2goZSl7cmV0dXJuITF9cmV0dXJuITB9bi5kKHIsXCJoXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGN9KSksbi5kKHIsXCJhXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHN9KSksbi5kKHIsXCJnXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGl9KSksbi5kKHIsXCJjXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KSksbi5kKHIsXCJlXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGx9KSksbi5kKHIsXCJkXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHV9KSksbi5kKHIsXCJmXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHB9KSksbi5kKHIsXCJiXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ9KSksZnVuY3Rpb24oZSl7ZS5CbGlwPVwiYlwiLGUuQ2hlY2twb2ludD1cImNwXCIsZS5Db2xzaGFwZT1cImNcIixlLkxhYmVsPVwibFwiLGUuTWFya2VyPVwibVwiLGUuT2JqZWN0PVwib1wiLGUuUGlja3VwPVwicFwiLGUuUGxheWVyPVwicGxcIixlLlZlaGljbGU9XCJ2XCJ9KHR8fCh0PXt9KSl9LGZ1bmN0aW9uKGUscixuKXtcInVzZSBzdHJpY3RcIjtuLnIociksZnVuY3Rpb24oZSl7bi5kKHIsXCJyZWdpc3RlclwiLChmdW5jdGlvbigpe3JldHVybiBkfSkpLG4uZChyLFwidW5yZWdpc3RlclwiLChmdW5jdGlvbigpe3JldHVybiBofSkpLG4uZChyLFwiY2FsbFwiLChmdW5jdGlvbigpe3JldHVybiB3fSkpLG4uZChyLFwiY2FsbFNlcnZlclwiLChmdW5jdGlvbigpe3JldHVybiB2fSkpLG4uZChyLFwiY2FsbENsaWVudFwiLChmdW5jdGlvbigpe3JldHVybiB5fSkpLG4uZChyLFwiY2FsbEJyb3dzZXJzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEJ9KSksbi5kKHIsXCJjYWxsQnJvd3NlclwiLChmdW5jdGlvbigpe3JldHVybiB4fSkpLG4uZChyLFwib25cIiwoZnVuY3Rpb24oKXtyZXR1cm4gan0pKSxuLmQocixcIm9mZlwiLChmdW5jdGlvbigpe3JldHVybiBPfSkpLG4uZChyLFwidHJpZ2dlclwiLChmdW5jdGlvbigpe3JldHVybiBDfSkpLG4uZChyLFwidHJpZ2dlckNsaWVudFwiLChmdW5jdGlvbigpe3JldHVybiBTfSkpLG4uZChyLFwidHJpZ2dlclNlcnZlclwiLChmdW5jdGlvbigpe3JldHVybiBFfSkpLG4uZChyLFwidHJpZ2dlckJyb3dzZXJzXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEx9KSksbi5kKHIsXCJ0cmlnZ2VyQnJvd3NlclwiLChmdW5jdGlvbigpe3JldHVybiBNfSkpO3ZhciB0PW4oMCk7Y29uc3Qgbz10LmEoKTtpZighbyl0aHJvd1wiVW5rbm93biBSQUdFIGVudmlyb25tZW50XCI7Y29uc3QgYz1cIlBST0NFRFVSRV9OT1RfRk9VTkRcIixzPVwiX19ycGM6aWRcIixpPVwiX19ycGM6cHJvY2Vzc1wiLGE9XCJfX3JwYzpicm93c2VyUmVnaXN0ZXJcIixsPVwiX19ycGM6YnJvd3NlclVucmVnaXN0ZXJcIix1PVwiX19ycGM6dHJpZ2dlckV2ZW50XCIscD1cIl9fcnBjOnRyaWdnZXJFdmVudEJyb3dzZXJzXCIsZj1cImNlZlwiPT09bz93aW5kb3c6ZTtpZighZltpXSl7aWYoZi5fX3JwY0xpc3RlbmVycz17fSxmLl9fcnBjUGVuZGluZz17fSxmLl9fcnBjRXZMaXN0ZW5lcnM9e30sZltpXT0oZSxyKT0+e1wic2VydmVyXCIhPT1vJiYocj1lKTtjb25zdCBuPXQuYyhyKTtpZihuLnJlcSl7Y29uc3Qgcj17aWQ6bi5pZCxlbnZpcm9ubWVudDpuLmZlbnZ8fG4uZW52fTtcInNlcnZlclwiPT09byYmKHIucGxheWVyPWUpO2NvbnN0IGM9e3JldDoxLGlkOm4uaWQsZW52Om99O2xldCBzO3N3aXRjaChvKXtjYXNlXCJzZXJ2ZXJcIjpzPWU9PnIucGxheWVyLmNhbGwoaSxbdC5nKGUpXSk7YnJlYWs7Y2FzZVwiY2xpZW50XCI6aWYoXCJzZXJ2ZXJcIj09PW4uZW52KXM9ZT0+bXAuZXZlbnRzLmNhbGxSZW1vdGUoaSx0LmcoZSkpO2Vsc2UgaWYoXCJjZWZcIj09PW4uZW52KXtjb25zdCBlPW4uYiYmZi5fX3JwY0Jyb3dzZXJzW24uYl07ci5icm93c2VyPWUscz1yPT5lJiZ0LmIoZSkmJmcoZSxyLCEwKX1icmVhaztjYXNlXCJjZWZcIjpzPWU9Pm1wLnRyaWdnZXIoaSx0LmcoZSkpfWlmKHMpe2NvbnN0IGU9bShuLm5hbWUsbi5hcmdzLHIpO24ubm9SZXR8fGUudGhlbihlPT5zKHsuLi5jLHJlczplfSkpLmNhdGNoKGU9PnMoey4uLmMsZXJyOmV9KSl9fWVsc2UgaWYobi5yZXQpe2NvbnN0IHI9Zi5fX3JwY1BlbmRpbmdbbi5pZF07aWYoXCJzZXJ2ZXJcIj09PW8mJnIucGxheWVyIT09ZSlyZXR1cm47ciYmKHIucmVzb2x2ZShuLmVycj90LmQobi5lcnIpOnQuZShuLnJlcykpLGRlbGV0ZSBmLl9fcnBjUGVuZGluZ1tuLmlkXSl9fSxcImNlZlwiIT09byl7aWYobXAuZXZlbnRzLmFkZChpLGZbaV0pLFwiY2xpZW50XCI9PT1vKXtkKFwiX19ycGM6Y2FsbFNlcnZlclwiLChbZSxyLG5dLHQpPT5fKGUscix7ZmVudjp0LmVudmlyb25tZW50LG5vUmV0Om59KSksZChcIl9fcnBjOmNhbGxCcm93c2Vyc1wiLChbZSxyLG5dLHQpPT5QKG51bGwsZSxyLHtmZW52OnQuZW52aXJvbm1lbnQsbm9SZXQ6bn0pKSxmLl9fcnBjQnJvd3NlcnM9e307Y29uc3QgZT1lPT57Y29uc3Qgcj10LmgoKTtPYmplY3Qua2V5cyhmLl9fcnBjQnJvd3NlcnMpLmZvckVhY2gocj0+e2NvbnN0IG49Zi5fX3JwY0Jyb3dzZXJzW3JdO24mJnQuYihuKSYmbiE9PWV8fGRlbGV0ZSBmLl9fcnBjQnJvd3NlcnNbcl19KSxmLl9fcnBjQnJvd3NlcnNbcl09ZSxlLmV4ZWN1dGUoYFxcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lm5hbWUgPSAnJHtyfSc7XFxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2Ygd2luZG93Wycke3N9J10gPT09ICd1bmRlZmluZWQnKXtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJyR7c30nXSA9IFByb21pc2UucmVzb2x2ZSh3aW5kb3cubmFtZSk7XFxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJyR7c306cmVzb2x2ZSddKHdpbmRvdy5uYW1lKTtcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgYCl9O21wLmJyb3dzZXJzLmZvckVhY2goZSksbXAuZXZlbnRzLmFkZChcImJyb3dzZXJDcmVhdGVkXCIsZSksZi5fX3JwY0Jyb3dzZXJQcm9jZWR1cmVzPXt9LG1wLmV2ZW50cy5hZGQoYSxlPT57Y29uc3RbcixuXT1KU09OLnBhcnNlKGUpO2YuX19ycGNCcm93c2VyUHJvY2VkdXJlc1tuXT1yfSksbXAuZXZlbnRzLmFkZChsLGU9Pntjb25zdFtyLG5dPUpTT04ucGFyc2UoZSk7Zi5fX3JwY0Jyb3dzZXJQcm9jZWR1cmVzW25dPT09ciYmZGVsZXRlIGYuX19ycGNCcm93c2VyUHJvY2VkdXJlc1tuXX0pLGQocCwoW2Uscl0sbik9PntPYmplY3QudmFsdWVzKGYuX19ycGNCcm93c2VycykuZm9yRWFjaCh0PT57ayh0LHUsW2Uscl0se2ZlbnY6bi5lbnZpcm9ubWVudCxub1JldDoxfSl9KX0pfX1lbHNlIHZvaWQgMD09PWZbc10mJihmW3NdPW5ldyBQcm9taXNlKGU9Pnt3aW5kb3cubmFtZT9lKHdpbmRvdy5uYW1lKTpmW3MrXCI6cmVzb2x2ZVwiXT1lfSkpO2QodSwoW2Uscl0sbik9PlIoZSxyLG4pKX1mdW5jdGlvbiBnKGUscixuKXtjb25zdCBvPXQuZyhyKTtlLmV4ZWN1dGUoYHZhciBwcm9jZXNzID0gd2luZG93W1wiJHtpfVwiXTsgaWYocHJvY2Vzcyl7IHByb2Nlc3MoJHtKU09OLnN0cmluZ2lmeShvKX0pOyB9ZWxzZXsgJHtuP1wiXCI6YG1wLnRyaWdnZXIoXCIke2l9XCIsICd7XCJyZXRcIjoxLFwiaWRcIjpcIiR7ci5pZH1cIixcImVyclwiOlwiJHtjfVwiLFwiZW52XCI6XCJjZWZcIn0nKTtgfSB9YCl9ZnVuY3Rpb24gbShlLHIsbil7Y29uc3Qgbz1mLl9fcnBjTGlzdGVuZXJzW2VdO3JldHVybiBvP3QuZShvKHIsbikpOnQuZChjKX1mdW5jdGlvbiBkKGUscil7aWYoMiE9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cncmVnaXN0ZXIgZXhwZWN0cyAyIGFyZ3VtZW50czogXCJuYW1lXCIgYW5kIFwiY2JcIic7cmV0dXJuXCJjZWZcIj09PW8mJmZbc10udGhlbihyPT5tcC50cmlnZ2VyKGEsSlNPTi5zdHJpbmdpZnkoW3IsZV0pKSksZi5fX3JwY0xpc3RlbmVyc1tlXT1yLCgpPT5oKGUpfWZ1bmN0aW9uIGgoZSl7aWYoMSE9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cndW5yZWdpc3RlciBleHBlY3RzIDEgYXJndW1lbnQ6IFwibmFtZVwiJztcImNlZlwiPT09byYmZltzXS50aGVuKHI9Pm1wLnRyaWdnZXIobCxKU09OLnN0cmluZ2lmeShbcixlXSkpKSxmLl9fcnBjTGlzdGVuZXJzW2VdPXZvaWQgMH1mdW5jdGlvbiB3KGUscixuPXt9KXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aDwxfHxhcmd1bWVudHMubGVuZ3RoPjM/dC5kKCdjYWxsIGV4cGVjdHMgMSB0byAzIGFyZ3VtZW50czogXCJuYW1lXCIsIG9wdGlvbmFsIFwiYXJnc1wiLCBhbmQgb3B0aW9uYWwgXCJvcHRpb25zXCInKTp0LmYobShlLHIse2Vudmlyb25tZW50Om99KSxuLnRpbWVvdXQpfWZ1bmN0aW9uIF8oZSxyLG49e30pe3N3aXRjaChvKXtjYXNlXCJzZXJ2ZXJcIjpyZXR1cm4gdyhlLHIpO2Nhc2VcImNsaWVudFwiOntjb25zdCBjPXQuaCgpO3JldHVybiBuZXcgUHJvbWlzZShzPT57bi5ub1JldHx8KGYuX19ycGNQZW5kaW5nW2NdPXtyZXNvbHZlOnN9KTtjb25zdCBhPXtyZXE6MSxpZDpjLG5hbWU6ZSxlbnY6byxhcmdzOnIsLi4ubn07bXAuZXZlbnRzLmNhbGxSZW1vdGUoaSx0LmcoYSkpfSl9Y2FzZVwiY2VmXCI6cmV0dXJuIHkoXCJfX3JwYzpjYWxsU2VydmVyXCIsW2Usciwrbi5ub1JldF0pfX1mdW5jdGlvbiB2KGUscixuPXt9KXtpZihhcmd1bWVudHMubGVuZ3RoPDF8fGFyZ3VtZW50cy5sZW5ndGg+MylyZXR1cm4gdC5kKCdjYWxsU2VydmVyIGV4cGVjdHMgMSB0byAzIGFyZ3VtZW50czogXCJuYW1lXCIsIG9wdGlvbmFsIFwiYXJnc1wiLCBhbmQgb3B0aW9uYWwgXCJvcHRpb25zXCInKTtsZXQgbz17fTtyZXR1cm4gbi5ub1JldCYmKG8ubm9SZXQ9MSksdC5mKF8oZSxyLG8pLG4udGltZW91dCl9ZnVuY3Rpb24gYihlLHIsbixjPXt9KXtzd2l0Y2gobyl7Y2FzZVwiY2xpZW50XCI6cmV0dXJuIHcocixuKTtjYXNlXCJzZXJ2ZXJcIjp7Y29uc3Qgcz10LmgoKTtyZXR1cm4gbmV3IFByb21pc2UoYT0+e2Mubm9SZXR8fChmLl9fcnBjUGVuZGluZ1tzXT17cmVzb2x2ZTphLHBsYXllcjplfSk7Y29uc3QgbD17cmVxOjEsaWQ6cyxuYW1lOnIsZW52Om8sYXJnczpuLC4uLmN9O2UuY2FsbChpLFt0LmcobCldKX0pfWNhc2VcImNlZlwiOntjb25zdCBlPXQuaCgpO3JldHVybiBmW3NdLnRoZW4ocz0+bmV3IFByb21pc2UoYT0+e2Mubm9SZXR8fChmLl9fcnBjUGVuZGluZ1tlXT17cmVzb2x2ZTphfSk7Y29uc3QgbD17YjpzLHJlcToxLGlkOmUsbmFtZTpyLGVudjpvLGFyZ3M6biwuLi5jfTttcC50cmlnZ2VyKGksdC5nKGwpKX0pKX19fWZ1bmN0aW9uIHkoZSxyLG4sYz17fSl7c3dpdGNoKG8pe2Nhc2VcImNsaWVudFwiOmlmKGM9bnx8e30sbj1yLHI9ZSxlPW51bGwsYXJndW1lbnRzLmxlbmd0aDwxfHxhcmd1bWVudHMubGVuZ3RoPjN8fFwic3RyaW5nXCIhPXR5cGVvZiByKXJldHVybiB0LmQoJ2NhbGxDbGllbnQgZnJvbSB0aGUgY2xpZW50IGV4cGVjdHMgMSB0byAzIGFyZ3VtZW50czogXCJuYW1lXCIsIG9wdGlvbmFsIFwiYXJnc1wiLCBhbmQgb3B0aW9uYWwgXCJvcHRpb25zXCInKTticmVhaztjYXNlXCJzZXJ2ZXJcIjppZihhcmd1bWVudHMubGVuZ3RoPDJ8fGFyZ3VtZW50cy5sZW5ndGg+NHx8XCJvYmplY3RcIiE9dHlwZW9mIGUpcmV0dXJuIHQuZCgnY2FsbENsaWVudCBmcm9tIHRoZSBzZXJ2ZXIgZXhwZWN0cyAyIHRvIDQgYXJndW1lbnRzOiBcInBsYXllclwiLCBcIm5hbWVcIiwgb3B0aW9uYWwgXCJhcmdzXCIsIGFuZCBvcHRpb25hbCBcIm9wdGlvbnNcIicpO2JyZWFrO2Nhc2VcImNlZlwiOmlmKGM9bnx8e30sbj1yLHI9ZSxlPW51bGwsYXJndW1lbnRzLmxlbmd0aDwxfHxhcmd1bWVudHMubGVuZ3RoPjN8fFwic3RyaW5nXCIhPXR5cGVvZiByKXJldHVybiB0LmQoJ2NhbGxDbGllbnQgZnJvbSB0aGUgYnJvd3NlciBleHBlY3RzIDEgdG8gMyBhcmd1bWVudHM6IFwibmFtZVwiLCBvcHRpb25hbCBcImFyZ3NcIiwgYW5kIG9wdGlvbmFsIFwib3B0aW9uc1wiJyl9bGV0IHM9e307cmV0dXJuIGMubm9SZXQmJihzLm5vUmV0PTEpLHQuZihiKGUscixuLHMpLGMudGltZW91dCl9ZnVuY3Rpb24gayhlLHIsbixjPXt9KXtyZXR1cm4gbmV3IFByb21pc2Uocz0+e2NvbnN0IGk9dC5oKCk7Yy5ub1JldHx8KGYuX19ycGNQZW5kaW5nW2ldPXtyZXNvbHZlOnN9KSxnKGUse3JlcToxLGlkOmksbmFtZTpyLGVudjpvLGFyZ3M6biwuLi5jfSwhMSl9KX1mdW5jdGlvbiBQKGUscixuLHM9e30pe3N3aXRjaChvKXtjYXNlXCJjbGllbnRcIjpjb25zdCBvPWYuX19ycGNCcm93c2VyUHJvY2VkdXJlc1tyXTtpZighbylyZXR1cm4gdC5kKGMpO2NvbnN0IGk9Zi5fX3JwY0Jyb3dzZXJzW29dO3JldHVybiBpJiZ0LmIoaSk/ayhpLHIsbixzKTp0LmQoYyk7Y2FzZVwic2VydmVyXCI6cmV0dXJuIGIoZSxcIl9fcnBjOmNhbGxCcm93c2Vyc1wiLFtyLG4sK3Mubm9SZXRdLHMpO2Nhc2VcImNlZlwiOnJldHVybiBiKG51bGwsXCJfX3JwYzpjYWxsQnJvd3NlcnNcIixbcixuLCtzLm5vUmV0XSxzKX19ZnVuY3Rpb24gQihlLHIsbixjPXt9KXtsZXQgcyxpPXt9O3N3aXRjaChvKXtjYXNlXCJjbGllbnRcIjpjYXNlXCJjZWZcIjppZihjPW58fHt9LG49cixyPWUsYXJndW1lbnRzLmxlbmd0aDwxfHxhcmd1bWVudHMubGVuZ3RoPjMpcmV0dXJuIHQuZCgnY2FsbEJyb3dzZXJzIGZyb20gdGhlIGNsaWVudCBvciBicm93c2VyIGV4cGVjdHMgMSB0byAzIGFyZ3VtZW50czogXCJuYW1lXCIsIG9wdGlvbmFsIFwiYXJnc1wiLCBhbmQgb3B0aW9uYWwgXCJvcHRpb25zXCInKTtjLm5vUmV0JiYoaS5ub1JldD0xKSxzPVAobnVsbCxyLG4saSk7YnJlYWs7Y2FzZVwic2VydmVyXCI6aWYoYXJndW1lbnRzLmxlbmd0aDwyfHxhcmd1bWVudHMubGVuZ3RoPjQpcmV0dXJuIHQuZCgnY2FsbEJyb3dzZXJzIGZyb20gdGhlIHNlcnZlciBleHBlY3RzIDIgdG8gNCBhcmd1bWVudHM6IFwicGxheWVyXCIsIFwibmFtZVwiLCBvcHRpb25hbCBcImFyZ3NcIiwgYW5kIG9wdGlvbmFsIFwib3B0aW9uc1wiJyk7Yy5ub1JldCYmKGkubm9SZXQ9MSkscz1QKGUscixuLGkpfWlmKHMpcmV0dXJuIHQuZihzLGMudGltZW91dCl9ZnVuY3Rpb24geChlLHIsbixjPXt9KXtpZihcImNsaWVudFwiIT09bylyZXR1cm4gdC5kKFwiY2FsbEJyb3dzZXIgY2FuIG9ubHkgYmUgdXNlZCBpbiB0aGUgY2xpZW50IGVudmlyb25tZW50XCIpO2lmKGFyZ3VtZW50cy5sZW5ndGg8Mnx8YXJndW1lbnRzLmxlbmd0aD40KXJldHVybiB0LmQoJ2NhbGxCcm93c2VyIGV4cGVjdHMgMiB0byA0IGFyZ3VtZW50czogXCJicm93c2VyXCIsIFwibmFtZVwiLCBvcHRpb25hbCBcImFyZ3NcIiwgYW5kIG9wdGlvbmFsIFwib3B0aW9uc1wiJyk7bGV0IHM9e307cmV0dXJuIGMubm9SZXQmJihzLm5vUmV0PTEpLHQuZihrKGUscixuLHMpLGMudGltZW91dCl9ZnVuY3Rpb24gUihlLHIsbil7Y29uc3QgdD1mLl9fcnBjRXZMaXN0ZW5lcnNbZV07dCYmdC5mb3JFYWNoKGU9PmUocixuKSl9ZnVuY3Rpb24gaihlLHIpe2lmKDIhPT1hcmd1bWVudHMubGVuZ3RoKXRocm93J29uIGV4cGVjdHMgMiBhcmd1bWVudHM6IFwibmFtZVwiIGFuZCBcImNiXCInO2NvbnN0IG49Zi5fX3JwY0V2TGlzdGVuZXJzW2VdfHxuZXcgU2V0O3JldHVybiBuLmFkZChyKSxmLl9fcnBjRXZMaXN0ZW5lcnNbZV09biwoKT0+TyhlLHIpfWZ1bmN0aW9uIE8oZSxyKXtpZigyIT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdydvZmYgZXhwZWN0cyAyIGFyZ3VtZW50czogXCJuYW1lXCIgYW5kIFwiY2JcIic7Y29uc3Qgbj1mLl9fcnBjRXZMaXN0ZW5lcnNbZV07biYmbi5kZWxldGUocil9ZnVuY3Rpb24gQyhlLHIpe2lmKGFyZ3VtZW50cy5sZW5ndGg8MXx8YXJndW1lbnRzLmxlbmd0aD4yKXRocm93J3RyaWdnZXIgZXhwZWN0cyAxIG9yIDIgYXJndW1lbnRzOiBcIm5hbWVcIiwgYW5kIG9wdGlvbmFsIFwiYXJnc1wiJztSKGUscix7ZW52aXJvbm1lbnQ6b30pfWZ1bmN0aW9uIFMoZSxyLG4pe3N3aXRjaChvKXtjYXNlXCJjbGllbnRcIjppZihuPXIscj1lLGU9bnVsbCxhcmd1bWVudHMubGVuZ3RoPDF8fGFyZ3VtZW50cy5sZW5ndGg+Mnx8XCJzdHJpbmdcIiE9dHlwZW9mIHIpdGhyb3cndHJpZ2dlckNsaWVudCBmcm9tIHRoZSBjbGllbnQgZXhwZWN0cyAxIG9yIDIgYXJndW1lbnRzOiBcIm5hbWVcIiwgYW5kIG9wdGlvbmFsIFwiYXJnc1wiJzticmVhaztjYXNlXCJzZXJ2ZXJcIjppZihhcmd1bWVudHMubGVuZ3RoPDJ8fGFyZ3VtZW50cy5sZW5ndGg+M3x8XCJvYmplY3RcIiE9dHlwZW9mIGUpdGhyb3cndHJpZ2dlckNsaWVudCBmcm9tIHRoZSBzZXJ2ZXIgZXhwZWN0cyAyIG9yIDMgYXJndW1lbnRzOiBcInBsYXllclwiLCBcIm5hbWVcIiwgYW5kIG9wdGlvbmFsIFwiYXJnc1wiJzticmVhaztjYXNlXCJjZWZcIjppZihuPXIscj1lLGU9bnVsbCxhcmd1bWVudHMubGVuZ3RoPDF8fGFyZ3VtZW50cy5sZW5ndGg+Mnx8XCJzdHJpbmdcIiE9dHlwZW9mIHIpdGhyb3cndHJpZ2dlckNsaWVudCBmcm9tIHRoZSBicm93c2VyIGV4cGVjdHMgMSBvciAyIGFyZ3VtZW50czogXCJuYW1lXCIsIGFuZCBvcHRpb25hbCBcImFyZ3NcIid9YihlLHUsW3Isbl0se25vUmV0OjF9KX1mdW5jdGlvbiBFKGUscil7aWYoYXJndW1lbnRzLmxlbmd0aDwxfHxhcmd1bWVudHMubGVuZ3RoPjIpdGhyb3cndHJpZ2dlclNlcnZlciBleHBlY3RzIDEgb3IgMiBhcmd1bWVudHM6IFwibmFtZVwiLCBhbmQgb3B0aW9uYWwgXCJhcmdzXCInO18odSxbZSxyXSx7bm9SZXQ6MX0pfWZ1bmN0aW9uIEwoZSxyLG4pe3N3aXRjaChvKXtjYXNlXCJjbGllbnRcIjpjYXNlXCJjZWZcIjppZihuPXIscj1lLGU9bnVsbCxhcmd1bWVudHMubGVuZ3RoPDF8fGFyZ3VtZW50cy5sZW5ndGg+Mil0aHJvdyd0cmlnZ2VyQnJvd3NlcnMgZnJvbSB0aGUgY2xpZW50IG9yIGJyb3dzZXIgZXhwZWN0cyAxIG9yIDIgYXJndW1lbnRzOiBcIm5hbWVcIiwgYW5kIG9wdGlvbmFsIFwiYXJnc1wiJzticmVhaztjYXNlXCJzZXJ2ZXJcIjppZihhcmd1bWVudHMubGVuZ3RoPDJ8fGFyZ3VtZW50cy5sZW5ndGg+Myl0aHJvdyd0cmlnZ2VyQnJvd3NlcnMgZnJvbSB0aGUgc2VydmVyIGV4cGVjdHMgMiBvciAzIGFyZ3VtZW50czogXCJwbGF5ZXJcIiwgXCJuYW1lXCIsIGFuZCBvcHRpb25hbCBcImFyZ3NcIid9YihlLHAsW3Isbl0se25vUmV0OjF9KX1mdW5jdGlvbiBNKGUscixuKXtpZihcImNsaWVudFwiIT09byl0aHJvd1wiY2FsbEJyb3dzZXIgY2FuIG9ubHkgYmUgdXNlZCBpbiB0aGUgY2xpZW50IGVudmlyb25tZW50XCI7aWYoYXJndW1lbnRzLmxlbmd0aDwyfHxhcmd1bWVudHMubGVuZ3RoPjQpdGhyb3cnY2FsbEJyb3dzZXIgZXhwZWN0cyAyIG9yIDMgYXJndW1lbnRzOiBcImJyb3dzZXJcIiwgXCJuYW1lXCIsIGFuZCBvcHRpb25hbCBcImFyZ3NcIic7ayhlLHUsW3Isbl0se25vUmV0OjF9KX1yLmRlZmF1bHQ9e3JlZ2lzdGVyOmQsdW5yZWdpc3RlcjpoLGNhbGw6dyxjYWxsU2VydmVyOnYsY2FsbENsaWVudDp5LGNhbGxCcm93c2VyczpCLGNhbGxCcm93c2VyOngsb246aixvZmY6Tyx0cmlnZ2VyOkMsdHJpZ2dlclNlcnZlcjpFLHRyaWdnZXJDbGllbnQ6Uyx0cmlnZ2VyQnJvd3NlcnM6TCx0cmlnZ2VyQnJvd3NlcjpNfX0uY2FsbCh0aGlzLG4oMikpfSxmdW5jdGlvbihlLHIpe3ZhciBuO249ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKTt0cnl7bj1ufHxuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpfWNhdGNoKGUpe1wib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJihuPXdpbmRvdyl9ZS5leHBvcnRzPW59XSl9KSk7IiwiaW1wb3J0IEFuaW13aGVlbFNsb3QgZnJvbSAnLi4vbW9kZWxzL2FuaW13aGVlbC1zbG90LnR5cGUnO1xyXG5pbXBvcnQgeyBJQW5pbWF0aW9uRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi9hbmltYXRpb24tZGF0YS1wcm92aWRlcic7XHJcbmltcG9ydCAqIGFzIHJwYyBmcm9tIFwicmFnZS1ycGNcIjtcclxuaW1wb3J0IERlZmVycmVkUHJvbWlzZSBmcm9tICcuLi91dGlscy9kZWZlcnJlZC1wcm9taXNlJztcclxuaW1wb3J0IExpdGVFdmVudCBmcm9tICcuLi91dGlscy9saXRlLWV2ZW50JztcclxuaW1wb3J0IEludmFsaWRBbmltYXRpb25OYW1lRXJyb3IgZnJvbSAnLi4vZXhjZXB0aW9ucy9pbnZhbGlkLWFuaW1hdGlvbi1uYW1lLmV4Y2VwdGlvbic7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJhZ2VScGNBbmltYXRpb25EYXRhUHJvdmlkZXIgaW1wbGVtZW50cyBJQW5pbWF0aW9uRGF0YVByb3ZpZGVyIHtcclxuICAgIHVwZGF0ZVByb21pc2U6IERlZmVycmVkUHJvbWlzZTxBbmltd2hlZWxTbG90PjtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgb25Fc2NhcGUgPSBuZXcgTGl0ZUV2ZW50PHZvaWQ+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgcnBjLnJlZ2lzdGVyKCdVcGRhdGVGYXZvcml0ZUFuaW1hdGlvbl9TdWNjZXNzJywgc2xvdCA9PiB7IHRoaXMuaGFuZGxlVXBkYXRlU3VjY2VzcyhzbG90KSB9KTtcclxuICAgICAgICBycGMucmVnaXN0ZXIoJ1VwZGF0ZUZhdm9yaXRlQW5pbWF0aW9uX0ZhaWxlZCcsIGFuaW1hdGlvbkFjdGlvbk5hbWUgPT4geyB0aGlzLmhhbmRsZVVwZGF0ZUZhaWxlZChhbmltYXRpb25BY3Rpb25OYW1lKTsgfSk7XHJcbiAgICAgICAgcnBjLnJlZ2lzdGVyKCdFc2NhcGVDbGlja2VkJywgKCkgPT4geyB0aGlzLm9uRXNjYXBlLnRyaWdnZXIoKTsgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0RmF2b3JpdGVBbmltYXRpb25zKCk6IFByb21pc2U8QW5pbXdoZWVsU2xvdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJwYy5jYWxsQ2xpZW50PEFuaW13aGVlbFNsb3RbXT4oJ0FuaW13aGVlbF9HZXRGYXZvcml0ZUFuaW1hdGlvbnMnKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVGYXZvcml0ZUFuaW1hdGlvbihzbG90SW5kZXg6IG51bWJlciwgYW5pbWF0aW9uQWN0aW9uTmFtZTogc3RyaW5nKTogUHJvbWlzZTxBbmltd2hlZWxTbG90PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQcm9taXNlID0gbmV3IERlZmVycmVkUHJvbWlzZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJwYy5jYWxsQ2xpZW50KCdBbmltd2hlZWxfVXBkYXRlRmF2b3JpdGVBbmltYXRpb24nLCB7IHNsb3RJbmRleCwgYW5pbWF0aW9uQWN0aW9uTmFtZSB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlUHJvbWlzZS51bmRlcmx5aW5nUHJvbWlzZTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5QW5pbWF0aW9uKGFuaW1hdGlvbkFjdGlvbk5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJwYy5jYWxsQ2xpZW50KCdBbmltd2hlZWxfUGxheUFuaW1hdGlvbicsIGFuaW1hdGlvbkFjdGlvbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeUVkaXRvclZpc2liaWxpdHkoaXNWaXNpYmxlOiBib29sZWFuKSB7XHJcbiAgICAgICAgcnBjLmNhbGxDbGllbnQoJ3NldENlZkFjdGl2ZScsIGlzVmlzaWJsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBPbkVzY2FwZSgpIHsgcmV0dXJuIHRoaXMub25Fc2NhcGUuZXhwb3NlKCk7IH0gXHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVVcGRhdGVTdWNjZXNzKHNsb3Q6IEFuaW13aGVlbFNsb3QpIHtcclxuICAgICAgICBpZiAodGhpcy51cGRhdGVQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvbWlzZS5yZXNvbHZlKHNsb3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVVwZGF0ZUZhaWxlZChhbmltYXRpb25BY3Rpb25OYW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlUHJvbWlzZSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb21pc2UucmVqZWN0KG5ldyBJbnZhbGlkQW5pbWF0aW9uTmFtZUVycm9yKGFuaW1hdGlvbkFjdGlvbk5hbWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmFnZVJwY0FuaW1hdGlvbkRhdGFQcm92aWRlciB9IGZyb20gJy4vYW5pbWF0aW9uLWRhdGEtcHJvdmlkZXJzL3JhZ2UtcnBjLWFuaW1hdGlvbi1kYXRhLXByb3ZpZGVyJztcclxuaW1wb3J0IHsgSUFuaW1hdGlvbkRhdGFQcm92aWRlciB9IGZyb20gJy4vYW5pbWF0aW9uLWRhdGEtcHJvdmlkZXJzL2FuaW1hdGlvbi1kYXRhLXByb3ZpZGVyJztcclxuaW1wb3J0IEFuaW13aGVlbFNsb3QgZnJvbSAnLi9tb2RlbHMvYW5pbXdoZWVsLXNsb3QudHlwZSc7XHJcblxyXG5cclxuLyogQ29uc3RzICovXHJcbmNvbnN0IG1pbmltdW1XaGVlbEl0ZW1zID0gNTtcclxuY29uc3QgaXRlbURpYW1ldGVyID0gOTY7XHJcblxyXG4vKiBDbGFzc2VzICovXHJcbmFic3RyYWN0IGNsYXNzIFdoZWVsSXRlbSB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaWQ6IGFueSwgcHVibGljIHRleHQ6IHN0cmluZywgcHVibGljIGljb246IHN0cmluZykge1xyXG4gICAgfVxyXG5cclxuICAgIHNldFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBbmltYXRpb25XaGVlbEl0ZW0gZXh0ZW5kcyBXaGVlbEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGZhdm9yaXRlQW5pbWF0aW9uOiBBbmltd2hlZWxTbG90KSB7XHJcbiAgICAgICAgc3VwZXIoZmF2b3JpdGVBbmltYXRpb24uc2xvdCwgZmF2b3JpdGVBbmltYXRpb24uYW5pbWF0aW9uLCBnZXRJY29uRm9yQ2F0ZWdvcnkoZmF2b3JpdGVBbmltYXRpb24uY2F0ZWdvcnkpKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gQSBiYXNlIGNsYXNzIGZvciB0aGUgbG9naWMgb2Ygd2hlZWxzLCByZXNwb25zaWJsZSBmb3IgZGVjaWRpbmcgY29vcmRpbmF0ZXMgZm9yIGVhY2ggaXRlbVxyXG5hYnN0cmFjdCBjbGFzcyBXaGVlbCB7XHJcbiAgICBwcml2YXRlIGl0ZW1zOiBXaGVlbEl0ZW1bXTtcclxuICAgIHByaXZhdGUgcmFkaXVzOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWluZXJSYWRpdXM6IG51bWJlcikge1xyXG4gICAgICAgIC8vIFRoZSByYWRpdXMgb2YgdGhlIHdoZWVsIGlzIHNtYWxsZXIgdGhhbiBpdHMgY29udGFpbmVyIGJlY2F1c2Ugd2UgbmVlZCB0byBsZWF2ZSBzb21lIHNwYWNlIGZvciB0aGUgaXRlbXNcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IGNvbnRhaW5lclJhZGl1cyAtIChpdGVtRGlhbWV0ZXIgLyAyKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBvbiB0aGUgd2hlZWwgZm9yIGEgc3BlY2lmaWMgaXRlbVxyXG4gICAgcHJpdmF0ZSBnZXRQb3NpdGlvbkZvckl0ZW0oaXRlbUluZGV4OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBpdGVtQ291bnQgPSBNYXRoLm1heChtaW5pbXVtV2hlZWxJdGVtcywgdG90YWxJdGVtQ291bnQpO1xyXG5cclxuICAgICAgICBsZXQgcm90YXRpb24gPSAoTWF0aC5QSSAqIDIpIC8gaXRlbUNvdW50O1xyXG4gICAgICAgIHJvdGF0aW9uICo9IGl0ZW1JbmRleDtcclxuICAgICAgICByb3RhdGlvbiAtPSAoTWF0aC5QSSAvIDIpO1xyXG5cclxuICAgICAgICByZXR1cm4gW3RoaXMucmFkaXVzICsgdGhpcy5yYWRpdXMgKiBNYXRoLmNvcyhyb3RhdGlvbiksIHRoaXMucmFkaXVzICsgdGhpcy5yYWRpdXMgKiBNYXRoLnNpbihyb3RhdGlvbildO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFBvc2l0aW9uIG9uIGFsbCBpdGVtcyBvbiB0aGUgd2hlZWwgYmFzZWQgb24gdGhlaXIgaW5kZXhcclxuICAgIHByaXZhdGUgcG9zaXRpb25JdGVtcygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5nZXRQb3NpdGlvbkZvckl0ZW0oaSwgdGhpcy5pdGVtcy5sZW5ndGgpO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2ldLnNldFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhYnN0cmFjdCB3aGVlbEl0ZW1GYWN0b3J5KGl0ZW0pOiBXaGVlbEl0ZW07XHJcblxyXG4gICAgaW5zZXJ0SXRlbXMoZGF0YUl0ZW1zOiBhbnlbXSwgaW5kZXggPSAwKTogV2hlZWxJdGVtW10ge1xyXG4gICAgICAgIC8vIEFkZCB0aGUgaXRlbXMgYXQgdGhlIHNwZWNpZmllZCBpbmRleFxyXG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKFxyXG4gICAgICAgICAgICBpbmRleCxcclxuICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIFdoZWVsSXRlbSBpbnN0YW5jZXMgZm9yIGVhY2ggZGF0YSBpdGVtIGFuZCBpbnNlcnQgdGhlbVxyXG4gICAgICAgICAgICAuLi5kYXRhSXRlbXMubWFwKGRhdGFJdGVtID0+IHRoaXMud2hlZWxJdGVtRmFjdG9yeShkYXRhSXRlbSkpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gUmVwb3NpdGlvbiBhbGwgaXRlbXMgb24gdGhlIHdoZWVsXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbkl0ZW1zKCk7XHJcblxyXG4gICAgICAgIC8vIFJldHVybiB0aGUgV2hlZWxJdGVtIGluc3RhbmNlcyBjcmVhdGVkIGVhcmxpZXJcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5zbGljZShpbmRleCwgZGF0YUl0ZW1zLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbXMoZGF0YUl0ZW1zOiBhbnlbXSk6IFdoZWVsSXRlbVtdIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBZGRzIGRhdGEgaXRlbXMgdG8gdGhlIFwiZW5kXCIgb2YgdGhlIHdoZWVsIChsYXN0IGluZGV4KVxyXG4gICAgICAgICAqXHJcbiAgICAgICAgICogQHJldHVybnMgVGhlIHdoZWVsIGl0ZW1zIHRoYXQgd2VyZSBjcmVhdGVkIGZvciB0aGUgcHJvdmlkZWQgZGF0YSBpdGVtc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEl0ZW1zKGRhdGFJdGVtcywgdGhpcy5pdGVtcy5sZW5ndGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEl0ZW0oZGF0YUl0ZW06IGFueSk6IFdoZWVsSXRlbSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkSXRlbXMobmV3IEFycmF5KGRhdGFJdGVtKSlbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcmVwbGFjZUl0ZW0oZXhpc3RpbmdJdGVtOiBXaGVlbEl0ZW0sIG5ld0RhdGFJdGVtOiBhbnkpOiBbV2hlZWxJdGVtLCBXaGVlbEl0ZW1dIHtcclxuICAgICAgICBjb25zdCBvbGRXaGVlbEl0ZW1JbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZihleGlzdGluZ0l0ZW0pO1xyXG4gICAgICAgIGNvbnN0IG9sZFdoZWVsSXRlbSA9IHRoaXMuaXRlbXNbb2xkV2hlZWxJdGVtSW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG5ld1doZWVsSXRlbSA9IHRoaXMud2hlZWxJdGVtRmFjdG9yeShuZXdEYXRhSXRlbSk7XHJcbiAgICAgICAgbmV3V2hlZWxJdGVtLnNldFBvc2l0aW9uKG9sZFdoZWVsSXRlbS54LCBvbGRXaGVlbEl0ZW0ueSk7XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbXMuc3BsaWNlKG9sZFdoZWVsSXRlbUluZGV4LCAxLCBuZXdXaGVlbEl0ZW0pO1xyXG5cclxuICAgICAgICByZXR1cm4gW29sZFdoZWVsSXRlbSwgbmV3V2hlZWxJdGVtXTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQW5pbWF0aW9uV2hlZWwgZXh0ZW5kcyBXaGVlbCB7XHJcbiAgICB3aGVlbEl0ZW1GYWN0b3J5KGl0ZW06IGFueSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uV2hlZWxJdGVtKGl0ZW0gYXMgQW5pbXdoZWVsU2xvdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG4gICAgd2hlZWw6IFdoZWVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5pbWF0aW9uRGF0YVByb3ZpZGVyOiBJQW5pbWF0aW9uRGF0YVByb3ZpZGVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gV2hlbiBhIHdoZWVsIGl0ZW0gaXMgaG92ZXJlZCwgaXRzIG5hbWUgYXBwZWFycyBhdCB0aGUgY2VudGVyIG9mIHRoZSB3aGVlbFxyXG4gICAgcHJpdmF0ZSBoYW5kbGVJdGVtSG92ZXIoaXRlbTogV2hlZWxJdGVtKSB7XHJcbiAgICAgICAgJCgnI2N1cnJlbnQtd2hlZWxpdGVtLW5hbWUnKS50ZXh0KGl0ZW0udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVJdGVtQ2xpY2tlZChpdGVtOiBXaGVlbEl0ZW0pIHtcclxuICAgICAgICBjb25zdCBhbmltV2hlZWxJdGVtID0gaXRlbSBhcyBBbmltYXRpb25XaGVlbEl0ZW07XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhUHJvdmlkZXIucGxheUFuaW1hdGlvbihhbmltV2hlZWxJdGVtLmZhdm9yaXRlQW5pbWF0aW9uLmFuaW1hdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVJdGVtRWRpdChpdGVtOiBXaGVlbEl0ZW0pIHtcclxuICAgICAgICBjb25zdCBhbmltV2hlZWxJdGVtID0gaXRlbSBhcyBBbmltYXRpb25XaGVlbEl0ZW07XHJcblxyXG4gICAgICAgICQoJyNhcHBseS1lZGl0LWJ1dHRvbicpLnVuYmluZCgnY2xpY2snKTtcclxuICAgICAgICAkKCcjY2FuY2VsLWVkaXQtYnV0dG9uJykudW5iaW5kKCdjbGljaycpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBNb3ZlIHRvIGVkaXRvciBjb21wb25lbnRcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGFQcm92aWRlci5ub3RpZnlFZGl0b3JWaXNpYmlsaXR5KHRydWUpO1xyXG4gICAgICAgICQoJyNpdGVtLWVkaXRvcicpLnNob3coKTtcclxuICAgICAgICAkKCcjaXRlbS1lZGl0b3InKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xyXG4gICAgICAgICQoJyNlZGl0LXRleHQnKS52YWwoYW5pbVdoZWVsSXRlbS5mYXZvcml0ZUFuaW1hdGlvbi5hbmltYXRpb24pO1xyXG4gICAgICAgICQoJyNlZGl0b3ItY3VycmVudC1hbmltYXRpb24tbGFiZWwnKS50ZXh0KGFuaW1XaGVlbEl0ZW0uZmF2b3JpdGVBbmltYXRpb24uYW5pbWF0aW9uKTtcclxuICAgICAgICAkKCcjZWRpdC10ZXh0JykuZm9jdXMoKTtcclxuICAgICAgICAkKCcjZWRpdG9yLWN1cnJlbnQtYW5pbWF0aW9uLWxhYmVsJykudmFsKGFuaW1XaGVlbEl0ZW0uZmF2b3JpdGVBbmltYXRpb24uYW5pbWF0aW9uKTtcclxuXHJcbiAgICAgICAgJCgnI2FwcGx5LWVkaXQtYnV0dG9uJykudW5iaW5kKCdjbGljaycpO1xyXG4gICAgICAgICQoJyNjYW5jZWwtZWRpdC1idXR0b24nKS51bmJpbmQoJ2NsaWNrJyk7XHJcbiAgICAgICAgJCgnI2VkaXQtdGV4dCcpLnVuYmluZCgna2V5cHJlc3MnKTtcclxuXHJcbiAgICAgICAgJCgnI2FwcGx5LWVkaXQtYnV0dG9uJykuY2xpY2soKCkgPT4geyB0aGlzLmhhbmRsZUVkaXRBcHBseShhbmltV2hlZWxJdGVtKTsgfSk7XHJcbiAgICAgICAgJCgnI2NhbmNlbC1lZGl0LWJ1dHRvbicpLmNsaWNrKCgpID0+IHsgdGhpcy5oYW5kbGVFZGl0Q2FuY2VsKCk7IH0pO1xyXG5cclxuICAgICAgICAvLyBBbGxvdyBoaXR0aW5nIGVudGVyIGluIHRoZSB0ZXh0Ym94IHRvIGFwcGx5XHJcbiAgICAgICAgJCgnI2VkaXQtdGV4dCcpLmtleXByZXNzKGUgPT4ge1xyXG4gICAgICAgICAgICB2YXIga2V5Q29kZSA9IGUua2V5Q29kZSB8fCBlLndoaWNoO1xyXG4gICAgICAgICAgICBpZiAoa2V5Q29kZSA9PSAxMykgeyAvLyBPbiBFTlRFUlxyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFZGl0QXBwbHkoYW5pbVdoZWVsSXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhUHJvdmlkZXIuT25Fc2NhcGUub24oKCk9PntcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVFZGl0Q2FuY2VsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVXaGVlbEl0ZW1Db250YWluZXJGcm9tVGVtcGxhdGUod2hlZWxJdGVtOiBXaGVlbEl0ZW0pOiBKUXVlcnk8SFRNTEVsZW1lbnQ+IHtcclxuICAgICAgICBjb25zdCB3aGVlbEl0ZW1UZW1wbGF0ZUNvbnRhaW5lciA9ICQoYDxkaXYgZGF0YS1pZD1cIiR7d2hlZWxJdGVtLmlkfVwiPmApO1xyXG5cclxuICAgICAgICAvLyBAdHMtaWdub3JlICBsb2FkVGVtcGxhdGUgaXNuJ3QgcmVjb2duaXplZCwgYnV0IGl0J2xsIGJlIGltcG9ydGVkIGJ5IHRoZSBIVE1MIGZpbGVcclxuICAgICAgICB3aGVlbEl0ZW1UZW1wbGF0ZUNvbnRhaW5lci5sb2FkVGVtcGxhdGUoJCgnI3doZWVsaXRlbS10ZW1wbGF0ZScpLCB3aGVlbEl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBQb3NpdGlvbiB0aGUgaXRlbSBvbiB0aGUgd2hlZWxcclxuICAgICAgICB3aGVlbEl0ZW1UZW1wbGF0ZUNvbnRhaW5lci5jc3MoJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XHJcbiAgICAgICAgd2hlZWxJdGVtVGVtcGxhdGVDb250YWluZXIuY3NzKCdsZWZ0JywgYCR7d2hlZWxJdGVtLnh9cHhgKTtcclxuICAgICAgICB3aGVlbEl0ZW1UZW1wbGF0ZUNvbnRhaW5lci5jc3MoJ3RvcCcsIGAke3doZWVsSXRlbS55fXB4YCk7XHJcbiAgICAgICAgd2hlZWxJdGVtVGVtcGxhdGVDb250YWluZXIuY3NzKCd3aWR0aCcsIGAke2l0ZW1EaWFtZXRlcn1weGApO1xyXG4gICAgICAgIHdoZWVsSXRlbVRlbXBsYXRlQ29udGFpbmVyLmNzcygnaGVpZ2h0JywgYCR7aXRlbURpYW1ldGVyfXB4YCk7XHJcblxyXG4gICAgICAgIC8vIFJlZ2lzdGVyIGV2ZW50cyBmb3IgaW50ZXJhY3Rpb24gd2l0aCB0aGUgaXRlbVxyXG4gICAgICAgIHdoZWVsSXRlbVRlbXBsYXRlQ29udGFpbmVyLm1vdXNlZW50ZXIoKCkgPT4geyB0aGlzLmhhbmRsZUl0ZW1Ib3Zlcih3aGVlbEl0ZW0pIH0pO1xyXG4gICAgICAgIHdoZWVsSXRlbVRlbXBsYXRlQ29udGFpbmVyLmZpbmQoJy53aGVlbGl0ZW0tY2lyY2xlLWNvbnRhaW5lcicpLmNsaWNrKCgpID0+IHsgdGhpcy5oYW5kbGVJdGVtQ2xpY2tlZCh3aGVlbEl0ZW0pIH0pO1xyXG4gICAgICAgIHdoZWVsSXRlbVRlbXBsYXRlQ29udGFpbmVyLmZpbmQoJy53aGVlbGl0ZW0tZWRpdC1idXR0b24nKS5jbGljaygoKSA9PiB7IHRoaXMuaGFuZGxlSXRlbUVkaXQod2hlZWxJdGVtKSB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHdoZWVsSXRlbVRlbXBsYXRlQ29udGFpbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVwbGFjZUV4aXN0aW5nV2hlZWxJdGVtKGV4aXN0aW5nV2hlZWxJdGVtOiBXaGVlbEl0ZW0sIG5ld1doZWVsSXRlbTogV2hlZWxJdGVtKSB7XHJcbiAgICAgICAgY29uc3Qgd2hlZWxDb250YWluZXIgPSAkKCcjd2hlZWwtY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBleGlzdGluZyBpdGVtXHJcbiAgICAgICAgJChgZGl2W2RhdGEtaWQ9XCIke2V4aXN0aW5nV2hlZWxJdGVtLmlkfVwiXWApLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGhlIG5ldyBvbmUgaW4gaXRzIHBsYWNlXHJcbiAgICAgICAgY29uc3QgbmV3Q29udGFpbmVyID0gdGhpcy5jcmVhdGVXaGVlbEl0ZW1Db250YWluZXJGcm9tVGVtcGxhdGUobmV3V2hlZWxJdGVtKTtcclxuICAgICAgICBuZXdDb250YWluZXIuYXBwZW5kVG8od2hlZWxDb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlV2hlZWwoaXRlbXM6IGFueVtdKTogV2hlZWwge1xyXG4gICAgICAgIGNvbnN0IHdoZWVsQ29udGFpbmVyID0gJCgnI3doZWVsLWNvbnRhaW5lcicpO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGNvbnRhaW5lcidzIGRpYW1ldGVyXHJcbiAgICAgICAgY29uc3QgaWRlYWxDb250YWluZXJEaWFtZXRlciA9IChpdGVtcy5sZW5ndGggLyAyKSAqIChpdGVtRGlhbWV0ZXIgKyAxNik7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyRGlhbWV0ZXIgPSBNYXRoLm1heChpZGVhbENvbnRhaW5lckRpYW1ldGVyLCB3aGVlbENvbnRhaW5lci5oZWlnaHQoKSlcclxuXHJcbiAgICAgICAgLy8gUGxhY2UgdGhlIHdoZWVsIGluIHRoZSBjZW50ZXIgb2YgdGhlIHdpbmRvd1xyXG4gICAgICAgIHdoZWVsQ29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgIGxlZnQ6ICgkKHdpbmRvdykud2lkdGgoKSAtIGNvbnRhaW5lckRpYW1ldGVyKSAvIDIsXHJcbiAgICAgICAgICAgIHRvcDogKCQod2luZG93KS5oZWlnaHQoKSAtIGNvbnRhaW5lckRpYW1ldGVyKSAvIDIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBjb250YWluZXJEaWFtZXRlcixcclxuICAgICAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEaWFtZXRlclxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBWZXJ0aWNhbGx5IGNlbnRlciB0aGUgdGV4dCBsYWJlbCB0aGF0IGRpc3BsYXlzIHRoZSBjdXJyZW50IGl0ZW0ncyB0ZXh0XHJcbiAgICAgICAgJCgnLmN1cnJlbnQtd2hlZWxpdGVtJykuY3NzKCd0b3AnLCBgJHtjb250YWluZXJEaWFtZXRlciAvIDJ9cHhgKTtcclxuXHJcbiAgICAgICAgY29uc3Qgd2hlZWwgPSBuZXcgQW5pbWF0aW9uV2hlZWwod2hlZWxDb250YWluZXIud2lkdGgoKSAvIDIpO1xyXG4gICAgICAgIHdoZWVsLmFkZEl0ZW1zKGl0ZW1zKS5mb3JFYWNoKHdoZWVsSXRlbSA9PiB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIERJViBlbGVtZW50IHRvIHByZXNlbnQgdGhlIHdoZWVsIGl0ZW1cclxuICAgICAgICAgICAgY29uc3Qgd2hlZWxJdGVtQ29udGFpbmVyID0gdGhpcy5jcmVhdGVXaGVlbEl0ZW1Db250YWluZXJGcm9tVGVtcGxhdGUod2hlZWxJdGVtKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgaXRlbSB0byB0aGUgcGFnZVxyXG4gICAgICAgICAgICB3aGVlbEl0ZW1Db250YWluZXIuYXBwZW5kVG8od2hlZWxDb250YWluZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gd2hlZWw7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2V0dXBXaGVlbCgpIHtcclxuICAgICAgICAvLyBBc2sgdGhlIGNsaWVudCBmb3IgdGhlIGZhdm9yaXRlIGFuaW1hdGlvbnMgbGlzdFxyXG4gICAgICAgIGxldCBmYXZvcml0ZUFuaW1hdGlvbnMgPSBhd2FpdCB0aGlzLmFuaW1hdGlvbkRhdGFQcm92aWRlci5nZXRGYXZvcml0ZUFuaW1hdGlvbnMoKTtcclxuXHJcbiAgICAgICAgLy8gU29ydCB0aGVtIGJ5IHRoZSBzbG90IGluZGV4XHJcbiAgICAgICAgZmF2b3JpdGVBbmltYXRpb25zID0gZmF2b3JpdGVBbmltYXRpb25zLnNvcnQoZmF2b3JpdGVBbmltYXRpb24gPT4gZmF2b3JpdGVBbmltYXRpb24uc2xvdCk7XHJcblxyXG4gICAgICAgIHRoaXMud2hlZWwgPSB0aGlzLmNyZWF0ZVdoZWVsKGZhdm9yaXRlQW5pbWF0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFZGl0QXBwbHkoYW5pbVdoZWVsSXRlbTogQW5pbWF0aW9uV2hlZWxJdGVtKSB7XHJcbiAgICAgICAgY29uc3QgbmV3QW5pbWF0aW9uQWN0aW9uTmFtZSA9ICQoJyNlZGl0LXRleHQnKS52YWwoKSBhcyBzdHJpbmc7XHJcbiAgICAgICAgJCgnI2xvYWRpbmctc3Bpbm5lcicpLmNzcygndmlzaWJpbGl0eScsICd2aXNpYmxlJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YVByb3ZpZGVyLnVwZGF0ZUZhdm9yaXRlQW5pbWF0aW9uKFxyXG4gICAgICAgICAgICBhbmltV2hlZWxJdGVtLmZhdm9yaXRlQW5pbWF0aW9uLnNsb3QsXHJcbiAgICAgICAgICAgIG5ld0FuaW1hdGlvbkFjdGlvbk5hbWVcclxuICAgICAgICApLnRoZW4obmV3QW5pbWF0aW9uU2xvdCA9PiB7XHJcbiAgICAgICAgICAgIHZhciByZXBsYWNlbWVudCA9IHRoaXMud2hlZWwucmVwbGFjZUl0ZW0oYW5pbVdoZWVsSXRlbSwgbmV3QW5pbWF0aW9uU2xvdCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZUV4aXN0aW5nV2hlZWxJdGVtKHJlcGxhY2VtZW50WzBdLCByZXBsYWNlbWVudFsxXSk7XHJcblxyXG4gICAgICAgICAgICAkKCcjZWRpdG9yLWVycm9yLW1lc3NhZ2UnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJyNlZGl0LXRleHQnKS52YWwoXCJcIik7XHJcbiAgICAgICAgICAgICQoJyNpdGVtLWVkaXRvcicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJCgnI2xvYWRpbmctc3Bpbm5lcicpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhUHJvdmlkZXIubm90aWZ5RWRpdG9yVmlzaWJpbGl0eShmYWxzZSk7XHJcbiAgICAgICAgfSkuY2F0Y2gocmVhc29uID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVhc29uKTtcclxuICAgICAgICAgICAgJCgnI2VkaXRvci1lcnJvci1tZXNzYWdlJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuICAgICAgICAgICAgJCgnI2xvYWRpbmctc3Bpbm5lcicpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVkaXRDYW5jZWwoKSB7XHJcbiAgICAgICAgJCgnI2VkaXRvci1lcnJvci1tZXNzYWdlJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICAkKCcjZWRpdC10ZXh0JykudmFsKFwiXCIpO1xyXG4gICAgICAgICAgICAkKCcjaXRlbS1lZGl0b3InKS5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhUHJvdmlkZXIubm90aWZ5RWRpdG9yVmlzaWJpbGl0eShmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcihuZXcgUmFnZVJwY0FuaW1hdGlvbkRhdGFQcm92aWRlcigpKTtcclxuY29udHJvbGxlci5zZXR1cFdoZWVsKCk7XHJcblxyXG5mdW5jdGlvbiBnZXRJY29uRm9yQ2F0ZWdvcnkoY2F0ZWdvcnk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAvLyBDb252ZXJ0IHNvbWUgY2F0ZWdvcnkgbmFtZXMgdG8gb3RoZXJzXHJcbiAgICBzd2l0Y2ggKGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAvLyBncm91bmQgaXMgYmFzaWNhbGx5IHRoZSBzYW1lIGFzIGxheWluZ1xyXG4gICAgICAgIGNhc2UgXCJncm91bmRcIjoge1xyXG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwibGF5aW5nXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpdGVtcyBjYXRlZ29yeSBvbmx5IGZlYXR1cmVzIHNtb2tpbmdcclxuICAgICAgICBjYXNlIFwiaXRlbXNcIjoge1xyXG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwic21va2luZ1wiO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZ2VzdHVyZXMgY2F0ZWdvcnkgaXMgYmFzaWNhbGx5IHRoZSBzYW1lIGFzIGV4cHJlc3Npb25zXHJcbiAgICAgICAgY2FzZSBcImdlc3R1cmVzXCI6IHtcclxuICAgICAgICAgICAgY2F0ZWdvcnkgPSBcImV4cHJlc3Npb25zXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYGFzc2V0cy9pbWcvY2F0ZWdvcmllcy8ke2NhdGVnb3J5LnRvTG93ZXJDYXNlKCl9LnN2Z2A7XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW52YWxpZEFuaW1hdGlvbk5hbWVFcnJvciBleHRlbmRzIEVycm9yIHtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZlcnJlZFByb21pc2U8VD4ge1xyXG4gICAgdW5kZXJseWluZ1Byb21pc2U6IFByb21pc2U8VD47XHJcbiAgICByZWplY3Q7XHJcbiAgICByZXNvbHZlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGV4ZWN1dG9yKSB7XHJcbiAgICAgICAgdGhpcy51bmRlcmx5aW5nUHJvbWlzZSA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3RcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZVxyXG5cclxuICAgICAgICAgICAgZXhlY3V0b3IoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSUxpdGVFdmVudDxUPiB7XHJcbiAgICBvbihoYW5kbGVyOiB7IChkYXRhPzogVCk6IHZvaWQgfSkgOiB2b2lkO1xyXG4gICAgb2ZmKGhhbmRsZXI6IHsgKGRhdGE/OiBUKTogdm9pZCB9KSA6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpdGVFdmVudDxUPiBpbXBsZW1lbnRzIElMaXRlRXZlbnQ8VD4ge1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVyczogeyAoZGF0YT86IFQpOiB2b2lkOyB9W10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgb24oaGFuZGxlcjogeyAoZGF0YT86IFQpOiB2b2lkIH0pIDogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvZmYoaGFuZGxlcjogeyAoZGF0YT86IFQpOiB2b2lkIH0pIDogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IHRoaXMuaGFuZGxlcnMuZmlsdGVyKGggPT4gaCAhPT0gaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyaWdnZXIoZGF0YT86IFQpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzLnNsaWNlKDApLmZvckVhY2goaCA9PiBoKGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXhwb3NlKCkgOiBJTGl0ZUV2ZW50PFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9