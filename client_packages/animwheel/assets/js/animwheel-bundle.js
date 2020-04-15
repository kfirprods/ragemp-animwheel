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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client_packages/animwheel/assets/js/animwheel-ui.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client_packages/animwheel/assets/js/animation-data-providers/rage-rpc-animation-data-provider.ts":
/*!**********************************************************************************************************!*\
  !*** ./client_packages/animwheel/assets/js/animation-data-providers/rage-rpc-animation-data-provider.ts ***!
  \**********************************************************************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var rpc = __importStar(__webpack_require__(/*! rage-rpc */ "./node_modules/rage-rpc/dist/rage-rpc.min.js"));
var RageRpcAnimationDataProvider = /** @class */ (function () {
    function RageRpcAnimationDataProvider() {
    }
    RageRpcAnimationDataProvider.prototype.getCategories = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, rpc.callServer('getAnimationCategories')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    RageRpcAnimationDataProvider.prototype.playAnimation = function (animation) {
        rpc.callServer('playAnimation', animation);
    };
    return RageRpcAnimationDataProvider;
}());
exports.RageRpcAnimationDataProvider = RageRpcAnimationDataProvider;


/***/ }),

/***/ "./client_packages/animwheel/assets/js/animwheel-ui.ts":
/*!*************************************************************!*\
  !*** ./client_packages/animwheel/assets/js/animwheel-ui.ts ***!
  \*************************************************************/
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
var rage_rpc_animation_data_provider_1 = __webpack_require__(/*! ./animation-data-providers/rage-rpc-animation-data-provider */ "./client_packages/animwheel/assets/js/animation-data-providers/rage-rpc-animation-data-provider.ts");
/* Consts */
var minimumCategoryCircles = 5;
var itemRadius = 96;
/* Classes */
var WheelItem = /** @class */ (function () {
    function WheelItem(text, icon) {
        this.text = text;
        this.icon = icon;
    }
    WheelItem.prototype.setPosition = function (x, y) {
        this.x = x;
        this.y = y;
    };
    WheelItem.prototype.hovered = function () {
    };
    WheelItem.prototype.clicked = function () {
    };
    return WheelItem;
}());
var CategoryWheelItem = /** @class */ (function (_super) {
    __extends(CategoryWheelItem, _super);
    function CategoryWheelItem(text, icon, children) {
        var _this = _super.call(this, text, icon) || this;
        _this.text = text;
        _this.icon = icon;
        _this.children = children;
        return _this;
    }
    return CategoryWheelItem;
}(WheelItem));
var AnimationCategoryWheelItem = /** @class */ (function (_super) {
    __extends(AnimationCategoryWheelItem, _super);
    function AnimationCategoryWheelItem(categoryInfo) {
        var _this = _super.call(this, categoryInfo.name, categoryInfo.icon, categoryInfo.animations.map(function (animation) { return new AnimationWheelItem(animation); })) || this;
        _this.categoryInfo = categoryInfo;
        return _this;
    }
    return AnimationCategoryWheelItem;
}(CategoryWheelItem));
var AnimationWheelItem = /** @class */ (function (_super) {
    __extends(AnimationWheelItem, _super);
    function AnimationWheelItem(animationInfo) {
        var _this = _super.call(this, animationInfo.name, animationInfo.icon) || this;
        _this.animationInfo = animationInfo;
        return _this;
    }
    return AnimationWheelItem;
}(WheelItem));
// A base class for the logic of wheels, responsible for deciding coordinates for each item
var Wheel = /** @class */ (function () {
    function Wheel(containerRadius) {
        this.containerRadius = containerRadius;
        // The radius of the wheel is smaller than its container because we need to leave some space for the items
        this.radius = containerRadius - (itemRadius / 2);
        this.items = new Array();
    }
    // Calculate position on the wheel for a specific item
    Wheel.prototype.getPositionForItem = function (itemIndex, totalItemCount) {
        var itemCount = Math.max(minimumCategoryCircles, totalItemCount);
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
    return Wheel;
}());
var AnimationWheel = /** @class */ (function (_super) {
    __extends(AnimationWheel, _super);
    function AnimationWheel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationWheel.prototype.wheelItemFactory = function (item) {
        if (item.animations) {
            return new AnimationCategoryWheelItem(item);
        }
        else {
            return new AnimationWheelItem(item);
        }
    };
    return AnimationWheel;
}(Wheel));
var Controller = /** @class */ (function () {
    function Controller(animationDataProvider) {
        this.animationDataProvider = animationDataProvider;
    }
    // When a wheel item is hovered, its name appears at the center of the wheel
    Controller.prototype.handleItemHover = function (item) {
        $('#current-category-name').text(item.text);
    };
    Controller.prototype.handleItemClicked = function (item) {
        if (item instanceof AnimationCategoryWheelItem) {
            // Clear out previous wheel
            // TODO: Hide categories instead of clearing because they might appear again soon
            $("#wheel-container > *:not('.current-category')").remove();
            // Clear current category text label
            $('#current-category-name').text('');
            // Create a new wheel with the animations as items
            this.currentWheel = this.createWheel(item.categoryInfo.animations);
        }
        else {
            this.animationDataProvider.playAnimation(item.animationInfo);
        }
    };
    Controller.prototype.onAnimationClick = function (animation) {
        this.animationDataProvider.playAnimation(animation);
    };
    Controller.prototype.createWheelItemContainerFromTemplate = function (wheelItem) {
        var _this = this;
        var categoryTemplateContainer = $('<div>');
        // @ts-ignore  loadTemplate isn't recognized, but it'll be imported by the HTML file
        categoryTemplateContainer.loadTemplate($('#category-template'), wheelItem);
        // Position the item on the wheel
        categoryTemplateContainer.css('position', 'absolute');
        categoryTemplateContainer.css('left', wheelItem.x + "px");
        categoryTemplateContainer.css('top', wheelItem.y + "px");
        // Register events for interaction with the item
        categoryTemplateContainer.mouseenter(function () { _this.handleItemHover(wheelItem); });
        categoryTemplateContainer.click(function () { _this.handleItemClicked(wheelItem); });
        return categoryTemplateContainer;
    };
    Controller.prototype.createWheel = function (items) {
        var _this = this;
        var wheelContainer = $('#wheel-container');
        // Calculate the container's diameter
        var idealContainerDiameter = (items.length / 2) * (itemRadius + 16);
        var containerDiameter = Math.max(idealContainerDiameter, wheelContainer.height());
        // Place the wheel in the center of the window
        wheelContainer.css({
            left: ($(window).width() - containerDiameter) / 2,
            top: ($(window).height() - containerDiameter) / 2,
            width: containerDiameter,
            height: containerDiameter
        });
        // Vertically center the current-category text label
        $('.current-category').css('top', containerDiameter / 2 + "px");
        var wheel = new AnimationWheel(wheelContainer.width() / 2);
        wheel.addItems(items).forEach(function (wheelItem) {
            // Create a DIV element to present the wheel item
            var wheelItemContainer = _this.createWheelItemContainerFromTemplate(wheelItem);
            // Add the item to the page
            wheelItemContainer.appendTo(wheelContainer);
        });
        return wheel;
    };
    Controller.prototype.setupCategoriesWheel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var animationCategories;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.animationDataProvider.getCategories()];
                    case 1:
                        animationCategories = _a.sent();
                        this.categoriesWheel = this.createWheel(animationCategories);
                        // Remove loading indication
                        $('#loading-spinner').remove();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Controller;
}());
var controller = new Controller(new rage_rpc_animation_data_provider_1.RageRpcAnimationDataProvider());
// const controller = new Controller(new StaticTestAnimationDataProvider());
// Setup the initial wheel, which is the one that displays animation categories
controller.setupCategoriesWheel();


/***/ }),

