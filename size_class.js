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

    compare(other){
        let a1 = this.area;
        let a2 = other.area;
        return a1 - a2;
    }

    get area() {
        return this.width * this.height;
    }
}

const s1 = new Size(1, 2);
console.log(s1.toString());
console.log(s1.isEqual(new Size(1, 2)));
console.log(s1.isEqual(new Size(3, 4)));

