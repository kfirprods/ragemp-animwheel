import * as rpc from 'rage-rpc';
import AnimwheelSlot from "animwheel/models/animwheel-slot.type";
import BrowserController from 'animwheel/browser-controller';

const KEY_ESC = 27;
const KEY_O = 0x4F;
const TOGGLE_ANIMWHEEL_KEY = KEY_O;

let isCefActive = false;
let favoriteAnimations: AnimwheelSlot[] = new Array();

const animwheelBrowserController = new BrowserController('package://animwheel/cef/animwheel.html');

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

mp.keys.bind(KEY_ESC, false, function() {
    if (animwheelBrowserController.isVisible) {
        rpc.callBrowser(animwheelBrowserController.browser, "EscapeClicked");
    }
});

// API for server
// Allow the server to set the animations
mp.events.add('SetFavoriteAnimations', (newFavoriteAnimations: AnimwheelSlot[]) => {
    favoriteAnimations = newFavoriteAnimations;
});

mp.events.add('UpdateFavoriteAnimation_Failed', (animationActionName: string) => {
    rpc.callBrowser(animwheelBrowserController.browser, 'UpdateFavoriteAnimation_Failed', animationActionName);
});

mp.events.add('UpdateFavoriteAnimation_Success', (slot: number, animationActionName: string, animationCategory: string) => {
    const updatedSlot = favoriteAnimations.find(anim => anim.slot == slot);
    updatedSlot.animation = animationActionName;
    updatedSlot.category = animationCategory;

    rpc.callBrowser(animwheelBrowserController.browser, 'UpdateFavoriteAnimation_Success', new AnimwheelSlot(slot, animationActionName, animationCategory));
});

// API for CEF
rpc.register('Animwheel_GetFavoriteAnimations', () => {
    return favoriteAnimations;
});

rpc.register('Animwheel_PlayAnimation', (animationActionName) => {
    animwheelBrowserController.hide();
    mp.events.callRemote('PlayAnimation', animationActionName);
});

rpc.register('Animwheel_UpdateFavoriteAnimation', (args) => {
    mp.events.callRemote('UpdateFavoriteAnimation', args.slotIndex, args.animationActionName);
});

rpc.register('setCefActive', (isActive: boolean)=>{
    mp.events.call('setCefActive', isActive);
});

// API for other client packages
mp.events.add('setCefActive', (isActive: boolean) => {
    isCefActive = isActive;
});
