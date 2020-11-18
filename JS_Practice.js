/* 1) Write a function named fibonacci that takes a number as parameter and returns nth Fibonacci number in the series.
The mathematical definition of each nth Fibonacci number is the following: */

function fibonacci(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci((n - 1)) + fibonacci((n - 2));
    }
}

function fibonacciExp(cb, num) {
    console.log("1-Answer-----", num);
    console.log(cb(num));
    console.log("1-Answer-----End");
}
fibonacciExp(fibonacci, 3);
fibonacciExp(fibonacci, 5);


/* 2) Write a function named starSquare that takes a number as parameter and prints a pattern */

let starSquare = function (num) {
    for (let j = 1; j <= num; j++) {
        let printStr = "";
        for (let i = 1; i <= num; i++) {
            printStr += "*";
        }
        console.log(printStr);
    }
}

function printStarSquare(cb, num) {
    console.log("2-Answer-----", num);
    cb(num);
    console.log("2-Answer-----End");
}
printStarSquare(starSquare, 5);
printStarSquare(starSquare, 7);

/* 3) Write a function named starTriangle that takes a number as parameter and prints a pattern as follow: */

let starTriangle = function (num) {
    for (let i = 1; i <= num; i++) {
        let printStar = "";
        for (let j = 1; j <= i; j++) {
            printStar = printStar + "*";
        }
        console.log(printStar);
    }
}

function printStarTriangle(cb, num) {
    console.log("3-Answer-----", num);
    cb(num);
    console.log("3-Answer-----End");
}
printStarTriangle(starTriangle, 5);
printStarTriangle(starTriangle, 7);


/* 4) Write a function named numberTriangle that takes a number as parameter and prints a pattern as follow: */

let numberTriangle = function (num) {
    for (let i = 1; i <= num; i++) {
        let printNum = "";
        for (j = 1; j <= i; j++) {
            printNum = printNum + i;
        }
        console.log(printNum);
    }
}

function printNumberTriangle(callback, n) {
    console.log('4-Answer-----', n);
    callback(n);
    console.log('4-Answer-----End');
}
printNumberTriangle(numberTriangle, 3);

/* 5) Write a function named printGrid that accepts two integer parameters rows and cols. The output is a comma-separated 
grid of numbers where the first parameter (rows) represents the number of rows of the grid and the second parameter (cols) 
represents the number of columns. The numbers count up from 1 to (rows x cols). The output are displayed in column-major order, 
meaning that the numbers shown increase sequentially down each column and wrap to the top of the next column to the right once 
the bottom of the current column is reached. Assume that rows and cols are greater than 0. */

function printGrid(rows, cols) {
    for (let i = 1; i <= rows; i++) { // 1 
        let printNumber = '';
        for (let j = 0; j < cols; j++) { // 0 
            if (j < cols - 1) {
                printNumber += (i + rows * j) + ',';
            } else {
                printNumber += (i + rows * j);
            }
        }
        console.log(printNumber);
    }
}

function printGridNumbers(callback, rows, cols) {
    console.log('5-Answer-----', rows, cols);
    callback(rows, cols);
    console.log('5-Answer-----End');
}
printGridNumbers(printGrid, 3, 6);
printGridNumbers(printGrid, 5, 3);


/* 6) Write a function called largerAbsVal that takes two integers as parameters and returns the larger of the two absolute 
values. A call of largerAbsVal(11, 2) would return 11, and a call of largerAbsVal(4, -5) would return 5. */

function largerAbsVal(int1, int2) {
    return Math.max(Math.abs(int1), Math.abs(int2));
}
function printLargerAbsVal(callback, int1, int2){
    console.log('6-Answer-----', int1, int2);
    console.log(callback(int1, int2));
    console.log('6-Answer-----End');
}
printLargerAbsVal(largerAbsVal, 11, 2);
printLargerAbsVal(largerAbsVal, 4, -5);

