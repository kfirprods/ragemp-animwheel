import * as rpc from 'rage-rpc';
import AnimwheelSlot from './models/animwheel-slot.type';
import BrowserController from './browser-controller';
import { CLOSE_EDITOR_KEY, TOGGLE_ANIMWHEEL_KEY, CLIENT_PACKAGE_ROOT_PATH } from './animwheel-config';

var isCefActive = false;
var isEditingAnim = false;
var favoriteAnimations: AnimwheelSlot[] = new Array();

const animwheelBrowserController = new BrowserController(`package://${CLIENT_PACKAGE_ROOT_PATH}/cef/animwheel.html`);

function hideAnimWheel() {
    animwheelBrowserController.hide();
    mp.events.call('setCefActive', false);
    isEditingAnim = false;
}

function toggleAnimWheel() {
    if (animwheelBrowserController.isVisible) {
        hideAnimWheel();
        return;
    }

    // If the cursor is visible (e.g. user is typing in chat / another CEF window), don't show the animwheel
    if (mp.gui.cursor.visible) {
        return;
    }

    animwheelBrowserController.show();
    mp.events.call('setCefActive', true);
}

// Bind a key to toggle the visibility of the animwheel
mp.keys.bind(TOGGLE_ANIMWHEEL_KEY, false, function () {
    // Ignore the key if the user is typing something in our editor
    if (isEditingAnim) {
        return;
    }

    // Ignore the key if the user is typing something in another CEF window
    if (isCefActive && !animwheelBrowserController.isVisible) {
        return;
    }

    toggleAnimWheel();
});

// Bind a key to allow users to exit the editor (especially useful if they minimized the game and it's stuck on the map when they came back)
mp.keys.bind(CLOSE_EDITOR_KEY, false, function () {
    if (animwheelBrowserController.isVisible) {
        rpc.callBrowser(animwheelBrowserController.browser, "EscapeClicked");
    }
});

// API for server
function setFavoriteAnimations(newFavoriteAnimations: AnimwheelSlot[]): void {
    favoriteAnimations = newFavoriteAnimations;
}

// Allow the server to set the animations
mp.events.add('SetFavoriteAnimations', (newFavoriteAnimations: AnimwheelSlot[]) => {
    setFavoriteAnimations(newFavoriteAnimations);
});

// Allow the server to set the animations using a JSON of AnimwheelSlot array
mp.events.add('SetFavoriteAnimations_JSON', (newFavoriteAnimationsJson: string) => {
    setFavoriteAnimations(JSON.parse(newFavoriteAnimationsJson));
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
    hideAnimWheel();

    mp.events.callRemote('PlayAnimation', animationActionName);
});

rpc.register('Animwheel_StopAnimation', () => {
    hideAnimWheel();
    
    mp.events.callRemote('StopAnimation');
});

rpc.register('Animwheel_UpdateFavoriteAnimation', (args) => {
    mp.events.callRemote('UpdateFavoriteAnimation', args.slotIndex, args.animationActionName);
});

rpc.register('Animwheel_EditorVisibilityChanged', (isEditing: boolean) => {
    isEditingAnim = isEditing;
});

// API for other client packages
mp.events.add('setCefActive', (isActive: boolean) => {
    isCefActive = isActive;
});
