"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KEY_O = 0x4F;
var animWheelBrowser = null;
function toggleAnimWheel() {
    if (animWheelBrowser != null) {
        animWheelBrowser.destroy();
        animWheelBrowser = null;
        mp.gui.cursor.show(false, false);
        mp.game.ui.displayRadar(true);
        return;
    }
    animWheelBrowser = mp.browsers.new('package://animwheel/animwheel.html');
    mp.gui.cursor.show(true, true);
    mp.game.ui.displayRadar(false);
}
mp.keys.bind(KEY_O, false, function () {
    toggleAnimWheel();
});
mp.events.add('animationItemClicked', function (animationKey, animationName, animationFlag) {
    mp.events.callRemote('PLAY_ANIMATION', animationKey, animationName, animationFlag);
});
//# sourceMappingURL=index.js.map