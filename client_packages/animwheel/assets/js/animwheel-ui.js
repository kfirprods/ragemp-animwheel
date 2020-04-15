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
var rage_rpc_animation_data_provider_1 = require("./animation-data-providers/rage-rpc-animation-data-provider");
var ragemp_animwheel_types_1 = require("ragemp-animwheel-types");
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
        if (item instanceof ragemp_animwheel_types_1.AnimationCategory) {
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
            // TODO: Hide instead of clearing
            $('#wheel-container').empty();
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
    Controller.prototype.createWheel = function (items) {
        var _this = this;
        console.log("Creating wheel for items: " + items);
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
            // Add the item to the page
            categoryTemplateContainer.appendTo(wheelContainer);
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
//# sourceMappingURL=animwheel-ui.js.map