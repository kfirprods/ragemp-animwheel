"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RageRpcAnimationDataProvider {
    constructor(rpcProvider) {
        this.rpcProvider = rpcProvider;
    }
    async getCategories() {
        return await this.rpcProvider.call('getAnimationCategories');
    }
    playAnimation(animation) {
        this.rpcProvider.callServer('playAnimation', animation);
    }
}
exports.RageRpcAnimationDataProvider = RageRpcAnimationDataProvider;
//# sourceMappingURL=rage-rpc-animation-data-provider copy.js.map