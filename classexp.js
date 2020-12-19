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

let roots = new Quadractic(5,6,1);
roots.printRoots();

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

class FractionSum {
    constructor(n){
        this.n = n;
    }

    print(){
        let sum = 0;
        for(let i=1; i<=this.n; i++){
            sum += (1/i);
        }
        console.log(sum);
    }
}

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

class Student {
    constructor(name, scores){
        this.name = name;
        this.scores = scores;
    }

    gpa(){
        let sum = 0;
        for(let num in this.scores){
            sum += num;
        }
        let average = sum / this.scores.length;

        return `${this.name}'s grade is ${average}`;
    }
}

class Stack {
    constructor(){
        this._items = [];
    }

    push(item){
        this._items.push(item);
    }

    pop(){
        if(this._items.length === 0){
            return 'EMPTY STACK';
        }else{
            this._items.pop();
        }
    }

    size(){
        return this._items.length;
    }
}

class Queue {
    constructor(){
        this._items = []; 
    }
    
    add(item){
        this._items.push(item);
    }

    remove(){
        if(this._items.length === 0){
            return 'EMPTY STACK';
        }else{
            this._items.shift(); 
        }  
    }

    size(){
        return this._items.length;
    }
}

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
    // how to return object 
    flip(){
        let temp = this.x;
        this.x = -this.y;
        this.y = -temp;
        return [this.x, this.y];
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

class BinaryConverter {
    constructor(num){
        this.num = num;
    }

    toBinary(){
        let str = '';
       while(this.num > 0){
           str += this.num % 2;
           this.num = Math.floor(this.num / 2);
       } 
       return str.split("").reverse().join("");
    }
}

let binaryConvertor = new BinaryConverter(13);
console.log(binaryConvertor.toBinary());

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


class RangedArray{
    constructor(arr){
        this.maxValue = Math.max(...arr);
        this.minValue = Math.min(...arr);
    }
    range(){    
        return (this.maxValue - this.minValue) + 1;
    }
}

class FrequencyArray {
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
    frequencyOf(n){
      if(this.freq[n] === undefined){
          return 0;
      }else{
          return this.freq[n];
      }
    }

}

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

