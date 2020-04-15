mp.events.addCommand("greenscreen", (player, fullText) => {
    // TODO: Use https://wiki.rage.mp/index.php?title=Using_Existing_Modifications_as_DLC_Packs
    mp.objects.new(909721256, player.position);
    mp.objects.new(909721256, new mp.Vector3(player.position.x, player.position.y, player.position.z + 3));
    mp.objects.new(909721256, new mp.Vector3(player.position.x, player.position.y + 3, player.position.z));
});

mp.events.addCommand('screenshot', (player, fullText) => {
    player.call('takeScreenshot');
});

mp.events.addCommand('light', (player, fullText) => {
    player.call('light');
});