/* 7) Write a function largestAbsVal that accepts three integers as parameters and returns the largest of their three absolute 
values. For example, a call of largestAbsVal(7, -2, -11) would return 11, and a call of largestAbsVal(-4, 5, 2) would return 5. */

function largestAbsVal(int1, int2, int3) {
    return Math.max(Math.abs(int1), Math.abs(int2), Math.abs(int3));
}
function printlargestAbsVal(callback, int1, int2, int3){
    console.log('7-Answer-----', int1, int2, int3);
    console.log(largestAbsVal(int1, int2, int3));
    console.log('7-Answer-----End');
}
printlargestAbsVal(largestAbsVal, 7, -2, -11);
printlargestAbsVal(largestAbsVal, -4, 5, 2);

/* 8) Write a function called quadratic that solves quadratic equations and prints their roots. Recall that a quadratic equation 
is a polynomial equation in terms of a variable x of the form a*x^2 + b*x + c = 0. 
Your function should accept the coefficients a, b, and c as parameters and should print the roots of the equation. You may assume 
that the equation has two real roots, though mathematically this is not always the case. */

let quadratic = function (a, b, c) {
    let squareRoot = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    let firstRoot = ((-b) + squareRoot) / 2 * a;
    let secondRoot = ((-b) - squareRoot) / 2 * a;
    console.log(firstRoot);
    console.log(secondRoot);
}
function printquadratic(cb, a, b, c){
    console.log('8-Answer-----', a, b, c);
    cb(a, b, c);
    console.log('8-Answer-----End');

}
printquadratic(quadratic, 1, -7, 12);
printquadratic(quadratic, 1, 3, 2);

/* 9) Write a function called triangleArea that accepts the three side lengths of a triangle (all real numbers) as parameters and 
returns the area of a triangle with those side lengths. For example, the call triangleArea(8, 5.2, 7.1) should 
return 18.151176098258745. To compute the area, use Heron's formula, which states that the area of a triangle whose three sides 
have lengths a, b, and c, is the following. The formula is based on the computed value s, a length equal to half the perimeter of 
the triangle:

area = √ (s (s-a)(s-b)(s-c))
where s = (a + b + c) / 2 */

function triangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt((s * (s - a) * (s - b) * (s - c)));
}
function printtriangleArea(cb, a, b, c){
    console.log('9-Answer-----', a, b, c);
    console.log(cb(a, b, c));
    console.log('9-Answer-----End');
}
printtriangleArea(triangleArea, 8, 5.2, 7.1);

/* 10) Write a function padString that accepts two parameters: a String and an integer representing a length. The function 
should pad the parameter string with spaces until its length is the given length. For example, padString("hello", 8) should 
return "   hello". (This sort of function is useful when trying to print output that lines up horizontally.) If the string's 
length is already at least as long as the length parameter, your function should return the original string. For example, 
padString("congratulations", 10) would return "congratulations".*/

let padString = function (str, strLength) {
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
function printpadString(callback, str, strLen){
    console.log('10-Answer-----', str, strLen);
    console.log(callback(str, strLen));
    console.log('10-Answer-----End');
}
printpadString(padString, "congratulations", 10);
printpadString(padString, "hello", 8);
printpadString(padString, "Krishna", 7);

/* 11) Write a function called vertical that accepts a String as its parameter and prints each letter of the string on separate 
lines. For example, a call of vertical("hey now") should produce the following output:
Note: Do not use split method on string instance. */

function vertical(str) {
    let vertical = "";
    for (let i = 0; i < str.length; i++) {
        if (i < str.length - 1) {
            vertical += str.charAt(i) + "\n";
        } else {
            vertical += str.charAt(i);
        }
    }
    console.log(vertical);
}
function printvertical(cb, str){
    console.log('11-Answer-----', str);
    cb(str);
    console.log('11-Answer-----End');
}
printvertical(vertical, "hey now");

/* 12) Write a function called printReverse that accepts a String as its parameter and prints the characters in opposite order.
call printReverse("hello there!")
Note: Do not use split method on string instance. */

function printReverse(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str.charAt(i);
    }
    return reverse;
}
function printReverseString(cb, str){
    console.log('12-Answer-----', str);
    console.log(cb(str));
    console.log('12-Answer-----End');
}
printReverseString(printReverse, "hello there!");

