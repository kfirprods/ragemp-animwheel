import {AnimData} from "./models/anim-data.type";
import AnimwheelSlot from './models/animwheel-slot.type';
import { AllAnimations } from "./animations";


function getAnimDataByActionName(animationActionName: string): AnimData {
    var matchingAnimations = AllAnimations.filter(anim => anim.action == animationActionName);
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
            new AnimwheelSlot(index, defaultAnim.action, defaultAnim.category.toString()));
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

    player.playAnimation(animData.rageDictKey, animData.rageDictValue, 2, animData.animFlag);
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
    currentSlot.category = updatedAnimData.category.toString();

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