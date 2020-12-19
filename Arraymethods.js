function printArr(){
    const arr = [1, 2, 3, 4, 5];
    for(let i=0; i<arr.length; i++){
        let num = arr[i];
     printNum(i,num);
    }
    arr.forEach(function (){})
}
printArr();

function printNum(index,num){
  console.log(index,num,num*num);
}

// function can be passed as an argument to another fun --> call back fun
function doPrint(callback){
    console.log('before');
    callback();
    console.log('after');
}
doPrint(function (){
    console.log('hello')
});
doPrint(function () {
    console.log('world');
});
let fxn = function () {
    console.log('hello world');
}
fxn();
doPrint(fxn);

//ex
function hello(){
    console.log('hello!');
}
hello();
doPrint(hello);

function printNumber(element, index, array) {
    if (index > 0) {
        array[index] = array[index - 1] * element;
    }
}

function main() {
    let arr = [2, 3, 4, 5];
    let found = false;
    arr.forEach(printNumber);
    arr.forEach(function(element) { console.log(element) });
    console.log(arr);
}