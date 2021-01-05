class Size {
	constructor(width, height) {
		this._width = width;
		this._height = height;
	}

	get width() { return this._width; }
	get height() { return this._height; }
	
	toString() { return `(${this.width}, ${this.height})`};
}

class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    slop(other) {
        if (this.x !== other.x) {
            return (this.y - other.y) / (this.x - other.x);
        } else {
            return 'Illegal';
        }
    }

    isCollinear(p1, p2) {
        return (this.slop(p1) === p1.slop(p2)) && (p1.slop(p2) === p2.slop(this));
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class Rectangle {
    constructor(x, y, width, height){
        this._point = new Point(x, y);
        this._size = new Size(width, height);
    }

    get point(){
        return this._point;
    }

    get size(){
        return this._size;
    }

    toString(){
        let pointx = this.point.x;
        let pointy = this.point.y;
        let width = this.size.width;
        let height = this.size.height;
        return `[(${pointx}, ${pointy}), (${width}, ${height})]`;
    }

    contains(x, y) {
        let topRightx = this.point.x + this.size.width;
        let topRighty = this.point.y + this.size.height;
       if(( (x >= this.point.x) && (x <= topRightx)) && 
            (y >= this.point.y) && (y <= topRighty)){
           return true;
       }else{
           return false;
       }
    }

    containsPoints(p){
        return this.contains(p.x, p.y);
    }
}

let rectangle = new Rectangle(2, 5, 8, 10);
console.log(rectangle.toString());
console.log(rectangle.contains(5, 6)); // true
console.log(rectangle.contains(5, 3)); // false
console.log(rectangle.contains(5, 16)); // false
console.log(rectangle.containsPoints(new Point(5, 6)));

const rect = {
    point : {
        x: 1,
        y: 2
    },
    size: {
        width: 1,
        height: 1
    }
}

const cat = {
    name: "Mimi",
    walk: () => {

    }
}


const a = {
    x: 1,
    z: 4
};

const b = {
    y: 2,
    z: 5
};

const ab = a + b; // { x: 1, y: 2, z: 5 } inheritance
// ab.x
// ab.y
// ab.z

const bb = { // nested
    y: 2,
    z: 5,
    a: a
};
// bb.a.x
// bb.a.z
// bb.y
// bb.z
