/* 1) Write a function named fibonacci that takes a number as parameter and returns nth Fibonacci number in the series.
The mathematical definition of each nth Fibonacci number is the following: */
console.log("1-Answer-----");

function fibonacci(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci((n - 1)) + fibonacci((n - 2));
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
printGrid(3, 6);
printGrid(5, 3);

/* 6) Write a function called largerAbsVal that takes two integers as parameters and returns the larger of the two absolute 
values. A call of largerAbsVal(11, 2) would return 11, and a call of largerAbsVal(4, -5) would return 5. */
console.log('6-Answer-----');

function largerAbsVal(int1, int2) {
    return Math.max(Math.abs(int1), Math.abs(int2));
}
console.log(largerAbsVal(11, 2));
console.log(largerAbsVal(4, -5));

/* 7) Write a function largestAbsVal that accepts three integers as parameters and returns the largest of their three absolute 
values. For example, a call of largestAbsVal(7, -2, -11) would return 11, and a call of largestAbsVal(-4, 5, 2) would return 5. */
console.log('7-Answer-----');

function largestAbsVal(int1, int2, int3) {
    return Math.max(Math.abs(int1), Math.abs(int2), Math.abs(int3));
}
console.log(largestAbsVal(7, -2, -11));
console.log(largestAbsVal(-4, 5, 2));

/* 8) Write a function called quadratic that solves quadratic equations and prints their roots. Recall that a quadratic equation 
is a polynomial equation in terms of a variable x of the form a*x^2 + b*x + c = 0. 
Your function should accept the coefficients a, b, and c as parameters and should print the roots of the equation. You may assume 
that the equation has two real roots, though mathematically this is not always the case. */
console.log('8-Answer-----');

function quadratic(a, b, c) {
    let squareRoot = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    let firstRoot = ((-b) + squareRoot) / 2 * a;
    let secondRoot = ((-b) - squareRoot) / 2 * a;
    console.log(firstRoot);
    console.log(secondRoot);
}
quadratic(1, -7, 12);
quadratic(1, 3, 2);

/* 9) Write a function called triangleArea that accepts the three side lengths of a triangle (all real numbers) as parameters and 
returns the area of a triangle with those side lengths. For example, the call triangleArea(8, 5.2, 7.1) should 
return 18.151176098258745. To compute the area, use Heron's formula, which states that the area of a triangle whose three sides 
have lengths a, b, and c, is the following. The formula is based on the computed value s, a length equal to half the perimeter of 
the triangle:

area = √ (s (s-a)(s-b)(s-c))
where s = (a + b + c) / 2 */
console.log('9-Answer-----');

function triangleArea(a, b, c) {
    let s = (a + b + c) / 2;
    return Math.sqrt((s * (s - a) * (s - b) * (s - c)));
}
console.log(triangleArea(8, 5.2, 7.1));

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

/* 11) Write a function called vertical that accepts a String as its parameter and prints each letter of the string on separate 
lines. For example, a call of vertical("hey now") should produce the following output:
Note: Do not use split method on string instance. */
console.log('11-Answer-----');

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
vertical("hey now");

/* 12) Write a function called printReverse that accepts a String as its parameter and prints the characters in opposite order.
call printReverse("hello there!")
Note: Do not use split method on string instance. */
console.log('12-Answer-----');

function printReverse(str) {
    let reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str.charAt(i);
    }
    return reverse;
}
console.log(printReverse("hello there!"));

/* 13) Write a function called processName that accepts a String as a parameter and then prints the name in reverse order 
(i.e., last name, first name). You may assume that only a first and last name will be given. */
console.log('13-Answer-----');

function processName(name) {
    let strings = name.split(" ");
    return strings[1] + " " + strings[0];
}
console.log(processName('Krishna Bhadkoliya'));

/* 14) Write a function called printIndexed that accepts a String as its parameter and prints the String's characters in 
order followed by their indexes in reverse order. For example, the call of printIndexed("ZELDA"); should print Z4E3L2D1A0 
to the console. */
console.log('14-Answer-----');

function printIndexed(str) {
    let stringWithIndex = "";
    for (let i = 0; i < str.length; i++) {
        stringWithIndex += str.charAt(i) + (str.length - (i + 1));
    }
    return stringWithIndex;
}
console.log(printIndexed('ZELDA'));

/* 15) Write a function named showTwos that shows the factors of 2 in a given integer. */
console.log('15-Answer-----');

function showTwos(number) {
    let str = `${number} = `;
    while (number % 2 == 0) {
        number = number / 2;
        str += "2 * ";
    }
    str += `${number}`;
    return str;
}
console.log(showTwos(7));
console.log(showTwos(18));
console.log(showTwos(68));
console.log(showTwos(120));

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
    if (num2 == 0) {
        return num1;
    }
    return gcd(num2, num1 % num2); // gcd(15, 3%15 == 3) // gcd(3, 15%3 == 0)
}
console.log(gcd(24, 84));
console.log(gcd(105, 45));
console.log(gcd(0, 8));
console.log(gcd(1, 9));

