/* 1) Write a function isMultiple that accepts two non-negative number parameters a and b, 
and returns true if a is a multiple of b, and false otherwise. For example, the call of 
isMultiple(15, 5) would return true because 15 = 5 * 3. You may assume that a and b are 
non-negative integers and that b is not 0. */

function isMultiple(a,b){
    return a % b == 0;
}
console.log(isMultiple(15,5));
console.log(isMultiple(13,3));
console.log(isMultiple(5,15));

/* 2) Write a method named averageOf3 that accepts three integers as parameters and returns 
the average of the three integers as a real number. For example, the call of averageOf3(4, 7, 13) 
should return 8. */

function averageOf3(int1, int2, int3){
    return Math.round((int1+int2+int3)/3);
}
console.log(averageOf3(4,7,13));

/* 3) Write a function named sumUpTo that accepts an integer parameter n and returns the sum of the 
integers from 1 through n inclusive. For example, sumUpTo(5) returns 15, since 1 + 2 + 3 + 4 + 5 = 15. 
You may assume that the value of n is at least 1. */
function sumUpTo(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;

}
console.log(sumUpTo(5));

/* 4) Write a function named factorCount that accepts an integer (assumed to be positive) as its parameter 
and returns a count of its positive factors. For example, the eight factors of 24 are 1, 2, 3, 4, 6, 8, 12, 
and 24, so the call of factorCount(24) should return 8. */
function factorCount(int){
    let count = 0;
    for(let i=1; i<=int; i++){
        if(int % i == 0){
            count++;
        }
    }
    return count;
}
console.log(factorCount(24));

/* 5) Write a function named circleArea that accepts the radius of a circle as a parameter (as a real number) 
and returns the area of a circle with that radius. For example, the call of area(2.0) should return 12.566370614359172. 
You may assume that the radius passed is a non-negative number. */

function circleArea(radius){
    return Math.PI * radius * radius;
}
console.log(circleArea(2.0));

/* 6) Write a function named binaryToDecimal that accepts an integer parameter whose digits are meant to represent binary 
(base-2) digits, and returns an integer of that number's representation in decimal (base-10). For example, the call of 
binaryToDecimal(101011) should return 43. */
function binaryToDecimal(int){
    let sum = 0;
    let count = 0;
    while(int>0){
        let lastdigit = int % 10;
        int = Math.floor(int / 10);
        sum += lastdigit * Math.pow(2,count);
        count++;
    }
    return sum;
}
console.log(binaryToDecimal(101011));

/* 7) Write a function called fractionSum that accepts an integer parameter n and returns as a float the sum of the first 
n terms of the sequence:
1 + (1/2) + (1/3) + (1/4) + (1/5) + ... + (1/n) */
function fractionSum(n){
    let sum = 0;
    for(let i=1; i<=n ; i++){
        sum += 1/i;
    }
    return sum;
}
console.log(fractionSum(4));

/* 8) Write a function named repl that accepts a string and a number of repetitions as parameters and returns the string 
concatenated that many times. For example, the call repl("hello", 3) returns "hellohellohello". If the number of repetitions 
is 0 or less, an empty string is returned. */
function repl(string, numOfRepetitions){
    let newString = "";
    if(numOfRepetitions <= 0){
        return "";
    }else{
        for(let i=1; i<=numOfRepetitions; i++){
            newString += string;
        }
      return newString;
    }

}
console.log(repl("hello",0));
console.log(repl("hello",3));

/* 9) Write a function named season that takes two integers as parameters representing a month and day and that returns a 
string indicating the season for that month and day. Assume that months are specified as an integer between 1 and 12 
(1 for January, 2 for February, and so on) and that the day of the month is a number between 1 and 31. 

If the date falls between 12/16 and 3/15, you should return "Winter". If the date falls between 3/16 and 6/15, you should 
return "Spring". If the date falls between 6/16 and 9/15, you should return "Summer". And if the date falls between 9/16 and 
12/15, you should return "Fall". */

function season(month, day){
    
}

/* 10) Write a function named daysInMonth that accepts a month (an integer between 1 and 12) as a parameter and returns the 
number of days in that month in this year. For example, the call daysInMonth(9) would return 30 because September has 30 days. 
Assume that the code is not being run during a leap year (that February always has 28 days). */
function daysInMonth(month){
    if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
        return 31;
    }else if(month == 4 || month == 6 || month == 9 || month == 11){
        return 30;
    }
}
console.log(daysInMonth(9));

/* 11) Write a function called printRange that accepts two integers as arguments and prints the sequence of numbers between 
the two arguments, separated by spaces. Print an increasing sequence if the first argument is smaller than the second; otherwise, 
print a decreasing sequence. If the two numbers are the same, that number should be printed by itself. */
function printRange(int1, int2){
    if(int1 == int2){
        console.log(int1);
    }else if(int1 < int2){
        for(let i=int1; i<=int2; i++){
            console.log(i);
        }
    }else if(int1 > int2){
        for(let i=int1; i>=int2; i--){
            console.log(i);
        }
    }
}
printRange(56,45);

