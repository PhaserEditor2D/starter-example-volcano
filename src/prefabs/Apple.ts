/// <reference path="./FoodItem.ts"/>

/* START OF COMPILED CODE */

import FoodItem from "./FoodItem";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Apple extends FoodItem {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 359, y ?? 153, texture || "volcano", frame ?? "Tiny Caveman_Game Object - Apple.png");

		this.body.setOffset(7, 15);
		this.body.setSize(67, 62, false);

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
