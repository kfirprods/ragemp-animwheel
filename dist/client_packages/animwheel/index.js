"use strict";
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
var rpc = __importStar(require("rage-rpc"));
var animwheel_slot_type_1 = __importDefault(require("animwheel/models/animwheel-slot.type"));
var browser_controller_1 = __importDefault(require("animwheel/browser-controller"));
var KEY_ESC = 27;
var KEY_O = 0x4F;
var TOGGLE_ANIMWHEEL_KEY = KEY_O;
var isCefActive = false;
var favoriteAnimations = new Array();
var animwheelBrowserController = new browser_controller_1.default('package://animwheel/cef/animwheel.html');
function toggleAnimWheel() {
    if (animwheelBrowserController.isVisible) {
        animwheelBrowserController.hide();
        return;
    }
    // If the cursor is visible (e.g. user is typing in chat / another CEF window), don't show the animwheel
    if (mp.gui.cursor.visible) {
        return;
    }
    animwheelBrowserController.show();
}
// Bind a key to toggle the visibility of the animwheel
mp.keys.bind(TOGGLE_ANIMWHEEL_KEY, false, function () {
    // If the user is typing something in a CEF window, ignore the animwheel keybinding
    if (isCefActive) {
        return;
    }
    toggleAnimWheel();
});
mp.keys.bind(KEY_ESC, false, function () {
    if (animwheelBrowserController.isVisible) {
        rpc.callBrowser(animwheelBrowserController.browser, "EscapeClicked");
    }
});
// API for server
// Allow the server to set the animations
mp.events.add('SetFavoriteAnimations', function (newFavoriteAnimations) {
    favoriteAnimations = newFavoriteAnimations;
});
mp.events.add('UpdateFavoriteAnimation_Failed', function (animationActionName) {
    rpc.callBrowser(animwheelBrowserController.browser, 'UpdateFavoriteAnimation_Failed', animationActionName);
});
mp.events.add('UpdateFavoriteAnimation_Success', function (slot, animationActionName, animationCategory) {
    var updatedSlot = favoriteAnimations.find(function (anim) { return anim.slot == slot; });
    updatedSlot.animation = animationActionName;
    updatedSlot.category = animationCategory;
    rpc.callBrowser(animwheelBrowserController.browser, 'UpdateFavoriteAnimation_Success', new animwheel_slot_type_1.default(slot, animationActionName, animationCategory));
});
// API for CEF
rpc.register('Animwheel_GetFavoriteAnimations', function () {
    return favoriteAnimations;
});
rpc.register('Animwheel_PlayAnimation', function (animationActionName) {
    animwheelBrowserController.hide();
    mp.events.callRemote('PlayAnimation', animationActionName);
});
rpc.register('Animwheel_UpdateFavoriteAnimation', function (args) {
    mp.events.callRemote('UpdateFavoriteAnimation', args.slotIndex, args.animationActionName);
});
rpc.register('setCefActive', function (isActive) {
    mp.events.call('setCefActive', isActive);
});
// API for other client packages
mp.events.add('setCefActive', function (isActive) {
    isCefActive = isActive;
});
//# sourceMappingURL=index.js.map