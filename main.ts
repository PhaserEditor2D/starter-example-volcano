
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1200,
		height: 750,
		type: Phaser.AUTO,
        backgroundColor: "#242424",
		physics: {
			default: "arcade",
			arcade: {
				debug: false
			}
		},
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		input: {
			activePointers: 3
		}
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Level", Level);
	game.scene.start("Preload")
});