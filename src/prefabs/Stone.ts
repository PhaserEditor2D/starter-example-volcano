
// You can write more code here

/* START OF COMPILED CODE */

import Platform from "./Platform";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Stone extends Platform {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 393, y ?? 213, texture || "volcano", frame ?? "Volcano Level Set_Platformer - Stone.png");

		this.body.setOffset(0, 8);
		this.body.setSize(128, 120, false);

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
