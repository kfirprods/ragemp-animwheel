import AnimwheelSlot from '../models/animwheel-slot.type';
import { IAnimationDataProvider } from './animation-data-provider';
import * as rpc from "rage-rpc";
import DeferredPromise from '../utils/deferred-promise';
import LiteEvent from '../utils/lite-event';
import InvalidAnimationNameError from '../exceptions/invalid-animation-name.exception';


export class RageRpcAnimationDataProvider implements IAnimationDataProvider {
    updatePromise: DeferredPromise<AnimwheelSlot>;
    private readonly onEscape = new LiteEvent<void>();

    constructor() {
        rpc.register('UpdateFavoriteAnimation_Success', slot => { this.handleUpdateSuccess(slot) });
        rpc.register('UpdateFavoriteAnimation_Failed', animationActionName => { this.handleUpdateFailed(animationActionName); });
        rpc.register('EscapeClicked', () => { this.onEscape.trigger(); });
    }

    async getFavoriteAnimations(): Promise<AnimwheelSlot[]> {
        return await rpc.callClient<AnimwheelSlot[]>('Animwheel_GetFavoriteAnimations');
    }

    updateFavoriteAnimation(slotIndex: number, animationActionName: string): Promise<AnimwheelSlot> {
        this.updatePromise = new DeferredPromise(() => {
            rpc.callClient('Animwheel_UpdateFavoriteAnimation', { slotIndex, animationActionName });
        });

        return this.updatePromise.underlyingPromise;
    }

    playAnimation(animationActionName: string) {
        rpc.callClient('Animwheel_PlayAnimation', animationActionName);
    }

    notifyEditorVisibility(isVisible: boolean) {
        rpc.callClient('Animwheel_EditorVisibilityChanged', isVisible);
    }

    public get OnEscape() { return this.onEscape.expose(); } 

    private handleUpdateSuccess(slot: AnimwheelSlot) {
        if (this.updatePromise) {
            this.updatePromise.resolve(slot);
        }
    }

    private handleUpdateFailed(animationActionName) {
        if (this.updatePromise) {
            this.updatePromise.reject(new InvalidAnimationNameError(animationActionName));
        }
    }
}
