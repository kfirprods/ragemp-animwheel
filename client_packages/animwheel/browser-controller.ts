export default class BrowserController {
    browser: BrowserMp;

    constructor(htmlFilePath: string, hideBrowser = true) {
        // Create CEF browser when possible
        mp.events.add('guiReady', () => {
            if (!this.browser) {
                this.browser = mp.browsers.new(htmlFilePath);
                this.hide();
            }
        });
    }

    hide() {
        if (!this.browser) {
            return;
        }

        this.browser.execute("$('body').hide()");
        mp.gui.cursor.show(false, false);
        mp.game.ui.displayRadar(true);
        mp.gui.chat.activate(true);

        this._isVisible = false;
    }

    show() {
        if (!this.browser) {
            return;
        }

        this.browser.reload(false);
        this.browser.execute("$('body').show()");
        mp.gui.cursor.show(true, true);
        mp.game.ui.displayRadar(false);
        mp.gui.chat.activate(false);

        this._isVisible = true;
    }

    private _isVisible = false;

    get isVisible(): boolean {
        return this._isVisible;
    }
}