/* 13) Write a function called processName that accepts a String as a parameter and then prints the name in reverse order 
(i.e., last name, first name). You may assume that only a first and last name will be given. */

function processName(name) {
    let strings = name.split(" ");
    return strings[1] + " " + strings[0];
}
function printprocessName(cb, name){
    console.log('13-Answer-----', name);
    console.log(cb(name));
    console.log('13-Answer-----End');


}
printprocessName(processName,'Krishna Bhadkoliya');

/* 14) Write a function called printIndexed that accepts a String as its parameter and prints the String's characters in 
order followed by their indexes in reverse order. For example, the call of printIndexed("ZELDA"); should print Z4E3L2D1A0 
to the console. */

let printIndexed = function (str) {
    let stringWithIndex = "";
    for (let i = 0; i < str.length; i++) {
        stringWithIndex += str.charAt(i) + (str.length - (i + 1));
    }
    return stringWithIndex;
}
function callbackPrintIndexed(cb, str){
    console.log('14-Answer-----', str);
    console.log(cb(str));
    console.log('14-Answer-----End');
}
callbackPrintIndexed(printIndexed, 'ZELDA');

/* 15) Write a function named showTwos that shows the factors of 2 in a given integer. */

let showTwos = function (number) {
    let str = `${number} = `;
    while (number % 2 == 0) {
        number = number / 2;
        str += "2 * ";
    }
    str += `${number}`;
    return str;
}
function printshowTwos(cb, num){
    console.log('15-Answer-----', num);
    console.log(cb(num));
    console.log('15-Answer-----End');
}
printshowTwos(showTwos, 7);
printshowTwos(showTwos, 18);
printshowTwos(showTwos, 68);
printshowTwos(showTwos, 120);

/* 16) Write a function named gcd that accepts two integers as parameters and returns the greatest common divisor of the 
two numbers. The greatest common divisor (GCD) of two integers a and b is the largest integer that is a factor of both a and b. 
The GCD of any number and 1 is 1, and the GCD of any number and 0 is that number.

One efficient way to compute the GCD of two numbers is to use Euclid's algorithm, which states the following:

GCD(A, B) = GCD(B, A % B)
GCD(A, 0) = Absolute value of A

In other words, if you repeatedly mod A by B and then swap the two values, eventually B will store 0 and A will store the 
greatest common divisor.*/

function gcd(num1, num2) {
    if (num2 == 0) {
        return num1;
    }
    return gcd(num2, num1 % num2); // gcd(15, 3%15 == 3) // gcd(3, 15%3 == 0)
}
function printGCD(cb, num1, num2){
    console.log('16-Answer-----', num1, num2);
    console.log(cb(num1, num2));
    console.log('16-Answer-----End');
}
printGCD(gcd, 24, 84);
printGCD(gcd, 105, 45);
printGCD(gcd, 0, 8);
printGCD(gcd, 1, 9);

/* 17) Write a function named toBinary that accepts an integer as a parameter and returns a string of that number's 
representation in binary. For example, the call of toBinary(42) should return "101010". */

let toBinary = function (decimalNum) {
    let reminder = '';
    while (decimalNum > 0) {
        reminder += decimalNum % 2;
        decimalNum = Math.floor(decimalNum / 2);
    }
    return reminder.split("").reverse().join("");
}
function printtoBinary(cb, num){
    console.log('17-Answer-----', num);
    console.log(cb(num));
    console.log('17-Answer-----End');
}
printtoBinary(toBinary, 42);
printtoBinary(toBinary, 160);

/* 18) Write a function named consecutive that accepts three integers as parameters and returns true if they are three 
consecutive numbers; that is, if the numbers can be arranged into an order such that there is some integer k such that 
the parameters' values are k, k+1, and k+2. Your function should return false if the integers are not consecutive. Note 
that order is not significant; your function should return the same result for the same three integers passed in any order. */

