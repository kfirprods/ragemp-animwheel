"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeferredPromise = /** @class */ (function () {
    function DeferredPromise(executor) {
        var _this = this;
        this.underlyingPromise = new Promise(function (resolve, reject) {
            _this.reject = reject;
            _this.resolve = resolve;
            executor();
        });
    }
    return DeferredPromise;
}());
exports.default = DeferredPromise;
//# sourceMappingURL=deferred-promise.js.map