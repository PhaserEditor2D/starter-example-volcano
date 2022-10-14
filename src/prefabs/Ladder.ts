/// <reference path="./Platform.ts"/>

/* START OF COMPILED CODE */

class Ladder extends Platform {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 251, y ?? 128, texture || "volcano", frame ?? "Volcano Level Set_Platformer - Ladder.png");

		this.setOrigin(0, 0);
		this.body.setOffset(0, 80);
		this.body.setSize(128, 48, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