function consecutive(int1, int2, int3) {
    if (int1 > int2) { // int1 = 5 int2 = 3
        let temp = int1; // temp = 5
        int1 = int2; // int1 = 3
        int2 = temp; // int2 = 5
    }
    if (int2 > int3) {
        let temp = int2;
        int2 = int3;
        int3 = temp;
    }
    if (int1 > int2) {
        let temp = int1;
        int1 = int2;
        int2 = temp;
    }
    return (int2 == int1 + 1) && (int3 == int1 + 2);
}
function printConsecutive(cb, n1, n2, n3){
    console.log('18-Answer-----', n1, n2, n3);
    console.log(cb(n1, n2, n3));
    console.log('18-Answer-----End');
}
printConsecutive(consecutive, 1, 2, 3);
printConsecutive(consecutive, 3, 2, 4);
printConsecutive(consecutive, -10, -8, -9);

printConsecutive(consecutive, 3, 5, 7);
printConsecutive(consecutive, 1, 2, 2);
printConsecutive(consecutive, 7, 7, 9);

/* 19) Write a function named hasMidpoint that accepts three integers as parameters and returns true if one of the integers 
is the midpoint between the other two integers; that is, if one integer is exactly halfway between them. Your function should 
return false if no such midpoint relationship exists
The integers could be passed in any order; the midpoint could be the 1st, 2nd, or 3rd. You must check all cases. */

let hasMidpoint = function (int1, int2, int3) {
    if (int1 > int2) { // int1 = 5 int2 = 3
        let temp = int1; // temp = 5
        int1 = int2; // int1 = 3
        int2 = temp; // int2 = 5
    }
    if (int2 > int3) {
        let temp = int2;
        int2 = int3;
        int3 = temp;
    }
    if (int1 > int2) {
        let temp = int1;
        int1 = int2;
        int2 = temp;
    }
    return int2 - int1 == int3 - int2;
}
function printHasMidpoint(cb, i1, i2, i3){
    console.log('19-Answer-----', i1, i2, i3);
    console.log(cb(i1, i2, i3));
    console.log('19-Answer-----End');
}
printHasMidpoint(hasMidpoint, 4, 6, 8);
printHasMidpoint(hasMidpoint, 2, 10, 6);
printHasMidpoint(hasMidpoint, 8, 8, 8);
printHasMidpoint(hasMidpoint, 25, 10, -5);
printHasMidpoint(hasMidpoint, 3, 1, 3);
printHasMidpoint(hasMidpoint, 1, 3, 1);
printHasMidpoint(hasMidpoint, 21, 9, 58);
printHasMidpoint(hasMidpoint, 2, 8, 16);

/* 20) Write a function dominant that accepts three integers as parameters and returns true if any one of the three integers is 
larger than the sum of the other two integers. The integers might be passed in any order, so the largest value could be any of 
the three. If no value is larger than the sum of the other two, your function should return false.

For example, the call of dominant(4, 9, 2) would return true because 9 is larger than 4 + 2. The call of dominant(5, 3, 7) would 
return false because none of those three numbers is larger than the sum of the others. You may assume that none of the numbers 
is negative. */

function dominant(int1, int2, int3) {
    return ((int1 + int2) < int3) ||
        ((int2 + int3) < int1) ||
        ((int1 + int3) < int2);
}
function printDominant(cb, i1, i2, i3){
    console.log('20-Answer-----', i1, i2, i3);
    console.log(cb(i1, i2, i3));
    console.log('20-Answer-----End');
}
printDominant(dominant, 4, 9, 2);
printDominant(dominant, 5, 3, 7);

/* 21) Write a function named digitRange that accepts an integer as a parameter and returns the range of values of its digits. 
The range is defined as 1 more than the difference between the largest and smallest digit value. For example, the call of 
digitRange(68437) would return 6 because the largest digit value is 8 and the smallest is 3, so 8 - 3 + 1 = 6. If the number 
contains only one digit, return 1. You should solve this problem without using a String conversion.*/

