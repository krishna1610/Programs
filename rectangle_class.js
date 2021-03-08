class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return `[x=${this.x}, y=${this.y}]`;
    }

    isEqual(other){
        return (this.x === other.x && this.y === other.y);
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

class Size {
    constructor(width, height){
        this.width = width;
        this.height= height;
    }

    toString(){
        return `[width=${this.width}, height=${this.height}]`;
    }

    isEqual(other){
        return (this.width === other.width && this.height === other.height);
    }
}

class Rectangle {
    // constructor(top, left, bottom, right)
    constructor(left, bottom, width, height) {
        this.point = new Point(left, bottom);
        this.size = new Size(width, height);
    }

    toString(){
        return `[x=${this.point.x}, y=${this.point.y}, width=${this.size.width}, height=${this.size.height}]`;
    }

    isEqual(other){
        return this.point.isEqual(other.point) && this.size.isEqual(other.size);
    }

    contains(other){
        let thisTopRightX = this.point.x + this.size.width;
        let thisTopRightY = this.point.y + this.size.height;

        let otherTopRightX = other.point.x + other.size.width;
        let otherTopRightY = other.point.y + other.size.height;

        return (this.point.x <= other.point.x && this.point.y <= other.point.y)
               && (thisTopRightX >= otherTopRightX && thisTopRightY >= otherTopRightY);
    }

    union(other){ // (1, 1, 3, 4) + (2, 2, 3, 4) = (1, 1, 4, 5)
        // (minX, minY) (maxX, maxY) --> maxRight - minLeft = width, maxTop - minBottom = height
        let minX = Math.min(this.left, other.left); // 1
        let minY = Math.min(this.bottom, other.bottom); // 1

        let maxX = Math.max(this.right, other.right);
        let maxY = Math.max(this.top, other.top);
 
        return new Rectangle(minX, minY, maxX - minX, maxY - minY);
    }

    get left() {
        return this.point.x;
    }

    get bottom() {
        return this.point.y;
    }

    get right() {
        return this.left + this.size.width;
    }

    get top() {
        return this.bottom + this.size.height;
    }

    intersection(other){
       let left = Math.max(this.left, other.left);
       let bottom = Math.max(this.bottom, other.bottom);

       let right = Math.min(this.right, other.right);
       let top = Math.min(this.top, other.top);

       // width = right - left; right - left > 0; right > left
       if(right > left && top > bottom){
           return new Rectangle(left, bottom, right - left, top - bottom);
       }else{
           return null;
       }
    }
}

const rectangle = new Rectangle(1, 2, 3, 4);
console.log(rectangle.toString());
console.log(rectangle.isEqual(new Rectangle(1, 2, 3, 4)));
console.log(rectangle.isEqual(new Rectangle(1, 3, 3, 4)));
console.log(rectangle.contains(new Rectangle(1,2,1,2)));
console.log(rectangle.union(new Rectangle(2, 3, 4, 5)).toString());