/* 17) Write a function named toBinary that accepts an integer as a parameter and returns a string of that number's 
representation in binary. For example, the call of toBinary(42) should return "101010". */
console.log('17-Answer-----');

function toBinary(decimalNum) {
    let reminder = '';
    while (decimalNum > 0) {
        reminder += decimalNum % 2;
        decimalNum = Math.floor(decimalNum / 2);
    }
    return reminder.split("").reverse().join("");
}
console.log(toBinary(42));
console.log(toBinary(160));

/* 18) Write a function named consecutive that accepts three integers as parameters and returns true if they are three 
consecutive numbers; that is, if the numbers can be arranged into an order such that there is some integer k such that 
the parameters' values are k, k+1, and k+2. Your function should return false if the integers are not consecutive. Note 
that order is not significant; your function should return the same result for the same three integers passed in any order. */
console.log('18-Answer-----');

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

console.log(consecutive(1, 2, 3));
console.log(consecutive(3, 2, 4));
console.log(consecutive(-10, -8, -9));

console.log(consecutive(3, 5, 7));
console.log(consecutive(1, 2, 2));
console.log(consecutive(7, 7, 9));

/* 19) Write a function named hasMidpoint that accepts three integers as parameters and returns true if one of the integers 
is the midpoint between the other two integers; that is, if one integer is exactly halfway between them. Your function should 
return false if no such midpoint relationship exists
The integers could be passed in any order; the midpoint could be the 1st, 2nd, or 3rd. You must check all cases. */
console.log('19-Answer-----')

function hasMidpoint(int1, int2, int3) {
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
console.log(hasMidpoint(4, 6, 8));
console.log(hasMidpoint(2, 10, 6));
console.log(hasMidpoint(8, 8, 8));
console.log(hasMidpoint(25, 10, -5));
console.log(hasMidpoint(3, 1, 3));
console.log(hasMidpoint(1, 3, 1));
console.log(hasMidpoint(21, 9, 58));
console.log(hasMidpoint(2, 8, 16));

/* 20) Write a function dominant that accepts three integers as parameters and returns true if any one of the three integers is 
larger than the sum of the other two integers. The integers might be passed in any order, so the largest value could be any of 
the three. If no value is larger than the sum of the other two, your function should return false.

For example, the call of dominant(4, 9, 2) would return true because 9 is larger than 4 + 2. The call of dominant(5, 3, 7) would 
return false because none of those three numbers is larger than the sum of the others. You may assume that none of the numbers 
is negative. */
console.log('20-Answer-----');

function dominant(int1, int2, int3) {
    return ((int1 + int2) < int3) ||
        ((int2 + int3) < int1) ||
        ((int1 + int3) < int2);
}
console.log(dominant(4, 9, 2));
console.log(dominant(5, 3, 7));

/* 21) Write a function named digitRange that accepts an integer as a parameter and returns the range of values of its digits. 
The range is defined as 1 more than the difference between the largest and smallest digit value. For example, the call of 
digitRange(68437) would return 6 because the largest digit value is 8 and the smallest is 3, so 8 - 3 + 1 = 6. If the number 
contains only one digit, return 1. You should solve this problem without using a String conversion.*/
console.log('21-Answer-----');

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
console.log(digitRange(68437));

/* 22) Write a function named swapDigitPairs that accepts a positive integer n as a parameter and returns a new 
integer whose value is similar to n's but with each pair of digits swapped in order. For example, the call of 
swapDigitPairs(482596) would return 845269. Notice that the 9 and 6 are swapped, as are the 2 and 5, and the 4 and 8. 
If the number contains an odd number of digits, leave the leftmost digit in its original place. For example, the call 
of swapDigitPairs(1234567) would return 1325476. You should solve this problem without using a String. */
console.log('22-Answer-----');

function swapDigitPairs(n) {
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
console.log(swapDigitPairs(482596));
console.log(swapDigitPairs(1234567));
console.log(swapDigitPairs(180288));
console.log(swapDigitPairs(103546));

/* 23) Write a function named allDigitsOdd that returns whether every digit of a given integer is odd. Your function should 
return true if the number consists entirely of odd digits and false if any of its digits are even. 0, 2, 4, 6, and 8 are even 
digits, and 1, 3, 5, 7, 9 are odd digits. */
console.log('23-Answer-----');

function allDigitsOdd(num) {
    while (num > 0) {
        let digit = num % 10;
        if (digit % 2 == 0) {
            return false;
        }
        num = Math.floor(num / 10);
    }
    return true;
}
console.log(allDigitsOdd(579));
console.log(allDigitsOdd(3211));
console.log(allDigitsOdd(33332));

/* 24) Write a function named hasAnOddDigit that returns whether any digit of an integer is odd. Your function should return true 
if the number has at least one odd digit and false if none of its digits are odd. 0, 2, 4, 6, and 8 are even digits, 
and 1, 3, 5, 7, 9 are odd digits. */
console.log('24-Answer-----');

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
console.log(hasAnOddDigit(468));
console.log(hasAnOddDigit(3468));

/* 25) Write a function named isAllVowels that returns whether a String consists entirely of vowels (a, e, i, o, or u, 
case-insensitively). If every character of the String is a vowel, your function should return true. If any character 
of the String is a non-vowel, your function should return false. Your function should return true if passed the empty 
string, since it does not contain any non-vowel characters.
Note: Do not use split method on string instance.*/
console.log('25-Answer-----');

function isAllVowels(str) {
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
console.log(isAllVowels("apple"));
console.log(isAllVowels("aeio"));

/*26) Write a function called charsSorted that accepts a String as its parameter and returns true if the characters in the 
string appear in sorted alphabetical order. For example, the calls of charsSorted("abcde") and charsSorted("bins") should 
return true, but the call of charsSorted("beads") should return false.*/
console.log('26-Answer-----');

function charsSorted(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i) >= str.charCodeAt(i + 1)) {
            return false;
        }
    }
    return true;
}
console.log(charsSorted("beads"));
console.log(charsSorted("abcde"));
console.log(charsSorted("bins"));

