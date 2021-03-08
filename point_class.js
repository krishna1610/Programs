class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return `[x=${this.x}, y=${this.y}]`;
    }

    isEqual(other){
        return (this.x === other.x && this.y === other.y); // boolean
    }

    compare(other) { // int -1,0,1
        // distance from origin is smaller is small point
        // sqrt((x1-x)^2 + (y1 - y)^2))
        let d1 = this.distance;
        let d2 = other.distance;
        if(d1 < d2){
            return -1;
        }else if(d1 > d2){
            return 1;
        }else {
            return 0;
        }
    }

    get distance() {
        return Math.sqrt((Math.pow(this.x, 2)) + Math.pow(this.y, 2));
    }

    translate(dx, dy){
        this.x = this.x + dx;
        this.y = this.y + dy;
    }

    rotate(degrees) {
        this.x = (this.x * Math.cos((degrees * Math.PI) /180)) - (this.y * Math.sin((degrees * Math.PI)/180));
        this.y = (this.x * Math.sin((degrees * Math.PI) /180)) + (this.y * Math.cos((degrees * Math.PI)/180));  
    }

    scale(factor) {
        this.x = this.x * factor;
        this.y = this.y * factor;
    }
}

const points = [new Point(3, 4), new Point(1, 1), new Point(2, 2)];
points.sort((a, b) => a.compare(b));
points.forEach(p => console.log(p.toString()));
console.log(points);
console.log('---------');
const p1 = new Point(1, 2);
console.log(p1.toString());
console.log(p1.isEqual(new Point(1,2)));
console.log(p1.isEqual(new Point(4,5)));
const p2 = new Point(3, 4);
p2.translate(4, 6);
console.log(p2.toString());
p2.translate(-2, 3);
console.log(p2.toString());
const p3 = new Point(3, 4);
p3.rotate(90);
console.log(p3.toString());
const p4 = new Point(3, 4);
p4.scale(2);
console.log(p4.toString());




