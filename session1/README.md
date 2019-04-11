# DAT505-GitHub Session1
## Introduction
## This Session1 Introduces the basic deformation of the geometry.
####   function geometry(){
###   // Create a Cube Mesh with basic material ---------
####   geometry1 = new THREE.ShapeGeometry( heartShape );
####  material1 = new THREE.MeshBasicMaterial( { color: "#E28899" } );
####   mesh1 = new THREE.Mesh( geometry1, material1 );

###   // Add mesh to scene
####   scene.add( mesh1 );
####   geometry3 = new THREE.BoxBufferGeometry( size, size, size );
#### 	material3 = new THREE.MeshBasicMaterial( { wireframe: true } );
#### 	mesh3 = new THREE.Mesh( geometry3, material3 );
#### 	mesh3.position.z = - 1000;
#### 	scene.add( mesh3 );
####  }
## The code above is a wireframe mode and a flat heartshape. They are rotating and colored
## and the code controls the color of the heartshape includes its trajectory.
