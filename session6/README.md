# DAT505-GitHub Session6
#### Introduction
### This Session6 describes the variation of multiple squares in a space.
#  scene = new THREE.Scene();
#  scene.fog = new THREE.FogExp2(0x9db3b5, 0.02);
### The above code shows the change of fog in space.

#   renderer = new THREE.WebGLRenderer({antialias: true});
#  renderer.setSize( window.innerWidth, window.innerHeight );
#  renderer.shadowMapEnabled = true;
#  renderer.setClearColor(0xE8E5E0, 1);
### The above code can make the space background color changes.

#  var material = new THREE.MeshPhongMaterial({overdraw: true, color: 0xFBF9F7,wireframe:true});
## Geometry to store all buildings of the city
#  var cityGeometry = new THREE.Geometry();
#  for (var i = 0; i < 300; i++) {
## Create geometry as a clone
#    var building = new THREE.Mesh(geometry.clone());
## Randomize position and scale of the buildings
#    building.position.x = Math.floor( Math.random() * 200 - 100 ) * 4;
#    building.position.y = Math.floor( Math.random() * 200 - 100 ) * 4;
#    building.position.z = Math.floor( Math.random() * 200 - 100 ) * 4;
#    building.scale.x  = Math.pow(Math.random(), 2) * 50 + 10;
#    building.scale.y  = Math.pow(Math.random(), 3) * building.scale.x * 8 + 8;
#    building.scale.y  = building.scale.x;
#    building.scale.z  = building.scale.x;
### This is the code that changes the square material and color.
