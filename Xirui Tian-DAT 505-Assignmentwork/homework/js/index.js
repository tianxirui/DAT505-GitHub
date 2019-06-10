//Define variables
var renderer, labelRenderer, scene, camera, container;
var controls;
var cubes = [];
//Randomly rotate the array of angles
var randomRotationX = [];
var randomRotationY = [];
//Displays the text ordinal number
var label = document.createElement('div');
label.className = 'label';
var meshLabel = new THREE.CSS2DObject(label);
var preObject;//The last object to display an ordinal number


//The entry function
function init() {
	//Create a container div
	container = document.createElement('div');
	container.id = 'container';
	document.body.appendChild(container);
	//Create a scene
	scene = new THREE.Scene();
	//creat a camera
	var W = window.innerWidth,
	H = window.innerHeight;

	camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
	camera.position.set(20, 50, 85);
	//Add a light source
	scene.add(new THREE.HemisphereLight(0xffffbb, 0x080820, 2));
	//Create renderer
	renderer = new THREE.WebGLRenderer({
			antialias: true
		});
	renderer.setClearColor(0x2A3867);
	renderer.setSize(W, H);

	labelRenderer = new THREE.CSS2DRenderer();
	labelRenderer.setSize(W, H);
	labelRenderer.domElement.style.position = 'absolute';
	labelRenderer.domElement.style.top = 0;
	//Create controller
	controls = new THREE.OrbitControls(camera, container);
	controls.target.set(-2.5, -2.5, -2.5);
	//Creat cube
	var boxGeometry = new THREE.BoxGeometry(3, 3, 3);
	var count=1;//The cube number
	////Three loops nested, corresponding to x，y，z of the small cube
	for (var x = -10; x <= 5; x += 5) {
		for (var y = -10; y <= 5; y += 5) {
			for (var z = -10; z <= 5; z += 5) {

				var boxMaterial = new THREE.MeshLambertMaterial({
						color: Math.random() * 0xffffff//Random color
					});
				var mesh = new THREE.Mesh(boxGeometry, boxMaterial);
				mesh.name = count++;//Assigns the number to the name property of the object
				//Change the position of this object
				mesh.position.x = x;
				mesh.position.y = y;
				mesh.position.z = z;
				//Random rotation
				var randomValueX = (Math.random() * 0.1) - 0.05;
				var randomValueY = (Math.random() * 0.1) - 0.05;
				randomRotationX.push(randomValueX);
				randomRotationY.push(randomValueY);

				scene.add(mesh);
				cubes.push(mesh);

			}
		}
	}
//Add canvas to the container div
	container.appendChild(renderer.domElement);
	container.appendChild(labelRenderer.domElement);
//Listen for window redraw events
	window.addEventListener('resize', onWindowResize, false);
//Listen for click events
	container.addEventListener('mousedown', onMouseDown, false);
}
//Render loop
function drawFrame() {
	requestAnimationFrame(drawFrame);
	//Update controller
	controls.update();
	//Update the rotation Angle of each small cube
	cubes.forEach(function (c, i) {
		c.rotation.x += randomRotationX[i];
		c.rotation.y += randomRotationY[i];
	});
	//Draw the scene
	renderer.render(scene, camera);
	labelRenderer.render(scene, camera);
}
//The window redraws the function
function onWindowResize() {
	var w = window.innerWidth,
	h = window.innerHeight;
	renderer.setSize(w, h);
	labelRenderer.setSize(w, h);
	camera.aspect = w / h;
	camera.updateProjectionMatrix();
}
//Define the raycaster
var raycaster = new THREE.Raycaster();
//Define the mouse x，y position
var mouse = new THREE.Vector2();
//Gets whether the current ray intersects with an object in the scene
function getIntersect(point) {
	mouse.set((point.x * 2) - 1,  - (point.y * 2) + 1);
	raycaster.setFromCamera(mouse, camera);
	return raycaster.intersectObjects(scene.children, true)
}
//Mouse down position
var onDownPosition = new THREE.Vector2();
//Mouse up position
var onUpPosition = new THREE.Vector2();
//Get the mouse position
function getMousePosition(dom, x, y) {
	var rect = dom.getBoundingClientRect();
	return [(x - rect.left) / rect.width, (y - rect.top) / rect.height]
}
//The function on mouse down
function onMouseDown(event) {
	event.preventDefault();
	var array = getMousePosition(container, event.clientX, event.clientY);
	onDownPosition.fromArray(array);
	container.addEventListener('mouseup', onMouseUp, false);
}
//The function on mouse up
function onMouseUp(event) {
	event.preventDefault();
	var array = getMousePosition(container, event.clientX, event.clientY);
	onUpPosition.fromArray(array);
	handleClick();//Execute click event
	container.removeEventListener('mouseup', onMouseUp, false);
}
//Click on the event function
function handleClick() {
	if (onDownPosition.distanceTo(onUpPosition) === 0) {
		var intersects = getIntersect(onUpPosition);
		if (intersects.length > 0) {
			var object = intersects[0].object;
			if (object) {
				//Add the number if the object is clicked
				label.innerText = object.name;
				preObject=object;
				object.add(meshLabel);
			}
		} else {
			if (preObject) {
				preObject.remove(meshLabel);//Remove the number if no object is clicked
			}
		}
	}
}

init();
drawFrame();
