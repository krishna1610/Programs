class TimeSpan {
    constructor(hours, minutes, seconds){
        this._hours = hours;
        this._minutes = minutes;
        this._seconds = seconds;
    }

    get hours(){
        return this._hours;
    }
    
    get minutes(){
        return this._minutes;
    }

    get seconds(){
        return this._seconds;
    }

    toString(){
        let hours = String(this.hours).padStart(2,'0');
        let minutes = String(this.minutes).padStart(2, '0');
        let seconds = String(this.seconds).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    add(other){
        this._hours = this.hours + other.hours;
        this._minutes = this.minutes + other.minutes;
        this._seconds = this.seconds + other.seconds;
        if(this.seconds > 59){
            this._minutes += 1;
            this._seconds -= 60;
        }
        if(this.minutes > 59){
            this._hours += 1;
            this._minutes -= 60;
        }
    }

    subtract(other){
        this._hours = this.hours - other.hours;
        this._minutes = this.minutes - other.minutes;
        this._seconds = this.seconds - other.seconds;
        if(this.seconds < 0){
            this._minutes -= -1;
            this._seconds += 60;
        }
        if(this.minutes < 0){
            this._hours -= 1;
            this._minutes += 60;
        }
    }

    scale(factor){
        this._hours = this.hours * factor;
        this._minutes = this.minutes * factor;
        this._seconds = this.seconds * factor;

        
        this._minutes += Math.floor(this.seconds / 60);
        this._seconds = this.seconds % 60;
       
        this._hours += Math.floor(this.minutes / 60);
        this._minutes = this.minutes % 60;

    }
}

let t = new TimeSpan(1, 30, 45);
console.log(t.hours);
console.log(t.minutes);
console.log(t.seconds);
console.log(t.toString());
let a = new TimeSpan(2, 30, 30);
let b = new TimeSpan(4, 45, 30);
a.add(b);
console.log(a.toString());
let x = new TimeSpan(4, 30, 30);
let y = new TimeSpan(2, 45, 30);
x.subtract(y);
console.log(x.toString());
let timeFactor = new TimeSpan(1, 30, 30);
timeFactor.scale(5);
console.log(timeFactor.toString());