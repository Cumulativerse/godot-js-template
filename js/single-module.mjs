export default class SingleModule extends godot.Node {

	constructor() {
		super();
	}

	// Called when the node enters the scene tree for the first time.
	_ready() {
		console.log("Single module is ready");
	}

	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta) {

	}
}