/***/ "./node_modules/rage-rpc/dist/rage-rpc.min.js":
/*!****************************************************!*\
  !*** ./node_modules/rage-rpc/dist/rage-rpc.min.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,r){ true?module.exports=r():undefined}("undefined"!=typeof self?self:this,(function(){return function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=1)}([function(e,r,n){"use strict";var t;function o(e,r){const n="client"===s();if(e&&"object"==typeof e&&void 0!==e.id){const o=(r,t,o)=>n?e.type===r&&t.at(e.id)===e:e instanceof o;switch(r){case t.Blip:return o("blip",mp.blips,mp.Blip);case t.Checkpoint:return o("checkpoint",mp.checkpoints,mp.Checkpoint);case t.Colshape:return o("colshape",mp.colshapes,mp.Colshape);case t.Label:return o("textlabel",mp.labels,mp.TextLabel);case t.Marker:return o("marker",mp.markers,mp.Marker);case t.Object:return o("object",mp.objects,mp.Object);case t.Pickup:return o("pickup",mp.pickups,mp.Pickup);case t.Player:return o("player",mp.players,mp.Player);case t.Vehicle:return o("vehicle",mp.vehicles,mp.Vehicle)}}return!1}function c(){const e=46656*Math.random()|0,r=46656*Math.random()|0;return("000"+e.toString(36)).slice(-3)+("000"+r.toString(36)).slice(-3)}function s(){return mp.joaat?"server":mp.game&&mp.game.joaat?"client":mp.trigger?"cef":void 0}function i(e){const r=s();return JSON.stringify(e,(e,n)=>{if("client"===r||"server"===r&&n&&"object"==typeof n){let e;if(o(n,t.Blip)?e=t.Blip:o(n,t.Checkpoint)?e=t.Checkpoint:o(n,t.Colshape)?e=t.Colshape:o(n,t.Marker)?e=t.Marker:o(n,t.Object)?e=t.Object:o(n,t.Pickup)?e=t.Pickup:o(n,t.Player)?e=t.Player:o(n,t.Vehicle)&&(e=t.Vehicle),e)return{__t:e,i:"number"==typeof n.remoteId?n.remoteId:n.id}}return n})}function a(e){const r=s();return JSON.parse(e,(e,n)=>{if(("client"===r||"server"===r)&&n&&"object"==typeof n&&"string"==typeof n.__t&&"number"==typeof n.i&&2===Object.keys(n).length){const e=n.i;let o;switch(n.__t){case t.Blip:o=mp.blips;break;case t.Checkpoint:o=mp.checkpoints;break;case t.Colshape:o=mp.colshapes;break;case t.Label:o=mp.labels;break;case t.Marker:o=mp.markers;break;case t.Object:o=mp.objects;break;case t.Pickup:o=mp.pickups;break;case t.Player:o=mp.players;break;case t.Vehicle:o=mp.vehicles}if(o)return o["client"===r?"atRemoteId":"at"](e)}return n})}function l(e){return new Promise(r=>setTimeout(()=>r(e),0))}function u(e){return new Promise((r,n)=>setTimeout(()=>n(e),0))}function p(e,r){return"number"==typeof r?Promise.race([new Promise((e,n)=>{setTimeout(()=>n("TIMEOUT"),r)}),e]):e}function f(e){try{e.url}catch(e){return!1}return!0}n.d(r,"h",(function(){return c})),n.d(r,"a",(function(){return s})),n.d(r,"g",(function(){return i})),n.d(r,"c",(function(){return a})),n.d(r,"e",(function(){return l})),n.d(r,"d",(function(){return u})),n.d(r,"f",(function(){return p})),n.d(r,"b",(function(){return f})),function(e){e.Blip="b",e.Checkpoint="cp",e.Colshape="c",e.Label="l",e.Marker="m",e.Object="o",e.Pickup="p",e.Player="pl",e.Vehicle="v"}(t||(t={}))},function(e,r,n){"use strict";n.r(r),function(e){n.d(r,"register",(function(){return d})),n.d(r,"unregister",(function(){return h})),n.d(r,"call",(function(){return w})),n.d(r,"callServer",(function(){return v})),n.d(r,"callClient",(function(){return y})),n.d(r,"callBrowsers",(function(){return B})),n.d(r,"callBrowser",(function(){return x})),n.d(r,"on",(function(){return j})),n.d(r,"off",(function(){return O})),n.d(r,"trigger",(function(){return C})),n.d(r,"triggerClient",(function(){return S})),n.d(r,"triggerServer",(function(){return E})),n.d(r,"triggerBrowsers",(function(){return L})),n.d(r,"triggerBrowser",(function(){return M}));var t=n(0);const o=t.a();if(!o)throw"Unknown RAGE environment";const c="PROCEDURE_NOT_FOUND",s="__rpc:id",i="__rpc:process",a="__rpc:browserRegister",l="__rpc:browserUnregister",u="__rpc:triggerEvent",p="__rpc:triggerEventBrowsers",f="cef"===o?window:e;if(!f[i]){if(f.__rpcListeners={},f.__rpcPending={},f.__rpcEvListeners={},f[i]=(e,r)=>{"server"!==o&&(r=e);const n=t.c(r);if(n.req){const r={id:n.id,environment:n.fenv||n.env};"server"===o&&(r.player=e);const c={ret:1,id:n.id,env:o};let s;switch(o){case"server":s=e=>r.player.call(i,[t.g(e)]);break;case"client":if("server"===n.env)s=e=>mp.events.callRemote(i,t.g(e));else if("cef"===n.env){const e=n.b&&f.__rpcBrowsers[n.b];r.browser=e,s=r=>e&&t.b(e)&&g(e,r,!0)}break;case"cef":s=e=>mp.trigger(i,t.g(e))}if(s){const e=m(n.name,n.args,r);n.noRet||e.then(e=>s({...c,res:e})).catch(e=>s({...c,err:e}))}}else if(n.ret){const r=f.__rpcPending[n.id];if("server"===o&&r.player!==e)return;r&&(r.resolve(n.err?t.d(n.err):t.e(n.res)),delete f.__rpcPending[n.id])}},"cef"!==o){if(mp.events.add(i,f[i]),"client"===o){d("__rpc:callServer",([e,r,n],t)=>_(e,r,{fenv:t.environment,noRet:n})),d("__rpc:callBrowsers",([e,r,n],t)=>P(null,e,r,{fenv:t.environment,noRet:n})),f.__rpcBrowsers={};const e=e=>{const r=t.h();Object.keys(f.__rpcBrowsers).forEach(r=>{const n=f.__rpcBrowsers[r];n&&t.b(n)&&n!==e||delete f.__rpcBrowsers[r]}),f.__rpcBrowsers[r]=e,e.execute(`\n                    window.name = '${r}';\n                    if(typeof window['${s}'] === 'undefined'){\n                        window['${s}'] = Promise.resolve(window.name);\n                    }else{\n                        window['${s}:resolve'](window.name);\n                    }\n                `)};mp.browsers.forEach(e),mp.events.add("browserCreated",e),f.__rpcBrowserProcedures={},mp.events.add(a,e=>{const[r,n]=JSON.parse(e);f.__rpcBrowserProcedures[n]=r}),mp.events.add(l,e=>{const[r,n]=JSON.parse(e);f.__rpcBrowserProcedures[n]===r&&delete f.__rpcBrowserProcedures[n]}),d(p,([e,r],n)=>{Object.values(f.__rpcBrowsers).forEach(t=>{k(t,u,[e,r],{fenv:n.environment,noRet:1})})})}}else void 0===f[s]&&(f[s]=new Promise(e=>{window.name?e(window.name):f[s+":resolve"]=e}));d(u,([e,r],n)=>R(e,r,n))}function g(e,r,n){const o=t.g(r);e.execute(`var process = window["${i}"]; if(process){ process(${JSON.stringify(o)}); }else{ ${n?"":`mp.trigger("${i}", '{"ret":1,"id":"${r.id}","err":"${c}","env":"cef"}');`} }`)}function m(e,r,n){const o=f.__rpcListeners[e];return o?t.e(o(r,n)):t.d(c)}function d(e,r){if(2!==arguments.length)throw'register expects 2 arguments: "name" and "cb"';return"cef"===o&&f[s].then(r=>mp.trigger(a,JSON.stringify([r,e]))),f.__rpcListeners[e]=r,()=>h(e)}function h(e){if(1!==arguments.length)throw'unregister expects 1 argument: "name"';"cef"===o&&f[s].then(r=>mp.trigger(l,JSON.stringify([r,e]))),f.__rpcListeners[e]=void 0}function w(e,r,n={}){return arguments.length<1||arguments.length>3?t.d('call expects 1 to 3 arguments: "name", optional "args", and optional "options"'):t.f(m(e,r,{environment:o}),n.timeout)}function _(e,r,n={}){switch(o){case"server":return w(e,r);case"client":{const c=t.h();return new Promise(s=>{n.noRet||(f.__rpcPending[c]={resolve:s});const a={req:1,id:c,name:e,env:o,args:r,...n};mp.events.callRemote(i,t.g(a))})}case"cef":return y("__rpc:callServer",[e,r,+n.noRet])}}function v(e,r,n={}){if(arguments.length<1||arguments.length>3)return t.d('callServer expects 1 to 3 arguments: "name", optional "args", and optional "options"');let o={};return n.noRet&&(o.noRet=1),t.f(_(e,r,o),n.timeout)}function b(e,r,n,c={}){switch(o){case"client":return w(r,n);case"server":{const s=t.h();return new Promise(a=>{c.noRet||(f.__rpcPending[s]={resolve:a,player:e});const l={req:1,id:s,name:r,env:o,args:n,...c};e.call(i,[t.g(l)])})}case"cef":{const e=t.h();return f[s].then(s=>new Promise(a=>{c.noRet||(f.__rpcPending[e]={resolve:a});const l={b:s,req:1,id:e,name:r,env:o,args:n,...c};mp.trigger(i,t.g(l))}))}}}function y(e,r,n,c={}){switch(o){case"client":if(c=n||{},n=r,r=e,e=null,arguments.length<1||arguments.length>3||"string"!=typeof r)return t.d('callClient from the client expects 1 to 3 arguments: "name", optional "args", and optional "options"');break;case"server":if(arguments.length<2||arguments.length>4||"object"!=typeof e)return t.d('callClient from the server expects 2 to 4 arguments: "player", "name", optional "args", and optional "options"');break;case"cef":if(c=n||{},n=r,r=e,e=null,arguments.length<1||arguments.length>3||"string"!=typeof r)return t.d('callClient from the browser expects 1 to 3 arguments: "name", optional "args", and optional "options"')}let s={};return c.noRet&&(s.noRet=1),t.f(b(e,r,n,s),c.timeout)}function k(e,r,n,c={}){return new Promise(s=>{const i=t.h();c.noRet||(f.__rpcPending[i]={resolve:s}),g(e,{req:1,id:i,name:r,env:o,args:n,...c},!1)})}function P(e,r,n,s={}){switch(o){case"client":const o=f.__rpcBrowserProcedures[r];if(!o)return t.d(c);const i=f.__rpcBrowsers[o];return i&&t.b(i)?k(i,r,n,s):t.d(c);case"server":return b(e,"__rpc:callBrowsers",[r,n,+s.noRet],s);case"cef":return b(null,"__rpc:callBrowsers",[r,n,+s.noRet],s)}}function B(e,r,n,c={}){let s,i={};switch(o){case"client":case"cef":if(c=n||{},n=r,r=e,arguments.length<1||arguments.length>3)return t.d('callBrowsers from the client or browser expects 1 to 3 arguments: "name", optional "args", and optional "options"');c.noRet&&(i.noRet=1),s=P(null,r,n,i);break;case"server":if(arguments.length<2||arguments.length>4)return t.d('callBrowsers from the server expects 2 to 4 arguments: "player", "name", optional "args", and optional "options"');c.noRet&&(i.noRet=1),s=P(e,r,n,i)}if(s)return t.f(s,c.timeout)}function x(e,r,n,c={}){if("client"!==o)return t.d("callBrowser can only be used in the client environment");if(arguments.length<2||arguments.length>4)return t.d('callBrowser expects 2 to 4 arguments: "browser", "name", optional "args", and optional "options"');let s={};return c.noRet&&(s.noRet=1),t.f(k(e,r,n,s),c.timeout)}function R(e,r,n){const t=f.__rpcEvListeners[e];t&&t.forEach(e=>e(r,n))}function j(e,r){if(2!==arguments.length)throw'on expects 2 arguments: "name" and "cb"';const n=f.__rpcEvListeners[e]||new Set;return n.add(r),f.__rpcEvListeners[e]=n,()=>O(e,r)}function O(e,r){if(2!==arguments.length)throw'off expects 2 arguments: "name" and "cb"';const n=f.__rpcEvListeners[e];n&&n.delete(r)}function C(e,r){if(arguments.length<1||arguments.length>2)throw'trigger expects 1 or 2 arguments: "name", and optional "args"';R(e,r,{environment:o})}function S(e,r,n){switch(o){case"client":if(n=r,r=e,e=null,arguments.length<1||arguments.length>2||"string"!=typeof r)throw'triggerClient from the client expects 1 or 2 arguments: "name", and optional "args"';break;case"server":if(arguments.length<2||arguments.length>3||"object"!=typeof e)throw'triggerClient from the server expects 2 or 3 arguments: "player", "name", and optional "args"';break;case"cef":if(n=r,r=e,e=null,arguments.length<1||arguments.length>2||"string"!=typeof r)throw'triggerClient from the browser expects 1 or 2 arguments: "name", and optional "args"'}b(e,u,[r,n],{noRet:1})}function E(e,r){if(arguments.length<1||arguments.length>2)throw'triggerServer expects 1 or 2 arguments: "name", and optional "args"';_(u,[e,r],{noRet:1})}function L(e,r,n){switch(o){case"client":case"cef":if(n=r,r=e,e=null,arguments.length<1||arguments.length>2)throw'triggerBrowsers from the client or browser expects 1 or 2 arguments: "name", and optional "args"';break;case"server":if(arguments.length<2||arguments.length>3)throw'triggerBrowsers from the server expects 2 or 3 arguments: "player", "name", and optional "args"'}b(e,p,[r,n],{noRet:1})}function M(e,r,n){if("client"!==o)throw"callBrowser can only be used in the client environment";if(arguments.length<2||arguments.length>4)throw'callBrowser expects 2 or 3 arguments: "browser", "name", and optional "args"';k(e,u,[r,n],{noRet:1})}r.default={register:d,unregister:h,call:w,callServer:v,callClient:y,callBrowsers:B,callBrowser:x,on:j,off:O,trigger:C,triggerServer:E,triggerClient:S,triggerBrowsers:L,triggerBrowser:M}}.call(this,n(2))},function(e,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])}));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50X3BhY2thZ2VzL2FuaW13aGVlbC9hc3NldHMvanMvYW5pbWF0aW9uLWRhdGEtcHJvdmlkZXJzL3JhZ2UtcnBjLWFuaW1hdGlvbi1kYXRhLXByb3ZpZGVyLnRzIiwid2VicGFjazovLy8uL2NsaWVudF9wYWNrYWdlcy9hbmltd2hlZWwvYXNzZXRzL2pzL2FuaW13aGVlbC11aS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmFnZS1ycGMvZGlzdC9yYWdlLXJwYy5taW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQSw0R0FBZ0M7QUFFaEM7SUFDSTtJQUVBLENBQUM7SUFFSyxvREFBYSxHQUFu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LGVBQWUsZ0JBQWdCLCtHQUErRyxPQUFPLGNBQWMsRUFBRSxrQkFBa0IsVUFBVSxxTEFBcUwsTUFBTSxnTEFBZ0wsTUFBTSxtTEFBbUwsYUFBYSxRQUFRLEVBQUUsZ0JBQWdCLHFIQUFxSCxXQUFXLFFBQVEsRUFBRSxrQkFBa0IsVUFBVSx3TEFBd0wsTUFBTSw4SkFBOEosYUFBYSxRQUFRLEVBQUUsa0JBQWtCLDhFQUE4RSw4SEFBOEgsYUFBYSxRQUFRLEVBQUUsV0FBVywrS0FBK0ssaUJBQWlCLGVBQWUsTUFBTSxhQUFhLFlBQVksR0FBRyxJQUFJLG1DQUFtQyxTQUFTLG9DQUFvQyxZQUFZLEdBQUcsRyIsImZpbGUiOiJhbmltd2hlZWwtYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9jbGllbnRfcGFja2FnZXMvYW5pbXdoZWVsL2Fzc2V0cy9qcy9hbmltd2hlZWwtdWkudHNcIik7XG4iLCJpbXBvcnQgeyBBbmltYXRpb25DYXRlZ29yeSB9IGZyb20gJ3JhZ2VtcC1hbmltd2hlZWwtdHlwZXMnO1xyXG5pbXBvcnQgeyBJQW5pbWF0aW9uRGF0YVByb3ZpZGVyIH0gZnJvbSAnLi9hbmltYXRpb24tZGF0YS1wcm92aWRlcic7XHJcbmltcG9ydCAqIGFzIHJwYyBmcm9tIFwicmFnZS1ycGNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSYWdlUnBjQW5pbWF0aW9uRGF0YVByb3ZpZGVyIGltcGxlbWVudHMgSUFuaW1hdGlvbkRhdGFQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRDYXRlZ29yaWVzKCk6IFByb21pc2U8QW5pbWF0aW9uQ2F0ZWdvcnlbXT4ge1xyXG4gICAgICAgIHJldHVybiBhd2FpdCBycGMuY2FsbFNlcnZlcjxBbmltYXRpb25DYXRlZ29yeVtdPignZ2V0QW5pbWF0aW9uQ2F0ZWdvcmllcycpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlBbmltYXRpb24oYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgcnBjLmNhbGxTZXJ2ZXIoJ3BsYXlBbmltYXRpb24nLCBhbmltYXRpb24pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IElBbmltYXRpb25EYXRhUHJvdmlkZXIgfSBmcm9tICcuL2FuaW1hdGlvbi1kYXRhLXByb3ZpZGVycy9hbmltYXRpb24tZGF0YS1wcm92aWRlcic7XHJcbmltcG9ydCB7IFJhZ2VScGNBbmltYXRpb25EYXRhUHJvdmlkZXIgfSBmcm9tICcuL2FuaW1hdGlvbi1kYXRhLXByb3ZpZGVycy9yYWdlLXJwYy1hbmltYXRpb24tZGF0YS1wcm92aWRlcic7XHJcbmltcG9ydCB7IFN0YXRpY1Rlc3RBbmltYXRpb25EYXRhUHJvdmlkZXIgfSBmcm9tICcuL2FuaW1hdGlvbi1kYXRhLXByb3ZpZGVycy9zdGF0aWMtdGVzdC1hbmltYXRpb24tZGF0YS1wcm92aWRlcic7XHJcbmltcG9ydCB7IEFuaW1hdGlvbkNhdGVnb3J5LCBBbmltYXRpb24gfSBmcm9tICdyYWdlbXAtYW5pbXdoZWVsLXR5cGVzJztcclxuXHJcbi8qIENvbnN0cyAqL1xyXG5jb25zdCBtaW5pbXVtQ2F0ZWdvcnlDaXJjbGVzID0gNTtcclxuY29uc3QgaXRlbVJhZGl1cyA9IDk2O1xyXG5cclxuXHJcbi8qIENsYXNzZXMgKi9cclxuYWJzdHJhY3QgY2xhc3MgV2hlZWxJdGVtIHtcclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZXh0OiBzdHJpbmcsIHB1YmxpYyBpY29uOiBzdHJpbmcpIHtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBob3ZlcmVkKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjbGlja2VkKCkge1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2F0ZWdvcnlXaGVlbEl0ZW0gZXh0ZW5kcyBXaGVlbEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIHRleHQ6IHN0cmluZywgcHVibGljIGljb246IHN0cmluZywgcHJpdmF0ZSBjaGlsZHJlbjogV2hlZWxJdGVtW10pIHtcclxuICAgICAgICBzdXBlcih0ZXh0LCBpY29uKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQW5pbWF0aW9uQ2F0ZWdvcnlXaGVlbEl0ZW0gZXh0ZW5kcyBDYXRlZ29yeVdoZWVsSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2F0ZWdvcnlJbmZvOiBBbmltYXRpb25DYXRlZ29yeSkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICBjYXRlZ29yeUluZm8ubmFtZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnlJbmZvLmljb24sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5SW5mby5hbmltYXRpb25zLm1hcChhbmltYXRpb24gPT4gbmV3IEFuaW1hdGlvbldoZWVsSXRlbShhbmltYXRpb24pKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEFuaW1hdGlvbldoZWVsSXRlbSBleHRlbmRzIFdoZWVsSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYW5pbWF0aW9uSW5mbzogQW5pbWF0aW9uKSB7XHJcbiAgICAgICAgc3VwZXIoYW5pbWF0aW9uSW5mby5uYW1lLCBhbmltYXRpb25JbmZvLmljb24pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBBIGJhc2UgY2xhc3MgZm9yIHRoZSBsb2dpYyBvZiB3aGVlbHMsIHJlc3BvbnNpYmxlIGZvciBkZWNpZGluZyBjb29yZGluYXRlcyBmb3IgZWFjaCBpdGVtXHJcbmFic3RyYWN0IGNsYXNzIFdoZWVsIHtcclxuICAgIHByaXZhdGUgaXRlbXM6IFdoZWVsSXRlbVtdO1xyXG4gICAgcHJpdmF0ZSByYWRpdXM6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lclJhZGl1czogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gVGhlIHJhZGl1cyBvZiB0aGUgd2hlZWwgaXMgc21hbGxlciB0aGFuIGl0cyBjb250YWluZXIgYmVjYXVzZSB3ZSBuZWVkIHRvIGxlYXZlIHNvbWUgc3BhY2UgZm9yIHRoZSBpdGVtc1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gY29udGFpbmVyUmFkaXVzIC0gKGl0ZW1SYWRpdXMgLyAyKTtcclxuXHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IG5ldyBBcnJheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBvbiB0aGUgd2hlZWwgZm9yIGEgc3BlY2lmaWMgaXRlbVxyXG4gICAgcHJpdmF0ZSBnZXRQb3NpdGlvbkZvckl0ZW0oaXRlbUluZGV4OiBudW1iZXIsIHRvdGFsSXRlbUNvdW50OiBudW1iZXIpIHtcclxuICAgICAgICBjb25zdCBpdGVtQ291bnQgPSBNYXRoLm1heChtaW5pbXVtQ2F0ZWdvcnlDaXJjbGVzLCB0b3RhbEl0ZW1Db3VudCk7XHJcblxyXG4gICAgICAgIGxldCByb3RhdGlvbiA9IChNYXRoLlBJICogMikgLyBpdGVtQ291bnQ7XHJcbiAgICAgICAgcm90YXRpb24gKj0gaXRlbUluZGV4O1xyXG4gICAgICAgIHJvdGF0aW9uIC09IChNYXRoLlBJIC8gMik7XHJcblxyXG4gICAgICAgIHJldHVybiBbdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIE1hdGguY29zKHJvdGF0aW9uKSwgdGhpcy5yYWRpdXMgKyB0aGlzLnJhZGl1cyAqIE1hdGguc2luKHJvdGF0aW9uKV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUG9zaXRpb24gb24gYWxsIGl0ZW1zIG9uIHRoZSB3aGVlbCBiYXNlZCBvbiB0aGVpciBpbmRleFxyXG4gICAgcHJpdmF0ZSBwb3NpdGlvbkl0ZW1zKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmdldFBvc2l0aW9uRm9ySXRlbShpLCB0aGlzLml0ZW1zLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaV0uc2V0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IHdoZWVsSXRlbUZhY3RvcnkoaXRlbSk6IFdoZWVsSXRlbTtcclxuXHJcbiAgICBpbnNlcnRJdGVtcyhkYXRhSXRlbXM6IG9iamVjdFtdLCBpbmRleCA9IDApOiBXaGVlbEl0ZW1bXSB7XHJcbiAgICAgICAgLy8gQWRkIHRoZSBpdGVtcyBhdCB0aGUgc3BlY2lmaWVkIGluZGV4XHJcbiAgICAgICAgdGhpcy5pdGVtcy5zcGxpY2UoXHJcbiAgICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgICAwLFxyXG4gICAgICAgICAgICAvLyBDcmVhdGUgV2hlZWxJdGVtIGluc3RhbmNlcyBmb3IgZWFjaCBkYXRhIGl0ZW0gYW5kIGluc2VydCB0aGVtXHJcbiAgICAgICAgICAgIC4uLmRhdGFJdGVtcy5tYXAoZGF0YUl0ZW0gPT4gdGhpcy53aGVlbEl0ZW1GYWN0b3J5KGRhdGFJdGVtKSlcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyBSZXBvc2l0aW9uIGFsbCBpdGVtcyBvbiB0aGUgd2hlZWxcclxuICAgICAgICB0aGlzLnBvc2l0aW9uSXRlbXMoKTtcclxuXHJcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBXaGVlbEl0ZW0gaW5zdGFuY2VzIGNyZWF0ZWQgZWFybGllclxyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zLnNsaWNlKGluZGV4LCBkYXRhSXRlbXMubGVuZ3RoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJdGVtcyhkYXRhSXRlbXM6IGFueVtdKTogV2hlZWxJdGVtW10ge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEFkZHMgZGF0YSBpdGVtcyB0byB0aGUgXCJlbmRcIiBvZiB0aGUgd2hlZWwgKGxhc3QgaW5kZXgpXHJcbiAgICAgICAgICpcclxuICAgICAgICAgKiBAcmV0dXJucyBUaGUgd2hlZWwgaXRlbXMgdGhhdCB3ZXJlIGNyZWF0ZWQgZm9yIHRoZSBwcm92aWRlZCBkYXRhIGl0ZW1zXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0SXRlbXMoZGF0YUl0ZW1zLCB0aGlzLml0ZW1zLmxlbmd0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkSXRlbShkYXRhSXRlbTogYW55KTogV2hlZWxJdGVtIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hZGRJdGVtcyhuZXcgQXJyYXkoZGF0YUl0ZW0pKVswXTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQW5pbWF0aW9uV2hlZWwgZXh0ZW5kcyBXaGVlbCB7XHJcbiAgICB3aGVlbEl0ZW1GYWN0b3J5KGl0ZW06IGFueSkge1xyXG4gICAgICAgIGlmIChpdGVtLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBbmltYXRpb25DYXRlZ29yeVdoZWVsSXRlbShpdGVtIGFzIEFuaW1hdGlvbkNhdGVnb3J5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQW5pbWF0aW9uV2hlZWxJdGVtKGl0ZW0gYXMgQW5pbWF0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIENvbnRyb2xsZXIge1xyXG4gICAgcHJpdmF0ZSBjYXRlZ29yaWVzV2hlZWw6IFdoZWVsO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50V2hlZWw6IFdoZWVsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYW5pbWF0aW9uRGF0YVByb3ZpZGVyOiBJQW5pbWF0aW9uRGF0YVByb3ZpZGVyKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIFdoZW4gYSB3aGVlbCBpdGVtIGlzIGhvdmVyZWQsIGl0cyBuYW1lIGFwcGVhcnMgYXQgdGhlIGNlbnRlciBvZiB0aGUgd2hlZWxcclxuICAgIGhhbmRsZUl0ZW1Ib3ZlcihpdGVtOiBXaGVlbEl0ZW0pIHtcclxuICAgICAgICAkKCcjY3VycmVudC1jYXRlZ29yeS1uYW1lJykudGV4dChpdGVtLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUl0ZW1DbGlja2VkKGl0ZW06IFdoZWVsSXRlbSkge1xyXG4gICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgQW5pbWF0aW9uQ2F0ZWdvcnlXaGVlbEl0ZW0pIHtcclxuICAgICAgICAgICAgLy8gQ2xlYXIgb3V0IHByZXZpb3VzIHdoZWVsXHJcbiAgICAgICAgICAgIC8vIFRPRE86IEhpZGUgY2F0ZWdvcmllcyBpbnN0ZWFkIG9mIGNsZWFyaW5nIGJlY2F1c2UgdGhleSBtaWdodCBhcHBlYXIgYWdhaW4gc29vblxyXG4gICAgICAgICAgICAkKFwiI3doZWVsLWNvbnRhaW5lciA+ICo6bm90KCcuY3VycmVudC1jYXRlZ29yeScpXCIpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2xlYXIgY3VycmVudCBjYXRlZ29yeSB0ZXh0IGxhYmVsXHJcbiAgICAgICAgICAgICQoJyNjdXJyZW50LWNhdGVnb3J5LW5hbWUnKS50ZXh0KCcnKTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyB3aGVlbCB3aXRoIHRoZSBhbmltYXRpb25zIGFzIGl0ZW1zXHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFdoZWVsID0gdGhpcy5jcmVhdGVXaGVlbCgoaXRlbSBhcyBBbmltYXRpb25DYXRlZ29yeVdoZWVsSXRlbSkuY2F0ZWdvcnlJbmZvLmFuaW1hdGlvbnMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhUHJvdmlkZXIucGxheUFuaW1hdGlvbigoaXRlbSBhcyBBbmltYXRpb25XaGVlbEl0ZW0pLmFuaW1hdGlvbkluZm8pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkFuaW1hdGlvbkNsaWNrKGFuaW1hdGlvbjogQW5pbWF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25EYXRhUHJvdmlkZXIucGxheUFuaW1hdGlvbihhbmltYXRpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlV2hlZWxJdGVtQ29udGFpbmVyRnJvbVRlbXBsYXRlKHdoZWVsSXRlbTogV2hlZWxJdGVtKTogSlF1ZXJ5PEhUTUxFbGVtZW50PiB7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlUZW1wbGF0ZUNvbnRhaW5lciA9ICQoJzxkaXY+Jyk7XHJcblxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgIGxvYWRUZW1wbGF0ZSBpc24ndCByZWNvZ25pemVkLCBidXQgaXQnbGwgYmUgaW1wb3J0ZWQgYnkgdGhlIEhUTUwgZmlsZVxyXG4gICAgICAgIGNhdGVnb3J5VGVtcGxhdGVDb250YWluZXIubG9hZFRlbXBsYXRlKCQoJyNjYXRlZ29yeS10ZW1wbGF0ZScpLCB3aGVlbEl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBQb3NpdGlvbiB0aGUgaXRlbSBvbiB0aGUgd2hlZWxcclxuICAgICAgICBjYXRlZ29yeVRlbXBsYXRlQ29udGFpbmVyLmNzcygncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcclxuICAgICAgICBjYXRlZ29yeVRlbXBsYXRlQ29udGFpbmVyLmNzcygnbGVmdCcsIGAke3doZWVsSXRlbS54fXB4YCk7XHJcbiAgICAgICAgY2F0ZWdvcnlUZW1wbGF0ZUNvbnRhaW5lci5jc3MoJ3RvcCcsIGAke3doZWVsSXRlbS55fXB4YCk7XHJcblxyXG4gICAgICAgIC8vIFJlZ2lzdGVyIGV2ZW50cyBmb3IgaW50ZXJhY3Rpb24gd2l0aCB0aGUgaXRlbVxyXG4gICAgICAgIGNhdGVnb3J5VGVtcGxhdGVDb250YWluZXIubW91c2VlbnRlcigoKSA9PiB7IHRoaXMuaGFuZGxlSXRlbUhvdmVyKHdoZWVsSXRlbSkgfSk7XHJcbiAgICAgICAgY2F0ZWdvcnlUZW1wbGF0ZUNvbnRhaW5lci5jbGljaygoKSA9PiB7IHRoaXMuaGFuZGxlSXRlbUNsaWNrZWQod2hlZWxJdGVtKSB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNhdGVnb3J5VGVtcGxhdGVDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVXaGVlbChpdGVtczogYW55W10pOiBXaGVlbCB7XHJcbiAgICAgICAgY29uc3Qgd2hlZWxDb250YWluZXIgPSAkKCcjd2hlZWwtY29udGFpbmVyJyk7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgY29udGFpbmVyJ3MgZGlhbWV0ZXJcclxuICAgICAgICBjb25zdCBpZGVhbENvbnRhaW5lckRpYW1ldGVyID0gKGl0ZW1zLmxlbmd0aCAvIDIpICogKGl0ZW1SYWRpdXMgKyAxNik7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyRGlhbWV0ZXIgPSBNYXRoLm1heChpZGVhbENvbnRhaW5lckRpYW1ldGVyLCB3aGVlbENvbnRhaW5lci5oZWlnaHQoKSlcclxuXHJcbiAgICAgICAgLy8gUGxhY2UgdGhlIHdoZWVsIGluIHRoZSBjZW50ZXIgb2YgdGhlIHdpbmRvd1xyXG4gICAgICAgIHdoZWVsQ29udGFpbmVyLmNzcyh7XHJcbiAgICAgICAgICAgIGxlZnQ6ICgkKHdpbmRvdykud2lkdGgoKSAtIGNvbnRhaW5lckRpYW1ldGVyKSAvIDIsXHJcbiAgICAgICAgICAgIHRvcDogKCQod2luZG93KS5oZWlnaHQoKSAtIGNvbnRhaW5lckRpYW1ldGVyKSAvIDIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBjb250YWluZXJEaWFtZXRlcixcclxuICAgICAgICAgICAgaGVpZ2h0OiBjb250YWluZXJEaWFtZXRlclxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBWZXJ0aWNhbGx5IGNlbnRlciB0aGUgY3VycmVudC1jYXRlZ29yeSB0ZXh0IGxhYmVsXHJcbiAgICAgICAgJCgnLmN1cnJlbnQtY2F0ZWdvcnknKS5jc3MoJ3RvcCcsIGAke2NvbnRhaW5lckRpYW1ldGVyIC8gMn1weGApO1xyXG5cclxuICAgICAgICBjb25zdCB3aGVlbCA9IG5ldyBBbmltYXRpb25XaGVlbCh3aGVlbENvbnRhaW5lci53aWR0aCgpIC8gMik7XHJcbiAgICAgICAgd2hlZWwuYWRkSXRlbXMoaXRlbXMpLmZvckVhY2god2hlZWxJdGVtID0+IHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgRElWIGVsZW1lbnQgdG8gcHJlc2VudCB0aGUgd2hlZWwgaXRlbVxyXG4gICAgICAgICAgICBjb25zdCB3aGVlbEl0ZW1Db250YWluZXIgPSB0aGlzLmNyZWF0ZVdoZWVsSXRlbUNvbnRhaW5lckZyb21UZW1wbGF0ZSh3aGVlbEl0ZW0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQWRkIHRoZSBpdGVtIHRvIHRoZSBwYWdlXHJcbiAgICAgICAgICAgIHdoZWVsSXRlbUNvbnRhaW5lci5hcHBlbmRUbyh3aGVlbENvbnRhaW5lcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB3aGVlbDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBzZXR1cENhdGVnb3JpZXNXaGVlbCgpIHtcclxuICAgICAgICBjb25zdCBhbmltYXRpb25DYXRlZ29yaWVzID0gYXdhaXQgdGhpcy5hbmltYXRpb25EYXRhUHJvdmlkZXIuZ2V0Q2F0ZWdvcmllcygpO1xyXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllc1doZWVsID0gdGhpcy5jcmVhdGVXaGVlbChhbmltYXRpb25DYXRlZ29yaWVzKTtcclxuXHJcbiAgICAgICAgLy8gUmVtb3ZlIGxvYWRpbmcgaW5kaWNhdGlvblxyXG4gICAgICAgICQoJyNsb2FkaW5nLXNwaW5uZXInKS5yZW1vdmUoKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgY29udHJvbGxlciA9IG5ldyBDb250cm9sbGVyKG5ldyBSYWdlUnBjQW5pbWF0aW9uRGF0YVByb3ZpZGVyKCkpO1xyXG4vLyBjb25zdCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIobmV3IFN0YXRpY1Rlc3RBbmltYXRpb25EYXRhUHJvdmlkZXIoKSk7XHJcbi8vIFNldHVwIHRoZSBpbml0aWFsIHdoZWVsLCB3aGljaCBpcyB0aGUgb25lIHRoYXQgZGlzcGxheXMgYW5pbWF0aW9uIGNhdGVnb3JpZXNcclxuY29udHJvbGxlci5zZXR1cENhdGVnb3JpZXNXaGVlbCgpO1xyXG4iLCIhZnVuY3Rpb24oZSxyKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1yKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSxyKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzPXIoKTplLnJwYz1yKCl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6dGhpcywoZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHI9e307ZnVuY3Rpb24gbih0KXtpZihyW3RdKXJldHVybiByW3RdLmV4cG9ydHM7dmFyIG89clt0XT17aTp0LGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbdF0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXIsbi5kPWZ1bmN0aW9uKGUscix0KXtuLm8oZSxyKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUscix7ZW51bWVyYWJsZTohMCxnZXQ6dH0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUscil7aWYoMSZyJiYoZT1uKGUpKSw4JnIpcmV0dXJuIGU7aWYoNCZyJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciB0PU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHQpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnImJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKW4uZCh0LG8sZnVuY3Rpb24ocil7cmV0dXJuIGVbcl19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHR9LG4ubj1mdW5jdGlvbihlKXt2YXIgcj1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHIsXCJhXCIscikscn0sbi5vPWZ1bmN0aW9uKGUscil7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHIpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKGUscixuKXtcInVzZSBzdHJpY3RcIjt2YXIgdDtmdW5jdGlvbiBvKGUscil7Y29uc3Qgbj1cImNsaWVudFwiPT09cygpO2lmKGUmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZ2b2lkIDAhPT1lLmlkKXtjb25zdCBvPShyLHQsbyk9Pm4/ZS50eXBlPT09ciYmdC5hdChlLmlkKT09PWU6ZSBpbnN0YW5jZW9mIG87c3dpdGNoKHIpe2Nhc2UgdC5CbGlwOnJldHVybiBvKFwiYmxpcFwiLG1wLmJsaXBzLG1wLkJsaXApO2Nhc2UgdC5DaGVja3BvaW50OnJldHVybiBvKFwiY2hlY2twb2ludFwiLG1wLmNoZWNrcG9pbnRzLG1wLkNoZWNrcG9pbnQpO2Nhc2UgdC5Db2xzaGFwZTpyZXR1cm4gbyhcImNvbHNoYXBlXCIsbXAuY29sc2hhcGVzLG1wLkNvbHNoYXBlKTtjYXNlIHQuTGFiZWw6cmV0dXJuIG8oXCJ0ZXh0bGFiZWxcIixtcC5sYWJlbHMsbXAuVGV4dExhYmVsKTtjYXNlIHQuTWFya2VyOnJldHVybiBvKFwibWFya2VyXCIsbXAubWFya2VycyxtcC5NYXJrZXIpO2Nhc2UgdC5PYmplY3Q6cmV0dXJuIG8oXCJvYmplY3RcIixtcC5vYmplY3RzLG1wLk9iamVjdCk7Y2FzZSB0LlBpY2t1cDpyZXR1cm4gbyhcInBpY2t1cFwiLG1wLnBpY2t1cHMsbXAuUGlja3VwKTtjYXNlIHQuUGxheWVyOnJldHVybiBvKFwicGxheWVyXCIsbXAucGxheWVycyxtcC5QbGF5ZXIpO2Nhc2UgdC5WZWhpY2xlOnJldHVybiBvKFwidmVoaWNsZVwiLG1wLnZlaGljbGVzLG1wLlZlaGljbGUpfX1yZXR1cm4hMX1mdW5jdGlvbiBjKCl7Y29uc3QgZT00NjY1NipNYXRoLnJhbmRvbSgpfDAscj00NjY1NipNYXRoLnJhbmRvbSgpfDA7cmV0dXJuKFwiMDAwXCIrZS50b1N0cmluZygzNikpLnNsaWNlKC0zKSsoXCIwMDBcIityLnRvU3RyaW5nKDM2KSkuc2xpY2UoLTMpfWZ1bmN0aW9uIHMoKXtyZXR1cm4gbXAuam9hYXQ/XCJzZXJ2ZXJcIjptcC5nYW1lJiZtcC5nYW1lLmpvYWF0P1wiY2xpZW50XCI6bXAudHJpZ2dlcj9cImNlZlwiOnZvaWQgMH1mdW5jdGlvbiBpKGUpe2NvbnN0IHI9cygpO3JldHVybiBKU09OLnN0cmluZ2lmeShlLChlLG4pPT57aWYoXCJjbGllbnRcIj09PXJ8fFwic2VydmVyXCI9PT1yJiZuJiZcIm9iamVjdFwiPT10eXBlb2Ygbil7bGV0IGU7aWYobyhuLHQuQmxpcCk/ZT10LkJsaXA6byhuLHQuQ2hlY2twb2ludCk/ZT10LkNoZWNrcG9pbnQ6byhuLHQuQ29sc2hhcGUpP2U9dC5Db2xzaGFwZTpvKG4sdC5NYXJrZXIpP2U9dC5NYXJrZXI6byhuLHQuT2JqZWN0KT9lPXQuT2JqZWN0Om8obix0LlBpY2t1cCk/ZT10LlBpY2t1cDpvKG4sdC5QbGF5ZXIpP2U9dC5QbGF5ZXI6byhuLHQuVmVoaWNsZSkmJihlPXQuVmVoaWNsZSksZSlyZXR1cm57X190OmUsaTpcIm51bWJlclwiPT10eXBlb2Ygbi5yZW1vdGVJZD9uLnJlbW90ZUlkOm4uaWR9fXJldHVybiBufSl9ZnVuY3Rpb24gYShlKXtjb25zdCByPXMoKTtyZXR1cm4gSlNPTi5wYXJzZShlLChlLG4pPT57aWYoKFwiY2xpZW50XCI9PT1yfHxcInNlcnZlclwiPT09cikmJm4mJlwib2JqZWN0XCI9PXR5cGVvZiBuJiZcInN0cmluZ1wiPT10eXBlb2Ygbi5fX3QmJlwibnVtYmVyXCI9PXR5cGVvZiBuLmkmJjI9PT1PYmplY3Qua2V5cyhuKS5sZW5ndGgpe2NvbnN0IGU9bi5pO2xldCBvO3N3aXRjaChuLl9fdCl7Y2FzZSB0LkJsaXA6bz1tcC5ibGlwczticmVhaztjYXNlIHQuQ2hlY2twb2ludDpvPW1wLmNoZWNrcG9pbnRzO2JyZWFrO2Nhc2UgdC5Db2xzaGFwZTpvPW1wLmNvbHNoYXBlczticmVhaztjYXNlIHQuTGFiZWw6bz1tcC5sYWJlbHM7YnJlYWs7Y2FzZSB0Lk1hcmtlcjpvPW1wLm1hcmtlcnM7YnJlYWs7Y2FzZSB0Lk9iamVjdDpvPW1wLm9iamVjdHM7YnJlYWs7Y2FzZSB0LlBpY2t1cDpvPW1wLnBpY2t1cHM7YnJlYWs7Y2FzZSB0LlBsYXllcjpvPW1wLnBsYXllcnM7YnJlYWs7Y2FzZSB0LlZlaGljbGU6bz1tcC52ZWhpY2xlc31pZihvKXJldHVybiBvW1wiY2xpZW50XCI9PT1yP1wiYXRSZW1vdGVJZFwiOlwiYXRcIl0oZSl9cmV0dXJuIG59KX1mdW5jdGlvbiBsKGUpe3JldHVybiBuZXcgUHJvbWlzZShyPT5zZXRUaW1lb3V0KCgpPT5yKGUpLDApKX1mdW5jdGlvbiB1KGUpe3JldHVybiBuZXcgUHJvbWlzZSgocixuKT0+c2V0VGltZW91dCgoKT0+bihlKSwwKSl9ZnVuY3Rpb24gcChlLHIpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiByP1Byb21pc2UucmFjZShbbmV3IFByb21pc2UoKGUsbik9PntzZXRUaW1lb3V0KCgpPT5uKFwiVElNRU9VVFwiKSxyKX0pLGVdKTplfWZ1bmN0aW9uIGYoZSl7dHJ5e2UudXJsfWNhdGNoKGUpe3JldHVybiExfXJldHVybiEwfW4uZChyLFwiaFwiLChmdW5jdGlvbigpe3JldHVybiBjfSkpLG4uZChyLFwiYVwiLChmdW5jdGlvbigpe3JldHVybiBzfSkpLG4uZChyLFwiZ1wiLChmdW5jdGlvbigpe3JldHVybiBpfSkpLG4uZChyLFwiY1wiLChmdW5jdGlvbigpe3JldHVybiBhfSkpLG4uZChyLFwiZVwiLChmdW5jdGlvbigpe3JldHVybiBsfSkpLG4uZChyLFwiZFwiLChmdW5jdGlvbigpe3JldHVybiB1fSkpLG4uZChyLFwiZlwiLChmdW5jdGlvbigpe3JldHVybiBwfSkpLG4uZChyLFwiYlwiLChmdW5jdGlvbigpe3JldHVybiBmfSkpLGZ1bmN0aW9uKGUpe2UuQmxpcD1cImJcIixlLkNoZWNrcG9pbnQ9XCJjcFwiLGUuQ29sc2hhcGU9XCJjXCIsZS5MYWJlbD1cImxcIixlLk1hcmtlcj1cIm1cIixlLk9iamVjdD1cIm9cIixlLlBpY2t1cD1cInBcIixlLlBsYXllcj1cInBsXCIsZS5WZWhpY2xlPVwidlwifSh0fHwodD17fSkpfSxmdW5jdGlvbihlLHIsbil7XCJ1c2Ugc3RyaWN0XCI7bi5yKHIpLGZ1bmN0aW9uKGUpe24uZChyLFwicmVnaXN0ZXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZH0pKSxuLmQocixcInVucmVnaXN0ZXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gaH0pKSxuLmQocixcImNhbGxcIiwoZnVuY3Rpb24oKXtyZXR1cm4gd30pKSxuLmQocixcImNhbGxTZXJ2ZXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdn0pKSxuLmQocixcImNhbGxDbGllbnRcIiwoZnVuY3Rpb24oKXtyZXR1cm4geX0pKSxuLmQocixcImNhbGxCcm93c2Vyc1wiLChmdW5jdGlvbigpe3JldHVybiBCfSkpLG4uZChyLFwiY2FsbEJyb3dzZXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4geH0pKSxuLmQocixcIm9uXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGp9KSksbi5kKHIsXCJvZmZcIiwoZnVuY3Rpb24oKXtyZXR1cm4gT30pKSxuLmQocixcInRyaWdnZXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gQ30pKSxuLmQocixcInRyaWdnZXJDbGllbnRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gU30pKSxuLmQocixcInRyaWdnZXJTZXJ2ZXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gRX0pKSxuLmQocixcInRyaWdnZXJCcm93c2Vyc1wiLChmdW5jdGlvbigpe3JldHVybiBMfSkpLG4uZChyLFwidHJpZ2dlckJyb3dzZXJcIiwoZnVuY3Rpb24oKXtyZXR1cm4gTX0pKTt2YXIgdD1uKDApO2NvbnN0IG89dC5hKCk7aWYoIW8pdGhyb3dcIlVua25vd24gUkFHRSBlbnZpcm9ubWVudFwiO2NvbnN0IGM9XCJQUk9DRURVUkVfTk9UX0ZPVU5EXCIscz1cIl9fcnBjOmlkXCIsaT1cIl9fcnBjOnByb2Nlc3NcIixhPVwiX19ycGM6YnJvd3NlclJlZ2lzdGVyXCIsbD1cIl9fcnBjOmJyb3dzZXJVbnJlZ2lzdGVyXCIsdT1cIl9fcnBjOnRyaWdnZXJFdmVudFwiLHA9XCJfX3JwYzp0cmlnZ2VyRXZlbnRCcm93c2Vyc1wiLGY9XCJjZWZcIj09PW8/d2luZG93OmU7aWYoIWZbaV0pe2lmKGYuX19ycGNMaXN0ZW5lcnM9e30sZi5fX3JwY1BlbmRpbmc9e30sZi5fX3JwY0V2TGlzdGVuZXJzPXt9LGZbaV09KGUscik9PntcInNlcnZlclwiIT09byYmKHI9ZSk7Y29uc3Qgbj10LmMocik7aWYobi5yZXEpe2NvbnN0IHI9e2lkOm4uaWQsZW52aXJvbm1lbnQ6bi5mZW52fHxuLmVudn07XCJzZXJ2ZXJcIj09PW8mJihyLnBsYXllcj1lKTtjb25zdCBjPXtyZXQ6MSxpZDpuLmlkLGVudjpvfTtsZXQgcztzd2l0Y2gobyl7Y2FzZVwic2VydmVyXCI6cz1lPT5yLnBsYXllci5jYWxsKGksW3QuZyhlKV0pO2JyZWFrO2Nhc2VcImNsaWVudFwiOmlmKFwic2VydmVyXCI9PT1uLmVudilzPWU9Pm1wLmV2ZW50cy5jYWxsUmVtb3RlKGksdC5nKGUpKTtlbHNlIGlmKFwiY2VmXCI9PT1uLmVudil7Y29uc3QgZT1uLmImJmYuX19ycGNCcm93c2Vyc1tuLmJdO3IuYnJvd3Nlcj1lLHM9cj0+ZSYmdC5iKGUpJiZnKGUsciwhMCl9YnJlYWs7Y2FzZVwiY2VmXCI6cz1lPT5tcC50cmlnZ2VyKGksdC5nKGUpKX1pZihzKXtjb25zdCBlPW0obi5uYW1lLG4uYXJncyxyKTtuLm5vUmV0fHxlLnRoZW4oZT0+cyh7Li4uYyxyZXM6ZX0pKS5jYXRjaChlPT5zKHsuLi5jLGVycjplfSkpfX1lbHNlIGlmKG4ucmV0KXtjb25zdCByPWYuX19ycGNQZW5kaW5nW24uaWRdO2lmKFwic2VydmVyXCI9PT1vJiZyLnBsYXllciE9PWUpcmV0dXJuO3ImJihyLnJlc29sdmUobi5lcnI/dC5kKG4uZXJyKTp0LmUobi5yZXMpKSxkZWxldGUgZi5fX3JwY1BlbmRpbmdbbi5pZF0pfX0sXCJjZWZcIiE9PW8pe2lmKG1wLmV2ZW50cy5hZGQoaSxmW2ldKSxcImNsaWVudFwiPT09byl7ZChcIl9fcnBjOmNhbGxTZXJ2ZXJcIiwoW2UscixuXSx0KT0+XyhlLHIse2ZlbnY6dC5lbnZpcm9ubWVudCxub1JldDpufSkpLGQoXCJfX3JwYzpjYWxsQnJvd3NlcnNcIiwoW2UscixuXSx0KT0+UChudWxsLGUscix7ZmVudjp0LmVudmlyb25tZW50LG5vUmV0Om59KSksZi5fX3JwY0Jyb3dzZXJzPXt9O2NvbnN0IGU9ZT0+e2NvbnN0IHI9dC5oKCk7T2JqZWN0LmtleXMoZi5fX3JwY0Jyb3dzZXJzKS5mb3JFYWNoKHI9Pntjb25zdCBuPWYuX19ycGNCcm93c2Vyc1tyXTtuJiZ0LmIobikmJm4hPT1lfHxkZWxldGUgZi5fX3JwY0Jyb3dzZXJzW3JdfSksZi5fX3JwY0Jyb3dzZXJzW3JdPWUsZS5leGVjdXRlKGBcXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5uYW1lID0gJyR7cn0nO1xcbiAgICAgICAgICAgICAgICAgICAgaWYodHlwZW9mIHdpbmRvd1snJHtzfSddID09PSAndW5kZWZpbmVkJyl7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Wycke3N9J10gPSBQcm9taXNlLnJlc29sdmUod2luZG93Lm5hbWUpO1xcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XFxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Wycke3N9OnJlc29sdmUnXSh3aW5kb3cubmFtZSk7XFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIGApfTttcC5icm93c2Vycy5mb3JFYWNoKGUpLG1wLmV2ZW50cy5hZGQoXCJicm93c2VyQ3JlYXRlZFwiLGUpLGYuX19ycGNCcm93c2VyUHJvY2VkdXJlcz17fSxtcC5ldmVudHMuYWRkKGEsZT0+e2NvbnN0W3Isbl09SlNPTi5wYXJzZShlKTtmLl9fcnBjQnJvd3NlclByb2NlZHVyZXNbbl09cn0pLG1wLmV2ZW50cy5hZGQobCxlPT57Y29uc3RbcixuXT1KU09OLnBhcnNlKGUpO2YuX19ycGNCcm93c2VyUHJvY2VkdXJlc1tuXT09PXImJmRlbGV0ZSBmLl9fcnBjQnJvd3NlclByb2NlZHVyZXNbbl19KSxkKHAsKFtlLHJdLG4pPT57T2JqZWN0LnZhbHVlcyhmLl9fcnBjQnJvd3NlcnMpLmZvckVhY2godD0+e2sodCx1LFtlLHJdLHtmZW52Om4uZW52aXJvbm1lbnQsbm9SZXQ6MX0pfSl9KX19ZWxzZSB2b2lkIDA9PT1mW3NdJiYoZltzXT1uZXcgUHJvbWlzZShlPT57d2luZG93Lm5hbWU/ZSh3aW5kb3cubmFtZSk6ZltzK1wiOnJlc29sdmVcIl09ZX0pKTtkKHUsKFtlLHJdLG4pPT5SKGUscixuKSl9ZnVuY3Rpb24gZyhlLHIsbil7Y29uc3Qgbz10Lmcocik7ZS5leGVjdXRlKGB2YXIgcHJvY2VzcyA9IHdpbmRvd1tcIiR7aX1cIl07IGlmKHByb2Nlc3MpeyBwcm9jZXNzKCR7SlNPTi5zdHJpbmdpZnkobyl9KTsgfWVsc2V7ICR7bj9cIlwiOmBtcC50cmlnZ2VyKFwiJHtpfVwiLCAne1wicmV0XCI6MSxcImlkXCI6XCIke3IuaWR9XCIsXCJlcnJcIjpcIiR7Y31cIixcImVudlwiOlwiY2VmXCJ9Jyk7YH0gfWApfWZ1bmN0aW9uIG0oZSxyLG4pe2NvbnN0IG89Zi5fX3JwY0xpc3RlbmVyc1tlXTtyZXR1cm4gbz90LmUobyhyLG4pKTp0LmQoYyl9ZnVuY3Rpb24gZChlLHIpe2lmKDIhPT1hcmd1bWVudHMubGVuZ3RoKXRocm93J3JlZ2lzdGVyIGV4cGVjdHMgMiBhcmd1bWVudHM6IFwibmFtZVwiIGFuZCBcImNiXCInO3JldHVyblwiY2VmXCI9PT1vJiZmW3NdLnRoZW4ocj0+bXAudHJpZ2dlcihhLEpTT04uc3RyaW5naWZ5KFtyLGVdKSkpLGYuX19ycGNMaXN0ZW5lcnNbZV09ciwoKT0+aChlKX1mdW5jdGlvbiBoKGUpe2lmKDEhPT1hcmd1bWVudHMubGVuZ3RoKXRocm93J3VucmVnaXN0ZXIgZXhwZWN0cyAxIGFyZ3VtZW50OiBcIm5hbWVcIic7XCJjZWZcIj09PW8mJmZbc10udGhlbihyPT5tcC50cmlnZ2VyKGwsSlNPTi5zdHJpbmdpZnkoW3IsZV0pKSksZi5fX3JwY0xpc3RlbmVyc1tlXT12b2lkIDB9ZnVuY3Rpb24gdyhlLHIsbj17fSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg8MXx8YXJndW1lbnRzLmxlbmd0aD4zP3QuZCgnY2FsbCBleHBlY3RzIDEgdG8gMyBhcmd1bWVudHM6IFwibmFtZVwiLCBvcHRpb25hbCBcImFyZ3NcIiwgYW5kIG9wdGlvbmFsIFwib3B0aW9uc1wiJyk6dC5mKG0oZSxyLHtlbnZpcm9ubWVudDpvfSksbi50aW1lb3V0KX1mdW5jdGlvbiBfKGUscixuPXt9KXtzd2l0Y2gobyl7Y2FzZVwic2VydmVyXCI6cmV0dXJuIHcoZSxyKTtjYXNlXCJjbGllbnRcIjp7Y29uc3QgYz10LmgoKTtyZXR1cm4gbmV3IFByb21pc2Uocz0+e24ubm9SZXR8fChmLl9fcnBjUGVuZGluZ1tjXT17cmVzb2x2ZTpzfSk7Y29uc3QgYT17cmVxOjEsaWQ6YyxuYW1lOmUsZW52Om8sYXJnczpyLC4uLm59O21wLmV2ZW50cy5jYWxsUmVtb3RlKGksdC5nKGEpKX0pfWNhc2VcImNlZlwiOnJldHVybiB5KFwiX19ycGM6Y2FsbFNlcnZlclwiLFtlLHIsK24ubm9SZXRdKX19ZnVuY3Rpb24gdihlLHIsbj17fSl7aWYoYXJndW1lbnRzLmxlbmd0aDwxfHxhcmd1bWVudHMubGVuZ3RoPjMpcmV0dXJuIHQuZCgnY2FsbFNlcnZlciBleHBlY3RzIDEgdG8gMyBhcmd1bWVudHM6IFwibmFtZVwiLCBvcHRpb25hbCBcImFyZ3NcIiwgYW5kIG9wdGlvbmFsIFwib3B0aW9uc1wiJyk7bGV0IG89e307cmV0dXJuIG4ubm9SZXQmJihvLm5vUmV0PTEpLHQuZihfKGUscixvKSxuLnRpbWVvdXQpfWZ1bmN0aW9uIGIoZSxyLG4sYz17fSl7c3dpdGNoKG8pe2Nhc2VcImNsaWVudFwiOnJldHVybiB3KHIsbik7Y2FzZVwic2VydmVyXCI6e2NvbnN0IHM9dC5oKCk7cmV0dXJuIG5ldyBQcm9taXNlKGE9PntjLm5vUmV0fHwoZi5fX3JwY1BlbmRpbmdbc109e3Jlc29sdmU6YSxwbGF5ZXI6ZX0pO2NvbnN0IGw9e3JlcToxLGlkOnMsbmFtZTpyLGVudjpvLGFyZ3M6biwuLi5jfTtlLmNhbGwoaSxbdC5nKGwpXSl9KX1jYXNlXCJjZWZcIjp7Y29uc3QgZT10LmgoKTtyZXR1cm4gZltzXS50aGVuKHM9Pm5ldyBQcm9taXNlKGE9PntjLm5vUmV0fHwoZi5fX3JwY1BlbmRpbmdbZV09e3Jlc29sdmU6YX0pO2NvbnN0IGw9e2I6cyxyZXE6MSxpZDplLG5hbWU6cixlbnY6byxhcmdzOm4sLi4uY307bXAudHJpZ2dlcihpLHQuZyhsKSl9KSl9fX1mdW5jdGlvbiB5KGUscixuLGM9e30pe3N3aXRjaChvKXtjYXNlXCJjbGllbnRcIjppZihjPW58fHt9LG49cixyPWUsZT1udWxsLGFyZ3VtZW50cy5sZW5ndGg8MXx8YXJndW1lbnRzLmxlbmd0aD4zfHxcInN0cmluZ1wiIT10eXBlb2YgcilyZXR1cm4gdC5kKCdjYWxsQ2xpZW50IGZyb20gdGhlIGNsaWVudCBleHBlY3RzIDEgdG8gMyBhcmd1bWVudHM6IFwibmFtZVwiLCBvcHRpb25hbCBcImFyZ3NcIiwgYW5kIG9wdGlvbmFsIFwib3B0aW9uc1wiJyk7YnJlYWs7Y2FzZVwic2VydmVyXCI6aWYoYXJndW1lbnRzLmxlbmd0aDwyfHxhcmd1bWVudHMubGVuZ3RoPjR8fFwib2JqZWN0XCIhPXR5cGVvZiBlKXJldHVybiB0LmQoJ2NhbGxDbGllbnQgZnJvbSB0aGUgc2VydmVyIGV4cGVjdHMgMiB0byA0IGFyZ3VtZW50czogXCJwbGF5ZXJcIiwgXCJuYW1lXCIsIG9wdGlvbmFsIFwiYXJnc1wiLCBhbmQgb3B0aW9uYWwgXCJvcHRpb25zXCInKTticmVhaztjYXNlXCJjZWZcIjppZihjPW58fHt9LG49cixyPWUsZT1udWxsLGFyZ3VtZW50cy5sZW5ndGg8MXx8YXJndW1lbnRzLmxlbmd0aD4zfHxcInN0cmluZ1wiIT10eXBlb2YgcilyZXR1cm4gdC5kKCdjYWxsQ2xpZW50IGZyb20gdGhlIGJyb3dzZXIgZXhwZWN0cyAxIHRvIDMgYXJndW1lbnRzOiBcIm5hbWVcIiwgb3B0aW9uYWwgXCJhcmdzXCIsIGFuZCBvcHRpb25hbCBcIm9wdGlvbnNcIicpfWxldCBzPXt9O3JldHVybiBjLm5vUmV0JiYocy5ub1JldD0xKSx0LmYoYihlLHIsbixzKSxjLnRpbWVvdXQpfWZ1bmN0aW9uIGsoZSxyLG4sYz17fSl7cmV0dXJuIG5ldyBQcm9taXNlKHM9Pntjb25zdCBpPXQuaCgpO2Mubm9SZXR8fChmLl9fcnBjUGVuZGluZ1tpXT17cmVzb2x2ZTpzfSksZyhlLHtyZXE6MSxpZDppLG5hbWU6cixlbnY6byxhcmdzOm4sLi4uY30sITEpfSl9ZnVuY3Rpb24gUChlLHIsbixzPXt9KXtzd2l0Y2gobyl7Y2FzZVwiY2xpZW50XCI6Y29uc3Qgbz1mLl9fcnBjQnJvd3NlclByb2NlZHVyZXNbcl07aWYoIW8pcmV0dXJuIHQuZChjKTtjb25zdCBpPWYuX19ycGNCcm93c2Vyc1tvXTtyZXR1cm4gaSYmdC5iKGkpP2soaSxyLG4scyk6dC5kKGMpO2Nhc2VcInNlcnZlclwiOnJldHVybiBiKGUsXCJfX3JwYzpjYWxsQnJvd3NlcnNcIixbcixuLCtzLm5vUmV0XSxzKTtjYXNlXCJjZWZcIjpyZXR1cm4gYihudWxsLFwiX19ycGM6Y2FsbEJyb3dzZXJzXCIsW3Isbiwrcy5ub1JldF0scyl9fWZ1bmN0aW9uIEIoZSxyLG4sYz17fSl7bGV0IHMsaT17fTtzd2l0Y2gobyl7Y2FzZVwiY2xpZW50XCI6Y2FzZVwiY2VmXCI6aWYoYz1ufHx7fSxuPXIscj1lLGFyZ3VtZW50cy5sZW5ndGg8MXx8YXJndW1lbnRzLmxlbmd0aD4zKXJldHVybiB0LmQoJ2NhbGxCcm93c2VycyBmcm9tIHRoZSBjbGllbnQgb3IgYnJvd3NlciBleHBlY3RzIDEgdG8gMyBhcmd1bWVudHM6IFwibmFtZVwiLCBvcHRpb25hbCBcImFyZ3NcIiwgYW5kIG9wdGlvbmFsIFwib3B0aW9uc1wiJyk7Yy5ub1JldCYmKGkubm9SZXQ9MSkscz1QKG51bGwscixuLGkpO2JyZWFrO2Nhc2VcInNlcnZlclwiOmlmKGFyZ3VtZW50cy5sZW5ndGg8Mnx8YXJndW1lbnRzLmxlbmd0aD40KXJldHVybiB0LmQoJ2NhbGxCcm93c2VycyBmcm9tIHRoZSBzZXJ2ZXIgZXhwZWN0cyAyIHRvIDQgYXJndW1lbnRzOiBcInBsYXllclwiLCBcIm5hbWVcIiwgb3B0aW9uYWwgXCJhcmdzXCIsIGFuZCBvcHRpb25hbCBcIm9wdGlvbnNcIicpO2Mubm9SZXQmJihpLm5vUmV0PTEpLHM9UChlLHIsbixpKX1pZihzKXJldHVybiB0LmYocyxjLnRpbWVvdXQpfWZ1bmN0aW9uIHgoZSxyLG4sYz17fSl7aWYoXCJjbGllbnRcIiE9PW8pcmV0dXJuIHQuZChcImNhbGxCcm93c2VyIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGhlIGNsaWVudCBlbnZpcm9ubWVudFwiKTtpZihhcmd1bWVudHMubGVuZ3RoPDJ8fGFyZ3VtZW50cy5sZW5ndGg+NClyZXR1cm4gdC5kKCdjYWxsQnJvd3NlciBleHBlY3RzIDIgdG8gNCBhcmd1bWVudHM6IFwiYnJvd3NlclwiLCBcIm5hbWVcIiwgb3B0aW9uYWwgXCJhcmdzXCIsIGFuZCBvcHRpb25hbCBcIm9wdGlvbnNcIicpO2xldCBzPXt9O3JldHVybiBjLm5vUmV0JiYocy5ub1JldD0xKSx0LmYoayhlLHIsbixzKSxjLnRpbWVvdXQpfWZ1bmN0aW9uIFIoZSxyLG4pe2NvbnN0IHQ9Zi5fX3JwY0V2TGlzdGVuZXJzW2VdO3QmJnQuZm9yRWFjaChlPT5lKHIsbikpfWZ1bmN0aW9uIGooZSxyKXtpZigyIT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdydvbiBleHBlY3RzIDIgYXJndW1lbnRzOiBcIm5hbWVcIiBhbmQgXCJjYlwiJztjb25zdCBuPWYuX19ycGNFdkxpc3RlbmVyc1tlXXx8bmV3IFNldDtyZXR1cm4gbi5hZGQociksZi5fX3JwY0V2TGlzdGVuZXJzW2VdPW4sKCk9Pk8oZSxyKX1mdW5jdGlvbiBPKGUscil7aWYoMiE9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cnb2ZmIGV4cGVjdHMgMiBhcmd1bWVudHM6IFwibmFtZVwiIGFuZCBcImNiXCInO2NvbnN0IG49Zi5fX3JwY0V2TGlzdGVuZXJzW2VdO24mJm4uZGVsZXRlKHIpfWZ1bmN0aW9uIEMoZSxyKXtpZihhcmd1bWVudHMubGVuZ3RoPDF8fGFyZ3VtZW50cy5sZW5ndGg+Mil0aHJvdyd0cmlnZ2VyIGV4cGVjdHMgMSBvciAyIGFyZ3VtZW50czogXCJuYW1lXCIsIGFuZCBvcHRpb25hbCBcImFyZ3NcIic7UihlLHIse2Vudmlyb25tZW50Om99KX1mdW5jdGlvbiBTKGUscixuKXtzd2l0Y2gobyl7Y2FzZVwiY2xpZW50XCI6aWYobj1yLHI9ZSxlPW51bGwsYXJndW1lbnRzLmxlbmd0aDwxfHxhcmd1bWVudHMubGVuZ3RoPjJ8fFwic3RyaW5nXCIhPXR5cGVvZiByKXRocm93J3RyaWdnZXJDbGllbnQgZnJvbSB0aGUgY2xpZW50IGV4cGVjdHMgMSBvciAyIGFyZ3VtZW50czogXCJuYW1lXCIsIGFuZCBvcHRpb25hbCBcImFyZ3NcIic7YnJlYWs7Y2FzZVwic2VydmVyXCI6aWYoYXJndW1lbnRzLmxlbmd0aDwyfHxhcmd1bWVudHMubGVuZ3RoPjN8fFwib2JqZWN0XCIhPXR5cGVvZiBlKXRocm93J3RyaWdnZXJDbGllbnQgZnJvbSB0aGUgc2VydmVyIGV4cGVjdHMgMiBvciAzIGFyZ3VtZW50czogXCJwbGF5ZXJcIiwgXCJuYW1lXCIsIGFuZCBvcHRpb25hbCBcImFyZ3NcIic7YnJlYWs7Y2FzZVwiY2VmXCI6aWYobj1yLHI9ZSxlPW51bGwsYXJndW1lbnRzLmxlbmd0aDwxfHxhcmd1bWVudHMubGVuZ3RoPjJ8fFwic3RyaW5nXCIhPXR5cGVvZiByKXRocm93J3RyaWdnZXJDbGllbnQgZnJvbSB0aGUgYnJvd3NlciBleHBlY3RzIDEgb3IgMiBhcmd1bWVudHM6IFwibmFtZVwiLCBhbmQgb3B0aW9uYWwgXCJhcmdzXCInfWIoZSx1LFtyLG5dLHtub1JldDoxfSl9ZnVuY3Rpb24gRShlLHIpe2lmKGFyZ3VtZW50cy5sZW5ndGg8MXx8YXJndW1lbnRzLmxlbmd0aD4yKXRocm93J3RyaWdnZXJTZXJ2ZXIgZXhwZWN0cyAxIG9yIDIgYXJndW1lbnRzOiBcIm5hbWVcIiwgYW5kIG9wdGlvbmFsIFwiYXJnc1wiJztfKHUsW2Uscl0se25vUmV0OjF9KX1mdW5jdGlvbiBMKGUscixuKXtzd2l0Y2gobyl7Y2FzZVwiY2xpZW50XCI6Y2FzZVwiY2VmXCI6aWYobj1yLHI9ZSxlPW51bGwsYXJndW1lbnRzLmxlbmd0aDwxfHxhcmd1bWVudHMubGVuZ3RoPjIpdGhyb3cndHJpZ2dlckJyb3dzZXJzIGZyb20gdGhlIGNsaWVudCBvciBicm93c2VyIGV4cGVjdHMgMSBvciAyIGFyZ3VtZW50czogXCJuYW1lXCIsIGFuZCBvcHRpb25hbCBcImFyZ3NcIic7YnJlYWs7Y2FzZVwic2VydmVyXCI6aWYoYXJndW1lbnRzLmxlbmd0aDwyfHxhcmd1bWVudHMubGVuZ3RoPjMpdGhyb3cndHJpZ2dlckJyb3dzZXJzIGZyb20gdGhlIHNlcnZlciBleHBlY3RzIDIgb3IgMyBhcmd1bWVudHM6IFwicGxheWVyXCIsIFwibmFtZVwiLCBhbmQgb3B0aW9uYWwgXCJhcmdzXCInfWIoZSxwLFtyLG5dLHtub1JldDoxfSl9ZnVuY3Rpb24gTShlLHIsbil7aWYoXCJjbGllbnRcIiE9PW8pdGhyb3dcImNhbGxCcm93c2VyIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGhlIGNsaWVudCBlbnZpcm9ubWVudFwiO2lmKGFyZ3VtZW50cy5sZW5ndGg8Mnx8YXJndW1lbnRzLmxlbmd0aD40KXRocm93J2NhbGxCcm93c2VyIGV4cGVjdHMgMiBvciAzIGFyZ3VtZW50czogXCJicm93c2VyXCIsIFwibmFtZVwiLCBhbmQgb3B0aW9uYWwgXCJhcmdzXCInO2soZSx1LFtyLG5dLHtub1JldDoxfSl9ci5kZWZhdWx0PXtyZWdpc3RlcjpkLHVucmVnaXN0ZXI6aCxjYWxsOncsY2FsbFNlcnZlcjp2LGNhbGxDbGllbnQ6eSxjYWxsQnJvd3NlcnM6QixjYWxsQnJvd3Nlcjp4LG9uOmosb2ZmOk8sdHJpZ2dlcjpDLHRyaWdnZXJTZXJ2ZXI6RSx0cmlnZ2VyQ2xpZW50OlMsdHJpZ2dlckJyb3dzZXJzOkwsdHJpZ2dlckJyb3dzZXI6TX19LmNhbGwodGhpcyxuKDIpKX0sZnVuY3Rpb24oZSxyKXt2YXIgbjtuPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e249bnx8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaChlKXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYobj13aW5kb3cpfWUuZXhwb3J0cz1ufV0pfSkpOyJdLCJzb3VyY2VSb290IjoiIn0=