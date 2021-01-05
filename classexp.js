class Range {
    constructor(min, max){
        this.min = min;
        this.max = max;
    }

    printRange(){
        for(let i=this.min; i<=this.max; i++){
            console.log(i);
        }
    }

    printPowersOfN(n){
        for(let i=this.min; i<=this.max; i++){
            console.log(Math.pow(i,n));
        }
    }
}
const range = new Range(5,9);
range.printRange();
range.printPowersOfN(3);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

class Quadractic {
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }
    printRoots(){
        let discriminant = Math.sqrt((this.b * this.b) - (4 * this.a * this.c))
        let root1 = ((- this.b) + discriminant) / (2 * this.a);
        let root2 = ((- this.b) - discriminant) / (2 * this.a);
        console.log(root1, root2);
    }

}
const roots = new Quadractic(5,6,1);
roots.printRoots();
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");


class Cylinder {
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    surfaceArea(){
        return (2 * Math.PI * this.radius) * (this.radius + this.height);
    }

    volume(){
        return Math.PI * this.radius * this.radius * this.height;
    }
}
const cylinder = new Cylinder(5,7);
console.log(cylinder.surfaceArea());
console.log(cylinder.volume());
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

class Sphere {
    constructor(radius){
        this.radius = radius;
    }

    surfaceArea(){
        return  4 * Math.PI * this.radius * this.radius;
    }

    volume(){
        return this.surfaceArea() * ((1/3) * this.radius);
    }
}
const sphere = new Sphere(6);
console.log(sphere.volume());
console.log(sphere.surfaceArea());
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");


class Triangle {
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    perimeter(){
        return this.a + this.b + this.c;   
    }

    area(){
        let s = this.perimeter()/2;
        return  Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    }

    triangleType(){
        if( (this.a === this.b) && (this.b === this.c) ){
            return 'equilateral';
        }else if((this.a === this.b) 
                 || (this.b === this.c)
                 || (this.a === this.c)){
                     return 'isosceles';
        }else{
            return 'scalene';
        }
    }
    
}
const triangle = new Triangle(5,5,7);
console.log(triangle.area());
console.log(triangle.perimeter());
console.log(triangle.triangleType());
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

class Rectangle {
    constructor(length, width){
        this.length = length;
        this.width = width;
    }

    perimeter(){
        return 2 * (this.length + this.width);
    }

    area(){
        return this.length * this.width;
    }
}
const rectangle = new Rectangle(7,8);
console.log(rectangle.perimeter());
console.log(rectangle.area());
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

class FractionSum {
    constructor(n){
        this.sum = 0;
        for(let i=1; i<=n; i++){
            this.sum += (1/i);
        }
    }
    print(){
        console.log(this.sum);
    }
}
const fractionsum = new FractionSum(6);
fractionsum.print();
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

class Month {
    constructor(month){
        if(month === 2){
            this._daysInMonth = 28;
        }else if([1, 3, 5, 7, 8, 10, 12].indexOf(month) >= 0){
                this._daysInMonth = 31;
        }else{
            this._daysInMonth = 30;

        }
    }
   
    get daysInMonth(){
        return this._daysInMonth;
    }
}
const month = new Month(5);
console.log(month.daysInMonth);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");


class Student {
    constructor(name, scores){
        this.name = name;
        let sum = 0;
        for(let num of scores){
            sum += num;
        }
        if(scores.length > 0){
            this.average = (sum / scores.length).toFixed(2);
        }else{
            this.average = 0;
        }
    }

    gpa(){
        return `${this.name}'s grade is ${this.average}`;
    }
}
const student = new Student('Krishna', [87,97,48,90,99,87]);
console.log(student.gpa());
const student1 = new Student("Pratik", []);
console.log(student1.gpa());
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");


class Stack {
    constructor(){
        this._items = [];
    }

    size(){
        return this._items.length;
    }

    push(item){
        this._items.push(item);
    }

    pop(){
        if(this.size() === 0){
            return 'EMPTY STACK';
        }else{
            return this._items.pop();
        }
    }    
}
const stack = new Stack();
console.log(stack.size());
stack.push(8);
stack.push(9);
stack.push(10);
console.log(stack.pop());
console.log(stack.size());
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");


class Queue {
    constructor(){
        this._items = []; 
    }
    
    add(item){
        this._items.push(item);
    }

