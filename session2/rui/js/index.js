// -----------------------------------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene --------------------------
var scene = new THREE.Scene();

// Create a basic perspective camera --------------
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 300, 10000 );

// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#5A8296");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );


// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);
// ------------------------------------------------

// -----------------------------------------------------------------------------

// ------------------------------------------------
// Main Content
// ------------------------------------------------

// Create a Cube Mesh with basic material ---------
var geometry = new THREE.BoxGeometry(100, 100, 100);

// MATERIAL 1:
var material1 = new THREE.MeshNormalMaterial();

//MATERIAL 2:
var texture = new THREE.TextureLoader().load("texture.jpg");
var material2 = new THREE.MeshBasicMaterial({map : texture});

//MATERIAL 3:


//MATERIAL 4:


//MATERIAL 5 (non-shiny material):


//MATERIAL 6 (combination of shiny + non-shinny):


//MATERIAL 7 (physical-based material)


//MATERIAL 8


//MATERIAL 9


//MATERIAL 10


//MATERIAL 11
material11 = new THREE.MeshLambertMaterial( { color: 0x666666, emissive: 0xff0000 } );

//MATERIAL 12
var material12 =  new THREE.MeshBasicMaterial( { color: 0xffaa00, wireframe: true } );

//MATERIAL13


//MATERIAL 14
var material14 =  new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x666666, emissive: 0xff0000, shininess: 10, opacity: 0.9, transparent: true } );

//MATERIAL 15


var mesh1 = new THREE.Mesh( geometry, material14 );
mesh1.position.z = -1500;
mesh1.position.x = 0;
mesh1.position.y = 100;

var mesh2 = new THREE.Mesh( geometry, material11 );
mesh2.position.z = -1500;
mesh2.position.x = -160;
mesh2.position.y = 200;

var mesh3 = new THREE.Mesh( geometry, material11 );
mesh3.position.z = -1500;
mesh3.position.x = 160;
mesh3.position.y = 200;

var mesh4 = new THREE.Mesh( geometry, material2 );
mesh4.position.z = -1500;
mesh4.position.x = -300;
mesh4.position.y = 120;

var mesh5 = new THREE.Mesh( geometry, material2 );
mesh5.position.z = -1500;
mesh5.position.x = 300;
mesh5.position.y = 120;

var mesh6 = new THREE.Mesh( geometry, material11 );
mesh6.position.z = -1500;
mesh6.position.x = -280;
mesh6.position.y = 0;

var mesh7 = new THREE.Mesh( geometry, material11 );
mesh7.position.z = -1500;
mesh7.position.x = 280;
mesh7.position.y = 0;

var mesh8 = new THREE.Mesh( geometry, material14 );
mesh8.position.z = -1500;
mesh8.position.x = -200;
mesh8.position.y = -100;

var mesh9 = new THREE.Mesh( geometry, material14 );
mesh9.position.z = -1500;
mesh9.position.x = 200;
mesh9.position.y = -100;

var mesh10 = new THREE.Mesh( geometry, material11 );
mesh10.position.z = -1500;
mesh10.position.x = -100;
mesh10.position.y = -200;

var mesh11 = new THREE.Mesh( geometry, material11 );
mesh11.position.z = -1500;
mesh11.position.x = 100;
mesh11.position.y = -200;

var mesh12 = new THREE.Mesh( geometry, material2 );
mesh12.position.z = -1500;
mesh12.position.x = 0;
mesh12.position.y = -300;
// ------------------------------------------------

// Add mesh to scene
scene.add( mesh1 );
scene.add( mesh2 );
scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
scene.add( mesh11 );
scene.add( mesh12 );

var rot = 0;

// Render Loop
var render = function () {
  requestAnimationFrame( render );

  rot += 0.01;

  mesh1.rotation.x = rot+1; //Continuously rotate the mesh
  mesh1.rotation.y = rot+1;

  mesh2.rotation.x = rot-2; //Continuously rotate the mesh
  mesh2.rotation.y = rot-2;

  mesh3.rotation.x = rot+2; //Continuously rotate the mesh
  mesh3.rotation.y = rot+2;

  mesh4.rotation.x = rot-2; //Continuously rotate the mesh
  mesh4.rotation.y = rot-2;

  mesh5.rotation.x = rot+2; //Continuously rotate the mesh
  mesh5.rotation.y = rot+2;

  mesh6.rotation.x = rot-2; //Continuously rotate the mesh
  mesh6.rotation.y = rot-2;

  mesh7.rotation.x = rot+2; //Continuously rotate the mesh
  mesh7.rotation.y = rot+2;

  mesh8.rotation.x = rot-2; //Continuously rotate the mesh
  mesh8.rotation.y = rot-2;

  mesh9.rotation.x = rot+2; //Continuously rotate the mesh
  mesh9.rotation.y = rot+2;

  mesh10.rotation.x = rot-2; //Continuously rotate the mesh
  mesh10.rotation.y = rot-2;

  mesh11.rotation.x = rot+2; //Continuously rotate the mesh
  mesh11.rotation.y = rot+2;

  mesh12.rotation.x = rot-2; //Continuously rotate the mesh
  mesh12.rotation.y = rot-2;

  // Render the scene
  renderer.render(scene, camera);
};

render(); //Run the function render
