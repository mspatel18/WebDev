import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
scene.add(group)
 
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// mesh.position.x=0.7;
// mesh.position.y=-0.6;
// mesh.position.z=0;
// console.log(mesh.position.length());
// mesh.position.set(0.7,-0.6,1)
// scene.add(mesh)
group.add(mesh)
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube1.position.x = -2
group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)
cube2.position.x = 2
group.add(cube2)
group.position.y=1;
group.scale.y=2;
group.scale.x=0.5;
group.rotation.reorder('YXZ');
// group.rotation.y=Math.PI*0.1;
//Scale
// mesh.scale.set(2,0.5,0.5)

//rotation
// mesh.rotation.reorder('YXZ')
// mesh.rotation.y=0.5;
// // mesh.rotation.x=0.5;
// mesh.rotation.z=0.5;

// Axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)


/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
// camera.position.x = 1
// camera.position.y = 1 to see axes helper
scene.add(camera)
// camera.lookAt(new THREE.Vector3(3,0,0))
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)