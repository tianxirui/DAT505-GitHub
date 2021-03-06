var renderer, scene, camera;
var controls;
var cubes = [];
var randomRotationX = [];
var randomRotationY = [];



function init() {

  console.log("Init Function Starts");

  scene = new THREE.Scene();

  var W = window.innerWidth,
      H = window.innerHeight;

  camera = new THREE.PerspectiveCamera(45, W / H, .1, 1000);
  camera.position.set(10, 20, 85);//could change the camera's rotations
  camera.lookAt(scene.position);

  var spotLight = new THREE.SpotLight(0xFFFFFF);
  spotLight.position.set(0, 500, 0);
  scene.add(spotLight);
  //spotLight.castShadow = true;

  var ambLight = new THREE.AmbientLight(0xFFFFFF);
  ambLight.position.set(0, 500, 0);
  ambLight.add(spotLight);
  scene.add(ambLight);

  renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor(0x17293a);
  renderer.setSize(W, H);
  //renderer.shadowMapEnabled = true;

  controls = new THREE.OrbitControls(camera, renderer.domElement);


for (var x = -10; x <= 10; x += 5 ) {// Start from -45 and sequentially add one every 5 pixels
  for (var y = -10; y <= 10; y += 5) {
    var boxGeometry = new THREE.BoxGeometry( 3, 3, 3 );
//Concatenation of the x and y values (open Console to see)
    console.log("X:" +x+ ", Y: " +y);
    //The color of the material is assigned a random color
    
    var texture1 = new THREE.TextureLoader().load("textures/texture1.jpg");
    var texture2 = new THREE.TextureLoader().load("textures/texture3.jpg");
    var texture3 = new THREE.TextureLoader().load("textures/texture2.jpg");

    var boxMaterial = new THREE.MeshBasicMaterial({ map: texture3 });

if (x==-5 && y==-5){
  boxMaterial = new THREE.MeshBasicMaterial({ map: texture1 });
} else if (x==5 && y==5){
  boxMaterial = new THREE.MeshBasicMaterial({ map: texture2 });
} else {
  boxMaterial = new THREE.MeshBasicMaterial({ map: texture3 });
}


    					var mesh = new THREE.Mesh(boxGeometry, boxMaterial);

    						mesh.position.x = x;
    						mesh.position.y = y;
                //mesh.position.z = z;
                mesh.scale.y = 1;

    						mesh.rotation.x = Math.random() * 2 * Math.PI;
                mesh.rotation.y = Math.random() * 2 * Math.PI;
                mesh.rotation.z = Math.random() * 2 * Math.PI;

             var randomValueX = (Math.random() * 0.01) - 0.05;
             var randomValueY = (Math.random() * 0.01) - 0.05;
             randomRotationX.push(randomValueX);
             randomRotationY.push(randomValueY);


    						scene.add( mesh );
                cubes.push(mesh);


}
}

console.log(cubes);
//console.log(randomRotationX);
console.log("Init end");
console.log("****** DrawFrame Starts ******");
document.body.appendChild(renderer.domElement);


}

function drawFrame(){
  requestAnimationFrame(drawFrame);

  //forEach takes all the arrary entries and passes the c as the ...
  cubes.forEach(function(c, i){

    c.rotation.x += randomRotationX[i]; //Roate the object that is reference...
    c.rotation.y += randomRotationY[i];

//c.rotation.x = 0.2; //Roate the object that is reference...
//c.rotation.y = 0.5;



});

  renderer.render(scene, camera);
}

init();
drawFrame();
