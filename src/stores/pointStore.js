import { observable, action, decorate } from 'mobx';

class PointStore {
    constructor(store) {
        this.store = store;
    }
    // observable
    point1 = 0;
    point2 = 0;
    point3 = 0;
    point4 = 0;

    resetPoint = () => {
      this.point1 = 0;
      this.point2 = 0; 
      this.point3 = 0; 
      this.point4 = 0; 
    }
    setPoint1 = val => {
        this.point1.set(val)
    }

    setPoint2 = val => {
        this.point2.set(val)
    }

    setPoint3 = val => {
        this.point3.set(val)
    }

    setPoint4 = val => {
        this.point4.set(val)
    }
}

decorate(PointStore, {
    point1: observable,
    point2: observable,
    point3: observable,
    point4: observable,
    resetPoint: action,
    setPoint1: action,
    setPoint2: action,
    setPoint3: action,
    setPoint4: action,
});

export default PointStore;
