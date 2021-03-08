function longest_palindrome(str){
    let arr = [];
    for(let i=0; i<str.length; i++){
        for(let j=i+1; j<=str.length; j++){
            arr.push(str.substring(i, j));
        }
    }
    let longestStr = "";
    for(let i=0; i<arr.length; i++){
        if(isPalindrome(arr[i])){
            if(longestStr.length < arr[i].length){
                longestStr = arr[i];
            }
        }
    }
    return longestStr;
}
function isPalindrome(str){
    let k = str.length - 1;
    for(let i=0; i<str.length; i++){
        if(str[i] !== str[k]){
            return false;
        }
        k--;
    }
    return true;
}

console.log(longest_palindrome('helloabayuh'));