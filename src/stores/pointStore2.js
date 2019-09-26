import { observable, action, decorate } from 'mobx';

export class PointStore2 {
    @observable point1 = 0;
    @observable point2 = 0;
    @observable point3 = 0;
    @observable point4 = 0;
    @observable val1 = 0;
    @observable val2 = 0;
    @observable val3 = 0;
    @observable val4 = 0;

    @action setPoint1 = val => {
        this.point1 = val
    }

    @action setPoint2 = val => {
        this.point2 = val
    }

    @action setPoint3 = val => {
        this.point3 = val
    }

    @action setPoint4 = val => {
        this.point4 = val
    }

    @action setVal1 = val => {
        this.val1 = val
    }

    @action setVal2 = val => {
        this.val2 = val
    }

    @action setVal3 = val => {
        this.val3 = val
    }

    @action setVal4 = val => {
        this.val4 = val
    }

    @action incPoint1 = () => {
        this.point1 = parseInt(this.point1) + parseInt(this.val1)
    }

    @action incPoint2 = () => {
        this.point2 = parseInt(this.point2) + parseInt(this.val2)
    }

    @action incPoint3 = () => {
        this.point3 = parseInt(this.point3) + parseInt(this.val3)
    }

    @action incPoint4 = () => {
        this.point4 = parseInt(this.point4) + parseInt(this.val4)
    }

    @action decPoint1 = () => {
        this.point1 = parseInt(this.point1) - parseInt(this.val1)
    }

    @action decPoint2 = () => {
        this.point2 = parseInt(this.point2) - parseInt(this.val2)
    }

    @action decPoint3 = () => {
        this.point3 = parseInt(this.point3) - parseInt(this.val3)
    }

    @action decPoint4 = () => {
        this.point4 = parseInt(this.point4) - parseInt(this.val4)
    }
}

export default new PointStore2();