/* 12) Write a function named isEven that accepts an integer as parameter and returns true if its even number otherwise false. */
function isEven(int){
    return int % 2 == 0;
}
console.log(isEven(14));

/* 13) Write a function called printTriangleType that accepts three integer arguments representing the lengths of the sides of a 
triangle and prints what type of triangle it is. The three types are equilateral, isosceles, and scalene. An equilateral triangle 
has all three sides the same length, an isosceles triangle has two sides the same length, and a scalene triangle has three sides 
of different lengths. */
function printTriangleType(side1, side2, side3){
    if(side1 == side2 && side2 == side3){
        return "equilateral";
    }else if(side1 == side2 || side2 == side3 || side1 == side3){
        return "isosceles";
    }else{
        return "scalene";
    }
}
console.log(printTriangleType(3,3,3));

/* 14) Write a function called average that takes three integers as parameters and returns the average of the three integers. */
function average(int1, int2, int3){
    return (int1 + int2 + int3) / 3;
}
console.log(average(3,5,20));

/* 15) Write a function called stutter that accepts a string parameter and returns the String with its characters returns repeated 
twice. For example, stutter("Hello!") returns "HHeelllloo!!" */


/* 16)Write a function called wordCount that accepts a String as its parameter and returns the number of words in the String.A word 
is a sequence of one or more non-space characters (any character other than ' '). For example, the call wordCount("hello") should
return 1, the call wordCount("how are you?") should return 3, the call wordCount(" this     string has     wide       spaces ") 
should return 5, and the call wordCount(" ") should return 0. */
function wordCount(str){
    let count = 0;
    let splitString = str.split(" ");
    for(let i=0; i<splitString.length; i++){
        count++;
    }
    return count;

}
console.log(wordCount("hello"));
console.log(wordCount("how are you?"));
console.log(wordCount(" "));
console.log(wordCount(" this     string has     wide       spaces "));

/* 17) Write a function called quadrant that takes as parameters a pair of real numbers representing an (x, y) point and that 
returns the quadrant number for that point. Recall that quadrants are numbered as integers from 1 to 4 with the upper-right 
quadrant numbered 1 and the subsequent quadrants numbered in a counter-clockwise fashion.

Notice that the quadrant is determined by whether the x and y coordinates are positive or negative numbers. If a point falls on 
the x-axis or the y-axis, then the method should return 0. */
function quadrant(x,y){
    if(x>0 && y>0){
        return 1;
    }else if(x<0 && y>0){
        return 2;
    }else if(x<0 && y<0){
        return 3;
    }else if(x>0 && y<0){
        return 4;
    }else{
        return 0;
    }
}
console.log(quadrant(-1,4));

/* 18) Write a function named numUnique that takes three integers as parameters and that returns the number of unique integers 
among the three. For example, the call numUnique(18, 3, 4) should return 3 because the parameters have 3 different values. By 
contrast, the call numUnique(6, 7, 6) would return 2 because there are only 2 unique numbers among the three parameters: 6 and 7. */
function numUnique(num1, num2, num3){
    if(num1 == num2 && num2 == num3){
        return 1;
    }else if(num1 == num2 || num2 == num3 || num1 == num3){
        return 2;
    }else{
        return 3;
    }
}
console.log(numUnique(18,3,4));
console.log(numUnique(6,7,6));

/* 19) A "perfect number" is a positive integer that is the sum of all its proper factors (that is, factors including 1 but not 
    the number itself). The first two perfect numbers are 6 and 28, since 1+2+3=6 and 1+2+4+7+14=28.

a) Write a function isPerfectNumber that takes an integer as an argument and return true if its perfect number otherwise false.

b) Write a function perfectNumbers that takes an integer max as an argument and prints out all perfect numbers between 1 and max 
(inclusive). Use isPerfectNumber check if number is perfect or not. */

function isPerfectNumber(int){
    let sum = 0;
    for(let i=1; i<int; i++){
        if(int % i == 0){
            sum += i;
        }
    }

    return sum == int;
}
console.log(isPerfectNumber(6));

function perfectNumbers(max){
    for(let i=1; i<=max; i++){
        if(isPerfectNumber(i)){
            console.log(i);
        }
        
    }
}
perfectNumbers(28);

/* 20) Write a function called printAcronym that accepts a String as its parameter and prints the first letter of each word of 
the string as an acronym. For example, the call of printAcronym("Breath of the Wild") should print "BotW". You may assume that 
the string contains at least one word and does not have any surrounding whitespace at its start or end. */
function printAcronym(str){
    const splitString = str.split(" ");
    let acronym = "";
    for(let i=0; i<splitString.length; i++){
        acronym += splitString[i].charAt(0);
    }
    return acronym;
}
console.log(printAcronym("Breath of the Wild"));