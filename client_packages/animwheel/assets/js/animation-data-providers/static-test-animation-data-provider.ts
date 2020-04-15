import { AnimationCategory, Animation } from 'ragemp-animwheel-types';
import { IAnimationDataProvider } from './animation-data-provider';


export class StaticTestAnimationDataProvider implements IAnimationDataProvider {
    constructor() {

    }

    async getCategories() {
        // Sleep 1.5 seconds to simulate latency with server
        await new Promise(resolve => setTimeout(resolve, 1500));

        return Promise.resolve(new Array(
            new AnimationCategory("Sitting", "assets/img/sitting.svg", new Array(
                new Animation("sit1", "assets/img/sitting.svg", "a", "b", 0),
                new Animation("sit2", "assets/img/sitting.svg", "a", "b", 0),
            )),
            new AnimationCategory("Ground", "assets/img/ground.svg", new Array(
                new Animation("sit1", "assets/img/sitting.svg", "a", "b", 0),
                new Animation("sit2", "assets/img/sitting.svg", "a", "b", 0),
            ))
        ));
    }

    playAnimation(animation: Animation) {
        console.log(`Playing ${animation.name}`);
    }
}
