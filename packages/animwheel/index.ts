import * as mysql from "mysql2/promise";
import * as rpc from 'rage-rpc';

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

rpc.register('getAnimationWheelCategories', async () => {
    const db = await mysqlConnection;
    const [rows, fields] = await db.execute("SELECT * FROM animation_categories");

    // @ts-ignore
    return rows.map(row => { 
        return {name: row.Name, icon: row.IconFilePath} 
    });
});
