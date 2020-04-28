import { ILiteEvent } from '../utils/lite-event';
import AnimwheelSlot from "../models/animwheel-slot.type";

export interface IAnimationDataProvider {
    // Get the user's animations to display on the wheel
    getFavoriteAnimations(): Promise<AnimwheelSlot[]>;

    // Attempt to update an animation at a given slot; upon failure, throw InvalidAnimationNameError
    updateFavoriteAnimation(slotIndex: number, animationActionName: string): Promise<AnimwheelSlot>;

    // Ask the client to play a chosen animation
    playAnimation(animationActionName: string): void;

    // Ask the client to stop playing a chosen animation
    stopAnimation(): void;

    // Notify the client whether a user is interacting with the animwheel editor
    notifyEditorVisibility(isVisible: boolean);

    OnEscape: ILiteEvent<void>;
}
