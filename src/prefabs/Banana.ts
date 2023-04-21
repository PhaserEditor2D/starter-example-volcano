
// You can write more code here

/* START OF COMPILED CODE */

import FoodItem from "./FoodItem";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Banana extends FoodItem {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 441, y ?? 147, texture || "volcano", frame ?? "Tiny Caveman_Game Object - Banana.png");

		this.body.setOffset(4, 8);
		this.body.setSize(73, 68, false);

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
