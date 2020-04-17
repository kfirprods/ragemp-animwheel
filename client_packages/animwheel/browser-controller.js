"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserController = /** @class */ (function () {
    function BrowserController(htmlFilePath, hideBrowser) {
        var _this = this;
        if (hideBrowser === void 0) { hideBrowser = true; }
        this._isVisible = false;
        // Create CEF browser when possible
        mp.events.add('guiReady', function () {
            if (!_this.browser) {
                _this.browser = mp.browsers.new(htmlFilePath);
                _this.hide();
            }
        });
    }
    BrowserController.prototype.hide = function () {
        if (!this.browser) {
            return;
        }
        this.browser.execute("$('body').hide()");
        mp.gui.cursor.show(false, false);
        mp.game.ui.displayRadar(true);
        mp.gui.chat.activate(true);
        this._isVisible = false;
    };
    BrowserController.prototype.show = function () {
        if (!this.browser) {
            return;
        }
        this.browser.reload(false);
        this.browser.execute("$('body').show()");
        mp.gui.cursor.show(true, true);
        mp.game.ui.displayRadar(false);
        mp.gui.chat.activate(false);
        this._isVisible = true;
    };
    Object.defineProperty(BrowserController.prototype, "isVisible", {
        get: function () {
            return this._isVisible;
        },
        enumerable: true,
        configurable: true
    });
    return BrowserController;
}());
exports.default = BrowserController;
//# sourceMappingURL=browser-controller.js.map