class Point {
    // x, y
    constructor(x,y){
        this._x = x;
        this._y = y;
    }
    distance(other) {
        // returns distance between this and other
        return Math.sqrt(Math.pow(this._x - other._x, 2) + Math.pow(this._y - other._y, 2));
    }
}

const p1 = new Point(15, 20);
const p2 = new Point(25, 30);

let distance = p1.distance(p2);

class Circle {
    // r
    constructor(r){
        this._radius = r;
    }
    area() {
        //
        return Math.PI * this._radius * this._radius;
    }
    compare(other) {
        // return true if area of this > area of other
        // else return false
        return this.area() > other.area();
    }
}

const c1 = new Circle(15);
const c2 = new Circle(10);

let compare = c1.compare(c2);