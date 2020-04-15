import { AnimationCategory } from 'ragemp-animwheel-types';
import { IAnimationDataProvider } from './animation-data-provider';
import * as rpc from "rage-rpc";

export class RageRpcAnimationDataProvider implements IAnimationDataProvider {
    constructor() {
        
    }

    async getCategories(): Promise<AnimationCategory[]> {
        return await rpc.callServer<AnimationCategory[]>('getAnimationCategories');
    }

    playAnimation(animation) {
        rpc.callServer('playAnimation', animation);
    }
}
