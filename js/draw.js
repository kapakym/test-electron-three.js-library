const THREE = require("../libs/three.min.js")
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 1, 1000 );

var renderer = new THREE.WebGLRenderer({canvas : document.querySelector('#canvas'), alpha:true});
const controls = new OrbitControls(camera, renderer.domElement)


var plane = new THREE.GridHelper(100, 10);
scene.add(plane);




var geometry = new THREE.BoxGeometry(10,10,10);
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
var axes = new THREE.AxisHelper( 5 );
scene.add(axes);
scene.add( cube );


camera.position.set(0, 5, 1.5).setLength(100);

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();