/* 27) Write a function named vowelCount that accepts a string and returns the number of vowels (a, e, i, o, or u) that 
the string contains.

For example, the call of vowelCount("kookaburra") should return 5 (two o's, 2 a's, and one u). When passed a string without 
any vowels (such as an empty string, "01234", or "sky"), 0 should be returned.*/
console.log('27-Answer-----');

function vowelCount(str) {
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
console.log(vowelCount("kookaburra"));
console.log(vowelCount("01234"));
console.log(vowelCount("sky"));
console.log(vowelCount("Krishna"));

/* 28) Write a JavaScript function to check whether an input is a string or not. */
console.log('28-Answer-----');

function isString(input) {
    return typeof input == "string";
}
console.log(isString('W3School'));
console.log(isString(2));

/* 29) Write a JavaScript function to check whether a string is blank or not. */
console.log('29-Answer-----');

function isBlank(str) {
    return str.trim() == '';
}
console.log(isBlank(''));
console.log(isBlank('\n'));
console.log(isBlank('\t'));
console.log(isBlank(' '));
console.log(isBlank(' abc '));

/* 30) Write a JavaScript function to extract a specified number of characters from a string. */
console.log('30-Answer-----');

function truncateString(str, num) {
    return str.slice(0, num);
}
console.log(truncateString("Robin Singh", 4));

/*31) Write a JavaScript function to split a string and convert it into an array of words and returns it. */
console.log('31-Answer-----');

function stringToArray(str) {
    return str.split(" ");
}
console.log(stringToArray("Robin Singh"));

/* 32) Write a JavaScript function to convert a string in abbreviated form. */
console.log('32-Answer-----');

function abbrevName(str) {
    let newStrings = str.split(" ");
    return newStrings[0] + " " + newStrings[1].charAt(0) + ".";
}
console.log(abbrevName("Robin Singh"));

/* 33) Write a JavaScript function to hide email addresses to protect from unauthorized user. */
console.log('33-Answer-----');

function protectEmail(email) {
    let splitStr = email.split('@');
    return splitStr[0].slice(0, 5) + '...' + '@' + splitStr[1];
}
console.log(protectEmail("robin_singh@example.com"));

/* 34) Write a JavaScript function to parameterize a string. */
console.log('34-Answer-----');

function stringParameterize(str) {
    return str.replace(/ /gi, "-");
}
console.log(stringParameterize("Robin Singh from USA."));

/* 35) Write a JavaScript function to capitalize the first letter of a string. */
console.log('35-Answer-----');

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('js string exercises'));

/* 36) Write a JavaScript function to capitalize the first letter of each word in a string. */
console.log('36-Answer-----');

function capitalizeWords(str) {
    let capitalizeString = "";
    let newStrings = str.split(" ");
    for (let i = 0; i < newStrings.length; i++) {
        capitalizeString += newStrings[i].charAt(0).toUpperCase() + newStrings[i].slice(1) + " ";
    }
    return capitalizeString.trim();
}
console.log(capitalizeWords('js string exercises'));

/* 37) Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper 
case letters to lower case, and lower case letters to upper case. */
console.log('37-Answer-----');

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
console.log(swapcase('AaBbc'));

/* 38) Write a JavaScript function to convert a string into camel case. */
console.log('38-Answer-----');

function camelize(str) {
    let newString = "";
    let splitStrings = str.split(" ");
    for (let i = 0; i < splitStrings.length; i++) {
        newString += splitStrings[i].charAt(0).toUpperCase() + splitStrings[i].slice(1);
    }
    return newString;
}
console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));

/* 39)Write a JavaScript function to strip leading and trailing spaces from a string. */
console.log('39-Answer-----')

function strip(str) {
    return str.trim();
}
console.log(strip('w3resource '));
console.log(strip(' w3resource'));
console.log(strip(' w3resource '));

/* 40) Write a JavaScript function to find a word within a string. */
console.log('40-Answer-----');

function searchWord(str, word) {
    return str.search(word) >= 0;
}
console.log(searchWord('The quick brown fox', 'fox'));
console.log(searchWord('aa, bb, cc, dd, aa', 'ab'));