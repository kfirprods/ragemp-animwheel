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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL0M6L1Byb2plY3RzL3JhZ2VtcC1hbmltd2hlZWwvbm9kZV9tb2R1bGVzL3JhZ2UtcnBjL2Rpc3QvcmFnZS1ycGMubWluLmpzIiwid2VicGFjazovLy8uL2pzL2FuaW1hdGlvbi1kYXRhLXByb3ZpZGVycy9yYWdlLXJwYy1hbmltYXRpb24tZGF0YS1wcm92aWRlci50cyIsIndlYnBhY2s6Ly8vLi9qcy9hbmltd2hlZWwtdWkudHMiLCJ3ZWJwYWNrOi8vLy4vanMvZXhjZXB0aW9ucy9pbnZhbGlkLWFuaW1hdGlvbi1uYW1lLmV4Y2VwdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9qcy91dGlscy9kZWZlcnJlZC1wcm9taXNlLnRzIiwid2VicGFjazovLy8uL2pzL3V0aWxzL2xpdGUtZXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFD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ZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvYW5pbXdoZWVsLXVpLnRzXCIpO1xuIiwiIWZ1bmN0aW9uKGUscil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9cigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW10scik6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cz1yKCk6ZS5ycGM9cigpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsKGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciByPXt9O2Z1bmN0aW9uIG4odCl7aWYoclt0XSlyZXR1cm4gclt0XS5leHBvcnRzO3ZhciBvPXJbdF09e2k6dCxsOiExLGV4cG9ydHM6e319O3JldHVybiBlW3RdLmNhbGwoby5leHBvcnRzLG8sby5leHBvcnRzLG4pLG8ubD0hMCxvLmV4cG9ydHN9cmV0dXJuIG4ubT1lLG4uYz1yLG4uZD1mdW5jdGlvbihlLHIsdCl7bi5vKGUscil8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIse2VudW1lcmFibGU6ITAsZ2V0OnR9KX0sbi5yPWZ1bmN0aW9uKGUpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9LG4udD1mdW5jdGlvbihlLHIpe2lmKDEmciYmKGU9bihlKSksOCZyKXJldHVybiBlO2lmKDQmciYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUmJmUuX19lc01vZHVsZSlyZXR1cm4gZTt2YXIgdD1PYmplY3QuY3JlYXRlKG51bGwpO2lmKG4ucih0KSxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcImRlZmF1bHRcIix7ZW51bWVyYWJsZTohMCx2YWx1ZTplfSksMiZyJiZcInN0cmluZ1wiIT10eXBlb2YgZSlmb3IodmFyIG8gaW4gZSluLmQodCxvLGZ1bmN0aW9uKHIpe3JldHVybiBlW3JdfS5iaW5kKG51bGwsbykpO3JldHVybiB0fSxuLm49ZnVuY3Rpb24oZSl7dmFyIHI9ZSYmZS5fX2VzTW9kdWxlP2Z1bmN0aW9uKCl7cmV0dXJuIGUuZGVmYXVsdH06ZnVuY3Rpb24oKXtyZXR1cm4gZX07cmV0dXJuIG4uZChyLFwiYVwiLHIpLHJ9LG4ubz1mdW5jdGlvbihlLHIpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxyKX0sbi5wPVwiXCIsbihuLnM9MSl9KFtmdW5jdGlvbihlLHIsbil7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ7ZnVuY3Rpb24gbyhlLHIpe2NvbnN0IG49XCJjbGllbnRcIj09PXMoKTtpZihlJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmdm9pZCAwIT09ZS5pZCl7Y29uc3Qgbz0ocix0LG8pPT5uP2UudHlwZT09PXImJnQuYXQoZS5pZCk9PT1lOmUgaW5zdGFuY2VvZiBvO3N3aXRjaChyKXtjYXNlIHQuQmxpcDpyZXR1cm4gbyhcImJsaXBcIixtcC5ibGlwcyxtcC5CbGlwKTtjYXNlIHQuQ2hlY2twb2ludDpyZXR1cm4gbyhcImNoZWNrcG9pbnRcIixtcC5jaGVja3BvaW50cyxtcC5DaGVja3BvaW50KTtjYXNlIHQuQ29sc2hhcGU6cmV0dXJuIG8oXCJjb2xzaGFwZVwiLG1wLmNvbHNoYXBlcyxtcC5Db2xzaGFwZSk7Y2FzZSB0LkxhYmVsOnJldHVybiBvKFwidGV4dGxhYmVsXCIsbXAubGFiZWxzLG1wLlRleHRMYWJlbCk7Y2FzZSB0Lk1hcmtlcjpyZXR1cm4gbyhcIm1hcmtlclwiLG1wLm1hcmtlcnMsbXAuTWFya2VyKTtjYXNlIHQuT2JqZWN0OnJldHVybiBvKFwib2JqZWN0XCIsbXAub2JqZWN0cyxtcC5PYmplY3QpO2Nhc2UgdC5QaWNrdXA6cmV0dXJuIG8oXCJwaWNrdXBcIixtcC5waWNrdXBzLG1wLlBpY2t1cCk7Y2FzZSB0LlBsYXllcjpyZXR1cm4gbyhcInBsYXllclwiLG1wLnBsYXllcnMsbXAuUGxheWVyKTtjYXNlIHQuVmVoaWNsZTpyZXR1cm4gbyhcInZlaGljbGVcIixtcC52ZWhpY2xlcyxtcC5WZWhpY2xlKX19cmV0dXJuITF9ZnVuY3Rpb24gYygpe2NvbnN0IGU9NDY2NTYqTWF0aC5yYW5kb20oKXwwLHI9NDY2NTYqTWF0aC5yYW5kb20oKXwwO3JldHVybihcIjAwMFwiK2UudG9TdHJpbmcoMzYpKS5zbGljZSgtMykrKFwiMDAwXCIrci50b1N0cmluZygzNikpLnNsaWNlKC0zKX1mdW5jdGlvbiBzKCl7cmV0dXJuIG1wLmpvYWF0P1wic2VydmVyXCI6bXAuZ2FtZSYmbXAuZ2FtZS5qb2FhdD9cImNsaWVudFwiOm1wLnRyaWdnZXI/XCJjZWZcIjp2b2lkIDB9ZnVuY3Rpb24gaShlKXtjb25zdCByPXMoKTtyZXR1cm4gSlNPTi5zdHJpbmdpZnkoZSwoZSxuKT0+e2lmKFwiY2xpZW50XCI9PT1yfHxcInNlcnZlclwiPT09ciYmbiYmXCJvYmplY3RcIj09dHlwZW9mIG4pe2xldCBlO2lmKG8obix0LkJsaXApP2U9dC5CbGlwOm8obix0LkNoZWNrcG9pbnQpP2U9dC5DaGVja3BvaW50Om8obix0LkNvbHNoYXBlKT9lPXQuQ29sc2hhcGU6byhuLHQuTWFya2VyKT9lPXQuTWFya2VyOm8obix0Lk9iamVjdCk/ZT10Lk9iamVjdDpvKG4sdC5QaWNrdXApP2U9dC5QaWNrdXA6byhuLHQuUGxheWVyKT9lPXQuUGxheWVyOm8obix0LlZlaGljbGUpJiYoZT10LlZlaGljbGUpLGUpcmV0dXJue19fdDplLGk6XCJudW1iZXJcIj09dHlwZW9mIG4ucmVtb3RlSWQ/bi5yZW1vdGVJZDpuLmlkfX1yZXR1cm4gbn0pfWZ1bmN0aW9uIGEoZSl7Y29uc3Qgcj1zKCk7cmV0dXJuIEpTT04ucGFyc2UoZSwoZSxuKT0+e2lmKChcImNsaWVudFwiPT09cnx8XCJzZXJ2ZXJcIj09PXIpJiZuJiZcIm9iamVjdFwiPT10eXBlb2YgbiYmXCJzdHJpbmdcIj09dHlwZW9mIG4uX190JiZcIm51bWJlclwiPT10eXBlb2Ygbi5pJiYyPT09T2JqZWN0LmtleXMobikubGVuZ3RoKXtjb25zdCBlPW4uaTtsZXQgbztzd2l0Y2gobi5fX3Qpe2Nhc2UgdC5CbGlwOm89bXAuYmxpcHM7YnJlYWs7Y2FzZSB0LkNoZWNrcG9pbnQ6bz1tcC5jaGVja3BvaW50czticmVhaztjYXNlIHQuQ29sc2hhcGU6bz1tcC5jb2xzaGFwZXM7YnJlYWs7Y2FzZSB0LkxhYmVsOm89bXAubGFiZWxzO2JyZWFrO2Nhc2UgdC5NYXJrZXI6bz1tcC5tYXJrZXJzO2JyZWFrO2Nhc2UgdC5PYmplY3Q6bz1tcC5vYmplY3RzO2JyZWFrO2Nhc2UgdC5QaWNrdXA6bz1tcC5waWNrdXBzO2JyZWFrO2Nhc2UgdC5QbGF5ZXI6bz1tcC5wbGF5ZXJzO2JyZWFrO2Nhc2UgdC5WZWhpY2xlOm89bXAudmVoaWNsZXN9aWYobylyZXR1cm4gb1tcImNsaWVudFwiPT09cj9cImF0UmVtb3RlSWRcIjpcImF0XCJdKGUpfXJldHVybiBufSl9ZnVuY3Rpb24gbChlKXtyZXR1cm4gbmV3IFByb21pc2Uocj0+c2V0VGltZW91dCgoKT0+cihlKSwwKSl9ZnVuY3Rpb24gdShlKXtyZXR1cm4gbmV3IFByb21pc2UoKHIsbik9PnNldFRpbWVvdXQoKCk9Pm4oZSksMCkpfWZ1bmN0aW9uIHAoZSxyKXtyZXR1cm5cIm51bWJlclwiPT10eXBlb2Ygcj9Qcm9taXNlLnJhY2UoW25ldyBQcm9taXNlKChlLG4pPT57c2V0VGltZW91dCgoKT0+bihcIlRJTUVPVVRcIikscil9KSxlXSk6ZX1mdW5jdGlvbiBmKGUpe3RyeXtlLnVybH1jYXRjaChlKXtyZXR1cm4hMX1yZXR1cm4hMH1uLmQocixcImhcIiwoZnVuY3Rpb24oKXtyZXR1cm4gY30pKSxuLmQocixcImFcIiwoZnVuY3Rpb24oKXtyZXR1cm4gc30pKSxuLmQocixcImdcIiwoZnVuY3Rpb24oKXtyZXR1cm4gaX0pKSxuLmQocixcImNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gYX0pKSxuLmQocixcImVcIiwoZnVuY3Rpb24oKXtyZXR1cm4gbH0pKSxuLmQocixcImRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdX0pKSxuLmQocixcImZcIiwoZnVuY3Rpb24oKXtyZXR1cm4gcH0pKSxuLmQocixcImJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZn0pKSxmdW5jdGlvbihlKXtlLkJsaXA9XCJiXCIsZS5DaGVja3BvaW50PVwiY3BcIixlLkNvbHNoYXBlPVwiY1wiLGUuTGFiZWw9XCJsXCIsZS5NYXJrZXI9XCJtXCIsZS5PYmplY3Q9XCJvXCIsZS5QaWNrdXA9XCJwXCIsZS5QbGF5ZXI9XCJwbFwiLGUuVmVoaWNsZT1cInZcIn0odHx8KHQ9e30pKX0sZnVuY3Rpb24oZSxyLG4pe1widXNlIHN0cmljdFwiO24ucihyKSxmdW5jdGlvbihlKXtuLmQocixcInJlZ2lzdGVyXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGR9KSksbi5kKHIsXCJ1bnJlZ2lzdGVyXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGh9KSksbi5kKHIsXCJjYWxsXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHd9KSksbi5kKHIsXCJjYWxsU2VydmVyXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHZ9KSksbi5kKHIsXCJjYWxsQ2xpZW50XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHl9KSksbi5kKHIsXCJjYWxsQnJvd3NlcnNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gQn0pKSxuLmQocixcImNhbGxCcm93c2VyXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIHh9KSksbi5kKHIsXCJvblwiLChmdW5jdGlvbigpe3JldHVybiBqfSkpLG4uZChyLFwib2ZmXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIE99KSksbi5kKHIsXCJ0cmlnZ2VyXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEN9KSksbi5kKHIsXCJ0cmlnZ2VyQ2xpZW50XCIsKGZ1bmN0aW9uKCl7cmV0dXJuIFN9KSksbi5kKHIsXCJ0cmlnZ2VyU2VydmVyXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIEV9KSksbi5kKHIsXCJ0cmlnZ2VyQnJvd3NlcnNcIiwoZnVuY3Rpb24oKXtyZXR1cm4gTH0pKSxuLmQocixcInRyaWdnZXJCcm93c2VyXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIE19KSk7dmFyIHQ9bigwKTtjb25zdCBvPXQuYSgpO2lmKCFvKXRocm93XCJVbmtub3duIFJBR0UgZW52aXJvbm1lbnRcIjtjb25zdCBjPVwiUFJPQ0VEVVJFX05PVF9GT1VORFwiLHM9XCJfX3JwYzppZFwiLGk9XCJfX3JwYzpwcm9jZXNzXCIsYT1cIl9fcnBjOmJyb3dzZXJSZWdpc3RlclwiLGw9XCJfX3JwYzpicm93c2VyVW5yZWdpc3RlclwiLHU9XCJfX3JwYzp0cmlnZ2VyRXZlbnRcIixwPVwiX19ycGM6dHJpZ2dlckV2ZW50QnJvd3NlcnNcIixmPVwiY2VmXCI9PT1vP3dpbmRvdzplO2lmKCFmW2ldKXtpZihmLl9fcnBjTGlzdGVuZXJzPXt9LGYuX19ycGNQZW5kaW5nPXt9LGYuX19ycGNFdkxpc3RlbmVycz17fSxmW2ldPShlLHIpPT57XCJzZXJ2ZXJcIiE9PW8mJihyPWUpO2NvbnN0IG49dC5jKHIpO2lmKG4ucmVxKXtjb25zdCByPXtpZDpuLmlkLGVudmlyb25tZW50Om4uZmVudnx8bi5lbnZ9O1wic2VydmVyXCI9PT1vJiYoci5wbGF5ZXI9ZSk7Y29uc3QgYz17cmV0OjEsaWQ6bi5pZCxlbnY6b307bGV0IHM7c3dpdGNoKG8pe2Nhc2VcInNlcnZlclwiOnM9ZT0+ci5wbGF5ZXIuY2FsbChpLFt0LmcoZSldKTticmVhaztjYXNlXCJjbGllbnRcIjppZihcInNlcnZlclwiPT09bi5lbnYpcz1lPT5tcC5ldmVudHMuY2FsbFJlbW90ZShpLHQuZyhlKSk7ZWxzZSBpZihcImNlZlwiPT09bi5lbnYpe2NvbnN0IGU9bi5iJiZmLl9fcnBjQnJvd3NlcnNbbi5iXTtyLmJyb3dzZXI9ZSxzPXI9PmUmJnQuYihlKSYmZyhlLHIsITApfWJyZWFrO2Nhc2VcImNlZlwiOnM9ZT0+bXAudHJpZ2dlcihpLHQuZyhlKSl9aWYocyl7Y29uc3QgZT1tKG4ubmFtZSxuLmFyZ3Mscik7bi5ub1JldHx8ZS50aGVuKGU9PnMoey4uLmMscmVzOmV9KSkuY2F0Y2goZT0+cyh7Li4uYyxlcnI6ZX0pKX19ZWxzZSBpZihuLnJldCl7Y29uc3Qgcj1mLl9fcnBjUGVuZGluZ1tuLmlkXTtpZihcInNlcnZlclwiPT09byYmci5wbGF5ZXIhPT1lKXJldHVybjtyJiYoci5yZXNvbHZlKG4uZXJyP3QuZChuLmVycik6dC5lKG4ucmVzKSksZGVsZXRlIGYuX19ycGNQZW5kaW5nW24uaWRdKX19LFwiY2VmXCIhPT1vKXtpZihtcC5ldmVudHMuYWRkKGksZltpXSksXCJjbGllbnRcIj09PW8pe2QoXCJfX3JwYzpjYWxsU2VydmVyXCIsKFtlLHIsbl0sdCk9Pl8oZSxyLHtmZW52OnQuZW52aXJvbm1lbnQsbm9SZXQ6bn0pKSxkKFwiX19ycGM6Y2FsbEJyb3dzZXJzXCIsKFtlLHIsbl0sdCk9PlAobnVsbCxlLHIse2ZlbnY6dC5lbnZpcm9ubWVudCxub1JldDpufSkpLGYuX19ycGNCcm93c2Vycz17fTtjb25zdCBlPWU9Pntjb25zdCByPXQuaCgpO09iamVjdC5rZXlzKGYuX19ycGNCcm93c2VycykuZm9yRWFjaChyPT57Y29uc3Qgbj1mLl9fcnBjQnJvd3NlcnNbcl07biYmdC5iKG4pJiZuIT09ZXx8ZGVsZXRlIGYuX19ycGNCcm93c2Vyc1tyXX0pLGYuX19ycGNCcm93c2Vyc1tyXT1lLGUuZXhlY3V0ZShgXFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubmFtZSA9ICcke3J9JztcXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB3aW5kb3dbJyR7c30nXSA9PT0gJ3VuZGVmaW5lZCcpe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snJHtzfSddID0gUHJvbWlzZS5yZXNvbHZlKHdpbmRvdy5uYW1lKTtcXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1snJHtzfTpyZXNvbHZlJ10od2luZG93Lm5hbWUpO1xcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICBgKX07bXAuYnJvd3NlcnMuZm9yRWFjaChlKSxtcC5ldmVudHMuYWRkKFwiYnJvd3NlckNyZWF0ZWRcIixlKSxmLl9fcnBjQnJvd3NlclByb2NlZHVyZXM9e30sbXAuZXZlbnRzLmFkZChhLGU9Pntjb25zdFtyLG5dPUpTT04ucGFyc2UoZSk7Zi5fX3JwY0Jyb3dzZXJQcm9jZWR1cmVzW25dPXJ9KSxtcC5ldmVudHMuYWRkKGwsZT0+e2NvbnN0W3Isbl09SlNPTi5wYXJzZShlKTtmLl9fcnBjQnJvd3NlclByb2NlZHVyZXNbbl09PT1yJiZkZWxldGUgZi5fX3JwY0Jyb3dzZXJQcm9jZWR1cmVzW25dfSksZChwLChbZSxyXSxuKT0+e09iamVjdC52YWx1ZXMoZi5fX3JwY0Jyb3dzZXJzKS5mb3JFYWNoKHQ9PntrKHQsdSxbZSxyXSx7ZmVudjpuLmVudmlyb25tZW50LG5vUmV0OjF9KX0pfSl9fWVsc2Ugdm9pZCAwPT09ZltzXSYmKGZbc109bmV3IFByb21pc2UoZT0+e3dpbmRvdy5uYW1lP2Uod2luZG93Lm5hbWUpOmZbcytcIjpyZXNvbHZlXCJdPWV9KSk7ZCh1LChbZSxyXSxuKT0+UihlLHIsbikpfWZ1bmN0aW9uIGcoZSxyLG4pe2NvbnN0IG89dC5nKHIpO2UuZXhlY3V0ZShgdmFyIHByb2Nlc3MgPSB3aW5kb3dbXCIke2l9XCJdOyBpZihwcm9jZXNzKXsgcHJvY2Vzcygke0pTT04uc3RyaW5naWZ5KG8pfSk7IH1lbHNleyAke24/XCJcIjpgbXAudHJpZ2dlcihcIiR7aX1cIiwgJ3tcInJldFwiOjEsXCJpZFwiOlwiJHtyLmlkfVwiLFwiZXJyXCI6XCIke2N9XCIsXCJlbnZcIjpcImNlZlwifScpO2B9IH1gKX1mdW5jdGlvbiBtKGUscixuKXtjb25zdCBvPWYuX19ycGNMaXN0ZW5lcnNbZV07cmV0dXJuIG8/dC5lKG8ocixuKSk6dC5kKGMpfWZ1bmN0aW9uIGQoZSxyKXtpZigyIT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdydyZWdpc3RlciBleHBlY3RzIDIgYXJndW1lbnRzOiBcIm5hbWVcIiBhbmQgXCJjYlwiJztyZXR1cm5cImNlZlwiPT09byYmZltzXS50aGVuKHI9Pm1wLnRyaWdnZXIoYSxKU09OLnN0cmluZ2lmeShbcixlXSkpKSxmLl9fcnBjTGlzdGVuZXJzW2VdPXIsKCk9PmgoZSl9ZnVuY3Rpb24gaChlKXtpZigxIT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyd1bnJlZ2lzdGVyIGV4cGVjdHMgMSBhcmd1bWVudDogXCJuYW1lXCInO1wiY2VmXCI9PT1vJiZmW3NdLnRoZW4ocj0+bXAudHJpZ2dlcihsLEpTT04uc3RyaW5naWZ5KFtyLGVdKSkpLGYuX19ycGNMaXN0ZW5lcnNbZV09dm9pZCAwfWZ1bmN0aW9uIHcoZSxyLG49e30pe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPDF8fGFyZ3VtZW50cy5sZW5ndGg+Mz90LmQoJ2NhbGwgZXhwZWN0cyAxIHRvIDMgYXJndW1lbnRzOiBcIm5hbWVcIiwgb3B0aW9uYWwgXCJhcmdzXCIsIGFuZCBvcHRpb25hbCBcIm9wdGlvbnNcIicpOnQuZihtKGUscix7ZW52aXJvbm1lbnQ6b30pLG4udGltZW91dCl9ZnVuY3Rpb24gXyhlLHIsbj17fSl7c3dpdGNoKG8pe2Nhc2VcInNlcnZlclwiOnJldHVybiB3KGUscik7Y2FzZVwiY2xpZW50XCI6e2NvbnN0IGM9dC5oKCk7cmV0dXJuIG5ldyBQcm9taXNlKHM9PntuLm5vUmV0fHwoZi5fX3JwY1BlbmRpbmdbY109e3Jlc29sdmU6c30pO2NvbnN0IGE9e3JlcToxLGlkOmMsbmFtZTplLGVudjpvLGFyZ3M6ciwuLi5ufTttcC5ldmVudHMuY2FsbFJlbW90ZShpLHQuZyhhKSl9KX1jYXNlXCJjZWZcIjpyZXR1cm4geShcIl9fcnBjOmNhbGxTZXJ2ZXJcIixbZSxyLCtuLm5vUmV0XSl9fWZ1bmN0aW9uIHYoZSxyLG49e30pe2lmKGFyZ3VtZW50cy5sZW5ndGg8MXx8YXJndW1lbnRzLmxlbmd0aD4zKXJldHVybiB0LmQoJ2NhbGxTZXJ2ZXIgZXhwZWN0cyAxIHRvIDMgYXJndW1lbnRzOiBcIm5hbWVcIiwgb3B0aW9uYWwgXCJhcmdzXCIsIGFuZCBvcHRpb25hbCBcIm9wdGlvbnNcIicpO2xldCBvPXt9O3JldHVybiBuLm5vUmV0JiYoby5ub1JldD0xKSx0LmYoXyhlLHIsbyksbi50aW1lb3V0KX1mdW5jdGlvbiBiKGUscixuLGM9e30pe3N3aXRjaChvKXtjYXNlXCJjbGllbnRcIjpyZXR1cm4gdyhyLG4pO2Nhc2VcInNlcnZlclwiOntjb25zdCBzPXQuaCgpO3JldHVybiBuZXcgUHJvbWlzZShhPT57Yy5ub1JldHx8KGYuX19ycGNQZW5kaW5nW3NdPXtyZXNvbHZlOmEscGxheWVyOmV9KTtjb25zdCBsPXtyZXE6MSxpZDpzLG5hbWU6cixlbnY6byxhcmdzOm4sLi4uY307ZS5jYWxsKGksW3QuZyhsKV0pfSl9Y2FzZVwiY2VmXCI6e2NvbnN0IGU9dC5oKCk7cmV0dXJuIGZbc10udGhlbihzPT5uZXcgUHJvbWlzZShhPT57Yy5ub1JldHx8KGYuX19ycGNQZW5kaW5nW2VdPXtyZXNvbHZlOmF9KTtjb25zdCBsPXtiOnMscmVxOjEsaWQ6ZSxuYW1lOnIsZW52Om8sYXJnczpuLC4uLmN9O21wLnRyaWdnZXIoaSx0LmcobCkpfSkpfX19ZnVuY3Rpb24geShlLHIsbixjPXt9KXtzd2l0Y2gobyl7Y2FzZVwiY2xpZW50XCI6aWYoYz1ufHx7fSxuPXIscj1lLGU9bnVsbCxhcmd1bWVudHMubGVuZ3RoPDF8fGFyZ3VtZW50cy5sZW5ndGg+M3x8XCJzdHJpbmdcIiE9dHlwZW9mIHIpcmV0dXJuIHQuZCgnY2FsbENsaWVudCBmcm9tIHRoZSBjbGllbnQgZXhwZWN0cyAxIHRvIDMgYXJndW1lbnRzOiBcIm5hbWVcIiwgb3B0aW9uYWwgXCJhcmdzXCIsIGFuZCBvcHRpb25hbCBcIm9wdGlvbnNcIicpO2JyZWFrO2Nhc2VcInNlcnZlclwiOmlmKGFyZ3VtZW50cy5sZW5ndGg8Mnx8YXJndW1lbnRzLmxlbmd0aD40fHxcIm9iamVjdFwiIT10eXBlb2YgZSlyZXR1cm4gdC5kKCdjYWxsQ2xpZW50IGZyb20gdGhlIHNlcnZlciBleHBlY3RzIDIgdG8gNCBhcmd1bWVudHM6IFwicGxheWVyXCIsIFwibmFtZVwiLCBvcHRpb25hbCBcImFyZ3NcIiwgYW5kIG9wdGlvbmFsIFwib3B0aW9uc1wiJyk7YnJlYWs7Y2FzZVwiY2VmXCI6aWYoYz1ufHx7fSxuPXIscj1lLGU9bnVsbCxhcmd1bWVudHMubGVuZ3RoPDF8fGFyZ3VtZW50cy5sZW5ndGg+M3x8XCJzdHJpbmdcIiE9dHlwZW9mIHIpcmV0dXJuIHQuZCgnY2FsbENsaWVudCBmcm9tIHRoZSBicm93c2VyIGV4cGVjdHMgMSB0byAzIGFyZ3VtZW50czogXCJuYW1lXCIsIG9wdGlvbmFsIFwiYXJnc1wiLCBhbmQgb3B0aW9uYWwgXCJvcHRpb25zXCInKX1sZXQgcz17fTtyZXR1cm4gYy5ub1JldCYmKHMubm9SZXQ9MSksdC5mKGIoZSxyLG4scyksYy50aW1lb3V0KX1mdW5jdGlvbiBrKGUscixuLGM9e30pe3JldHVybiBuZXcgUHJvbWlzZShzPT57Y29uc3QgaT10LmgoKTtjLm5vUmV0fHwoZi5fX3JwY1BlbmRpbmdbaV09e3Jlc29sdmU6c30pLGcoZSx7cmVxOjEsaWQ6aSxuYW1lOnIsZW52Om8sYXJnczpuLC4uLmN9LCExKX0pfWZ1bmN0aW9uIFAoZSxyLG4scz17fSl7c3dpdGNoKG8pe2Nhc2VcImNsaWVudFwiOmNvbnN0IG89Zi5fX3JwY0Jyb3dzZXJQcm9jZWR1cmVzW3JdO2lmKCFvKXJldHVybiB0LmQoYyk7Y29uc3QgaT1mLl9fcnBjQnJvd3NlcnNbb107cmV0dXJuIGkmJnQuYihpKT9rKGkscixuLHMpOnQuZChjKTtjYXNlXCJzZXJ2ZXJcIjpyZXR1cm4gYihlLFwiX19ycGM6Y2FsbEJyb3dzZXJzXCIsW3Isbiwrcy5ub1JldF0scyk7Y2FzZVwiY2VmXCI6cmV0dXJuIGIobnVsbCxcIl9fcnBjOmNhbGxCcm93c2Vyc1wiLFtyLG4sK3Mubm9SZXRdLHMpfX1mdW5jdGlvbiBCKGUscixuLGM9e30pe2xldCBzLGk9e307c3dpdGNoKG8pe2Nhc2VcImNsaWVudFwiOmNhc2VcImNlZlwiOmlmKGM9bnx8e30sbj1yLHI9ZSxhcmd1bWVudHMubGVuZ3RoPDF8fGFyZ3VtZW50cy5sZW5ndGg+MylyZXR1cm4gdC5kKCdjYWxsQnJvd3NlcnMgZnJvbSB0aGUgY2xpZW50IG9yIGJyb3dzZXIgZXhwZWN0cyAxIHRvIDMgYXJndW1lbnRzOiBcIm5hbWVcIiwgb3B0aW9uYWwgXCJhcmdzXCIsIGFuZCBvcHRpb25hbCBcIm9wdGlvbnNcIicpO2Mubm9SZXQmJihpLm5vUmV0PTEpLHM9UChudWxsLHIsbixpKTticmVhaztjYXNlXCJzZXJ2ZXJcIjppZihhcmd1bWVudHMubGVuZ3RoPDJ8fGFyZ3VtZW50cy5sZW5ndGg+NClyZXR1cm4gdC5kKCdjYWxsQnJvd3NlcnMgZnJvbSB0aGUgc2VydmVyIGV4cGVjdHMgMiB0byA0IGFyZ3VtZW50czogXCJwbGF5ZXJcIiwgXCJuYW1lXCIsIG9wdGlvbmFsIFwiYXJnc1wiLCBhbmQgb3B0aW9uYWwgXCJvcHRpb25zXCInKTtjLm5vUmV0JiYoaS5ub1JldD0xKSxzPVAoZSxyLG4saSl9aWYocylyZXR1cm4gdC5mKHMsYy50aW1lb3V0KX1mdW5jdGlvbiB4KGUscixuLGM9e30pe2lmKFwiY2xpZW50XCIhPT1vKXJldHVybiB0LmQoXCJjYWxsQnJvd3NlciBjYW4gb25seSBiZSB1c2VkIGluIHRoZSBjbGllbnQgZW52aXJvbm1lbnRcIik7aWYoYXJndW1lbnRzLmxlbmd0aDwyfHxhcmd1bWVudHMubGVuZ3RoPjQpcmV0dXJuIHQuZCgnY2FsbEJyb3dzZXIgZXhwZWN0cyAyIHRvIDQgYXJndW1lbnRzOiBcImJyb3dzZXJcIiwgXCJuYW1lXCIsIG9wdGlvbmFsIFwiYXJnc1wiLCBhbmQgb3B0aW9uYWwgXCJvcHRpb25zXCInKTtsZXQgcz17fTtyZXR1cm4gYy5ub1JldCYmKHMubm9SZXQ9MSksdC5mKGsoZSxyLG4scyksYy50aW1lb3V0KX1mdW5jdGlvbiBSKGUscixuKXtjb25zdCB0PWYuX19ycGNFdkxpc3RlbmVyc1tlXTt0JiZ0LmZvckVhY2goZT0+ZShyLG4pKX1mdW5jdGlvbiBqKGUscil7aWYoMiE9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cnb24gZXhwZWN0cyAyIGFyZ3VtZW50czogXCJuYW1lXCIgYW5kIFwiY2JcIic7Y29uc3Qgbj1mLl9fcnBjRXZMaXN0ZW5lcnNbZV18fG5ldyBTZXQ7cmV0dXJuIG4uYWRkKHIpLGYuX19ycGNFdkxpc3RlbmVyc1tlXT1uLCgpPT5PKGUscil9ZnVuY3Rpb24gTyhlLHIpe2lmKDIhPT1hcmd1bWVudHMubGVuZ3RoKXRocm93J29mZiBleHBlY3RzIDIgYXJndW1lbnRzOiBcIm5hbWVcIiBhbmQgXCJjYlwiJztjb25zdCBuPWYuX19ycGNFdkxpc3RlbmVyc1tlXTtuJiZuLmRlbGV0ZShyKX1mdW5jdGlvbiBDKGUscil7aWYoYXJndW1lbnRzLmxlbmd0aDwxfHxhcmd1bWVudHMubGVuZ3RoPjIpdGhyb3cndHJpZ2dlciBleHBlY3RzIDEgb3IgMiBhcmd1bWVudHM6IFwibmFtZVwiLCBhbmQgb3B0aW9uYWwgXCJhcmdzXCInO1IoZSxyLHtlbnZpcm9ubWVudDpvfSl9ZnVuY3Rpb24gUyhlLHIsbil7c3dpdGNoKG8pe2Nhc2VcImNsaWVudFwiOmlmKG49cixyPWUsZT1udWxsLGFyZ3VtZW50cy5sZW5ndGg8MXx8YXJndW1lbnRzLmxlbmd0aD4yfHxcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyd0cmlnZ2VyQ2xpZW50IGZyb20gdGhlIGNsaWVudCBleHBlY3RzIDEgb3IgMiBhcmd1bWVudHM6IFwibmFtZVwiLCBhbmQgb3B0aW9uYWwgXCJhcmdzXCInO2JyZWFrO2Nhc2VcInNlcnZlclwiOmlmKGFyZ3VtZW50cy5sZW5ndGg8Mnx8YXJndW1lbnRzLmxlbmd0aD4zfHxcIm9iamVjdFwiIT10eXBlb2YgZSl0aHJvdyd0cmlnZ2VyQ2xpZW50IGZyb20gdGhlIHNlcnZlciBleHBlY3RzIDIgb3IgMyBhcmd1bWVudHM6IFwicGxheWVyXCIsIFwibmFtZVwiLCBhbmQgb3B0aW9uYWwgXCJhcmdzXCInO2JyZWFrO2Nhc2VcImNlZlwiOmlmKG49cixyPWUsZT1udWxsLGFyZ3VtZW50cy5sZW5ndGg8MXx8YXJndW1lbnRzLmxlbmd0aD4yfHxcInN0cmluZ1wiIT10eXBlb2Ygcil0aHJvdyd0cmlnZ2VyQ2xpZW50IGZyb20gdGhlIGJyb3dzZXIgZXhwZWN0cyAxIG9yIDIgYXJndW1lbnRzOiBcIm5hbWVcIiwgYW5kIG9wdGlvbmFsIFwiYXJnc1wiJ31iKGUsdSxbcixuXSx7bm9SZXQ6MX0pfWZ1bmN0aW9uIEUoZSxyKXtpZihhcmd1bWVudHMubGVuZ3RoPDF8fGFyZ3VtZW50cy5sZW5ndGg+Mil0aHJvdyd0cmlnZ2VyU2VydmVyIGV4cGVjdHMgMSBvciAyIGFyZ3VtZW50czogXCJuYW1lXCIsIGFuZCBvcHRpb25hbCBcImFyZ3NcIic7Xyh1LFtlLHJdLHtub1JldDoxfSl9ZnVuY3Rpb24gTChlLHIsbil7c3dpdGNoKG8pe2Nhc2VcImNsaWVudFwiOmNhc2VcImNlZlwiOmlmKG49cixyPWUsZT1udWxsLGFyZ3VtZW50cy5sZW5ndGg8MXx8YXJndW1lbnRzLmxlbmd0aD4yKXRocm93J3RyaWdnZXJCcm93c2VycyBmcm9tIHRoZSBjbGllbnQgb3IgYnJvd3NlciBleHBlY3RzIDEgb3IgMiBhcmd1bWVudHM6IFwibmFtZVwiLCBhbmQgb3B0aW9uYWwgXCJhcmdzXCInO2JyZWFrO2Nhc2VcInNlcnZlclwiOmlmKGFyZ3VtZW50cy5sZW5ndGg8Mnx8YXJndW1lbnRzLmxlbmd0aD4zKXRocm93J3RyaWdnZXJCcm93c2VycyBmcm9tIHRoZSBzZXJ2ZXIgZXhwZWN0cyAyIG9yIDMgYXJndW1lbnRzOiBcInBsYXllclwiLCBcIm5hbWVcIiwgYW5kIG9wdGlvbmFsIFwiYXJnc1wiJ31iKGUscCxbcixuXSx7bm9SZXQ6MX0pfWZ1bmN0aW9uIE0oZSxyLG4pe2lmKFwiY2xpZW50XCIhPT1vKXRocm93XCJjYWxsQnJvd3NlciBjYW4gb25seSBiZSB1c2VkIGluIHRoZSBjbGllbnQgZW52aXJvbm1lbnRcIjtpZihhcmd1bWVudHMubGVuZ3RoPDJ8fGFyZ3VtZW50cy5sZW5ndGg+NCl0aHJvdydjYWxsQnJvd3NlciBleHBlY3RzIDIgb3IgMyBhcmd1bWVudHM6IFwiYnJvd3NlclwiLCBcIm5hbWVcIiwgYW5kIG9wdGlvbmFsIFwiYXJnc1wiJztrKGUsdSxbcixuXSx7bm9SZXQ6MX0pfXIuZGVmYXVsdD17cmVnaXN0ZXI6ZCx1bnJlZ2lzdGVyOmgsY2FsbDp3LGNhbGxTZXJ2ZXI6dixjYWxsQ2xpZW50OnksY2FsbEJyb3dzZXJzOkIsY2FsbEJyb3dzZXI6eCxvbjpqLG9mZjpPLHRyaWdnZXI6Qyx0cmlnZ2VyU2VydmVyOkUsdHJpZ2dlckNsaWVudDpTLHRyaWdnZXJCcm93c2VyczpMLHRyaWdnZXJCcm93c2VyOk19fS5jYWxsKHRoaXMsbigyKSl9LGZ1bmN0aW9uKGUscil7dmFyIG47bj1mdW5jdGlvbigpe3JldHVybiB0aGlzfSgpO3RyeXtuPW58fG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCl9Y2F0Y2goZSl7XCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmKG49d2luZG93KX1lLmV4cG9ydHM9bn1dKX0pKTsiLCJpbXBvcnQgQW5pbXdoZWVsU2xvdCBmcm9tICcuLi9tb2RlbHMvYW5pbXdoZWVsLXNsb3QudHlwZSc7XHJcbmltcG9ydCB7IElBbmltYXRpb25EYXRhUHJvdmlkZXIgfSBmcm9tICcuL2FuaW1hdGlvbi1kYXRhLXByb3ZpZGVyJztcclxuaW1wb3J0ICogYXMgcnBjIGZyb20gXCJyYWdlLXJwY1wiO1xyXG5pbXBvcnQgRGVmZXJyZWRQcm9taXNlIGZyb20gJy4uL3V0aWxzL2RlZmVycmVkLXByb21pc2UnO1xyXG5pbXBvcnQgTGl0ZUV2ZW50IGZyb20gJy4uL3V0aWxzL2xpdGUtZXZlbnQnO1xyXG5pbXBvcnQgSW52YWxpZEFuaW1hdGlvbk5hbWVFcnJvciBmcm9tICcuLi9leGNlcHRpb25zL2ludmFsaWQtYW5pbWF0aW9uLW5hbWUuZXhjZXB0aW9uJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUmFnZVJwY0FuaW1hdGlvbkRhdGFQcm92aWRlciBpbXBsZW1lbnRzIElBbmltYXRpb25EYXRhUHJvdmlkZXIge1xyXG4gICAgdXBkYXRlUHJvbWlzZTogRGVmZXJyZWRQcm9taXNlPEFuaW13aGVlbFNsb3Q+O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBvbkVzY2FwZSA9IG5ldyBMaXRlRXZlbnQ8dm9pZD4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBycGMucmVnaXN0ZXIoJ1VwZGF0ZUZhdm9yaXRlQW5pbWF0aW9uX1N1Y2Nlc3MnLCBzbG90ID0+IHsgdGhpcy5oYW5kbGVVcGRhdGVTdWNjZXNzKHNsb3QpIH0pO1xyXG4gICAgICAgIHJwYy5yZWdpc3RlcignVXBkYXRlRmF2b3JpdGVBbmltYXRpb25fRmFpbGVkJywgYW5pbWF0aW9uQWN0aW9uTmFtZSA9PiB7IHRoaXMuaGFuZGxlVXBkYXRlRmFpbGVkKGFuaW1hdGlvbkFjdGlvbk5hbWUpOyB9KTtcclxuICAgICAgICBycGMucmVnaXN0ZXIoJ0VzY2FwZUNsaWNrZWQnLCAoKSA9PiB7IHRoaXMub25Fc2NhcGUudHJpZ2dlcigpOyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRGYXZvcml0ZUFuaW1hdGlvbnMoKTogUHJvbWlzZTxBbmltd2hlZWxTbG90W10+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgcnBjLmNhbGxDbGllbnQ8QW5pbXdoZWVsU2xvdFtdPignQW5pbXdoZWVsX0dldEZhdm9yaXRlQW5pbWF0aW9ucycpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUZhdm9yaXRlQW5pbWF0aW9uKHNsb3RJbmRleDogbnVtYmVyLCBhbmltYXRpb25BY3Rpb25OYW1lOiBzdHJpbmcpOiBQcm9taXNlPEFuaW13aGVlbFNsb3Q+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVByb21pc2UgPSBuZXcgRGVmZXJyZWRQcm9taXNlKCgpID0+IHtcclxuICAgICAgICAgICAgcnBjLmNhbGxDbGllbnQoJ0FuaW13aGVlbF9VcGRhdGVGYXZvcml0ZUFuaW1hdGlvbicsIHsgc2xvdEluZGV4LCBhbmltYXRpb25BY3Rpb25OYW1lIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGVQcm9taXNlLnVuZGVybHlpbmdQcm9taXNlO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlBbmltYXRpb24oYW5pbWF0aW9uQWN0aW9uTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcnBjLmNhbGxDbGllbnQoJ0FuaW13aGVlbF9QbGF5QW5pbWF0aW9uJywgYW5pbWF0aW9uQWN0aW9uTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5RWRpdG9yVmlzaWJpbGl0eShpc1Zpc2libGU6IGJvb2xlYW4pIHtcclxuICAgICAgICBycGMuY2FsbENsaWVudCgnc2V0Q2VmQWN0aXZlJywgaXNWaXNpYmxlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IE9uRXNjYXBlKCkgeyByZXR1cm4gdGhpcy5vbkVzY2FwZS5leHBvc2UoKTsgfSBcclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVVwZGF0ZVN1Y2Nlc3Moc2xvdDogQW5pbXdoZWVsU2xvdCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZVByb21pc2UpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9taXNlLnJlc29sdmUoc2xvdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlVXBkYXRlRmFpbGVkKGFuaW1hdGlvbkFjdGlvbk5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy51cGRhdGVQcm9taXNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvbWlzZS5yZWplY3QobmV3IEludmFsaWRBbmltYXRpb25OYW1lRXJyb3IoYW5pbWF0aW9uQWN0aW9uTmFtZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSYWdlUnBjQW5pbWF0aW9uRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi9hbmltYXRpb24tZGF0YS1wcm92aWRlcnMvcmFnZS1ycGMtYW5pbWF0aW9uLWRhdGEtcHJvdmlkZXInO1xyXG5pbXBvcnQgeyBJQW5pbWF0aW9uRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi9hbmltYXRpb24tZGF0YS1wcm92aWRlcnMvYW5pbWF0aW9uLWRhdGEtcHJvdmlkZXInO1xyXG5pbXBvcnQgQW5pbXdoZWVsU2xvdCBmcm9tICcuL21vZGVscy9hbmltd2hlZWwtc2xvdC50eXBlJztcclxuXHJcblxyXG4vKiBDb25zdHMgKi9cclxuY29uc3QgbWluaW11bVdoZWVsSXRlbXMgPSA1O1xyXG5jb25zdCBpdGVtRGlhbWV0ZXIgPSA5NjtcclxuXHJcbi8qIENsYXNzZXMgKi9cclxuYWJzdHJhY3QgY2xhc3MgV2hlZWxJdGVtIHtcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBpZDogYW55LCBwdWJsaWMgdGV4dDogc3RyaW5nLCBwdWJsaWMgaWNvbjogc3RyaW5nKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEFuaW1hdGlvbldoZWVsSXRlbSBleHRlbmRzIFdoZWVsSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZmF2b3JpdGVBbmltYXRpb246IEFuaW13aGVlbFNsb3QpIHtcclxuICAgICAgICBzdXBlcihmYXZvcml0ZUFuaW1hdGlvbi5zbG90LCBmYXZvcml0ZUFuaW1hdGlvbi5hbmltYXRpb24sIGdldEljb25Gb3JDYXRlZ29yeShmYXZvcml0ZUFuaW1hdGlvbi5jYXRlZ29yeSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBIGJhc2UgY2xhc3MgZm9yIHRoZSBsb2dpYyBvZiB3aGVlbHMsIHJlc3BvbnNpYmxlIGZvciBkZWNpZGluZyBjb29yZGluYXRlcyBmb3IgZWFjaCBpdGVtXHJcbmFic3RyYWN0IGNsYXNzIFdoZWVsIHtcclxuICAgIHByaXZhdGUgaXRlbXM6IFdoZWVsSXRlbVtdO1xyXG4gICAgcHJpdmF0ZSByYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lclJhZGl1czogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gVGhlIHJhZGl1cyBvZiB0aGUgd2hlZWwgaXMgc21hbGxlciB0aGFuIGl0cyBjb250YWluZXIgYmVjYXVzZSB3ZSBuZWVkIHRvIGxlYXZlIHNvbWUgc3BhY2UgZm9yIHRoZSBpdGVtc1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gY29udGFpbmVyUmFkaXVzIC0gKGl0ZW1EaWFtZXRlciAvIDIpO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zID0gbmV3IEFycmF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHBvc2l0aW9uIG9uIHRoZSB3aGVlbCBmb3IgYSBzcGVjaWZpYyBpdGVtXHJcbiAgICBwcml2YXRlIGdldFBvc2l0aW9uRm9ySXRlbShpdGVtSW5kZXg6IG51bWJlciwgdG90YWxJdGVtQ291bnQ6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1Db3VudCA9IE1hdGgubWF4KG1pbmltdW1XaGVlbEl0ZW1zLCB0b3RhbEl0ZW1Db3VudCk7XHJcblxyXG4gICAgICAgIGxldCByb3RhdGlvbiA9IChNYXRoLlBJICogMikgLyBpdGVtQ291bnQ7XHJcbiAgICAgICAgcm90YXRpb24gKj0gaXRlbUluZGV4O1xyXG4gICAgICAgIHJvdGF0aW9uIC09IChNYXRoLlBJIC8gMik7XHJcblxyXG4gICAgICAgIHJldHVybiBbdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIE1hdGguY29zKHJvdGF0aW9uKSwgdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIE1hdGguc2luKHJvdGF0aW9uKV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUG9zaXRpb24gb24gYWxsIGl0ZW1zIG9uIHRoZSB3aGVlbCBiYXNlZCBvbiB0aGVpciBpbmRleFxyXG4gICAgcHJpdmF0ZSBwb3NpdGlvbkl0ZW1zKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmdldFBvc2l0aW9uRm9ySXRlbShpLCB0aGlzLml0ZW1zLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IHdoZWVsSXRlbUZhY3RvcnkoaXRlbSk6IFdoZWVsSXRlbTtcclxuXHJcbiAgICBpbnNlcnRJdGVtcyhkYXRhSXRlbXM6IGFueVtdLCBpbmRleCA9IDApOiBXaGVlbEl0ZW1bXSB7XHJcbiAgICAgICAgLy8gQWRkIHRoZSBpdGVtcyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XHJcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoXHJcbiAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgV2hlZWxJdGVtIGluc3RhbmNlcyBmb3IgZWFjaCBkYXRhIGl0ZW0gYW5kIGluc2VydCB0aGVtXHJcbiAgICAgICAgICAgIC4uLmRhdGFJdGVtcy5tYXAoZGF0YUl0ZW0gPT4gdGhpcy53aGVlbEl0ZW1GYWN0b3J5KGRhdGFJdGVtKSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBSZXBvc2l0aW9uIGFsbCBpdGVtcyBvbiB0aGUgd2hlZWxcclxuICAgICAgICB0aGlzLnBvc2l0aW9uSXRlbXMoKTtcclxuXHJcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBXaGVlbEl0ZW0gaW5zdGFuY2VzIGNyZWF0ZWQgZWFybGllclxyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnNsaWNlKGluZGV4LCBkYXRhSXRlbXMubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJdGVtcyhkYXRhSXRlbXM6IGFueVtdKTogV2hlZWxJdGVtW10ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZHMgZGF0YSBpdGVtcyB0byB0aGUgXCJlbmRcIiBvZiB0aGUgd2hlZWwgKGxhc3QgaW5kZXgpXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgd2hlZWwgaXRlbXMgdGhhdCB3ZXJlIGNyZWF0ZWQgZm9yIHRoZSBwcm92aWRlZCBkYXRhIGl0ZW1zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0SXRlbXMoZGF0YUl0ZW1zLCB0aGlzLml0ZW1zLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbShkYXRhSXRlbTogYW55KTogV2hlZWxJdGVtIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRJdGVtcyhuZXcgQXJyYXkoZGF0YUl0ZW0pKVswXTtcclxuICAgIH1cclxuXHJcbiAgICByZXBsYWNlSXRlbShleGlzdGluZ0l0ZW06IFdoZWVsSXRlbSwgbmV3RGF0YUl0ZW06IGFueSk6IFtXaGVlbEl0ZW0sIFdoZWVsSXRlbV0ge1xyXG4gICAgICAgIGNvbnN0IG9sZFdoZWVsSXRlbUluZGV4ID0gdGhpcy5pdGVtcy5pbmRleE9mKGV4aXN0aW5nSXRlbSk7XHJcbiAgICAgICAgY29uc3Qgb2xkV2hlZWxJdGVtID0gdGhpcy5pdGVtc1tvbGRXaGVlbEl0ZW1JbmRleF07XHJcbiAgICAgICAgY29uc3QgbmV3V2hlZWxJdGVtID0gdGhpcy53aGVlbEl0ZW1GYWN0b3J5KG5ld0RhdGFJdGVtKTtcclxuICAgICAgICBuZXdXaGVlbEl0ZW0uc2V0UG9zaXRpb24ob2xkV2hlZWxJdGVtLngsIG9sZFdoZWVsSXRlbS55KTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2Uob2xkV2hlZWxJdGVtSW5kZXgsIDEsIG5ld1doZWVsSXRlbSk7XHJcblxyXG4gICAgICAgIHJldHVybiBbb2xkV2hlZWxJdGVtLCBuZXdXaGVlbEl0ZW1dO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBbmltYXRpb25XaGVlbCBleHRlbmRzIFdoZWVsIHtcclxuICAgIHdoZWVsSXRlbUZhY3RvcnkoaXRlbTogYW55KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBbmltYXRpb25XaGVlbEl0ZW0oaXRlbSBhcyBBbmltd2hlZWxTbG90KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ29udHJvbGxlciB7XHJcbiAgICB3aGVlbDogV2hlZWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhbmltYXRpb25EYXRhUHJvdmlkZXI6IElBbmltYXRpb25EYXRhUHJvdmlkZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyBXaGVuIGEgd2hlZWwgaXRlbSBpcyBob3ZlcmVkLCBpdHMgbmFtZSBhcHBlYXJzIGF0IHRoZSBjZW50ZXIgb2YgdGhlIHdoZWVsXHJcbiAgICBwcml2YXRlIGhhbmRsZUl0ZW1Ib3ZlcihpdGVtOiBXaGVlbEl0ZW0pIHtcclxuICAgICAgICAkKCcjY3VycmVudC13aGVlbGl0ZW0tbmFtZScpLnRleHQoaXRlbS50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUl0ZW1DbGlja2VkKGl0ZW06IFdoZWVsSXRlbSkge1xyXG4gICAgICAgIGNvbnN0IGFuaW1XaGVlbEl0ZW0gPSBpdGVtIGFzIEFuaW1hdGlvbldoZWVsSXRlbTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGFQcm92aWRlci5wbGF5QW5pbWF0aW9uKGFuaW1XaGVlbEl0ZW0uZmF2b3JpdGVBbmltYXRpb24uYW5pbWF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUl0ZW1FZGl0KGl0ZW06IFdoZWVsSXRlbSkge1xyXG4gICAgICAgIGNvbnN0IGFuaW1XaGVlbEl0ZW0gPSBpdGVtIGFzIEFuaW1hdGlvbldoZWVsSXRlbTtcclxuXHJcbiAgICAgICAgJCgnI2FwcGx5LWVkaXQtYnV0dG9uJykudW5iaW5kKCdjbGljaycpO1xyXG4gICAgICAgICQoJyNjYW5jZWwtZWRpdC1idXR0b24nKS51bmJpbmQoJ2NsaWNrJyk7XHJcblxyXG4gICAgICAgIC8vIFRPRE86IE1vdmUgdG8gZWRpdG9yIGNvbXBvbmVudFxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRGF0YVByb3ZpZGVyLm5vdGlmeUVkaXRvclZpc2liaWxpdHkodHJ1ZSk7XHJcbiAgICAgICAgJCgnI2l0ZW0tZWRpdG9yJykuc2hvdygpO1xyXG4gICAgICAgICQoJyNpdGVtLWVkaXRvcicpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XHJcbiAgICAgICAgJCgnI2VkaXQtdGV4dCcpLnZhbChhbmltV2hlZWxJdGVtLmZhdm9yaXRlQW5pbWF0aW9uLmFuaW1hdGlvbik7XHJcbiAgICAgICAgJCgnI2VkaXRvci1jdXJyZW50LWFuaW1hdGlvbi1sYWJlbCcpLnRleHQoYW5pbVdoZWVsSXRlbS5mYXZvcml0ZUFuaW1hdGlvbi5hbmltYXRpb24pO1xyXG4gICAgICAgICQoJyNlZGl0LXRleHQnKS5mb2N1cygpO1xyXG4gICAgICAgICQoJyNlZGl0b3ItY3VycmVudC1hbmltYXRpb24tbGFiZWwnKS52YWwoYW5pbVdoZWVsSXRlbS5mYXZvcml0ZUFuaW1hdGlvbi5hbmltYXRpb24pO1xyXG5cclxuICAgICAgICAkKCcjYXBwbHktZWRpdC1idXR0b24nKS51bmJpbmQoJ2NsaWNrJyk7XHJcbiAgICAgICAgJCgnI2NhbmNlbC1lZGl0LWJ1dHRvbicpLnVuYmluZCgnY2xpY2snKTtcclxuICAgICAgICAkKCcjZWRpdC10ZXh0JykudW5iaW5kKCdrZXlwcmVzcycpO1xyXG5cclxuICAgICAgICAkKCcjYXBwbHktZWRpdC1idXR0b24nKS5jbGljaygoKSA9PiB7IHRoaXMuaGFuZGxlRWRpdEFwcGx5KGFuaW1XaGVlbEl0ZW0pOyB9KTtcclxuICAgICAgICAkKCcjY2FuY2VsLWVkaXQtYnV0dG9uJykuY2xpY2soKCkgPT4geyB0aGlzLmhhbmRsZUVkaXRDYW5jZWwoKTsgfSk7XHJcblxyXG4gICAgICAgIC8vIEFsbG93IGhpdHRpbmcgZW50ZXIgaW4gdGhlIHRleHRib3ggdG8gYXBwbHlcclxuICAgICAgICAkKCcjZWRpdC10ZXh0Jykua2V5cHJlc3MoZSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBrZXlDb2RlID0gZS5rZXlDb2RlIHx8IGUud2hpY2g7XHJcbiAgICAgICAgICAgIGlmIChrZXlDb2RlID09IDEzKSB7IC8vIE9uIEVOVEVSXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVkaXRBcHBseShhbmltV2hlZWxJdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGFQcm92aWRlci5PbkVzY2FwZS5vbigoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVkaXRDYW5jZWwoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVdoZWVsSXRlbUNvbnRhaW5lckZyb21UZW1wbGF0ZSh3aGVlbEl0ZW06IFdoZWVsSXRlbSk6IEpRdWVyeTxIVE1MRWxlbWVudD4ge1xyXG4gICAgICAgIGNvbnN0IHdoZWVsSXRlbVRlbXBsYXRlQ29udGFpbmVyID0gJChgPGRpdiBkYXRhLWlkPVwiJHt3aGVlbEl0ZW0uaWR9XCI+YCk7XHJcblxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgIGxvYWRUZW1wbGF0ZSBpc24ndCByZWNvZ25pemVkLCBidXQgaXQnbGwgYmUgaW1wb3J0ZWQgYnkgdGhlIEhUTUwgZmlsZVxyXG4gICAgICAgIHdoZWVsSXRlbVRlbXBsYXRlQ29udGFpbmVyLmxvYWRUZW1wbGF0ZSgkKCcjd2hlZWxpdGVtLXRlbXBsYXRlJyksIHdoZWVsSXRlbSk7XHJcblxyXG4gICAgICAgIC8vIFBvc2l0aW9uIHRoZSBpdGVtIG9uIHRoZSB3aGVlbFxyXG4gICAgICAgIHdoZWVsSXRlbVRlbXBsYXRlQ29udGFpbmVyLmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcclxuICAgICAgICB3aGVlbEl0ZW1UZW1wbGF0ZUNvbnRhaW5lci5jc3MoJ2xlZnQnLCBgJHt3aGVlbEl0ZW0ueH1weGApO1xyXG4gICAgICAgIHdoZWVsSXRlbVRlbXBsYXRlQ29udGFpbmVyLmNzcygndG9wJywgYCR7d2hlZWxJdGVtLnl9cHhgKTtcclxuICAgICAgICB3aGVlbEl0ZW1UZW1wbGF0ZUNvbnRhaW5lci5jc3MoJ3dpZHRoJywgYCR7aXRlbURpYW1ldGVyfXB4YCk7XHJcbiAgICAgICAgd2hlZWxJdGVtVGVtcGxhdGVDb250YWluZXIuY3NzKCdoZWlnaHQnLCBgJHtpdGVtRGlhbWV0ZXJ9cHhgKTtcclxuXHJcbiAgICAgICAgLy8gUmVnaXN0ZXIgZXZlbnRzIGZvciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBpdGVtXHJcbiAgICAgICAgd2hlZWxJdGVtVGVtcGxhdGVDb250YWluZXIubW91c2VlbnRlcigoKSA9PiB7IHRoaXMuaGFuZGxlSXRlbUhvdmVyKHdoZWVsSXRlbSkgfSk7XHJcbiAgICAgICAgd2hlZWxJdGVtVGVtcGxhdGVDb250YWluZXIuZmluZCgnLndoZWVsaXRlbS1jaXJjbGUtY29udGFpbmVyJykuY2xpY2soKCkgPT4geyB0aGlzLmhhbmRsZUl0ZW1DbGlja2VkKHdoZWVsSXRlbSkgfSk7XHJcbiAgICAgICAgd2hlZWxJdGVtVGVtcGxhdGVDb250YWluZXIuZmluZCgnLndoZWVsaXRlbS1lZGl0LWJ1dHRvbicpLmNsaWNrKCgpID0+IHsgdGhpcy5oYW5kbGVJdGVtRWRpdCh3aGVlbEl0ZW0pIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gd2hlZWxJdGVtVGVtcGxhdGVDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZXBsYWNlRXhpc3RpbmdXaGVlbEl0ZW0oZXhpc3RpbmdXaGVlbEl0ZW06IFdoZWVsSXRlbSwgbmV3V2hlZWxJdGVtOiBXaGVlbEl0ZW0pIHtcclxuICAgICAgICBjb25zdCB3aGVlbENvbnRhaW5lciA9ICQoJyN3aGVlbC1jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGV4aXN0aW5nIGl0ZW1cclxuICAgICAgICAkKGBkaXZbZGF0YS1pZD1cIiR7ZXhpc3RpbmdXaGVlbEl0ZW0uaWR9XCJdYCkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbmV3IG9uZSBpbiBpdHMgcGxhY2VcclxuICAgICAgICBjb25zdCBuZXdDb250YWluZXIgPSB0aGlzLmNyZWF0ZVdoZWVsSXRlbUNvbnRhaW5lckZyb21UZW1wbGF0ZShuZXdXaGVlbEl0ZW0pO1xyXG4gICAgICAgIG5ld0NvbnRhaW5lci5hcHBlbmRUbyh3aGVlbENvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVXaGVlbChpdGVtczogYW55W10pOiBXaGVlbCB7XHJcbiAgICAgICAgY29uc3Qgd2hlZWxDb250YWluZXIgPSAkKCcjd2hlZWwtY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgY29udGFpbmVyJ3MgZGlhbWV0ZXJcclxuICAgICAgICBjb25zdCBpZGVhbENvbnRhaW5lckRpYW1ldGVyID0gKGl0ZW1zLmxlbmd0aCAvIDIpICogKGl0ZW1EaWFtZXRlciArIDE2KTtcclxuICAgICAgICBjb25zdCBjb250YWluZXJEaWFtZXRlciA9IE1hdGgubWF4KGlkZWFsQ29udGFpbmVyRGlhbWV0ZXIsIHdoZWVsQ29udGFpbmVyLmhlaWdodCgpKVxyXG5cclxuICAgICAgICAvLyBQbGFjZSB0aGUgd2hlZWwgaW4gdGhlIGNlbnRlciBvZiB0aGUgd2luZG93XHJcbiAgICAgICAgd2hlZWxDb250YWluZXIuY3NzKHtcclxuICAgICAgICAgICAgbGVmdDogKCQod2luZG93KS53aWR0aCgpIC0gY29udGFpbmVyRGlhbWV0ZXIpIC8gMixcclxuICAgICAgICAgICAgdG9wOiAoJCh3aW5kb3cpLmhlaWdodCgpIC0gY29udGFpbmVyRGlhbWV0ZXIpIC8gMixcclxuICAgICAgICAgICAgd2lkdGg6IGNvbnRhaW5lckRpYW1ldGVyLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IGNvbnRhaW5lckRpYW1ldGVyXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFZlcnRpY2FsbHkgY2VudGVyIHRoZSB0ZXh0IGxhYmVsIHRoYXQgZGlzcGxheXMgdGhlIGN1cnJlbnQgaXRlbSdzIHRleHRcclxuICAgICAgICAkKCcuY3VycmVudC13aGVlbGl0ZW0nKS5jc3MoJ3RvcCcsIGAke2NvbnRhaW5lckRpYW1ldGVyIC8gMn1weGApO1xyXG5cclxuICAgICAgICBjb25zdCB3aGVlbCA9IG5ldyBBbmltYXRpb25XaGVlbCh3aGVlbENvbnRhaW5lci53aWR0aCgpIC8gMik7XHJcbiAgICAgICAgd2hlZWwuYWRkSXRlbXMoaXRlbXMpLmZvckVhY2god2hlZWxJdGVtID0+IHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgRElWIGVsZW1lbnQgdG8gcHJlc2VudCB0aGUgd2hlZWwgaXRlbVxyXG4gICAgICAgICAgICBjb25zdCB3aGVlbEl0ZW1Db250YWluZXIgPSB0aGlzLmNyZWF0ZVdoZWVsSXRlbUNvbnRhaW5lckZyb21UZW1wbGF0ZSh3aGVlbEl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHRoZSBpdGVtIHRvIHRoZSBwYWdlXHJcbiAgICAgICAgICAgIHdoZWVsSXRlbUNvbnRhaW5lci5hcHBlbmRUbyh3aGVlbENvbnRhaW5lcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB3aGVlbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXR1cFdoZWVsKCkge1xyXG4gICAgICAgIC8vIEFzayB0aGUgY2xpZW50IGZvciB0aGUgZmF2b3JpdGUgYW5pbWF0aW9ucyBsaXN0XHJcbiAgICAgICAgbGV0IGZhdm9yaXRlQW5pbWF0aW9ucyA9IGF3YWl0IHRoaXMuYW5pbWF0aW9uRGF0YVByb3ZpZGVyLmdldEZhdm9yaXRlQW5pbWF0aW9ucygpO1xyXG5cclxuICAgICAgICAvLyBTb3J0IHRoZW0gYnkgdGhlIHNsb3QgaW5kZXhcclxuICAgICAgICBmYXZvcml0ZUFuaW1hdGlvbnMgPSBmYXZvcml0ZUFuaW1hdGlvbnMuc29ydChmYXZvcml0ZUFuaW1hdGlvbiA9PiBmYXZvcml0ZUFuaW1hdGlvbi5zbG90KTtcclxuXHJcbiAgICAgICAgdGhpcy53aGVlbCA9IHRoaXMuY3JlYXRlV2hlZWwoZmF2b3JpdGVBbmltYXRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVkaXRBcHBseShhbmltV2hlZWxJdGVtOiBBbmltYXRpb25XaGVlbEl0ZW0pIHtcclxuICAgICAgICBjb25zdCBuZXdBbmltYXRpb25BY3Rpb25OYW1lID0gJCgnI2VkaXQtdGV4dCcpLnZhbCgpIGFzIHN0cmluZztcclxuICAgICAgICAkKCcjbG9hZGluZy1zcGlubmVyJykuY3NzKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhUHJvdmlkZXIudXBkYXRlRmF2b3JpdGVBbmltYXRpb24oXHJcbiAgICAgICAgICAgIGFuaW1XaGVlbEl0ZW0uZmF2b3JpdGVBbmltYXRpb24uc2xvdCxcclxuICAgICAgICAgICAgbmV3QW5pbWF0aW9uQWN0aW9uTmFtZVxyXG4gICAgICAgICkudGhlbihuZXdBbmltYXRpb25TbG90ID0+IHtcclxuICAgICAgICAgICAgdmFyIHJlcGxhY2VtZW50ID0gdGhpcy53aGVlbC5yZXBsYWNlSXRlbShhbmltV2hlZWxJdGVtLCBuZXdBbmltYXRpb25TbG90KTtcclxuICAgICAgICAgICAgdGhpcy5yZXBsYWNlRXhpc3RpbmdXaGVlbEl0ZW0ocmVwbGFjZW1lbnRbMF0sIHJlcGxhY2VtZW50WzFdKTtcclxuXHJcbiAgICAgICAgICAgICQoJyNlZGl0b3ItZXJyb3ItbWVzc2FnZScpLmNzcygndmlzaWJpbGl0eScsICdoaWRkZW4nKTtcclxuICAgICAgICAgICAgJCgnI2VkaXQtdGV4dCcpLnZhbChcIlwiKTtcclxuICAgICAgICAgICAgJCgnI2l0ZW0tZWRpdG9yJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKCcjbG9hZGluZy1zcGlubmVyJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGFQcm92aWRlci5ub3RpZnlFZGl0b3JWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgICAgICB9KS5jYXRjaChyZWFzb24gPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZWFzb24pO1xyXG4gICAgICAgICAgICAkKCcjZWRpdG9yLWVycm9yLW1lc3NhZ2UnKS5jc3MoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpO1xyXG4gICAgICAgICAgICAkKCcjbG9hZGluZy1zcGlubmVyJykuY3NzKCd2aXNpYmlsaXR5JywgJ2hpZGRlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlRWRpdENhbmNlbCgpIHtcclxuICAgICAgICAkKCcjZWRpdG9yLWVycm9yLW1lc3NhZ2UnKS5jc3MoJ3Zpc2liaWxpdHknLCAnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgICQoJyNlZGl0LXRleHQnKS52YWwoXCJcIik7XHJcbiAgICAgICAgICAgICQoJyNpdGVtLWVkaXRvcicpLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvbkRhdGFQcm92aWRlci5ub3RpZnlFZGl0b3JWaXNpYmlsaXR5KGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKG5ldyBSYWdlUnBjQW5pbWF0aW9uRGF0YVByb3ZpZGVyKCkpO1xyXG5jb250cm9sbGVyLnNldHVwV2hlZWwoKTtcclxuXHJcbmZ1bmN0aW9uIGdldEljb25Gb3JDYXRlZ29yeShjYXRlZ29yeTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIENvbnZlcnQgc29tZSBjYXRlZ29yeSBuYW1lcyB0byBvdGhlcnNcclxuICAgIHN3aXRjaCAoY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIC8vIGl0ZW1zIGNhdGVnb3J5IG9ubHkgZmVhdHVyZXMgc21va2luZ1xyXG4gICAgICAgIGNhc2UgXCJpdGVtc1wiOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5ID0gXCJzbW9raW5nXCI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBnZXN0dXJlcyBjYXRlZ29yeSBpcyBiYXNpY2FsbHkgdGhlIHNhbWUgYXMgZXhwcmVzc2lvbnNcclxuICAgICAgICBjYXNlIFwiZ2VzdHVyZXNcIjoge1xyXG4gICAgICAgICAgICBjYXRlZ29yeSA9IFwiZXhwcmVzc2lvbnNcIjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgYXNzZXRzL2ltZy9jYXRlZ29yaWVzLyR7Y2F0ZWdvcnkudG9Mb3dlckNhc2UoKX0uc3ZnYDtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnZhbGlkQW5pbWF0aW9uTmFtZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmVycmVkUHJvbWlzZTxUPiB7XHJcbiAgICB1bmRlcmx5aW5nUHJvbWlzZTogUHJvbWlzZTxUPjtcclxuICAgIHJlamVjdDtcclxuICAgIHJlc29sdmU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZXhlY3V0b3IpIHtcclxuICAgICAgICB0aGlzLnVuZGVybHlpbmdQcm9taXNlID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdFxyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlXHJcblxyXG4gICAgICAgICAgICBleGVjdXRvcigpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJTGl0ZUV2ZW50PFQ+IHtcclxuICAgIG9uKGhhbmRsZXI6IHsgKGRhdGE/OiBUKTogdm9pZCB9KSA6IHZvaWQ7XHJcbiAgICBvZmYoaGFuZGxlcjogeyAoZGF0YT86IFQpOiB2b2lkIH0pIDogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl0ZUV2ZW50PFQ+IGltcGxlbWVudHMgSUxpdGVFdmVudDxUPiB7XHJcbiAgICBwcml2YXRlIGhhbmRsZXJzOiB7IChkYXRhPzogVCk6IHZvaWQ7IH1bXSA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBvbihoYW5kbGVyOiB7IChkYXRhPzogVCk6IHZvaWQgfSkgOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9mZihoYW5kbGVyOiB7IChkYXRhPzogVCk6IHZvaWQgfSkgOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzID0gdGhpcy5oYW5kbGVycy5maWx0ZXIoaCA9PiBoICE9PSBoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdHJpZ2dlcihkYXRhPzogVCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMuc2xpY2UoMCkuZm9yRWFjaChoID0+IGgoZGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleHBvc2UoKSA6IElMaXRlRXZlbnQ8VD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=