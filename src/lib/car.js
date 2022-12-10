import * as THREE from 'three';
import { GLTFLoader } from '../addons/GLTFLoader.js';
import { DRACOLoader } from '../addons/DRACOLoader.js';
import Colors from '../colors.js';


class Car {
  /** @param {number} position **/
  constructor(position) {
    this.model = new THREE.Object3D();
    this.position = position;
    this.velocity = 0;
    this.acceleration = 0.001;
  }

  /** @param {THREE.Scene} scene **/
  async add(scene) {
    const path = 'police-car.gltf'
    const loader = new GLTFLoader().setPath('assets/');
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('src/addons/draco/');
    loader.setDRACOLoader(dracoLoader);
    const object = await loader.loadAsync(path);
    this.model = object.scene;
    this.model.position.x = this.position;
    this.model.rotateY(Math.PI / 2)
    scene.add(this.model)
  }

  /** @param {Car} car **/
  update(car) {
    if (car != undefined) {
      // var pos = new THREE.Vector3();
      // this.model.getWorldPosition(pos);
      // var otherPos = new THREE.Vector3();
      // car.model.getWorldPosition(otherPos);
      // var dir = new THREE.Vector3(1,0,0);
      // const ray = new THREE.Raycaster(pos,dir.normalize());
      // console.log(pos.distanceTo(otherPos))
    }

    const MAX = 0.1;
    if (this.velocity < MAX) {
      this.velocity += this.acceleration;
    }

    if (this.model.position.x < 10) {
      this.model.position.x += this.velocity;
    }
  }
}

export default Car;
