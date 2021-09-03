
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	editorPreload(): void {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	editorCreate(): void {

		// loadingText
		const loadingText = this.add.text(600, 375, "", {});
		loadingText.setOrigin(0.5, 0.5);
		loadingText.text = "Loading";
		loadingText.setStyle({ "fontSize": "48px" });

		this.loadingText = loadingText;

		this.events.emit("scene-awake");
	}

	private loadingText: Phaser.GameObjects.Text | undefined;

	/* START-USER-CODE */

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.load.on(Phaser.Loader.Events.PROGRESS, (p: number) => {

			if (this.loadingText) {

				this.loadingText.text = "Loading " + Math.floor(p * 100) + "%"
			}
		});

		this.load.on(Phaser.Loader.Events.COMPLETE, () => {

			this.scene.start("Level");
		});
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
