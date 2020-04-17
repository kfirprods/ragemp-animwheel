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
/* Consts */
var minimumWheelItems = 5;
var itemRadius = 96; // TODO: Get that from the CSS class using JQuery
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
        this.radius = containerRadius - (itemRadius / 2);
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
    // TODO: Move to gui managing component
    Controller.prototype.createWheelItemContainerFromTemplate = function (wheelItem) {
        var _this = this;
        var wheelItemTemplateContainer = $("<div data-id=\"" + wheelItem.id + "\">");
        // @ts-ignore  loadTemplate isn't recognized, but it'll be imported by the HTML file
        wheelItemTemplateContainer.loadTemplate($('#wheelitem-template'), wheelItem);
        // Position the item on the wheel
        wheelItemTemplateContainer.css('position', 'absolute');
        wheelItemTemplateContainer.css('left', wheelItem.x + "px");
        wheelItemTemplateContainer.css('top', wheelItem.y + "px");
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
        var idealContainerDiameter = (items.length / 2) * (itemRadius + 16);
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
    switch (category.toLowerCase()) {
        case "food & drink": {
            category = "food.svg";
            break;
        }
        case "ground": {
            category = "laying.svg";
            break;
        }
    }
    return "assets/img/categories/" + category.toLowerCase() + ".svg";
}
//# sourceMappingURL=animwheel-ui.js.map