function digitRange(int) {
    let min = 9;
    let max = 0;
    while (int > 0) {
        let digit = int % 10;
        if (digit < min) {
            min = digit;
        }
        if (digit > max) {
            max = digit;
        }
        int = Math.floor(int / 10);
    }
    return max - min + 1;
}
function printDigitRange(cb, int){
    console.log('21-Answer-----', int);
    console.log(cb(int));
    console.log('21-Answer-----End');
}
printDigitRange(digitRange, 68437);

/* 22) Write a function named swapDigitPairs that accepts a positive integer n as a parameter and returns a new 
integer whose value is similar to n's but with each pair of digits swapped in order. For example, the call of 
swapDigitPairs(482596) would return 845269. Notice that the 9 and 6 are swapped, as are the 2 and 5, and the 4 and 8. 
If the number contains an odd number of digits, leave the leftmost digit in its original place. For example, the call 
of swapDigitPairs(1234567) would return 1325476. You should solve this problem without using a String. */

const swapDigitPairs = function (n) {
    let finalResult = '';
    while (n >= 10) {
        let lastDigit = n % 10;
        let secondLastDigit = Math.floor(n / 10) % 10;
        n = Math.floor(n / 100);
        finalResult = `${lastDigit}${secondLastDigit}` + finalResult;
    }
    if (n != 0) {
        finalResult = `${n}` + finalResult;
    }
    return finalResult;
}
function swapDigitPairsPrint(cb, n){
    console.log('22-Answer-----', n);
    console.log(cb(n));
    console.log('22-Answer-----End');
}
swapDigitPairsPrint(swapDigitPairs, 482596);
swapDigitPairsPrint(swapDigitPairs, 1234567);
swapDigitPairsPrint(swapDigitPairs, 180288);
swapDigitPairsPrint(swapDigitPairs, 103546);

/* 23) Write a function named allDigitsOdd that returns whether every digit of a given integer is odd. Your function should 
return true if the number consists entirely of odd digits and false if any of its digits are even. 0, 2, 4, 6, and 8 are even 
digits, and 1, 3, 5, 7, 9 are odd digits. */

let allDigitsOdd = function (num) {
    while (num > 0) {
        let digit = num % 10;
        if (digit % 2 == 0) {
            return false;
        }
        num = Math.floor(num / 10);
    }
    return true;
}
function allDigitsOddPrint(cb, num){
    console.log('23-Answer-----', num);
    console.log(cb(num));
    console.log('23-Answer-----End');
}
allDigitsOddPrint(allDigitsOdd, 579);
allDigitsOddPrint(allDigitsOdd, 3211);
allDigitsOddPrint(allDigitsOdd, 33332);

/* 24) Write a function named hasAnOddDigit that returns whether any digit of an integer is odd. Your function should return true 
if the number has at least one odd digit and false if none of its digits are odd. 0, 2, 4, 6, and 8 are even digits, 
and 1, 3, 5, 7, 9 are odd digits. */

function hasAnOddDigit(num) {
    while (num > 0) {
        let digit = num % 10;
        if (digit % 2 != 0) {
            return true;
        }
        num = Math.floor(num / 10);
    }
    return false;
}
function hasAnOddDigitPrint(cb, num){
    console.log('24-Answer-----', num);
    console.log(cb(num));
    console.log('24-Answer-----End');
}
hasAnOddDigitPrint(hasAnOddDigit, 468);
hasAnOddDigitPrint(hasAnOddDigit, 3468);

/* 25) Write a function named isAllVowels that returns whether a String consists entirely of vowels (a, e, i, o, or u, 
case-insensitively). If every character of the String is a vowel, your function should return true. If any character 
of the String is a non-vowel, your function should return false. Your function should return true if passed the empty 
string, since it does not contain any non-vowel characters.
Note: Do not use split method on string instance.*/

