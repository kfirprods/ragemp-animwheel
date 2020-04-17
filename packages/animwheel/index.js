"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var animation_flags_enum_1 = require("./enums/animation-flags.enum");
var anim_data_type_1 = __importDefault(require("./models/anim-data.type"));
var animwheel_slot_type_1 = __importDefault(require("./models/animwheel-slot.type"));
// This is the main list that contains all animations
var animations = [
    new anim_data_type_1.default("sit", "Sitting", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "switch@michael@sitting", "idle"),
    new anim_data_type_1.default("sit2", "Sitting", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "amb@world_human_stupor@male@base", "base"),
    new anim_data_type_1.default("sit3", "Sitting", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "timetable@michael@on_sofaidle_a", "sit_sofa_a"),
    new anim_data_type_1.default("liedown1", "Laying", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.StopOnLastFrame | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "amb@world_human_sit_ups@male@enter", "enter"),
    new anim_data_type_1.default("liedown2", "Laying", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.StopOnLastFrame | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "amb@world_human_sunbathe@female@back@enter", "enter"),
    new anim_data_type_1.default("liedown3", "Laying", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.StopOnLastFrame | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "amb@world_human_sunbathe@female@front@enter", "enter"),
    new anim_data_type_1.default("groundhurt1", "Laying", -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "combat@damage@rb_writhe", "rb_writhe_loop"),
    new anim_data_type_1.default("groundhurt2", "Laying", -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "combat@damage@writhe", "writhe_loop"),
    new anim_data_type_1.default("crossarms1", "Standing", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.StopOnLastFrame | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "amb@world_human_stand_guard@male@enter", "enter"),
    new anim_data_type_1.default("crossarms2", "Standing", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.StopOnLastFrame | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "amb@world_human_stand_impatient@female@no_sign@base", "base"),
    new anim_data_type_1.default("thinking", "Standing", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "amb@code_human_police_investigate@idle_a", "idle_a"),
    new anim_data_type_1.default("idle1", "Standing", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "amb@code_human_cross_road@male@idle_a", "idle_e"),
    new anim_data_type_1.default("idle2", "Standing", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "amb@code_human_cross_road@male@base", "base"),
    new anim_data_type_1.default("wave", "Expressions", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "anim@mp_player_intcelebrationmale@wave", "wave"),
    new anim_data_type_1.default("loco", "Expressions", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "anim@mp_player_intcelebrationmale@you_loco", "you_loco"),
    new anim_data_type_1.default("ok", "Expressions", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "anim@mp_player_intselfiedock", "idle_a"),
    new anim_data_type_1.default("thumbsup", "Expressions", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "anim@mp_player_intincarthumbs_upstd@ds@", "idle_a"),
    new anim_data_type_1.default("lean", "Leaning", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "amb@world_human_leaning@male@wall@back@hands_together@idle_a", "idle_a"),
    new anim_data_type_1.default("leanfoot", "Leaning", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "amb@world_human_leaning@male@wall@back@foot_up@idle_a", "idle_a"),
    new anim_data_type_1.default("leancar", "Leaning", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "switch@michael@sitting_on_car_bonnet", "sitting_on_car_bonnet_loop"),
    new anim_data_type_1.default("leanrail", "Leaning", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "missstrip_club_lean", "player_lean_rail_loop"),
    new anim_data_type_1.default("groundhurt1", "Ground", -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "combat@damage@rb_writhe", "rb_writhe_loop"),
    new anim_data_type_1.default("handsup", "Surrender", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.OnlyAnimateUpperBody | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "missfbi5ig_20b", "hands_up_scientist"),
    new anim_data_type_1.default("handsup2", "Surrender", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl | animation_flags_enum_1.AnimationFlags.OnlyAnimateUpperBody), "missminuteman_1ig_2", "handsup_base"),
    new anim_data_type_1.default("halt", "Surrender", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "amb@code_human_police_crowd_control@idle_a", "idle_a"),
    new anim_data_type_1.default("handsupknees", "Surrender", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "busted", "idle_b"),
    new anim_data_type_1.default("handsupknees2", "Surrender", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.Loop | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "random@arrests", "kneeling_arrest_idle"),
    new anim_data_type_1.default("point", "Social", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (animation_flags_enum_1.AnimationFlags.StopOnLastFrame | animation_flags_enum_1.AnimationFlags.OnlyAnimateUpperBody | animation_flags_enum_1.AnimationFlags.AllowPlayerControl), "oddjobs@suicide", "bystander_pointinto"),
];
function getAnimDataByActionName(animationActionName) {
    var matchingAnimations = animations.filter(function (anim) { return anim.action == animationActionName; });
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
        return new animwheel_slot_type_1.default(index, defaultAnim.action, defaultAnim.category);
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
    player.playAnimation(animData.rageDictKey, animData.rageDictValue, 1, animData.animFlag);
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
    currentSlot.category = updatedAnimData.category;
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