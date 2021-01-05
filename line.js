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

class Line {
    constructor(x1,y1,x2,y2){
        this._p1 = new Point(x1, y1);
        this._p2 = new Point(x2, y2);
    }

    get p1(){
        return this._p1;
    }

    get p2(){
        return this._p2;
    }

    toString(){ // [(x1, y1), (x2, y2)]
        // let x1 = this.p1.x;
        // let y1 = this.p1.y;
        // let x2 = this.p2.x;
        // let y2 = this.p2.y;
        // return `[(${x1}, ${y1}), (${x2}, ${y2})]`;
        let p1 = this.p1.toString();
        let p2 = this.p2.toString();
        return `[${p1}, ${p2}]`;
    }

    get slop(){
        // (y2 - y1) / (x2 - x1)
        // let x1 = this.p1.x;
        // let y1 = this.p1.y;
        // let x2 = this.p2.x;
        // let y2 = this.p2.y;
        // if(x2 !== x1){
        //     return (y2 - y1) / (x2 - x1);
        // }else{
        //     return 'Illegal';
        // }

        // slop = (y2 - y1) / (x2 - x1) = (y1 - y2) / (x1 - x2)
        return this.p1.slop(this.p2);
       
    }

    isCollinear(p) {
        return p.isCollinear(this.p1, this.p2);
    }

}

let line = new Line(4,5,5,6);
console.log(line.p1.toString());
console.log(line.p2.toString());
console.log(line.toString());
console.log(line.slop);
console.log(line.isCollinear(new Point(2,4)));

class Triangle {
    constructor(p1,p2,p3){
       this._l1 = new Line(p1.x,p1.y,p2.x,p2.y);
       this._l2 = new Line(p2.x,p2.y,p3.x,p3.y);
       this._l3 = new Line(p1.x,p1.y,p3.x,p3.y);
    }
}

let triangle = new Triangle(new Point(1,2), new Point(6,7), new Point(8,9));
