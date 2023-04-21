
// You can write more code here

/* START OF COMPILED CODE */

import SpriteScriptNode from "../script-nodes-basic/SpriteScriptNode";
import ScriptNode from "../script-nodes-basic/ScriptNode";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class ScrollFactorScript extends SpriteScriptNode {

	constructor(parent: ScriptNode | Phaser.GameObjects.GameObject | Phaser.Scene) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	public x: number = 0;
	public y: number = 0;

	/* START-USER-CODE */

	override awake() {

		this.gameObject.setScrollFactor(this.x, this.y);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
