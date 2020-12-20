function numberToString(num) {
    return num.toString();
    //return String(num);
}

function increase(num) {
    return num + 1;
    //num = num + 1;
}

function decrease(num) {
    return num - 1;
}

function add(x, y) {
    return x + y;
}

function substract(x, y) {
    return x - y;
}

function mutlipy(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function square(x) {
    return mutlipy(x, x);
}

function calculate(op, x, y) {
    switch (op) {
        case "add":
            return add(x, y);
        case "subtract":
            return substract(x, y);
        case "multiply":
            return mutlipy(x, y);
        case "divide":
            return divide(x, y);
    }
}

function isGreaterThan(a, b) { // 6, 5
    return a > b;
}

function isLessThan(a, b) { // 5, 6
    return a < b;
}

function isEqual(a, b) { // 5, 5  
    return !(isGreaterThan(a, b) || isGreaterThan(b, a));
    // return  ! ((a > b) || (b > a)); 
}

function minimum(x, y) {
    return (x < y) ? x : y;
}

function maximum(x, y) {
    return (minimum(x, y) == x) ? y : x;
}

function isEven(n) {
    return n % 2 === 0;
}

function isOdd(n) {
    return !(isEven(n));
}

function letterGrade(score, total) {
    let percentage = Math.round((score * 100) / total);
    if (percentage >= 90) {
        return 'A';
    } else if (percentage >= 80) {
        return 'B';
    } else if (percentage >= 70) {
        return 'C';
    } else if (percentage >= 60) {
        return 'D';
    } else if (percentage < 60) {
        return 'F';
    }
}

function incrementReviews(restaurant) {
    let obj = {
        ...restaurant
    };
    obj.reviews = (obj.reviews === undefined) ? 1 : obj.reviews + 1;
    return obj;
}

function combine(word1, word2) {
    return word1 + " " + word2;
}

function createCircle(radius) {
    return {
        circumferance: (2 * Math.PI * radius),
        area: (Math.PI * radius * radius)
    };
}



/*{
    obj1 = {name:'krishna' , age:25}
    obj2 = {name:'krishna', age:26}

}*/