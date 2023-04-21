
// You can write more code here

/* START OF COMPILED CODE */

import FoodItem from "./FoodItem";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Cherry extends FoodItem {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 394, y ?? 197, texture || "volcano", frame ?? "Tiny Caveman_Game Object - Cherry.png");

		this.body.setOffset(7, 3);
		this.body.setSize(65, 75, false);

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