    remove(){
        if(this.size() === 0){
            return 'EMPTY STACK';
        }else{
            return this._items.shift(); 
        }  
    }

    size(){
        return this._items.length;
    }
}
const queue = new Queue();
console.log(queue.size());
console.log(queue.remove());
queue.add(23);
queue.add(19);
queue.add(89);
console.log(queue.remove());
console.log(queue.size());
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    quadrant(){
        if(this.x === 0 || this.y === 0){
            return 0;
        }else if(this.x > 0 && this.y > 0){
            return 1;
        }else if(this.x < 0 && this.y > 0){
            return 2;
        }else if(this.x < 0 && this.y < 0){
            return 3;
        }else if(this.x > 0 && this.y < 0){
            return 4;
        }
    }
    
    flip(){
        let temp = this.x;
        this.x = -this.y;
        this.y = -temp;
    }

    manhattanDistance(other){
        return Math.abs(this.x - other.x) + Math.abs(this.y - other.y);
    }

    isVertical(other){
        return (this.x === other.x);
    }

    slop(other) {
        if(this.isVertical(other)){
            return 'VERTICAL POINTS';
        }else{
            return (other.y - this.y) / (other.x - this.x);
        }
    }

    isCollinear(p1, p2){
        return ((this.slop(p1) === this.slop(p2)) 
        && (this.slop(p2) === p1.slop(p2)));
    }
}
const point = new Point(3,4);
console.log(point.quadrant());
point.flip();
console.log(point.quadrant());
const point1 = new Point(9,5);
console.log(point.manhattanDistance(point1));
console.log(point.isVertical(point1));
console.log(point.slop(point1));
const point2 = new Point(7,8);
console.log(point.isCollinear(point1, point2));
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

class BinaryConverter {
    constructor(num){
        this.num = num;
    }

    toBinary(){
        if(this.num === 0){
            return '0';
        }
       let str = '';
       let number = this.num;
       while(number > 0){
           str += number % 2;
           number = Math.floor(number / 2);
       } 
       return str.split("").reverse().join("");
    }
}

let convertor = new BinaryConverter(10);
console.log(convertor.toBinary());
console.log(convertor.toBinary());
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

class IndexedArray {
    constructor(arr){
        let obj = {};
        for(let i=0; i<arr.length; i++){
            if(obj[arr[i]] === undefined){
                obj[arr[i]] = [i];
            }else{
                obj[arr[i]].push(i);
            }
        }
        this.freq = obj;
    }
    indexOf(n){
        if(this.freq[n] === undefined){
            return -1;
        }else{
            return this.freq[n][0];
        }
    }

    lastIndexOf(n){
        if(this.freq[n] === undefined){
            return -1;
        }else{
            return this.freq[n][this.freq[n].length - 1];
        }
    }

}

let indexArr = new IndexedArray([4, 3, 5, 3, 6]);
console.log(indexArr.indexOf(3));
console.log(indexArr.lastIndexOf(3));
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

class RangedArray{
    constructor(arr){
        this.maxValue = Math.max(...arr);
        this.minValue = Math.min(...arr);
    }
    range(){    
        return (this.maxValue - this.minValue) + 1;
    }
}
const rangearr = new RangedArray([5,8,9,18,29]);
console.log(rangearr.range());
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");


class FrequencyArray {
    constructor(arr){
        let obj = {};
        for(let i=0; i<arr.length; i++){
            if(obj[arr[i]] === undefined){
                obj[arr[i]] = 1;
            }else{
                obj[arr[i]]++;
            }
        }
        this.freq = obj;
    }
    frequencyOf(n){
      if(this.freq[n] === undefined){
          return 0;
      }else{
          return this.freq[n];
      }
    }

}
const freq = new FrequencyArray([3,4,5,4,1,4,4,4]);
console.log(freq.frequencyOf(9));
console.log(freq.frequencyOf(4));
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");

class FastArray {
    constructor(arr){
        this.arr = arr.sort((a,b)=> a - b);
    }
    
    kthLargest(k){
        return this.arr[this.arr.length - k];
    }

    kthSmallest(k){
        return this.arr[k - 1];
    }
   
}
const fastarr = new FastArray([2,8,6,10,4,6,8,9]);
console.log(fastarr.kthLargest(2));
console.log(fastarr.kthSmallest(3));
