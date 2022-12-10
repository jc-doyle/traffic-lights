import * as THREE from 'three';
import Stats from './addons/stats.module.js'
import { createLights } from './lights.js'
import { OrbitControls } from './addons/OrbitControls.js';

import CarController from './lib/car-controller.js'
import Car from './lib/car.js'
import Colors from './colors.js';
import Terrain from './terrain.js';


const scene = new THREE.Scene();
scene.background = new THREE.Color().setHex(Colors.blue);
scene.fog = new THREE.Fog(scene.background, 50, 300);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const stats = Stats()
document.body.appendChild(stats.dom)

const controller = new CarController();
const car = new Car(-40);
controller.addCar(car);
const car2 = new Car(-20);
controller.addCar(car2);

const terrain = new Terrain();
createLights(scene);
scene.add(terrain.ground)
controller.addToScene(scene)

const controls = new OrbitControls(camera, renderer.domElement)
controls.update();
camera.position.set(10, 10, 10);

const axesHelper = new THREE.AxesHelper(5);
scene.add(axesHelper)

function animate(time) {
  requestAnimationFrame(animate);
  controls.update();
  controller.update();
  stats.update();
  render()
};


function render() {
  renderer.render(scene, camera);
}

window.addEventListener('resize', onWindowResize)
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

animate();
render();
