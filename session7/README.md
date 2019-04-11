# DAT505-GitHub Session7
#### Introduction
### This Session7 describes how to make multiple eyeballs follow the position of the mouse.
# var faceVertexUvs = geometry.faceVertexUvs[ 0 ];
#for ( i = 0; i < faceVertexUvs.length; i ++ ) {
#  var uvs = faceVertexUvs[ i ];
#  var face = geometry.faces[ i ];
#  for ( var j = 0; j < 3; j ++ ) {
#    uvs[ j ].x = face.vertexNormals[ j ].x * 0.5 + 0.5;
#    uvs[ j ].y = face.vertexNormals[ j ].y * 0.5 + 0.5;
#  }
# }
# var cubescale=(Math.random()*-2)+1;
# mesh = new THREE.Mesh( geometry, material );
# mesh.position.x=(Math.random()*-200)+40;
# mesh.position.y=(Math.random()*-150)+60;
# mesh.scale.x=cubescale;
# mesh.scale.y=cubescale;
#  mesh.scale.z=cubescale;
# scene.add( mesh );
# cubes.push(mesh);
# }
### The above code determines the position of the eyeball
