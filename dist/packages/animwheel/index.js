"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var animwheel_slot_type_1 = __importDefault(require("./models/animwheel-slot.type"));
var animations_1 = require("./animations");
function getAnimDataByActionName(animationActionName) {
    var matchingAnimations = animations_1.AllAnimations.filter(function (anim) { return anim.action == animationActionName; });
    if (matchingAnimations.length == 0) {
        return null;
    }
    else {
        return matchingAnimations[0];
    }
}
function getDefaultFavoriteAnimations() {
    return ["sit", "liedown1", "crossarms1", "wave", "loco", "lean", "handsup", "handsupknees", "point", "groundhurt1"].map(function (defaultAnimName) {
        return getAnimDataByActionName(defaultAnimName);
    }).map(function (defaultAnim, index) {
        return new animwheel_slot_type_1.default(index, defaultAnim.action, defaultAnim.category.toString());
    });
}
var playerFavoriteAnimations = new Map(); // Map socialClub to slots; in a real server this would be in a DB
function getFavoriteAnimations(player) {
    if (!(playerFavoriteAnimations.has(player.socialClub))) {
        playerFavoriteAnimations.set(player.socialClub, getDefaultFavoriteAnimations());
    }
    return playerFavoriteAnimations.get(player.socialClub);
}
// Server's endpoint for letting the client play animations
mp.events.add('PlayAnimation', function (player, action) {
    player.stopAnimation();
    var animData = getAnimDataByActionName(action);
    if (animData == null) {
        // This only happens if the client provided a non-existent animation name (NOTE: shouldn't happen with the animwheel)
        return;
    }
    player.playAnimation(animData.rageDictKey, animData.rageDictValue, 2, animData.animFlag);
});
// Server's endpoint for letting users edit their favorites
mp.events.add('UpdateFavoriteAnimation', function (player, slot, animationActionName) {
    var updatedAnimData = getAnimDataByActionName(animationActionName);
    if (updatedAnimData == null) {
        player.call('UpdateFavoriteAnimation_Failed', [animationActionName]);
        return;
    }
    // Update the server-side favorites store
    var currentFavorites = playerFavoriteAnimations.get(player.socialClub);
    var currentSlot = currentFavorites.find(function (favorite) { return favorite.slot == slot; });
    currentSlot.animation = updatedAnimData.action;
    currentSlot.category = updatedAnimData.category.toString();
    // This will cause the client to update the data, as well as allow it to stop displaying the loading animation
    player.call('UpdateFavoriteAnimation_Success', [slot, currentSlot.animation, currentSlot.category]);
});
mp.events.add('playerJoin', function (player) {
    // When a player joins the server, inform the animwheel client code what the favorite anims are
    player.call('SetFavoriteAnimations', [getFavoriteAnimations(player)]);
});
mp.events.addCommand('stopanim', function (player) {
    player.stopAnimation();
});
//# sourceMappingURL=index.js.map