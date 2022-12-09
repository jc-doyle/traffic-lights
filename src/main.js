import * as THREE from 'three';
import { OrbitControls } from './addons/OrbitControls.js';
import { GLTFLoader } from './addons/GLTFLoader.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color().setHSL(0.6, 0, 1);
scene.fog = new THREE.Fog(scene.background, 1, 5000);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const ground = new THREE.Mesh(new THREE.PlaneGeometry(100, 100), material)
ground.rotation.x = - Math.PI/2;

scene.add(ground)

const controls = new OrbitControls(camera, renderer.domElement)
controls.update();
camera.position.set(5, 5, 5);


function animate() {
  requestAnimationFrame(animate);
  controls.update();

  renderer.render(scene, camera);
};

animate();