const isAllVowels = function (str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != 'a' &&
            str.charAt(i) != 'e' &&
            str.charAt(i) != 'i' &&
            str.charAt(i) != 'o' &&
            str.charAt(i) != 'u') {
            return false;
        }
    }
    return true;
}
function isAllVowelsPrint(cb, str){
    console.log('25-Answer-----', str);
    console.log(cb(str));
    console.log('25-Answer-----End');
}
isAllVowelsPrint(isAllVowels, "apple");
isAllVowelsPrint(isAllVowels, "aeio");

/*26) Write a function called charsSorted that accepts a String as its parameter and returns true if the characters in the 
string appear in sorted alphabetical order. For example, the calls of charsSorted("abcde") and charsSorted("bins") should 
return true, but the call of charsSorted("beads") should return false.*/

function charsSorted(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i) >= str.charCodeAt(i + 1)) {
            return false;
        }
    }
    return true;
}
function charsSortedPrint(callback, str){
    console.log('26-Answer-----', str);
    console.log(callback(str));
    console.log('26-Answer-----End');
}
charsSortedPrint(charsSorted, "beads");
charsSortedPrint(charsSorted, "abcde");
charsSortedPrint(charsSorted, "bins");

/* 27) Write a function named vowelCount that accepts a string and returns the number of vowels (a, e, i, o, or u) that 
the string contains.

For example, the call of vowelCount("kookaburra") should return 5 (two o's, 2 a's, and one u). When passed a string without 
any vowels (such as an empty string, "01234", or "sky"), 0 should be returned.*/

const vowelCount = function (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' ||
            str.charAt(i) == 'e' ||
            str.charAt(i) == 'i' ||
            str.charAt(i) == 'o' ||
            str.charAt(i) == 'u') {
            count++;
        }
    }
    return count;
}
function vowelCountPrint(cb, str){
    console.log('27-Answer-----', str);
    console.log(cb(str));
    console.log('27-Answer-----End');
}
vowelCountPrint(vowelCount, "kookaburra");
vowelCountPrint(vowelCount, "01234");
vowelCountPrint(vowelCount, "sky");
vowelCountPrint(vowelCount, "Krishna");

/* 28) Write a JavaScript function to check whether an input is a string or not. */

function isString(input) {
    return typeof input == "string";
}
function isStringPrint(cb, input){
    console.log('28-Answer-----', input);
    console.log(cb(input));
    console.log('28-Answer-----End');
}
isStringPrint(isString, 'W3School');
isStringPrint(isString, 2);

/* 29) Write a JavaScript function to check whether a string is blank or not. */

const isBlank = function (str) {
    return str.trim() == '';
}
function isBlankPrint(cb, str){
    console.log('29-Answer-----',str);
    console.log(cb(str));
    console.log('29-Answer-----End');
}
isBlankPrint(isBlank, '');
isBlankPrint(isBlank, '\n');
isBlankPrint(isBlank, '\t');
isBlankPrint(isBlank, ' ');
isBlankPrint(isBlank, ' abc ');

/* 30) Write a JavaScript function to extract a specified number of characters from a string. */

const truncateString = function (str, num) {
    return str.slice(0, num);
}
function truncateStringPrint(cb, str, num){
    console.log('30-Answer-----', str, num);
    console.log(cb(str, num));
    console.log('30-Answer-----End');
}
truncateStringPrint(truncateString, "Robin Singh", 4);

/*31) Write a JavaScript function to split a string and convert it into an array of words and returns it. */

function stringToArray(str) {
    return str.split(" ");
}
function stringToArrayPrint(cb, str){
    console.log('31-Answer-----', str);
    console.log(cb(str));
    console.log('31-Answer-----End');
}
stringToArrayPrint(stringToArray, "Robin Singh");

/* 32) Write a JavaScript function to convert a string in abbreviated form. */

function abbrevName(str) {
    let newStrings = str.split(" ");
    return newStrings[0] + " " + newStrings[1].charAt(0) + ".";
}
function abbrevNameprint(cb, str){
    console.log('32-Answer-----', str);
    console.log(cb(str));
    console.log('32-Answer-----End');
}
abbrevNameprint(abbrevName, "Robin Singh");

