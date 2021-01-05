class Animal {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("walk");
    }
}

class Cat {
    constructor() {
        this.name = "Mimi"; 
    }

    walk() {
        super.walk(); // animal
        super.walk(); // animal
        super.walk(); // animal
        super.walk(); // animal
        console.log("cat");
        console.log(this.name); // Mimi
    }

    meow() {
        this.walk() // calls cat's walk method
        super.walk(); // calls animal's walk method
        super.walk(); // calls animal's walk method
        this.walk() // calls cat's walk method
    }
}

class BlackCat extends Cat {
    // constructor() {
    //     super();
    // }

    walk() {
        super.walk(); // cat
        console.log("black cat");
    }
}

const a1 = new Animal("Tom"); // a1.name --> Tom
const a2 = new Animal("Rob"); // a2.name --> Rob

const c1 = new Cat(); // c1.name --> Mimi
const c2 = new Cat(); // c2.name --> Mimi
c2.name = "Wuwu"; // c2.name --> Wuwu

a1.walk(); // walk
c1.walk(); // walk \n cat

const b1 = new BlackCat(); // b1.name --> Mimi
b1.walk(); // walk \n cat \n black cat
