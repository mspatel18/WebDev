import './style.css'
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render( scene, camera );
//torus
const geometry = new THREE.TorusGeometry( 5, 0.2, 10, 100 );
const material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
const torus = new THREE.Mesh( geometry, material );

scene.add( torus )
//light
const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(10,10,10)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight , ambientLight)
//helper
// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50)
// scene.add(lightHelper,gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement)

function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24)
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff })
  const star = new THREE.Mesh(geometry, material)
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(1000))
  star.position.set(x, y, z)
  scene.add(star)
}
Array(1000).fill().forEach(addStar)

//avatar
const earthTexture = new THREE.TextureLoader().load('./earth.jpg')
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshBasicMaterial({ map: earthTexture })
);
scene.add(earth);

//moon
const moonTexture = new THREE.TextureLoader().load('./moon.jpg')
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({ map: moonTexture })
);
scene.add(moon);
moon.position.z=30;
moon.position.setX(-10);
earth.position.z=-10;
earth.position.x=2;
torus.position.z=-10;
torus.position.x=2;

function moveCamera(){
  const t = document.body.getBoundingClientRect().top;
  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}
document.body.onscroll = moveCamera;
moveCamera();
function animate() {
  requestAnimationFrame( animate );
  earth.rotation.y += 0.01;
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;
  moon.rotation.x += 0.005;
  // controls.update();
  renderer.render( scene, camera );
}
animate();
