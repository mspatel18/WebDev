import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

const loader = new GLTFLoader();

loader.load( '/gogglepayQRModel.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
function addCubes() {
	const geometry = new THREE.BoxGeometry(5, 5, 5)
	const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
	const cube = new THREE.Mesh(geometry, material)
	const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000))
	cube.position.set(x, y, z)
	scene.add(cube)
  }
  Array(1000).fill().forEach(addCubes)
// const geometry = new THREE.BoxGeometry( 5, 5, 5 );
// const material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
// const polyhedron = new THREE.Mesh( geometry, material );
// scene.add( polyhedron );

const ambientlight = new THREE.AmbientLight( 0x404040 ); // soft white light
const light1 = new THREE.PointLight( 0x404040, 200, 100 );
light1.position.set( 20, 20,20 );
const light2 = new THREE.PointLight( 0x404040, 200, 100 );
light2.position.set( -20, -20,-20 );
scene.add( ambientlight, light1,light2 );

camera.position.z = 5;


const lightHelper = new THREE.PointLightHelper( light1 );
const gridHelper = new THREE.GridHelper( 200, 50 );
// const cameraHelper = new THREE.CameraHelper( camera );
scene.add( lightHelper, gridHelper );
const controls = new OrbitControls( camera, renderer.domElement );

function animate() {
	requestAnimationFrame( animate );
	// camera.rotateOnAxis(new THREE.Vector3(0,1,0),0.01);
	// camera.rotation.z += 0.1;
	camera.position.y += 0.1;
	camera.position.z += 0.1;
  controls.update();

	renderer.render( scene, camera );

}
animate();