/* 33) Write a JavaScript function to hide email addresses to protect from unauthorized user. */

const protectEmail = function (email) {
    let splitStr = email.split('@');
    return splitStr[0].slice(0, 5) + '...' + '@' + splitStr[1];
}
function protectEmailPrint(email, cb){
    console.log('33-Answer-----', email);
    console.log(cb(email));
    console.log('33-Answer-----End');
}
protectEmailPrint("robin_singh@example.com", protectEmail);

/* 34) Write a JavaScript function to parameterize a string. */

function stringParameterize(str) {
    return str.replace(/ /gi, "-");
}
function stringParameterizePrint(cb, str){
    console.log('34-Answer-----', str);
    console.log(cb(str));
    console.log('34-Answer-----End');
}
stringParameterizePrint(stringParameterize, "Robin Singh from USA.");

/* 35) Write a JavaScript function to capitalize the first letter of a string. */

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
function capitalizePrint(cb, str){
    console.log('35-Answer-----', str);
    console.log(cb(str));
    console.log('35-Answer-----End');
}
capitalizePrint(capitalize, 'js string exercises');

/* 36) Write a JavaScript function to capitalize the first letter of each word in a string. */

let capitalizeWords = function (str) {
    let capitalizeString = "";
    let newStrings = str.split(" ");
    for (let i = 0; i < newStrings.length; i++) {
        capitalizeString += newStrings[i].charAt(0).toUpperCase() + newStrings[i].slice(1) + " ";
    }
    return capitalizeString.trim();
}
function capitalizeWordsPrint(cb, str){
    console.log('36-Answer-----', str);
    console.log(cb(str));
    console.log('36-Answer-----End');
}
capitalizeWordsPrint(capitalizeWords, 'js string exercises');

/* 37) Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper 
case letters to lower case, and lower case letters to upper case. */

function swapcase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        // let x += condition ? value1 : value2 ;
        result += (str.charAt(i) == str.charAt(i).toUpperCase()) ?
            str.charAt(i).toLowerCase() :
            str.charAt(i).toUpperCase();
    }
    return result;
}
function swapcasePrint(cb, str){
    console.log('37-Answer-----', str);
    console.log(cb(str));
    console.log('37-Answer-----End');
}
swapcasePrint(swapcase, 'AaBbc');

/* 38) Write a JavaScript function to convert a string into camel case. */

let camelize = function (str) {
    let newString = "";
    let splitStrings = str.split(" ");
    for (let i = 0; i < splitStrings.length; i++) {
        newString += splitStrings[i].charAt(0).toUpperCase() + splitStrings[i].slice(1);
    }
    return newString;
}
function camelizePrint(cb, str){
    console.log('38-Answer-----', str);
    console.log(cb(str));
    console.log('38-Answer-----End');
}
camelizePrint(camelize, "JavaScript Exercises");
camelizePrint(camelize, "JavaScript exercises");
camelizePrint(camelize, "JavaScriptExercises");

/* 39)Write a JavaScript function to strip leading and trailing spaces from a string. */

const strip = function (str) {
    return str.trim();
}
function stripPrint(cb, str){
    console.log('39-Answer-----', str);
    console.log(cb(str));
    console.log('39-Answer-----End');
}
stripPrint(strip, 'w3resource ');
stripPrint(strip, ' w3resource');
stripPrint(strip, ' w3resource ');

/* 40) Write a JavaScript function to find a word within a string. */

function searchWord(str, word) {
    return str.search(word) >= 0;
}
let fxnCallback = function (cb, str, word){
    console.log('40-Answer-----', str, word);
    console.log(cb(str, word));
    console.log('40-Answer-----End');

}
fxnCallback(searchWord, 'The quick brown fox', 'fox');
fxnCallback(searchWord, 'aa, bb, cc, dd, aa', 'ab');