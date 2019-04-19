//Global variables
var scene, camera, renderer;
var geometry, material, mesh;
var container, stats;
var camera, controls, scene, renderer;
var objects = [];

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );
	scene.add( new THREE.AmbientLight( 0x505050 ) );
  container = document.createElement( 'div' );
	document.body.appendChild( container );

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );
  camera.position.z = 1000;

  controls = new THREE.TrackballControls( camera );
				controls.rotateSpeed = 1.0;
				controls.zoomSpeed = 1.2;
				controls.panSpeed = 0.8;
				controls.noZoom = false;
				controls.noPan = false;
				controls.staticMoving = true;
				controls.dynamicDampingFactor = 0.3;

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Configure lights -------------------------------
  var light = new THREE.SpotLight( 0xffffff, 1.5 );
				light.position.set( 0, 500, 2000 );
				light.angle = Math.PI / 9;
				light.castShadow = true;
				light.shadow.camera.near = 1000;
				light.shadow.camera.far = 4000;
				light.shadow.mapSize.width = 1024;
				light.shadow.mapSize.height = 1024;
				scene.add( light );

  //var light1 = new THREE.AmbientLight(0xffffff, 0.5);
//  scene.add(light1);
  //var light2 = new THREE.PointLight(0xffffff, 0.5);
  //scene.add(light2);


  // Create a Cube Mesh with basic material ---------
  var geometry = new THREE.BoxBufferGeometry( 60, 60, 60 );
  				for ( var i = 0; i < 25; i ++ ) {
  					var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
  					object.position.x = Math.random() * 1000 - 500;
  					object.position.y = Math.random() * 600 - 300;
            object.position.z = 50
  					//object.position.z = Math.random() * 800 - 400;
  					//object.rotation.x = Math.random() * 2 * Math.PI;
  					//object.rotation.y = Math.random() * 2 * Math.PI;
  					//object.rotation.z = Math.random() * 2 * Math.PI;
  					//object.scale.x = Math.random() * 2 + 1;
  					//object.scale.y = Math.random() * 2 + 1;
  					//object.scale.z = Math.random() * 2 + 1;
  					object.castShadow = true;
  					object.receiveShadow = true;
  					scene.add( object );
  					objects.push( object );
  				}
          renderer = new THREE.WebGLRenderer( { antialias: true } );
          	renderer.setPixelRatio( window.devicePixelRatio );
          	renderer.setSize( window.innerWidth, window.innerHeight );
          	renderer.shadowMap.enabled = true;
        		renderer.shadowMap.type = THREE.PCFShadowMap;
        		container.appendChild( renderer.domElement );
     		var dragControls = new THREE.DragControls( objects, camera, renderer.domElement );
          	dragControls.addEventListener( 'dragstart', function () {
          		controls.enabled = false;
          	} );
          	dragControls.addEventListener( 'dragend', function () {
          		controls.enabled = true;
          	} );
    		var info = document.createElement( 'div' );
          	info.style.position = 'absolute';
          	info.style.top = '10px';
          	info.style.width = '100%';
          	info.style.textAlign = 'center';
          	info.innerHTML = '<a href="http://threejs.org" target="_blank" rel="noopener">three.js</a> webgl - draggable cubes';
          	container.appendChild( info );
          	stats = new Stats();
          	container.appendChild( stats.dom );
          				//
          	window.addEventListener( 'resize', onWindowResize, false );
         	}
      	function onWindowResize() {
        		camera.aspect = window.innerWidth / window.innerHeight;
          	camera.updateProjectionMatrix();
          	renderer.setSize( window.innerWidth, window.innerHeight );
          			}
          			//
      	function animate() {
          	requestAnimationFrame( animate );
          	render();
          	stats.update();
        	}
      	function render() {
          	controls.update();
          	renderer.render( scene, camera );
          }

  // MATERIAL 1:
  //var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );

  //MATERIAL 2:
  //var material = new THREE.MeshNormalMaterial();

//mesh = new THREE.Mesh( geometry, material );
//mesh.position.z = -1000;
// ------------------------------------------------

// Add mesh to scene
//scene.add( mesh );
//}

// Render Loop
//function render() {
//  requestAnimationFrame( render );

  //mesh.rotation.x += 0.01; //Continuously rotate the mesh
  //mesh.rotation.y += 0.01;

  // Render the scene
//  renderer.render(scene, camera);
//};

init();
geometry();
animate();
render();
