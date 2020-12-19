//write a function binarySearch(arr, x) which returns index if x is 
//found in arr otherwise -1
// assume that array is in sorted number
function binarySearchLeftLimit(arr, x){
    let index = binarySearch2(arr, x);
    if(index < 0){
        return index;
    }
    for(let i=index; i >= 0; i-- ){
        if(arr[i] < x ){
            return i+1;
        }
    }
    return 0;
}
function binarySearch1(arr, x, left, right){ // i
    if (left > right) {
        return -1;
    }
    let mid = Math.floor((left + right) / 2); // i
    if(arr[mid] === x){ 
        return mid;
    }else if(arr[mid] > x){ 
        return binarySearch1(arr, x, left, mid - 1);
    }else{
        return binarySearch1(arr, x, mid + 1, right);
    }
}
//console.log(binarySearch([1,2,3,4,5,6,7], 3));

console.log(binarySearchRightLimit([5,5,5,5,6,6,6,6], 6));
// 3

//console.log(binarySearch([1,2,3,4,5,6], 2));
//console.log(binarySearch([1,2,3], 5));
function binarySearch2(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) /2);
        if(arr[mid] === x){
            return mid;
        }else if(arr[mid] > x){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return -1;
}