import { AnimationCategory, Animation } from 'ragemp-animwheel-types';

export interface IAnimationDataProvider {
    getCategories(): Promise<AnimationCategory[]>;
    playAnimation(animation: Animation);
}
