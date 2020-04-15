mp.events.add({
    "takeScreenshot": anything => {
        mp.gui.chat.show(false);
        mp.game.ui.displayRadar(false);
        mp.game.ui.displayHud(false);

        mp.gui.takeScreenshot("random.png", 1, 100, 0);
        mp.gui.chat.push('screenshot taken');

        mp.gui.chat.show(true);
        mp.game.ui.displayRadar(true);
        mp.game.ui.displayHud(true);
    }
});

mp.events.add({
    "showhud": anything => {
        mp.gui.chat.show(true);
        mp.game.ui.displayRadar(true);
        mp.game.ui.displayHud(true);
    }
});

mp.events.add({
    "hidehud": anything => {
        mp.gui.chat.show(false);
        mp.game.ui.displayRadar(false);
        mp.game.ui.displayHud(false);
    }
});

mp.events.add({
    "light": player => {
        mp.game.graphics.drawLightWithRangeAndShadow(
            mp.players.local.position.x,
            mp.players.local.position.y,
            mp.players.local.position.z,
            255, 255, 255,
            100,
            1, 0);
    }
});

mp.events.add('render', () => {
    mp.game.graphics.drawText('This is called every frame.', [0.5, 0.005], 
    {
      font: 4,
      color: [255, 255, 255, 255],
      scale: [1.0, 1.0],
      outline: true
    });
    
    mp.game.graphics.drawLightWithRangeAndShadow(
        mp.players.local.position.x,
        mp.players.local.position.y,
        mp.players.local.position.z,
        255, 255, 255,
        100,
        1, 0);
});