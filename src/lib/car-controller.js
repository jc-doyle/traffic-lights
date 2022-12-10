import Car from './car.js'
import { Scene } from 'three';

class CarController {
  constructor() {
    this.cars = []
  }

  /** @param {Car} car **/
  addCar(car) {
    this.cars.push(car);
  }

  /** @param {Scene} scene **/
  addToScene(scene) {
    for (const c of this.cars) {
      c.add(scene)
    }
  }

  update() {
    for (let i = 0; i < this.cars.length; i++) {
      const c = this.cars[i];
      if (i < this.cars.length - 1) {
        c.update(this.cars[i + 1]);
      } else {
        c.update(undefined);
      }
    }
  }

}

export default CarController;
