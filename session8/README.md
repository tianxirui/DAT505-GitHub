# DAT505-GitHub Session8
#### Introduction
### This Session8 describes how to change the color of an object by clicking on it.
#  window.addEventListener( 'resize', onWindowResize, false );
#  window.addEventListener( "mousemove", onDocumentMouseMove, false );
#  window.addEventListener( "mousedown", onDocumentMouseDown, false );
### The above code is to control the mouse click.

#  var objLoader = new THREE.OBJLoader();
#  objLoader.setMaterials(materials);
#    objLoader.load("file.obj", function(mesh){
#      mesh.traverse(function(node){
#        if( node instanceof THREE.Mesh ){
#          node.castShadow = true;
#          node.receiveShadow = true;
#      }
#      });
### The above code is by changing obj file different, to achieve the change of different objects.
