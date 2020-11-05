/* 6) Write a function called largerAbsVal that takes two integers as parameters and returns the larger of the two absolute 
values. A call of largerAbsVal(11, 2) would return 11, and a call of largerAbsVal(4, -5) would return 5. */
function largerAbsVal(int1, int2) {
    return Math.max(Math.abs(int1), Math.abs(int2));
}
console.log(largerAbsVal(11, 2));
console.log(largerAbsVal(4, -5));
console.log("---------------------------");

/* 7) Write a function largestAbsVal that accepts three integers as parameters and returns the largest of their three absolute 
values. For example, a call of largestAbsVal(7, -2, -11) would return 11, and a call of largestAbsVal(-4, 5, 2) would return 5. */
function largestAbsVal(int1, int2, int3) {
    return Math.max(Math.abs(int1), Math.abs(int2), Math.abs(int3));
}
console.log(largestAbsVal(7, -2, -11));
console.log(largestAbsVal(-4, 5, 2));
console.log("---------------------------");

/* 8) Write a function called quadratic that solves quadratic equations and prints their roots. Recall that a quadratic equation 
is a polynomial equation in terms of a variable x of the form a*x^2 + b*x + c = 0. 
Your function should accept the coefficients a, b, and c as parameters and should print the roots of the equation. You may assume 
that the equation has two real roots, though mathematically this is not always the case. */
function quadratic(a, b, c) {
    let squareRoot = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    let firstRoot = ((-b) + squareRoot) / 2 * a;
    let secondRoot = ((-b) - squareRoot) / 2 * a;
    console.log(firstRoot);
    console.log(secondRoot);
}
quadratic(1, -7, 12);
quadratic(1, 3, 2);
console.log("---------------------------");

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
console.log(triangleArea(8, 5.2, 7.1));
console.log("---------------------------");

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
vertical("hey now");
console.log("---------------------------");

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
console.log(printReverse("hello there!"));
console.log("---------------------------");

/* 13) Write a function called processName that accepts a String as a parameter and then prints the name in reverse order 
(i.e., last name, first name). You may assume that only a first and last name will be given. */
function processName(name) {
    let strings = name.split(" ");
    return strings[1] + " " + strings[0];
}
console.log(processName('Krishna Bhadkoliya'));
console.log("---------------------------");

/* 14) Write a function called printIndexed that accepts a String as its parameter and prints the String's characters in 
order followed by their indexes in reverse order. For example, the call of printIndexed("ZELDA"); should print Z4E3L2D1A0 
to the console. */
function printIndexed(str) {
    let stringWithIndex = "";
    for (let i = 0; i < str.length; i++) {
        stringWithIndex += str.charAt(i) + (str.length - (i + 1));
    }
    return stringWithIndex;

}
console.log(printIndexed('ZELDA'));
console.log("---------------------------");

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
console.log(dominant(4, 9, 2));
console.log(dominant(5, 3, 7));
console.log("---------------------------");

/* 23) Write a function named allDigitsOdd that returns whether every digit of a given integer is odd. Your function should 
return true if the number consists entirely of odd digits and false if any of its digits are even. 0, 2, 4, 6, and 8 are even 
digits, and 1, 3, 5, 7, 9 are odd digits. */
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
console.log(allDigitsOdd(23569));
console.log("---------------------------");

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
console.log(hasAnOddDigit(468));
console.log(hasAnOddDigit(3468));
console.log("---------------------------");

/* 28) Write a JavaScript function to check whether an input is a string or not. */
function isString(input) {
    return typeof input == "string";
}
console.log(isString('W3School'));
console.log(isString(2));
console.log("---------------------------");

/* 29) Write a JavaScript function to check whether a string is blank or not. */
function isBlank(str) {
    return str.trim() == '';
}
console.log(isBlank(''));
console.log(isBlank('\n'));
console.log(isBlank('\t'));
console.log(isBlank(' '));
console.log(isBlank(' abc '));
console.log("29---------------------------");

/* 30) Write a JavaScript function to extract a specified number of characters from a string. */
function truncateString(str, num) {
    return str.slice(0, num);
}
console.log(truncateString("Robin Singh", 4));
console.log("---------------------------");

/*31) Write a JavaScript function to split a string and convert it into an array of words and returns it. */
function stringToArray(str) {
    return str.split(" ");
}
console.log(stringToArray("Robin Singh"));
console.log("---------------------------");

/* 32) Write a JavaScript function to convert a string in abbreviated form. */
function abbrevName(str) {
    let newStrings = str.split(" ");
    return newStrings[0] + " " + newStrings[1].charAt(0) + ".";
}
console.log(abbrevName("Robin Singh"));
console.log("---------------------------");

/* 34) Write a JavaScript function to parameterize a string. */
function stringParameterize(str) {
    return str.replace(/ /gi, "-");
}
console.log(stringParameterize("Robin Singh from USA."));
console.log("---------------------------");

/* 35) Write a JavaScript function to capitalize the first letter of a string. */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('js string exercises'));
console.log("---------------------------");

/* 36) Write a JavaScript function to capitalize the first letter of each word in a string. */
function capitalizeWords(str) {
    let capitalizeString = "";
    let newStrings = str.split(" ");
    for (let i = 0; i < newStrings.length; i++) {
        capitalizeString += newStrings[i].charAt(0).toUpperCase() + newStrings[i].slice(1) + " ";

    }
    return capitalizeString.trim();

}
console.log(capitalizeWords('js string exercises'));
console.log("---------------------------");

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
console.log(swapcase('AaBbc'));
console.log("---------------------------");


/* 38) Write a JavaScript function to convert a string into camel case. */
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
console.log("---------------------------");

/* 40) Write a JavaScript function to find a word within a string. */
function searchWord(str, word) {
    return str.search(word) >= 0;
}
console.log(searchWord('The quick brown fox', 'fox'));
console.log(searchWord('aa, bb, cc, dd, aa', 'ab'));