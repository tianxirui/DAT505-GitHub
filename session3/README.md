# DAT505-GitHub Session3
## Introduction
## This Session3 describes how to display the changed values of a box on the screen,
## which is an interactive interface.
####  var f1 = gui.addFolder('Scale');
####  f1.add(controller, 'scaleX', 0.1, 5).onChange( function() {
####    mesh.scale.x = (controller.scaleX);
####  });
####  f1.add(controller, 'scaleY', 0.1, 5).onChange( function() {
####    mesh.scale.y = (controller.scaleY);
####  });
####  f1.add(controller, 'scaleZ', 0.1, 5).onChange( function() {
####    mesh.scale.z = (controller.scaleZ);
## The above code is an example of how a scale value that can be changed appears on the screen.
