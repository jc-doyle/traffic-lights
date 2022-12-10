import * as THREE from 'three';
import Colors from './colors.js'

class Terrain {
  constructor() {
    const material = new THREE.MeshBasicMaterial({ color: Colors.pink });
    this.ground = new THREE.Mesh(new THREE.PlaneGeometry(1000, 1000), material)
    this.ground.rotation.x = - Math.PI / 2;
    this.ground.receiveShadow = true;
  }
}

export default Terrain;
