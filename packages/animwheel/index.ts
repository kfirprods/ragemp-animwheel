import * as mysql from "mysql2/promise";
import * as rpc from 'rage-rpc';

import { AnimationCategory, Animation } from 'ragemp-animwheel-types';

var mysqlConnection = mysql.createConnection({
    // Change this
    user: 'animwheelAdmin',
    password: '1234',
    database: 'sys'
});

mysqlConnection.then(
    () => {
        console.log('Animwheel MySQL connected')
    }, error => {
        console.log(`Animwheel MySQL error: ${error}`);
    }
);

console.log('Animwheel package is running');

mp.events.add('PLAY_ANIMATION', (player, animation_key, animation_name, animation_flag) => {
    player.stopAnimation();
    player.playAnimation(animation_key, animation_name, 1, animation_flag);
});

rpc.register('getAnimationCategories', async () => {

    const db = await mysqlConnection;
    const [categoryRows, categoryFields] = await db.execute("SELECT * FROM animation_categories");
    const [animationRows, animationFields] = await db.execute("SELECT * FROM animations");

    // @ts-ignore
    return categoryRows.map(categoryRow => {
        return new AnimationCategory(
            categoryRow.Name,
            categoryRow.IconFilePath,
            // @ts-ignore
            animationRows.filter(animationRow => animationRow.CategoryName === categoryRow.Name).map(animationRow =>
                new Animation(animationRow.DisplayName, animationRow.IconFilePath, animationRow.RageDictKey, animationRow.RageDictName, animationRow.Flag))
        );
    });
});

rpc.register('playAnimation', async (animation: Animation, info) => {
    info.player.stopAnimation();
    info.player.playAnimation(animation.rageDictKey, animation.rageDictValue, 1, animation.flag);
});
