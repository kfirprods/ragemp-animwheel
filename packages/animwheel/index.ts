import { AnimationCategory } from 'ragemp-animwheel-types';
import { AnimationFlags } from './enums/animation-flags.enum';
import AnimData from "./models/anim-data.type";
import AnimwheelSlot from './models/animwheel-slot.type';

// This is the main list that contains all animations
const animations = [
    new AnimData("sit", "Sitting", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "switch@michael@sitting", "idle"),
    new AnimData("sit2", "Sitting", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_stupor@male@base", "base"),
    new AnimData("sit3", "Sitting", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "timetable@michael@on_sofaidle_a", "sit_sofa_a"),

    new AnimData("liedown1", "Laying", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.StopOnLastFrame | AnimationFlags.AllowPlayerControl), "amb@world_human_sit_ups@male@enter", "enter"),
    new AnimData("liedown2", "Laying", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.StopOnLastFrame | AnimationFlags.AllowPlayerControl), "amb@world_human_sunbathe@female@back@enter", "enter"),
    new AnimData("liedown3", "Laying", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.StopOnLastFrame | AnimationFlags.AllowPlayerControl), "amb@world_human_sunbathe@female@front@enter", "enter"),
    new AnimData("groundhurt1", "Laying", -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "combat@damage@rb_writhe", "rb_writhe_loop"),
    new AnimData("groundhurt2", "Laying", -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "combat@damage@writhe", "writhe_loop"),

    new AnimData("crossarms1", "Standing", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.StopOnLastFrame | AnimationFlags.AllowPlayerControl), "amb@world_human_stand_guard@male@enter", "enter"),
    new AnimData("crossarms2", "Standing", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.StopOnLastFrame | AnimationFlags.AllowPlayerControl), "amb@world_human_stand_impatient@female@no_sign@base", "base"),
    new AnimData("thinking", "Standing", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@code_human_police_investigate@idle_a", "idle_a"),
    new AnimData("idle1", "Standing", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@code_human_cross_road@male@idle_a", "idle_e"),
    new AnimData("idle2", "Standing", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@code_human_cross_road@male@base", "base"),

    new AnimData("wave", "Expressions", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "anim@mp_player_intcelebrationmale@wave", "wave"),
    new AnimData("loco", "Expressions", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "anim@mp_player_intcelebrationmale@you_loco", "you_loco"),
    new AnimData("ok", "Expressions", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "anim@mp_player_intselfiedock", "idle_a"),
    new AnimData("thumbsup", "Expressions", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "anim@mp_player_intincarthumbs_upstd@ds@", "idle_a"),

    new AnimData("lean", "Leaning", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_leaning@male@wall@back@hands_together@idle_a", "idle_a"),
    new AnimData("leanfoot", "Leaning", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@world_human_leaning@male@wall@back@foot_up@idle_a", "idle_a"),
    new AnimData("leancar", "Leaning", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "switch@michael@sitting_on_car_bonnet", "sitting_on_car_bonnet_loop"),
    new AnimData("leanrail", "Leaning", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "missstrip_club_lean", "player_lean_rail_loop"),

    new AnimData("groundhurt1", "Ground", -1, "null", new mp.Vector3(0, 0, -6), new mp.Vector3(0, 0, -2), (AnimationFlags.Loop  | AnimationFlags.AllowPlayerControl), "combat@damage@rb_writhe", "rb_writhe_loop"),

    new AnimData("handsup", "Surrender", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "missfbi5ig_20b", "hands_up_scientist"),
    new AnimData("handsup2", "Surrender", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl | AnimationFlags.OnlyAnimateUpperBody), "missminuteman_1ig_2", "handsup_base"),
    new AnimData("halt", "Surrender", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "amb@code_human_police_crowd_control@idle_a", "idle_a"),
    new AnimData("handsupknees", "Surrender", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "busted", "idle_b"),
    new AnimData("handsupknees2", "Surrender", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.Loop | AnimationFlags.AllowPlayerControl), "random@arrests", "kneeling_arrest_idle"),

    new AnimData("point", "Social", -1, "null", new mp.Vector3(0.0, 0.0, 0.0), new mp.Vector3(0.0, 0.0, 0.0), (AnimationFlags.StopOnLastFrame | AnimationFlags.OnlyAnimateUpperBody | AnimationFlags.AllowPlayerControl), "oddjobs@suicide", "bystander_pointinto"),
]

function getAnimDataByActionName(animationActionName: string): AnimData {
    var matchingAnimations = animations.filter(anim => anim.action == animationActionName);
    if (matchingAnimations.length == 0) {
        return null;
    }
    else {
        return matchingAnimations[0];
    }
}

function getDefaultFavoriteAnimations(): AnimwheelSlot[] {
    return ["sit", "liedown1", "crossarms1", "wave", "loco", "lean", "handsup", "handsupknees", "point", "groundhurt1"].map(defaultAnimName =>
        getAnimDataByActionName(defaultAnimName)).map((defaultAnim, index) =>
            new AnimwheelSlot(index, defaultAnim.action, defaultAnim.category));
}

const playerFavoriteAnimations = new Map<string, AnimwheelSlot[]>(); // Map socialClub to slots; in a real server this would be in a DB

function getFavoriteAnimations(player: PlayerMp) {
    if (!(playerFavoriteAnimations.has(player.socialClub))) {
        playerFavoriteAnimations.set(player.socialClub, getDefaultFavoriteAnimations());
    }

    return playerFavoriteAnimations.get(player.socialClub);
}

// Server's endpoint for letting the client play animations
mp.events.add('PlayAnimation', (player, action) => {
    player.stopAnimation();

    const animData = getAnimDataByActionName(action);
    if (animData == null) {
        // This only happens if the client provided a non-existent animation name (NOTE: shouldn't happen with the animwheel)
        return;
    }

    player.playAnimation(animData.rageDictKey, animData.rageDictValue, 1, animData.animFlag);
});

// Server's endpoint for letting users edit their favorites
mp.events.add('UpdateFavoriteAnimation', (player: PlayerMp, slot: number, animationActionName: string) => {
    const updatedAnimData = getAnimDataByActionName(animationActionName);

    if (updatedAnimData == null) {
        player.call('UpdateFavoriteAnimation_Failed', [animationActionName]);
        return;
    }

    // Update the server-side favorites store
    const currentFavorites = playerFavoriteAnimations.get(player.socialClub);
    const currentSlot = currentFavorites.find(favorite => favorite.slot == slot);
    currentSlot.animation = updatedAnimData.action;
    currentSlot.category = updatedAnimData.category;

    // This will cause the client to update the data, as well as allow it to stop displaying the loading animation
    player.call('UpdateFavoriteAnimation_Success', [slot, currentSlot.animation, currentSlot.category]);
});

mp.events.add('playerJoin', (player) => {
    // When a player joins the server, inform the animwheel client code what the favorite anims are
    player.call('SetFavoriteAnimations', [getFavoriteAnimations(player)]);
});

mp.events.addCommand('stopanim', (player) => {
    player.stopAnimation();
});