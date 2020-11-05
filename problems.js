/* 1) Write a function named fibonacci that takes a number as parameter and returns nth Fibonacci number in the series.
The mathematical definition of each nth Fibonacci number is the following: */
console.log("1-Answer-----");

function fibonacci(n) {
    if(n <= 2){
        return 1;
    }else{
        let result = fibonacci((n-1)) + fibonacci((n-2));
        return result;
    }   
}
console.log(fibonacci(3));
console.log(fibonacci(12));

/* 2) Write a function named starSquare that takes a number as parameter and prints a pattern */
console.log("2-Answer-----");

function starSquare(num) {
    for (let j = 1; j <= num; j++) {
        let printStr = "";
        for (let i = 1; i <= num; i++) {
            printStr += "*";
        }
        console.log(printStr);
    }
}
starSquare(5);

/* 3) Write a function named starTriangle that takes a number as parameter and prints a pattern as follow: */
console.log("3-Answer-----");

function starTriangle(num) {
    for (let i = 1; i <= num; i++) {
        let printStar = "";
        for (let j = 1; j <= i; j++) {
            printStar = printStar + "*";
        }
        console.log(printStar);
    }
}
starTriangle(5);

/* 4) Write a function named numberTriangle that takes a number as parameter and prints a pattern as follow: */
console.log('4-Answer-----');

function numberTriangle(num) {
    for (let i = 1; i <= num; i++) {
        let printNum = "";
        for (j = 1; j <= i; j++) {
            printNum = printNum + i;
        }
        console.log(printNum);
    }
}
numberTriangle(3);

/* 5) Write a function named printGrid that accepts two integer parameters rows and cols. The output is a comma-separated 
grid of numbers where the first parameter (rows) represents the number of rows of the grid and the second parameter (cols) 
represents the number of columns. The numbers count up from 1 to (rows x cols). The output are displayed in column-major order, 
meaning that the numbers shown increase sequentially down each column and wrap to the top of the next column to the right once 
the bottom of the current column is reached. Assume that rows and cols are greater than 0. */
console.log('5-Answer-----');

function printGrid(rows, cols) {
    for (let i = 1; i <= rows; i++) {
        let printNumber = '';
        for (let j = 1; j <= cols; j++) {
            if (j == 1) {
                printNumber += i + ',';
            } else if ((j > 1) && (j < cols)) {
                printNumber += (rows + i) + ',';
            } else {
                printNumber += (rows + i);
            }


        }
        console.log(printNumber);
    }
}
printGrid(3, 6);
printGrid(5, 3);

/* 10) Write a function padString that accepts two parameters: a String and an integer representing a length. The function 
should pad the parameter string with spaces until its length is the given length. For example, padString("hello", 8) should 
return "   hello". (This sort of function is useful when trying to print output that lines up horizontally.) If the string's 
length is already at least as long as the length parameter, your function should return the original string. For example, 
padString("congratulations", 10) would return "congratulations".*/
console.log('10-Answer-----');

function padString(str, strLength) {
    if (str.length >= strLength) {
        return str;
    }
    let newStr = '';
    for (let i = 0; i < strLength - str.length; i++) {
        newStr += " ";
    }
    newStr += str;
    return newStr;
}
console.log(padString("congratulations", 10));
console.log(padString("hello", 8));
console.log(padString("Krishna", 7));

/* 15) Write a function named showTwos that shows the factors of 2 in a given integer. */
console.log('15-Answer-----');

function showTwos(number) {
    if (number % 2 != 0) {
        return number;
    }
}
console.log(showTwos(7));
console.log(showTwos(18));
console.log(showTwos(68));
console.log(showTwos(120));

/* 39)Write a JavaScript function to strip leading and trailing spaces from a string. */
console.log('39-Answer-----')

function strip(str) {
    return str.trim();
}
console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));

/* 33) Write a JavaScript function to hide email addresses to protect from unauthorized user. */
console.log('33-Answer-----');

function protectEmail(email) {
    let splitStr = email.split('@');
    return splitStr[0].slice(0, 5) + '...' + '@' + splitStr[1];
}
console.log(protectEmail("robin_singh@example.com"));

/* 19) Write a function named hasMidpoint that accepts three integers as parameters and returns true if one of the integers 
is the midpoint between the other two integers; that is, if one integer is exactly halfway between them. Your function should 
return false if no such midpoint relationship exists
The integers could be passed in any order; the midpoint could be the 1st, 2nd, or 3rd. You must check all cases. */
console.log('19-Answer-----')

function hasMidpoint(int1, int2, int3) {
    let minNum = Math.min(int1, int2, int3);
    let maxNum = Math.max(int1, int2, int3);
    let midNum = (maxNum + minNum) / 2;
    if (midNum == int1 || midNum == int2 || midNum == int3) {
        return true;
    }
    return false;

}

console.log(hasMidpoint(4, 6, 8));
console.log(hasMidpoint(2, 10, 6));
console.log(hasMidpoint(8, 8, 8));
console.log(hasMidpoint(25, 10, -5));

console.log(hasMidpoint(3, 1, 3));
console.log(hasMidpoint(1, 3, 1));
console.log(hasMidpoint(21, 9, 58));
console.log(hasMidpoint(2, 8, 16));

/* 18) Write a function named consecutive that accepts three integers as parameters and returns true if they are three 
consecutive numbers; that is, if the numbers can be arranged into an order such that there is some integer k such that 
the parameters' values are k, k+1, and k+2. Your function should return false if the integers are not consecutive. Note 
that order is not significant; your function should return the same result for the same three integers passed in any order. */
console.log('18-Answer-----');

function consecutive(num1, num2, num3) {

}

console.log(consecutive(1, 2, 3));
console.log(consecutive(3, 2, 4));
console.log(consecutive(-10, -8, -9));

console.log(consecutive(3, 5, 7));
console.log(consecutive(1, 2, 2));
console.log(consecutive(7, 7, 9));

/* 16) Write a function named gcd that accepts two integers as parameters and returns the greatest common divisor of the 
two numbers. The greatest common divisor (GCD) of two integers a and b is the largest integer that is a factor of both a and b. 
The GCD of any number and 1 is 1, and the GCD of any number and 0 is that number.

One efficient way to compute the GCD of two numbers is to use Euclid's algorithm, which states the following:

GCD(A, B) = GCD(B, A % B)
GCD(A, 0) = Absolute value of A

In other words, if you repeatedly mod A by B and then swap the two values, eventually B will store 0 and A will store the 
greatest common divisor.*/
console.log('16-Answer-----');

function gcd(num1, num2) {
    if (num1 == 0 || num2 == 0) {
        return 0;
    }
    if (num1 == 1 || num2 == 1) {
        return 1;
    }
    if (num1 < num2) {
        let temp = num2;
        num2 = num1;
        num1 = temp
    }
    gcd(num2, num1 % num2);
    return num2;
}
console.log(gcd(24, 84));
console.log(gcd(105, 45));
console.log(gcd(0, 8));
console.log(gcd(1, 9));