class Employee {
    constructor(name){
        this.name = name;
        this.salary = 40000;
        this.workingHours = 40;
        this.vacationDays = 10;
    }
}

class Marketer extends Employee {
    constructor(name){
        super(name);
        this.salary = 50000;
    }

    advertise(){
        console.log('Act now, while supplies last!');
    }
}

class Janitor extends Employee {
    constructor(name){
        super(name);
        this.salary = 30000;
        this.workingHours = 80;
        this.vacationDays = 5;
    }

    clean(){
        console.log("Workin' for the man.");
    }
}

class Lawyer extends Employee {
    constructor(name){
        super(name);
        this.vacationDays = 15;

    }

    sue(){
        console.log("I'll see you in court!");
    }
}

class HarvardLawyer extends Lawyer {
    constructor(name){
        super(name);
        this.vacationDays = 18;
        this.salary = 48000;
    }
}